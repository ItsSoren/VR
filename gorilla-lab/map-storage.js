let database;

function openMapStorage(){
  database??=new Promise((resolve,reject)=>{
    const request=indexedDB.open('gorilla-lab-maps',1);
    request.onupgradeneeded=()=>request.result.createObjectStore('maps');
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  }).catch(error=>{database=null;throw error;});
  return database;
}

async function accessMap(key,mode,operation){
  const db=await openMapStorage();
  return new Promise((resolve,reject)=>{
    const transaction=db.transaction('maps',mode);
    const request=operation(transaction.objectStore('maps'),key);
    transaction.oncomplete=()=>resolve(request.result);
    transaction.onabort=()=>reject(transaction.error);
  });
}

export async function readLocalMap(key){
  const saved=await accessMap(key,'readonly',(maps,id)=>maps.get(id)).catch(()=>undefined);
  return saved??localStorage.getItem(key);
}

export async function writeLocalMap(key,json){
  await accessMap(key,'readwrite',(maps,id)=>maps.put(json,id));
}

export async function clearLocalMap(key){
  localStorage.removeItem(key);
  await accessMap(key,'readwrite',(maps,id)=>maps.delete(id));
}
