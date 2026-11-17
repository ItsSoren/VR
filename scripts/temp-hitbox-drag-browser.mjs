import {createServer} from 'node:http';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import {build} from 'esbuild';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
const root=process.cwd();
const original=await readFile(resolve(root,'gorilla-lab/model-editor.js'),'utf8');
const marker='  const helper=gizmo.getHelper();';
assert.ok(original.includes(marker));
const injection=`  window.__hitboxDebug={gizmo,camera,canvas,hitboxPreview,model:currentModel,stats:{down:0,changes:0,up:0}};
  gizmo.addEventListener('mouseDown',()=>window.__hitboxDebug.stats.down++);
  gizmo.addEventListener('objectChange',()=>window.__hitboxDebug.stats.changes++);
  gizmo.addEventListener('mouseUp',()=>window.__hitboxDebug.stats.up++);
`;
await writeFile(resolve(root,'gorilla-lab/__hitbox_probe.js'),original.replace(marker,injection+marker));
await build({entryPoints:[resolve(root,'gorilla-lab/__hitbox_probe.js')],outfile:resolve(root,'__hitbox_probe.js'),
  bundle:true,format:'iife',target:'es2022',logLevel:'silent'});
const html=await readFile(resolve(root,'model-editor.html'),'utf8');
await writeFile(resolve(root,'__hitbox_probe.html'),html.replace('gorilla-model-editor-r26.js','__hitbox_probe.js'));
const types={'.html':'text/html','.js':'application/javascript'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const path=resolve(root,decodeURIComponent((req.url?.split('?')[0]||'/').replace(/^\//,'')||'index.html'));
  if(!path.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',types[extname(path)]??'application/octet-stream');res.end(await readFile(path));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(done=>server.listen(8999,'127.0.0.1',done));
const binary=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({headless:true,executablePath:binary,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
await page.setViewport({width:1440,height:900});
const errors=[];
page.on('pageerror',error=>errors.push(error.stack??error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
async function ring(mode,preferred='X'){
  const obj=await page.evaluate(({preferred})=>{
    const {gizmo:g,camera,canvas}=window.__hitboxDebug;
    const rect=canvas.getBoundingClientRect();
    const pos=g.object.getWorldPosition(camera.position.clone().set(0,0,0)).project(camera);
    const cx=rect.left+(pos.x+1)*rect.width/2,cy=rect.top+(1-pos.y)*rect.height/2;
    const counts={},candidates=[];
    for(let r=16;r<=190;r+=6)for(let k=0;k<72;k++){
      const theta=k*Math.PI/36,x=cx+Math.cos(theta)*r,y=cy+Math.sin(theta)*r;
      if(x<rect.left+3||x>rect.right-3||y<rect.top+3||y>rect.bottom-3)continue;
      g.pointerHover({x:(x-rect.left)/rect.width*2-1,y:1-(y-rect.top)/rect.height*2,button:0});
      if(g.axis){
        counts[g.axis]=(counts[g.axis]??0)+1;
        if(g.axis===preferred)candidates.push({x,y,cx,cy,r});
      }
    }
    return {selected:candidates[Math.floor(candidates.length/2)]??null,counts,
      attached:g.object===window.__hitboxDebug.hitboxPreview,mode:g.mode};
  },{preferred});
  console.log('HITBOX_RING',mode,JSON.stringify(obj));
  assert.equal(obj.attached,true,mode+' gizmo must attach to the collision volume');
  assert.equal(obj.mode,mode);
  assert.ok(obj.selected,mode+' X axis must be pickable');
  const {x,y,cx,cy}=obj.selected;
  const delta=Math.hypot(x-cx,y-cy);
  const vx=(x-cx)/Math.max(1,delta)*90,vy=(y-cy)/Math.max(1,delta)*90;
  await page.mouse.move(x,y);
  await page.mouse.down({button:'left'});
  await page.mouse.move(x+vx,y+vy,{steps:16});
  await page.mouse.up({button:'left'});
  const result=await page.evaluate(()=>{
    const d=window.__hitboxDebug;
    return {stats:{...d.stats},hitbox:structuredClone(d.model().hitbox)};
  });
  console.log('HITBOX_DRAG',mode,JSON.stringify(result));
  assert.ok(result.stats.down>0);
  assert.ok(result.stats.changes>=8,'hitbox must update continuously during drag');
  return result.hitbox;
}
try{
  await page.goto('http://127.0.0.1:8999/__hitbox_probe.html',{waitUntil:'networkidle2',timeout:60000});
  await page.click('#new-model');await page.click('[data-shape="box"]');
  await page.click('.tab[data-panel="collision"]');
  await page.click('#hitbox-manual');
  const initial=await page.evaluate(()=>structuredClone(window.__hitboxDebug.model().hitbox));
  const scaled=await ring('scale');
  assert.ok(Math.abs(scaled.size[0]-initial.size[0])>.08,'X hitbox dimension must change');
  await page.click('#hitbox-drag');
  const moved=await ring('translate');
  assert.ok(Math.abs(moved.center[0]-scaled.center[0])>.08,'X hitbox centre must change');
  await page.click('#save');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')).models[0].hitbox);
  assert.deepEqual(saved,moved);
  if(errors.length)throw Error(errors.join('\n'));
  console.log('HITBOX_3D_DRAG_PASSED');
}finally{
  await page.close();await browser.close();server.close();
}
