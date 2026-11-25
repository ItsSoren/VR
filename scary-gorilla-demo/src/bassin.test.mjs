import assert from 'node:assert/strict';
import test from 'node:test';
import * as T from 'three';
import {createWaterEffects} from './bassin.mjs';
import {createExperience} from './experience.mjs';
import {locations} from './level.mjs';

test('water leaves the walkway dry and tracks entering, wading and diving',()=>{
  const scene=new T.Scene();
  const water=createWaterEffects(T,scene,locations.water);
  const sheet=scene.children.find(mesh=>mesh.renderOrder===3);
  const caustics=scene.children.find(mesh=>mesh.renderOrder===2);
  const {left,right,near,far,surface,bed}=locations.water;
  assert.equal(sheet.position.y,surface);
  assert(caustics.position.y>bed && caustics.position.y<surface);
  assert.equal(sheet.geometry.parameters.width,right-left);
  assert.equal(sheet.geometry.parameters.height,near-far);
  const {wake,wet,age}=sheet.material.uniforms;
  const update=(x,y,z,time,submerged=false,changed=false)=>water.update({
    head:new T.Vector3(x,y,z),time,submerged,changed,
  });
  update(2.7,.69,-41,1);
  assert(wake.value.z<0);
  update(-.8,.12,-40,2);
  assert.deepEqual(wake.value.toArray(),[-.8,-40,2]);
  update(-.8,.12,-40,3);
  assert.equal(wake.value.z,2);
  update(-.4,.12,-40,3.4);
  assert.deepEqual(wake.value.toArray(),[-.4,-40,3.4]);
  update(-.4,-.2,-40,3.5,true,true);
  assert.equal(wet.value,1);
  assert.equal(wake.value.z,3.5);
  assert.equal(caustics.material.uniforms.age,age);
  water.reset();
  assert.equal(wet.value,0);
  assert.equal(wake.value.z,.5);
});

test('reset while underwater restores the original fog immediately',()=>{
  const original=globalThis.document;
  globalThis.document={
    querySelector:()=>({value:'19'}),
    createElement:()=>({getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})}),
  };
  try{
    const scene=new T.Scene(),camera=new T.PerspectiveCamera();
    const fog=new T.Fog('#627989',7,54);
    scene.fog=fog;
    const game=createExperience({T,scene,audioContext:()=>null,announce(){},goHome(){}});
    const head=new T.Vector3(-.6,-.18,-41);
    game.update({head,camera,dt:1/90,time:2});
    assert.equal(game.state().submerged,true);
    assert.notEqual(scene.fog,fog);
    game.reset();
    assert.equal(game.state().submerged,false);
    assert.equal(scene.fog,fog);
  }finally{globalThis.document=original;}
});

test('purge lowers the water and clears underwater fog, while pause freezes the drain',()=>{
  const original=globalThis.document;
  globalThis.document={
    querySelector:()=>({value:'19'}),
    createElement:()=>({getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})}),
  };
  try{
    const scene=new T.Scene(),camera=new T.PerspectiveCamera();
    const originalFog=new T.Fog('#627989',7,54);
    scene.fog=originalFog;
    const game=createExperience({T,scene,audioContext:()=>null,announce(){},goHome(){}});
    const valve=new T.Vector3(...locations.valve);
    const origin=new T.Vector3(2.80,.69,-41.45);
    assert(game.desktopInteract(origin,valve.sub(origin).normalize()));
    const head=new T.Vector3(-.6,-.18,-41);
    let time=0;
    const tick=(paused=false)=>game.update({head,camera,dt:.02,time:time+=.02,paused});
    tick();
    assert(game.state().submerged);
    const start=game.state().waterHeight;
    for(let i=0;i<400;i++)tick(true);
    assert.equal(game.state().waterHeight,start);
    for(let i=0;i<350;i++)tick();
    assert(game.state().waterHeight<locations.water.bed+.02);
    assert.equal(game.state().submerged,false);
    assert.equal(scene.fog,originalFog);
    assert.equal(scene.children.find(mesh=>mesh.renderOrder===3).visible,false);
    game.reset();
    assert.equal(game.state().waterHeight,locations.water.surface);
    assert.equal(scene.children.find(mesh=>mesh.renderOrder===3).visible,true);
  }finally{globalThis.document=original;}
});
