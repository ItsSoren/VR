import {surfaceSounds,ambientSounds} from './map-audio-format.js';

const tau=Math.PI*2;
const percussion={
  // Duration, noise brightness, resonances, dry noise, grit and decay.
  regolith:[.21,.13,[82,152],.87,.73,7],
  asphalt:[.16,.12,[112,241],.74,.55,9],
  concrete:[.19,.37,[174,472],.52,.16,11],
  steel:[.58,.30,[314,626,1039,1597],.25,.08,4.6],
  grating:[.32,.66,[228,907,1480,1809],.43,.60,7],
  glass:[.47,.80,[458,1397,2226],.17,.09,5.5],
  ceramic:[.28,.41,[259,573,1018],.37,.19,7],
  rubber:[.16,.07,[56,99],.58,.48,10],
  gravel:[.36,.37,[125,314],.78,.98,6.2],
  panel:[.31,.25,[122,294,735],.46,.36,7.5],
};
function generator(seed){
  return ()=>{
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    return seed/2147483648-1;
  };
}
function makeImpact(context,id,variant){
  const [duration,bright,frequencies,dry,grit,decay]=percussion[id];
  const sampleRate=22050,random=generator(3087+variant*5323+id.length*123);
  const length=Math.round(duration*sampleRate*(1+random()*.13));
  const result=context.createBuffer(1,length,sampleRate),data=result.getChannelData(0);
  const shift=1+random()*.055;
  let low=0, texture=0;
  for(let i=0;i<length;i++){
    const t=i/sampleRate,p=i/length,white=random();
    low+=(white-low)*bright;
    texture+=(white-texture)*.012;
    const bite=(1+Math.sin((p*21+variant*.21)*tau+texture*64)*grit*.64);
    let ring=0;
    for(const [k,frequency] of frequencies.entries())
      ring+=Math.sin(t*tau*frequency*shift)*Math.exp(-p*k*1.58)/(1+k*.62);
    const hit=Math.min(1,i/48)*Math.exp(-p*decay)*Math.min(1,(1-p)*7);
    data[i]=(dry*low*bite+(1-dry)*ring*.59+white*.085)*hit*.89;
  }
  return result;
}
function makeAmbience(context,id,variant){
  const sampleRate=22050,duration=id==='district'?13:17;
  const result=context.createBuffer(2,duration*sampleRate,sampleRate);
  const city=id==='district';
  for(let side=0;side<2;side++){
    const data=result.getChannelData(side),random=generator(2064+variant*1993+side*2113+(city?0:145));
    let wind=0,air=0;
    const phase=variant*.79+side*.57;
    for(let i=0;i<data.length;i++){
      const t=i/sampleRate,white=random();
      wind+=(white-wind)*.012;air+=(white-air)*.081;
      const flutter=.68+.20*Math.sin(t*.84+phase)+.11*Math.sin(t*2.43+phase*1.31);
      const pulse=Math.sin(t*(city?.88:1.42)+phase)**6;
      const hum=Math.sin(t*tau*(city?53:47)+Math.sin(t*.22+phase)*.35)*.103
        +Math.sin(t*tau*(city?106.5:71.7)+Math.sin(t*.17+phase*1.43)*.38)*.057;
      const call=Math.sin(t*tau*(city?201:143)+Math.sin(t*1.4+phase)*1.3)*pulse*.054;
      const cycle=(t+(side?1.7:.3)+variant*.89)%4.2-.1;
      const sweep=Math.exp(-((cycle-2.05)**2)*2.1);
      const motor=Math.sin(tau*(155*t+22*Math.sin(t*.47+phase)))+.32*Math.sin(tau*(331*t+16*Math.sin(t*.58)));
      const street=wind*.95+air*.19+sweep*(motor*.11+air*.6);
      data[i]=(id==='traffic'?street:(hum*(city?.66:1)+wind*1.30+air*(city?.27:.13)+call))*flutter*Math.min(1,i/180,(data.length-i)/180);
    }
  }
  return result;
}
export function synthesizeMapSound(context,id){
  if(Object.hasOwn(surfaceSounds,id))return Array.from({length:3},(_,i)=>makeImpact(context,id,i));
  if(Object.hasOwn(ambientSounds,id))return Array.from({length:3},(_,i)=>makeAmbience(context,id,i));
  return null;
}
