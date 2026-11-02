// The interlude scripts, as the page carries them (INTERLUDE_TEXT in source/chronicle.html, made from
// source/interludes/*.md by build-interludes.py). Run with: node --test tests/*.test.mjs (needs python3).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGE = readFileSync(path.join(ROOT, "source", "chronicle.html"), "utf8");

function block(start, end) {
  const a = PAGE.indexOf(start), b = PAGE.indexOf(end, a);
  assert.ok(a >= 0 && b > a, `can't find ${start} in chronicle.html`);
  return PAGE.slice(a + start.length, b);
}
const TEXT = JSON.parse(block("const INTERLUDE_TEXT=", ";\n/* INTERLUDE_TEXT:end */"));
// the engine's list (ids, endings by passage, jumps): plain data plus small arrow functions, so it evaluates on its own
const INTERLUDES = new Function("return " + block("const INTERLUDES=", ";\nconst IBY="))();
const RAW = JSON.stringify(TEXT);

test("the text in the page matches the scripts (build-interludes.py --check)", () => {
  try { execFileSync("python3", [path.join(ROOT, "source", "interludes", "build-interludes.py"), "--check"], { stdio: "pipe" }); }
  catch (e) { assert.fail("INTERLUDE_TEXT is out of date: run python3 source/interludes/build-interludes.py" + (e.stderr ? "\n" + e.stderr : "")); }
});

test("every interlude in the engine has its text, and the other way round", () => {
  assert.deepEqual(Object.keys(TEXT).sort(), INTERLUDES.map((i) => i.id).sort());
});

for (const I of INTERLUDES) {
  const T = TEXT[I.id];
  test(`${I.id}: every choice leads somewhere`, () => {
    assert.ok(T.title && T.title.length <= 80, "a title of at most 80 characters (the server's limit)");
    assert.ok(T.passages[T.first], "the first passage exists");
    for (const [pid, p] of Object.entries(T.passages)) {
      assert.ok(p.html && p.html.trim(), `${pid} has text`);
      assert.ok(p.opts.length, `${pid} has at least one choice`);
      for (const o of p.opts) {
        assert.ok(o.t && o.t.length <= 120, `${pid}: a choice's label is at most 120 characters (it goes into the path): ${o.t}`);
        if (o.go === "@end") continue;
        if (o.go.startsWith("@")) {
          const j = I.jump && I.jump[o.go.slice(1)];
          assert.equal(typeof j, "function", `${pid} jumps to ${o.go}, which the engine doesn't resolve`);
          continue;
        }
        assert.ok(T.passages[o.go], `${pid} points at ${o.go}, which isn't a passage`);
      }
    }
    for (const [k, fn] of Object.entries(I.jump || {})) {
      for (const seen of [[], ...Object.keys(T.passages).map((p) => [p])]) {
        const to = fn(seen);
        assert.ok(T.passages[to], `the jump ${k} can land on ${to}, which isn't a passage`);
      }
    }
    if (I.votes) for (const pid of Object.keys(I.votes)) assert.ok(T.passages[pid]?.opts.length > 1, `the vote at ${pid} needs a passage with choices`);
    if (I.verse) assert.ok(T.passages[I.verse], `the verse passage ${I.verse} exists`);
  });

  test(`${I.id}: every way through ends with an Echo and lore`, () => {
    const ends = Object.entries(T.ends);
    assert.ok(ends.length, "at least one ending");
    for (const [k, e] of ends) {
      assert.ok(e.html && e.html.trim(), `ending ${k} has text`);
      assert.ok(e.echo && e.echo.name && e.echo.text, `ending ${k} has an Echo`);
      assert.ok((e.echo.name + ": " + e.echo.text).length <= 300, `ending ${k}: the Echo fits the server's 300 characters`);
      assert.ok(e.lore && e.lore.trim(), `ending ${k} has a line of lore for Sam`);
      assert.ok(e.lore.length <= 1000, `ending ${k}: the lore fits the server's 1000 characters`);
      assert.ok((I.id + "-" + k).length <= 40, `ending ${k}: the Echo id fits 40 characters`);
    }
    for (const [pid, ek] of Object.entries(I.endBy)) {
      assert.ok(T.passages[pid], `endBy names ${pid}, which isn't a passage`);
      assert.ok(T.ends[ek], `endBy sends ${pid} to ending ${ek}, which doesn't exist`);
    }
    for (const k of Object.keys(T.ends)) assert.ok(Object.values(I.endBy).includes(k), `ending ${k} can't be reached (no passage in endBy leads to it)`);
    // every way to the end passes a passage that picks the ending: walk from the start without entering one
    const next = (pid) => T.passages[pid].opts.flatMap((o) => o.go === "@end" ? ["@end"]
      : o.go.startsWith("@") ? [...new Set([[], ...Object.keys(T.passages).map((p) => [p])].map((s) => I.jump[o.go.slice(1)](s)))] : [o.go]);
    const seen = new Set(), todo = [T.first];
    while (todo.length) { const pid = todo.pop(); if (seen.has(pid)) continue; seen.add(pid);
      assert.notEqual(pid, "@end", "a way through reaches the end without passing a passage that picks the ending");
      if (!I.endBy[pid]) todo.push(...next(pid)); }
    const all = new Set(), stack = [T.first];
    while (stack.length) { const pid = stack.pop(); if (all.has(pid) || pid === "@end") continue; all.add(pid); stack.push(...next(pid)); }
    for (const pid of Object.keys(T.passages)) assert.ok(all.has(pid), `passage ${pid} can't be reached from the start`);
  });
}

test("nothing meant for Sam is in the players' text", () => {
  assert.ok(!RAW.includes("[SAM?"), "a [SAM? …] question is in the text");
  assert.ok(!/for Sam\b/i.test(RAW.replace(/Sent to Sam/g, "")), 'a note "for Sam" is in the text');
  assert.ok(!/DM note|\bTODO\b|\bTBD\b/i.test(RAW), "a DM note or TODO is in the text");
});

test("every player-facing passage is clean HTML from the script (no raw markdown left)", () => {
  for (const [id, T] of Object.entries(TEXT))
    for (const [pid, p] of [...Object.entries(T.passages), ...Object.entries(T.ends)])
      assert.ok(!/\*\*|^#|\(go to /m.test(p.html), `${id} ${pid} still has script markup`);
});
