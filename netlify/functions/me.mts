// GET /api/me: the signed-in account and whether it is the DM. The app asks this after sign-in.
import type { Config } from "@netlify/functions";
import { currentAccount, json, unauthorized } from "../lib/auth.mts";

export default async () => {
  const me = await currentAccount();
  if (!me) return unauthorized();
  return json({ id: me.id, email: me.email, name: me.name, isDm: me.isDm });
};

export const config: Config = { path: "/api/me", method: "GET" };
