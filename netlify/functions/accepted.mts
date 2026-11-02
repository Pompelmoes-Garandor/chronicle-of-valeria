// GET /api/accepted: the proposals Sam accepted, for everyone, signed in or not.
// Accepted changes are lore now, and the lore is public, so this needs no sign-in. The page lays them
// over the lore built into it, skipping the ones already filed into the repo (FILED in chronicle.html).
import type { Config, Context } from "@netlify/functions";
import { json } from "../lib/auth.mts";
import { ACCEPTED_KEY, type Decision, publicAccepted } from "../lib/proposals.mts";
import { tableStore } from "../lib/store.mts";

export default async (_req: Request, context: Context) => {
  const doc = (await tableStore(context).get(ACCEPTED_KEY, { type: "json" })) as { items?: Record<string, Decision> } | null;
  return json({ accepted: publicAccepted(doc?.items || {}) });
};

export const config: Config = { path: "/api/accepted", method: "GET" };
