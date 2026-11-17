import {createServer} from 'node:http';
import {readFile,readdir,mkdir} from 'node:fs/promises';
import {resolve,extname,join} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';

const root=process.cwd(),downloadDir=join(root,'.temp-foundry-downloads');
await mkdir(downloadDir,{recursive:true});
const types={'.html':'text/html','.js':'application/javascript','.css':'text/css'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
  const path=resolve(root,rel);
  if(!path.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',types[extname(path)]||'application/octet-stream');res.end(await readFile(path));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(8999,'127.0.0.1',resolve));
const bin=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',
  {shell:'/bin/bash',encoding:'utf8'}).trim();
const browser=await puppeteer.launch({executablePath:bin,headless:true,
  args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage(),errors=[];
const client=await page.createCDPSession();
await client.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:downloadDir});
page.on('pageerror',error=>errors.push(error.stack||error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
try{
  await page.setViewport({width:1440,height:900});
  await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2',timeout:60000});
  await page.waitForFunction(()=>document.querySelector('#new-shape')?.options.length===7,{timeout:15000});
  const geom=await page.evaluate(()=>{
    const box=selector=>{const r=document.querySelector(selector).getBoundingClientRect();
      return {x:r.x,y:r.y,w:r.width,h:r.height};};
    return {bodyOverflow:document.body.scrollHeight-innerHeight,viewport:box('#preview-canvas'),
      rail:box('.tool-rail'),sidebar:box('.side'),
      shapeButtons:document.querySelectorAll('[data-shape]').length};
  });
  console.log('FOUNDARY_GEOMETRY',JSON.stringify(geom));
  assert.ok(geom.viewport.w>850&&geom.viewport.h>650,'3D viewport should dominate desktop');
  assert.ok(geom.sidebar.x>geom.viewport.x+geom.viewport.w-3);
  assert.ok(geom.bodyOverflow<=3,'no document-level vertical scroll');
  assert.equal(geom.shapeButtons,7);

  await page.click('#new-model');
  await page.click('[data-shape="box"]');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),1);
  assert.equal(await page.$eval('#part-name',el=>el.value),'Cube');
  await page.click('.rail-btn[data-tool="translate"]');
  assert.equal(await page.$eval('.rail-btn[data-tool="translate"]',el=>el.getAttribute('aria-pressed')),'true');

  await page.click('.tab[data-panel="appearance"]');
  await page.click('[data-color="#e7af6e"]');
  assert.equal(await page.$eval('#part-color',el=>el.value),'#e7af6e');
  await page.click('.tab[data-panel="geometry"]');
  await page.focus('#position-x');
  await page.$eval('#position-x',el=>{el.value='0.75';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('#duplicate-part');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),2);
  await page.click('#mirror');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),3);
  await page.click('#undo-action');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),2);
  await page.click('#redo-action');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),3);
  await page.click('.tab[data-panel="settings"]');
  await page.select('#model-kind','structure');
  await page.click('#save');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
  assert.equal(saved.models.length,1);
  assert.equal(saved.models[0].parts.length,3);
  assert.equal(saved.models[0].kind,'structure');
  assert.equal(await page.evaluate(()=>localStorage.getItem('gorilla-foundry-draft-v1')),null);
  assert.ok(await page.$eval('#send-to-map',el=>el.href.includes('model=')));

  await page.select('#export-format','glb');
  await page.click('#export');
  await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Export GLB'),
    {timeout:15000});
  await page.waitForFunction(()=>document.querySelector('#status').dataset.error!=='true');
  const names=await readdir(downloadDir);
  const glb=names.find(n=>n.endsWith('.glb'));
  assert.ok(glb,'GLB should be downloadable');
  const data=await readFile(join(downloadDir,glb));
  assert.equal(data.subarray(0,4).toString('ascii'),'glTF');
  assert.ok(data.length>1000);
  await page.select('#export-format','model-json');
  await page.click('#export');
  await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('MODEL-JSON')||
    document.querySelector('#status').textContent.includes('Export MODEL-JSON'),{timeout:8000});
  const exported=(await readdir(downloadDir)).find(n=>n.endsWith('.gorilla-model.json'));
  assert.ok(exported);
  const parsed=JSON.parse(await readFile(join(downloadDir,exported),'utf8'));
  assert.equal(parsed.models.length,1);

  await page.click('#view-top');
  await page.click('#view-front');
  await page.click('#focus-toggle');
  assert.equal(await page.$eval('body',el=>el.classList.contains('preview-fullscreen')),true);
  await page.click('#focus-toggle');
  await page.click('#example');
  assert.equal(await page.$eval('#part-list',el=>el.children.length),7);
  if(errors.length)throw Error(errors.join('\n'));
  console.log('FOUNDRY_BROWSER_TESTS_PASSED');
}finally{
  await page.close();await browser.close();server.close();
}
