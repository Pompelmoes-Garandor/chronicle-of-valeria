// Who is calling, checked on the server for every request. The app only hides buttons;
// these functions decide. Roles live in the Identity account (app_metadata.roles):
// "dm" for Sam, "player" for everyone else. A role change only takes effect at the
// player's next sign-in or token refresh, not at once.
import { getUser } from "@netlify/identity";
import type { Viewer } from "./rules.mts";

export type Account = Viewer & { email: string; name: string; roles: string[] };

export async function currentAccount(): Promise<Account | null> {
  const u = await getUser();
  if (!u) return null;
  const roles: string[] = Array.isArray(u.roles) ? u.roles : [];
  const meta = (u as { user_metadata?: { full_name?: string }; userMetadata?: { full_name?: string } });
  const name = meta.userMetadata?.full_name || meta.user_metadata?.full_name || "";
  return { id: u.id, email: u.email || "", name, roles, isDm: roles.includes("dm") };
}

export function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

export const unauthorized = () => json({ error: "Sign in first" }, 401);
