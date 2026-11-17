import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
const root=process.cwd(),types={'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);return res.end();}
  const rel=decodeURIComponent((req.url?.split('?')[0]||'/').replace(/^[/]/,'')||'index.html');
  const file=resolve(root,rel);
  if(!file.startsWith(root)){res.writeHead(403);return res.end();}
  try{res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.end(await readFile(file));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(ok=>server.listen(8999,'127.0.0.1',ok));
const chromium=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',
 {shell:'/bin/bash',encoding:'utf8'}).trim();
const browser=await puppeteer.launch({executablePath:chromium,headless:true,
 args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
await page.setViewport({width:1440,height:920});
await page.evaluateOnNewDocument(()=>{
 const model={id:'custom-model-grab-test',name:'Objet test saisissable',kind:'prop',inGame:true,
  properties:{grabbable:true,frozen:false,collidable:true,supportWhileHeld:false},
  hitbox:{mode:'auto'},parts:[{name:'Anneau',shape:'torus',position:[0,0,0],rotation:[0,0,0],
  scale:[3,2,3],color:'#51bdd2',surface:'plain'}]};
 localStorage.setItem('gorilla-lab-models-v1',JSON.stringify({version:1,models:[model],avatarId:null}));
});
const errors=[];
page.on('pageerror',err=>errors.push(err.stack||err.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const rect=selector=>page.$eval(selector,e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height};});
const wait=ms=>new Promise(ok=>setTimeout(ok,ms));
try{
 await page.goto('http://127.0.0.1:8999/editor.html?model=custom-model-grab-test',{waitUntil:'networkidle2',timeout:55000});
 await page.click('#blank-map');
 await page.select('#layout-mode','split');
 await page.click('#place-model');
 await page.waitForSelector('#model-place-action',{visible:true});
 await page.click('#model-place-action');
 assert.equal(await page.$eval('#model-library',e=>e.value),'custom-model-grab-test');
 const plan=await rect('#plan');
 assert.ok(plan.w>120&&plan.h>120,'split plan is visible');
 await page.mouse.click(plan.x+plan.w/2,plan.y+plan.h/2);
 await page.waitForFunction(()=>document.querySelector('#pieces').options.length===2,{timeout:7000});
 assert.equal(await page.$eval('#move-tool',e=>e.getAttribute('aria-pressed')),'true',
  'model placement returns to selection tool');
 let title=await page.$eval('#selection-title',e=>e.textContent);
 assert.ok(title.includes('Objet test saisissable')&&title.includes('Objet saisissable'),title);
 assert.equal(await page.$eval('#model-object-controls',e=>e.hidden),false,
  'prop-specific controls appear after placement');
 assert.notEqual(await page.$eval('#model-object-controls',e=>getComputedStyle(e).display),'none',
  'prop-specific controls are actually visible in the Object inspector');
 console.log('PLACEMENT_AND_AUTO_SELECT',JSON.stringify({title,tool:await page.$eval('#move-tool',e=>e.getAttribute('aria-pressed'))}));

 // Test selection by clicking the object in the top-down plan.
 await page.select('#pieces','0');
 assert.ok((await page.$eval('#selection-title',e=>e.textContent)).includes('Sol'));
 await page.mouse.click(plan.x+plan.w/2,plan.y+plan.h/2);
 title=await page.$eval('#selection-title',e=>e.textContent);
 assert.ok(title.includes('Objet test saisissable'), 'plan click selects the placed model: '+title);
 console.log('PLAN_CLICK_SELECTS_PROP',title);

 // Test selection by clicking the object in the 3D view.
 await page.click('#focus-piece');
 await page.select('#pieces','0');
 const viewport=await rect('#preview');
 await page.mouse.click(viewport.x+viewport.w/2,viewport.y+viewport.h/2);
 title=await page.$eval('#selection-title',e=>e.textContent);
 assert.ok(title.includes('Objet test saisissable'), '3D click selects the placed model: '+title);
 console.log('3D_CLICK_SELECTS_PROP',title);

 // Drag the selected item in plan view and check its X position changes.
 const before=await page.$eval('#p-x',e=>Number(e.value));
 await page.mouse.move(plan.x+plan.w/2,plan.y+plan.h/2);
 await page.mouse.down();
 await page.mouse.move(plan.x+plan.w/2+55,plan.y+plan.h/2+5,{steps:8});
 await page.mouse.up();
 await wait(200);
 const after=await page.$eval('#p-x',e=>Number(e.value));
 assert.notEqual(after,before,'drag in plan moves the model');
 console.log('DRAG_MOVES_PROP',JSON.stringify({before,after}));

 // Exercise the game behaviour toggles and verify they persist in the map draft.
 for(const id of ['model-grabbable','model-frozen','model-collidable','model-support-held']){
   await page.click('#'+id);
 }
 await wait(300);
 const saved=await page.evaluate(()=>{
  const data=JSON.parse(localStorage.getItem('gorilla-lab-editor-draft'));
  const p=data.pieces.find(piece=>piece.model?.id==='custom-model-grab-test');
  return {props:p.model.properties,solid:p.solid,x:p.x};
 });
 assert.deepEqual(saved.props,{grabbable:false,frozen:true,collidable:false,supportWhileHeld:true});
 assert.equal(saved.solid,false);
 console.log('PROP_SETTINGS_PERSIST',JSON.stringify(saved));
 if(errors.length)throw Error(errors.join('\n'));
 console.log('SELECTABLE_GRABBABLE_MODELS_BROWSER_PASSED');
}catch(error){
 console.error('BROWSER_TEST_FAILED',error.stack||error);
 console.error('PAGE_ERRORS',errors);
 throw error;
}finally{await page.close();await browser.close();server.close();}
