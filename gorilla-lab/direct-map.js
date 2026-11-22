import {roomMapImportBytes,isEncodedRoomMap} from './room-map-link.js';

const maxChars=Math.ceil(roomMapImportBytes*1.36);
const chunkSize=16_384;
const bufferLimit=262_144;
const signalLimit=4096;
const iceServers=[{urls:'stun:stun.l.google.com:19302'}];

export function encodeMapSignal(target,map,description){
  const type=description.type==='offer'?'o':'a';
  const encoded='rtc:'+target+':'+map+':'+type+':'+btoa(description.sdp);
  return encoded.length<=signalLimit?encoded:null;
}
export function decodeMapSignal(value){
  const match=/^rtc:(\d{7}):(\d{1,6}):([oa]):([A-Za-z0-9+/=]+)$/.exec(value);
  if(!match||value.length>signalLimit)return null;
  try{
    return {target:Number(match[1]),map:Number(match[2]),
      description:{type:match[3]==='o'?'offer':'answer',sdp:atob(match[4])}};
  }catch{return null;}
}

export function createMapReceiver(validate=isEncodedRoomMap){
  const chunks=[];
  let size=0,total=0;
  return {
    push(message){
      if(typeof message!=='string')throw Error('Fragment direct invalide.');
      if(!total){
        if(!/^size:\d{1,8}$/.test(message))throw Error('Taille du transfert direct absente.');
        total=Number(message.slice(5));
        if(total<5||total>maxChars)throw Error('Carte du salon trop lourde.');
        return null;
      }
      if(!message.length||message.length>chunkSize||size+message.length>total)throw Error('Fragment direct invalide.');
      chunks.push(message);size+=message.length;
      if(size!==total)return null;
      const source=chunks.join('');
      if(!validate(source))throw Error('Carte directe invalide.');
      return source;
    },
    get progress(){return total?{loaded:size,total}:null;},
  };
}

export function createDirectMapSession({target,map,upload,onProgress,onSource,onClose}){
  const connection=new RTCPeerConnection({iceServers});
  let receiver=upload?null:createMapReceiver();
  let section='full',remainingImages=0;
  let channel,signal=null,closed=false,accepted=false,timer,iceTimer;
  function close(){
    if(closed)return;
    closed=true;clearTimeout(timer);clearTimeout(iceTimer);
    channel?.close();connection.close();onClose?.();
  }
  function watchdog(ms){
    clearTimeout(timer);timer=setTimeout(close,ms);
  }
  watchdog(12000);
  function publish(){
    if(closed||signal||!connection.localDescription)return;
    signal=encodeMapSignal(target,map,connection.localDescription);
    if(!signal)close();
  }
  connection.onicecandidate=({candidate})=>{
    if(candidate?.type==='srflx'&&connection.localDescription?.sdp.includes(' typ srflx'))publish();
  };
  connection.onicegatheringstatechange=()=>{
    if(connection.iceGatheringState==='complete')publish();
  };
  async function describe(){
    const description=upload?await connection.createAnswer():await connection.createOffer();
    if(closed)return;
    await connection.setLocalDescription(description);
    if(closed)return;
    if(connection.iceGatheringState==='complete')publish();
    else iceTimer=setTimeout(publish,2500);
  }
  connection.onconnectionstatechange=()=>{
    if(connection.connectionState==='failed'||connection.connectionState==='closed')close();
  };
  function attach(dataChannel){
    channel=dataChannel;
    channel.binaryType='arraybuffer';
    channel.onerror=close;
    channel.onclose=close;
    if(upload){
      let offset=0,current='',imageIndex=0,sendBinary=false;
      function pump(){
        try{
          while(!closed&&channel.readyState==='open'&&offset<current.length&&channel.bufferedAmount<bufferLimit){
            const fragment=current.slice(offset,offset+chunkSize);
            channel.send(sendBinary?Uint8Array.from(atob(fragment),c=>c.charCodeAt(0)).buffer:fragment);
            offset+=fragment.length;
          }
        }catch{close();}
      }
      function send(sectionName,source){
        offset=0;sendBinary=sectionName.startsWith('image:');
        channel.send(sectionName);
        if(sendBinary){
          const header=source.indexOf(',')+1;
          channel.send('mime:'+source.slice(0,header));
          current=source.slice(header);
        }else current=source;
        channel.send('size:'+current.length);
        pump();
      }
      channel.bufferedAmountLowThreshold=bufferLimit/2;
      channel.onbufferedamountlow=pump;
      channel.onopen=async()=>{
        signal=null;
        watchdog(45000);
        try{
          const core=upload.progressive&&await upload.progressive.core;
          if(closed)return;
          send(core?'core':'full',core||await upload.full);
        }catch{close();}
      };
      channel.onmessage=event=>{
        if(event.data==='received'){close();return;}
        if(event.data!=='next'||!upload.progressive)return;
        watchdog(45000);
        const image=upload.progressive.images[imageIndex++];
        if(!image){close();return;}
        try{send('image:'+image.index,image.source);}catch{close();}
      };
    }else{
      let expectSection=true,imageHeader=null;
      const imagePattern=/^image:(-1|\d{1,3})$/;
      channel.onopen=()=>{signal=null;watchdog(10000);};
      channel.onmessage=async event=>{
        try{
          watchdog(10000);
          if(expectSection){
            const label=String(event.data);
            if(remainingImages?!imagePattern.test(label):label!=='core'&&label!=='full')throw Error('Section inattendue.');
            section=label;
            imageHeader=label.startsWith('image:')?'':null;
            receiver=createMapReceiver(imageHeader===null?undefined:()=>true);
            expectSection=false;
            return;
          }
          if(imageHeader===''){
            if(typeof event.data!=='string'||!/^mime:data:image\/(?:png|jpeg|webp);base64,$/.test(event.data))throw Error('Format d’image inattendu.');
            imageHeader=event.data.slice(5);
            return;
          }
          const fragment=event.data instanceof ArrayBuffer&&imageHeader
            ?btoa(String.fromCharCode(...new Uint8Array(event.data))):event.data;
          const source=receiver.push(fragment);
          onProgress?.(receiver.progress,section);
          if(!source)return;
          const result=await onSource((imageHeader??'')+source,section);
          if(closed)return;
          if(section==='core'){
            if(!Number.isInteger(result)||result<1||result>513)throw Error('Carte de base refusée.');
            remainingImages=result;
          }else if(result!==true)throw Error('Données de carte refusées.');
          else if(remainingImages)remainingImages--;
          if(remainingImages){
            expectSection=true;channel.send('next');
          }else{
            channel.send('received');
            close();
          }
        }catch{close();}
      };
    }
  }
  async function accept(description){
    if(closed||accepted||description.type!==(upload?'offer':'answer'))return;
    accepted=true;
    if(!upload)signal=null;
    try{
      await connection.setRemoteDescription(description);
      if(upload&&!closed)await describe();
    }catch{close();}
  }
  if(upload)connection.ondatachannel=event=>attach(event.channel);
  else{
    attach(connection.createDataChannel('gorilla-map'));
    describe().catch(close);
  }
  return {accept,close,get signal(){return signal;},get closed(){return closed;}};
}
