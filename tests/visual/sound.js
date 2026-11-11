#!/usr/bin/env node
// Listens to what the page really plays. An offline render can sound fine while the live page is silent (a node wired
// into itself, a context that never resumes), so this taps the output of the page's own AudioContext, the last node
// before the speakers, and measures it while an interlude plays itself.
//
// For each interlude it checks that:
//   - the output is not silent (it fails on a run where everything stays below -80 dB);
//   - the cues the script asks for ({sound: x} in source/interludes/<id>.md) really fire. Under ?playtest the page logs
//     every vision cue it plays in __fsnd.fired. Only one path through the story is played, so it asks for at least one;
//   - each cue in --cues, fired by hand once the interlude's mix is up, makes the output louder than the quietest it
//     was in the 1.5 s before.
//
//   cd tests/visual && npm i playwright && npx playwright install chromium     (once; node_modules is ignored)
//   node tests/visual/sound.js --site .                  a local build (the repo root after build-site.py)
//   node tests/visual/sound.js --url https://deploy-preview-50--<site>.netlify.app/
//
// Options
//   --url URL      page to open (default: the live GitHub Pages site)
//   --site DIR     serve this folder as the site instead of fetching --url
//   --ids LIST     which interludes (default s11-stig)
//   --cues LIST    vision cues to fire by hand (default drip,toast,white-out; "none" skips it)
//   --three DIR    serve three@0.160.0 from this folder (the npm package) when jsDelivr can't be reached
//   --secs S       seconds to listen to each interlude (default 120)
//   --pace MS      how long the auto player lingers on each passage (default 2500, so passages are read and their cues fire)
// Exit code 1 when anything failed.
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright'); } catch (e) {
  try { pw = require(require.resolve('playwright', { paths: [__dirname, process.cwd()] })); }
  catch (e2) { console.error('Playwright is missing. Run: cd tests/visual && npm i playwright && npx playwright install chromium'); process.exit(2); } }

const args = process.argv.slice(2), opt = {};
for (let i = 0; i < args.length; i++) { const a = args[i]; if (!a.startsWith('--')) continue;
  const k = a.slice(2), v = args[i + 1]; if (v === undefined || v.startsWith('--')) opt[k] = true; else { opt[k] = v; i++; } }
const LIVE = 'https://pompelmoes-garandor.github.io/chronicle-of-valeria/';
const list = (v, d) => String(v || d).split(',').map(s => s.trim()).filter(s => s && s !== 'none');
const IDS = list(opt.ids, 's11-stig'), CUES = list(opt.cues, 'drip,toast,white-out');
const secs = +opt.secs || 120, pace = opt.pace != null ? +opt.pace : 2500;
const base = opt.site ? 'http://chronicle.test/chronicle-of-valeria/' : String(opt.url || LIVE);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.glb': 'model/gltf-binary' };
const FONTS = /fonts\.(googleapis|gstatic)\.com/;
const dB = x => x > 0 ? 20 * Math.log10(x) : -180;

async function serve(ctx) {
  const root = opt.site && path.resolve(opt.site), three = opt.three && path.resolve(opt.three);
  await ctx.route('**/*', r => {
    const u = new URL(r.request().url());
    if (FONTS.test(u.host)) return r.abort();
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

// in the page, before its own code: every AudioContext gets a tap between the page and the real speakers
function tap() {
  try { localStorage.setItem('chron-open', '2'); localStorage.setItem('chron-play-opt', JSON.stringify({ sound: true, music: true, dice: false, fast: true })); } catch (e) {}
  const R = window.AudioContext; if (!R) return; window.__lv = [];
  window.AudioContext = class extends R { constructor(...a) { super(...a); const real = super.destination, g = this.createGain(), an = this.createAnalyser(); an.fftSize = 2048;
    g.connect(real); g.connect(an); Object.defineProperty(this, 'destination', { get: () => g }); const d = new Float32Array(2048);
    setInterval(() => { an.getFloatTimeDomainData(d); let s = 0; for (const v of d) s += v * v; window.__lv.push([performance.now(), this.state, Math.sqrt(s / d.length)]); }, 100); } };
}

const problems = [];
(async () => {
  const browser = await pw.chromium.launch({ headless: !opt.headed,
    args: ['--autoplay-policy=no-user-gesture-required'].concat(opt.headed ? [] : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']) });
  for (const id of IDS) {
    const fail = m => problems.push(`${id}: ${m}`);
    let want = [];
    try { want = [...new Set([...fs.readFileSync(path.join(__dirname, '..', '..', 'source', 'interludes', id + '.md'), 'utf8').matchAll(/\{sound:\s*([\w-]+)\s*\}/g)].map(m => m[1]))]; } catch (e) {}
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } }); await serve(ctx); await ctx.addInitScript(tap);
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !FONTS.test(m.text())) errors.push(m.text()); });
    await page.goto(base + (base.includes('?') ? '&' : '?') + 'playtest=auto&pace=' + pace + '&interlude=' + id, { waitUntil: 'domcontentloaded', timeout: 120000 });
    const t0 = Date.now(), byHand = {}; let left = CUES.slice();
    const lv = () => page.evaluate(() => (window.__lv || []).slice()).catch(() => []);
    const rms = (L, from, to) => Math.max(0, ...L.filter(x => x[0] >= from && x[0] < to).map(x => x[2]));
    while (Date.now() - t0 < secs * 1000) {
      await page.waitForTimeout(1000);
      if (!left.length) continue;
      // a cue by hand: the quietest the output was in the second before, against the loudest in the 2.5 s after
      const now = await page.evaluate(() => performance.now()).catch(() => 0), k = left[0];
      const up = await page.evaluate(k => window.__fsnd && window.__fsnd.cue(k), k).catch(() => false);
      if (!up) continue;
      left.shift(); await page.waitForTimeout(2600);
      const L = await lv(), pre = L.filter(x => x[0] >= now - 1500 && x[0] < now).map(x => x[2]), after = rms(L, now, now + 2600);
      byHand[k] = [pre.length ? dB(Math.min(...pre)) : -180, dB(after)];
      await page.waitForTimeout(5000); // let it (and any silence it leaves) finish before the next
    }
    const L = await lv(), fired = await page.evaluate(() => window.__fsnd ? window.__fsnd.fired.slice() : null).catch(() => null);
    const loud = L.filter(x => x[2] > 1e-4), peak = Math.max(0, ...L.map(x => x[2]));
    const fromScript = (fired || []).filter(k => want.includes(k));
    console.log(`${id}: ${L.length} samples, ${loud.length} not silent, loudest ${dB(peak).toFixed(1)} dB, context ${[...new Set(L.map(x => x[1]))].join('/') || 'never made'}`);
    console.log(`  script cues fired: ${[...new Set(fromScript)].join(', ') || 'none'} (the script has ${want.length})`);
    for (const [k, [b, a]] of Object.entries(byHand)) console.log(`  by hand: ${k} ${b.toFixed(1)} -> ${a.toFixed(1)} dB`);
    if (!L.length) fail('the page never made an AudioContext');
    else if (dB(peak) < -80) fail(`the output stayed silent (loudest ${dB(peak).toFixed(1)} dB)`);
    if (!fired) fail('no __fsnd on the page (is ?playtest working?)');
    else if (want.length && !fromScript.length) fail(`none of the script's ${want.length} sound cues fired`);
    for (const k of left) fail(`cue ${k} could not be fired by hand (the interlude's mix never came up)`);
    for (const [k, [b, a]] of Object.entries(byHand)) if (a < -80 || a < b + 3) fail(`cue ${k} made no sound (${b.toFixed(1)} -> ${a.toFixed(1)} dB)`);
    for (const e of errors.filter(e => !/net::|Failed to load resource/.test(e)).slice(0, 5)) fail(e);
    await ctx.close();
  }
  await browser.close();
  console.log(problems.length ? '\nFAILED\n' + problems.join('\n') : '\nok');
  process.exit(problems.length ? 1 : 0);
})();
