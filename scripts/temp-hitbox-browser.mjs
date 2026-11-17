import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,resolve} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';

const base=process.cwd();
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);return res.end();}
  const path=resolve(base,decodeURIComponent((req.url?.split('?')[0]||'/').replace(/^\//,'')||'index.html'));
  if(!path.startsWith(base)){res.writeHead(403);return res.end();}
  try{
    res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css'})[extname(path)]||'application/octet-stream');
    res.end(await readFile(path));
  }catch{res.writeHead(404);res.end();}
});
await new Promise(done=>server.listen(8999,'127.0.0.1',done));
const binary=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({headless:true,executablePath:binary,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
await page.setViewport({width:1440,height:900});
const errors=[];
page.on('pageerror',error=>errors.push(error.stack??error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
try{
  await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2',timeout:60000});
  await page.waitForSelector('#new-model');
  await page.click('#new-model');
  await page.click('[data-shape="box"]');
  await page.click('[data-shape="sphere"]');
  await page.click('.tab[data-panel="collision"]');
  assert.equal(await page.$eval('#model-inspector',e=>e.dataset.tab),'collision');
  assert.equal(await page.$eval('#hitbox-geometry',e=>e.hidden),true);
  assert.equal(await page.$eval('#hitbox-auto',e=>e.getAttribute('aria-pressed')),'true');
  const initialPreview=await page.evaluate(()=>({
    rendered:!!document.querySelector('#preview-canvas')?.getBoundingClientRect().height,
    tab:document.querySelector('#model-inspector').dataset.tab,
  }));
  console.log('HITBOX_INITIAL',JSON.stringify(initialPreview));
  await page.click('#hitbox-manual');
  assert.equal(await page.$eval('#hitbox-geometry',e=>e.hidden),false);
  assert.equal(await page.$eval('#hitbox-manual',e=>e.getAttribute('aria-pressed')),'true');
  await page.click('#hitbox-drag');
  assert.equal(await page.$eval('.rail-btn[data-tool="translate"]',e=>e.getAttribute('aria-pressed')),'true');
  await page.click('#hitbox-scale');
  assert.equal(await page.$eval('.rail-btn[data-tool="scale"]',e=>e.getAttribute('aria-pressed')),'true');
  await page.$eval('#hitbox-center-x',el=>{el.value='.28';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.$eval('#hitbox-size-x',el=>{el.value='.75';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('#save');
  const save=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
  assert.equal(save.models[0].hitbox.mode,'box');
  assert.equal(save.models[0].hitbox.center[0],.28);
  assert.equal(save.models[0].hitbox.size[0],.75);
  console.log('CUSTOM_HITBOX_SAVED',JSON.stringify(save.models[0].hitbox));
  await page.reload({waitUntil:'networkidle2'});
  await page.click('.tab[data-panel="collision"]');
  assert.equal(await page.$eval('#hitbox-center-x',el=>Number(el.value)),.28);
  await page.click('#hitbox-auto');
  await page.click('#save');
  const auto=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
  assert.equal(auto.models[0].hitbox.mode,'auto');
  console.log('AUTO_HITBOX_RESTORED');
  await page.click('#hitbox-manual');
  await page.$eval('#hitbox-center-y',el=>{el.value='.12';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('#save');
  await page.click('#quick-send-to-map');
  await page.waitForFunction(()=>location.pathname.endsWith('/editor.html'),{timeout:22000});
  await page.waitForSelector('#insert-palette:not([hidden])');
  const chosen=await page.$eval('#model-library',el=>el.value);
  assert.equal(chosen,save.models[0].id);
  console.log('MAP_MODEL_HITBOX_RECOGNIZED',chosen);
  if(errors.length)throw Error(errors.join('\n'));
  console.log('FOUNDRY_HITBOX_BROWSER_PASSED');
}finally{await page.close();await browser.close();server.close();}
