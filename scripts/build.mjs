import {copyFile,mkdir,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,resolve} from 'node:path';
import {build} from 'esbuild';

const root=fileURLToPath(new URL('../',import.meta.url));
const src=join(root,'gorilla-lab');
// Release labels and the report use the same release number as package.json.
const {version}=JSON.parse(await readFile(join(root,'package.json'),'utf8'));
const [,minor,patch]=version.split('.');
const release='R'+minor+(patch==='0'?'':'.'+patch);
const out=process.argv[2]==='--out'&&process.argv[3]?resolve(process.argv[3]):root;
await mkdir(out,{recursive:true});
const pages=[['index.html','main.js'],['editor.html','editor.js'],['model-editor.html','model-editor.js']];

for(const [page,entry] of pages){
  const html=await readFile(join(src,page),'utf8');
  const file=html.match(/<script[^>]*\bsrc="\.\/((?:game-lab|gorilla-editor|gorilla-model-editor)-r\d+\.js)"/)?.[1];
  if(!file)throw new Error('Bundle versionné introuvable dans '+page);
  await build({entryPoints:[join(src,entry)],outfile:join(out,file),bundle:true,format:'iife',target:'es2022',define:{__LAB_RELEASE__:JSON.stringify(release)},minify:true,legalComments:'inline',logLevel:'info'});
  // Match each published HTML page to the bundle from the same release in browser caches.
  const versionedHtml=html.replaceAll('{{LAB_RELEASE}}',release)
    .replace('src="./'+file+'"','src="./'+file+'?v='+release+'"');
  await writeFile(join(out,page),versionedHtml);
}
await copyFile(join(src,'floor-plan.html'),join(out,'floor-plan.html'));

