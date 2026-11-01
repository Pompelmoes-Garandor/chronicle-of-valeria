// Who may read and write what in the table data. Pure: no Netlify imports, so it is tested in tests/.
//
// The app's online mode (built for the Claude artifact edition) keeps four collections, one doc per player,
// keyed by the player's account id:
//   players/<id>  {character, at}         which character this account plays ("You only choose once")
//   pins/<id>     {character, pins:[…]}   map pins the player shares with the party
//   votes/<id>    {<session key>: story}   storyline vote per session, counted with the party's
//   answers/<id>  {<session key>: {…}, missed:[…]}  feedback and "Missed something?" notes, for the DM only

export type Viewer = { id: string; isDm: boolean };

export const COLLECTIONS = ["players", "pins", "votes", "answers"] as const;
export type Collection = (typeof COLLECTIONS)[number];

export const MAX_DOC_BYTES = 64 * 1024;
const ID_RE = /^[A-Za-z0-9_-]{1,64}$/;

export function isCollection(name: string): name is Collection {
  return (COLLECTIONS as readonly string[]).includes(name);
}

export function validId(id: string): boolean {
  return ID_RE.test(id);
}

/** May this viewer see this doc? Everything is table-only: the caller is always signed in. */
export function canRead(v: Viewer, col: Collection, docId: string): boolean {
  if (col === "answers") return v.isDm || docId === v.id; // answers go to Sam only
  return true;
}

/** May this viewer write (set) this doc? Everyone writes only their own doc. */
export function canWrite(v: Viewer, col: Collection, docId: string): boolean {
  return docId === v.id;
}

/** May this viewer delete this doc? Only the DM, and only to reset who plays whom. */
export function canDelete(v: Viewer, col: Collection, docId: string): boolean {
  return v.isDm && col === "players";
}

function validNote(n: unknown): boolean {
  if (!n || typeof n !== "object" || Array.isArray(n)) return false;
  const { text, lon, lat } = n as { text?: unknown; lon?: unknown; lat?: unknown };
  const num = (x: unknown) => x === undefined || x === null || (typeof x === "number" && Number.isFinite(x));
  return typeof text === "string" && text.length <= 2000 && num(lon) && num(lat);
}

export type Check ={ ok: true } | { ok: false; status: number; error: string };

/**
 * Checks a doc before it is written. `others` holds the other players' docs when col is "players",
 * so a character can only be claimed once and a player can't switch character on their own.
 */
export function checkDoc(
  v: Viewer,
  col: Collection,
  docId: string,
  doc: unknown,
  ctx: { existing?: unknown; others?: Record<string, unknown>; characters?: string[] } = {},
): Check {
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) return { ok: false, status: 400, error: "A doc must be a JSON object" };
  if (new TextEncoder().encode(JSON.stringify(doc)).length > MAX_DOC_BYTES) return { ok: false, status: 413, error: "Doc too large" };
  // Notes on the map are drawn on every player's screen, so one malformed note must not break it.
  const listKey = col === "pins" ? "pins" : col === "answers" ? "missed" : null;
  if (listKey) {
    const list = (doc as Record<string, unknown>)[listKey];
    if (list !== undefined && !(Array.isArray(list) && list.every(validNote)))
      return { ok: false, status: 400, error: `${listKey} must be a list of notes with text` };
  }
  if (col === "players") {
    const c = (doc as { character?: unknown }).character;
    if (typeof c !== "string" || !c || c.length > 32) return { ok: false, status: 400, error: "players doc needs a character" };
    if (ctx.characters && !ctx.characters.includes(c)) return { ok: false, status: 400, error: "Unknown character" };
    const prev = (ctx.existing as { character?: string } | undefined)?.character;
    if (prev && prev !== c && !v.isDm) return { ok: false, status: 409, error: "You already chose a character; ask Sam to reset it" };
    const takenBy = Object.entries(ctx.others || {}).find(([id, d]) => id !== docId && (d as { character?: string })?.character === c);
    if (takenBy) return { ok: false, status: 409, error: "That character is already taken" };
  }
  return { ok: true };
}
