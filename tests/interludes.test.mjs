// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { interludeList, loadInterludes } from "../netlify/lib/interludes.mts";
import { setDoc, sync } from "../netlify/lib/table.mts";
import { checkDoc, validInterlude } from "../netlify/lib/rules.mts";

function fakeStore() {
  const m = new Map(); let n = 0;
  return {
    m,
    async list(o = {}) { return { blobs: [...m].filter(([k]) => k.startsWith(o.prefix || "")).map(([key, v]) => ({ key, etag: v.etag })) }; },
    async get(k) { return m.has(k) ? structuredClone(m.get(k).data) : null; },
    async setJSON(k, d) { m.set(k, { data: structuredClone(d), etag: '"e' + ++n + '"' }); },
    async delete(k) { m.delete(k); },
  };
}
const sam = { id: "sam", isDm: true }, ann = { id: "ann", isDm: false }, bob = { id: "bob", isDm: false };
const result = {
  character: "katy",
  title: "The Gift at the Ford",
  path: ["Took the ferryman's coin", "Said nothing to Gerda"],
  ending: "kept-the-coin",
  echo: { id: "coin", text: "Katy has an old coin that the ferryman will recognise.", used: false },
  lore: ["The ford is watched at night."],
  finishedAt: 1000,
};
const doc = (r = result, id = "s10-katy") => ({ done: { [id]: r } });

test("a finished interlude is checked strictly", () => {
  assert.ok(validInterlude(result));
  assert.ok(validInterlude({ ...result, verse: ["Under the ford", "the coin sleeps"], fight: { won: true, rounds: 3 } }));
  assert.ok(validInterlude({ ...result, path: [], lore: [] }));
  // unknown fields, here and inside echo or fight
  assert.ok(!validInterlude({ ...result, secret: 1 }));
  assert.ok(!validInterlude({ ...result, echo: { ...result.echo, extra: true } }));
  assert.ok(!validInterlude({ ...result, fight: { won: true, rounds: 3, hp: 2 } }));
  // missing or wrong types
  for (const k of ["character", "title", "path", "ending", "echo", "lore", "finishedAt"]) {
    const r = { ...result }; delete r[k];
    assert.ok(!validInterlude(r), "missing " + k);
  }
  assert.ok(!validInterlude({ ...result, character: "" }));
  assert.ok(!validInterlude({ ...result, echo: { ...result.echo, used: "no" } }));
  assert.ok(!validInterlude({ ...result, fight: { won: true, rounds: Infinity } }));
  assert.ok(!validInterlude({ ...result, finishedAt: "today" }));
  assert.ok(!validInterlude({ ...result, path: [1, 2] }));
  // limits
  assert.ok(!validInterlude({ ...result, character: "k".repeat(25) }));
  assert.ok(!validInterlude({ ...result, title: "t".repeat(81) }));
  assert.ok(!validInterlude({ ...result, ending: "e".repeat(41) }));
  assert.ok(!validInterlude({ ...result, path: Array(41).fill("x") }));
  assert.ok(!validInterlude({ ...result, path: ["x".repeat(121)] }));
  assert.ok(!validInterlude({ ...result, echo: { ...result.echo, text: "x".repeat(301) } }));
  assert.ok(!validInterlude({ ...result, echo: { ...result.echo, id: "x".repeat(41) } }));
  assert.ok(!validInterlude({ ...result, lore: Array(9).fill("x") }));
  assert.ok(!validInterlude({ ...result, lore: ["x".repeat(1001)] }));
  assert.ok(!validInterlude({ ...result, verse: Array(5).fill("x") }));
  assert.ok(!validInterlude({ ...result, verse: ["x".repeat(201)] }));
});

test("the interludes doc is {done: {<interlude id>: result}} and nothing else", () => {
  const check = (d) => checkDoc(ann, "interludes", "ann", d).ok;
  assert.ok(check(doc()));
  assert.ok(check({ done: {} }));
  assert.ok(check({ done: { "s10-katy": result, "s10-together": { ...result, title: "Together" } } }));
  assert.ok(!check({}));
  assert.ok(!check({ done: [] }));
  assert.ok(!check({ ...doc(), extra: 1 }));
  assert.ok(!check(doc(result, "S10-Katy")));
  assert.ok(!check(doc(result, "s10/katy")));
  assert.ok(!check(doc(result, "x".repeat(33))));
  assert.ok(!check(doc({ ...result, lore: "one line" })));
});

test("players write only their own interludes; only they and Sam read them", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "interludes", "ann", doc())).status, 200);
  assert.equal((await setDoc(s, bob, "interludes", "ann", doc())).status, 403);
  assert.equal((await setDoc(s, ann, "interludes", "ann", doc({ ...result, ending: 7 }))).status, 400);
  const full = { ...result, lore: Array(8).fill("x".repeat(1000)) }; // about 8 KB each
  const tooBig = { done: Object.fromEntries(Array.from({ length: 9 }, (_, k) => ["i" + k, full])) };
  assert.equal((await setDoc(s, ann, "interludes", "ann", tooBig)).status, 413);
  assert.deepEqual(Object.keys((await sync(s, bob)).body.interludes), []);
  assert.deepEqual(Object.keys((await sync(s, ann)).body.interludes), ["ann"]);
  assert.deepEqual(Object.keys((await sync(s, sam)).body.interludes), ["ann"]);
});

test("a player may later mark the echo as used by writing the doc again", async () => {
  const s = fakeStore();
  await setDoc(s, ann, "interludes", "ann", doc());
  assert.equal((await setDoc(s, ann, "interludes", "ann", doc({ ...result, echo: { ...result.echo, used: true } }))).status, 200);
  assert.equal((await s.get("interludes/ann")).done["s10-katy"].echo.used, true);
});

test("votes for the shared interlude are stored as option ids and seen by the party", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "votes", "ann", { s9: "ravine", "i10-gift": "coin", "i10-speak": "gerda" })).status, 200);
  assert.equal((await sync(s, bob)).body.votes.ann["i10-gift"], "coin");
});

test("the mirror list names characters, never account ids, oldest first", async () => {
  const s = fakeStore();
  await s.setJSON("players/ann", { character: "katy", at: 1 });
  await s.setJSON("players/bob", { character: "stig", at: 2 });
  await s.setJSON("interludes/ann", { done: { "s10-katy": { ...result, finishedAt: 300 }, "s10-together": { ...result, title: "Together", finishedAt: 100 } } });
  await s.setJSON("interludes/bob", { done: { "s10-stig": { ...result, character: "stig", finishedAt: 200 } } });
  await s.setJSON("interludes/zed", { done: { "s10-saphira": { ...result, character: "saphira", finishedAt: 400 } } });
  await s.setJSON("answers/ann", { s9: { fun: 5 } });
  const { docs, characters } = await loadInterludes(s);
  const list = interludeList(docs, characters);
  assert.deepEqual(list.map((e) => [e.account, e.id]), [["katy", "s10-together"], ["stig", "s10-stig"], ["katy", "s10-katy"], ["someone", "s10-saphira"]]);
  assert.equal(list[0].title, "Together");
  assert.deepEqual(list[1].echo, result.echo);
  const text = JSON.stringify(list);
  for (const acct of ["ann", "bob", "zed"]) assert.ok(!text.includes(`"${acct}"`), acct + " leaked");
});
