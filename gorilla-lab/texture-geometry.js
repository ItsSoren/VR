import * as T from 'three';

// Planar UVs in metre units so cubes and elongated walls share the same texel density.
export function tiledBox(w,h,d){
  const geometry=new T.BoxGeometry(w,h,d);
  const {uv,normal}=geometry.attributes;
  for(let i=0;i<uv.count;i++){
    const side=Math.abs(normal.getX(i))>.5,top=Math.abs(normal.getY(i))>.5;
    const width=side?d:w,height=top?d:h;
    uv.setXY(i,uv.getX(i)*width/2.6,uv.getY(i)*height/2.6);
  }
  return geometry;
}
