// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { decide, keyOf, openProposals, publicAccepted } from "../netlify/lib/proposals.mts";
import { setDoc, sync } from "../netlify/lib/table.mts";
import { validProposal } from "../netlify/lib/rules.mts";

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
const tagP = { id: "a1", kind: "tags", place: "inn", tags: ["tavern", "blood guild"], at: 1 };
const noteP = { id: "b2", kind: "note", place: "inn", text: "Gerda runs the inn now.", at: 2 };

test("a proposal is checked before it is saved", () => {
  assert.ok(validProposal(tagP));
  assert.ok(validProposal(noteP));
  assert.ok(!validProposal({ ...tagP, kind: "delete" }));
  assert.ok(!validProposal({ ...noteP, text: "   " }));
  assert.ok(!validProposal({ ...tagP, place: "../inn" }));
  assert.ok(!validProposal({ ...tagP, tags: Array(15).fill("x") }));
});

test("players write their own proposals; only they and Sam read them; nobody writes decisions", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "proposals", "ann", { list: [tagP] })).status, 200);
  assert.equal((await setDoc(s, bob, "proposals", "ann", { list: [] })).status, 403);
  assert.equal((await setDoc(s, ann, "proposals", "ann", { list: [{ ...tagP, kind: "x" }] })).status, 400);
  assert.equal((await setDoc(s, sam, "accepted", "lore", { items: {} })).status, 403);
  assert.deepEqual(Object.keys((await sync(s, bob)).body.proposals), []);
  assert.deepEqual(Object.keys((await sync(s, sam)).body.proposals), ["ann"]);
});

test("accept all takes every open proposal; decided ones stay decided", () => {
  const props = { ann: { list: [tagP, noteP] }, bob: { list: [{ ...noteP, id: "c3", at: 3 }] } };
  const chars = { ann: "katy", bob: "stig" };
  let open = openProposals(props, {}, chars);
  assert.deepEqual(open.map((o) => o.key), ["ann.a1", "ann.b2", "bob.c3"]);
  assert.equal(open[0].by, "katy");
  const r = decide(open, {}, null, "accepted", 100);
  assert.equal(r.count, 3);
  assert.deepEqual(openProposals(props, r.decided, chars), []);
  assert.deepEqual(r.decided[keyOf("ann", "a1")].tags, ["tavern", "blood guild"]);
});

test("one proposal can be rejected with a note, the rest stays open", () => {
  const open = openProposals({ ann: { list: [tagP, noteP] } }, {}, { ann: "katy" });
  const r = decide(open, {}, ["ann.b2"], "rejected", 100, "Not yet, the party hasn't learned that.");
  assert.equal(r.count, 1);
  assert.equal(r.decided["ann.b2"].status, "rejected");
  assert.deepEqual(openProposals({ ann: { list: [tagP, noteP] } }, r.decided, { ann: "katy" }).map((o) => o.key), ["ann.a1"]);
});

test("the public list has accepted changes only, without account ids", () => {
  const open = openProposals({ ann: { list: [tagP, noteP] } }, {}, { ann: "katy" });
  let d = decide(open, {}, ["ann.a1"], "accepted", 100).decided;
  d = decide(open, d, ["ann.b2"], "rejected", 101).decided;
  const pub = publicAccepted(d);
  assert.equal(pub.length, 1);
  assert.equal(pub[0].by, "katy");
  assert.ok(!("account" in pub[0]));
});

test("Sam's own proposals are marked as the DM's", () => {
  const open = openProposals({ sam: { list: [tagP] } }, {}, {}, ["sam"]);
  assert.equal(open[0].by, "dm");
});

test("a sheet amendment is a proposal too, and reaches the public list with its sections", () => {
  const sheetP = { id: "s1", kind: "sheet", sheet: "katy", edits: { flavor: { v: "Owes Gerda a favour.", ts: 5, by: "katy", b: 9 } }, at: 4 };
  assert.ok(validProposal(sheetP));
  assert.ok(!validProposal({ ...sheetP, edits: { secrets: { v: 1 } } }));
  assert.ok(!validProposal({ ...sheetP, edits: {} }));
  assert.ok(!validProposal({ ...sheetP, sheet: "../katy" }));
  assert.ok(!validProposal({ ...sheetP, edits: { flavor: { v: "x".repeat(17000) } } }));
  const open = openProposals({ ann: { list: [sheetP] } }, {}, { ann: "katy" });
  const pub = publicAccepted(decide(open, {}, null, "accepted", 100).decided);
  assert.equal(pub[0].kind, "sheet");
  assert.equal(pub[0].sheet, "katy");
  assert.deepEqual(pub[0].edits.flavor.v, "Owes Gerda a favour.");
  assert.equal(pub[0].place, undefined);
});
