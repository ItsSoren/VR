import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';

const root=process.cwd();
const types={'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css'};
const server=createServer(async(req,res)=>{
 if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
 const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
 const path=resolve(root,rel);
 if(!path.startsWith(root)){res.writeHead(403);res.end();return;}
 try{res.setHeader('Content-Type',types[extname(path)]||'application/octet-stream');res.end(await readFile(path));}
 catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(8999,'127.0.0.1',resolve));
const chrome=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{shell:'/bin/bash',encoding:'utf8'}).trim();
const browser=await puppeteer.launch({executablePath:chrome,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.stack||e.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
await page.setViewport({width:1440,height:900});

try{
 await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2',timeout:50000});
 await page.waitForSelector('#model-list');
 const layout=await page.evaluate(()=>{
   const rect=document.querySelector('#new-model').getBoundingClientRect();
   return {newWidth:rect.width,newHeight:rect.height,bodyScroll:document.body.scrollHeight-innerHeight,
     modelItems:document.querySelector('#model-list').children.length};
 });
 assert.ok(layout.newWidth>105&&layout.newHeight>=35,'prominent New Model button');
 assert.ok(layout.bodyScroll<5,'no document scrolling on desktop');

 await page.click('#new-model');
 await page.$eval('#model-title',el=>{
   el.value='Ma plateforme personnalisée';
   el.dispatchEvent(new Event('input',{bubbles:true}));
 });
 await page.click('[data-shape="box"]');
 await page.click('[data-shape="sphere"]');
 assert.equal(await page.$eval('#part-list',el=>el.children.length),2);
 assert.equal(await page.$eval('#model-list',el=>el.children.length),1);
 assert.equal(await page.$eval('#model-title',el=>el.value),'Ma plateforme personnalisée');
 const oldId=await page.$eval('#models',el=>el.value);

 // Three local working masks, independent from the exported model.
 await page.select('#mask-set','A');
 await page.click('#part-list .part-row:first-child .part-visibility');
 assert.equal(await page.$eval('#part-list .part-row:first-child .part-visibility',el=>el.getAttribute('aria-pressed')),'false');
 await page.select('#mask-set','B');
 assert.equal(await page.$eval('#part-list .part-row:first-child .part-visibility',el=>el.getAttribute('aria-pressed')),'true');
 await page.select('#mask-set','A');
 assert.equal(await page.$eval('#part-list .part-row:first-child .part-visibility',el=>el.getAttribute('aria-pressed')),'false');
 await page.click('#show-all-parts');
 await page.click('#save');
 const initial=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
 assert.equal(initial.models[0].parts.length,2,'visibility mask must not remove exported model parts');
 assert.equal(initial.models[0].name,'Ma plateforme personnalisée');

 await page.click('#duplicate-model');
 assert.equal(await page.$eval('#model-list',el=>el.children.length),2);
 const duplicateId=await page.$eval('#models',el=>el.value);
 assert.notEqual(duplicateId,oldId);
 await page.$eval('#model-title',el=>{
   el.value='Variante hiver';
   el.dispatchEvent(new Event('input',{bubbles:true}));
 });
 await page.click('[data-shape="cone"]');
 await page.click('#save');
 const after=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
 assert.equal(after.models.length,2);
 assert.equal(after.models[0].parts.length,2);
 assert.equal(after.models[1].parts.length,3);
 assert.equal(after.models[1].name,'Variante hiver');

 // Show the other model as a separate, noneditable ghost/reference.
 await page.click('#model-list .model-entry-wrap:first-child .model-visibility');
 const previewLabel=await page.$eval('#preview-tag',el=>el.textContent);
 console.log('MODEL_REFERENCE_PREVIEW',previewLabel);
 assert.ok(previewLabel.includes('RÉF.'),'reference visible in model viewport');
 await page.click('#model-list .model-entry-wrap:first-child .model-entry');
 assert.equal(await page.$eval('#model-title',el=>el.value),'Ma plateforme personnalisée');
 assert.equal(await page.$eval('#models',el=>el.value),oldId);

 // All transfer links must point at the current model.
 const links=await page.evaluate(()=>['go-cards','quick-send-to-map','send-to-map']
   .map(id=>document.getElementById(id).getAttribute('href')));
 assert.ok(links.every(link=>link.includes('model='+oldId)),'every map link should target the selected model');
 await page.click('#quick-send-to-map');
 await page.waitForFunction(()=>location.pathname.endsWith('/editor.html'),{timeout:20000});
 await page.waitForSelector('#insert-palette:not([hidden])',{visible:true});
 const handoff=await page.evaluate(()=>({
   model:document.querySelector('#model-library').value,
   mode:document.querySelector('.rail-tool[data-tool=model]').getAttribute('aria-pressed'),
   title:document.querySelector('#insert-palette h2').textContent,
   action:document.querySelector('#model-place-action').textContent,
   note:document.querySelector('#editor-note').textContent,
 }));
 console.log('MAP_HANDOFF',JSON.stringify(handoff));
 assert.equal(handoff.model,oldId,'requested model preselected');
 assert.equal(handoff.mode,'true','model placement tool activated');
 assert.ok(handoff.title.includes('modèles'));
 assert.ok(handoff.action.includes('Ma plateforme'));
 await page.click('#model-place-action');
 assert.equal(await page.$eval('#insert-palette',el=>el.hidden),true);
 await page.select('#layout-mode','split');
 await page.waitForFunction(()=>document.querySelector('#plan').getBoundingClientRect().width>150);
 // Prepare a minimal map and check the placement is persisted.
 await page.$eval('#blank-map',el=>el.click());
 await page.click('.rail-tool[data-tool="model"]');
 await page.click('#model-place-action');
 const beforeCount=await page.$eval('#pieces',el=>el.options.length);
 const rect=await page.$eval('#plan',el=>{const r=el.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height};});
 await page.mouse.click(rect.x+rect.w*.62,rect.y+rect.h*.60);
 await page.waitForFunction(beforeCount=>document.querySelector('#pieces').options.length>beforeCount,{timeout:7000},beforeCount);
 const last=await page.$eval('#pieces',el=>el.options[el.options.length-1].textContent);
 console.log('MAP_PLACEMENT',JSON.stringify({beforeCount,last}));
 assert.ok(last.includes('Ma plateforme'),'placed model named in map list');

 // A refresh preserves model library, and an active model/mask is restored.
 await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'domcontentloaded'});
 await page.waitForSelector('#model-list .model-entry');
 assert.equal(await page.$eval('#model-list',el=>el.children.length),2);
 assert.equal(await page.$eval('#models',el=>el.value),oldId);
 if(errors.length)throw Error(errors.join('\n'));
 console.log('FOUNDRY_MULTI_MODEL_AND_MAP_HANDOFF_PASSED');
}catch(err){
 console.log('FAIL_DETAILS',JSON.stringify({errors}));
 throw err;
}finally{
 await page.close();await browser.close();server.close();
}
