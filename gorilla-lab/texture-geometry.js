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

// Edit texture coordinates per piece, never mutate a shared texture used elsewhere.
export function transformUVs(geometry,piece){
  const uv=geometry.attributes.uv;
  if(!uv)return geometry;
  const scale=1/(piece.uvScale??1),angle=(piece.uvRotation??0)*Math.PI/180;
  const ca=Math.cos(angle),sa=Math.sin(angle),x0=piece.uvOffsetX??0,y0=piece.uvOffsetY??0;
  for(let i=0;i<uv.count;i++){
    const u=uv.getX(i)*scale,v=uv.getY(i)*scale;
    uv.setXY(i,u*ca-v*sa+x0,u*sa+v*ca+y0);
  }
  uv.needsUpdate=true;
  return geometry;
}
