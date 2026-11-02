// Mirrors table data into the repo, so Sam's Claude finds it with plain git, on the branch `table-proposals`:
//   accepted-proposals.json  the proposals Sam accepted (mirrorAccepted)
//   interludes.json          the interludes players finished and sent to Sam (mirrorInterludes)
// It never touches main, so it starts no deploy and costs no credits.
//
// Needs two Netlify environment variables (Functions scope), set by Sam or Niels in the dashboard:
//   GITHUB_TOKEN  a fine-grained token with Contents: read and write on this repository only
//   GITHUB_REPO   "Pompelmoes-Garandor/chronicle-of-valeria" (the default)
// Without a token it does nothing; Sam's Claude can still read /api/accepted and /api/interludes on the live site.

const BRANCH = "table-proposals";

/** Writes one file on the mirror branch (made from main the first time). False when there is no token. */
export async function writeMirrorFile(file: string, text: string, message: string): Promise<boolean> {
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

  const cur = await api(`/contents/${file}?ref=${BRANCH}`);
  const sha = cur.ok ? (await cur.json()).sha : undefined;
  const put = await api(`/contents/${file}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: Buffer.from(text).toString("base64"), branch: BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!put.ok) throw new Error(`write file: ${put.status}`);
  return true;
}

const asText = (body: Record<string, unknown>) => JSON.stringify({ updatedAt: new Date().toISOString(), ...body }, null, 1) + "\n";

export async function mirrorAccepted(accepted: unknown[]): Promise<boolean> {
  return writeMirrorFile("accepted-proposals.json", asText({ accepted }), `Accepted proposals: ${accepted.length} in total`);
}

/** The whole list each time (see netlify/lib/interludes.mts), so a write that failed is fixed by the next one. */
export async function mirrorInterludes(interludes: unknown[]): Promise<boolean> {
  return writeMirrorFile("interludes.json", asText({ interludes }), `Finished interludes: ${interludes.length} in total`);
}
