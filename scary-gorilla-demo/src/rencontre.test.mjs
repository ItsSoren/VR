import assert from 'node:assert/strict';
import test from 'node:test';
import * as T from 'three';
import {createEncounter} from './rencontre.mjs';
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

test('expedition finishes on escape and restarts cleanly after a catch',()=>{
  const original=globalThis.document;
  const objective={textContent:''},grain={value:'19'};
  globalThis.document={
    querySelector(selector){return selector==='#demo-grain'?grain:objective;},
    createElement(){return {getContext(){return {fillRect(){},strokeRect(){},fillText(){}};}};},
  };
  try {
    let resets=0,time=0;
    const messages=[];
    const scene=new T.Scene(),camera=new T.PerspectiveCamera();
    const game=createExperience({T,scene,audioContext:()=>null,announce:text=>messages.push(text),goHome:()=>resets++});
    const head=new T.Vector3();
    const walk=(x,y,z)=>{
      head.set(x,y,z);
      camera.position.copy(head);
      camera.updateMatrixWorld();
      game.update({head,camera,dt:step,time:time+=step});
    };
    const purge=()=>{
      walk(0,.69,-13.5);
      walk(2.8,.69,-41.45);
      const direction=new T.Vector3(...locations.valve).sub(head).normalize();
      assert(game.desktopInteract(head,direction));
      walk(0,.69,locations.archiveEntrance-.15);
      assert.equal(game.state().encounter,'hidden');
      walk(0,.69,-50);
      assert.equal(game.state().encounter,'observing');
    };
    purge();
    walk(0,.69,-46.8);
    assert.equal(game.state().encounter,'retreating');
    walk(0,.69,.33);
    assert(game.state().complete);
    game.reset();
    purge();
    for(let i=0;i<750&&resets===0;i++)walk(0,.69,-51.5);
    assert.equal(resets,1);
    assert.equal(game.state().encounter,'hidden');
    assert.equal(game.state().purge,false);
    assert.match(messages.at(-1),/Rattrapé/);
  }finally{globalThis.document=original;}
});
