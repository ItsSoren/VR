
import * as T from 'three';
import {tiledBox} from './texture-geometry.js';
import {boxCollider} from './physics.js';
import {mapCode} from './cloud-link.js';
import {parseMap,makePiece,snapPlacement,maxPieces,maxMapBytes,storageKey,downloadMap} from './map-format.js';

export function connectMaps({scene,arena,boot,onReset,onVisual,getLevel,defaultObjects}){
  const builtBoxes=arena.boxes.slice();
  const group=new T.Group();scene.add(group);
  const meshRows=[], history=[];
  const loader=new T.TextureLoader();
  let map=null, signature='', selection=-1,moving=-1,status='', lastGhostKey='';
  const slab=new T.BoxGeometry(1,1,1);
  const ghost=new T.Mesh(slab,new T.MeshBasicMaterial({color:'#8be4b9',wireframe:true,transparent:true,opacity:.8,depthWrite:false}));
  ghost.visible=false;scene.add(ghost);
  const trace=new T.Raycaster(), rotatedNormal=new T.Vector3(), facing=new T.Vector3();
  const statusNode=document.querySelector('#map-note');
  function inform(message){status=message;statusNode.textContent=message;}
  function memo(){if(history.length>=20)history.shift();history.push(JSON.stringify(map));}
  function card(model){
    const base=arena.mapMaterial(model.material,getLevel());
    if(!model.texture&&model.color==='#ffffff')return {material:base,custom:false};
    const material=base.clone();
    material.onBeforeCompile=base.onBeforeCompile;
    material.customProgramCacheKey=base.customProgramCacheKey;
    material.color.multiply(new T.Color(model.color));
    if(model.texture){
      material.map=loader.load(model.texture,texture=>{
        if(texture.image.width>2048||texture.image.height>2048){material.map=null;texture.dispose();material.needsUpdate=true;inform('Une texture a été ignorée : maximum 2048 px.');}
      },undefined,()=>{material.map=null;material.needsUpdate=true;});
      material.map.colorSpace=T.SRGBColorSpace;
      material.map.wrapS=material.map.wrapT=T.RepeatWrapping;
    }
    return {material,custom:true,ownTexture:Boolean(model.texture)};
  }
  function removeRow(row){
    group.remove(row.mesh);row.mesh.geometry.dispose();
    if(row.custom){if(row.ownTexture)row.mesh.material.map?.dispose();row.mesh.material.dispose();}
  }
  function makeRow(piece,index){
    const {material,custom,ownTexture}=card(piece);
    const mesh=new T.Mesh(tiledBox(piece.w,piece.h,piece.d),material);
    mesh.position.set(piece.x,piece.y,piece.z);
    mesh.rotation.set(T.MathUtils.degToRad(piece.pitch),T.MathUtils.degToRad(piece.yaw),0,'YXZ');
    mesh.castShadow=mesh.receiveShadow=true;
    mesh.userData.mapIndex=index;
    group.add(mesh);
    const half=new T.Vector3(piece.w/2,piece.h/2,piece.d/2);
    const collider={mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
      shape:boxCollider(half),friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
    return {mesh,collider,custom,ownTexture};
  }
  function refreshMaterials(){
    for(const row of meshRows){
      const model=map?.pieces[row.mesh.userData.mapIndex];
      if(!model||row.ownTexture)continue;
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
    defaultObjects.forEach(mesh=>mesh.visible=!map);
    for(let i=0;i<nodes.length;i++)meshRows.push(makeRow(nodes[i],i));
    if(map)arena.boxes.splice(0,arena.boxes.length,...meshRows.filter((row,i)=>nodes[i].solid).map(row=>row.collider));
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
    history.length=0;map=validated;selection=moving=-1;
    boot.set(map.spawn.x,map.spawn.y,map.spawn.z);
    rebuild();onReset(map.spawn.yaw);
    inform('Map : '+map.name+' · '+map.pieces.length+' pièces');
  }
  function reset(){
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
    const hit=trace.intersectObjects(meshRows.map(row=>row.mesh),false)[0];
    ghost.visible=false;
    if(!map)return;
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
        memo();Object.assign(map.pieces[index],{material:piece.material,grip:piece.grip,gravity:piece.gravity,bounce:piece.bounce,solid:piece.solid});
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
    const next=snapPlacement(hit.point,rotatedNormal,shape);
    if(!next)return;
    ghost.position.set(next.x,next.y,next.z);
    ghost.rotation.set(T.MathUtils.degToRad(next.pitch),T.MathUtils.degToRad(next.yaw),0,'YXZ');
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
    const file=input.files[0]; if(!file)return;
    try{if(file.size>maxMapBytes)throw Error('Map trop lourde.');load(await file.text());}
    catch(e){inform(e.message);}
    finally{input.value='';}
  };
  async function loadURL(value){
    try{
      const requested=new URL(value,location.href);
      if(!['http:','https:'].includes(requested.protocol))throw Error('Il faut une URL HTTP ou HTTPS.');
      const response=await fetch(requested,{credentials:'omit'});
      if(!response.ok)throw Error('URL de map inaccessible ('+response.status+').');
      const length=Number(response.headers.get('content-length'));
      if(length>maxMapBytes)throw Error('Map trop lourde.');
      load(await response.text());
    }catch(e){inform(e.message);}
  }
  document.querySelector('#map-load-url').onclick=()=>loadURL(url.value);
  document.querySelector('#map-export').onclick=save;
  document.querySelector('#map-reset').onclick=reset;
  return {refreshMaterials,load,loadURL,reset,blank,undo,save,edit,recenter,inform,
    clearGhost(){ghost.visible=false;},get active(){return Boolean(map);},get status(){return status;},get yaw(){return map?.spawn.yaw??0;},
    get nodes(){return map?.pieces.length??0;},get name(){return map?.name??null;},get signature(){return signature;},
  };
}

