// The rules of the fight engine, pinned down. The functions are cut out of source/chronicle.html as text (the page has
// no modules to import) and run here against a small stand-in for the board: scripted dice, a tiny map, no drawing.
// A test fails loudly when a function it cuts out is renamed or moved out of the top level of the play code.
// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGE = readFileSync(path.join(ROOT, "source", "chronicle.html"), "utf8");
const PLAY_AT = PAGE.indexOf("\nconst PLAY=");
assert.ok(PLAY_AT > 0, "can't find the start of the play code (const PLAY=) in chronicle.html");
const LINES = PAGE.slice(PLAY_AT).split("\n");

/* One top-level definition of the play code: the line that starts it, plus the lines after it that are indented or close it. */
function cut(name) {
  const esc = name.replace(/[$]/g, "\\$");
  const re = new RegExp("^(async function " + esc + "\\(|function " + esc + "\\(|const " + esc + "=|let " + esc + "=)");
  const i = LINES.findIndex(l => re.test(l));
  assert.ok(i >= 0, `can't find "${name}" at the top level of the play code in chronicle.html`);
  let j = i + 1;
  while (j < LINES.length && /^[ \t}]/.test(LINES[j])) j++;
  return LINES.slice(i, j).join("\n");
}

const NAMES = ["clamp", "pick", "cap", "dice", "avgDice", "maxDice", "SKILL_AB", "CREW", "CREW_IDS", "skillMod", "MON", "CAVE_COST", "TREE_COST",
  "freshParty", "freshState", "P", "F", "d20", "modeTxt", "crewRoll", "mapOf", "cost", "blocksLos", "cells", "gap", "dist", "distXY", "los",
  "alive", "live", "enemiesOf", "occupant", "incap", "reachable", "pathTo", "mkCrew", "mkMon", "mkAlly", "PHYS", "acOf", "saveOf", "addC", "tickC",
  "speedOf", "nameOf", "attackMode", "attack", "save", "hurt", "dropConc", "zero", "die", "heal", "spit", "freeNear", "moveAlong", "oppAttack",
  "crewMelee", "fall", "shove", "deathSave", "crewActions", "teleport", "cost_", "turnUndead", "nearest", "approach"];

/* The stand-in for the rest of the page. Anything the rules call that isn't here (drawing, sound, pacing) does nothing. */
function world() {
  const noop = () => undefined;
  const env = {
    q: [], logs: [], floats: [], asks: [], answer: () => false, pickT: null, cell: null,
    rnd(n) { if (!env.q.length) return Math.ceil(n / 2); const v = env.q.shift(); assert.ok(v >= 1 && v <= n, `scripted roll ${v} doesn't fit a d${n}`); return v; },
    log(t) { env.logs.push(String(t)); }, floatTxt(u, t) { env.floats.push([u.id, String(t)]); },
    async ask(t) { env.asks.push(t); return !!env.answer(t); },
    async pickTarget(list) { return env.pickT ? env.pickT(list) : list[0] || null; },
    async pickCell(cs) { return env.cell && cs.some(c => c[0] === env.cell[0] && c[1] === env.cell[1]) ? env.cell : null; },
    sgn: n => (n < 0 ? "−" : "+") + Math.abs(n), opt: { dice: false, fast: true }, PLAY: { auto: false }, MAPS: {}, B: null, ST: null, IAI: {}, NOTE: {},
  };
  const box = new Proxy(env, {
    has: (t, k) => typeof k === "string",
    get: (t, k) => (typeof k !== "string" ? undefined : k in t ? t[k] : k in globalThis ? globalThis[k] : noop),
    set: (t, k, v) => { t[k] = v; return true; },
  });
  const G = new Function("box", "with(box){\n" + NAMES.map(cut).join("\n") + "\nreturn {" + NAMES.join(",") + "};\n}")(box);
  /* a board: rows of the cave alphabet ("." floor, "r" rough, "#" wall) or the tree alphabet */
  env.board = (rows, units = [], kind = "cave") => {
    env.MAPS.t = { kind, rows };
    env.ST = G.freshState();
    env.B = { def: { key: "t" }, mp: G.mapOf("t"), units: [], order: [], round: 2, sc: {}, over: null };
    env.B.units.push(...units.map(f => f()));
    for (const u of env.B.units) { u.act = 1; u.bonus = 1; u.mv = G.speedOf(u); }
    return env.B;
  };
  env.crew = (id, x, y, o = {}) => () => Object.assign(G.mkCrew(id, x, y), o);
  env.mon = (key, x, y, num = 0, o = {}) => () => G.mkMon(key, x, y, num, o);
  env.roll = (...v) => { env.q.push(...v); };
  env.act = (u, n) => { const a = G.crewActions(u).find(a => a.n === n); assert.ok(a, `${u.key} has no action "${n}"`); return a; };
  return { env, G };
}
const OPEN = ["..........", "..........", "..........", "..........", "..........", "..........", "..........", ".........."];

test("a function that is gone from the page fails the cut", () => {
  assert.throws(() => cut("noSuchRuleFunction"), /can't find "noSuchRuleFunction"/);
  for (const n of NAMES) assert.ok(cut(n).length > 10, n);
});

test("dice: parsing, negative terms, average and maximum", () => {
  const { env, G } = world();
  env.roll(3, 5); assert.deepEqual(G.dice("2d6+4"), { t: 12, rolls: [3, 5], flat: 4, sides: [6, 6] });
  env.roll(8, 3); assert.deepEqual(G.dice("1d8-1d4+2"), { t: 7, rolls: [8, -3], flat: 2, sides: [8, 4] });
  env.roll(4); assert.equal(G.dice("d6 - 1").t, 3);
  assert.deepEqual(G.dice("0"), { t: 0, rolls: [], flat: 0, sides: [] });
  assert.equal(G.dice(3).t, 3);
  assert.equal(G.avgDice("2d6+4"), 11); assert.equal(G.avgDice("1d8-2"), 2.5); assert.equal(G.avgDice("3d6"), 10.5);
  assert.equal(G.maxDice("2d8+4"), "16+4"); env.q = []; assert.equal(G.dice(G.maxDice("2d8+4")).t, 20); assert.equal(G.maxDice("d4"), "4");
  // known limit, not used by the page today: avgDice reads a negative dice term wrong ("1d8-1d4" should be 2)
  assert.equal(G.avgDice("1d8-1d4"), 6);
});

test("d20: advantage, disadvantage, both cancel, lucky rerolls a 1 once", () => {
  const { env, G } = world();
  env.roll(4, 17); assert.deepEqual(G.d20(true, false), { v: 17, a: 4, b: 17, mode: 1 });
  env.roll(4, 17); assert.equal(G.d20(false, true).v, 4);
  env.roll(4, 17); assert.deepEqual(G.d20(true, true), { v: 4, a: 4, b: 17, mode: 0 });
  env.roll(4, 17); assert.equal(G.d20().v, 4);
  env.roll(1, 9, 12); assert.equal(G.d20(false, false, true).v, 12);      // a=1 is rerolled to 12
  env.roll(1, 9, 1); assert.equal(G.d20(false, false, true).v, 1);        // only once
  env.roll(1, 1, 6, 3); assert.equal(G.d20(true, false, true).v, 6);      // both dice
  assert.equal(G.modeTxt({ mode: 1, a: 4, b: 17 }), " (adv 4/17)"); assert.equal(G.modeTxt({ mode: 0 }), "");
});

test("distance: 5 ft squares, diagonals count one, big creatures measure from their edge", () => {
  const { G } = world();
  assert.equal(G.gap(0, 0, 3, 3), 3); assert.equal(G.gap(5, 7, 1, 2), 3); assert.equal(G.gap(2, 4, 3, 9), 0);
  const a = { x: 1, y: 1, size: 1 }, heart = { x: 5, y: 3, size: 3 };
  assert.equal(G.dist(a, { x: 4, y: 3, size: 1 }), 3); assert.equal(G.dist(a, { x: 2, y: 2, size: 1 }), 1); assert.equal(G.dist(a, a), 0);
  assert.equal(G.dist(a, heart), 4); assert.equal(G.dist(heart, a), 4);
  assert.equal(G.dist({ x: 8, y: 6, size: 1 }, heart), 1); assert.equal(G.dist({ x: 6, y: 4, size: 1 }, heart), 0);
  assert.equal(G.distXY(heart, 9, 9), 4); assert.equal(G.distXY(heart, 7, 5), 0); assert.equal(G.distXY(a, 1, 4), 3);
  assert.deepEqual(G.cells({ x: 2, y: 3, size: 1 }), [[2, 3]]); assert.equal(G.cells(heart).length, 9);
});

test("line of sight: walls block, rough ground doesn't, the tree never blocks", () => {
  const { env, G } = world();
  env.board(["......", "..#...", "..r...", "......"]);
  const u = (x, y) => ({ x, y, size: 1 });
  assert.equal(G.los(u(0, 1), u(5, 1)), false); assert.equal(G.los(u(5, 1), u(0, 1)), false);
  assert.equal(G.los(u(0, 2), u(5, 2)), true); assert.equal(G.los(u(0, 0), u(5, 0)), true); assert.equal(G.los(u(1, 1), u(1, 1)), true);
  env.board(["--|--", "TT|TT"], [], "tree"); assert.equal(G.los(u(0, 1), u(4, 1)), true);
});

test("who counts: alive, incapacitated, enemies, who stands on a square", () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.crew("hans", 2, 1), env.mon("husk", 5, 5, 1), env.mon("heart", 6, 1), env.mon("thorn", 0, 0)]);
  const [katy, hans, husk, heart, thorn] = B.units; thorn.side = "ally";
  assert.deepEqual(G.enemiesOf(katy).map(u => u.id), ["husk1", "heart"]); assert.deepEqual(G.enemiesOf(husk).map(u => u.id), ["katy", "hans", "thorn"]);
  hans.hp = 0; assert.equal(G.alive(hans), false); assert.equal(G.incap(hans), true); assert.deepEqual(G.enemiesOf(husk).map(u => u.id), ["katy", "thorn"]);
  thorn.untarget = true; assert.deepEqual(G.enemiesOf(husk).map(u => u.id), ["katy"]);
  // a turned foe that fled off the board can't be picked as a target (it used to be shot there, and the tunnels fight then never ended)
  husk.ghost = true; assert.deepEqual(G.enemiesOf(katy).map(u => u.id), ["heart"]); husk.ghost = false;
  for (const k of ["ko", "turned", "stunned", "engulfed"]) { katy.cond = { [k]: true }; assert.equal(G.incap(katy), true, k); }
  katy.cond = { restrained: true, prone: true }; assert.equal(!!G.incap(katy), false);
  assert.equal(G.occupant(8, 3), heart); assert.equal(G.occupant(9, 3), undefined); assert.equal(G.occupant(5, 5, husk), undefined);
  husk.gone = true; assert.equal(G.occupant(5, 5), undefined); assert.equal(G.alive(husk), false);
  assert.equal(G.live("foe").length, 1);
});

test("movement: costs, rough ground double, walls, friends pass, foes block, nobody ends on a taken square", () => {
  const { env, G } = world();
  const B = env.board([".....", ".r#..", ".....", "....."], [env.crew("katy", 0, 0), env.crew("hans", 0, 2), env.mon("husk", 3, 3, 1)]);
  const [katy, hans, husk] = B.units;
  const r = G.reachable(katy, 3), c = (x, y) => (r.d.get(x + "," + y) || {}).c;
  assert.equal(c(0, 0), 0); assert.equal(c(1, 0), 1); assert.equal(c(3, 0), 3); assert.equal(c(4, 0), undefined, "4 squares is over a budget of 3");
  assert.equal(c(1, 1), 2, "rough ground costs double"); assert.equal(c(2, 1), undefined, "a wall"); assert.equal(c(-1, 0), undefined, "off the map");
  assert.equal(c(2, 2), 3, "diagonals cost one square: (0,0) to (1,0)? no: (0,1), (1,2), (2,2)");
  assert.equal(c(0, 2), 2, "a friend's square can be crossed"); assert.equal(r.d.get("0,2").occ, true, "but not stopped on");
  assert.equal(c(0, 3), 3, "and walked past");
  const p = G.pathTo(r, 0, 3); assert.equal(p.length, 3); assert.equal(p[p.length - 1].k, "0,3"); assert.equal(G.pathTo(r, 4, 0), null);
  assert.deepEqual(G.pathTo(r, 0, 0), []);
  // a foe blocks the way, a foe at 0 HP doesn't
  katy.x = 2; katy.y = 3; assert.equal(G.reachable(katy, 1).d.has("3,3"), false);
  husk.hp = 0; assert.equal(G.reachable(katy, 1).d.has("3,3"), true);
  // budget 0: only where she stands
  assert.equal(G.reachable(katy, 0).d.size, 1);
});

test("armour class, saves and speed with conditions and exhaustion", () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("husk", 5, 5, 1), env.crew("katy", 2, 2)]), [stig, husk, katy] = B.units;
  assert.equal(G.acOf(stig), 18); stig.cond.shield = { exp: {} }; assert.equal(G.acOf(stig), 23); stig.cond.slowed = { by: "x" }; assert.equal(G.acOf(stig), 21); stig.cond = {};
  assert.equal(G.acOf(husk), 8); husk.cond.slowed = {}; assert.equal(G.acOf(husk), 6);
  assert.equal(G.saveOf(stig, "wis"), 7); assert.equal(G.saveOf(husk, "con"), 3); assert.equal(G.saveOf({ key: "matthew", cond: {} }, "str"), 0);
  assert.equal(G.speedOf(stig), 6); assert.equal(G.speedOf(katy), 7); assert.equal(G.speedOf(husk), 2, "slowed: half of 4");
  katy.cond.slowed = {}; assert.equal(G.speedOf(katy), 3, "half of 7, rounded down");
  env.ST.party.katy.ex = 2; assert.equal(G.speedOf(katy), 1, "exhaustion: 5 ft less a level, after the halving"); assert.equal(G.saveOf(katy, "cha"), 3, "and 2 off every d20 a level");
  env.ST.party.katy.ex = 6; assert.equal(G.speedOf(katy), 0);
  env.ST.party.katy.ex = 0; katy.cond = {};
  for (const k of ["restrained", "grappled", "engulfed", "netted", "ko"]) { katy.cond = { [k]: {} }; assert.equal(G.speedOf(katy), 0, k); }
  katy.cond = {}; katy.hp = 0; assert.equal(G.speedOf(katy), 0);
  // conditions a creature can't have
  assert.equal(G.addC(B.units[1], "poisoned"), true); const hol = G.mkMon("hollower", 0, 0, 1); assert.equal(G.addC(hol, "prone"), false); assert.equal(hol.cond.prone, undefined);
  const sa = G.mkCrew("saphira", 0, 0); assert.equal(G.addC(sa, "charmed"), false); assert.equal(G.addC(sa, "prone"), true);
});

test("effects run out at the start or end of the right creature's turn, after the right number of turns", () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("husk", 5, 5, 1)]), [stig, husk] = B.units;
  G.addC(husk, "guided", { exp: { u: "stig", at: "end", n: 2 } }); G.addC(husk, "mocked", { exp: { u: "husk1", at: "end" } }); G.addC(stig, "shield", { exp: { u: "stig", at: "start" } });
  G.addC(husk, "hexed", { by: "saphira" }); husk.cond.prone = true;
  G.tickC(stig, "end"); assert.ok(husk.cond.guided, "Guiding Bolt lasts past the turn it was cast in"); assert.equal(husk.cond.guided.exp.n, 1); assert.ok(stig.cond.shield); assert.ok(husk.cond.mocked);
  G.tickC(husk, "start"); assert.ok(husk.cond.mocked); G.tickC(husk, "end"); assert.equal(husk.cond.mocked, undefined);
  G.tickC(stig, "start"); assert.equal(stig.cond.shield, undefined, "Shield ends when his next turn starts");
  G.tickC(stig, "end"); assert.equal(husk.cond.guided, undefined, "gone at the end of his next turn");
  assert.ok(husk.cond.hexed, "concentration effects don't tick"); assert.equal(husk.cond.prone, true);
});

test("advantage and disadvantage on an attack", () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("saphira", 1, 1), env.mon("husk", 2, 1, 1), env.crew("hans", 8, 7), env.mon("husk", 6, 1, 2)]), [sa, near, hans, far] = B.units;
  const melee = { n: "Dagger", hit: 8 }, bow = { n: "Bow", hit: 5, range: [4, 12] };
  near.hasActed = far.hasActed = true;
  const m = (a, t, at) => { const r = G.attackMode(a, t, at); return (r.adv ? "A" : "") + (r.dis ? "D" : "") || "-"; };
  assert.equal(m(sa, near, melee), "-");
  near.cond.prone = true; assert.equal(m(sa, near, melee), "A", "prone, from 5 ft"); assert.equal(m(sa, near, bow), "D", "prone, a ranged attack (and a foe next to her)");
  far.cond.prone = true; sa.x = 4; assert.equal(m(sa, far, { n: "Whip", hit: 5 }), "D", "prone, melee from 10 ft"); sa.x = 1; near.cond = {}; far.cond = {};
  assert.equal(m(sa, far, bow), "D", "a foe within 5 ft of the shooter, and long range"); near.hp = 0; assert.equal(m(sa, far, bow), "D", "long range alone");
  far.x = 5; assert.equal(m(sa, far, bow), "-", "inside short range, the foe next to her is down"); near.hp = 22;
  for (const k of ["restrained", "netted", "blinded"]) { near.cond = { [k]: {} }; assert.equal(m(sa, near, melee), "A", "target " + k); }
  for (const k of ["poisoned", "restrained", "netted", "prone", "blinded", "mocked"]) { near.cond = {}; sa.cond = { [k]: {} }; assert.equal(m(sa, near, melee), "D", "attacker " + k); }
  sa.cond = { poisoned: {} }; near.cond = { restrained: {}, blinded: {} }; const both = G.attackMode(sa, near, melee); assert.ok(both.adv && both.dis, "two for and one against still cancel to a straight roll");
  sa.cond = {}; near.cond = { dodging: {} }; assert.equal(m(sa, near, melee), "D"); near.cond.stunned = true; assert.equal(m(sa, near, melee), "-", "Dodge does nothing for someone who can't act");
  near.cond = { guided: {} }; assert.equal(m(sa, near, melee), "A"); assert.equal(m(sa, near, { n: "x", hit: 1, noGuide: true }), "-");
  near.cond = {}; sa.hidden = true; assert.equal(m(sa, near, melee), "A", "unseen attacker"); sa.hidden = false; near.hidden = true; assert.equal(m(sa, near, melee), "D", "unseen target"); near.hidden = false;
  sa.cond = { enfeebled: {} }; assert.equal(m(sa, near, melee), "D"); assert.equal(m(sa, far, { n: "x", hit: 1, range: [24, 24] }), "D", "(the foe next to her; enfeebled is melee only)"); sa.cond = {};
  // Assassinate: Saphira against anyone who hasn't acted, round 1 only
  near.hasActed = false; B.round = 1; assert.equal(m(sa, near, melee), "A"); B.round = 2; assert.equal(m(sa, near, melee), "-"); assert.equal(m(hans, near, melee), "-");
  // Shadow Blade in dim light
  near.hasActed = true; B.dim = true; assert.equal(m(sa, near, { n: "Shadow Blade", hit: 7, shadow: true }), "A"); B.dim = false; assert.equal(m(sa, near, { n: "Shadow Blade", hit: 7, shadow: true }), "-");
});

test("attack: a natural 1 misses, a natural 20 hits and doubles the dice, not the flat bonus", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("hans", 1, 1), env.mon("heart", 2, 0)]), [hans, heart] = B.units, slam = { n: "Slam", hit: 6, dmg: "2d6+4", type: "bludgeoning" };
  env.roll(1, 1); let r = await G.attack(hans, heart, { n: "Sure", hit: 30, dmg: "1d4", type: "force" }); assert.equal(r.hit, false, "1 always misses"); assert.equal(heart.hp, 180);
  env.roll(20, 1, 1, 2, 3, 4); r = await G.attack(hans, heart, { n: "Weak", hit: -20, dmg: "2d6+4", type: "bludgeoning" }); assert.ok(r.hit && r.crit); assert.equal(heart.hp, 180 - (1 + 2 + 3 + 4 + 4), "4d6+4");
  heart.hp = 180; env.roll(9, 1, 5, 5); r = await G.attack(hans, heart, slam); assert.equal(r.hit, true, "9+6 = 15 meets AC 15"); assert.equal(heart.hp, 166);
  env.roll(8, 1); r = await G.attack(hans, heart, slam); assert.equal(r.hit, false, "14 misses AC 15");
  // Bane takes a d4 off the roll
  hans.cond.bane = { by: "x" }; env.roll(9, 1, 1); r = await G.attack(hans, heart, slam); assert.equal(r.hit, false, "9+6-1 = 14");
});

test("attack: Sneak Attack, Hex, Hexblade's Curse and the extra dice on a crit", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("saphira", 1, 1), env.mon("heart", 2, 0), env.crew("hans", 5, 1)]), [sa, heart, hans] = B.units;
  heart.hasActed = true; const ash = { n: "Ash blade", hit: 8, dmg: "1d4+5", type: "slashing", plus: "1d4", plusType: "necrotic", magic: true, sneak: true };
  heart.cond.hexed = { by: "saphira" }; heart.cond.cursed = { by: "saphira" };
  // 19 is a crit against the cursed target: 2d4+5, +2d4 necrotic, Sneak Attack 4d6 (Hans is next to it), Hex 2d6, Curse +3 flat
  env.roll(19, 1, /*2d4*/ 1, 1, /*2d4*/ 1, 1, /*4d6*/ 1, 1, 1, 1, /*2d6*/ 1, 1);
  let r = await G.attack(sa, heart, ash); assert.ok(r.crit); assert.equal(180 - heart.hp, (2 + 5) + 2 + 4 + 2 + 3); assert.equal(sa.sneakUsed, true);
  // a second hit in the same turn: no second Sneak Attack; a plain hit rolls single dice
  heart.hp = 180; env.roll(10, 1, /*1d4*/ 4, /*1d4*/ 4, /*1d6 hex*/ 6);
  r = await G.attack(sa, heart, ash); assert.ok(r.hit && !r.crit); assert.equal(180 - heart.hp, 9 + 4 + 6 + 3);
  // no friend next to the target and no advantage: no Sneak Attack. Disadvantage rules it out too.
  sa.sneakUsed = false; hans.x = 9; hans.y = 7; delete heart.cond.hexed; delete heart.cond.cursed; heart.hp = 180;
  env.roll(15, 1, 4, 4); await G.attack(sa, heart, ash); assert.equal(180 - heart.hp, 13); assert.equal(sa.sneakUsed, false);
  hans.x = 5; hans.y = 1; sa.cond.poisoned = {}; heart.hp = 180; env.roll(15, 15, 4, 4); await G.attack(sa, heart, ash); assert.equal(180 - heart.hp, 13, "disadvantage: none");
  // Eldritch Blast: Hex rides on it, Sneak Attack doesn't
  sa.cond = {}; heart.cond.hexed = { by: "saphira" }; heart.hp = 180; env.roll(15, 15, 10, 6); // (two 15s: a ranged attack next to a foe rolls with disadvantage)
  await G.attack(sa, heart, { n: "Eldritch Blast", hit: 6, dmg: "1d10+3", type: "force", range: [24, 24], magic: true }); assert.equal(180 - heart.hp, 13 + 6);
});

test("attack: someone already down or gone doesn't strike (dropped by an opportunity attack on the way)", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("hans", 1, 1), env.mon("needle", 2, 1, 1)]), [hans, needle] = B.units;
  needle.hp = 0; needle.gone = true; env.roll(20, 20);
  const r = await G.attack(needle, hans, G.MON.needle.atk[1]); assert.equal(r.hit, false); assert.equal(hans.hp, 60); assert.equal(env.q.length, 2, "no dice were rolled");
  needle.gone = false; needle.hp = 1; await G.attack(needle, hans, G.MON.needle.atk[0]); assert.ok(hans.hp < 60, "at 1 HP it still can");
});

test("damage: immunity, resistance (rounded down) before vulnerability, temporary hit points first", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("hollower", 5, 5, 1), env.mon("husk", 6, 6, 1), env.crew("hans", 3, 3)]), [stig, hol, husk, hans] = B.units;
  await G.hurt(hol, 9, "fire", stig); assert.equal(hol.hp, 26 - 4, "resists: 9 halves to 4");
  hol.hp = 26; await G.hurt(hol, 9, "radiant", stig); assert.equal(hol.hp, 26 - 18, "vulnerable: doubled");
  hol.hp = 26; await G.hurt(hol, 9, "necrotic", stig); assert.equal(hol.hp, 26, "immune");
  await G.hurt(hol, 9, "slashing", stig); assert.equal(hol.hp, 22, "weapons that aren't magical: halved"); hol.hp = 26; await G.hurt(hol, 9, "slashing", stig, { magic: true }); assert.equal(hol.hp, 17);
  hol.hp = 26; await G.hurt(hol, 1, "fire", stig); assert.equal(hol.hp, 26, "1 halves to 0");
  await G.hurt(stig, 10, "fire", husk); assert.equal(stig.hp, 38, "Stig: immune to fire"); await G.hurt(stig, 11, "necrotic", husk); assert.equal(stig.hp, 33);
  await G.hurt(hans, 30, "psychic", husk); assert.equal(hans.hp, 60);
  // Path to the Grave doubles after resistance, once
  hol.hp = 26; hol.cond.grave = { by: "stig" }; await G.hurt(hol, 9, "fire", stig); assert.equal(hol.hp, 26 - 8); assert.equal(hol.cond.grave, undefined);
  // temp HP soak first and are not healed back
  hans.temp = 5; await G.hurt(hans, 7, "bludgeoning", husk); assert.equal(hans.temp, 0); assert.equal(hans.hp, 58);
  hans.temp = 5; await G.hurt(hans, 3, "bludgeoning", husk); assert.equal(hans.temp, 2); assert.equal(hans.hp, 58);
  G.heal(hans, 100); assert.equal(hans.hp, 60); assert.equal(hans.temp, 2);
});

test("concentration: DC 10 or half the damage, counted before temporary hit points; it drops at 0 HP; the Shadow Blade goes with it", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.mon("husk", 2, 1, 1), env.crew("saphira", 4, 4)]), [katy, husk, sa] = B.units;
  const dcOf = () => +(/vs DC (\d+)/.exec(env.logs.filter(l => /Concentration/.test(l)).pop()) || [])[1];
  katy.conc = { n: "Slow", conds: ["slowed"] }; husk.cond.slowed = { by: "katy" };
  env.roll(10, 1); await G.hurt(katy, 6, "bludgeoning", husk); assert.equal(dcOf(), 10); assert.ok(katy.conc, "10 + 0 meets DC 10");
  katy.hp = 34; katy.temp = 20; env.roll(11, 1); await G.hurt(katy, 24, "bludgeoning", husk); assert.equal(dcOf(), 12, "24 damage: DC 12, though temp HP took 20 of it"); assert.equal(katy.hp, 30);
  assert.equal(katy.conc, null); assert.equal(husk.cond.slowed, undefined, "the spell's effect ends with it");
  // one concentration save for a whole attack, from the total (weapon + poison)
  katy.hp = 34; katy.conc = { n: "Slow", conds: [] }; env.logs.length = 0; const grey = G.mkMon("grey", 1, 2, 0); B.units.push(grey); katy.hasActed = true;
  env.roll(15, 1, /*1d6*/ 6, /*2d6*/ 6, 6, /*con save*/ 20, 1); await G.attack(grey, katy, G.MON.grey.atk[0]);
  assert.equal(env.logs.filter(l => /Concentration/.test(l)).length, 1); assert.equal(dcOf(), 11, "6+4+12 = 22: DC 11"); assert.ok(katy.conc);
  // 0 HP ends it without a save
  env.logs.length = 0; await G.hurt(katy, 99, "bludgeoning", husk); assert.equal(katy.hp, 0); assert.equal(katy.conc, null); assert.equal(env.logs.some(l => /Concentration ·/.test(l)), false);
  // the Shadow Blade is a concentration spell: no concentration, no blade
  B.sc.blade = true; sa.conc = { n: "Shadow Blade", conds: [] }; assert.equal(G.crewMelee(sa).n, "Shadow Blade");
  G.dropConc(sa); assert.equal(B.sc.blade, false); assert.equal(G.crewMelee(sa).n, "Magical dagger");
});

test("dying: death saves, damage at 0 HP, a crit counts twice, healing brings you back, Hans just shuts down", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.mon("husk", 2, 1, 1), env.crew("hans", 4, 4)]), [katy, husk, hans] = B.units;
  await G.hurt(katy, 40, "bludgeoning", husk); assert.equal(katy.hp, 0); assert.deepEqual(katy.ds, [0, 0]); assert.ok(katy.cond.prone); assert.ok(!katy.dead);
  await G.hurt(katy, 3, "bludgeoning", husk); assert.deepEqual(katy.ds, [0, 1]); await G.hurt(katy, 3, "bludgeoning", husk, { crit: true }); assert.equal(katy.ds[1], 3); assert.equal(katy.dead, true);
  katy.dead = false; katy.ds = [0, 0];
  env.roll(10, 1); await G.deathSave(katy); assert.deepEqual(katy.ds, [1, 0]); env.roll(9, 1); await G.deathSave(katy); assert.deepEqual(katy.ds, [1, 1]);
  env.roll(1, 1); await G.deathSave(katy); assert.deepEqual(katy.ds, [1, 3]); assert.equal(katy.dead, true, "a natural 1 is two failures");
  katy.dead = false; katy.ds = [2, 2]; env.roll(15, 1); await G.deathSave(katy); assert.ok(katy.cond.stable); assert.ok(!katy.dead);
  await G.hurt(katy, 1, "bludgeoning", husk); assert.equal(katy.cond.stable, undefined, "damage undoes stable"); assert.equal(katy.dead, true);
  katy.dead = false; katy.ds = [0, 2]; env.roll(20, 1); await G.deathSave(katy); assert.equal(katy.hp, 1); assert.deepEqual(katy.ds, [0, 0]);
  katy.hp = 0; katy.ds = [1, 2]; G.heal(katy, 7); assert.equal(katy.hp, 7); assert.deepEqual(katy.ds, [0, 0]); G.heal(katy, 500); assert.equal(katy.hp, 34, "never over the maximum");
  katy.dead = true; katy.hp = 0; G.heal(katy, 5); assert.equal(katy.hp, 0, "healing doesn't raise the dead");
  await G.hurt(hans, 200, "bludgeoning", husk); assert.equal(hans.hp, 0); assert.ok(hans.cond.stable); await G.hurt(hans, 50, "bludgeoning", husk); assert.ok(!hans.dead); assert.deepEqual(hans.ds, [0, 0]);
});

test("monsters at 0 HP: they fall; the husk's Undead Fortitude and Ash Burst", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("hans", 1, 1), env.mon("husk", 2, 1, 1), env.mon("needle", 7, 7, 1)]), [hans, husk, needle] = B.units;
  await G.hurt(needle, 11, "fire", hans); assert.equal(needle.gone, true);
  husk.hp = 3; env.roll(/*fort d20: 5+3 = DC 8*/ 5, 1); await G.hurt(husk, 3, "bludgeoning", hans); assert.equal(husk.hp, 1, "5 + 3 meets DC 5 + 3"); assert.ok(!husk.gone);
  env.roll(/*fort*/ 2, 1, /*Hans's Con save*/ 20, 1); await G.hurt(husk, 1, "bludgeoning", hans); assert.equal(husk.gone, true, "2 + 3 fails DC 6"); assert.equal(hans.hp, 60, "poison immune and saved anyway");
  const h2 = G.mkMon("husk", 3, 3, 2); B.units.push(h2); h2.hp = 2; env.q = [20, 20]; await G.hurt(h2, 2, "radiant", hans); assert.equal(h2.gone, true, "radiant: no Fortitude");
});

test("saves: the bonus, Bane's d4, restrained on Dex, Stig's advantage on Con, the Heart's Legendary Resistance", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("husk", 2, 1, 1), env.mon("heart", 5, 3)]), [stig, husk, heart] = B.units;
  env.roll(9, 1); assert.equal(await G.save(husk, "con", 12), true, "9 + 3"); env.roll(8, 1); assert.equal(await G.save(husk, "con", 12), false);
  husk.cond.bane = {}; env.roll(/*d4*/ 1, 9, 1); assert.equal(await G.save(husk, "con", 12), false, "9 + 3 - 1"); husk.cond = {};
  husk.cond.restrained = {}; env.roll(18, 2); assert.equal(await G.save(husk, "dex", 5), false, "disadvantage: 2 - 2"); env.roll(18, 2); assert.equal(await G.save(husk, "con", 5), true);
  env.roll(20, 1); assert.equal(await G.save(husk, "wis", 21), false, "a 20 is no automatic save");
  env.roll(3, 12); assert.equal(await G.save(stig, "con", 14), true, "advantage: 12 + 2"); env.roll(3, 12); assert.equal(await G.save(stig, "dex", 5), false, "3 + 1: no advantage on Dex");
  env.ST.party.stig.ex = 1; env.roll(12, 1); assert.equal(await G.save(stig, "wis", 18), false, "exhaustion 1: 12 + 7 - 2, taken off once"); env.roll(13, 1); assert.equal(await G.save(stig, "wis", 18), true);
  B.sc.lr = 1; env.roll(1, 1); assert.equal(await G.save(heart, "wis", 15), true); assert.equal(B.sc.lr, 0); env.roll(1, 1); assert.equal(await G.save(heart, "wis", 15), false);
});

test("a crew check: Bardic Inspiration stays in the total when Heroic Inspiration rerolls the d20", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("hans", 1, 1)]), [hans] = B.units; hans.cond.insp = 8; env.ST.party.hans.insp = 1; env.answer = () => true;
  env.roll(/*d20*/ 5, 1, /*d8*/ 2, /*reroll*/ 6, 1);
  const r = await G.crewRoll("hans", "Athletics", 4, 14, { u: hans }); // 5+4 = 9, +2 = 11, reroll 6+4+2 = 12
  assert.equal(r.tot, 12); assert.equal(r.ok, false); assert.equal(hans.cond.insp, undefined); assert.equal(env.ST.party.hans.insp, 0);
  hans.cond.insp = 8; env.asks.length = 0; env.roll(1, 1); await G.crewRoll("hans", "Athletics", 4, 14, { u: hans }); assert.equal(env.asks.length, 0, "not offered when even an 8 can't save it");
  env.roll(10, 1); assert.equal((await G.crewRoll("hans", "Athletics", 4, 14, { u: hans })).ok, true); assert.equal(hans.cond.insp, 8, "kept on a success");
});

test("opportunity attacks: leaving reach provokes once a round; Disengage, staying in reach and a spent reaction don't", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.mon("husk", 2, 1, 1), env.mon("vine", 1, 2, 1)]), [katy, husk, vine] = B.units;
  const walk = async (...cells) => G.moveAlong(katy, cells.map(([x, y]) => ({ k: x + "," + y })));
  const oas = () => env.logs.filter(l => /opportunity attack/.test(l)).length;
  env.q = []; await walk([1, 0]); assert.equal(oas(), 0, "still next to the husk, still within the vine's 10 ft");
  env.roll(2, 2); await walk([0, 0]); assert.equal(oas(), 1, "out of the husk's reach"); assert.equal(husk.react, false); assert.equal(vine.react, true); assert.deepEqual([katy.x, katy.y], [0, 0]);
  katy.x = 1; katy.y = 1; env.q = []; await walk([0, 0]); assert.equal(oas(), 1, "its reaction is spent");
  husk.react = true; katy.x = 1; katy.y = 1; katy.disengage = true; await walk([0, 0], [0, 1]); assert.equal(oas(), 1, "Disengage");
  katy.disengage = false; katy.x = 1; katy.y = 1; env.roll(2, 2, 2, 2); await walk([0, 0]); await walk([5, 0]); assert.equal(oas(), 3, "the vine's reach is 10 ft");
  // a foe that can't act makes none
  husk.react = true; husk.cond.stunned = true; katy.x = 1; katy.y = 1; await walk([0, 0]); assert.equal(oas(), 3);
});

test("spell slots: Katy and Stig spend one a turn (2024); Saphira plays by the 2014 bonus-action rule", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.crew("stig", 1, 2), env.crew("saphira", 1, 3), env.mon("husk", 2, 2, 1)]), [katy, stig, sa, husk] = B.units;
  katy.hp = 10; husk.hp = 500;
  assert.equal(env.act(katy, "Mass Healing Word").ok, true); await env.act(katy, "Mass Healing Word").run();
  assert.equal(katy.slotUsed, true); assert.deepEqual(env.ST.party.katy.slots, [4, 3, 1]); assert.equal(katy.bonus, 0);
  for (const n of ["Dissonant Whispers", "Thunderwave", "Shatter", "Cure Wounds", "Slow"]) assert.equal(env.act(katy, n).ok, false, n + " after a slot this turn");
  assert.equal(env.act(katy, "Vicious Mockery").ok, true, "a cantrip is fine"); assert.equal(env.act(katy, "Misty Step").ok, false, "the free one needs the bonus action she spent");
  katy.bonus = 1; assert.equal(env.act(katy, "Misty Step").ok, true, "free once a day: no slot");
  katy.slotUsed = false; katy.act = 1; assert.equal(env.act(katy, "Shatter").ok, true, "next turn");
  // Stig's tattoo Cure Wounds costs no slot
  stig.slotUsed = true; stig.hp = 5; assert.equal(env.act(stig, "Guiding Bolt").ok, false); assert.equal(env.act(stig, "Cure Wounds").ok, true);
  // Saphira: Hex (bonus-action spell) rules out Shatter, not a cantrip; Shatter first rules out Hex
  husk.hasActed = true; assert.equal(env.act(sa, "Shatter").ok, true); await env.act(sa, "Hex").run(); assert.equal(sa.bSpell, true); assert.equal(env.ST.party.saphira.pact, 1);
  assert.equal(env.act(sa, "Shatter").ok, false); assert.equal(env.act(sa, "Eldritch Blast").ok, true); assert.equal(env.act(sa, "Hexblade's Curse").ok, false, "(bonus action spent)");
  sa.bSpell = false; sa.bonus = 1; sa.conc = null; sa.lvAct = true; assert.equal(env.act(sa, "Hex").ok, false); assert.equal(env.act(sa, "Misty Step").ok, false); assert.equal(env.act(sa, "Hexblade's Curse").ok, true, "not a spell");
  // Shadow Blade comes with level 6
  assert.equal(G.crewActions(sa).some(a => a.n === "Shadow Blade"), false); env.ST.party.saphira.lv = 6; assert.equal(G.crewActions(sa).some(a => a.n === "Shadow Blade"), true);
});

test("cantrips and spells at level 5: the numbers on the buttons", () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("katy", 1, 1), env.crew("stig", 1, 2), env.crew("saphira", 1, 3), env.crew("hans", 0, 0), env.mon("husk", 2, 2, 1)]), [katy, stig, sa, hans] = B.units;
  const sub = (u, n) => env.act(u, n).sub;
  assert.match(sub(katy, "Vicious Mockery"), /Wis DC 15 · 2d6 psychic/); assert.match(sub(katy, "Dissonant Whispers"), /3d6/); assert.match(sub(katy, "Thunderwave"), /Con DC 15 · 2d8/);
  assert.match(sub(katy, "Shatter"), /3d8/); assert.match(sub(katy, "Cure Wounds"), /2d8\+4/); assert.match(sub(katy, "Mass Healing Word"), /2d4\+4/); assert.match(sub(katy, "Bardic Inspiration"), /^d8 · 4 left/);
  assert.match(sub(stig, "Sacred Flame"), /Dex DC 17 · 2d8 radiant/); assert.match(sub(stig, "Toll the Dead"), /2d8, 2d12 if hurt/); assert.match(sub(stig, "Guiding Bolt"), /\+9 · 4d6 radiant/);
  assert.match(sub(sa, "Eldritch Blast"), /two beams · \+6 · 1d10\+3/); assert.match(sub(sa, "Fire Bolt"), /\+6 · 2d10 fire/); assert.match(sub(hans, "Slam ×2"), /\+6 · 2d6\+4/);
  assert.deepEqual(G.CREW.katy.slots, [4, 3, 2]); assert.deepEqual(G.CREW.katy.slots6, [4, 3, 3]); assert.deepEqual(G.CREW.stig.slots6, [4, 3, 3]); assert.equal(G.CREW.saphira.pact, 2);
  const p = G.freshParty(); for (const id of G.CREW_IDS) { assert.equal(p[id].lv, 5); assert.equal(p[id].hp, G.CREW[id].hp); }
});

test("Thunderwave: 2d8, half on a save; the push stops at a wall and at anyone in the way, and breaks a grip it drags out of reach", async () => {
  const { env, G } = world();
  const B = env.board(["......", "......", "......", "......", "..#..."], [env.crew("katy", 2, 2), env.mon("husk", 3, 2, 1), env.mon("husk", 5, 2, 2), env.mon("husk", 2, 3, 3), env.mon("husk", 1, 1, 4), env.crew("hans", 2, 1)]);
  const [katy, east, blocker, south, nw, hans] = B.units; for (const u of B.units) u.hp = u.max = 500;
  env.roll(/*2d8*/ 4, 5, /*saves, in board order*/ 1, 1, 1, 1, 1, 1, /*hans*/ 20, 1);
  await env.act(katy, "Thunderwave").run();
  assert.deepEqual([east.x, east.y], [4, 2], "one square, then the husk behind it is in the way"); assert.deepEqual([blocker.x, blocker.y], [5, 2], "out of the wave: not moved");
  assert.deepEqual([south.x, south.y], [2, 3], "a wall behind it: it stays"); assert.deepEqual([nw.x, nw.y], [0, 0], "pushed 10 ft, diagonally");
  assert.equal(east.hp, 491); assert.equal(blocker.hp, 500); assert.deepEqual([hans.x, hans.y], [2, 1], "friends aren't pushed"); assert.equal(hans.hp, 496, "but take the thunder: half of 9 on a save");
  for (const u of B.units) assert.equal(B.units.filter(o => o.x === u.x && o.y === u.y).length, 1, "nobody shares a square");
  assert.deepEqual(env.ST.party.katy.slots, [3, 3, 2]);
  // shove on its own: a vine pushed away lets go, one that stays in reach holds on
  const b2 = env.board(OPEN, [env.mon("vine", 3, 3, 1), env.crew("stig", 2, 3), env.crew("katy", 3, 1)]), [vine, stig, k2] = b2.units;
  stig.cond.grappled = { dc: 12, by: "vine1" }; k2.cond.grappled = { dc: 12, by: "vine1" };
  G.shove(vine, 1, 0, 2); assert.deepEqual([vine.x, vine.y], [5, 3]); assert.equal(stig.cond.grappled, undefined, "15 ft away, reach 10"); assert.ok(k2.cond.grappled, "10 ft away: still held");
  G.shove(vine, 1, 0, 9); assert.equal(vine.x, 9, "stops at the edge of the map");
});

test("spells without damage (Bane) leave no '0' on the board; who saves is told so", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("husk", 3, 1, 1), env.mon("husk", 3, 2, 2)]), [stig, h1, h2] = B.units;
  env.cell = [3, 1]; env.roll(/*h1 cha save*/ 1, 1, /*h2*/ 20, 1);
  await env.act(stig, "Bane").run();
  assert.ok(h1.cond.bane); assert.equal(h2.cond.bane, undefined); assert.equal(stig.conc.n, "Bane");
  assert.equal(env.logs.some(l => /takes 0/.test(l)), false); assert.deepEqual(env.floats, [["husk2", "saved"]]);
  G.dropConc(stig); assert.equal(h1.cond.bane, undefined);
});

test("healing: Cure Wounds 2d8+4, Circle of Mortality gives Stig the full dice on someone at 0 HP", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.crew("katy", 2, 1)]), [stig, katy] = B.units;
  katy.hp = 0; katy.ds = [1, 2]; katy.cond.prone = true; env.pickT = l => l.find(o => o.key === "katy");
  await env.act(stig, "Cure Wounds").run(); assert.equal(katy.hp, 20, "8 + 8 + 4"); assert.deepEqual(katy.ds, [0, 0]); assert.equal(env.ST.party.stig.res.tattoo, 0); assert.deepEqual(env.ST.party.stig.slots, [4, 3, 2]);
  katy.hp = 1; stig.act = 1; env.roll(1, 2); await env.act(stig, "Cure Wounds").run(); assert.equal(katy.hp, 8, "rolled when she is up: 1 + 2 + 4"); assert.deepEqual(env.ST.party.stig.slots, [3, 3, 2]);
});

test("Turn Undead: husks crumble, a Hollower that fails burns for 4d8 and leaves the board, one that saves stays", async () => {
  const { env, G } = world();
  const B = env.board(OPEN, [env.crew("stig", 1, 1), env.mon("husk", 3, 1, 1), env.mon("hollower", 3, 2, 1), env.mon("hollower", 3, 3, 2), env.mon("needle", 2, 2, 1), env.mon("hollower", 9, 7, 3)]);
  const [stig, husk, h1, h2, needle, far] = B.units;
  env.roll(/*h1 save*/ 1, 1, /*4d8*/ 1, 1, 1, 1, /*h2 save*/ 20, 1);
  await G.turnUndead(stig);
  assert.equal(husk.gone, true); assert.equal(h1.hp, 26 - 8, "4 radiant, doubled"); assert.equal(h1.ghost, true); assert.equal(h1.back, 4); assert.ok(!h2.ghost); assert.equal(h2.hp, 26);
  assert.equal(needle.hp, 11, "not undead"); assert.ok(!far.ghost, "over 30 ft away"); assert.equal(G.occupant(3, 2), undefined, "its square is free while it's away");
  // a second Turn Undead leaves the one in the walls alone (it used to burn it there, and the fight then never ended)
  env.roll(/*h2 save*/ 20, 1); const logs = env.logs.length; await G.turnUndead(stig);
  assert.equal(h1.hp, 18); assert.equal(h1.ghost, true); assert.ok(!env.logs.slice(logs).some(l => l.includes(h1.name)), "the fled Hollower isn't rolled for");
});

test("falling: 1d6 for every 10 ft, and prone", async () => {
  const { env, G } = world();
  const B = env.board(["-----", "-TTT-", "-----", "-----", "-----", "ggggg"], [env.mon("needle", 0, 0, 1)], "tree"), [n] = B.units; n.hp = n.max = 99; n.x = 0; n.y = 1;
  env.roll(3, 4); await G.fall(n, 0, 1); assert.deepEqual([n.x, n.y], [0, 5]); assert.equal(n.hp, 92, "20 ft: 2d6"); assert.ok(n.cond.prone);
});
