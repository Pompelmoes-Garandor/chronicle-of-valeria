// Mirrors the accepted proposals into the repo, so Sam's Claude finds them with plain git:
//   branch `table-proposals`, file `accepted-proposals.json`
// It never touches main, so it starts no deploy and costs no credits.
//
// Needs two Netlify environment variables (Functions scope), set by Sam or Niels in the dashboard:
//   GITHUB_TOKEN  a fine-grained token with Contents: read and write on this repository only
//   GITHUB_REPO   "Pompelmoes-Garandor/chronicle-of-valeria" (the default)
// Without a token it does nothing; Sam's Claude can still read /api/accepted on the live site.

const BRANCH = "table-proposals";
const FILE = "accepted-proposals.json";

export async function mirrorAccepted(accepted: unknown[]): Promise<boolean> {
  const token = Netlify.env.get("GITHUB_TOKEN");
  if (!token) return false;
  const repo = Netlify.env.get("GITHUB_REPO") || "Pompelmoes-Garandor/chronicle-of-valeria";
  const api = (path: string, init: RequestInit = {}) =>
    fetch(`https://api.github.com/repos/${repo}${path}`, {
      ...init,
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "User-Agent": "chronicle-of-valeria", ...(init.headers || {}) },
    });

  // Make the branch from main the first time.
  const ref = await api(`/git/ref/heads/${BRANCH}`);
  if (ref.status === 404) {
    const main = await api("/git/ref/heads/main");
    if (!main.ok) throw new Error(`read main: ${main.status}`);
    const sha = (await main.json()).object.sha;
    const made = await api("/git/refs", { method: "POST", body: JSON.stringify({ ref: `refs/heads/${BRANCH}`, sha }) });
    if (!made.ok) throw new Error(`create branch: ${made.status}`);
  } else if (!ref.ok) throw new Error(`read branch: ${ref.status}`);

  const cur = await api(`/contents/${FILE}?ref=${BRANCH}`);
  const sha = cur.ok ? (await cur.json()).sha : undefined;
  const text = JSON.stringify({ updatedAt: new Date().toISOString(), accepted }, null, 1) + "\n";
  const put = await api(`/contents/${FILE}`, {
    method: "PUT",
    body: JSON.stringify({
      message: `Accepted proposals: ${accepted.length} in total`,
      content: Buffer.from(text).toString("base64"),
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!put.ok) throw new Error(`write file: ${put.status}`);
  return true;
}
