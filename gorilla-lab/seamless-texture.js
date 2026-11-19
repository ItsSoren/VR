import {paintPattern} from './texture-studio.js';

export const texturePresets=['Pierre','Terre','Herbe','Sable','Bois','Carreaux'];
const colors=['#727986','#795a45','#66834b','#c8ad71','#a17449','#657b82'];
const patterns=['rock','soil','grass','sand','wood','tiles'];
export function seamlessTexture(index,tint){
  index=Math.max(0,Math.min(texturePresets.length-1,index|0));
  const canvas=document.createElement('canvas');
  canvas.width=canvas.height=512;
  paintPattern(canvas,{pattern:patterns[index],base:tint??colors[index],seed:(index+45)*31337});
  return canvas;
}
