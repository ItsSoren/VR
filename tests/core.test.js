import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createArcadeBlaster} from '../gorilla-lab/arcade-blaster.js';
import {updateGroundHaptics} from '../gorilla-lab/ground-haptics.js';
import {parseMap,exampleMap} from '../gorilla-lab/map-format.js';
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
