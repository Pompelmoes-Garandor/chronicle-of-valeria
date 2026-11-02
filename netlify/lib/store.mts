// Opens the Blobs store for the table data. Always go through here, never call getStore directly:
// - one region everywhere (a site-wide store opened without it silently reads an empty us-east-2 store);
// - strong consistency, so a player sees their own write on the next read;
// - one store per deploy context, so a pull-request preview can never touch the real campaign.
import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

const REGION = "eu-central-1";

function open(base: string, context: Context) {
  const where = context.deploy?.context || "dev";
  const name = where === "production" ? base : `${base}-${where}`;
  return getStore({ name, region: REGION, consistency: "strong" });
}

/** The players' data: claims, pins, votes, answers and what comes next. */
export const tableStore = (context: Context) => open("table", context);

/** Weekly copies of the table store, one JSON document per backup (see netlify/lib/backup.mts). */
export const backupStore = (context: Context) => open("table-backups", context);
