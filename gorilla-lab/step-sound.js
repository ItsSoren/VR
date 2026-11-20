import {MathUtils} from 'three';

// main.js calls update after resolving the player. VR uses hand contact edges;
// PC/mobile uses actual travelled distance, so walking into a wall is silent.
const cueNotes={chime:[660,880],alert:[390,300,390],click:[190]};
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
  function playCue(name,volume,distance,pan){
    const notes=cueNotes[name];
    if(context?.state!=='running'||!notes||volume<=0||distance>=28)return;
    const output=context.createStereoPanner?.()??context.destination;
    if(output!==context.destination){output.pan.value=pan;output.connect(context.destination);}
    const start=context.currentTime;
    const interval=name==='alert'?.13:.1;
    let active=notes.length;
    notes.forEach((frequency,index)=>{
      const time=start+index*interval, oscillator=context.createOscillator(), gain=context.createGain();
      oscillator.type=name==='chime'?'sine':'triangle';
      oscillator.frequency.value=frequency;
      gain.gain.setValueAtTime(.001,time);
      gain.gain.linearRampToValueAtTime(.18*volume/(1+distance*.22),time+.015);
      gain.gain.exponentialRampToValueAtTime(.001,time+interval);
      oscillator.connect(gain).connect(output);
      oscillator.onended=()=>{if(--active===0&&output!==context.destination)output.disconnect();};
      oscillator.start(time);oscillator.stop(time+interval);
    });
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
  return {unlock,play,playCue,update,reset,get count(){return count;},get state(){return context?.state??'locked';}};
}
