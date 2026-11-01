// Step 1 of the offline world bake: render the land's height and relief from the same shaders the page uses.
//   node source/world/bake-heights.js source/chronicle.html <width> <out.f32>
// Reads NOISE, HEIGHT and the relief formula out of chronicle.html, renders them in headless Chromium (software GL)
// tile by tile into a float buffer, and writes width*height*2 float32 values: [h, r] per texel, row 0 = south pole.
// h is the land height (below 0 = sea), r the relief before erosion. make-world.py runs this, then erode.c.
const {chromium}=require('playwright');const fs=require('fs');
const [src,wArg,out]=process.argv.slice(2); const W=+wArg||4096, H=W/2;
const html=fs.readFileSync(src,'utf8');
const lit=name=>{const m=html.match(new RegExp('const '+name+' = `([\\s\\S]*?)`;'));if(!m)throw new Error('missing '+name);return m[1];};
const NOISE=lit('NOISE'), HEIGHT=lit('HEIGHT'), RB=lit('RELIEF_BAKE');
const ridge=RB.match(/float ridge\(vec3 p\)\{[^\n]*\}/)[0];
const rLine=RB.match(/float inland=[^\n]*\n\s*float r=[^\n]*/)[0];
const FRAG=`#version 300 es
precision highp float; uniform vec2 uOff; uniform vec2 uSize; out vec4 o;
${NOISE}
${HEIGHT}
${ridge}
void main(){
  vec2 vUv=(gl_FragCoord.xy+uOff)/uSize;
  float lon=(vUv.x-0.5)*6.2831853, lat=(vUv.y-0.5)*3.1415927;
  vec3 p=vec3(cos(lat)*sin(lon),sin(lat),cos(lat)*cos(lon));
  float h=height(p);
  ${rLine}
  o=vec4(h,r,0.0,1.0);
}`;
(async()=>{
  const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await b.newPage(); p.on('console',m=>console.log('page:',m.text()));
  await p.setContent('<canvas id=c></canvas>');
  const T=1024, buf=new Float32Array(W*H*2);
  await p.evaluate(({FRAG,T})=>{const c=document.getElementById('c'); c.width=T; c.height=T; const gl=c.getContext('webgl2');
    if(!gl.getExtension('EXT_color_buffer_float')) throw new Error('no float render');
    const sh=(t,s)=>{const x=gl.createShader(t);gl.shaderSource(x,s);gl.compileShader(x);if(!gl.getShaderParameter(x,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(x));return x;};
    const pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,'#version 300 es\nvoid main(){vec2 v=vec2(gl_VertexID==1?3.0:-1.0,gl_VertexID==2?3.0:-1.0);gl_Position=vec4(v,0.0,1.0);}'));
    gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FRAG)); gl.linkProgram(pr); if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(pr)); gl.useProgram(pr);
    const tx=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tx); gl.texStorage2D(gl.TEXTURE_2D,1,gl.RGBA32F,T,T);
    const fb=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fb); gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tx,0);
    gl.viewport(0,0,T,T); window.__gl={gl,pr};},{FRAG,T});
  for(let ty=0;ty<H;ty+=T)for(let tx=0;tx<W;tx+=T){
    const tile=await p.evaluate(({tx,ty,W,H,T})=>{const {gl,pr}=window.__gl;
      gl.uniform2f(gl.getUniformLocation(pr,'uOff'),tx,ty); gl.uniform2f(gl.getUniformLocation(pr,'uSize'),W,H);
      gl.drawArrays(gl.TRIANGLES,0,3); const px=new Float32Array(T*T*4); gl.readPixels(0,0,T,T,gl.RGBA,gl.FLOAT,px);
      const o=new Float32Array(T*T*2); for(let i=0;i<T*T;i++){o[i*2]=px[i*4];o[i*2+1]=px[i*4+1];}
      const u=new Uint8Array(o.buffer); let s=''; for(let i=0;i<u.length;i+=32768) s+=String.fromCharCode.apply(null,u.subarray(i,i+32768)); return btoa(s);},{tx,ty,W,H,T});
    const tb=Buffer.from(tile,'base64'), tf=new Float32Array(tb.buffer,tb.byteOffset,tb.length/4);
    for(let y=0;y<T&&ty+y<H;y++)for(let x=0;x<T;x++){const s=(y*T+x)*2, d=((ty+y)*W+tx+x)*2; buf[d]=tf[s]; buf[d+1]=tf[s+1];}
    process.stdout.write(`tile ${tx},${ty}\n`);
  }
  fs.writeFileSync(out,Buffer.from(buf.buffer)); await b.close();
})().catch(e=>{console.error(e);process.exit(1);});
