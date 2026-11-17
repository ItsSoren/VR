
import * as T from 'three';
import {tiledBox,transformUVs,decorPrimitiveGeometry} from './texture-geometry.js';
import {terrainGeometry,terrainCollider,terrainVegetation,disposeVegetation,sculptTerrain,normalizeTerrain,resizeTerrain} from './terrain-edit.js';
import {boxCollider} from './physics.js';
import {createModelUnitGeometry,createModelMaterial,disposeModelMaterial} from './model-pack.js';
import {mapCode} from './cloud-link.js';
import {parseMap,makePiece,snapPlacement,maxPieces,maxMapBytes,storageKey,downloadMap} from './map-format.js';

export function connectMaps({scene,arena,boot,onReset,onVisual,getLevel,defaultObjects}){
  const builtBoxes=arena.boxes.slice();
  const replaceableMeshes=new Set(builtBoxes.filter(box=>box.half&&box.mesh?.isObject3D).map(box=>box.mesh));
  const group=new T.Group();scene.add(group);
  const meshRows=[], history=[];
  const loader=new T.TextureLoader(), textures=new Map();
  let loadRequest=0;
  let map=null, signature='', selection=-1,moving=-1,status='', lastGhostKey='';
  const slab=new T.BoxGeometry(1,1,1);
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
      const geometry=createModelUnitGeometry(piece.model);
      geometry.scale(piece.w,piece.h,piece.d);
      const material=createModelMaterial(piece.model);
      const mesh=new T.Mesh(geometry,material);
      mesh.position.set(piece.x,piece.y,piece.z);
      mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
      mesh.castShadow=mesh.receiveShadow=true;
      mesh.userData.mapIndex=index;
      if(piece.model.kind==='prop')mesh.visible=false; // Dynamic prop is spawned by the object physics system.
      group.add(mesh);
      const half=new T.Vector3(piece.w/2,piece.h/2,piece.d/2);
      const collider={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
        shape:boxCollider(half),friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
      return {mesh,collider,custom:true,model:true};
    }
    const {material,custom,ownTexture}=card(piece);
    const geometry=piece.terrain?terrainGeometry(piece):piece.primitive&&piece.primitive!=='box'
      ?decorPrimitiveGeometry(piece.primitive).scale(piece.w,piece.h,piece.d)
      :tiledBox(piece.w,piece.h,piece.d);
    const mesh=new T.Mesh(transformUVs(geometry,piece),material);
    mesh.position.set(piece.x,piece.y,piece.z);
    mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),T.MathUtils.degToRad(piece.roll??0),'YXZ');
    mesh.castShadow=mesh.receiveShadow=true;
    mesh.userData.mapIndex=index;
    group.add(mesh);
    const half=new T.Vector3(piece.w/2,piece.h/2,piece.d/2);
    const collider={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
      shape:boxCollider(half),friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
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
    const nodes=map?.pieces??[];
    signature=map?'custom-'+mapCode(JSON.stringify(map)):'';
    // Arena-derived maps replace editable boxes but retain hills and fixtures.
    defaultObjects.forEach(mesh=>mesh.visible=!map||map.arenaBase&&!replaceableMeshes.has(mesh));
    for(let i=0;i<nodes.length;i++)meshRows.push(makeRow(nodes[i],i));
    pruneTextures();
    if(map){
      const retained=map.arenaBase?builtBoxes.filter(box=>!replaceableMeshes.has(box.mesh)):[];
      arena.boxes.splice(0,arena.boxes.length,...retained,...meshRows.filter((row,i)=>nodes[i].solid&&nodes[i].model?.kind!=='prop').map(row=>row.collider));
    }
    else arena.boxes.splice(0,arena.boxes.length,...builtBoxes);
    group.updateMatrixWorld(true);
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
    if(mode===1&&map?.arenaBase)targets.push(...builtBoxes.filter(box=>box.heightfield).map(box=>box.mesh));
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
        ghost.position.copy(hit.object.position);ghost.rotation.copy(hit.object.rotation);ghost.scale.set(selectedPiece.w,selectedPiece.h,selectedPiece.d).multiplyScalar(1.006);ghost.visible=true;
        ghost.material.color.set(mode===3?'#ff8271':'#ffe2a2');
      }
      return;
    }
    if(!hit)return;
    const shape=moving>=0?map.pieces[moving]:piece;
    if(hit.object.userData.mapIndex===moving)return;
    rotatedNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);
    const next=shape.terrain?{...shape,x:Math.round(hit.point.x*2)/2,y:hit.point.y,z:Math.round(hit.point.z*2)/2,pitch:0,yaw:0}:snapPlacement(hit.point,rotatedNormal,shape);
    if(!next)return;
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
  document.querySelector('#map-load-url').onclick=()=>loadURL(url.value);
  document.querySelector('#map-export').onclick=save;
  document.querySelector('#map-reset').onclick=reset;
  return {placedModels:()=>map?.pieces.filter(p=>p.model?.kind==='prop')??[],modelPieces:()=>map?.pieces.filter(p=>!p.terrain&&p.name!=='Sol')??[],refreshMaterials,load,loadURL,reset,blank,undo,save,edit,recenter,inform,
    clearGhost(){ghost.visible=false;},get active(){return Boolean(map);},get builtIn(){return !map||map.arenaBase===true;},get status(){return status;},get yaw(){return map?.spawn.yaw??0;},
    get nodes(){return map?.pieces.length??0;},get name(){return map?.name??null;},get signature(){return signature;},
  };
}

