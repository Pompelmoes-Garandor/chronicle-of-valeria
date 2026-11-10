#!/usr/bin/env node
// Plays every interlude end to end, the way a player would, and checks what it would send to Sam.
//
// The prologue (round the fire) is only read: it passes when it is read to the end and keeps nothing to send.
// Each interlude runs in ?playtest=auto (the page picks the choices, the crew fights by itself) at phone and desktop
// size. For each run it checks: the result reaches this device's chron-interludes, it passes the server's own check
// (validInterlude in netlify/lib/rules.mts), the session 10 save is never written, and the page logs no errors
// (blocked fonts are fine). One more run leaves an interlude in the middle of its fight ("Back to the map") and checks
// that the session 10 party comes back. Screenshots of a passage and of the end go to --out.
//
//   cd tests/visual && npm i playwright && npx playwright install chromium     (once; node_modules is ignored)
//   node tests/visual/interludes.js --site .            a local build (the repo root after build-site.py)
//   node tests/visual/interludes.js --url https://deploy-preview-50--<site>.netlify.app/
//
// Options
//   --url URL          page to open (default: the live GitHub Pages site)
//   --site DIR         serve this folder as the site instead of fetching --url (no web server needed)
//   --ids LIST         which interludes (default all four)
//   --sizes LIST       phone, desktop (default both)
//   --no-leave         skip the "leave in the middle of the fight" run
//   --three DIR        serve three@0.160.0 from this folder (the npm package) when jsDelivr can't be reached
//   --timeout S        seconds per interlude before it counts as stuck (default 300)
//   --pace MS          how long the auto player lingers on each passage, so screenshots catch it (default 700)
//   --out DIR          screenshots and results.json (default tests/visual/out/interludes)
//   --netlify-site DIR also play one signed in, on a Netlify build in DIR (build-site.py ... --netlify), against a stand-in
//                      for /api with the real rules: Send to Sam keeps what is on the server, "Used it" writes echo.used
//   --headed           show the browser. Without it Chromium uses software WebGL (slow, but runs anywhere)
// Exit code 1 when anything failed.
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright'); } catch (e) {
  try { pw = require(require.resolve('playwright', { paths: [__dirname, process.cwd()] })); }
  catch (e2) { console.error('Playwright is missing. Run: cd tests/visual && npm i playwright && npx playwright install chromium'); process.exit(2); } }

const args = process.argv.slice(2), opt = {};
for (let i = 0; i < args.length; i++) { const a = args[i]; if (!a.startsWith('--')) continue;
  const k = a.slice(2), v = args[i + 1]; if (v === undefined || v.startsWith('--')) opt[k] = true; else { opt[k] = v; i++; } }
const LIVE = 'https://pompelmoes-garandor.github.io/chronicle-of-valeria/';
const list = (v, d) => String(v || d).split(',').map(s => s.trim()).filter(Boolean);
const IDS = list(opt.ids, 's10-katy,s10-saphira,s10-stig,s10-together'), sizeNames = list(opt.sizes, 'phone,desktop').filter(k => ['phone', 'desktop'].includes(k) || console.warn('unknown size', k));
const SIZES = { phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 } };
const timeout = (+opt.timeout || 300) * 1000, pace = opt.pace != null ? +opt.pace : 700;
const out = path.resolve(opt.out || path.join(__dirname, 'out', 'interludes')); fs.mkdirSync(out, { recursive: true });
const base = opt.site ? 'http://chronicle.test/chronicle-of-valeria/' : String(opt.url || LIVE);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.css': 'text/css' };
const FONTS = /fonts\.(googleapis|gstatic)\.com/;

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

const results = [], problems = [];
// a screenshot never fails the run: software WebGL can keep the page too busy to paint in time
const snap = (page, file) => page.screenshot({ path: path.join(out, file), timeout: 45000 }).catch(e => console.warn('  (no screenshot ' + file + ': ' + e.message.split('\n')[0] + ')'));
(async () => {
  // the server's own check for a finished interlude (Node 22.18+ reads the .mts directly)
  let validInterlude = null;
  try { ({ validInterlude } = await import(path.join(__dirname, '..', '..', 'netlify', 'lib', 'rules.mts'))); }
  catch (e) { console.warn('could not load netlify/lib/rules.mts (' + e.message.split('\n')[0] + '); skipping the server check'); }
  let skey = null;
  try { const html = opt.site ? fs.readFileSync(path.join(path.resolve(opt.site), 'index.html'), 'utf8') : await (await fetch(base)).text();
    skey = (html.match(/SKEY\s*=\s*"([^"]+)"/) || [])[1] || null; } catch (e) {}
  if (!skey && opt['netlify-site']) try { skey = (fs.readFileSync(path.join(path.resolve(opt['netlify-site']), 'index.html'), 'utf8').match(/SKEY\s*=\s*"([^"]+)"/) || [])[1] || null; } catch (e) {}
  const browser = await pw.chromium.launch({ headless: !opt.headed,
    args: opt.headed ? [] : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });

  async function open(size, id) {
    const ctx = await browser.newContext(SIZES[size]); await serve(ctx);
    // chron-open unseals the map on this test device only; chron-seen skips the recap
    await ctx.addInitScript(k => { try { localStorage.setItem('chron-open', '2'); if (k) localStorage.setItem('chron-seen', k); } catch (e) {} }, skey);
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !FONTS.test((m.location() || {}).url || '') && !FONTS.test(m.text())) errors.push(m.text()); });
    await page.goto(base + (base.includes('?') ? '&' : '?') + 'playtest=auto&pace=' + pace + '&interlude=' + id, { waitUntil: 'domcontentloaded', timeout: 120000 }).catch(e => errors.push('could not open the page: ' + e.message.split('\n')[0]));
    return { ctx, page, errors };
  }
  const state = (page, id) => Promise.race([new Promise(r => setTimeout(() => r({ busy: true }), 30000)), page.evaluate(id => { const x = window.__inter; if (!x) return { ready: false };
    const ist = x.ist(); return { ready: true, at: ist ? ist.at : null, fight: x.inter(), on: x.on(), res: x.results()[id] || null,
      save: localStorage.getItem('chron-play-s10'), echo: !!document.querySelector('#play .pl-echo'),
      prologue: !!(x.list.find(i => i.id === id) || {}).prologue, read: localStorage.getItem('chron-prologue-' + id) === '1' }; }, id).catch(e => ({ error: e.message }))]); // software WebGL can keep the page busy for a while

  for (const size of sizeNames) for (const id of IDS) {
    const name = `${id}-${size}`, t0 = Date.now(), fail = m => problems.push(`${name}: ${m}`);
    const { ctx, page, errors } = await open(size, id);
    let st = {}, shot = false, echoShot = false, savedDuring = null, lastAt = null;
    while (Date.now() - t0 < timeout) {
      await page.waitForTimeout(250); st = await state(page, id); if (st.at) lastAt = st.at;
      if (st.save && !savedDuring) savedDuring = st.at || 'fight';
      if (!shot && st.at) { shot = true; await snap(page, `${name}-passage.png`); }
      if (!echoShot && st.echo) { echoShot = true; await snap(page, `${name}-echo.png`); }
      if (st.res || st.prologue && st.read) break; // a prologue is only read: nothing to keep or send
    }
    const errs = errors.slice(); // errors after the result belong to whatever the auto player does next
    if (st.prologue) {
      if (!st.read) fail(`not read to the end after ${Math.round((Date.now() - t0) / 1000)} s (last passage ${lastAt || '?'})`);
      if (st.res) fail('a prologue kept a result to send');
    } else if (!st.res) fail(`no result after ${Math.round((Date.now() - t0) / 1000)} s (last passage ${lastAt || '?'})`);
    else {
      if (!echoShot) fail('the Echo card never showed');
      if (validInterlude && !validInterlude(st.res)) fail('the result would be refused by the server: ' + JSON.stringify(st.res).slice(0, 300));
      if (!st.res.echo || !st.res.echo.text) fail('no Echo in the result');
      if (!st.res.lore || !st.res.lore.length) fail('no lore in the result');
    }
    if (savedDuring) fail('the session 10 save was written during the interlude (at ' + savedDuring + ')');
    if (errs.length) fail('console errors: ' + errs.slice(0, 5).join(' | '));
    results.push({ name, ok: !problems.some(p => p.startsWith(name + ':')), seconds: Math.round((Date.now() - t0) / 1000), result: st.res });
    for (const p of problems.filter(p => p.startsWith(name + ':'))) console.log('  ' + p);
    console.log(`${results.at(-1).ok ? 'ok  ' : 'FAIL'} ${name} · ${results.at(-1).seconds} s` + (st.prologue && st.read ? ' · read to the end' : '') + (st.res ? ` · ending ${st.res.ending}` + (st.res.fight ? ` · fight ${st.res.fight.won ? 'won' : 'lost'} in ${st.res.fight.rounds}` : '') : ''));
    await ctx.close();
  }

  // leave in the middle of the fight: the party of session 10 comes back and nothing is half-saved
  if (!opt['no-leave']) {
    const id = IDS[0], name = `leave-${id}`, t0 = Date.now(), fail = m => problems.push(`${name}: ${m}`);
    const { ctx, page, errors } = await open('phone', id);
    let st = {};
    while (Date.now() - t0 < timeout) { await page.waitForTimeout(700); st = await state(page, id); if (st.fight || st.res) break; }
    if (!st.fight) fail(st.res ? 'finished before the fight could be left' : 'the fight never started');
    else {
      // the real menu, clicked through the DOM (a busy software-WebGL page never looks "stable" to Playwright)
      await page.locator('#play .pl-x').evaluate(b => b.click());
      await page.locator('#play .pl-menu button', { hasText: 'Back to the map' }).evaluate(b => b.click(), null, { timeout: 60000 });
      await page.waitForTimeout(1500); st = await state(page, id);
      if (st.on) fail('the play screen is still open');
      if (st.fight) fail('still marked as in an interlude fight (saving would stay off)');
      if (st.at) fail('the interlude is still marked as running');
      if (st.save) fail('the session 10 save was written');
      await snap(page, `${name}.png`);
    }
    if (errors.length) fail('console errors: ' + errors.slice(0, 5).join(' | '));
    results.push({ name, ok: !problems.some(p => p.startsWith(name + ':')), seconds: Math.round((Date.now() - t0) / 1000) });
    for (const p of problems.filter(p => p.startsWith(name + ':'))) console.log('  ' + p);
    console.log(`${results.at(-1).ok ? 'ok  ' : 'FAIL'} ${name}`);
    await ctx.close();
  }

  // signed in on the Netlify edition, against a stand-in for /api (the real rules from netlify/lib/rules.mts):
  // Send to Sam keeps the interludes already on the server, and "Used it" on the sheet writes echo.used back
  if (opt['netlify-site']) {
    const id = 's10-katy', name = 'online-' + id, t0 = Date.now(), fail = m => problems.push(`${name}: ${m}`);
    let checkDoc = null; try { ({ checkDoc } = await import(path.join(__dirname, '..', '..', 'netlify', 'lib', 'rules.mts'))); } catch (e) {}
    const older = { character: 'katy', title: 'Empty Hands', path: ['A gift'], ending: 'A', echo: { id: 's10-together-A', text: 'Warm: one reroll.', used: true },
      lore: ['Hans logged: a fire.'], finishedAt: 1 };
    const db = { players: { ann: { character: 'katy', at: 1 } }, votes: {}, interludes: { ann: { done: { 's10-together': older } } } };
    const puts = [];
    const root = path.resolve(opt['netlify-site']), three = opt.three && path.resolve(opt.three);
    const ctx = await browser.newContext(SIZES.phone);
    await ctx.route('**/*', async r => {
      const req = r.request(), u = new URL(req.url());
      if (FONTS.test(u.host)) return r.abort();
      if (u.host === 'cdn.jsdelivr.net' && u.pathname.includes('@netlify/identity'))
        return r.fulfill({ contentType: 'text/javascript', body: 'export async function handleAuthCallback(){} export async function getUser(){return {email:"ann@example.com"}} export async function logout(){} export async function login(){}' });
      if (three && u.host === 'cdn.jsdelivr.net' && u.pathname.includes('/three@0.160.0/')) {
        const f = path.join(three, u.pathname.split('/three@0.160.0/')[1]);
        if (f.startsWith(three) && fs.existsSync(f)) return r.fulfill({ contentType: 'text/javascript', body: fs.readFileSync(f) });
      }
      if (u.host !== 'chronicle.test') return r.continue();
      const json = (o, status = 200) => r.fulfill({ status, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/api/me') return json({ id: 'ann', isDm: false });
      if (u.pathname === '/api/accepted') return json({ accepted: [] });
      if (u.pathname === '/api/profiles') return json({});
      if (u.pathname === '/api/db') return json(db);
      const m = u.pathname.match(/^\/api\/db\/(\w+)\/([\w-]+)$/);
      if (m && req.method() === 'PUT') { const doc = JSON.parse(req.postData() || 'null'), [, col, docId] = m;
        const ck = checkDoc ? checkDoc({ id: 'ann', isDm: false }, col, docId, doc) : { ok: true };
        puts.push({ col, docId, doc, ok: ck.ok, error: ck.error });
        if (!ck.ok) return json({ error: ck.error }, ck.status);
        (db[col] = db[col] || {})[docId] = doc; return json({ ok: true }); }
      const rel = decodeURIComponent(u.pathname.replace(/^\/chronicle-of-valeria\//, '').replace(/^\//, '')) || 'index.html', f = path.join(root, rel);
      if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) return r.fulfill({ status: 404, body: 'not found' });
      return r.fulfill({ contentType: TYPES[path.extname(f)] || 'application/octet-stream', body: fs.readFileSync(f) });
    });
    await ctx.addInitScript(k => { try { localStorage.setItem('chron-open', '2'); localStorage.setItem('chron-sheet', 'katy'); if (k) localStorage.setItem('chron-seen', k); } catch (e) {} }, skey);
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !FONTS.test((m.location() || {}).url || '') && !FONTS.test(m.text())) errors.push(m.text()); });
    await page.goto('http://chronicle.test/?playtest=auto&pace=0&interlude=' + id, { waitUntil: 'domcontentloaded', timeout: 120000 }).catch(e => errors.push('could not open the page: ' + e.message.split('\n')[0]));
    let st = {};
    while (Date.now() - t0 < timeout) { await page.waitForTimeout(500); st = await state(page, id); if (st.res) break; }
    if (!st.res) fail('no result');
    else {
      await page.waitForTimeout(1500);
      if (!db.interludes.ann.done[id]) await page.evaluate(id => window.__inter.send([id]), id);
      await page.waitForTimeout(1000);
      const d = db.interludes.ann.done;
      if (!d[id]) fail('Send to Sam never reached the server' + (puts.length ? ': ' + JSON.stringify(puts.at(-1)).slice(0, 300) : ''));
      if (JSON.stringify(d['s10-together']) !== JSON.stringify(older)) fail('sending dropped or changed the interlude already on the server');
      if (puts.some(p => !p.ok)) fail('the server refused a write: ' + puts.filter(p => !p.ok).map(p => p.error).join(', '));
      if (d[id] && 'sent' in d[id]) fail('a local-only field went to the server');
      // the Echo on Katy's sheet
      await page.evaluate(() => window.__inter.exit()); await page.waitForTimeout(800);
      await page.locator('[data-tab="sheets"]').evaluate(b => b.click()); await page.waitForTimeout(800);
      const chips = await page.locator('.cs-echo').count();
      if (chips < 2) fail(`expected 2 Echoes on Katy's sheet, found ${chips}`);
      await snap(page, `${name}-sheet.png`);
      const btn = page.locator('.cs-echo button[aria-pressed="false"]').first();
      if (await btn.count()) { await btn.evaluate(b => b.click()); await page.waitForTimeout(1500);
        if (!db.interludes.ann.done[id]?.echo?.used) fail('"Used it" did not write echo.used to the server');
        if (!db.interludes.ann.done['s10-together']) fail('"Used it" dropped the other interlude'); }
      else fail('no "Used it" button on the sheet');
    }
    if (errors.length) fail('console errors: ' + errors.slice(0, 5).join(' | '));
    results.push({ name, ok: !problems.some(p => p.startsWith(name + ':')), seconds: Math.round((Date.now() - t0) / 1000), puts: puts.length });
    for (const p of problems.filter(p => p.startsWith(name + ':'))) console.log('  ' + p);
    console.log(`${results.at(-1).ok ? 'ok  ' : 'FAIL'} ${name} · ${puts.length} writes`);
    await ctx.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ when: new Date().toISOString(), base, results, problems }, null, 2));
  if (problems.length) { console.log('\nProblems:\n  ' + problems.join('\n  ')); process.exit(1); }
  console.log('\nAll interludes played through. Screenshots in ' + out);
})().catch(e => { console.error(e); process.exit(1); });
