import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {boxCollider,palmContact} from './physics.js';
import {entityState} from './creature-runtime.js';

const fullBeam=3.2;
const baseMesh=new T.IcosahedronGeometry(1,1);
const beamShape=new T.CylinderGeometry(.20,.012,fullBeam,14,1,true).translate(0,fullBeam/2,0);
const patchShape=new T.PlaneGeometry(2,2);
const probe=boxCollider(new T.Vector3(.004,.004,.004));
const forward=new T.Vector3(0,0,-1),planeNormal=new T.Vector3(0,0,1);
const turn=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));

function surfaces(parts,palette){
  const layers=parts.map(([tone,x,y,z,w,h,d,roll=0])=>{
    const layer=baseMesh.clone();
    layer.scale(w,h,d).rotateZ(roll).translate(x,y,z);
    const {r,g,b}=palette[tone],positions=layer.attributes.position;
    const colors=new Float32Array(positions.count*3);
    for(let i=0;i<colors.length;i+=3){colors[i]=r;colors[i+1]=g;colors[i+2]=b;}
    layer.setAttribute('color',new T.BufferAttribute(colors,3));
    return layer;
  });
  const mesh=mergeGeometries(layers);
  for(const layer of layers)layer.dispose();
  return mesh;
}

function geometryFor(look){
  const colors=look==='vigie'?['#3c544e','#293936','#afb09c','#6b7770']:['#54464d','#302830','#a0857d','#725955'];
  const palette=Object.fromEntries(['fur','dark','skin','shade'].map((key,i)=>[key,new T.Color(colors[i])]));
  const make=(parts)=>surfaces(parts,palette);
  const torso=make([
    ['fur',0,.70,.025,.33,.42,.24],['fur',0,.48,.08,.237,.237,.21],
    ['shade',0,.73,-.132,.235,.29,.12],['skin',0,.70,-.188,.164,.195,.061],
    ['dark',0,1.00,.045,.195,.17,.17],['fur',0,.91,.06,.285,.225,.24],
  ]);
  const head=[
    ['fur',0,.027,.019,.189,.179,.151],['dark',0,.109,.026,.18,.109,.121],
    ['shade',0,-.021,-.105,.153,.123,.086],['skin',0,-.089,-.146,.116,.072,.089],
    ['dark',0,-.125,-.126,.102,.048,.076],['shade',0,-.029,-.177,.067,.038,.055],
    ['dark',0,-.100,-.217,.061,.009,.012],
  ];
  for(const sign of [-1,1]){
    head.push(
      ['fur',sign*.176,.012,.031,.054,.077,.049],
      ['skin',sign*.185,.010,.001,.033,.049,.027],
      ['shade',sign*.103,-.060,-.111,.064,.063,.064,sign*.18],
      ['dark',sign*.071,.052,-.138,.077,.027,.065,sign*.2],
      ['dark',sign*.060,.025,-.171,.047,.038,.041],
      ['dark',sign*.026,-.037,-.225,.018,.013,.008],
    );
  }
  const upperArm=make([
    ['fur',0,-.104,0,.129,.219,.128],['shade',0,-.258,0,.099,.133,.103],
  ]);
  const forearm=make([
    ['fur',0,-.129,-.006,.109,.205,.108],['dark',0,-.276,-.019,.096,.108,.093],
    ['skin',0,-.324,-.045,.105,.054,.073],
    ...[-.065,-.022,.022,.065].map(x=>['shade',x,-.347,-.086,.023,.049,.031]),
  ]);
  const leg=make([
    ['fur',0,-.124,.018,.116,.178,.119],['dark',0,-.256,-.009,.091,.15,.095],
    ['shade',0,-.327,-.066,.105,.067,.131],['skin',0,-.334,-.133,.089,.047,.055],
  ]);
  return {torso,head:make(head),upperArm,forearm,leg};
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
  const bodyMaterial=new T.MeshLambertMaterial({vertexColors:true,flatShading:true});
  const lenses=[new T.MeshBasicMaterial({color:'#d23130',toneMapped:false}),new T.MeshBasicMaterial({color:'#ff5a49',toneMapped:false})];
  const beams=[beamMaterial(.034),beamMaterial(.056)];
  const lensGeometry=new T.SphereGeometry(.022,10,7);
  const source=new T.Vector3(),end=new T.Vector3(),hit=new T.Vector3(),normal=new T.Vector3(),direction=new T.Vector3();
  const rayRotation=new T.Quaternion(),inverse=new T.Quaternion(),blockers=[];
  let time=0;
  function make(p){
    const look=looks.get(p.id)??'sentinelle';
    let geometry=geometryCache.get(look);
    if(!geometry){geometry=geometryFor(look);geometryCache.set(look,geometry);}
    const root=new T.Group();root.name='Créature '+p.id;root.add(new T.Mesh(geometry.torso,bodyMaterial));
    const head=new T.Group();head.position.set(0,1.14,-.055);head.add(new T.Mesh(geometry.head,bodyMaterial));root.add(head);
    const eyes=[];
    for(const x of [-.060,.060]){
      const lens=new T.Mesh(lensGeometry,lenses[0]);lens.position.set(x,.023,-.201);lens.scale.z=.58;head.add(lens);
      const emitter=new T.Group();emitter.position.set(x,.023,-.216);emitter.rotation.x=-Math.PI/2;head.add(emitter);
      const beam=new T.Mesh(beamShape,beams[0]);beam.name='Faisceau du regard';emitter.add(beam);
      const patch=new T.Mesh(patchShape,glowMaterial);patch.name='Halo du regard';patch.visible=false;root.add(patch);
      eyes.push({lens,emitter,beam,patch});
    }
    const limbs=[-1,1].map(sign=>{
      const shoulder=new T.Group();shoulder.position.set(sign*.322,.91,.015);root.add(shoulder);
      shoulder.add(new T.Mesh(geometry.upperArm,bodyMaterial));
      const elbow=new T.Group();elbow.position.y=-.285;elbow.add(new T.Mesh(geometry.forearm,bodyMaterial));shoulder.add(elbow);
      const hip=new T.Group();hip.position.set(sign*.13,.38,.065);hip.add(new T.Mesh(geometry.leg,bodyMaterial));root.add(hip);
      return {sign,shoulder,elbow,hip};
    });
    root.position.set(p.x,p.y,p.z);root.rotation.y=p.yaw;scene.add(root);
    return {root,head,eyes,limbs,stride:0,nextRay:0};
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
  function clear(){
    for(const {root} of models.values())scene.remove(root);
    models.clear();
  }
  return {clear,set(definitions){
    clear();looks.clear();
    for(const d of definitions)looks.set(d.id,d.look);
  },draw(poses,dt,worldBoxes=[],objectBoxes=[]){
    time+=dt;
    const alpha=1-Math.exp(-dt*17),present=new Set();
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
      const alert=Number(p.state===entityState.chase||p.state===entityState.caught);
      art.stride+=Math.min(gap,.32)*alpha*12;
      const walk=Math.min(.44,gap*4);
      const swing=Math.sin(art.stride)*walk;
      head.position.y=1.14+Math.cos(art.stride*2)*walk*.038;
      for(const {sign,shoulder,elbow,hip} of limbs){
        shoulder.rotation.set(-.14+sign*swing,0,sign*.18);
        elbow.rotation.x=-.21-Math.abs(swing)*.44;
        hip.rotation.x=-swing*sign*.82;
      }
      for(const {lens,beam} of eyes){lens.material=lenses[alert];beam.material=beams[alert];}
      if(time>=art.nextRay){
        project(art);
        art.nextRay=time+.045;
      }
    }
    for(const [id,{root}] of models)if(!present.has(id)){scene.remove(root);models.delete(id);}
  }};
}
