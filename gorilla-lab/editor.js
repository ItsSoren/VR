import * as T from 'three';
import {buildArena} from './arena.js';
import {addLabFixtures} from './fixtures.js';
import {createArenaObjectSpecs,forEachStartupObject} from './arena-objects.js';
import {labMirror,labProbe,labTree,labTarget} from './lab-layout.js';
import {tiledBox,transformUVs,decorPrimitiveGeometry} from './texture-geometry.js';
import {readModelPack,modelStorageKey,normalizeModelPack,createModelUnitGeometry,createModelMaterial,disposeModelMaterial,modelDimensions,modelBounds} from './model-pack.js';
import {createBuiltinModelTemplates,spawnAssetIds} from './model-assets.js';
import {normalizeTerrain,resizeTerrain,sculptTerrain,terrainGeometry,terrainVegetation,disposeVegetation} from './terrain-edit.js';
import {texturePresets,seamlessTexture} from './seamless-texture.js';
import {openTextureStudio} from './texture-studio.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import {resizedCenter} from './editor-scale.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  parseMap, arenaMap, exampleMap, makePiece, mapMaterials, materialColors, surfacePresets,
  maxPieces, maxWorldReach, maxObjectSize, snapPlacement, downloadMap, storageKey,
} from './map-format.js';

const $ = id => document.getElementById(id);
const fields = ['name', 'x', 'y', 'z', 'w', 'h', 'd', 'pitch', 'yaw', 'roll', 'material', 'color', 'grip', 'gravity', 'bounce', 'solid'];
const uvFields=['uvScale','uvRotation','uvOffsetX','uvOffsetY'];
const toolButtons = [...document.querySelectorAll('.tool')];
const draftKey = 'gorilla-lab-editor-draft';
const modelPack = readModelPack(localStorage);
const builtinModelLibrary=createBuiltinModelTemplates();
const modelLibrary=[...new Map([...builtinModelLibrary,...modelPack.models].map(model=>[model.id,model])).values()].filter(model=>model.parts.length);
function refreshModelSelectors(preferredModel){
  const selected=preferredModel??$('model-library').value;
  $('model-library').replaceChildren(
    new Option('Sélectionner un modèle…', ''),
    ...modelLibrary.map(model=>new Option(model.name+(model.kind==='structure'?' · Décor':' · Objet'),model.id))
  );
  if(modelLibrary.some(model=>model.id===selected))$('model-library').value=selected;
  else if(modelLibrary.length===1)$('model-library').value=modelLibrary[0].id;
  $('place-model').disabled=!modelLibrary.length;
  for(const id of ['terrain-grassModel','terrain-shrubModel']){
    const input=$(id),previous=input.value;
    input.replaceChildren(
      new Option('Géométrie simple (défaut)',''),
      ...modelLibrary.map(model=>new Option(model.name,model.id))
    );
    if(modelLibrary.some(model=>model.id===previous))input.value=previous;
  }
}
const requestedModel = new URLSearchParams(location.search).get('model');
refreshModelSelectors(requestedModel);
function selectedModel() { return modelLibrary.find(model => model.id === $('model-library').value); }
function modelPiece() {
  const model = selectedModel();
  if (!model) return null;
  const size = modelDimensions(model);
  return makePiece({
    name:model.name.slice(0,36),model:structuredClone(model),x:0,y:Math.max(.15,size.y/2),z:0,
    w:T.MathUtils.clamp(size.x,.2,64),h:T.MathUtils.clamp(size.y,.12,36),d:T.MathUtils.clamp(size.z,.2,64),
    color:'#ffffff',solid:model.properties.collidable!==false
  });
}
$('model-library').addEventListener('change',()=>{
  if(tool==='model')showGhost(null);
  updateToolHelp();
});
const shapes = {
  block: makePiece(),
  ramp: makePiece({ name: 'Rampe', w: 3, h: .30, d: 4, pitch: 16, material: 5 }),
  terrain: makePiece({name:'Terrain',w:18,h:.12,d:18,y:0,material:3,terrain:normalizeTerrain({amplitude:.7,grass:.34})}),
  wall: makePiece({ name: 'Mur', w: .45, h: 2.5, d: 3.5, material: 2 }),
};
const toolHelp = {
  move: 'Clique ou touche une pièce pour la sélectionner. Glisse-la pour la déplacer au sol.',
  translate: 'Sélectionne une pièce et tire une flèche pour la déplacer sur un axe. La grille fixe le pas.',
  rotate: 'Sélectionne une pièce puis tire un anneau coloré pour la tourner par crans de 5°.',
  scale: 'Tire une poignée pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner symétriquement autour du centre.',
  view: 'Glisse dans la vue 3D pour tourner. Utilise la molette ou pince à deux doigts pour zoomer.',
  block: 'Clique dans la vue 3D ou sur le plan pour poser un bloc. Échap revient à la sélection.',
  ramp: 'Clique dans la vue 3D ou sur le plan pour poser une rampe. Échap revient à la sélection.',
  wall: 'Clique dans la vue 3D ou sur le plan pour poser un mur. Échap revient à la sélection.',
  terrain:'Clique pour poser un terrain. Sélectionne-le pour régler le bruit ou la végétation.',
  sculpt:'Clique ou glisse sur un terrain. Le pinceau est réglable dans Relief et végétation.',
  preset:'Choisis une forme rapide et clique où la placer. Tu peux ensuite la modifier ou la remplacer par un modèle.',
  spawn: 'Clique sur une surface pour placer le départ du joueur.',
  model: 'Choisis un modèle dans la bibliothèque, puis clique dans la vue 3D ou sur le plan pour le poser.',
};
let map, selected = -1, tool = 'move', gesture = null, ghost = null;
const undoStack = [];
const screen = $('preview'), plan = $('plan'), context = plan.getContext('2d');
function presetPiece(){
  const presets={
    slab:['Dalle',3,.12,3],column:['Colonne',.6,3,.6],beam:['Poutre',4,.4,.45],
    platform:['Plateforme',7,.4,5],fence:['Barrière',4,1.3,.18],
    stair:['Marche',1.7,.25,.8],tiny:['Petit décor',.35,.35,.35],
    sphere:['Sphère',1,1,1],cylinder:['Cylindre',1,2,1],cone:['Cône',1.6,2,1.6],
    torus:['Anneau',2,.65,2],capsule:['Capsule',1,2,1]
  };
  const [name,w,h,d]=presets[$('shape-preset').value]??presets.slab;
  return makePiece({name,w,h,d,y:h/2,primitive:['sphere','cylinder','cone','torus','capsule'].includes($('shape-preset').value)?$('shape-preset').value:'box'});
}
const editorViews=$('editor-views');
function applyLayout(){
  editorViews.dataset.layout=$('layout-mode').value;
  document.documentElement.style.setProperty('--view-fraction',$('view-split').value+'%');
  document.documentElement.style.setProperty('--side-width',$('sidebar-width').value+'px');
  requestAnimationFrame(()=>{resizeRenderer();resizePlan();});
}
for(const id of ['layout-mode','view-split','sidebar-width'])$(id).addEventListener('input',applyLayout);
$('sidebar-toggle').onclick=()=>{document.body.classList.toggle('inspector-hidden');applyLayout();};
$('workspace-fullscreen').onclick=()=>{
  if(document.fullscreenElement)document.exitFullscreen();
  else document.querySelector('main').requestFullscreen?.();
};
$('focus-3d').onclick=()=>{$('layout-mode').value='only-3d';applyLayout();};
$('focus-plan').onclick=()=>{$('layout-mode').value='only-plan';applyLayout();};

// A single viewport-first workspace, inspired by desktop 3D editors.
// All existing editor controls are reparented (never duplicated), keeping their
// original IDs, keyboard shortcuts, and event listeners.
function buildWorkspaceShell(){
  const main=document.querySelector('main'),aside=main.querySelector('aside.panel');
  aside.id='scene-sidebar';
  const make=(tag,className,text)=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(text!==undefined)node.textContent=text;
    return node;
  };
  const rail=make('nav','tool-rail');
  rail.id='tool-rail';
  rail.setAttribute('aria-label','Outils de l’atelier');
  main.prepend(rail);
  const toolIcons={move:'⌖',translate:'✣',rotate:'↻',scale:'⤢',
    view:'◉',block:'▣',ramp:'◩',wall:'▥',terrain:'▦',
    sculpt:'〰',model:'⬡',preset:'⊞',spawn:'⊕'};
  const groups={translate:'transforms',block:'build',terrain:'terrain',model:'library',spawn:'spawn'};
  for(const button of toolButtons){
    const type=button.dataset.tool;
    const name=button.textContent.trim().replace(/\s+[VG RSC1234]$/,'').trim();
    if(groups[type]){
      const divider=make('div','rail-divider');
      divider.title={transforms:'Transformations',build:'Construction',terrain:'Terrain',library:'Bibliothèque',spawn:'Départ'}[groups[type]];
      rail.append(divider);
    }
    button.classList.add('rail-tool');
    button.title=name+' · '+(toolHelp[type]??'');
    button.setAttribute('aria-label',name);
    button.replaceChildren(make('span','rail-glyph',toolIcons[type]??'□'),
      make('span','rail-caption',name==='Redimensionner'?'Échelle':name==='Sélectionner'?'Sélect.':name==='Déplacer'?'Déplacer':name==='Atelier'?'Modèle':name));
    rail.append(button);
  }
  const insert=make('div','insert-palette');
  insert.id='insert-palette';
  insert.hidden=true;
  const paletteTitle=make('h2','','Ajouter un élément');
  insert.append(paletteTitle);
  const oldTools=document.querySelector('.command-bar .tools');
  const shapeLabel=$('shape-preset').closest('label');
  const modelSection=$('model-library').closest('.inspector-section');
  const modelLink=oldTools.querySelector('a[href*="model-editor"]');
  if(modelLink)modelLink.textContent='✎ Modifier dans l’atelier des modèles';
  insert.append(shapeLabel,modelSection);
  const modelAction=make('button','model-place-action','⬡ Placer ce modèle dans la scène');
  modelAction.id='model-place-action';
  modelAction.type='button';
  insert.append(modelAction);
  const deleteLibraryButton=make('button','delete-library-model','Supprimer de la bibliothèque');
  deleteLibraryButton.type='button';
  deleteLibraryButton.id='delete-library-model';
  deleteLibraryButton.title='Effacer cette création de la bibliothèque locale, sans retirer les exemplaires déjà posés sur la carte';
  insert.append(deleteLibraryButton);
  if(modelLink)insert.append(modelLink);
  const insertHint=make('p','palette-help','Choisis une forme, puis clique dans la scène.');
  insert.append(insertHint);
  const modelCount=make('p','model-count-hint','');
  insert.append(modelCount);
  main.append(insert);
  const toolRow=document.querySelector('.command-bar .command-row');
  oldTools.remove();
  const actions=toolRow.querySelector('.actions');
  actions.classList.add('viewport-actions');
  const layout=$('layout-mode').closest('label');
  layout.classList.add('viewport-layout');
  toolRow.prepend(layout);
  const status=make('span','active-selection','Aucune sélection');
  status.id='active-selection';
  layout.after(status);
  const settings=make('details','precision-menu');
  settings.id='precision-menu';
  settings.append(make('summary','','Accrochage ▾'));
  const inner=make('div','precision-options');
  const precisionIds=['snap','magnet','magnet-mode','magnet-distance','view-split'];
  for(const id of precisionIds){const input=$(id);if(input)inner.append(input.closest('label'));}
  settings.append(inner);
  toolRow.append(settings);
  const showInsert=(mode)=>{
    if(mode==='close'){insert.hidden=true;return;}
    const showingModels=mode==='model';
    insert.hidden=false;
    insert.dataset.mode=mode;
    paletteTitle.textContent=showingModels?'Mes modèles / bibliothèque':'Ajouter une forme';
    modelSection.hidden=!showingModels;
    shapeLabel.hidden=showingModels;
    modelAction.hidden=!showingModels;
    deleteLibraryButton.hidden=!showingModels;
    if(modelLink)modelLink.hidden=!showingModels;
    insertHint.textContent=showingModels
      ?'Sélectionne un modèle, puis clique sur le terrain ou le plan pour le placer. Il sera intégré à la carte.'
      :'Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.';
    modelCount.hidden=!showingModels;
    modelCount.textContent=showingModels
      ?modelLibrary.length+' modèle(s) enregistré(s) dans ce navigateur'
      :'';
    const name=selectedModel();
    modelAction.disabled=!name;
    modelAction.textContent=name?'⬡ Placer « '+name.name+' »':'Aucun modèle à placer';
    deleteLibraryButton.disabled=!name||!modelPack.models.some(entry=>entry.id===name.id);
    if(modelLink)modelLink.href='./model-editor.html'+(name?(name.assetId?'?asset='+encodeURIComponent(name.assetId):'?model='+encodeURIComponent(name.id)):'');
    const target=showingModels?'model-library':'shape-preset';
    $(target).focus({preventScroll:true});
  };
  modelAction.onclick=()=>{
    if(!selectedModel())return;
    setTool('model');
    showInsert('close');
    screen.focus({preventScroll:true});
    notice('Clique dans la scène pour placer « '+selectedModel().name+' ».');
  };
  deleteLibraryButton.onclick=()=>{
    const model=selectedModel();
    if(!model||!modelPack.models.some(entry=>entry.id===model.id))return;
    if(!confirm('Supprimer définitivement « '+model.name+' » de la bibliothèque de ce navigateur ?\\n\\nLes exemplaires déjà placés dans cette carte resteront en place.'))return;
    try{
      const updated=normalizeModelPack({
        ...modelPack,models:modelPack.models.filter(entry=>entry.id!==model.id),
        avatarId:modelPack.avatarId===model.id?null:modelPack.avatarId
      });
      localStorage.setItem(modelStorageKey,JSON.stringify(updated));
      Object.assign(modelPack,updated);
      const index=modelLibrary.findIndex(entry=>entry.id===model.id);
      if(index>=0)modelLibrary.splice(index,1);
      refreshModelSelectors();
      if(tool==='model'&&!modelLibrary.length)setTool('move');
      showGhost(null);
      updateToolHelp();
      showInsert('model');
      notice('« '+model.name+' » supprimé de la bibliothèque. Les exemplaires de la carte sont conservés.');
    }catch(error){
      notice('Suppression impossible : '+(error.message||'stockage local indisponible'));
    }
  };
  $('model-library').addEventListener('change',()=>{
    if(insert.dataset.mode==='model'&&!insert.hidden)showInsert('model');
  });
  for(const type of ['model','preset']){
    const btn=toolButtons.find(node=>node.dataset.tool===type);
    btn?.addEventListener('click',()=>showInsert(type));
  }
  window.addEventListener('pointerdown',event=>{
    if(!insert.hidden&&!insert.contains(event.target)&&!event.target.closest('.rail-tool'))showInsert('close');
  });
  window.addEventListener('keydown',event=>{if(event.key==='Escape')showInsert('close');});

  // Scene hierarchy above the contextual inspector: the viewport never scrolls.
  const outline=make('section','outliner');
  outline.id='scene-outline';
  const outlineHead=make('header','side-section-head');
  outlineHead.append(make('strong','','Hiérarchie de la scène'));
  outlineHead.append(make('span','outline-meta','Objets'));
  outline.append(outlineHead);
  const pieceSection=aside.querySelector('#pieces').closest('.inspector-section');
  pieceSection.id='outline-content';
  outline.append(pieceSection);
  const detailsPane=make('section','property-pane');
  const tabs=make('nav','inspector-tabs');
  tabs.setAttribute('aria-label','Propriétés');
  const specs=[['object','Objet'],['terrain','Terrain'],['material','Matériaux'],['scene','Scène']];
  for(const [key,label] of specs){
    const button=make('button','inspector-tab',label);
    button.type='button';
    button.dataset.tab=key;
    button.setAttribute('aria-pressed',String(key==='object'));
    tabs.append(button);
  }
  const content=make('div','property-content');
  content.id='property-content';
  const objectSection=$('piece-inspector').closest('.inspector-section');
  objectSection.id='object-section';
  const surfaceControls=$('surface').closest('details');
  surfaceControls.id='surface-controls';
  content.append(objectSection);
  const sceneOptions=make('section','scene-options');
  sceneOptions.id='scene-options';
  sceneOptions.append(make('h2','','Paramètres de carte'));
  const mapName=$('map-name').closest('label');
  const mapDims=$('map-world-size').closest('.fields');
  const draft=$('draft-status');
  sceneOptions.append(mapName,mapDims,draft);
  const misc=[...aside.children].filter(node=>node.tagName==='DETAILS');
  for(const detail of misc)sceneOptions.append(detail);
  content.append(sceneOptions);
  detailsPane.append(tabs,content);
  aside.replaceChildren(outline,detailsPane);
  const setTab=(tab)=>{
    const piece=map?.pieces?.[selected];
    if(tab==='terrain'&&!piece?.terrain)tab='object';
    if(tab==='material'&&!piece)tab='object';
    aside.dataset.tab=tab;
    for(const button of tabs.querySelectorAll('button')){
      button.setAttribute('aria-pressed',String(button.dataset.tab===tab));
      button.disabled=button.dataset.tab==='terrain'&&!piece?.terrain;
    }
    if(tab==='terrain')$('terrain-controls').open=true;
    if(tab==='material')surfaceControls.open=true;
    content.scrollTop=0;
  };
  for(const button of tabs.querySelectorAll('button'))button.addEventListener('click',()=>setTab(button.dataset.tab));
  window.setInspectorTab=setTab;
  setTab('object');
}
buildWorkspaceShell();

let planRange = { scale: 10, cx: 0, cz: -6, width: 30, height: 40 };

const renderer = new T.WebGLRenderer({ canvas: screen, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
const camera = new T.PerspectiveCamera(52, 1, .1, 640);
camera.position.set(16, 15, 19);
const controls = new OrbitControls(camera, screen);
controls.target.set(0, 0, -5);
controls.mouseButtons.LEFT = null;
controls.mouseButtons.RIGHT = T.MOUSE.ROTATE;
controls.mouseButtons.MIDDLE = T.MOUSE.PAN;
controls.maxDistance = 580;
controls.maxPolarAngle = Math.PI / 2 - .035;

const scene = new T.Scene();
scene.background = new T.Color('#8fb6c6');
const ambient=new T.HemisphereLight('#f0f5ff', '#8e775c', 2.6);
scene.add(ambient);
const sun = new T.DirectionalLight('#fff1d2', 1.8);
sun.position.set(-9, 18, 6);
scene.add(sun);
// Reuse the game arena. Dynamic props and fixtures are serialized as normal map pieces,
// so selection, transforms, undo and saves all use the same data path.
const referenceScene=new T.Scene();
referenceScene.fog=new T.Fog('#a6d4ea',55,135);
const previewArena=buildArena(referenceScene,renderer);
previewArena.probe.userData.editorAssetId='chrome-sphere';
const labFixtures=addLabFixtures(referenceScene,previewArena.boxes,{quality:()=> '7/10',resolution:()=> '7/10',textureSize:()=> '512 px'});
const builtinByAsset=new Map(createBuiltinModelTemplates().map(model=>[model.assetId,model]));
function assetPiece(assetId,position,sourceModel=null,name=null){
  const model=structuredClone(sourceModel??builtinByAsset.get(assetId));
  if(!model)throw new Error('Asset intégré introuvable : '+assetId);
  const bounds=modelBounds(model),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
  return makePiece({name:(name??model.name).slice(0,36),model,
    x:position.x+center.x,y:position.y+center.y,z:position.z+center.z,
    w:Math.max(.05,size.x),h:Math.max(.05,size.y),d:Math.max(.05,size.z),
    color:'#ffffff',solid:model.properties?.collidable!==false});
}
const defaultMap=()=>{
  const next=arenaMap(previewArena.boxes);
  next.assetLayer=true;
  forEachStartupObject((type,position)=>{
    const assetId=spawnAssetIds[type];
    if(assetId)next.pieces.push(assetPiece(assetId,position));
  });
  next.pieces.push(assetPiece('chrome-sphere',new T.Vector3(labProbe.x,labProbe.y,labProbe.z)));
  const treeModel=structuredClone(builtinByAsset.get('palm-tree'));
  treeModel.parts=treeModel.parts.filter(part=>part.assetId!=='spawn-coconut');
  next.pieces.push(assetPiece('palm-tree',new T.Vector3(labTree.x,0,labTree.z),treeModel));
  for(let i=0;i<5;i++){
    const angle=i*Math.PI*2/5,localX=Math.cos(angle)*(.25+(i%2)*.10),localY=2.88+(i%3)*.06;
    const tilt=-.14;
    const position=new T.Vector3(labTree.x+Math.cos(tilt)*localX-Math.sin(tilt)*localY,
      Math.sin(tilt)*localX+Math.cos(tilt)*localY,labTree.z+Math.sin(angle)*(.25+(i%2)*.10));
    next.pieces.push(assetPiece('spawn-coconut',position,null,'Coco '+(i+1)));
  }
  next.pieces.push(assetPiece('range-target',new T.Vector3(labTarget.x,labTarget.y,labTarget.z)));
  return parseMap(next);
};
map=defaultMap();
const mirror=new T.Mesh(new T.BoxGeometry(1.8,2.03,.10),new T.MeshStandardMaterial({color:'#8daebc',metalness:.9,roughness:.12}));
mirror.position.set(labMirror.x,labMirror.y,labMirror.z);
referenceScene.add(mirror);
const editableArenaBoxes=previewArena.boxes.filter(box=>box.half&&box.mesh?.isObject3D);
editableArenaBoxes.forEach(box=>box.mesh.removeFromParent());
const arenaBackdrop=new T.Group();
arenaBackdrop.add(...[...referenceScene.children]);
scene.add(arenaBackdrop);
const previewHill=previewArena.boxes.find(box=>box.heightfield).mesh;
previewArena.visual(7,0,7,true,true,true,512,false);

const grid = new T.GridHelper(60, 60, '#d7e2e5', '#5e7b8a');
grid.material.transparent = true;
grid.material.opacity = .35;
scene.add(grid);
const group = new T.Group();
scene.add(group);
// Three.js draws and picks the handles. The map remains the only saved state.
const gizmo=new TransformControls(camera,screen);
gizmo.setSize(.9);
gizmo.setRotationSnap(T.MathUtils.degToRad(5));
gizmo.enabled=false;
scene.add(gizmo.getHelper());
const transformModes=new Set(['translate','rotate','scale']);
let beforeTransform=null;
let heldSnap=null, altHeld=false, edgeMidpoint=null, midpointSnapped=false;
const magnetRange=()=>Number($('magnet-distance').value);
for(const id of ['magnet-mode','magnet-distance']){
  try{
    const saved=localStorage.getItem('gorilla-lab-'+id);
    if([...$(id).options].some(option=>option.value===saved))$(id).value=saved;
  }catch{}
  $(id).onchange=()=>{
    heldSnap=null;
    try{localStorage.setItem('gorilla-lab-'+id,$(id).value);}catch{}
  };
}
const rejectedSnaps=new Map();
try {$('magnet').checked=localStorage.getItem('gorilla-lab-editor-magnet')!=='off';}catch{}
$('magnet').onchange=()=>{
  heldSnap=null;rejectedSnaps.clear();
  try{localStorage.setItem('gorilla-lab-editor-magnet',$('magnet').checked?'on':'off');}catch{}
};
for(const type of ['keydown','keyup'])window.addEventListener(type,event=>{altHeld=event.altKey;});
window.addEventListener('blur',()=>{altHeld=false;heldSnap=null;});

// Only parallel box faces magnetize. Compare raw positions before grid rounding;
// require overlap along the other two axes so distant edges cannot pull a block.
function alignTranslation(piece,raw,axes,free){
  const aligned={...raw};
  if(!free)for(const axis of axes)aligned[axis]=Math.round(raw[axis]/snapStep())*snapStep();
  if(free||!$('magnet').checked||!piece.solid||piece.terrain){heldSnap=null;return aligned;}
  const range=magnetRange(),edgeMode=$('magnet-mode').value==='edge';
  const dimensions={x:'w',y:'h',z:'d'};
  const half=box=>{
    if(box.terrain||!box.solid||[box.pitch,box.yaw,box.roll??0].some(deg=>Math.abs(deg/90-Math.round(deg/90))>1e-6))return null;
    const euler=new T.Euler(...[box.pitch,box.yaw,box.roll??0].map(T.MathUtils.degToRad),'YXZ');
    const m=new T.Matrix4().makeRotationFromEuler(euler).elements;
    return Object.fromEntries(['x','y','z'].map((axis,i)=>[axis,(Math.abs(m[i])*box.w+Math.abs(m[4+i])*box.h+Math.abs(m[8+i])*box.d)/2]));
  };
  const moving=half(piece);
  if(!moving)return aligned;
  const candidates=[];
  for(const other of map.pieces){
    if(other===piece)continue;
    const fixed=half(other);
    if(!fixed)continue;
    for(const axis of axes){
      const cross=Object.keys(dimensions).filter(key=>key!==axis);
      const overlaps=key=>Math.abs(aligned[key]-other[key])<moving[key]+fixed[key]-.001;
      const edge=cross.flatMap(key=>axes.includes(key)&&overlaps(cross.find(k=>k!==key))
        ?[-1,1].flatMap(a=>[-1,1].map(b=>{
          const value=other[key]+a*fixed[key]-b*moving[key];
          return {key,value,distance:Math.abs(raw[key]-value)};
        })):[]).sort((a,b)=>a.distance-b.distance)[0];
      if(edgeMode?(!edge||edge.distance>range*1.8):!cross.every(overlaps))continue;
      for(const side of [-1,1]){
        const value=other[axis]+side*(moving[axis]+fixed[axis]);
        const key=map.pieces.indexOf(other)+':'+axis+':'+side;
        candidates.push({key,axis,value,edge:edgeMode?edge:null,distance:Math.max(Math.abs(value-raw[axis]),edgeMode?edge.distance:0)});
      }
    }
  }
  const existing=candidates.find(c=>c.key===heldSnap);
  const apply=c=>{aligned[c.axis]=c.value;if(c.edge)aligned[c.edge.key]=c.edge.value;};
  if(existing&&existing.distance<=range*1.8){apply(existing);return aligned;}
  if(heldSnap){
    rejectedSnaps.set(heldSnap,(rejectedSnaps.get(heldSnap)??0)+1);
    heldSnap=null;
  }
  const next=candidates.filter(c=>c.distance<=range&&(rejectedSnaps.get(c.key)??0)<3).sort((a,b)=>a.distance-b.distance)[0];
  if(next){apply(next);heldSnap=next.key;}
  else for(const c of candidates){
    if(c.distance<=range&&(rejectedSnaps.get(c.key)??0)>=3&&Math.abs(aligned[c.axis]-c.value)<.001)aligned[c.axis]=raw[c.axis];
  }
  return aligned;
}
const sharedBox = new T.BoxGeometry(1, 1, 1);
const loader = new T.TextureLoader();
const spawn = new T.Mesh(new T.ConeGeometry(.32, .75, 5), new T.MeshBasicMaterial({ color: '#ffcd63' }));
scene.add(spawn);
const ghostBox = new T.Mesh(sharedBox, new T.MeshBasicMaterial({
  color: '#8ee7fc', opacity: .44, transparent: true, depthWrite: false,
}));
const midpointMarker=new T.Mesh(new T.SphereGeometry(.055,10,8),new T.MeshBasicMaterial({color:'#ffc85a',depthTest:false}));
midpointMarker.visible=false;midpointMarker.renderOrder=20;scene.add(midpointMarker);
const ghostMarker = new T.Mesh(spawn.geometry, new T.MeshBasicMaterial({
  color: '#ffe084', opacity: .65, transparent: true, depthWrite: false,
}));
ghostBox.visible = ghostMarker.visible = false;
scene.add(ghostBox, ghostMarker);

const raycaster = new T.Raycaster();
const worldUp = new T.Vector3(0, 1, 0);
const horizontalPlane = new T.Plane(worldUp, 0);
const normalMatrix = new T.Matrix3();
let selectionBox = null, renderRequested = false;

// L’éditeur ne redessine que si la vue ou le contenu change.
function queueRender() {
  if (renderRequested) return;
  renderRequested = true;
  requestAnimationFrame(() => {
    renderRequested = false;
    renderer.render(scene, camera);
    updateDebugStats();
  });
}

// Adapte le framebuffer et la projection à la taille de la vue 3D.
function resizeRenderer() {
  const width = screen.clientWidth || 1, height = screen.clientHeight || 1;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  queueRender();
}

// Adapte le plan aux pixels de l’écran, puis recalcule son échelle.
function resizePlan() {
  const width = Math.max(1, plan.clientWidth), height = Math.max(1, plan.clientHeight);
  if (width === plan.width && height === plan.height) return;
  plan.width = width;
  plan.height = height;
  scalePlan();
  paintPlan();
}

new ResizeObserver(resizeRenderer).observe(screen);
new ResizeObserver(resizePlan).observe(plan);
controls.addEventListener('change', queueRender);
controls.addEventListener('start', () => showGhost(null));

// Calcule les pixels par mètre pour conserver la carte entière dans le plan.
function scalePlan() {
  planRange.scale = Math.min(plan.width / planRange.width, plan.height / planRange.height);
}

// Convertit une position X/Z du monde en pixels du plan.
function transform(x, z) {
  return [
    plan.width / 2 + (x - planRange.cx) * planRange.scale,
    plan.height / 2 + (z - planRange.cz) * planRange.scale,
  ];
}

// Convertit la position du pointeur sur le plan en coordonnées du monde.
function toWorld(event) {
  const rect = plan.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) * plan.width / rect.width - plan.width / 2) / planRange.scale + planRange.cx,
    z: ((event.clientY - rect.top) * plan.height / rect.height - plan.height / 2) / planRange.scale + planRange.cz,
  };
}

// Peint l’emprise approximative d’une pièce avec son cap et son inclinaison.
function drawFootprint(piece, fill, stroke, lineWidth, opacity) {
  const [x, z] = transform(piece.x, piece.z);
  const pitch=T.MathUtils.degToRad(piece.pitch),roll=T.MathUtils.degToRad(piece.roll??0);
  const projectedWidth=Math.abs(Math.cos(roll))*piece.w+Math.abs(Math.sin(roll))*piece.h;
  const projectedDepth=Math.abs(Math.cos(pitch))*piece.d+Math.abs(Math.sin(pitch))*
    (Math.abs(Math.sin(roll))*piece.w+Math.abs(Math.cos(roll))*piece.h);
  context.save();
  context.translate(x, z);
  context.rotate(-T.MathUtils.degToRad(piece.yaw));
  const w=projectedWidth*planRange.scale,d=projectedDepth*planRange.scale;
  context.globalAlpha = opacity;
  context.fillStyle = fill;
  context.fillRect(-w / 2, -d / 2, w, d);
  context.globalAlpha = 1;
  context.strokeStyle = stroke;
  context.lineWidth = lineWidth;
  context.strokeRect(-w / 2, -d / 2, w, d);
  context.restore();
}

// Dessine le point de départ et son orientation dans le plan.
function drawMarker(point, isGhost) {
  const [x, z] = transform(point.x, point.z);
  context.save();
  context.translate(x, z);
  context.rotate(T.MathUtils.degToRad(-point.yaw));
  context.fillStyle = isGhost ? '#fff0bb' : '#ffd16e';
  context.strokeStyle = '#263740';
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(0, -8);
  context.lineTo(6, 5);
  context.lineTo(0, 3);
  context.lineTo(-6, 5);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
}

// Redessine la grille, les pièces, la sélection et l’aperçu de pose.
function paintPlan() {
  context.fillStyle = '#192e3a';
  context.fillRect(0, 0, plan.width, plan.height);
  context.strokeStyle = '#37505f';
  context.lineWidth = 1;
  const gridStep=planRange.scale<1?25:planRange.scale<4?10:planRange.scale<12?5:1;
  const limit=(map.worldSize??240)/2;
  for (let i = -Math.ceil(limit/gridStep)*gridStep; i <= limit; i += gridStep) {
    const [x, z] = transform(i, i);
    if (x >= 0 && x <= plan.width) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, plan.height);
      context.stroke();
    }
    if (z >= 0 && z <= plan.height) {
      context.beginPath();
      context.moveTo(0, z);
      context.lineTo(plan.width, z);
      context.stroke();
    }
  }

  const [edgeX,edgeZ]=transform(-limit,-limit);
  context.strokeStyle='#ffda9077';context.lineWidth=2;
  context.strokeRect(edgeX,edgeZ,limit*2*planRange.scale,limit*2*planRange.scale);
  const layers = map.pieces.map((piece, index) => ({ piece, index })).sort((a, b) => a.piece.y - b.piece.y);
  for (const { piece, index } of layers) {
    const color = piece.model?.parts[0]?.color ?? (piece.color === '#ffffff' ? materialColors[piece.material] : piece.color);
    drawFootprint(piece, color, index === selected ? '#ffe095' : '#a4bac7', index === selected ? 2 : 1, piece.solid ? .86 : .38);
  }
  drawMarker(map.spawn, false);
  if (ghost) {
    if (tool === 'spawn') drawMarker(ghost, true);
    else drawFootprint(ghost, '#8ee7fc', '#afefff', 2, .45);
  }
}

// Applique les mètres et les degrés de la carte au maillage Three.js.
function placeMesh(mesh, piece) {
  mesh.position.set(piece.x, piece.y, piece.z);
  if(piece.terrain&&mesh!==ghostBox)mesh.scale.setScalar(1);
  else mesh.scale.set(piece.w, piece.h, piece.d);
  mesh.rotation.set(T.MathUtils.degToRad(piece.pitch), T.MathUtils.degToRad(piece.yaw), T.MathUtils.degToRad(piece.roll??0), 'YXZ');
  mesh.updateMatrixWorld();
}

// Remplace le cadre jaune et rattache les poignées à la pièce active.
function updateSceneSelection() {
  if (selectionBox) {
    scene.remove(selectionBox);
    selectionBox.geometry.dispose();
    selectionBox.material.dispose();
  }
  const mesh = group.children[selected];
  selectionBox = mesh ? new T.BoxHelper(mesh, '#ffdf88') : null;
  if (selectionBox) scene.add(selectionBox);
  attachGizmo();
}

// Terrain vertices are baked into a heightfield. Translation and X/Z size
// editing preserve that representation; rotation is limited to box pieces.
function attachGizmo() {
  const mesh=group.children[selected],terrain=current()?.terrain;
  const active=transformModes.has(tool)&&Boolean(mesh)&&!(terrain&&tool==='rotate');
  gizmo.enabled=active;
  if(!active){
    gizmo.detach();
    if(terrain&&tool==='rotate')$('tool-help').textContent='Le terrain reste horizontal. Utilise Sculpter pour façonner sa pente.';
    return;
  }
  gizmo.setMode(tool);
  gizmo.setSpace(tool==='translate'?'world':'local');
  gizmo.setTranslationSnap(null);
  gizmo.showX=gizmo.showZ=true;
  gizmo.showY=!(terrain&&tool==='scale');
  gizmo.attach(mesh);
  $('tool-help').textContent=toolHelp[tool];
}

// Default scaling moves one face while preserving the opposite face.
// Ctrl temporarily fixes the centre and grows/shrinks symmetrically.
let ctrlScaleHeld=false;
function syncScaleAnchor(){
  if(tool!=='scale')return;
  const piece=current(),original=beforeTransform?.map.pieces[selected],mesh=gizmo.object;
  if(!piece||!original||!mesh)return;
  const next=resizedCenter(original,piece,ctrlScaleHeld);
  const limit=(map.worldSize??240)/2;
  piece.x=T.MathUtils.clamp(next.x,-limit,limit);
  piece.y=T.MathUtils.clamp(next.y,-256,256);
  piece.z=T.MathUtils.clamp(next.z,-limit,limit);
  mesh.position.set(piece.x,piece.y,piece.z);
  selectionBox?.update();
  for(const key of ['x','y','z'])$('p-'+key).value=piece[key].toFixed(2);
  paintPlan();queueRender();
}
function trackScaleControl(event){
  const wasHeld=ctrlScaleHeld;
  ctrlScaleHeld=event.ctrlKey;
  if(wasHeld!==ctrlScaleHeld&&gizmo.dragging)syncScaleAnchor();
}
for(const type of ['keydown','keyup'])window.addEventListener(type,trackScaleControl);
screen.addEventListener('pointermove',trackScaleControl,{capture:true});

gizmo.addEventListener('change',queueRender);
gizmo.addEventListener('mouseDown',()=>{
  const piece=current();
  heldSnap=null;
  if(piece)beforeTransform={map:structuredClone(map),selected};
  ctrlScaleHeld=Boolean(ctrlScaleHeld||window.event?.ctrlKey);
});
// Reflète la transformation de Three.js dans le modèle et l’inspecteur à chaque mouvement.
gizmo.addEventListener('objectChange',()=>{
  const piece=current(),mesh=gizmo.object,original=beforeTransform?.map.pieces[selected];
  if(!piece||!mesh||!original)return;
  const clamp=T.MathUtils.clamp;
  if(tool==='translate'){
    const axes=['x','y','z'].filter(axis=>(gizmo.axis??'XYZ').includes(axis.toUpperCase()));
    const next=alignTranslation(piece,{x:mesh.position.x,y:mesh.position.y,z:mesh.position.z},axes,altHeld);
    const limit=(map.worldSize??240)/2;
    piece.x=clamp(next.x,-limit,limit);
    piece.y=clamp(next.y,-256,256);
    piece.z=clamp(next.z,-limit,limit);
    mesh.position.set(piece.x,piece.y,piece.z);
  }else if(tool==='rotate'){
    piece.pitch=T.MathUtils.radToDeg(mesh.rotation.x);
    piece.yaw=T.MathUtils.radToDeg(mesh.rotation.y);
    piece.roll=T.MathUtils.radToDeg(mesh.rotation.z);
  }else{
    piece.w=clamp(mesh.scale.x*(piece.terrain?original.w:1),.05,maxObjectSize);
    piece.d=clamp(mesh.scale.z*(piece.terrain?original.d:1),.05,maxObjectSize);
    if(!piece.terrain)piece.h=clamp(mesh.scale.y,.05,256);
    mesh.scale.set(piece.terrain?piece.w/original.w:piece.w,piece.terrain?1:piece.h,piece.terrain?piece.d/original.d:piece.d);
    syncScaleAnchor();
  }
  mesh.updateMatrixWorld(true);
  selectionBox?.update();
  for(const key of ['x','y','z','pitch','yaw','roll','w','h','d'])$('p-'+key).value=Number(piece[key]??0).toFixed(2);
  paintPlan();
  queueRender();
});
// Commit one undo entry for the entire drag, then rebuild generated UVs and terrain.
gizmo.addEventListener('dragging-changed',({value})=>{
  controls.enabled=!value;
  if(value||!beforeTransform)return;
  const snapshot=beforeTransform;
  beforeTransform=null;
  if(JSON.stringify(snapshot.map.pieces[selected])===JSON.stringify(current()))return;
  if(undoStack.length>=35)undoStack.shift();
  undoStack.push(snapshot);
  map=parseMap(map);
  sync();
  notice('Transformation appliquée.');
});
screen.addEventListener('pointerup',()=>{if(!gizmo.dragging)controls.enabled=true;});
screen.addEventListener('pointercancel',()=>{if(gizmo.dragging)gizmo.pointerUp(null);controls.enabled=true;});

// Recrée les maillages éditables à partir du JSON et libère leurs ressources précédentes.
function rebuildScene() {
  gizmo.detach();
  for (const mesh of [...group.children]) {
    group.remove(mesh);
    if(mesh.geometry!==sharedBox)mesh.geometry.dispose();
    if(mesh.userData.pickProxy){
      mesh.userData.pickProxy.geometry.dispose();
      mesh.userData.pickProxy.material.dispose();
    }
    if(mesh.userData.vegetation)disposeVegetation(mesh.userData.vegetation);
    if(mesh.userData.ownsTexture)mesh.material.map?.dispose();
    disposeModelMaterial(mesh.material);
  }
  arenaBackdrop.visible=Boolean(map.arenaBase);
  const mappedAssets=new Set(map.pieces.map(piece=>piece.model?.assetId).filter(Boolean));
  arenaBackdrop.traverse(node=>{
    const assetId=node.userData.editorAssetId;
    if(assetId)node.visible=Boolean(map.arenaBase)&&!mappedAssets.has(assetId);
  });
  sun.visible=ambient.visible=!map.arenaBase;
  scene.fog=map.arenaBase?referenceScene.fog:null;
  scene.environment=map.arenaBase?referenceScene.environment:null;
  for (const piece of map.pieces) {
    if(piece.model) {
      const mesh=new T.Mesh(createModelUnitGeometry(piece.model),createModelMaterial(piece.model));
      mesh.castShadow=mesh.receiveShadow=true;
      // Complex models can contain gaps or thin/back-facing faces. This invisible
      // unit box makes the whole model's bounds reliably clickable in the editor.
      const pickProxy=new T.Mesh(new T.BoxGeometry(1,1,1),new T.MeshBasicMaterial({
        colorWrite:false,depthWrite:false,side:T.DoubleSide
      }));
      pickProxy.name='model-selection-volume';
      mesh.add(pickProxy);
      mesh.userData.pickProxy=pickProxy;
      mesh.userData.mapIndex=group.children.length;
      group.add(mesh);
      placeMesh(mesh,piece);
      continue;
    }
    const glass = [10, 11, 12].includes(piece.material);
    const material = new T.MeshLambertMaterial({
      color: new T.Color(materialColors[piece.material]).multiply(new T.Color(piece.color)),
      transparent: !piece.solid || glass,
      opacity: piece.solid ? (glass ? .55 : 1) : .40,
    });
    if(map.arenaBase&&!piece.texture){
      const original=previewArena.mapMaterial(piece.material,7);
      material.color.set(piece.color);
      material.map=original.map;
      material.opacity=piece.solid?original.opacity:.40;
      material.transparent=!piece.solid||original.transparent;
    }
    if (piece.texture) {
      material.map = loader.load(piece.texture, queueRender);
      material.map.colorSpace = T.SRGBColorSpace;
      material.map.wrapS = material.map.wrapT = T.RepeatWrapping;
      material.color.set(piece.color);
    }
    const geometry=piece.terrain?terrainGeometry(piece):
      piece.primitive&&piece.primitive!=='box'?decorPrimitiveGeometry(piece.primitive):
      (piece.texture||map.arenaBase)?tiledBox(piece.w,piece.h,piece.d).scale(1/piece.w,1/piece.h,1/piece.d):sharedBox;
    if(geometry!==sharedBox)transformUVs(geometry,piece);
    const mesh = new T.Mesh(geometry, material);
    mesh.userData.ownsTexture=Boolean(piece.texture);
    if(piece.terrain){
      const vegetation=terrainVegetation(piece);
      if(vegetation){mesh.add(vegetation);mesh.userData.vegetation=vegetation;}
    }
    group.add(mesh);
    placeMesh(mesh, piece);
  }
  spawn.position.set(map.spawn.x, map.spawn.y + .38, map.spawn.z);
  refreshDiagnostics();
  updateSceneSelection();
}

// Renvoie la pièce active dans le modèle éditable.
function current() { return map.pieces[selected]; }

// Annonce le résultat d’une action dans la zone de statut.
function notice(message) { $('editor-note').textContent = message; }

// Prend une photo du modèle avant une action pour Ctrl+Z.
function remember() {
  if (undoStack.length >= 35) undoStack.shift();
  undoStack.push({ map: structuredClone(map), selected });
  $('undo').disabled = false;
}

// Enregistre le brouillon local et signale les erreurs de stockage.
function pendingSave() {
  try {
    localStorage.setItem(draftKey, JSON.stringify(map));
    $('draft-status').textContent = 'Brouillon sauvegardé sur cet appareil';
  } catch {
    $('draft-status').textContent = 'Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.';
  }
}

// Recherche insensible aux accents et à la casse.
const searchName = name => name.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
// Filtre les pièces tout en conservant leurs index dans la carte.
function updatePieceList() {
  const query=searchName($('piece-search').value.trim());
  // Keep the original map index in each option so filtering never selects a different piece.
  const matches=[];
  map.pieces.forEach((piece,index)=>{
    const kind=piece.model?(piece.model.kind==='prop'?' · Objet saisissable':' · Structure'):'';
    if(searchName(piece.name+' '+kind).includes(query))matches.push(new Option(piece.name+kind,index,false,index===selected));
  });
  $('pieces').replaceChildren(...matches);
  $('pieces').value=String(selected);
  if(!matches.length)$('pieces').append(new Option('Aucune pièce trouvée','',false,false));
  if(!matches.length)$('pieces').options[0].disabled=true;
  $('count').textContent=query?matches.length+' sur '+map.pieces.length:map.pieces.length+' / '+maxPieces;
}

// Rafraîchit les champs compatibles avec la pièce sélectionnée.
function updateInspector() {
  updatePieceList();
  const piece = current();
  $('piece-inspector').hidden=!piece;
  $('selection-help').hidden=Boolean(piece);
  $('focus-piece').disabled=!piece;
  $('selection-title').textContent = piece
    ?piece.name+(piece.model?(piece.model.kind==='prop'?' · Objet saisissable':' · Structure'):'')
    :'Aucune pièce sélectionnée';
  const isGrabProp=piece?.model?.kind==='prop';
  $('model-object-controls').hidden=!isGrabProp;
  $('model-structure-note').hidden=!piece?.model||piece.model.kind!=='structure';
  if(isGrabProp){
    $('model-grabbable').checked=piece.model.properties?.grabbable!==false;
    $('model-frozen').checked=piece.model.properties?.frozen===true;
    $('model-collidable').checked=piece.model.properties?.collidable!==false;
    $('model-support-held').checked=piece.model.properties?.supportWhileHeld===true;
  }
  for (const key of fields) {
    const input = $('p-' + key);
    input.disabled = !piece;
    if (key === 'solid') input.checked = piece?.solid ?? false;
    else input.value = piece?.[key] ?? (key === 'color' ? '#ffffff' : '');
  }
  for (const id of ['rotate', 'duplicate', 'texture-file', 'surface', 'spawn-here']) $(id).disabled = !piece;
  $('delete').disabled = !piece || map.pieces.length === 1;
  $('delete').title=piece?.model
    ?'Retirer cet exemplaire de la carte (le modèle restera dans la bibliothèque)'
    :'Supprimer cette pièce de la carte';
  $('delete').firstChild.textContent=piece?.model?'Retirer ':'Supprimer ';
  $('texture-clear').disabled = !piece?.texture;
  $('texture-paint').disabled = !piece||Boolean(piece.model);
  const terrain=piece?.terrain;
  $('terrain-grassTexture-paint').disabled = !terrain;
  for(const key of uvFields){const input=$('p-'+key);input.disabled=!piece||Boolean(piece?.model);input.value=piece?.[key]??(key==='uvScale'?1:0);}
  $('uv-reset').disabled=!piece||Boolean(piece?.model);
  $('terrain-controls').hidden=!terrain;
  if(terrain){
    for(const key of terrainFields)$('terrain-'+key).value=terrain[key];
    for(const name of ['grass','shrub']){
      const select=$('terrain-'+name+'Model'),id=terrain[name+'Model']?.id??'';
      if(id&&![...select.options].some(option=>option.value===id))select.add(new Option(terrain[name+'Model'].name+' (carte)',id));
      select.value=id;
    }
    $('terrain-cell-size').textContent=(piece.w/terrain.detail).toFixed(2)+' × '+(piece.d/terrain.detail).toFixed(2)+' m';
    $('p-pitch').disabled=$('p-yaw').disabled=$('p-roll').disabled=true;
  }
  $('rotate').disabled=!piece||Boolean(terrain);
  $('texture-create').disabled=!piece;
  $('surface').value = '';
  $('undo').disabled = undoStack.length === 0;
  $('active-selection').textContent=piece?piece.name:'Aucune sélection';
  if(document.querySelector('#scene-sidebar').dataset.tab==='terrain'&&!terrain)window.setInspectorTab('object');
  document.querySelector('.inspector-tab[data-tab="terrain"]').disabled=!terrain;
}

// Réconcilie le modèle, la 3D, le plan, le formulaire et le brouillon.
function sync() {
  $('map-name').value = map.name;
  $('map-world-size').value=map.worldSize??240;
  updateInspector();
  for (const key of ['x', 'y', 'z', 'yaw']) $('spawn-' + key).value = map.spawn[key];
  rebuildScene();
  paintPlan();
  queueRender();
  pendingSave();
}

// Change la sélection sans reconstruire tous les maillages.
function choose(index) {
  if (selected === index) return;
  selected = index;
  heldSnap=null;rejectedSnaps.clear();
  updateInspector();
  updateSceneSelection();
  paintPlan();
  queueRender();
}

// Ajoute et sélectionne une pièce dans la limite du format de carte.
function addPiece(piece) {
  if (map.pieces.length >= maxPieces) return notice('Limite de pièces atteinte.');
  remember();
  map.pieces.push(piece);
  selected = map.pieces.length - 1;
  sync();
  notice(piece.name + ' ajouté à la map.');
}

// Retire la pièce active et garde une sélection valide.
function removePiece() {
  if (!current() || map.pieces.length === 1) return;
  const name = current().name;
  remember();
  map.pieces.splice(selected, 1);
  selected = Math.min(selected, map.pieces.length - 1);
  sync();
  notice(name + ' retiré de la map.');
}

// Crée une copie voisine avec les propriétés de la sélection.
function duplicatePiece() {
  const piece = current();
  if (!piece) return;
  const x = T.MathUtils.clamp(piece.x + piece.w + snapStep(), -120, 120);
  addPiece({ ...structuredClone(piece), name: (piece.name + ' bis').slice(0, 36), x });
}

// Applique le raccourci de formulaire pour pivoter de 45° sur Y.
function rotatePiece() {
  const piece = current();
  if (!piece||piece.terrain) return;
  remember();
  piece.yaw = (piece.yaw + 45) % 360;
  sync();
}

// Restaure la carte et la sélection de l’étape précédente.
function undo() {
  const last = undoStack.pop();
  if (!last) return;
  map = last.map;
  selected = last.selected;
  showGhost(null);
  sync();
  notice('Dernière modification annulée.');
}

// Synchronise le mode actif, les entrées, les poignées et l’aide affichée.
function updateToolHelp(){
  const tip=toolHelp[tool]??'';
  if(tool!=='model'||!selectedModel()){
    $('tool-help').textContent=tip;
    return;
  }
  const piece=modelPiece();
  const format=value=>new Intl.NumberFormat('fr-FR',{maximumFractionDigits:2}).format(value);
  $('tool-help').textContent='Dimensions initiales : '+[piece.w,piece.h,piece.d].map(format).join(' × ')+
    ' m (largeur × hauteur × profondeur). '+tip;
}
function setTool(next) {
  tool = next;
  controls.mouseButtons.LEFT=tool==='view'?T.MOUSE.ROTATE:null;
  attachGizmo();
  queueRender();
  for (const button of toolButtons) button.setAttribute('aria-pressed', String(button.dataset.tool === tool));
for (const canvas of [screen, plan]) {
    canvas.dataset.tool = tool;
    canvas.removeAttribute('data-hit');
  }
  updateToolHelp();
  attachGizmo();
  queueRender();
  showGhost(null);
}

// Cadre les pièces et le départ dans le plan et dans la caméra perspective.
function fitViews() {
  const bounds = new T.Box3().setFromObject(group);
  bounds.expandByPoint(spawn.position);
  const center = bounds.getCenter(new T.Vector3());
  const size = bounds.getSize(new T.Vector3());
  planRange = {
    cx: center.x,
    cz: center.z,
    width: Math.max(size.x+5,Math.min(map.worldSize??240,500)),
    height: Math.max(size.z+5,Math.min(map.worldSize??240,500)),
  };
  scalePlan();
  const gridScale = Math.max(1, Math.ceil(Math.max(size.x, size.z) / 40));
  grid.scale.setScalar(gridScale);
  grid.position.set(Math.round(center.x / gridScale) * gridScale, -.035, Math.round(center.z / gridScale) * gridScale);

  const direction = camera.position.clone().sub(controls.target).normalize();
  const right = new T.Vector3().crossVectors(worldUp, direction).normalize();
  const up = new T.Vector3().crossVectors(direction, right);
  const slopeY = Math.tan(T.MathUtils.degToRad(camera.fov / 2)) * .87;
  const slopeX = slopeY * camera.aspect;
  let distance = 6;
  for (const x of [bounds.min.x, bounds.max.x]) {
    for (const y of [bounds.min.y, bounds.max.y]) {
      for (const z of [bounds.min.z, bounds.max.z]) {
        const corner = new T.Vector3(x, y, z).sub(center);
        const framing = Math.max(Math.abs(corner.dot(right)) / slopeX, Math.abs(corner.dot(up)) / slopeY);
        distance = Math.max(distance, framing + corner.dot(direction));
      }
    }
  }
  distance = Math.min(distance, controls.maxDistance);
  controls.target.copy(center);
  camera.position.copy(center).addScaledVector(direction, distance);
  controls.update();
  camera.updateMatrixWorld();
  paintPlan();
  queueRender();
}

// Remplace la carte courante en conservant une entrée d’annulation.
function loadMap(next, message) {
  remember();
  map = next;
  heldSnap=null;rejectedSnaps.clear();
  selected = -1;
  $('piece-search').value='';
  setTool('move');
  sync();
  fitViews();
  notice(message);
}

// Renvoie le pas de grille commun à la pose et à la translation.
function snapStep() { return Number($('snap').value); }

// Aligne un déplacement au sol sur le pas et les limites du monde.
function snapCoordinate(value) {
  const step = snapStep();
  const limit=(map.worldSize??240)/2;
  return T.MathUtils.clamp(Math.round(value / step) * step, -limit, limit);
}

// Les deux vues produisent un rayon dans le même monde 3D pour placer et déplacer les pièces.
// Construit un rayon 3D ou vertical depuis la vue où le pointeur agit.
function setEventRay(canvas, event) {
  if (canvas === plan) {
    const point = toWorld(event);
    raycaster.set(new T.Vector3(point.x, 80, point.z), new T.Vector3(0, -1, 0));
  } else {
    const rect = screen.getBoundingClientRect();
    camera.updateMatrixWorld();
    raycaster.setFromCamera({
      x: (event.clientX - rect.left) / rect.width * 2 - 1,
      y: 1 - (event.clientY - rect.top) / rect.height * 2,
    }, camera);
  }
}

// Intersecte le rayon avec le plan horizontal du geste courant.
function rayPlane(height) {
  horizontalPlane.constant = -height;
  return raycaster.ray.intersectPlane(horizontalPlane, new T.Vector3());
}

// Renvoie le premier point touché sur les pièces ou le relief de fond.
function pieceRoot(object){
  let node=object;
  while(node&&node.parent!==group)node=node.parent;
  return node?.parent===group?node:null;
}
function pointUnderPointer(canvas, event) {
  setEventRay(canvas, event);
  const objects=map.arenaBase?[...group.children,previewHill]:group.children;
  const hits=raycaster.intersectObjects(objects,true);
  for(const hit of hits){
    if(hit.object===previewHill)return hit;
    const root=pieceRoot(hit.object);
    if(root)return {...hit,object:root};
  }
  return null;
}

// Cherche une surface solide sous le futur point d’apparition.
function spawnOnTop(x, z, yaw, selectedMesh = null) {
  raycaster.set(new T.Vector3(x, 80, z), new T.Vector3(0, -1, 0));
  const ground = selectedMesh ? raycaster.intersectObject(selectedMesh, false)[0]
    : raycaster.intersectObjects(map.arenaBase?[...group.children,previewHill]:group.children, false).find(hit => hit.object===previewHill||map.pieces[group.children.indexOf(hit.object)]?.solid);
  if (!ground || ground.point.y > 29.9) return null;
  return { x, y: Math.max(-10, ground.point.y + .08), z, yaw };
}

// Calcule une pose valide selon l’outil, le rayon et la normale touchée.
function placementAt(canvas, event) {
  edgeMidpoint=null;midpointSnapped=false;
  const hit = pointUnderPointer(canvas, event);
  if (tool === 'spawn') {
    if (!hit) return null;
    const x = snapCoordinate(hit.point.x), z = snapCoordinate(hit.point.z);
    return spawnOnTop(x, z, map.spawn.yaw);
  }
  if(tool==='terrain'){
    const point=hit?.point??rayPlane(0);
    if(!point)return null;
    return {...shapes.terrain,terrain:normalizeTerrain(shapes.terrain.terrain),x:snapCoordinate(point.x),y:point.y,z:snapCoordinate(point.z)};
  }
  if(tool==='sculpt')return null;
  if(tool==='model'&&!selectedModel())return null;
  const point = hit?.point ?? rayPlane(0);
  if (!point) return null;
  const normal = hit ? hit.face.normal.clone().applyNormalMatrix(normalMatrix.getNormalMatrix(hit.object.matrixWorld)) : worldUp;
  const midpoint=hit&&nearestEdgeMidpoint(hit);
  const range=magnetRange();
  if(midpoint&&midpoint.distance<=range*2){
    edgeMidpoint=midpoint.point;
    midpointSnapped=$('magnet').checked&&!event.altKey&&$('magnet-mode').value==='edge'&&midpoint.point.distanceTo(point)<=range;
  }
  const step=midpointSnapped||event.altKey?.000001:snapStep();
  const chosen=tool==='model'?modelPiece():tool==='preset'?presetPiece():shapes[tool];
  const placed=snapPlacement(midpointSnapped?edgeMidpoint:point, normal, chosen, step);
  return placed&&Math.max(Math.abs(placed.x),Math.abs(placed.z))<=map.worldSize/2?placed:null;
}

// Locate the closest edge of the box face hit by the placement ray, in world metres.
function nearestEdgeMidpoint(hit){
  const mesh=hit.object, piece=map.pieces[group.children.indexOf(mesh)];
  if(!piece||piece.terrain)return null;
  const local=mesh.worldToLocal(hit.point.clone());
  const axes=['x','y','z'], tangent=axes.filter(axis=>Math.abs(hit.face.normal[axis])<.5);
  if(tangent.length!==2)return null;
  let best=null;
  for(const axis of tangent)for(const side of [-.5,.5]){
    const edge=local.clone();edge[axis]=side;
    const distance=mesh.localToWorld(edge.clone()).distanceTo(hit.point);
    edge[tangent.find(key=>key!==axis)]=0;
    if(!best||distance<best.distance)best={distance,point:mesh.localToWorld(edge)};
  }
  return best;
}

// Actualise l’aperçu temporaire sans écrire dans la carte.
function showGhost(preview) {
  if (!preview && !ghost) return;
  ghost = preview;
  midpointMarker.visible=Boolean(ghost&&edgeMidpoint);
  if(midpointMarker.visible)midpointMarker.position.copy(edgeMidpoint);
  ghostMarker.visible = Boolean(ghost && tool === 'spawn');
  ghostBox.visible = Boolean(ghost && tool !== 'spawn');
  if (ghostMarker.visible) ghostMarker.position.set(ghost.x, ghost.y + .38, ghost.z);
  if (ghostBox.visible) placeMesh(ghostBox, ghost);
  paintPlan();
  queueRender();
}

// Applique la pose calculée au clic, puis met à jour les vues.
function commitPlacement(canvas, event) {
  const placement = placementAt(canvas, event);
  if (!placement) {
    notice(tool === 'spawn' ? 'Choisis une surface solide pour placer le départ.' : 'Choisis un point dans la zone de construction.');
    return;
  }
  if (tool === 'spawn') {
    remember();
    map.spawn = placement;
    setTool('move');
    sync();
    notice('Point de départ déplacé.');
  } else {
    const placingModel=tool==='model';
    showGhost(null);
    addPiece(placement);
    // Place once, then return to selection so the new object can immediately
    // be moved, rotated, resized, or edited without accidentally duplicating it.
    if(placingModel){
      setTool('move');
      notice(placement.name+' placé · sélectionné. Tu peux maintenant le déplacer ou le modifier.');
    }
  }
}

// Répartit le pointeur entre caméra, poignées, sélection, pinceau et création.
function beginGesture(canvas, event) {
  if (tool==='view'||event.button !== 0 || !event.isPrimary || gesture||gizmo.dragging) return;
  if(transformModes.has(tool)){
    if(canvas===screen&&gizmo.enabled){
      const rect=screen.getBoundingClientRect();
      gizmo.pointerHover({x:(event.clientX-rect.left)/rect.width*2-1,y:1-(event.clientY-rect.top)/rect.height*2,button:0});
      if(gizmo.axis){controls.enabled=false;return;}
    }
    event.stopImmediatePropagation();
    const hit=pointUnderPointer(canvas,event);
    choose(hit?group.children.indexOf(hit.object):-1);
    return;
  }
  event.stopImmediatePropagation();
  canvas.focus({ preventScroll: true });
  canvas.setPointerCapture(event.pointerId);
  const start = { canvas, id: event.pointerId, clientX: event.clientX, clientY: event.clientY, tool };
  gesture = start;
  heldSnap=null;
  if(tool==='sculpt'){applyBrush(canvas,event);return;}
  if (tool !== 'move') return;

  const hit = pointUnderPointer(canvas, event);
  choose(hit ? group.children.indexOf(hit.object) : -1);
  const piece = current();
  if (!hit||!piece) return;
  start.height = hit.point.y;
  start.dx = hit.point.x - piece.x;
  start.dz = hit.point.z - piece.z;
}

// Met à jour un aperçu, un déplacement au sol ou les passages du pinceau.
function moveGesture(canvas, event) {
  if(tool==='view'||transformModes.has(tool))return;
  if (!gesture) {
    if (tool === 'move') canvas.toggleAttribute('data-hit', Boolean(pointUnderPointer(canvas, event)));
    else showGhost(placementAt(canvas, event));
    return;
  }
  if(tool==='sculpt'&&gesture.id===event.pointerId&&gesture.canvas===canvas){
    const distance=Math.hypot(event.clientX-gesture.clientX,event.clientY-gesture.clientY);
    if(distance>=7){applyBrush(canvas,event);gesture.clientX=event.clientX;gesture.clientY=event.clientY;}
    return;
  }
  if (gesture.id !== event.pointerId || gesture.canvas !== canvas || gesture.height === undefined || !current()) return;
  const moved = Math.hypot(event.clientX - gesture.clientX, event.clientY - gesture.clientY);
  if (moved < 4 && !gesture.recorded) return;
  setEventRay(canvas, event);
  const point = rayPlane(gesture.height);
  if (!point) return;
  const piece = current();
  const next=alignTranslation(piece,{x:point.x-gesture.dx,y:piece.y,z:point.z-gesture.dz},['x','z'],event.altKey);
  const limit=(map.worldSize??240)/2;
  const x=T.MathUtils.clamp(next.x,-limit,limit),z=T.MathUtils.clamp(next.z,-limit,limit);
  if (x === piece.x && z === piece.z) return;
  if (!gesture.recorded) {
    remember();
    gesture.recorded = true;
    canvas.toggleAttribute('data-dragging', true);
  }
  piece.x = x;
  piece.z = z;
  placeMesh(group.children[selected], piece);
  selectionBox?.update();
  $('p-x').value = x;
  $('p-z').value = z;
  paintPlan();
  queueRender();
}

// Termine la capture du pointeur et valide le geste en une action.
function endGesture(canvas, event, commit) {
  if (!gesture || gesture.canvas !== canvas || gesture.id !== event.pointerId) return;
  const finished = gesture;
  gesture = null;
  if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  canvas.removeAttribute('data-dragging');
  if(finished.tool==='sculpt'){
    if(finished.recorded){sync();notice('Relief modifié.');}
    return;
  }
  if (finished.recorded) {
    pendingSave();
    notice(current().name + ' déplacé.');
  }
  if (commit && tool === finished.tool && tool !== 'move') {
    const moved = Math.hypot(event.clientX - finished.clientX, event.clientY - finished.clientY);
    if (moved < 6) commitPlacement(canvas, event);
  }
}

// Pan and zoom the plan independently of the perspective view.
let planPan=null,spaceHeld=false,rightStart=null;
document.addEventListener('keydown',event=>{
  if(event.code==='Space'&&!event.target.closest?.('input,select,textarea,button'))spaceHeld=true;
});
document.addEventListener('keyup',event=>{if(event.code==='Space')spaceHeld=false;});
window.addEventListener('blur',()=>{planPan=null;spaceHeld=false;});
plan.addEventListener('pointerdown',event=>{
  if(event.button!==1&&!(spaceHeld&&event.button===0))return;
  event.preventDefault();event.stopImmediatePropagation();
  planPan={id:event.pointerId,x:event.clientX,y:event.clientY};
  plan.setPointerCapture(event.pointerId);
  plan.style.cursor='grabbing';
},{capture:true});
plan.addEventListener('pointermove',event=>{
  if(!planPan||planPan.id!==event.pointerId)return;
  event.stopImmediatePropagation();
  planRange.cx-=(event.clientX-planPan.x)/planRange.scale;
  planRange.cz-=(event.clientY-planPan.y)/planRange.scale;
  planPan.x=event.clientX;planPan.y=event.clientY;
  paintPlan();
},{capture:true});
function endPlanPan(event){
  if(!planPan||planPan.id!==event.pointerId)return;
  planPan=null;plan.style.cursor='';
  if(plan.hasPointerCapture(event.pointerId))plan.releasePointerCapture(event.pointerId);
  event.stopImmediatePropagation();
}
plan.addEventListener('pointerup',endPlanPan,{capture:true});
plan.addEventListener('pointercancel',endPlanPan,{capture:true});
function zoomPlan(factor,event){
  const rect=plan.getBoundingClientRect();
  const x=event?.clientX??rect.left+rect.width/2,z=event?.clientY??rect.top+rect.height/2;
  const before=toWorld({clientX:x,clientY:z});
  const nextWidth=T.MathUtils.clamp(planRange.width/factor,.75,4096);
  const ratio=nextWidth/planRange.width;
  planRange.width=nextWidth;planRange.height*=ratio;scalePlan();
  const after=toWorld({clientX:x,clientY:z});
  planRange.cx+=before.x-after.x;planRange.cz+=before.z-after.z;
  paintPlan();
}
plan.addEventListener('wheel',event=>{
  event.preventDefault();
  zoomPlan(Math.exp(-Math.sign(event.deltaY)*.18),event);
},{passive:false});
$('plan-zoom-in').onclick=()=>zoomPlan(1.25);
$('plan-zoom-out').onclick=()=>zoomPlan(.8);
$('plan-fit').onclick=fitViews;

// Context actions apply to the object under the mouse, not a stale selection.
const quickMenu=$('context-actions');
let dismissRightContextMenu=false;
function closeQuickMenu(){quickMenu.hidden=true;}
for(const canvas of [screen,plan]){
  canvas.addEventListener('pointerdown',event=>{
    if(event.button===2)rightStart={canvas,x:event.clientX,y:event.clientY};
    else closeQuickMenu();
  });
  canvas.addEventListener('contextmenu',event=>{
    event.preventDefault();
    // A second right-click outside should dismiss, not immediately reopen.
    if(dismissRightContextMenu){dismissRightContextMenu=false;return;}
    if(rightStart?.canvas!==canvas||Math.hypot(event.clientX-rightStart.x,event.clientY-rightStart.y)>6)return;
    const hit=pointUnderPointer(canvas,event);
    const index=hit?group.children.indexOf(hit.object):-1;
    if(index<0){closeQuickMenu();return;}
    choose(index);
    $('context-title').textContent=current()?.name??'Pièce';
    quickMenu.querySelector('[data-context-action="delete"]').textContent=
      current()?.model?'Retirer de la carte':'Supprimer';
    quickMenu.hidden=false;
    const width=195,height=285;
    quickMenu.style.left=Math.max(4,Math.min(event.clientX,innerWidth-width-6))+'px';
    quickMenu.style.top=Math.max(4,Math.min(event.clientY,innerHeight-height-6))+'px';
  });
}
// Dismiss on the very first mouse press anywhere outside, including right
// clicks on menus or a different part of the 3D view.
document.addEventListener('pointerdown',event=>{
  if(quickMenu.hidden||quickMenu.contains(event.target))return;
  dismissRightContextMenu=event.button===2;
  closeQuickMenu();
},{capture:true});
document.addEventListener('contextmenu',event=>{
  if(dismissRightContextMenu&&event.target!==screen&&event.target!==plan){
    dismissRightContextMenu=false;
    event.preventDefault();
  }
  if(!quickMenu.hidden&&!quickMenu.contains(event.target)&&event.target!==screen&&event.target!==plan)
    closeQuickMenu();
},{capture:true});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeQuickMenu();});
for(const button of quickMenu.querySelectorAll('[data-context-action]'))button.onclick=()=>{
  const action=button.dataset.contextAction;closeQuickMenu();
  if(action==='duplicate')duplicatePiece();
  else if(action==='delete')removePiece();
  else if(action==='focus')$('focus-piece').click();
  else if(action==='select')setTool('move');
  else setTool(action);
};


for (const canvas of [screen, plan]) {
  canvas.addEventListener('pointerdown', event => beginGesture(canvas, event), { capture: true });
  canvas.addEventListener('pointermove', event => moveGesture(canvas, event));
  canvas.addEventListener('pointerup', event => endGesture(canvas, event, true));
  canvas.addEventListener('pointercancel', event => endGesture(canvas, event, false));
  canvas.addEventListener('lostpointercapture', event => {
    if (!canvas.hasPointerCapture(event.pointerId)) endGesture(canvas, event, false);
  });
  canvas.addEventListener('pointerleave', () => { if (!gesture) showGhost(null); });
}

$('p-material').append(...mapMaterials.map((name, index) => new Option(name, index)));
for(const key of uvFields){
  $('p-'+key).addEventListener('change',event=>{
    const piece=current();if(!piece||piece.model)return;
    remember();piece[key]=Number(event.target.value);
    map=parseMap(map);sync();
  });
}
$('uv-reset').onclick=()=>{
  const piece=current();if(!piece||piece.model)return;
  remember();Object.assign(piece,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0});
  map=parseMap(map);sync();
};
const modelPropertyFields={
  grabbable:'model-grabbable',frozen:'model-frozen',
  collidable:'model-collidable',supportWhileHeld:'model-support-held'
};
for(const [key,id] of Object.entries(modelPropertyFields)){
  $(id).addEventListener('change',event=>{
    const piece=current();
    if(!piece?.model||piece.model.kind!=='prop')return;
    remember();
    piece.model.properties[key]=event.target.checked;
    if(key==='collidable')piece.solid=event.target.checked;
    map=parseMap(map);sync();
    const messages={
      grabbable:event.target.checked?'Objet saisissable par le joueur.':'Prise en main désactivée.',
      frozen:event.target.checked?'Objet figé au départ.':'Objet libre au départ.',
      collidable:event.target.checked?'Collision de l’objet activée.':'Collision de l’objet désactivée.',
      supportWhileHeld:event.target.checked?'L’objet peut servir d’appui pendant la prise.':'Appui pendant la prise désactivé.'
    };
    notice(messages[key]);
  });
}
for (const key of fields) {
  $('p-' + key).addEventListener('change', event => {
    const piece = current();
    if (!piece) return;
    remember();
    const input = event.target;
    if (key === 'solid') {
      piece[key] = input.checked;
      if(piece.model)piece.model.properties.collidable=input.checked;
    }else piece[key] = ['name', 'color'].includes(key) ? input.value : Number(input.value);
    map = parseMap(map);
    sync();
  });
}

$('map-world-size').onchange=event=>{
  remember();
  map.worldSize=T.MathUtils.clamp(Number(event.target.value)||240,24,2048);
  map=parseMap(map);sync();fitViews();
  notice('Zone de construction : '+map.worldSize+' × '+map.worldSize+' m.');
};
$('map-name').onchange = event => {
  remember();
  map.name = event.target.value;
  map = parseMap(map);
  sync();
};
$('piece-search').addEventListener('input',updatePieceList);
$('pieces').onchange = event => {if(event.target.value!=='')choose(Number(event.target.value));};
$('focus-piece').onclick=()=>{
  const mesh=group.children[selected];
  if(!mesh)return;
  const sphere=new T.Box3().setFromObject(mesh).getBoundingSphere(new T.Sphere());
  const direction=camera.position.clone().sub(controls.target).normalize();
  const halfFov=Math.atan(Math.tan(T.MathUtils.degToRad(camera.fov/2))*Math.min(camera.aspect,1));
  const distance=Math.max(1.5,sphere.radius/Math.sin(halfFov)*1.15);
  controls.target.copy(sphere.center);
  camera.position.copy(sphere.center).addScaledVector(direction,distance);
  controls.update();
  queueRender();
};
for (const key of ['x', 'y', 'z', 'yaw']) {
  $('spawn-' + key).onchange = event => {
    remember();
    map.spawn[key] = Number(event.target.value);
    map = parseMap(map);
    sync();
  };
}
$('spawn-here').onclick = () => {
  const piece = current();
  if (!piece) return;
  const point = piece.solid && spawnOnTop(piece.x, piece.z, piece.yaw, group.children[selected]);
  if (!point) return notice('Choisis une pièce solide pour placer le départ.');
  remember();
  map.spawn = point;
  sync();
  notice('Départ placé au-dessus de la pièce.');
};

for (const button of toolButtons) button.onclick = () => setTool(button.dataset.tool);
$('duplicate').onclick = duplicatePiece;
$('delete').onclick = removePiece;
$('rotate').onclick = rotatePiece;
$('undo').onclick = undo;
$('zoom-fit').onclick = fitViews;
$('snap').onchange = () => showGhost(null);
$('new-example').onclick = () => loadMap(defaultMap(), 'Arène de départ ouverte.');
$('blank-map').onclick = () => {
  const size=T.MathUtils.clamp(Number($('map-world-size').value)||240,24,2048);
  loadMap({
    format:'gorilla-lab-map',version:1,name:'Ma nouvelle map',worldSize:size,
    spawn:{x:0,y:.025,z:3,yaw:0},
    pieces:[makePiece({name:'Sol',y:-.25,w:Math.min(size,maxObjectSize),d:Math.min(size,maxObjectSize)})],
  },'Nouvelle carte : '+size+' × '+size+' m. Tu peux sélectionner et modeler le sol.');
};
$('surface').onchange = event => {
  const preset = surfacePresets[event.target.value];
  const piece = current();
  if (!preset || !piece) return;
  remember();
  Object.assign(piece, preset);
  sync();
};
$('texture-file').onchange = async event => {
  const file = event.target.files[0], piece = current();
  if (!file || !piece) return;
  try {
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw Error('Choisis un PNG, JPG ou WebP.');
    const bitmap = await createImageBitmap(file), canvas = document.createElement('canvas');
    const factor = Math.min(1, 768 / Math.max(bitmap.width, bitmap.height));
    canvas.width = Math.max(1, Math.round(bitmap.width * factor));
    canvas.height = Math.max(1, Math.round(bitmap.height * factor));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const texture = canvas.toDataURL('image/webp', .82);
    if (texture.length > 1_000_000) throw Error('Texture trop lourde pour une map.');
    if (!map.pieces.includes(piece)) return notice('Sélectionne à nouveau la pièce et son image.');
    remember();
    piece.texture = texture;
    sync();
    notice('Texture intégrée à ' + canvas.width + ' × ' + canvas.height + '.');
  } catch (error) {
    notice(error.message);
  } finally {
    event.target.value = '';
  }
};
$('texture-paint').onclick=()=>{
  const piece=current();
  if(!piece||piece.model)return notice('Peins les pièces d’un modèle depuis GORILLA / FOUNDRY.');
  openTextureStudio({
    name:piece.name||'Élément du décor',initial:piece.texture,
    tint:piece.color&&piece.color!=='#ffffff'?piece.color:'#75838a',
    maxDataBytes:850000,
    onApply:async data=>{
      if(!map.pieces.includes(piece))throw Error('La pièce sélectionnée a changé ou été supprimée.');
      remember();piece.texture=data;
      map=parseMap(map);sync();notice('Texture peinte appliquée. Export JSON pour la conserver dans la carte.');
    }
  });
};
$('terrain-grassTexture-paint').onclick=()=>{
  const piece=current();
  if(!piece?.terrain)return;
  openTextureStudio({
    name:'Herbe / '+piece.name,initial:piece.terrain.grassTexture,
    tint:'#63814e',maxDataBytes:450000,
    onApply:async data=>{
      if(!map.pieces.includes(piece))throw Error('Terrain supprimé avant application.');
      remember();piece.terrain.grassTexture=data;
      map=parseMap(map);sync();notice('Texture d’herbe peinte et appliquée.');
    }
  });
};
$('texture-clear').onclick = () => {
  if (!current()?.texture) return;
  remember();
  current().texture = null;
  sync();
};
$('import-map').onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    loadMap(parseMap(await file.text()), 'Map chargée.');
  } catch (error) {
    notice(error.message);
  } finally {
    event.target.value = '';
  }
};
$('export-map').onclick = () => {
  try {
    downloadMap(map);
    notice('Map JSON exportée.');
  } catch (error) {
    notice(error.message);
  }
};
$('test-map').onclick = () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(parseMap(map)));
    location.href = './?custom=1';
  } catch {
    notice('Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.');
  }
};

const terrainFields=['detail','seed','amplitude','frequency','octaves','roughness','ridge','edgeFade','grass','shrub','grassSize','shrubSize'];
for(const name of ['grass','shrub']){
  $('terrain-'+name+'Model').addEventListener('change',event=>{
    const piece=current();if(!piece?.terrain)return;
    const model=modelLibrary.find(m=>m.id===event.target.value)??(piece.terrain[name+'Model']?.id===event.target.value?piece.terrain[name+'Model']:null);
    remember();piece.terrain[name+'Model']=model?structuredClone(model):null;
    map=parseMap(map);sync();notice('Végétation personnalisée mise à jour.');
  });
}
$('terrain-grassTexture-file').onchange=async event=>{
  const file=event.target.files?.[0],piece=current();
  event.target.value='';if(!file||!piece?.terrain)return;
  try{
    if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw Error('Format PNG, JPG ou WebP uniquement.');
    const bitmap=await createImageBitmap(file),canvas=document.createElement('canvas');
    const scale=Math.min(1,512/Math.max(bitmap.width,bitmap.height));
    canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
    canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
    const texture=canvas.toDataURL('image/webp',.76);
    if(texture.length>=500000)throw Error('Texture de végétation trop volumineuse (maximum 500 Ko).');
    if(!map.pieces.includes(piece))return;
    remember();piece.terrain.grassTexture=texture;
    sync();notice('Texture d’herbe importée.');
  }catch(error){notice(error.message);}
};
$('terrain-grassTexture-clear').onclick=()=>{
  if(!current()?.terrain)return;
  remember();current().terrain.grassTexture=null;
  sync();
};
for(const key of terrainFields)$('terrain-'+key).onchange=event=>{
  const piece=current();if(!piece?.terrain)return;
  remember();
  piece.terrain=key==='detail'?resizeTerrain(piece.terrain,Number(event.target.value)):
    normalizeTerrain({...piece.terrain,[key]:Number(event.target.value)});
  sync();
};
$('terrain-reset').onclick=()=>{
  if(!current()?.terrain)return;
  remember();current().terrain.heights=null;sync();
};
// Le relief est la donnée de référence. Le pinceau l’édite puis reconstruit la géométrie visible.
// Modifie le terrain via terrain-edit.js et actualise le maillage de prévisualisation.
function applyBrush(canvas,event){
  setEventRay(canvas,event);
  const hit=raycaster.intersectObjects(group.children,false).find(item=>map.pieces[group.children.indexOf(item.object)]?.terrain);
  const index=hit?group.children.indexOf(hit.object):-1;
  const piece=map.pieces[index];
  if(!piece?.terrain)return;
  if(!gesture.recorded){
    remember();gesture.recorded=true;gesture.flattenY=hit.point.y;
    choose(index);$('terrain-controls').open=true;
  }
  if(index!==selected)return;
  const brush={mode:$('terrain-brush').value,radius:Number($('brush-radius').value),strength:Number($('brush-strength').value),target:gesture.flattenY};
  if(!sculptTerrain(piece,hit.point.x,hit.point.z,brush))return;
  const mesh=group.children[index];
  mesh.geometry.dispose();mesh.geometry=terrainGeometry(piece);
  selectionBox?.update();paintPlan();queueRender();
}
$('texture-style').replaceChildren(...texturePresets.map((label,index)=>new Option(label,index)));
$('texture-create').onclick=()=>{
  const piece=current();if(!piece)return;
  const canvas=seamlessTexture(Number($('texture-style').value),$('texture-tint').value);
  remember();piece.texture=canvas.toDataURL('image/webp',.85);sync();
  notice('Texture répétable 512 × 512 intégrée.');
};

$('view-top').onclick=()=>{
  const target=controls.target;
  const distance=Math.max(10,camera.position.distanceTo(target));
  camera.position.copy(target).add(new T.Vector3(0,distance,.001));
  controls.update();queueRender();
};
$('view-perspective').onclick=()=>{
  camera.position.copy(controls.target).add(new T.Vector3(16,15,24));
  fitViews();
};
$('view-spawn').onclick=()=>{
  // main.js computes the default eye height as .43 + 5 × .088 metres.
  const {x,y,z,yaw}=map.spawn;
  const direction=new T.Vector3(0,0,-1).applyAxisAngle(worldUp,T.MathUtils.degToRad(yaw));
  camera.position.set(x,y+.87,z);
  controls.target.copy(camera.position).addScaledVector(direction,5);
  camera.lookAt(controls.target);
  queueRender();
};
const toolKeys = { v: 'move', c: 'view', g: 'translate', r: 'rotate', s: 'scale', '1': 'block', '2': 'ramp', '3': 'wall', '4': 'spawn', escape: 'move' };
document.addEventListener('keydown', event => {
  if (event.target.closest?.('input, select, textarea, [contenteditable]') || gesture||gizmo.dragging) return;
  const key = event.key.toLowerCase();
  if (event.ctrlKey || event.metaKey) {
    if (key === 'z') undo();
    else if (key === 'd') duplicatePiece();
    else return;
  } else if (event.altKey) return;
  else if (toolKeys[key]) setTool(toolKeys[key]);
  else if (key === 'f') fitViews();
  else if (key === 'delete') removePiece();
  else return;
  event.preventDefault();
});

const diagnosticBoxes=new T.Group();scene.add(diagnosticBoxes);
function updateDebugStats(){
  if(!$('debug-stats'))return;
  const tris=renderer.info.render.triangles;
  const count=map?.pieces?.length??0;
  $('debug-stats').textContent=count+' éléments · '+tris.toLocaleString('fr-FR')+' triangles au rendu · espace '+(map?.worldSize??240)+' m';
}
function refreshDiagnostics(){
  for(const box of [...diagnosticBoxes.children]){diagnosticBoxes.remove(box);box.geometry.dispose();box.material.dispose();}
  grid.visible=$('debug-grid').checked;
  for(const mesh of group.children){
    if(mesh.material)for(const mat of Array.isArray(mesh.material)?mesh.material:[mesh.material])mat.wireframe=$('debug-wire').checked;
    if($('debug-hitboxes').checked){
      diagnosticBoxes.add(new T.BoxHelper(mesh,'#fa9945'));
    }
  }
  queueRender();
}
for(const id of ['debug-grid','debug-wire','debug-hitboxes'])$(id).onchange=refreshDiagnostics;
$('debug-coords').onchange=()=>{if(!$('debug-coords').checked)updateDebugStats();};
for(const canvas of [screen,plan])canvas.addEventListener('pointermove',event=>{
  if(!$('debug-coords').checked||gesture||planPan)return;
  const hit=pointUnderPointer(canvas,event);
  if(!hit)return;
  const point=hit.point;
  $('debug-stats').textContent='X '+point.x.toFixed(2)+' · Y '+point.y.toFixed(2)+' · Z '+point.z.toFixed(2)+' m · '+map.pieces.length+' éléments';
});
try {
  const draft = localStorage.getItem(draftKey);
  if (draft) {
    const saved=parseMap(draft);
    // Previously just opening the editor automatically saved the demo as a draft.
    if(JSON.stringify(saved)!==JSON.stringify(exampleMap()))map=saved;
  }
} catch {}
setTool('move');
sync();
resizeRenderer();
resizePlan();
fitViews();
applyLayout();
if(requestedModel){
  const selectedFromFoundry=modelLibrary.find(model=>model.id===requestedModel);
  if(selectedFromFoundry){
    $('place-model').click(); // tool + library popup: discoverable handoff
    notice('« '+selectedFromFoundry.name+' » est prêt à être placé. Clique dans la vue 3D ou sur le plan.');
  }else{
    notice('Modèle introuvable dans ce navigateur. Enregistre-le dans l’atelier des modèles, puis réessaie.');
  }
}
