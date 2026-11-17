// Shared 2D texture workshop for map surfaces and Gorilla model parts.
// Entirely client-side, seamless brush strokes, no extra dependencies.
const SIZE=512;
const patterns=[
  ['solid','Uni'],['grain','Grain fin'],['rock','Pierre'],['soil','Terre'],
  ['grass','Fibres végétales'],['wood','Bois'],['tiles','Carreaux'],['brick','Briques'],
  ['grid','Grille'],['woven','Tissu'],['stripes','Rayures'],['dots','Points'],
];
const makeCanvas=()=>{
  const c=document.createElement('canvas');c.width=SIZE;c.height=SIZE;return c;
};
const validColor=value=>/^#[a-f0-9]{6}$/i.test(value)?value:'#8a9ca0';
const limit=(v,a,b)=>Math.min(b,Math.max(a,v));
const downloadCanvas=(canvas,name)=>{
  canvas.toBlob(blob=>{
    if(!blob)return;
    const link=document.createElement('a'),url=URL.createObjectURL(blob);
    link.href=url;link.download=name+'.png';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
  },'image/png');
};
const clipDraw=(ctx,callback)=>{
  // Duplicate around edges so generated markings and brush strokes tile seamlessly.
  for(const x of [-SIZE,0,SIZE])for(const y of [-SIZE,0,SIZE]){
    ctx.save();ctx.translate(x,y);callback(ctx);ctx.restore();
  }
};
function seededRandom(seed){
  let state=seed>>>0;
  return ()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/2**32);
}
export function paintPattern(target,{pattern='grain',base='#667985',scale=1,seed=23}={}){
  const c=target.getContext('2d'),sz=SIZE;
  c.clearRect(0,0,sz,sz);c.fillStyle=validColor(base);c.fillRect(0,0,sz,sz);
  const random=seededRandom(seed);
  const step=limit(64/scale,12,192);
  const color=alpha=>{c.fillStyle=alpha>0?'#f6f4dc':'#18232b';c.globalAlpha=Math.abs(alpha);};
  if(['grain','soil','rock','grass','wood'].includes(pattern)){
    const density=pattern==='wood'?1400:pattern==='grass'?3700:pattern==='rock'?1900:4300;
    for(let i=0;i<density;i++){
      const x=random()*sz,y=random()*sz;
      const w=pattern==='wood'?random()*45+5:pattern==='grass'?random()*2+1:pattern==='rock'?random()*20+2:random()*7+1;
      const h=pattern==='grass'?random()*29+7:pattern==='wood'?random()*2+1:pattern==='rock'?random()*9+1:random()*5+1;
      color((random()>.47?1:-1)*(pattern==='soil'?.07+random()*.22:.05+random()*.19));
      clipDraw(c,ctx=>ctx.fillRect(x,y,w,h));
    }
  }
  if(['tiles','brick','grid','woven','stripes','dots'].includes(pattern)){
    c.globalAlpha=.5;c.lineWidth=Math.max(1,3/scale);
    const rows=Math.ceil(sz/step);
    if(pattern==='dots'){
      color(.36);
      for(let y=0;y<rows;y++)for(let x=0;x<rows;x++){
        clipDraw(c,ctx=>{ctx.beginPath();ctx.arc(x*step+step/2,y*step+step/2,
          limit(step*.11,2,13),0,Math.PI*2);ctx.fill();});
      }
    }else if(pattern==='stripes'){
      c.fillStyle='#17242b';c.globalAlpha=.3;
      for(let x=0;x<sz;x+=step/2)c.fillRect(x,0,Math.max(2,step/10),sz);
    }else if(pattern==='woven'){
      for(let y=0;y<sz;y+=step/5){
        c.fillStyle=y%(step*2)<step?'#f4f3e8':'#14212a';c.globalAlpha=.14;
        c.fillRect(0,y,sz,Math.max(1,step/13));
      }
      for(let x=0;x<sz;x+=step/5){
        c.fillStyle=x%(step*2)<step?'#14212a':'#f4f3e8';c.globalAlpha=.13;
        c.fillRect(x,0,Math.max(1,step/13),sz);
      }
    }else{
      c.strokeStyle='#12212a';c.globalAlpha=.48;
      for(let y=0;y<=sz;y+=step){
        c.beginPath();c.moveTo(0,y);c.lineTo(sz,y);c.stroke();
      }
      for(let y=0;y<sz;y+=step){
        for(let x=0;x<=sz;x+=step){
          const offset=pattern==='brick'&&(Math.floor(y/step)%2)?step/2:0;
          if(pattern!=='brick'&&y>0)continue;
          c.beginPath();c.moveTo(x+offset,y);c.lineTo(x+offset,y+step);c.stroke();
        }
      }
      if(pattern==='grid'){
        c.strokeStyle='#f7ebc9';c.globalAlpha=.1;
        for(let x=step/2;x<sz;x+=step){c.beginPath();c.moveTo(x,0);c.lineTo(x,sz);c.stroke();}
      }
    }
  }
  c.globalAlpha=1;
}
const STYLES=`
.texture-backdrop{position:fixed;inset:0;z-index:2000;background:#080e14ca;display:grid;place-items:center;padding:12px}
.texture-window{width:min(1030px,98vw);height:min(770px,96dvh);display:flex;flex-direction:column;
  background:#20282f;border:1px solid #667481;box-shadow:0 28px 90px #000d;border-radius:8px;
  overflow:hidden;color:#e4ebed;font:12px/1.4 system-ui,sans-serif}
.texture-window *{box-sizing:border-box}
.texture-window button,.texture-window select,.texture-window input{font:inherit}
.texture-window button{min-height:29px;border:1px solid #4a5b67;border-radius:4px;padding:5px 10px;
  background:#313e48;color:inherit;cursor:pointer}
.texture-window button:hover{background:#415562}.texture-window button:disabled{opacity:.4;cursor:default}
.texture-window input,.texture-window select{width:100%;min-height:29px;padding:4px 6px;
  background:#16232b;border:1px solid #52616d;border-radius:4px;color:inherit}
.texture-window input[type=color]{padding:2px;min-height:30px}
.texture-window input[type=range]{padding:0;min-height:19px}
.texture-window label{display:flex;flex-direction:column;gap:4px;min-width:0;color:#b9c9cf}
.texture-window h2{margin:0;font-size:15px;font-weight:700}
.texture-head,.texture-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;
 padding:9px 14px;background:#28333d;border-bottom:1px solid #43515c}
.texture-head small{color:#8fbec2;font-size:10px;letter-spacing:.12em}
.texture-head-actions,.texture-foot-actions{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.texture-body{display:grid;grid-template-columns:minmax(310px,1fr) 270px;gap:10px;padding:10px;flex:1;min-height:0;overflow:hidden}
.texture-canvas-wrap{display:flex;align-items:center;justify-content:center;min-width:0;min-height:0;
 padding:10px;background:#151f28;border:1px solid #35434f;border-radius:5px;overflow:hidden}
.texture-canvas{display:block;width:min(100%,100%,calc(96dvh - 190px));height:auto;max-height:100%;
 object-fit:contain;aspect-ratio:1;image-rendering:auto;touch-action:none;cursor:crosshair;
 border:1px solid #667482;box-shadow:0 0 0 1px #121b24}
.texture-settings{display:flex;flex-direction:column;gap:11px;overflow-y:auto;padding-right:2px;scrollbar-width:thin}
.texture-setting-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.texture-tool-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}
.texture-tool-grid button{padding:4px 1px;font-size:11px}
.texture-tool-grid button[aria-pressed=true]{border-color:#e6ad70;background:#704e37;color:#fff8ed}
.texture-section{border-bottom:1px solid #3a4b58;padding-bottom:10px;display:flex;flex-direction:column;gap:7px}
.texture-section strong{font-size:11px;letter-spacing:.07em;color:#f3ca93}
.texture-tile{width:100%;height:auto;aspect-ratio:2 / 1;object-fit:contain;image-rendering:auto;
 border:1px solid #4e6270;border-radius:4px;background:#142028}
.texture-foot{border-top:1px solid #40515c;border-bottom:0}
.texture-foot span{color:#aabac4;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.texture-window .apply{background:#b98048;border-color:#d8aa75;color:#fff9ee;font-weight:700}
.texture-window .apply:hover{background:#c99359}
.texture-window [hidden]{display:none!important}
@media(max-width:690px){.texture-body{grid-template-columns:1fr;grid-template-rows:minmax(150px,1fr) 240px}
.texture-window{height:98dvh}.texture-canvas{max-height:100%}.texture-setting-row{grid-template-columns:1fr 1fr}
.texture-head{padding:6px 8px}.texture-head small{display:none}}
`;
function addStyles(){
  if(document.getElementById('texture-studio-styles'))return;
  const sheet=document.createElement('style');
  sheet.id='texture-studio-styles';sheet.textContent=STYLES;document.head.append(sheet);
}
async function loadImage(src,canvas){
  if(!src)return;
  const image=new Image();
  image.decoding='async';
  await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=src;});
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,SIZE,SIZE);
  ctx.drawImage(image,0,0,SIZE,SIZE);
}
export function openTextureStudio({initial=null,tint='#687a86',name='Texture',pattern='grain',maxDataBytes=750000,onApply=()=>{}}={}){
  addStyles();
  const backdrop=document.createElement('div');
  backdrop.className='texture-backdrop';
  backdrop.innerHTML=`
  <section class="texture-window" role="dialog" aria-modal="true" aria-labelledby="studio-title">
    <header class="texture-head">
      <div><small>GORILLA / SURFACE LAB</small><h2 id="studio-title">Atelier de textures</h2></div>
      <div class="texture-head-actions">
        <button data-cmd="undo" title="Annuler · Ctrl Z">↶</button>
        <button data-cmd="redo" title="Rétablir · Ctrl Maj Z">↷</button>
        <button data-cmd="export" title="Exporter la texture en PNG">PNG ↓</button>
        <button data-cmd="close" title="Fermer">✕</button>
      </div>
    </header>
    <div class="texture-body">
      <div class="texture-canvas-wrap"><canvas class="texture-canvas" width="512" height="512" aria-label="Dessiner sur la texture"></canvas></div>
      <div class="texture-settings">
        <div class="texture-section">
          <strong>MOTIF DE BASE</strong>
          <label>Générateur<select data-field="pattern"></select></label>
          <div class="texture-setting-row">
            <label>Couleur de fond<input type="color" data-field="base" value="#687a86"></label>
            <label>Répétition<input type="range" min=".5" max="5" value="1" step=".25" data-field="scale"></label>
          </div>
          <button data-cmd="generate">Régénérer le motif</button>
        </div>
        <div class="texture-section">
          <strong>PEINDRE LE MOTIF</strong>
          <div class="texture-tool-grid">
            <button data-tool="paint" aria-pressed="true">Pinceau</button>
            <button data-tool="erase" aria-pressed="false">Gomme</button>
            <button data-tool="stamp" aria-pressed="false">Tampon</button>
            <button data-tool="pick" aria-pressed="false">Pipette</button>
          </div>
          <div class="texture-setting-row">
            <label>Couleur<input type="color" data-field="ink" value="#e1ad78"></label>
            <label>Taille du brush<input type="range" min="2" max="100" value="22" data-field="size"></label>
            <label>Opacité<input type="range" min=".1" max="1" step=".05" value=".85" data-field="opacity"></label>
            <label>Dureté<input type="range" min=".05" max="1" step=".05" value=".7" data-field="hardness"></label>
          </div>
        </div>
        <div class="texture-section">
          <strong>RÉPÉTITION SANS COUTURE</strong>
          <canvas class="texture-tile" width="256" height="128" aria-label="Aperçu du motif répété"></canvas>
          <small style="color:#a3b3bc">Les traits qui dépassent un bord continuent sur le bord opposé.</small>
        </div>
        <div class="texture-section">
          <strong>IMPORTER UNE IMAGE</strong>
          <button data-cmd="import">Choisir PNG / JPG / WebP</button>
          <input data-field="file" type="file" accept="image/png,image/jpeg,image/webp" hidden>
        </div>
      </div>
    </div>
    <footer class="texture-foot"><span data-status>Peins, gomme ou régénère, puis applique au modèle.</span>
      <div class="texture-foot-actions"><button data-cmd="cancel">Annuler</button>
      <button class="apply" data-cmd="apply">Appliquer la texture</button></div>
    </footer>
  </section>`;
  document.body.append(backdrop);
  const find=selector=>backdrop.querySelector(selector);
  const display=find('.texture-canvas'),tile=find('.texture-tile');
  const base=makeCanvas(),overlay=makeCanvas();
  const settings={pattern:patterns.some(([id])=>id===pattern)?pattern:'grain',base:validColor(tint),scale:1,ink:'#e1ad78',size:22,opacity:.85,hardness:.7};
  const ctx=display.getContext('2d'),background=base.getContext('2d'),top=overlay.getContext('2d');
  const undo=[],redo=[];
  let changed=false,painting=false,dragPointer=null,tool='paint',last=null;
  find('#studio-title').textContent=name+' / SURFACE LAB';
  find('[data-field=pattern]').replaceChildren(...patterns.map(([key,value])=>new Option(value,key)));
  find('[data-field=base]').value=settings.base;
  find('[data-field=pattern]').value=settings.pattern;
  for(const field of ['pattern','base','scale','ink','size','opacity','hardness']){
    find('[data-field='+field+']').addEventListener('input',event=>{
      settings[field]=['scale','size','opacity','hardness'].includes(field)?Number(event.target.value):event.target.value;
    });
  }
  const setStatus=message=>{find('[data-status]').textContent=message;};
  const composite=()=>{
    ctx.clearRect(0,0,SIZE,SIZE);
    ctx.drawImage(base,0,0);ctx.drawImage(overlay,0,0);
    const t=tile.getContext('2d');
    t.clearRect(0,0,256,128);
    for(let y=0;y<2;y++)for(let x=0;x<4;x++)t.drawImage(display,x*64,y*64,64,64);
  };
  const capture=()=>({base:background.getImageData(0,0,SIZE,SIZE),
    top:top.getImageData(0,0,SIZE,SIZE)});
  const restore=state=>{
    background.putImageData(state.base,0,0);
    top.putImageData(state.top,0,0);composite();
  };
  const remember=()=>{
    undo.push(capture());if(undo.length>16)undo.shift();
    redo.length=0;changed=true;
    find('[data-cmd=undo]').disabled=false;
    find('[data-cmd=redo]').disabled=true;
  };
  const history=(back,forward)=>{
    if(!back.length)return;
    forward.push(capture());restore(back.pop());
    find('[data-cmd=undo]').disabled=!undo.length;
    find('[data-cmd=redo]').disabled=!redo.length;
    changed=true;
  };
  const generate=()=>{
    if(changed&&!confirm('Remplacer le motif et les coups de pinceau actuels ?'))return;
    remember();
    paintPattern(base,settings);top.clearRect(0,0,SIZE,SIZE);composite();
    setStatus('Motif régénéré. Ajoute des marques avec le pinceau.');
  };
  const locate=event=>{
    const rect=display.getBoundingClientRect();
    return{x:(event.clientX-rect.left)/rect.width*SIZE,
      y:(event.clientY-rect.top)/rect.height*SIZE};
  };
  const brush=(point)=>{
    const radius=settings.size/2,opacity=settings.opacity;
    clipDraw(top,ink=>{
      ink.save();
      if(tool==='erase')ink.globalCompositeOperation='destination-out';
      ink.globalAlpha=opacity;
      const soft=limit(settings.hardness,0.05,1);
      if(tool==='stamp'){
        ink.fillStyle=settings.ink;
        ink.translate(point.x,point.y);
        ink.rotate(Math.PI/4);
        ink.fillRect(-radius*.8,-radius*.8,radius*1.6,radius*1.6);
      }else{
        const gradient=ink.createRadialGradient(point.x,point.y,radius*soft*.85,
          point.x,point.y,radius);
        if(tool==='erase'){
          gradient.addColorStop(0,'rgba(0,0,0,1)');
          gradient.addColorStop(1,'rgba(0,0,0,0)');
        }else{
          const rgb=settings.ink.match(/[\da-f]{2}/gi).map(hex=>parseInt(hex,16)).join(',');
          gradient.addColorStop(0,'rgba('+rgb+',1)');
          gradient.addColorStop(1,'rgba('+rgb+',0)');
        }
        ink.fillStyle=gradient;ink.beginPath();ink.arc(point.x,point.y,radius,0,2*Math.PI);ink.fill();
      }
      ink.restore();
    });
  };
  const paintLine=(from,to)=>{
    const dist=Math.hypot(to.x-from.x,to.y-from.y);
    const steps=Math.max(1,Math.ceil(dist/Math.max(2,settings.size*.18)));
    for(let i=1;i<=steps;i++)brush({x:from.x+(to.x-from.x)*i/steps,y:from.y+(to.y-from.y)*i/steps});
  };
  const pick=(point)=>{
    const data=ctx.getImageData(Math.floor(limit(point.x,0,SIZE-1)),
      Math.floor(limit(point.y,0,SIZE-1)),1,1).data;
    settings.ink='#'+[...data].slice(0,3).map(v=>v.toString(16).padStart(2,'0')).join('');
    find('[data-field=ink]').value=settings.ink;
    setStatus('Couleur prélevée sur la texture.');
  };
  display.addEventListener('pointerdown',event=>{
    if(event.button!==0||painting)return;
    const point=locate(event);
    if(tool==='pick'){pick(point);return;}
    event.preventDefault();remember();painting=true;dragPointer=event.pointerId;last=point;
    display.setPointerCapture(event.pointerId);brush(point);composite();
  });
  display.addEventListener('pointermove',event=>{
    if(!painting||event.pointerId!==dragPointer)return;
    event.preventDefault();const point=locate(event);
    if(tool==='stamp')brush(point);
    else paintLine(last,point);
    last=point;composite();
  });
  const end=event=>{
    if(event.pointerId!==dragPointer)return;
    painting=false;dragPointer=null;last=null;
    if(display.hasPointerCapture(event.pointerId))display.releasePointerCapture(event.pointerId);
  };
  display.addEventListener('pointerup',end);
  display.addEventListener('pointercancel',end);
  for(const button of backdrop.querySelectorAll('[data-tool]')){
    button.onclick=()=>{
      tool=button.dataset.tool;
      backdrop.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    };
  }
  find('[data-cmd=generate]').onclick=generate;
  find('[data-cmd=undo]').onclick=()=>history(undo,redo);
  find('[data-cmd=redo]').onclick=()=>history(redo,undo);
  find('[data-cmd=export]').onclick=()=>downloadCanvas(display,'gorilla-texture');
  find('[data-cmd=import]').onclick=()=>find('[data-field=file]').click();
  find('[data-field=file]').addEventListener('change',async event=>{
    const file=event.target.files?.[0];event.target.value='';
    if(!file)return;
    try{
      if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw Error('Image PNG / JPG / WebP uniquement.');
      if(file.size>5_000_000)throw Error('Image trop volumineuse (5 Mo max).');
      const bitmap=await createImageBitmap(file);
      remember();
      background.clearRect(0,0,SIZE,SIZE);
      background.drawImage(bitmap,0,0,SIZE,SIZE);
      bitmap.close();
      top.clearRect(0,0,SIZE,SIZE);composite();
      setStatus('Image importée, prête à être peinte.');
    }catch(error){setStatus(error.message);}
  });
  const close=force=>{
    if(!force&&changed&&!confirm('Fermer sans appliquer les retouches ?'))return;
    window.removeEventListener('keydown',keys,true);
    backdrop.remove();
  };
  const keys=event=>{
    if(event.key==='Escape'){event.preventDefault();close(false);return;}
    if((event.ctrlKey||event.metaKey)&&!event.target.closest('input,select')){
      if(event.key.toLowerCase()==='z'){
        event.preventDefault();event.stopImmediatePropagation();
        if(event.shiftKey)history(redo,undo);else history(undo,redo);
      }
    }
  };
  window.addEventListener('keydown',keys,true);
  find('[data-cmd=close]').onclick=()=>close(false);
  find('[data-cmd=cancel]').onclick=()=>close(false);
  const saveData=()=>{
    for(const side of [SIZE,384,256,192]){
      const out=document.createElement('canvas');out.width=out.height=side;
      out.getContext('2d').drawImage(display,0,0,side,side);
      for(const quality of [.85,.72,.58]){
        const data=out.toDataURL('image/webp',quality);
        if(data.length<=maxDataBytes)return data;
      }
    }
    throw Error('Texture trop complexe. Réduis les détails ou utilise une image plus simple.');
  };
  find('[data-cmd=apply]').onclick=async()=>{
    const button=find('[data-cmd=apply]');
    button.disabled=true;
    try{
      const data=saveData();
      await onApply(data);
      changed=false;close(true);
    }catch(error){setStatus(error.message||'Impossible d’appliquer la texture.');}
    finally{button.disabled=false;}
  };
  find('[data-cmd=undo]').disabled=true;find('[data-cmd=redo]').disabled=true;
  paintPattern(base,settings);composite();
  if(initial)loadImage(initial,base).then(composite).catch(()=>setStatus('Image introuvable : motif généré disponible.'));
  find('[data-field=pattern]').focus({preventScroll:true});
  return {close:()=>close(false)};
}
