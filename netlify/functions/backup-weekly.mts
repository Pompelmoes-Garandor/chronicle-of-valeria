// Every Monday at 04:17 Amsterdam winter time (03:17 UTC; 05:17 in summer time), copy all player data
// into the table-backups store and keep the newest 8 copies (two months).
// Scheduled functions only run on the published production deploy, never on previews.
import type { Config, Context } from "@netlify/functions";
import { takeBackup } from "../lib/backup.mts";
import { backupStore, tableStore } from "../lib/store.mts";

export default async (_req: Request, context: Context) => {
  const r = await takeBackup(tableStore(context), backupStore(context));
  console.log(`backup ${r.key}: ${r.count} records, removed ${r.removed.length} old copies`);
};

export const config: Config = { schedule: "17 3 * * 1" };
