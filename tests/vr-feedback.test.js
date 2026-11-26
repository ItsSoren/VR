import test from 'node:test';
import assert from 'node:assert/strict';
import {Euler, IcosahedronGeometry, Object3D, Quaternion, Vector3} from 'three';
import {boxCollider, colliderFor, objectPhysicsStats, palmContact, solveObjects} from '../gorilla-lab/physics.js';
import {createObjectFeed, mapCode} from '../gorilla-lab/cloud-link.js';
import {createSphereBenchmark} from '../gorilla-lab/sphere-benchmark.js';
import {GorillaLocomotion} from '../gorilla-lab/locomotion.js';
import {makePiece, parseMap, snapPlacement} from '../gorilla-lab/map-format.js';
import {decodeRoomMapLink, encodeRoomMapLink} from '../gorilla-lab/room-map-link.js';
import {floorBox} from './object-fixtures.js';

test('lowered controllers gain downward reach without moving the view or a horizontal grip',()=>{
  const hand={mesh:{quaternion:new Quaternion()},valid:true,target:new Vector3()};
  const locomotion=new GorillaLocomotion(Vector3,[hand],palmContact);
  const head=new Vector3(0,.87,0),movement=new Vector3(),velocity=new Vector3();
  const pose={head,dt:.011,gravity:9.81,settings:{arms:5},boxes:[],velocity,movement,reach:1};
  hand.target.set(.2,.14,0);locomotion.move(pose);
  assert.ok(hand.locomotionTarget.y<.05);
  assert.equal(hand.locomotionTarget.x,.2);
  assert.equal(head.y,.87);
  hand.target.set(.7,.87,0);locomotion.move(pose);
  assert.deepEqual(hand.locomotionTarget.toArray(),hand.target.toArray());
});

test('a fast grip sweep stops on the entry side of a centimetre-thick rotated slab',()=>{
  const half=new Vector3(1,.005,1),center=new Vector3(0,.1,0);
  const rotation=new Quaternion().setFromEuler(new Euler(.31,0,.1));
  const up=new Vector3(0,1,0).applyQuaternion(rotation);
  const slab={position:center,quaternion:rotation,half,min:half.clone().negate(),shape:boxCollider(half)};
  const point=new Vector3(),normal=new Vector3();
  for(const side of [-1,1]){
    const start=center.clone().addScaledVector(up,side*.7);
    const end=center.clone().addScaledVector(up,-side*.6);
    assert.equal(palmContact(start,end,new Quaternion(),[slab],point,normal),slab);
    assert.ok(normal.dot(up)*side>.98);
    assert.ok(point.clone().sub(center).dot(up)*side>.005);
  }
});

test('one centimetre of solid terrain still stops a palm crossing in one frame from either side',()=>{
  const field={heightfield:true,xMin:-1,xMax:1,zMin:-1,zMax:1,thickness:.01,
    height:(x,z)=>x*.23+z*.09,normalAt:(_x,_z,n)=>n.set(-.23,1,-.09).normalize()};
  const point=new Vector3(),normal=new Vector3();
  for(const side of [-1,1]){
    const start=new Vector3(.1,side*.62,0),end=new Vector3(.6,-side*.89,.2);
    assert.equal(palmContact(start,end,new Quaternion(),[field],point,normal),field);
    assert.ok(normal.y*side>.9);
  }
});

function ball(radius,y){
  const mesh=new Object3D();mesh.position.y=y;
  const shape=colliderFor(new IcosahedronGeometry(radius,0),radius);
  return {mesh,shape,radius,mass:3.7,velocity:new Vector3(),angular:new Vector3(),collidable:true,netType:5};
}

test('spinning stacked spheres stay finite without paying for their visual rotation in the physics budget',()=>{
  const lower=ball(.6,.6),upper=ball(.225,1.425);
  upper.angular.set(0,30,0);
  const floor=floorBox();
  for(let i=0;i<15;i++){
    solveObjects([lower,upper],[floor],.035,9.81,0);
    assert.ok(objectPhysicsStats.substeps<=6);
    assert.ok(lower.mesh.position.y>=.599&&upper.mesh.position.y>=1.42);
  }
});

test('a sphere held by a player receives the fast update cadence regardless of its size',()=>{
  const body=ball(.6,1);body.netId=1;body.owner={};
  const feed=createObjectFeed();
  assert.ok(feed.capture(0,[body]).full);
  body.mesh.position.x=.4;
  assert.equal(feed.capture(100,[body]).records.length,1);
});

test('an edited workshop can be serialized with the same room identity and its import can be cancelled',async()=>{
  const draft={format:'gorilla-lab-map',version:1,name:'Atelier VR',pieces:[]};
  const map=parseMap(draft);
  const block=snapPlacement(new Vector3(),new Vector3(0,1,0),makePiece({brushRadius:2,brushStrength:.5,terrain:null}));
  const [piece]=parseMap({...draft,pieces:[block]}).pieces;
  map.pieces.push(piece);
  const encoded=await encodeRoomMapLink(map,true);
  const raw=await decodeRoomMapLink(encoded,16_000_000);
  assert.equal(mapCode(JSON.stringify(parseMap(raw))),mapCode(JSON.stringify(map)));
  const controller=new AbortController();controller.abort();
  await assert.rejects(decodeRoomMapLink(encoded,16_000_000,controller.signal),{name:'AbortError'});
});

test('a virtual crouch offsets hand intent but retains the last sweep origin',()=>{
  const hand={mesh:{quaternion:new Quaternion()},valid:true,target:new Vector3(0,.4,0)};
  const locomotion=new GorillaLocomotion(Vector3,[hand],()=>null);
  const movement=new Vector3(),velocity=new Vector3();
  locomotion.move({head:new Vector3(0,.85,0),dt:.012,gravity:0,settings:{arms:5},boxes:[],velocity,movement,reach:1});
  locomotion.finish(movement,velocity,.024);
  const state=locomotion.hands[0];
  assert.ok(Math.abs(state.previousTarget.y-(hand.locomotionTarget.y-.024))<1e-10);
  assert.ok(Math.abs(state.previousPalm.y-(hand.locomotionTarget.y+state.offset.y))<1e-10);
});

test('an untracked support discards its previous launch samples',()=>{
  const hand={mesh:{quaternion:new Quaternion()},valid:false};
  const locomotion=new GorillaLocomotion(Vector3,[hand],()=>null);
  hand.surface={};
  locomotion.hands[0].tracked=true;
  locomotion.history[0].duration=.02;
  locomotion.pushDuration=.02;
  locomotion.move({head:new Vector3(),dt:.012,gravity:0,settings:{arms:5},boxes:[hand.surface],
    velocity:new Vector3(),movement:new Vector3(),reach:1});
  assert.equal(locomotion.history[0].duration,0);
  assert.equal(locomotion.pushDuration,0);
});

test('the sphere benchmark measures baseline and six drops separately',()=>{
  const bench=createSphereBenchmark();
  bench.start('VR',{auto:true});
  const frame={mode:'VR',frameMs:10,physicsCpuMs:1,physicsSubsteps:2,qualityActive:5};
  assert.equal(bench.sample({...frame,mode:'PC',frameMs:1700}),null);
  const commands=[];
  for(let i=0;i<670;i++){
    const command=bench.sample(i<160?frame:{...frame,physicsCpuMs:3,physicsSubsteps:6,qualityActive:4});
    if(command)commands.push(command);
  }
  assert.deepEqual(commands,['drop','drop','drop','drop','drop','drop','complete']);
  const result=bench.snapshot('VR');
  assert.equal(result.status,'completed');
  assert.equal(result.baseline.samples,160);
  assert.equal(result.baseline.meanPhysicsMs,1);
  assert.equal(result.collision.samples,510);
  assert.equal(result.collision.maxSubsteps,6);
  assert.equal(result.collision.meanPhysicsMs,3);
  assert.deepEqual(result.collision.qualityRange,[4,4]);
  assert.equal(bench.snapshot('PC'),null);
  bench.start('VR',{auto:false});
  bench.sample(frame);
  assert.equal(bench.cancel('interrupted'),true);
  assert.equal(bench.sample(frame),null);
  assert.equal(bench.snapshot().baseline.samples,1);
});

test('direct map signalling uses the existing numeric room packet for offers and answers',async()=>{
  const {encodeMapSignal,decodeMapSignal}=await import('../gorilla-lab/direct-map.js');
  const {encodeAvatar,decodeAvatar,encodePose}=await import('../gorilla-lab/cloud-link.js');
  const stamp=Date.now();
  const base=encodePose({time:stamp,id:1234567,x:0,y:0,z:0,yaw:0,map:4321},true);
  for(const type of ['offer','answer']){
    const description={type,sdp:'v=0\r\na=group:BUNDLE 0\r\n'};
    const signal=encodeMapSignal(3456789,4321,description);
    const value=encodeAvatar(base,null,null,{version:6,ready:true,roomSource:signal});
    assert.match(value,/^\d+$/);
    assert.deepEqual(decodeMapSignal(decodeAvatar(value,stamp).roomSource),{target:3456789,map:4321,description});
  }
  assert.equal(decodeMapSignal('rtc:1234567:1:o:%%%'),null);
});

test('direct map chunks preserve the encoded document and reject excessive data',async()=>{
  const {createMapReceiver}=await import('../gorilla-lab/direct-map.js');
  const source='gzip:'+'a'.repeat(3_160_000);
  const receiver=createMapReceiver();
  assert.equal(receiver.push('size:'+source.length),null);
  let complete;
  for(let i=0;i<source.length;i+=16384)complete=receiver.push(source.slice(i,i+16384));
  assert.equal(complete,source);
  assert.equal(receiver.progress.loaded,source.length);
  assert.throws(()=>receiver.push('a'));
  assert.throws(()=>createMapReceiver().push('size:99999999'));
});

test('an authored terrain catches palms crossing diagonally near its edge, from both sides',async()=>{
  const {terrainCollider}=await import('../gorilla-lab/terrain-edit.js');
  for(const thickness of [0,.01]){
    const field=terrainCollider({x:0,y:0,z:0,w:512,d:512,yaw:0,terrain:{detail:64,amplitude:0,seed:1,frequency:.02,octaves:1,thickness}},null);
    const rotation=new Quaternion(),point=new Vector3(),normal=new Vector3();
    for(const side of [-1,1]){
      const plank=side<0?-thickness:0;
      assert.equal(palmContact(new Vector3(256.05,plank+side*.24,0),new Vector3(255.93,plank-side*.24,0),rotation,[field],point,normal),field);
      assert.ok(normal.y*side>.99);
      assert.ok((point.y-plank)*side>0);
    }
  }
});

test('progressive transfer sends collision geometry before sorted original-size images',async()=>{
  const {prepareProgressiveMap,decodeMapCore,putMapImage}=await import('../gorilla-lab/progressive-map.js');
  const floorTexture='data:image/webp;base64,UklGRg==';
  const skyImage='data:image/png;base64,'+'a'.repeat(200);
  const full=parseMap({format:'gorilla-lab-map',version:1,name:'Lune',
    environment:{sky:'image',skyImage},
    pieces:[makePiece({texture:floorTexture}),makePiece({terrain:{detail:16,amplitude:0}})]});
  const staged=prepareProgressiveMap(full);
  const {map:core,images}=await decodeMapCore(await staged.core);
  const base=parseMap(core);
  assert.deepEqual(images,[0,-1]);
  assert.equal(base.pieces[0].texture,null);
  assert.equal(base.environment.sky,'preset');
  assert.deepEqual(base.pieces[1],full.pieces[1]);
  assert.equal(putMapImage(base,0,'file:///example.png'),false);
  for(const item of staged.images)assert.equal(putMapImage(base,item.index,item.source),true);
  assert.deepEqual(base,full);
  assert.equal(mapCode(JSON.stringify(base)),mapCode(JSON.stringify(full)));
});

test('the guest becomes ready on the core and applying the panorama does not rebuild physics',async()=>{
  const T=await import('three');
  const {connectMaps}=await import('../gorilla-lab/custom-maps.js');
  const {prepareProgressiveMap}=await import('../gorilla-lab/progressive-map.js');
  const original=globalThis.document;
  globalThis.document={querySelector:()=>({})};
  try{
    let resets=0,environment;
    const arena={boxes:[],bakeLightmap(){},setEnvironment(value){environment=value;},mapMaterial:()=>new T.MeshStandardMaterial()};
    const maps=connectMaps({scene:new T.Scene(),arena,boot:new Vector3(),onReset(){resets++;},onVisual(){},getLevel:()=>0,defaultObjects:[]});
    const image='data:image/png;base64,'+'a'.repeat(200);
    const map=parseMap({format:'gorilla-lab-map',version:1,name:'Lune',environment:{sky:'image',skyImage:image},pieces:[makePiece()]});
    const transfer=prepareProgressiveMap(map),id=mapCode('custom-'+mapCode(JSON.stringify(map)));
    assert.equal(await maps.loadRoomCore(await transfer.core,id,()=>true),1);
    assert.equal(maps.roomMapId,id);
    assert.equal(environment.sky,'preset');
    assert.equal(resets,1);
    const collider=arena.boxes[0];
    assert.equal(maps.loadRoomImage(-1,image,id),true);
    assert.equal(arena.boxes[0],collider);
    assert.equal(resets,1);
    assert.equal(maps.roomMapId,null);
    assert.equal(mapCode(maps.signature),id);
    assert.equal(environment.skyImage,image);
  }finally{
    if(original===undefined)delete globalThis.document;
    else globalThis.document=original;
  }
});

test('the direct channel waits for the core to be applied before sending lossless binary images',async()=>{
  const {createDirectMapSession}=await import('../gorilla-lab/direct-map.js');
  const original=globalThis.RTCPeerConnection;
  const connections=[];
  const channel=()=>({readyState:'connecting',bufferedAmount:0,close(){this.readyState='closed';},
    send(data){queueMicrotask(()=>this.peer.onmessage?.({data}));}});
  const down=channel(),up=channel();
  down.peer=up;up.peer=down;
  globalThis.RTCPeerConnection=class{
    constructor(){connections.push(this);this.iceGatheringState='complete';}
    async createOffer(){return {type:'offer',sdp:'offer'};}
    async createAnswer(){return {type:'answer',sdp:'answer'};}
    async setLocalDescription(data){this.localDescription=data;}
    async setRemoteDescription(data){
      if(data.type==='offer')this.ondatachannel({channel:up});
      else{
        down.readyState=up.readyState='open';
        down.onopen();up.onopen();
      }
    }
    createDataChannel(){return down;}
    close(){}
  };
  const core='gzip:abc';
  const image='data:image/png;base64,'+Buffer.alloc(25_003,177).toString('base64');
  let host,guest,received;
  try{
    const parts=[];
    const finished=new Promise(resolve=>{received=resolve;});
    guest=createDirectMapSession({target:1234567,map:1,onSource:async(source,section)=>{
      parts.push([section,source]);
      if(section==='core')return 1;
      received();
      return true;
    }});
    host=createDirectMapSession({target:2345678,map:1,upload:{full:Promise.resolve(null),
      progressive:{core:Promise.resolve(core),images:[{index:-1,source:image}]}}});
    await host.accept({type:'offer',sdp:'offer'});
    assert.equal(parts.length,0);
    await guest.accept({type:'answer',sdp:'answer'});
    let timer;
    try{
      await Promise.race([finished,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('No image arrived')),1000);})]);
    }finally{clearTimeout(timer);}
    assert.deepEqual(parts,[['core',core],['image:-1',image]]);
  }finally{
    guest?.close();host?.close();
    if(original===undefined)delete globalThis.RTCPeerConnection;
    else globalThis.RTCPeerConnection=original;
  }
});

test('a sideways box held by either a local player or an invited player can push off the floor',()=>{
  const cases=[{held:{}},{remoteHeld:17}];
  const shape=boxCollider(new Vector3(.22,.09,.12));
  const floor=floorBox();
  for(const grip of cases){
    const hand={...grip,mesh:{quaternion:new Quaternion()},valid:true,target:new Vector3(),
      hasSupport:true,supportShape:shape,supportOffset:new Vector3(0,-.18,0),supportRotation:new Quaternion()};
    const locomotion=new GorillaLocomotion(Vector3,[hand],palmContact);
    const velocity=new Vector3(),movement=new Vector3(),rig=new Vector3(),head=new Vector3();
    let launch=false;
    for(let i=0;i<14;i++){
      hand.target.set(-i*.01,.41-i*.028,0).add(rig);
      head.set(0,.85,0).add(rig);
      locomotion.move({head,dt:1/90,gravity:9.81,settings:{arms:5,grip:5,slide:3,jump:5,weight:5},
        boxes:[floor],velocity,movement,reach:1.2});
      rig.add(movement);
      launch||=locomotion.finish(movement,velocity).launched;
      if(launch)break;
    }
    assert.ok(launch && velocity.y>0);
  }
});

test('item state shares the object packet without changing its color or record size',async()=>{
  const {encodeObjectState,encodeAvatar,decodeAvatar,encodePose}=await import('../gorilla-lab/cloud-link.js');
  const {Color}=await import('three');
  const stamp=Date.now();
  const base=encodePose({time:stamp,id:1234567,x:0,y:0,z:0,yaw:0,map:4321},true);
  const body={netId:12,netType:8,mesh:{position:new Vector3(),quaternion:new Quaternion(),material:{color:new Color(0xbd6140)}},
    velocity:new Vector3(),angular:new Vector3(),itemState:3};
  const record=encodeObjectState(body,true);
  assert.equal(record.length,encodeObjectState({...body,itemState:0},true).length);
  const avatar={head:new Quaternion()};
  const packet=encodeAvatar(base,avatar,{full:true,records:[record]},{version:6,ready:true});
  const decoded=decodeAvatar(packet,stamp).objects.records[0];
  assert.equal(decoded.itemState,3);
  assert.equal(decoded.color,0xbd6140);
});

test('the phone only responds inside physical key areas and a bite shrinks its collision hull',async()=>{
  const {phoneKeyAt,itemShape}=await import('../gorilla-lab/held-items.js');
  assert.equal(phoneKeyAt(new Vector3(-.03,.0475,.014)),0);
  assert.equal(phoneKeyAt(new Vector3(0,-.0575,.014)),10);
  assert.equal(phoneKeyAt(new Vector3(-.015,.0475,.014)),-1);
  const shape=boxCollider(new Vector3(.28,.05,.05));
  const chewed=itemShape({id:'bread',shape},true,2);
  assert.ok(Math.abs(Math.max(...chewed.vertices.map(p=>p.x))-.14)<1e-6);
});

test('each lit torch has a beam and adds a separate dynamic light',async()=>{
  const {Scene,Object3D}=await import('three');
  const {createHeldItems}=await import('../gorilla-lab/held-items.js');
  const scene=new Scene(),items=createHeldItems(scene,()=>null,assert.fail);
  const lamps=Array.from({length:4},()=>new Object3D());
  items.beginLights();
  for(const lamp of lamps)items.considerLight(lamp,true,new Vector3());
  items.update(.016);
  assert.equal(scene.children.filter(light=>light.isSpotLight&&light.intensity>0).length,4);
  for(const lamp of lamps)assert.equal(lamp.children[0].children.length,2);
  items.beginLights();items.considerLight(lamps[0],false,new Vector3());
  items.considerLight(lamps[1],true,new Vector3());items.update(.016);
  assert.equal(scene.children.filter(light=>light.isSpotLight&&light.intensity>0).length,1);
  assert.equal(lamps[0].children[0].visible,false);
});

test('phone photos reassemble out of order and remain associated with their object',async()=>{
  const {createPhoneShare,splitPhoto}=await import('../gorilla-lab/phone-share.js');
  const bytes=new Uint8Array(4420);
  bytes.set(new TextEncoder().encode('RIFF0000WEBPVP8 '));
  bytes.set([0x9d,1,0x2a,240,0,150,0],23);
  const source=Buffer.from(bytes).toString('base64');
  const parts=splitPhoto(19,'abcdef123456',source);
  assert.equal(parts.length,3);
  const host=createPhoneShare();
  for(const part of parts)assert.equal(host.receive(part,5,0,()=>false),null);
  let result;
  for(const part of parts.toReversed())result=host.receive(part,5,1,id=>id===19);
  assert.deepEqual(result,{id:19,revision:'abcdef123456',source});
  assert.ok(host.publish(result.id,result.source,1));
  assert.equal(host.get(19),source);
  assert.equal(host.get(20),undefined);
  assert.ok(host.frame(2).startsWith('photo:19:'));
  host.sent(2);
  assert.equal(host.frame(102),null);
  bytes[27]=1;
  assert.deepEqual(splitPhoto(19,'abcdef123456',Buffer.from(bytes).toString('base64')),[]);
});

test('the hand rig retains thickness at the wrist when the controller rolls and bends',async()=>{
  const {MeshBasicMaterial}=await import('three');
  const {createHandSkin}=await import('../gorilla-lab/hand-skin.js');
  const {createBodySkin}=await import('../gorilla-lab/body-skin.js');
  const material=new MeshBasicMaterial();
  const skins=['left','right'].map(side=>createHandSkin(side,material,{openWrist:true}));
  const rig=createBodySkin(material,skins.map(s=>({geometry:s.mesh.geometry,wristIndices:s.wristIndices})));
  for(const pitch of [-Math.PI/2,0,Math.PI/2])for(const roll of [-Math.PI/2,0,Math.PI/2]){
    const hands=skins.map((s,i)=>{
      s.pose([1,1,1]);
      return {position:new Vector3(i?.42:-.42,.02,-.44),quaternion:new Quaternion().setFromEuler(new Euler(pitch,0,roll))};
    });
    rig.pose(hands,.48,.87,.71,true);
    const vertices=rig.mesh.geometry.attributes.position;
    for(const ring of [108,114,120]){
      const a=new Vector3().fromBufferAttribute(vertices,ring);
      const b=new Vector3().fromBufferAttribute(vertices,ring+3);
      assert.ok(a.distanceTo(b)>.025);
    }
    assert.ok(vertices.array.every(Number.isFinite));
  }
});
