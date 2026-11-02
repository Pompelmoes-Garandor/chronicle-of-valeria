// Backups of the table data. Pure: takes a store as an argument, so tests pass an in-memory one.
// A backup is one JSON document holding every record of the table store at that moment.
import type { BlobStore } from "./table.mts";

export type Snapshot = { takenAt: string; count: number; records: Record<string, unknown> };

/** Every record in the store, keyed as stored ("pins/<account>", …). */
export async function snapshot(store: BlobStore, now = new Date()): Promise<Snapshot> {
  const { blobs } = await store.list();
  const records: Record<string, unknown> = {};
  await Promise.all(
    blobs.map(async (b) => {
      const data = await store.get(b.key, { type: "json" });
      if (data != null) records[b.key] = data;
    }),
  );
  const sorted = Object.fromEntries(Object.keys(records).sort().map((k) => [k, records[k]]));
  return { takenAt: now.toISOString(), count: Object.keys(sorted).length, records: sorted };
}

/** Backup keys are the date they were taken ("2026-11-02.json"); sorting them sorts by age. */
export const backupKey = (now: Date) => now.toISOString().slice(0, 10) + ".json";

/** Which backup keys to delete so only the newest `keep` remain. */
export function toPrune(keys: string[], keep = 8): string[] {
  const dated = keys.filter((k) => /^\d{4}-\d{2}-\d{2}\.json$/.test(k)).sort();
  return dated.slice(0, Math.max(0, dated.length - keep));
}

/** Takes a backup into `backups` and removes the oldest beyond `keep`. Returns what it did. */
export async function takeBackup(table: BlobStore, backups: BlobStore, now = new Date(), keep = 8) {
  const snap = await snapshot(table, now);
  const key = backupKey(now);
  await backups.setJSON(key, snap);
  const { blobs } = await backups.list();
  const old = toPrune(blobs.map((b) => b.key), keep);
  await Promise.all(old.map((k) => backups.delete(k)));
  return { key, count: snap.count, removed: old };
}
