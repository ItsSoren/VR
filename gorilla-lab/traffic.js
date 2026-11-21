import * as T from 'three';
import {createModelMaterial,createModelUnitGeometry,disposeModelMaterial} from './model-pack.js';

export function trafficPath(route){
  const points=route.points.map(point=>new T.Vector3(...point));
  if(route.smooth){
    const path=new T.CatmullRomCurve3(points,true,'centripetal');
    path.arcLengthDivisions=Math.min(1200,points.length*30);
    return path;
  }
  const path=new T.CurvePath();
  points.forEach((point,index)=>path.add(new T.LineCurve3(point,points[(index+1)%points.length])));
  return path;
}
export function createTraffic(scene){
  let rows=[];
  const group=new T.Group(),pose=new T.Object3D(),a=new T.Vector3(),b=new T.Vector3();
  group.name='Circulation';scene.add(group);
  function set(routes=[]){
    for(const {mesh} of rows.flatMap(row=>row.batches)){
      mesh.dispose();mesh.geometry.dispose();disposeModelMaterial(mesh.material);
    }
    group.clear();
    rows=routes.filter(route=>route.visible).map(route=>{
      const batches=route.models.map(({model,w,h,d},index)=>{
        const size=new T.Vector3(w,h,d);
        const geo=createModelUnitGeometry(model,size);
        geo.scale(w,h,d);
        const count=Math.floor((route.count+route.models.length-1-index)/route.models.length);
        if(!count){geo.dispose();return null;}
        const material=createModelMaterial(model);
        if(Array.isArray(material)&&route.brightness!==1)for(const mat of material){
          const configure=mat.onBeforeCompile;
          mat.onBeforeCompile=function(shader,renderer){
            configure.call(this,shader,renderer);
            if(shader.uniforms.uFoundryGlow)shader.uniforms.uFoundryGlow.value.x*=route.brightness;
          };
        }
        const mesh=new T.InstancedMesh(geo,material,count);
        mesh.frustumCulled=false;
        mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
        group.add(mesh);
        return {mesh,offset:index,h};
      }).filter(Boolean);
      const path=trafficPath(route),length=path.getLength();
      return {route,path,length,batches};
    });
    update(0);
  }
  function update(seconds){
    for(const {route,path,length,batches} of rows){
      const period=route.interval+route.pause,cycles=Math.floor(seconds/period),elapsed=seconds-cycles*period;
      // Smooth stop and start near the ends of a moving period.
      const t=Math.min(1,elapsed/route.interval),ramp=.13;
      const travel=t<ramp?t*t/(2*ramp):t>1-ramp?1-ramp-(1-t)**2/(2*ramp):t-ramp/2;
      const moving=route.pause?cycles*route.interval+travel*route.interval/(1-ramp):seconds;
      const base=moving*route.speed/length+route.phase/360;
      const wrap=n=>n-Math.floor(n);
      for(const {mesh,offset,h} of batches){
        for(let i=0;i<mesh.count;i++){
          const index=i*route.models.length+offset;
          const u=wrap(base-index*route.spread/route.count);
          path.getPointAt(u,a);
          path.getPointAt(wrap(u+Math.min(.003,.9/length)),b);
          const direction=b.sub(a);
          pose.position.copy(a);pose.position.y+=h/2;
          pose.rotation.set(Math.atan2(direction.y,Math.hypot(direction.x,direction.z)),
            Math.atan2(-direction.x,-direction.z),0,'YXZ');
          pose.updateMatrix();
          mesh.setMatrixAt(i,pose.matrix);
        }
        mesh.instanceMatrix.needsUpdate=true;
      }
    }
  }
  return {set,update,get count(){return rows.reduce((total,{route})=>total+route.count,0);}};
}
