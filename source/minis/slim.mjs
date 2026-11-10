// Slims a sculpted mini into the plain shape the page reads (see README.md in this folder).
// Not part of the site. Run it in a scratch folder, outside the repo:
//   npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer sharp
//   node slim.mjs in.glb out.glb [triangles=15000] [texture=1024] [quality=82]
import {NodeIO,VertexLayout} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,simplify,textureCompress,prune,dedup,quantize,flatten,join} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';
const [inp,out,T='15000',TEX='1024',Q='82']=process.argv.slice(2);
if(!inp||!out){console.error('node slim.mjs in.glb out.glb [triangles=15000] [texture=1024] [quality=82]');process.exit(1);}
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).setVertexLayout(VertexLayout.SEPARATE);
const doc=await io.read(inp);
const tris=d=>{let n=0;for(const m of d.getRoot().listMeshes())for(const p of m.listPrimitives()){const i=p.getIndices();n+=(i?i.getCount():p.getAttribute('POSITION').getCount())/3;}return Math.round(n);};
const n0=tris(doc);
await MeshoptSimplifier.ready;
await doc.transform(dedup(),flatten(),join(),weld()); // one mesh, one primitive
const ratio=Math.min(1,Math.max(.01,+T/n0));
if(ratio<1)await doc.transform(simplify({simplifier:MeshoptSimplifier,ratio,error:0.02,lockBorder:false}));
await doc.transform(textureCompress({encoder:sharp,targetFormat:'webp',resize:[+TEX,+TEX],quality:+Q}),prune(),quantize());
await io.write(out,doc);
const tex=doc.getRoot().listTextures().map(t=>(t.getSize()||[]).join('x')+' '+t.getMimeType()+' '+Math.round(t.getImage().byteLength/1024)+'KB');
console.log(JSON.stringify({trisIn:n0,trisOut:tris(doc),bytesIn:fs.statSync(inp).size,bytesOut:fs.statSync(out).size,tex}));
