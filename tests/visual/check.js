#!/usr/bin/env node
// Visual check and frame timer for the Chronicle map.
//
// Opens the map in real browsers, puts the camera on a set of fixed views, and for each one takes a screenshot and
// times the frames (frames per second, median and slowest frame). It also collects console errors and failed loads.
// It steers the page through ?bench (window.__chron, see "MEASURING" in source/chronicle.html), which changes nothing
// for players.
//
//   cd tests/visual && npm i playwright && npx playwright install chromium webkit     (once; node_modules is ignored)
//   node tests/visual/check.js                                    the live site, Chromium and WebKit, desktop and phone
//   node tests/visual/check.js --url https://deploy-preview-35--<site>.netlify.app/
//   node tests/visual/check.js --site .                           a local build (the repo root after build-site.py)
//
// Options
//   --url URL            page to open (default: the live GitHub Pages site)
//   --site DIR           serve this folder as the site instead of fetching --url (no web server needed)
//   --browsers LIST      chromium,webkit,firefox (default chromium,webkit)
//   --channel NAME       use an installed browser for Chromium, e.g. chrome
//   --sizes LIST         desktop,phone (default both)
//   --poses LIST         which views (default all, see POSES below)
//   --quality LIST       auto (the page picks, as players get it), full, nopaint, lite, plain, off (default auto,full).
//                        For a breakdown of where the time goes: --quality full,nopaint,lite,plain (each drops one more
//                        layer at the same sharpness: the paint, the tilt-shift, then the whole lens)
//   --seconds N          how long to time each view (default 4)
//   --out DIR            where screenshots and results.json go (default tests/visual/out)
//   --storage FILE       JSON object of localStorage entries to set before the page loads (e.g. from an opened device)
//   --headed             show the browser windows. On a Mac, use this for the real graphics card
//   --software           sandboxes without a graphics card: frames are pumped by hand, screenshots only, no timing
//   --offline            with --site: block every other host (set THREE_JS=<path to three.module.min.js> to serve three)
// Exit code 1 when the page logged errors, so it can run in CI later.
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright'); } catch (e) {
  try { pw = require(require.resolve('playwright', { paths: [__dirname, process.cwd()] })); }
  catch (e2) { console.error('Playwright is missing. Run: cd tests/visual && npm i playwright && npx playwright install chromium webkit'); process.exit(2); } }

const args = process.argv.slice(2), opt = {};
for (let i = 0; i < args.length; i++) { const a = args[i]; if (!a.startsWith('--')) continue;
  const k = a.slice(2), v = args[i + 1]; if (v === undefined || v.startsWith('--')) opt[k] = true; else { opt[k] = v; i++; } }
const LIVE = 'https://pompelmoes-garandor.github.io/chronicle-of-valeria/';
const list = (v, d) => String(v || d).split(',').map(s => s.trim()).filter(Boolean);
const browsers = list(opt.browsers, 'chromium,webkit'), sizes = list(opt.sizes, 'desktop,phone');
const qualities = list(opt.quality, 'auto,full'), seconds = +opt.seconds || 4, software = !!opt.software;
const out = path.resolve(opt.out || path.join(__dirname, 'out')); fs.mkdirSync(out, { recursive: true });
const storage = opt.storage ? JSON.parse(fs.readFileSync(opt.storage, 'utf8')) : {};

// camera views: lon/lat in degrees, zoom 1 = whole globe far away, 0 = close to the ground; sun = longitude under the sun
const POSES = {
  globe:  { lon: -16, lat: 20, zoom: 0.62, sun: -40 },
  sunset: { lon: -16, lat: 20, zoom: 0.62, sun: -100 },
  hills:  { lon: -30, lat: 26, zoom: 0.28, sun: -60 },
  close:  { lon: -31, lat: 30, zoom: 0.08, sun: -75 },
  river:  { lon: -27, lat: 20, zoom: 0.02, sun: -80 },
  table:  { lon: -25, lat: 22, zoom: 0.30, sun: -50, table: true },
  night:  { lon: -30, lat: 28, zoom: 0.40, sun: 150 },
};
const poses = list(opt.poses, Object.keys(POSES).join(',')).filter(k => POSES[k] || console.warn('unknown pose', k));
const SIZES = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 },
  phone:   { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
};
const LEVELS = {                                   // what each quality means; "full" is what a fresh device starts with
  full: s => ({ lens: s.viewport.width <= 700 ? 'lite' : 'full', paint: true, pr: Math.min(s.deviceScaleFactor, 1.75), lock: true }),
  nopaint: s => ({ lens: s.viewport.width <= 700 ? 'lite' : 'full', paint: false, pr: Math.min(s.deviceScaleFactor, 1.75), lock: true }),
  lite: s => ({ lens: 'lite', paint: false, pr: Math.min(s.deviceScaleFactor, 1.75), lock: true }),
  plain: s => ({ lens: 'off', paint: false, pr: Math.min(s.deviceScaleFactor, 1.75), lock: true }),
  off:  s => ({ lens: 'off', paint: false, pr: 1, lock: true }),
};

const base = opt.site ? 'http://chronicle.test/chronicle-of-valeria/' : String(opt.url || LIVE);
const pageUrl = base + (base.includes('?') ? '&' : '?') + 'bench';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.css': 'text/css' };
async function serve(ctx) {
  if (!opt.site) return;
  const root = path.resolve(opt.site), three = process.env.THREE_JS;
  await ctx.route('**/*', r => {
    const u = new URL(r.request().url());
    if (three && u.pathname.endsWith('/three.module.min.js')) return r.fulfill({ contentType: 'text/javascript', body: fs.readFileSync(three) });
    if (u.host === 'chronicle.test') {
      const rel = decodeURIComponent(u.pathname.replace(/^\/chronicle-of-valeria\//, '')) || 'index.html';
      const f = path.join(root, rel);
      if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) return r.fulfill({ status: 404, body: 'not found' });
      return r.fulfill({ contentType: TYPES[path.extname(f)] || 'application/octet-stream', body: fs.readFileSync(f) });
    }
    return opt.offline ? r.abort() : r.continue();
  });
}
const launchArgs = { chromium: software ? ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  : ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--disable-renderer-backgrounding', '--disable-background-timer-throttling', '--disable-backgrounding-occluded-windows'] };

const results = [], problems = [];
(async () => {
  // mark the newest recap as seen (its session key is in the page), so the map opens on the globe instead of playing it
  try { const html = opt.site ? fs.readFileSync(path.join(path.resolve(opt.site), 'index.html'), 'utf8') : await (await fetch(base)).text();
    const m = html.match(/SKEY\s*=\s*"([^"]+)"/); if (m && !('chron-seen' in storage)) storage['chron-seen'] = m[1]; } catch (e) {}
  for (const bn of browsers) {
    if (!pw[bn]) { console.warn('unknown browser', bn); continue; }
    let b; try { b = await pw[bn].launch({ headless: !opt.headed, args: launchArgs[bn], channel: bn === 'chromium' && opt.channel ? opt.channel : undefined }); }
    catch (e) { console.error(`${bn}: could not start (${e.message.split('\n')[0]})`); problems.push(`${bn}: could not start`); continue; }
    for (const sn of sizes) {
      const size = SIZES[sn]; if (!size) { console.warn('unknown size', sn); continue; }
      const so = { ...size }; if (bn === 'firefox') delete so.isMobile;
      if (software) Object.assign(so, sn === 'phone' ? { viewport: { width: 390, height: 780 }, deviceScaleFactor: 1.5 } : { viewport: { width: 1000, height: 640 }, deviceScaleFactor: 1 });   // software GL is slow
      const ctx = await b.newContext(so); await serve(ctx);
      await ctx.addInitScript(([st, sw]) => {
        try { for (const [k, v] of Object.entries(st)) localStorage.setItem(k, v); } catch (e) {}
        if (sw) { const q = [], raf = window.requestAnimationFrame.bind(window); window.__hold = false;
          window.requestAnimationFrame = cb => { if (window.__hold) { q.push(cb); return 0; } return raf(cb); };
          window.__pump = n => { for (let i = 0; i < n; i++) { const c = q.splice(0), t = performance.now(); c.forEach(f => f(t)); } }; window.__queued = () => q.length; }
      }, [storage, software]);
      const p = await ctx.newPage(), tag = `${bn}-${sn}`, errors = [], failed = [];
      p.on('pageerror', e => errors.push('pageerror: ' + e.message));
      p.on('console', m => { if (m.type() === 'error' && !(software && /GPU stall|swiftshader/i.test(m.text())) && !(opt.offline && /Failed to load resource/.test(m.text())))
        errors.push('console: ' + m.text().slice(0, 300)); });
      p.on('requestfailed', r => { if (!opt.offline || /chronicle\.test/.test(r.url())) failed.push(r.url() + ' ' + (r.failure()?.errorText || '')); });
      p.on('response', r => { if (r.status() >= 400) failed.push(r.url() + ' ' + r.status()); });
      const run = { browser: bn, size: sn, viewport: size.viewport, url: pageUrl, errors, failed, views: [] };
      try {
        await p.goto(pageUrl, { waitUntil: 'load', timeout: 90000 });
        await p.waitForFunction(() => window.__chron, null, { timeout: 90000 });
        let info = await p.evaluate(() => __chron.info()); run.start = info;
        console.log(`\n${tag}: ${info.gpu} | max texture ${info.maxTexture} | lens ${info.lens} | pixel ratio ${info.pr}`);
        if (/swiftshader|llvmpipe|software/i.test(info.gpu)) console.log(`${tag}: software graphics, so the frame times say nothing about a real device`);
        if (info.sealed) { console.log(`${tag}: the map is sealed on this browser. Pass --storage with the entries of an opened device.`);
          await p.screenshot({ path: path.join(out, `${tag}-sealed.png`) }); run.sealed = true; results.push(run); await ctx.close(); continue; }
        await p.waitForTimeout(2000); await p.evaluate(() => __chron.quiet());
        if (info.worldFile) { try { await p.waitForFunction(() => __chron.info().world !== 'live', null, { timeout: 30000 }); }
          catch (e) { problems.push(`${tag}: the high-res world (${info.worldFile}) did not load`); } }
        info = await p.evaluate(() => __chron.info()); run.world = info.world;
        if (software) { await p.evaluate(() => { window.__hold = true; });   // the frame already asked for still runs; wait until the next one is held
          await p.waitForFunction(() => window.__queued() > 0, null, { timeout: 120000, polling: 250 }); }
        for (const [qi, q] of qualities.entries()) {
          if (q !== 'auto' && !LEVELS[q]) { console.warn('unknown quality', q); continue; }
          if (q !== 'auto') await p.evaluate(v => __chron.quality(v), LEVELS[q](so));
          else await p.evaluate(() => __chron.quality({ lock: false }));
          for (const [pi, k] of poses.entries()) {
            const pose = POSES[k];
            await p.evaluate(v => { __chron.quiet(); __chron.view(v); }, pose);
            let stats = null;
            if (software) await p.evaluate(v => { __pump(2); __chron.view(v); __pump(1); }, pose);
            else { await p.waitForTimeout(q === 'auto' && pi === 0 ? 6000 : 1200);   // the first view in auto lets the page settle its quality
              stats = await p.evaluate(ms => __chron.measure(ms), seconds * 1000); }
            const now = await p.evaluate(() => __chron.info());
            const shot = qi === 0 ? path.join(out, `${tag}-${k}.png`) : null;
            if (shot) await p.screenshot({ path: shot, timeout: 120000 });
            run.views.push({ quality: q, pose: k, ...stats, lens: now.lens, paint: now.paint, pr: now.pr, shot: shot && path.relative(out, shot) });
            console.log(`${tag} ${q.padEnd(4)} ${k.padEnd(6)} ` + (stats ? `${String(stats.fps).padStart(5)} fps  median ${stats.median} ms  p95 ${stats.p95}  worst ${stats.worst}  slow ${stats.slow}/${stats.frames}` : 'screenshot')
              + `  | lens ${now.lens}, paint ${now.paint ? 'on' : 'off'}, ${now.pr}x`);
          }
        }
      } catch (e) { problems.push(`${tag}: ${e.message.split('\n')[0]}`); console.error(`${tag}: ${e.message.split('\n')[0]}`); }
      if (errors.length) console.log(`${tag} errors:\n  ` + errors.join('\n  '));
      if (failed.length) console.log(`${tag} failed loads:\n  ` + failed.join('\n  '));
      results.push(run); await ctx.close();
    }
    await b.close();
  }
  const report = { when: new Date().toISOString(), url: pageUrl, site: opt.site || null, software, seconds, results, problems };
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify(report, null, 1));
  const errs = results.reduce((n, r) => n + r.errors.length, 0);
  console.log(`\nResults in ${path.join(out, 'results.json')}. ${errs ? errs + ' page errors.' : 'No page errors.'}${problems.length ? ' Problems: ' + problems.join('; ') : ''}`);
  process.exit(errs || problems.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
