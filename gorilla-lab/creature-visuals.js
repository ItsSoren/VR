import {sculptRig,playSculptClip} from './sculpt-rig.js';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {boxCollider,palmContact} from './physics.js';
import {creaturePalette} from './entity-format.js';
import {entityState} from './creature-runtime.js';

const fullBeam=3.2;

const beamShape=new T.CylinderGeometry(.20,.012,fullBeam,14,1,true).translate(0,fullBeam/2,0);
const patchShape=new T.PlaneGeometry(2,2);
const probe=boxCollider(new T.Vector3(.004,.004,.004));
const forward=new T.Vector3(0,0,-1),planeNormal=new T.Vector3(0,0,1);
const turn=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));

function sculpt(color,detail,shape,tint){
  const geo=new T.SphereGeometry(1,detail,Math.ceil(detail*.75));
  const positions=geo.attributes.position,colors=[];
  const vertex=new T.Color();
  for(let i=0;i<positions.count;i++){
    const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i);
    const grain=Math.sin(x*43+y*31)*Math.cos(z*37-y*29);
    const ridge=1+.028*Math.sin(x*11+y*8)*Math.sin(z*12-y*8);
    positions.setXYZ(i,...shape(x*ridge,y,z*ridge));
    vertex.copy(tint?.(x,y,z)??color).multiplyScalar(.90+.16*grain+.15*Math.sin(6*x-9*y+4*z));
    colors.push(vertex.r,vertex.g,vertex.b);
  }
  geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  geo.computeVertexNormals();
  const result=geo.toNonIndexed();
  geo.dispose();
  return result;
}

function geometryFor(palette){
  const fur=new T.Color(palette.fur),face=new T.Color(palette.face);
  const shadow=fur.clone().multiplyScalar(.27),raw=face.clone().lerp(new T.Color('#7b322c'),.59);
  const tooth=new T.Color('#aa9f88');
  const oval=(color,x,y,z,w,h,d)=>sculpt(color,10,(a,b,c)=>[x+w*a,y+h*b,z+d*c]);
  const join=parts=>{
    const geo=mergeGeometries(parts);
    for(const part of parts)part.dispose();
    return geo;
  };
  const torso=sculpt(fur,32,(x,y,z)=>{
    const width=.34+.105*y;
    return [x*width,.678+y*.49,z*(.225+.02*y)-.133*y-.047];
  },(x,y,z)=>z<-.68&&y>-.65&&y<.39+.15*Math.sin(12*x)?raw:fur);
  const skull=sculpt(fur,28,(x,y,z)=>{
    const jaw=z<0&&y<.13?1+(-y+.13)*.32:1;
    return [x*(.169+.038*y)+.019*y,.035+y*.201,z*.172*jaw-.022*(1-y)];
  },(x,y,z)=>{
    const edge=-.55+.16*Math.sin(7*x+4*y)+.067*Math.sin(21*y);
    return z<edge&&y<.63?(x>.25&&y>.08?raw:face):fur;
  });
  const head=[skull,oval(shadow,-.012,-.077,-.196,.104,.054,.047)];
  for(const sign of [-1,1]){
    head.push(oval(shadow,sign*.058,.038+(sign*.009),-.169,.055,.048,.043));
    head.push(oval(fur,sign*.162,.036,.008,.033,.066,.032));
  }
  for(let i=-3;i<=3;i++){
    const x=i*.025;
    head.push(oval(tooth,x,-.051+.003*Math.sin(i*3),-.237+x*x*2,.010,.015,.009));
    if(i%2===0)head.push(oval(tooth,x,-.106,-.227+x*x*2,.009,.011,.008));
  }
  const arm=join([
    sculpt(fur,28,(x,y,z)=>{
      const u=(1-y)*.5;
      const width=.135-.063*u+.017*Math.sin(u*11);
      return [x*width,.12-u*.824,z*width-.125*u*u];
    },(x,y,z)=>y<-.34&&z<-.3+.14*Math.sin(12*y)?raw:fur),
    ...[-.054,-.018,.018,.054].map((x,i)=>oval(i===2?raw:shadow,x,-.66,-.128,.023,.084-i*.006,.027)),
  ]);
  const positions=arm.attributes.position,indices=[],weights=[];
  for(let i=0;i<positions.count;i++){
    const elbow=T.MathUtils.smoothstep(-positions.getY(i),.20,.42);
    indices.push(0,1,0,0);
    weights.push(1-elbow,elbow,0,0);
  }
  arm.setAttribute('skinIndex',new T.Uint16BufferAttribute(indices,4));
  arm.setAttribute('skinWeight',new T.Float32BufferAttribute(weights,4));
  const leg=sculpt(fur,24,(x,y,z)=>[x*(.082+y*.026),-.145+y*.218,z*.081+.046*y]);
  return {torso,head:join(head),arm,leg,foot:oval(shadow,0,-.29,-.046,.083,.044,.12)};
}

function beamMaterial(strength){
  return new T.ShaderMaterial({
    uniforms:{strength:{value:strength},tint:{value:new T.Color('#ff3531')}},
    transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,
    vertexShader:`
      varying float along; varying vec3 viewDirection; varying vec3 surfaceNormal;
      void main(){
        along=position.y/${fullBeam.toFixed(1)};
        vec4 mv=modelViewMatrix*vec4(position,1.0);
        viewDirection=-mv.xyz;surfaceNormal=normalMatrix*normal;
        gl_Position=projectionMatrix*mv;
      }`,
    fragmentShader:`
      uniform float strength; uniform vec3 tint;
      varying float along; varying vec3 viewDirection; varying vec3 surfaceNormal;
      void main(){
        float outline=abs(dot(normalize(surfaceNormal),normalize(viewDirection)));
        float alpha=smoothstep(0.0,0.03,along)*pow(max(0.0,1.0-along),1.8)*pow(outline,1.7)*strength;
        gl_FragColor=vec4(tint,alpha);
      }`,
  });
}

const glowMaterial=new T.ShaderMaterial({
  transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,
  vertexShader:'varying vec2 uv0; void main(){uv0=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader:'varying vec2 uv0; void main(){float glow=1.0-smoothstep(0.0,0.5,length(uv0-vec2(0.5)));gl_FragColor=vec4(1.0,0.035,0.023,glow*glow*0.115);}',
});

export function createEntityVisuals(scene){
  const models=new Map(),looks=new Map(),geometryCache=new Map();
  const bodyMaterial=new T.MeshLambertMaterial({vertexColors:true});
  const lenses=[new T.MeshBasicMaterial({color:'#701516',toneMapped:false}),new T.MeshBasicMaterial({color:'#ce352d',toneMapped:false})];
  const beams=[beamMaterial(.034),beamMaterial(.056)];
  const lensGeometry=new T.SphereGeometry(.013,10,7);
  const source=new T.Vector3(),end=new T.Vector3(),hit=new T.Vector3(),normal=new T.Vector3(),direction=new T.Vector3();
  const rayRotation=new T.Quaternion(),inverse=new T.Quaternion(),blockers=[];
  let time=0;
  function make(p){
    const definition=looks.get(p.id);
    if(definition?.sculpt){
      const root=new T.Group(),rig=sculptRig(definition.sculpt);
      root.add(rig.mesh);root.position.set(p.x,p.y,p.z);root.rotation.y=p.yaw;scene.add(root);
      return {root,rig,clips:definition.sculpt.clips,state:null,clock:0};
    }
    const palette=creaturePalette(definition);
    const key=palette.fur+palette.face;
    let geometry=geometryCache.get(key);
    if(!geometry){geometry=geometryFor(palette);geometryCache.set(key,geometry);}
    const root=new T.Group();root.name='Créature '+p.id;root.add(new T.Mesh(geometry.torso,bodyMaterial));
    const head=new T.Group();head.name='Tête de la créature';head.position.set(.015,1.09,-.245);
    head.rotation.order='YXZ';head.add(new T.Mesh(geometry.head,bodyMaterial));root.add(head);
    const eyes=[];
    for(const x of [-.058,.058]){
      const eyeY=.038+Math.sign(x)*.009;
      const lens=new T.Mesh(lensGeometry,lenses[0]);lens.position.set(x,eyeY,-.207);lens.scale.z=.58;head.add(lens);
      const emitter=new T.Group();emitter.position.set(x,eyeY,-.219);emitter.rotation.x=-Math.PI/2;head.add(emitter);
      const beam=new T.Mesh(beamShape,beams[0]);beam.name='Faisceau du regard';emitter.add(beam);
      const patch=new T.Mesh(patchShape,glowMaterial);patch.name='Halo du regard';patch.visible=false;root.add(patch);
      eyes.push({lens,emitter,beam,patch});
    }
    const limbs=[-1,1].map(sign=>{
      const arm=new T.SkinnedMesh(geometry.arm,bodyMaterial);
      arm.position.set(sign*.278,.89,-.099);arm.frustumCulled=false;root.add(arm);
      const shoulder=new T.Bone();shoulder.name='Épaule de la créature';arm.add(shoulder);
      const elbow=new T.Bone();elbow.position.y=-.305;shoulder.add(elbow);
      arm.bind(new T.Skeleton([shoulder,elbow]));
      const hip=new T.Group();hip.position.set(sign*.11,.335,.028);hip.add(new T.Mesh(geometry.leg,bodyMaterial));
      hip.add(new T.Mesh(geometry.foot,bodyMaterial));root.add(hip);
      return {sign,shoulder,elbow,hip};
    });
    root.position.set(p.x,p.y,p.z);root.rotation.y=p.yaw;scene.add(root);
    return {root,head,eyes,limbs,stride:0,gait:0,nextRay:0};
  }
  function project({root,head,eyes}){
    root.updateMatrixWorld();
    direction.copy(forward).applyQuaternion(head.getWorldQuaternion(rayRotation));
    inverse.copy(root.getWorldQuaternion(rayRotation)).invert();
    for(const {emitter,beam,patch} of eyes){
      emitter.getWorldPosition(source);
      end.copy(source).addScaledVector(direction,fullBeam);
      const surface=palmContact(source,end,rayRotation.identity(),blockers,hit,normal,probe);
      const length=surface?Math.max(0,Math.min(fullBeam,end.copy(hit).sub(source).dot(direction))):fullBeam;
      beam.scale.y=length/fullBeam;
      patch.visible=Boolean(surface)&&length>.035;
      if(patch.visible){
        patch.position.copy(hit).addScaledVector(normal,.002);
        root.worldToLocal(patch.position);
        patch.quaternion.setFromUnitVectors(planeNormal,normal.applyQuaternion(inverse));
        patch.scale.setScalar(.026+.059*length);
      }
    }
  }
  function remove({root,rig}){
    if(rig)rig.dispose();
    root.traverse(node=>{if(node.isSkinnedMesh)node.skeleton.dispose();});
    scene.remove(root);
  }
  function clear(){
    for(const art of models.values())remove(art);
    models.clear();
  }
  return {clear,set(definitions){
    clear();looks.clear();
    for(const geometry of geometryCache.values())for(const part of Object.values(geometry))part.dispose();
    geometryCache.clear();
    for(const d of definitions)looks.set(d.id,d);
  },draw(poses,dt,worldBoxes=[],objectBoxes=[],animate=true){
    time+=dt;
    const alpha=animate?1-Math.exp(-dt*17):1,present=new Set();
    blockers.length=0;
    if(poses.length){
      for(const box of worldBoxes)blockers.push(box);
      for(const box of objectBoxes)blockers.push(box);
    }
    for(const p of poses){
      present.add(p.id);
      let art=models.get(p.id);
      if(!art){art=make(p);models.set(p.id,art);}
      const {root,head,eyes,limbs}=art;
      const gap=Math.hypot(root.position.x-p.x,root.position.z-p.z);
      if(gap>2.5)root.position.set(p.x,p.y,p.z);
      else{
        root.position.x+=(p.x-root.position.x)*alpha;
        root.position.y+=(p.y-root.position.y)*alpha;
        root.position.z+=(p.z-root.position.z)*alpha;
      }
      root.rotation.y+=turn(root.rotation.y,p.yaw)*alpha;
      if(art.rig){
        const moving=gap*alpha>.002;
        const clip=p.state===entityState.caught?3:p.state===entityState.chase?2:moving?1:0;
        if(art.state!==clip){
          art.state=clip;art.clock=0;
          for(const bone of art.rig.bones)bone.rotation.set(0,0,0);
        }
        art.clock+=dt;
        const frames=art.clips[clip].length?art.clips[clip]:art.clips[0];
        if(animate)playSculptClip(art.rig,frames,art.clock,clip!==3);
        continue;
      }
      const alert=Number(p.state===entityState.chase||p.state===entityState.caught);
      // Use the displayed travel rather than the incoming snapshot gap. A
      // late packet or a teleport must not make the limbs cycle faster.
      const speed=gap<=2.5&&dt>0?gap*alpha/dt:0;
      art.stride=(art.stride+Math.min(alert?4.6:4,speed*2.8)*dt)%(Math.PI*2);
      art.gait+=(Math.min(.51,speed*.34)-art.gait)*(1-Math.exp(-dt*5));
      const swing=Math.sin(art.stride)*art.gait;
      const scan=time*.82+p.id*.93;
      const search=p.state===entityState.search;
      const neckBlend=1-Math.exp(-dt*3.8);
      const ahead=Math.max(-.16,Math.min(.16,turn(root.rotation.y,p.yaw)));
      const lookYaw=alert?ahead+.025*Math.sin(scan):(search?.23:.135)*Math.sin(scan);
      const lookPitch=(search?.055:.034)*Math.sin(scan*.73-.7)-(alert?.028:0);
      head.rotation.y+=(lookYaw-head.rotation.y)*neckBlend;
      head.rotation.x+=(lookPitch-head.rotation.x)*neckBlend;
      for(const {sign,shoulder,elbow,hip} of limbs){
        shoulder.rotation.set(.22+sign*swing,0,sign*(.13+.08*Math.sin(art.stride-.6)*art.gait*2));
        elbow.rotation.x=.20+Math.max(0,sign*swing)*.52;
        hip.rotation.x=.05-swing*sign*.59;
      }
      for(const {lens,beam} of eyes){lens.material=lenses[alert];beam.material=beams[alert];beam.visible=animate;}
      if(animate&&time>=art.nextRay){
        project(art);
        art.nextRay=time+.045;
      }
    }
    for(const [id,art] of models)if(!present.has(id)){remove(art);models.delete(id);}
  }};
}
