// The Steward's bonus level (Protocol Zero): the script as the page carries it (BONUS_TEXT in source/chronicle.html,
// made from source/interludes/bonus-steward.md by build-interludes.py), checked against the engine's hand-overs.
// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGE = readFileSync(path.join(ROOT, "source", "chronicle.html"), "utf8");
function block(start, end) {
  const a = PAGE.indexOf(start), b = PAGE.indexOf(end, a);
  assert.ok(a >= 0 && b > a, `can't find ${start} in chronicle.html`);
  return PAGE.slice(a + start.length, b);
}
const TEXT = JSON.parse(block("const BONUS_TEXT=", ";\n/* BONUS_TEXT:end */"));
const T = TEXT["bonus-steward"];
const HUBS = new Function("return " + block("const SW_HUBS=", ";\nconst SW_AFTER="))();
const AFTER = new Function("return " + block("const SW_AFTER=", ";\n"))();
const HOOKS = new Set([...Object.keys(AFTER), "end"]);

test("the level's text is in the page", () => {
  assert.ok(T, "BONUS_TEXT has bonus-steward");
  assert.ok(T.title && T.passages[T.first], "a title and a first passage");
});

test("every choice goes to a passage or to a part of the game the engine knows", () => {
  for (const [pid, p] of Object.entries(T.passages)) {
    assert.ok(p.html && p.html.trim(), `${pid} has text`);
    assert.ok(p.opts.length, `${pid} has a choice`);
    for (const o of p.opts) {
      if (o.go.startsWith("@")) assert.ok(HOOKS.has(o.go.slice(1)), `${pid} → ${o.go} is a game hook`);
      else assert.ok(T.passages[o.go], `${pid} → ${o.go} exists`);
    }
  }
  for (const [k, go] of Object.entries(AFTER)) assert.ok(T.passages[go], `after @${k} the story goes on at ${go}`);
});

test("the two hubs list real rooms, and every passage can be reached", () => {
  for (const [hid, hub] of Object.entries(HUBS)) {
    assert.ok(T.passages[hid] && T.passages[hub.then], `${hid} and what follows it exist`);
    for (const r of hub.rooms) assert.ok(T.passages[r], `${hid} room ${r} exists`);
  }
  const seen = new Set(), todo = [T.first];
  while (todo.length) {
    const id = todo.pop(); if (!id || seen.has(id)) continue; seen.add(id);
    const p = T.passages[id];
    for (const o of p.opts) todo.push(o.go.startsWith("@") ? AFTER[o.go.slice(1)] : o.go);
    if (HUBS[id]) todo.push(HUBS[id].then);
  }
  for (const id of Object.keys(T.passages)) assert.ok(seen.has(id), `${id} can be reached`);
});
