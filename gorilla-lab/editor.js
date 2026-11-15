
import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {parseMap,exampleMap,makePiece,mapMaterials,materialColors,surfacePresets,maxPieces,downloadMap,storageKey} from './map-format.js';

const $=id=>document.getElementById(id);
const fields=['name','x','y','z','w','h','d','pitch','yaw','material','color','grip','gravity','bounce','solid'];
let map=exampleMap(), selected=0, drag=null;
const undoStack=[];
const screen=$('preview');
const renderer=new T.WebGLRenderer({canvas:screen,antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
const camera=new T.PerspectiveCamera(52,1,.1,420);
camera.position.set(16,15,19);
const controls=new OrbitControls(camera,screen);
controls.target.set(0,0,-5);controls.enableDamping=false;
const scene=new T.Scene();
scene.background=new T.Color('#8fb6c6');
scene.add(new T.HemisphereLight('#f0f5ff','#8e775c',2.6));
const sun=new T.DirectionalLight('#fff1d2',1.8);sun.position.set(-9,18,6);scene.add(sun);
const grid=new T.GridHelper(90,90,'#eae0c5','#647d8a');grid.position.y=.018;scene.add(grid);
const group=new T.Group();scene.add(group);
const sharedBox=new T.BoxGeometry(1,1,1);
const loader=new T.TextureLoader();
const spawn=new T.Mesh(new T.ConeGeometry(.30,.75,5),new T.MeshBasicMaterial({color:'#ffcd63'}));
scene.add(spawn);
let selectionBox=null, renderRequested=false;
function resizeRenderer(){
  const w=screen.clientWidth||1,h=screen.clientHeight||1;
  renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();queueRender();
}
new ResizeObserver(resizeRenderer).observe(screen);
controls.addEventListener('change',queueRender);
function queueRender(){
  if(renderRequested)return;
  renderRequested=true;requestAnimationFrame(()=>{renderRequested=false;renderer.render(scene,camera);});
}
const plan=$('plan'),context=plan.getContext('2d');
let planRange={scale:9,cx:0,cz:-6};
function transform(x,z){return [plan.width/2+(x-planRange.cx)*planRange.scale,plan.height/2+(z-planRange.cz)*planRange.scale];}
function toWorld(clientX,clientY){
  const rect=plan.getBoundingClientRect();
  return {x:((clientX-rect.left)*plan.width/rect.width-plan.width/2)/planRange.scale+planRange.cx,
    z:((clientY-rect.top)*plan.height/rect.height-plan.height/2)/planRange.scale+planRange.cz};
}
function paintPlan(){
  const c=context;
  c.fillStyle='#192e3a';c.fillRect(0,0,plan.width,plan.height);
  c.strokeStyle='#37505f';c.lineWidth=1;
  for(let i=-120;i<=120;i++){
    const [x,z]=transform(i,i);
    if(x>=0&&x<=plan.width){c.beginPath();c.moveTo(x,0);c.lineTo(x,plan.height);c.stroke();}
    if(z>=0&&z<=plan.height){c.beginPath();c.moveTo(0,z);c.lineTo(plan.width,z);c.stroke();}
  }
  map.pieces.forEach((p,i)=>{
    const [x,z]=transform(p.x,p.z);
    c.save();c.translate(x,z);c.rotate(-p.yaw*Math.PI/180);
    c.globalAlpha=p.solid?.78:.30;
    c.fillStyle=p.color==='#ffffff'?materialColors[p.material]:p.color;
    c.fillRect(-p.w*planRange.scale/2,-p.d*planRange.scale/2,p.w*planRange.scale,p.d*planRange.scale);
    c.globalAlpha=1;c.strokeStyle=i===selected?'#ffe095':'#a4bac7';c.lineWidth=i===selected?3:1;
    c.strokeRect(-p.w*planRange.scale/2,-p.d*planRange.scale/2,p.w*planRange.scale,p.d*planRange.scale);
    c.restore();
  });
  const [x,z]=transform(map.spawn.x,map.spawn.z);
  c.fillStyle='#ffd16e';c.beginPath();c.arc(x,z,5,0,Math.PI*2);c.fill();
}
function rebuildScene(){
  for(const mesh of [...group.children]){
    group.remove(mesh);mesh.material.map?.dispose();mesh.material.dispose();
  }
  for(const p of map.pieces){
    const material=new T.MeshLambertMaterial({
      color:new T.Color(materialColors[p.material]).multiply(new T.Color(p.color)),
      transparent:!p.solid||[10,11,12].includes(p.material),opacity:p.solid?([10,11,12].includes(p.material)?.55:1):.40,
    });
    if(p.texture){
      material.map=loader.load(p.texture,()=>queueRender());
      material.map.colorSpace=T.SRGBColorSpace;
      material.color.set(p.color);
    }
    const mesh=new T.Mesh(sharedBox,material);
    mesh.position.set(p.x,p.y,p.z);mesh.scale.set(p.w,p.h,p.d);
    mesh.rotation.set(T.MathUtils.degToRad(p.pitch),T.MathUtils.degToRad(p.yaw),0,'YXZ');
    group.add(mesh);
  }
  spawn.position.set(map.spawn.x,map.spawn.y+.38,map.spawn.z);
  if(selectionBox){scene.remove(selectionBox);selectionBox.geometry.dispose();selectionBox.material.dispose();}
  selectionBox=group.children[selected]?new T.BoxHelper(group.children[selected],'#ffe095'):null;
  if(selectionBox)scene.add(selectionBox);
  paintPlan();queueRender();
}
function notice(message){$('editor-note').textContent=message;}
function remember(){
  if(undoStack.length>=35)undoStack.shift();
  undoStack.push({map:JSON.stringify(map),selected});
}
function pendingSave(){
  $('count').textContent=map.pieces.length+' / '+maxPieces+' pièces';
  try{localStorage.setItem('gorilla-lab-editor-draft',JSON.stringify(map));}catch{}
}
function sync(){
  $('map-name').value=map.name;
  $('pieces').replaceChildren(...map.pieces.map((p,i)=>new Option(p.name,i,i===selected,i===selected)));
  const p=map.pieces[selected];
  for(const key of fields){
    const input=$('p-'+key);input.disabled=!p;
    if(!p)continue;
    if(key==='solid')input.checked=p.solid;else input.value=p[key];
  }
  for(const key of ['x','y','z','yaw'])$('spawn-'+key).value=map.spawn[key];
  rebuildScene();pendingSave();
}
function choose(i){selected=i;sync();}
function addPiece(p){
  if(map.pieces.length>=maxPieces)return notice('Limite de pièces atteinte.');
  remember();map.pieces.push(p);choose(map.pieces.length-1);
}
function current(){return map.pieces[selected];}
$('p-material').append(...mapMaterials.map((m,i)=>new Option(m,i)));
for(const key of fields){
  $('p-'+key).addEventListener('change',event=>{
    if(!current())return;
    remember();
    const input=event.target,v=key==='solid'?input.checked:['name','color'].includes(key)?input.value:Number(input.value);
    current()[key]=v;
    map=parseMap(map);sync();
  });
}
$('map-name').onchange=e=>{remember();map.name=e.target.value;map=parseMap(map);sync();};
$('pieces').onchange=e=>choose(Number(e.target.value));
for(const key of ['x','y','z','yaw']){
  $('spawn-'+key).onchange=e=>{remember();map.spawn[key]=Number(e.target.value);map=parseMap(map);sync();};
}
$('spawn-here').onclick=()=>{
  const p=current();if(!p)return;
  remember();map.spawn={x:p.x,y:p.y+p.h/2+.08,z:p.z,yaw:p.yaw};sync();notice('Départ placé au-dessus de la pièce.');
};
$('add-block').onclick=()=>{const p=current();addPiece(makePiece({x:p?.x??0,z:(p?.z??0)-2.5}));};
$('add-ramp').onclick=()=>{const p=current();addPiece(makePiece({name:'Rampe',x:p?.x??0,z:(p?.z??0)-3,y:.65,w:3,h:.30,d:4,pitch:16,material:5}));};
$('add-wall').onclick=()=>{const p=current();addPiece(makePiece({name:'Mur',x:(p?.x??0)+3,z:p?.z??0,y:1.25,w:.45,h:2.5,d:3.5,material:2}));};
$('duplicate').onclick=()=>{if(current())addPiece({...current(),name:current().name+' bis',x:current().x+1});};
$('delete').onclick=()=>{
  if(map.pieces.length<=1)return notice('Garde au moins une pièce.');
  remember();map.pieces.splice(selected,1);choose(Math.min(selected,map.pieces.length-1));
};
$('undo').onclick=()=>{const last=undoStack.pop();if(last){map=parseMap(last.map);choose(last.selected);}};
$('new-example').onclick=()=>{remember();map=exampleMap();choose(0);};
$('blank-map').onclick=()=>{
  remember();map=parseMap({...exampleMap(),name:'Ma nouvelle map',spawn:{x:0,y:.02,z:3,yaw:0},pieces:[makePiece({name:'Sol',y:-.25,w:24,d:24})]});choose(0);
};
$('surface').onchange=e=>{
  const preset=surfacePresets[e.target.value]; if(!preset||!current())return;
  remember();Object.assign(current(),preset);sync();
};
$('texture-file').onchange=async e=>{
  const file=e.target.files[0],piece=current();
  if(!file||!piece)return;
  try{
    if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw Error('Choisis un PNG, JPG ou WebP.');
    const bitmap=await createImageBitmap(file),c=document.createElement('canvas');
    const factor=Math.min(1,768/Math.max(bitmap.width,bitmap.height));
    c.width=Math.max(1,Math.round(bitmap.width*factor));c.height=Math.max(1,Math.round(bitmap.height*factor));
    c.getContext('2d').drawImage(bitmap,0,0,c.width,c.height);bitmap.close();
    const texture=c.toDataURL('image/webp',.82);
    if(texture.length>1_000_000)throw Error('Texture trop lourde pour une map.');
    remember();piece.texture=texture;sync();notice('Texture intégrée · '+c.width+'×'+c.height);
  }catch(err){notice(err.message);}finally{e.target.value='';}
};
$('texture-clear').onclick=()=>{if(current()){remember();current().texture=null;sync();}};
$('import-map').onchange=async e=>{
  const file=e.target.files[0];if(!file)return;
  try{const loaded=parseMap(await file.text());remember();map=loaded;choose(0);notice('Map chargée.');}catch(err){notice(err.message);}
  e.target.value='';
};
$('export-map').onclick=()=>{try{downloadMap(map);notice('Map JSON exportée.');}catch(err){notice(err.message);}};
$('test-map').onclick=()=>{
  try{localStorage.setItem(storageKey,JSON.stringify(parseMap(map)));location.href='./?custom=1';}
  catch{notice('Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.');}
};
$('zoom-fit').onclick=()=>{
  const maxX=Math.max(...map.pieces.map(p=>Math.abs(p.x)+p.w/2),5);
  const lo=Math.min(...map.pieces.map(p=>p.z-p.d/2)),hi=Math.max(...map.pieces.map(p=>p.z+p.d/2));
  planRange={scale:Math.min(plan.width/(2*maxX+4),plan.height/(hi-lo+4)),cx:0,cz:(lo+hi)/2};
  controls.target.set(0,0,planRange.cz);controls.update();paintPlan();
};
plan.onpointerdown=e=>{
  const hit=toWorld(e.clientX,e.clientY);
  let best=-1,bestY=-Infinity;
  for(let i=0;i<map.pieces.length;i++){
    const p=map.pieces[i],a=p.yaw*Math.PI/180,dx=hit.x-p.x,dz=hit.z-p.z;
    const x=dx*Math.cos(a)-dz*Math.sin(a),z=dx*Math.sin(a)+dz*Math.cos(a);
    if(Math.abs(x)<=p.w/2&&Math.abs(z)<=p.d/2&&p.y>=bestY){best=i;bestY=p.y;}
  }
  if(best<0)return;
  selected=best;
  const p=current();
  drag={pointer:e.pointerId,dx:hit.x-p.x,dz:hit.z-p.z,recorded:false};
  plan.setPointerCapture(e.pointerId);sync();
};
plan.onpointermove=e=>{
  if(!drag||e.pointerId!==drag.pointer)return;
  const hit=toWorld(e.clientX,e.clientY),p=current();
  const step=Number($('snap').value), snap=n=>Math.min(120,Math.max(-120,Math.round(n/step)*step));
  const x=snap(hit.x-drag.dx),z=snap(hit.z-drag.dz);
  if(x===p.x&&z===p.z)return;
  if(!drag.recorded){remember();drag.recorded=true;}
  p.x=x;p.z=z;
  group.children[selected].position.set(p.x,p.y,p.z);selectionBox?.update();
  $('p-x').value=x;$('p-z').value=z;paintPlan();queueRender();
};
plan.onlostpointercapture=()=>{drag=null;pendingSave();};
try{
  const draft=localStorage.getItem('gorilla-lab-editor-draft');
  if(draft)map=parseMap(draft);
}catch{}
sync();resizeRenderer();

