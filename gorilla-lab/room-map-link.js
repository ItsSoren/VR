const prefix='gzip:';
const maxEncoded=16000;
export async function encodeRoomMapLink(map){
  const stream=new Blob([JSON.stringify(map)]).stream().pipeThrough(new CompressionStream('gzip'));
  const bytes=new Uint8Array(await new Response(stream).arrayBuffer());
  if(bytes.length>maxEncoded*3/4)return null;
  const payload=btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
  return prefix+payload;
}
export function isEncodedRoomMap(source){return source.startsWith(prefix);}
export async function decodeRoomMapLink(source,maxBytes){
  const payload=source.slice(prefix.length);
  if(!payload.length||payload.length>maxEncoded||!/^[0-9a-z_-]+$/i.test(payload))
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
