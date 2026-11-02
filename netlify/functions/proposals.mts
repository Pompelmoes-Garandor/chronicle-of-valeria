// DM only. Sam's side of the proposals (see netlify/lib/proposals.mts).
//   GET  /api/proposals          the open proposals, oldest first
//   POST /api/proposals/decide   {status:"accepted"|"rejected", keys?:[…], note?}; no keys = every open one
// Accepting copies the change into accepted/lore, which the site shows at once. In production it also
// mirrors the accepted list to the repo for Sam's Claude (netlify/lib/github.mts), when a token is set.
import type { Config, Context } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";
import { mirrorAccepted } from "../lib/github.mts";
import { ACCEPTED_KEY, decide, loadAll, openProposals, publicAccepted } from "../lib/proposals.mts";
import { tableStore } from "../lib/store.mts";

export default async (req: Request, context: Context) => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  if (!me.isDm) return json({ error: "Only the DM can decide on proposals" }, 403);
  const store = tableStore(context);
  const { proposals, characters, decided } = await loadAll(store);
  const open = openProposals(proposals, decided, characters, [me.id]);

  if (req.method === "GET") return json({ open });

  let body: { status?: string; keys?: unknown; note?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return json({ error: "Body must be JSON" }, 400);
  }
  if (body.status !== "accepted" && body.status !== "rejected") return json({ error: "status must be accepted or rejected" }, 400);
  const keys = Array.isArray(body.keys) ? body.keys.filter((k): k is string => typeof k === "string") : null;
  const r = decide(open, decided, keys, body.status, Date.now(), typeof body.note === "string" ? body.note : undefined);
  if (!r.count) return json({ decided: 0, mirrored: false });
  await store.setJSON(ACCEPTED_KEY, { items: r.decided });

  let mirrored = false;
  if (body.status === "accepted" && context.deploy?.context === "production") {
    try {
      mirrored = await mirrorAccepted(publicAccepted(r.decided));
    } catch (e) {
      console.log("mirror to GitHub failed:", (e as Error).message);
    }
  }
  return json({ decided: r.count, mirrored });
};

export const config: Config = { path: ["/api/proposals", "/api/proposals/decide"], method: ["GET", "POST"] };
