import {MathUtils} from 'three';

// main.js calls update after resolving the player. VR uses hand contact edges;
// PC/mobile uses actual travelled distance, so walking into a wall is silent.
export function createStepSound(){
  let context, noise, distance=0, wasGrounded=false, cooldown=0, count=0;
  const previous=[false,false], handCooldown=[0,0];
  async function unlock(){
    const Audio=globalThis.AudioContext??globalThis.webkitAudioContext;
    if(!Audio)return;
    try{
      context??=new Audio();
      if(context.state==='suspended')await context.resume();
    }catch{/* An XR/browser session may still require a user interaction. */}
  }
  function play(volume){
    if(context?.state!=='running')return;
    if(!noise){
      noise=context.createBuffer(1,Math.ceil(context.sampleRate*.09),context.sampleRate);
      const samples=noise.getChannelData(0);
      for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*(1-i/samples.length);
    }
    const t=context.currentTime, source=context.createBufferSource(), filter=context.createBiquadFilter(), gain=context.createGain();
    source.buffer=noise;filter.type='lowpass';filter.frequency.value=570+Math.random()*340;
    gain.gain.setValueAtTime(MathUtils.clamp(volume,1,10)*.055,t);
    gain.gain.exponentialRampToValueAtTime(.001,t+.085);
    source.connect(filter).connect(gain).connect(context.destination);
    source.start(t);count++;
  }
  function update({dt,inVR,hands,grounded,travel,volume,enabled}){
    if(inVR){
      hands.forEach((hand,i)=>{
        handCooldown[i]=Math.max(0,handCooldown[i]-dt);
        const contact=hand.valid&&hand.groundContact;
        if(contact&&!previous[i]&&!handCooldown[i]&&enabled){play(volume);handCooldown[i]=.11;}
        previous[i]=contact;
      });
      return;
    }
    cooldown=Math.max(0,cooldown-dt);
    distance=grounded?distance+travel:0;
    if(grounded&&enabled&&cooldown===0&&(distance>=.64||!wasGrounded&&travel>.025)){
      play(volume);distance=0;cooldown=.12;
    }
    wasGrounded=grounded;
  }
  function reset(){
    distance=0;wasGrounded=false;cooldown=0;
    previous.fill(false);handCooldown.fill(0);
  }
  return {unlock,play,update,reset,get count(){return count;},get state(){return context?.state??'locked';}};
}
