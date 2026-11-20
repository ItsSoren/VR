(()=>{var Vf=["Jour","Coucher de soleil","Nuit"],hl={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},fx=[hl,{...hl,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...hl,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Gi(n){return{...fx[n]??hl}}var ul=5e6,px=4*Math.ceil(ul/3)+23,br=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,rs=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function dl(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(rs(n.preset,0,2,0)),t=Gi(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=px?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=ul?n.skyImage:null,r=rs(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:rs(n.rotation,-360,360,0),skyTint:br(n.skyTint,"#ffffff"),skyColor:br(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:br(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,rs(n.fogFar,1,4096,t.fogFar)),azimuth:rs(n.azimuth,-360,360,t.azimuth),elevation:rs(n.elevation,-89,89,t.elevation),sunColor:br(n.sunColor,t.sunColor),sunPower:rs(n.sunPower,0,12,t.sunPower),ambientColor:br(n.ambientColor,t.ambientColor),groundColor:br(n.groundColor,t.groundColor),ambientPower:rs(n.ambientPower,0,12,t.ambientPower)}}var lu;function mx(){return lu??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw lu=null,n}),lu}async function Gf(n,e,t){let i=await mx();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function Hf(n){return await Gf(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function cu(n,e){await Gf(n,"readwrite",(t,i)=>t.put(e,i))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ep=0,Ju=1,Ap=2;var Ku=1,Cp=2,Ii=3,gi=0,En=1,tn=2,Ji=0,Hs=1,Ra=2,$u=3,Qu=4,Rp=5,fs=100,Pp=101,Ip=102,Dp=103,Lp=104,Up=200,Np=201,Fp=202,Op=203,Wl=204,Xl=205,Bp=206,zp=207,kp=208,Vp=209,Gp=210,Hp=211,Wp=212,Xp=213,qp=214,vc=0,Mc=1,bc=2,Ws=3,Sc=4,wc=5,Tc=6,Ec=7,Ac=0,Yp=1,Zp=2,Ki=0,jp=1,Jp=2,Kp=3,$p=4,Qp=5,em=6,tm=7;var ed=300,ir=301,sr=302,Di=303,Cc=304,Pa=306,wn=1e3,ds=1001,ql=1002,Dn=1003,nm=1004;var Ia=1005;var en=1006,Rc=1007;var An=1008;var _i=1009,td=1010,nd=1011,lo=1012,Pc=1013,vs=1014,vi=1015,co=1016,Ic=1017,Dc=1018,ho=1020,id=35902,sd=35899,rd=1021,od=1022,Cn=1023,Wr=1026,uo=1027,Lc=1028,Uc=1029,ad=1030,Nc=1031;var Fc=1033,Da=33776,La=33777,Ua=33778,Na=33779,Oc=35840,Bc=35841,zc=35842,kc=35843,Vc=36196,Gc=37492,Hc=37496,Wc=37808,Xc=37809,qc=37810,Yc=37811,Zc=37812,jc=37813,Jc=37814,Kc=37815,$c=37816,Qc=37817,eh=37818,th=37819,nh=37820,ih=37821,sh=36492,rh=36494,oh=36495,ah=36283,lh=36284,ch=36285,hh=36286;var Qo=2300,Yl=2301,Gl=2302,Bu=2400,zu=2401,ku=2402;var im=3200,sm=3201;var uh=0,rm=1,$i="",mt="srgb",Xs="srgb-linear",ea="linear",Et="srgb";var Gs=7680;var Vu=519,om=512,am=513,lm=514,ld=515,cm=516,hm=517,um=518,dm=519,Zl=35044,Fa=35048;var cd="300 es",mi=2e3,ta=2001;var Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=1234567,jo=Math.PI/180,Xr=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function hd(n,e){return(n%e+e)%e}function gx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function xx(n,e,t){return n!==e?(t-n)/(e-n):0}function Jo(n,e,t){return(1-t)*n+t*e}function yx(n,e,t,i){return Jo(n,e,1-Math.exp(-t*i))}function _x(n,e=1){return e-Math.abs(hd(n,e*2)-e)}function vx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sx(n,e){return n+Math.random()*(e-n)}function wx(n){return n*(.5-Math.random())}function Tx(n){n!==void 0&&(Wf=n);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ex(n){return n*jo}function Ax(n){return n*Xr}function Cx(n){return(n&n-1)===0&&n!==0}function Rx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Px(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ix(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ce={DEG2RAD:jo,RAD2DEG:Xr,generateUUID:Ai,clamp:et,euclideanModulo:hd,mapLinear:gx,inverseLerp:xx,lerp:Jo,damp:yx,pingpong:_x,smoothstep:vx,smootherstep:Mx,randInt:bx,randFloat:Sx,randFloatSpread:wx,seededRandom:Tx,degToRad:Ex,radToDeg:Ax,isPowerOfTwo:Cx,ceilPowerOfTwo:Rx,floorPowerOfTwo:Px,setQuaternionFromProperEuler:Ix,normalize:Tt,denormalize:pi},he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let E=Math.sqrt(M),A=Math.atan2(E,m*_);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let y=a*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new v,Xf=new pt,tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],M=s[4],y=s[7],E=s[2],A=s[5],I=s[8];return r[0]=o*x+a*_+l*E,r[3]=o*g+a*M+l*A,r[6]=o*m+a*y+l*I,r[1]=c*x+h*_+u*E,r[4]=c*g+h*M+u*A,r[7]=c*m+h*y+u*I,r[2]=f*x+d*_+p*E,r[5]=f*g+d*M+p*A,r[8]=f*m+d*y+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uu=new tt;function ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){let n=qr("canvas");return n.style.display="block",n}var qf={};function Yr(n){n in qf||(qf[n]=!0,console.warn(n))}function pm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Yf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){let n={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xs]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),n}var xt=Dx();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=qr("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lx=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(du(s[o].image)):r.push(du(s[o]))}else r=du(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function du(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ux=0,fu=new v,yn=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ds,s=ds,r=en,o=An,a=Cn,l=_i,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ai(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=ed;yn.DEFAULT_ANISOTROPY=1;var Xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,E=(m+1)/2,A=(h+f)/4,I=(u+x)/4,R=(p+g)/4;return M>y&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=I/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=R/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=I/r,s=R/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new yn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},na=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),pl.subVectors(this.max,Bo),wr.subVectors(e.a,Bo),Tr.subVectors(e.b,Bo),Er.subVectors(e.c,Bo),os.subVectors(Tr,wr),as.subVectors(Er,Tr),Bs.subVectors(wr,Er);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Bs.z,Bs.y,os.z,0,-os.x,as.z,0,-as.x,Bs.z,0,-Bs.x,-os.y,os.x,0,-as.y,as.x,0,-Bs.y,Bs.x,0];return!pu(t,wr,Tr,Er,pl)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,wr,Tr,Er,pl))?!1:(ml.crossVectors(os,as),t=[ml.x,ml.y,ml.z],pu(t,wr,Tr,Er,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new v,new v,new v,new v,new v,new v,new v,new v],ui=new v,fl=new sn,wr=new v,Tr=new v,Er=new v,os=new v,as=new v,Bs=new v,Bo=new v,pl=new v,ml=new v,zs=new v;function pu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zs.fromArray(n,r);let a=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nx=new sn,zo=new v,mu=new v,Qn=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);let t=zo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(mu)),this.expandByPoint(zo.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wi=new v,gu=new v,gl=new v,ls=new v,xu=new v,xl=new v,yu=new v,ps=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gu.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(gu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(gl),a=ls.dot(this.direction),l=-ls.dot(gl),c=ls.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gu).addScaledVector(gl,f),d}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,s,r){xu.subVectors(t,e),xl.subVectors(i,e),yu.crossVectors(xu,xl);let o=this.direction.dot(yu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);let l=a*this.direction.dot(xl.crossVectors(ls,xl));if(l<0)return null;let c=a*this.direction.dot(xu.cross(ls));if(c<0||l+c>o)return null;let h=-a*ls.dot(yu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),cs.crossVectors(i,Gn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),cs.crossVectors(i,Gn)),cs.normalize(),yl.crossVectors(Gn,cs),s[0]=cs.x,s[4]=yl.x,s[8]=Gn.x,s[1]=cs.y,s[5]=yl.y,s[9]=Gn.y,s[2]=cs.z,s[6]=yl.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],M=i[7],y=i[11],E=i[15],A=s[0],I=s[4],R=s[8],S=s[12],b=s[1],D=s[5],U=s[9],B=s[13],W=s[2],H=s[6],k=s[10],ee=s[14],X=s[3],le=s[7],ge=s[11],be=s[15];return r[0]=o*A+a*b+l*W+c*X,r[4]=o*I+a*D+l*H+c*le,r[8]=o*R+a*U+l*k+c*ge,r[12]=o*S+a*B+l*ee+c*be,r[1]=h*A+u*b+f*W+d*X,r[5]=h*I+u*D+f*H+d*le,r[9]=h*R+u*U+f*k+d*ge,r[13]=h*S+u*B+f*ee+d*be,r[2]=p*A+x*b+g*W+m*X,r[6]=p*I+x*D+g*H+m*le,r[10]=p*R+x*U+g*k+m*ge,r[14]=p*S+x*B+g*ee+m*be,r[3]=_*A+M*b+y*W+E*X,r[7]=_*I+M*D+y*H+E*le,r[11]=_*R+M*U+y*k+E*ge,r[15]=_*S+M*B+y*ee+E*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,M=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,y=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,E=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,A=t*_+i*M+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=_*I,e[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*m-i*f*m)*I,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*I,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=M*I,e[5]=(h*g*r-p*f*r+p*s*d-t*g*d-h*s*m+t*f*m)*I,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=y*I,e[9]=(p*u*r-h*x*r-p*i*d+t*x*d+h*i*m-t*u*m)*I,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*I,e[12]=E*I,e[13]=(h*x*s-p*u*s+p*i*f-t*x*f-h*i*g+t*u*g)*I,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,M=l*h,y=l*u,E=i.x,A=i.y,I=i.z;return s[0]=(1-(x+m))*E,s[1]=(d+y)*E,s[2]=(p-M)*E,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+m))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(p+M)*I,s[9]=(g-_)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),a=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let c=1/r,h=1/o,u=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ta)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===mi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ta)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ar=new v,di=new ft,Fx=new v(0,0,0),Ox=new v(1,1,1),cs=new v,yl=new v,Gn=new v,jf=new ft,Jf=new pt,qt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bx=0,Kf=new v,Cr=new pt,Xi=new ft,_l=new v,ko=new v,zx=new v,kx=new pt,$f=new v(1,0,0),Qf=new v(0,1,0),ep=new v(0,0,1),tp={type:"added"},Vx={type:"removed"},Rr={type:"childadded",child:null},_u={type:"childremoved",child:null},zt=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new v,t=new qt,i=new pt,s=new v(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new tt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis($f,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($f,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_l.copy(e):_l.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ko,_l,this.up):Xi.lookAt(_l,ko,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new v(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new v,qi=new v,vu=new v,Yi=new v,Pr=new v,Ir=new v,np=new v,Mu=new v,bu=new v,Su=new v,wu=new Xt,Tu=new Xt,Eu=new Xt,In=class n{constructor(e=new v,t=new v,i=new v){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fi.subVectors(s,t),qi.subVectors(i,t),vu.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(qi),l=fi.dot(vu),c=qi.dot(qi),h=qi.dot(vu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return wu.setScalar(0),Tu.setScalar(0),Eu.setScalar(0),wu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wu,r.x),o.addScaledVector(Tu,r.y),o.addScaledVector(Eu,r.z),o}static isFrontFacing(e,t,i,s){return fi.subVectors(i,t),qi.subVectors(e,t),fi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Pr.subVectors(s,i),Ir.subVectors(r,i),Mu.subVectors(e,i);let l=Pr.dot(Mu),c=Ir.dot(Mu);if(l<=0&&c<=0)return t.copy(i);bu.subVectors(e,s);let h=Pr.dot(bu),u=Ir.dot(bu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Pr,o);Su.subVectors(e,r);let d=Pr.dot(Su),p=Ir.dot(Su);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ir,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return np.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(np,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=hd(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Au(o,r,e+1/3),this.g=Au(o,r,e),this.b=Au(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let i=mm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return xt.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=mt){xt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(vl);let i=Jo(hs.h,vl.h,t),s=Jo(hs.s,vl.s,t),r=Jo(hs.l,vl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ve;Ve.NAMES=mm;var Gx=0,xi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Hs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new v,Ml=new he,Hx=0,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}};var ia=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sa=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wx=0,$n=new ft,Cu=new zt,Dr=new v,Hn=new sn,Vo=new sn,hn=new v,lt=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?sa:ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Hn.min,Vo.min),Hn.expandByPoint(hn),hn.addVectors(Hn.max,Vo.max),Hn.expandByPoint(hn)):(Hn.expandByPoint(Vo.min),Hn.expandByPoint(Vo.max))}Hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),hn.add(Dr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new v,l[R]=new v;let c=new v,h=new v,u=new v,f=new he,d=new he,p=new he,x=new v,g=new v;function m(R,S,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),a[R].add(x),a[S].add(x),a[b].add(x),l[R].add(g),l[S].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){let b=_[R],D=b.start,U=b.count;for(let B=D,W=D+U;B<W;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new v,y=new v,E=new v,A=new v;function I(R){E.fromBufferAttribute(s,R),A.copy(E);let S=a[R];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(A,S);let D=y.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,D)}for(let R=0,S=_.length;R<S;++R){let b=_[R],D=b.start,U=b.count;for(let B=D,W=D+U;B<W;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ip=new ft,ks=new ps,bl=new Qn,sp=new v,Sl=new v,wl=new v,Tl=new v,Ru=new v,El=new v,rp=new v,Al=new v,fe=class extends zt{constructor(e=new lt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){El.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ru.fromBufferAttribute(u,e),o?El.addScaledVector(Ru,h):El.addScaledVector(Ru.sub(t),h))}t.add(El)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(bl.containsPoint(ks.origin)===!1&&(ks.intersectSphere(bl,sp)===null||ks.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),ks.copy(e.ray).applyMatrix4(ip),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,E=M;y<E;y+=3){let A=a.getX(y),I=a.getX(y+1),R=a.getX(y+2);s=Cl(this,m,e,i,c,h,u,A,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Cl(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,E=M;y<E;y+=3){let A=y,I=y+1,R=y+2;s=Cl(this,m,e,i,c,h,u,A,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,M=g+1,y=g+2;s=Cl(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Xx(n,e,t,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gi,a),l===null)return null;Al.copy(a),Al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Al);return c<t.near||c>t.far?null:{distance:c,point:Al.clone(),object:n}}function Cl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Sl),n.getVertexPosition(l,wl),n.getVertexPosition(c,Tl);let h=Xx(n,e,t,i,Sl,wl,Tl,rp);if(h){let u=new v;In.getBarycoord(rp,Sl,wl,Tl,u),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new v,materialIndex:0};In.getNormal(Sl,wl,Tl,f.normal),h.face=f,h.barycoord=u}return h}var We=class n extends lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function p(x,g,m,_,M,y,E,A,I,R,S){let b=y/I,D=E/R,U=y/2,B=E/2,W=A/2,H=I+1,k=R+1,ee=0,X=0,le=new v;for(let ge=0;ge<k;ge++){let be=ge*D-B;for(let De=0;De<H;De++){let $e=De*b-U;le[x]=$e*_,le[g]=be*M,le[m]=W,c.push(le.x,le.y,le.z),le[x]=0,le[g]=0,le[m]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(De/I),u.push(1-ge/R),ee+=1}}for(let ge=0;ge<R;ge++)for(let be=0;be<I;be++){let De=f+be+H*ge,$e=f+be+H*(ge+1),nt=f+(be+1)+H*(ge+1),Ze=f+(be+1)+H*ge;l.push(De,$e,Ze),l.push($e,nt,Ze),X+=6}a.addGroup(d,X,S),d+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=rr(n[t]);for(let s in i)e[s]=i[s]}return e}function qx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var gm={clone:rr,merge:vn},Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ra=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},us=new v,op=new he,ap=new he,gn=class extends ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,op,ap),t.subVectors(ap,op)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Ur=1,$l=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Lr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new gn(Lr,Ur,e,t);r.layers=this.layers,this.add(r);let o=new gn(Lr,Ur,e,t);o.layers=this.layers,this.add(o);let a=new gn(Lr,Ur,e,t);a.layers=this.layers,this.add(a);let l=new gn(Lr,Ur,e,t);l.layers=this.layers,this.add(l);let c=new gn(Lr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},oa=class extends yn{constructor(e=[],t=ir,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ql=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new We(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ji});r.uniforms.tEquirect.value=t;let o=new fe(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=en),new $l(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},dn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jx={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var qs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new v,$r=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Go=new v,Fr=new v,Or=new v,Br=new he,Ho=new he,xm=new ft,Rl=new v,Wo=new v,Pl=new v,lp=new he,Pu=new he,cp=new he,la=class extends zt{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new aa(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new $r(i,3,0,!1)),Nr.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Il(Rl.set(-.5,-.5,0),Or,o,Fr,s,r),Il(Wo.set(.5,-.5,0),Or,o,Fr,s,r),Il(Pl.set(.5,.5,0),Or,o,Fr,s,r),lp.set(0,0),Pu.set(1,0),cp.set(1,1);let a=e.ray.intersectTriangle(Rl,Wo,Pl,!1,Go);if(a===null&&(Il(Wo.set(-.5,.5,0),Or,o,Fr,s,r),Pu.set(0,1),a=e.ray.intersectTriangle(Rl,Pl,Wo,!1,Go),a===null))return;let l=e.ray.origin.distanceTo(Go);l<e.near||l>e.far||t.push({distance:l,point:Go.clone(),uv:In.getInterpolation(Go,Rl,Wo,Pl,lp,Pu,cp,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Il(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ho.x=r*Br.x-s*Br.y,Ho.y=s*Br.x+r*Br.y):Ho.copy(Br),n.copy(e),n.x+=Ho.x,n.y+=Ho.y,n.applyMatrix4(xm)}var ei=class extends yn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Dn,h=Dn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new ft,hp=new ft,Dl=[],up=new sn,Jx=new ft,Xo=new fe,qo=new Qn,ca=class extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),up.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),qo.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),hp.multiplyMatrices(i,zr),Xo.matrixWorld=hp,Xo.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){let l=Dl[o];l.instanceId=r,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,Lc,vi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Iu=new v,Kx=new v,$x=new tt,xn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Iu.subVectors(i,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Iu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$x.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new Qn,Qx=new he(.5,.5),Ll=new v,to=class{constructor(e=new xn,t=new xn,i=new xn,s=new xn,r=new xn,o=new xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],M=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,m-p,E-_).normalize(),s[1].setComponents(c+o,d+h,m+p,E+_).normalize(),s[2].setComponents(c+a,d+u,m+x,E+M).normalize(),s[3].setComponents(c-a,d-u,m-x,E-M).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,m-g,E-y).normalize();else if(s[4].setComponents(c-l,d-f,m-g,E-y).normalize(),t===mi)s[5].setComponents(c+l,d+f,m+g,E+y).normalize();else if(t===ta)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Qx.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ti=class extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ec=new v,tc=new v,dp=new ft,Yo=new ps,Ul=new Qn,Du=new v,fp=new v,Ln=class extends zt{constructor(e=new lt,t=new ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ec.fromBufferAttribute(t,s-1),tc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;dp.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),M=Nl(this,e,Yo,l,m,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Nl(this,e,Yo,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Nl(this,e,Yo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Nl(this,e,Yo,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(ec.fromBufferAttribute(a,s),tc.fromBufferAttribute(a,r),t.distanceSqToSegment(ec,tc,Du,fp)>i)return;Du.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Du);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var pp=new v,mp=new v,Ys=class extends Ln{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)pp.fromBufferAttribute(t,s),mp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pp.distanceTo(mp);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ha=class extends Ln{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Pi=class extends yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ua=class extends yn{constructor(e,t,i=vs,s,r,o,a=Dn,l=Dn,c,h=Wr,u=1){if(h!==Wr&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},da=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class n extends lt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,x=s+1,g=new v,m=new v;for(let _=0;_<=p;_++){let M=0,y=0,E=0,A=0;if(_<=i){let S=_/i,b=S*Math.PI/2;y=-h-e*Math.cos(b),E=e*Math.sin(b),A=-e*Math.cos(b),M=S*u}else if(_<=i+r){let S=(_-i)/r;y=-h+S*t,E=e,A=0,M=u+S*f}else{let S=(_-i-r)/i,b=S*Math.PI/2;y=h+e*Math.sin(b),E=e*Math.cos(b),A=e*Math.sin(b),M=u+f+S*u}let I=Math.max(0,Math.min(1,M/d)),R=0;_===0?R=.5/s:_===p&&(R=-.5/s);for(let S=0;S<=s;S++){let b=S/s,D=b*Math.PI*2,U=Math.sin(D),B=Math.cos(D);m.x=-E*B,m.y=y,m.z=E*U,a.push(m.x,m.y,m.z),g.set(-E*B,A,E*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+R,I)}if(_>0){let S=(_-1)*x;for(let b=0;b<s;b++){let D=S+b,U=S+b+1,B=_*x+b,W=_*x+b+1;o.push(D,U,B),o.push(U,W,B)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_n=class n extends lt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ct=class n extends lt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(d,2));function _(){let y=new v,E=new v,A=0,I=(t-e)/i;for(let R=0;R<=r;R++){let S=[],b=R/r,D=b*(t-e)+e;for(let U=0;U<=s;U++){let B=U/s,W=B*l+a,H=Math.sin(W),k=Math.cos(W);E.x=D*H,E.y=-b*i+g,E.z=D*k,u.push(E.x,E.y,E.z),y.set(H,I,k).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-b),S.push(p++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let b=x[S][R],D=x[S+1][R],U=x[S+1][R+1],B=x[S][R+1];(e>0||S!==0)&&(h.push(b,D,B),A+=3),(t>0||S!==r-1)&&(h.push(D,U,B),A+=3)}c.addGroup(m,A,0),m+=A}function M(y){let E=p,A=new he,I=new v,R=0,S=y===!0?e:t,b=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let D=p;for(let U=0;U<=s;U++){let W=U/s*l+a,H=Math.cos(W),k=Math.sin(W);I.x=S*k,I.y=g*b,I.z=S*H,u.push(I.x,I.y,I.z),f.push(0,b,0),A.x=H*.5+.5,A.y=k*.5*b+.5,d.push(A.x,A.y),p++}for(let U=0;U<s;U++){let B=E+U,W=D+U;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),R+=3}c.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class n extends Ct{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},no=class n extends lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new v,y=new v,E=new v;for(let A=0;A<t.length;A+=3)d(t[A+0],M),d(t[A+1],y),d(t[A+2],E),l(M,y,E,_)}function l(_,M,y,E){let A=E+1,I=[];for(let R=0;R<=A;R++){I[R]=[];let S=_.clone().lerp(y,R/A),b=M.clone().lerp(y,R/A),D=A-R;for(let U=0;U<=D;U++)U===0&&R===A?I[R][U]=S:I[R][U]=S.clone().lerp(b,U/D)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){let b=Math.floor(S/2);S%2===0?(f(I[R][b+1]),f(I[R+1][b]),f(I[R][b])):(f(I[R][b+1]),f(I[R+1][b+1]),f(I[R+1][b]))}}function c(_){let M=new v;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let _=new v;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(y,1-E)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],y=o[_+2],E=o[_+4],A=Math.max(M,y,E),I=Math.min(M,y,E);A>.9&&I<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let _=new v,M=new v,y=new v,E=new v,A=new he,I=new he,R=new he;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),I.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),E.copy(_).add(M).add(y).divideScalar(3);let D=g(E);x(A,b+0,_,D),x(I,b+2,M,D),x(R,b+4,y,D)}}function x(_,M,y,E){E<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new v,s=[],r=[],o=[],a=new v,l=new ft;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},io=class extends Wn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nc=class extends io{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Fl=new v,Lu=new fd,Uu=new fd,Nu=new fd,ic=class extends Wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new v){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fl.subVectors(s[0],s[1]).add(s[0]),c=Fl);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Lu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),Uu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),Nu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Uu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Nu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Lu.calc(l),Uu.calc(l),Nu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new v().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ey(n,e){let t=1-n;return t*t*e}function ty(n,e){return 2*(1-n)*n*e}function ny(n,e){return n*n*e}function Ko(n,e,t,i){return ey(n,e)+ty(n,t)+ny(n,i)}function iy(n,e){let t=1-n;return t*t*t*e}function sy(n,e){let t=1-n;return 3*t*t*n*e}function ry(n,e){return 3*(1-n)*n*n*e}function oy(n,e){return n*n*n*e}function $o(n,e,t,i,s){return iy(n,e)+sy(n,t)+ry(n,i)+oy(n,s)}var fa=class extends Wn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sc=class extends Wn{constructor(e=new v,t=new v,i=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y),$o(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends Wn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends Wn{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Wn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ko(e,s.x,r.x,o.x),Ko(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Wn{constructor(e=new v,t=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ko(e,s.x,r.x,o.x),Ko(e,s.y,r.y,o.y),Ko(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(gp(a,l.x,c.x,h.x,u.x),gp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Gu=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:ic,CubicBezierCurve:fa,CubicBezierCurve3:sc,EllipseCurve:io,LineCurve:pa,LineCurve3:rc,QuadraticBezierCurve:ma,QuadraticBezierCurve3:oc,SplineCurve:ga}),ac=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Gu[s.type]().fromJSON(s))}return this}},xa=class extends ac{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new pa(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ma(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new fa(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ga(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new io(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class extends xa{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new xa().fromJSON(s))}return this}};function ay(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ym(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=dy(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ya(r,o,t,a,l,c,0),o}function ym(n,e,t,i,s){let r;if(s===Sy(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=xp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=xp(o/i|0,n[o],n[o+1],r);return r&&so(r,r.next)&&(va(r),r=r.next),r}function js(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(so(t,t.next)||Wt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ya(n,e,t,i,s,r,o){if(!n)return;!o&&r&&xy(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?cy(n,i,s,r):ly(n)){e.push(l.i,n.i,c.i),va(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hy(js(n),e),ya(n,e,t,i,s,r,2)):o===2&&uy(n,e,t,i,s,r):ya(js(n),e,t,i,s,r,1);break}}}function ly(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Zo(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=Hu(d,p,e,t,i),_=Hu(x,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=m&&y&&y.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Zo(a,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Zo(a,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Zo(a,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Zo(a,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hy(n,e){let t=n;do{let i=t.prev,s=t.next.next;!so(i,s)&&vm(i,t,t.next,s)&&_a(i,s)&&_a(s,i)&&(e.push(i.i,t.i,s.i),va(t),va(t.next),t=n=s),t=t.next}while(t!==n);return js(t)}function uy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let l=Mm(o,a);o=js(o,o.next),l=js(l,l.next),ya(o,e,t,i,s,r,0),ya(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function dy(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ym(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(_y(c))}s.sort(fy);for(let r=0;r<s.length;r++)t=py(s[r],t);return t}function fy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function py(n,e){let t=my(n,e);if(!t)return e;let i=Mm(t,n);return js(i,i.next),js(t,t.next)}function my(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(so(n,t))return t;do{if(so(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_m(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);_a(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&gy(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function gy(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function xy(n,e,t,i){let s=n;do s.z===0&&(s.z=Hu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yy(s)}function yy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Hu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _y(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _m(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Zo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&_m(n,e,t,i,s,r,o,a)}function vy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!My(n,e)&&(_a(n,e)&&_a(e,n)&&by(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||so(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function so(n,e){return n.x===e.x&&n.y===e.y}function vm(n,e,t,i){let s=Bl(Wt(n,e,t)),r=Bl(Wt(n,e,i)),o=Bl(Wt(t,i,n)),a=Bl(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ol(n,t,e)||r===0&&Ol(n,i,e)||o===0&&Ol(t,n,i)||a===0&&Ol(t,e,i))}function Ol(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bl(n){return n>0?1:n<0?-1:0}function My(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _a(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function by(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mm(n,e){let t=Wu(n.i,n.x,n.y),i=Wu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function xp(n,e,t,i){let s=Wu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Xu=class{static triangulate(e,t,i=2){return ay(e,t,i)}},Ei=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yp(e),_p(i,e);let o=e.length;t.forEach(yp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,_p(i,t[l]);let a=Xu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _p(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Js=class n extends lt{constructor(e=new ji([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(s,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:wy,M,y=!1,E,A,I,R;m&&(M=m.getSpacedPoints(h),y=!0,f=!1,E=m.computeFrenetFrames(h,!1),A=new v,I=new v,R=new v),f||(g=0,d=0,p=0,x=0);let S=a.extractPoints(c),b=S.shape,D=S.holes;if(!Ei.isClockWise(b)){b=b.reverse();for(let re=0,ne=D.length;re<ne;re++){let te=D[re];Ei.isClockWise(te)&&(D[re]=te.reverse())}}function B(re){let te=10000000000000001e-36,ae=re[0];for(let ve=1;ve<=re.length;ve++){let me=ve%re.length,Me=re[me],Xe=Me.x-ae.x,He=Me.y-ae.y,P=Xe*Xe+He*He,w=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ae.x),Math.abs(ae.y)),G=te*w*w;if(P<=G){re.splice(me,1),ve--;continue}ae=Me}}B(b),D.forEach(B);let W=D.length,H=b;for(let re=0;re<W;re++){let ne=D[re];b=b.concat(ne)}function k(re,ne,te){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ne,te)}let ee=b.length;function X(re,ne,te){let ae,ve,me,Me=re.x-ne.x,Xe=re.y-ne.y,He=te.x-re.x,P=te.y-re.y,w=Me*Me+Xe*Xe,G=Me*P-Xe*He;if(Math.abs(G)>Number.EPSILON){let J=Math.sqrt(w),de=Math.sqrt(He*He+P*P),ie=ne.x-Xe/J,Le=ne.y+Me/J,Se=te.x-P/de,Ue=te.y+He/de,Fe=((Se-ie)*P-(Ue-Le)*He)/(Me*P-Xe*He);ae=ie+Me*Fe-re.x,ve=Le+Xe*Fe-re.y;let pe=ae*ae+ve*ve;if(pe<=2)return new he(ae,ve);me=Math.sqrt(pe/2)}else{let J=!1;Me>Number.EPSILON?He>Number.EPSILON&&(J=!0):Me<-Number.EPSILON?He<-Number.EPSILON&&(J=!0):Math.sign(Xe)===Math.sign(P)&&(J=!0),J?(ae=-Xe,ve=Me,me=Math.sqrt(w)):(ae=Me,ve=Xe,me=Math.sqrt(w/2))}return new he(ae/me,ve/me)}let le=[];for(let re=0,ne=H.length,te=ne-1,ae=re+1;re<ne;re++,te++,ae++)te===ne&&(te=0),ae===ne&&(ae=0),le[re]=X(H[re],H[te],H[ae]);let ge=[],be,De=le.concat();for(let re=0,ne=W;re<ne;re++){let te=D[re];be=[];for(let ae=0,ve=te.length,me=ve-1,Me=ae+1;ae<ve;ae++,me++,Me++)me===ve&&(me=0),Me===ve&&(Me=0),be[ae]=X(te[ae],te[me],te[Me]);ge.push(be),De=De.concat(be)}let $e;if(g===0)$e=Ei.triangulateShape(H,D);else{let re=[],ne=[];for(let te=0;te<g;te++){let ae=te/g,ve=d*Math.cos(ae*Math.PI/2),me=p*Math.sin(ae*Math.PI/2)+x;for(let Me=0,Xe=H.length;Me<Xe;Me++){let He=k(H[Me],le[Me],me);F(He.x,He.y,-ve),ae===0&&re.push(He)}for(let Me=0,Xe=W;Me<Xe;Me++){let He=D[Me];be=ge[Me];let P=[];for(let w=0,G=He.length;w<G;w++){let J=k(He[w],be[w],me);F(J.x,J.y,-ve),ae===0&&P.push(J)}ae===0&&ne.push(P)}}$e=Ei.triangulateShape(re,ne)}let nt=$e.length,Ze=p+x;for(let re=0;re<ee;re++){let ne=f?k(b[re],De[re],Ze):b[re];y?(I.copy(E.normals[0]).multiplyScalar(ne.x),A.copy(E.binormals[0]).multiplyScalar(ne.y),R.copy(M[0]).add(I).add(A),F(R.x,R.y,R.z)):F(ne.x,ne.y,0)}for(let re=1;re<=h;re++)for(let ne=0;ne<ee;ne++){let te=f?k(b[ne],De[ne],Ze):b[ne];y?(I.copy(E.normals[re]).multiplyScalar(te.x),A.copy(E.binormals[re]).multiplyScalar(te.y),R.copy(M[re]).add(I).add(A),F(R.x,R.y,R.z)):F(te.x,te.y,u/h*re)}for(let re=g-1;re>=0;re--){let ne=re/g,te=d*Math.cos(ne*Math.PI/2),ae=p*Math.sin(ne*Math.PI/2)+x;for(let ve=0,me=H.length;ve<me;ve++){let Me=k(H[ve],le[ve],ae);F(Me.x,Me.y,u+te)}for(let ve=0,me=D.length;ve<me;ve++){let Me=D[ve];be=ge[ve];for(let Xe=0,He=Me.length;Xe<He;Xe++){let P=k(Me[Xe],be[Xe],ae);y?F(P.x,P.y+M[h-1].y,M[h-1].x+te):F(P.x,P.y,u+te)}}}se(),q();function se(){let re=s.length/3;if(f){let ne=0,te=ee*ne;for(let ae=0;ae<nt;ae++){let ve=$e[ae];Y(ve[2]+te,ve[1]+te,ve[0]+te)}ne=h+g*2,te=ee*ne;for(let ae=0;ae<nt;ae++){let ve=$e[ae];Y(ve[0]+te,ve[1]+te,ve[2]+te)}}else{for(let ne=0;ne<nt;ne++){let te=$e[ne];Y(te[2],te[1],te[0])}for(let ne=0;ne<nt;ne++){let te=$e[ne];Y(te[0]+ee*h,te[1]+ee*h,te[2]+ee*h)}}i.addGroup(re,s.length/3-re,0)}function q(){let re=s.length/3,ne=0;ce(H,ne),ne+=H.length;for(let te=0,ae=D.length;te<ae;te++){let ve=D[te];ce(ve,ne),ne+=ve.length}i.addGroup(re,s.length/3-re,1)}function ce(re,ne){let te=re.length;for(;--te>=0;){let ae=te,ve=te-1;ve<0&&(ve=re.length-1);for(let me=0,Me=h+g*2;me<Me;me++){let Xe=ee*me,He=ee*(me+1),P=ne+ae+Xe,w=ne+ve+Xe,G=ne+ve+He,J=ne+ae+He;ye(P,w,G,J)}}}function F(re,ne,te){l.push(re),l.push(ne),l.push(te)}function Y(re,ne,te){Be(re),Be(ne),Be(te);let ae=s.length/3,ve=_.generateTopUV(i,s,ae-3,ae-2,ae-1);L(ve[0]),L(ve[1]),L(ve[2])}function ye(re,ne,te,ae){Be(re),Be(ne),Be(ae),Be(ne),Be(te),Be(ae);let ve=s.length/3,me=_.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);L(me[0]),L(me[1]),L(me[3]),L(me[1]),L(me[2]),L(me[3])}function Be(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function L(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ty(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gu[s.type]().fromJSON(s)),new n(i,e.options)}},wy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(f,1-p),new he(x,1-m)]:[new he(a,1-l),new he(h,1-u),new he(d,1-p),new he(g,1-m)]}};function Ty(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ni=class n extends no{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ma=class n extends lt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,f=new he,d=new v,p=new v,x=new v,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let M=i+_*h*s,y=Math.sin(M),E=Math.cos(M);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),f.x=_/t,f.y=A/(e.length-1),a.push(f.x,f.y);let I=l[3*A+0]*y,R=l[3*A+1],S=l[3*A+0]*E;c.push(I,R,S)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,E=y,A=y+e.length,I=y+e.length+1,R=y+1;r.push(E,A,R),r.push(I,R,A)}this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ii=class n extends no{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fn=class n extends lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let M=0;M<c;M++){let y=M*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,y=_+c*(m+1),E=_+1+c*(m+1),A=_+1+c*m;d.push(M,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gs=class n extends lt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new v,p=new he;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,M=_,y=_+i+1,E=_+i+2,A=_+1;a.push(M,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ba=class n extends lt{constructor(e=new ji([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(r,3)),this.setAttribute("uv",new Oe(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Ei.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Ei.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=Ei.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],M=_[0]+u,y=_[1]+u,E=_[2]+u;i.push(M,y,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ey(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Ey(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var si=class n extends lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,f=new v,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],M=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let M=h[m][_+1],y=h[m][_],E=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&d.push(M,y,A),(m!==i-1||l<Math.PI)&&d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ks=class n extends no{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Tn=class n extends lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new v,u=new v,f=new v;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,_=(s+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sa=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new v,r=new v;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),vp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),vp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function vp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var un=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xn=class extends xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},lc=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cc=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:r=e,a=2*t-i;break;case ku:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zu:o=e,l=2*i-t;break;case ku:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+_*o[c+E]+M*o[l+E]+y*o[u+E];return r}},uc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},dc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(t,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Yl:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ay(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Yl;var xs=class extends qn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Qo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};fc.prototype.ValueTypeName="color";var pc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};pc.prototype.ValueTypeName="number";var mc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)pt.slerpFlat(r,0,o,c-a,o,c,l);return r}},wa=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends qn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Qo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends qn{constructor(e,t,i,s){super(e,t,i,s)}};gc.prototype.ValueTypeName="vector";var Hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},xc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bm=new xc,ro=class{constructor(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=new WeakMap,yc=class extends ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=kr.get(o);u===void 0&&(u=[],kr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=qr("img");function l(){h(),t&&t(this);let u=kr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}kr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Hl.remove(`image:${e}`);let f=kr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ri=class extends ro{constructor(e){super(e)}load(e,t,i,s){let r=new yn,o=new yc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ta=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qs=class extends Ta{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fu=new ft,Mp=new v,bp=new v,qu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),Fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ea=class extends ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yu=class extends qu{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _c=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pd="\\[\\]\\.:\\/",Cy=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",Ry="[^"+pd.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",md),Iy=/(WCOD+)?/.source.replace("WCOD",Ry),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),Uy=new RegExp("^"+Py+Iy+Dy+Ly+"$"),Ny=["material","materials","bones","map"],Zu=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){let t=Uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ny.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Zu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pw=new Float32Array(1);var Sp=new ft,tr=class{constructor(e,t,i=0,s=1/0){this.ray=new ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sp),this}intersectObject(e,t=!0,i=[]){return ju(e,this,i,t),i.sort(wp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ju(e[s],this,i,t);return i.sort(wp),i}};function wp(n,e){return n.distance-e.distance}function ju(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ju(r[o],e,t,!0)}}var oo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Tp=new v,kl=new v,Vr=new v,Gr=new v,Ou=new v,Fy=new v,Oy=new v,Aa=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Tp.subVectors(e,this.start),kl.subVectors(this.end,this.start);let i=kl.dot(kl),r=kl.dot(Tp)/i;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Fy,i=Oy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Vr.subVectors(c,a),Gr.subVectors(h,l),Ou.subVectors(a,l);let u=Vr.dot(Vr),f=Gr.dot(Gr),d=Gr.dot(Ou);if(u<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=d/f,o=et(o,0,1);else{let p=Vr.dot(Ou);if(f<=s)o=0,r=et(-p/u,0,1);else{let x=Vr.dot(Gr),g=u*f-x*x;g!==0?r=et((x*d-p*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=et(-p/u,0,1)):o>1&&(o=1,r=et((x-p)/u,0,1))}}return t.copy(a).add(Vr.multiplyScalar(r)),i.copy(l).add(Gr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ca=class extends Ys{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ve(i),s=new Ve(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new lt;h.setAttribute("position",new Oe(l,3)),h.setAttribute("color",new Oe(c,3));let u=new ti({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Vl=new sn,ao=class extends Ys{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new lt;r.setIndex(new At(i,1)),r.setAttribute("position",new At(s,3)),super(r,new ti({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Vl.setFromObject(this.object),Vl.isEmpty())return;let e=Vl.min,t=Vl.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var nr=class extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gd(n,e,t,i){let s=By(i);switch(t){case rd:return n*e;case Lc:return n*e/s.components*s.byteLength;case Uc:return n*e/s.components*s.byteLength;case ad:return n*e*2/s.components*s.byteLength;case Nc:return n*e*2/s.components*s.byteLength;case od:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Fc:return n*e*4/s.components*s.byteLength;case Da:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Oc:case zc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sh:case rh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ah:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ch:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(n){switch(n){case _i:case td:return{byteLength:1,components:1};case lo:case nd:case co:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case vs:case Pc:case vi:return{byteLength:4,components:1};case id:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hy(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$y=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:qy,alphamap_pars_fragment:Yy,alphatest_fragment:Zy,alphatest_pars_fragment:jy,aomap_fragment:Jy,aomap_pars_fragment:Ky,batching_pars_vertex:$y,batching_vertex:Qy,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:h_,color_pars_vertex:u_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:x_,emissivemap_fragment:y_,emissivemap_pars_fragment:__,colorspace_fragment:v_,colorspace_pars_fragment:M_,envmap_fragment:b_,envmap_common_pars_fragment:S_,envmap_pars_fragment:w_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:F_,envmap_vertex:E_,fog_vertex:A_,fog_pars_vertex:C_,fog_fragment:R_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:U_,lights_pars_begin:N_,lights_toon_fragment:O_,lights_toon_pars_fragment:B_,lights_phong_fragment:z_,lights_phong_pars_fragment:k_,lights_physical_fragment:V_,lights_physical_pars_fragment:G_,lights_fragment_begin:H_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:j_,map_fragment:J_,map_pars_fragment:K_,map_particle_fragment:$_,map_particle_pars_fragment:Q_,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:xv,packing:yv,premultiplied_alpha_fragment:_v,project_vertex:vv,dithering_fragment:Mv,dithering_pars_fragment:bv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Av,shadowmask_pars_fragment:Cv,skinbase_vertex:Rv,skinning_pars_vertex:Pv,skinning_vertex:Iv,skinnormal_vertex:Dv,specularmap_fragment:Lv,specularmap_pars_fragment:Uv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Fv,transmission_fragment:Ov,transmission_pars_fragment:Bv,uv_pars_fragment:zv,uv_pars_vertex:kv,uv_vertex:Vv,worldpos_vertex:Gv,background_vert:Hv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:Zv,depth_vert:jv,depth_frag:Jv,distanceRGBA_vert:Kv,distanceRGBA_frag:$v,equirect_vert:Qv,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:sM,meshlambert_vert:rM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:hM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:xM,points_frag:yM,shadow_vert:_M,shadow_frag:vM,sprite_vert:MM,sprite_frag:bM},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Li={basic:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:vn([Ae.points,Ae.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:vn([Ae.common,Ae.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:vn([Ae.sprite,Ae.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:vn([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Li.physical={uniforms:vn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var dh={r:0,b:0,g:0},or=new qt,SM=new ft;function wM(n,e,t,i,s,r,o){let a=new Ve(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,E=p(M);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let E=p(y);E&&(E.isCubeTexture||E.mapping===Pa)?(h===void 0&&(h=new fe(new We(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:rr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),or.copy(y.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(or)),h.material.toneMapped=xt.getTransfer(E.colorSpace)!==Et,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new fe(new fn(2,2),new yi({name:"BackgroundMaterial",uniforms:rr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(E.colorSpace)!==Et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(dh,dd(n)),i.buffers.color.setClear(dh.r,dh.g,dh.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g,dispose:_}}function TM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,D,U,B,W){let H=!1,k=u(B,U,D);r!==k&&(r=k,c(r.object)),H=d(b,B,U,W),H&&p(b,B,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(b,D,U,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,U){let B=U.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let H=W[D.id];H===void 0&&(H={},W[D.id]=H);let k=H[B];return k===void 0&&(k=f(l()),H[B]=k),k}function f(b){let D=[],U=[],B=[];for(let W=0;W<t;W++)D[W]=0,U[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,D,U,B){let W=r.attributes,H=D.attributes,k=0,ee=U.getAttributes();for(let X in ee)if(ee[X].location>=0){let ge=W[X],be=H[X];if(be===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),ge===void 0||ge.attribute!==be||be&&ge.data!==be.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function p(b,D,U,B){let W={},H=D.attributes,k=0,ee=U.getAttributes();for(let X in ee)if(ee[X].location>=0){let ge=H[X];ge===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));let be={};be.attribute=ge,ge&&ge.data&&(be.data=ge.data),W[X]=be,k++}r.attributes=W,r.attributesNum=k,r.index=B}function x(){let b=r.newAttributes;for(let D=0,U=b.length;D<U;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){let U=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;U[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),W[b]!==D&&(n.vertexAttribDivisor(b,D),W[b]=D)}function _(){let b=r.newAttributes,D=r.enabledAttributes;for(let U=0,B=D.length;U<B;U++)D[U]!==b[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function M(b,D,U,B,W,H,k){k===!0?n.vertexAttribIPointer(b,D,U,W,H):n.vertexAttribPointer(b,D,U,B,W,H)}function y(b,D,U,B){x();let W=B.attributes,H=U.getAttributes(),k=D.defaultAttributeValues;for(let ee in H){let X=H[ee];if(X.location>=0){let le=W[ee];if(le===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){let ge=le.normalized,be=le.itemSize,De=e.get(le);if(De===void 0)continue;let $e=De.buffer,nt=De.type,Ze=De.bytesPerElement,se=nt===n.INT||nt===n.UNSIGNED_INT||le.gpuType===Pc;if(le.isInterleavedBufferAttribute){let q=le.data,ce=q.stride,F=le.offset;if(q.isInstancedInterleavedBuffer){for(let Y=0;Y<X.locationSize;Y++)m(X.location+Y,q.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<X.locationSize;Y++)g(X.location+Y);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Y=0;Y<X.locationSize;Y++)M(X.location+Y,be/X.locationSize,nt,ge,ce*Ze,(F+be/X.locationSize*Y)*Ze,se)}else{if(le.isInstancedBufferAttribute){for(let q=0;q<X.locationSize;q++)m(X.location+q,le.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let q=0;q<X.locationSize;q++)g(X.location+q);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let q=0;q<X.locationSize;q++)M(X.location+q,be/X.locationSize,nt,ge,be*Ze,be/X.locationSize*q*Ze,se)}}else if(k!==void 0){let ge=k[ee];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(X.location,ge);break;case 3:n.vertexAttrib3fv(X.location,ge);break;case 4:n.vertexAttrib4fv(X.location,ge);break;default:n.vertexAttrib1fv(X.location,ge)}}}}_()}function E(){R();for(let b in i){let D=i[b];for(let U in D){let B=D[U];for(let W in B)h(B[W].object),delete B[W];delete D[U]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let U in D){let B=D[U];for(let W in B)h(B[W].object),delete B[W];delete D[U]}delete i[b.id]}function I(b){for(let D in i){let U=i[D];if(U[b.id]===void 0)continue;let B=U[b.id];for(let W in B)h(B[W].object),delete B[W];delete U[b.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function EM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let R=I===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==_i&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==vi&&!R)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function CM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,M=_*4,y=m.clippingState||null;l.value=y,y=h(p,f,M,d);for(let E=0;E!==M;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function RM(n){let e=new WeakMap;function t(o,a){return a===Di?o.mapping=ir:a===Cc&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Di||a===Cc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ql(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var po=4,Sm=[.125,.215,.35,.446,.526,.582],cr=20,xd=new Ea,wm=new Ve,yd=null,_d=0,vd=0,Md=!1,lr=(1+Math.sqrt(5))/2,fo=1/lr,Tm=[new v(-lr,fo,0),new v(lr,fo,0),new v(-fo,0,lr),new v(fo,0,lr),new v(0,lr,-fo),new v(0,lr,fo),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],PM=new v,go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=PM}=r;yd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,_d,vd),this._renderer.xr.enabled=Md,e.scissorTest=!1,fh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:co,format:Cn,colorSpace:Xs,depthBuffer:!1},s=Em(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(r)),this._blurMaterial=DM(r,e,t)}return s}_compileMaterial(e){let t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,i,s,r){let l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(wm),u.toneMapping=Ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Jt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new fe(new We,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(wm),m=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let E=this._cubeSize;fh(s,y*E,M>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;fh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tm[(s-r-1)%Tm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cr-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):cr;g>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);let m=[],_=0;for(let I=0;I<cr;++I){let R=I/x,S=Math.exp(-R*R/2);m.push(S),I===0?_+=S:I<g&&(_+=2*S)}for(let I=0;I<m.length;I++)m[I]=m[I]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-i;let y=this._sizeLods[s],E=3*y*(s>M-po?s-M+po:0),A=4*(this._cubeSize-y);fh(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(u,xd)}};function IM(n){let e=[],t=[],i=[],s=n,r=n-po+1+Sm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-po?l=Sm[o-n+po-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),M=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let A=0;A<d;A++){let I=A%3*2/3-1,R=A>2?0:-1,S=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];_.set(S,x*p*A),M.set(f,g*p*A);let b=[A,A,A,A,A,A];y.set(b,m*p*A)}let E=new lt;E.setAttribute("position",new At(_,x)),E.setAttribute("uv",new At(M,g)),E.setAttribute("faceIndex",new At(y,m)),e.push(E),s>po&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Em(n,e,t){let i=new Ri(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function DM(n,e,t){let i=new Float32Array(cr),s=new v(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Am(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Cm(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Di||l===Cc,h=l===ir||l===sr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new go(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new go(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function UM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function NM(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let E=_[M+0],A=_[M+1],I=_[M+2];f.push(E,A,A,I,I,E)}}else if(p!==void 0){let _=p.array;x=p.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let E=M+0,A=M+1,I=M+2;f.push(E,A,A,I,I,E)}}else return;let g=new(ud(f)?sa:ia)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function FM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function OM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function BM(n,e,t){let i=new WeakMap,s=new Xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*u),I=new na(A,y,E,u);I.type=vi,I.needsUpdate=!0;let R=M*4;for(let b=0;b<u;b++){let D=g[b],U=m[b],B=_[b],W=y*E*4*b;for(let H=0;H<D.count;H++){let k=H*R;d===!0&&(s.fromBufferAttribute(D,H),A[W+k+0]=s.x,A[W+k+1]=s.y,A[W+k+2]=s.z,A[W+k+3]=0),p===!0&&(s.fromBufferAttribute(U,H),A[W+k+4]=s.x,A[W+k+5]=s.y,A[W+k+6]=s.z,A[W+k+7]=0),x===!0&&(s.fromBufferAttribute(B,H),A[W+k+8]=s.x,A[W+k+9]=s.y,A[W+k+10]=s.z,A[W+k+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new he(y,E)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function zM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ym=new yn,Rm=new ua(1,1),Zm=new na,jm=new Kl,Jm=new oa,Pm=[],Im=[],Dm=new Float32Array(16),Lm=new Float32Array(9),Um=new Float32Array(4);function xo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Pm[s];if(r===void 0&&(r=new Float32Array(s),Pm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gh(n,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function GM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function HM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function WM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Um.set(i),n.uniformMatrix2fv(this.addr,!1,Um),on(t,i)}}function XM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Lm.set(i),n.uniformMatrix3fv(this.addr,!1,Lm),on(t,i)}}function qM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Dm.set(i),n.uniformMatrix4fv(this.addr,!1,Dm),on(t,i)}}function YM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function jM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function JM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function KM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function QM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function tb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rm.compareFunction=ld,r=Rm):r=Ym,t.setTexture2D(e||r,s)}function nb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jm,s)}function ib(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jm,s)}function sb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zm,s)}function rb(n){switch(n){case 5126:return kM;case 35664:return VM;case 35665:return GM;case 35666:return HM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return ZM;case 35668:case 35672:return jM;case 35669:case 35673:return JM;case 5125:return KM;case 36294:return $M;case 36295:return QM;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}function ob(n,e){n.uniform1fv(this.addr,e)}function ab(n,e){let t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function lb(n,e){let t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function cb(n,e){let t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function hb(n,e){let t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ub(n,e){let t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function db(n,e){let t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fb(n,e){n.uniform1iv(this.addr,e)}function pb(n,e){n.uniform2iv(this.addr,e)}function mb(n,e){n.uniform3iv(this.addr,e)}function gb(n,e){n.uniform4iv(this.addr,e)}function xb(n,e){n.uniform1uiv(this.addr,e)}function yb(n,e){n.uniform2uiv(this.addr,e)}function _b(n,e){n.uniform3uiv(this.addr,e)}function vb(n,e){n.uniform4uiv(this.addr,e)}function Mb(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ym,r[o])}function bb(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jm,r[o])}function Sb(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jm,r[o])}function wb(n,e,t){let i=this.cache,s=e.length,r=gh(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zm,r[o])}function Tb(n){switch(n){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return hb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return yb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return wb}}var Sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}},wd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}},Td=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bd=/(\w+)(\])?(\[|\.)?/g;function Nm(n,e){n.seq.push(e),n.map[e.id]=e}function Eb(n,e,t){let i=n.name,s=i.length;for(bd.lastIndex=0;;){let r=bd.exec(i),o=bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nm(t,c===void 0?new Sd(a,n,e):new wd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Td(a),Nm(t,u)),t=u}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Eb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Fm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ab=37297,Cb=0;function Rb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Om=new tt;function Pb(n){xt._getMatrix(Om,xt.workingColorSpace,n);let e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rb(n.getShaderSource(e),a)}else return r}function Ib(n,e){let t=Pb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Db(n,e){let t;switch(e){case jp:t="Linear";break;case Jp:t="Reinhard";break;case Kp:t="Cineon";break;case $p:t="ACESFilmic";break;case em:t="AgX";break;case tm:t="Neutral";break;case Qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ph=new v;function Lb(){xt.getLuminanceCoefficients(ph);let n=ph.x.toFixed(4),e=ph.y.toFixed(4),t=ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function Nb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oa(n){return n!==""}function zm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(Ob,zb)}var Bb=new Map;function zb(n,e){let t=ct[e];if(t===void 0){let i=Bb.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}var kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(n){return n.replace(kb,Vb)}function Vb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function qb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Yb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Gb(t),c=Hb(t),h=Wb(t),u=Xb(t),f=qb(t),d=Ub(t),p=Nb(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Oa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Oa).join(`
`),m.length>0&&(m+=`
`)):(g=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),m=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ki?Db("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),Lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),o=Ed(o),o=zm(o,t),o=km(o,t),a=Ed(a),a=zm(a,t),a=km(a,t),o=Vm(o),a=Vm(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+o,y=_+m+a,E=Fm(s,s.VERTEX_SHADER,M),A=Fm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(A)||"",H=U.trim(),k=B.trim(),ee=W.trim(),X=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,A);else{let ge=Bm(s,E,"vertex"),be=Bm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ge+`
`+be)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||ee==="")&&(le=!1);le&&(D.diagnostics={runnable:X,programLog:H,vertexShader:{log:k,prefix:g},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(E),s.deleteShader(A),R=new mo(s,x),S=Fb(s,x)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Ab)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var Zb=0,Ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Cd(e),t.set(e,i)),i}},Cd=class{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}};function jb(n,e,t,i,s,r,o){let a=new jr,l=new Ad,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,D,U,B){let W=U.fog,H=B.geometry,k=S.isMeshStandardMaterial?U.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),X=ee&&ee.mapping===Pa?ee.image.height:null,le=p[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,be=ge!==void 0?ge.length:0,De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let $e,nt,Ze,se;if(le){let Pe=Li[le];$e=Pe.vertexShader,nt=Pe.fragmentShader}else $e=S.vertexShader,nt=S.fragmentShader,l.update(S),Ze=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);let q=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),F=B.isInstancedMesh===!0,Y=B.isBatchedMesh===!0,ye=!!S.map,Be=!!S.matcap,L=!!ee,re=!!S.aoMap,ne=!!S.lightMap,te=!!S.bumpMap,ae=!!S.normalMap,ve=!!S.displacementMap,me=!!S.emissiveMap,Me=!!S.metalnessMap,Xe=!!S.roughnessMap,He=S.anisotropy>0,P=S.clearcoat>0,w=S.dispersion>0,G=S.iridescence>0,J=S.sheen>0,de=S.transmission>0,ie=He&&!!S.anisotropyMap,Le=P&&!!S.clearcoatMap,Se=P&&!!S.clearcoatNormalMap,Ue=P&&!!S.clearcoatRoughnessMap,Fe=G&&!!S.iridescenceMap,pe=G&&!!S.iridescenceThicknessMap,Te=J&&!!S.sheenColorMap,Ye=J&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ee=!!S.specularColorMap,it=!!S.specularIntensityMap,C=de&&!!S.transmissionMap,N=de&&!!S.thicknessMap,Q=!!S.gradientMap,ue=!!S.alphaMap,Z=S.alphaTest>0,j=!!S.alphaHash,xe=!!S.extensions,we=Ki;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(we=n.toneMapping);let Ie={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:nt,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Y,batchingColor:Y&&B._colorsTexture!==null,instancing:F,instancingColor:F&&B.instanceColor!==null,instancingMorph:F&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:Be,envMap:L,envMapMode:L&&ee.mapping,envMapCubeUVHeight:X,aoMap:re,lightMap:ne,bumpMap:te,normalMap:ae,displacementMap:f&&ve,emissiveMap:me,normalMapObjectSpace:ae&&S.normalMapType===rm,normalMapTangentSpace:ae&&S.normalMapType===uh,metalnessMap:Me,roughnessMap:Xe,anisotropy:He,anisotropyMap:ie,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ue,dispersion:w,iridescence:G,iridescenceMap:Fe,iridescenceThicknessMap:pe,sheen:J,sheenColorMap:Te,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:Ee,specularIntensityMap:it,transmission:de,transmissionMap:C,thicknessMap:N,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:Z,alphaHash:j,combine:S.combine,mapUv:ye&&x(S.map.channel),aoMapUv:re&&x(S.aoMap.channel),lightMapUv:ne&&x(S.lightMap.channel),bumpMapUv:te&&x(S.bumpMap.channel),normalMapUv:ae&&x(S.normalMap.channel),displacementMapUv:ve&&x(S.displacementMap.channel),emissiveMapUv:me&&x(S.emissiveMap.channel),metalnessMapUv:Me&&x(S.metalnessMap.channel),roughnessMapUv:Xe&&x(S.roughnessMap.channel),anisotropyMapUv:ie&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(S.sheenRoughnessMap.channel),specularMapUv:ke&&x(S.specularMap.channel),specularColorMapUv:Ee&&x(S.specularColorMap.channel),specularIntensityMapUv:it&&x(S.specularIntensityMap.channel),transmissionMapUv:C&&x(S.transmissionMap.channel),thicknessMapUv:N&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ae||He),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(ye||ue),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||Y)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(b,S),M(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=p[S.type],D;if(b){let U=Li[b];D=gm.clone(U.uniforms)}else D=S.uniforms;return D}function E(S,b){let D;for(let U=0,B=h.length;U<B;U++){let W=h[U];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Yb(n,b,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:R}}function Jb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Kb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Kb),i.length>1&&i.sort(f||Hm),s.length>1&&s.sort(f||Hm)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $b(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wm,n.set(i,[o])):s>=r.length?(o=new Wm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new Ve};break;case"SpotLight":t={position:new v,direction:new v,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new v,halfWidth:new v,halfHeight:new v};break}return n[e.id]=t,t}}}function eS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tS=0;function nS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iS(n){let e=new Qb,t=eS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new v);let s=new v,r=new ft,o=new ft;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,M=0,y=0,E=0,A=0,I=0;c.sort(nS);for(let S=0,b=c.length;S<b;S++){let D=c[S],U=D.color,B=D.intensity,W=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*B,u+=U.g*B,f+=U.b*B;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],B);I++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=D.shadow.matrix,_++}i.directional[d]=k,d++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(U).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[x]=k;let ee=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,ee.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=ee.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=H,y++}x++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(U).multiplyScalar(B),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=k,g++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let ee=D.shadow,X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=k,p++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(B),k.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==_||R.numPointShadows!==M||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,R.directionalLength=d,R.pointLength=p,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=_,R.numPointShadows=M,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=I,i.version=tS++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let M=c[m];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Xm(n){let e=new iS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xm(n),e.set(s,[a])):r>=o.length?(a=new Xm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aS(n,e,t){let i=new to,s=new he,r=new he,o=new Xt,a=new lc({depthPacking:sm}),l=new cc,c={},h=t.maxTextureSize,u={[gi]:En,[En]:gi,[tn]:tn},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:rS,fragmentShader:oS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let m=this.type;this.render=function(A,I,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==Ii&&this.type===Ii,W=m===Ii&&this.type!==Ii;for(let H=0,k=A.length;H<k;H++){let ee=A[H],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||B===!0||W===!0){let be=this.type!==Ii?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new Ri(s.x,s.y,be),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ge=X.getViewportCount();for(let be=0;be<ge;be++){let De=X.getViewport(be);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),U.viewport(o),X.updateMatrices(ee,be),i=X.getFrustum(),y(I,R,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===Ii&&_(X,R),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,b,D)};function _(A,I){let R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,R,d,x,null)}function M(A,I,R,S){let b=null,D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=b.uuid,B=I.uuid,W=c[U];W===void 0&&(W={},c[U]=W);let H=W[B];H===void 0&&(H=b.clone(),W[B]=H,I.addEventListener("dispose",E)),b=H}if(b.visible=I.visible,b.wireframe=I.wireframe,S===Ii?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=n.properties.get(b);U.light=R}return b}function y(A,I,R,S,b){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let B=e.update(A),W=A.material;if(Array.isArray(W)){let H=B.groups;for(let k=0,ee=H.length;k<ee;k++){let X=H[k],le=W[X.materialIndex];if(le&&le.visible){let ge=M(A,le,S,b);A.onBeforeShadow(n,A,I,R,B,ge,X),n.renderBufferDirect(R,null,B,ge,A,X),A.onAfterShadow(n,A,I,R,B,ge,X)}}}else if(W.visible){let H=M(A,W,S,b);A.onBeforeShadow(n,A,I,R,B,H,null),n.renderBufferDirect(R,null,B,H,A,null),A.onAfterShadow(n,A,I,R,B,H,null)}}let U=A.children;for(let B=0,W=U.length;B<W;B++)y(U[B],I,R,S,b)}function E(A){A.target.removeEventListener("dispose",E);for(let R in c){let S=c[R],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var lS={[vc]:Mc,[bc]:Tc,[Sc]:Ec,[Ws]:wc,[Mc]:vc,[Tc]:bc,[Ec]:Sc,[wc]:Ws};function cS(n,e){function t(){let C=!1,N=new Xt,Q=null,ue=new Xt(0,0,0,0);return{setMask:function(Z){Q!==Z&&!C&&(n.colorMask(Z,Z,Z,Z),Q=Z)},setLocked:function(Z){C=Z},setClear:function(Z,j,xe,we,Ie){Ie===!0&&(Z*=we,j*=we,xe*=we),N.set(Z,j,xe,we),ue.equals(N)===!1&&(n.clearColor(Z,j,xe,we),ue.copy(N))},reset:function(){C=!1,Q=null,ue.set(-1,0,0,0)}}}function i(){let C=!1,N=!1,Q=null,ue=null,Z=null;return{setReversed:function(j){if(N!==j){let xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),N=j;let we=Z;Z=null,this.setClear(we)}},getReversed:function(){return N},setTest:function(j){j?q(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(j){Q!==j&&!C&&(n.depthMask(j),Q=j)},setFunc:function(j){if(N&&(j=lS[j]),ue!==j){switch(j){case vc:n.depthFunc(n.NEVER);break;case Mc:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Sc:n.depthFunc(n.EQUAL);break;case wc:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=j}},setLocked:function(j){C=j},setClear:function(j){Z!==j&&(N&&(j=1-j),n.clearDepth(j),Z=j)},reset:function(){C=!1,Q=null,ue=null,Z=null,N=!1}}}function s(){let C=!1,N=null,Q=null,ue=null,Z=null,j=null,xe=null,we=null,Ie=null;return{setTest:function(Pe){C||(Pe?q(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Pe){N!==Pe&&!C&&(n.stencilMask(Pe),N=Pe)},setFunc:function(Pe,wt,Vt){(Q!==Pe||ue!==wt||Z!==Vt)&&(n.stencilFunc(Pe,wt,Vt),Q=Pe,ue=wt,Z=Vt)},setOp:function(Pe,wt,Vt){(j!==Pe||xe!==wt||we!==Vt)&&(n.stencilOp(Pe,wt,Vt),j=Pe,xe=wt,we=Vt)},setLocked:function(Pe){C=Pe},setClear:function(Pe){Ie!==Pe&&(n.clearStencil(Pe),Ie=Pe)},reset:function(){C=!1,N=null,Q=null,ue=null,Z=null,j=null,xe=null,we=null,Ie=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,E=null,A=null,I=new Ve(0,0,0),R=0,S=!1,b=null,D=null,U=null,B=null,W=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ee=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ee>=2);let le=null,ge={},be=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),$e=new Xt().fromArray(be),nt=new Xt().fromArray(De);function Ze(C,N,Q,ue){let Z=new Uint8Array(4),j=n.createTexture();n.bindTexture(C,j),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<Q;xe++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(N,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(N+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return j}let se={};se[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(n.DEPTH_TEST),o.setFunc(Ws),te(!1),ae(Ju),q(n.CULL_FACE),re(Ji);function q(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function ce(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function F(C,N){return u[C]!==N?(n.bindFramebuffer(C,N),u[C]=N,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=N),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=N),!0):!1}function Y(C,N){let Q=d,ue=!1;if(C){Q=f.get(N),Q===void 0&&(Q=[],f.set(N,Q));let Z=C.textures;if(Q.length!==Z.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let j=0,xe=Z.length;j<xe;j++)Q[j]=n.COLOR_ATTACHMENT0+j;Q.length=Z.length,ue=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Q)}function ye(C){return p!==C?(n.useProgram(C),p=C,!0):!1}let Be={[fs]:n.FUNC_ADD,[Pp]:n.FUNC_SUBTRACT,[Ip]:n.FUNC_REVERSE_SUBTRACT};Be[Dp]=n.MIN,Be[Lp]=n.MAX;let L={[Up]:n.ZERO,[Np]:n.ONE,[Fp]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[Gp]:n.SRC_ALPHA_SATURATE,[kp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[Op]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[Vp]:n.ONE_MINUS_DST_COLOR,[zp]:n.ONE_MINUS_DST_ALPHA,[Hp]:n.CONSTANT_COLOR,[Wp]:n.ONE_MINUS_CONSTANT_COLOR,[Xp]:n.CONSTANT_ALPHA,[qp]:n.ONE_MINUS_CONSTANT_ALPHA};function re(C,N,Q,ue,Z,j,xe,we,Ie,Pe){if(C===Ji){x===!0&&(ce(n.BLEND),x=!1);return}if(x===!1&&(q(n.BLEND),x=!0),C!==Rp){if(C!==g||Pe!==S){if((m!==fs||y!==fs)&&(n.blendEquation(n.FUNC_ADD),m=fs,y=fs),Pe)switch(C){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFunc(n.ONE,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $u:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,M=null,E=null,A=null,I.set(0,0,0),R=0,g=C,S=Pe}return}Z=Z||N,j=j||Q,xe=xe||ue,(N!==m||Z!==y)&&(n.blendEquationSeparate(Be[N],Be[Z]),m=N,y=Z),(Q!==_||ue!==M||j!==E||xe!==A)&&(n.blendFuncSeparate(L[Q],L[ue],L[j],L[xe]),_=Q,M=ue,E=j,A=xe),(we.equals(I)===!1||Ie!==R)&&(n.blendColor(we.r,we.g,we.b,Ie),I.copy(we),R=Ie),g=C,S=!1}function ne(C,N){C.side===tn?ce(n.CULL_FACE):q(n.CULL_FACE);let Q=C.side===En;N&&(Q=!Q),te(Q),C.blending===Hs&&C.transparent===!1?re(Ji):re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ue=C.stencilWrite;a.setTest(ue),ue&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),me(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function ae(C){C!==Ep?(q(n.CULL_FACE),C!==D&&(C===Ju?n.cullFace(n.BACK):C===Ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),D=C}function ve(C){C!==U&&(k&&n.lineWidth(C),U=C)}function me(C,N,Q){C?(q(n.POLYGON_OFFSET_FILL),(B!==N||W!==Q)&&(n.polygonOffset(N,Q),B=N,W=Q)):ce(n.POLYGON_OFFSET_FILL)}function Me(C){C?q(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Xe(C){C===void 0&&(C=n.TEXTURE0+H-1),le!==C&&(n.activeTexture(C),le=C)}function He(C,N,Q){Q===void 0&&(le===null?Q=n.TEXTURE0+H-1:Q=le);let ue=ge[Q];ue===void 0&&(ue={type:void 0,texture:void 0},ge[Q]=ue),(ue.type!==C||ue.texture!==N)&&(le!==Q&&(n.activeTexture(Q),le=Q),n.bindTexture(C,N||se[C]),ue.type=C,ue.texture=N)}function P(){let C=ge[le];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{n.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{n.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{n.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(C){$e.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),$e.copy(C))}function Ye(C){nt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),nt.copy(C))}function ke(C,N){let Q=c.get(N);Q===void 0&&(Q=new WeakMap,c.set(N,Q));let ue=Q.get(C);ue===void 0&&(ue=n.getUniformBlockIndex(N,C.name),Q.set(C,ue))}function Ee(C,N){let ue=c.get(N).get(C);l.get(N)!==ue&&(n.uniformBlockBinding(N,ue,C.__bindingPointIndex),l.set(N,ue))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},le=null,ge={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,E=null,A=null,I=new Ve(0,0,0),R=0,S=!1,b=null,D=null,U=null,B=null,W=null,$e.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ce,bindFramebuffer:F,drawBuffers:Y,useProgram:ye,setBlending:re,setMaterial:ne,setFlipSided:te,setCullFace:ae,setLineWidth:ve,setPolygonOffset:me,setScissorTest:Me,activeTexture:Xe,bindTexture:He,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Fe,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:Se,texStorage3D:Ue,texSubImage2D:J,texSubImage3D:de,compressedTexSubImage2D:ie,compressedTexSubImage3D:Le,scissor:Te,viewport:Ye,reset:it}}function hS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return d?new OffscreenCanvas(P,w):qr("canvas")}function x(P,w,G){let J=1,de=He(P);if((de.width>G||de.height>G)&&(J=G/Math.max(de.width,de.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(J*de.width),Le=Math.floor(J*de.height);u===void 0&&(u=p(ie,Le));let Se=w?p(ie,Le):u;return Se.width=ie,Se.height=Le,Se.getContext("2d").drawImage(P,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+Le+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,w,G,J,de=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=w;if(w===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),w===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),G===n.UNSIGNED_INT&&(ie=n.RGB32UI),G===n.BYTE&&(ie=n.RGB8I),G===n.SHORT&&(ie=n.RGB16I),G===n.INT&&(ie=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),G===n.UNSIGNED_INT&&(ie=n.RGBA32UI),G===n.BYTE&&(ie=n.RGBA8I),G===n.SHORT&&(ie=n.RGBA16I),G===n.INT&&(ie=n.RGBA32I)),w===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),w===n.RGBA){let Le=de?ea:xt.getTransfer(J);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=Le===Et?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(P,w){let G;return P?w===null||w===vs||w===ho?G=n.DEPTH24_STENCIL8:w===vi?G=n.DEPTH32F_STENCIL8:w===lo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===ho?G=n.DEPTH_COMPONENT24:w===vi?G=n.DEPTH_COMPONENT32F:w===lo&&(G=n.DEPTH_COMPONENT16),G}function E(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){let w=P.target;w.removeEventListener("dispose",A),R(w),w.isVideoTexture&&h.delete(w)}function I(P){let w=P.target;w.removeEventListener("dispose",I),b(w)}function R(P){let w=i.get(P);if(w.__webglInit===void 0)return;let G=P.source,J=f.get(G);if(J){let de=J[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&S(P),Object.keys(J).length===0&&f.delete(G)}i.remove(P)}function S(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let G=P.source,J=f.get(G);delete J[w.__cacheKey],o.memory.textures--}function b(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let de=0;de<w.__webglFramebuffer[J].length;de++)n.deleteFramebuffer(w.__webglFramebuffer[J][de]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=P.textures;for(let J=0,de=G.length;J<de;J++){let ie=i.get(G[J]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(P)}let D=0;function U(){D=0}function B(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function W(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function H(P,w){let G=i.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function k(P,w){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){se(G,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function ee(P,w){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){se(G,P,w);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function X(P,w){let G=i.get(P);if(P.version>0&&G.__version!==P.version){q(G,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}let le={[wn]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[ql]:n.MIRRORED_REPEAT},ge={[Dn]:n.NEAREST,[nm]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Rc]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},be={[om]:n.NEVER,[dm]:n.ALWAYS,[am]:n.LESS,[ld]:n.LEQUAL,[lm]:n.EQUAL,[um]:n.GEQUAL,[cm]:n.GREATER,[hm]:n.NOTEQUAL};function De(P,w){if(w.type===vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===Rc||w.magFilter===Ia||w.magFilter===An||w.minFilter===en||w.minFilter===Rc||w.minFilter===Ia||w.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,le[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,le[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,le[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ge[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==Ia&&w.minFilter!==An||w.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function $e(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));let J=w.source,de=f.get(J);de===void 0&&(de={},f.set(J,de));let ie=W(w);if(ie!==P.__cacheKey){de[ie]===void 0&&(de[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),de[ie].usedTimes++;let Le=de[P.__cacheKey];Le!==void 0&&(de[P.__cacheKey].usedTimes--,Le.usedTimes===0&&S(w)),P.__cacheKey=ie,P.__webglTexture=de[ie].texture}return G}function nt(P,w,G){return Math.floor(Math.floor(P/G)/w)}function Ze(P,w,G,J){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,G,J,w.data);else{ie.sort((pe,Te)=>pe.start-Te.start);let Le=0;for(let pe=1;pe<ie.length;pe++){let Te=ie[Le],Ye=ie[pe],ke=Te.start+Te.count,Ee=nt(Ye.start,w.width,4),it=nt(Te.start,w.width,4);Ye.start<=ke+1&&Ee===it&&nt(Ye.start+Ye.count-1,w.width,4)===Ee?Te.count=Math.max(Te.count,Ye.start+Ye.count-Te.start):(++Le,ie[Le]=Ye)}ie.length=Le+1;let Se=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let pe=0,Te=ie.length;pe<Te;pe++){let Ye=ie[pe],ke=Math.floor(Ye.start/4),Ee=Math.ceil(Ye.count/4),it=ke%w.width,C=Math.floor(ke/w.width),N=Ee,Q=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,it,C,N,Q,G,J,w.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function se(P,w,G){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);let de=$e(P,w),ie=w.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+G);let Le=i.get(ie);if(ie.version!==Le.__version||de===!0){t.activeTexture(n.TEXTURE0+G);let Se=xt.getPrimaries(xt.workingColorSpace),Ue=w.colorSpace===$i?null:xt.getPrimaries(w.colorSpace),Fe=w.colorSpace===$i||Se===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let pe=x(w.image,!1,s.maxTextureSize);pe=Xe(w,pe);let Te=r.convert(w.format,w.colorSpace),Ye=r.convert(w.type),ke=M(w.internalFormat,Te,Ye,w.colorSpace,w.isVideoTexture);De(J,w);let Ee,it=w.mipmaps,C=w.isVideoTexture!==!0,N=Le.__version===void 0||de===!0,Q=ie.dataReady,ue=E(w,pe);if(w.isDepthTexture)ke=y(w.format===uo,w.type),N&&(C?t.texStorage2D(n.TEXTURE_2D,1,ke,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ke,pe.width,pe.height,0,Te,Ye,null));else if(w.isDataTexture)if(it.length>0){C&&N&&t.texStorage2D(n.TEXTURE_2D,ue,ke,it[0].width,it[0].height);for(let Z=0,j=it.length;Z<j;Z++)Ee=it[Z],C?Q&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Te,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Te,Ye,Ee.data);w.generateMipmaps=!1}else C?(N&&t.texStorage2D(n.TEXTURE_2D,ue,ke,pe.width,pe.height),Q&&Ze(w,pe,Te,Ye)):t.texImage2D(n.TEXTURE_2D,0,ke,pe.width,pe.height,0,Te,Ye,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){C&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ke,it[0].width,it[0].height,pe.depth);for(let Z=0,j=it.length;Z<j;Z++)if(Ee=it[Z],w.format!==Cn)if(Te!==null)if(C){if(Q)if(w.layerUpdates.size>0){let xe=gd(Ee.width,Ee.height,w.format,w.type);for(let we of w.layerUpdates){let Ie=Ee.data.subarray(we*xe/Ee.data.BYTES_PER_ELEMENT,(we+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,we,Ee.width,Ee.height,1,Te,Ie)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,pe.depth,Te,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?Q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,pe.depth,Te,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ke,Ee.width,Ee.height,pe.depth,0,Te,Ye,Ee.data)}else{C&&N&&t.texStorage2D(n.TEXTURE_2D,ue,ke,it[0].width,it[0].height);for(let Z=0,j=it.length;Z<j;Z++)Ee=it[Z],w.format!==Cn?Te!==null?C?Q&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?Q&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Te,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,Z,ke,Ee.width,Ee.height,0,Te,Ye,Ee.data)}else if(w.isDataArrayTexture)if(C){if(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ke,pe.width,pe.height,pe.depth),Q)if(w.layerUpdates.size>0){let Z=gd(pe.width,pe.height,w.format,w.type);for(let j of w.layerUpdates){let xe=pe.data.subarray(j*Z/pe.data.BYTES_PER_ELEMENT,(j+1)*Z/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,pe.width,pe.height,1,Te,Ye,xe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,Ye,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,pe.width,pe.height,pe.depth,0,Te,Ye,pe.data);else if(w.isData3DTexture)C?(N&&t.texStorage3D(n.TEXTURE_3D,ue,ke,pe.width,pe.height,pe.depth),Q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,Ye,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,pe.width,pe.height,pe.depth,0,Te,Ye,pe.data);else if(w.isFramebufferTexture){if(N)if(C)t.texStorage2D(n.TEXTURE_2D,ue,ke,pe.width,pe.height);else{let Z=pe.width,j=pe.height;for(let xe=0;xe<ue;xe++)t.texImage2D(n.TEXTURE_2D,xe,ke,Z,j,0,Te,Ye,null),Z>>=1,j>>=1}}else if(it.length>0){if(C&&N){let Z=He(it[0]);t.texStorage2D(n.TEXTURE_2D,ue,ke,Z.width,Z.height)}for(let Z=0,j=it.length;Z<j;Z++)Ee=it[Z],C?Q&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Te,Ye,Ee):t.texImage2D(n.TEXTURE_2D,Z,ke,Te,Ye,Ee);w.generateMipmaps=!1}else if(C){if(N){let Z=He(pe);t.texStorage2D(n.TEXTURE_2D,ue,ke,Z.width,Z.height)}Q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ye,pe)}else t.texImage2D(n.TEXTURE_2D,0,ke,Te,Ye,pe);g(w)&&m(J),Le.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function q(P,w,G){if(w.image.length!==6)return;let J=$e(P,w),de=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let ie=i.get(de);if(de.version!==ie.__version||J===!0){t.activeTexture(n.TEXTURE0+G);let Le=xt.getPrimaries(xt.workingColorSpace),Se=w.colorSpace===$i?null:xt.getPrimaries(w.colorSpace),Ue=w.colorSpace===$i||Le===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let j=0;j<6;j++)!Fe&&!pe?Te[j]=x(w.image[j],!0,s.maxCubemapSize):Te[j]=pe?w.image[j].image:w.image[j],Te[j]=Xe(w,Te[j]);let Ye=Te[0],ke=r.convert(w.format,w.colorSpace),Ee=r.convert(w.type),it=M(w.internalFormat,ke,Ee,w.colorSpace),C=w.isVideoTexture!==!0,N=ie.__version===void 0||J===!0,Q=de.dataReady,ue=E(w,Ye);De(n.TEXTURE_CUBE_MAP,w);let Z;if(Fe){C&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,it,Ye.width,Ye.height);for(let j=0;j<6;j++){Z=Te[j].mipmaps;for(let xe=0;xe<Z.length;xe++){let we=Z[xe];w.format!==Cn?ke!==null?C?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,we.width,we.height,ke,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,it,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,we.width,we.height,ke,Ee,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,it,we.width,we.height,0,ke,Ee,we.data)}}}else{if(Z=w.mipmaps,C&&N){Z.length>0&&ue++;let j=He(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,it,j.width,j.height)}for(let j=0;j<6;j++)if(pe){C?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te[j].width,Te[j].height,ke,Ee,Te[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,it,Te[j].width,Te[j].height,0,ke,Ee,Te[j].data);for(let xe=0;xe<Z.length;xe++){let Ie=Z[xe].image[j].image;C?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ie.width,Ie.height,ke,Ee,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,it,Ie.width,Ie.height,0,ke,Ee,Ie.data)}}else{C?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Ee,Te[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,it,ke,Ee,Te[j]);for(let xe=0;xe<Z.length;xe++){let we=Z[xe];C?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,ke,Ee,we.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,it,ke,Ee,we.image[j])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),ie.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,G,J,de,ie){let Le=r.convert(G.format,G.colorSpace),Se=r.convert(G.type),Ue=M(G.internalFormat,Le,Se,G.colorSpace),Fe=i.get(w),pe=i.get(G);if(pe.__renderTarget=w,!Fe.__hasExternalTextures){let Te=Math.max(1,w.width>>ie),Ye=Math.max(1,w.height>>ie);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ie,Ue,Te,Ye,w.depth,0,Le,Se,null):t.texImage2D(de,ie,Ue,Te,Ye,0,Le,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,de,pe.__webglTexture,0,ve(w)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,de,pe.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(P,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let J=w.depthTexture,de=J&&J.isDepthTexture?J.type:null,ie=y(w.stencilBuffer,de),Le=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=ve(w);me(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ie,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ie,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ie,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,P)}else{let J=w.textures;for(let de=0;de<J.length;de++){let ie=J[de],Le=r.convert(ie.format,ie.colorSpace),Se=r.convert(ie.type),Ue=M(ie.internalFormat,Le,Se,ie.colorSpace),Fe=ve(w);G&&me(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ue,w.width,w.height):me(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ue,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let de=J.__webglTexture,ie=ve(w);if(w.depthTexture.format===Wr)me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(w.depthTexture.format===uo)me(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ye(P){let w=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",de)};J.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let J=P.texture.mipmaps;J&&J.length>0?Y(w.__webglFramebuffer[0],P):Y(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=n.createRenderbuffer(),F(w.__webglDepthbuffer[J],P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ie)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),F(w.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(P,w,G){let J=i.get(P);w!==void 0&&ce(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ye(P)}function L(P){let w=P.texture,G=i.get(P),J=i.get(w);P.addEventListener("dispose",I);let de=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[Se]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)G.__webglFramebuffer[Se][Ue]=n.createFramebuffer()}else G.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)G.__webglFramebuffer[Se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Le)for(let Se=0,Ue=de.length;Se<Ue;Se++){let Fe=i.get(de[Se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&me(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){let Ue=de[Se];G.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);let Fe=r.convert(Ue.format,Ue.colorSpace),pe=r.convert(Ue.type),Te=M(Ue.internalFormat,Fe,pe,Ue.colorSpace,P.isXRRenderTarget===!0),Ye=ve(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Te,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),F(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),De(n.TEXTURE_CUBE_MAP,w);for(let Se=0;Se<6;Se++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ce(G.__webglFramebuffer[Se][Ue],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue);else ce(G.__webglFramebuffer[Se],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Se=0,Ue=de.length;Se<Ue;Se++){let Fe=de[Se],pe=i.get(Fe),Te=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,pe.__webglTexture),De(Te,Fe),ce(G.__webglFramebuffer,P,Fe,n.COLOR_ATTACHMENT0+Se,Te,0),g(Fe)&&m(Te)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,J.__webglTexture),De(Se,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ce(G.__webglFramebuffer[Ue],P,w,n.COLOR_ATTACHMENT0,Se,Ue);else ce(G.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,Se,0);g(w)&&m(Se),t.unbindTexture()}P.depthBuffer&&ye(P)}function re(P){let w=P.textures;for(let G=0,J=w.length;G<J;G++){let de=w[G];if(g(de)){let ie=_(P),Le=i.get(de).__webglTexture;t.bindTexture(ie,Le),m(ie),t.unbindTexture()}}}let ne=[],te=[];function ae(P){if(P.samples>0){if(me(P)===!1){let w=P.textures,G=P.width,J=P.height,de=n.COLOR_BUFFER_BIT,ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(P),Se=w.length>1;if(Se)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ue=P.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Fe]);let pe=i.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,de,n.NEAREST),l===!0&&(ne.length=0,te.length=0,ne.push(n.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ne.push(ie),te.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Fe]);let pe=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ve(P){return Math.min(s.maxSamples,P.samples)}function me(P){let w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Me(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Xe(P,w){let G=P.colorSpace,J=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Xs&&G!==$i&&(xt.getTransfer(G)===Et?(J!==Cn||de!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=L,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=me}function uS(n,e){function t(i,s=$i){let r,o=xt.getTransfer(s);if(i===_i)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===rd)return n.ALPHA;if(i===od)return n.RGB;if(i===Cn)return n.RGBA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===ad)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===Da||i===La||i===Ua||i===Na)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Bc||i===zc||i===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Gc||i===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Gc)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===jc||i===Jc||i===Kc||i===$c||i===Qc||i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sh||i===rh||i===oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sh)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ah||i===lh||i===ch||i===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ah)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yi({vertexShader:dS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pd=class extends Ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new Rd,m={},_=t.getContextAttributes(),M=null,y=null,E=[],A=[],I=new he,R=null,S=new gn;S.viewport=new Xt;let b=new gn;b.viewport=new Xt;let D=[S,b],U=new _c,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let q=E[se];return q===void 0&&(q=new Jr,E[se]=q),q.getTargetRaySpace()},this.getControllerGrip=function(se){let q=E[se];return q===void 0&&(q=new Jr,E[se]=q),q.getGripSpace()},this.getHand=function(se){let q=E[se];return q===void 0&&(q=new Jr,E[se]=q),q.getHandSpace()};function H(se){let q=A.indexOf(se.inputSource);if(q===-1)return;let ce=E[q];ce!==void 0&&(ce.update(se.inputSource,se.frame,c||o),ce.dispatchEvent({type:se.type,data:se.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ee);for(let se=0;se<E.length;se++){let q=A[se];q!==null&&(A[se]=null,E[se].disconnect(q))}B=null,W=null,g.reset();for(let se in m)delete m[se];e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,F=null,Y=null;_.depth&&(Y=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?uo:Wr,F=_.stencil?ho:vs);let ye={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ri(f.textureWidth,f.textureHeight,{format:Cn,type:_i,depthTexture:new ua(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(se){for(let q=0;q<se.removed.length;q++){let ce=se.removed[q],F=A.indexOf(ce);F>=0&&(A[F]=null,E[F].disconnect(ce))}for(let q=0;q<se.added.length;q++){let ce=se.added[q],F=A.indexOf(ce);if(F===-1){for(let ye=0;ye<E.length;ye++)if(ye>=A.length){A.push(ce),F=ye;break}else if(A[ye]===null){A[ye]=ce,F=ye;break}if(F===-1)break}let Y=E[F];Y&&Y.connect(ce)}}let X=new v,le=new v;function ge(se,q,ce){X.setFromMatrixPosition(q.matrixWorld),le.setFromMatrixPosition(ce.matrixWorld);let F=X.distanceTo(le),Y=q.projectionMatrix.elements,ye=ce.projectionMatrix.elements,Be=Y[14]/(Y[10]-1),L=Y[14]/(Y[10]+1),re=(Y[9]+1)/Y[5],ne=(Y[9]-1)/Y[5],te=(Y[8]-1)/Y[0],ae=(ye[8]+1)/ye[0],ve=Be*te,me=Be*ae,Me=F/(-te+ae),Xe=Me*-te;if(q.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Xe),se.translateZ(Me),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Y[10]===-1)se.projectionMatrix.copy(q.projectionMatrix),se.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let He=Be+Me,P=L+Me,w=ve-Xe,G=me+(F-Xe),J=re*L/P*He,de=ne*L/P*He;se.projectionMatrix.makePerspective(w,G,J,de,He,P),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function be(se,q){q===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(q.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let q=se.near,ce=se.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),U.near=b.near=S.near=q,U.far=b.far=S.far=ce,(B!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,W=U.far),U.layers.mask=se.layers.mask|6,S.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;let F=se.parent,Y=U.cameras;be(U,F);for(let ye=0;ye<Y.length;ye++)be(Y[ye],F);Y.length===2?ge(U,S,b):U.projectionMatrix.copy(S.projectionMatrix),De(se,U,F)};function De(se,q,ce){ce===null?se.matrix.copy(q.matrixWorld):(se.matrix.copy(ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(q.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(q.projectionMatrix),se.projectionMatrixInverse.copy(q.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Xr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(se){return m[se]};let $e=null;function nt(se,q){if(h=q.getViewerPose(c||o),p=q,h!==null){let ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let F=!1;ce.length!==U.cameras.length&&(U.cameras.length=0,F=!0);for(let L=0;L<ce.length;L++){let re=ce[L],ne=null;if(d!==null)ne=d.getViewport(re);else{let ae=u.getViewSubImage(f,re);ne=ae.viewport,L===0&&(e.setRenderTargetTextures(y,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(y))}let te=D[L];te===void 0&&(te=new gn,te.layers.enable(L),te.viewport=new Xt,D[L]=te),te.matrix.fromArray(re.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(re.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ne.x,ne.y,ne.width,ne.height),L===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),F===!0&&U.cameras.push(te)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let L=u.getDepthInformation(ce[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(Y&&Y.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<ce.length;L++){let re=ce[L].camera;if(re){let ne=m[re];ne||(ne=new da,m[re]=ne);let te=u.getCameraImage(re);ne.sourceTexture=te}}}}for(let ce=0;ce<E.length;ce++){let F=A[ce],Y=E[ce];F!==null&&Y!==void 0&&Y.update(F,q,c||o)}$e&&$e(se,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),p=null}let Ze=new qm;Ze.setAnimationLoop(nt),this.setAnimationLoop=function(se){$e=se},this.dispose=function(){}}},ar=new qt,pS=new ft;function mS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,dd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),M=_.envMap,y=_.envMapRotation;M&&(g.envMap.value=M,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(ar)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let y=M.program;i.uniformBlockBinding(_,y)}function c(_,M){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let E=M.program;i.updateUBOMapping(_,E);let A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let M=u();_.__bindingPointIndex=M;let y=n.createBuffer(),E=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],y=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,I=y.length;A<I;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,b=R.length;S<b;S++){let D=R[S];if(d(D,A,S,E)===!0){let U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],W=0;for(let H=0;H<B.length;H++){let k=B[H],ee=x(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+W,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,M,y,E){let A=_.value,I=M+"_"+y;if(E[I]===void 0)return typeof A=="number"||typeof A=="boolean"?E[I]=A:E[I]=A.clone(),!0;{let R=E[I];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[I]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function p(_){let M=_.uniforms,y=0,E=16;for(let I=0,R=M.length;I<R;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let b=0,D=S.length;b<D;b++){let U=S[b],B=Array.isArray(U.value)?U.value:[U.value];for(let W=0,H=B.length;W<H;W++){let k=B[W],ee=x(k),X=y%E,le=X%ee.boundary,ge=X+le;y+=le,ge!==0&&E-ge<ee.storage&&(y+=E-ge),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=ee.storage}}}let A=y%E;return A>0&&(y+=E-A),_.__size=y,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var mh=class{constructor(e={}){let{canvas:t=fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=mt;let A=0,I=0,R=null,S=-1,b=null,D=new Xt,U=new Xt,B=null,W=new Ve(0),H=0,k=t.width,ee=t.height,X=1,le=null,ge=null,be=new Xt(0,0,k,ee),De=new Xt(0,0,k,ee),$e=!1,nt=new to,Ze=!1,se=!1,q=new ft,ce=new v,F=new Xt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Be(){return R===null?X:1}let L=i;function re(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Z,!1),L===null){let z="webgl2";if(L=re(z,T),L===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,te,ae,ve,me,Me,Xe,He,P,w,G,J,de,ie,Le,Se,Ue,Fe,pe,Te,Ye,ke,Ee,it;function C(){ne=new UM(L),ne.init(),ke=new uS(L,ne),te=new AM(L,ne,e,ke),ae=new cS(L,ne),te.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),ve=new OM(L),me=new Jb,Me=new hS(L,ne,ae,me,te,ke,ve),Xe=new RM(y),He=new LM(y),P=new Hy(L),Ee=new TM(L,P),w=new NM(L,P,ve,Ee),G=new zM(L,w,P,ve),pe=new BM(L,te,Me),Se=new CM(me),J=new jb(y,Xe,He,ne,te,Ee,Se),de=new mS(y,me),ie=new $b,Le=new sS(ne),Fe=new wM(y,Xe,He,ae,G,d,l),Ue=new aS(y,G,te),it=new gS(L,ve,te,ae),Te=new EM(L,ne,ve),Ye=new FM(L,ne,ve),ve.programs=J.programs,y.capabilities=te,y.extensions=ne,y.properties=me,y.renderLists=ie,y.shadowMap=Ue,y.state=ae,y.info=ve}C();let N=new Pd(y,L);this.xr=N,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,ee,!1))},this.getSize=function(T){return T.set(k,ee)},this.setSize=function(T,z,K=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,ee=z,t.width=Math.floor(T*X),t.height=Math.floor(z*X),K===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*X,ee*X).floor()},this.setDrawingBufferSize=function(T,z,K){k=T,ee=z,X=K,t.width=Math.floor(T*K),t.height=Math.floor(z*K),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,z,K,$){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,z,K,$),ae.viewport(D.copy(be).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(De)},this.setScissor=function(T,z,K,$){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,z,K,$),ae.scissor(U.copy(De).multiplyScalar(X).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(T){ae.setScissorTest($e=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,K=!0){let $=0;if(T){let V=!1;if(R!==null){let _e=R.texture.format;V=_e===Fc||_e===Nc||_e===Uc}if(V){let _e=R.texture.type,Re=_e===_i||_e===vs||_e===lo||_e===ho||_e===Ic||_e===Dc,ze=Fe.getClearColor(),Ne=Fe.getClearAlpha(),je=ze.r,Qe=ze.g,Ge=ze.b;Re?(p[0]=je,p[1]=Qe,p[2]=Ge,p[3]=Ne,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=je,x[1]=Qe,x[2]=Ge,x[3]=Ne,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}z&&($|=L.DEPTH_BUFFER_BIT),K&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Fe.dispose(),ie.dispose(),Le.dispose(),me.dispose(),Xe.dispose(),He.dispose(),G.dispose(),Ee.dispose(),it.dispose(),J.dispose(),N.dispose(),N.removeEventListener("sessionstart",Vt),N.removeEventListener("sessionend",at),Ft.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=ve.autoReset,z=Ue.enabled,K=Ue.autoUpdate,$=Ue.needsUpdate,V=Ue.type;C(),ve.autoReset=T,Ue.enabled=z,Ue.autoUpdate=K,Ue.needsUpdate=$,Ue.type=V}function Z(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function j(T){let z=T.target;z.removeEventListener("dispose",j),xe(z)}function xe(T){we(T),me.remove(T)}function we(T){let z=me.get(T).programs;z!==void 0&&(z.forEach(function(K){J.releaseProgram(K)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,K,$,V,_e){z===null&&(z=Y);let Re=V.isMesh&&V.matrixWorld.determinant()<0,ze=ax(T,z,K,$,V);ae.setMaterial($,Re);let Ne=K.index,je=1;if($.wireframe===!0){if(Ne=w.getWireframeAttribute(K),Ne===void 0)return;je=2}let Qe=K.drawRange,Ge=K.attributes.position,dt=Qe.start*je,Pt=(Qe.start+Qe.count)*je;_e!==null&&(dt=Math.max(dt,_e.start*je),Pt=Math.min(Pt,(_e.start+_e.count)*je)),Ne!==null?(dt=Math.max(dt,0),Pt=Math.min(Pt,Ne.count)):Ge!=null&&(dt=Math.max(dt,0),Pt=Math.min(Pt,Ge.count));let jt=Pt-dt;if(jt<0||jt===1/0)return;Ee.setup(V,$,ze,K,Ne);let Ot,Lt=Te;if(Ne!==null&&(Ot=P.get(Ne),Lt=Ye,Lt.setIndex(Ot)),V.isMesh)$.wireframe===!0?(ae.setLineWidth($.wireframeLinewidth*Be()),Lt.setMode(L.LINES)):Lt.setMode(L.TRIANGLES);else if(V.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),ae.setLineWidth(qe*Be()),V.isLineSegments?Lt.setMode(L.LINES):V.isLineLoop?Lt.setMode(L.LINE_LOOP):Lt.setMode(L.LINE_STRIP)}else V.isPoints?Lt.setMode(L.POINTS):V.isSprite&&Lt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let qe=V._multiDrawStarts,Gt=V._multiDrawCounts,yt=V._multiDrawCount,kn=Ne?P.get(Ne).bytesPerElement:1,Mr=me.get($).currentProgram.getUniforms();for(let Vn=0;Vn<yt;Vn++)Mr.setValue(L,"_gl_DrawID",Vn),Lt.render(qe[Vn]/kn,Gt[Vn])}else if(V.isInstancedMesh)Lt.renderInstances(dt,jt,V.count);else if(K.isInstancedBufferGeometry){let qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Gt=Math.min(K.instanceCount,qe);Lt.renderInstances(dt,jt,Gt)}else Lt.render(dt,jt)};function Ie(T,z,K){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,ss(T,z,K),T.side=gi,T.needsUpdate=!0,ss(T,z,K),T.side=tn):ss(T,z,K)}this.compile=function(T,z,K=null){K===null&&(K=T),m=Le.get(K),m.init(z),M.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let $=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let ze=_e[Re];Ie(ze,K,V),$.add(ze)}else Ie(_e,K,V),$.add(_e)}),m=M.pop(),$},this.compileAsync=function(T,z,K=null){let $=this.compile(T,z,K);return new Promise(V=>{function _e(){if($.forEach(function(Re){me.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){V(T);return}setTimeout(_e,10)}ne.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Pe=null;function wt(T){Pe&&Pe(T)}function Vt(){Ft.stop()}function at(){Ft.start()}let Ft=new qm;Ft.setAnimationLoop(wt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){Pe=T,N.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},N.addEventListener("sessionstart",Vt),N.addEventListener("sessionend",at),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(z),z=N.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,R),m=Le.get(T,M.length),m.init(z),M.push(m),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(q,mi,z.reversedDepth),se=this.localClippingEnabled,Ze=Se.init(this.clippingPlanes,se),g=ie.get(T,_.length),g.init(),_.push(g),N.enabled===!0&&N.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&$t(_e,z,-1/0,y.sortObjects)}$t(T,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(le,ge),ye=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,ye&&Fe.addToRenderList(g,T),this.info.render.frame++,Ze===!0&&Se.beginShadows();let K=m.state.shadowsArray;Ue.render(K,T,z),Ze===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,V=g.transmissive;if(m.setupLights(),z.isArrayCamera){let _e=z.cameras;if(V.length>0)for(let Re=0,ze=_e.length;Re<ze;Re++){let Ne=_e[Re];Ns($,V,T,Ne)}ye&&Fe.render(T);for(let Re=0,ze=_e.length;Re<ze;Re++){let Ne=_e[Re];ki(g,T,Ne,Ne.viewport)}}else V.length>0&&Ns($,V,T,z),ye&&Fe.render(T),ki(g,T,z);R!==null&&I===0&&(Me.updateMultisampleRenderTarget(R),Me.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,z),Ee.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],Ze===!0&&Se.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function $t(T,z,K,$){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){$&&F.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);let Re=G.update(T),ze=T.material;ze.visible&&g.push(T,Re,ze,K,F.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){let Re=G.update(T),ze=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),F.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),F.copy(Re.boundingSphere.center)),F.applyMatrix4(T.matrixWorld).applyMatrix4(q)),Array.isArray(ze)){let Ne=Re.groups;for(let je=0,Qe=Ne.length;je<Qe;je++){let Ge=Ne[je],dt=ze[Ge.materialIndex];dt&&dt.visible&&g.push(T,Re,dt,K,F.z,Ge)}}else ze.visible&&g.push(T,Re,ze,K,F.z,null)}}let _e=T.children;for(let Re=0,ze=_e.length;Re<ze;Re++)$t(_e[Re],z,K,$)}function ki(T,z,K,$){let V=T.opaque,_e=T.transmissive,Re=T.transparent;m.setupLightsView(K),Ze===!0&&Se.setGlobalState(y.clippingPlanes,K),$&&ae.viewport(D.copy($)),V.length>0&&Fs(V,z,K),_e.length>0&&Fs(_e,z,K),Re.length>0&&Fs(Re,z,K),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ns(T,z,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ri(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?co:_i,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let _e=m.state.transmissionRenderTarget[$.id],Re=$.viewport||D;_e.setSize(Re.z*y.transmissionResolutionScale,Re.w*y.transmissionResolutionScale);let ze=y.getRenderTarget(),Ne=y.getActiveCubeFace(),je=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(W),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),ye&&Fe.render(K);let Qe=y.toneMapping;y.toneMapping=Ki;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),Ze===!0&&Se.setGlobalState(y.clippingPlanes,$),Fs(T,K,$),Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e),ne.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Pt=0,jt=z.length;Pt<jt;Pt++){let Ot=z[Pt],Lt=Ot.object,qe=Ot.geometry,Gt=Ot.material,yt=Ot.group;if(Gt.side===tn&&Lt.layers.test($.layers)){let kn=Gt.side;Gt.side=En,Gt.needsUpdate=!0,Vi(Lt,K,$,qe,Gt,yt),Gt.side=kn,Gt.needsUpdate=!0,dt=!0}}dt===!0&&(Me.updateMultisampleRenderTarget(_e),Me.updateRenderTargetMipmap(_e))}y.setRenderTarget(ze,Ne,je),y.setClearColor(W,H),Ge!==void 0&&($.viewport=Ge),y.toneMapping=Qe}function Fs(T,z,K){let $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,_e=T.length;V<_e;V++){let Re=T[V],ze=Re.object,Ne=Re.geometry,je=Re.group,Qe=Re.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),ze.layers.test(K.layers)&&Vi(ze,z,K,Ne,Qe,je)}}function Vi(T,z,K,$,V,_e){T.onBeforeRender(y,z,K,$,V,_e),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(y,z,K,$,T,_e),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=En,V.needsUpdate=!0,y.renderBufferDirect(K,z,$,V,T,_e),V.side=gi,V.needsUpdate=!0,y.renderBufferDirect(K,z,$,V,T,_e),V.side=tn):y.renderBufferDirect(K,z,$,V,T,_e),T.onAfterRender(y,z,K,$,V,_e)}function ss(T,z,K){z.isScene!==!0&&(z=Y);let $=me.get(T),V=m.state.lights,_e=m.state.shadowsArray,Re=V.state.version,ze=J.getParameters(T,V.state,_e,z,K),Ne=J.getProgramCacheKey(ze),je=$.programs;$.environment=T.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(T.isMeshStandardMaterial?He:Xe).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",j),je=new Map,$.programs=je);let Qe=je.get(Ne);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Re)return kf(T,ze),Qe}else ze.uniforms=J.getUniforms(T),T.onBeforeCompile(ze,y),Qe=J.acquireProgram(ze,Ne),je.set(Ne,Qe),$.uniforms=ze.uniforms;let Ge=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),kf(T,ze),$.needsLights=cx(T),$.lightsStateVersion=Re,$.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Qe,$.uniformsList=null,Qe}function zf(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function kf(T,z){let K=me.get(T);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function ax(T,z,K,$,V){z.isScene!==!0&&(z=Y),Me.resetTextureUnits();let _e=z.fog,Re=$.isMeshStandardMaterial?z.environment:null,ze=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xs,Ne=($.isMeshStandardMaterial?He:Xe).get($.envMap||Re),je=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Pt=!!K.morphAttributes.color,jt=Ki;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(jt=y.toneMapping);let Ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Lt=Ot!==void 0?Ot.length:0,qe=me.get($),Gt=m.state.lights;if(Ze===!0&&(se===!0||T!==b)){let bn=T===b&&$.id===S;Se.setState($,T,bn)}let yt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Gt.state.version||qe.outputColorSpace!==ze||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Ne||$.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Qe||qe.morphTargets!==Ge||qe.morphNormals!==dt||qe.morphColors!==Pt||qe.toneMapping!==jt||qe.morphTargetsCount!==Lt)&&(yt=!0):(yt=!0,qe.__version=$.version);let kn=qe.currentProgram;yt===!0&&(kn=ss($,z,V));let Mr=!1,Vn=!1,Oo=!1,Ht=kn.getUniforms(),Jn=qe.uniforms;if(ae.useProgram(kn.program)&&(Mr=!0,Vn=!0,Oo=!0),$.id!==S&&(S=$.id,Vn=!0),Mr||b!==T){ae.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ht.setValue(L,"projectionMatrix",T.projectionMatrix),Ht.setValue(L,"viewMatrix",T.matrixWorldInverse);let Pn=Ht.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,ce.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Vn=!0,Oo=!0)}if(V.isSkinnedMesh){Ht.setOptional(L,V,"bindMatrix"),Ht.setOptional(L,V,"bindMatrixInverse");let bn=V.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(L,"boneTexture",bn.boneTexture,Me))}V.isBatchedMesh&&(Ht.setOptional(L,V,"batchingTexture"),Ht.setValue(L,"batchingTexture",V._matricesTexture,Me),Ht.setOptional(L,V,"batchingIdTexture"),Ht.setValue(L,"batchingIdTexture",V._indirectTexture,Me),Ht.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Ht.setValue(L,"batchingColorTexture",V._colorsTexture,Me));let Kn=K.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&pe.update(V,K,kn),(Vn||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Ht.setValue(L,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Jn.envMap.value=Ne,Jn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Jn.envMapIntensity.value=z.environmentIntensity),Vn&&(Ht.setValue(L,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&lx(Jn,Oo),_e&&$.fog===!0&&de.refreshFogUniforms(Jn,_e),de.refreshMaterialUniforms(Jn,$,X,ee,m.state.transmissionRenderTarget[T.id]),mo.upload(L,zf(qe),Jn,Me)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(mo.upload(L,zf(qe),Jn,Me),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(L,"center",V.center),Ht.setValue(L,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(L,"normalMatrix",V.normalMatrix),Ht.setValue(L,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let bn=$.uniformsGroups;for(let Pn=0,au=bn.length;Pn<au;Pn++){let Os=bn[Pn];it.update(Os,kn),it.bind(Os,kn)}}return kn}function lx(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function cx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,K){let $=me.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),me.get(T.texture).__webglTexture=z,me.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let K=me.get(T);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};let hx=L.createFramebuffer();this.setRenderTarget=function(T,z=0,K=0){R=T,A=z,I=K;let $=!0,V=null,_e=!1,Re=!1;if(T){let Ne=me.get(T);if(Ne.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Ne.__webglFramebuffer===void 0)Me.setupRenderTarget(T);else if(Ne.__hasExternalTextures)Me.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&me.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(T)}}let je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Re=!0);let Qe=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?V=Qe[z][K]:V=Qe[z],_e=!0):T.samples>0&&Me.useMultisampledRTT(T)===!1?V=me.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?V=Qe[K]:V=Qe,D.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else D.copy(be).multiplyScalar(X).floor(),U.copy(De).multiplyScalar(X).floor(),B=$e;if(K!==0&&(V=hx),ae.bindFramebuffer(L.FRAMEBUFFER,V)&&$&&ae.drawBuffers(T,V),ae.viewport(D),ae.scissor(U),ae.setScissorTest(B),_e){let Ne=me.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,K)}else if(Re){let Ne=z;for(let je=0;je<T.textures.length;je++){let Qe=me.get(T.textures[je]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+je,Qe.__webglTexture,K,Ne)}}else if(T!==null&&K!==0){let Ne=me.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(T,z,K,$,V,_e,Re,ze=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ae.bindFramebuffer(L.FRAMEBUFFER,Ne);try{let je=T.textures[ze],Qe=je.format,Ge=je.type;if(!te.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-$&&K>=0&&K<=T.height-V&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ze),L.readPixels(z,K,$,V,ke.convert(Qe),ke.convert(Ge),_e))}finally{let je=R!==null?me.get(R).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(T,z,K,$,V,_e,Re,ze=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(z>=0&&z<=T.width-$&&K>=0&&K<=T.height-V){ae.bindFramebuffer(L.FRAMEBUFFER,Ne);let je=T.textures[ze],Qe=je.format,Ge=je.type;if(!te.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,dt),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ze),L.readPixels(z,K,$,V,ke.convert(Qe),ke.convert(Ge),0);let Pt=R!==null?me.get(R).__webglFramebuffer:null;ae.bindFramebuffer(L.FRAMEBUFFER,Pt);let jt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pm(L,jt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(dt),L.deleteSync(jt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,K=0){let $=Math.pow(2,-K),V=Math.floor(T.image.width*$),_e=Math.floor(T.image.height*$),Re=z!==null?z.x:0,ze=z!==null?z.y:0;Me.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Re,ze,V,_e),ae.unbindTexture()};let ux=L.createFramebuffer(),dx=L.createFramebuffer();this.copyTextureToTexture=function(T,z,K=null,$=null,V=0,_e=null){_e===null&&(V!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=V,V=0):_e=0);let Re,ze,Ne,je,Qe,Ge,dt,Pt,jt,Ot=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(K!==null)Re=K.max.x-K.min.x,ze=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,je=K.min.x,Qe=K.min.y,Ge=K.isBox3?K.min.z:0;else{let Kn=Math.pow(2,-V);Re=Math.floor(Ot.width*Kn),ze=Math.floor(Ot.height*Kn),T.isDataArrayTexture?Ne=Ot.depth:T.isData3DTexture?Ne=Math.floor(Ot.depth*Kn):Ne=1,je=0,Qe=0,Ge=0}$!==null?(dt=$.x,Pt=$.y,jt=$.z):(dt=0,Pt=0,jt=0);let Lt=ke.convert(z.format),qe=ke.convert(z.type),Gt;z.isData3DTexture?(Me.setTexture3D(z,0),Gt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Me.setTexture2DArray(z,0),Gt=L.TEXTURE_2D_ARRAY):(Me.setTexture2D(z,0),Gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let yt=L.getParameter(L.UNPACK_ROW_LENGTH),kn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mr=L.getParameter(L.UNPACK_SKIP_PIXELS),Vn=L.getParameter(L.UNPACK_SKIP_ROWS),Oo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);let Ht=T.isDataArrayTexture||T.isData3DTexture,Jn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Kn=me.get(T),bn=me.get(z),Pn=me.get(Kn.__renderTarget),au=me.get(bn.__renderTarget);ae.bindFramebuffer(L.READ_FRAMEBUFFER,Pn.__webglFramebuffer),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,au.__webglFramebuffer);for(let Os=0;Os<Ne;Os++)Ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(T).__webglTexture,V,Ge+Os),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(z).__webglTexture,_e,jt+Os)),L.blitFramebuffer(je,Qe,Re,ze,dt,Pt,Re,ze,L.DEPTH_BUFFER_BIT,L.NEAREST);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||me.has(T)){let Kn=me.get(T),bn=me.get(z);ae.bindFramebuffer(L.READ_FRAMEBUFFER,ux),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,dx);for(let Pn=0;Pn<Ne;Pn++)Ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kn.__webglTexture,V,Ge+Pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kn.__webglTexture,V),Jn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,_e,jt+Pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,_e),V!==0?L.blitFramebuffer(je,Qe,Re,ze,dt,Pt,Re,ze,L.COLOR_BUFFER_BIT,L.NEAREST):Jn?L.copyTexSubImage3D(Gt,_e,dt,Pt,jt+Pn,je,Qe,Re,ze):L.copyTexSubImage2D(Gt,_e,dt,Pt,je,Qe,Re,ze);ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Gt,_e,dt,Pt,jt,Re,ze,Ne,Lt,qe,Ot.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Gt,_e,dt,Pt,jt,Re,ze,Ne,Lt,Ot.data):L.texSubImage3D(Gt,_e,dt,Pt,jt,Re,ze,Ne,Lt,qe,Ot):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,dt,Pt,Re,ze,Lt,qe,Ot.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,dt,Pt,Ot.width,Ot.height,Lt,Ot.data):L.texSubImage2D(L.TEXTURE_2D,_e,dt,Pt,Re,ze,Lt,qe,Ot);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oo),_e===0&&z.generateMipmaps&&L.generateMipmap(Gt),ae.unbindTexture()},this.initRenderTarget=function(T){me.get(T).__webglFramebuffer===void 0&&Me.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Me.setTextureCube(T,0):T.isData3DTexture?Me.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Me.setTexture2DArray(T,0):Me.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){A=0,I=0,R=null,ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Dd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var kE=Dd.length-1,Km=Math.min(...Dd.map(n=>n[1])),$m=Math.max(...Dd.map(n=>n[1])),VE=new v(0,0,(Km+$m)/2),Qm=new v(.047,.027,($m-Km)/2);var WE=new pt,XE=new v,qE=new v,YE=new ft;var ZE=new v,jE=new v;var JE=new v;var KE=new v,$E=new v,QE=new v,eA=new In,tA=new v;function Ba(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new v().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new v().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),M=new In(g,m,_).getNormal(new v);M.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:M})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new sn().setFromPoints(i).getSize(new v),h=Math.max(1e-4,e**2*.4),u=e?new v().setScalar(1/h):new v(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:f,normals:e?[]:d(s.map(p=>p.n)),edges:e?[]:d(s.flatMap(p=>[new v().subVectors(p.b,p.a).normalize(),new v().subVectors(p.c,p.b).normalize(),new v().subVectors(p.a,p.c).normalize()]))}}var nA=new v,iA=new v,sA=new v,rA=new v,oA=new pt,aA=new pt,lA=new v;function yo(n){return Ba(new We(n.x*2,n.y*2,n.z*2))}var cA=new v;var eg=Ba(new ii(1,0).scale(...Qm)),hA={mesh:{position:new v,quaternion:new pt},shape:eg,radius:eg.radius,precise:!0};var uA=new v,dA=new v,fA=new v,pA=new pt,mA=new pt,gA=new pt;var xA=new v,yA=new v,_A=new v,vA=new v;var MA=new v;var bA=new v,SA=new v,wA=new v,TA=new v,EA=new v,AA=new v,CA=new v;var RA={mesh:{position:null,quaternion:new pt},shape:{sphereRadius:0,normals:[],edges:[]}};function xh(n,e,t){let i=new We(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Ld(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function tg(n){switch(n){case"sphere":return new si(.5,24,16);case"cylinder":return new Ct(.5,.5,1,24);case"cone":return new Zs(.5,1,24);case"torus":return new Tn(.34,.14,12,32);case"capsule":return new ms(.32,.36,8,16);default:return new We(1,1,1)}}function Ud(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new v(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let f=1;f<l.length-1;f++)for(let d of[c,l[f],l[f+1]]){s.push(...d);let p=d.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new lt;return o.setAttribute("position",new Oe(s,3)),o.setAttribute("uv",new Oe(r,2)),o.computeVertexNormals(),o}function za(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Ms=(n,e,t)=>n+(e-n)*t,_o=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function yh(n,e){let t=Math.floor(n),i=Math.floor(e),s=_o(0,1,n-t),r=_o(0,1,e-i);return Ms(Ms(za(t,i),za(t+1,i),s),Ms(za(t,i+1),za(t+1,i+1),s),r)}function ng(n,e){return yh(n,e)*.54+yh(n*2.07+3.4,e*2.07-6.1)*.26+yh(n*4.2+9,e*4.2)*.13+yh(n*8.6,e*8.6-13)*.07}function ig(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),f=u**.54,d=r.map((p,x)=>Ms(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=za(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*_o(.09,.3,c))}else{let[y,E]=s[p],A=2.8*h/(c+.16),I=y*A+3.6,R=E*A-8.1,S=ng(I,R),b=ng(I-.12,R-.09);g=_o(.49,.66,S)*_o(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-b)*5+(S-.54)*.8))}let M=n?1:Ms(.94,1,_o(.05,.34,c));i[x]=Ms(d[0],(139+115*m)*M,g)+_,i[x+1]=Ms(d[1],(154+100*m)*M,g)+_*.94,i[x+2]=Ms(d[2],(178+77*m)*M,g)+_*.86,i[x+3]=255}}let a=new ei(i,1024,512,Cn);return a.colorSpace=mt,a.wrapS=wn,a.magFilter=en,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function sg(){let n=ig(!1),e=ig(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new ei(t,n.image.width,n.image.height,Cn);i.colorSpace=mt;for(let s of[n,i,e])s.mapping=Di,s.magFilter=en,s.minFilter=en,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var Yt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),rg=Yt(-24,24,-51,7),og=34521,ag={x:0,y:0,z:3},bs={x:.05,y:1.16,z:5.9},vo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Yt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Yt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Yt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Yt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Yt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Yt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Yt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Yt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Yt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Yt(9,23,-48,-37),sign:[16,-38.2]}},LA=[Yt(-9,-6,-51,7),Yt(6,9,-51,7),Yt(-24,24,-8,-5),Yt(-24,24,-27,-23),Yt(9,23,-37,-34)],lg=[{name:"Glace",bounds:vo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:vo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Yt(-9,9,-51,7)},{name:"Sol ouest",bounds:Yt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Yt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Yt(-24,-23,-51,7)},{name:"Sol est",bounds:Yt(9,23,-51,-48)},{name:"Sol est",bounds:Yt(9,23,-37,7)},{name:"Bordure est",bounds:Yt(23,24,-51,7)}],ka={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Mo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],cg=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Ss={x:-19.4,y:.68,z:-3.25},hg=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),ug={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function _h(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Pi(i);return s.colorSpace=mt,s}function dg(n,e){let{day:t,sunset:i,night:s}=sg(),r=[t,i,s],o=new Ve,a=new qs("#a6d4ea",55,135),l=_h(128,128,(C,N)=>{let Q=C.createRadialGradient(N/2,N/2,0,N/2,N/2,N/2);Q.addColorStop(0,"#fff8df"),Q.addColorStop(.12,"#fff3bd"),Q.addColorStop(.18,"rgba(255,225,144,.40)"),Q.addColorStop(1,"rgba(255,220,144,0)"),C.fillStyle=Q,C.fillRect(0,0,N,N)}),c=new la(new Qr({map:l,blending:Ra,depthWrite:!1,fog:!1,toneMapped:!1}));c.scale.setScalar(34),n.add(c);let h=t.clone();h.mapping=Di,h.needsUpdate=!0;let u=new go(e);n.environment=u.fromEquirectangular(h).texture,u.dispose();let f=new Qs("#daeaff","#88724c",2.25),d=new er("#fff0d0",3);d.position.set(-14,25,-16),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),Object.assign(d.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),d.shadow.bias=-25e-5,d.shadow.normalBias=.025,n.add(f,d,d.target);let p=new v,x=0,g=null,m=!0,_=null,M=null,y=!0,E=0,A=0,I=new v,R=null,S=null,b=null;function D(C,N){if(N==="#ffffff")return C;if(C===S&&N===b)return R;let Q=C.image,ue=document.createElement("canvas");ue.width=Q.width,ue.height=Q.height;let Z=ue.getContext("2d");return C.isDataTexture?Z.putImageData(new ImageData(new Uint8ClampedArray(Q.data),Q.width,Q.height),0,0):Z.drawImage(Q,0,0),Z.globalCompositeOperation="multiply",Z.fillStyle=N,Z.fillRect(0,0,ue.width,ue.height),R?.dispose(),R=new Pi(ue),R.mapping=Di,R.colorSpace=mt,R.flipY=C.flipY,S=C,b=N,R}function U(C){x=[0,1,2].includes(C)?C:0;let N=g??Gi(x),Q=Ce.degToRad(N.azimuth),ue=Ce.degToRad(N.elevation);I.set(Math.cos(Q)*Math.cos(ue),Math.sin(ue),Math.sin(Q)*Math.cos(ue)),p.copy(I).multiplyScalar(33),f.color.set(N.ambientColor),f.groundColor.set(N.groundColor),f.intensity=N.ambientPower,d.color.set(N.sunColor),d.intensity=N.sunPower,d.position.copy(d.target.position).add(p),c.material.color.set(N.sunColor),c.material.opacity=[1,.93,.22][N.preset]*Math.min(1,N.sunPower),c.visible=y&&N.sunPower>0;let Z=N.sky==="image"&&M?M:r[N.preset];n.background=N.sky==="color"||!m?o.set(N.skyColor):D(Z,N.skyTint),n.backgroundRotation.y=Ce.degToRad(N.rotation),a.color.set(N.fogColor),a.near=N.fogNear,a.far=N.fogFar,n.fog=N.fog?a:null,n.environmentIntensity=E*[1,.56,.09][N.preset]}function B(C,N=()=>{}){g=C;let Q=C?.sky==="image"?C.skyImage:null;if(_!==Q){_=Q;let ue=++A;M?.dispose(),M=null,Q&&new ri().load(Q,Z=>{if(A!==ue){Z.dispose();return}Z.colorSpace=mt,Z.mapping=Di,M=Z,U(x),N()},void 0,()=>N())}U(x)}function W(C){c.position.copy(C).addScaledVector(I,94)}function H(C){if(!d.castShadow)return;let N=d.target.position,Q=Math.round(C.x/4)*4,ue=Math.round(C.y/4)*4,Z=Math.round(C.z/4)*4;N.x===Q&&N.y===ue&&N.z===Z||(N.set(Q,ue,Z),d.position.copy(N).add(p))}U(0);let k=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function ee(C,N,Q){let[,ue,Z]=k[N],j=512;C.save(),C.scale(Q/512,Q/512),C.fillStyle=ue,C.fillRect(0,0,j,j);let xe=N+19;function we(){return xe=Math.imul(xe,1664525)+1013904223>>>0,xe/4294967296}if(C.fillStyle=Z,N===16){for(let Ie=0;Ie<16;Ie++)for(let Pe=0;Pe<16;Pe++)(Pe+Ie)%2===0&&C.fillRect(Pe*32,Ie*32,32,32);C.fillStyle="#ff3957",C.fillRect(253,0,6,512),C.fillRect(0,253,512,6)}else if([0,2,8,15].includes(N)){let Ie=N===15?32:64;C.globalAlpha=.48;for(let Pe=0;Pe<j;Pe+=Ie){C.fillRect(0,Pe,j,N===8?3:2);for(let wt=-Ie;wt<j;wt+=Ie)C.fillRect(wt+Pe/Ie%2*(N===2?Ie/2:0),Pe,2,Ie)}}else if([4,5,6,7,10,11,12].includes(N)){let Ie=N===5?38:N===7?64:18;for(let Pe=0;Pe<Ie;Pe++){C.strokeStyle=Z,C.globalAlpha=.08+we()*.22,C.lineWidth=N===5?1+we()*8:1+we()*4;let wt=we()*j,Vt=N===5?.018:.009;C.beginPath();for(let at=0;at<=j;at+=8){let Ft=wt+Math.sin(at*Vt+Pe)*(N===6||N===7?4:12+Pe%5*3)+(N===4?at*.28:0);at===0?C.moveTo(at,Ft):C.lineTo(at,Ft)}C.stroke()}}else{C.globalAlpha=.27;for(let Ie=0;Ie<120;Ie++){let Pe=we()*j,wt=we()*j,Vt=2+we()*6;C.beginPath(),C.arc(Pe,wt,Vt,0,Math.PI*2),C.fill()}}if(N!==16)for(let Ie=0;Ie<4400;Ie++)C.globalAlpha=.05+we()*.1,C.fillStyle=we()>.5?Z:"#222324",C.fillRect(we()*j,we()*j,1+we()*4,1+we()*3);C.restore()}let X=new Set([0,2,4,5,8,15,16]),le=k.map(([C,N,Q,ue,Z,j],xe)=>{let we=X.has(xe)?512:256,Ie=_h(we,we,wt=>ee(wt,xe,we));Ie.wrapS=Ie.wrapT=wn;let Pe=new un({map:Ie,roughness:ue,metalness:Z,flatShading:!0,opacity:j,transparent:j<1,depthWrite:j===1});return Pe.name=C,Pe}),ge=le.map(C=>C.map.image),be=512,De=le.map(C=>new Xn({map:C.map,flatShading:!0,opacity:C.opacity,transparent:C.transparent,depthWrite:C.depthWrite})),$e={value:0},nt={value:.24},Ze={value:null},se={value:0};function q(){Ze.value?.dispose(),Ze.value=_h(512,512,(C,N)=>{C.fillStyle="#ffffff",C.fillRect(0,0,N,N);let Q=N/52,ue=N/64;for(let Z of ce){if(!Z.position||!Z.half||Z.position.y+Z.half.y<.22)continue;let j=(Z.position.x+26)*Q,xe=(Z.position.z+54)*ue,we=Math.min(55,Z.half.x*Q+5),Ie=Math.min(72,Z.half.z*ue+6);C.save(),C.translate(j+Z.half.y*Q*.2,xe+Z.half.y*ue*.24),C.scale(we,Ie);let Pe=C.createRadialGradient(0,0,.15,0,0,1);Pe.addColorStop(0,"rgba(22,37,65,.54)"),Pe.addColorStop(.58,"rgba(36,54,76,.29)"),Pe.addColorStop(1,"rgba(38,48,57,0)"),C.fillStyle=Pe,C.fillRect(-1,-1,2,2),C.restore()}})}for(let C of[...le,...De])C.onBeforeCompile=N=>{N.uniforms.uFocusAmount=$e,N.uniforms.uFocusRadius=nt,N.uniforms.uLabLightmap=Ze,N.uniforms.uLabBakedStrength=se,N.vertexShader=`varying vec3 vLabPosition;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),N.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <map_fragment>",`
        #ifdef USE_MAP
          float eccentricity=length(vViewPosition.xy)/max(.01,vViewPosition.z);
          float fade=smoothstep(uFocusRadius,uFocusRadius+.42,eccentricity);
          diffuseColor *= texture2D(map,vMapUv,fade*uFocusAmount);
        #endif
        if(uLabBakedStrength>.001){
          vec2 bakedUV=vec2((vLabPosition.x+26.)/52.,1.-(vLabPosition.z+54.)/64.);
          float floorWeight=1.-smoothstep(.03,2.8,max(vLabPosition.y,0.));
          diffuseColor.rgb*=mix(vec3(1.),texture2D(uLabLightmap,bakedUV).rgb,uLabBakedStrength*floorWeight);
        }
      `)},C.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let ce=[],F=[];function Y(C,N,Q,ue,Z,j,xe,we=0,Ie=0,Pe=1,wt=1,Vt=!1){let at=new fe(Vt?new We(Z,j,xe):xh(Z,j,xe),le[we]);at.position.set(N,Q,ue),at.rotation.x=Ie,at.receiveShadow=!0,at.castShadow=!0,n.add(at);let Ft=new v(Z/2,j/2,xe/2),$t={mesh:at,position:at.position,quaternion:at.quaternion,half:Ft,min:Ft.clone().negate(),friction:Pe,gravity:wt,name:C,type:we,shape:yo(Ft)};return ce.push($t),$t}let ye=lg.map(({name:C,bounds:N,type:Q=0,friction:ue=.78,gravity:Z=1})=>{let{xMin:j,xMax:xe,zMin:we,zMax:Ie}=N;return Y(C,(j+xe)/2,-.33,(we+Ie)/2,xe-j,.66,Ie-we,Q,0,ue,Z)});for(let C of Object.values(ug))for(let N of C)Y(...N);let{xMin:Be,xMax:L,zMin:re,zMax:ne}=rg;Y("But\xE9e arri\xE8re",0,1.35,re+.4,L-Be,2.7,.6,2),Y("But\xE9e ouest",Be+.3,1.05,(re+ne)/2,.6,2.1,ne-re,2),Y("But\xE9e est",L-.3,1.05,(re+ne)/2,.6,2.1,ne-re,2);let{xMin:te,xMax:ae,zMin:ve,zMax:me}=vo.hills.bounds,Me=ae-te,Xe=me-ve,He=16,P=64,w=new fn(Me,Xe,He,P).rotateX(-Math.PI/2).translate(te+Me/2,0,ve+Xe/2),G=w.attributes.uv;for(let C=0;C<G.count;C++)G.setXY(C,G.getX(C)*Me/2.6,G.getY(C)*Xe/2.6);let J=w.attributes.position,de;function ie(C){if(de===C)return;de=C;let N=de*.017;for(let Q=0;Q<J.count;Q++){let ue=J.getX(Q),Z=J.getZ(Q),j=Math.sin(Math.PI*Ce.clamp((ue-te)/Me,0,1)),xe=Math.min(1,(Z-ve)*.48,(me-Z)*.48),we=.93+.56*Math.sin(Z*.36+N)+.32*Math.cos(ue*.67+Z*.26+N*1.4)+.19*Math.sin(Z*.81+N*.67);J.setY(Q,Math.max(0,j*xe*we))}J.needsUpdate=!0,w.computeVertexNormals(),w.computeBoundingSphere()}ie(og);let Le=new fe(w,le[3]);Le.userData.editorAssetId="lab-hill",Le.receiveShadow=Le.castShadow=!0,n.add(Le);let Se=(C,N)=>{let Q=Ce.clamp((C-te)/Me*He,0,He-1e-6),ue=Ce.clamp((N-ve)/Xe*P,0,P-1e-6),Z=Math.floor(Q),j=Math.floor(ue),xe=Q-Z,we=ue-j,Ie=He+1,Pe=j*Ie+Z,wt=J.getY(Pe),Vt=J.getY(Pe+1),at=J.getY(Pe+Ie),Ft=J.getY(Pe+Ie+1);return xe+we<=1?wt+(Vt-wt)*xe+(at-wt)*we:Ft+(at-Ft)*(1-xe)+(Vt-Ft)*(1-we)};ce.push({heightfield:!0,mesh:Le,editorAssetId:"lab-hill",height:Se,...vo.hills.bounds,friction:.81,gravity:1});function Ue(C,N,Q,ue,Z=1.45){let j=_h(384,72,(we,Ie,Pe)=>{we.fillStyle="#202a32",we.fillRect(0,0,Ie,Pe),we.fillStyle=ue,we.font="bold 31px system-ui",we.textAlign="center",we.fillText(C,Ie/2,48,Ie-20)}),xe=new fe(new fn(3.2,.6),new Jt({map:j,side:tn}));xe.position.set(N,Z,Q),n.add(xe),F.push(xe)}for(let C of Object.values(vo)){Ue(C.name.toLocaleUpperCase("fr"),...C.sign,C.color);let{xMin:N,xMax:Q,zMin:ue,zMax:Z}=C.bounds,j=new ha(new lt().setFromPoints([new v(N,.025,ue),new v(Q,.025,ue),new v(Q,.025,Z),new v(N,.025,Z)]),new ti({color:C.color,transparent:!0,opacity:.72}));n.add(j),F.push(j)}Ue("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Ue("MURS HAUTS",3,-31,"#e8d2ff"),Ue("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Fe=new un({color:"#c8e6ed",metalness:1,roughness:.16}),pe=new fe(new ni(.54,2),Fe);pe.userData.editorAssetId="chrome-sphere",pe.position.set(Ss.x,Ss.y,Ss.z),pe.castShadow=!0,n.add(pe);let Te=k.map((C,N)=>{let{x:Q,z:ue}=hg(N);return Y("\xC9chantillon "+k[N][0],Q,.325,ue,.65,.65,.65,N,0,1,1,!0).mesh}),Ye=new _n(1,12).rotateX(-Math.PI/2),ke=new Jt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ee(C){let N=new fe(Ye,ke);return N.scale.setScalar(C),n.add(N),N}function it(C,N,Q,ue,Z,j,xe,we){let Ie=N>=3;e.shadowMap.enabled=Ie,d.castShadow=Ie,ke.opacity=N===2?.17:.11,se.value=we?.38+Q*.04:0;let Pe=N>=9?2048:N>=6?1024:N>=4?512:256;d.shadow.intensity=.45+N*.055,d.shadow.radius=.65+N*.12;let wt=13+N*1.2;Object.assign(d.shadow.camera,{left:-wt,right:wt,top:wt,bottom:-wt}),d.shadow.camera.updateProjectionMatrix(),d.shadow.mapSize.x!==Pe&&(d.shadow.map?.dispose(),d.shadow.map=null,d.shadow.mapSize.set(Pe,Pe)),y=Z,xe!==be&&(be=xe,le.forEach((at,Ft)=>{let $t=at.userData.texture??at.map,ki=X.has(Ft)?xe:Math.min(256,xe);if($t.image.width===ki)return;let Ns=document.createElement("canvas");Ns.width=Ns.height=ki;let Fs=Ns.getContext("2d");ki>512?ee(Fs,Ft,ki):Fs.drawImage(ge[Ft],0,0,ki,ki);let Vi=new Pi(Ns);Vi.colorSpace=$t.colorSpace,Vi.wrapS=$t.wrapS,Vi.wrapT=$t.wrapT,Vi.repeat.copy($t.repeat);for(let ss of[at,De[Ft]])ss.userData.texture=Vi,ss.map=Vi,ss.needsUpdate=!0;$t.dispose()}));let Vt=C>=4;for(let at of ce)at.mesh?.isMesh&&!at.zone&&(at.mesh.material=Vt?le[at.type]:De[at.type]);Le.material=Vt?le[3]:De[3];for(let at=0;at<Te.length;at++)Te[at].material=Vt?le[at]:De[at];le.forEach((at,Ft)=>{for(let $t of[at,De[Ft]])$t.userData.texture||($t.userData.texture=$t.map),$t.map=j?$t.userData.texture:null,$t.color.set(j?"#ffffff":k[Ft][1]),$t.needsUpdate=!0}),E=ue?.21+Q*.067:0,Fe.metalness=ue?.95:.1,Fe.roughness=ue?.13:.46,m=C>=2,U(x)}return{boxes:ce,floors:ye,probe:pe,display:Te,visual:it,shadow:Ee,setTimeOfDay:U,setEnvironment:B,centerSky:W,sunDirection:()=>I.clone(),centerShadows:H,lighting:[f,d,d.target,c],get hillSeed(){return de},setHillSeed:ie,bakeLightmap:q,mapMaterial:(C,N)=>N>=4?le[C]:De[C],builtObjects:[...ce.map(C=>C.mesh).filter(C=>C?.isObject3D),pe,...F],materials:[...le,...De],focus(C,N,Q){$e.value=C?N*.75:0,nt.value=.07+Q*.058}}}function fg(n,e,t){function i(c,h,u=.85){let f=c.getWorldPosition(new v),d=c.getWorldQuaternion(new pt);e.push({half:h,min:h.clone().negate(),position:f,quaternion:d,mesh:{position:f,quaternion:d},shape:yo(h),friction:u,gravity:1})}let s=[],r=[],o=new Xn({color:"#485d5d",flatShading:!0});function a([c,h],u,f){let d=new fe(new We(.095,.68,.11),o);d.position.set(c,.34,h+.46),d.castShadow=d.receiveShadow=!0,n.add(d),i(d,new v(.0475,.34,.055));let p=new dn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new fe(new We(.64,.36,.055),new Xn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Pi(g);_.colorSpace=mt;let M=new fe(new fn(.61,.095),new Jt({map:_}));M.position.set(0,.116,.03),p.add(M);let y=.592/f.length,E=f.map(([I,R],S)=>{let b=new fe(new We(y-.012,.155,.04),new Xn({color:"#478086"}));b.position.set(-.296+y*(S+.5),-.045,.046),p.add(b),s.push(b),b.userData.touchWidth=y-.012;let D=document.createElement("canvas");D.width=208,D.height=172;let U=new Pi(D);U.colorSpace=mt;let B=new fe(new fn(y-.017,.139),new Jt({map:U}));B.position.z=.0205,b.add(B);let W=-1/0;return b.userData.action=()=>{let H=performance.now();H-W<250||(W=H,R(),l(),b.position.z=.036,setTimeout(()=>{b.position.z=.046},115))},{label:I,context:D.getContext("2d"),texture:U}});function A(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let I of E){let R=I.context;R.fillStyle="#386269",R.fillRect(0,0,208,172),R.fillStyle="#fff2d5",R.textAlign="center",R.font="bold 27px system-ui";let S=(typeof I.label=="function"?I.label():I.label).split("|");S.forEach((b,D)=>R.fillText(b,104,(S.length>1?68:97)+D*37,188)),I.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(A)}function l(){for(let c of r)c()}return a(ka.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Mo[0])],["Boule",()=>t.spawn(1,Mo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Mo[0])],["Vider",t.clear]]),a(ka.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Mo[1])],["Sph\xE8re",()=>t.spawn(5,Mo[1])]]),a(ka.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(ka.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function vh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=pg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=pg(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function pg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var bh=0,xS=1,yS=new v,mg=new Aa,Nd=new xn,gg=new v,Mh=new In,Sh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new wh,this.unassigned=new wh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Fd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new v;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,yS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===bh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new v,t=new v,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,h;r=0,mg.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l){mg.closestPointToPoint(p.point,!0,gg);let x=gg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Nd.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Nd.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(Nd.distanceToPoint(h.point)<0){u.push(Mi.create(a,l,c),Mi.create(h,l,a),Mi.create(h,c,l),Mi.create(h,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge(d)),u[f+1].getEdge(1).setTwin(u[d+1].getEdge(0))}}else{u.push(Mi.create(a,c,l),Mi.create(h,a,l),Mi.create(h,l,c),Mi.create(h,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge((3-f)%3)),u[f+1].getEdge(0).setTwin(u[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(u[f]);for(let f=0,d=e.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===bh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=xS;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===bh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=Mi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Mi=class n{constructor(){this.normal=new v,this.midpoint=new v,this.area=0,this.constant=0,this.outside=null,this.mark=bh,this.edge=null}static create(e,t,i){let s=new n,r=new Va(e,s),o=new Va(t,s),a=new Va(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Mh.set(e.point,t.point,i.point),Mh.getNormal(this.normal),Mh.getMidpoint(this.midpoint),this.area=Mh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Va=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Fd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},wh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Qi=class extends lt{constructor(e=[]){super();let t=[],i=[],r=new Sh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var Nn=Math.PI*2,Th=.84,es=128;function Es(n){let e=new Uint8Array(es*es*4);for(let i=0;i<es;i++)for(let s=0;s<es;s++){let r=(s+.5)/es,o=(i+.5)/es,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Th,1),Math.min(o/Th,1),s,i),l=(s+i*es)*4;for(let c=0;c<3;c++)e[l+c]=Ce.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ei(e,es,es);return t.colorSpace=mt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=en,t.needsUpdate=!0,t}function hr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function rt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Ve(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Th,r.getY(l)*Th):r.setXY(l,.95,.95);return i.setAttribute("color",new At(a,3)),i}function As(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:vh(s),material:new un({vertexColors:!0,map:r,roughness:o,metalness:a})}}function xg(n,e,t){let i=n/2,s=e/2,r=new ji;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ws(n,e,t,i,s){return new Js(xg(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ts(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,f]=n[h];for(let d=0;d<=e;d++){let p=Nn*d/e,x=t(u,f,p,h);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(d/e,h/(n.length-1)),h===n.length-1||d===e)continue;let g=h*(e+1)+d,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new lt;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new v,c=new v;for(let h=0;h<n.length;h++){let u=h*(e+1),f=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Ga(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new v(0,s,0));continue}for(let r=0;r<e;r++){let o=Nn*r/e;t.push(new v(i*Math.sin(o),s,i*Math.cos(o)))}}return new Qi(t)}function _S(){let t=new ba(xg(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ce.clamp(i.getX(l)/.098+.5,0,1),h=Ce.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=Es((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Nn),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[rt(ws(.106,.207,.013,.011,.0019),8425890),rt(ws(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),rt(ws(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),rt(t,16777215,!0),rt(ws(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),rt(new We(.0036,.024,.004).translate(.055,.029,0),11714250),rt(new We(.0036,.015,.004).translate(-.055,.032,0),11385285),rt(new We(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(rt(new Ct(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(rt(new _n(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(rt(new _n(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Qi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new v(c,h,l))));return As("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function vS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Ts(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+u)/.014)**2))));return a*(1-.14*h**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Es((a,l,c,h)=>{let u=Nn*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(_=>Math.exp(-(((f-_+.035*Math.cos(u))/.009)**2)))),x=d**3*p,g=hr(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*x+m,76+24*d+70*x+m,24+11*d+52*x+m*.8]}),o=Ga([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return As("bread","Baguette de pain",.27,o,[rt(s,16777215,!0)],r,.9)}function MS(){let n=Es((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*hr(a,l)-(c&&(u||f)?35:0);return[p*.94,p,p*1.04]}),e=Ts([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ts([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[rt(e,16777215,!0),rt(t,11056059),rt(new Ct(.067,.067,.124,10).rotateX(Math.PI/2),9346214),rt(new Ct(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Nn*r/5;i.push(rt(new We(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ga([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return As("wheel","Roue",1.8,s,i,n,.64,.23)}function bS(){let n=Es((r,o,a,l)=>{let c=hr(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Nn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=Ts([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Tn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Nn*l/5;return new v(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new v(.166,-.027,.01),new v(.166,.053,-.01));let s=new Qi(i);return As("cup","Tasse",.39,s,[rt(e,16777215,!0),rt(t,15785922)],n,.37)}function SS(){let n=Ts([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Es((s,r,o,a)=>{let l=9*hr(o,a),c=11*Math.cos(s*Nn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Nn*48+s*Nn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Nn*4);return[h,h*1.13,h*1.24]}),t=[rt(n,16777215,!0),rt(new gs(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),rt(new _n(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),rt(new _n(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),rt(new Ct(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),rt(new _n(.008,12).translate(0,.035,.0336),15633202)],i=Ga([[.033,-.143],[.054,.133]],6);return As("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function wS(){let n=Ts([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Es((r,o,a,l)=>{let c=10*hr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(Nn*r*2));if(e[f]?.[u]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Nn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[rt(n,16777215,!0),rt(new _n(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),rt(new gs(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),rt(new _n(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ga([[.069,-.112],[.069,.109]],6);return As("soda","Canette de soda",.35,s,i,t,.42,.27)}function TS(){let n=Ts([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Es((s,r,o,a)=>{let l=15*hr(o,a),c=8*Math.cos(s*Nn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[rt(n,16777215,!0),rt(ws(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),rt(new _n(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Ga([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return As("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function ES(){let n=Es((s,r,o,a)=>{let l=8*hr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ts([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[rt(ws(.138,.22,.061,.016,.004),14788675),rt(ws(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),rt(new fn(.106,.174).translate(0,-.004,.0395),16777215,!0),rt(e,2502456),rt(new Ct(.014,.017,.016,10).translate(.04,.117,.001),2503482),rt(new We(.008,.047,.027).translate(-.072,.014,-.002),3028798),rt(new We(.006,.02,.019).translate(-.072,-.043,-.002),3950414),rt(new _n(.004,8).translate(.04,.066,.0397),15817792),rt(new _n(.004,8).translate(-.04,.066,.0397),7903100),rt(ws(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new v(s,l,o),new v(r,l,o),new v(r,l,a),new v(s,l,a)]);return As("radio","Talkie-walkie",.43,new Qi(i),t,n,.61,.08)}function yg(){return[_S(),vS(),MS(),bS(),SS(),wS(),TS(),ES()]}var AS=[0,1,2,3,4,5,7,8,9,10];function _g(n){cg.forEach(({x:e,z:t},i)=>n(AS[i],new v(e,.8,t)))}function vg(){let n=[["Cube",new We(.33,.33,.33),"#b76b50",0,1.35],["Boule",new ni(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ks(.29),"#d8ae53",0,1],["Brique",new We(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new We(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new ni(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Ba(t,s),material:new un({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:yo(t.computeBoundingBox()??t.boundingBox.getSize(new v).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of yg()){let s=Ba(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var Eh=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";Eh.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Eh.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Od=Object.freeze(Object.fromEntries(Eh.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),Mg=(n,e,t,i)=>Number.isFinite(n)?Ce.clamp(n,e,t):i;function CS(n,e){let t=Od[n];return{pivot:t.pivot.map((i,s)=>Mg(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Mg(e?.limit,0,150,t.limit)}}function bg(n){return Object.fromEntries(Eh.map(([e])=>[e,CS(e,n?.[e])]))}function Sg(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var wg=48,RS=3,PS=128,Tg=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),IS=(n,e,t)=>Math.max(e,Math.min(t,n)),DS=()=>structuredClone(Tg.shield),Ha=(n,e,t,i)=>Number.isFinite(n)?IS(n,t,i):e;function Ch(n){let e=n?.mode==="lathe"?Tg.bottle:DS(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=wg?n.points.map(o=>[Ha(o?.[0],0,-1.5,1.5),Ha(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Ha(n?.depth,e.depth,.025,1.5),bevel:Ha(n?.bevel,e.bevel,0,.15),segments:Math.round(Ha(n?.segments,32,RS,PS))}}function Eg(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Ah(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function LS(n,e,t,i){let s=Ah(n,e,t),r=Ah(n,e,i),o=Ah(t,i,n),a=Ah(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function US(n){let e=Ch(n),t=e.mode==="lathe"?e.points:Eg(e);if(t.length<3||t.length>wg*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&LS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Ag(n){let e=Ch(n),t=US(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([f,d])=>new he(Math.max(0,f),d));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new he(0,s[0].y)),s.at(-1).x>0&&s.push(new he(0,s.at(-1).y)),i=new Ma(s,e.segments);let r=[],o=i.attributes.position,a=new v,l=new v,c=new v,h=new v,u=i.index.array;for(let f=0;f<u.length;f+=3)a.fromBufferAttribute(o,u[f]),l.fromBufferAttribute(o,u[f+1]),c.fromBufferAttribute(o,u[f+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[f],u[f+1],u[f+2]);i.setIndex(r)}else{let s=Eg(e),r=new ji;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Js(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new At(new Float32Array(s*2),2))}return i}var Bd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Wa=null,NS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function ur(n){return typeof n=="string"&&NS.has(n.replace(/^custom-model-game-/,""))}function Rh(n){let e=n?.parts;return ur(n?.id)||ur(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>ur(t?.assetId))}function Rg(){if(Wa)return Wa;let n=vg(),e=Bd;return Wa=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Wa.set("chrome-sphere",{geometry:new ni(.54,2),material:new un({color:"#c8e6ed",metalness:1,roughness:.16})}),Wa}function Ph(n){return typeof n=="string"&&Rg().has(n)}function zd(n){return Rg().get(n)??null}function FS(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function Cg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[FS(e,n)]}}function kd(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>Cg(e,t)),Cg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var qd="gorilla-lab-models-v1",bo=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),OS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,BS=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Ig=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Hd=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),zS=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Xa=(n,e,t,i)=>Number.isFinite(n)?Ce.clamp(n,e,t):i;function Yd(n){return{gravity:Xa(n?.physics?.gravity,0,2.5,1),bounce:Xa(n?.physics?.bounce,0,1.65,1)}}function Dg(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Xa(n?.uv?.repeat,.01,100,1),angle:Xa(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Xa(n?.uv?.offset?.[t],-100,100,0))}}var kS=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),VS=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,GS=/^#[a-f\d]{6}$/i;function Vd(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Cs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ce.clamp(n[s],t,i):e)}function Pg(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var Wd=new Set(["box","sphere","capsule","convex"]);function HS(n){if(n?.mode==="box")return{mode:"box",center:Cs(n.center,0,-6,6),size:Cs(n.size,.5,.025,12)};let e=Math.round(Ce.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Wd.has(n.shape)?n.shape:"box",center:Cs(n.center,0,-6,6),size:Cs(n.size,.5,.025,12),rotation:Cs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Wd.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function dr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>bo.models||JSON.stringify(n).length>bo.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!Rh(i)).map(i=>{if(typeof i?.id!="string"||!VS.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>bo.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Vd(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:bg(i.avatarRig)}:{},...Ph(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:Object.fromEntries(Object.entries(kS).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:HS(i?.hitbox),...i.physics?{physics:Yd(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(s=>!ur(s?.assetId)).map((s,r)=>({name:Vd(s?.name,`Pi\xE8ce ${r+1}`),...Object.hasOwn(Od,s?.avatarJoint)?{avatarJoint:s.avatarJoint}:{},...Number.isInteger(s?.group)&&s.group>0&&s.group<=bo.parts?{group:s.group}:{},shape:s?.shape==="asset"&&Ph(s?.assetId)?"asset":Object.hasOwn(BS,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&Ph(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:Ch(s?.profile)}:{},position:Cs(s?.position,0,-3,3),rotation:Cs(s?.rotation,0,-360,360),scale:Cs(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&GS.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(zS,s?.zone)?{zone:s.zone}:{},...s?.zone==="trigger"&&typeof s?.notice?.text=="string"&&s.notice.text.trim()?{notice:{text:Vd(s.notice.text,"Message"),phase:s.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(Hd,s?.finish)?{finish:s.finish}:{},...s?.zone==="trigger"&&Pg(s.portal)?{portal:Pg(s.portal)}:{},...s?.uv?{uv:Dg(s)}:{},surface:Object.hasOwn(Ig,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=bo.textureBytes&&OS.test(s.texture)?s.texture:null}))}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&Sg(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function Lg(n){try{let e=(n??globalThis.localStorage)?.getItem(qd);if(e&&e.length<=bo.fileBytes)return dr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function WS(n){switch(n){case"tetrahedron":return new Ks(Math.sqrt(3)/2);case"sphere":return new si(.5,20,12);case"cylinder":return new Ct(.5,.5,1,20);case"cone":return new Zs(.5,1,20);case"torus":return new Tn(.365,.135,8,24);case"capsule":return new ms(.28,.44,6,16);case"diamond":return new ii(.5);default:return new We(1,1,1)}}var Ug=Object.keys(Ig),Yn=64,qa=4,Ng=2,Ui;function Fg(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Og(){if(Ui)return Ui;let n=Yn*qa,e=Yn*Ng,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Yn)*qa+Math.floor(s/Yn),o=Fg(Ug[r],s%Yn,i%Yn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ui=new ei(t,n,e),Ui.colorSpace=mt,Ui.magFilter=en,Ui.minFilter=An,Ui.generateMipmaps=!0,Ui.needsUpdate=!0,Ui}var Gd=new Map;function XS(n){if(Gd.has(n))return Gd.get(n);let e=new Uint8Array(Yn*Yn*4);for(let i=0;i<Yn;i++)for(let s=0;s<Yn;s++){let r=Fg(n,s,i),o=(i*Yn+s)*4;e.set([r,r,r,255],o)}let t=new ei(e,Yn,Yn);return t.colorSpace=mt,t.wrapS=t.wrapT=wn,t.magFilter=en,t.minFilter=An,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Gd.set(n,t),t}function Bg(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function qS(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=Dg(e),a=Ce.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:f}=n.attributes,d=new v,p=new v;for(let x=0;x<h.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){d.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let _=Math.abs(p.x),M=Math.abs(p.y),y=Math.abs(p.z);_>=M&&_>=y?(g=d.z,m=d.y):M>=y?(g=d.x,m=d.z):(g=d.x,m=d.y)}f.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Ih(n,e=new v(...n.scale)){let t=n.shape==="asset"?zd(n.assetId):null,i=n.shape==="custom"?Ag(n.profile):t?.geometry?.clone()??WS(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Oe(new Float32Array(s.attributes.position.count*2),2)),n.uv&&qS(s,n,e);let r=n.rotation.map(Ce.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new Ve(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=Ug.indexOf(n.surface),u=h%qa,f=Math.floor(h/qa),d=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&d?(l[p*3]=d.getX(p)*o.r,l[p*3+1]=d.getY(p)*o.g,l[p*3+2]=d.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(u+.05+c.getX(p)*.9)/qa,(f+.05+c.getY(p)*.9)/Ng);return s.setAttribute("color",new At(l,3)),s}function YS(n){let e=n?.shape==="asset"?zd(n.assetId):null,t=Hd[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new ri().load(n.texture);a.colorSpace=mt,a.wrapS=a.wrapT=wn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=wn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Ve(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??Hd.original;if(!n?.texture)return new un({vertexColors:!0,map:n?.uv?XS(n.surface):Og(),roughness:i,metalness:s});let r=new ri().load(n.texture);return r.colorSpace=mt,r.wrapS=r.wrapT=wn,new un({vertexColors:!0,map:r,roughness:i,metalness:s})}function Dh(n){return n?.parts?.some(Bg)?n.parts.map(YS):new un({vertexColors:!0,map:Og(),roughness:.68})}function Lh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ui&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Xd(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Ih(s);let r=new qt(...s.rotation.map(Ce.degToRad),"ZYX"),o=new v(...s.scale).multiply(new v(...[0,1,2].map(a=>new v().setComponent(a,1).applyEuler(r).multiply(e).length())));return Ih(s,o)}),i=vh(t,n.some(Bg));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function Uh(n,e=null){let t=Xd(n.parts),i=t.boundingBox.getSize(new v).max(new v(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Xd(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function Ya(n){let e=new sn;for(let t of n.parts??[]){let i=Ih(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new v,new v(1,1,1)),e}function So(n){return Ya(n).getSize(new v)}function zg(n){let e=Ya(n),t=e.getCenter(new v),i=e.getSize(new v),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Wd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ce.clamp(s.precision,8,96):48,center:r?new v(...s.center):t,size:r?new v(...s.size):i,rotation:r?new v(...s.rotation??[0,0,0]):new v,boundsCenter:t,boundsSize:i}}function ZS(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new v().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function jS(n,e=null){let t=zg(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new v(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,f)=>f!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new ms(l,c,Math.max(2,Math.round(i/8)),i):new si(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=Xd(n.parts),r=ZS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new Qi(r),a=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new We(1,1,1)}function kg(n,e=null){let t=zg(n),i=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5)),s=e?new v(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=jS(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Ce.degToRad(t.rotation.x)),a.rotateY(Ce.degToRad(t.rotation.y)),a.rotateZ(Ce.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Vg(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=Ya(n),i=t.getCenter(new v),s=t.getSize(new v).max(new v(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new v(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Ih(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new v).sub(i).multiply(r),size:l.getSize(new v).multiply(r).max(new v(.01,.01,.01))};return a.dispose(),[c]})}var Wg=512,Xg=1/2.6**2,Fh=1e4,ja=20,JS=1e6,Zd=1e4,KS=1e4,jd=10,Jd=10,$S=1e4,QS=16,wo=1e4,Gg=new WeakMap,bi=Ce.clamp,Si=Ce.lerp,Ja=n=>n*n*(3-2*n);function Mt(n,e,t,i){return Number.isFinite(n)?bi(n,e,t):i}function qg(n){if(!n)return null;let e=dr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var e1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Yg(n,e=QS){return Math.round(Mt(n,1,Wg,e))}function t1(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return Mt(n[e+"Density"],0,ja,0);let r=Mt(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return Mt(o/t,0,ja,0)}var n1=["grass","shrub","model"],i1=["keep","fit","stretch"],s1=/^#[a-f\d]{6}$/i,r1=20;function o1(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(Mt(n.minHeight,-300,300,-300),Mt(n.maxHeight,-300,300,300)),[s,r]=e(Mt(n.minX,0,100,0),Mt(n.maxX,0,100,100)),[o,a]=e(Mt(n.minZ,0,100,0),Mt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:Mt(n.maxSlope,0,90,90),yaw:Mt(n.yaw,-360,360,0),yawVariation:Mt(n.yawVariation,0,360,360)}}function a1(n){return n?{x:Mt(n.x,-256,256,0),z:Mt(n.z,-256,256,0),radius:Mt(n.radius,.1,512,5),blend:Mt(n.blend,0,1,.5)}:null}function Ka(n={}){let e=qg(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,jd).map(r=>s1.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:Mt(n.density,0,ja,1),colors:s,seed:Math.round(Mt(n.seed,0,2147483647,1)),size:Mt(n.size,.05,Zd,1),fit:i1.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:Mt(n.variation,0,Jd,0),...n.scatter?{scatter:o1(n.scatter)}:{}}}function l1(n,e){return Array.isArray(n.rules)?n.rules.slice(0,Fh).filter(t=>t&&typeof t=="object"&&n1.includes(t.kind)).filter(t=>t.kind!=="model"||qg(t.model)).map(Ka):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=t1(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ka({kind:t,model:a,density:o,seed:n.seed,size:Mt(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Rs(n={},e=1){let t=Yg(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(Mt(n?.seed,0,2147483647,1)),amplitude:Mt(n?.amplitude,0,1e4,0),frequency:Mt(n?.frequency,1e-5,100,.12),octaves:Math.round(Mt(n?.octaves,1,r1,3)),roughness:Mt(n?.roughness,0,1,.42),ridge:Mt(n?.ridge,0,1,0),edgeFade:Mt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:a1(n.reliefArea)}:{},rules:l1(n??{},e),textureDensity:Mt(n?.textureDensity,1e-4,$S,Xg),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&e1.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>Mt(s,-wo,wo,0)):null}}function Zg(n,e,t,i){let s=bi(t,0,e),r=bi(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,f=n[u],d=n[u+1],p=n[u+h],x=n[u+h+1];return l+c<=1?f+(d-f)*l+(p-f)*c:x+(p-x)*(1-l)+(d-x)*(1-c)}function Kd(n,e){let t=Yg(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>Zg(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function ai(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Nh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Ja(n-i),o=Ja(e-s),a=Si(ai(i,s,t),ai(i+1,s,t),r),l=Si(ai(i,s+1,t),ai(i+1,s+1,t),r);return 2*Si(a,l,o)-1}function To(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d}=i,p=Gg.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===f;if(x&&p.heights===d)return p;let g=s+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let y=0;y<=s;y++)for(let E=0;E<=s;E++){let A=(E/s-.5)*e,I=(y/s-.5)*t,R=1;if(f){let k=Math.hypot(A-f.x,I-f.z);if(k>=f.radius)continue;f.blend&&(R=Ja(Math.min(1,(f.radius-k)/(f.radius*f.blend))))}let S=A*a,b=I*a,D=0,U=1,B=0;for(let k=0;k<l;k++){let ee=Nh(S*2**k,b*2**k,r+k*13);D+=U*Si(ee,1-2*Math.abs(ee),h),B+=U,U*=c}let W=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(y/s-.5))*2)),u*2):1,H=l===3&&c===.42&&h===0&&u===0;m[y*g+E]=R*(H?o*(.62*Nh(S,b,r)+.26*Nh(S*2.03,b*2.03,r+13)+.12*Nh(S*4.13,b*4.13,r+37)):o*D/B*W)}let _=d?m.map((y,E)=>y+d[E]):m,M={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d,procedural:m,surface:_};return Gg.set(n,M),M}function Oh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Zg(o,i,(e/s+.5)*i,(t/r+.5)*i)}function Eo(n=0){return(Math.round(n/90)%4+4)%4*90}function jg(n){let e=Eo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Jg(n,e,t){let{cos:i,sin:s}=jg(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Za(n){return Eo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function Hg(n,e,t){return n.y+Oh(To(n),...Jg(n,e,t))}var c1=.25;function $d(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Za(n),s=Za(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let f=e[r]-u*s[a]/2,d=f-(n[r]+u*i[a]/2);Math.abs(d)<=c1&&(!t||Math.abs(d)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:f,delta:d})}}return t}function Kg(n,e,t=1.5){let i=$d(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:f}=i,d=n.terrain;if(Math.abs(Za(n)[a]-Za(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let R=e.terrain.detail,S=Math.ceil(d.detail/R)*R;S<=Wg&&(d=Kd(d,S))}let p={...n,[s]:n[s]+f,terrain:d},{detail:x,procedural:g,heights:m,surface:_}=To(p),M=m?.slice()??Array((x+1)**2).fill(0),y=Math.max(t,Za(p)[o]/x),{cos:E,sin:A}=jg(p),I=!1;for(let R=0;R<=x;R++)for(let S=0;S<=x;S++){let b=(S/x-.5)*p.w,D=(R/x-.5)*p.d,U=p.x+E*b+A*D,B=p.z-A*b+E*D,W=r==="x"?U:B;if(W<l-1e-6||W>c+1e-6)continue;let H=Math.max(0,h*(u-(s==="x"?U:B)));if(H>y)continue;let k=R*(x+1)+S,ee=s==="x"?Hg(e,u,B):Hg(e,U,u),X=Si(_[k],ee-p.y,Ja(1-H/y))-g[k];M[k]=bi(X,-wo,wo),I||=M[k]!==X}return{piece:{...p,terrain:{...d,heights:M}},clipped:I}}function h1(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(h+=s[f*r+d],u++);return h/u}function $g(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=To(n),{detail:l,w:c,d:h,surface:u,procedural:f}=a,[d,p]=Jg(n,e,t),x=bi(d,-c/2,c/2),g=bi(p,-h/2,h/2);if((d-x)**2+(p-g)**2>=s**2)return!1;let m=(d/c+.5)*l,_=(p/h+.5)*l,M=c/l,y=h/l,E=Math.max(0,Math.ceil(m-s/M)),A=Math.min(l,Math.floor(m+s/M)),I=Math.max(0,Math.ceil(_-s/y)),R=Math.min(l,Math.floor(_+s/y)),S=Number.isFinite(o)?o-n.y:Oh(a,d,p),b=l+1,D=a.heights?.slice()??new Array(b**2).fill(0),U=!1,B=!1;function W(H,k,ee){U=!0;let X=k*b+H,le=D[X],ge;if(i==="raise"||i==="lower")ge=le+(i==="raise"?1:-1)*r*ee;else{let be=i==="flatten"?S:h1(a,H,k);ge=Si(u[X],be,Math.min(1,r)*ee)-f[X]}ge=bi(ge,-wo,wo),!(Math.abs(ge-le)<1e-7)&&(D[X]=ge,B=!0)}for(let H=I;H<=R;H++)for(let k=E;k<=A;k++){let ee=Math.hypot((k-m)*M,(H-_)*y)/s;ee<1&&W(k,H,Ja(1-ee))}if(!U){let H=bi(m,0,l),k=bi(_,0,l),ee=Math.min(l-1,Math.floor(H)),X=Math.min(l-1,Math.floor(k)),le=H-ee,ge=k-X,be=le+ge<=1,De=be?1-le-ge:le+ge-1,$e=be?le:1-ge,nt=be?ge:1-le;if(De>=Math.max($e,nt)){let Ze=+!be;W(ee+Ze,X+Ze,1)}else $e>=nt?W(ee+1,X,1):W(ee,X+1,1)}return B&&(n.terrain.heights=D),B}function Qd(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(i.textureDensity??Xg),u=0;for(let d=0;d<=s;d++)for(let p=0;p<=s;p++){let x=d*r+p;o[3*x]=(p/s-.5)*e,o[3*x+2]=(d/s-.5)*t,a[2*x]=p/s*e*h,a[2*x+1]=(1-d/s)*t*h,d<s&&p<s&&(c.set([x,x+r,x+1,x+r+1,x+1,x+r],u),u+=6)}let f=new lt;return f.setAttribute("position",new At(o,3).setUsage(Fa)),f.setAttribute("uv",new At(a,2)),f.setIndex(new At(c,1)),u1(f,n),f}function u1(n,e){let{surface:t}=To(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function d1(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=n,l=bi((e/r+.5)*s,0,s),c=bi((t/o+.5)*s,0,s),h=Math.min(s-1,Math.floor(l)),u=Math.min(s-1,Math.floor(c)),f=s+1,d=u*f+h,p=l-h+c-u<=1,x=p?a[d+1]-a[d]:a[d+f+1]-a[d+f],g=p?a[d+f]-a[d]:a[d+f+1]-a[d+1];return i.set(-x*s/r,1,-g*s/o).normalize()}function f1(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new lt;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function p1(){return new ni(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function m1(n,e,t){if(e==="stretch")return new v().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function g1(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),h=[],u=new v;if(!c||!e.density)return{requested:0,positions:h,area:c};let f=Math.cos(Ce.degToRad(s.maxSlope)),d=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,E)=>{if(p){let A=n.y+Oh(t,y,E);if(A<s.minHeight||A>s.maxHeight)return!1}return!d||d1(t,y,E,u).y>=f-1e-7},g=1;if(d||p){let y=0,E=32;for(let A=0;A<E;A++)for(let I=0;I<E;I++)x(Si(r,o,(I+.5)/E),Si(a,l,(A+.5)/E))&&y++;g=y/E**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),M=d||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<M&&h.length<_;y++){let E=Si(r,o,ai(y,27,e.seed)),A=Si(a,l,ai(y,27,e.seed+1));x(E,A)&&h.push([E,A])}return{requested:m,positions:h,area:c*g}}function Qg(n){let e=new dn,t=To(n);e.userData.distribution=[];let i=JS,s=KS;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=g1(n,o,t,i),h=l?l.length:Math.min(a,i),u=o.collidable?Math.min(h,s):0;if(i-=h,s-=u,e.userData.distribution[r]={requested:a,count:h,area:c,collisions:u},!h)continue;let f=o.kind==="grass",d=o.model?m1(So(o.model),o.fit,o.size):null,p=o.model?Uh(o.model,d):f?f1():p1();d?p.scale(...d):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?Dh(o.model):new Xn({color:"#ffffff",side:f?tn:gi,flatShading:!0});if(f&&n.terrain.grassTexture){let M=new ri().load(n.terrain.grassTexture);M.colorSpace=mt,x.map=M,x.userData.ownTexture=!0}let g=new ca(p,x,h);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:u,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(Fa),g.receiveShadow=!0;let m=o.colors.map(M=>new Ve(M)),_=new Ve;for(let M=0;M<h;M++){let y=ai(M,41,o.seed)*(m.length-1),E=Math.floor(y);g.setColorAt(M,_.copy(m[E]).lerp(m[E+1],y-E))}e.add(g)}return x1(e,n),e}function x1(n,e){let t=To(e),i=new zt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(ai(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(ai(c,27,r+1)-.5)*.96*e.d;i.position.set(h,Oh(t,h,u),u),i.rotation.y=l?Ce.degToRad(l.yaw+ai(c,27,r+2)*l.yawVariation):ai(c,27,r+2)*Math.PI*2,i.scale.setScalar(Si(Math.max(.05,1-o),1+o,ai(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function e0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Lh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var n0=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],ef=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],$a={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},y1=16e6,Ao=512,Ni=1024,li=2e4,ts=512,Zt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,t0=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function an(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>y1)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>Ao)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+Ao+" pi\xE8ces.");let e=n.spawn??{},t=dl(n.environment),i=n.pieces.filter(s=>!ur(s?.sceneryId)&&!Rh(s?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:t0(n.name,56,"Ma map"),worldSize:Zt(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:Zt(e.x,-Ni,Ni,0),y:Zt(e.y,-li,li,.06),z:Zt(e.z,-Ni,Ni,3),yaw:Zt(e.yaw,-360,360,0)},pieces:i.map((s,r)=>{if(!s||typeof s!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let o=Zt(s.w,.05,ts,3),a=Zt(s.d,.05,ts,3),l=s.terrain&&typeof s.terrain=="object"?Rs(s.terrain,o*a):null,c=s.model?dr({version:1,models:[s.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:t0(s.name,36,"Pi\xE8ce "+(r+1)),...typeof s.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(s.sceneryId)?{sceneryId:s.sceneryId}:{},x:Zt(s.x,-Ni,Ni,0),y:Zt(s.y,-li,li,0),z:Zt(s.z,-Ni,Ni,0),w:o,h:Zt(s.h,.05,256,.5),d:a,pitch:l?0:Zt(s.pitch,-180,180,0),yaw:l?Eo(Zt(s.yaw,-360,360,0)):Zt(s.yaw,-360,360,0),roll:l?0:Zt(s.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(s.primitive)?s.primitive:"box",uvScale:Zt(s.uvScale,.05,100,1),uvOffsetX:Zt(s.uvOffsetX,-100,100,0),uvOffsetY:Zt(s.uvOffsetY,-100,100,0),uvRotation:Zt(s.uvRotation,-360,360,0),material:Math.round(Zt(s.material,0,16,0)),color:typeof s.color=="string"&&/^#[a-f0-9]{6}$/i.test(s.color)?s.color:"#ffffff",grip:Zt(s.grip,0,1.5,.8),gravity:Zt(s.gravity,.05,2.5,1),bounce:Zt(s.bounce,0,1.65,1),solid:s.solid!==!1,texture:typeof s.texture=="string"&&s.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(s.texture)?s.texture:null}})}}function i0(n){return an({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...ag,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new qt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function s0(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return an({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,$a.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,$a.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,$a.rubber)]})}function Zn(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function r0(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new qt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new v(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=d=>Math.round(d/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*f,h+=s.y*f,u+=s.z*f,![c,h,u].every(Number.isFinite)||Math.abs(c)>Ni||Math.abs(u)>Ni||Math.abs(h)>li?null:{...t,x:c,y:h,z:u}}var o0="gorilla-lab-custom-map-v1";function a0(n){let e=new Blob([JSON.stringify(an(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var _1=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function tf(){return Zn({name:"Miroir",sceneryId:"lab-mirror",x:bs.x,y:bs.y,z:bs.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function l0(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&_1.has(e)):!1:!0}var c0=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],nf=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},d0=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",Co=(n,e,t)=>Math.min(t,Math.max(e,n)),v1=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Bh=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function f0(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var p0="gorilla-lab-texture-shelf-v1";function M1(){try{let n=JSON.parse(localStorage.getItem(p0)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function h0(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=d0(t),r.fillRect(0,0,o,o);let a=f0(s),l=o/Math.max(4,2*Math.round(4*i)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(i),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<u;f++){let d=a()*o,p=a()*o,x=a(),g=a(),m=a();Bh(r,_=>{if(e==="rock"){let M=(4+x*22)*h;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let E=y*Math.PI/3+g,A=M*(.63+.3*Math.cos(E*2+g)+.25);_.lineTo(d+Math.cos(E)*A,p+Math.sin(E)*A*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let M=(1+x*x*12)*h,y=_.createRadialGradient(d,p,0,d,p,M);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(d-M,p-M,M*2,M*2)}else if(e==="grass"||e==="wood"){let M=e==="grass",y=(M?5+x*25:7+x*110)*h;_.strokeStyle=M?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*h,_.beginPath(),_.moveTo(d,p),M?_.quadraticCurveTo(d+y*(g-.5)*.55,p-y*.58,d+y*(g-.6),p-y):_.quadraticCurveTo(d+y*.5,p+10*(g-.5),d+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let M=(e==="sand"?.6+x*1.6:1+x*5)*h;_.fillRect(d,p,M,M*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let f=0;f<h;f++)Bh(r,d=>{d.beginPath(),d.arc(f*l+l/2,u*l+l/2,Co(l*.11,2,13),0,Math.PI*2),d.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let f=0;f<=o;f+=l){let d=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(f+d,u),r.lineTo(f+d,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var b1=`
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
`;function S1(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=b1,document.head.append(n)}async function u0(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function sf({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){S1();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
  <section class="texture-window" role="dialog" aria-modal="true" aria-labelledby="studio-title">
    <header class="texture-head">
      <div><small>GORILLA / SURFACE LAB</small><h2 id="studio-title">Atelier de textures</h2></div>
      <div class="texture-head-actions">
        <button data-cmd="undo" title="Annuler \xB7 Ctrl Z">\u21B6</button>
        <button data-cmd="redo" title="R\xE9tablir \xB7 Ctrl Maj Z">\u21B7</button>
        <button data-cmd="export" title="Exporter la texture en PNG">PNG \u2193</button>
        <button data-cmd="close" title="Fermer">\u2715</button>
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
            <label>R\xE9solution \xE0 l\u2019application<select data-field="resolution"><option value="128">128 \xD7 128</option><option value="256">256 \xD7 256</option><option value="512" selected>512 \xD7 512</option></select></label>
          </div>
          <div class="texture-setting-row">
            <label>Taille min. (%)<input type="number" min="1" max="200" value="12" data-field="minScale"></label>
            <label>Taille max. (%)<input type="number" min="1" max="200" value="28" data-field="maxScale"></label>
          </div>
          <div class="texture-setting-row">
            <label>Rotation max. (\xB0)<input type="number" min="0" max="360" value="360" data-field="rotation"></label>
            <label>Miroir al\xE9atoire<input type="checkbox" data-field="mirror"></label>
          </div>
          <button data-cmd="add-shape">+ Ajouter le dessin comme forme</button>
          <output data-shape-count>0 forme</output>
          <button data-cmd="generate">G\xE9n\xE9rer le motif</button>
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
            <label>Opacit\xE9<input type="range" min=".1" max="1" step=".05" value=".85" data-field="opacity"></label>
            <label>Duret\xE9<input type="range" min=".05" max="1" step=".05" value=".7" data-field="hardness"></label>
          </div>
        </div>
        <div class="texture-section">
          <strong>R\xC9P\xC9TITION SANS COUTURE</strong>
          <canvas class="texture-tile" width="256" height="128" aria-label="Aper\xE7u du motif r\xE9p\xE9t\xE9"></canvas>
          <small style="color:#a3b3bc">Les traits qui d\xE9passent un bord continuent sur le bord oppos\xE9.</small>
        </div>
        <div class="texture-section">
          <strong>BIBLIOTH\xC8QUE DE TEXTURES</strong>
          <label>Textures enregistr\xE9es<select data-field="shelf"></select></label>
          <div class="texture-setting-row">
            <button data-cmd="shelf-load">Charger</button>
            <button data-cmd="shelf-save">Enregistrer l\u2019aper\xE7u</button>
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
    <footer class="texture-foot"><span data-status>Peins, gomme ou r\xE9g\xE9n\xE8re, puis applique au mod\xE8le.</span>
      <div class="texture-foot-actions"><button data-cmd="cancel">Annuler</button>
      <button class="apply" data-cmd="apply">Appliquer la texture</button></div>
    </footer>
  </section>`,document.body.append(o);let a=F=>o.querySelector(F),l=a(".texture-canvas"),c=a(".texture-tile"),h=nf(),u=nf(),f={pattern:c0.some(([F])=>F===i)?i:"grain",base:d0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},d=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,M=!1,y=null,E="paint",A=null,I=null;a("#studio-title").textContent=t+" / SURFACE LAB";let R=[];a("[data-field=base]").value=f.base;for(let F of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+F+"]").addEventListener("input",Y=>{let ye=Y.target.value;f[F]=F==="seed"?Math.trunc(Co(Number(ye)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(F)?Number(ye):ye});let S=F=>{a("[data-status]").textContent=F},b=()=>{d.clearRect(0,0,512,512),d.drawImage(h,0,0),d.drawImage(u,0,0);let F=c.getContext("2d");F.clearRect(0,0,256,128);for(let Y=0;Y<2;Y++)for(let ye=0;ye<4;ye++)F.drawImage(l,ye*64,Y*64,64,64)},D=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:R}),U=F=>{p.putImageData(F.base,0,0),x.putImageData(F.top,0,0),R=F.shapes,H(),b()},B=()=>{I=null,g.push(D()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},W=(F,Y)=>{F.length&&(I=null,Y.push(D()),U(F.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},H=()=>{a("[data-shape-count]").textContent=R.length+" forme"+(R.length>1?"s":"")};a("[data-cmd=add-shape]").onclick=()=>{let F=x.getImageData(0,0,512,512).data,Y=512,ye=512,Be=-1,L=-1;for(let ne=0;ne<512;ne++)for(let te=0;te<512;te++)F[4*(ne*512+te)+3]&&(Y=Math.min(Y,te),ye=Math.min(ye,ne),Be=Math.max(Be,te),L=Math.max(L,ne));if(Be<0){S("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let re=document.createElement("canvas");re.width=Be-Y+1,re.height=L-ye+1,re.getContext("2d").drawImage(u,Y,ye,re.width,re.height,0,0,re.width,re.height),B(),R=[...R,re],x.clearRect(0,0,512,512),H(),b(),S("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let k=()=>{let F=(te,ae,ve)=>Co(Number(a("[data-field="+te+"]").value)||0,ae,ve),Y=Math.round(F("density",1,1e3)),ye=F("minScale",1,200)/100,Be=Math.max(ye,F("maxScale",1,200)/100),L=F("rotation",0,360)*Math.PI/180,re=a("[data-field=mirror]").checked,ne=f0(f.seed);B(),f.pattern="solid",h0(h,f);for(let te=0;te<Y&&R.length;te++){let ae=R[Math.floor(ne()*R.length)],ve=ne()*512,me=ne()*512,Me=ne()*L,Xe=512*(ye+ne()*(Be-ye))/Math.max(ae.width,ae.height),He=re&&ne()<.5?-1:1;Bh(p,P=>{P.translate(ve,me),P.rotate(Me),P.scale(He*Xe,Xe),P.drawImage(ae,-ae.width/2,-ae.height/2)})}b(),S(R.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},ee=F=>{let Y=l.getBoundingClientRect();return{x:(F.clientX-Y.left)/Y.width*512,y:(F.clientY-Y.top)/Y.height*512}},X=F=>{let Y=f.size/2,ye=f.opacity;Bh(x,Be=>{Be.save(),E==="erase"&&(Be.globalCompositeOperation="destination-out"),Be.globalAlpha=ye;let L=Co(f.hardness,.05,1);if(E==="stamp")Be.fillStyle=f.ink,Be.translate(F.x,F.y),Be.rotate(Math.PI/4),Be.fillRect(-Y*.8,-Y*.8,Y*1.6,Y*1.6);else{let re=Be.createRadialGradient(F.x,F.y,Y*L*.85,F.x,F.y,Y);if(E==="erase")re.addColorStop(0,"rgba(0,0,0,1)"),re.addColorStop(1,"rgba(0,0,0,0)");else{let ne=f.ink.match(/[\da-f]{2}/gi).map(te=>parseInt(te,16)).join(",");re.addColorStop(0,"rgba("+ne+",1)"),re.addColorStop(1,"rgba("+ne+",0)")}Be.fillStyle=re,Be.beginPath(),Be.arc(F.x,F.y,Y,0,2*Math.PI),Be.fill()}Be.restore()})},le=(F,Y)=>{let ye=Math.hypot(Y.x-F.x,Y.y-F.y),Be=Math.max(1,Math.ceil(ye/Math.max(2,f.size*.18)));for(let L=1;L<=Be;L++)X({x:F.x+(Y.x-F.x)*L/Be,y:F.y+(Y.y-F.y)*L/Be})},ge=F=>{let Y=d.getImageData(Math.floor(Co(F.x,0,511)),Math.floor(Co(F.y,0,511)),1,1).data;f.ink="#"+[...Y].slice(0,3).map(ye=>ye.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=f.ink,S("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",F=>{if(F.button!==0||M)return;let Y=ee(F);if(E==="pick"){ge(Y);return}F.preventDefault(),B(),M=!0,y=F.pointerId,A=Y,l.setPointerCapture(F.pointerId),X(Y),b()}),l.addEventListener("pointermove",F=>{if(!M||F.pointerId!==y)return;F.preventDefault();let Y=ee(F);E==="stamp"?X(Y):le(A,Y),A=Y,b()});let be=F=>{F.pointerId===y&&(M=!1,y=null,A=null,l.hasPointerCapture(F.pointerId)&&l.releasePointerCapture(F.pointerId))};l.addEventListener("pointerup",be),l.addEventListener("pointercancel",be);for(let F of o.querySelectorAll("[data-tool]"))F.onclick=()=>{E=F.dataset.tool,o.querySelectorAll("[data-tool]").forEach(Y=>Y.setAttribute("aria-pressed",String(Y===F)))};a("[data-cmd=generate]").onclick=k,a("[data-cmd=undo]").onclick=()=>W(g,m),a("[data-cmd=redo]").onclick=()=>W(m,g),a("[data-cmd=export]").onclick=()=>v1(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async F=>{let Y=F.target.files?.[0];if(F.target.value="",!!Y)try{if(!["image/png","image/jpeg","image/webp"].includes(Y.type))throw Error("Image PNG / JPG / WebP uniquement.");if(Y.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let ye=await createImageBitmap(Y);B(),p.clearRect(0,0,512,512),p.drawImage(ye,0,0,512,512),ye.close(),x.clearRect(0,0,512,512),b(),S("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(ye){S(ye.message)}});let De=F=>{!F&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",$e,!0),o.remove())},$e=F=>{if(F.key==="Escape"){F.preventDefault(),De(!1);return}(F.ctrlKey||F.metaKey)&&!F.target.closest("input,select")&&F.key.toLowerCase()==="z"&&(F.preventDefault(),F.stopImmediatePropagation(),F.shiftKey?W(m,g):W(g,m))};window.addEventListener("keydown",$e,!0),a("[data-cmd=close]").onclick=()=>De(!1),a("[data-cmd=cancel]").onclick=()=>De(!1);let nt=()=>{if(I?.recipe.resolution===f.resolution&&I.data.length<=s)return I.data;for(let F of[f.resolution,256,128].filter((Y,ye,Be)=>Y<=f.resolution&&Be.indexOf(Y)===ye)){let Y=document.createElement("canvas");Y.width=Y.height=F,Y.getContext("2d").drawImage(l,0,0,F,F);for(let ye of[.85,.72,.58]){let Be=Y.toDataURL("image/webp",ye);if(Be.length<=s)return Be}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},Ze=M1(),se=a("[data-field=shelf]");function q(F=""){se.replaceChildren(new Option("Choisir une texture",""),...Ze.map(ye=>new Option(ye.name,ye.id))),se.value=F;let Y=!!se.value;a("[data-cmd=shelf-load]").disabled=!Y,a("[data-cmd=shelf-remove]").disabled=!Y}function ce(F,Y){try{localStorage.setItem(p0,JSON.stringify(F))}catch{return S("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return Ze.splice(0,Ze.length,...F),q(Y),!0}return se.onchange=()=>q(se.value),a("[data-cmd=shelf-save]").onclick=()=>{let F=c0.find(([ye])=>ye===f.pattern)?.[1]??"Texture",Y=prompt("Nom de la texture",F)?.trim().slice(0,50);if(Y)try{let ye={id:crypto.randomUUID(),name:Y,data:nt()},{pattern:Be,base:L,scale:re,seed:ne,resolution:te}=f;ye.recipe={pattern:Be,base:L,scale:re,seed:ne,resolution:te},ce([...Ze,ye],ye.id)&&S("Texture disponible dans les deux ateliers.")}catch(ye){S(ye.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let F=Ze.find(Y=>Y.id===se.value);if(!(!F||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let Y=nf();await u0(F.data,Y),B(),p.clearRect(0,0,512,512),p.drawImage(Y,0,0),x.clearRect(0,0,512,512),Object.assign(f,F.recipe),I=F;for(let ye of["base","seed","resolution"])a("[data-field="+ye+"]").value=f[ye];b(),S("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(Y){S(Y.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{ce(Ze.filter(F=>F.id!==se.value),"")&&S("Texture retir\xE9e de la biblioth\xE8que.")},q(),a("[data-cmd=apply]").onclick=async()=>{let F=a("[data-cmd=apply]");F.disabled=!0;try{let Y=nt();await r(Y),_=!1,De(!0)}catch(Y){S(Y.message||"Impossible d\u2019appliquer la texture.")}finally{F.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,h0(h,f),b(),n&&u0(n,h).then(b).catch(()=>S("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>De(!1)}}var fr=new tr,Mn=new v,Ps=new v,kt=new pt,m0={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},rf={type:"change"},g0={type:"mouseDown",mode:null},x0={type:"mouseUp",mode:null},y0={type:"objectChange"},Hh=class extends nr{constructor(e,t=null){super(void 0,t);let i=new af(this);this._root=i;let s=new lf;this._gizmo=s,i.add(s);let r=new cf;this._plane=r,i.add(r);let o=this;function a(M,y){let E=y;Object.defineProperty(o,M,{get:function(){return E!==void 0?E:y},set:function(A){E!==A&&(E=A,r[M]=A,s[M]=A,o.dispatchEvent({type:M+"-changed",value:A}),o.dispatchEvent(rf))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new v,c=new v,h=new pt,u=new pt,f=new v,d=new pt,p=new v,x=new v,g=new v,m=0,_=new v;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",f),a("cameraQuaternion",d),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new pt,this._parentQuaternionInv=new pt,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new pt,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new pt,this._scaleStart=new v,this._getPointer=w1.bind(this),this._onPointerDown=E1.bind(this),this._onPointerHover=T1.bind(this),this._onPointerMove=A1.bind(this),this._onPointerUp=C1.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fr.setFromCamera(e,this.camera);let t=of(this._gizmo.picker[this.mode],fr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fr.setFromCamera(e,this.camera);let t=of(this._plane,fr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,g0.mode=this.mode,this.dispatchEvent(g0)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fr.setFromCamera(e,this.camera);let o=of(this._plane,fr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(kt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Mn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Mn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ps.set(a,a,a)}else Mn.copy(this.pointStart),Ps.copy(this.pointEnd),Mn.applyQuaternion(this._worldQuaternionInv),Ps.applyQuaternion(this._worldQuaternionInv),Ps.divide(Mn),t.search("X")===-1&&(Ps.x=1),t.search("Y")===-1&&(Ps.y=1),t.search("Z")===-1&&(Ps.z=1);s.scale.copy(this._scaleStart).multiply(Ps),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Mn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Mn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(m0[t]),Mn.copy(m0[t]),r==="local"&&Mn.applyQuaternion(this.worldQuaternion),Mn.cross(this.eye),Mn.length()===0?l=!0:this.rotationAngle=this._offset.dot(Mn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(rf),this.dispatchEvent(y0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(x0.mode=this.mode,this.dispatchEvent(x0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(rf),this.dispatchEvent(y0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function w1(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function T1(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function E1(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function A1(n){this.enabled&&this.pointerMove(this._getPointer(n))}function C1(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function of(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var zh=new qt,Ut=new v(0,1,0),_0=new v(0,0,0),v0=new ft,kh=new pt,Gh=new pt,Fi=new v,M0=new ft,tl=new v(1,0,0),pr=new v(0,1,0),nl=new v(0,0,1),Vh=new v,Qa=new v,el=new v,af=class extends zt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},lf=class extends zt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Jt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let d=e.clone();d.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};let x=new Ct(0,.04,.1,12);x.translate(0,.05,0);let g=new We(.08,.08,.08);g.translate(0,.04,0);let m=new lt;m.setAttribute("position",new Oe([0,0,0,1,0,0],3));let _=new Ct(.0075,.0075,.5,3);_.translate(0,.25,0);function M(H,k){let ee=new Tn(H,.0075,3,64,k*Math.PI*2);return ee.rotateY(Math.PI/2),ee.rotateX(Math.PI/2),ee}function y(){let H=new lt;return H.setAttribute("position",new Oe([0,0,0,1,1,1],3)),H}let E={X:[[new fe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(x,o),[0,.5,0]],[new fe(x,o),[0,-.5,0],[Math.PI,0,0]],[new fe(_,o)]],Z:[[new fe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new ii(.1,0),u),[0,0,0]]],XY:[[new fe(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new fe(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new Ct(.2,0,.6,4),i),[0,.3,0]],[new fe(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new ii(.2,0),i)]],XY:[[new fe(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new fe(new ii(.01,2),s),null,null,null,"helper"]],END:[[new fe(new ii(.01,2),s),null,null,null,"helper"]],DELTA:[[new Ln(y(),s),null,null,null,"helper"]],X:[[new Ln(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ln(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ln(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R={XYZE:[[new fe(M(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new fe(M(.5,.5),r)]],Y:[[new fe(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new fe(M(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Ln(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new fe(new si(.25,10,8),i)]],X:[[new fe(new Tn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new Tn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new Tn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new Tn(.75,.1,2,24),i)]]},D={X:[[new fe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(_,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(g,o),[0,.5,0]],[new fe(_,o)],[new fe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(_,a),[0,0,0],[Math.PI/2,0,0]],[new fe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new We(.1,.1,.1),u)]]},U={X:[[new fe(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new Ct(.2,0,.6,4),i),[0,.3,0]],[new fe(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new We(.2,.2,.2),i),[0,0,0]]]},B={X:[[new Ln(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ln(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ln(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(H){let k=new zt;for(let ee in H)for(let X=H[ee].length;X--;){let le=H[ee][X][0].clone(),ge=H[ee][X][1],be=H[ee][X][2],De=H[ee][X][3],$e=H[ee][X][4];le.name=ee,le.tag=$e,ge&&le.position.set(ge[0],ge[1],ge[2]),be&&le.rotation.set(be[0],be[1],be[2]),De&&le.scale.set(De[0],De[1],De[2]),le.updateMatrix();let nt=le.geometry.clone();nt.applyMatrix4(le.matrix),le.geometry=nt,le.renderOrder=1/0,le.position.set(0,0,0),le.rotation.set(0,0,0),le.scale.set(1,1,1),k.add(le)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(E)),this.add(this.gizmo.rotate=W(R)),this.add(this.gizmo.scale=W(D)),this.add(this.picker.translate=W(A)),this.add(this.picker.rotate=W(b)),this.add(this.picker.scale=W(U)),this.add(this.helper.translate=W(I)),this.add(this.helper.rotate=W(S)),this.add(this.helper.scale=W(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Gh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(kt.setFromEuler(zh.set(0,0,0)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(kt.setFromEuler(zh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(kt.setFromEuler(zh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(nl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(kt.setFromEuler(zh.set(0,Math.PI/2,0)),Ut.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(v0.lookAt(_0,Ut,pr)),o.quaternion.multiply(kt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Mn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Mn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Mn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ut.copy(nl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ut.copy(nl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(kh.copy(i),Ut.copy(this.eye).applyQuaternion(kt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(v0.lookAt(this.eye,_0,pr)),o.name==="X"&&(kt.setFromAxisAngle(tl,Math.atan2(-Ut.y,Ut.z)),kt.multiplyQuaternions(kh,kt),o.quaternion.copy(kt)),o.name==="Y"&&(kt.setFromAxisAngle(pr,Math.atan2(Ut.x,Ut.z)),kt.multiplyQuaternions(kh,kt),o.quaternion.copy(kt)),o.name==="Z"&&(kt.setFromAxisAngle(nl,Math.atan2(Ut.y,Ut.x)),kt.multiplyQuaternions(kh,kt),o.quaternion.copy(kt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},cf=class extends fe{constructor(){super(new fn(1e5,1e5,2,2),new Jt({visible:!1,wireframe:!0,side:tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Vh.copy(tl).applyQuaternion(t==="local"?this.worldQuaternion:Gh),Qa.copy(pr).applyQuaternion(t==="local"?this.worldQuaternion:Gh),el.copy(nl).applyQuaternion(t==="local"?this.worldQuaternion:Gh),Ut.copy(Qa),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ut.copy(this.eye).cross(Vh),Fi.copy(Vh).cross(Ut);break;case"Y":Ut.copy(this.eye).cross(Qa),Fi.copy(Qa).cross(Ut);break;case"Z":Ut.copy(this.eye).cross(el),Fi.copy(el).cross(Ut);break;case"XY":Fi.copy(el);break;case"YZ":Fi.copy(Vh);break;case"XZ":Ut.copy(el),Fi.copy(Qa);break;case"XYZ":case"E":Fi.set(0,0,0);break}break;case"rotate":default:Fi.set(0,0,0)}Fi.length()===0?this.quaternion.copy(this.cameraQuaternion):(M0.lookAt(Mn.set(0,0,0),Fi,Ut),this.quaternion.setFromRotationMatrix(M0)),super.updateMatrixWorld(e)}};function b0(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function S0(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new v(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new qt(Ce.degToRad(n.pitch),Ce.degToRad(n.yaw),Ce.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var w0={type:"change"},uf={type:"start"},E0={type:"end"},Wh=new ps,T0=new xn,R1=Math.cos(70*Ce.DEG2RAD),ln=new v,Fn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hf=1e-6,Xh=class extends nr{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new pt,this._lastTargetPosition=new v,this._quat=new pt().setFromUnitVectors(e.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new v,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new v,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I1.bind(this),this._onPointerDown=P1.bind(this),this._onPointerUp=D1.bind(this),this._onContextMenu=z1.bind(this),this._onMouseWheel=N1.bind(this),this._onKeyDown=F1.bind(this),this._onTouchStart=O1.bind(this),this._onTouchMove=B1.bind(this),this._onMouseDown=L1.bind(this),this._onMouseMove=U1.bind(this),this._interceptControlDown=k1.bind(this),this._interceptControlUp=V1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(w0),this.update(),this.state=It.NONE}update(e=null){let t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new v(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new v(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wh.origin.copy(this.object.position),Wh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wh.direction))<R1?this.object.lookAt(this.target):(T0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wh.intersectPlane(T0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hf||this._lastTargetPosition.distanceToSquared(this.target)>hf?(this.dispatchEvent(w0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function P1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function I1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function D1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E0),this.state=It.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function L1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case oi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case oi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(uf)}function U1(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function N1(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(uf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(E0))}function F1(n){this.enabled!==!1&&this._handleKeyDown(n)}function O1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(uf)}function B1(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function z1(n){this.enabled!==!1&&n.preventDefault()}function k1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var O=n=>document.getElementById(n),L0=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],U0=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Jh=[...document.querySelectorAll(".tool")],N0="gorilla-lab-editor-draft",ns=Lg(localStorage),G1=kd(),Rn=[...new Map([...G1,...ns.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function F0(n){let e=n??O("model-library").value;O("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Rn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Rn.some(t=>t.id===e)?O("model-library").value=e:Rn.length===1&&(O("model-library").value=Rn[0].id),O("place-model").disabled=!Rn.length}var O0=new URLSearchParams(location.search),gf=O0.get("model"),xf="gorilla-lab-edit-map-model";F0(gf);function gr(){return Rn.find(n=>n.id===O("model-library").value)}function B0(){let n=gr();if(!n)return null;let e=So(n);return Zn({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Ce.clamp(e.x,.2,64),h:Ce.clamp(e.y,.12,36),d:Ce.clamp(e.z,.2,64),...Yd(n),color:"#ffffff",solid:n.properties.collidable!==!1})}O("model-library").addEventListener("change",()=>{Je==="model"&&is(null),Nf()});var df={block:Zn({w:1,h:1,d:1}),ramp:Zn({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:Zn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Rs({amplitude:.7,grassDensity:1.7})}),wall:Zn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},wf={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},oe,gt=-1,Je="move",_t=null,jn=null,il=[],Is=null,jh=[];function Ti(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:Je,selected:gt,...e};jh.push(i),jh.length>100&&jh.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=st(),e=Fo.info.render;return{version:"R39",map:{name:oe.name,pieces:oe.pieces.length},tool:Je,selected:gt,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[Kt.width,Kt.height],render:{...e},events:[...jh]}};window.addEventListener("error",n=>{n.message&&Ti("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Ti("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Ds=[],Kt=O("preview"),ot=O("plan"),ut=ot.getContext("2d");function H1(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[O("shape-preset").value]??n.slab;return Zn({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(O("shape-preset").value)?O("shape-preset").value:"box"})}var W1=O("editor-views");function cl(){W1.dataset.layout=O("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",O("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",O("sidebar-width").value+"px"),requestAnimationFrame(()=>{iu(),su()})}for(let n of["layout-mode","view-split","sidebar-width"])O(n).addEventListener("input",cl);O("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),cl()};var yf=O("workspace-fullscreen");yf.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ht("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;yf.setAttribute("aria-pressed",String(n)),yf.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{iu(),su()})});O("focus-3d").onclick=()=>{O("layout-mode").value="only-3d",cl()};O("focus-plan").onclick=()=>{O("layout-mode").value="only-plan",cl()};function X1(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(q,ce,F)=>{let Y=document.createElement(q);return ce&&(Y.className=ce),F!==void 0&&(Y.textContent=F),Y},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let q of Jh){let ce=q.dataset.tool,F=q.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[ce]){let Y=t("div","rail-divider");Y.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[ce]],i.append(Y)}q.classList.add("rail-tool"),q.title=F+" \xB7 "+(wf[ce]??""),q.setAttribute("aria-label",F),q.replaceChildren(t("span","rail-glyph",s[ce]??"\u25A1"),t("span","rail-caption",F==="Redimensionner"?"\xC9chelle":F==="S\xE9lectionner"?"S\xE9lect.":F==="D\xE9placer"?"D\xE9placer":F==="Atelier"?"Mod\xE8le":F)),i.append(q)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=O("shape-preset").closest("label"),h=O("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let f=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");f.id="model-place-action",f.type="button",o.append(f);let d=t("button","delete-library-model","Supprimer de la biblioth\xE8que");d.type="button",d.id="delete-library-model",d.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(d),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=O("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let M=t("span","active-selection","Aucune s\xE9lection");M.id="active-selection",_.after(M);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let E=t("div","precision-options"),A=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let q of A){let ce=O(q);ce&&E.append(ce.closest("label"))}y.append(E),g.append(y);let I=q=>{if(q==="close"){o.hidden=!0;return}let ce=q==="model";o.hidden=!1,o.dataset.mode=q,a.textContent=ce?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!ce,c.hidden=ce,f.hidden=!ce,d.hidden=!ce,u&&(u.hidden=!ce),p.textContent=ce?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!ce,x.textContent=ce?Rn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let F=gr();f.disabled=!F,f.textContent=F?"\u2B21 Placer \xAB "+F.name+" \xBB":"Aucun mod\xE8le \xE0 placer",d.disabled=!F||!ns.models.some(ye=>ye.id===F.id),u&&(u.href="./model-editor.html"+(F?F.assetId&&F.id==="custom-model-game-"+F.assetId?"?asset="+encodeURIComponent(F.assetId):"?model="+encodeURIComponent(F.id):"")),O(ce?"model-library":"shape-preset").focus({preventScroll:!0})};f.onclick=()=>{gr()&&(zi("model"),I("close"),Kt.focus({preventScroll:!0}),ht("Clique dans la sc\xE8ne pour placer \xAB "+gr().name+" \xBB."))},d.onclick=()=>{let q=gr();if(!(!q||!ns.models.some(ce=>ce.id===q.id))&&confirm("Supprimer d\xE9finitivement \xAB "+q.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let ce=dr({...ns,models:ns.models.filter(Y=>Y.id!==q.id),avatarId:ns.avatarId===q.id?null:ns.avatarId});localStorage.setItem(qd,JSON.stringify(ce)),Object.assign(ns,ce);let F=Rn.findIndex(Y=>Y.id===q.id);F>=0&&Rn.splice(F,1),F0(),Je==="model"&&!Rn.length&&zi("move"),is(null),Nf(),I("model"),ht("\xAB "+q.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(ce){ht("Suppression impossible : "+(ce.message||"stockage local indisponible"))}},O("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&I("model")});for(let q of["model","preset"])Jh.find(F=>F.dataset.tool===q)?.addEventListener("click",()=>I(q));window.addEventListener("pointerdown",q=>{!o.hidden&&!o.contains(q.target)&&!q.target.closest(".rail-tool")&&I("close")}),window.addEventListener("keydown",q=>{q.key==="Escape"&&I("close")});let R=t("section","outliner");R.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),R.append(S);let b=e.querySelector("#pieces").closest(".inspector-section");b.id="outline-content",R.append(b);let D=t("section","property-pane"),U=t("nav","inspector-tabs");U.setAttribute("aria-label","Propri\xE9t\xE9s");let B=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[q,ce]of B){let F=t("button","inspector-tab",ce);F.type="button",F.dataset.tab=q,F.setAttribute("aria-pressed",String(q==="object")),U.append(F)}let W=t("div","property-content");W.id="property-content";let H=O("piece-inspector").closest(".inspector-section");H.id="object-section";let k=H.querySelector("#surface").closest("details");k.id="surface-controls";let ee=t("section");ee.id="collision-options",ee.append(t("h3","","Collisions de la pi\xE8ce")),ee.append(H.querySelector("#p-solid").closest("label"),O("debug-controls"));let X=t("section");X.id="behavior-options";let le=t("div","fields");for(let q of["surface","p-grip","p-gravity","p-bounce"])le.append(k.querySelector("#"+q).closest("label"));X.append(t("h3","","Propri\xE9t\xE9s physiques")),X.append(le,H.querySelector("#model-object-controls"));let ge=t("section");ge.id="publish-options";for(let[q,ce,F]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let Y=t("div","piece-actions"),ye=t("button","",ce);ye.type="button",ye.addEventListener("click",()=>O(q).click()),Y.append(ye),ge.append(t("h3","",F),Y)}W.append(H,ee,X,ge);let be=t("section","scene-options");be.id="scene-options",be.append(t("h2","","Param\xE8tres de carte"));let De=O("map-name").closest("label"),$e=O("map-world-size").closest(".fields"),nt=O("draft-status");be.append(De,$e,nt);let Ze=[...e.children].filter(q=>q.tagName==="DETAILS");for(let q of Ze)be.append(q);W.append(be),D.append(U,W),e.replaceChildren(R,D);let se=q=>{let ce=oe?.pieces?.[gt];["terrain","props"].includes(q)&&!ce?.terrain&&(q="object"),["material","behavior"].includes(q)&&!ce&&(q="object"),e.dataset.tab=q;for(let F of U.querySelectorAll("button"))F.setAttribute("aria-pressed",String(F.dataset.tab===q)),F.disabled=["terrain","props"].includes(F.dataset.tab)&&!ce?.terrain;q==="terrain"&&(O("terrain-controls").open=!0),q==="material"&&(k.open=!0),W.scrollTop=0};for(let q of U.querySelectorAll("button"))q.addEventListener("click",()=>se(q.dataset.tab));window.setInspectorTab=se,se("object")}X1();var Rt={scale:10,cx:0,cz:-6,width:30,height:40},Fo=new mh({canvas:Kt,antialias:!0});Fo.setPixelRatio(Math.min(devicePixelRatio,1.5));Kt.addEventListener("webglcontextlost",()=>Ti("contexte WebGL perdu",{},"warn"));var Nt=new gn(52,1,.1,640);Nt.position.set(16,15,19);var Dt=new Xh(Nt,Kt);Dt.target.set(0,0,-5);Dt.mouseButtons.LEFT=null;Dt.mouseButtons.RIGHT=oi.ROTATE;Dt.mouseButtons.MIDDLE=oi.PAN;Dt.maxDistance=580;Dt.maxPolarAngle=Math.PI-.035;var cn=new Kr,z0=new Ve("#8fb6c6");cn.background=z0;var k0=new Qs("#f0f5ff","#8e775c",2.6);cn.add(k0);var Tf=new er("#fff1d2",1.8);Tf.position.set(-9,18,6);cn.add(Tf);var Oi=new Kr;Oi.fog=new qs("#a6d4ea",55,135);var zn=dg(Oi,Fo);zn.probe.userData.editorAssetId="chrome-sphere";var K2=fg(Oi,zn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),q1=new Map(kd().map(n=>[n.assetId,n]));function A0(n,e,t=null,i=null){let s=structuredClone(t??q1.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=Ya(s),o=r.getSize(new v),a=r.getCenter(new v);return Zn({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Ef=()=>{let n=i0(zn.boxes),e=zn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let f=t+u%(o+1)/o*a,d=s+Math.floor(u/(o+1))/o*l;return e.height(f,d)});n.pieces.push(Zn({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:Rs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(tf()),_g((t,i)=>{let s=Bd[t];s&&n.pieces.push(A0(s,i))}),n.pieces.push(A0("chrome-sphere",new v(Ss.x,Ss.y,Ss.z))),an(n)};oe=Ef();var Af=new fe(new We(1.8,2.03,.1),new un({color:"#8daebc",metalness:.9,roughness:.12}));Af.position.set(bs.x,bs.y,bs.z);Af.userData.editorAssetId="lab-mirror";Oi.add(Af);var Y1=zn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);Y1.forEach(n=>n.mesh.removeFromParent());var Kh=new dn;Kh.add(...Oi.children);cn.add(Kh,...zn.lighting);var _r=zn.boxes.find(n=>n.heightfield).mesh;_r.userData.editorAssetId="lab-hill";zn.visual(7,0,7,!0,!0,!0,512,!1);var Cf=[...document.querySelectorAll("[data-env]")],Ro=O("environment-status"),Do=new Ca(60,60,"#d7e2e5","#5e7b8a");Do.material.transparent=!0;Do.material.opacity=.35;cn.add(Do);var vt=new dn;cn.add(vt);var Ke=new Hh(Nt,Kt);Ke.setSize(.9);Ke.setRotationSnap(Ce.degToRad(5));Ke.enabled=!1;cn.add(Ke.getHelper());var Rf=new Set(["translate","rotate","scale"]),Ls=null,On=null,Pf=!1,sl=null,qh=!1,V0=()=>Number(O("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...O(n).options].some(t=>t.value===e)&&(O(n).value=e)}catch{}O(n).onchange=()=>{On=null;try{localStorage.setItem("gorilla-lab-"+n,O(n).value)}catch{}}}var xr=new Map;try{O("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}O("magnet").onchange=()=>{On=null,xr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",O("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{Pf=e.altKey});window.addEventListener("blur",()=>{Pf=!1,On=null});function G0(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/al())*al();if(i||!O("magnet").checked||!n.solid||n.terrain)return On=null,s;let r=V0(),o=O("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new qt(...[p.pitch,p.yaw,p.roll??0].map(Ce.degToRad),"YXZ"),g=new ft().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of oe.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,M=m.flatMap(y=>t.includes(y)&&_(m.find(E=>E!==y))?[-1,1].flatMap(E=>[-1,1].map(A=>{let I=p[y]+E*x[y]-A*c[y];return{key:y,value:I,distance:Math.abs(e[y]-I)}})):[]).sort((y,E)=>y.distance-E.distance)[0];if(!(o?!M||M.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let E=p[g]+y*(c[g]+x[g]),A=oe.pieces.indexOf(p)+":"+g+":"+y;h.push({key:A,axis:g,value:E,edge:o?M:null,distance:Math.max(Math.abs(E-e[g]),o?M.distance:0)})}}}let u=h.find(p=>p.key===On),f=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return f(u),s;On&&(xr.set(On,(xr.get(On)??0)+1),On=null);let d=h.filter(p=>p.distance<=r&&(xr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(d)f(d),On=d.key;else for(let p of h)p.distance<=r&&(xr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var rl=new We(1,1,1),Z1=Ud(),j1=new ri,$h=.025,J1=new gs(.24,.36,40).rotateX(-Math.PI/2),H0=new Jt({color:"#ffcd63",side:tn}),Bn=new fe(J1,H0),W0=new fe(new fn(.12,.2).rotateX(-Math.PI/2),H0);W0.position.set(0,0,-.39);Bn.add(W0);cn.add(Bn);var yr=new fe(rl,new Jt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Po=new fe(new si(.055,10,8),new Jt({color:"#ffc85a",depthTest:!1}));Po.visible=!1;Po.renderOrder=20;cn.add(Po);var ol=new fe(Bn.geometry,new Jt({color:"#ffe084",side:tn,opacity:.65,transparent:!0,depthWrite:!1}));yr.visible=ol.visible=!1;cn.add(yr,ol);var Us=new tr,nu=new v(0,1,0),C0=new xn(nu,0),K1=new tt,wi=null,ff=!1;function nn(){ff||(ff=!0,requestAnimationFrame(()=>{ff=!1,zn.centerSky(Nt.position),Fo.render(cn,Nt),rx()}))}function iu(){let n=Kt.clientWidth||1,e=Kt.clientHeight||1;Fo.setSize(n,e,!1),Nt.aspect=n/e,Nt.updateProjectionMatrix(),nn()}function su(){let n=Math.max(1,ot.clientWidth),e=Math.max(1,ot.clientHeight);n===ot.width&&e===ot.height||(ot.width=n,ot.height=e,If(),hi())}new ResizeObserver(iu).observe(Kt);new ResizeObserver(su).observe(ot);Dt.addEventListener("change",nn);Dt.addEventListener("start",()=>is(null));function If(){Rt.scale=Math.min(ot.width/Rt.width,ot.height/Rt.height)}function Qh(n,e){return[ot.width/2+(n-Rt.cx)*Rt.scale,ot.height/2+(e-Rt.cz)*Rt.scale]}function _f(n){let e=ot.getBoundingClientRect();return{x:((n.clientX-e.left)*ot.width/e.width-ot.width/2)/Rt.scale+Rt.cx,z:((n.clientY-e.top)*ot.height/e.height-ot.height/2)/Rt.scale+Rt.cz}}function R0(n,e,t,i,s){let[r,o]=Qh(n.x,n.z),a=Ce.degToRad(n.pitch),l=Ce.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);ut.save(),ut.translate(r,o),ut.rotate(-Ce.degToRad(n.yaw));let u=c*Rt.scale,f=h*Rt.scale;ut.globalAlpha=s,ut.fillStyle=e,ut.fillRect(-u/2,-f/2,u,f),ut.globalAlpha=1,ut.strokeStyle=t,ut.lineWidth=i,ut.strokeRect(-u/2,-f/2,u,f),ut.restore()}function P0(n,e){let[t,i]=Qh(n.x,n.z);ut.save(),ut.translate(t,i),ut.rotate(Ce.degToRad(-n.yaw)),ut.strokeStyle=e?"#fff0bb":"#ffd16e",ut.lineWidth=2,ut.beginPath(),ut.arc(0,0,6,0,Math.PI*2),ut.moveTo(0,-6),ut.lineTo(0,-11),ut.stroke(),ut.restore()}function hi(){ut.fillStyle="#192e3a",ut.fillRect(0,0,ot.width,ot.height),ut.strokeStyle="#37505f",ut.lineWidth=1;let n=Rt.scale<1?25:Rt.scale<4?10:Rt.scale<12?5:1,e=(oe.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Qh(r,r);o>=0&&o<=ot.width&&(ut.beginPath(),ut.moveTo(o,0),ut.lineTo(o,ot.height),ut.stroke()),a>=0&&a<=ot.height&&(ut.beginPath(),ut.moveTo(0,a),ut.lineTo(ot.width,a),ut.stroke())}let[t,i]=Qh(-e,-e);ut.strokeStyle="#ffda9077",ut.lineWidth=2,ut.strokeRect(t,i,e*2*Rt.scale,e*2*Rt.scale);let s=oe.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?ef[r.material]:r.color);R0(r,a,o===gt?"#ffe095":"#a4bac7",o===gt?2:1,r.solid?.86:.38)}P0(oe.spawn,!1),jn&&(Je==="spawn"?P0(jn,!0):R0(jn,"#8ee7fc","#afefff",2,.45))}function eu(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==yr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Ce.degToRad(e.pitch),Ce.degToRad(e.yaw),Ce.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function X0(){wi&&(cn.remove(wi),wi.geometry.dispose(),wi.material.dispose());let n=vt.children[gt];wi=n?new ao(n,"#ffdf88"):null,wi&&cn.add(wi),vf()}function vf(){if(Je==="spawn"){Ke.enabled=!0,Ke.setMode("translate"),Ke.setSpace("world"),Ke.setTranslationSnap(null),Ke.setRotationSnap(null),Ke.showX=Ke.showY=Ke.showZ=!0,Ke.attach(Bn);return}let n=vt.children[gt],e=st()?.terrain,t=Rf.has(Je)&&!!n;if(Ke.enabled=t,!t){Ke.detach();return}Ke.setMode(Je),Ke.setSpace(Je==="translate"?"world":"local"),Ke.setTranslationSnap(null);let i=!!(e&&Je==="rotate");Ke.setRotationSnap(i?Math.PI/2:null),Ke.showX=Ke.showZ=!i,Ke.showY=!(e&&Je==="scale"),Ke.attach(n),O("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":wf[Je]}var Io=!1;function q0(){if(Je!=="scale")return;let n=st(),e=Ls?.map.pieces[gt],t=Ke.object;if(!n||!e||!t)return;let i=S0(e,n,Io,Ls?.scaleSides),s=(oe.worldSize??240)/2;n.x=Ce.clamp(i.x,-s,s),n.y=Ce.clamp(i.y,-li,li),n.z=Ce.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),wi?.update();for(let r of["x","y","z"])O("p-"+r).value=n[r].toFixed(2);hi(),nn()}function Y0(n){let e=Io;Io=n.ctrlKey,e!==Io&&Ke.dragging&&q0()}for(let n of["keydown","keyup"])window.addEventListener(n,Y0);Kt.addEventListener("pointermove",Y0,{capture:!0});Ke.addEventListener("change",nn);Ke.addEventListener("mouseDown",()=>{let n=st();if(On=null,n||Ke.object===Bn){let e=Je==="scale"?b0(Ke.axis,Ke.pointStart,Ke.worldQuaternionStart):void 0;Ls={map:structuredClone(oe),selected:gt,scaleSides:e},Ti("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Ke.axis,scaleSides:e,terrain:!!n?.terrain})}Io=!!(Io||window.event?.ctrlKey)});Ke.addEventListener("objectChange",()=>{let n=st(),e=Ke.object,t=Ls?.map.pieces[gt];if(e===Bn&&Ls){let s=(oe.worldSize??240)/2,r=Ce.clamp;oe.spawn.x=r(Bn.position.x,-s,s),oe.spawn.y=r(Bn.position.y-$h,-li,li),oe.spawn.z=r(Bn.position.z,-s,s),Bn.position.set(oe.spawn.x,oe.spawn.y+$h,oe.spawn.z);for(let o of["x","y","z"])O("spawn-"+o).value=oe.spawn[o].toFixed(2);hi();return}if(!n||!e||!t)return;let i=Ce.clamp;if(Je==="translate"){let s=["x","y","z"].filter(a=>(Ke.axis??"XYZ").includes(a.toUpperCase())),r=G0(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,Pf),o=(oe.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-li,li),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else Je==="rotate"?(n.pitch=Ce.radToDeg(e.rotation.x),n.yaw=Ce.radToDeg(e.rotation.y),n.roll=Ce.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=Eo(n.yaw),e.rotation.set(0,Ce.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,ts),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,ts),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),q0());e.updateMatrixWorld(!0),wi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])O("p-"+s).value=Number(n[s]??0).toFixed(2);hi(),nn()});Ke.addEventListener("dragging-changed",({value:n})=>{if(Dt.enabled=!n,n||!Ls)return;let e=Ls;Ls=null;let t=Ke.object===Bn,i=t?e.map.spawn:e.map.pieces[gt],s=t?oe.spawn:st();if(JSON.stringify(i)===JSON.stringify(s)){Ti("transformation sans changement",{name:s?.name,axis:Ke.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Ti("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Ds.length>=35&&Ds.shift(),Ds.push(e),oe=an(oe),St(),ht("Transformation appliqu\xE9e.")});Kt.addEventListener("pointerup",()=>{Ke.dragging||(Dt.enabled=!0)});Kt.addEventListener("pointercancel",()=>{Ke.dragging&&Ke.pointerUp(null),Dt.enabled=!0});function $1(){Ke.detach();for(let t of[...vt.children])vt.remove(t),t.geometry!==rl&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&e0(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),Lh(t.material);Kh.visible=!!oe.arenaBase;let n=new Set(oe.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(oe.pieces.map(t=>t.sceneryId).filter(Boolean));Kh.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=l0(oe,i,n,e))}),J0();for(let t of oe.pieces){if(t.model){let l=new fe(Uh(t.model,new v(t.w,t.h,t.d)),Dh(t.model));l.castShadow=l.receiveShadow=!0;let c=new fe(new We(1,1,1),new Jt({colorWrite:!1,depthWrite:!1,side:tn}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=vt.children.length,vt.add(l),eu(l,t);continue}let i=[10,11,12].includes(t.material),s=new Xn({color:new Ve(ef[t.material]).multiply(new Ve(t.color)),transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(oe.arenaBase&&!t.texture){let l=zn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=j1.load(t.texture,nn),s.map.colorSpace=mt,s.map.wrapS=s.map.wrapT=wn,s.color.set(t.color));let r=t.terrain?performance.now():0,o=t.terrain?Qd(t):t.primitive==="ramp"?Ud(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?tg(t.primitive):t.texture||oe.arenaBase?xh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):rl;o!==rl&&Ld(o,t);let a=new fe(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=Qg(t);l&&(a.add(l),a.userData.vegetation=l)}vt.add(a),eu(a,t)}hw(),Bn.position.set(oe.spawn.x,oe.spawn.y+$h,oe.spawn.z),Bn.rotation.y=Ce.degToRad(oe.spawn.yaw),ox(),X0()}function st(){return oe.pieces[gt]}function ht(n){O("editor-note").textContent=n}function bt(){Ds.length>=35&&Ds.shift(),Ds.push({map:structuredClone(oe),selected:gt}),O("undo").disabled=!1}var pf=0;async function ru(){let n=++pf;try{return await cu(N0,JSON.stringify(oe)),n===pf&&(O("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===pf&&(O("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}O("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=st(),i=gt;if(!(!t?.model||!await ru()))try{sessionStorage.setItem(xf,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),ht("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function Q1(){let n=O0.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(xf)),sessionStorage.removeItem(xf)}catch{return}let t=oe.pieces[e?.index],i=ns.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){ht("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}gt=e.index;let o=So(t.model),a=So(i),l=(u,f,d,p)=>Ce.clamp(u*d/Math.max(f,.001),.05,p),c={w:l(t.w,o.x,a.x,ts),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,ts)},h=Zn({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(bt(),oe.pieces[gt]=h),ht("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var I0=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Z0(){let n=I0(O("piece-search").value.trim()),e=[];oe.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";I0(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===gt))}),O("pieces").replaceChildren(...e),O("pieces").value=String(gt),e.length||O("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(O("pieces").options[0].disabled=!0),O("count").textContent=n?e.length+" sur "+oe.pieces.length:oe.pieces.length+" / "+Ao}function j0(){Z0();let n=st();O("piece-inspector").hidden=!n,O("selection-help").hidden=!!n,O("focus-piece").disabled=!n,O("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";O("model-object-controls").hidden=!e,O("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=O("model-asset-edit-link"),i=n?.model&&Rn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(O("model-grabbable").checked=n.model.properties?.grabbable!==!1,O("model-frozen").checked=n.model.properties?.frozen===!0,O("model-collidable").checked=n.model.properties?.collidable!==!1,O("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of L0){let c=O("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])O(l).disabled=!n;O("delete").disabled=!n,O("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",O("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",O("texture-clear").disabled=!n?.texture,O("texture-paint").disabled=!n||!!n.model;let s=il[gt],r=O("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=Sf(s));let o=n?.terrain;O("terrain-grassTexture-paint").disabled=!o;for(let l of U0){let c=O("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(O("uv-reset").disabled=!n||!!n?.model,O("terrain-controls").hidden=O("terrain-props").hidden=O("terrain-texture-density-fields").hidden=!o,o){for(let g of tx)O("terrain-"+g).value=o[g];let l=o.reliefArea??nx(n);O("terrain-relief-local").checked=!!o.reliefArea,O("terrain-relief-fields").hidden=!o.reliefArea;for(let g of["x","z","radius","blend"])O("terrain-relief-"+g).value=l[g];let c=vt.children[gt]?.userData.generationMs;O("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,f=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});O("terrain-cell-size").textContent=f.format(n.w/o.detail)+" \xD7 "+f.format(n.d/o.detail)+" m par case \xB7 "+f.format(u)+" triangles (2 par case) \xB7 "+f.format(u/h)+" triangles/m\xB2",O("terrain-texture-effective").textContent=f.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2",lw(n);let d=O("terrain-neighbor"),p=d.value,x=oe.pieces.flatMap((g,m)=>$d(n,g)?[new Option(g.name,String(m))]:[]);d.replaceChildren(...x.length?x:[new Option("Aucun bord \xE0 moins de 25 cm","")]),x.some(g=>g.value===p)&&(d.value=p),d.disabled=O("terrain-stitch").disabled=!x.length,O("p-pitch").disabled=O("p-roll").disabled=!0}O("rotate").disabled=!n,O("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",O("p-yaw").step=o?"90":"1",O("surface").value="",O("undo").disabled=Ds.length===0,O("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function Mf(){let n=!!(oe.arenaBase||oe.environment);Tf.visible=k0.visible=!n;for(let t of zn.lighting)t.visible=n;let e=zn.lighting.at(-1);e.visible=n&&(oe.environment?.sunPower??3)>0,cn.background=n?Oi.background:z0,cn.backgroundRotation.copy(Oi.backgroundRotation),cn.fog=n&&O("environment-fog-preview").checked?Oi.fog:null,cn.environment=n?Oi.environment:null,cn.environmentIntensity=Oi.environmentIntensity,nn()}function J0(){let n=oe.environment??null,e=n??Gi(0);for(let t of Cf){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}Ro.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",zn.setEnvironment(n,Mf),Mf()}function tu(n){let e=dl(n);bt(),e?oe.environment=e:delete oe.environment,J0(),ru()}var ew=Cf.find(n=>n.dataset.env==="preset");ew.replaceChildren(...Vf.map((n,e)=>new Option(n,e)));for(let n of Cf)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){tu(Gi(Number(n.value)));return}let t=oe.environment??Gi(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,Ro.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;tu({...t,[e]:i})};O("environment-reset").onclick=()=>tu(null);O("environment-aim-sun").onclick=()=>{if(!(oe.environment??Gi(0)).sunPower){Ro.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=zn.sunDirection();Dt.target.copy(Nt.position).addScaledVector(e,8),Dt.update(),nn()};O("environment-fog-preview").onchange=Mf;O("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=oe;if(e.value="",!t)return;if(t.size>ul){Ro.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(oe!==i)return;let r=new Image;r.onload=()=>{if(oe===i){if(r.width!==r.height*2){Ro.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}tu({...oe.environment??Gi(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{oe===i&&(Ro.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function St(){O("map-name").value=oe.name,O("map-world-size").value=oe.worldSize??240,Nt.far=Math.max(640,oe.worldSize*2),Nt.updateProjectionMatrix(),Dt.maxDistance=Math.max(580,oe.worldSize*1.6);for(let n of["x","y","z","yaw"])O("spawn-"+n).value=oe.spawn[n];$1(),j0(),hi(),nn(),ru()}function Lo(n){gt!==n&&(gt=n,Ti("s\xE9lection",{name:st()?.name,terrain:!!st()?.terrain}),On=null,xr.clear(),j0(),X0(),hi(),nn())}function Df(n){if(oe.pieces.length>=Ao)return ht("Limite de pi\xE8ces atteinte.");bt(),oe.pieces.push(n),gt=oe.pieces.length-1,St(),ht(n.name+" ajout\xE9 \xE0 la map.")}function Lf(){if(!st())return;let n=st().name;bt(),oe.pieces.splice(gt,1),gt=Math.min(gt,oe.pieces.length-1),St(),ht(n+" retir\xE9 de la map.")}function Uf(){let n=st();if(!n)return;let e=Ce.clamp(n.x+n.w+al(),-120,120);Df({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function tw(){let n=st();if(!n)return;bt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Ti("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),St()}function K0(){let n=Ds.pop();n&&(oe=n.map,gt=n.selected,is(null),St(),ht("Derni\xE8re modification annul\xE9e."))}function Nf(){let n=wf[Je]??"";if(Je!=="model"||!gr()){O("tool-help").textContent=n;return}let e=B0(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);O("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function zi(n){Je!==n&&Ti("changement d\u2019outil",{ancien:Je,nouveau:n,name:st()?.name}),Je=n,Dt.mouseButtons.LEFT=Je==="view"?oi.ROTATE:null,vf(),nn();for(let e of Jh)e.setAttribute("aria-pressed",String(e.dataset.tool===Je));for(let e of[Kt,ot])e.dataset.tool=Je,e.removeAttribute("data-hit");Nf(),vf(),nn(),is(null)}function vr(){let n=new sn().setFromObject(vt);n.expandByPoint(Bn.position);let e=n.getCenter(new v),t=n.getSize(new v);Rt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(oe.worldSize??240,500)),height:Math.max(t.z+5,Math.min(oe.worldSize??240,500))},If();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));Do.scale.setScalar(i),Do.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Nt.position.clone().sub(Dt.target).normalize(),r=new v().crossVectors(nu,s).normalize(),o=new v().crossVectors(s,r),a=Math.tan(Ce.degToRad(Nt.fov/2))*.87,l=a*Nt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let f of[n.min.z,n.max.z]){let d=new v(h,u,f).sub(e),p=Math.max(Math.abs(d.dot(r))/l,Math.abs(d.dot(o))/a);c=Math.max(c,p+d.dot(s))}c=Math.min(c,Dt.maxDistance),Dt.target.copy(e),Nt.position.copy(e).addScaledVector(s,c),Dt.update(),Nt.updateMatrixWorld(),hi(),nn()}function Ff(n,e){bt(),oe=n,On=null,xr.clear(),gt=-1,O("piece-search").value="",zi("move"),St(),vr(),ht(e)}function al(){return Number(O("snap").value)}function Yh(n){let e=al(),t=(oe.worldSize??240)/2;return Ce.clamp(Math.round(n/e)*e,-t,t)}function Of(n,e){if(n===ot){let t=_f(e);Us.set(new v(t.x,80,t.z),new v(0,-1,0))}else{let t=Kt.getBoundingClientRect();Nt.updateMatrixWorld(),Us.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Nt)}}function bf(n){return C0.constant=-n,Us.ray.intersectPlane(C0,new v)}function nw(n){let e=n;for(;e&&e.parent!==vt;)e=e.parent;return e?.parent===vt?e:null}function Uo(n,e){Of(n,e);let t=_r.visible&&oe.arenaBase?[...vt.children,_r]:vt.children,i=Us.intersectObjects(t,!0);for(let s of i){if(s.object===_r)return s;let r=nw(s.object);if(r)return{...s,object:r}}return null}function $0(n,e,t,i=null){Us.set(new v(n,80,e),new v(0,-1,0));let s=i?Us.intersectObject(i,!1)[0]:Us.intersectObjects(_r.visible&&oe.arenaBase?[...vt.children,_r]:vt.children,!1).find(r=>r.object===_r||oe.pieces[vt.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function Q0(n,e){sl=null,qh=!1;let t=Uo(n,e);if(Je==="spawn"){if(!t)return null;let h=Yh(t.point.x),u=Yh(t.point.z);return $0(h,u,oe.spawn.yaw)}if(Je==="terrain"){let h=t?.point??bf(0);return h?{...df.terrain,terrain:Rs(df.terrain.terrain),x:Yh(h.x),y:h.y,z:Yh(h.z)}:null}if(Je==="sculpt"||Je==="model"&&!gr())return null;let i=t?.point??bf(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(K1.getNormalMatrix(t.object.matrixWorld)):nu,r=t&&iw(t),o=V0();r&&r.distance<=o*2&&(sl=r.point,qh=O("magnet").checked&&!e.altKey&&O("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=qh||e.altKey?1e-6:al(),l=Je==="model"?B0():Je==="preset"?H1():df[Je],c=r0(qh?sl:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=oe.worldSize/2?c:null}function iw(n){let e=n.object,t=oe.pieces[vt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function is(n){!n&&!jn||(jn=n,Po.visible=!!(jn&&sl),Po.visible&&Po.position.copy(sl),ol.visible=!!(jn&&Je==="spawn"),yr.visible=!!(jn&&Je!=="spawn"),ol.visible&&ol.position.set(jn.x,jn.y+$h,jn.z),yr.visible&&(yr.geometry=jn.primitive==="ramp"?Z1:rl,eu(yr,jn)),hi(),nn())}function sw(n,e){let t=Q0(n,e);if(!t){ht(Je==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Je==="spawn")bt(),oe.spawn=t,zi("move"),St(),ht("Point de d\xE9part d\xE9plac\xE9.");else{let i=Je==="model";is(null),Df(t),i&&(zi("move"),ht(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function rw(n,e){if(Je==="view"||e.button!==0||!e.isPrimary||_t||Ke.dragging)return;if(Je==="spawn"||Rf.has(Je)){if(n===Kt&&Ke.enabled){let r=Kt.getBoundingClientRect();if(Ke.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),Ke.axis){Dt.enabled=!1;return}}if(Je!=="spawn"){e.stopImmediatePropagation();let r=Uo(n,e);Lo(r?vt.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Je};if(_t=t,On=null,Je==="sculpt"){sx(n,e);return}if(Je!=="move")return;let i=Uo(n,e);Lo(i?vt.children.indexOf(i.object):-1);let s=st();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function ow(n,e){if(Je==="view"||Rf.has(Je)||Ke.dragging)return;if(!_t){Je==="move"?n.toggleAttribute("data-hit",!!Uo(n,e)):is(Q0(n,e));return}if(Je==="sculpt"&&_t.id===e.pointerId&&_t.canvas===n){Math.hypot(e.clientX-_t.clientX,e.clientY-_t.clientY)>=7&&(sx(n,e),_t.clientX=e.clientX,_t.clientY=e.clientY);return}if(_t.id!==e.pointerId||_t.canvas!==n||_t.height===void 0||!st()||Math.hypot(e.clientX-_t.clientX,e.clientY-_t.clientY)<4&&!_t.recorded)return;Of(n,e);let i=bf(_t.height);if(!i)return;let s=st(),r=G0(s,{x:i.x-_t.dx,y:s.y,z:i.z-_t.dz},["x","z"],e.altKey),o=(oe.worldSize??240)/2,a=Ce.clamp(r.x,-o,o),l=Ce.clamp(r.z,-o,o);a===s.x&&l===s.z||(_t.recorded||(bt(),_t.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,eu(vt.children[gt],s),wi?.update(),O("p-x").value=a,O("p-z").value=l,hi(),nn())}function mf(n,e,t){if(!_t||_t.canvas!==n||_t.id!==e.pointerId)return;let i=_t;if(_t=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(St(),ht("Relief modifi\xE9."));return}i.recorded&&(ru(),ht(st().name+" d\xE9plac\xE9.")),t&&Je===i.tool&&Je!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&sw(n,e)}var ci=null,ou=!1,Zh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(ou=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(ou=!1)});window.addEventListener("blur",()=>{ci=null,ou=!1});ot.addEventListener("pointerdown",n=>{n.button!==1&&!(ou&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),ci={id:n.pointerId,x:n.clientX,y:n.clientY},ot.setPointerCapture(n.pointerId),ot.style.cursor="grabbing")},{capture:!0});ot.addEventListener("pointermove",n=>{!ci||ci.id!==n.pointerId||(n.stopImmediatePropagation(),Rt.cx-=(n.clientX-ci.x)/Rt.scale,Rt.cz-=(n.clientY-ci.y)/Rt.scale,ci.x=n.clientX,ci.y=n.clientY,hi())},{capture:!0});function ex(n){!ci||ci.id!==n.pointerId||(ci=null,ot.style.cursor="",ot.hasPointerCapture(n.pointerId)&&ot.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}ot.addEventListener("pointerup",ex,{capture:!0});ot.addEventListener("pointercancel",ex,{capture:!0});function Bf(n,e){let t=ot.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=_f({clientX:i,clientY:s}),o=Ce.clamp(Rt.width/n,.75,4096),a=o/Rt.width;Rt.width=o,Rt.height*=a,If();let l=_f({clientX:i,clientY:s});Rt.cx+=r.x-l.x,Rt.cz+=r.z-l.z,hi()}ot.addEventListener("wheel",n=>{n.preventDefault(),Bf(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});O("plan-zoom-in").onclick=()=>Bf(1.25);O("plan-zoom-out").onclick=()=>Bf(.8);O("plan-fit").onclick=vr;var Bi=O("context-actions"),ll=!1;function No(){Bi.hidden=!0}for(let n of[Kt,ot])n.addEventListener("pointerdown",e=>{e.button===2?Zh={canvas:n,x:e.clientX,y:e.clientY}:No()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),ll){ll=!1;return}if(Zh?.canvas!==n||Math.hypot(e.clientX-Zh.x,e.clientY-Zh.y)>6)return;let t=Uo(n,e),i=t?vt.children.indexOf(t.object):-1;if(i<0){No();return}Lo(i),O("context-title").textContent=st()?.name??"Pi\xE8ce",Bi.querySelector('[data-context-action="delete"]').textContent=st()?.model?"Retirer de la carte":"Supprimer",Bi.hidden=!1;let s=195,r=285;Bi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Bi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Bi.hidden||Bi.contains(n.target)||(ll=n.button===2,No())},{capture:!0});document.addEventListener("contextmenu",n=>{ll&&n.target!==Kt&&n.target!==ot&&(ll=!1,n.preventDefault()),!Bi.hidden&&!Bi.contains(n.target)&&n.target!==Kt&&n.target!==ot&&No()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&No()});for(let n of Bi.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;No(),e==="duplicate"?Uf():e==="delete"?Lf():e==="focus"?O("focus-piece").click():zi(e==="select"?"move":e)};for(let n of[Kt,ot])n.addEventListener("pointerdown",e=>rw(n,e),{capture:!0}),n.addEventListener("pointermove",e=>ow(n,e)),n.addEventListener("pointerup",e=>mf(n,e,!0)),n.addEventListener("pointercancel",e=>mf(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||mf(n,e,!1)}),n.addEventListener("pointerleave",()=>{_t||is(null)});O("p-material").append(...n0.map((n,e)=>new Option(n,e)));for(let n of U0)O("p-"+n).addEventListener("change",e=>{let t=st();!t||t.model||(bt(),t[n]=Number(e.target.value),oe=an(oe),St())});O("uv-reset").onclick=()=>{let n=st();!n||n.model||(bt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),oe=an(oe),St())};var aw={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(aw))O(e).addEventListener("change",t=>{let i=st();if(!i?.model||i.model.kind!=="prop")return;bt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),oe=an(oe),St();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};ht(s[n])});for(let n of L0)O("p-"+n).addEventListener("change",e=>{let t=st();if(!t)return;bt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),oe=an(oe),St()});O("map-world-size").onchange=n=>{bt(),oe.worldSize=Ce.clamp(Number(n.target.value)||240,24,2048),oe=an(oe),St(),vr(),ht("Zone de construction : "+oe.worldSize+" \xD7 "+oe.worldSize+" m.")};O("map-name").onchange=n=>{bt(),oe.name=n.target.value,oe=an(oe),St()};O("piece-search").addEventListener("input",Z0);O("pieces").onchange=n=>{n.target.value!==""&&Lo(Number(n.target.value))};O("focus-piece").onclick=()=>{let n=vt.children[gt];if(!n)return;let e=new sn().setFromObject(n).getBoundingSphere(new Qn),t=Nt.position.clone().sub(Dt.target).normalize(),i=Math.atan(Math.tan(Ce.degToRad(Nt.fov/2))*Math.min(Nt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Dt.target.copy(e.center),Nt.position.copy(e.center).addScaledVector(t,s),Dt.update(),nn()};for(let n of["x","y","z","yaw"])O("spawn-"+n).onchange=e=>{bt(),oe.spawn[n]=Number(e.target.value),oe=an(oe),St()};O("spawn-here").onclick=()=>{let n=st();if(!n)return;let e=n.solid&&$0(n.x,n.z,n.yaw,vt.children[gt]);if(!e)return ht("Choisis une pi\xE8ce solide pour placer le d\xE9part.");bt(),oe.spawn=e,St(),ht("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Jh)n.onclick=()=>zi(n.dataset.tool);O("duplicate").onclick=Uf;O("add-mirror").onclick=()=>Df(tf());O("delete").onclick=Lf;O("rotate").onclick=tw;O("undo").onclick=K0;O("zoom-fit").onclick=vr;O("snap").onchange=()=>is(null);O("new-example").onclick=()=>Ff(Ef(),"Ar\xE8ne de d\xE9part ouverte.");O("blank-map").onclick=()=>{let n=Ce.clamp(Number(O("map-world-size").value)||240,24,2048);Ff({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Zn({name:"Sol",y:-.25,w:Math.min(n,ts),d:Math.min(n,ts)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};O("surface").onchange=n=>{let e=$a[n.target.value],t=st();!e||!t||(bt(),Object.assign(t,e),St())};O("texture-file").onchange=async n=>{let e=n.target.files[0],t=st();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!oe.pieces.includes(t))return ht("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");bt(),t.texture=o,St(),ht("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){ht(i.message)}finally{n.target.value=""}};O("texture-paint").onclick=()=>{let n=st();if(!n||n.model)return ht("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");sf({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!oe.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");bt(),n.texture=e,oe=an(oe),St(),ht("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};O("terrain-grassTexture-paint").onclick=()=>{let n=st();n?.terrain&&sf({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!oe.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");bt(),n.terrain.grassTexture=e,oe=an(oe),St(),ht("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};O("texture-clear").onclick=()=>{st()?.texture&&(bt(),st().texture=null,St())};O("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{Ff(an(await e.text()),"Map charg\xE9e.")}catch(t){ht(t.message)}finally{n.target.value=""}};O("export-map").onclick=()=>{try{a0(oe),ht("Map JSON export\xE9e.")}catch(n){ht(n.message)}};O("test-map").onclick=async()=>{try{await cu(o0,JSON.stringify(an(oe))),location.href="./?custom=1"}catch{ht("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var tx=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function lw(n){let e=n.terrain.rules,t=vt.children[gt]?.userData.vegetation?.userData.distribution??[];O("terrain-add-rule").disabled=e.length>=Fh,O("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),O("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(R,S,b=!1)=>{let D=document.createElement("td");b&&(D.dataset.wide="");let U=document.createElement("span");return U.textContent=R,D.append(U,S),r.append(D),S.matches("input,select")&&S.setAttribute("aria-label",R+" \xB7 r\xE8gle "+(s+1)),D},a=R=>{bt(),e[s]=Ka({...i,...R}),Ti("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(R)}),St()},l=(R,S,b)=>{let D=document.createElement("select");return D.replaceChildren(...R.map(([U,B])=>new Option(U,B))),D.value=S,D.onchange=()=>b(D.value),D},c=(R,S,b,D)=>{let U=document.createElement("input");return U.type="number",U.value=i[R],U.min=S,U.max=b,U.step=D,U.onchange=()=>{Number.isFinite(U.valueAsNumber)?a({[R]:U.valueAsNumber}):U.value=i[R]},U},h=Rn.some(R=>R.id===i.model?.id)||!i.model?Rn:[...Rn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,R=>{let S=R==="grass"?"#527a34":R==="shrub"?"#36583c":"#ffffff";a({kind:R,model:R==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(R=>[R.name,R.id]),i.model.id,R=>a({model:h.find(S=>S.id===R)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let f=l(Array.from({length:jd-1},(R,S)=>[String(S+2),String(S+2)]),String(i.colors.length),R=>{let S=i.colors.slice(0,Number(R));for(;S.length<Number(R);)S.push(S.at(-1));a({colors:S})});f.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(f);let d=document.createElement("div");d.className="terrain-swatches";for(let[R,S]of i.colors.entries()){let b=document.createElement("input");b.type="color",b.value=S,b.setAttribute("aria-label","Teinte "+(R+1)+" \xB7 r\xE8gle "+(s+1)),b.onchange=()=>a({colors:i.colors.map((D,U)=>U===R?b.value:D)}),d.append(b)}u.append(d),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,ja,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,R=>a({fit:R})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,Zd,.05)),o("Variation de taille",c("variation",0,Jd,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[R,S,b,D]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let U=document.createElement("label"),B=document.createElement("input");U.textContent=S,B.type="number",B.min=b,B.max=D,B.step="any",B.value=i.scatter?.[R]??_[R],B.onchange=()=>{Number.isFinite(B.valueAsNumber)&&a({scatter:{...i.scatter,[R]:B.valueAsNumber}})},U.append(B),m.append(U)}if(i.scatter){let R=document.createElement("button");R.type="button",R.textContent="R\xE9initialiser la zone",R.onclick=()=>a({scatter:null}),x.append(R)}let M=document.createElement("td");M.dataset.wide="",M.append(x),r.append(M);let y=document.createElement("output"),E=t[s]??{count:0,requested:0,area:0};y.textContent=E.count+" / "+E.requested+" \xB7 "+E.area.toFixed(1)+" m\xB2",E.requested>E.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+format.format(E.collisions??0)+" collisions");let A=o("Affich\xE9es / demand\xE9es",y,!0),I=document.createElement("button");return I.type="button",I.textContent="Retirer la ligne",I.onclick=()=>{bt(),e.splice(s,1),St()},A.append(I),r}))}O("terrain-add-rule").onclick=()=>{let n=st();!n?.terrain||n.terrain.rules.length>=Fh||(bt(),n.terrain.rules.push(Ka({seed:n.terrain.seed+n.terrain.rules.length})),St(),O("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};O("terrain-stitch").onclick=()=>{let n=st(),e=oe.pieces[Number(O("terrain-neighbor").value)],t=Ce.clamp(Number(O("terrain-seam-width").value)||1.5,.1,25),i=Kg(n,e,t);if(!i)return ht("Rapproche les bords \xE0 moins de 25 cm.");bt(),oe.pieces[gt]=i.piece,St(),ht(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};O("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=st();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!oe.pieces.includes(t))return;bt(),t.terrain.grassTexture=o,St(),ht("Texture d\u2019herbe import\xE9e.")}catch(i){ht(i.message)}};O("terrain-grassTexture-clear").onclick=()=>{st()?.terrain&&(bt(),st().terrain.grassTexture=null,St())};for(let n of tx)O("terrain-"+n).onchange=e=>{let t=st();t?.terrain&&(bt(),t.terrain=n==="detail"?Kd(t.terrain,Number(e.target.value)):Rs({...t.terrain,[n]:Number(e.target.value)}),St())};function nx(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function ix(n){let e=st();e?.terrain&&(bt(),e.terrain=Rs({...e.terrain,reliefArea:n},e.w*e.d),St())}O("terrain-relief-local").onchange=n=>{let e=st();e?.terrain&&ix(n.target.checked?nx(e):null)};for(let n of["x","z","radius","blend"])O("terrain-relief-"+n).onchange=e=>{let t=st(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&ix({...t.terrain.reliefArea,[n]:i})};O("terrain-reset").onclick=()=>{st()?.terrain&&(bt(),st().terrain.heights=null,St())};function sx(n,e){Of(n,e);let t=Us.intersectObjects(vt.children,!1).find(a=>oe.pieces[vt.children.indexOf(a.object)]?.terrain),i=t?vt.children.indexOf(t.object):-1,s=oe.pieces[i];if(!s?.terrain||(_t.recorded||(bt(),_t.recorded=!0,_t.flattenY=t.point.y,Lo(i),O("terrain-controls").open=!0),i!==gt))return;let r={mode:O("terrain-brush").value,radius:Number(O("brush-radius").value),strength:Number(O("brush-strength").value),target:_t.flattenY};if(!$g(s,t.point.x,t.point.z,r))return;let o=vt.children[i];o.geometry.dispose(),o.geometry=Qd(s),Ld(o.geometry,s),wi?.update(),hi(),nn()}O("view-top").onclick=()=>{let n=Dt.target,e=Math.max(10,Nt.position.distanceTo(n));Nt.position.copy(n).add(new v(0,e,.001)),Dt.update(),nn()};O("view-perspective").onclick=()=>{Nt.position.copy(Dt.target).add(new v(16,15,24)),vr()};O("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=oe.spawn,s=new v(0,0,-1).applyAxisAngle(nu,Ce.degToRad(i));Nt.position.set(n,e+.87,t),Dt.target.copy(Nt.position).addScaledVector(s,5),Nt.lookAt(Dt.target),nn()};var D0={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||_t||Ke.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")K0();else if(e==="d")Uf();else return;else{if(n.altKey)return;if(D0[e])zi(D0[e]);else if(e==="f")vr();else if(e==="delete"||e==="backspace")Lf();else return}n.preventDefault()});var mr=new dn;cn.add(mr);function cw(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function Sf(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function hw(){il=vt.children.map(cw),Is={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of il.entries()){for(let i of["triangles","vertices","instances"])Is[i]+=t[i];(Is.heavy<0||t.triangles>il[Is.heavy].triangles)&&(Is.heavy=e)}O("scene-mesh-stats").textContent="Objets de la carte \xB7 "+Sf(Is);let n=Is.heavy;O("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+oe.pieces[n].name+" \xB7 "+Sf(il[n]),O("scene-select-heavy").disabled=n<0}O("scene-select-heavy").onclick=()=>{let n=Is?.heavy??-1;n<0||(Lo(n),window.setInspectorTab("object"),O("focus-piece").click())};function rx(){if(!O("debug-stats"))return;let n=Fo.info.render.triangles,e=oe?.pieces?.length??0;O("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(oe?.worldSize??240)+" m"}function ox(){for(let n of[...mr.children])mr.remove(n),n.geometry.dispose(),n.material.dispose();Do.visible=O("debug-grid").checked;for(let n of vt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=O("debug-wire").checked;if(O("debug-hitboxes").checked){let e=vt.children.indexOf(n),t=oe.pieces[e];if(t?.model){let i=new v(t.w,t.h,t.d),s=Vg(t.model,i);if(s)for(let r of s){let o=new We(...r.size),a=new fe(o,new Jt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),mr.add(a)}else{let r=kg(t.model,i),o=new fe(r,new Jt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),mr.add(o)}}else if(t?.primitive==="ramp"){let i=new Ys(new Sa(n.geometry),new ti({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),mr.add(i)}else mr.add(new ao(n,"#fa9945"))}}nn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])O(n).onchange=ox;O("debug-coords").onchange=()=>{O("debug-coords").checked||rx()};for(let n of[Kt,ot])n.addEventListener("pointermove",e=>{if(!O("debug-coords").checked||_t||ci)return;let t=Uo(n,e);if(!t)return;let i=t.point;O("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+oe.pieces.length+" \xE9l\xE9ments"});async function uw(){try{let n=await Hf(N0);if(n){let e=an(n);if(JSON.stringify(e)!==JSON.stringify(s0()))if(e.arenaBase&&!e.editableArena){let t=Ef(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=Ao?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,oe=an(e),ht("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):oe=e}else oe=e}}catch{}if(Q1(),zi("move"),St(),iu(),su(),vr(),cl(),gf){let n=Rn.find(e=>e.id===gf);n?(O("place-model").click(),ht("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):ht("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Ti("d\xE9marrage termin\xE9",{version:"R39",name:oe.name,pi\u00E8ces:oe.pieces.length})}uw();})();
