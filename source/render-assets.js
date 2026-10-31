// Renders the link-preview image (og.jpg, 1200x630) and the home-screen icons from the built site.
//   node render-assets.js <site dir> <out dir>
// Serves the site at http://x/chronicle-of-valeria/, Three.js from the local copy, Google Fonts via curl.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');const {execFileSync}=require('child_process');
const [site,out]=process.argv.slice(2); fs.mkdirSync(out,{recursive:true});
const THREE_JS=path.join(__dirname,'three/package/build/three.module.min.js');
const fontCache={};
async function wire(p){
  await p.route('**/*',async r=>{const u=r.request().url();
    if(u.includes('three.module'))return r.fulfill({contentType:'text/javascript',body:fs.readFileSync(THREE_JS)});
    if(u.startsWith('http://x/chronicle-of-valeria/')){let f=decodeURIComponent(new URL(u).pathname.replace('/chronicle-of-valeria/',''))||'index.html';
      f=path.join(site,f); if(!fs.existsSync(f))return r.fulfill({status:404,body:'nope'});
      const ct={'.html':'text/html','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.webmanifest':'application/manifest+json'}[path.extname(f)]||'application/octet-stream';
      return r.fulfill({contentType:ct,body:fs.readFileSync(f)});}
    if(/fonts\.(googleapis|gstatic)\.com/.test(u)){
      try{fontCache[u]=fontCache[u]||execFileSync('curl',['-sS','--max-time','25','-A',r.request().headers()['user-agent'].replace('HeadlessChrome','Chrome'),u],{maxBuffer:5e7});
        return r.fulfill({contentType:u.includes('googleapis')?'text/css':'font/woff2',body:fontCache[u],headers:{'access-control-allow-origin':'*'}});}catch(e){return r.abort();}}
    return r.abort();});
}
(async()=>{
  const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  // ---- icons ----
  {const p=await b.newPage({viewport:{width:512,height:512}}); await wire(p);
    await p.addInitScript(()=>{try{localStorage.setItem('chron-seen','s9');localStorage.setItem('chron-open','2')}catch(e){}});
    p.on('pageerror',e=>console.log('icon pageerror',e.message));
    await p.goto('http://x/chronicle-of-valeria/'); await p.waitForTimeout(5000);
    await p.evaluate(async()=>{await document.fonts.ready;
      const st=document.createElement('div'); st.id='iconstage';
      st.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:radial-gradient(circle at 50% 44%,#26304a 0%,#151a26 55%,#0b0d12 100%)';
      const f=document.querySelector('.hud .hans-face').cloneNode(true);
      f.style.setProperty('--hf-size','318px'); f.style.setProperty('--decoded','.74'); f.classList.remove('is-speaking');
      st.append(f); document.body.append(st);
      const s=document.createElement('style'); s.textContent='#iconstage *{animation-delay:-1.1s!important;animation-play-state:paused!important;transition:none!important}'; document.head.append(s);});
    await p.waitForTimeout(600);
    await p.screenshot({path:path.join(out,'icon-512.png'),timeout:90000});
    await p.close();}
  // ---- link preview ----
  {const p=await b.newPage({viewport:{width:1200,height:630}}); await wire(p);
    await p.addInitScript(()=>{try{localStorage.setItem('chron-seen','s9');localStorage.setItem('chron-open','2')}catch(e){}});
    p.on('pageerror',e=>console.log('og pageerror',e.message));
    await p.goto('http://x/chronicle-of-valeria/'); await p.waitForTimeout(9000);
    await p.evaluate(async()=>{await document.fonts.ready;
      const s=document.createElement('style'); s.textContent=`
        .dock,.eggs,#toast,#caption{display:none!important}
        header.top{opacity:0!important} /* not display:none: the cloned face uses the HUD face's SVG gradients */
        #stage,#pins{transform:translateX(205px)}
        #og{position:fixed;left:62px;top:0;bottom:0;width:470px;z-index:9999;display:flex;flex-direction:column;justify-content:center;gap:14px}
        #og::before{content:"";position:fixed;inset:0;z-index:-1;background:linear-gradient(90deg,#0b0d12 0%,#0b0d12f0 30%,#0b0d1200 58%)}
        #og .t{font:400 64px/1.0 var(--display);color:var(--parch);letter-spacing:.01em;margin:0}
        #og .t small{display:block;font-size:30px;color:var(--brass);margin-bottom:6px}
        #og .s{font:500 16px var(--mono);letter-spacing:.14em;color:var(--steward);margin:6px 0 0}
        #og .q{font:italic 400 22px/1.35 var(--body);color:var(--parch-dim);margin:4px 0 0;max-width:420px}
        #og *{animation-delay:-1.1s!important;animation-play-state:paused!important;transition:none!important}`;
      document.head.append(s);
      const o=document.createElement('div'); o.id='og';
      const f=document.querySelector('.hud .hans-face').cloneNode(true); f.style.setProperty('--hf-size','132px'); f.style.setProperty('--decoded','.74');
      o.append(f); o.insertAdjacentHTML('beforeend',`<h1 class="t"><small>The</small>Chronicle of Valeria</h1>
        <p class="s">DECODED FROM THE BLACK BOX · SESSION 9</p>
        <p class="q">“I have recovered the map. Most of it is still fog. Tap, and I will show you what we know.” — Hans</p>`);
      document.body.append(o);});
    await p.waitForTimeout(2500);
    await p.screenshot({path:path.join(out,'og.jpg'),type:'jpeg',quality:84,timeout:120000});
    await p.close();}
  await b.close();
})();
