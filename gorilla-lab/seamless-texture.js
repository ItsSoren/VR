export const texturePresets=['Pierre','Terre','Herbe','Sable','Bois','Carreaux'];
const colors=['#727986','#795a45','#66834b','#c8ad71','#a17449','#657b82'];
export function seamlessTexture(index,tint=colors[index]){
  index=Math.max(0,Math.min(texturePresets.length-1,index|0));
  const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
  const c=canvas.getContext('2d');
  c.fillStyle=/^#[a-f0-9]{6}$/i.test(tint)?tint:colors[index];
  c.fillRect(0,0,512,512);
  let state=(index+45)*31337;
  const random=()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/2**32);
  // Reproduit chaque tache qui dépasse sur le bord opposé pour éviter une couture.
  const periodic=(x,y,w,h)=>{
    for(const dx of [0,-512])for(const dy of [0,-512])c.fillRect(x+dx,y+dy,w,h);
  };
  for(let i=0;i<4800;i++){
    const x=random()*512,y=random()*512;
    c.fillStyle=random()>.46?'#fcf5dc':'#212131';
    c.globalAlpha=.025+random()*.19;
    periodic(x,y,index===4?3+random()*62:1+random()*9,1+random()*(index===4?3:8));
  }
  if(index===5){
    c.fillStyle='#151d22';c.globalAlpha=.47;
    for(let i=0;i<512;i+=128){c.fillRect(0,i,512,3);c.fillRect(i,0,3,512);}
  }
  return canvas;
}
