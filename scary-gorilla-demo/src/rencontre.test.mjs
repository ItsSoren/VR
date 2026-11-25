import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import test from 'node:test';
import * as T from 'three';
import {archiveLineClear,createEncounter} from './rencontre.mjs';
import {createExperience} from './experience.mjs';
import {locations} from './level.mjs';

const step=1/90;
const player={x:0,y:.69,z:-50};

test('the two archive routes have continuous floors and space for the player',()=>{
  const published=new URL('../bunker.json',import.meta.url);
  const map=JSON.parse(readFileSync(existsSync(published)?published:new URL('../site/bunker.json',import.meta.url),'utf8'));
  const solids=map.pieces.filter(p=>p.solid!==false&&!p.pitch&&!p.yaw&&!p.roll).map(p=>({
    name:p.name,box:new T.Box3().setFromCenterAndSize(new T.Vector3(p.x,p.y,p.z),new T.Vector3(p.w,p.h,p.d)),
  }));
  const paths=[
    [[0,-31.55],[0,-34.7],[2.8,-34.7],[2.8,-46.45],[0,-46.45],[0,-51.6],[1.53,-51.6],[1.53,-56.45]],
    [[1.53,-56.45],[1.55,-49],[6.3,-49],[6.3,-31.55],[0,-31.55]],
    [[0,-46.13],[0,-49.01]],
  ];
  for(const route of paths)for(let i=1;i<route.length;i++){
    const [xa,za]=route[i-1],[xb,zb]=route[i];
    const count=Math.ceil(Math.hypot(xb-xa,zb-za)/.045);
    for(let j=0;j<=count;j++){
      const x=xa+(xb-xa)*j/count,z=za+(zb-za)*j/count;
      assert(solids.some(({box})=>Math.abs(box.max.y)<.001&&x>=box.min.x&&x<=box.max.x&&z>=box.min.z&&z<=box.max.z),`Gap at ${x}, ${z}`);
      for(const [y,radius] of [[.185,.178],[.694,.105]]){
        const occupied=new T.Sphere(new T.Vector3(x,y,z),radius);
        const obstruction=solids.find(({box})=>box.intersectsSphere(occupied));
        assert(!obstruction,`${obstruction?.name} at ${x}, ${z}`);
      }
    }
  }
});

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
