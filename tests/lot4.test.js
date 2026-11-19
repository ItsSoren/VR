import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {arenaMap,parseMap} from '../gorilla-lab/map-format.js';
import {defaultMirrorPiece,shouldKeepArenaAsset} from '../gorilla-lab/arena-map-pieces.js';

test('GL016 legacy arena drafts drop the tree and its five fixture coconuts',()=>{
  const base=arenaMap([{mesh:new T.Object3D(),position:new T.Vector3(),half:new T.Vector3(1,1,1)}]);
  base.pieces.push({name:'Cocotier',model:{assetId:'palm-tree'}},{name:'Coco 3',model:{assetId:'spawn-coconut'}});
  assert.equal(parseMap(JSON.stringify(base)).pieces.length,1);
});

test('GL018 authored mirror and arena deletions survive export, with legacy fallback',()=>{
  const input={format:'gorilla-lab-map',version:1,arenaBase:true,pieces:[{name:'Floor'},defaultMirrorPiece()]};
  const legacy=parseMap(input);
  assert.equal(shouldKeepArenaAsset(legacy,'lab-hill',new Set(),new Set()),true);
  const edited=parseMap({...input,editableArena:true});
  edited.pieces[1].x=12;edited.pieces[1].yaw=35;
  const saved=parseMap(JSON.stringify(edited));
  assert.equal(saved.pieces[1].sceneryId,'lab-mirror');
  assert.equal(saved.pieces[1].x,12);assert.equal(saved.pieces[1].yaw,35);
  assert.equal(shouldKeepArenaAsset(saved,'lab-hill',new Set(),new Set()),false);
  assert.equal(shouldKeepArenaAsset(saved,undefined,new Set(),new Set()),true);
});

test('GL020 arena serialization preserves all rotations and bounce in v1 maps',()=>{
  const mesh=new T.Object3D();mesh.rotation.set(.2,.5,.3,'YXZ');
  const map=arenaMap([{mesh,position:mesh.position,quaternion:mesh.quaternion,half:new T.Vector3(1,2,3),bounce:1.4}]);
  const [piece]=parseMap(JSON.stringify(map)).pieces;
  const restored=new T.Quaternion().setFromEuler(new T.Euler(...[piece.pitch,piece.yaw,piece.roll].map(T.MathUtils.degToRad),'YXZ'));
  assert.ok(restored.angleTo(mesh.quaternion)<1e-7);
  assert.equal(piece.bounce,1.4);
});
test('GL016 retired palm, coconuts and target cannot return from custom map imports',()=>{
 const pieces=[{name:'Floor'},...['palm-tree','spawn-coconut','range-target'].map(assetId=>({name:assetId,model:{assetId}})),
   {name:'Old target',sceneryId:'range-target'},{name:'Target ring in imported model',
    model:{id:'custom-target',parts:[{shape:'asset',assetId:'target-ring-inner'}]}}];
 const map=parseMap({format:'gorilla-lab-map',version:1,pieces});
 assert.deepEqual(map.pieces.map(piece=>piece.name),['Floor']);
});
