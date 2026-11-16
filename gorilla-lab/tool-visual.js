import * as T from 'three';
import {gunProfile} from './gun-profile.js';

const modeColors=['#66f9df','#64bfff','#ff5873','#b997ff','#ffae58','#e2ff7b','#7dcdf9'];
const axis=new T.Vector3(0,1,0);

// Le modèle, le laser et le repère de visée partagent la pose et la couleur du mode actif.
export function createToolVisual(scene){
  const mesh=new T.Group();
  const shell=new T.MeshStandardMaterial({color:'#2c4750',roughness:.43,metalness:.47});
  const ribs=new T.MeshStandardMaterial({color:'#899fa3',roughness:.46,metalness:.57});
  const glow=new T.MeshBasicMaterial({toneMapped:false});
  function part(geometry,material,x,y,z,rx=0){
    const piece=new T.Mesh(geometry,material);
    piece.position.set(x,y,z);piece.rotation.x=rx;mesh.add(piece);
    return piece;
  }
  part(gunProfile([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],
    [-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),shell,.038,0,0);
  part(gunProfile([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),ribs,.038,0,0);
  part(new T.CylinderGeometry(.016,.031,.071,8),ribs,.038,.025,-.131,-Math.PI/2);
  part(new T.CylinderGeometry(.016,.020,.011,6,1,true),glow,.038,.025,-.169,-Math.PI/2);
  part(new T.BoxGeometry(.044,.009,.038),glow,.038,.069,-.023);
  const beam=new T.Mesh(new T.CylinderGeometry(.0020,.0030,1,5,1,true),
    new T.MeshBasicMaterial({transparent:true,opacity:.52,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false}));
  const tip=new T.Mesh(new T.IcosahedronGeometry(.012,0),
    new T.MeshBasicMaterial({transparent:true,opacity:.78,depthWrite:false,toneMapped:false}));
  scene.add(mesh,beam,tip);
  const muzzle=new T.Vector3(),dir=new T.Vector3();
  let lastMode=0;
  function hide(){mesh.visible=beam.visible=tip.visible=false;}
  function update({mode,position,quaternion,end}){
    if(!mode||!position||!quaternion||!end){hide();return;}
    mesh.visible=beam.visible=tip.visible=true;
    mesh.position.copy(position);mesh.quaternion.copy(quaternion);
    if(mode!==lastMode){
      lastMode=mode;
      glow.color.set(modeColors[mode-1]??modeColors[0]);
      beam.material.color.copy(glow.color);tip.material.color.copy(glow.color);
    }
    muzzle.set(.038,.025,-.173).applyQuaternion(mesh.quaternion).add(mesh.position);
    dir.subVectors(end,muzzle);beam.scale.y=Math.max(.001,dir.length());
    beam.position.copy(muzzle).addScaledVector(dir,.5);
    beam.quaternion.setFromUnitVectors(axis,dir.normalize());
    tip.position.copy(end);
  }
  hide();
  return {mesh,hide,update};
}
