import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {execSync} from 'node:child_process';
import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';

const root=process.cwd();
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json'};
const server=createServer(async(req,res)=>{
  if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
  const rel=decodeURIComponent((req.url?.split('?')[0]??'/').replace(/^\//,'')||'index.html');
  const file=resolve(root,rel);
  if(!file.startsWith(root)){res.writeHead(403);res.end();return;}
  try{res.setHeader('Content-Type',mime[extname(file)]??'application/octet-stream');res.end(await readFile(file));}
  catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(8999,'127.0.0.1',resolve));
const bin=execSync('command -v google-chrome-stable || command -v google-chrome || command -v chromium',{encoding:'utf8',shell:'/bin/bash'}).trim();
const browser=await puppeteer.launch({executablePath:bin,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',error=>errors.push(error.stack||error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
try{
  await page.setViewport({width:1440,height:900});
  await page.goto('http://127.0.0.1:8999/editor.html',{waitUntil:'networkidle2',timeout:60000});
  await page.waitForFunction(()=>document.querySelectorAll('#tool-rail .rail-tool').length>=12,{timeout:15000});
  await page.waitForFunction(()=>document.querySelector('#pieces')?.options.length>0,{timeout:15000});
  const geometry=await page.evaluate(()=>{
    const bounds=id=>{const r=document.querySelector(id).getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height};};
    return {header:bounds('.header'),main:bounds('main'),rail:bounds('#tool-rail'),
      preview:bounds('#preview'),side:bounds('#scene-sidebar'),
      outliner:bounds('#scene-outline'),property:bounds('.property-pane'),
      bodyOverflow:document.body.scrollHeight-innerHeight,
      layout:document.querySelector('#editor-views').dataset.layout,
      tools:document.querySelectorAll('#tool-rail .rail-tool').length,
      oldAnchor:document.querySelector('#scale-anchor')!==null};
  });
  console.log('Geometry',JSON.stringify(geometry));
  assert.equal(geometry.layout,'only-3d');
  assert.ok(geometry.preview.w>650&&geometry.preview.h>500,'large 3D viewport');
  assert.ok(geometry.side.x>geometry.preview.x+geometry.preview.w,'outliner on the right');
  assert.ok(geometry.outliner.h>130&&geometry.property.h>260,'stacked sidebar sections');
  assert.ok(geometry.bodyOverflow<=3,'no full-page desktop scrolling');
  assert.ok(geometry.tools>=12);
  assert.equal(geometry.oldAnchor,false,'remove the symmetrical scale selector');

  // Selection and inspector tabs remain functional after moving DOM nodes.
  await page.select('#pieces','0');
  await page.click('.rail-tool[data-tool="scale"]');
  assert.ok((await page.$eval('#tool-help',el=>el.textContent)).includes('Ctrl'));
  await page.click('.inspector-tab[data-tab="material"]');
  assert.equal(await page.$eval('#scene-sidebar',el=>el.dataset.tab),'material');
  assert.equal(await page.$eval('#surface-controls',el=>getComputedStyle(el).display!=='none'),true);
  await page.click('.inspector-tab[data-tab="scene"]');
  assert.equal(await page.$eval('#map-world-size',el=>el.disabled),false);
  await page.click('.inspector-tab[data-tab="object"]');
  await page.click('.rail-tool[data-tool="preset"]');
  assert.equal(await page.$eval('#insert-palette',el=>el.hidden),false);
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval('#insert-palette',el=>el.hidden),true);

  // A user can open a plan and resize the interface without page scroll.
  await page.select('#layout-mode','split');
  assert.equal(await page.$eval('#editor-views',el=>el.dataset.layout),'split');
  assert.ok(await page.$eval('#plan',el=>el.getBoundingClientRect().width>180));
  await page.click('#plan-zoom-in');
  await page.select('#layout-mode','only-plan');
  assert.ok(await page.$eval('#plan',el=>el.getBoundingClientRect().width>600));
  await page.select('#layout-mode','only-3d');
  await page.click('#sidebar-toggle');
  assert.equal(await page.$eval('body',el=>el.classList.contains('inspector-hidden')),true);
  await page.click('#sidebar-toggle');
  assert.equal(await page.$eval('body',el=>el.classList.contains('inspector-hidden')),false);
  assert.ok(await page.evaluate(()=>document.body.scrollHeight<=innerHeight+3));
  if(errors.length)throw Error(errors.join('\n'));
  console.log('Editor 3D workspace browser validation successful.');
}finally{
  await page.close();await browser.close();server.close();
}
