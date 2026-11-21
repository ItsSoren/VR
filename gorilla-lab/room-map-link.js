const prefix='gzip:';
const maxEncoded=16000;
const fragmentSize=3900,maxFragments=40;
export async function encodeRoomMapLink(map,forRoom=false){
  const stream=new Blob([JSON.stringify(map)]).stream().pipeThrough(new CompressionStream('gzip'));
  const bytes=new Uint8Array(await new Response(stream).arrayBuffer());
  if(bytes.length>(forRoom?maxFragments*fragmentSize:maxEncoded)*3/4)return null;
  let binary='';
  for(let offset=0;offset<bytes.length;offset+=8192)binary+=String.fromCharCode(...bytes.subarray(offset,offset+8192));
  const payload=btoa(binary).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
  return prefix+payload;
}
export function isEncodedRoomMap(source){return source.startsWith(prefix);}
export async function decodeRoomMapLink(source,maxBytes){
  const payload=source.slice(prefix.length);
  if(!payload.length||payload.length>maxFragments*fragmentSize||!/^[0-9a-z_-]+$/i.test(payload))
    throw Error('Lien de carte invalide.');
  const data=Uint8Array.from(atob(payload.replaceAll('-','+').replaceAll('_','/')),char=>char.charCodeAt(0));
  const reader=new Blob([data]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();
  const decoder=new TextDecoder('utf-8',{fatal:true});
  let bytes=0,sourceText='';
  try{
    for(;;){
      const {done,value}=await reader.read();
      if(done)break;
      bytes+=value.byteLength;
      if(bytes>maxBytes){await reader.cancel();throw Error('Carte du salon trop lourde.');}
      sourceText+=decoder.decode(value,{stream:true});
    }
    return sourceText+decoder.decode();
  }finally{reader.releaseLock();}
}

export function splitRoomMap(source){
  if(!source?.startsWith(prefix)||source.length<=4096)return null;
  const payload=source.slice(prefix.length),total=Math.ceil(payload.length/fragmentSize);
  if(total>maxFragments)return null;
  return Array.from({length:total},(_,index)=>'part:'+index+':'+total+':'+payload.slice(index*fragmentSize,(index+1)*fragmentSize));
}

export function receiveMapFragment(frame,transfer){
  const match=/^part:(\d{1,2}):(\d{1,2}):([\w-]+)$/.exec(frame);
  if(!match)return null;
  const [,i,n,payload]=match,index=Number(i),total=Number(n);
  if(total<2||total>maxFragments||index>=total||payload.length>fragmentSize||index<total-1&&payload.length!==fragmentSize)return null;
  if(transfer.total!==total){transfer.total=total;transfer.fragments=new Map();}
  transfer.fragments.set(index,payload);
  if(transfer.fragments.size!==total)return null;
  return prefix+Array.from({length:total},(_,j)=>transfer.fragments.get(j)).join('');
}
