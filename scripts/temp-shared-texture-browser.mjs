import {createServer} from 'node:http';
import {readFile,mkdir,readdir} from 'node:fs/promises';
import {join,extname,resolve} from 'node:path';
import {execSync} from 'node:child_process';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
const root=process.cwd(),downloadDir=join(root,'.tmp-texture-studio-downloads');
await mkdir(downloadDir,{recursive:true});
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
  const filepath=resolve(root,rel);
  if(!filepath.startsWith(root)){res.writeHead(403);res.end();return;}
  try{
    res.setHeader('Content-Type',({'.js':'application/javascript','.html':'text/html','.json':'application/json'})[extname(filepath)]||'application/octet-stream');
    res.end(await readFile(filepath));
  }catch{res.writeHead(404);res.end();}
});
await new Promise(ok=>server.listen(8999,'127.0.0.1',ok));
const chrome=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',
  {encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({executablePath:chrome,headless:true,
 args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
const page=await browser.newPage(),errors=[];
await page.setViewport({width:1440,height:900});
const cdp=await page.createCDPSession();
await cdp.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:downloadDir});
page.on('pageerror',err=>errors.push(err.stack||err.message));
page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
async function openStudio(selector){
  await page.click(selector);
  await page.waitForSelector('.texture-backdrop .texture-canvas',{visible:true});
}
async function paintTexture(){
  await page.select('.texture-window [data-field="pattern"]','brick');
  await page.click('.texture-window [data-cmd="generate"]');
  await page.click('.texture-window [data-tool="paint"]');
  const bounds=await page.$eval('.texture-canvas',node=>{const r=node.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height};});
  await page.mouse.move(bounds.x+bounds.w*.34,bounds.y+bounds.h*.35);
  await page.mouse.down();
  await page.mouse.move(bounds.x+bounds.w*.72,bounds.y+bounds.h*.6,{steps:8});
  await page.mouse.up();
  await page.click('.texture-window [data-cmd="apply"]');
  await page.waitForFunction(()=>!document.querySelector('.texture-backdrop'),{timeout:12000});
}
try{
  await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2'});
  await page.waitForSelector('#new-model');
  await page.click('#new-model');
  await page.click('[data-shape="box"]');
  await page.click('.tab[data-panel="appearance"]');
  await openStudio('#part-paint');
  const patterns=await page.$$eval('.texture-window [data-field=pattern] option',nodes=>nodes.map(node=>node.value));
  assert.ok(patterns.includes('brick')&&patterns.includes('wood')&&patterns.includes('dots'));
  await paintTexture();
  assert.equal(await page.$eval('#part-texture-clear',el=>el.disabled),false);
  await page.click('.tab[data-panel="settings"]');
  await page.click('#in-game');
  await page.click('#save');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
  const texture=saved.models[0].parts[0].texture;
  assert.ok(texture.startsWith('data:image/webp;base64,'));
  assert.ok(texture.length<160000);
  console.log('model texture bytes',texture.length);

  await page.select('#export-format','glb');await page.click('#export');
  await page.waitForFunction(()=>{
    const s=document.querySelector('#status');
    return s.textContent.includes('Export GLB')||s.dataset.error==='true';
  },{timeout:30000});
  const message=await page.$eval('#status',s=>({message:s.textContent,error:s.dataset.error}));
  if(message.error==='true')throw Error('GLB export failed: '+message.message);
  console.log('Export status:',message.message);
  await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('GLB'));
  await new Promise(resolve=>setTimeout(resolve,450));
  const glbFiles=(await readdir(downloadDir)).filter(file=>file.endsWith('.glb'));
  assert.ok(glbFiles.length,'GLB with material must download');
  const data=await readFile(join(downloadDir,glbFiles[0]));
  assert.equal(data.subarray(0,4).toString('ascii'),'glTF');
  assert.ok(data.includes(Buffer.from('image/webp'))||data.includes(Buffer.from('image/png')),'GLB should embed a painted image');
  console.log('GLB with texture exported',data.length);

  await page.goto('http://127.0.0.1:8999/editor.html',{waitUntil:'networkidle2'});
  await page.waitForFunction(()=>document.querySelector('#pieces')?.options.length>0,{timeout:15000});
  await page.select('#pieces','0');
  await page.click('.inspector-tab[data-tab="material"]');
  await openStudio('#texture-paint');
  await paintTexture();
  await page.waitForFunction(()=>{
    const data=JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')||'null');
    return !!data?.pieces?.[0]?.texture?.startsWith('data:image/webp;base64,');
  },{timeout:10000});
  const map=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-editor-draft')));
  assert.ok(map.pieces[0].texture.length>100);
  console.log('map texture bytes',map.pieces[0].texture.length);
  // Load a real game session with the painted model enabled in Spawn.
  await page.goto('http://127.0.0.1:8999/index.html',{waitUntil:'domcontentloaded',timeout:60000});
  await new Promise(resolve=>setTimeout(resolve,2500));
  if(errors.length)throw Error(errors.join('\\n'));
  console.log('SHARED_TEXTURE_STUDIO_BROWSER_PASSED');
}finally{
 await page.close();await browser.close();server.close();
}
