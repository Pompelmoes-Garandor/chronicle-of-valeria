// Who may read and write what in the table data. Pure: no Netlify imports, so it is tested in tests/.
//
// The app's online mode (built for the Claude artifact edition) keeps four collections, one doc per player,
// keyed by the player's account id:
//   players/<id>  {character, at}         which character this account plays ("You only choose once")
//   pins/<id>     {character, pins:[…]}   map pins the player shares with the party
//   votes/<id>    {<session key>: story}   storyline vote per session, counted with the party's;
//                 the shared interlude stores its choices here too, as option ids: "i10-gift", "i10-speak"
//   answers/<id>  {<session key>: {…}, missed:[…]}  feedback and "Missed something?" notes, for the DM only
//   proposals/<id> {list:[…]}             changes to the lore a player proposes to Sam (netlify/lib/proposals.mts)
//   accepted/lore  {items:{…}}             what Sam decided; accepted changes show on the site until filed into the repo
//   interludes/<id> {done:{<interlude id>: Result}}  finished solo interludes ("Send to Sam"), for the DM only
//                 (validInterlude below; listed by netlify/lib/interludes.mts, mirrored to git by github.mts)
//   avatars/<id>  {character, look:{…}, at}  the mini the player painted in Hans's workshop; drawn on every table.
//                 Only for the character the account plays (Sam may paint any). validAvatar below, AV_BASE in chronicle.html

export type Viewer = { id: string; isDm: boolean };

export const COLLECTIONS = ["players", "pins", "votes", "answers", "proposals", "accepted", "interludes", "avatars"] as const;
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
  if (col === "answers" || col === "proposals" || col === "interludes") return v.isDm || docId === v.id; // these go to Sam only
  return true;
}

/** May this viewer write (set) this doc? Everyone writes only their own doc. */
export function canWrite(v: Viewer, col: Collection, docId: string): boolean {
  if (col === "accepted") return false; // only the proposals function writes Sam's decisions
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

export const MAX_PROPOSALS = 50;

/** The sections of a character sheet a player may amend (EDIT_KEYS in chronicle.html). */
export const SHEET_KEYS = ["line", "alias", "lvl6", "vit", "ab", "saves", "skills", "passive", "attacks", "magic", "feats", "items", "gear", "loot", "langs", "flavor"];

/** One proposed change: new tags for a place, a few lines about a place, or amended sections of a character sheet. */
export function validProposal(p: unknown): boolean {
  if (!p || typeof p !== "object" || Array.isArray(p)) return false;
  const { id, kind, place, sheet, edits, tags, text, at } = p as Record<string, unknown>;
  if (typeof id !== "string" || !/^[a-z0-9]{1,16}$/.test(id)) return false;
  if (typeof at !== "number" || !Number.isFinite(at)) return false;
  if (kind === "sheet") {
    if (typeof sheet !== "string" || !/^[a-z]{1,24}$/.test(sheet)) return false;
    if (!edits || typeof edits !== "object" || Array.isArray(edits)) return false;
    const keys = Object.keys(edits);
    if (!keys.length || !keys.every((k) => SHEET_KEYS.includes(k))) return false;
    if (!Object.values(edits).every((x) => x && typeof x === "object" && "v" in (x as object))) return false;
    return JSON.stringify(edits).length <= 16000;
  }
  if (typeof place !== "string" || !/^[A-Za-z0-9_-]{1,40}$/.test(place)) return false;
  if (kind === "tags")
    return Array.isArray(tags) && tags.length <= 14 && tags.every((t) => typeof t === "string" && t.length > 0 && t.length <= 24);
  if (kind === "note") return typeof text === "string" && text.trim().length > 0 && text.length <= 1000;
  return false;
}

export const INTERLUDE_ID_RE = /^[a-z0-9-]{1,32}$/;

const isObj = (x: unknown): x is Record<string, unknown> => !!x && typeof x === "object" && !Array.isArray(x);
const str = (x: unknown, max: number): x is string => typeof x === "string" && x.length <= max;
const strList = (x: unknown, items: number, max: number) => Array.isArray(x) && x.length <= items && x.every((s) => str(s, max));
const onlyKeys = (o: Record<string, unknown>, keys: string[]) => Object.keys(o).every((k) => keys.includes(k));

/**
 * One finished interlude: the character, the choices taken (as text), the ending, the echo Sam honours
 * at the table, and the "Sent to Sam" lore lines. Strict: unknown fields are refused.
 */
export function validInterlude(r: unknown): boolean {
  if (!isObj(r)) return false;
  if (!onlyKeys(r, ["character", "title", "path", "ending", "echo", "lore", "verse", "fight", "finishedAt"])) return false;
  const { character, title, path, ending, echo, lore, verse, fight, finishedAt } = r;
  if (!str(character, 24) || !character || !str(title, 80) || !str(ending, 40)) return false;
  if (!strList(path, 40, 120) || !strList(lore, 8, 1000)) return false;
  if (verse !== undefined && !strList(verse, 4, 200)) return false;
  if (!isObj(echo) || !onlyKeys(echo, ["id", "text", "used"])) return false;
  if (!str(echo.id, 40) || !str(echo.text, 300) || typeof echo.used !== "boolean") return false;
  if (fight !== undefined) {
    if (!isObj(fight) || !onlyKeys(fight, ["won", "rounds"])) return false;
    if (typeof fight.won !== "boolean" || typeof fight.rounds !== "number" || !Number.isFinite(fight.rounds)) return false;
  }
  return typeof finishedAt === "number" && Number.isFinite(finishedAt);
}

export const AVATAR_CHARACTERS = ["katy", "saphira", "stig"];
const HEX_RE = /^#[0-9a-f]{6}$/;

/** A painted mini: fixed fields, colours as #rrggbb, height and build within the workshop's sliders. */
export function validAvatar(d: unknown): boolean {
  if (!isObj(d) || !onlyKeys(d, ["character", "look", "at"])) return false;
  const { character, look, at } = d;
  if (typeof character !== "string" || !AVATAR_CHARACTERS.includes(character)) return false;
  if (typeof at !== "number" || !Number.isFinite(at)) return false;
  if (!isObj(look)) return false;
  const keys = ["h", "bulk", "skin", "hair", "style", "beard", "ears", "hood", "eyes", "cloth", "cloak", "pants", "boots"];
  if (!onlyKeys(look, keys) || !keys.every((k) => k in look)) return false;
  const hex = (x: unknown, empty = false) => typeof x === "string" && (HEX_RE.test(x) || (empty && x === ""));
  const num = (x: unknown, a: number, z: number) => typeof x === "number" && Number.isFinite(x) && x >= a && x <= z;
  return (
    num(look.h, 0.7, 0.86) && num(look.bulk, 0.85, 1.2) &&
    ["skin", "hair", "cloth", "pants", "boots"].every((k) => hex(look[k])) && hex(look.cloak, true) && hex(look.eyes, true) &&
    ["short", "cap", "long", "bald"].includes(look.style as string) && ["none", "short", "full"].includes(look.beard as string) &&
    typeof look.ears === "boolean" && typeof look.hood === "boolean"
  );
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
  if (col === "proposals") {
    const list = (doc as { list?: unknown }).list;
    if (!Array.isArray(list) || list.length > MAX_PROPOSALS || !list.every(validProposal))
      return { ok: false, status: 400, error: "proposals must be a list of up to 50 proposed changes" };
  }
  if (col === "interludes") {
    const d = doc as Record<string, unknown>;
    const ok = onlyKeys(d, ["done"]) && isObj(d.done) && Object.entries(d.done).every(([id, r]) => INTERLUDE_ID_RE.test(id) && validInterlude(r));
    if (!ok) return { ok: false, status: 400, error: "interludes must be {done: {<interlude id>: result}}" };
  }
  if (col === "avatars") {
    if (!validAvatar(doc)) return { ok: false, status: 400, error: "avatars must be {character, look, at} from the workshop" };
    const mine = (ctx.existing as { character?: string } | undefined)?.character;
    if (!v.isDm && mine !== (doc as { character: string }).character)
      return { ok: false, status: 403, error: "You can only paint the mini of the character you play" };
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
