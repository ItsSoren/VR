import {openEntitySculptor} from './entity-sculptor.js';
import {actionSounds,normalizePartReaction} from './model-pack.js';
import * as T from 'three';
import {effectChannels,normalizeModelEffect,setModelEffectTime} from './model-effect.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {TransformControls} from 'three/addons/controls/TransformControls.js';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {
  createModelMaterial,createModelPartMaterial,disposeModelMaterial,createModelPartGeometry,createModelUnitGeometry,modelBounds,modelHitbox,modelHitboxGeometry,modelCollisionZones,modelPartOwnMaterial,modelPartUv,modelPhysics,modelPartZones,modelFinishes,defaultModelProperties,
  modelLimits,modelShapes,modelStorageKey,modelSurfaces,normalizeModelPack,readModelPack,
} from './model-pack.js';
import {createBuiltinModelTemplates} from './model-assets.js';
import {openTextureStudio} from './texture-studio.js';
import {openShapeStudio} from './shape-studio.js';
import {modelFacePosition,modelGroupTransform,scaleHandleSigns} from './editor-scale.js';
import {avatarJoints,avatarTemplateParts,avatarReady,createAvatarRig,normalizeAvatarJoint,normalizeAvatarRig} from './avatar-rig.js';
import {applyMechanism,normalizeHinge} from './model-hinge.js';
import {startingSketch} from './custom-shape.js';

// GORILLA / FOUNDRY. Geometry remains in the Gorilla model-pack v1 format:
// the editor transforms local part geometry without changing the game's schema.
const $=id=>document.getElementById(id);
const canvas=$('preview-canvas');
const axes=['X','Y','Z'];
const limits={
  position:{min:-3,max:3,step:.01,label:'POSITION / M'},
  rotation:{min:-360,max:360,step:1,label:'ROTATION / °'},
  scale:{min:.02,max:4,step:.01,label:'DIMENSIONS / ÉCHELLE'},
};
const pack=readModelPack(localStorage);
const builtinModels=createBuiltinModelTemplates();
const draftKey='gorilla-foundry-draft-v1';
let dirty=false,modelId=pack.models[0]?.id??null,partIndex=0;
let multi=new Set(),transformStart=null,ctrlScale=false;
try{
  const draft=localStorage.getItem(draftKey);
  if(draft){
    const data=normalizeModelPack(JSON.parse(draft));
    Object.assign(pack,data);
    modelId=pack.models[0]?.id??null;
    dirty=true;
  }
}catch{}
let renderer=null,orbit=null,gizmo=null,viewMode='select',hitboxEditing=false;
let transformMoved=false;
let pendingDraft=0,gestureStart=null,fieldHistory=null;
const undoStack=[],redoStack=[],maxUndo=48;
const previews=new T.Group();
const groupPivot=new T.Object3D();
const referencePreviews=new T.Group();
let rigPreview=null;
const avatarAngles=new Map();
const pivotHandle=new T.Object3D(),skeletonGuide=new T.Group();
let moveAvatarPivot=false;
const jointMarkerGeometry=new T.SphereGeometry(1,10,6);
const jointMarkers={};
const skeletonLinks=new T.LineSegments(
  new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(6*(Object.keys(avatarJoints).length-1),3)),
  new T.LineBasicMaterial({color:'#49d3ec',depthTest:false,depthWrite:false,transparent:true,opacity:.85}),
);
skeletonLinks.frustumCulled=false;skeletonLinks.renderOrder=9;skeletonGuide.add(skeletonLinks);
for(const key of Object.keys(avatarJoints)){
  const marker=new T.Mesh(jointMarkerGeometry,new T.MeshBasicMaterial({color:'#55d8ee',depthTest:false,depthWrite:false}));
  marker.renderOrder=10;marker.userData.avatarJoint=key;skeletonGuide.add(marker);jointMarkers[key]=marker;
}
const scene=new T.Scene();
skeletonGuide.visible=false;scene.add(pivotHandle,skeletonGuide);
scene.background=new T.Color('#152229');
const camera=new T.PerspectiveCamera(45,1,.005,110);
const guide=new T.GridHelper(8,32,'#64818a','#334b54');
guide.position.y=-.002;
const selection=new T.Box3Helper(new T.Box3(),'#eeb578');
selection.visible=false;
const hitboxPreview=new T.Mesh(
  new T.BoxGeometry(1,1,1),
  new T.MeshBasicMaterial({color:'#ffb55e',wireframe:true,transparent:true,opacity:.92,depthTest:false})
);
hitboxPreview.name='Hitbox de collision';
hitboxPreview.renderOrder=8;
hitboxPreview.visible=false;
const zonePreview=new T.Group();
scene.add(zonePreview);

const material=createModelMaterial();
scene.add(groupPivot,previews,referencePreviews,guide,selection,hitboxPreview,new T.HemisphereLight('#ecf7ff','#4c5960',2.4));
const sun=new T.DirectionalLight('#ffe5c2',2.05);
sun.position.set(-2.5,4,-3);
scene.add(sun);
camera.position.set(1.8,1.4,-2.4);
camera.lookAt(0,0,0);

const clamp=T.MathUtils.clamp;
const currentModel=()=>pack.models.find(model=>model.id===modelId);
const currentPart=()=>currentModel()?.parts[partIndex];
const selectedIndices=()=>multi.size?[...multi]:currentPart()?[partIndex]:[];
const selectedMeshes=()=>selectedIndices().map(i=>previews.children[i]).filter(Boolean);
const visibleSelectedMeshes=()=>selectedMeshes().filter(mesh=>mesh.visible);
// Display masks are editor-only views, never deleted from the model export.
const workspaceKey='gorilla-foundry-visibility-v1';
let workspace={active:{},masks:{},references:[]};
try{
  const stored=JSON.parse(localStorage.getItem(workspaceKey)||'null');
  if(stored&&typeof stored==='object'&&stored.masks&&stored.active){
    workspace={active:stored.active,masks:stored.masks,
      references:Array.isArray(stored.references)?stored.references:[],
      lastModel:typeof stored.lastModel==='string'?stored.lastModel:null};
  }
}catch{}
if(pack.models.some(model=>model.id===workspace.lastModel))modelId=workspace.lastModel;
const editorParams=new URLSearchParams(location.search);
const requestedModel=editorParams.get('model');
const fromCards=editorParams.get('from')==='cards';
const requestedAsset=editorParams.get('asset');
let contextModel=requestedModel;
if(pack.models.some(model=>model.id===requestedModel))modelId=requestedModel;
const references=new Set(workspace.references);
function storeWorkspace(){
  try{workspace.references=[...references];localStorage.setItem(workspaceKey,JSON.stringify(workspace));}catch{}
}
function activeMask(){return workspace.active[modelId]||'all';}
function hiddenParts(){
  const indices=workspace.masks[modelId]?.[activeMask()]||[];
  return new Set(Array.isArray(indices)?indices.filter(x=>Number.isInteger(x)&&x>=0):[]);
}
function setHiddenParts(indices){
  if(!modelId)return;
  if(!workspace.masks[modelId])workspace.masks[modelId]={};
  workspace.masks[modelId][activeMask()]=[...indices].sort((a,b)=>a-b);
  storeWorkspace();updateParts();updatePreview();
}
function resetModelMasks(){
  if(modelId)delete workspace.masks[modelId];
  storeWorkspace();
}
const snapshot=()=>({data:structuredClone(pack),modelId,partIndex,multi:[...multi]});
function status(message,error=false){
  $('status').textContent=message;
  $('status').dataset.error=String(error);
}
function markDirty(){
  dirty=true;
  status('Brouillon local · non publié dans le jeu');
  clearTimeout(pendingDraft);
  pendingDraft=setTimeout(()=>{
    try{localStorage.setItem(draftKey,JSON.stringify(normalizeModelPack(pack)));}
    catch{status('Brouillon non enregistré : exporte le JSON.',true);}
  },480);
}
function saveNow(){
  try{
    const clean=normalizeModelPack(pack);
    localStorage.setItem(modelStorageKey,JSON.stringify(clean));
    Object.assign(pack,clean);
    localStorage.removeItem(draftKey);
    clearTimeout(pendingDraft);
    dirty=false;
    refreshModel();
    status('Enregistré · disponible dans Gorilla Lab et les cartes');
    return true;
  }catch{
    status('Enregistrement impossible : exporte le JSON.',true);
    return false;
  }
}
function remember(){
  const next=snapshot();
  const previous=undoStack.at(-1);
  if(!previous||JSON.stringify(previous)!==JSON.stringify(next)){
    undoStack.push(next);
    if(undoStack.length>maxUndo)undoStack.shift();
  }
  redoStack.length=0;
  updateHistoryButtons();
}
function updateHistoryButtons(){
  $('undo-action').disabled=!undoStack.length;
  $('redo-action').disabled=!redoStack.length;
}
function restore(saved){
  Object.assign(pack,structuredClone(saved.data));
  modelId=saved.modelId;
  partIndex=saved.partIndex;multi=new Set(saved.multi??[]);
  markDirty();refreshModel();
  updateHistoryButtons();
}
function undo(){
  if(!undoStack.length)return;
  const old=undoStack.pop();redoStack.push(snapshot());restore(old);status('Annulé · Ctrl Z');
}
function redo(){
  if(!redoStack.length)return;
  const next=redoStack.pop();undoStack.push(snapshot());restore(next);status('Rétabli · Ctrl Maj Z');
}
function startFieldEdit(target){
  if(fieldHistory?.target===target&&fieldHistory.recorded)return;
  if(!fieldHistory||fieldHistory.target!==target)fieldHistory={target,recorded:false};
  if(!fieldHistory.recorded){remember();fieldHistory.recorded=true;}
}
document.addEventListener('focusout',event=>{
  if(fieldHistory?.target===event.target)fieldHistory=null;
});
function beforeChange(target){
  if(target&&document.activeElement===target)startFieldEdit(target);
  else remember();
}
function setOptions(select,entries,value){
  select.replaceChildren(...entries.map(([id,title])=>new Option(title,id)));
  select.value=value??'';
}
function updateModelLists(){
  const list=pack.models.map(model=>[model.id,model.name||'Sans nom']);
  setOptions($('models'),list.length?list:[['','Aucun modèle']],modelId);
  $('models').disabled=!list.length;
  const model=currentModel();
  $('model-title').disabled=!model;
  $('delete-model').disabled=!model;
  if(document.activeElement!==$('model-title'))$('model-title').value=model?.name??'';
  $('duplicate-model').disabled=!model||pack.models.length>=modelLimits.models;
  $('model-count').textContent=pack.models.length+' / '+modelLimits.models;
  setOptions($('avatar'),[['','Singe d’origine'],...pack.models.filter(avatarReady).map(m=>[m.id,m.name+(m.kind==='avatar'?'':' · tête')])],pack.avatarId);
  const container=$('model-list'),scroll=container.scrollTop;
  const rows=pack.models.map(entry=>{
    const row=document.createElement('div');row.className='model-entry-wrap';
    const button=document.createElement('button');button.type='button';button.className='model-entry';
    button.setAttribute('aria-pressed',String(entry.id===modelId));
    button.title='Éditer '+entry.name;
    button.textContent=entry.name||'Sans nom';
    const count=document.createElement('small');count.textContent=' · '+entry.parts.length+' p.';
    button.append(count);
    button.onclick=()=>switchModel(entry.id);
    const eye=document.createElement('button');eye.type='button';eye.className='model-visibility';
    eye.disabled=entry.id===modelId||!entry.parts.length;
    eye.setAttribute('aria-pressed',String(references.has(entry.id)));
    eye.textContent=entry.id===modelId?'●':references.has(entry.id)?'◉':'◎';
    eye.title=entry.id===modelId?'Modèle actif':'Afficher/masquer comme référence 3D sans modifier ce modèle';
    eye.setAttribute('aria-label',eye.title+' : '+entry.name);
    eye.onclick=()=>toggleReference(entry.id);
    row.append(button,eye);return row;
  });
  container.replaceChildren(...rows);
  container.scrollTop=scroll;
}
function updateParts(){
  const parts=currentModel()?.parts??[];
  $('part-count').textContent=parts.length+' / '+modelLimits.parts;
  $('add-part').disabled=parts.length>=modelLimits.parts||!currentModel();
  const selected=selectedIndices();
  const groups=new Set(selected.map(i=>parts[i]?.group).filter(Boolean));
  $('duplicate-part').disabled=!selected.length||parts.length+selected.length>modelLimits.parts;
  $('group-parts').disabled=selected.length<2||(groups.size===1&&selected.every(i=>parts[i]?.group));
  $('ungroup-parts').disabled=!groups.size;
  $('selection-count').textContent=selected.length+' sélectionnée'+(selected.length===1?'':'s');
  const hidden=hiddenParts();
  $('mask-set').value=activeMask();
  $('solo-part').disabled=!parts.length||!currentPart();
  $('show-all-parts').disabled=!hidden.size;
  const currentScroll=$('part-list').scrollTop;
  $('part-list').replaceChildren(...parts.map((part,index)=>{
    const row=document.createElement('div');row.className='part-row';
    const button=document.createElement('button');
    button.type='button';button.className='part-entry';
    button.setAttribute('aria-pressed',String(selected.includes(index)));
    button.title=part.shape+' · '+part.surface;
    const title=document.createElement('span');
    title.textContent=String(index+1).padStart(2,'0')+'  '+part.name+(part.group?' · G'+part.group:'');
    const color=document.createElement('span');
    color.className='swatch';color.style.setProperty('--swatch',part.color);
    button.append(title,color);
    if(hidden.has(index))button.style.opacity='.48';
    button.onclick=event=>selectPart(index,event.shiftKey||event.ctrlKey||event.metaKey);
    const eye=document.createElement('button');eye.type='button';eye.className='part-visibility';
    eye.textContent=hidden.has(index)?'◌':'◉';
    eye.setAttribute('aria-pressed',String(!hidden.has(index)));
    eye.title=hidden.has(index)?'Afficher cette pièce dans la vue':'Masquer cette pièce dans la vue';
    eye.setAttribute('aria-label',eye.title+' : '+part.name);
    eye.onclick=()=>{
      const next=hiddenParts();if(next.has(index))next.delete(index);else next.add(index);
      setHiddenParts(next);
    };
    row.append(button,eye);return row;
  }));
  $('part-list').scrollTop=currentScroll;
}
function updateInspector(){
  const model=currentModel(),part=currentPart();
  $('model-details').hidden=!model;
  $('part-inspector').hidden=!part;
  $('part-empty').hidden=!!part||['settings','collision','publish','avatar','animation'].includes($('model-inspector').dataset.tab);
  if(model){
    if(document.activeElement!==$('model-name'))$('model-name').value=model.name;
    $('model-kind').value=model.kind||'prop';
    $('model-kind').disabled=model.kind==='avatar';
    $('in-game').disabled=model.kind==='avatar';
    const physics=modelPhysics(model);
    for(const key of ['gravity','bounce'])if(document.activeElement!==$('model-'+key))$('model-'+key).value=physics[key];
    $('in-game').checked=model.inGame;
    $('drivable').checked=model.properties.drivable===true;
    $('drivable').disabled=model.kind!=='prop';
    const destination='./editor.html?model='+encodeURIComponent(model.id);
    for(const id of ['send-to-map','quick-send-to-map'])$(id).href=destination;
    const returnToInstance=fromCards&&model.id===contextModel;
    $('go-cards').href=returnToInstance?'./editor.html?applyModel='+encodeURIComponent(model.id):'./editor.html';
    $('go-cards').textContent=returnToInstance?'Appliquer à la pièce et revenir':'Cartes →';
    for(const key of Object.keys(defaultModelProperties))$(key).checked=!!model.properties[key];
  }
  if($('model-inspector').dataset.tab==='collision')updateHitboxControls();
  if(part){
    for(const key of ['name','shape','color','surface'])$('part-'+key).value=part[key];
    const uv=modelPartUv(part),finish=modelFinishes[part.finish]??modelFinishes.original;
    $('part-finish').value=part.finish??'original';
    $('part-finish-info').textContent='Rugosité '+finish.roughness+' · métallicité '+finish.metalness;
    for(const [field,value] of [['projection',uv.projection],['repeat',uv.repeat],['angle',uv.angle],['u',uv.offset[0]],['v',uv.offset[1]]]){
      const input=$('part-'+field);
      if(document.activeElement!==input)input.value=value;
    }
    $('part-shape').disabled=part.shape==='asset';
    for(const key of Object.keys(limits))vectorInputs[key].forEach((input,index)=>{
      if(document.activeElement!==input)input.value=Number(part[key][index].toFixed(3));
    });
  }
  for(const button of document.querySelectorAll('.tab')){
    button.setAttribute('aria-pressed',String(button.dataset.panel===$('model-inspector').dataset.tab));
  }
  $('mirror').disabled=!part||currentModel().parts.length>=modelLimits.parts;
  $('drop-to-grid').disabled=!part;
  $('focus-part').disabled=!part;
  $('reset-part').disabled=!part;
  $('custom-shape-controls').hidden=part?.shape!=='custom';
  $('edit-profile').disabled=!part||part.shape!=='custom';
  $('part-paint').disabled=!part;
  $('part-texture-clear').disabled=!part?.texture;
  $('part-texture-status').textContent=part?.texture?'Texture peinte appliquée à cette pièce.':'Aucune texture personnalisée. La finition pré-définie reste active.';
  $('center-part').disabled=!part;
  $('delete-part').disabled=!part;
  $('viewport-title').textContent=model
    ?'ATELIER / '+model.name.toUpperCase()
    :'ESPACE DE CONSTRUCTION / 3D';
  for(const id of ['quick-send-to-map','send-to-map'])$(id).setAttribute('aria-disabled',String(!model?.parts.length||model.kind==='avatar'));
  $('avatar-new').disabled=pack.models.length>=modelLimits.models;
  $('avatar-copy').disabled=!model?.parts.length||model.kind==='avatar'||$('avatar-new').disabled;
  updateAvatarInspector();
  updateHingeInspector();
  updateEffectInspector();
  updateReactionInspector();
}
// The visual preview uses Foundry's uncentred model coordinates.
// When exported, physics recentres the geometry and applies the same offset.
function updateHitboxControls(){
  const model=currentModel(),manual=model?.hitbox?.mode==='box'||model?.hitbox?.mode==='custom';
  const compound=model?.kind==='structure'&&model.partCollisions===true;
  $('part-collisions').disabled=model?.kind!=='structure';
  $('part-collisions').checked=compound;
  $('whole-hitbox-controls').hidden=compound;
  $('part-zone-controls').hidden=!compound;
  $('part-zone').disabled=!currentPart();
  $('part-zone').value=currentPart()?.zone??'solid';
  const trigger=currentPart()?.zone==='trigger';
  $('trigger-notice').hidden=!compound||!trigger;
  if(trigger){
    const notice=currentPart().notice;
    $('trigger-notice-phase').value=notice?.phase??'enter';
    if(document.activeElement!==$('trigger-notice-text'))$('trigger-notice-text').value=notice?.text??'';
    if(document.activeElement!==$('trigger-portal'))$('trigger-portal').value=currentPart().portal??'';
  }
  $('hitbox-auto').setAttribute('aria-pressed',String(!manual));
  $('hitbox-manual').setAttribute('aria-pressed',String(!!manual));
  $('hitbox-geometry').hidden=!manual;$('hitbox-auto').disabled=$('hitbox-manual').disabled=!model?.parts.length;
  $('hitbox-shape').disabled=!model?.parts.length;
  $('hitbox-drag').setAttribute('aria-pressed',String(!!hitboxEditing&&viewMode==='translate'));
  $('hitbox-scale').setAttribute('aria-pressed',String(!!hitboxEditing&&viewMode==='scale'));
  $('hitbox-rotate').setAttribute('aria-pressed',String(!!hitboxEditing&&viewMode==='rotate'));
  if(!model?.parts.length){$('hitbox-info').textContent='Ajoute une pièce pour générer sa hitbox.';return;}
  const shape=model.hitbox?.shape??'box',precision=Math.round(model.hitbox?.precision??48);
  if($('hitbox-shape').value!==shape)$('hitbox-shape').value=shape;
  $('hitbox-precision').value=String(precision);$('hitbox-precision-value').textContent=String(precision);
  $('hitbox-precision-wrap').hidden=shape==='box';
  $('hitbox-info').textContent=manual?'Hitbox personnalisée : déplace, tourne et redimensionne la forme orange.'
    :shape==='convex'?'Auto : enveloppe convexe calculée depuis la géométrie du modèle.'
    :'Auto : collision simple ajustée aux dimensions du modèle.';
  const hb=modelHitbox(model);
  const lengths=hb.size.toArray(),longest=Math.max(...lengths),axis=lengths.indexOf(longest);
  const radius=(shape==='sphere'?longest:Math.max(...lengths.filter((_,i)=>i!==axis)))/2;
  const dimensions=lengths.map(value=>value.toFixed(2)).join(' × ')+' m';
  if(shape==='sphere')$('hitbox-info').textContent+=' Diamètre '+(2*radius).toFixed(2)+' m.';
  else if(shape==='capsule')$('hitbox-info').textContent+=' Axe '+['X','Y','Z'][axis]+' · rayon '+radius.toFixed(2)+' m · cylindre '+Math.max(0,longest-2*radius).toFixed(2)+' m.';
  else $('hitbox-info').textContent+=' '+dimensions+(shape==='convex'?' L’enveloppe remplit les creux.':'');
  if(!manual)return;
  for(const key of ['center','size'])for(let i=0;i<3;i++){
    const input=$('hitbox-'+key+'-'+['x','y','z'][i]);
    if(document.activeElement!==input)input.value=Number(model.hitbox[key][i].toFixed(3));
  }
}
function updateHitboxPreview(){
  const model=currentModel(),show=!!model?.parts.length&&$('model-inspector').dataset.tab==='collision'&&$('hitbox-preview-toggle').checked;
  for(const mesh of [...zonePreview.children]){mesh.geometry.dispose();mesh.material.dispose();zonePreview.remove(mesh);}
  const zones=show?modelCollisionZones(model):null;
  hitboxPreview.visible=Boolean(show&&!zones);
  if(zones){
    const center=modelHitbox(model).boundsCenter;
    for(const zone of zones){
      const mesh=new T.Mesh(new T.BoxGeometry(...zone.size),new T.MeshBasicMaterial({
        color:zone.mode==='trigger'?'#64dbf0':'#ffb55e',wireframe:true,depthTest:false}));
      mesh.position.copy(zone.center).add(center);mesh.renderOrder=8;zonePreview.add(mesh);
    }
  }else if(show){
    const hitbox=modelHitbox(model),geometry=modelHitboxGeometry(model);
    hitboxPreview.geometry.dispose();hitboxPreview.geometry=geometry;
    hitboxPreview.position.copy(hitbox.center);
    hitboxPreview.rotation.set(...hitbox.rotation.toArray().map(T.MathUtils.degToRad));
    hitboxPreview.scale.copy(hitbox.size);hitboxPreview.material.color.set(model.properties.collidable?'#ffb55e':'#9b9fa5');
  }
  if(!gizmo?.dragging)attachGizmo();render();
}
function setHitboxMode(mode){
  const model=currentModel();if(!model?.parts.length)return;
  const hb=modelHitbox(model);remember();
  model.hitbox=mode==='box'
    ?{mode:'custom',shape:$('hitbox-shape').value||'box',center:hb.center.toArray(),size:hb.size.toArray(),
      rotation:hb.rotation.toArray(),precision:Number($('hitbox-precision').value)||48}
    :{mode:'auto',shape:'convex',precision:Number($('hitbox-precision').value)||48};
  hitboxEditing=mode==='box';markDirty();updateHitboxControls();
  $('hitbox-preview-toggle').checked=true;updateHitboxPreview();
  if(mode==='box')setTool('scale');else setTool('select');
}
function setPanel(tab){
  if(tab!=='collision'&&hitboxEditing){
    hitboxEditing=false;
    setTool('select');
  }
  $('model-inspector').dataset.tab=tab;
  if(tab!=='avatar'){avatarAngles.clear();moveAvatarPivot=false;}
  if(tab!=='animation')stopHingePreview();
  updateInspector();
  updateHitboxPreview();
  attachGizmo();
  updateAvatarPreview();
}
for(const button of document.querySelectorAll('.tab')){
  button.onclick=()=>setPanel(button.dataset.panel);
}

let hingeFrame=0;
const hingeBase=new T.Vector3(),hingePivot=new T.Vector3(),hingeBasis=new T.Quaternion(),hingeEuler=new T.Euler();
const hingeKeys=['closed','open','seconds','travel'],hingeAxes=['x','y','z'];
function stopHingePreview(){
  cancelAnimationFrame(hingeFrame);hingeFrame=0;$('hinge-preview').value=0;
  $('hinge-play').textContent='Lire';
}
const reactionFields=['phase','door','doorState','doorDelay','receiver','light','lightState','lightColor','sound','soundVolume'];
function updateReactionInspector(){
  const model=currentModel(),part=currentPart();
  const eligible=part&&model.kind==='structure'&&(part.zone!=='trigger'||model.partCollisions&&model.properties.collidable);
  $('reaction-fields').hidden=!eligible;
  $('reaction-note').textContent=eligible?'Les cibles appartiennent à la même instance du décor.':
    'Sélectionne une pièce d’un décor. Pour une zone, active les volumes de collision par pièce.';
  if(!eligible)return;
  const reaction=part.reaction??{};
  const options=(id,filter)=>{
    const entries=model.parts.flatMap((value,index)=>filter(value)?[[String(index),value.name+' · '+(index+1)]]:[]);
    const selected=model.parts.findIndex(value=>value.actionId&&value.actionId===reaction[id]);
    setOptions($('reaction-'+id),[['','Aucun'],...entries],selected<0?'':String(selected));
  };
  setOptions($('reaction-phase'),part.zone==='trigger'?[['enter','Entrée dans la zone'],['exit','Sortie de la zone']]:
    [['use','Interaction avec E']],reaction.phase??(part.zone==='trigger'?'enter':'use'));
  options('door',value=>Boolean(value.hinge));
  options('light',value=>value.zone!=='trigger');
  setOptions($('reaction-sound'),[['','Aucun'],...Object.entries(actionSounds)],reaction.sound??'');
  $('reaction-doorState').querySelector('[value=hold]').hidden=part.zone!=='trigger';
  $('reaction-doorState').value=reaction.doorState??'open';
  $('reaction-doorDelay').value=reaction.doorDelay??1.25;
  $('reaction-lightState').value=reaction.lightState??'on';
  $('reaction-lightColor').value=reaction.lightColor??'#ffbd54';
  $('reaction-soundVolume').value=reaction.soundVolume??.6;
  $('reaction-receiver').disabled=part.zone==='trigger';
  $('reaction-receiver').value=reaction.receiver??'';
}
for(const field of reactionFields)$('reaction-'+field).onchange=()=>{
  const model=currentModel(),part=currentPart();
  if(!part||model.kind!=='structure')return;
  remember();
  const value=Object.fromEntries(reactionFields.map(key=>[key,$('reaction-'+key).value]));
  for(const key of ['door','light']){
    if(value[key]==='')continue;
    const target=model.parts[Number(value[key])];
    if(!target){value[key]='';continue;}
    target.actionId??=crypto.randomUUID();
    value[key]=target.actionId;
  }
  value.soundVolume=$('reaction-soundVolume').valueAsNumber;
  value.doorDelay=$('reaction-doorDelay').valueAsNumber;
  const reaction=normalizePartReaction(value,part.zone);
  if(reaction)part.reaction=reaction;
  else delete part.reaction;
  markDirty();
};
function updateHingeInspector(){
  const part=currentPart(),model=currentModel(),hinge=model?.kind==='structure'&&part?.zone!=='trigger'?part?.hinge:null;
  const eligible=part&&part.zone!=='trigger'&&model.kind!=='avatar';
  $('hinge-fields').hidden=!hinge;
  $('hinge-add').hidden=Boolean(hinge);
  $('hinge-add').disabled=!eligible;
  $('hinge-hint').textContent=hinge?'Panneau sélectionné : '+part.name:
    eligible?'Articule le panneau sélectionné. Le modèle devient un décor.':'Sélectionne une pièce solide ou traversable du décor.';
  if(!hinge)return;
  hingeAxes.forEach((key,index)=>$(`hinge-${key}`).value=hinge.pivot[index]);
  for(const key of hingeKeys)$(`hinge-${key}`).value=hinge[key]??1;
  $('hinge-mode').value=hinge.mode??'pivot';$('hinge-direction').value=hinge.axis??'y';
  $('hinge-travel').disabled=!hinge.mode;
}
function saveHingeChange(){
  const part=currentPart();
  if(!part?.hinge)return;
  remember();
  part.hinge=normalizeHinge({
    mode:$('hinge-mode').value,axis:$('hinge-direction').value,
    pivot:hingeAxes.map(key=>$(`hinge-${key}`).valueAsNumber),
    ...Object.fromEntries(hingeKeys.map(key=>[key,$(`hinge-${key}`).valueAsNumber])),
  });
  markDirty();updateHingeInspector();render();
}
$('hinge-add').onclick=()=>{
  const part=currentPart(),model=currentModel();
  if(!part||model.kind==='avatar'||part.zone==='trigger')return;
  remember();
  model.kind='structure';
  model.partCollisions=true;
  const offset=new T.Vector3(-part.scale[0]/2,0,0).applyEuler(hingeEuler.set(...part.rotation.map(T.MathUtils.degToRad),'ZYX'));
  part.hinge=normalizeHinge({pivot:offset.add(hingeBase.fromArray(part.position)).toArray()});
  stopHingePreview();markDirty();updateInspector();updatePreview();
};
$('hinge-remove').onclick=()=>{
  const part=currentPart();if(!part?.hinge)return;
  remember();delete part.hinge;stopHingePreview();markDirty();updateInspector();updatePreview();
};
for(const key of [...hingeAxes,...hingeKeys])$(`hinge-${key}`).onchange=saveHingeChange;
$('hinge-preview').oninput=()=>{
  cancelAnimationFrame(hingeFrame);hingeFrame=0;$('hinge-play').textContent='Lire';
  render();
};
$('hinge-play').onclick=()=>{
  const hinge=currentPart()?.hinge;
  if(!hinge)return;
  if(hingeFrame){stopHingePreview();render();return;}
  $('hinge-play').textContent='Revenir à la pose fermée';
  const start=performance.now();
  const frame=now=>{
    if(currentPart()?.hinge!==hinge){stopHingePreview();render();return;}
    const progress=Math.min(1,(now-start)/(hinge.seconds*1000));
    $('hinge-preview').value=progress;
    render();
    hingeFrame=progress<1?requestAnimationFrame(frame):0;
    if(!hingeFrame)$('hinge-play').textContent='Relire';
  };
  hingeFrame=requestAnimationFrame(frame);
};

let effectFrame=0,previousEffectFrame=-Infinity;
const effectInputs={};
for(const [key,channel] of Object.entries(effectChannels)){
  const group=document.createElement('details'),label=document.createElement('summary'),row=document.createElement('div');
  label.textContent=channel.label;row.className='axes';
  const controls=effectInputs[key]={};
  for(const [field,caption,min,max,step] of [
    ['strength','Intensité',0,channel.max,.01],['speed','Vitesse (Hz)',0,8,.05],['scale','Variation spatiale',0,48,.5],
    ['signal','Forme'],...(key==='deform'?[]:[['color','Couleur']]),
  ]){
    const wrapper=document.createElement('label');wrapper.textContent=caption;
    const input=document.createElement(field==='signal'?'select':'input');
    input.id='effect-'+key+'-'+field;
    if(field==='signal'){
      for(const [value,name] of [['sine','Sinus'],['triangle','Triangle'],['pulse','Impulsion'],...(key==='deform'?[]:[['stars','Étoiles']])])
        input.add(new Option(name,value));
    }else{
      input.type=field==='color'?'color':'number';
      if(input.type==='number'){input.min=min;input.max=max;input.step=step;}
    }
    input.onchange=()=>{
      const part=currentPart();
      if(!part?.effect)return;
      remember();
      part.effect=normalizeModelEffect({...part.effect,[key]:{...part.effect[key],
        [field]:input.type==='number'?input.valueAsNumber:input.value}});
      markDirty();updateEffectInspector();updatePreview();
    };
    controls[field]=input;wrapper.append(input);row.append(wrapper);
  }
  group.append(label,row);$('effect-fields').append(group);
}
function updateEffectInspector(){
  const part=currentPart(),eligible=Boolean(part&&part.zone!=='trigger'),effect=eligible?part.effect:null;
  $('effect-actions').hidden=!eligible;
  $('effect-fields').hidden=!effect;
  $('effect-remove').hidden=!effect;
  $('effect-note').hidden=eligible;
  if(!effect)return;
  for(const [key,controls] of Object.entries(effectInputs))
    for(const [field,input] of Object.entries(controls))input.value=effect[key][field];
}
function chooseEffect(raw){
  const part=currentPart();
  if(!part||part.zone==='trigger')return;
  remember();
  if(raw===null)delete part.effect;
  else part.effect=normalizeModelEffect(raw);
  markDirty();updateEffectInspector();updatePreview();
}
$('effect-new').onclick=()=>chooseEffect({});
$('effect-remove').onclick=()=>chooseEffect(null);
function previewEffectFrame(now){
  effectFrame=0;
  if(now-previousEffectFrame>=32){previousEffectFrame=now;render();}
  else if($('model-inspector').dataset.tab==='animation')effectFrame=requestAnimationFrame(previewEffectFrame);
}
$('hinge-mode').onchange=saveHingeChange;
$('hinge-direction').onchange=saveHingeChange;
function render(){
  const model=currentModel(),parts=model?.parts??[];
  const animate=$('model-inspector').dataset.tab==='animation'&&model?.kind==='structure';
  for(let index=0;index<previews.children.length;index++){
    const mesh=previews.children[index],part=parts[index];
    if(!part||part.zone==='trigger')continue;
    const parent=part.hinge?part:part.group?parts.find(p=>p.group===part.group&&p.hinge):null;
    if(!parent)continue;
    if(!animate&&!mesh.userData.hingePreview)continue;
    mesh.userData.hingePreview=animate;
    const position=hingeBase.fromArray(part.position),pivot=hingePivot.fromArray(parent.hinge.pivot);
    const rotation=hingeBasis.setFromEuler(hingeEuler.set(...part.rotation.map(T.MathUtils.degToRad),'ZYX'));
    applyMechanism(mesh,pivot,position,rotation,parent.hinge,animate&&parts[partIndex]===parent?+$('hinge-preview').value:0);
  }
  updateSkeletonGuide();
  setModelEffectTime(performance.now()*.001);
  renderer?.render(scene,camera);
  const playing=$('model-inspector').dataset.tab==='animation'&&parts.some(part=>part.effect&&Object.values(part.effect).some(channel=>channel.strength>0&&channel.speed>0));
  if(playing&&!effectFrame)effectFrame=requestAnimationFrame(previewEffectFrame);
  if(!playing&&effectFrame){cancelAnimationFrame(effectFrame);effectFrame=0;}
}
try{
  renderer=new T.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
  renderer.toneMapping=T.ACESFilmicToneMapping;
  orbit=new OrbitControls(camera,canvas);
  orbit.enablePan=true;
  orbit.minDistance=.09;orbit.maxDistance=48;
  orbit.mouseButtons.RIGHT=T.MOUSE.ROTATE;
  orbit.mouseButtons.MIDDLE=T.MOUSE.PAN;
  orbit.addEventListener('change',render);
  gizmo=new TransformControls(camera,canvas);
  const helper=gizmo.getHelper();
  scene.add(helper);
  gizmo.addEventListener('dragging-changed',event=>{
    orbit.enabled=!event.value;
    if(event.value)return;
    transformStart=null;
    if(transformMoved){
      transformMoved=false;
      markDirty();
      updatePreview();
    }
  });
  gizmo.addEventListener('mouseDown',()=>{
    remember();
    transformMoved=false;
    pickStart=null;
    const mesh=gizmo.object;
    if(mesh===hitboxPreview||mesh===pivotHandle)return;
    const meshes=mesh===groupPivot?selectedMeshes():[mesh];
    const bounds=new T.Box3();
    if(mesh===groupPivot){
      for(const selected of meshes)bounds.expandByObject(selected);
      bounds.translate(mesh.position.clone().negate());
    }else{
      mesh.geometry.computeBoundingBox();
      bounds.copy(mesh.geometry.boundingBox);
    }
    const sides=viewMode==='scale'
      ?scaleHandleSigns(gizmo.axis,gizmo.pointStart,gizmo.worldQuaternionStart):[1,1,1];
    const anchor=new T.Vector3();
    for(let axis=0;axis<3;axis++){
      const negative=sides[axis]<0||$('negative-scale-face').checked;
      anchor.setComponent(axis,(negative?bounds.max:bounds.min).getComponent(axis));
    }
    transformStart={
      position:mesh.position.clone(),rotation:mesh.quaternion.clone(),scale:mesh.scale.clone(),
      anchor,rawScale:mesh.scale.clone(),
      parts:meshes.map(m=>({mesh:m,data:structuredClone(currentModel().parts[previews.children.indexOf(m)])})),
    };
  });
  gizmo.addEventListener('objectChange',()=>{
    const mesh=gizmo.object;
    if(!mesh||!gizmo.dragging)return;
    if(mesh===pivotHandle&&rigPreview){
      const key=$('avatar-joint').value;
      const pivot=rigPreview.setPivot(key,mesh.position.toArray());
      currentModel().avatarRig[key].pivot=pivot;
      mesh.position.fromArray(pivot);
      transformMoved=true;updateAvatarInspector();render();return;
    }
    if(hitboxEditing&&mesh===hitboxPreview&&['box','custom'].includes(currentModel()?.hitbox?.mode)){
      const hitbox=currentModel().hitbox;
      hitbox.center=mesh.position.toArray().map(v=>clamp(v,-6,6));
      hitbox.size=mesh.scale.toArray().map(v=>clamp(Math.abs(v),.025,12));
      hitbox.rotation=[mesh.rotation.x,mesh.rotation.y,mesh.rotation.z].map(rad=>clamp(T.MathUtils.radToDeg(rad),-360,360));
      mesh.position.fromArray(hitbox.center);mesh.scale.fromArray(hitbox.size);
      transformMoved=true;
      updateHitboxControls();
      render();
      return;
    }
    if(!transformStart)return;
    transformStart.rawScale.copy(mesh.scale);
    applyPartTransform();
  });
  canvas.addEventListener('pointerdown',updateScaleModifier,true);
  canvas.addEventListener('pointermove',event=>{ctrlScale=event.ctrlKey;},true);
  window.addEventListener('keydown',updateScaleModifier);
  window.addEventListener('keyup',updateScaleModifier);


  new ResizeObserver(()=>{
    const width=Math.max(1,canvas.clientWidth),height=Math.max(1,canvas.clientHeight);
    camera.aspect=width/height;camera.updateProjectionMatrix();
    renderer.setSize(width,height,false);render();
  }).observe(canvas);
}catch(error){
  status('WebGL indisponible · édition numérique toujours possible.',true);
}

function updateScaleModifier(event){
  if(ctrlScale===event.ctrlKey)return;
  ctrlScale=event.ctrlKey;
  if(gizmo?.dragging&&viewMode==='scale'&&transformStart)applyPartTransform();
}

function applyPartTransform(){
  const mesh=gizmo.object,start=transformStart;
  const group=mesh===groupPivot;
  const parts=currentModel().parts;
  let poses;
  if(group){
    const after={position:mesh.position,quaternion:mesh.quaternion,
      scale:viewMode==='scale'?start.rawScale.clone().clampScalar(.001,200):new T.Vector3(1,1,1)};
    poses=modelGroupTransform(start.parts.map(entry=>entry.data),start.position,after,start.anchor,ctrlScale);
    // Reject out-of-range ensemble transforms instead of clamping pieces separately.
    if(poses.some(p=>p.position.some(v=>Math.abs(v)>3+1e-8)||p.scale.some(v=>v<.02-1e-8||v>4+1e-8)))return;
  }else{
    const scale=start.rawScale.clone().clampScalar(.02,4);
    const position=viewMode==='scale'
      ?modelFacePosition(start.position,start.rotation,start.anchor,start.scale,scale,ctrlScale)
      :mesh.position;
    if(viewMode==='scale'&&position.toArray().some(v=>Math.abs(v)>3+1e-8)){
      const saved=parts[previews.children.indexOf(mesh)];
      mesh.position.fromArray(saved.position);mesh.scale.fromArray(saved.scale);
      render();return;
    }
    poses=[{position:position.toArray().map(v=>clamp(v,-3,3)),
      rotation:[mesh.rotation.x,mesh.rotation.y,mesh.rotation.z].map(T.MathUtils.radToDeg),
      scale:scale.toArray()}];
  }
  start.parts.forEach(({mesh:partMesh},i)=>{
    const pose=poses[i],part=parts[previews.children.indexOf(partMesh)];
    Object.assign(part,pose);
    partMesh.position.fromArray(pose.position);
    partMesh.rotation.set(...pose.rotation.map(T.MathUtils.degToRad),'ZYX');
    partMesh.scale.fromArray(pose.scale);
  });
  transformMoved=true;
  updateSelectionOutline();
  updateInspector();
}

const vectorInputs={};
for(const [key,settings] of Object.entries(limits)){
  const fieldset=document.createElement('fieldset');fieldset.className='vectors';
  const legend=document.createElement('legend');legend.textContent=settings.label;fieldset.append(legend);
  const row=document.createElement('div');row.className='axes';
  vectorInputs[key]=axes.map((axis,index)=>{
    const label=document.createElement('label');label.textContent=axis;
    const input=document.createElement('input');
    input.type='number';input.id=key+'-'+axis.toLowerCase();
    input.min=settings.min;input.max=settings.max;input.step=settings.step;
    input.setAttribute('aria-label',settings.label+' '+axis);
    input.addEventListener('input',()=>{
      const part=currentPart();
      if(!part||!Number.isFinite(input.valueAsNumber))return;
      beforeChange(input);
      part[key][index]=clamp(input.valueAsNumber,settings.min,settings.max);
      markDirty();updatePreview();
    });
    input.addEventListener('change',()=>{
      const part=currentPart();
      if(part)input.value=part[key][index];
    });
    label.append(input);row.append(label);
    return input;
  });
  fieldset.append(row);
  $('part-fields').append(fieldset);
}

function partMesh(part){
  const source={...part,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]};
  const ownMaterial=modelPartOwnMaterial(part);
  const partMaterial=ownMaterial?createModelPartMaterial(source):material;
  const mesh=new T.Mesh(createModelPartGeometry(source,new T.Vector3(...part.scale)),partMaterial);
  mesh.userData.ownMaterial=ownMaterial;
  const image=partMaterial?.map?.image;
  if(image?.addEventListener&&!image.complete)image.addEventListener('load',render,{once:true});
  mesh.position.fromArray(part.position);
  mesh.rotation.order='ZYX';
  mesh.rotation.set(...part.rotation.map(T.MathUtils.degToRad));
  mesh.scale.fromArray(part.scale);
  mesh.userData.part=true;
  return mesh;
}
function attachGizmo(){
  if(!gizmo)return;
  if($('model-inspector').dataset.tab==='animation'){gizmo.detach();return;}
  if($('model-inspector').dataset.tab==='avatar'){
    if(moveAvatarPivot&&rigPreview){
      const key=$('avatar-joint').value;
      pivotHandle.position.fromArray(normalizeAvatarJoint(key,currentModel()?.avatarRig?.[key]).pivot);
      pivotHandle.updateMatrixWorld(true);
      gizmo.setMode('translate');gizmo.attach(pivotHandle);
    }else gizmo.detach();
    return;
  }
  const meshes=visibleSelectedMeshes();
  let selectedMesh=meshes[0];
  if(meshes.length&&selectedIndices().length>1){
    selectedMesh=groupPivot;
    if(!gizmo.dragging){
      const bounds=new T.Box3();
      for(const mesh of selectedMeshes())bounds.expandByObject(mesh);
      bounds.getCenter(groupPivot.position);
      groupPivot.rotation.set(0,0,0);
      groupPivot.scale.setScalar(1);
      groupPivot.updateMatrixWorld(true);
    }
  }
  const mesh=viewMode==='select'?null:
    hitboxEditing&&hitboxPreview.visible&&['translate','scale','rotate'].includes(viewMode)?hitboxPreview:
    !selectedMesh?.visible?null:selectedMesh;
  // Keep the same attachment while dragging. Re-attaching resets the
  // TransformControls axis and quietly aborts rotate/scale/translate.
  if(gizmo.object!==mesh){
    if(gizmo.dragging)return;
    if(mesh)gizmo.attach(mesh);
    else gizmo.detach();
  }
  if(mesh){
    gizmo.setMode(viewMode);
    gizmo.setSpace((viewMode==='translate'||mesh===groupPivot)?'world':'local');
  }
  const snap=Number($('snap-step').value);
  gizmo.setTranslationSnap(snap||null);
  gizmo.setRotationSnap(snap?T.MathUtils.degToRad(5):null);
  gizmo.setScaleSnap(snap||null);
  render();
}
function updateSelectionOutline(){
  const meshes=visibleSelectedMeshes();
  selection.visible=!!meshes.length&&!hitboxEditing;
  selection.box.makeEmpty();
  for(const mesh of meshes)selection.box.expandByObject(mesh);
  render();
}
function showSelection(){
  updateSelectionOutline();
  attachGizmo();
}
function frameModel(onlySelected=false){
  if(!orbit)return;
  const meshes=onlySelected?visibleSelectedMeshes():[];
  const box=new T.Box3();
  if(meshes.length)for(const mesh of meshes)box.expandByObject(mesh);
  else box.setFromObject(previews);
  if(!onlySelected&&referencePreviews.children.length)
    box.union(new T.Box3().setFromObject(referencePreviews));
  const center=new T.Vector3(),size=new T.Vector3();
  if(!box.isEmpty()){box.getCenter(center);box.getSize(size);}
  const halfH=T.MathUtils.degToRad(camera.fov/2);
  const halfW=Math.atan(Math.tan(halfH)*camera.aspect);
  const distance=Math.max(.6,size.length()*.63/Math.sin(Math.min(halfH,halfW)));
  const direction=camera.position.clone().sub(orbit.target).normalize();
  orbit.target.copy(center);
  camera.position.copy(center).addScaledVector(direction,distance);
  orbit.update();render();
}
function updateReferencePreview(){
  for(const mesh of [...referencePreviews.children]){
    referencePreviews.remove(mesh);mesh.geometry.dispose();mesh.material.dispose();
  }
  if(!renderer)return;
  const models=pack.models.filter(entry=>references.has(entry.id)&&entry.id!==modelId&&entry.parts.length);
  models.forEach((entry,index)=>{
    const geometry=createModelUnitGeometry(entry);
    const material=new T.MeshBasicMaterial({color:'#8bd1dc',side:T.DoubleSide,
      transparent:true,opacity:.25,depthWrite:false});
    const ghost=new T.Mesh(geometry,material);
    ghost.name='Référence : '+entry.name;
    const angle=(index/models.length)*Math.PI*2-Math.PI/2;
    const radius=2.2+Math.floor(index/5)*1.6;
    ghost.position.set(Math.cos(angle)*radius,0,Math.sin(angle)*radius);
    ghost.renderOrder=3;
    referencePreviews.add(ghost);
  });
}
function updatePreview(frame=false){
  gizmo?.detach();
  for(const mesh of [...previews.children]){
    previews.remove(mesh);mesh.geometry.dispose();
    if(mesh.userData.ownMaterial)disposeModelMaterial(mesh.material);
  }
  const parts=currentModel()?.parts??[],hidden=hiddenParts();
  if(renderer)parts.forEach((part,index)=>{
    const mesh=partMesh(part);mesh.visible=!hidden.has(index);previews.add(mesh);
  });
  updateReferencePreview();
  updateHitboxPreview();
  $('preview-empty').hidden=Boolean(parts.length&&renderer);
  $('preview-empty').textContent=!renderer?'Prévisualisation 3D indisponible : les valeurs restent modifiables.'
    :currentModel()?'Ajoute une forme avec la barre à gauche pour commencer.'
    :'Crée un modèle avec + Nouveau modèle puis assemble tes pièces.';
  $('preview-tag').textContent=parts.length+' PIÈCE'+(parts.length>1?'S':'')+
    ' / '+({avatar:'AVATAR',structure:'DÉCOR'}[currentModel()?.kind]??'OBJET')+
    (referencePreviews.children.length?' · '+referencePreviews.children.length+' RÉF.':'');
  showSelection();
  updateAvatarPreview();
  if(frame&&(parts.length||referencePreviews.children.length))frameModel();
  else render();
}
function refreshModel(){
  workspace.lastModel=modelId;storeWorkspace();
  updateModelLists();
  $('new-model').disabled=$('example').disabled=pack.models.length>=modelLimits.models;
  updateParts();updateInspector();updatePreview(true);updateHistoryButtons();
}
function selectPart(index,extend=false){
  if(index!==partIndex)stopHingePreview();
  const parts=currentModel()?.parts,part=parts?.[index];
  if(!part)return;
  const indices=part.group?parts.flatMap((entry,i)=>entry.group===part.group?[i]:[]):[index];
  if(extend){
    multi=new Set(selectedIndices());
    const remove=indices.every(i=>multi.has(i));
    for(const i of indices)if(remove)multi.delete(i);else multi.add(i);
    partIndex=remove?(multi.values().next().value??-1):index;
  }else{
    multi=new Set(indices);
    partIndex=index;
  }
  updateParts();updateInspector();showSelection();
}

function groupSelection(ungroup=false){
  const parts=currentModel()?.parts;
  const indices=selectedIndices();
  if(!parts||!indices.length)return;
  const groups=new Set(indices.map(i=>parts[i].group).filter(Boolean));
  const members=parts.flatMap((part,i)=>indices.includes(i)||groups.has(part.group)?[i]:[]);
  if(!ungroup&&members.length<2)return;
  remember();
  if(ungroup){
    for(const i of members)delete parts[i].group;
  }else{
    const used=new Set(parts.map(part=>part.group));
    let group=1;
    while(used.has(group))group++;
    for(const i of members)parts[i].group=group;
  }
  multi=new Set(members);
  markDirty();updateParts();showSelection();
}
function switchModel(id){
  if(!pack.models.some(entry=>entry.id===id)||id===modelId)return;
  modelId=id;partIndex=0;multi.clear();avatarAngles.clear();
  refreshModel();
  status('Modèle actif : '+currentModel().name);
}
function toggleReference(id){
  if(id===modelId||!pack.models.some(entry=>entry.id===id))return;
  if(references.has(id))references.delete(id);
  else references.add(id);
  storeWorkspace();updateModelLists();updatePreview();frameModel();
}
function changeMask(slot){
  if(!modelId)return;
  workspace.active[modelId]=slot;storeWorkspace();
  updateParts();updatePreview();
}
function setTool(tool){
  if(hitboxEditing&&!['translate','scale','rotate'].includes(tool))hitboxEditing=false;
  viewMode=tool;
  for(const button of document.querySelectorAll('.rail-btn[data-tool]'))
    button.setAttribute('aria-pressed',String(button.dataset.tool===tool));
  canvas.dataset.tool=tool;
  $('negative-scale-option').hidden=tool!=='scale'||hitboxEditing;
  attachGizmo();
}
for(const button of document.querySelectorAll('.rail-btn[data-tool]')){
  button.onclick=()=>setTool(button.dataset.tool);
}

let pickStart=null,rightStart=null;
const raycaster=new T.Raycaster(),pointer=new T.Vector2();
function pick(event){
  if(!renderer||rigPreview)return -1;
  const rect=canvas.getBoundingClientRect();
  pointer.set(2*(event.clientX-rect.left)/rect.width-1,1-2*(event.clientY-rect.top)/rect.height);
  raycaster.setFromCamera(pointer,camera);
  const hit=raycaster.intersectObjects(previews.children.filter(mesh=>mesh.visible),false)[0];
  return hit?previews.children.indexOf(hit.object):-1;
}
canvas.addEventListener('pointerdown',event=>{
  if(event.button===0)pickStart=viewMode!=='select'&&gizmo?.axis?null:{id:event.pointerId,x:event.clientX,y:event.clientY};
  if(event.button===2)rightStart={x:event.clientX,y:event.clientY};
});
canvas.addEventListener('pointercancel',()=>{pickStart=null;rightStart=null;});
canvas.addEventListener('pointerup',event=>{
  if(gizmo?.dragging)return;
  const from=pickStart;pickStart=null;
  if(event.button!==0||from?.id!==event.pointerId
      ||Math.hypot(event.clientX-from.x,event.clientY-from.y)>5)return;
  const extend=event.shiftKey||event.ctrlKey||event.metaKey;
  if(rigPreview){
    const rect=canvas.getBoundingClientRect();
    pointer.set(2*(event.clientX-rect.left)/rect.width-1,1-2*(event.clientY-rect.top)/rect.height);
    raycaster.setFromCamera(pointer,camera);
    const marker=skeletonGuide.visible&&!extend?
      raycaster.intersectObjects(Object.values(jointMarkers),false)[0]?.object:null;
    if(marker){selectAvatarJoint(marker.userData.avatarJoint);return;}
    const mesh=raycaster.intersectObjects(rigPreview.meshes.filter(mesh=>mesh.visible),false)[0]?.object;
    if(mesh){selectPart(rigPreview.meshes.indexOf(mesh),extend);render();}
    return;
  }
  const index=pick(event);
  if(index>=0)selectPart(index,extend);
});
const menu=$('part-context');
function closeMenu(){menu.hidden=true;}
canvas.addEventListener('contextmenu',event=>{
  event.preventDefault();
  if(!rightStart||Math.hypot(event.clientX-rightStart.x,event.clientY-rightStart.y)>6)return;
  const index=pick(event);
  if(index<0)return closeMenu();
  if(!selectedIndices().includes(index))selectPart(index);
  $('context-name').textContent=currentPart().name;
  menu.hidden=false;
  menu.style.left=clamp(event.clientX,5,innerWidth-205)+'px';
  menu.style.top=clamp(event.clientY,5,innerHeight-305)+'px';
});
document.addEventListener('pointerdown',event=>{
  if(!menu.contains(event.target))closeMenu();
});

function makePart(shape,name=modelShapes[shape],position=[0,0,0],scale=[.35,.35,.35],
  color='#51bdd2',surface='plain',rotation=[0,0,0]){
  return {name,shape,position,scale,rotation,surface,color,
    ...(shape==='custom'?{profile:startingSketch()}:{}),
  };
}
function exampleParts(){
  const blue='#678fb4',light='#c1d7de',dark='#233241';
  return [
    makePart('sphere','Crâne',[0,0,.02],[.31,.32,.29],blue,'speckle'),
    makePart('sphere','Museau',[0,-.048,-.11],[.20,.13,.15],light),
    makePart('sphere','Oreille gauche',[-.149,.003,.01],[.08,.10,.06],blue),
    makePart('sphere','Oreille droite',[.149,.003,.01],[.08,.10,.06],blue),
    makePart('sphere','Œil gauche',[-.056,.037,-.118],[.049,.042,.036],dark),
    makePart('sphere','Œil droit',[.056,.037,-.118],[.049,.042,.036],dark),
    makePart('sphere','Nez',[0,-.025,-.181],[.071,.039,.033],dark),
  ];
}
function newModelId(){
  return 'custom-model-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10);
}
function importBuiltinAsset(assetId,open=false){
  const source=builtinModels.find(model=>model.assetId===assetId);
  if(!source)return status('Asset intégré introuvable.',true);
  if(pack.models.length>=modelLimits.models)return status('Limite de '+modelLimits.models+' modèles atteinte.',true);
  remember();
  const model=structuredClone(source);model.id=newModelId();
  if(pack.models.some(entry=>entry.name===model.name))model.name=(model.name+' · copie').slice(0,48);
  pack.models.push(model);modelId=model.id;partIndex=0;multi.clear();
  markDirty();refreshModel();
  if(open)setPanel('geometry');
  status('« '+model.name+' » importé · enregistre pour le retrouver dans les cartes.');
  return model;
}
function addModel(example=false){
  if(pack.models.length>=modelLimits.models)return;
  remember();
  const id=newModelId();
  const name=example?'Singe de pierre':'Modèle '+(pack.models.length+1);
  pack.models.push({id,name,kind:'structure',inGame:false,
    properties:{...defaultModelProperties},hitbox:{mode:'auto',shape:'convex',precision:48},
    parts:example?exampleParts():[]});
  modelId=id;partIndex=0;multi.clear();
  markDirty();refreshModel();
  setPanel('geometry');
  if(!example){
    $('model-title').focus({preventScroll:true});
    $('model-title').select();
  }
}
function duplicateModel(){
  const model=currentModel();
  if(!model||pack.models.length>=modelLimits.models)return;
  remember();
  const copied=structuredClone(model);
  copied.id=newModelId();
  copied.name=(model.name.slice(0,37)+' · variante').slice(0,48);
  pack.models.push(copied);
  modelId=copied.id;partIndex=0;multi.clear();
  markDirty();refreshModel();
  $('model-title').focus({preventScroll:true});$('model-title').select();
  status('Variante créée : modifie-la sans toucher au modèle original.');
}
function addPart(shape=$('new-shape').value){
  const model=currentModel();
  if(!model||model.parts.length>=modelLimits.parts)return;
  remember();
  const part=currentPart();
  const pos=part?[clamp(part.position[0]+.22,-3,3),...part.position.slice(1)]:[0,0,0];
  model.parts.push(makePart(shape,modelShapes[shape],pos));
  partIndex=model.parts.length-1;multi.clear();
  markDirty();updateParts();updateInspector();updatePreview(model.parts.length===1);
  setTool('translate');setPanel('geometry');
  if(shape==='custom')editProfile();
}
function duplicatePart(){
  const model=currentModel(),indices=selectedIndices();
  if(!model||!indices.length||model.parts.length+indices.length>modelLimits.parts)return;
  remember();
  const source=indices.map(i=>model.parts[i]);
  const dx=Math.min(.12,3-Math.max(...source.map(part=>part.position[0])));
  const groups=new Map(),used=new Set(model.parts.map(part=>part.group));
  const first=model.parts.length;
  for(const original of source){
    const copy=structuredClone(original);
    delete copy.actionId;
    copy.name=original.name.slice(0,40)+' copie';
    copy.position[0]+=dx;
    if(copy.group){
      if(!groups.has(copy.group)){
        let group=1;
        while(used.has(group))group++;
        used.add(group);groups.set(copy.group,group);
      }
      copy.group=groups.get(copy.group);
    }
    model.parts.push(copy);
  }
  multi=new Set(source.map((_,i)=>first+i));partIndex=first;
  markDirty();updateParts();updateInspector();updatePreview();
}
function deletePart(){
  const model=currentModel(),indices=selectedIndices();
  if(!model||!indices.length)return;
  remember();
  for(const index of indices.sort((a,b)=>b-a))model.parts.splice(index,1);
  multi.clear();resetModelMasks();
  partIndex=Math.max(0,Math.min(partIndex,model.parts.length-1));
  if(!model.parts.length&&pack.avatarId===model.id)pack.avatarId=null;
  markDirty();updateModelLists();updateParts();updateInspector();updatePreview();
}
function mirrorPart(){
  const model=currentModel(),part=currentPart();
  if(!part||model.parts.length>=modelLimits.parts)return;
  remember();
  const copy=structuredClone(part);
  delete copy.actionId;
  copy.name=part.name.slice(0,36)+' · miroir';
  delete copy.group;
  copy.position[0]=-copy.position[0];
  if(copy.avatarJoint?.startsWith('left'))copy.avatarJoint='right'+copy.avatarJoint.slice(4);
  else if(copy.avatarJoint?.startsWith('right'))copy.avatarJoint='left'+copy.avatarJoint.slice(5);
  copy.rotation[1]=-copy.rotation[1];
  copy.rotation[2]=-copy.rotation[2];
  model.parts.push(copy);
  partIndex=model.parts.length-1;multi.clear();
  markDirty();updateParts();updateInspector();updatePreview();
  status('Copie en miroir créée sur l’axe X');
}
function dropToGround(){
  const part=currentPart(),mesh=previews.children[partIndex];
  if(!part||!mesh)return;
  const box=new T.Box3().setFromObject(mesh);
  if(box.isEmpty())return;
  remember();
  part.position[1]=clamp(part.position[1]-box.min.y,-3,3);
  markDirty();updateInspector();updatePreview();
  status('Pièce posée sur le plan Y = 0');
}
function resetPart(){
  const part=currentPart();if(!part)return;
  remember();
  part.position=[0,0,0];part.rotation=[0,0,0];part.scale=[.35,.35,.35];
  markDirty();updateInspector();updatePreview();
}
function centerPart(){
  const part=currentPart();if(!part)return;
  remember();part.position=[0,0,0];
  markDirty();updateInspector();updatePreview();
}
function setView(axis){
  if(!orbit)return;
  const distance=camera.position.distanceTo(orbit.target);
  const dir=axis==='front'?new T.Vector3(0,0,-1):
    axis==='side'?new T.Vector3(1,0,0):new T.Vector3(.0001,1,0);
  camera.position.copy(orbit.target).addScaledVector(dir,Math.max(.6,distance));
  orbit.update();render();
}
function download(blob,name){
  const url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=name;link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1200);
}
const fileStem=()=>currentModel()?.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'modele';
async function doExport(){
  const format=$('export-format').value;
  try{
    const model=currentModel(),name=fileStem();
    if(format==='workspace-json'){
      download(new Blob([JSON.stringify(normalizeModelPack(pack),null,2)],{type:'application/json'}),
        'atelier.gorilla-models.json');
    }else if(format==='model-json'){
      if(!model)throw Error('Crée un modèle avant de l’exporter.');
      download(new Blob([JSON.stringify(normalizeModelPack({version:1,models:[model],avatarId:null}),null,2)],{type:'application/json'}),
        name+'.gorilla-model.json');
    }else if(format==='png'){
      if(!renderer)throw Error('WebGL indisponible : capture impossible.');
      render();
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(!blob)throw Error('Capture impossible sur cet appareil.');
      download(blob,name+'.png');
    }else if(format==='glb'){
      if(!model?.parts.length)throw Error('Ajoute une pièce avant l’export 3D.');
      const root=new T.Group();
      root.name=model.name;
      const meshes=[];
      status('Préparation du GLB et des textures…');
      for(const part of model.parts){
        let imageMap=null;
        if(part.texture){
          // CanvasTexture is synchronously ready for GLTFExporter, unlike a
          // TextureLoader image whose load event may already have fired.
          const response=await fetch(part.texture);
          if(!response.ok)throw Error('Image du modèle impossible à charger.');
          const bitmap=await createImageBitmap(await response.blob());
          const textureCanvas=document.createElement('canvas');
          textureCanvas.width=bitmap.width;textureCanvas.height=bitmap.height;
          textureCanvas.getContext('2d').drawImage(bitmap,0,0);
          bitmap.close();
          imageMap=new T.CanvasTexture(textureCanvas);
          imageMap.colorSpace=T.SRGBColorSpace;
          imageMap.wrapS=imageMap.wrapT=T.RepeatWrapping;
        }
        const m=createModelPartMaterial({...part,texture:null});
        if(imageMap){m.map=imageMap;m.needsUpdate=true;}
        const mesh=new T.Mesh(createModelPartGeometry(part),m);
        mesh.name=part.name;root.add(mesh);meshes.push(mesh);
      }
      try{
        const data=await new Promise((resolve,reject)=>
          new GLTFExporter().parse(root,resolve,reject,{binary:true,onlyVisible:true}));
        download(new Blob([data],{type:'model/gltf-binary'}),name+'.glb');
      }finally{
        for(const mesh of meshes){mesh.geometry.dispose();disposeModelMaterial(mesh.material);}
      }
    }
    status('Export '+format.toUpperCase()+' généré');
  }catch(error){status(error.message||'Export impossible.',true);}
}

$('new-model').onclick=()=>addModel();
$('duplicate-model').onclick=duplicateModel;
$('example').onclick=()=>addModel(true);
$('models').onchange=event=>switchModel(event.target.value);
$('mask-set').onchange=event=>changeMask(event.target.value);
$('solo-part').onclick=()=>{
  const model=currentModel();if(!model?.parts.length)return;
  setHiddenParts(new Set(model.parts.map((_,index)=>index).filter(index=>index!==partIndex)));
  status('Masque '+activeMask()+' : seule la pièce active est affichée.');
};
$('show-all-parts').onclick=()=>{
  setHiddenParts(new Set());
  status('Toutes les pièces sont visibles.');
};
$('save').onclick=$('publish-save').onclick=saveNow;
$('undo-action').onclick=undo;
$('redo-action').onclick=redo;
$('entity-sculptor').onclick=()=>{
  try{openEntitySculptor();}
  catch(error){status(error.message,true);}
};
$('export').onclick=doExport;
$('import').onclick=()=>$('file').click();
$('file').onchange=async event=>{
  const file=event.target.files?.[0];event.target.value='';
  if(!file)return;
  try{
    if(file.size>modelLimits.fileBytes)throw Error('JSON trop volumineux pour cet atelier.');
    const incoming=normalizeModelPack(JSON.parse(await file.text()));
    const merged=new Map(pack.models.map(model=>[model.id,model]));
    for(const model of incoming.models)merged.set(model.id,model);
    if(merged.size>modelLimits.models)throw Error('L’atelier accepte '+modelLimits.models+' modèles.');
    if(incoming.models.some(model=>pack.models.some(old=>old.id===model.id))
       &&!confirm('Remplacer les modèles de même identifiant ?'))return;
    remember();
    Object.assign(pack,{version:1,models:[...merged.values()],
      avatarId:incoming.avatarId??pack.avatarId});
    modelId=incoming.models[0]?.id??modelId;partIndex=0;multi.clear();
    markDirty();refreshModel();status('Importé · enregistrer pour appliquer au jeu');
  }catch(error){status(error instanceof SyntaxError?'JSON illisible.':error.message,true);}
};
function sendToCards(event){
  const model=currentModel();
  if(model?.kind==='avatar'){
    event.preventDefault();
    status('Équipe cet avatar dans l’onglet Avatar.');return;
  }
  if(!model?.parts.length){
    event.preventDefault();
    status('Ajoute au moins une pièce avant de placer le modèle sur une carte.',true);
    return;
  }
  if(!saveNow())event.preventDefault();
}
for(const id of ['send-to-map','quick-send-to-map'])
  $(id).addEventListener('click',sendToCards);
$('go-cards').addEventListener('click',event=>{
  if(fromCards&&modelId===contextModel)sendToCards(event);
  else if(dirty&&!saveNow())event.preventDefault();
});
$('delete-model').onclick=()=>{
  const model=currentModel();if(!model||!confirm('Supprimer le modèle « '+model.name+' » ?'))return;
  remember();
  const index=pack.models.indexOf(model);
  pack.models.splice(index,1);
  references.delete(model.id);
  delete workspace.active[model.id];
  delete workspace.masks[model.id];
  storeWorkspace();
  if(pack.avatarId===model.id)pack.avatarId=null;
  modelId=(pack.models[index]??pack.models[index-1])?.id??null;partIndex=0;multi.clear();
  markDirty();refreshModel();
};
function renameActiveModel(event){
  const model=currentModel();if(!model)return;
  beforeChange(event.target);
  model.name=event.target.value.slice(0,48);
  markDirty();updateModelLists();updateInspector();
}
for(const id of ['model-name','model-title'])
  $(id).addEventListener('input',renameActiveModel);
$('hitbox-auto').onclick=()=>setHitboxMode('auto');
$('hitbox-manual').onclick=()=>setHitboxMode('box');
$('hitbox-preview-toggle').onchange=updateHitboxPreview;
$('hitbox-shape').onchange=event=>{
  const model=currentModel();if(!model)return;beforeChange(event.target);
  const value=event.target.value;if(!['box','sphere','capsule','convex'].includes(value))return;
  const old=modelHitbox(model),manual=['box','custom'].includes(model.hitbox?.mode);
  model.hitbox={mode:manual?'custom':'auto',shape:value,
    ...(manual?{center:old.center.toArray(),size:old.size.toArray(),rotation:old.rotation.toArray()}:{}),
    precision:Number($('hitbox-precision').value)||48};
  hitboxEditing=manual;markDirty();updateHitboxControls();updateHitboxPreview();
};
$('hitbox-precision').oninput=event=>{
  const model=currentModel();if(!model)return;
  const value=clamp(Math.round(Number(event.target.value)||48),8,96),old=modelHitbox(model);
  const manual=['box','custom'].includes(model.hitbox?.mode);
  model.hitbox={mode:manual?'custom':'auto',shape:model.hitbox?.shape??'convex',precision:value,
    ...(manual?{center:old.center.toArray(),size:old.size.toArray(),rotation:old.rotation.toArray()}: {})};
  $('hitbox-precision-value').textContent=String(value);markDirty();updateHitboxPreview();
};
for(const [id,mode] of [['hitbox-drag','translate'],['hitbox-scale','scale'],['hitbox-rotate','rotate']]){
  $(id).onclick=()=>{
    const model=currentModel();if(!model?.parts.length||!['box','custom'].includes(model.hitbox?.mode))return;
    $('hitbox-preview-toggle').checked=true;hitboxEditing=true;
    setTool(mode);updateHitboxControls();updateHitboxPreview();
  };
}
$('hitbox-fit').onclick=()=>{
  const model=currentModel();if(!model?.parts.length)return;
  const precision=Number($('hitbox-precision').value)||48;
  const hitbox=modelHitbox({...model,hitbox:{mode:'auto',shape:'convex',precision}});
  remember();model.hitbox={mode:'custom',shape:$('hitbox-shape').value||'convex',center:hitbox.center.toArray(),
    size:hitbox.size.toArray(),rotation:[0,0,0],precision};
  hitboxEditing=true;markDirty();updateHitboxControls();updateHitboxPreview();
  status('Hitbox ajustée à la géométrie actuelle.');
};
for(const key of ['center','size'])for(let i=0;i<3;i++){
  const input=$('hitbox-'+key+'-'+['x','y','z'][i]);
  input.oninput=event=>{
    const model=currentModel(),value=event.target.valueAsNumber;
    if(!['box','custom'].includes(model?.hitbox?.mode)||!Number.isFinite(value))return;
    beforeChange(event.target);
    model.hitbox[key][i]=clamp(value,key==='size'?.025:-6,key==='size'?12:6);
    markDirty();updateHitboxPreview();
  };
  input.onchange=updateHitboxControls;
}
$('model-kind').onchange=event=>{
  if(!currentModel()||currentModel().kind==='avatar')return;beforeChange(event.target);
  currentModel().kind=event.target.value;markDirty();updateInspector();updatePreview();
};
$('in-game').onchange=event=>{
  beforeChange(event.target);currentModel().inGame=event.target.checked;markDirty();
};
$('drivable').onchange=event=>{
  const model=currentModel();if(model?.kind!=='prop')return;
  beforeChange(event.target);
  if(event.target.checked)model.properties.drivable=true;else delete model.properties.drivable;
  markDirty();
};
for(const key of Object.keys(defaultModelProperties)){
  $(key).onchange=event=>{
    if(!currentModel())return;beforeChange(event.target);
    currentModel().properties[key]=event.target.checked;markDirty();
    if(key==='collidable')updateHitboxPreview();
  };
}
$('avatar').onchange=event=>{
  beforeChange(event.target);pack.avatarId=event.target.value||null;markDirty();
};
const jointOptions=Object.entries(avatarJoints).map(([key,joint])=>[key,joint.label]);
setOptions($('avatar-assignment'),jointOptions,'torso');
setOptions($('avatar-joint'),jointOptions,'torso');
function updateAvatarInspector(){
  const model=currentModel(),part=currentPart(),show=model?.kind==='avatar';
  $('avatar-rig-controls').hidden=!show;
  if(!show)return;
  $('avatar-assignment').disabled=!part;
  $('avatar-attach').disabled=!part;
  $('avatar-move').setAttribute('aria-pressed',String(moveAvatarPivot));
  $('avatar-assignment').value=part?.avatarJoint??'torso';
  const key=$('avatar-joint').value||'torso',joint=normalizeAvatarJoint(key,model.avatarRig?.[key]);
  for(const [index,axis] of ['x','y','z'].entries())$('avatar-'+axis).value=joint.pivot[index];
  $('avatar-axis').value=joint.axis;
  $('avatar-limit').value=joint.limit;
  $('avatar-bend').value=(avatarAngles.get(key)??0)*100;
}
const guidePoint=new T.Vector3(),guideParentPoint=new T.Vector3();
function updateSkeletonGuide(){
  skeletonGuide.visible=Boolean(rigPreview)&&$('avatar-display').value!=='model';
  if(!skeletonGuide.visible)return;
  const selected=$('avatar-joint').value;
  rigPreview.root.updateMatrixWorld(true);
  const position=skeletonLinks.geometry.attributes.position;
  let offset=0;
  for(const [key,marker] of Object.entries(jointMarkers)){
    rigPreview.bones[key].getWorldPosition(guidePoint);
    marker.position.copy(guidePoint);
    marker.scale.setScalar(key.includes('Finger')?.011:.018).multiplyScalar(key===selected?1.35:1);
    marker.material.color.set(key===selected?'#ffc16e':'#55d8ee');
    const parent=avatarJoints[key].parent;
    if(parent){
      rigPreview.bones[parent].getWorldPosition(guideParentPoint);
      position.setXYZ(offset++,guidePoint.x,guidePoint.y,guidePoint.z);
      position.setXYZ(offset++,guideParentPoint.x,guideParentPoint.y,guideParentPoint.z);
    }
  }
  position.needsUpdate=true;skeletonGuide.updateMatrixWorld(true);
}
function updateAvatarPreview(){
  const model=currentModel(),show=renderer&&model?.kind==='avatar'&&$('model-inspector').dataset.tab==='avatar';
  rigPreview?.dispose();rigPreview=null;
  previews.visible=!show;
  if(!show){if(renderer)showSelection();render();return;}
  const hidden=hiddenParts();
  rigPreview=createAvatarRig(model,(part,index)=>{
    const mesh=partMesh(part);
    mesh.visible=!hidden.has(index)&&$('avatar-display').value!=='bones';
    return mesh;
  },mesh=>{mesh.geometry.dispose();if(mesh.userData.ownMaterial)disposeModelMaterial(mesh.material);});
  scene.add(rigPreview.root);
  for(const [joint,amount] of avatarAngles)rigPreview.setBend(joint,amount);
  selection.visible=false;attachGizmo();
  $('avatar-cost').textContent=model.parts.length+' pièces · '+rigPreview.triangles.toLocaleString('fr-FR')+
    ' triangles'+(avatarReady(model)?'':' · ajoute une tête et un torse pour l’équiper');
  render();
}
function createAvatar(source=null){
  if(pack.models.length>=modelLimits.models)return;
  remember();
  const parts=source?structuredClone(source.parts):avatarTemplateParts();
  const avatarRig=normalizeAvatarRig();
  if(source){
    const bounds=modelBounds(source),center=bounds.getCenter(new T.Vector3()),size=bounds.getSize(new T.Vector3());
    for(const joint of Object.values(avatarRig)){
      const [x,y,z]=joint.pivot;
      joint.pivot=[
        clamp(center.x+x*size.x/.95,-3,3),
        clamp(bounds.max.y-size.y*.15+y*size.y/1.08,-3,3),
        clamp(center.z+z*size.z/.42,-3,3),
      ];
    }
  }
  const model=normalizeModelPack({version:1,models:[{
    id:newModelId(),name:source?(source.name+' · avatar').slice(0,48):'Mon gorille',kind:'avatar',avatarRig,parts,
  }]}).models[0];
  pack.models.push(model);modelId=model.id;partIndex=0;multi.clear();avatarAngles.clear();moveAvatarPivot=false;
  markDirty();refreshModel();setPanel('avatar');
}
function selectAvatarJoint(key){
  $('avatar-joint').value=key;updateAvatarInspector();attachGizmo();render();
}
function assignAvatarSelection(key){
  const model=currentModel(),indices=selectedIndices();
  if(model?.kind!=='avatar'||!indices.length)return;
  if(indices.every(index=>model.parts[index].avatarJoint===key))return;
  remember();
  for(const index of indices)model.parts[index].avatarJoint=key;
  $('avatar-joint').value=key;
  markDirty();updateModelLists();updateAvatarInspector();updateAvatarPreview();
}
$('avatar-new').onclick=()=>createAvatar();
$('avatar-copy').onclick=()=>{const model=currentModel();if(model?.parts.length&&model.kind!=='avatar')createAvatar(model);};
$('avatar-assignment').onchange=event=>assignAvatarSelection(event.target.value);
$('avatar-joint').onchange=event=>selectAvatarJoint(event.target.value);
$('avatar-attach').onclick=()=>assignAvatarSelection($('avatar-joint').value);
$('avatar-display').onchange=updateAvatarPreview;
$('avatar-move').onclick=()=>{
  moveAvatarPivot=!moveAvatarPivot;
  if(moveAvatarPivot){
    avatarAngles.clear();
    if($('avatar-display').value==='model')$('avatar-display').value='overlay';
  }
  updateAvatarInspector();updateAvatarPreview();
};
$('avatar-focus').onclick=()=>{
  if(!orbit||!rigPreview)return;
  const key=$('avatar-joint').value;
  const direction=camera.position.clone().sub(orbit.target).normalize();
  rigPreview.bones[key].getWorldPosition(orbit.target);
  camera.position.copy(orbit.target).addScaledVector(direction,key.includes('Finger')?.30:.72);
  orbit.update();render();
};
$('avatar-reset-pose').onclick=()=>{avatarAngles.clear();updateAvatarInspector();updateAvatarPreview();};
for(const field of ['x','y','z','axis','limit'])$('avatar-'+field).onchange=()=>{
  const model=currentModel(),key=$('avatar-joint').value;
  if(model?.kind!=='avatar')return;
  remember();
  model.avatarRig[key]=normalizeAvatarJoint(key,{
    pivot:['x','y','z'].map(axis=>$('avatar-'+axis).valueAsNumber),
    axis:$('avatar-axis').value,limit:$('avatar-limit').valueAsNumber,
  });
  markDirty();updateAvatarInspector();updateAvatarPreview();
};
$('avatar-bend').oninput=event=>{
  const key=$('avatar-joint').value,amount=event.target.valueAsNumber/100;
  if(moveAvatarPivot){moveAvatarPivot=false;updateAvatarInspector();attachGizmo();}
  avatarAngles.set(key,amount);$('avatar-bend').value=amount*100;
  rigPreview?.setBend(key,amount);render();
};
$('avatar-play').onclick=event=>{if(!saveNow())event.preventDefault();};
setOptions($('new-shape'),Object.entries(modelShapes).filter(([id])=>id!=='asset'),'box');
setOptions($('part-shape'),Object.entries(modelShapes),'box');
setOptions($('game-asset'),builtinModels.map(model=>[model.assetId,model.name]),builtinModels[0]?.assetId);
$('add-game-asset').onclick=()=>importBuiltinAsset($('game-asset').value);
setOptions($('part-surface'),Object.entries(modelSurfaces),'plain');
setOptions($('part-finish'),Object.entries(modelFinishes).map(([id,finish])=>[id,finish.label]),'original');
setOptions($('part-zone'),Object.entries(modelPartZones),'solid');
$('trigger-portal').onchange=event=>{
  const part=currentPart();
  if(part?.zone!=='trigger')return;
  const value=event.target.value.trim();
  if(value&&value!=='arena'){
    try{
      const target=new URL(value);
      if(target.protocol!=='https:'||target.username||target.password)throw Error();
    }catch{
      status('Destination invalide. Entre une URL HTTPS publique ou le mot arena.',true);
      event.target.value=part.portal??'';
      return;
    }
  }
  beforeChange(event.target);
  if(value)part.portal=value;
  else delete part.portal;
  markDirty();
};
for(const field of ['phase','text'])$('trigger-notice-'+field).onchange=event=>{
  const part=currentPart();
  if(part?.zone!=='trigger')return;
  beforeChange(event.target);
  part.notice={text:$('trigger-notice-text').value,phase:$('trigger-notice-phase').value};
  markDirty();
};
$('part-collisions').onchange=event=>{
  const model=currentModel();if(!model||model.kind!=='structure')return;
  remember();model.partCollisions=event.target.checked;hitboxEditing=false;
  markDirty();updateInspector();updateHitboxPreview();
};
$('part-zone').onchange=event=>{
  const part=currentPart();if(!part)return;
  remember();part.zone=event.target.value;
  const changed=normalizePartReaction(part.reaction&&{...part.reaction,phase:part.zone==='trigger'?'enter':'use'},part.zone);
  if(changed)part.reaction=changed;else delete part.reaction;
  markDirty();updateHitboxControls();updateReactionInspector();updateHitboxPreview();
};
$('part-finish').onchange=event=>{
  const part=currentPart();if(!part)return;
  remember();part.finish=event.target.value;markDirty();updateInspector();updatePreview();
};
for(const field of ['projection','repeat','angle','u','v'])$('part-'+field).onchange=event=>{
  const part=currentPart();if(!part)return;
  const input=event.target,value=field==='projection'?input.value:input.valueAsNumber;
  if(field!=='projection'&&!Number.isFinite(value)){updateInspector();return;}
  const uv=modelPartUv(part);
  if(field==='u'||field==='v')uv.offset[field==='u'?0:1]=value;
  else uv[field]=value;
  remember();part.uv=modelPartUv({uv});markDirty();updateInspector();updatePreview();
};
for(const key of ['gravity','bounce'])$('model-'+key).onchange=event=>{
  const model=currentModel();if(!model||!Number.isFinite(event.target.valueAsNumber))return;
  remember();model.physics=modelPhysics({physics:{...modelPhysics(model),[key]:event.target.valueAsNumber}});markDirty();
};

function editProfile(){
  const part=currentPart();if(!part||part.shape!=='custom')return;
  openShapeStudio({
    name:part.name,initial:part.profile??startingSketch(),
    onApply:profile=>{
      if(!currentModel()?.parts.includes(part))throw Error('La pièce n’existe plus.');
      remember();
      part.profile=profile;
      markDirty();updateInspector();updatePreview();
      status('Forme personnelle appliquée · modèle prêt à enregistrer.');
    },
  });
}
$('edit-profile').onclick=editProfile;
$('add-part').onclick=()=>addPart();
for(const button of document.querySelectorAll('[data-shape]')){
  button.onclick=()=>{$('new-shape').value=button.dataset.shape;addPart(button.dataset.shape);};
}
$('part-paint').onclick=()=>{
  const part=currentPart();
  if(!part)return;
  const patterns={plain:'solid',grid:'grid',stripes:'stripes',wood:'wood',speckle:'rock'};
  openTextureStudio({
    initial:part.texture,name:'Pièce / '+part.name,tint:part.color,
    pattern:patterns[part.surface]??'grain',maxDataBytes:modelLimits.textureBytes-2000,
    onApply:async data=>{
      if(!currentModel()?.parts.includes(part))throw Error('La pièce modifiée n’existe plus dans ce modèle.');
      remember();
      if(!part.texture)part.color='#ffffff'; // Avoid unwanted tint over the painted pixels.
      part.texture=data;
      // Fail early if all texture assets exceed the pack's JSON budget.
      normalizeModelPack(pack);
      markDirty();updateInspector();updatePreview();
      status('Texture peinte appliquée à '+part.name+'. Enregistre pour la retrouver en jeu.');
    },
  });
};
$('part-texture-clear').onclick=()=>{
  const part=currentPart();if(!part?.texture)return;
  remember();part.texture=null;markDirty();updateInspector();updatePreview();
};
$('duplicate-part').onclick=duplicatePart;
$('group-parts').onclick=()=>groupSelection();
$('ungroup-parts').onclick=()=>groupSelection(true);
$('delete-part').onclick=deletePart;
$('mirror').onclick=mirrorPart;
$('drop-to-grid').onclick=dropToGround;
$('reset-part').onclick=resetPart;
$('center-part').onclick=centerPart;
$('focus-part').onclick=()=>frameModel(true);
$('frame').onclick=()=>frameModel();
$('view-front').onclick=()=>setView('front');
$('view-side').onclick=()=>setView('side');
$('view-top').onclick=()=>setView('top');
$('grid-toggle').onchange=event=>{guide.visible=event.target.checked;render();};
$('snap-step').onchange=attachGizmo;
$('focus-toggle').onclick=()=>{
  document.body.classList.toggle('preview-fullscreen');
  setTimeout(()=>window.dispatchEvent(new Event('resize')),0);
};
for(const key of ['name','shape','color','surface']){
  $('part-'+key).addEventListener(key==='name'||key==='color'?'input':'change',event=>{
    const part=currentPart();if(!part)return;
    beforeChange(event.target);
    if(key==='shape'&&event.target.value==='custom'&&part.shape!=='custom'){
      part.profile=startingSketch(part.shape);
    }
    part[key]=event.target.value;
    markDirty();updateParts();
    if(key==='name')updateInspector();
    else {
      updateInspector();updatePreview();
      if(key==='shape'&&part.shape==='custom')editProfile();
    }
  });
}
for(const button of document.querySelectorAll('[data-color]')){
  button.onclick=()=>{
    const part=currentPart();if(!part)return;
    remember();part.color=button.dataset.color;
    markDirty();updateInspector();updatePreview();
  };
}
for(const button of menu.querySelectorAll('button')){
  button.onclick=()=>{
    closeMenu();
    const action=button.dataset.action;
    if(['translate','rotate','scale'].includes(action))setTool(action);
    else if(action==='duplicate')duplicatePart();
    else if(action==='mirror')mirrorPart();
    else if(action==='ground')dropToGround();
    else if(action==='focus')frameModel(true);
    else if(action==='delete')deletePart();
  };
}
window.addEventListener('keydown',event=>{
  if(document.querySelector('.entity-sculptor[open]'))return;
  const editing=event.target.closest?.('input,select,textarea,[contenteditable]');
  if(event.key==='Escape'){closeMenu();if(!editing&&!gizmo?.dragging)setTool('select');return;}
  if(gizmo?.dragging)return;
  const modifier=event.ctrlKey||event.metaKey;
  if(modifier&&!editing){
    const key=event.key.toLowerCase();
    if(key==='z'){event.preventDefault();if(event.shiftKey)redo();else undo();return;}
    if(key==='y'){event.preventDefault();redo();return;}
    if(key==='s'){event.preventDefault();saveNow();return;}
    if(key==='d'){event.preventDefault();duplicatePart();return;}
    if(key==='g'){event.preventDefault();groupSelection(event.shiftKey);return;}
  }
  if(editing||modifier||event.altKey)return;
  const key=event.key.toLowerCase();
  if(key==='v')setTool('select');
  else if(key==='g')setTool('translate');
  else if(key==='r')setTool('rotate');
  else if(key==='s')setTool('scale');
  else if(key==='f')frameModel(true);
  else if(key==='a')frameModel();
  else if(key==='m')mirrorPart();
  else if(key==='delete'||key==='backspace')deletePart();
  else if(key==='d'&&event.shiftKey)duplicatePart();
  else if('123456789'.includes(key)&&key.length===1){
    const shape=['box','sphere','cylinder','cone','torus','capsule','diamond','custom','tetrahedron'][Number(key)-1];
    if(shape)addPart(shape);
  }else return;
  event.preventDefault();
});
window.addEventListener('keydown',event=>{
  if(event.key==='Alt'&&gizmo){
    gizmo.setTranslationSnap(null);
    gizmo.setRotationSnap(null);
    gizmo.setScaleSnap(null);
  }
});
window.addEventListener('keyup',event=>{
  if(event.key==='Alt')attachGizmo();
});
window.addEventListener('beforeunload',event=>{if(dirty)event.preventDefault();});
if(requestedAsset)contextModel=importBuiltinAsset(requestedAsset,true)?.id;
refreshModel();
if(editorParams.get('tab')==='avatar')setPanel('avatar');
if(dirty)status('Brouillon récupéré automatiquement');

if(editorParams.get('sculpt')==='1')$('entity-sculptor').click();
