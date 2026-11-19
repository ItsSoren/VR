import {labMirror} from './lab-layout.js';
import {makePiece} from './map-format.js';

export const editableArenaIds = new Set(['lab-hill', 'chrome-sphere', 'lab-mirror']);

export function defaultMirrorPiece(){
  return makePiece({name:'Miroir',sceneryId:'lab-mirror',x:labMirror.x,y:labMirror.y,z:labMirror.z+.064,
    w:1.8,h:2.03,d:.1,yaw:180,material:7});
}

export function shouldKeepArenaAsset(map,id,mappedAssets,mappedScenery){
  if(!map)return true;
  if(!map.arenaBase)return false;
  return !id||(!mappedAssets.has(id)&&!mappedScenery.has(id)&&!(map.editableArena&&editableArenaIds.has(id)));
}
