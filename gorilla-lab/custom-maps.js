import {encodeRoomMapLink,decodeRoomMapLink,isEncodedRoomMap} from './room-map-link.js';

import {createTraffic} from './traffic.js';
import {clearLocalMap,writeLocalMap} from './map-storage.js';
import * as T from 'three';
import {shouldKeepArenaAsset} from './arena-map-pieces.js';
import {tiledBox,transformUVs,decorPrimitiveGeometry,rampGeometry} from './texture-geometry.js';
import {terrainGeometry,applyTerrainProjection,terrainCollider,terrainVegetation,terrainInstanceBoxes,disposeVegetation,sculptTerrain,normalizeTerrain,resizeTerrain} from './terrain-edit.js';
import {applyMechanism} from './model-hinge.js';
import {boxCollider,colliderFor} from './physics.js';
import {createModelUnitGeometry,createModelMaterial,modelCollisionZones,modelCollisionGeometry,disposeModelMaterial,createModelPartGeometry,createModelPartMaterial,modelBounds} from './model-pack.js';
import {mapCode,maxSyncedHinges} from './cloud-link.js';
import {parseMap,makePiece,snapPlacement,maxPieces,maxMapBytes,storageKey,downloadMap} from './map-format.js';

export function connectMaps({scene,arena,boot,onReset,onVisual,getLevel,defaultObjects}){
  const builtBoxes=arena.boxes.slice();
  const replaceableMeshes=new Set(builtBoxes.filter(box=>box.half&&box.mesh?.isObject3D).map(box=>box.mesh));
  const group=new T.Group();scene.add(group);
  const traffic=createTraffic(scene);
  const meshRows=[],hingeRows=[],mirrorRows=[],history=[],triggerRows=[];
  const hingeById=new Map();
  let insideTriggers=new Set();
  const loader=new T.TextureLoader(), textures=new Map();
  let loadRequest=0,roomBase=null,loadedSource=null;
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
    group.remove(row.mesh);
    if(row.hinges){
      for(const mesh of row.mesh.children){mesh.geometry.dispose();disposeModelMaterial(mesh.material);}
      return;
    }
    row.mesh.geometry.dispose();
    if(row.vegetation)disposeVegetation(row.vegetation);
    if(row.custom){row.ownTexture?.materials.delete(row.mesh.material);if(row.model)disposeModelMaterial(row.mesh.material);else row.mesh.material.dispose();}
  }
  const neutralPosition=new T.Vector3(),neutralRotation=new T.Quaternion();
  function moveHinges(row){
    row.mesh.updateMatrixWorld(true);
    for(const hinge of row.hinges){
      for(const {mesh,collider,center} of [hinge,...hinge.children]){
        applyMechanism(mesh,hinge.pivot,neutralPosition,neutralRotation,hinge.config,hinge.progress,hinge.distanceScale);
        if(!collider)continue;
        collider.position.copy(center).applyQuaternion(mesh.quaternion).add(mesh.position).applyMatrix4(row.mesh.matrixWorld);
        row.mesh.getWorldQuaternion(collider.quaternion).multiply(mesh.quaternion);
      }
    }
    row.mesh.updateMatrixWorld(true);
  }
  function makeHingedRow(piece,index,dimensions){
    const {model}=piece,root=new T.Group();
    root.position.set(piece.x,piece.y,piece.z);
    root.rotation.set(...[piece.pitch,piece.yaw,piece.roll??0].map(T.MathUtils.degToRad),'YXZ');
    root.userData.mapIndex=index;
    group.add(root);
    const bounds=modelBounds(model),center=bounds.getCenter(new T.Vector3());
    const ratio=dimensions.clone().divide(bounds.getSize(new T.Vector3()).max(new T.Vector3(.00001,.00001,.00001)));
    const row={mesh:root,hinges:[],colliders:[],model:true,targets:new Map()};
    const articulated=model.parts.some(part=>part.hinge);
    const zones=modelCollisionZones(articulated?{...model,partCollisions:true}:model,dimensions);
    if(zones===null)row.colliders.push(globalModelCollider(piece,dimensions,root));
    const attached=[];
    let zoneIndex=0;
    root.updateMatrixWorld(true);
    for(const [partIndex,part] of model.parts.entries()){
      const order=new T.Euler(...part.rotation.map(T.MathUtils.degToRad),'ZYX');
      const metricScale=new T.Vector3(...part.scale).multiply(new T.Vector3(...[0,1,2].map(axis=>
        new T.Vector3().setComponent(axis,1).applyEuler(order).multiply(ratio).length()
      )));
      const geometry=createModelPartGeometry(part,metricScale);
      geometry.translate(-center.x,-center.y,-center.z).scale(ratio.x,ratio.y,ratio.z);
      const mesh=new T.Mesh(geometry,createModelPartMaterial(part));
      mesh.userData.mapIndex=index;mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);
      if(part.actionId)row.targets.set(part.actionId,{mesh,hinge:null,lightOn:false,
        originalEmission:mesh.material.emissive?.clone()});
      if(part.reaction?.phase==='use')mesh.userData.reaction={row,part};
      if(part.zone==='trigger')mesh.userData.triggerVolume=true;
      const zone=zones?.length&&part.zone!=='pass'?zones[zoneIndex++]:null;
      let collider=null;
      if(zone){
        const half=zone.size.clone().multiplyScalar(.5);
        const position=root.localToWorld(zone.center.clone());
        const quaternion=root.quaternion.clone();
        if(zone.mode==='trigger'){
          triggerRows.push({name:zone.name,model:piece.name,position,notice:zone.notice,portal:zone.portal,
            reaction:part.reaction,sourceRow:row,inverse:quaternion.invert(),bounds:new T.Box3(half.clone().negate(),half)});
        }else{
          collider={position,quaternion,half,min:half.clone().negate(),shape:boxCollider(half),
            friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
          row.colliders.push(collider);
        }
      }
      if(part.group&&!part.hinge&&part.zone!=='trigger')attached.push({group:part.group,mesh,collider,center:zone?.center});
      if(part.hinge){
        const pivot=new T.Vector3(...part.hinge.pivot).sub(center).multiply(ratio);
        const id=index*100+partIndex+1;
        const hinge={id,mesh,pivot,collider,group:part.group,children:[],center:zone?.center,config:part.hinge,distanceScale:ratio[part.hinge.axis??'y'],progress:0,target:0,remoteProgress:0};
        row.hinges.push(hinge);hingeById.set(id,hinge);mesh.userData.hingeId=id;
        if(part.actionId)row.targets.get(part.actionId).hinge=hinge;
      }
    }
    for(const child of attached){
      const parent=row.hinges.find(hinge=>hinge.group===child.group);
      if(parent){parent.children.push(child);child.mesh.userData.hingeId=parent.id;}
    }
    moveHinges(row);
    return row;
  }
  function updateHinges(dt,enabled,remote=false){
    for(const row of hingeRows){
      let moved=false;
      for(const hinge of row.hinges){
        if(remote){
          const error=hinge.remoteProgress-hinge.progress;
          if(!error)continue;
          hinge.progress=Math.abs(error)<.003?hinge.remoteProgress:hinge.progress+error*(1-Math.exp(-dt*24));
          moved=true;continue;
        }
        const goal=enabled?hinge.target:0;
        if(!enabled)hinge.target=0;
        if(hinge.holdUntil&&performance.now()>=hinge.holdUntil){hinge.target=0;hinge.holdUntil=0;}
        if(hinge.progress===goal)continue;
        const step=dt/hinge.config.seconds;
        hinge.progress=goal?Math.min(goal,hinge.progress+step):Math.max(0,hinge.progress-step);
        moved=true;
      }
      if(moved)moveHinges(row);
    }
  }
  function pickPiece(origin,direction){
    const rowTargets=meshRows.filter(row=>row.mesh.visible);
    trace.set(origin,direction);trace.far=3.5;
    const hit=trace.intersectObjects(rowTargets.flatMap(row=>row.hinges?row.mesh.children.filter(mesh=>!mesh.userData.triggerVolume):[row.mesh]),false)[0];
    return hit;
  }
  function pickHinge(origin,direction){
    return hingeRows.length?hingeById.get(pickPiece(origin,direction)?.object.userData.hingeId):null;
  }
  let hasUseReaction=false;
  function performReaction(row,reaction,position,ownsDoors){
    const door=row.targets.get(reaction.door)?.hinge;
    if(door&&ownsDoors&&reaction.doorState!=='hold')door.target=reaction.doorState==='toggle'?1-door.target:Number(reaction.doorState==='open');
    const light=row.targets.get(reaction.light);
    if(light?.originalEmission){
      light.lightOn=reaction.lightState==='toggle'?!light.lightOn:reaction.lightState==='on';
      const color=light.mesh.material.emissive;
      if(light.lightOn)color.set(reaction.lightColor);
      else color.copy(light.originalEmission);
    }
    return reaction.sound?{cue:{name:reaction.sound,volume:reaction.soundVolume,at:position.toArray()}}:door||light?.originalEmission?{}:null;
  }
  function interactReaction(origin,direction,ownsDoors,held,dock){
    if(!hasUseReaction)return null;
    const hit=pickPiece(origin,direction),source=hit?.object.userData.reaction;
    if(!source)return null;
    const config=source.part.reaction;
    if(config.receiver){
      if(!dock)return {phase:'use',notice:'Le raccordement de la batterie se fait en solo.'};
      const socket=source.row;
      if(socket.battery&&!socket.battery.frozen)socket.battery=null;
      if(socket.battery)return {phase:'use',notice:'Station alimentée.'};
      if(held?.spec.id!==config.receiver)return {phase:'use',notice:'Prends le module de réserve, puis vise le logement et appuie sur E.'};
      socket.battery=held;
      hit.object.geometry.computeBoundingBox();
      const position=hit.object.localToWorld(hit.object.geometry.boundingBox.getCenter(new T.Vector3()));
      dock(held,position,source.row.mesh.quaternion);
    }
    const reaction=performReaction(source.row,config,hit.point,ownsDoors);
    return reaction?{phase:'use',part:source.part.name,...(config.receiver?{notice:'Batterie raccordée : circuit alimenté.'}:{}),...reaction}:null;
  }
  function toggleHinge(hinge,online){
    if(online&&hingeById.size>maxSyncedHinges)return 'Trop de portes à synchroniser sur cette carte.';
    hinge.target=1-hinge.target;
    return hinge.target?'Ouverture':'Fermeture';
  }
  function interactHinge(origin,direction,enabled,request,online=false){
    const hinge=pickHinge(origin,direction);
    if(!hinge)return false;
    if(request)return request(hinge.id)?'Demande envoyée à l’hôte.':'Porte indisponible chez l’hôte.';
    return enabled?toggleHinge(hinge,online):'Attends la connexion à l’hôte.';
  }
  const hingeCenter=new T.Vector3(),hingeDirection=new T.Vector3();
  function receiveHingeRequest(id,point){
    const hinge=hingeById.get(id);
    if(!hinge||hingeById.size>maxSyncedHinges)return false;
    const {mesh}=hinge;
    if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
    mesh.localToWorld(mesh.geometry.boundingBox.getCenter(hingeCenter));
    hingeDirection.copy(hingeCenter).sub(point);
    if(hingeDirection.lengthSq()>3.65**2||pickHinge(point,hingeDirection.normalize())!==hinge)return false;
    toggleHinge(hinge,true);
    return true;
  }
  function hingeSnapshot(){
    const states=[];
    for(const hinge of hingeById.values())if(hinge.progress>0)states.push({id:hinge.id,progress:hinge.progress});
    return states;
  }
  function receiveHinges(states,initial){
    const targets=new Map(states.map(state=>[state.id,state.progress]));
    for(const row of hingeRows){
      for(const hinge of row.hinges){
        hinge.remoteProgress=targets.get(hinge.id)??0;
        if(initial)hinge.progress=hinge.remoteProgress;
      }
      if(initial)moveHinges(row);
    }
  }
  function globalModelCollider(piece,dimensions,mesh){
    const collisionGeometry=modelCollisionGeometry(piece.model,dimensions);
    collisionGeometry.computeBoundingBox();const bounds=collisionGeometry.boundingBox;
    const half=new T.Vector3(Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x)),
      Math.max(Math.abs(bounds.min.y),Math.abs(bounds.max.y)),Math.max(Math.abs(bounds.min.z),Math.abs(bounds.max.z)));
    const shape=colliderFor(collisionGeometry);collisionGeometry.dispose();
    return {mesh,position:mesh.position,quaternion:mesh.quaternion,half,min:half.clone().negate(),
      shape,radius:shape.radius,friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
  }
  function makeRow(piece,index){
    if(piece.model){
      const dimensions=new T.Vector3(piece.w,piece.h,piece.d);
      if(piece.model.parts.some(part=>part.reaction?.phase==='use'))hasUseReaction=true;
      if(piece.model.parts.some(part=>part.hinge||part.reaction))return makeHingedRow(piece,index,dimensions);
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
            triggerRows.push({name:zone.name,model:piece.name,position,notice:zone.notice,portal:zone.portal,
              inverse:quaternion.invert(),bounds:new T.Box3(half.clone().negate(),half)});
          }else colliders.push({position,quaternion,half,min:half.clone().negate(),shape:boxCollider(half),
            friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material});
        }
        return {mesh,colliders,custom:true,model:true};
      }
      const collider=globalModelCollider(piece,dimensions,mesh);
      return {mesh,collider,custom:true,model:true};
    }
    let {material,custom,ownTexture}=card(piece);
    if(piece.terrain){
      if(!custom){
        const base=material;
        material=base.clone();material.onBeforeCompile=base.onBeforeCompile;
        material.customProgramCacheKey=base.customProgramCacheKey;custom=true;
      }
      material.side=T.DoubleSide;
      if(piece.terrain.projection==='regolith')material.flatShading=false;
      applyTerrainProjection(material,piece);
    }
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
      convex:piece.primitive==='ramp',shape:piece.primitive==='ramp'?colliderFor(geometry):boxCollider(half),friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,zone:true,type:piece.material};
    if(!piece.terrain)return {mesh,collider,custom,ownTexture};
    if(piece.terrain.projection==='regolith')mesh.castShadow=false;
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
  const flights=[];
  function updateFlights(time){
    traffic.update(time);
    for(const {mesh,piece:{x,y,z,yaw,flight}} of flights){
      const angle=time/flight.seconds*Math.PI*2+T.MathUtils.degToRad(flight.phase);
      const sin=Math.sin(angle),cos=Math.cos(angle);
      mesh.position.set(x+flight.x*cos,y+flight.rise*Math.sin(angle*2),z+flight.z*sin);
      mesh.rotation.y=T.MathUtils.degToRad(yaw)+Math.atan2(flight.x*sin,-flight.z*cos);
    }
  }
  let worldLimits=null;
  const worldBox=new T.Box3(),pieceBox=new T.Box3();
  function rebuild(){
    for(const row of meshRows)removeRow(row);
    meshRows.length=hingeRows.length=0;hingeById.clear();
    flights.length=0;mirrorRows.length=0;triggerRows.length=0;insideTriggers.clear();hasUseReaction=false;
    const nodes=map?.pieces??[];
    traffic.set(map?.traffic);
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
      if(piece.surfaceSound){
        for(const collider of row.colliders??[row.collider])collider.sound=piece.surfaceSound;
      }
      if(piece.flight){row.mesh.castShadow=false;flights.push({mesh:row.mesh,piece});}
      if(row.hinges)hingeRows.push(row);
      for(const box of terrainInstanceBoxes(piece,row.vegetation)){
        instanceColliders.push({...box,min:box.half.clone().negate(),shape:boxCollider(box.half),
          friction:piece.grip,gravity:piece.gravity,bounce:piece.bounce,sound:piece.surfaceSound,zone:false,type:piece.material});
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
    worldLimits=null;
    if(map){
      worldBox.makeEmpty();worldBox.expandByPoint(boot);
      for(const {mesh,hinges} of meshRows){
        if(hinges){worldBox.union(pieceBox.setFromObject(mesh));continue;}
        if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
        worldBox.union(pieceBox.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld));
      }
      const reach=Math.max(155,map.worldSize/2);
      worldLimits={minX:Math.min(-reach,worldBox.min.x-16),maxX:Math.max(reach,worldBox.max.x+16),
        minZ:Math.min(-reach,worldBox.min.z-16),maxZ:Math.max(reach,worldBox.max.z+16),minY:Math.min(-24,worldBox.min.y-24)};
    }
    arena.setEnvironment(map?.environment??null);
    arena.bakeLightmap();
    onVisual();
    if(!roomBase){
      const write=map?writeLocalMap(storageKey,JSON.stringify(map)):clearLocalMap(storageKey);
      write.catch(()=>inform('Sauvegarde locale indisponible. Exporte la carte pour la conserver.'));
    }
  }
  function applyMap(value){
    map=value;selection=moving=-1;
    boot.set(map?.spawn.x??0,map?.spawn.y??0,map?.spawn.z??3);
    rebuild();onReset(map?.spawn.yaw??0);
  }
  function load(value){
    const validated=parseMap(value);
    loadRequest++;roomBase=null;loadedSource=null;history.length=0;
    applyMap(validated);
    inform('Map : '+map.name+' · '+map.pieces.length+' pièces');
  }
  function reset(){
    loadRequest++;roomBase=null;loadedSource=null;history.length=0;
    applyMap(null);inform('Arène intégrée');
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
    const targets=meshRows.flatMap(row=>row.hinges?row.mesh.children:[row.mesh]);
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
  async function fetchMap(value,httpsOnly,progress){
    const url=new URL(value,location.href);
    if(url.username||url.password||!(httpsOnly?url.protocol==='https:':['http:','https:'].includes(url.protocol)))
      throw Error(httpsOnly?'La carte du salon doit être accessible en HTTPS.':'Il faut une URL HTTP ou HTTPS.');
    const start=performance.now();
    const response=await fetch(url,{credentials:'omit',referrerPolicy:'no-referrer'});
    if(!response.ok)throw Error('URL de map inaccessible ('+response.status+').');
    if(Number(response.headers.get('content-length'))>maxMapBytes)throw Error('Map trop lourde.');
    const reader=response.body.getReader(),decoder=new TextDecoder();
    let contents='',bytes=0;
    try{
      for(;;){
        const {done,value}=await reader.read();
        if(done)break;
        bytes+=value.byteLength;
        progress?.({loaded:bytes,total:Number(response.headers.get('content-length')),seconds:(performance.now()-start)/1000});
        if(bytes>maxMapBytes){await reader.cancel();throw Error('Map trop lourde.');}
        contents+=decoder.decode(value,{stream:true});
      }
    }finally{reader.releaseLock();}
    return {url:url.href,map:parseMap(contents+decoder.decode())};
  }
  async function loadURL(value){
    const request=++loadRequest;
    try{
      const source=await fetchMap(value,false);
      if(request!==loadRequest)return;
      load(source.map);
      loadedSource={url:source.url,signature};
      return true;
    }catch(e){if(request===loadRequest)inform(e.message);}
    return false;
  }
  async function loadRoomMap(value,accepts,progress){
    const request=++loadRequest;
    try{
      if(value instanceof Blob&&value.size>maxMapBytes)throw Error('Carte trop lourde.');
      const remote=value==='arena'?null:value instanceof Blob?parseMap(await value.text()):isEncodedRoomMap(value)?
        parseMap(await decodeRoomMapLink(value,maxMapBytes)):(await fetchMap(value,true,progress)).map;
      if(request!==loadRequest)return false;
      if(!accepts(remote))return false;
      roomBase??={map,history:history.slice(),source:loadedSource};
      history.length=0;applyMap(remote);
      inform(remote?'Carte du salon · '+remote.name:'Carte du salon · Arène intégrée');
      return true;
    }catch(e){
      if(request===loadRequest)inform('Carte du salon indisponible · '+e.message);
      return false;
    }
  }
  function leaveRoomMap(){
    loadRequest++;
    if(!roomBase)return;
    const previous=roomBase;
    roomBase=null;loadedSource=previous.source;
    history.splice(0,history.length,...previous.history);
    applyMap(previous.map);
    inform(previous.map?'Carte locale restaurée · '+previous.map.name:'Arène locale restaurée');
  }
  async function roomMapSource(forRoom=false){
    if(!map)return 'arena';
    if(loadedSource?.signature===signature&&loadedSource.url.startsWith('https:'))return loadedSource.url;
    if(typeof CompressionStream==='undefined')return null;
    const packed=await encodeRoomMapLink(map,forRoom);
    return packed;
  }
  const triggerRay=new T.Ray(),triggerEnd=new T.Vector3(),triggerHit=new T.Vector3();
  function checkTriggers(head,ownsDoors=true){
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
        if(ownsDoors&&row.reaction?.doorState==='hold'){
          const door=row.sourceRow?.targets.get(row.reaction.door)?.hinge;
          if(door){door.target=1;door.holdUntil=performance.now()+row.reaction.doorDelay*1000;}
        }
        if(!insideTriggers.has(row))events.push({phase:'enter',part:row.name,model:row.model,...(row.notice?.phase==='enter'?{message:row.notice.text}:{}),...(row.portal?{portal:row.portal}:{}),...zoneReaction(row,'enter',ownsDoors)});
      }else if(insideTriggers.has(row))events.push({phase:'exit',part:row.name,model:row.model,...(row.notice?.phase==='exit'?{message:row.notice.text}:{}),...zoneReaction(row,'exit',ownsDoors)});
    }
    insideTriggers=inside;
    return events;
  }
  function zoneReaction(row,phase,ownsDoors){
    return row.reaction?.phase===phase?performReaction(row.sourceRow,row.reaction,row.position,ownsDoors):{};
  }
  document.querySelector('#map-load-url').onclick=()=>loadURL(url.value);
  document.querySelector('#map-export').onclick=save;
  document.querySelector('#map-reset').onclick=reset;
  return {get trafficCount(){return traffic.count;},get soundZones(){return map?.soundZones;},get soundAssets(){return map?.soundAssets;},get boundary(){return map?.boundary??null;},updateFlights,checkTriggers,interactReaction,updateHinges,interactHinge,receiveHingeRequest,hingeSnapshot,receiveHinges,get worldLimits(){return worldLimits;},placedModels:()=>map?.pieces.filter(p=>p.model?.kind==='prop')??[],modelPieces:()=>map?.pieces.filter(p=>!p.terrain&&p.name!=='Sol')??[],refreshMaterials,load,loadURL,loadRoomMap,leaveRoomMap,roomMapSource,reset,blank,undo,save,edit,recenter,inform,
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
