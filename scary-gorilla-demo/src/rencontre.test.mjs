import assert from 'node:assert/strict';
import test from 'node:test';
import * as T from 'three';
import {archiveLineClear,createEncounter} from './rencontre.mjs';
import {createExperience} from './experience.mjs';
import {locations} from './level.mjs';

const step=1/90;
const player={x:0,y:.69,z:-50};

function atPursuit() {
  const encounter=createEncounter();
  encounter.start();
  for(let i=0;i<180&&encounter.phase==='observing';i++)encounter.update(step,player,false);
  assert.equal(encounter.phase,'pursuing');
  return encounter;
}

test('lamp slows the pursuit without stopping it',()=>{
  const unlit=atPursuit(),lit=atPursuit();
  let fast=0,slow=0;
  for(let i=0;i<45;i++){
    fast+=unlit.update(step,player,false).distance;
    slow+=lit.update(step,player,true).distance;
  }
  assert(fast>.65&&slow>.15&&slow<fast*.4);
});

test('creature turns back at the archive doorway and does not follow into the pumps',()=>{
  const creature=atPursuit();
  const outside={x:1,y:.69,z:locations.archiveEntrance+.1};
  assert.equal(creature.update(step,outside,false).event,'escaped');
  assert.equal(creature.phase,'retreating');
  for(let i=0;i<600&&creature.phase!=='gone';i++){
    assert(creature.position.z<locations.archiveEntrance);
    creature.update(step,outside,false);
  }
  assert.equal(creature.phase,'gone');
  creature.start();
  assert.equal(creature.phase,'gone');
});

test('shelves confine the pursuit and close range triggers a catch once',()=>{
  const creature=atPursuit();
  const byShelf={x:3.6,y:.69,z:-55};
  for(let i=0;i<180;i++)creature.update(step,byShelf,false);
  assert(creature.position.x<=2.28);
  const near={...creature.position,y:.69};
  assert.equal(creature.update(step,near,false).event,'caught');
  assert.equal(creature.update(step,near,false).event,null);
  creature.reset();
  assert.equal(creature.phase,'hidden');
});

test('creature detours around the opaque shelf and lets the player escape by the service passage',()=>{
  const creature=atPursuit();
  const target={x:2.05,y:.69,z:-54.25};
  assert(!archiveLineClear(creature.position,target));
  let outcome=null;
  for(let i=0;i<700&&!outcome;i++){
    const previous={...creature.position};
    outcome=creature.update(step,target,false).event;
    assert(archiveLineClear(previous,creature.position,.25));
  }
  assert.equal(outcome,'caught');
  const second=atPursuit();
  assert.equal(second.update(step,{x:4.25,y:.69,z:-49},false).event,'escaped');
});

test('expedition requires delivery and preserves the purge after a catch',()=>{
  const original=globalThis.document;
  const objective={textContent:''},grain={value:'19'};
  globalThis.document={
    querySelector(selector){return selector==='#demo-grain'?grain:objective;},
    createElement(){return {getContext(){return {fillRect(){},strokeRect(){},fillText(){}};}};},
  };
  try {
    let time=0;
    const messages=[],resets=[];
    const scene=new T.Scene(),camera=new T.PerspectiveCamera();
    const game=createExperience({T,scene,audioContext:()=>null,announce:text=>messages.push(text),goHome:position=>resets.push(position)});
    const head=new T.Vector3();
    const walk=(x,y,z)=>{
      head.set(x,y,z);
      camera.position.copy(head);
      camera.updateMatrixWorld();
      game.update({head,camera,dt:step,time:time+=step});
    };
    const aimAt=(location)=>game.desktopInteract(head,new T.Vector3(...location).sub(head).normalize());
    const purge=()=>{
      walk(0,.69,-13.5);
      walk(5.7,.69,-41.45);
      assert.equal(aimAt(locations.valve),false);
      walk(2.8,.69,-41.45);
      assert(aimAt(locations.valve));
      walk(0,.69,locations.archiveEntrance-.15);
      assert.equal(game.state().encounter,'hidden');
      walk(0,.69,-50);
      assert.equal(game.state().encounter,'observing');
    };
    walk(1.58,.69,-56.45);
    assert(aimAt(locations.recorder));
    assert.equal(game.state().hasRecorder,false);
    purge();
    walk(1.58,.69,-56.45);
    assert(aimAt(locations.recorder));
    assert(game.state().hasRecorder);
    walk(4.35,.69,-49);
    assert.equal(game.state().encounter,'retreating');
    walk(0,.69,.33);
    assert.equal(game.state().complete,false);
    walk(1.21,.69,1.59);
    assert(aimAt(locations.receiver));
    assert(game.state().complete);
    game.reset();
    assert.equal(game.state().purge,false);
    purge();
    walk(1.58,.69,-56.45);
    const hand={target:new T.Vector3(...locations.recorder),grip:false};
    assert(game.grip(hand,true,false));
    assert(game.state().hasRecorder);
    for(let i=0;i<750&&resets.length===0;i++)walk(0,.69,-51.5);
    assert.deepEqual(resets,[locations.checkpoint]);
    assert.equal(game.state().encounter,'hidden');
    assert.equal(game.state().purge,true);
    assert.equal(game.state().hasRecorder,false);
    assert.match(messages.at(-1),/Rattrapé/);
    walk(...locations.checkpoint);
    walk(0,.69,-50);
    assert.equal(game.state().encounter,'observing');
    assert(game.grip(hand,true,false));
    assert(game.state().hasRecorder);
  }finally{globalThis.document=original;}
});
