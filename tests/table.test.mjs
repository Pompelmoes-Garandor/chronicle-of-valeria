// Run with: node --test tests/*.test.mjs   (Node 22.18 or newer, which runs the .mts files as they are)
// Checks the table rules against an in-memory stand-in for a Netlify Blobs store.
import { test } from "node:test";
import assert from "node:assert/strict";
import { sync, setDoc, deleteDoc } from "../netlify/lib/table.mts";

function fakeStore() {
  const m = new Map();
  let n = 0;
  return {
    m,
    async list(o = {}) {
      return { blobs: [...m].filter(([k]) => k.startsWith(o.prefix || "")).map(([key, v]) => ({ key, etag: v.etag })) };
    },
    async get(k) {
      return m.has(k) ? structuredClone(m.get(k).data) : null;
    },
    async setJSON(k, data) {
      m.set(k, { data: structuredClone(data), etag: '"e' + ++n + '"' });
    },
    async delete(k) {
      m.delete(k);
    },
  };
}
const sam = { id: "sam", isDm: true };
const ann = { id: "ann", isDm: false };
const bob = { id: "bob", isDm: false };

test("a player claims a character once, and it can't be taken twice", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "players", "ann", { character: "katy", at: 1 })).status, 200);
  assert.equal((await setDoc(s, bob, "players", "bob", { character: "katy", at: 2 })).status, 409);
  assert.equal((await setDoc(s, ann, "players", "ann", { character: "stig", at: 3 })).status, 409);
  assert.equal((await setDoc(s, ann, "players", "ann", { character: "katy", at: 4 })).status, 200);
});

test("nobody writes someone else's doc, not even the DM", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, bob, "pins", "ann", { pins: [] })).status, 403);
  assert.equal((await setDoc(s, sam, "answers", "ann", {})).status, 403);
});

test("only the DM resets a character", async () => {
  const s = fakeStore();
  await setDoc(s, ann, "players", "ann", { character: "katy" });
  assert.equal((await deleteDoc(s, ann, "players", "ann")).status, 403);
  assert.equal((await deleteDoc(s, sam, "players", "ann")).status, 200);
  assert.equal((await setDoc(s, ann, "players", "ann", { character: "stig" })).status, 200);
});

test("answers reach only their author and the DM", async () => {
  const s = fakeStore();
  await setDoc(s, ann, "answers", "ann", { s9: { note: "for Sam only" } });
  await setDoc(s, bob, "answers", "bob", { s9: { note: "bob's" } });
  await setDoc(s, ann, "votes", "ann", { s9: "ravine" });
  const bobView = (await sync(s, bob)).body;
  assert.deepEqual(Object.keys(bobView.answers), ["bob"]);
  assert.deepEqual(Object.keys(bobView.votes), ["ann"]);
  const samView = (await sync(s, sam)).body;
  assert.deepEqual(Object.keys(samView.answers).sort(), ["ann", "bob"]);
});

test("sync answers 304 when nothing visible changed", async () => {
  const s = fakeStore();
  await setDoc(s, ann, "pins", "ann", { pins: [{ id: 1, text: "a" }] });
  const first = await sync(s, bob);
  assert.equal(first.status, 200);
  assert.equal((await sync(s, bob, first.etag)).status, 304);
  await setDoc(s, sam, "answers", "sam", { s9: {} }); // hidden from bob: his view doesn't change
  assert.equal((await sync(s, bob, first.etag)).status, 304);
  await setDoc(s, ann, "pins", "ann", { pins: [{ id: 2, text: "b" }] });
  const next = await sync(s, bob, first.etag);
  assert.equal(next.status, 200);
  assert.deepEqual(next.body.pins.ann, { pins: [{ id: 2, text: "b" }] });
});

test("junk is refused", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "secrets", "ann", {})).status, 404);
  assert.equal((await setDoc(s, ann, "pins", "../ann", {})).status, 404);
  assert.equal((await setDoc(s, ann, "pins", "ann", [1, 2])).status, 400);
  assert.equal((await setDoc(s, ann, "pins", "ann", { big: "x".repeat(70000) })).status, 413);
  assert.equal((await setDoc(s, ann, "players", "ann", {})).status, 400);
});

test("a note without text can't break the map for everyone", async () => {
  const s = fakeStore();
  assert.equal((await setDoc(s, ann, "pins", "ann", { pins: [{ lon: 1, lat: 2 }] })).status, 400);
  assert.equal((await setDoc(s, ann, "answers", "ann", { missed: [{ text: 5 }] })).status, 400);
  assert.equal((await setDoc(s, ann, "answers", "ann", { missed: [{ text: "Gerda", lon: 1.5, lat: -3 }] })).status, 200);
  assert.equal((await setDoc(s, ann, "answers", "ann", { s9: { stars: 5 } })).status, 200);
});
