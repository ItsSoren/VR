import * as T from 'three';

function hash(x,z){
  let n=Math.imul(x,374761393)+Math.imul(z,668265263);
  n=Math.imul(n^(n>>>13),1274126177);
  return ((n^(n>>>16))>>>0)/4294967295;
}
const mix=(a,b,t)=>a+(b-a)*t;
const smooth=(min,max,n)=>{
  const t=Math.max(0,Math.min(1,(n-min)/(max-min)));
  return t*t*(3-2*t);
};
function noise(x,z){
  const ix=Math.floor(x),iz=Math.floor(z),u=smooth(0,1,x-ix),v=smooth(0,1,z-iz);
  return mix(mix(hash(ix,iz),hash(ix+1,iz),u),mix(hash(ix,iz+1),hash(ix+1,iz+1),u),v);
}
function clouds(x,z){
  return noise(x,z)*.54+noise(x*2.07+3.4,z*2.07-6.1)*.26
    +noise(x*4.2+9,z*4.2)*.13+noise(x*8.6,z*8.6-13)*.07;
}
function buildSky(night){
  const width=1024,height=512,pixels=new Uint8Array(width*height*4);
  const angles=Array.from({length:width},(_,x)=>[Math.cos(x/width*2*Math.PI),Math.sin(x/width*2*Math.PI)]);
  const horizon=night?[12,19,38]:[188,213,225],zenith=night?[2,5,16]:[40,109,182];
  for(let y=0;y<height;y++){
    const elevation=Math.sin((y/(height-1)-.5)*Math.PI),distance=Math.sqrt(Math.max(0,1-elevation*elevation));
    const altitude=Math.max(0,elevation),blend=altitude**.54;
    const base=horizon.map((value,i)=>mix(value,zenith[i],blend));
    for(let x=0;x<width;x++){
      const i=4*(x+y*width);
      let cloud=0,light=0,star=0;
      if(elevation>.025){
        if(night){
          const sparkle=hash(x+792,y+677);
          if(sparkle>.9988)star=(sparkle-.9988)*49000*smooth(.09,.30,elevation);
        }else{
          const [dx,dz]=angles[x];
          const scale=2.8*distance/(elevation+.16);
          const u=dx*scale+3.6,v=dz*scale-8.1;
          const density=clouds(u,v);
          const shade=clouds(u-.12,v-.09);
          cloud=smooth(.49,.66,density)*smooth(.025,.13,elevation);
          light=Math.max(.38,Math.min(1,.72+(density-shade)*5+(density-.54)*.8));
        }
      }
      const heightTint=night?1:mix(.94,1,smooth(.05,.34,elevation));
      pixels[i]=mix(base[0],(139+115*light)*heightTint,cloud)+star;
      pixels[i+1]=mix(base[1],(154+100*light)*heightTint,cloud)+star*.94;
      pixels[i+2]=mix(base[2],(178+77*light)*heightTint,cloud)+star*.86;
      pixels[i+3]=255;
    }
  }
  const texture=new T.DataTexture(pixels,width,height,T.RGBAFormat);
  texture.colorSpace=T.SRGBColorSpace;
  texture.wrapS=T.RepeatWrapping;
  texture.magFilter=T.LinearFilter;texture.minFilter=T.LinearMipmapLinearFilter;
  texture.generateMipmaps=true;texture.needsUpdate=true;
  return texture;
}
export function createLabSky(){return {day:buildSky(false),night:buildSky(true)};}
