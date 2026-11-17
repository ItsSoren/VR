import {createServer} from 'node:http';
import {readFile,mkdir,readdir} from 'node:fs/promises';
import {resolve,extname,join} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
const root=process.cwd(),downloads=join(root,'.temp-custom-shapes');
await mkdir(downloads,{recursive:true});
const mime={'.html':'text/html','.js':'application/javascript','.json':'application/json'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const path=resolve(root,decodeURIComponent((req.url?.split('?')[0]||'/').replace(/^\//,'')||'index.html'));
  if(!path.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',mime[extname(path)]??'application/octet-stream');res.end(await readFile(path));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(ok=>server.listen(8999,'127.0.0.1',ok));
const binary=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{shell:'/bin/bash',encoding:'utf8'}).trim();
const browser=await puppeteer.launch({executablePath:binary,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage(),errors=[];
await page.setViewport({width:1440,height:900});
const cdp=await page.createCDPSession();
await cdp.send('Page.setDownloadBehavior',{behavior:'allow',downloadPath:downloads});
page.on('pageerror',e=>errors.push(e.stack||e.message));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
try{
 await page.goto('http://127.0.0.1:8999/model-editor.html',{waitUntil:'networkidle2'});
 await page.click('#new-model');
 await page.click('[data-shape="custom"]');
 await page.waitForSelector('.forge-sketch-backdrop',{visible:true});
 assert.equal(await page.$eval('[data-field=mode]',el=>el.value),'extrude');
 await page.select('[data-field=preset]','angle');
 await new Promise(resolve=>setTimeout(resolve,350));
 const shapeError=await page.$eval('.forge-sketch [data-error]',el=>el.textContent);
 console.log('SKETCH_VALIDATION',JSON.stringify(shapeError));
 assert.equal(shapeError,'','angle preset should be a valid contour');
 const canvas=await page.$eval('#sketch-2d',el=>{const r=el.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height};});
 await page.mouse.move(canvas.x+canvas.w*.36,canvas.y+canvas.h*.68);
 await page.mouse.down();
 await page.mouse.move(canvas.x+canvas.w*.33,canvas.y+canvas.h*.7,{steps:5});
 await page.mouse.up();
 await page.$eval('[data-field=depth]',el=>{el.value='.67';el.dispatchEvent(new Event('input',{bubbles:true}));});
 await page.click('[data-act=apply]');
 await page.waitForFunction(()=>!document.querySelector('.forge-sketch-backdrop'),{timeout:15000});
 assert.equal(await page.$eval('#part-shape',el=>el.value),'custom');
 await page.click('#save');
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
 const part=saved.models[0].parts[0];
 assert.equal(part.shape,'custom');
 assert.equal(part.profile.mode,'extrude');
 assert.ok(Math.abs(part.profile.depth-.675)<.0001,'range input rounds to the 2.5 cm step');
 assert.ok(part.profile.points.length>=6);
 await page.click('#edit-profile');
 await page.waitForSelector('.forge-sketch-backdrop',{visible:true});
 await page.select('[data-field=preset]','bottle');
 assert.equal(await page.$eval('[data-field=mode]',el=>el.value),'lathe');
 await page.click('[data-act=apply]');
 await page.click('#save');
 const revised=await page.evaluate(()=>JSON.parse(localStorage.getItem('gorilla-lab-models-v1')));
 assert.equal(revised.models[0].parts[0].profile.mode,'lathe');
 await page.select('#export-format','glb');
 await page.click('#export');
 await page.waitForFunction(()=>{
   const s=document.querySelector('#status');
   return s.textContent.includes('Export GLB')||s.dataset.error==='true';
 },{timeout:15000});
 const status=await page.$eval('#status',s=>({text:s.textContent,error:s.dataset.error}));
 if(status.error==='true')throw Error(status.text);
 const files=await readdir(downloads);
 assert.ok(files.some(file=>file.endsWith('.glb')),'GLB should export custom shape');
 console.log('CUSTOM_SHAPE_BROWSER_PASSED',JSON.stringify({
   shape:revised.models[0].parts[0].shape,
   mode:revised.models[0].parts[0].profile.mode,
   points:revised.models[0].parts[0].profile.points.length,
   glbFiles:files.filter(x=>x.endsWith('.glb'))
 }));
 if(errors.length)throw Error(errors.join('\n'));
}finally{await page.close();await browser.close();server.close();}
