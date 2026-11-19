import {palmCenter,palmHalfExtent} from '../gorilla-lab/hand-skin.js';
import {createSettings} from '../gorilla-lab/game-settings.js';
import {GorillaLocomotion} from '../gorilla-lab/locomotion.js';
import {boxCollider,colliderFor,palmContact,playerObjectContact} from '../gorilla-lab/physics.js';
import {createCloudClient,createObjectFeed,decodeAvatar} from '../gorilla-lab/cloud-link.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createToolVisual} from '../gorilla-lab/tool-visual.js';
import {createArcadeBlaster,createBlasterModel} from '../gorilla-lab/arcade-blaster.js';
import {updateGroundHaptics} from '../gorilla-lab/ground-haptics.js';
import {parseMap,exampleMap} from '../gorilla-lab/map-format.js';
import {normalizeModelPack,createModelPartGeometry,createModelUnitGeometry,modelDimensions,modelHitbox,modelHitboxGeometry,modelCollisionGeometry,createModelPropDefinitions,disposeModelMaterial,createModelPartMaterial} from '../gorilla-lab/model-pack.js';
import {createKeyboardState} from '../gorilla-lab/flat-controls.js';
import {screenPixelRatio} from '../gorilla-lab/screen-render.js';
import {terrainHeight,sculptTerrain,normalizeTerrain,resizeTerrain,terrainGeometry,terrainCollider,normalizeTerrainRule,terrainVegetation,terrainRuleDimensions,terrainInstanceBoxes,stitchTerrain,disposeVegetation} from '../gorilla-lab/terrain-edit.js';
import {connectMaps} from '../gorilla-lab/custom-maps.js';
import {transformUVs,tiledBox,decorPrimitiveGeometry} from '../gorilla-lab/texture-geometry.js';
import {clonePropMaterial} from '../gorilla-lab/animated-props.js';
import {sketchPresets,normalizeSketch,validateSketch,sketchOutline,createSketchGeometry} from '../gorilla-lab/custom-shape.js';
import {rampGeometry} from '../gorilla-lab/texture-geometry.js';
import {modelFacePosition,modelGroupTransform,resizedCenter,scaleHandleSigns} from '../gorilla-lab/editor-scale.js';

test('held trigger emits ten shots each second and stops on release',()=>{
  const scene=new T.Scene(),gun=createArcadeBlaster(scene,{});
  const aim={position:new T.Vector3(),direction:new T.Vector3(0,0,-1),quaternion:new T.Quaternion()};
  for(let i=0;i<200;i++)gun.update({dt:.01,aim,firing:true});
  assert.equal(gun.shotsFired,20);
  for(let i=0;i<120;i++)gun.update({dt:.01,aim,firing:false});
  assert.equal(gun.shotsFired,20);
  const tracer=scene.children.find(node=>node.isLineSegments);
  assert.ok(tracer.geometry.drawRange.count<=24*6);
  gun.reset();
  assert.equal(tracer.geometry.drawRange.count,0);
});

test('a projectile stops at its first impact and emits sparks',()=>{
  const scene=new T.Scene();
  let hits=0;
  const gun=createArcadeBlaster(scene,{impact(origin,direction,length){
    assert.equal(direction.z,-1);
    const distance=1+origin.z;
    if(distance<=length+.000001){hits++;return distance;}
    return null;
  }});
  const aim={position:new T.Vector3(),direction:new T.Vector3(0,0,-1),quaternion:new T.Quaternion()};
  gun.update({dt:.01,aim,firing:true});
  for(let i=0;i<6;i++)gun.update({dt:.01,aim,firing:false});
  assert.equal(hits,1);
  assert.ok(scene.children.find(node=>node.isPoints).geometry.drawRange.count>4);
});

test('ground support pulses once and re-arms when lifted',()=>{
  let calls=0;
  const hand={valid:true,groundContact:true,gamepad:{hapticActuators:[{pulse(power,length){
    assert.equal(power,.16);assert.equal(length,26);calls++;
  }}]}};
  updateGroundHaptics(hand,true,.01);updateGroundHaptics(hand,true,.20);
  hand.groundContact=false;updateGroundHaptics(hand,true,.01);
  hand.groundContact=true;updateGroundHaptics(hand,true,.01);
  assert.equal(calls,2);
});

test('sculpted terrain round-trips with the map',()=>{
  const map=exampleMap();
  map.pieces[0].terrain={detail:16,seed:42,amplitude:.4};
  const parsed=parseMap(map), piece=parsed.pieces[0], original=terrainHeight(piece,piece.x,piece.z);
  assert.ok(sculptTerrain(piece,piece.x,piece.z,{mode:'raise',radius:2,strength:1}));
  const [restored]=parseMap(JSON.stringify(parsed)).pieces;
  assert.ok(terrainHeight(restored,restored.x,restored.z)>original);
});


test('idle blaster keeps its GPU buffers clean and hides effects after they expire',()=>{
  const scene=new T.Scene(),gun=createArcadeBlaster(scene,{});
  const tracer=scene.children.find(node=>node.isLineSegments);
  const sparks=scene.children.find(node=>node.isPoints);
  const initial=[tracer,sparks].map(node=>node.geometry.attributes.position.version);
  for(let i=0;i<120;i++)gun.update({dt:1/60,aim:null,firing:false});
  assert.deepEqual([tracer,sparks].map(node=>node.geometry.attributes.position.version),initial);
  assert.ok(!tracer.visible&&!sparks.visible);
  const aim={position:new T.Vector3(),direction:new T.Vector3(0,0,-1),quaternion:new T.Quaternion()};
  gun.update({dt:1/60,aim,firing:true});
  assert.ok(tracer.visible&&sparks.visible);
  for(let i=0;i<120;i++)gun.update({dt:1/60,aim:null,firing:false});
  assert.ok(!tracer.visible&&!sparks.visible);
});


test('low mobile quality reduces pixel area without affecting the desktop budget',()=>{
  const previousMobileRatio=1.75*(.53+2*.047);
  const newMobileRatio=screenPixelRatio(2,3,true);
  assert.ok(newMobileRatio**2<.30*previousMobileRatio**2);
  assert.equal(screenPixelRatio(2,3,false),previousMobileRatio);
  assert.ok(screenPixelRatio(10,3,true)<=1);
});


test('a quick key tap survives release until the next game frame',()=>{
  const keys=createKeyboardState();
  keys.down('KeyX');keys.up('KeyX');
  assert.ok(keys.pressed.delete('KeyX'));
  keys.down('KeyX',true);
  assert.ok(!keys.pressed.has('KeyX'));
  keys.down('KeyZ');assert.ok(keys.held.has('KeyZ'));
  keys.up('KeyZ');assert.ok(!keys.held.has('KeyZ'));
});

test('TurboWarp prioritizes avatars and recovers skipped shot and object updates',()=>{
  const wall=1_780_000_000_000,links=[],queue=[];
  let at=0,dropShot=false,dropRest=false,actionAt=-1,shotAt=-1;
  const actionLog=[],shots=[],objects=new Map(),poses=new Map();
  const playerSent=[],spectatorSent=[],authoritativeFeed=createObjectFeed();
  const body={netId:1,netType:0,mesh:new T.Mesh(),velocity:new T.Vector3(),angular:new T.Vector3()};
  const observerMap=7;
  class Relay {
    constructor(){this.readyState=1;this.bufferedAmount=0;links.push(this);}
    send(message){
      const packet=JSON.parse(message);
      if(packet.method!=='set')return;
      const decoded=decodeAvatar(packet.value,null);
      assert.ok(decoded);
      if(packet.name.startsWith('☁ GorillaPlayer')){
        playerSent.push(at);
        if(dropShot&&decoded.shots.length){dropShot=false;return;}
      }
      if(packet.name==='☁ GorillaPC')spectatorSent.push(at);
      if(packet.name==='☁ GorillaVR'&&dropRest&&decoded.objects?.records[0]?.position?.x===4){
        dropRest=false;return;
      }
      queue.push({from:this,message,at:at+36});
    }
    close(){this.readyState=3;}
  }
  const options={Socket:Relay,now:()=>wall+at,monotonicNow:()=>at};
  const host=createCloudClient({...options,random:()=>.12,
    onShot(shot,peer){shots.push({shot,peer});shotAt=at;},
    onAction(action){actionLog.push(action);actionAt=at;},
  });
  const guest=createCloudClient({...options,random:()=>.23});
  const watcher=createCloudClient({...options,random:()=>.34,
    onPeer(pose){
      if(!pose)return;
      poses.set(pose.role,pose);
      if(pose.role!=='vr'||!pose.objects)return;
      if(pose.objects.full)objects.clear();
      for(const record of pose.objects.records){
        if(record.removed)objects.delete(record.id);
        else objects.set(record.id,record);
      }
    },
  });
  const clients=[host,guest,watcher];
  clients.forEach((client,i)=>assert.ok(client.join('TEST01',['vr','player','pc'][i])));
  links.forEach(socket=>socket.onopen());
  const position=new T.Vector3(0,1,0),quaternion=new T.Quaternion();
  const hand={position,quaternion,pressure:[0,1,.5]};
  const avatar={head:quaternion,hands:[null,hand],color:3,gun:{position,quaternion}};
  const player={x:0,y:1,z:0,yaw:0,map:7,ready:true,avatar};
  function run(until){
    for(;at<=until;at++){
      while(queue[0]?.at<=at){
        const {from,message}=queue.shift();
        for(const socket of links)if(socket!==from)socket.onmessage({data:message});
      }
      if(at%10!==0)continue;
      host.tick({...player,score:3,objectFeed:t=>authoritativeFeed.capture(t,[body])});
      guest.tick(player);
      watcher.tick({...player,map:observerMap,avatar:null});
    }
  }
  run(625);
  assert.equal(guest.remote.protocol,5);
  assert.equal(poses.get('player').avatar.hands[1].pressure[1],1);
  assert.equal(poses.get('player').avatar.gun.position.y,1);
  assert.equal(poses.get('vr').score,3);
  assert.equal(objects.get(1).position.x,0);
  const action={type:'hold',objectId:1,hand:2};
  assert.ok(guest.sendAction(action,7));
  guest.queueShot(position,quaternion,7);
  run(690);
  assert.deepEqual(actionLog,[action]);
  assert.equal(shots.length,1);
  assert.ok(actionAt-626<100&&shotAt-626<100);

  dropShot=true;
  guest.queueShot(position,quaternion,7);
  dropRest=true;
  body.mesh.position.x=4;
  run(1360);
  assert.equal(shots.length,2,'the repeated shot reaches the host exactly once');
  assert.equal(actionLog.length,1,'retransmitted actions do not run twice');
  assert.equal(objects.get(1).position.x,4,'a dropped rest state still reaches spectators');
  assert.ok(playerSent.slice(1).every((t,i)=>t-playerSent[i]===100));
  assert.ok(spectatorSent.slice(1).every((t,i)=>t-spectatorSent[i]===200));

  const captured=host.stats.sent;
  links[0].bufferedAmount=5000;
  run(1500);
  assert.equal(host.stats.sent,captured);
  assert.equal(host.stats.bufferedBytes,5000);
  links[0].bufferedAmount=0;
  run(1700);
  assert.ok(host.stats.sent>captured);
});

test('replayed traces share the projectile pool and only authority can apply impacts',()=>{
  const scene=new T.Scene(),impacts=[];
  const gun=createArcadeBlaster(scene,{impact(_position,_direction,_length,authority){impacts.push(authority);return .01;}});
  gun.replay(new T.Vector3(),new T.Quaternion(),false);
  gun.replay(new T.Vector3(),new T.Quaternion(),true);
  gun.update({dt:.01,aim:null,firing:false});
  assert.deepEqual(impacts,[false,true]);
  assert.equal(gun.shotsFired,0);
});

test('only small fast objects use intermediate pose packets and their final state is repeated',()=>{
  function makeBody(netId,radius,speed,spin=0){
    return {netId,netType:0,radius,mesh:new T.Mesh(),velocity:new T.Vector3(speed,0,0),angular:new T.Vector3(0,spin,0)};
  }
  const fast=makeBody(1,.16,5),slow=makeBody(2,.22,1),large=makeBody(3,1.3,7),spinning=makeBody(4,.35,0,15);
  const bodies=[fast,slow,large,spinning];
  const feed=createObjectFeed();
  function ids(delta){return delta?.records.map(record=>Number(record.slice(0,5)))??[];}
  assert.deepEqual(ids(feed.capture(0,bodies)),[1,2,3,4]);
  function advance(){
    for(const body of bodies)body.mesh.position.addScaledVector(body.velocity,.1);
    spinning.mesh.rotation.y+=1.5;
  }
  advance();
  assert.deepEqual(ids(feed.capture(100,bodies)),[1,4]);
  advance();
  const regular=feed.capture(200,bodies);
  assert.deepEqual(ids(regular).sort(),[1,2,3,4]);
  advance();
  fast.velocity.set(0,0,0);
  const stopped=feed.capture(300,bodies);
  assert.deepEqual(ids(stopped),[1,4]);
  const terminal=stopped.records[0];
  assert.equal(Number(terminal[7])&4,4);
  advance();
  assert.ok(feed.capture(400,bodies).records.includes(terminal));
  advance();
  assert.deepEqual(ids(feed.capture(500,bodies)),[4]);
});

test('an active public host keeps authority and a second host attempt can spawn as guest',()=>{
  let at=0;
  const sockets=[],traffic=[];
  class Relay {
    constructor(){this.readyState=1;this.bufferedAmount=0;sockets.push(this);}
    send(message){if(JSON.parse(message).method==='set')traffic.push({sender:this,message});}
    close(){this.readyState=3;}
  }
  const opts={Socket:Relay,now:()=>1_780_000_000_000+at,monotonicNow:()=>at};
  const actions=[];
  const host=createCloudClient({...opts,random:()=>.62,onAction:action=>actions.push(action)});
  const guest=createCloudClient({...opts,random:()=>.12});
  const data={x:0,y:1,z:0,yaw:0,map:12,ready:true};
  host.join('ARENE1','vr');sockets[0].onopen();
  function run(until){
    for(;at<=until;at+=10){
      host.tick(data);
      guest.tick(data);
      for(const {sender,message} of traffic.splice(0)){
        for(const socket of sockets)if(socket!==sender)socket.onmessage({data:message});
      }
    }
  }
  run(1250);
  guest.join('ARENE1','vr');sockets[1].onopen();
  run(2050);
  assert.equal(host.role,'vr');
  assert.equal(guest.role,'player');
  assert.equal(guest.remote.ready,true);
  assert.ok(guest.sendAction({type:'spawn',typeId:1},12));
  assert.ok(guest.sendAction({type:'world',mode:3,typeId:1},12));
  run(2600);
  assert.deepEqual(actions,[{type:'spawn',typeId:1},{type:'world',mode:3,typeId:1}]);
});

test('the two gun models meet their triangle budget',()=>{
  function triangles(root){
    let count=0;
    root.traverse(node=>{
      if(node.isMesh)count+=(node.geometry.index?.count??node.geometry.attributes.position.count)/3;
    });
    return count;
  }
  assert.equal(triangles(createBlasterModel()),96);
  assert.equal(triangles(createToolVisual(new T.Scene()).mesh),104);
});

function collisionBox(position,half,quaternion=new T.Quaternion()){
  return {position,half,min:half.clone().negate(),quaternion,mesh:{position,quaternion,visible:true},
    shape:boxCollider(half),friction:1};
}

function handRig(boxes,rate){
  const hand={valid:true,mesh:{quaternion:new T.Quaternion()},target:new T.Vector3()};
  const body=new T.Vector3(),velocity=new T.Vector3(),movement=new T.Vector3();
  const engine=new GorillaLocomotion(T.Vector3,[hand],palmContact);
  return {hand,body,velocity,step(x,y,z){
    hand.target.set(x,y,z).add(body);
    engine.move({head:new T.Vector3(0,.8,0).add(body),dt:1/rate,gravity:9.81,settings:createSettings(false),boxes,velocity,movement,reach:1.1});
    body.add(movement);
    return engine.finish(movement,velocity);
  }};
}

test('high collision detail is the default on desktop and mobile',()=>{
  assert.equal(createSettings(false).preciseHitboxes,true);
  assert.equal(createSettings(true).preciseHitboxes,true);
});

test('a resting hand slides on a wall without jumping, then a push launches away from the contact',()=>{
  for(const rate of [72,90,120]){
    const wall=collisionBox(new T.Vector3(.42,.65,0),new T.Vector3(.02,1,2));
    const rig=handRig([wall],rate);
    for(let i=0;i<rate/2;i++){
      const report=rig.step(.39,.55,0);
      assert.equal(report.contacts,1);
      assert.equal(report.launched,false);
    }
    assert.ok(rig.body.y<-.06&&rig.body.y>-.35);
    assert.ok(rig.hand.anchor.y<.48);
    let launched=false;
    for(let i=1;i<=4&&!launched;i++)launched=rig.step(.39+i*.044,.55-i*.037,0).launched;
    assert.equal(launched,true);
    assert.ok(rig.velocity.x< -1&&rig.velocity.y>0);
    rig.step(.58,.40,0);
    assert.ok(rig.velocity.x< -1);
  }
});

test('the palm catches a narrow edge and the swept rectangle and sphere reject distant contacts',()=>{
  const {Vector3:V,Quaternion:Q}=T;
  const edge=collisionBox(new V(0,.19,-.4),new V(.4,.025,.018));
  const rig=handRig([edge],90);
  assert.equal(rig.step(0,.31,-.37).contacts,0);
  assert.equal(rig.step(0,.23,-.37).contacts,1);
  const rectangle=collisionBox(new V(),new V(.71,.375,.44),new Q().setFromAxisAngle(new V(0,1,0),.72));
  const sphere={mesh:new T.Mesh(new T.IcosahedronGeometry(.6,4)),shape:colliderFor(new T.IcosahedronGeometry(.6,4),.6)};
  for(const [body,top] of [[rectangle,.375],[sphere,.6]]){
    body.radius=body.shape.radius;body.blocksPlayer=true;
    const point=new V(),normal=new V(),block={objectBody:body};
    assert.equal(palmContact(new V(0,1,0),new V(0,top-.03,0),new Q(),[block],point,normal),block);
    assert.ok(normal.y>.99);
    assert.equal(palmContact(new V(1.2,1,0),new V(1.2,top-.03,0),new Q(),[block],point,normal),null);
    const player=new V(0,top+.14,0);
    assert.ok(playerObjectContact(player,.17,body,new V(0,-1,0),normal));
    assert.ok(Math.abs(player.y-(top+.171))<.001);
  }
});

test('a rotated palm stops with its collision center aligned to the visual hand',()=>{
  const {Vector3:V,Quaternion:Q}=T;
  const rotation=new Q().setFromAxisAngle(new V(1,0,0),Math.PI/2);
  const normal=new V(0,1,0).applyQuaternion(rotation);
  const slab=collisionBox(normal.clone().multiplyScalar(-.05),new V(.3,.05,.3),rotation);
  const rig=handRig([slab],90);
  rig.hand.mesh.quaternion.copy(rotation);
  assert.equal(rig.step(0,.18,.10).contacts,0);
  assert.equal(rig.step(0,.18,-.018).contacts,1);
  const palm=rig.hand.anchor.clone().add(palmCenter.clone().applyQuaternion(rotation));
  assert.ok(Math.abs(palm.dot(normal)-palmHalfExtent.y)<.001);
});

test('a composite model survives map export with its decorative or physical identity',()=>{
  const model=normalizeModelPack({version:1,models:[{
    id:'custom-model-test-piece',name:'Pont construit',kind:'structure',inGame:false,
    properties:{grabbable:false,collidable:true,frozen:true},
    parts:[
      {name:'Plateau',shape:'box',position:[0,0,0],rotation:[0,0,0],scale:[2,.2,1],color:'#aabbcc',surface:'wood'},
      {name:'Pilier',shape:'cylinder',position:[.7,-.6,0],rotation:[0,0,0],scale:[.2,1,.2],color:'#778899',surface:'plain'},
    ]
  }]}).models[0];
  const map=exampleMap();
  map.pieces.push({...map.pieces[0],name:'Pont',model,w:2,h:1.2,d:1});
  const restored=parseMap(JSON.stringify(map));
  assert.equal(restored.pieces.at(-1).model.kind,'structure');
  assert.equal(restored.pieces.at(-1).model.parts.length,2);
  assert.ok(modelDimensions(model).x>1.9);
  const geometry=createModelUnitGeometry(model);
  geometry.computeBoundingBox();
  assert.ok(geometry.boundingBox.getSize(new T.Vector3()).x<=1.00001);
  geometry.dispose();
  const prop={...model,kind:'prop'};
  map.pieces.at(-1).model=prop;
  assert.equal(parseMap(JSON.stringify(map)).pieces.at(-1).model.kind,'prop');
});

test('large maps preserve dimensions and individual UV transforms',()=>{
  const map=exampleMap();
  map.worldSize=640;
  const piece=map.pieces[0];
  Object.assign(piece,{x:190,w:120,d:100,uvScale:2.5,uvRotation:45,uvOffsetX:.35,uvOffsetY:-.2});
  const saved=parseMap(JSON.stringify(map));
  assert.equal(saved.worldSize,640);
  assert.equal(saved.pieces[0].w,120);
  assert.equal(saved.pieces[0].x,190);
  assert.equal(saved.pieces[0].uvRotation,45);
  const geo=tiledBox(10,1,10);
  const a=geo.attributes.uv.getX(0);
  transformUVs(geo,saved.pieces[0]);
  assert.notEqual(geo.attributes.uv.getX(0),a);
  geo.dispose();
});

test('terrain detail and procedural noise options survive serialization and remeshing',()=>{
  const piece=exampleMap().pieces[0];
  piece.terrain=normalizeTerrain({
    detail:64,amplitude:4,frequency:.2,octaves:5,roughness:.66,
    ridge:.75,edgeFade:.4,grassSize:1.5,shrubSize:1.25
  });
  const map=exampleMap();map.pieces[0]=piece;
  const saved=parseMap(JSON.stringify(map)).pieces[0];
  assert.equal(saved.terrain.detail,64);
  assert.equal(saved.terrain.octaves,5);
  assert.equal(saved.terrain.ridge,.75);
  const geo=terrainGeometry(saved);
  assert.equal(geo.attributes.position.count,65*65);
  geo.dispose();
  const refined=resizeTerrain(saved.terrain,128);
  assert.equal(refined.detail,128);
  assert.equal(refined.heights,null);
});

test('decorative vegetation can use custom composite models',()=>{
  const model=normalizeModelPack({version:1,models:[{
    id:'custom-model-grass-2026',name:'Brin',kind:'structure',parts:[
      {name:'Tige',shape:'box',position:[0,0,0],rotation:[0,0,0],scale:[.2,.8,.2],color:'#337744',surface:'plain'}
    ]
  }]}).models[0];
  const piece=exampleMap().pieces[0];
  piece.terrain=normalizeTerrain({detail:16,grass:.4,shrub:.2,grassModel:model,shrubModel:model});
  const map=exampleMap();map.pieces[0]=piece;
  const saved=parseMap(JSON.stringify(map)).pieces[0];
  assert.equal(saved.terrain.rules[0].model.parts.length,1);
  const vegetation=terrainVegetation(saved);
  assert.equal(vegetation.children.length,2);
  assert.ok(vegetation.children[0].count>0);
  disposeVegetation(vegetation);
});

test('static decorative primitives survive map serialization and generate real meshes',()=>{
  const shapes=['sphere','cylinder','cone','torus','capsule'];
  for(const primitive of shapes){
    const map=exampleMap();
    map.pieces[0].primitive=primitive;
    assert.equal(parseMap(JSON.stringify(map)).pieces[0].primitive,primitive);
    const geo=decorPrimitiveGeometry(primitive);
    assert.ok(geo.attributes.position.count>24);
    geo.dispose();
  }
  const map=exampleMap();map.pieces[0].primitive='invalid';
  assert.equal(parseMap(map).pieces[0].primitive,'box');
});

test('face scaling preserves the opposite face and Ctrl fixes the centre',()=>{
  const original={x:5,y:2,z:0,w:2,h:2,d:2,pitch:0,yaw:0,roll:0};
  const expanded={w:4,h:2,d:2};
  const anchored=resizedCenter(original,expanded,false);
  assert.equal(anchored.x,6);
  assert.equal(anchored.x-expanded.w/2,original.x-original.w/2,
    'the opposite face must remain fixed');
  assert.deepEqual(resizedCenter(original,expanded,true),{x:5,y:2,z:0});
  const smaller=resizedCenter(original,{w:1,h:2,d:2},false);
  assert.equal(smaller.x,4.5);
  assert.equal(smaller.x-.5,original.x-1);
});

test('asymmetric scaling honours object rotation and terrain Y constraints',()=>{
  const rotated={x:0,y:0,z:0,w:2,h:2,d:2,pitch:0,yaw:90,roll:0};
  const center=resizedCenter(rotated,{w:4,h:2,d:2},false);
  assert.ok(Math.abs(center.x)<1e-6);
  assert.ok(Math.abs(center.z+1)<1e-6);
  const terrain={...rotated,terrain:{detail:16},pitch:0,yaw:0};
  assert.equal(resizedCenter(terrain,{w:2,h:8,d:2},false).y,0);
});

test('a painted texture stays on its own model part through JSON normalization and geometry merge',()=>{
  const data='data:image/webp;base64,'+'AA==';
  const model={
    id:'custom-model-paint-test',name:'Texture de pièce',kind:'structure',
    parts:[
      {name:'Face peinte',shape:'box',position:[0,0,0],rotation:[0,0,0],
        scale:[1,1,1],color:'#ffffff',surface:'plain',texture:data},
      {name:'Face neutre',shape:'sphere',position:[1,0,0],rotation:[0,0,0],
        scale:[.2,.2,.2],color:'#ffffff',surface:'wood'},
    ]
  };
  const pack=normalizeModelPack({version:1,models:[model],avatarId:null});
  assert.equal(pack.models[0].parts[0].texture,data);
  assert.equal(pack.models[0].parts[1].texture,null);
  const restored=normalizeModelPack(JSON.parse(JSON.stringify(pack)));
  assert.equal(restored.models[0].parts[0].texture,data);
  const geom=createModelUnitGeometry(restored.models[0]);
  assert.equal(geom.groups.length,2,'custom image requires separate material groups');
  assert.equal(geom.groups[0].materialIndex,0);
  assert.equal(geom.groups[1].materialIndex,1);
  geom.dispose();
  assert.equal(normalizeModelPack({version:1,models:[{...model,
    parts:[{...model.parts[0],texture:'https://example.org/asset.png'}]}],avatarId:null}).models[0].parts[0].texture,null);
  assert.equal(normalizeModelPack({version:1,models:[{...model,
    parts:[{...model.parts[0],texture:'data:image/svg+xml;base64,AAAA'}]}],avatarId:null}).models[0].parts[0].texture,null);
});

test('animated game objects safely clone a multi-material textured model',()=>{
  const a=[new T.MeshStandardMaterial({color:'#ffffff'}),
    new T.MeshStandardMaterial({color:'#9badc1'})];
  const cloned=clonePropMaterial(a);
  assert.equal(cloned.length,2);
  assert.notEqual(cloned[0],a[0]);
  assert.notEqual(cloned[1],a[1]);
  assert.equal(cloned[1].color.getHexString(),'9badc1');
  cloned.forEach(material=>material.dispose());
  a.forEach(material=>material.dispose());
});

test('freeform silhouette extrudes and serializes into existing model and map formats',()=>{
  const profile=normalizeSketch(sketchPresets.angle);
  assert.equal(validateSketch(profile),null);
  const g=createSketchGeometry(profile);
  assert.ok(g.attributes.position.count>36);
  g.computeBoundingBox();
  assert.ok(g.boundingBox.getSize(new T.Vector3()).z>.25);
  g.dispose();
  const model={id:'custom-model-freeform-2026',name:'Décor sculpté',kind:'structure',
    parts:[{name:'Contour en L',shape:'custom',profile,position:[0,0,0],
      rotation:[0,0,0],scale:[1,1,1],color:'#ffffff',surface:'plain'}]};
  const pack=normalizeModelPack({version:1,models:[model]});
  assert.equal(pack.models[0].parts[0].shape,'custom');
  assert.deepEqual(pack.models[0].parts[0].profile.points,profile.points);
  const geometry=createModelUnitGeometry(pack.models[0]);
  assert.ok(geometry.attributes.position.count>36);
  geometry.dispose();
  const map=exampleMap();
  map.pieces[0].model=pack.models[0];
  assert.equal(parseMap(JSON.stringify(map)).pieces[0].model.parts[0].profile.points.length,6);
});
test('shape sketches support X-mirror contours and lathe geometry',()=>{
  const shield=normalizeSketch(sketchPresets.shield);
  assert.equal(validateSketch(shield),null);
  assert.ok(sketchOutline(shield).length>shield.points.length);
  const bottle=normalizeSketch(sketchPresets.bottle);
  assert.equal(validateSketch(bottle),null);
  const g=createSketchGeometry(bottle);
  assert.ok(g.attributes.normal.count>50);
  g.computeBoundingBox();
  assert.ok(g.boundingBox.getSize(new T.Vector3()).x>.3);
  g.dispose();
  const invalid=normalizeSketch({...sketchPresets.panel,points:[[-.5,-.5],[.5,.5],[.5,-.5],[-.5,.5]]});
  assert.match(validateSketch(invalid),/croise/);
});

test('model hitbox defaults to the bounding box of the complete geometry',()=>{
  const model={id:'custom-model-hitbox-auto',name:'Objet',inGame:true,kind:'prop',parts:[
    {name:'Corps',shape:'box',position:[1,0,0],rotation:[0,0,0],scale:[2,1,1],color:'#ffffff',surface:'plain'},
    {name:'Bout',shape:'sphere',position:[-1,0,0],rotation:[0,0,0],scale:[.5,.5,.5],color:'#ffffff',surface:'plain'}
  ]};
  const clean=normalizeModelPack({version:1,models:[model]}).models[0];
  assert.deepEqual(clean.hitbox,{mode:'auto'});
  const hitbox=modelHitbox(clean);
  const geometry=modelCollisionGeometry(clean);
  geometry.computeBoundingBox();
  const actual=geometry.boundingBox.getSize(new T.Vector3());
  assert.ok(actual.distanceTo(hitbox.size)<1e-6);
  geometry.dispose();
});
test('custom hitbox offset and size survive JSON, dynamic physics and map scaling',()=>{
  const model={id:'custom-model-hitbox-box',name:'Caisse',kind:'structure',inGame:true,
    hitbox:{mode:'box',center:[2.2,.3,-.25],size:[.4,.6,.8]},
    parts:[{name:'Bloc',shape:'box',position:[2,0,0],rotation:[0,0,0],
      scale:[1,1,1],color:'#ffffff',surface:'plain'}]};
  const clean=normalizeModelPack({version:1,models:[model]}).models[0];
  assert.deepEqual(clean.hitbox,model.hitbox);
  assert.deepEqual(normalizeModelPack(JSON.parse(JSON.stringify({version:1,models:[clean]}))).models[0].hitbox,model.hitbox);
  const dynamic=modelCollisionGeometry(clean);dynamic.computeBoundingBox();
  const center=dynamic.boundingBox.getCenter(new T.Vector3());
  const size=dynamic.boundingBox.getSize(new T.Vector3());
  assert.ok(center.distanceTo(new T.Vector3(.2,.3,-.25))<1e-6);
  assert.ok(size.distanceTo(new T.Vector3(.4,.6,.8))<1e-6);
  const mapGeo=modelCollisionGeometry(clean,new T.Vector3(8,2,4));
  mapGeo.computeBoundingBox();
  assert.ok(mapGeo.boundingBox.getCenter(new T.Vector3()).distanceTo(new T.Vector3(1.6,.6,-1))<1e-5);
  assert.ok(mapGeo.boundingBox.getSize(new T.Vector3()).distanceTo(new T.Vector3(3.2,1.2,3.2))<1e-5);
  const physicsDefs=createModelPropDefinitions({version:1,models:[clean]});
  physicsDefs[0].collisionGeo.computeBoundingBox();
  assert.ok(physicsDefs[0].collisionGeo.boundingBox.getCenter(new T.Vector3()).distanceTo(center)<1e-6);
  physicsDefs[0].collisionGeo.dispose();physicsDefs[0].geo.dispose();
  disposeModelMaterial(physicsDefs[0].material);
  const map=exampleMap();map.pieces[0].model=clean;
  assert.deepEqual(parseMap(JSON.stringify(map)).pieces[0].model.hitbox,model.hitbox);
  dynamic.dispose();mapGeo.dispose();
});
test('custom sphere, capsule and convex hitboxes build persisted collision geometry',()=>{
  const model={id:'custom-model-hitbox-shapes',name:'Formes',kind:'prop',parts:[
    {name:'Corps',shape:'box',position:[0,0,0],rotation:[0,0,0],scale:[2,1,.5],color:'#ffffff',surface:'plain'}
  ]};
  for(const shape of ['sphere','capsule','convex']){
    const clean=normalizeModelPack({version:1,models:[{...model,hitbox:{
      mode:'custom',shape,center:[.2,0,0],size:[1.2,.8,.6],rotation:[0,25,0],precision:96
    }}]}).models[0],preview=modelHitboxGeometry(clean),collision=modelCollisionGeometry(clean,new T.Vector3(4,2,1));
    preview.computeBoundingBox();collision.computeBoundingBox();
    assert.ok(preview.attributes.position.count>=12);assert.ok(collision.boundingBox.getSize(new T.Vector3()).x>0);
    assert.equal(clean.hitbox.shape,shape);assert.equal(clean.hitbox.precision,96);
    preview.dispose();collision.dispose();
  }
});
test('automatic convex precision constrains source mesh points',()=>{
  const model={id:'custom-model-hitbox-budget',name:'Enveloppe',kind:'prop',hitbox:{mode:'auto',shape:'convex',precision:24},parts:[
    {name:'Corps',shape:'box',position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],color:'#ffffff',surface:'plain'},
    {name:'Bras',shape:'box',position:[.7,0,0],rotation:[0,0,0],scale:[.3,.3,.3],color:'#ffffff',surface:'plain'}
  ]},clean=normalizeModelPack({version:1,models:[model]}).models[0],geometry=modelHitboxGeometry(clean);
  assert.ok(geometry.attributes.position.count/3>0);assert.ok(geometry.attributes.position.count/3<=44);geometry.dispose();
});
test('editable scenery identifiers round-trip inside map pieces',()=>{
  const map=exampleMap();map.pieces[0].sceneryId='lab-hill';assert.equal(parseMap(JSON.stringify(map)).pieces[0].sceneryId,'lab-hill');
});
test('model hitbox values are clamped and invalid modes use automatic collision',()=>{
  const model={id:'custom-model-hitbox-normal',name:'Test',parts:[
    {name:'Cube',shape:'box',position:[0,0,0],rotation:[0,0,0],
      scale:[.2,.2,.2],color:'#ffffff',surface:'plain'}],
    hitbox:{mode:'box',center:[999,-999,0],size:[0,-3,999]}};
  const clean=normalizeModelPack({version:1,models:[model]}).models[0];
  assert.deepEqual(clean.hitbox.center,[6,-6,0]);
  assert.deepEqual(clean.hitbox.size,[.025,.025,12]);
  assert.deepEqual(normalizeModelPack({version:1,models:[{...model,hitbox:{mode:'bad'}}]}).models[0].hitbox,{mode:'auto'});
});

test('terrain accepts intermediate mesh sizes, keeps sculpting and handles 32-bit indices',()=>{
 const piece={x:0,y:0,z:0,w:14,d:22,terrain:normalizeTerrain({detail:16})};
 assert.equal(sculptTerrain(piece,0,0,{mode:'raise',radius:2,strength:3}),true);
 assert.equal(terrainHeight(piece,0,0),3);
 for(const detail of [50,100,256]){
  piece.terrain=resizeTerrain(piece.terrain,detail);
  assert.equal(normalizeTerrain(piece.terrain).detail,detail);
  assert.equal(terrainHeight(piece,0,0),3);
  const geometry=terrainGeometry(piece);
  assert.equal(geometry.index.count/3,2*detail**2);
  if(detail===256)assert.equal(geometry.index.array.at(-3),66048);
  geometry.dispose();
 }
});

test('terrain vegetation and texture keep their density when area changes',()=>{
 const piece={x:0,y:0,z:0,w:5,d:5,terrain:normalizeTerrain({
  detail:16,grassDensity:2,shrubDensity:.2,textureDensity:4,
 })};
 for(const w of [5,10]){
  piece.w=w;
  const plants=terrainVegetation(piece);
  assert.deepEqual(plants.children.map(plant=>plant.count),[w*10,w]);
  disposeVegetation(plants);
  const geometry=terrainGeometry(piece);
  assert.equal(geometry.attributes.uv.getX(16),2*w);
  geometry.dispose();
 }
});

test('legacy vegetation percentages convert using the saved terrain area',()=>{
 const map=exampleMap();
 Object.assign(map.pieces[0],{w:50,d:50,terrain:{detail:16,grass:.5,shrub:.25}});
 const piece=parseMap(map).pieces[0];
 assert.equal(piece.terrain.rules[0].density,1600/2500);
 assert.equal(piece.terrain.rules[1].density,12/2500);
 const roundTrip=parseMap(parseMap(map)).pieces[0].terrain;
 assert.equal(roundTrip.rules[0].density,piece.terrain.rules[0].density);
 assert.equal(roundTrip.rules[1].density,piece.terrain.rules[1].density);
});

test('solid ramp has the slope, sides and bottom of its collision hull and keeps metre-based UVs',()=>{
 const geometry=rampGeometry(3,1,4);
 const mesh=new T.Mesh(geometry);
 const cast=(origin,direction)=>new T.Raycaster(new T.Vector3(...origin),new T.Vector3(...direction)).intersectObject(mesh)[0];
 assert.equal(geometry.attributes.position.count/3,8);
 assert.ok(Math.abs(cast([0,2,0],[0,-1,0]).point.y)<1e-6);
 assert.ok(Math.abs(cast([2,-.25,0],[-1,0,0]).point.x-1.5)<1e-6);
 assert.ok(Math.abs(cast([0,-2,0],[0,1,0]).point.y+.5)<1e-6);
 const hull=colliderFor(geometry);
 assert.equal(hull.vertices.length,6);
 assert.ok(hull.normals.some(n=>Math.abs(n.y)>.9&&Math.abs(n.z)>.1));
 const map=exampleMap();
 map.pieces[0].primitive='ramp';
 assert.equal(parseMap(JSON.stringify(map)).pieces[0].primitive,'ramp');
 delete map.pieces[0].primitive;
 map.pieces[0].pitch=16;
 const saved=parseMap(map).pieces[0];
 assert.equal(saved.primitive,'box');
 assert.equal(saved.pitch,16);
 const wider=rampGeometry(6,1,4);
 const areaUV=(g,i)=>g.attributes.uv.getX(i);
 assert.ok(Math.abs(areaUV(wider,1)-2*areaUV(geometry,1))<1e-6);
 transformUVs(wider,{uvScale:2});
 assert.ok(Math.abs(areaUV(wider,1)-areaUV(geometry,1))<1e-6);
 geometry.dispose();wider.dispose();
});

test('rotated models can keep either face or their centre during a scale',()=>{
 const start=new T.Vector3(1,0,0),rotation=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,0,1),Math.PI/2);
 const old=new T.Vector3(1,1,1),next=new T.Vector3(2,1,1);
 for(const bound of [-.5,.5]){
  const face=new T.Vector3(bound,0,0);
  const moved=modelFacePosition(start,rotation,face,old,next,false);
  const oldFace=face.clone().multiply(old).applyQuaternion(rotation).add(start);
  const newFace=face.clone().multiply(next).applyQuaternion(rotation).add(moved);
  assert.ok(oldFace.distanceTo(newFace)<1e-8);
 }
 assert.deepEqual(modelFacePosition(start,rotation,new T.Vector3(-.5,0,0),old,next,true),start);
});

test('three grouped pieces rotate and translate rigidly and retain group membership in JSON',()=>{
 const parts=[0,1,2].map(x=>({name:'Part '+x,group:2,shape:'box',position:[x,0,0],rotation:[0,0,0],scale:[.3,.3,.3]}));
 const q=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,0,1),Math.PI/2);
 const poses=modelGroupTransform(parts,new T.Vector3(1,0,0),{
  position:new T.Vector3(2,1,0),quaternion:q,scale:new T.Vector3(1,1,1),
 },new T.Vector3(-1.15,-.15,-.15),true);
 poses.forEach(({position},i)=>assert.ok(new T.Vector3(...position).distanceTo(new T.Vector3(2,i,0))<1e-8));
 const pack=normalizeModelPack({version:1,models:[{id:'custom-model-group-2026',parts:parts.map((part,i)=>({...part,...poses[i]}))}]});
 assert.deepEqual(JSON.parse(JSON.stringify(pack)).models[0].parts.map(part=>part.group),[2,2,2]);
 const scaled=modelGroupTransform(parts,new T.Vector3(1,0,0),{
  position:new T.Vector3(1,0,0),quaternion:new T.Quaternion(),scale:new T.Vector3(2,1,1),
 },new T.Vector3(-1.15,-.15,-.15),false);
 assert.ok(Math.abs(scaled[0].position[0]-.15)<1e-8);
 assert.equal(scaled[0].scale[0],.6);
});

test('lathe supports three and 128 segments and the regular tetrahedron has four equal-sided faces',()=>{
 const profile={mode:'lathe',points:[[.2,-.5],[.3,0],[.2,.5]]};
 const low=createSketchGeometry({...profile,segments:3});
 const high=createSketchGeometry({...profile,segments:128});
 assert.equal(low.index.count/3,18);
 assert.equal(high.index.count/3,768);
 const mesh=createModelPartGeometry({shape:'tetrahedron',position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]});
 const position=mesh.attributes.position;
 assert.equal(position.count,12);
 const edges=[];
 for(let i=0;i<position.count;i+=3){
  const a=new T.Vector3().fromBufferAttribute(position,i),b=new T.Vector3().fromBufferAttribute(position,i+1),c=new T.Vector3().fromBufferAttribute(position,i+2);
  edges.push(a.distanceTo(b),b.distanceTo(c),c.distanceTo(a));
 }
 assert.ok(Math.max(...edges)-Math.min(...edges)<1e-7);
 low.dispose();high.dispose();mesh.dispose();
});

test('terrain rules preserve dimensions, two colours, and deterministic placement per seed',()=>{
 const dimensions=new T.Vector3(4,2,1);
 assert.deepEqual(terrainRuleDimensions(dimensions,'keep',1).toArray(),[4,2,1]);
 assert.deepEqual(terrainRuleDimensions(dimensions,'fit',1).toArray(),[1,.5,.25]);
 assert.deepEqual(terrainRuleDimensions(dimensions,'fit',10).toArray(),[4,2,1]);
 assert.deepEqual(terrainRuleDimensions(dimensions,'stretch',1).toArray(),[1,1,1]);
 const map=exampleMap();
 Object.assign(map.pieces[0],{x:3,y:4,z:-2,w:4,d:4,terrain:{rules:[
  {kind:'grass',density:1,seed:7,colorA:'#001100',colorB:'#00ff00',collidable:true},
  {kind:'shrub',density:.5,seed:19},
  {kind:'grass',density:0,seed:20},
 ]}});
 const first=parseMap(map).pieces[0],second=parseMap(JSON.stringify(parseMap(map))).pieces[0];
 assert.deepEqual(first.terrain.rules,second.terrain.rules);
 const a=terrainVegetation(first),b=terrainVegetation(second);
 assert.deepEqual(a.children.map(plant=>plant.count),[16,8]);
 assert.deepEqual(a.children[0].instanceMatrix.array,b.children[0].instanceMatrix.array);
 assert.deepEqual(a.children[0].instanceColor.array,b.children[0].instanceColor.array);
 assert.ok(a.children[0].instanceColor.array[1]!==a.children[0].instanceColor.array[4]);
 const boxes=terrainInstanceBoxes(first,a);
 assert.equal(boxes.length,16);
 assert.ok(boxes.every(box=>box.position.y>4&&box.half.length()>0));
 disposeVegetation(a);disposeVegetation(b);
});

test('terrain stitch snaps small gaps and matches a different neighbour grid along the edge',()=>{
 const piece={x:0,y:0,z:0,w:10,d:10,terrain:normalizeTerrain({detail:16})};
 const neighbor={x:10.2,y:1,z:0,w:10,d:10,
  terrain:normalizeTerrain({detail:13,amplitude:.65,seed:9})};
 const result=stitchTerrain(piece,neighbor,1.5);
 assert.ok(result&&!result.clipped);
 assert.equal(result.piece.terrain.detail,26);
 const edge=neighbor.x-neighbor.w/2;
 assert.ok(Math.abs(result.piece.x+5-edge)<1e-9);
 for(let z=-5;z<=5;z+=.05)
  assert.ok(Math.abs(terrainHeight(result.piece,edge,z)-terrainHeight(neighbor,edge,z))<1e-8);
 assert.equal(terrainHeight(result.piece,result.piece.x,0),0);
 assert.equal(piece.terrain.heights,null);
 assert.equal(stitchTerrain(piece,{...neighbor,x:11}),null);
});

test('both scale handles anchor the opposite face of a rotated terrain',()=>{
 const original={x:4,y:0,z:3,w:2,h:1,d:4,pitch:0,yaw:90,roll:0,terrain:{}};
 const rotation=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),Math.PI/2);
 for(const sign of [-1,1]){
  const worldOffset=new T.Vector3(sign,0,0).applyQuaternion(rotation);
  const sides=scaleHandleSigns('X',worldOffset,rotation);
  assert.deepEqual(sides,[sign,1,1]);
  const expanded=resizedCenter(original,{w:4,h:1,d:4},false,sides);
  assert.ok(Math.abs(expanded.z-(3-sign))<1e-8);
  assert.deepEqual(resizedCenter(original,{w:4,h:1,d:4},true,sides),{x:4,y:0,z:3});
 }
});

test('terrain quarter turns preserve height, normals, sculpting, props and the neighbour seam',()=>{
 const terrain=normalizeTerrain({detail:8,amplitude:1,seed:19,rules:[{kind:'grass',density:.5,seed:11,collidable:true}]});
 const base={x:0,y:0,z:0,w:6,d:10,terrain};
 const turned={...base,yaw:90};
 const normal=new T.Vector3(),expected=new T.Vector3();
 const collider=terrainCollider(turned);
 assert.deepEqual([collider.xMin,collider.xMax,collider.zMin,collider.zMax],[-5,5,-3,3]);
 assert.ok(Math.abs(collider.height(2,-1)-terrainHeight(base,1,2))<1e-8);
 const rotation=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),Math.PI/2);
 terrainCollider(base).normalAt(1,2,expected).applyQuaternion(rotation);
 assert.ok(collider.normalAt(2,-1,normal).distanceTo(expected)<1e-8);
 const group=terrainVegetation(base);
 const [oldBox]=terrainInstanceBoxes(base,group),[newBox]=terrainInstanceBoxes(turned,group);
 assert.ok(oldBox.position.clone().applyQuaternion(rotation).distanceTo(newBox.position)<1e-7);
 assert.ok(newBox.quaternion.angleTo(rotation.clone().multiply(oldBox.quaternion))<1e-6);
 const sculpted={...turned,terrain:structuredClone(terrain)};
 assert.ok(sculptTerrain(sculpted,2,-1,{mode:'raise',radius:2,strength:1}));
 assert.ok(terrainHeight(sculpted,2,-1)>terrainHeight(turned,2,-1));
 const neighbor={...base,x:10,w:10,d:6,y:1,terrain:normalizeTerrain({detail:12})};
 const result=stitchTerrain(turned,neighbor);
 assert.ok(result&&!result.clipped);
 assert.ok(Math.abs(terrainHeight(result.piece,5,0)-terrainHeight(neighbor,5,0))<1e-8);
 const map=exampleMap();map.pieces[0]={...map.pieces[0],...turned};
 assert.equal(parseMap(JSON.stringify(map)).pieces[0].yaw,90);
 disposeVegetation(group);
});

test('props retain up to ten palette stops and render ten thousand models per rule',()=>{
 const colors=['#110000','#220000','#330000','#440000','#550000','#660000','#770000','#880000','#990000','#aa0000'];
 assert.deepEqual(normalizeTerrainRule({colorA:'#110000',colorB:'#220000'}).colors,colors.slice(0,2));
 assert.deepEqual(normalizeTerrainRule({colors:[...colors,'#bb0000']}).colors,colors);
 assert.equal(normalizeTerrainRule().colors.length,2);
 const map=exampleMap();
 const model={id:'custom-model-dense-props',parts:[{shape:'sphere'},{shape:'sphere'}]};
 const terrain=normalizeTerrain({rules:[
  {kind:'model',model,colors,density:20000,size:100,variation:5},
  {kind:'shrub',density:10000,collidable:true},
 ]});
 Object.assign(map.pieces[0],{w:2,d:2,terrain});
 const piece=parseMap(JSON.stringify(map)).pieces[0];
 assert.deepEqual(piece.terrain.rules[0].colors,colors);
 const props=terrainVegetation(piece);
 assert.deepEqual(props.children.map(row=>row.count),[10000,10000]);
 assert.equal(terrainInstanceBoxes(piece,props).length,10000);
 disposeVegetation(props);
});

test('a long capsule keeps a cylindrical section while a sphere keeps a uniform diameter',()=>{
 const pack={version:1,models:[{id:'custom-model-capsule-check',parts:[{shape:'box',scale:[3,.6,.6]}]}]};
 const [model]=normalizeModelPack(pack).models;
 model.hitbox={mode:'auto',shape:'capsule',precision:64};
 const capsule=modelCollisionGeometry(model);
 const positions=capsule.attributes.position;
 assert.ok(capsule.boundingBox.getSize(new T.Vector3()).distanceTo(new T.Vector3(3,.6,.6))<.02);
 const mid=Array.from({length:positions.count},(_,i)=>new T.Vector3().fromBufferAttribute(positions,i))
   .filter(p=>Math.abs(Math.abs(p.x)-1.2)<.005);
 assert.ok(mid.some(p=>Math.abs(Math.hypot(p.y,p.z)-.3)<.005));
 model.hitbox.shape='sphere';
 const sphere=modelCollisionGeometry(model);
 assert.ok(sphere.boundingBox.getSize(new T.Vector3()).distanceTo(new T.Vector3(3,3,3))<.04);
 capsule.dispose();sphere.dispose();
});

test('map decor has independent solid volumes and non-blocking enter and exit triggers',()=>{
 const original=globalThis.document;
 globalThis.document={querySelector:()=>({})};
 try{
  const arena={boxes:[],bakeLightmap(){},setEnvironment(value){this.environment=value;}};
  const maps=connectMaps({scene:new T.Scene(),arena,boot:new T.Vector3(),onReset(){},onVisual(){},getLevel:()=>0,defaultObjects:[]});
  const model={id:'custom-model-zones-check',name:'Porte',kind:'structure',partCollisions:true,parts:[
   {name:'Montant',shape:'box',zone:'solid',position:[-1,0,0],scale:[1,1,1]},
   {name:'Passage',shape:'box',zone:'pass',position:[1,0,0],scale:[1,1,1]},
   {name:'Capteur',shape:'box',zone:'trigger',position:[0,0,0],scale:[1,1,1]},
  ]};
  const map=exampleMap();
  Object.assign(map.pieces[0],{x:0,y:.5,z:0,w:3,h:1,d:1,solid:true,model});
  map.pieces=map.pieces.slice(0,1);
  map.environment={preset:1,fogNear:45};
  maps.load(JSON.stringify(map));
  assert.equal(arena.environment.preset,1);
  assert.equal(arena.environment.fogNear,45);
  assert.equal(arena.boxes.length,1);
  assert.equal(arena.boxes[0].position.x,-1);
  assert.deepEqual(maps.checkTriggers(new T.Vector3(0,1.6,0)).map(({phase,part})=>[phase,part]),[['enter','Capteur']]);
  assert.deepEqual(maps.checkTriggers(new T.Vector3(0,1.6,0)),[]);
  assert.deepEqual(maps.checkTriggers(new T.Vector3(2,1.6,0)).map(({phase})=>phase),['exit']);
  maps.reset();
  assert.equal(arena.environment,null);
  assert.deepEqual(maps.checkTriggers(new T.Vector3(0,1.6,0)),[]);
 }finally{globalThis.document=original;}
});

test('metric UVs repeat with placed dimensions and finish settings survive normalization',()=>{
 const model={id:'custom-model-finish-test',physics:{gravity:.5,bounce:1.2},inGame:true,
   parts:[{shape:'box',scale:[1,1,1],surface:'grid',finish:'metal',uv:{projection:'metric',repeat:2,angle:90,offset:[.2,-.3]}}]};
 const [saved]=normalizeModelPack({version:1,models:[model]}).models;
 assert.deepEqual(saved.physics,model.physics);
 assert.deepEqual(saved.parts[0].uv,model.parts[0].uv);
 const base=createModelUnitGeometry(saved,new T.Vector3(1,1,1));
 const stretched=createModelUnitGeometry(saved,new T.Vector3(3,3,3));
 const span=geometry=>{
  const uv=geometry.attributes.uv;
  const values=Array.from({length:uv.count},(_,i)=>uv.getX(i));
  return Math.max(...values)-Math.min(...values);
 };
 assert.ok(Math.abs(span(stretched)/span(base)-3)<1e-6);
 const metal=createModelPartMaterial(saved.parts[0]);
 const matte=createModelPartMaterial({...saved.parts[0],finish:'matte'});
 assert.equal(metal.metalness,.85);
 assert.ok(matte.roughness>metal.roughness);
 assert.equal(metal.map.wrapS,T.RepeatWrapping);
 base.dispose();stretched.dispose();disposeModelMaterial(metal);disposeModelMaterial(matte);
});

test('localized terrain noise is deterministic and independent from manual sculpting',()=>{
 const map=exampleMap();
 Object.assign(map.pieces[0],{x:0,y:2,z:0,w:20,d:10,terrain:{
  detail:20,amplitude:2,frequency:.2,octaves:10,seed:19,
  reliefArea:{x:-3,z:0,radius:3,blend:.5},
 }});
 const saved=parseMap(map),piece=saved.pieces[0],loaded=parseMap(JSON.stringify(saved)).pieces[0];
 const heights=[-4,-3,-2,8].map(x=>terrainHeight(piece,x,0));
 assert.deepEqual(heights,[-4,-3,-2,8].map(x=>terrainHeight(loaded,x,0)));
 assert.equal(loaded.terrain.octaves,10);
 assert.deepEqual(loaded.terrain.reliefArea,piece.terrain.reliefArea);
 assert.ok(heights.slice(0,3).some(height=>Math.abs(height-2)>.05));
 assert.equal(heights[3],2);
 assert.ok(sculptTerrain(piece,8,0,{mode:'raise',radius:1.5,strength:1}));
 assert.ok(terrainHeight(piece,8,0)>2);
 assert.equal(terrainHeight(piece,10,0),2);
});

test('terrain prop filters honor area, slope, altitude, and orientation across JSON round trips',()=>{
 const map=exampleMap();
 Object.assign(map.pieces[0],{x:0,y:2,z:0,w:20,d:10,terrain:{rules:[
  {kind:'shrub',density:.5,seed:7,scatter:{minX:50,yaw:90,yawVariation:0}},
  {kind:'shrub',density:1,scatter:{minHeight:3,maxHeight:9}},
 ]}});
 const saved=parseMap(map),piece=saved.pieces[0],loaded=parseMap(JSON.stringify(saved)).pieces[0];
 const first=terrainVegetation(piece),second=terrainVegetation(loaded);
 assert.deepEqual(first.userData.distribution,[{requested:50,count:50,area:100},{requested:0,count:0,area:0}]);
 assert.deepEqual(first.children[0].instanceMatrix.array,second.children[0].instanceMatrix.array);
 const matrix=new T.Matrix4(),position=new T.Vector3(),rotation=new T.Quaternion(),scale=new T.Vector3();
 for(let index=0;index<first.children[0].count;index++){
  first.children[0].getMatrixAt(index,matrix);
  matrix.decompose(position,rotation,scale);
  assert.ok(position.x>=0&&position.x<=10);
  assert.ok(new T.Vector3(0,0,1).applyQuaternion(rotation).x>.99);
 }
 const slope={...piece,w:2,d:2,terrain:normalizeTerrain({detail:1,heights:[-.5,.5,-.5,.5],rules:[
  {kind:'shrub',density:1,scatter:{maxSlope:20}},{kind:'shrub',density:1,scatter:{maxSlope:45}},
 ]})};
 const inclined=terrainVegetation(slope);
 assert.deepEqual(inclined.userData.distribution.map(rule=>rule.count),[0,4]);
 disposeVegetation(first);disposeVegetation(second);disposeVegetation(inclined);
});

test('map environment normalizes imported values and survives a map JSON round trip',()=>{
 const old=exampleMap();
 assert.equal(parseMap(old).environment,undefined);
 const map=parseMap({...old,environment:{
  preset:2,sky:'image',skyImage:'data:image/webp;base64,UklGRg==',rotation:45,
  fog:false,fogNear:100,fogFar:60,sunColor:'invalid',sunPower:0,
 }});
 assert.equal(map.environment.sky,'image');
 assert.equal(map.environment.rotation,45);
 assert.equal(map.environment.fog,false);
 assert.equal(map.environment.fogFar,101);
 assert.equal(map.environment.sunColor,'#879eff');
 assert.equal(map.environment.sunPower,0);
 assert.deepEqual(parseMap(JSON.stringify(map)).environment,map.environment);
 const invalid=parseMap({...old,environment:{sky:'image',skyImage:'https://example.test/sky.jpg'}});
 assert.equal(invalid.environment.sky,'preset');
 assert.equal(invalid.environment.skyImage,null);
});
