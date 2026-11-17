import {createServer} from 'node:http';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import {build} from 'esbuild';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';

const root=process.cwd(),srcDir=resolve(root,'gorilla-lab');
for(const [kind,file,marker,injection] of [
  ['model','model-editor.js','  const helper=gizmo.getHelper();',
    '  window.__gizmoProbe={gizmo,camera,scene,canvas,previews,stats:{down:0,moves:0,up:0}};\n  gizmo.addEventListener("mouseDown",()=>window.__gizmoProbe.stats.down++);\n  gizmo.addEventListener("objectChange",()=>window.__gizmoProbe.stats.moves++);\n  gizmo.addEventListener("mouseUp",()=>window.__gizmoProbe.stats.up++);'],
  ['map','editor.js','gizmo.setSize(.9);',
    'window.__gizmoProbe={gizmo,camera,scene,canvas:screen,group,stats:{down:0,moves:0,up:0}};\ngizmo.addEventListener("mouseDown",()=>window.__gizmoProbe.stats.down++);\ngizmo.addEventListener("objectChange",()=>window.__gizmoProbe.stats.moves++);\ngizmo.addEventListener("mouseUp",()=>window.__gizmoProbe.stats.up++);']
]){
  const source=await readFile(resolve(srcDir,file),'utf8');
  assert.ok(source.includes(marker),'missing debug injection marker '+kind);
  const debug=source.replace(marker,injection+'\n'+marker);
  const tempSource=resolve(srcDir,'__gizmo_debug_'+kind+'.js');
  await writeFile(tempSource,debug);
  await build({entryPoints:[tempSource],outfile:resolve(root,'__gizmo_debug_'+kind+'.js'),
     bundle:true,format:'iife',target:'es2022',minify:false,logLevel:'silent'});
  const html=await readFile(resolve(root,kind==='model'?'model-editor.html':'editor.html'),'utf8');
  await writeFile(resolve(root,'__gizmo_debug_'+kind+'.html'),
    html.replace(kind==='model'?'gorilla-model-editor-r26.js':'gorilla-editor-r37.js','__gizmo_debug_'+kind+'.js'));
}
const mime={'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
  const filepath=resolve(root,rel);
  if(!filepath.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',mime[extname(filepath)]??'application/octet-stream');res.end(await readFile(filepath));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(8999,'127.0.0.1',resolve));
const chrome=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({executablePath:chrome,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage(),errors=[];
page.on('pageerror',err=>errors.push(err.stack||err.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
await page.setViewport({width:1440,height:900});
async function pickRing(mode,preferred='Z'){
 const data=await page.evaluate(({mode,preferred})=>{
   const probe=window.__gizmoProbe,g=probe?.gizmo,canvas=probe?.canvas;
   if(!g?.object)throw Error('no transform target for '+mode);
   const rect=canvas.getBoundingClientRect();
   const origin=g.object.getWorldPosition(probe.camera.position.clone().set(0,0,0));
   origin.project(probe.camera);
   const cx=rect.left+(origin.x+1)*rect.width/2;
   const cy=rect.top+(1-origin.y)*rect.height/2;
   const candidates=[];
   const counts={};
   for(let radius=24;radius<=170;radius+=5){
     for(let k=0;k<72;k++){
       const theta=k*Math.PI/36,x=cx+Math.cos(theta)*radius,y=cy+Math.sin(theta)*radius;
       if(x<rect.left+2||x>rect.right-2||y<rect.top+2||y>rect.bottom-2)continue;
       g.pointerHover({x:(x-rect.left)/rect.width*2-1,y:1-(y-rect.top)/rect.height*2,button:0});
       const axis=g.axis;
       if(axis){counts[axis]=(counts[axis]??0)+1;if(axis===preferred||axis==='X'||axis==='Y'||axis==='Z')
         candidates.push({x,y,axis,radius,theta,cx,cy});}
     }
   }
   const chosen=candidates.find(p=>p.axis===preferred)??candidates.find(p=>['X','Y','Z'].includes(p.axis))??candidates[0];
   return {chosen,counts,center:[cx,cy],rect:{x:rect.x,y:rect.y,w:rect.width,h:rect.height},mode};
 },{mode,preferred});
 console.log('RING_SCAN',JSON.stringify(data));
 assert.ok(data.chosen,mode+' must expose a clickable axis');
 return data.chosen;
}
async function dragRing(mode,preferred='Z'){
 const p=await pickRing(mode,preferred);
 const dx=p.x-p.cx,dy=p.y-p.cy;
 const factor=mode==='scale'?1:mode==='translate'?1:1;
 let vx,vy;
 if(mode.endsWith('rotate')){
   const length=Math.max(1,Math.hypot(dx,dy));vx=-dy/length*85;vy=dx/length*85;
 }else{
   const length=Math.max(1,Math.hypot(dx,dy));vx=dx/length*100;vy=dy/length*100;
 }
 await page.mouse.move(p.x,p.y);
 await page.mouse.down({button:'left'});
 await page.mouse.move(p.x+vx,p.y+vy,{steps:16});
 await page.mouse.up({button:'left'});
 const result=await page.evaluate(()=>{
   const probe=window.__gizmoProbe;
   return {stats:{...probe.stats},mode:probe.gizmo.mode,dragging:probe.gizmo.dragging};
 });
 console.log('DRAG_RESULT',mode,JSON.stringify(result));
 return result;
}
try{
  await page.goto('http://127.0.0.1:8999/__gizmo_debug_model.html',{waitUntil:'networkidle2'});
  await page.click('#new-model');
  await page.click('[data-shape="box"]');
  await page.click('.rail-btn[data-tool="rotate"]');
  const rot=await dragRing('model rotate','Z');
  assert.ok(rot.stats.down>=1,'model rotate handle must accept pointerdown');
  assert.ok(rot.stats.moves>=3,'model rotate must produce multiple updates while dragging');
  const angles=await page.$$eval('[id^=rotation-]',els=>els.map(el=>Number(el.value)));
  assert.ok(angles.some(v=>Math.abs(v)>10),'model rotation values must change');
  console.log('MODEL_ROTATION',JSON.stringify(angles));
  await page.click('.rail-btn[data-tool="scale"]');
  const scaling=await dragRing('model scale','X');
  assert.ok(scaling.stats.moves>=rot.stats.moves+2,'model scale handle must produce drag updates');
  const scales=await page.$$eval('[id^=scale-]',els=>els.map(el=>Number(el.value)));
  assert.ok(scales.some(v=>Math.abs(v-.35)>.05),'model size must change');
  console.log('MODEL_SCALE',JSON.stringify(scales));
  await page.click('.rail-btn[data-tool="translate"]');
  const moving=await dragRing('model translate','X');
  assert.ok(moving.stats.moves>scaling.stats.moves+1,'model move handle must produce drag updates');

  // Persist model edits so the beforeunload confirmation doesn't block navigation.
  await page.click('#save');
  // Map check: start from an existing solid piece and focus camera on it.
  await page.goto('http://127.0.0.1:8999/__gizmo_debug_map.html',{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForFunction(()=>document.querySelector('#pieces')?.options.length>0,{timeout:15000});
  await page.select('#pieces','0');
  await page.click('[data-tool="rotate"]');
  const mapTarget=await page.evaluate(()=>{
    const g=window.__gizmoProbe?.gizmo;
    return {has:g?.object!=null,mode:g?.mode,enabled:g?.enabled};
  });
  console.log('MAP_TARGET',JSON.stringify(mapTarget));
  if(!mapTarget.has)throw Error('Map has no gizmo for selected piece');
  const mapRotation=await dragRing('map rotate','Z');
  assert.ok(mapRotation.stats.down>=1,'map rotate must accept drag');
  assert.ok(mapRotation.stats.moves>=3,'map rotate must update rotation');
  const yaw=await page.$$eval('#p-pitch,#p-yaw,#p-roll',els=>els.map(el=>Number(el.value)));
  assert.ok(yaw.some(v=>Math.abs(v)>5),'map rotation fields updated');
  await page.click('[data-tool="scale"]');
  const mapScale=await dragRing('map scale','X');
  assert.ok(mapScale.stats.moves>mapRotation.stats.moves+1,'map scale drag updates');
  console.log('MAP_SCALE',JSON.stringify(await page.$$eval('#p-w,#p-h,#p-d',els=>els.map(el=>Number(el.value)))));
  if(errors.length)throw Error(errors.join('\n'));
  console.log('TRANSFORM_GIZMOS_BROWSER_VALIDATED');
}finally{
 await page.close();await browser.close();server.close();
}
