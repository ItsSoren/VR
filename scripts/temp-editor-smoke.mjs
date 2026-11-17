import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
const root=process.cwd();
const mime={'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
  const path=resolve(root,rel);
  if(!path.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',mime[extname(path)]??'application/octet-stream');res.end(await readFile(path));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(r=>server.listen(8999,'127.0.0.1',r));
const binary=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium', {encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({executablePath:binary,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',err=>errors.push(err.stack||err.message));
page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
try{
  await page.setViewport({width:1400,height:920});
  await page.goto('http://127.0.0.1:8999/editor.html',{waitUntil:'networkidle2'});
  await page.waitForSelector('#model-library');
  await page.waitForFunction(()=>document.querySelector('#pieces')?.options.length>0,{timeout:15000});
  assert.equal(await page.$eval('#layout-mode',n=>n.value),'split');
  await page.select('#layout-mode','only-plan');
  assert.equal(await page.$eval('#editor-views',n=>n.dataset.layout),'only-plan');
  await page.select('#layout-mode','split');
  await page.click('#plan-zoom-in');
  await page.$eval('#debug-controls',n=>n.open=true);
  await page.click('#debug-hitboxes');
  await page.click('#blank-map');
  assert.ok(await page.$eval('#pieces',n=>n.options.length)>0);
  await page.select('#pieces','0');
  await page.focus('#map-world-size');
  await page.$eval('#map-world-size',n=>{n.value='640';n.dispatchEvent(new Event('change',{bubbles:true}));});
  assert.equal(await page.$eval('#map-world-size',n=>n.value),'640');
  await page.click('#blank-map');
  await page.select('#pieces','0');
  const enlarged=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')));
  assert.equal(enlarged.worldSize,640);
  assert.equal(enlarged.pieces[0].w,512);
  await page.select('#shape-preset','sphere');
  await page.click('[data-tool="preset"]');
  await page.click('#plan',{offset:{x:180,y:240}});
  const withSphere=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')));
  assert.ok(withSphere.pieces.some(p=>p.primitive==='sphere'),'sphere should be placed directly from quick forms');
  await page.select('#pieces','0');
  await page.$eval('#p-uvScale',n=>{n.value='2';n.dispatchEvent(new Event('change',{bubbles:true}));});
  assert.equal(await page.$eval('#p-uvScale',n=>n.value),'2');
  await page.click('#new-example');
  const draft=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')));
  assert.equal(draft.worldSize,240);
  console.log('Browser smoke successful:',draft.pieces.length,'pieces');
  if(errors.length)throw new Error(errors.join('\n'));
}finally{
  await page.close();await browser.close();server.close();
}
