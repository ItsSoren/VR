import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {
  sketchPresets,startingSketch,normalizeSketch,sketchOutline,
  validateSketch,createSketchGeometry,maxProfilePoints
} from './custom-shape.js';

// Small 2D sketch workshop: draw a silhouette, edit its vertices and get a
// real 3D solid. Uses the model pack's parametric shape representation.
const CSS=`
.forge-sketch-backdrop{position:fixed;inset:0;z-index:2100;background:#090f14e0;display:grid;place-items:center;padding:9px}
.forge-sketch{width:min(1120px,99vw);height:min(790px,97dvh);display:flex;flex-direction:column;
background:#222b32;border:1px solid #728390;border-radius:7px;box-shadow:0 25px 80px #000e;
color:#ecedef;font:12px/1.35 system-ui,sans-serif;overflow:hidden}
.forge-sketch *{box-sizing:border-box}
.forge-sketch header,.forge-sketch footer{background:#303940;padding:9px 13px;border-bottom:1px solid #4a5863;
display:flex;align-items:center;justify-content:space-between;gap:10px}
.forge-sketch header strong{font-size:14px;letter-spacing:.035em}
.forge-sketch header small{color:#e9b47b;font-size:10px;display:block;letter-spacing:.15em}
.forge-sketch button,.forge-sketch select,.forge-sketch input{font:inherit}
.forge-sketch button{border:1px solid #526270;background:#384751;border-radius:4px;min-height:28px;
padding:5px 9px;cursor:pointer;color:#ecedef}
.forge-sketch button:hover{background:#4e6069}
.forge-sketch button[aria-pressed=true]{border-color:#dcac71;background:#725037}
.forge-sketch button:disabled{opacity:.4;cursor:default}
.forge-sketch select,.forge-sketch input{background:#1a252d;border:1px solid #5a6873;color:#ecedef;
border-radius:4px;min-height:28px;padding:4px 6px;width:100%}
.forge-sketch input[type=checkbox]{width:auto;min-height:0;accent-color:#d5a36e}
.forge-sketch input[type=range]{padding:0;min-height:22px}
.forge-sketch label{display:flex;flex-direction:column;gap:4px;color:#c2d0d8}
.forge-sketch .sketch-body{flex:1;min-height:0;display:grid;
grid-template-columns:minmax(0,1fr) minmax(230px,32%) 217px;gap:8px;padding:9px;overflow:hidden}
.forge-sketch .sketch-panel{min-width:0;min-height:0;display:flex;flex-direction:column;
background:#1b272f;border:1px solid #40515d;border-radius:5px;overflow:hidden}
.forge-sketch .sketch-panel h3{margin:0;padding:8px 10px;background:#2b3943;font-size:11px;
letter-spacing:.08em;border-bottom:1px solid #4a5b67;color:#f2c28f}
.forge-sketch .sketch-canvas-wrap{display:flex;align-items:center;justify-content:center;
flex:1;min-height:0;min-width:0;padding:9px}
.forge-sketch #sketch-2d{display:block;max-width:100%;max-height:100%;width:auto;height:auto;
aspect-ratio:1;touch-action:none;cursor:crosshair;background:#18252b;border:1px solid #4f626d;border-radius:3px}
.forge-sketch #sketch-preview{width:100%;height:100%;touch-action:none}
.forge-sketch .sketch-tools{display:flex;gap:5px;padding:6px 9px;border-bottom:1px solid #43525e;flex-wrap:wrap}
.forge-sketch .sketch-tools button{flex:1;min-width:57px;font-size:11px}
.forge-sketch .sketch-help{color:#92aab6;font-size:10px;padding:5px 9px;min-height:25px}
.forge-sketch .sketch-options{overflow-y:auto;min-height:0;padding:10px;display:flex;flex-direction:column;gap:11px;scrollbar-width:thin}
.forge-sketch .sketch-options strong{font-size:11px;color:#f2c28f;letter-spacing:.06em}
.forge-sketch .sketch-row{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.forge-sketch .sketch-check{flex-direction:row;gap:7px;align-items:center}
.forge-sketch .sketch-error{font-size:11px;color:#ffb8a0;min-height:29px}
.forge-sketch footer{border-bottom:0;border-top:1px solid #4a5863;min-height:48px}
.forge-sketch footer span{font-size:10px;color:#abc2ca}
.forge-sketch .sketch-actions{display:flex;gap:6px}
.forge-sketch .sketch-apply{background:#b78146;color:#fff6e9;font-weight:700;border-color:#e2ad74}
.forge-sketch .sketch-apply:hover{background:#cf9253}
.forge-sketch [hidden]{display:none!important}
@media(max-width:850px){.forge-sketch{height:97dvh}
.forge-sketch .sketch-body{grid-template-columns:minmax(0,1fr) 180px;grid-template-rows:minmax(150px,1fr) 190px}
.forge-sketch .sketch-panel:nth-child(2){grid-column:1;grid-row:2}
.forge-sketch .sketch-options{grid-column:2;grid-row:1/span 2}
.forge-sketch footer span{display:none}}
@media(max-width:490px){.forge-sketch .sketch-body{grid-template-columns:1fr;overflow-y:auto;
grid-template-rows:320px 220px auto}
.forge-sketch .sketch-options{grid-column:1;grid-row:3;overflow:visible}}
`;
function installCSS(){
  if(document.querySelector('#forge-sketch-css'))return;
  const tag=document.createElement('style');tag.id='forge-sketch-css';
  tag.textContent=CSS;document.head.append(tag);
}
const clone=value=>structuredClone(value);
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
function distanceSegment(p,a,b){
  const dx=b[0]-a[0],dy=b[1]-a[1],len=dx*dx+dy*dy;
  const t=clamp(len?((p[0]-a[0])*dx+(p[1]-a[1])*dy)/len:0,0,1);
  return dist(p,[a[0]+t*dx,a[1]+t*dy]);
}
export function openShapeStudio({initial=startingSketch(),name='Forme libre',onApply=()=>{}}={}){
  installCSS();
  const shell=document.createElement('div');shell.className='forge-sketch-backdrop';
  shell.innerHTML=`
  <section class="forge-sketch" role="dialog" aria-modal="true" aria-labelledby="sketch-title">
    <header><div><small>GORILLA / FOUNDRY · SHAPE LAB</small><strong id="sketch-title">Dessiner une forme</strong></div>
    <div style="display:flex;gap:5px"><button data-act="undo" title="Annuler · Ctrl Z">↶</button>
    <button data-act="redo" title="Rétablir · Ctrl Maj Z">↷</button>
    <button data-act="close">✕</button></div></header>
    <div class="sketch-body">
      <section class="sketch-panel">
        <h3>01 / CONTOUR À LA SOURIS</h3>
        <div class="sketch-tools">
        <button data-tool="move" aria-pressed="true">Déplacer</button>
        <button data-tool="add" aria-pressed="false">+ Point</button>
        <button data-tool="remove" aria-pressed="false">− Point</button>
        </div>
        <div class="sketch-canvas-wrap"><canvas id="sketch-2d" width="600" height="600" aria-label="Points du contour à déplacer ou ajouter"></canvas></div>
        <div class="sketch-help">Glisse un point · Double-clic sur un bord : ajouter · Suppr : retirer un point</div>
      </section>
      <section class="sketch-panel">
        <h3>02 / APERÇU DU VOLUME</h3>
        <div style="flex:1;min-height:0"><canvas id="sketch-preview" aria-label="Aperçu 3D de la forme"></canvas></div>
        <div class="sketch-help">Glisse pour tourner · Molette pour zoomer</div>
      </section>
      <section class="sketch-options">
        <strong>TYPE DE FORME</strong>
        <label>Construction<select data-field="mode"><option value="extrude">Contour → Extrusion</option>
          <option value="lathe">Profil → Révolution 360°</option></select></label>
        <label>Commencer avec<select data-field="preset">
          <option value="">Forme en cours</option>
          <option value="shield">Bouclier symétrique</option>
          <option value="panel">Plaque rectangulaire</option>
          <option value="angle">Équerre / forme en L</option>
          <option value="arch">Contour arrondi</option>
          <option value="bottle">Bouteille / vase</option>
          <option value="bowl">Bol / récipient</option>
        </select></label>
        <label class="sketch-check"><input type="checkbox" data-field="symmetric"> Symétrie X (dessiner la moitié)</label>
        <strong>VOLUME ET FINITION</strong>
        <label data-depth>Profondeur d’extrusion (m)<input data-field="depth" type="range" min=".025" max="1.5" step=".025"></label>
        <label data-bevel>Arrondir les arêtes<input data-field="bevel" type="range" min="0" max=".15" step=".005"></label>
        <label data-segments>Segments de révolution<input data-field="segments" type="number" min="3" max="128" step="1"></label>
        <output data-triangles aria-live="polite"></output>
        <strong>PRÉCISION</strong>
        <label class="sketch-check"><input data-field="snap" type="checkbox" checked> Grille aimantée</label>
        <label>Pas de grille<select data-field="step"><option value=".025">2,5 cm</option>
          <option value=".05" selected>5 cm</option><option value=".1">10 cm</option></select></label>
        <button data-act="reset">Recommencer avec ce préréglage</button>
        <div class="sketch-error" data-error></div>
      </section>
    </div>
    <footer><span>Contour modifiable · profondeur / arrondi / tour · enregistré dans le modèle</span>
    <div class="sketch-actions"><button data-act="cancel">Annuler</button>
    <button class="sketch-apply" data-act="apply">Utiliser cette forme</button></div></footer>
  </section>`;
  document.body.append(shell);
  const $=query=>shell.querySelector(query);
  $('#sketch-title').textContent='Façonner · '+name;
  let sketch=normalizeSketch(initial),selected=0,tool='move',dragging=false,dragId=null;
  let touched=false,renderer=null,orbit=null,previewMesh=null;
  const undoStack=[],redoStack=[],width=600,center=width/2,ppu=width/2.75;
  const canvas=$('#sketch-2d'),ctx=canvas.getContext('2d');
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(44,1,.01,30);
  scene.background=new T.Color('#1b2b34');
  scene.add(new T.HemisphereLight('#e3f7ff','#314653',2));
  const directional=new T.DirectionalLight('#ffd4a9',2.5);
  directional.position.set(3,4,6);scene.add(directional);
  camera.position.set(1.5,1.25,2.1);
  camera.lookAt(0,0,0);
  const axes=new T.AxesHelper(.7);scene.add(axes);
  const material=new T.MeshStandardMaterial({color:'#89c2cb',metalness:.25,roughness:.52,
    side:T.DoubleSide});
  try{
    const preview=$('#sketch-preview');
    renderer=new T.WebGLRenderer({canvas:preview,antialias:true});
    renderer.setPixelRatio(Math.min(1.5,devicePixelRatio));
    orbit=new OrbitControls(camera,preview);
    orbit.enablePan=false;orbit.minDistance=.5;orbit.maxDistance=7;
    orbit.addEventListener('change',()=>renderer.render(scene,camera));
    const observer=new ResizeObserver(()=>{
      if(!preview.isConnected)return;
      const rect=preview.getBoundingClientRect();
      camera.aspect=Math.max(.1,rect.width/Math.max(1,rect.height));
      camera.updateProjectionMatrix();
      renderer.setSize(Math.max(1,rect.width),Math.max(1,rect.height),false);
      renderer.render(scene,camera);
    });
    observer.observe(preview);
    shell._disposeObserver=()=>observer.disconnect();
  }catch{$('[data-error]').textContent='Aperçu WebGL indisponible ; tu peux dessiner en 2D.';}
  function toPx([x,y]){return[center+x*ppu,center-y*ppu];}
  function fromPointer(event){
    const r=canvas.getBoundingClientRect();
    let x=((event.clientX-r.left)/r.width*width-center)/ppu;
    let y=(center-(event.clientY-r.top)/r.height*width)/ppu;
    if(sketch.mode==='lathe')x=Math.max(0,x);
    if(sketch.symmetric)x=Math.min(0,x);
    if($('[data-field=snap]').checked&&!event.altKey){
      const step=Number($('[data-field=step]').value)||.05;
      x=Math.round(x/step)*step;y=Math.round(y/step)*step;
    }
    return[clamp(x,-1.35,1.35),clamp(y,-1.35,1.35)];
  }
  function nearest(p){
    const max=16/ppu;
    let best=-1,d=max;
    sketch.points.forEach((point,i)=>{
      const next=dist(p,point);
      if(next<d){best=i;d=next;}
    });
    return best;
  }
  function nearEdge(p){
    const points=sketch.points;
    const closed=sketch.mode==='extrude'&&!sketch.symmetric;
    const edges=closed?points.length:points.length-1;
    let index=-1,d=16/ppu;
    for(let i=0;i<edges;i++){
      const v=distanceSegment(p,points[i],points[(i+1)%points.length]);
      if(v<d){index=i;d=v;}
    }
    return index;
  }
  function remember(){
    undoStack.push(clone(sketch));
    if(undoStack.length>36)undoStack.shift();
    redoStack.length=0;touched=true;
    $('[data-act=undo]').disabled=false;$('[data-act=redo]').disabled=true;
  }
  function history(from,to){
    if(!from.length)return;
    to.push(clone(sketch));sketch=from.pop();
    selected=clamp(selected,0,sketch.points.length-1);
    touched=true;sync();draw();
    $('[data-act=undo]').disabled=!undoStack.length;
    $('[data-act=redo]').disabled=!redoStack.length;
  }
  function draw(){
    ctx.clearRect(0,0,width,width);ctx.fillStyle='#15232d';ctx.fillRect(0,0,width,width);
    const step=Number($('[data-field=step]').value)||.05;
    const lineStep=step<.05?.1:.1;
    ctx.lineWidth=1;
    for(let i=-1.4;i<=1.4;i+=lineStep){
      const x=toPx([i,0])[0],y=toPx([0,i])[1];
      ctx.strokeStyle=Math.abs(i)<.0001?'#d8a26677':'#47627148';
      ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,width);ctx.stroke();
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke();
    }
    const outline=sketch.mode==='extrude'?sketchOutline(sketch):sketch.points;
    const trace=(points,fill)=>{
      if(!points.length)return;
      ctx.beginPath();
      ctx.moveTo(...toPx(points[0]));
      points.slice(1).forEach(point=>ctx.lineTo(...toPx(point)));
      if(fill)ctx.closePath();
    };
    if(sketch.mode==='extrude'){
      trace(outline,true);ctx.fillStyle='#65b9c733';ctx.fill();
      ctx.strokeStyle='#8fdce2';ctx.lineWidth=3;ctx.stroke();
    }else{
      trace(outline,false);ctx.strokeStyle='#8fdce2';ctx.lineWidth=3;ctx.stroke();
      ctx.strokeStyle='#d3a261aa';ctx.setLineDash([8,6]);ctx.beginPath();
      ctx.moveTo(center,30);ctx.lineTo(center,width-30);ctx.stroke();ctx.setLineDash([]);
    }
    if(sketch.symmetric){
      ctx.lineWidth=2;ctx.setLineDash([5,4]);ctx.strokeStyle='#daa96e99';
      ctx.beginPath();ctx.moveTo(center,10);ctx.lineTo(center,width-10);ctx.stroke();
      ctx.setLineDash([]);
    }
    sketch.points.forEach((point,i)=>{
      const [x,y]=toPx(point);
      ctx.beginPath();ctx.arc(x,y,i===selected?8:6,0,Math.PI*2);
      ctx.fillStyle=i===selected?'#f5c486':'#e3f0ef';ctx.fill();
      ctx.strokeStyle='#344b58';ctx.lineWidth=2;ctx.stroke();
    });
    const error=validateSketch(sketch);
    $('[data-error]').textContent=error??'';
    $('[data-act=apply]').disabled=Boolean(error);
  }
  function updatePreview(){
    try{
      const geometry=createSketchGeometry(sketch);
      $('[data-triangles]').textContent=((geometry.index?.count??geometry.attributes.position.count)/3).toLocaleString('fr-FR')+' triangles';
      if(!renderer){geometry.dispose();return;}
      if(previewMesh){scene.remove(previewMesh);previewMesh.geometry.dispose();}
      previewMesh=new T.Mesh(geometry,material);
      scene.add(previewMesh);renderer.render(scene,camera);
    }catch{
      $('[data-triangles]').textContent='—';
      renderer?.render(scene,camera);
    }
  }
  let pending=false;
  function schedulePreview(){
    if(pending)return;
    pending=true;requestAnimationFrame(()=>{pending=false;if(shell.isConnected)updatePreview();});
  }
  function sync(){
    $('[data-field=mode]').value=sketch.mode;
    $('[data-field=symmetric]').checked=sketch.symmetric;
    $('[data-field=symmetric]').disabled=sketch.mode==='lathe';
    $('[data-field=depth]').value=sketch.depth;
    $('[data-field=bevel]').value=sketch.bevel;
    $('[data-field=segments]').value=sketch.segments;
    $('[data-depth]').hidden=sketch.mode==='lathe';
    $('[data-bevel]').hidden=sketch.mode==='lathe';
    $('[data-segments]').hidden=sketch.mode!=='lathe';
  }
  function changeMode(mode){
    remember();
    sketch=normalizeSketch(mode==='lathe'?sketchPresets.bottle:sketchPresets.shield);
    selected=0;sync();draw();schedulePreview();
  }
  function changePreset(key){
    if(!sketchPresets[key])return;
    remember();sketch=normalizeSketch(sketchPresets[key]);
    selected=0;sync();draw();schedulePreview();
  }
  function movePoint(point){
    if(selected<0)return;
    sketch.points[selected]=point;
    draw();schedulePreview();
  }
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    event.preventDefault();
    const p=fromPointer(event),index=nearest(p);
    if(tool==='remove'){
      if(index>=0&&sketch.points.length>3){remember();sketch.points.splice(index,1);
        selected=clamp(index,0,sketch.points.length-1);draw();schedulePreview();}
      return;
    }
    if(tool==='add'&&sketch.points.length<maxProfilePoints){
      remember();
      const edge=nearEdge(p);
      selected=edge<0?sketch.points.length:edge+1;
      sketch.points.splice(selected,0,p);
      draw();schedulePreview();return;
    }
    if(index<0)return;
    selected=index;remember();dragId=event.pointerId;dragging=true;
    canvas.setPointerCapture(event.pointerId);draw();
  });
  canvas.addEventListener('pointermove',event=>{
    if(!dragging||dragId!==event.pointerId)return;
    movePoint(fromPointer(event));
  });
  const finish=event=>{
    if(event.pointerId!==dragId)return;
    dragging=false;dragId=null;
    if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);
  };
  canvas.addEventListener('pointerup',finish);canvas.addEventListener('pointercancel',finish);
  canvas.addEventListener('dblclick',event=>{
    if(sketch.points.length>=maxProfilePoints)return;
    const point=fromPointer(event),edge=nearEdge(point);
    if(edge<0)return;
    remember();selected=edge+1;sketch.points.splice(selected,0,point);
    draw();schedulePreview();
  });
  canvas.addEventListener('contextmenu',event=>{
    event.preventDefault();
    const i=nearest(fromPointer(event));
    if(i<0||sketch.points.length<=3)return;
    remember();sketch.points.splice(i,1);selected=clamp(i,0,sketch.points.length-1);
    draw();schedulePreview();
  });
  for(const button of shell.querySelectorAll('[data-tool]')){
    button.onclick=()=>{
      tool=button.dataset.tool;
      shell.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    };
  }
  $('[data-field=mode]').onchange=e=>changeMode(e.target.value);
  $('[data-field=preset]').onchange=e=>{changePreset(e.target.value);e.target.value='';};
  $('[data-field=symmetric]').onchange=e=>{
    remember();
    if(e.target.checked){
      // Approximate the half contour from points on the left; edit only that half.
      const half=sketch.points.filter(([x])=>x<=.005).sort((a,b)=>a[1]-b[1]);
      sketch.points=half.length>=3?half:clone(sketchPresets.shield.points);
      if(sketch.points[0][0]<-.001)sketch.points.unshift([0,sketch.points[0][1]]);
      if(sketch.points.at(-1)[0]<-.001)sketch.points.push([0,sketch.points.at(-1)[1]]);
      sketch.symmetric=true;
    }else{
      sketch.points=sketchOutline(sketch);sketch.symmetric=false;
    }
    selected=0;sync();draw();schedulePreview();
  };
  for(const field of ['depth','bevel','segments']){
    $('[data-field='+field+']').oninput=e=>{
      if(!dragging&&e.target.dataset.started!=='1'){remember();e.target.dataset.started='1';}
      sketch[field]=Number(e.target.value);
      draw();schedulePreview();
    };
    $('[data-field='+field+']').onchange=e=>{
      e.target.dataset.started='0';
      if(field==='segments'){
        sketch.segments=normalizeSketch(sketch).segments;
        e.target.value=sketch.segments;
      }
    };
  }
  $('[data-field=step]').onchange=draw;
  $('[data-field=snap]').onchange=draw;
  $('[data-act=reset]').onclick=()=>{
    const key=sketch.mode==='lathe'?'bottle':'shield';changePreset(key);
  };
  $('[data-act=undo]').onclick=()=>history(undoStack,redoStack);
  $('[data-act=redo]').onclick=()=>history(redoStack,undoStack);
  const close=force=>{
    if(!force&&touched&&!confirm('Fermer sans utiliser cette forme ?'))return;
    window.removeEventListener('keydown',keys,true);
    shell._disposeObserver?.();
    orbit?.dispose();
    if(previewMesh)previewMesh.geometry.dispose();
    material.dispose();renderer?.dispose();
    shell.remove();
  };
  const keys=e=>{
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();close(false);return;}
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){
      e.preventDefault();e.stopImmediatePropagation();
      if(e.shiftKey)history(redoStack,undoStack);else history(undoStack,redoStack);
      return;
    }
    if(e.target.closest('input,select,button'))return;
    if(e.key==='Delete'||e.key==='Backspace'){
      if(sketch.points.length>3){remember();sketch.points.splice(selected,1);
        selected=clamp(selected,0,sketch.points.length-1);draw();schedulePreview();}
      e.preventDefault();e.stopImmediatePropagation();
    }
  };
  window.addEventListener('keydown',keys,true);
  $('[data-act=close]').onclick=()=>close(false);
  $('[data-act=cancel]').onclick=()=>close(false);
  $('[data-act=apply]').onclick=()=>{
    const error=validateSketch(sketch);if(error){$('[data-error]').textContent=error;return;}
    try{onApply(normalizeSketch(sketch));touched=false;close(true);}
    catch(error){$('[data-error]').textContent=error.message||'Forme invalide.';}
  };
  $('[data-act=undo]').disabled=true;$('[data-act=redo]').disabled=true;
  sync();draw();schedulePreview();
  return {close:()=>close(false)};
}

