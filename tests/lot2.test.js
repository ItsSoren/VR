import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {solveObjects,objectPhysicsStats} from '../gorilla-lab/physics.js';
import {restoreObject,outsideObjectWorld} from '../gorilla-lab/object-lifecycle.js';
import {phoneBody,floorBox} from './object-fixtures.js';
const step=(b,boxes,n=1)=>{for(let i=0;i<n;i++)solveObjects(b,boxes,1/60,9.81,.35);};
test('GL006 exact phone hull settles without persistent pose jitter',()=>{
 const b=phoneBody();step([b],[floorBox()],600);
 const p=b.mesh.position.clone(),q=b.mesh.quaternion.clone();step([b],[floorBox()],120);
 assert.ok(b.sleeping);assert.ok(b.mesh.position.distanceTo(p)<.00001);assert.ok(b.mesh.quaternion.angleTo(q)<.00001);
});
test('GL006 sleeping phone wakes after an external throw impulse',()=>{
 const b=phoneBody();step([b],[floorBox()],600);assert.ok(b.sleeping);
 b.velocity.set(2,3,0);const x=b.mesh.position.x;step([b],[floorBox()]);
 assert.ok(!b.sleeping);assert.ok(b.mesh.position.x>x);
});
test('GL007 isolated fast thin object does not impose 96 substeps on supported objects',()=>{
 const rest=phoneBody();step([rest],[floorBox()],600);
 const flying=phoneBody(25,-3,0);flying.velocity.set(0,-90,0);flying.angular.set(0,25,0);
 step([rest,flying],[floorBox()]);
 assert.equal(objectPhysicsStats.free,1);assert.ok(objectPhysicsStats.substeps<=3);
 assert.ok(flying.mesh.position.y<-4);
});
test('GL007 swept fast path keeps thin floor collision active',()=>{
 const b=phoneBody(0,.16,0);b.velocity.set(0,-20,0);
 step([b],[floorBox()]);
 assert.equal(objectPhysicsStats.free,0);assert.ok(objectPhysicsStats.substeps>3);assert.ok(b.mesh.position.y>=.009);
});
test('GL007 upward acceleration keeps a ceiling in the swept collision set',()=>{
 const ceiling=floorBox();ceiling.mesh.position.y=1;
 const b=phoneBody(0,.32,0);b.velocity.y=10;
 solveObjects([b],[ceiling],.03,-9.81,.35);
 assert.equal(objectPhysicsStats.free,0);assert.ok(b.mesh.position.y<.5);
});
test('GL009 noncollidable released item falls through solid floor',()=>{
 const b=phoneBody(0,.1,0);b.collidable=false;step([b],[floorBox()],60);
 assert.ok(b.mesh.position.y<-1);
});
test('GL009 frozen and held objects do not acquire gravity',()=>{
 const frozen=phoneBody(),held=phoneBody(1,.5,0);frozen.frozen=true;held.owner={};
 step([frozen,held],[floorBox()],60);
 assert.equal(frozen.mesh.position.y,.5);assert.equal(held.mesh.position.y,.5);
});
test('GL009 two overlapping released phone hulls separate',()=>{
 const a=phoneBody(0,2,0),b=phoneBody(.04,2,0);step([a,b],[],2);
 assert.ok(Math.abs(a.mesh.position.y-b.mesh.position.y)>.0265);
});
test('GL010 restore preserves authored rotation and clears motion and sleep',()=>{
 const b=phoneBody();const p=b.start.clone(),q=b.startRotation.clone();
 b.mesh.position.set(10,-100,2);b.mesh.rotation.set(1,2,3);b.velocity.set(4,5,6);b.angular.set(7,8,9);b.sleeping=true;
 restoreObject(b);assert.deepEqual(b.mesh.position.toArray(),p.toArray());assert.ok(b.mesh.quaternion.angleTo(q)<1e-7);
 assert.equal(b.velocity.length()+b.angular.length(),0);assert.ok(!b.sleeping);assert.ok(b.beforePhysics.equals(p));
});
test('GL008 world bounds are deterministic and reject invalid positions',()=>{
 assert.equal(outsideObjectWorld(new T.Vector3(0,-9,0),false),true);
 assert.equal(outsideObjectWorld(new T.Vector3(0,-9,0),true),false);
 assert.equal(outsideObjectWorld(new T.Vector3(NaN,0,0),true),true);
 const b=phoneBody();for(let i=0;i<100;i++){b.mesh.position.y=-30;if(outsideObjectWorld(b.mesh.position,true))restoreObject(b);}
 assert.ok(b.mesh.position.equals(b.start));
});
test('GL006 sleeping object wakes when its support is removed',()=>{
 const b=phoneBody();step([b],[floorBox()],600);step([b],[],2);assert.ok(!b.sleeping);assert.ok(b.velocity.y<0);
});
test('GL006 tilted phone hulls settle and remain finite',()=>{
 for(const tilt of [.25,.6,1.1]){
 const b=phoneBody();b.mesh.rotation.set(tilt,.3,.2);step([b],[floorBox()],900);
 assert.ok(b.sleeping);assert.ok(Number.isFinite(b.mesh.position.y));assert.ok(b.mesh.position.y>0);
 }
});
test('GL009 sleeping item is woken and pushed by another dynamic item',()=>{
 const a=phoneBody();step([a],[floorBox()],600);assert.ok(a.sleeping);
 const b=phoneBody(-.2,a.mesh.position.y,0);b.velocity.x=4;
 step([a,b],[floorBox()],5);assert.ok(a.mesh.position.x>.001);
});
