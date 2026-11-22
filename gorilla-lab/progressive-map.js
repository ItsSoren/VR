import {encodeRoomMapLink,decodeRoomMapLink,roomMapImportBytes} from './room-map-link.js';

export function splitMapImages(map){
  const core={...map,pieces:map.pieces.slice()},images=[];
  for(const [index,piece] of map.pieces.entries()){
    if(!piece.model&&piece.texture){
      core.pieces[index]={...piece,texture:null};
      images.push({index,source:piece.texture});
    }
  }
  if(map.environment?.sky==='image'&&map.environment.skyImage){
    core.environment={...map.environment,sky:'preset',skyImage:null};
    images.push({index:-1,source:map.environment.skyImage});
  }
  images.sort((a,b)=>a.source.length-b.source.length);
  return {core,images};
}
export function prepareProgressiveMap(map){
  const {core,images}=splitMapImages(map);
  if(!images.length)return null;
  return {
    core:encodeRoomMapLink({map:core,images:images.map(image=>image.index)},true),
    images,
  };
}
export async function decodeMapCore(source,maxBytes=roomMapImportBytes){
  const data=JSON.parse(await decodeRoomMapLink(source,maxBytes));
  if(!Array.isArray(data.images)||!data.images.length||data.images.length>513||
      new Set(data.images).size!==data.images.length||
      !data.images.every(i=>Number.isInteger(i)&&i>=-1&&i<(data.map?.pieces?.length??0)))throw Error('Liste des images invalide.');
  return data;
}
export function putMapImage(map,index,source){
  const image=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/]+={0,2}$/i;
  if(typeof source!=='string'||source.length>(index===-1?6_666_700:1_000_000)||!image.test(source))return false;
  if(index===-1){
    if(!map.environment)return false;
    map.environment.sky='image';
    map.environment.skyImage=source;
  }else{
    if(!map.pieces[index]||map.pieces[index].model)return false;
    map.pieces[index].texture=source;
  }
  return true;
}
