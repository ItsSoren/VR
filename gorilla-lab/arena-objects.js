import * as T from 'three';
import {makeLabProps} from './lab-props.js';
import {boxCollider,colliderFor} from './physics.js';
import {labObjectSlots} from './lab-layout.js';

// Game and editor share geometry, materials and the ten startup slots.
// Keep catalog order stable: main.js also uses these indexes for multiplayer.
export const startupTypes=[0,1,2,3,4,5,7,8,9,10];
export function forEachStartupObject(visit){
  labObjectSlots.forEach(({x,z},i)=>visit(startupTypes[i],new T.Vector3(x,.8,z)));
}
export function createArenaObjectSpecs(){
  const objectSpecs=[
    ['Cube',new T.BoxGeometry(.33,.33,.33),'#b76b50',0,1.35],
    ['Boule',new T.IcosahedronGeometry(.225,2),'#73afcb',.225,.85],
    ['Tétraèdre',new T.TetrahedronGeometry(.29),'#d8ae53',0,1],
    ['Brique',new T.BoxGeometry(.56,.19,.28),'#b35a71',0,1.5],
    ['Grand rectangle',new T.BoxGeometry(1.42,.75,.88),'#738aa5',0,4.2],
    ['Grande sphère',new T.IcosahedronGeometry(.60,4),'#dbab58',.60,3.7],
  ].map(([name,geo,color,sphere,mass])=>({name,geo,mass,shape:colliderFor(geo,sphere),
    material:new T.MeshStandardMaterial({color,roughness:.44,metalness:.1,flatShading:true}),
    lowShape:sphere?null:boxCollider(geo.computeBoundingBox()??geo.boundingBox.getSize(new T.Vector3()).multiplyScalar(.5)),
  }));
  // Leave the old network type 6 vacant so later type IDs stay stable.
  objectSpecs.length=7;
  for(const {collisionGeo,sphere=0,...spec} of makeLabProps()){
    const hull=colliderFor(collisionGeo??spec.geo,sphere);
    objectSpecs.push({...spec,shape:hull,lowShape:hull});
  }
  return objectSpecs;
}

