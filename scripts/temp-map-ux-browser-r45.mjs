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
await page.setViewport({width:1360,height:860});
const errors=[];
page.on('pageerror',err=>errors.push(err.stack||err.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
function reporter(m){console.log(m,JSON.stringify({errors}));}
async function rect(selector){return page.$eval(selector,e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height};});}
async function note(){return page.$eval('.command-bar',box=>{
 const a=box.getBoundingClientRect(),v=document.querySelector('#preview').getBoundingClientRect();
 return {height:a.height,previewY:v.y,previewHeight:v.height,text:document.querySelector('#tool-help').textContent,
   measures:document.querySelector('#placement-measures')!==null};
});}
try{
  await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2',timeout:55000});
  await page.click('#new-model');
  await page.$eval('#model-title',e=>{e.value='Plateforme A';e.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('[data-shape=box]');
  await page.click('#save');
  const firstId=await page.$eval('#models',e=>e.value);
  await page.click('#new-model');
  await page.$eval('#model-title',e=>{e.value='Pont B';e.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('[data-shape=box]');
  await page.click('#save');
  const secondId=await page.$eval('#models',e=>e.value);
  assert.notEqual(firstId,secondId);
  await page.goto('http://127.0.0.1:8999/editor.html?model='+encodeURIComponent(firstId),{waitUntil:'networkidle2',timeout:55000});
  await page.waitForSelector('#insert-palette:not([hidden])');
  const available=await page.evaluate(()=>({
    header:document.querySelector('#open-model-editor').textContent,
    model:document.querySelector('#model-library').value,
    edit:document.querySelector('#insert-palette a[href*="model-editor"]').getAttribute('href'),
    deleteVisible:!document.querySelector('#delete-library-model').hidden,
  }));
  assert.equal(available.model,firstId);
  assert.ok(available.edit.includes('model='+firstId));
  assert.ok(available.header.includes('Atelier modèles'));
  assert.ok(available.deleteVisible);
  console.log('MODEL_LIBRARY_LINK',JSON.stringify(available));

  await page.click('#model-place-action');
  const first=await note();
  assert.ok(first.text.includes('Dimensions initiales'));
  assert.equal(first.measures,false,'no extra layout-changing dimensions row');
  const canvasRect=await rect('#preview');
  await page.mouse.move(canvasRect.x+canvasRect.w*.4,canvasRect.y+canvasRect.h*.45);
  await new Promise(ok=>setTimeout(ok,200));
  const hover=await note();
  await page.mouse.move(canvasRect.x+canvasRect.w+15,canvasRect.y-25);
  await new Promise(ok=>setTimeout(ok,200));
  const leave=await note();
  console.log('HOVER_DIMENSIONS',JSON.stringify({first,hover,leave}));
  assert.ok(Math.abs(first.height-hover.height)<1,'hover does not resize top bar');
  assert.ok(Math.abs(hover.height-leave.height)<1,'leaving viewport does not resize top bar');
  assert.ok(Math.abs(first.previewY-hover.previewY)<1,'hover does not shift 3D canvas');
  assert.ok(Math.abs(hover.previewY-leave.previewY)<1,'leave does not shift 3D canvas');
  assert.equal(first.text,hover.text);
  assert.equal(hover.text,leave.text);

  // Verify menu dismissal for both button types regardless of location.
  await page.evaluate(()=>{
    const menu=document.querySelector('#context-actions');
    menu.hidden=false;menu.style.left='300px';menu.style.top='300px';
  });
  await page.mouse.click(190,165,{button:'left'});
  assert.equal(await page.$eval('#context-actions',e=>e.hidden),true,'left click dismisses menu');
  await page.evaluate(()=>{
    const menu=document.querySelector('#context-actions');
    menu.hidden=false;menu.style.left='300px';menu.style.top='300px';
  });
  await page.mouse.click(190,165,{button:'right'});
  assert.equal(await page.$eval('#context-actions',e=>e.hidden),true,'right click dismisses menu');
  // Right-clicking another surface while the menu is open dismisses it,
  // instead of immediately opening a new menu.
  await page.evaluate(()=>{
    const menu=document.querySelector('#context-actions');
    menu.hidden=false;menu.style.left='300px';menu.style.top='300px';
  });
  const contextRect=await rect('#preview');
  await page.mouse.click(contextRect.x+contextRect.w*.48,contextRect.y+contextRect.h*.63,{button:'right'});
  assert.equal(await page.$eval('#context-actions',e=>e.hidden),true,
    'right click on the 3D viewport dismisses the previous context menu');
  console.log('CONTEXT_MENU_DISMISSED_BOTH_BUTTONS');

  // Place model and preserve that instance when library definition is deleted.
  await page.click('#blank-map');
  await page.select('#layout-mode','split');
  await page.click('.rail-tool[data-tool=model]');
  await page.waitForSelector('#model-place-action',{visible:true});
  await page.select('#model-library',firstId);
  await page.click('#model-place-action');
  const countBefore=await page.$eval('#pieces',e=>e.options.length);
  const p=await rect('#plan');
  await page.mouse.click(p.x+p.w*.6,p.y+p.h*.6);
  await page.waitForFunction(count=>document.querySelector('#pieces').options.length>count,{timeout:7000},countBefore);
  assert.equal(await page.$eval('#pieces',e=>e.options.length),countBefore+1);
  const embedded=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')).pieces.filter(p=>p.model));
  assert.ok(embedded.some(p=>p.model.id===firstId));
  console.log('MODEL_INSTANCE_PLACED',JSON.stringify({countBefore,embedded:embedded.length}));

  // Clear local library entry, keep the model as an embedded map object.
  await page.click('.rail-tool[data-tool=model]');
  await page.waitForSelector('#insert-palette:not([hidden])');
  await page.select('#model-library',firstId);
  page.once('dialog',dialog=>dialog.accept());
  await page.click('#delete-library-model');
  const state=await page.evaluate(()=>({
    selected:document.querySelector('#model-library').value,
    library:JSON.parse(localStorage.getItem('gorilla-lab-models-v1')).models.map(m=>m.id),
    instances:JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')).pieces.filter(p=>p.model).map(p=>p.model.id),
    note:document.querySelector('#editor-note').textContent,
  }));
  console.log('MODEL_LIBRARY_DELETE',JSON.stringify(state));
  assert.ok(!state.library.includes(firstId));
  assert.ok(state.library.includes(secondId));
  assert.ok(state.instances.includes(firstId),'deleting a model must not erase placed instances');
  assert.ok(state.note.includes('bibliothèque'));

  // Opening from the map should select the requested model in Foundry.
  await page.goto('http://127.0.0.1:8999/model-editor.html?model='+encodeURIComponent(secondId),{waitUntil:'domcontentloaded'});
  await page.waitForSelector('#models');
  assert.equal(await page.$eval('#models',e=>e.value),secondId);
  if(errors.length)throw Error(errors.join('\n'));
  console.log('MAP_EDITOR_MODEL_WORKFLOW_BROWSER_PASSED');
}catch(error){reporter('BROWSER_FAILURE');throw error;}
finally{await page.close();await browser.close();server.close();}
