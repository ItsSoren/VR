import * as T from 'three';
import {colliderFor} from './physics.js';

const breadScales=[1,.75,.5,.25];
const breadHulls=new WeakMap();

export function itemScale(spec,state){
  return spec?.id==='bread'?breadScales[state]??1:1;
}

export function itemShape(spec,precise,state){
  const shape=precise?spec.shape:(spec.lowShape??spec.shape);
  const scale=itemScale(spec,state);
  if(scale===1)return shape;
  let variants=breadHulls.get(shape);
  if(!variants)breadHulls.set(shape,variants=[]);
  if(!variants[state]){
    const points=[];
    for(const {a,b,c} of shape.faces)for(const p of [a,b,c])points.push(p.x*scale,p.y,p.z);
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));
    variants[state]=colliderFor(geometry);
    geometry.dispose();
  }
  return variants[state];
}

export function phoneKeyAt(point){
  const x=Math.floor((point.x+.045)/.03);
  const y=Math.floor((.065-point.y)/.035);
  if(x<0||x>2||y<0||y>3||Math.abs(point.x-(-.03+x*.03))>.012||
    Math.abs(point.y-(.0475-y*.035))>.014)return -1;
  return y*3+x;
}

const lensGeometry=new T.CircleGeometry(.043,24).rotateX(-Math.PI/2);
const lensMaterial=new T.MeshBasicMaterial({color:0xfff2c9,toneMapped:false});
const beamGeometry=new T.ConeGeometry(1.24,4,32,1,true).rotateZ(Math.PI).translate(0,2,0);
const beamMaterial=new T.ShaderMaterial({
  uniforms:{tint:{value:new T.Color(0xffdda3)}},
  transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,
  vertexShader:'varying float along; void main(){along=position.y/4.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader:'uniform vec3 tint; varying float along; void main(){float alpha=smoothstep(0.0,0.09,along)*pow(max(0.0,1.0-along),2.0)*0.078;gl_FragColor=vec4(tint,alpha);}'
});

export function createHeldItems(scene,getContext,notify){
  const lights=[],lamps=[],lampModels=new WeakMap();
  const aim=new T.Vector3();
  function addLight(){
    const light=new T.SpotLight(0xffe5b5,0,15,.32,.50,1.65);
    scene.add(light,light.target);lights.push(light);
  }
  addLight();addLight();
  let radios=new Set(),nextRadios=new Set(),micNearby=false,talkNear=false;
  const crumbGeo=new T.DodecahedronGeometry(.009,0);
  const crumbMat=new T.MeshBasicMaterial({color:0xe0b46e});
  const crumbs=Array.from({length:24},()=>{
    const mesh=new T.Mesh(crumbGeo,crumbMat);mesh.visible=false;scene.add(mesh);
    return {mesh,velocity:new T.Vector3(),life:0};
  });
  let nextCrumb=0;
  let micEnabled=false,micRequest=false,micGeneration=0,mic=null;
  function stopMic(){
    micGeneration++;
    if(!mic)return;
    mic.stream.getTracks().forEach(track=>track.stop());
    for(const node of mic.nodes)node.disconnect();
    mic=null;
  }
  async function startMic(){
    if(!micEnabled||mic||micRequest)return;
    const media=navigator.mediaDevices;
    const ctx=getContext();
    if(!media?.getUserMedia||ctx?.state!=='running'){notify('Retour micro indisponible');return;}
    micRequest=true;
    const generation=micGeneration;
    let stream;
    try {
      stream=await media.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});
      if(generation!==micGeneration){stream.getTracks().forEach(track=>track.stop());return;}
      const source=ctx.createMediaStreamSource(stream);
      const high=ctx.createBiquadFilter();high.type='highpass';high.frequency.value=420;
      const low=ctx.createBiquadFilter();low.type='lowpass';low.frequency.value=2450;
      const delay=ctx.createDelay(.25);delay.delayTime.value=.085;
      const gain=ctx.createGain();gain.gain.value=.16;
      source.connect(high).connect(low).connect(delay).connect(gain).connect(ctx.destination);
      mic={stream,nodes:[source,high,low,delay,gain]};
    }catch{
      stream?.getTracks().forEach(track=>track.stop());
      if(generation===micGeneration)notify('Retour micro indisponible ou refusé');
    }finally{micRequest=false;}
  }
  function tone(frequency,duration,volume,kind='sine'){
    const ctx=getContext();
    if(ctx?.state!=='running')return;
    const osc=ctx.createOscillator(),gain=ctx.createGain(),at=ctx.currentTime;
    osc.type=kind;osc.frequency.value=frequency;
    gain.gain.setValueAtTime(volume,at);
    gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
    osc.connect(gain).connect(ctx.destination);
    osc.onended=()=>{osc.disconnect();gain.disconnect();};
    osc.start(at);osc.stop(at+duration);
  }
  function talk(mesh,near){
    nextRadios.add(mesh);
    micNearby||=near;
    if(!radios.has(mesh))tone(1240,.10,.045,'square');
  }
  function finishTalk(){
    for(const mesh of radios)if(!nextRadios.has(mesh))tone(710,.10,.045,'square');
    [radios,nextRadios]=[nextRadios,radios];nextRadios.clear();
    if(micNearby!==talkNear){
      if(micNearby)void startMic();else stopMic();
    }
    talkNear=micNearby;micNearby=false;
  }
  function bite(position){
    tone(115,.11,.045,'triangle');
    for(let i=0;i<6;i++){
      const crumb=crumbs[nextCrumb++%crumbs.length];
      crumb.life=.33+Math.random()*.19;crumb.mesh.visible=true;crumb.mesh.scale.setScalar(1);
      crumb.mesh.position.copy(position);
      crumb.velocity.set((Math.random()-.5)*.85,Math.random()*.65,(Math.random()-.5)*.85);
    }
  }
  return {
    talk,finishTalk,bite,
    setMicEnabled(value){micEnabled=value;if(!value)stopMic();},
    stop(){radios.clear();nextRadios.clear();micNearby=talkNear=false;stopMic();},
    beginLights(){lamps.length=0;},
    considerLight(mesh,on,head){
      let extras=lampModels.get(mesh);
      if(on&&!extras){
        extras=new T.Group();
        const lens=new T.Mesh(lensGeometry,lensMaterial);
        lens.position.y=.136;
        const beam=new T.Mesh(beamGeometry,beamMaterial);
        beam.position.y=.144;
        extras.add(lens,beam);mesh.add(extras);lampModels.set(mesh,extras);
      }
      if(extras)extras.visible=on;
      if(on&&mesh.visible&&mesh.position.distanceToSquared(head)<34**2)lamps.push(mesh);
    },
    update(dt){
      if(lamps.length>lights.length)while(lights.length<lamps.length)addLight();
      for(let i=0;i<lights.length;i++){
        const light=lights[i],lamp=lamps[i];
        light.intensity=lamp?25:0;
        if(lamp){
          aim.set(0,1,0).applyQuaternion(lamp.quaternion);
          light.position.copy(lamp.position).addScaledVector(aim,.14);
          light.target.position.copy(light.position).add(aim);
        }
      }
      for(const crumb of crumbs)if(crumb.life>0){
        crumb.life-=dt;crumb.mesh.visible=crumb.life>0;
        crumb.mesh.position.addScaledVector(crumb.velocity,dt);
        crumb.velocity.y-=2.7*dt;crumb.mesh.scale.setScalar(Math.max(.05,Math.min(1,crumb.life*5)));
      }
    },
  };
}
