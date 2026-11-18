import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {pulseHand,updateGroundHaptics} from '../gorilla-lab/ground-haptics.js';
import {readTurnAxis,consumeSnap} from '../gorilla-lab/snap-turn.js';
import {createDiagnostics} from '../gorilla-lab/diagnostics.js';
import {createDebugView} from '../gorilla-lab/debug-view.js';
import {createSettings} from '../gorilla-lab/game-settings.js';
import {boxCollider} from '../gorilla-lab/physics.js';
test('GL011 an appui during cooldown is deferred instead of lost',()=>{
 let calls=0;const hand={valid:true,gamepad:{hapticActuators:[{pulse(){calls++;}}]},groundContact:true};
 updateGroundHaptics(hand,true,.001);
 hand.groundContact=false;updateGroundHaptics(hand,true,.01);
 hand.groundContact=true;updateGroundHaptics(hand,true,.01);
 assert.equal(calls,1);updateGroundHaptics(hand,true,.07);assert.equal(calls,2);
 updateGroundHaptics(hand,true,.5);assert.equal(calls,2);
});
test('GL011 enabling while planted triggers once and disabling cancels pending',()=>{
 let calls=0;const h={valid:true,groundContact:true,gamepad:{hapticActuators:[{pulse(){calls++;}}]}};
 updateGroundHaptics(h,false,.1);updateGroundHaptics(h,true,.1);assert.equal(calls,1);
 updateGroundHaptics(h,false,.1);assert.equal(h.hapticPending,false);
});
test('GL011 configured appui intensity and duration reach the actuator',()=>{
 let received;const h={valid:true,groundContact:true,gamepad:{hapticActuators:[{pulse(...args){received=args;}}]}};
 updateGroundHaptics(h,true,.01,.28,40);assert.deepEqual(received,[.28,40]);
});
test('GL011 unsupported, rejected and throwing actuators are reported',async()=>{
 const absent={};assert.equal(pulseHand(absent),false);assert.equal(absent.hapticStats.last,'unsupported');
 const rejected={gamepad:{hapticActuators:[{pulse:()=>Promise.resolve(false)}]}};
 pulseHand(rejected);await Promise.resolve();assert.equal(rejected.hapticStats.failed,1);
 const broken={gamepad:{hapticActuators:[{pulse(){throw Error('disconnected');}}]}};
 assert.equal(pulseHand(broken),false);assert.equal(broken.hapticStats.last,'error');
});
test('GL011 dual rumble fallback drives both channels and records completion',async()=>{
 let effect,parameters;const h={gamepad:{vibrationActuator:{playEffect(e,p){effect=e;parameters=p;return Promise.resolve('complete');}}}};
 pulseHand(h);await Promise.resolve();assert.equal(effect,'dual-rumble');
 assert.ok(parameters.strongMagnitude>0&&parameters.weakMagnitude>0);assert.equal(h.hapticStats.accepted,1);
});
test('GL012 four-axis and two-axis controllers map horizontal turn consistently',()=>{
 assert.equal(readTurnAxis({axes:[0,0,-.8,0]}),-.8);assert.equal(readTurnAxis({axes:[.9,0]}),.9);
 assert.equal(readTurnAxis({axes:[NaN,0]}),0);
});
test('GL012 held stick turns once, neutral rearms, opposite turn follows neutral',()=>{
 const state={armed:true};
 assert.equal(consumeSnap(state,.8),1);assert.equal(consumeSnap(state,.9),0);
 consumeSnap(state,0);assert.equal(consumeSnap(state,-.8),-1);
});
test('GL012 menu turn is explicit and blocked mode cannot fire on close',()=>{
 const a={armed:true};assert.equal(consumeSnap(a,.8,{menu:true,allowMenu:true}),1);
 const b={armed:true};assert.equal(consumeSnap(b,.8,{menu:true,allowMenu:false}),0);
 assert.equal(consumeSnap(b,.8),0);consumeSnap(b,0);assert.equal(consumeSnap(b,.8),1);
});
function context(overrides={}){
 const settings=createSettings(false);
 return {settings,boxes:[],bodies:[],hands:[],locomotion:{hands:[]},velocity:new T.Vector3(0,0,-2),head:new T.Vector3(0,1,0),body:new T.Vector3(),neck:new T.Vector3(),proxies:[],gravity:9.81,appliedMove:new T.Vector3(),playerActive:true,inVR:false,viewQuaternion:new T.Quaternion(),...overrides};
}
function item(x=0){
 const mesh=new T.Mesh(new T.BoxGeometry(.2,.2,.2),new T.MeshBasicMaterial());mesh.position.set(x,1,-1);
 return {mesh,shape:boxCollider(new T.Vector3(.1,.1,.1)),blocksPlayer:true,collidable:true,velocity:new T.Vector3(1,0,0),radius:.2};
}
test('GL013 player vectors are displayed in front of the eye instead of at its origin',()=>{
 const scene=new T.Scene(),view=createDebugView(scene),ctx=context();ctx.settings.debugForces=true;
 view.update(ctx);const positions=scene.children[0].geometry.attributes.position;
 assert.ok(view.stats.segments>0);assert.ok(positions.getZ(0)<-.4);
});
test('GL013 moving items have their own velocity arrows',()=>{
 const scene=new T.Scene(),view=createDebugView(scene),ctx=context({playerActive:true,bodies:[item()]});ctx.settings.debugForces=true;
 view.update(ctx);const withItem=view.stats.segments;ctx.bodies=[];view.update(ctx);
 assert.ok(withItem>view.stats.segments);
});
test('GL014 item collision and visual mesh overlays are independently selectable',()=>{
 const scene=new T.Scene(),view=createDebugView(scene),obj=item(),ctx=context({bodies:[obj]});
 ctx.settings.debugHitboxes=true;view.update(ctx);assert.ok(view.stats.segments>0);
 obj.collidable=false;view.update(ctx);assert.equal(view.stats.segments,0);
 ctx.settings.debugHitboxes=false;ctx.settings.debugMesh=true;view.update(ctx);assert.ok(view.stats.segments>0);
});
test('GL014 range and object filters remove far or excluded geometry',()=>{
 const view=createDebugView(new T.Scene()),ctx=context({bodies:[item(100)]});ctx.settings.debugHitboxes=true;
 view.update(ctx);assert.equal(view.stats.segments,0);
 ctx.bodies=[item()];ctx.settings.debugObjects=false;view.update(ctx);assert.equal(view.stats.segments,0);
});
test('GL014 budget truncates explicitly and disables without uploading stale lines',()=>{
 const scene=new T.Scene(),view=createDebugView(scene),ctx=context({bodies:Array.from({length:100},()=>item())});
 ctx.settings.debugHitboxes=true;ctx.settings.debugBudget=1;view.update(ctx);
 assert.ok(view.stats.truncated);assert.ok(view.stats.vertices<=2000);
 const attr=scene.children[0].geometry.attributes.position,version=attr.version;
 ctx.settings.debugHitboxes=false;view.update(ctx);assert.equal(view.stats.vertices,0);assert.equal(attr.version,version);
 assert.equal(scene.children[0].geometry.drawRange.count,0);
});
test('GL014 overlay construction never adds physics bodies to input arrays',()=>{
 const ctx=context({bodies:[item()]}),view=createDebugView(new T.Scene());ctx.settings.debugHitboxes=true;
 view.update(ctx);assert.equal(ctx.bodies.length,1);assert.equal(ctx.boxes.length,0);
});
test('GL015 frame/event history is bounded and snapshots retain their own values',()=>{
 const d=createDiagnostics(3);for(let i=0;i<10;i++)d.sample({frameMs:i,physicsCpuMs:i/10});
 for(let i=0;i<60;i++)d.record('test',{index:i});
 const s=d.snapshot();assert.equal(s.frames.length,3);assert.equal(s.events.length,40);assert.equal(s.metrics.frameMs.max,9);
 d.sample({frameMs:100});assert.equal(s.metrics.frameMs.max,9);
 assert.equal(s.gpuMs,null);assert.match(s.gpuNote,/not measured/);
});
test('GL015 PC and VR samples remain distinct in captured metrics',()=>{
 const d=createDiagnostics();d.sample({mode:'PC',frameMs:16});d.sample({mode:'VR',frameMs:11});
 assert.equal(d.snapshot('PC').metrics.frameMs.median,16);
 assert.equal(d.snapshot('VR').metrics.frameMs.median,11);
 assert.equal(d.snapshot('missing').metrics.frameMs.median,null);
});

