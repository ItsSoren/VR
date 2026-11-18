import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {solve} from '../gorilla-lab/physics.js';
import {calibratedHeight,torsoBend,removeInwardVelocity,bodyProxyOffset} from '../gorilla-lab/player-pose.js';
const box={position:new T.Vector3(0,.5,0),quaternion:new T.Quaternion(),half:new T.Vector3(.5,.5,.5),min:new T.Vector3(-.5,-.5,-.5),friction:.8};
test('GL001 seated reference rises, crouching is preserved, reset accepts new seat',()=>{
 let reference=calibratedHeight(NaN,.9);
 reference=calibratedHeight(reference,1.7); assert.equal(reference,1.7);
 assert.equal(calibratedHeight(reference,1.1),1.7);
 assert.equal(calibratedHeight(NaN,.8),.8);
 assert.equal(calibratedHeight(reference,NaN),1.7);
});
test('GL002 torso bend is bounded, continuous and deeper looking down',()=>{
 assert.ok(Math.abs(torsoBend(0,0))<1e-10);
 assert.ok(torsoBend(1,0)<-1);
 assert.equal(torsoBend(1,0),torsoBend(2,0));
 for(let d=0;d<=1;d+=.02)assert.ok(Number.isFinite(torsoBend(d,.2)));
});
test('GL003 PC foot has flat support near four edges and corners inside cube',()=>{
 for(const x of [-.49,0,.49])for(const z of [-.49,0,.49]){
 const p=new T.Vector3(x,1.179,z),v=new T.Vector3(0,-.1,0),support={normal:new T.Vector3()};
 assert.ok(solve(p,.18,[box],v,0,3,.016,support));
 assert.ok(support.normal.distanceTo(new T.Vector3(0,1,0))<1e-6);
 assert.ok(Math.abs(p.x-x)<1e-6&&Math.abs(p.z-z)<1e-6);
 }
});
test('GL004 PC proxy positions do not change with heading or visual torso bend',()=>{
 for(const yaw of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
 const back=new T.Vector3(.3,0,.12).applyAxisAngle(new T.Vector3(0,1,0),yaw);
 assert.equal(bodyProxyOffset(false,back,.9,new T.Vector3()).length(),0);
 assert.ok(bodyProxyOffset(true,back,.9,new T.Vector3()).length()>0);
 }
});
test('GL005 head contact cancels ascent, preserves tangent, gravity resumes',()=>{
 const v=new T.Vector3(2,4,1);removeInwardVelocity(v,new T.Vector3(0,-1,0));
 assert.deepEqual(v.toArray(),[2,0,1]);
 v.y-=9.81/60;assert.ok(v.y<0);
 removeInwardVelocity(v,new T.Vector3(0,-1,0));assert.ok(v.y<0);
});

