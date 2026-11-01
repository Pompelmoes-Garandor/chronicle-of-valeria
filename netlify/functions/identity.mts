// Identity events. Registration is invite-only (set in the Netlify dashboard), so only invited
// people reach userSignup. Everyone starts as a player; Sam gets "dm" from the dashboard.
// A role change only takes effect at the person's next sign-in or token refresh, not at once.
import type { UserSignupEvent } from "@netlify/functions";

export default {
  userSignup(event: UserSignupEvent) {
    const roles: string[] = event.user.appMetadata?.roles || [];
    if (roles.length) return;
    return { user: { ...event.user, appMetadata: { ...event.user.appMetadata, roles: ["player"] } } };
  },
};
