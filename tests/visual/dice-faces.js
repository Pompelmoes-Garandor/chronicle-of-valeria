#!/usr/bin/env node
// Checks the dice of the roll overlay (makeDie in source/chronicle.html) and takes pictures of them.
//
// It runs the "DIE FACES" block of the page on its own in Chromium, with Three.js 0.160.0: no map, no server, no seal.
//
//   cd tests/visual && npm i playwright && npx playwright install chromium     (once; node_modules is ignored)
//   node tests/visual/dice-faces.js                       checks, then screenshots into tests/visual/out/dice
//   THREE_JS=<path to three.module.min.js> node tests/visual/dice-faces.js     where jsDelivr cannot be reached
//
// Options
//   --out DIR        where the screenshots go (default tests/visual/out/dice)
//   --sizes LIST     desktop, phone (default both)
//   --no-shots       only the checks
//   --shots LIST     which pictures: gallery, glow, 4, 6, 8, 10, 12, 20 (default all)
//   --software       sandboxes without a graphics card (SwiftShader)
//   --headed         show the browser
//
// For every die (d4 d6 d8 d10 d12 d20) and every value v it checks:
//   - each number is on the die once and opposite faces add up to sides+1 (a d4: one number per corner, three per face)
//   - faceQuat(v) turns the face of v to +z within 2 degrees (a d4: the corner of v), and the number's top to +y within 2 degrees
//   - a ray from the camera (+z) hits that face, at a point of the atlas cell drawn for that face, and the cell has ink
//   - the number nearest the camera is v (a d4: the three numbers at the top corner are all v)
// Exit code 1 when a check fails or the page logged an error.
const fs = require('fs'), path = require('path');
let pw; try { pw = require('playwright'); } catch (e) {
  try { pw = require(require.resolve('playwright', { paths: [__dirname, process.cwd()] })); }
  catch (e2) { console.error('Playwright is missing. Run: cd tests/visual && npm i playwright && npx playwright install chromium'); process.exit(2); } }

const args = process.argv.slice(2), opt = {};
for (let i = 0; i < args.length; i++) { const a = args[i]; if (!a.startsWith('--')) continue;
  const k = a.slice(2), v = args[i + 1]; if (v === undefined || v.startsWith('--')) opt[k] = true; else { opt[k] = v; i++; } }
const out = path.resolve(opt.out || path.join(__dirname, 'out', 'dice')); fs.mkdirSync(out, { recursive: true });
const sizes = String(opt.sizes || 'desktop,phone').split(',').map(s => s.trim()).filter(Boolean);
const SIZES = { desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 },
                phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true } };
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';

const src = fs.readFileSync(path.join(__dirname, '..', '..', 'source', 'chronicle.html'), 'utf8');
const a = src.indexOf('/* ---- DIE FACES start'), b = src.indexOf('/* ---- DIE FACES end ---- */');
if (a < 0 || b < a) { console.error('No DIE FACES block in source/chronicle.html'); process.exit(2); }
const page = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;height:100%;background:#14171d;overflow:hidden}canvas{display:block}</style>
<script type="module">import * as THREE from "${THREE_URL}";
${src.slice(a, b)}
window.__dice = { makeDie, dieType, THREE };
</script>`;

// ---- the checks, run in the page ----
function checks() {
  const { makeDie, THREE } = window.__dice, deg = r => r * 180 / Math.PI, Z = new THREE.Vector3(0, 0, 1), Y = new THREE.Vector3(0, 1, 0);
  const report = [];
  for (const s of [4, 6, 8, 10, 12, 20]) {
    const die = makeDie(s, {}), T = die.type, bad = [], worst = { normal: 0, up: 0 };
    const px = T.canvas.getContext('2d').getImageData(0, 0, T.canvas.width, T.canvas.height).data;
    const inkIn = (x0, y0, w, h) => { let n = 0; for (let y = y0; y < y0 + h; y += 2) for (let x = x0; x < x0 + w; x += 2) if (px[(y * T.canvas.width + x) * 4 + 1] > 128) n++; return n; };
    // the numbering
    if (s === 4) {
      const count = {}; T.faces.forEach((F, f) => { const vals = T.labels.filter(L => L.face === f).map(L => L.value);
        if (new Set(vals).size !== 3 || vals.includes(f + 1)) bad.push(`d4 face ${f} shows ${vals} (should be three numbers, not ${f + 1})`);
        vals.forEach(v => count[v] = (count[v] || 0) + 1); });
      for (let v = 1; v <= 4; v++) if (count[v] !== 3) bad.push(`d4: ${v} is printed ${count[v] || 0} times, not 3`);
    } else {
      const vals = T.faces.map(F => F.value).sort((x, y) => x - y).join(',');
      if (vals !== Array.from({ length: s }, (_, i) => i + 1).join(',')) bad.push(`d${s} numbers are ${vals}`);
      T.faces.forEach(F => { if (F.opp < 0 || F.value + T.faces[F.opp].value !== s + 1) bad.push(`d${s}: ${F.value} is opposite ${F.opp < 0 ? 'nothing' : T.faces[F.opp].value}`); });
      if (T.labels.length !== s) bad.push(`d${s} has ${T.labels.length} numbers drawn`);
    }
    // faceQuat, value by value
    const ray = new THREE.Raycaster(new THREE.Vector3(0, 0, 5), new THREE.Vector3(0, 0, -1));
    for (let v = 1; v <= s; v++) {
      const q = die.faceQuat(v);
      if (!(q instanceof THREE.Quaternion)) { bad.push(`d${s} faceQuat(${v}) is not a quaternion`); continue; }
      if (die.faceQuat(v) === q) bad.push(`d${s} faceQuat(${v}) returns a shared object`);
      const rot = L => ({ pos: L.pos.clone().applyQuaternion(q), up: L.up.clone().applyQuaternion(q), L });
      const labels = T.labels.map(rot).sort((x, y) => y.pos.z - x.pos.z);
      if (s === 4) {
        const corner = T.V.find((p, i) => !T.faces[v - 1].ids.includes(i)).clone().normalize().applyQuaternion(q);
        const an = deg(corner.angleTo(Z)); worst.normal = Math.max(worst.normal, an);
        if (an > 2) bad.push(`d4 faceQuat(${v}): the corner is ${an.toFixed(2)} deg from +z`);
        const top = labels.slice(0, 3); if (top.some(o => o.L.value !== v)) bad.push(`d4 faceQuat(${v}): the top corner shows ${top.map(o => o.L.value)}`);
        // each top number reads towards the corner; the one below it reads upright
        const below = top.reduce((m, o) => o.pos.y < m.pos.y ? o : m), upAn = deg(new THREE.Vector3(below.up.x, below.up.y, 0).angleTo(Y));
        worst.up = Math.max(worst.up, upAn); if (upAn > 2) bad.push(`d4 faceQuat(${v}): the number below the corner is ${upAn.toFixed(2)} deg off upright`);
      } else {
        const F = T.faces.find(F => F.value === v), f = T.faces.indexOf(F);
        const an = deg(F.n.clone().applyQuaternion(q).angleTo(Z)), upAn = deg(F.up.clone().applyQuaternion(q).angleTo(Y));
        worst.normal = Math.max(worst.normal, an); worst.up = Math.max(worst.up, upAn);
        if (an > 2) bad.push(`d${s} faceQuat(${v}): the face is ${an.toFixed(2)} deg from +z`);
        if (upAn > 2) bad.push(`d${s} faceQuat(${v}): the number is ${upAn.toFixed(2)} deg off upright`);
        if (labels[0].L.value !== v) bad.push(`d${s} faceQuat(${v}): the number nearest the camera is ${labels[0].L.value}`);
        die.mesh.quaternion.copy(q); die.mesh.updateMatrixWorld(true);
        const hit = ray.intersectObject(die.mesh, false)[0];
        if (!hit) { bad.push(`d${s} faceQuat(${v}): the camera ray misses the die`); continue; }
        if (T.triFace[hit.faceIndex] !== f) bad.push(`d${s} faceQuat(${v}): the camera ray hits ${T.triFace[hit.faceIndex] < 0 ? 'an edge' : 'the face of ' + T.faces[T.triFace[hit.faceIndex]].value}`);
        const c = T.cell(f), hx = hit.uv.x * c.W, hy = (1 - hit.uv.y) * c.H;
        if (hx < c.x || hx > c.x + c.w || hy < c.y || hy > c.y + c.h) bad.push(`d${s} faceQuat(${v}): the hit is outside the atlas cell of ${v}`);
        if (inkIn(c.x, c.y, c.w, c.h) < 60) bad.push(`d${s}: the atlas cell of ${v} has no ink`);
      }
    }
    report.push({ die: 'd' + s, triangles: T.triFace.length, atlas: `${T.canvas.width}x${T.canvas.height}`, worstNormalDeg: +worst.normal.toFixed(3), worstUpDeg: +worst.up.toFixed(3), bad });
    die.dispose();
  }
  return report;
}

// ---- the pictures: a stage like the roll overlay (ACES, a warm room for reflections, a key light from the upper left) ----
function stage(kind) {
  const { makeDie, THREE } = window.__dice, W = innerWidth, H = innerHeight;
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setPixelRatio(devicePixelRatio); r.setSize(W, H);
  r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.1;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; document.body.appendChild(r.domElement);
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0x14171d);
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256; const g = cv.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#5d4c3a'); gr.addColorStop(.5, '#241f1a'); gr.addColorStop(1, '#0a0908'); g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
  const spot = (x, y, rad, c) => { const s = g.createRadialGradient(x, y, 0, x, y, rad); s.addColorStop(0, c); s.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = s; g.fillRect(x - rad, y - rad, 2 * rad, 2 * rad); };
  spot(430, 70, 80, 'rgba(255,238,205,1)'); spot(300, 115, 70, 'rgba(140,165,190,.5)');
  const et = new THREE.CanvasTexture(cv); et.mapping = THREE.EquirectangularReflectionMapping; et.colorSpace = THREE.SRGBColorSpace;
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromEquirectangular(et).texture;
  const key = new THREE.DirectionalLight(0xfff0dc, 2.4); key.position.set(-5, 7, 9); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 }); key.shadow.radius = 4; sc.add(key);
  sc.add(new THREE.HemisphereLight(0xfff1d6, 0x20242c, .35));
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: .45 })); floor.position.z = -1.05; floor.receiveShadow = true; sc.add(floor);
  const cam = new THREE.PerspectiveCamera(28, W / H, .1, 200);
  const tilt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -.36);   // a table seen from above and in front
  const put = (s, o, v, x, y, scale, extra) => { const d = makeDie(s, o); d.mesh.quaternion.copy(tilt).multiply(d.faceQuat(v)); if (extra) d.mesh.quaternion.premultiply(extra);
    d.mesh.position.set(x, y, 0); d.mesh.scale.setScalar(scale); d.mesh.castShadow = true; sc.add(d.mesh); return d; };
  const types = [4, 6, 8, 10, 12, 20], portrait = H > W, tan = Math.tan(cam.fov * Math.PI / 360);
  const fit = (hw, hh) => cam.position.set(0, 0, 1.1 * Math.max(hw / tan / cam.aspect, hh / tan));   // frame a box of half sizes hw, hh
  if (kind === 'gallery') {   // every type: the to-hit colours, the damage colours, and a tumbling one
    const cols = portrait ? 3 : 6, rows = portrait ? 6 : 3, gap = 2.6;
    types.forEach((s, i) => {
      const cells = portrait ? [[i % 3, Math.floor(i / 3) * 3], [i % 3, Math.floor(i / 3) * 3 + 1], [i % 3, Math.floor(i / 3) * 3 + 2]] : [[i, 0], [i, 1], [i, 2]];
      const vals = [s, Math.ceil(s / 2), 1];
      [{}, { dmg: true }, { dmg: true }].forEach((o, k) => { const [cx, cy] = cells[k];
        const extra = k === 2 ? new THREE.Quaternion().setFromEuler(new THREE.Euler(.5, .8, .3)) : null;
        put(s, o, vals[k], (cx - (cols - 1) / 2) * gap, ((rows - 1) / 2 - cy) * gap, 1, extra); }); });
    fit(cols * gap / 2, rows * gap / 2);
  } else if (kind === 'glow') {   // a natural 20
    const d = put(20, {}, 20, 0, 0, 1.6); d.mesh.userData.glow(true);
    fit(2.6, 2.6);
  } else {   // one type up close: to-hit and damage colours, three values each
    const s = +kind, vals = s === 4 ? [4, 2, 3] : [s, Math.ceil(s / 2) + 1, 6 <= s ? 6 : 1];
    vals.forEach((v, k) => { put(s, {}, v, portrait ? -1.3 : (k - 2.5) * 2.5, portrait ? (1 - k) * 2.6 : 0, 1);
      put(s, { dmg: true }, s === 4 ? v : s + 1 - v, portrait ? 1.3 : (k + .5) * 2.5, portrait ? (1 - k) * 2.6 : 0, 1); });
    if (portrait) fit(2.4, 3.8); else fit(7.4, 1.3);
  }
  cam.lookAt(0, 0, 0);
  window.__frame = (n = 2) => { for (let i = 0; i < n; i++) r.render(sc, cam); return true; };
  window.__frame(2);
  return true;
}

(async () => {
  const launch = { headless: !opt.headed };
  if (opt.software) launch.args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
  const browser = await pw.chromium.launch(launch); let failed = false;
  for (const size of sizes) {
    const ctx = await browser.newContext(SIZES[size]), p = await ctx.newPage(), errors = [];
    p.on('pageerror', e => errors.push('pageerror: ' + e.message));
    p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    if (process.env.THREE_JS) await p.route(THREE_URL, r => r.fulfill({ path: process.env.THREE_JS, contentType: 'text/javascript', headers: { 'access-control-allow-origin': '*' } }));
    await p.route('http://dice.test/', r => r.fulfill({ body: page, contentType: 'text/html' }));
    await p.goto('http://dice.test/'); await p.waitForFunction(() => window.__dice, null, { timeout: 30000 });
    if (size === sizes[0]) {
      const report = await p.evaluate(checks);
      for (const r of report) {
        console.log(`${r.die.padEnd(4)} ${r.bad.length ? 'FAIL' : 'ok  '}  face ${r.worstNormalDeg} deg, upright ${r.worstUpDeg} deg, ${r.triangles} triangles, atlas ${r.atlas}`);
        r.bad.forEach(m => console.log('     ' + m)); if (r.bad.length) failed = true; }
    }
    if (!opt['no-shots']) {
      for (const kind of String(opt.shots || 'gallery,glow,4,6,8,10,12,20').split(',')) {
        await p.reload(); await p.waitForFunction(() => window.__dice, null, { timeout: 30000 });
        await p.evaluate(stage, kind);
        for (let i = 0; i < (kind === 'glow' ? 3 : 1); i++) { await p.waitForTimeout(150); await p.evaluate(() => window.__frame(1)); }   // the glow fades in
        const file = path.join(out, `dice-${/^\d+$/.test(kind) ? 'd' + kind : kind}-${size}.png`); await p.screenshot({ path: file, timeout: 120000 });
        console.log('  ' + path.relative(process.cwd(), file));
      }
    }
    if (errors.length) { failed = true; console.log(`${size}: errors in the page`); errors.slice(0, 10).forEach(e => console.log('   ' + e)); }
    await ctx.close();
  }
  await browser.close();
  console.log(failed ? 'FAILED' : 'all dice check out');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
