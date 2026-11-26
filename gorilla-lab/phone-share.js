const chunkSize=2800,maxSize=12000;
const lifetime=12_000;
function isPhonePhoto(source){
  let bytes;
  try{bytes=atob(source.slice(0,40));}catch{return false;}
  if(bytes.slice(0,4)!=='RIFF'||bytes.slice(8,16)!=='WEBPVP8 '||
    bytes.charCodeAt(23)!==0x9d||bytes.charCodeAt(24)!==1||bytes.charCodeAt(25)!==0x2a)return false;
  const dimension=i=>(bytes.charCodeAt(i)|(bytes.charCodeAt(i+1)<<8))&0x3fff;
  return dimension(26)===240&&dimension(28)===150;
}
export function splitPhoto(id,revision,source){
  if(!Number.isInteger(id)||id<1||id>=100000||!/^[a-f0-9]{12}$/.test(revision)||
      typeof source!=='string'||source.length>maxSize||source.length%4!==0||
      !/^UklGR[A-Za-z0-9+/]*={0,2}$/.test(source)||!isPhonePhoto(source))return [];
  const chunks=source.match(new RegExp('.{1,'+chunkSize+'}','g'));
  return chunks.map((chunk,index)=>'photo:'+id+':'+revision+':'+index+':'+chunks.length+':'+chunk);
}
export function createPhoneShare(){
  const photos=new Map(),outbox=new Map(),incoming=new Map(),seen=new Set();
  let nextAt=0;
  function publish(id,source,now,revision=Array.from(crypto.getRandomValues(new Uint8Array(6)),n=>n.toString(16).padStart(2,'0')).join('')){
    const parts=splitPhoto(id,revision,source);
    if(!parts.length)return false;
    photos.set(id,{source,parts});
    outbox.set(id,{parts,index:0,until:now+lifetime,cycles:0});
    return true;
  }
  function receive(message,sender,now,allowed){
    const m=/^photo:([1-9][0-9]{0,4}):([a-f0-9]{12}):([0-4]):([1-5]):([A-Za-z0-9+/=]{1,2800})$/.exec(message);
    if(!m)return null;
    const [,idText,revision,indexText,countText,part]=m;
    const id=Number(idText),index=Number(indexText),count=Number(countText);
    const key=sender+':'+id+':'+revision;
    if(index>=count||seen.has(key))return null;
    for(const [k,v] of incoming)if(now-v.started>lifetime)incoming.delete(k);
    let entry=incoming.get(key);
    if(!entry){
      if(!allowed(id)||incoming.size>=64)return null;
      entry={started:now,parts:Array(count).fill(null)};incoming.set(key,entry);
    }
    if(count!==entry.parts.length)return null;
    entry.parts[index]=part;
    if(entry.parts.includes(null))return null;
    incoming.delete(key);
    const source=entry.parts.join('');
    if(!splitPhoto(id,revision,source).length)return null;
    seen.add(key);
    if(seen.size>384)seen.delete(seen.values().next().value);
    return {id,revision,source};
  }
  let pending=null;
  return {publish,receive,
    save(id,source){photos.set(id,{source});},
    get:id=>photos.get(id)?.source,
    retain(ids){for(const id of photos.keys())if(!ids.has(id)){photos.delete(id);outbox.delete(id);}},
    forget(id){photos.delete(id);outbox.delete(id);},
    resend(now){for(const [id,p] of photos)if(p.parts&&!outbox.has(id))outbox.set(id,{parts:p.parts,index:0,until:now+lifetime,cycles:0});},
    frame(now){
      if(now<nextAt)return null;
      for(const [id,entry] of outbox){
        if(entry.until<now||entry.cycles>=3){outbox.delete(id);continue;}
        pending=id;return entry.parts[entry.index];
      }
      return null;
    },
    sent(now){
      const entry=outbox.get(pending);
      if(!entry)return;
      outbox.delete(pending);outbox.set(pending,entry);
      if(++entry.index>=entry.parts.length){entry.index=0;entry.cycles++;}
      nextAt=now+260;pending=null;
    },
    clear(){photos.clear();outbox.clear();incoming.clear();seen.clear();nextAt=0;pending=null;},
  };
}
