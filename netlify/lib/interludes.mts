// Interludes: short solo story pieces each player plays between sessions. When one is finished, the
// player taps "Send to Sam" and the page writes it into interludes/<account> (checked in rules.mts).
// This builds the list Sam and his Claude read: from /api/interludes, and mirrored to git as
// interludes.json on the `table-proposals` branch (netlify/lib/github.mts, see CLAUDE.md).
// The list names players by character, never by account id or email: the mirror lives in a public repo.
// Pure: takes a store as an argument, so tests pass an in-memory one.
import type { BlobStore } from "./table.mts";

export type InterludeResult = {
  character: string;
  title: string;
  path: string[]; // the choices taken, as text
  ending: string;
  echo: { id: string; text: string; used: boolean }; // used: Sam honoured it at the table
  lore: string[]; // the "Sent to Sam" lines
  verse?: string[];
  fight?: { won: boolean; rounds: number };
  finishedAt: number;
};
export type InterludeEntry = { account: string; id: string } & InterludeResult; // account holds the character id

/** The interlude docs and who plays whom, read in one go. */
export async function loadInterludes(store: BlobStore) {
  const { blobs } = await store.list();
  const want = blobs.filter((b) => b.key.startsWith("interludes/") || b.key.startsWith("players/"));
  const got = await Promise.all(want.map(async (b) => [b.key, await store.get(b.key, { type: "json" })] as const));
  const docs: Record<string, { done?: Record<string, InterludeResult> }> = {};
  const characters: Record<string, string> = {};
  for (const [key, data] of got) {
    if (data == null) continue;
    const [col, id] = key.split("/");
    if (col === "interludes") docs[id] = data as { done?: Record<string, InterludeResult> };
    else characters[id] = String((data as { character?: string }).character || "");
  }
  return { docs, characters };
}

/** Every finished interlude, oldest first, with the account replaced by the character it plays. */
export function interludeList(
  docs: Record<string, { done?: Record<string, InterludeResult> }>,
  characters: Record<string, string>,
): InterludeEntry[] {
  const out: InterludeEntry[] = [];
  for (const [account, doc] of Object.entries(docs)) {
    const who = characters[account] || "someone"; // no claimed character (Sam testing): still never the account id
    for (const [id, r] of Object.entries(doc.done || {})) out.push({ account: who, id, ...r });
  }
  return out.sort((a, b) => a.finishedAt - b.finishedAt || a.id.localeCompare(b.id) || a.account.localeCompare(b.account));
}
