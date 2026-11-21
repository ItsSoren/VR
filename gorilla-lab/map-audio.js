import {synthesizeMapSound} from './map-audio-clips.js';
import {soundZoneLevel} from './map-audio-format.js';

const empty=Object.freeze([]);
const variation=(value,spread)=>value+(Math.random()*2-1)*spread;
const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));

export function createMapAudio(getContext){
  const cache=new Map(),recent=new Map(),impactTimes=new WeakMap();
  let library=empty,zones=empty,assets=new Map(),voices=[],mixer,previewVoice,previewRequest=0;
  const listener={x:0,y:0,z:0,yaw:0};
  let surfacesPlayed=0,ambientStarted=0;

  function bus(context){
    if(!mixer){
      mixer=context.createDynamicsCompressor();
      mixer.threshold.value=-16;mixer.ratio.value=6;
      mixer.connect(context.destination);
    }
    return mixer;
  }
  function setAssets(list=empty){
    if(library===list)return;
    const next=new Map(list.map(asset=>[asset.id,asset.data]));
    for(const [id,data] of assets)if(next.get(id)!==data){cache.delete(id);recent.delete(id);}
    assets=next;library=list;
  }
  function setZones(list=empty){
    if(zones===list)return;
    const context=getContext();
    for(const voice of voices){
      if(!voice.gain)continue;
      const stopAt=context.currentTime+.13;
      voice.gain.gain.setTargetAtTime(0,context.currentTime,.035);
      for(const source of voice.sources)source.stop(stopAt);
      const disconnect=()=>{if(!voice.sources.size)voice.gain?.disconnect();};
      for(const source of voice.sources)source.addEventListener('ended',disconnect,{once:true});
      disconnect();
    }
    zones=list;
    voices=list.map(zone=>({zone,gain:null,levels:null,loading:false,ready:false,entered:false,
      oneShot:false,next:0,active:0,weight:0,sources:new Set()}));
  }
  function clear(){
    setZones();setAssets();
  }
  async function buffers(context,id){
    if(cache.has(id))return cache.get(id);
    const data=assets.get(id);
    const clips=data?(async()=>{
      const encoded=data.slice(data.indexOf(',')+1);
      const bytes=Uint8Array.from(atob(encoded),char=>char.charCodeAt(0));
      const decoded=await context.decodeAudioData(bytes.buffer);
      return assets.get(id)===data&&decoded.duration<=180?[decoded]:null;
    })().catch(()=>null):synthesizeMapSound(context,id);
    cache.set(id,clips);
    return clips;
  }
  function nextBuffer(id,list){
    const last=recent.get(id)??-1;
    let index=Math.floor(Math.random()*list.length);
    if(index===last&&list.length>1)index=(index+1)%list.length;
    recent.set(id,index);
    return list[index];
  }
  function makeSource(context,profile,list,start,level,output,fade=0,limit=Infinity){
    const source=context.createBufferSource(),gain=context.createGain();
    source.buffer=nextBuffer(profile.clip,list);
    const rate=clamp(variation(profile.rate,profile.rateVariation),.25,3.2),pitch=variation(profile.pitch,profile.pitchVariation);
    source.playbackRate.value=rate;
    source.detune.value=pitch;
    const duration=Math.min(limit,source.buffer.duration/(rate*2**(pitch/1200)));
    const edge=Math.min(fade,duration*.25);
    const volume=clamp(variation(1,profile.volumeVariation)*level,0,1);
    if(edge){
      gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+edge);
      gain.gain.setValueAtTime(volume,start+duration-edge);
      gain.gain.linearRampToValueAtTime(0,start+duration);
    }else gain.gain.setValueAtTime(volume,start);
    source.connect(gain).connect(output);
    source.onended=()=>{source.disconnect();gain.disconnect();};
    source.start(start);source.stop(start+duration);
    return {source,duration,edge};
  }
  function playSurface(profile,position,volume=1){
    const context=getContext();
    if(context?.state!=='running'||!profile||!position||profile.volume<=0||volume<=0)return false;
    const x=position.x-listener.x,y=position.y-listener.y,z=position.z-listener.z;
    const distance=Math.hypot(x,y,z);
    if(distance>=profile.range)return false;
    const pan=clamp((x*Math.cos(listener.yaw)-z*Math.sin(listener.yaw))/Math.max(.1,Math.hypot(x,z)),-1,1);
    const falloff=(1-distance/profile.range)**1.45/(1+distance*.12);
    const timestamp=context.currentTime;
    const level=clamp(profile.volume*volume*falloff,0,1);
    const output=()=>{
      if(context.state!=='running'||context.currentTime-timestamp>.3)return null;
      const panner=context.createStereoPanner?.();
      if(panner){panner.pan.value=pan;panner.connect(bus(context));}
      return panner??bus(context);
    };
    const play=list=>{
      if(!list?.length)return;
      const dest=output();
      if(!dest)return;
      const {source}=makeSource(context,profile,list,context.currentTime,level,dest);
      if(dest!==mixer)source.addEventListener('ended',()=>dest.disconnect(),{once:true});
      surfacesPlayed++;
    };
    const cached=cache.get(profile.clip);
    if(Array.isArray(cached))play(cached);
    else void buffers(context,profile.clip).then(play);
    return true;
  }
  function impact(body,profile,position,speed){
    const context=getContext();
    if(context?.state!=='running'||speed<profile.minImpact)return false;
    const time=context.currentTime;
    if(time<(impactTimes.get(body)??-Infinity))return false;
    if(!playSurface(profile,position,Math.min(1.3,.22+.23*Math.sqrt(speed))))return false;
    impactTimes.set(body,time+profile.cooldown);
    return true;
  }
  function launchAmbient(context,voice,now){
    const {zone}=voice;
    const clip=makeSource(context,zone,voice.levels,now,1,voice.gain,zone.mode==='loop'?.8:.035);
    voice.sources.add(clip.source);
    clip.source.addEventListener('ended',()=>voice.sources.delete(clip.source),{once:true});
    voice.next=now+clip.duration-clip.edge;
    ambientStarted++;
  }
  function update(dt,position,yaw,ambientVolume=1){
    Object.assign(listener,{x:position.x,y:position.y,z:position.z,yaw});
    const context=getContext();
    if(context?.state!=='running')return;
    for(const voice of voices){
      const {zone}=voice;
      const weight=soundZoneLevel(zone,position);
      const target=weight*zone.volume*ambientVolume;
      const duration=target>voice.active?zone.fadeIn:zone.fadeOut;
      const step=Math.max(0,dt)/duration;
      voice.active+=clamp(target-voice.active,-step,step);
      if(!weight)voice.entered=false;
      if(!target&&voice.active<.0001){
        if(voice.gain){
          for(const source of voice.sources)source.stop();
          voice.sources.clear();voice.next=0;
          voice.gain.disconnect();voice.gain=null;
        }
        continue;
      }
      if(!voice.ready&&!voice.loading){
        voice.loading=true;
        void buffers(context,zone.clip).then(list=>{voice.levels=list;voice.ready=true;});
      }
      if(!voice.levels?.length)continue;
      const now=context.currentTime;
      if(!voice.gain){
        voice.gain=context.createGain();voice.gain.gain.value=0;voice.gain.connect(bus(context));
      }
      voice.gain.gain.setTargetAtTime(voice.active,now,.035);
      if(zone.mode==='enter'){
        if(weight>=.03&&!voice.entered){
          voice.entered=true;launchAmbient(context,voice,now);
        }
      }else if(voice.active>0&&now>=voice.next)launchAmbient(context,voice,now);
    }
  }
  async function preview(profile){
    const context=getContext();
    if(context?.state!=='running'||!profile)return false;
    stopPreview();
    const request=previewRequest;
    const list=await buffers(context,profile.clip);
    if(request!==previewRequest||!list?.length)return false;
    previewVoice=makeSource(context,profile,list,context.currentTime,profile.volume,bus(context),.035,4).source;
    return true;
  }
  function stopPreview(){
    previewRequest++;
    if(previewVoice){previewVoice.stop();previewVoice=null;}
  }
  return {setAssets,setZones,clear,update,impact,playSurface,preview,stopPreview,
    get diagnostics(){return {surfacesPlayed,ambientStarted,activeZones:voices.filter(v=>v.active>.01).length,
      gains:voices.map(v=>v.active)};