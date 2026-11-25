import {readFile, writeFile, copyFile, mkdir} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';
import {createLevel} from './level.mjs';
import {patchDemoLocomotion} from './appuis.mjs';

const here=dirname(fileURLToPath(import.meta.url));
const base=resolve(process.argv[2]??join(here,'..','base'));
const out=resolve(process.argv[3]??join(here,'..','site'));
const entry=join(base,'gorilla-lab','main.js');
const require=createRequire(import.meta.url);
const threeRoot=dirname(dirname(require.resolve('three')));
const read=async path=>(await readFile(path,'utf8')).replaceAll('\r\n','\n');

function edit(source, before, after) {
  const at=source.indexOf(before);
  if(at<0||source.indexOf(before,at+before.length)>=0) {
    throw new Error('Ancre attendue une fois : '+before.slice(0,92));
  }
  return source.slice(0,at)+after+source.slice(at+before.length);
}
function replaceSection(source,start,end,insertion) {
  const at=source.indexOf(start);
  const stop=source.indexOf(end,at+start.length);
  if(at<0||stop<=at)throw new Error('Section attendue : '+start);
  return source.slice(0,at)+insertion+source.slice(stop);
}

const calibration=JSON.parse(await read(join(base,'maps','scary-gorilla-appuis.gorilla.json')));
const bunker=createLevel(calibration);
let game=await read(entry);
game=edit(game,"const labRelease=__LAB_RELEASE__;",[
  "import {createExperience} from 'demo:experience';",
  "import {createCeilingAssist} from 'demo:appuis';",
  "import demoLevel from 'demo:level';",
  "const labRelease=__LAB_RELEASE__;",
].join('\n'));
game=edit(game,"const defaults={...settings};",
  "Object.assign(settings,{size:3,post:false,bloom:false,reflections:false,rayTrace:false});\nconst defaults={...settings};");
game=edit(game,"const steps=createStepSound(),mapAudio=createMapAudio(()=>steps.context);",[
  "const steps=createStepSound(),mapAudio=createMapAudio(()=>steps.context);",
  "const demo=createExperience({T,scene,audioContext:()=>steps.context,announce:showGameHint,goHome:position=>{resetPlayer();if(position)rig.position.set(...position);}});",
  "document.querySelector('#demo-mute').onchange=({target})=>demo.mute(target.checked);",
  "function restartDemo(){demo.reset();resetPlayer();showGameHint('Nouvelle sortie.');}",
  "document.querySelector('#demo-restart').onclick=restartDemo;",
  "document.querySelector('#demo-play').onclick=()=>toggleSettings(true);",
  "document.querySelector('#demo-lamp').onclick=()=>demo.toggleLamp('desktop');",
  "document.querySelector('#demo-crouch').onpointerdown=event=>{event.currentTarget.setPointerCapture(event.pointerId);keys.add('KeyC');};",
  "for(const event of ['pointerup','pointercancel','lostpointercapture'])document.querySelector('#demo-crouch').addEventListener(event,()=>keys.delete('KeyC'));",
  "let demoTime=0,wristObjective='',screenshotPending=false;",
  "window.scaryGorillaStatus=()=>({...demo.state(),objective:demo.objective(),position:worldHead.toArray(),renderer:{...renderStats}});",
].join('\n'));
game=replaceSection(game,"const mapQuery=new URLSearchParams(location.search);","function captureNetworkAvatar()",[
  "let startingMap=true;",
  "try{maps.load(demoLevel);}catch(error){document.querySelector('#status').textContent=error.message;throw error;}",
  "finally{startingMap=false;}",
  "",
].join('\n'));
game=edit(game,"const requested=refreshOptions.includes(120)?120:(refreshOptions.find(hz=>hz>=100)??refreshOptions.at(-1));",
  "const requested=refreshOptions.includes(72)?72:(refreshOptions.find(hz=>hz>=72)??refreshOptions.at(-1));");
game=edit(game,"    if(!pose){\n      if(spectator.guestActive)", "    if(!pose){\n      demo.grip(h,false,menu);\n      if(spectator.guestActive)");
game=edit(game,"    else if(!menu&&grip&&!h.grip&&settings.objects&&!h.held){",
  "    else if(!demo.grip(h,grip,menu)&&!menu&&grip&&!h.grip&&settings.objects&&!h.held){");
game=edit(game,"    if(h.side==='right'&&toolButton&&!h.toolButton&&!menu)change('toolActive',1);",
  "    if(h.side==='right'&&toolButton&&!h.toolButton&&!menu)demo.toggleGrain();");
game=edit(game,"    const trigger=Boolean(source.gamepad?.buttons[0]?.pressed);",
  "    const trigger=Boolean(source.gamepad?.buttons[0]?.pressed);\n    const demoTrigger=!menu&&trigger&&!h.trigger&&demo.toggleLamp(h);");
game=edit(game,"    else if(!menu&&!settings.blasterActive&&(h.side==='right'||trigger&&!h.trigger))fixtureAim=",
  "    else if(!demoTrigger&&!menu&&!settings.blasterActive&&(h.side==='right'||trigger&&!h.trigger))fixtureAim=");
game=edit(game,"  const targetEye=.43+settings.size*.088;",
  "  const targetEye=.43+settings.size*.088-(!inVR&&(keys.has('KeyC')||keys.has('ControlLeft'))?.28:0);");
game=edit(game,"let currentGravity=9.81,lastPlayerDiagnostics=null;",[
  "let currentGravity=9.81,lastPlayerDiagnostics=null;",
  "const ceilingAssist=createCeilingAssist();",
  "const crouchFrom=new T.Vector3(),crouchTo=new T.Vector3(),crouchHit=new T.Vector3(),crouchNormal=new T.Vector3();",
].join('\n'));
game=edit(game,"function resetPlayer(){","function resetPlayer(){\n  ceilingAssist.reset();");
game=edit(game,"    eye.position.y=-drop;\n    head.set(p.x,p.y-drop,p.z);",[
  "    const rise=ceilingAssist.rise(inputDt);",
  "    if(rise>0){",
  "      crouchFrom.set(p.x,p.y-drop-ceilingAssist.depth,p.z).applyAxisAngle(up,yaw).add(rig.position);",
  "      crouchTo.copy(crouchFrom).y+=rise;",
  "      if(!settings.collisions||!handContact(crouchFrom,crouchTo,HEAD_RADIUS,activeBoxes,crouchHit,crouchNormal)||crouchNormal.y>=-.2){",
  "        ceilingAssist.recover(rise);",
  "      }",
  "    }",
  "    eye.position.y=-drop-ceilingAssist.depth;",
  "    head.set(p.x,p.y-drop-ceilingAssist.depth,p.z);",
].join('\n'));
game=edit(game,"    const result=locomotion.finish(appliedMove,velocity);",[
  "    const crouch=ceilingAssist.press({",
  "      underside:settings.collisions&&locomotion.hands.some(({hand,normal})=>hand.surface&&normal.y<-.65),",
  "      grounded,plannedY:locomotion.planned.y,appliedY:appliedMove.y,intentY:locomotion.intent.y,eyeHeight:head.y,",
  "    });",
  "    eye.position.y-=crouch;head.y-=crouch;worldHead.y-=crouch;",
  "    const result=locomotion.finish(appliedMove,velocity);",
].join('\n'));
const move="    locomotion.move({head:worldHead,dt,inputDt,gravity,settings,boxes:handBoxes,velocity,movement:delta,reach:armSegmentLength()*2+.16});";
game=edit(game,move,move+"\n"+[
  "    const stick=hands[0].gamepad?.axes;",
  "    if(!menu&&stick?.length>=2&&!hands.some(hand=>hand.surface)){",
  "      const start=stick.length>=4?2:0,x=stick[start],z=stick[start+1];",
  "      const power=Math.hypot(x,z);",
  "      if(power>.23)delta.add(scratch.set(x,0,z).normalize().applyAxisAngle(up,bodyYaw)",
  "        .multiplyScalar(T.MathUtils.clamp((power-.23)/.77,0,1)*1.65*dt));",
  "    }",
].join('\n'));
game=edit(game,"sprint?5.4:3.4","sprint?4.1:2.65");
game=replaceSection(game,"    const interact=actions.delete('KeyE');","\n  }\n  const wristWasVisible",[
  "    if(actions.delete('KeyE'))demo.desktopInteract(raySource,forward);",
  "    if(actions.delete('KeyF'))demo.toggleLamp('desktop');",
].join('\n'));
game=edit(game,"  settingsPanel.hidden=hidden;openSettings.hidden=!hidden;",[
  "  settingsPanel.hidden=hidden;openSettings.hidden=!hidden;",
  "  keyboard.clear();flat.clear();blasterTrigger.clear();demo.setPaused(!hidden&&!renderer.xr.isPresenting);",
].join('\n'));
game=edit(game,"canvas:renderer.domElement,enabled:()=>!renderer.xr.isPresenting,", "canvas:renderer.domElement,enabled:()=>!renderer.xr.isPresenting&&settingsPanel.hidden,");
game=replaceSection(game,"addEventListener('keydown',e=>{","addEventListener('keyup',e=>keyboard.up(e.code));",[
  "addEventListener('keydown',e=>{",
  "  if(!renderer.xr.isPresenting&&(e.code==='Escape'||e.code==='Tab'&&settingsPanel.hidden)){",
  "    e.preventDefault();if(!e.repeat)toggleSettings();return;",
  "  }",
  "  if(!settingsPanel.hidden||e.target.closest?.('button,select,input,textarea'))return;",
  "  if(e.code==='Space')e.preventDefault();",
  "  if(e.code==='KeyR'){if(!e.repeat)restartDemo();return;}",
  "  if(e.code==='KeyP'){if(!e.repeat)screenshotPending=true;return;}",
  "  keyboard.down(e.code,e.repeat);",
  "});",
  "",
].join('\n'));
game=edit(game,"  if(inVR&&!pose)return;",[
  "  if(inVR&&!pose)return;",
  "  const demoPaused=inVR?menu:!settingsPanel.hidden;",
  "  if(!inVR&&demoPaused&&hasPreviousHead){demo.setPaused(true);renderer.render(scene,camera);return;}",
].join('\n'));
game=edit(game,"    if(actions.delete('KeyE'))demo.desktopInteract(raySource,forward);", "    if(!demoPaused&&actions.delete('KeyE'))demo.desktopInteract(raySource,forward);");
game=edit(game,"    if(actions.delete('KeyF'))demo.toggleLamp('desktop');", "    if(!demoPaused&&actions.delete('KeyF'))demo.toggleLamp('desktop');");
game=edit(game,"hintUntil=0;vrHint='';}","hintUntil=0;vrHint='';hudDirty=true;}");
game=edit(game,"c.fillText('GORILLA LAB '+labRelease,25,42);","c.fillText('STATION ÉCHO',25,42);");
game=edit(game,"item(25,579,286,44,'Réglages par défaut',restore);","item(25,579,286,44,'Recommencer la sortie',()=>{restartDemo();menu=false;});");
game=replaceSection(game,"reportSnapshot?'Rapport capturé. Quitte la VR pour le télécharger.':", "),25,645,587);", "reportSnapshot?'Rapport capturé. Quitte la VR pour le télécharger.':demo.objective()");
game=edit(game,"  const wristWasVisible=wrist.mesh.visible;",[
  "  if(inVR&&wristObjective!==demo.objective()){wristObjective=demo.objective();hudDirty=true;}",
  "  const wristWasVisible=wrist.mesh.visible;",
].join('\n'));
game=replaceSection(game,"      c.fillStyle='#fff0cf';c.font='bold 25px system-ui';c.fillText(fps+", "wrist.texture.needsUpdate=true;",[
  "      c.fillStyle='#e4bd7d';c.font='bold 20px system-ui';c.fillText('STATION ÉCHO',17,30);",
  "      c.fillStyle='#fff0cf';c.font='22px system-ui';c.fillText(vrHint||wristObjective,17,63,382);",
  "      ",
].join('\n'));
game=edit(game,"  const renderStart=performance.now();",
  "  const pausedNow=inVR?menu:demoPaused;\n  if(!pausedNow)demoTime+=inputDt;\n  if(!spectating)demo.update({head:worldHead,camera,dt:inputDt,time:demoTime,paused:pausedNow});\n  const renderStart=performance.now();");
game=edit(game,"  renderSubmissionCpuMs=performance.now()-renderStart;",[
  "  renderSubmissionCpuMs=performance.now()-renderStart;",
  "  if(!inVR&&screenshotPending){",
  "    screenshotPending=false;",
  "    renderer.domElement.toBlob(blob=>{",
  "      if(!blob){showGameHint('Capture indisponible.');return;}",
  "      const link=document.createElement('a');",
  "      const url=URL.createObjectURL(blob);",
  "      link.href=url;link.download='station-echo-'+Date.now()+'.png';link.click();",
  "      setTimeout(()=>URL.revokeObjectURL(url),10000);",
  "      showGameHint('Capture enregistrée.');",
  "    },'image/png');",
  "  }",
].join('\n'));

let html=await read(join(base,'gorilla-lab','index.html'));
html=html.replace(/<title>[^<]+<\/title>/,'<title>Scary Gorilla — Station Écho</title>');
html=edit(html,'</style></head>','</style><link rel="icon" href="data:,"><link rel="stylesheet" href="./bunker.css"></head>');
html=edit(html,'aria-label="Arène Gorilla Lab"','aria-label="Station Écho en 3D"');
html=html.replace(/aria-label="Ouvrir les réglages de Gorilla Lab [^"]+"/,'aria-label="Ouvrir le menu"');
html=html.replace(/Gorilla Lab [^<]* · Réglages/,'Station Écho · Menu');
html=html.replace(/<h1>Gorilla Lab [^<]+<\/h1>/,'<h1>Scary Gorilla</h1>');
html=replaceSection(html,'<p>VR :','<nav aria-label="Réglages">',[
  '<p class="demo-subtitle">Station Écho</p>',
  '<p>Réactive les archives, récupère leur enregistreur et transmets-le depuis le refuge.</p>',
  '<div class="demo-buttons"><button id="demo-play">Jouer sur écran</button><button id="demo-restart">Recommencer</button></div>',
  '<label class="demo-adjust" for="demo-grain">Grain de film <input id="demo-grain" type="range" min="0" max="60" value="19"></label>',
  '<label class="demo-adjust" for="demo-mute">Couper les sons de la démo <input id="demo-mute" type="checkbox"></label>',
  '<details class="demo-controls"><summary>Commandes</summary><p>VR · Appuis avec les mains ou stick gauche. Stick droit pour tourner. Grip pour interagir. Gâchette pour la lampe, A pour le grain. B ou Y pour ouvrir le menu et mettre la mission en pause.</p><p>PC · ZQSD ou WASD, glisser pour regarder. E pour interagir, F pour la lampe, C pour s’accroupir, Espace pour sauter. Échap pour la pause, R pour recommencer, P pour une capture.</p></details>',
  '<details class="lab-settings"><summary>Réglages de locomotion et de rendu</summary>',
  '',
].join('\n'));
html=edit(html,'</aside><script defer src="./game-lab-r39.js"></script></body></html>',[
  '</details></aside>',
  '<output id="demo-objective" aria-live="polite"></output>',
  '<script type="module" src="./bunker.js"></script></body></html>',
  '',
].join('\n'));
html=edit(html,'<button data-flat-action="tool">Outil</button><button data-flat-action="mode">Mode</button>',
  '<button type="button" id="demo-lamp">Lampe</button><button type="button" id="demo-crouch">S’accroupir</button>');

await mkdir(out,{recursive:true});
await writeFile(join(out,'index.html'),html);
await writeFile(join(out,'bunker.json'),JSON.stringify(bunker,null,2)+'\n');
await copyFile(join(here,'bunker.css'),join(out,'bunker.css'));
for(const name of ['three.module.min.js','three.core.min.js']){
  await copyFile(join(threeRoot,'build',name),join(out,name));
}
await copyFile(join(threeRoot,'LICENSE'),join(out,'three.LICENSE.txt'));
const bundle=await build({
  stdin:{contents:game,sourcefile:entry,resolveDir:dirname(entry)},
  outfile:join(out,'bunker.js'),bundle:true,format:'esm',target:'es2022',write:false,
  define:{__LAB_RELEASE__:JSON.stringify('R46.1')},minify:true,legalComments:'inline',
  nodePaths:[join(here,'..','node_modules')],
  plugins:[{
    name:'scary-gorilla',
    setup(plugin){
      plugin.onResolve({filter:/^demo:experience$/},()=>({path:join(here,'experience.mjs'),namespace:'demo-files'}));
      plugin.onResolve({filter:/^demo:appuis$/},()=>({path:join(here,'appuis.mjs'),namespace:'demo-files'}));
      plugin.onResolve({filter:/^demo:level$/},()=>({path:'level',namespace:'scary-gorilla'}));
      plugin.onLoad({filter:/.*/,namespace:'scary-gorilla'},()=>({contents:JSON.stringify(bunker),loader:'json'}));
      plugin.onResolve({filter:/^(three|\.)/},({path,resolveDir})=>{
        if(path==='three')return {path:'./three.module.min.js',external:true};
        const source=path.startsWith('three/addons/')?join(threeRoot,'examples','jsm',path.slice('three/addons/'.length)):
          resolve(resolveDir,path);
        return {path:source,namespace:'demo-files'};
      });
      plugin.onLoad({filter:/.*/,namespace:'demo-files'},async({path})=>{
        let contents=await read(path);
        if(path===join(base,'gorilla-lab','locomotion.js')){
          contents=patchDemoLocomotion(contents,edit);
        }
        return {contents,resolveDir:dirname(path)};
      });
    },
  }],
});
await writeFile(join(out,'bunker.js'),bundle.outputFiles[0].contents);
