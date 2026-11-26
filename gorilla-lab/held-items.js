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

const phoneLabels=['1','2','3','4','5','6','7','8','9','*','0','#'];
const phonePlane=new T.PlaneGeometry(.097,.182);
const touchMarker=new T.RingGeometry(.0055,.008,16);
function makePhoneDisplay(){
  const canvas=document.createElement('canvas');
  canvas.width=256;canvas.height=480;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#101826';ctx.fillRect(0,0,256,480);
  ctx.fillStyle='#b4d6f2';ctx.font='bold 20px system-ui';
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('CLAVIER TACTILE',128,33);
  for(let i=0;i<phoneLabels.length;i++){
    const x=128+(i%3-1)*79,y=240-(.0475-Math.floor(i/3)*.035)*2637;
    ctx.fillStyle='#304661';ctx.beginPath();ctx.roundRect(x-32,y-33,64,66,10);ctx.fill();
    ctx.fillStyle='#fff';ctx.font='bold 28px system-ui';ctx.fillText(phoneLabels[i],x,y);
  }
  const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;
  return new T.MeshBasicMaterial({map});
}

export function createHeldItems(scene,getContext,notify,vibrate){
  const light=new T.SpotLight(0xffe5b5,0,15,.32,.50,1.65);
  scene.add(light,light.target);
  const aim=new T.Vector3(),point=new T.Vector3(),local=new T.Vector3(),inverse=new T.Quaternion();
  const indices=new WeakMap();
  let phoneMaterial,ringMaterial,activePhone=null,talkHeld=false,talkNear=false;
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
  function talk(pressed,near){
    if(pressed!==talkHeld)tone(pressed?1240:710,.10,.045,'square');
    const capture=pressed&&near;
    if(capture!==talkNear){
      if(capture)void startMic();else stopMic();
    }
    talkHeld=pressed;talkNear=capture;
  }
  function clearPhone(){
    if(activePhone)indices.get(activePhone).screen.visible=indices.get(activePhone).marker.visible=false;
    activePhone=null;
  }
  function touchPhone(mesh,hand){
    if(activePhone!==mesh)clearPhone();
    activePhone=mesh;
    let display=indices.get(mesh);
    if(!display){
      const screen=new T.Mesh(phonePlane,phoneMaterial??=makePhoneDisplay());
      screen.position.z=.0122;
      const marker=new T.Mesh(touchMarker,ringMaterial??=new T.MeshBasicMaterial({color:0x8bffd2}));
      marker.position.z=.0132;marker.visible=false;
      mesh.add(screen,marker);
      indices.set(mesh,display={screen,marker,key:-1,previousZ:Infinity});
    }
    display.screen.visible=true;
    if(!hand?.valid){display.key=-1;display.previousZ=Infinity;return;}
    hand.skin.indexTip(point);
    inverse.copy(mesh.quaternion).invert();
    local.copy(point).sub(mesh.position).applyQuaternion(inverse);
    const key=phoneKeyAt(local);
    if(local.z>.026||key!==display.key)display.key=-1;
    if(key>=0&&display.key<0&&local.z>=.000&&local.z<=.021&&display.previousZ>.017){
      display.key=key;display.marker.visible=true;
      display.marker.position.set(-.03+(key%3)*.03,.0475-Math.floor(key/3)*.035,.0132);
      tone(520+key*46,.07,.035);vibrate(hand);
    }
    if(display.key<0)display.marker.visible=false;
    display.previousZ=local.z;
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
  let lamp=null,best=Infinity;
  return {
    clearPhone,talk,touchPhone,bite,
    setMicEnabled(value){micEnabled=value;if(!value)stopMic();},
    stop(){clearPhone();talkHeld=talkNear=false;stopMic();},
    beginLights(){lamp=null;best=Infinity;},
    considerLight(mesh,head){
      const distance=mesh.position.distanceToSquared(head);
      if(mesh.visible&&distance<best&&distance<34**2){lamp=mesh;best=distance;}
    },
    update(dt){
      light.intensity=lamp?25:0;
      if(lamp){
        aim.set(0,1,0).applyQuaternion(lamp.quaternion);
        light.position.copy(lamp.position).addScaledVector(aim,.14);
        light.target.position.copy(light.position).add(aim);
      }
      for(const crumb of crumbs)if(crumb.life>0){
        crumb.life-=dt;crumb.mesh.visible=crumb.life>0;
        crumb.mesh.position.addScaledVector(crumb.velocity,dt);
        crumb.velocity.y-=2.7*dt;crumb.mesh.scale.setScalar(Math.max(.05,Math.min(1,crumb.life*5)));
      }
    },
  };
}
