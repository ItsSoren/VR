import test from 'node:test';
import assert from 'node:assert/strict';
import {Euler, IcosahedronGeometry, Object3D, Quaternion, Vector3} from 'three';
import {boxCollider, colliderFor, objectPhysicsStats, palmContact, solveObjects} from '../gorilla-lab/physics.js';
import {createObjectFeed, mapCode} from '../gorilla-lab/cloud-link.js';
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
