import * as T from 'three';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';

export function createHdrBloom(renderer){
  const supported=renderer.extensions.has('EXT_color_buffer_float');
  let bloom,width=0,height=0;
  function apply(target,amount){
    if(!supported||amount<=0)return;
    // The scene is linear and full resolution. Only the blur pyramid is reduced.
    const w=Math.max(32,Math.ceil(target.width*.64));
    const h=Math.max(32,Math.ceil(target.height*.64));
    if(!bloom)bloom=new UnrealBloomPass(new T.Vector2(w,h),amount,.43,1.25);
    if(w!==width||h!==height){bloom.setSize(w,h);width=w;height=h;}
    bloom.strength=amount;
    bloom.render(renderer,null,target,0,false);
  }
  function dispose(){bloom?.dispose();bloom=null;width=height=0;}
  return {supported,apply,dispose};
}

export function createScreenBloom(renderer){
  const bloom=createHdrBloom(renderer),size=new T.Vector2();
  let target,output;
  function render(scene,camera,amount){
    if(!bloom.supported||amount<=0)return false;
    renderer.getDrawingBufferSize(size);
    if(size.x<32||size.y<32)return false;
    if(!target){
      target=new T.WebGLRenderTarget(size.x,size.y,{type:T.HalfFloatType,samples:2});
      target.texture.name='Gorilla Lab HDR scene';
      output=new OutputPass();
      output.renderToScreen=true;
    }else if(target.width!==size.x||target.height!==size.y)target.setSize(size.x,size.y);
    const previous=renderer.getRenderTarget(),autoReset=renderer.info.autoReset;
    renderer.info.reset();
    renderer.info.autoReset=false;
    try{
      renderer.setRenderTarget(target);
      renderer.render(scene,camera);
      bloom.apply(target,amount);
      output.render(renderer,null,target);
    }finally{
      renderer.setRenderTarget(previous);
      renderer.info.autoReset=autoReset;
    }
    return true;
  }
  return {render};
}
