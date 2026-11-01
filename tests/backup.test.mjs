// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { snapshot, takeBackup, toPrune, backupKey } from "../netlify/lib/backup.mts";

function fakeStore(init = {}) {
  const m = new Map(Object.entries(init).map(([k, v]) => [k, { data: structuredClone(v), etag: '"' + k + '"' }]));
  return {
    m,
    async list(o = {}) { return { blobs: [...m].filter(([k]) => k.startsWith(o.prefix || "")).map(([key, v]) => ({ key, etag: v.etag })) }; },
    async get(k) { return m.has(k) ? structuredClone(m.get(k).data) : null; },
    async setJSON(k, d) { m.set(k, { data: structuredClone(d), etag: '"x"' }); },
    async delete(k) { m.delete(k); },
  };
}

test("a snapshot holds every record, sorted by key", async () => {
  const s = fakeStore({ "pins/b": { pins: [] }, "players/a": { character: "katy" }, "answers/a": { s9: {} } });
  const snap = await snapshot(s, new Date("2026-11-02T03:17:00Z"));
  assert.equal(snap.count, 3);
  assert.equal(snap.takenAt, "2026-11-02T03:17:00.000Z");
  assert.deepEqual(Object.keys(snap.records), ["answers/a", "pins/b", "players/a"]);
  assert.deepEqual(snap.records["players/a"], { character: "katy" });
});

test("only the newest 8 weekly copies are kept", () => {
  const keys = Array.from({ length: 10 }, (_, i) => `2026-${String(i + 1).padStart(2, "0")}-01.json`);
  assert.deepEqual(toPrune(keys), ["2026-01-01.json", "2026-02-01.json"]);
  assert.deepEqual(toPrune(keys.slice(0, 3)), []);
  assert.deepEqual(toPrune(["notes.txt", ...keys]), ["2026-01-01.json", "2026-02-01.json"]);
});

test("taking a backup stores it under the date and prunes the oldest", async () => {
  const table = fakeStore({ "players/a": { character: "katy" } });
  const old = Object.fromEntries(Array.from({ length: 8 }, (_, i) => [`2026-0${i + 1}-01.json`, {}]));
  const backups = fakeStore(old);
  const now = new Date("2026-11-02T03:17:00Z");
  const r = await takeBackup(table, backups, now);
  assert.equal(r.key, backupKey(now));
  assert.equal(r.key, "2026-11-02.json");
  assert.deepEqual(r.removed, ["2026-01-01.json"]);
  assert.equal(backups.m.size, 8);
  assert.deepEqual((await backups.get("2026-11-02.json")).records, { "players/a": { character: "katy" } });
});

test("a backup leaves the player data untouched", async () => {
  const table = fakeStore({ "players/a": { character: "katy" } });
  await takeBackup(table, fakeStore());
  assert.deepEqual(await table.get("players/a"), { character: "katy" });
});
