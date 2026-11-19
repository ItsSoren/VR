
import * as T from 'three';
import {shouldKeepArenaAsset} from './arena-map-pieces.js';
import {tiledBox,transformUVs,decorPrimitiveGeometry,rampGeometry} from './texture-geometry.js';
import {terrainGeometry,terrainCollider,terrainVegetation,terrainInstanceBoxes,disposeVegetation,sculptTerrain,normalizeTerrain,resizeTerrain} from './terrain-edit.js';
import {boxCollider,colliderFor} from './physics.js';
import {createModelUnitGeometry,createModelMaterial,modelCollisionZones,modelCollisionGeometry,disposeModelMaterial} from './model-pack.js';
import {mapCode} from './cloud-link.js';
import {parseMap,makePiece,snapPlacement,maxPieces,maxMapBytes,storageKey,downloadMap} from './map-format.js';

export function connectMaps({scene,arena,boot,onReset,onVisual,getLevel,defaultObjects}){
  const builtBoxes=arena.boxes.slice();
  const replaceableMeshes=new Set(builtBoxes.filter(box=>box.half&&box.mesh?.isObject3D).map(box=>box.mesh));
  const group=new T.Group();scene.add(group);
  const meshRows=[],mirrorRows=[],history=[],triggerRows=[];
  let insideTriggers=new Set();
  const loader=new T.TextureLoader(), textures=new Map();
  let loadRequest=0;
  let map=null, signature='', selection=-1,moving=-1,status='', lastGhostKey='';
  const slab=new T.BoxGeometry(1,1,1),ramp=rampGeometry();
  const ghost=new T.Mesh(slab,new T.MeshBasicMaterial({color:'#8be4b9',wireframe:true,transparent:true,opacity:.8,depthWrite:false}));
  ghost.visible=false;scene.add(ghost);
  const trace=new T.Raycaster(), rotatedNormal=new T.Vector3(), facing=new T.Vector3();
  const statusNode=document.querySelector('#map-note');
  function inform(message){status=message;statusNode.textContent=message;}
  function memo(){if(history.length>=20)history.shift();history.push(JSON.stringify(map));}
  // Une source commune partage sa texture entre les pièces, y compris pendant leur reconstruction.
  function acquireTexture(source,material){
    let entry=textures.get(source);
    if(!entry){
      entry={materials:new Set(),texture:null,failed:false};
      textures.set(source,entry);
      const reject=message=>{
        if(textures.get(source)!==entry||entry.failed)return;
        entry.failed=true;
        for(const user of entry.materials){user.map=null;user.needsUpdate=true;}
        entry.texture?.dispose();
        if(message)inform(message);
      };
      const texture=loader.load(source,image=>{
        if(image.image.width>2048||image.image.height>2048)reject('Une texture a été ignorée : maximum 2048 px.');
      },undefined,()=>reject());
      entry.texture=texture;
      texture.colorSpace=T.SRGBColorSpace;
      texture.wrapS=texture.wrapT=T.RepeatWrapping;
    }
    entry.materials.add(material);
    material.map=entry.failed?null:entry.texture;
    return entry;
  }
  function pruneTextures(){
    for(const [source,entry] of textures){
      if(entry.materials.size)continue;
      textures.delete(source);
      if(!entry.failed)entry.texture.dispose();
    }
  }
  function card(model){
    const base=arena.mapMaterial(model.material,getLevel());
    if(!model.texture&&model.color==='#ffffff')return {material:base,custom:false};
    const material=base.clone();
    material.onBeforeCompile=base.onBeforeCompile;
    material.customProgramCacheKey=base.customProgramCacheKey;
    material.color.multiply(new T.Color(model.color));
    return {material,custom:true,ownTexture:model.texture?acquireTexture(model.texture,material):null};
  }
  function removeRow(row){
    group.remove(row.mesh);row.mesh.geometry.dispose();
    if(row.vegetation)disposeVegetation(row.vegetation);
    if(row.custom){row.ownTexture?.materials.delete(row.mesh.material);if(row.model)disposeModelMaterial(row.mesh.material);else row.mesh.material.dispose();}
  }
  function makeRow(piece,index){
    if(piece.model){
      const dimensions=new T.Vector3(piece.w,piece.h,piece.d);
      const geometry=createModelUnitGeometry(piece.model,dimensions);
      geometry.scale(piece.w,piece.h,piece.d);
      const material=createModelMaterial(piece.model);
      const mesh=new T.Mesh(geometry,material);
      mesh.position.set(piece.x,piece.y,piece.z);
      mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
      mesh.castShadow=mesh.receiveShadow=true;
      mesh.userData.mapIndex=index;
      if(piece.model.kind==='prop')mesh.visible=false; // Dynamic prop is spawned by the object physics system.
      group.add(mesh);
      const zones=modelCollisionZones(piece.model,dimensions);
      if(zones){
        const colliders=[];
        for(const zone of zones){
          const half=zone.size.clone().multiplyScalar(.5);
          const position=zone.center.clone().applyQuaternion(mesh.quaternion).add(mesh.position);
          const quaternion=mesh.quaternion.clone();
          if(zone.mode==='trigger'){
            triggerRows.push({name:zone.name,model:piece.name,position,
              inverse:quaternion.invert(),bounds:new T.Box3(half.clone().negate(),half)});
          }else colliders.push({position,quaternion,half,min:half.clone().negate(),shape:boxCollider(half),
            friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material});
        }
        return {mesh,colliders,custom:true,model:true};
      }
      const collisionGeometry=modelCollisionGeometry(piece.model,dimensions);
      collisionGeometry.computeBoundingBox();const bounds=collisionGeometry.boundingBox;
      const half=new T.Vector3(Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x)),
        Math.max(Math.abs(bounds.min.y),Math.abs(bounds.max.y)),Math.max(Math.abs(bounds.min.z),Math.abs(bounds.max.z)));
      const shape=colliderFor(collisionGeometry);collisionGeometry.dispose();
      const collider={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
        shape,radius:shape.radius,friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
      return {mesh,collider,custom:true,model:true};
    }
    const {material,custom,ownTexture}=card(piece);
    const geometry=piece.terrain?terrainGeometry(piece):piece.primitive==='ramp'?rampGeometry(piece.w,piece.h,piece.d):piece.primitive&&piece.primitive!=='box'
      ?decorPrimitiveGeometry(piece.primitive).scale(piece.w,piece.h,piece.d)
      :tiledBox(piece.w,piece.h,piece.d);
    const mesh=new T.Mesh(transformUVs(geometry,piece),material);
    mesh.position.set(piece.x,piece.y,piece.z);
    mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
    mesh.castShadow=mesh.receiveShadow=true;
    mesh.userData.mapIndex=index;
    if(piece.sceneryId==='lab-mirror')mesh.userData.mirrorSize={w:piece.w,h:piece.h,d:piece.d};
    group.add(mesh);
    const half=new T.Vector3(piece.w/2,piece.h/2,piece.d/2);
    const collider={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
      shape:piece.primitive==='ramp'?colliderFor(geometry):boxCollider(half),friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
    if(!piece.terrain)return {mesh,collider,custom,ownTexture};
    const vegetation=terrainVegetation(piece);
    if(vegetation)mesh.add(vegetation);
    return {mesh,collider:terrainCollider(piece,mesh),custom,ownTexture,vegetation};
  }
  function refreshMaterials(){
    for(const row of meshRows){
      const model=map?.pieces[row.mesh.userData.mapIndex];
      if(!model||row.ownTexture||row.model)continue;
      const base=arena.mapMaterial(model.material,getLevel());
      if(!row.custom)row.mesh.material=base;
      else if(row.mesh.material.map!==base.map){
        row.mesh.material.map=base.map;row.mesh.material.needsUpdate=true;
      }
    }
  }
  function rebuild(){
    for(const row of meshRows)removeRow(row);
    meshRows.length=0;
    mirrorRows.length=0;triggerRows.length=0;insideTriggers.clear();
    const nodes=map?.pieces??[];
    signature=map?'custom-'+mapCode(JSON.stringify(map)):'';
    // Asset-backed map pieces replace their matching built-in fixture instead of stacking on it.
    const mappedAssets=new Set(nodes.map(piece=>piece.model?.assetId).filter(Boolean));
    const mappedScenery=new Set(nodes.map(piece=>piece.sceneryId).filter(Boolean));
    defaultObjects.forEach(mesh=>{
      const assetId=mesh.userData?.editorAssetId;
      mesh.visible=!map||!replaceableMeshes.has(mesh)&&shouldKeepArenaAsset(map,assetId,mappedAssets,mappedScenery);
    });
    const instanceColliders=[];
    for(const [index,piece] of nodes.entries()){
      const row=makeRow(piece,index);
      meshRows.push(row);
      for(const box of terrainInstanceBoxes(piece,row.vegetation)){
        instanceColliders.push({...box,min:box.half.clone().negate(),shape:boxCollider(box.half),
          friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:false,type:piece.material});
      }
    }
    for(const row of meshRows)if(row.mesh.userData.mirrorSize)mirrorRows.push(row);
    pruneTextures();
    if(map){
      const retained=builtBoxes.filter(box=>!replaceableMeshes.has(box.mesh)&&shouldKeepArenaAsset(map,box.editorAssetId,mappedAssets,mappedScenery));
      const colliders=meshRows.filter((row,i)=>nodes[i].solid&&nodes[i].model?.kind!=='prop'&&nodes[i].model?.properties?.collidable!==false)
        .flatMap(row=>row.colliders??[row.collider]);
      arena.boxes.splice(0,arena.boxes.length,...retained,...colliders,...instanceColliders);
    }
    else arena.boxes.splice(0,arena.boxes.length,...builtBoxes);
    group.updateMatrixWorld(true);
    arena.setEnvironment(map?.environment??null);
    arena.bakeLightmap();
    onVisual();
    if(map){
      try{localStorage.setItem(storageKey,JSON.stringify(map));}catch{}
    }else{
      try{localStorage.removeItem(storageKey);}catch{}
    }
  }
  function load(value){
    const validated=parseMap(value);
    loadRequest++;
    history.length=0;map=validated;selection=moving=-1;
    boot.set(map.spawn.x,map.spawn.y,map.spawn.z);
    rebuild();onReset(map.spawn.yaw);
    inform('Map : '+map.name+' · '+map.pieces.length+' pièces');
  }
  function reset(){
    loadRequest++;
    map=null;history.length=0;selection=moving=-1;boot.set(0,0,3);
    rebuild();onReset(0);inform('Arène intégrée');
  }
  function blank(){
    load({format:'gorilla-lab-map',version:1,name:'Atelier VR',spawn:{x:0,y:.04,z:3},
      pieces:[makePiece({name:'Sol',x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]});
  }
  function undo(){
    if(!history.length)return inform('Rien à annuler.');
    map=parseMap(history.pop());selection=moving=-1;
    boot.set(map.spawn.x,map.spawn.y,map.spawn.z);
    rebuild();inform('Dernière modification annulée.');
  }
  function save(){if(map)downloadMap(map);else inform('Crée ou importe une map avant de l’exporter.');}
  function recenter(x,y,z,yaw){
    if(!map)return;
    memo();
    map.spawn={x,y,z,yaw:T.MathUtils.radToDeg(yaw)};
    boot.set(x,y,z);
    rebuild();inform('Point de départ mémorisé.');
  }
  function edit(origin,direction,click,{mode,piece,head,feet}){
    trace.set(origin,direction);trace.far=12;
    const targets=meshRows.map(row=>row.mesh);
    if(mode===1&&map?.arenaBase&&!map.editableArena)targets.push(...builtBoxes.filter(box=>box.heightfield&&
      !map.pieces.some(piece=>piece.sceneryId===box.editorAssetId)).map(box=>box.mesh));
    const hits=trace.intersectObjects(targets,false);
    const hit=mode>=5?hits.find(item=>map?.pieces[item.object.userData.mapIndex]?.terrain):hits[0];
    ghost.visible=false;
    if(!map)return;
    if(mode>=5){
      const index=hit?.object.userData.mapIndex;
      const target=map.pieces[index];
      if(!target?.terrain)return;
      if(!click)return;
      memo();
      if(mode===9){
        const detail=piece.terrain?.detail??target.terrain.detail;
        const resized=resizeTerrain(target.terrain,detail);
        target.terrain=normalizeTerrain({...resized,...piece.terrain,heights:resized.heights});
      }else{
        const brush={mode:['raise','lower','smooth','flatten'][mode-5],
          radius:piece.brushRadius,strength:piece.brushStrength,target:target.y};
        sculptTerrain(target,hit.point.x,hit.point.z,brush);
      }
      rebuild();inform('Relief modifié.');
      return;
    }
    if(mode===2||mode===3||mode===4){
      if(!hit)return;
      const index=hit.object.userData.mapIndex;
      const selectedPiece=map.pieces[index];
      if(click&&mode===2){selection=index;moving=index;inform('Pièce saisie. Mode Poser pour la déplacer.');}
      if(click&&mode===3){
        if(map.pieces.length===1)return inform('Garde au moins une pièce dans la map.');
        memo();map.pieces.splice(index,1);selection=moving=-1;rebuild();inform('Pièce supprimée.');
      }
      if(click&&mode===4){
        memo();Object.assign(map.pieces[index],{material:piece.material,grip:piece.grip,gravity:piece.gravity,bounce:piece.bounce,solid:piece.solid,texture:piece.texture});
        rebuild();inform('Surface modifiée.');
      }
      if(hit){
        ghost.geometry=selectedPiece.primitive==="ramp"?ramp:slab;ghost.position.copy(hit.object.position);ghost.rotation.copy(hit.object.rotation);ghost.scale.set(selectedPiece.w,selectedPiece.h,selectedPiece.d).multiplyScalar(1.006);ghost.visible=true;
        ghost.material.color.set(mode===3?'#ff8271':'#ffe2a2');
      }
      return;
    }
    if(!hit)return;
    const shape=moving>=0?map.pieces[moving]:piece;
    if(hit.object.userData.mapIndex===moving)return;
    rotatedNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);
    const next=shape.terrain?{...shape,x:Math.round(hit.point.x*2)/2,y:hit.point.y,z:Math.round(hit.point.z*2)/2,pitch:0,yaw:shape.yaw??0}:snapPlacement(hit.point,rotatedNormal,shape);
    if(!next)return;
    ghost.geometry=next.primitive==="ramp"?ramp:slab;
    ghost.position.set(next.x,next.y,next.z);
    ghost.rotation.set(T.MathUtils.degToRad(next.pitch),T.MathUtils.degToRad(next.yaw),T.MathUtils.degToRad(next.roll??0),'YXZ');
    ghost.scale.set(next.w,next.h,next.d);ghost.updateMatrixWorld(true);ghost.visible=true;
    const bounds=new T.Box3().setFromObject(ghost);
    const playerBox=new T.Box3(new T.Vector3(head.x-.26,feet+.01,head.z-.26),new T.Vector3(head.x+.26,head.y+.19,head.z+.26));
    const blocked=next.solid&&bounds.intersectsBox(playerBox);
    ghost.material.color.set(blocked?'#fd7763':'#8be4b9');
    if(click){
      if(blocked)return inform('Déplace-toi : la pièce toucherait ton corps.');
      if(moving<0&&map.pieces.length>=maxPieces)return inform('Limite de '+maxPieces+' pièces atteinte.');
      memo();
      if(moving>=0){map.pieces[moving]=next;moving=-1;}else map.pieces.push(next);
      rebuild();inform('Pièce posée · '+map.pieces.length+' pièces');
    }
  }
  const input=document.querySelector('#map-file'), url=document.querySelector('#map-url');
  input.onchange=async()=>{
    const file=input.files[0];if(!file)return;
    const request=++loadRequest;
    input.value='';
    try{
      if(file.size>maxMapBytes)throw Error('Map trop lourde.');
      const contents=await file.text();
      if(request===loadRequest)load(contents);
    }catch(e){if(request===loadRequest)inform(e.message);}
  };
  // Une importation peut se terminer après un reset ou un autre import. Seule l’opération courante peut charger la carte.
  async function loadURL(value){
    const request=++loadRequest;
    try{
      const requested=new URL(value,location.href);
      if(!['http:','https:'].includes(requested.protocol))throw Error('Il faut une URL HTTP ou HTTPS.');
      const response=await fetch(requested,{credentials:'omit'});
      if(request!==loadRequest)return;
      if(!response.ok)throw Error('URL de map inaccessible ('+response.status+').');
      const length=Number(response.headers.get('content-length'));
      if(length>maxMapBytes)throw Error('Map trop lourde.');
      const contents=await response.text();
      if(request===loadRequest)load(contents);
    }catch(e){if(request===loadRequest)inform(e.message);}
  }
  const triggerRay=new T.Ray(),triggerEnd=new T.Vector3(),triggerHit=new T.Vector3();
  function checkTriggers(head){
    if(!triggerRows.length)return [];
    const events=[],inside=new Set();
    for(const row of triggerRows){
      triggerRay.origin.copy(head).sub(row.position).applyQuaternion(row.inverse);
      triggerRay.direction.set(0,-1,0).applyQuaternion(row.inverse);
      triggerEnd.copy(triggerRay.origin).addScaledVector(triggerRay.direction,1.45);
      const hit=triggerRay.intersectBox(row.bounds,triggerHit);
      if(row.bounds.containsPoint(triggerRay.origin)||row.bounds.containsPoint(triggerEnd)||
        hit&&triggerHit.distanceToSquared(triggerRay.origin)<=1.45**2){
        inside.add(row);
        if(!insideTriggers.has(row))events.push({phase:'enter',part:row.name,model:row.model});
      }else if(insideTriggers.has(row))events.push({phase:'exit',part:row.name,model:row.model});
    }
    insideTriggers=inside;
    return events;
  }
  document.querySelector('#map-load-url').onclick=()=>loadURL(url.value);
  document.querySelector('#map-export').onclick=save;
  document.querySelector('#map-reset').onclick=reset;
  return {checkTriggers,placedModels:()=>map?.pieces.filter(p=>p.model?.kind==='prop')??[],modelPieces:()=>map?.pieces.filter(p=>!p.terrain&&p.name!=='Sol')??[],refreshMaterials,load,loadURL,reset,blank,undo,save,edit,recenter,inform,
    mirrors:()=>mirrorRows,
    get usesBuiltInMirror(){return !map||map.arenaBase&&!map.editableArena&&!map.pieces.some(piece=>piece.sceneryId==='lab-mirror');},
    clearGhost(){ghost.visible=false;},get active(){return Boolean(map);},get builtIn(){return !map||map.arenaBase===true;},get assetLayer(){return map?.assetLayer===true;},
    hasAsset(assetId){return Boolean(map?.pieces.some(piece=>piece.model?.assetId===assetId));},
    getAssetPiece(assetId){return map?.pieces.find(piece=>piece.model?.assetId===assetId)??null;},
    get status(){return status;},get yaw(){return map?.spawn.yaw??0;},
    get worldSize(){return map?.worldSize??0;},get fogDistance(){return map?.environment?.fog?map.environment.fogFar:0;},
    get nodes(){return map?.pieces.length??0;},get name(){return map?.name??null;},get signature(){return signature;},
  };
}


