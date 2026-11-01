// Reads and writes the table data in one Blobs store, one record per key: "<collection>/<account id>".
// Takes the store as an argument, so tests can pass an in-memory stand-in (tests/table.test.mjs).
//
// Blobs has no transactions (last write wins). That is safe here because every account writes only
// its own keys; the one cross-account check (a character can be claimed once) reads first, and a
// rare double claim in the same second is something Sam can reset from the DM view.

import { createHash } from "node:crypto";
import { COLLECTIONS, type Collection, type Viewer, canDelete, canRead, canWrite, checkDoc, isCollection, validId } from "./rules.mts";

export interface BlobStore {
  list(opts?: { prefix?: string }): Promise<{ blobs: { key: string; etag: string }[] }>;
  get(key: string, opts: { type: "json" }): Promise<unknown>;
  setJSON(key: string, value: unknown): Promise<unknown>;
  delete(key: string): Promise<unknown>;
}

export type Result = { status: number; body?: unknown; etag?: string };

// Warm function instances keep what they have read, so an unchanged record is not fetched twice.
const cache = new Map<string, { etag: string; data: unknown }>();

function split(key: string): [string, string] | null {
  const i = key.indexOf("/");
  return i > 0 ? [key.slice(0, i), key.slice(i + 1)] : null;
}

/** Everything this viewer may see, as {players:{id:doc}, pins:{…}, votes:{…}, answers:{…}}. */
export async function sync(store: BlobStore, v: Viewer, ifNoneMatch?: string | null): Promise<Result> {
  const { blobs } = await store.list();
  const visible = blobs.filter((b) => {
    const p = split(b.key);
    return p && isCollection(p[0]) && validId(p[1]) && canRead(v, p[0] as Collection, p[1]);
  });
  const etag = '"' + createHash("sha1").update(visible.map((b) => b.key + "@" + b.etag).sort().join("|")).digest("hex").slice(0, 20) + '"';
  if (ifNoneMatch && ifNoneMatch === etag) return { status: 304, etag };

  const out: Record<string, Record<string, unknown>> = Object.fromEntries(COLLECTIONS.map((c) => [c, {}]));
  await Promise.all(
    visible.map(async (b) => {
      let hit = cache.get(b.key);
      if (!hit || hit.etag !== b.etag) {
        const data = await store.get(b.key, { type: "json" });
        if (data == null) return; // deleted between list and get
        hit = { etag: b.etag, data };
        cache.set(b.key, hit);
      }
      const [col, id] = split(b.key)!;
      out[col][id] = hit.data;
    }),
  );
  return { status: 200, body: out, etag };
}

async function readCollection(store: BlobStore, col: Collection): Promise<Record<string, unknown>> {
  const { blobs } = await store.list({ prefix: col + "/" });
  const docs: Record<string, unknown> = {};
  await Promise.all(
    blobs.map(async (b) => {
      const data = await store.get(b.key, { type: "json" });
      if (data != null) docs[split(b.key)![1]] = data;
    }),
  );
  return docs;
}

export async function setDoc(store: BlobStore, v: Viewer, col: string, id: string, doc: unknown): Promise<Result> {
  if (!isCollection(col) || !validId(id)) return { status: 404, body: { error: "No such doc" } };
  if (!canWrite(v, col, id)) return { status: 403, body: { error: "You can only change your own data" } };
  let ctx = {};
  if (col === "players") {
    const others = await readCollection(store, "players");
    ctx = { existing: others[id], others };
  }
  const check = checkDoc(v, col, id, doc, ctx);
  if (!check.ok) return { status: check.status, body: { error: check.error } };
  await store.setJSON(col + "/" + id, doc);
  return { status: 200, body: { ok: true } };
}

export async function deleteDoc(store: BlobStore, v: Viewer, col: string, id: string): Promise<Result> {
  if (!isCollection(col) || !validId(id)) return { status: 404, body: { error: "No such doc" } };
  if (!canDelete(v, col, id)) return { status: 403, body: { error: "Only the DM can do that" } };
  await store.delete(col + "/" + id);
  cache.delete(col + "/" + id);
  return { status: 200, body: { ok: true } };
}
