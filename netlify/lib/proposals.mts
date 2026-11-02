// Proposals: players propose changes to the lore (tags and notes for places, amended character sheets), Sam accepts them with one tap, and accepted changes
// show on the site at once. Sam's Claude later writes them into source/chronicle.html and lists their
// keys in FILED there, after which the site shows them from the repo instead (see CLAUDE.md).
//
// Storage, in the table store:
//   proposals/<account>  {list:[{id, kind:"tags"|"note", place, tags?|text?, at}]}   written by that player
//   accepted/lore        {items:{"<account>.<id>": Decision}}                        written only here
// Pure: takes a store as an argument, so tests pass an in-memory one.
import type { BlobStore } from "./table.mts";

export type Proposal = { id: string; kind: "tags" | "note" | "sheet"; place?: string; sheet?: string; tags?: string[]; text?: string; edits?: Record<string, unknown>; at: number };
export type Decision = {
  kind: "tags" | "note" | "sheet";
  place?: string;
  sheet?: string; // the character, for kind "sheet"
  tags?: string[];
  text?: string;
  edits?: Record<string, unknown>; // amended sheet sections, as in chronicle.html's sheetEdits
  by: string; // the proposer's character id, or "dm"
  at: number; // when it was proposed
  status: "accepted" | "rejected";
  decidedAt: number;
  note?: string;
};
export type Open = Proposal & { key: string; account: string; by: string };

export const ACCEPTED_KEY = "accepted/lore";
export const keyOf = (account: string, id: string) => `${account}.${id}`;

/** Everything the decision step needs, read in one go. */
export async function loadAll(store: BlobStore) {
  const { blobs } = await store.list();
  const want = blobs.filter((b) => b.key.startsWith("proposals/") || b.key.startsWith("players/") || b.key === ACCEPTED_KEY);
  const got = await Promise.all(want.map(async (b) => [b.key, await store.get(b.key, { type: "json" })] as const));
  const proposals: Record<string, { list?: Proposal[] }> = {};
  const characters: Record<string, string> = {};
  let decided: Record<string, Decision> = {};
  for (const [key, data] of got) {
    if (data == null) continue;
    const [col, id] = key.split("/");
    if (col === "proposals") proposals[id] = data as { list?: Proposal[] };
    else if (col === "players") characters[id] = String((data as { character?: string }).character || "");
    else decided = ((data as { items?: Record<string, Decision> }).items || {}) as Record<string, Decision>;
  }
  return { proposals, characters, decided };
}

/** Proposals nobody has decided on yet, oldest first. */
export function openProposals(
  proposals: Record<string, { list?: Proposal[] }>,
  decided: Record<string, Decision>,
  characters: Record<string, string>,
  dmIds: string[] = [],
): Open[] {
  const out: Open[] = [];
  for (const [account, doc] of Object.entries(proposals))
    for (const p of doc.list || []) {
      const key = keyOf(account, p.id);
      if (decided[key]) continue;
      out.push({ ...p, key, account, by: dmIds.includes(account) ? "dm" : characters[account] || "someone" });
    }
  return out.sort((a, b) => a.at - b.at);
}

/** Decides on `keys` (all open ones when null). Returns the new decided map and how many changed. */
export function decide(
  open: Open[],
  decided: Record<string, Decision>,
  keys: string[] | null,
  status: "accepted" | "rejected",
  now: number,
  note?: string,
) {
  const pick = keys ? open.filter((o) => keys.includes(o.key)) : open;
  const next = { ...decided };
  for (const o of pick) {
    const d: Decision = { kind: o.kind, by: o.by, at: o.at, status, decidedAt: now };
    if (o.kind === "sheet") { d.sheet = o.sheet; d.edits = o.edits; }
    else { d.place = o.place; if (o.kind === "tags") d.tags = o.tags; else d.text = o.text; }
    if (note) d.note = note.slice(0, 500);
    next[o.key] = d;
  }
  return { decided: next, count: pick.length };
}

/** The accepted changes as the public sees them: no account ids, newest last. */
export function publicAccepted(decided: Record<string, Decision>) {
  return Object.entries(decided)
    .filter(([, d]) => d.status === "accepted")
    .sort(([, a], [, b]) => a.decidedAt - b.decidedAt)
    .map(([key, d]) => ({ key, kind: d.kind, place: d.place, sheet: d.sheet, tags: d.tags, text: d.text, edits: d.edits, by: d.by, at: d.at, acceptedAt: d.decidedAt }));
}
