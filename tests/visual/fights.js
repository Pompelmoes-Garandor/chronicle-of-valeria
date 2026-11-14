#!/usr/bin/env node
// Measures fight balance: plays every fight many times with three test players and prints who wins how often.
//
// The page has a fight simulator behind ?playtest (window.__sim, in source/chronicle.html under THE FIGHT SIMULATOR).
// It runs the real fight rules with seeded dice, nothing drawn and no pauses, a few milliseconds a fight. This script
// opens the page once with ?playtest&flat, runs every fight with every test player, prints a table and writes
// results.json. It changes nothing: no monster, no rule. Players never see any of it.
//   random   the ?playtest=auto player: random actions and targets (a floor, not a human)
//   steady   a middling player
//   careful  a smart human (a fight can have its own careful player: __sim.policy(fight, fn) in the page)
// Columns: wins of runs, mean rounds, how many heroes went under half their hit points and to 0 (mean per run, and the
// share of runs where it happened to anyone), deaths in all runs, milliseconds per fight.
// Each row runs twice with the same seed: the two must match exactly, or the dice are not under control.
//
//   cd tests/visual && npm i playwright && npx playwright install chromium     (once; node_modules is ignored)
//   node tests/visual/fights.js --site .            a local build (the repo root after build-site.py)
//   node tests/visual/fights.js --url https://deploy-preview-50--<site>.netlify.app/
//
// Options
//   --url URL          page to open (default: the live GitHub Pages site)
//   --site DIR         serve this folder as the site instead of fetching --url (no web server needed)
//   --three DIR        serve three@0.160.0 from this folder (the npm package) when jsDelivr can't be reached
//   --fights LIST      which fights (default: all the page knows; --list prints them with their start state)
//   --policies LIST    random, steady, careful (default all three)
//   --n N              fights per row (default 20)
//   --seed N           the seed (default 1)
//   --dread N          IST.dread for the interlude fights (default: 0 for session 10's, 3 for undertow, hush, seal, frost)
//   --flicker N        IST.flicker for the interlude fights (default 2)
//   --patch FILE       a JSON file of changes to try, for this run only: {"husk":{"hp":30}} changes a monster (MON),
//                      {"sc":{"flame":4}} the fight's start values, {"def":{...}} the fight itself. With "sc" or "def" name one fight
//   --no-variants      skip the extra rows (the Heart straight after the tunnels, the ambush with a watch kept)
//   --no-recheck       skip the second, same-seed run of each row
//   --timeout S        seconds per row before it counts as stuck (default 120)
//   --out DIR          results.json (default tests/visual/out/fights)
//   --headed           show the browser
// Exit code 1 on a page error, a fight that got stuck or threw, or a same-seed re-run that differs.
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright'); } catch (e) {
  try { pw = require(require.resolve('playwright', { paths: [__dirname, process.cwd()] })); }
  catch (e2) { console.error('Playwright is missing. Run: cd tests/visual && npm i playwright && npx playwright install chromium'); process.exit(2); } }

const args = process.argv.slice(2), opt = {};
for (let i = 0; i < args.length; i++) { const a = args[i]; if (!a.startsWith('--')) continue;
  const k = a.slice(2), v = args[i + 1]; if (v === undefined || v.startsWith('--')) opt[k] = true; else { opt[k] = v; i++; } }
const LIVE = 'https://pompelmoes-garandor.github.io/chronicle-of-valeria/';
const list = (v, d) => String(v || d).split(',').map(s => s.trim()).filter(Boolean);
const policies = list(opt.policies, 'random,steady,careful'), N = +opt.n || 20, seed = opt.seed != null ? +opt.seed : 1, timeout = (+opt.timeout || 120) * 1000;
const out = path.resolve(opt.out || path.join(__dirname, 'out', 'fights')); fs.mkdirSync(out, { recursive: true });
const base = opt.site ? 'http://chronicle.test/chronicle-of-valeria/' : String(opt.url || LIVE);
const patch = opt.patch ? JSON.parse(fs.readFileSync(path.resolve(opt.patch), 'utf8')) : null;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.css': 'text/css', '.glb': 'model/gltf-binary' };
const FONTS = /fonts\.(googleapis|gstatic)\.com/;
// extra rows: the same fight from another start
const VARIANTS = [{ key: 'heart', label: 'heart, after tunnels', o: { after: ['tunnels'] } }, { key: 'ambush', label: 'ambush, watch kept', o: { state: { flags: { watch: true } } } }];

async function serve(ctx) {
  const root = opt.site && path.resolve(opt.site), three = opt.three && path.resolve(opt.three);
  await ctx.route('**/*', r => {
    const u = new URL(r.request().url());
    if (FONTS.test(u.host)) return r.abort(); // fonts are optional; keeps runs offline-friendly and fast
    if (three && u.host === 'cdn.jsdelivr.net' && u.pathname.includes('/three@0.160.0/')) {
      const f = path.join(three, u.pathname.split('/three@0.160.0/')[1]);
      if (f.startsWith(three) && fs.existsSync(f)) return r.fulfill({ contentType: 'text/javascript', body: fs.readFileSync(f) });
    }
    if (root && u.host === 'chronicle.test') {
      const rel = decodeURIComponent(u.pathname.replace(/^\/chronicle-of-valeria\//, '')) || 'index.html';
      const f = path.join(root, rel);
      if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) return r.fulfill({ status: 404, body: 'not found' });
      return r.fulfill({ contentType: TYPES[path.extname(f)] || 'application/octet-stream', body: fs.readFileSync(f) });
    }
    return r.continue();
  });
}

(async () => {
  let skey = null;
  try { const html = opt.site ? fs.readFileSync(path.join(path.resolve(opt.site), 'index.html'), 'utf8') : await (await fetch(base)).text();
    skey = (html.match(/SKEY\s*=\s*"([^"]+)"/) || [])[1] || null; } catch (e) {}
  const browser = await pw.chromium.launch({ headless: !opt.headed,
    args: opt.headed ? [] : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } }); await serve(ctx);
  // chron-open unseals the map on this test device only; chron-seen skips the recap
  await ctx.addInitScript(k => { try { localStorage.setItem('chron-open', '2'); if (k) localStorage.setItem('chron-seen', k); } catch (e) {} }, skey);
  const page = await ctx.newPage(), errors = [], problems = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !FONTS.test((m.location() || {}).url || '') && !FONTS.test(m.text()) && !/ERR_FAILED|net::/.test(m.text())) errors.push(m.text()); });
  await page.goto(base + (base.includes('?') ? '&' : '?') + 'playtest&flat', { waitUntil: 'domcontentloaded', timeout: 120000 });
  let ready = false;
  for (let i = 0; i < 120 && !ready; i++) { await page.waitForTimeout(500); ready = await page.evaluate(() => !!window.__sim).catch(() => false); }
  if (!ready) { console.error('The page has no fight simulator (window.__sim). Is this a build with it, and is the map unsealed?', errors); await browser.close(); process.exit(1); }
  await page.waitForTimeout(2000); // let play mode open its hub first
  const info = await page.evaluate(() => window.__sim.info());
  if (opt.list) { for (const k in info) console.log(k.padEnd(12), info[k].kind.padEnd(10), info[k].start); await browser.close(); return; }
  const fights = list(opt.fights, Object.keys(info).join(','));
  for (const k of fights) if (!info[k.replace(/^i-/, '')]) { console.error('no such fight: ' + k + '. The page knows: ' + Object.keys(info).join(', ')); await browser.close(); process.exit(1); }
  const rows = fights.map(k => ({ key: k.replace(/^i-/, ''), label: k.replace(/^i-/, ''), o: {} }));
  if (!opt['no-variants']) for (const v of VARIANTS) if (rows.some(r => r.key === v.key)) rows.splice(rows.findIndex(r => r.key === v.key) + 1, 0, v);
  const extra = {}; if (opt.dread != null) extra.dread = +opt.dread; if (opt.flicker != null) extra.flicker = +opt.flicker; if (patch) extra.patch = patch;
  const run = (key, o) => Promise.race([new Promise(r => setTimeout(() => r({ err: 'stuck: no answer in ' + timeout / 1000 + ' s' }), timeout)),
    page.evaluate(([key, o]) => window.__sim.run(key, o).catch(e => ({ err: String(e && e.message || e) })), [key, o]).catch(e => ({ err: e.message.split('\n')[0] }))]);
  const pct = v => Math.round(v * 100) + '%', pad = (s, n) => String(s).padEnd(n), lp = (s, n) => String(s).padStart(n);
  console.log(`${N} fights a row, seed ${seed}` + (patch ? ', patch ' + JSON.stringify(patch) : '') + (opt.dread != null ? ', dread ' + opt.dread : '') + (opt.flicker != null ? ', flicker ' + opt.flicker : ''));
  console.log(pad('fight', 22) + pad('player', 13) + lp('wins', 7) + lp('rate', 6) + lp('rounds', 8) + lp('<half', 7) + lp('runs', 6) + lp('at 0', 6) + lp('runs', 6) + lp('dead', 6) + lp('other', 7) + lp('ms', 5) + '  same');
  const results = [];
  for (const row of rows) for (const policy of policies) {
    const o = Object.assign({ n: N, policy, seed }, extra, row.o);
    if (o.patch && (o.patch.sc || o.patch.def) && rows.filter(r => !r.o.after && !r.o.state).length > 1) { console.error('--patch with "sc" or "def" changes one fight: name it with --fights'); await browser.close(); process.exit(1); }
    const r = await run(row.key, o);
    if (r.err) { problems.push(`${row.label} / ${policy}: ${r.err}`); console.log(pad(row.label, 22) + pad(policy, 13) + '  ' + r.err); results.push({ label: row.label, policy, error: r.err }); if (/^stuck/.test(r.err)) break; continue; }
    let same = '-';
    if (!opt['no-recheck']) { const r2 = await run(row.key, o); same = r2.hash === r.hash && r2.wins === r.wins ? 'yes' : 'NO'; if (same === 'NO') problems.push(`${row.label} / ${policy}: the same seed gave ${r.wins} wins, then ${r2.err || r2.wins} (${r.hash} / ${r2.hash})`); }
    if (r.other) problems.push(`${row.label} / ${policy}: ${r.other} of ${r.n} fights did not end in a win or a loss: ${JSON.stringify(r.reasons)}`);
    if (r.async) problems.push(`${row.label} / ${policy}: ${r.async} fights waited on the clock (a real pause somewhere in the fight)`);
    console.log(pad(row.label, 22) + pad(r.policy, 13) + lp(r.wins + '/' + r.n, 7) + lp(pct(r.winRate), 6) + lp(r.rounds.avg.toFixed(1), 8) + lp(r.half.toFixed(2), 7) + lp(pct(r.halfRuns), 6) + lp(r.downs.toFixed(2), 6) + lp(pct(r.zeroRuns), 6) + lp(r.deaths, 6) + lp(r.other, 7) + lp(r.msPerFight, 5) + '  ' + same);
    results.push(Object.assign({ label: row.label, same }, r));
  }
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ at: new Date().toISOString(), base, n: N, seed, patch, dread: opt.dread, flicker: opt.flicker, start: info, results, errors, problems }, null, 1));
  console.log('\nresults: ' + path.join(out, 'results.json'));
  if (errors.length) console.log('page errors:\n  ' + errors.join('\n  '));
  if (problems.length) console.log('problems:\n  ' + problems.join('\n  '));
  await browser.close();
  process.exit(errors.length || problems.length ? 1 : 0);
})();
