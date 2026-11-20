// Shared 2D texture workshop for map surfaces and Gorilla model parts.
// Entirely client-side, seamless brush strokes, no extra dependencies.
const SIZE=512;
const patterns=[
  ['solid','Uni'],['grain','Grain fin'],['rock','Pierre'],['soil','Terre'],
  ['sand','Sable'],['grass','Herbe'],['wood','Bois'],['tiles','Carreaux'],['brick','Briques'],
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
const textureShelfKey='gorilla-lab-texture-shelf-v1';
function readTextureShelf(){
  try{
    const shelf=JSON.parse(localStorage.getItem(textureShelfKey)??'[]');
    return Array.isArray(shelf)?shelf:[];
  }catch{return [];}
}
export function paintPattern(target,{pattern='grain',base='#667985',scale=1,seed=23}={}){
  const c=target.getContext('2d'),sz=SIZE;
  c.clearRect(0,0,sz,sz);c.fillStyle=validColor(base);c.fillRect(0,0,sz,sz);
  const random=seededRandom(seed);
  const step=sz/Math.max(4,2*Math.round(4*scale));
  const color=alpha=>{c.fillStyle=alpha>0?'#f6f4dc':'#18232b';c.globalAlpha=Math.abs(alpha);};
  if(['grain','soil','rock','sand','grass','wood'].includes(pattern)){
    const brushScale=1/Math.sqrt(scale);
    const density={grain:4200,soil:1000,rock:200,sand:9800,grass:2900,wood:2450}[pattern];
    for(let i=0;i<density;i++){
      const x=random()*sz,y=random()*sz,a=random(),b=random(),n=random();
      clipDraw(c,ctx=>{
        if(pattern==='rock'){
          const radius=(4+a*22)*brushScale;
          color(n>.45?.09+a*.4:-.08-a*.27);
          ctx.beginPath();
          for(let point=0;point<6;point++){
            const angle=point*Math.PI/3+b,dist=radius*(.63+.3*Math.cos(angle*2+b)+.25);
            ctx.lineTo(x+Math.cos(angle)*dist,y+Math.sin(angle)*dist*.72);
          }
          ctx.closePath();ctx.fill();
          ctx.globalAlpha=.3;ctx.strokeStyle='#232633';ctx.lineWidth=1.4;ctx.stroke();
        }else if(pattern==='soil'){
          const radius=(1+a*a*12)*brushScale;
          const crumb=ctx.createRadialGradient(x,y,0,x,y,radius);
          crumb.addColorStop(0,n>.58?'#b9906d9c':'#392219af');
          crumb.addColorStop(1,'#39221900');ctx.globalAlpha=.6;
          ctx.fillStyle=crumb;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
        }else if(pattern==='grass'||pattern==='wood'){
          const grass=pattern==='grass',length=(grass?5+a*25:7+a*110)*brushScale;
          ctx.strokeStyle=grass?(n>.51?'#c4d981':'#233514'):(n>.5?'#e9b583':'#34180c');
          ctx.globalAlpha=.08+b*.28;ctx.lineWidth=(.75+a*1.7)*brushScale;
          ctx.beginPath();ctx.moveTo(x,y);
          if(grass)ctx.quadraticCurveTo(x+length*(b-.5)*.55,y-length*.58,x+length*(b-.6),y-length);
          else ctx.quadraticCurveTo(x+length*.5,y+10*(b-.5),x+length,y+4*(n-.5));
          ctx.stroke();
        }else{
          color((n>.44?1:-1)*(.07+a*.29));
          const size=(pattern==='sand'?.6+a*1.6:1+a*5)*brushScale;
          ctx.fillRect(x,y,size,size*(.7+b*.6));
        }
      });
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
export function openTextureStudio({initial=null,tint='#687a86',name='Texture',pattern='solid',maxDataBytes=750000,onApply=()=>{}}={}){
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
          <div class="texture-setting-row">
            <label>Couleur de fond<input type="color" data-field="base" value="#687a86"></label>
            <label>Formes par tuile<input type="number" min="1" max="1000" value="32" data-field="density"></label>
          </div>
          <div class="texture-setting-row">
            <label>Graine<input type="number" min="0" max="2147483647" step="1" data-field="seed" value="23"></label>
            <label>Résolution à l’application<select data-field="resolution"><option value="128">128 × 128</option><option value="256">256 × 256</option><option value="512" selected>512 × 512</option></select></label>
          </div>
          <div class="texture-setting-row">
            <label>Taille min. (%)<input type="number" min="1" max="200" value="12" data-field="minScale"></label>
            <label>Taille max. (%)<input type="number" min="1" max="200" value="28" data-field="maxScale"></label>
          </div>
          <div class="texture-setting-row">
            <label>Rotation max. (°)<input type="number" min="0" max="360" value="360" data-field="rotation"></label>
            <label>Miroir aléatoire<input type="checkbox" data-field="mirror"></label>
          </div>
          <button data-cmd="add-shape">+ Ajouter le dessin comme forme</button>
          <output data-shape-count>0 forme</output>
          <div data-shape-list></div>
          <button data-cmd="generate">Générer le motif</button>
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
          <strong>BIBLIOTHÈQUE DE TEXTURES</strong>
          <label>Textures enregistrées<select data-field="shelf"></select></label>
          <div class="texture-setting-row">
            <button data-cmd="shelf-load">Charger</button>
            <button data-cmd="shelf-save">Enregistrer l’aperçu</button>
            <button data-cmd="shelf-remove">Retirer</button>
          </div>
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
  const settings={pattern:patterns.some(([id])=>id===pattern)?pattern:'grain',base:validColor(tint),scale:1,seed:23,resolution:512,ink:'#e1ad78',size:22,opacity:.85,hardness:.7};
  const ctx=display.getContext('2d',{willReadFrequently:true}),background=base.getContext('2d',{willReadFrequently:true}),top=overlay.getContext('2d',{willReadFrequently:true});
  const undo=[],redo=[];
  let changed=false,painting=false,dragPointer=null,tool='paint',last=null,savedTexture=null;
  find('#studio-title').textContent=name+' / SURFACE LAB';
  let shapes=[],editingShape=-1;
  find('[data-field=base]').value=settings.base;
  for(const field of ['base','seed','resolution','ink','size','opacity','hardness']){
    find('[data-field='+field+']').addEventListener('input',event=>{
      const value=event.target.value;
      settings[field]=field==='seed'?Math.trunc(limit(Number(value)||0,0,2147483647)):
        ['scale','resolution','size','opacity','hardness'].includes(field)?Number(value):value;
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
    top:top.getImageData(0,0,SIZE,SIZE),shapes,editingShape});
  const restore=state=>{
    background.putImageData(state.base,0,0);
    top.putImageData(state.top,0,0);shapes=state.shapes;editingShape=state.editingShape;updateShapeCount();composite();
  };
  const remember=()=>{
    savedTexture=null;
    undo.push(capture());if(undo.length>16)undo.shift();
    redo.length=0;changed=true;
    find('[data-cmd=undo]').disabled=false;
    find('[data-cmd=redo]').disabled=true;
  };
  const history=(back,forward)=>{
    if(!back.length)return;
    savedTexture=null;
    forward.push(capture());restore(back.pop());
    find('[data-cmd=undo]').disabled=!undo.length;
    find('[data-cmd=redo]').disabled=!redo.length;
    changed=true;
  };
  const updateShapeCount=()=>{
    find('[data-shape-count]').textContent=shapes.length+' forme'+(shapes.length>1?'s':'');
    find('[data-cmd=add-shape]').textContent=editingShape<0?'+ Ajouter le dessin comme forme':'Enregistrer la forme '+(editingShape+1);
    find('[data-shape-list]').replaceChildren(...shapes.map((shape,index)=>{
      const row=document.createElement('div');
      row.className='texture-setting-row';
      const preview=document.createElement('canvas');preview.width=48;preview.height=32;
      const scale=Math.min(48/shape.width,32/shape.height);
      preview.getContext('2d').drawImage(shape,0,0,shape.width*scale,shape.height*scale);
      const edit=document.createElement('button'),remove=document.createElement('button');
      edit.textContent='Modifier '+(index+1);remove.textContent='Supprimer '+(index+1);
      edit.onclick=()=>{
        remember();editingShape=index;
        top.clearRect(0,0,SIZE,SIZE);
        top.drawImage(shape,(SIZE-shape.width)/2,(SIZE-shape.height)/2);
        updateShapeCount();composite();
      };
      remove.onclick=()=>{
        remember();shapes=shapes.filter((_,i)=>i!==index);
        if(editingShape===index){editingShape=-1;top.clearRect(0,0,SIZE,SIZE);}
        else if(editingShape>index)editingShape--;
        updateShapeCount();composite();
      };
      row.append(preview,edit,remove);return row;
    }));
  };
  find('[data-cmd=add-shape]').onclick=()=>{
    const pixels=top.getImageData(0,0,SIZE,SIZE).data;
    let x0=SIZE,y0=SIZE,x1=-1,y1=-1;
    for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){
      if(!pixels[4*(y*SIZE+x)+3])continue;
      x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);
    }
    if(x1<0){setStatus('Dessine une forme au pinceau avant de l’ajouter.');return;}
    const shape=document.createElement('canvas');
    shape.width=x1-x0+1;shape.height=y1-y0+1;
    shape.getContext('2d').drawImage(overlay,x0,y0,shape.width,shape.height,0,0,shape.width,shape.height);
    remember();
    shapes=editingShape<0?[...shapes,shape]:shapes.map((value,index)=>index===editingShape?shape:value);
    editingShape=-1;top.clearRect(0,0,SIZE,SIZE);
    updateShapeCount();composite();setStatus('Forme ajoutée. Dessine la suivante ou génère ton motif.');
  };
  const generate=()=>{
    const value=(name,min,max)=>limit(Number(find('[data-field='+name+']').value)||0,min,max);
    const density=Math.round(value('density',1,1000));
    const minScale=value('minScale',1,200)/100;
    const maxScale=Math.max(minScale,value('maxScale',1,200)/100);
    const rotation=value('rotation',0,360)*Math.PI/180;
    const mirror=find('[data-field=mirror]').checked;
    const random=seededRandom(settings.seed);
    remember();
    settings.pattern='solid';
    paintPattern(base,settings);
    for(let i=0;i<density&&shapes.length;i++){
      const shape=shapes[Math.floor(random()*shapes.length)];
      const x=random()*SIZE,y=random()*SIZE,angle=random()*rotation;
      const scale=SIZE*(minScale+random()*(maxScale-minScale))/Math.max(shape.width,shape.height);
      const flip=mirror&&random()<.5?-1:1;
      clipDraw(background,ink=>{
        ink.translate(x,y);ink.rotate(angle);ink.scale(flip*scale,scale);
        ink.drawImage(shape,-shape.width/2,-shape.height/2);
      });
    }
    composite();
    setStatus(shapes.length?'Motif généré à partir de tes formes.':'Fond uni. Dessine et ajoute une forme pour la répéter.');
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
    if(savedTexture?.recipe.resolution===settings.resolution&&savedTexture.data.length<=maxDataBytes)return savedTexture.data;
    for(const side of [settings.resolution,256,128].filter((size,i,list)=>size<=settings.resolution&&list.indexOf(size)===i)){
      const out=document.createElement('canvas');out.width=out.height=side;
      out.getContext('2d').drawImage(display,0,0,side,side);
      for(const quality of [.85,.72,.58]){
        const data=out.toDataURL('image/webp',quality);
        if(data.length<=maxDataBytes)return data;
      }
    }
    throw Error('Texture trop complexe. Réduis les détails ou utilise une image plus simple.');
  };
  const shelf=readTextureShelf(),shelfField=find('[data-field=shelf]');
  function refreshShelf(selected=''){
    shelfField.replaceChildren(new Option('Choisir une texture',''),...shelf.map(item=>new Option(item.name,item.id)));
    shelfField.value=selected;
    const selectedItem=Boolean(shelfField.value);
    find('[data-cmd=shelf-load]').disabled=!selectedItem;
    find('[data-cmd=shelf-remove]').disabled=!selectedItem;
  }
  function writeShelf(next,selected){
    try{localStorage.setItem(textureShelfKey,JSON.stringify(next));}
    catch{setStatus('La bibliothèque est pleine. Retire une texture ou réduis la résolution.');return false;}
    shelf.splice(0,shelf.length,...next);
    refreshShelf(selected);
    return true;
  }
  shelfField.onchange=()=>refreshShelf(shelfField.value);
  find('[data-cmd=shelf-save]').onclick=()=>{
    const label=patterns.find(([id])=>id===settings.pattern)?.[1]??'Texture';
    const name=prompt('Nom de la texture',label)?.trim().slice(0,50);
    if(!name)return;
    try{
      const entry={id:crypto.randomUUID(),name,data:saveData()};
      const {pattern,base,scale,seed,resolution}=settings;
      entry.recipe={pattern,base,scale,seed,resolution};
      if(writeShelf([...shelf,entry],entry.id))setStatus('Texture disponible dans les deux ateliers.');
    }catch(error){setStatus(error.message);}
  };
  find('[data-cmd=shelf-load]').onclick=async()=>{
    const entry=shelf.find(item=>item.id===shelfField.value);
    if(!entry||changed&&!confirm('Remplacer l’aperçu et les retouches actuelles ?'))return;
    try{
      const canvas=makeCanvas();
      await loadImage(entry.data,canvas);
      remember();
      background.clearRect(0,0,SIZE,SIZE);background.drawImage(canvas,0,0);
      top.clearRect(0,0,SIZE,SIZE);
      Object.assign(settings,entry.recipe);
      savedTexture=entry;
      for(const key of ['base','seed','resolution'])find('[data-field='+key+']').value=settings[key];
      composite();setStatus('Texture chargée. Applique-la à l’objet sélectionné.');
    }catch(error){setStatus(error.message);}
  };
  find('[data-cmd=shelf-remove]').onclick=()=>{
    if(writeShelf(shelf.filter(item=>item.id!==shelfField.value),''))setStatus('Texture retirée de la bibliothèque.');
  };
  refreshShelf();
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
  find('[data-field=base]').focus({preventScroll:true});
  return {close:()=>close(false)};
}

