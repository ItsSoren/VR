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
import {normalizeModelPack,createModelUnitGeometry,modelDimensions} from '../gorilla-lab/model-pack.js';
import {createKeyboardState} from '../gorilla-lab/flat-controls.js';
import {screenPixelRatio} from '../gorilla-lab/screen-render.js';
import {terrainHeight,sculptTerrain} from '../gorilla-lab/terrain-edit.js';

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
