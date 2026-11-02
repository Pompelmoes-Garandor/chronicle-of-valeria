// DM only. Backups of the player data.
//   GET /api/backup          a fresh copy of all player data, as a file to save
//   GET /api/backup?list     the weekly copies kept on Netlify (newest 8)
//   GET /api/backup?key=…    one weekly copy, as a file to save
// Restoring is deliberately not an endpoint: it overwrites everyone's data, so it is done by hand
// (see "Backups" in CLAUDE.md).
import type { Config, Context } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";
import { snapshot } from "../lib/backup.mts";
import { backupStore, tableStore } from "../lib/store.mts";

const download = (body: unknown, name: string) =>
  new Response(JSON.stringify(body, null, 1), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${name}"`,
      "Cache-Control": "no-store",
    },
  });

export default async (req: Request, context: Context) => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  if (!me.isDm) return json({ error: "Only the DM can do that" }, 403);
  const q = new URL(req.url).searchParams;

  if (q.has("list")) {
    const { blobs } = await backupStore(context).list();
    return json({ backups: blobs.map((b) => b.key).sort().reverse() });
  }
  const key = q.get("key");
  if (key) {
    if (!/^\d{4}-\d{2}-\d{2}\.json$/.test(key)) return json({ error: "No such backup" }, 404);
    const data = await backupStore(context).get(key, { type: "json" });
    return data == null ? json({ error: "No such backup" }, 404) : download(data, `chronicle-players-${key}`);
  }
  const snap = await snapshot(tableStore(context));
  return download(snap, `chronicle-players-${snap.takenAt.slice(0, 10)}.json`);
};

export const config: Config = { path: "/api/backup", method: "GET" };
