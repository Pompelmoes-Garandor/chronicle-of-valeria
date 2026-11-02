// DM only. GET /api/interludes: every interlude the players finished and sent to Sam, oldest first.
// The same list is mirrored to git as interludes.json (netlify/lib/github.mts); this is Sam's DM view
// and the fallback when the mirror has no token.
import type { Config, Context } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";
import { interludeList, loadInterludes } from "../lib/interludes.mts";
import { tableStore } from "../lib/store.mts";

export default async (_req: Request, context: Context) => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  if (!me.isDm) return json({ error: "Only the DM can read the interludes" }, 403);
  const { docs, characters } = await loadInterludes(tableStore(context));
  return json({ interludes: interludeList(docs, characters) });
};

export const config: Config = { path: "/api/interludes", method: "GET" };
