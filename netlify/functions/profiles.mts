// GET /api/profiles?ids=a,b: display names for the DM view ("Katy Berry (Anna)"). DM only.
import { admin } from "@netlify/identity";
import type { Config } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";

export default async (req: Request) => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  if (!me.isDm) return json({ error: "Only the DM can see this" }, 403);
  const want = new Set((new URL(req.url).searchParams.get("ids") || "").split(",").filter(Boolean));
  const listed = (await admin.listUsers()) as unknown;
  const users = (Array.isArray(listed) ? listed : (listed as { users?: unknown[] })?.users || []) as Array<{
    id: string;
    email?: string;
    user_metadata?: { full_name?: string };
    userMetadata?: { full_name?: string };
  }>;
  const out: Record<string, { name: string }> = {};
  for (const u of users) {
    if (!want.has(u.id)) continue;
    const name = u.userMetadata?.full_name || u.user_metadata?.full_name || (u.email || "").split("@")[0];
    out[u.id] = { name };
  }
  return json(out);
};

export const config: Config = { path: "/api/profiles", method: "GET" };
