(()=>{var Jf=["Jour","Coucher de soleil","Nuit"],vl={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,sunDiameter:3.3,sunHalo:1,shadowRange:0,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},yx=[vl,{...vl,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...vl,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function zi(n){return{...yx[n]??vl}}var Ml=5e6,_x=4*Math.ceil(Ml/3)+23,Rr=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,Mi=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function bl(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(Mi(n.preset,0,2,0)),t=zi(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=_x?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=Ml?n.skyImage:null,r=Mi(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:Mi(n.rotation,-360,360,0),skyTint:Rr(n.skyTint,"#ffffff"),skyColor:Rr(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:Rr(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,Mi(n.fogFar,1,4096,t.fogFar)),azimuth:Mi(n.azimuth,-360,360,t.azimuth),elevation:Mi(n.elevation,-89,89,t.elevation),sunColor:Rr(n.sunColor,t.sunColor),sunPower:Mi(n.sunPower,0,12,t.sunPower),sunDiameter:Mi(n.sunDiameter,.1,12,t.sunDiameter),sunHalo:Mi(n.sunHalo,0,4,t.sunHalo),shadowRange:Mi(n.shadowRange,0,160,t.shadowRange),ambientColor:Rr(n.ambientColor,t.ambientColor),groundColor:Rr(n.groundColor,t.groundColor),ambientPower:Mi(n.ambientPower,0,12,t.ambientPower)}}var yu;function vx(){return yu??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw yu=null,n}),yu}async function Kf(n,e,t){let i=await vx();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function $f(n){return await Kf(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function _u(n,e){await Kf(n,"readwrite",(t,i)=>t.put(e,i))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Np=0,od=1,Fp=2;var ad=1,Op=2,Wi=3,$n=0,Un=1,cn=2,ss=0,Zs=1,Fa=2,ld=3,cd=4,Bp=5,Ms=100,zp=101,kp=102,Vp=103,Gp=104,Hp=200,Wp=201,Xp=202,qp=203,ec=204,tc=205,Yp=206,Zp=207,jp=208,Jp=209,Kp=210,$p=211,Qp=212,em=213,tm=214,Ic=0,Pc=1,Dc=2,js=3,Lc=4,Uc=5,Nc=6,Fc=7,Oc=0,nm=1,im=2,rs=0,sm=1,rm=2,om=3,am=4,lm=5,cm=6,hm=7;var hd=300,cr=301,hr=302,Ii=303,Bc=304,Oa=306,Dn=1e3,vs=1001,nc=1002,Vn=1003,um=1004;var Ba=1005;var un=1006,zc=1007;var Nn=1008;var Pi=1009,ud=1010,dd=1011,go=1012,kc=1013,Cs=1014,Di=1015,xo=1016,Vc=1017,Gc=1018,yo=1020,fd=35902,pd=35899,md=1021,gd=1022,Fn=1023,Kr=1026,_o=1027,Hc=1028,Wc=1029,xd=1030,Xc=1031;var qc=1033,za=33776,ka=33777,Va=33778,Ga=33779,Yc=35840,Zc=35841,jc=35842,Jc=35843,Kc=36196,$c=37492,Qc=37496,eh=37808,th=37809,nh=37810,ih=37811,sh=37812,rh=37813,oh=37814,ah=37815,lh=37816,ch=37817,hh=37818,uh=37819,dh=37820,fh=37821,ph=36492,mh=36494,gh=36495,xh=36283,yh=36284,_h=36285,vh=36286;var aa=2300,ic=2301,$l=2302,Zu=2400,ju=2401,Ju=2402;var dm=3200,fm=3201;var Mh=0,pm=1,os="",Mt="srgb",Js="srgb-linear",la="linear",Nt="srgb";var Ys=7680;var Ku=519,mm=512,gm=513,xm=514,yd=515,ym=516,_m=517,vm=518,Mm=519,sc=35044,Ha=35048;var _d="300 es",Ei=2e3,ca=2001;var Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,ia=Math.PI/180,$r=180/Math.PI;function Vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function vd(n,e){return(n%e+e)%e}function Mx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function bx(n,e,t){return n!==e?(t-n)/(e-n):0}function sa(n,e,t){return(1-t)*n+t*e}function Sx(n,e,t,i){return sa(n,e,1-Math.exp(-t*i))}function wx(n,e=1){return e-Math.abs(vd(n,e*2)-e)}function Tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ex(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ax(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cx(n,e){return n+Math.random()*(e-n)}function Rx(n){return n*(.5-Math.random())}function Ix(n){n!==void 0&&(Qf=n);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Px(n){return n*ia}function Dx(n){return n*$r}function Lx(n){return(n&n-1)===0&&n!==0}function Ux(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Te={DEG2RAD:ia,RAD2DEG:$r,generateUUID:Vi,clamp:it,euclideanModulo:vd,mapLinear:Mx,inverseLerp:bx,lerp:sa,damp:Sx,pingpong:wx,smoothstep:Tx,smootherstep:Ex,randInt:Ax,randFloat:Cx,randFloatSpread:Rx,seededRandom:Ix,degToRad:Px,radToDeg:Dx,isPowerOfTwo:Lx,ceilPowerOfTwo:Ux,floorPowerOfTwo:Nx,setQuaternionFromProperEuler:Fx,normalize:Ut,denormalize:Ti},ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*x,_=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let E=Math.sqrt(b),A=Math.atan2(E,m*_);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ep.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vu=new M,ep=new vt,at=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],y=s[7],E=s[2],A=s[5],D=s[8];return r[0]=o*x+a*_+l*E,r[3]=o*g+a*b+l*A,r[6]=o*m+a*y+l*D,r[1]=c*x+h*_+u*E,r[4]=c*g+h*b+u*A,r[7]=c*m+h*y+u*D,r[2]=d*x+f*_+p*E,r[5]=d*g+f*b+p*A,r[8]=d*m+f*y+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mu.makeScale(e,t)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mu=new at;function Md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bm(){let n=Qr("canvas");return n.style.display="block",n}var tp={};function eo(n){n in tp||(tp[n]=!0,console.warn(n))}function Sm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var np=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Nt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:la,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),n}var wt=Ox();function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ir,rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ir===void 0&&(Ir=Qr("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bx=0,to=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bu(s[o].image)):r.push(bu(s[o]))}else r=bu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zx=0,Su=new M,En=class n extends Gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=vs,s=vs,r=un,o=Nn,a=Fn,l=Pi,c=n.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Vi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=hd;En.DEFAULT_ANISOTROPY=1;var en=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,E=(m+1)/2,A=(h+d)/4,D=(u+x)/4,C=(p+g)/4;return b>y&&b>E?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=D/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=C/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends Gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new En(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ha=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),wl.subVectors(this.max,qo),Pr.subVectors(e.a,qo),Dr.subVectors(e.b,qo),Lr.subVectors(e.c,qo),ps.subVectors(Dr,Pr),ms.subVectors(Lr,Dr),Hs.subVectors(Pr,Lr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Hs.z,Hs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Hs.z,0,-Hs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Hs.y,Hs.x,0];return!wu(t,Pr,Dr,Lr,wl)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,Pr,Dr,Lr,wl))?!1:(Tl.crossVectors(ps,ms),t=[Tl.x,Tl.y,Tl.z],wu(t,Pr,Dr,Lr,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new M,new M,new M,new M,new M,new M,new M,new M],bi=new M,Sl=new dn,Pr=new M,Dr=new M,Lr=new M,ps=new M,ms=new M,Hs=new M,qo=new M,wl=new M,Tl=new M,Ws=new M;function wu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ws.fromArray(n,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),h=i.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kx=new dn,Yo=new M,Tu=new M,ci=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):kx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let t=Yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Tu)),this.expandByPoint(Yo.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$i=new M,Eu=new M,El=new M,gs=new M,Au=new M,Al=new M,Cu=new M,bs=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Eu.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Eu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=gs.dot(this.direction),l=-gs.dot(El),c=gs.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eu).addScaledVector(El,d),f}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,s,r){Au.subVectors(t,e),Al.subVectors(i,e),Cu.crossVectors(Au,Al);let o=this.direction.dot(Cu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);let l=a*this.direction.dot(Al.crossVectors(gs,Al));if(l<0)return null;let c=a*this.direction.dot(Au.cross(gs));if(c<0||l+c>o)return null;let h=-a*gs.dot(Cu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vx,e,Gx)}lookAt(e,t,i){let s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),xs.crossVectors(i,Jn),xs.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),xs.crossVectors(i,Jn)),xs.normalize(),Cl.crossVectors(Jn,xs),s[0]=xs.x,s[4]=Cl.x,s[8]=Jn.x,s[1]=xs.y,s[5]=Cl.y,s[9]=Jn.y,s[2]=xs.z,s[6]=Cl.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],b=i[7],y=i[11],E=i[15],A=s[0],D=s[4],C=s[8],S=s[12],v=s[1],I=s[5],L=s[9],O=s[13],B=s[2],V=s[6],k=s[10],te=s[14],q=s[3],ae=s[7],me=s[11],_e=s[15];return r[0]=o*A+a*v+l*B+c*q,r[4]=o*D+a*I+l*V+c*ae,r[8]=o*C+a*L+l*k+c*me,r[12]=o*S+a*O+l*te+c*_e,r[1]=h*A+u*v+d*B+f*q,r[5]=h*D+u*I+d*V+f*ae,r[9]=h*C+u*L+d*k+f*me,r[13]=h*S+u*O+d*te+f*_e,r[2]=p*A+x*v+g*B+m*q,r[6]=p*D+x*I+g*V+m*ae,r[10]=p*C+x*L+g*k+m*me,r[14]=p*S+x*O+g*te+m*_e,r[3]=_*A+b*v+y*B+E*q,r[7]=_*D+b*I+y*V+E*ae,r[11]=_*C+b*L+y*k+E*me,r[15]=_*S+b*O+y*te+E*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*c-x*d*c+x*l*f-a*g*f-u*l*m+a*d*m,b=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,y=h*x*c-p*u*c+p*a*f-o*x*f-h*a*m+o*u*m,E=p*u*l-h*x*l-p*a*d+o*x*d+h*a*g-o*u*g,A=t*_+i*b+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=_*D,e[1]=(x*d*r-u*g*r-x*s*f+i*g*f+u*s*m-i*d*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*D,e[4]=b*D,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*D,e[8]=y*D,e[9]=(p*u*r-h*x*r-p*i*f+t*x*f+h*i*m-t*u*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*D,e[12]=E*D,e[13]=(h*x*s-p*u*s+p*i*d-t*x*d-h*i*g+t*u*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,b=l*h,y=l*u,E=i.x,A=i.y,D=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+y)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+m))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(p+b)*D,s[9]=(g-_)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ur.set(s[0],s[1],s[2]).length(),o=Ur.set(s[4],s[5],s[6]).length(),a=Ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);let c=1/r,h=1/o,u=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=u,Si.elements[9]*=u,Si.elements[10]*=u,t.setFromRotationMatrix(Si),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ca)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ei,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ca)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ur=new M,Si=new _t,Vx=new M(0,0,0),Gx=new M(1,1,1),xs=new M,Cl=new M,Jn=new M,sp=new _t,rp=new vt,tn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hx=0,op=new M,Nr=new vt,Qi=new _t,Rl=new M,Zo=new M,Wx=new M,Xx=new vt,ap=new M(1,0,0),lp=new M(0,1,0),cp=new M(0,0,1),hp={type:"added"},qx={type:"removed"},Fr={type:"childadded",child:null},Ru={type:"childremoved",child:null},jt=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new tn,i=new vt,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new at}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rl.copy(e):Rl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Zo,Rl,this.up):Qi.lookAt(Rl,Zo,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};jt.DEFAULT_UP=new M(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new M,es=new M,Iu=new M,ts=new M,Or=new M,Br=new M,up=new M,Pu=new M,Du=new M,Lu=new M,Uu=new en,Nu=new en,Fu=new en,kn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wi.subVectors(s,t),es.subVectors(i,t),Iu.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(es),l=wi.dot(Iu),c=es.dot(es),h=es.dot(Iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Uu.setScalar(0),Nu.setScalar(0),Fu.setScalar(0),Uu.fromBufferAttribute(e,t),Nu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uu,r.x),o.addScaledVector(Nu,r.y),o.addScaledVector(Fu,r.z),o}static isFrontFacing(e,t,i,s){return wi.subVectors(i,t),es.subVectors(e,t),wi.cross(es).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),es.subVectors(this.a,this.b),wi.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Or.subVectors(s,i),Br.subVectors(r,i),Pu.subVectors(e,i);let l=Or.dot(Pu),c=Br.dot(Pu);if(l<=0&&c<=0)return t.copy(i);Du.subVectors(e,s);let h=Or.dot(Du),u=Br.dot(Du);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Or,o);Lu.subVectors(e,r);let f=Or.dot(Lu),p=Br.dot(Lu);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Br,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return up.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(up,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Or,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=vd(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ou(o,r,e+1/3),this.g=Ou(o,r,e),this.b=Ou(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return wt.workingToColorSpace(Sn.copy(this),e),Math.round(it(Sn.r*255,0,255))*65536+Math.round(it(Sn.g*255,0,255))*256+Math.round(it(Sn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Sn.copy(this),t);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Mt){wt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,i=Sn.g,s=Sn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Il);let i=sa(ys.h,Il.h,t),s=sa(ys.s,Il.s,t),r=sa(ys.l,Il.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new He;He.NAMES=wm;var Yx=0,Ai=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Zs,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new M,Pl=new ce,Zx=0,Ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}};var ua=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},jx=0,li=new _t,Bu=new jt,zr=new M,Kn=new dn,jo=new dn,yn=new M,pt=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?da:ua)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(Kn.min,jo.min),Kn.expandByPoint(yn),yn.addVectors(Kn.max,jo.max),Kn.expandByPoint(yn)):(Kn.expandByPoint(jo.min),Kn.expandByPoint(jo.max))}Kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),yn.add(zr)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new M,l[C]=new M;let c=new M,h=new M,u=new M,d=new ce,f=new ce,p=new ce,x=new M,g=new M;function m(C,S,v){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[C].add(x),a[S].add(x),a[v].add(x),l[C].add(g),l[S].add(g),l[v].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,S=_.length;C<S;++C){let v=_[C],I=v.start,L=v.count;for(let O=I,B=I+L;O<B;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let b=new M,y=new M,E=new M,A=new M;function D(C){E.fromBufferAttribute(s,C),A.copy(E);let S=a[C];b.copy(S),b.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(A,S);let I=y.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,I)}for(let C=0,S=_.length;C<S;++C){let v=_[C],I=v.start,L=v.count;for(let O=I,B=I+L;O<B;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dp=new _t,Xs=new bs,Dl=new ci,fp=new M,Ll=new M,Ul=new M,Nl=new M,zu=new M,Fl=new M,pp=new M,Ol=new M,fe=class extends jt{constructor(e=new pt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zu.fromBufferAttribute(u,e),o?Fl.addScaledVector(zu,h):Fl.addScaledVector(zu.sub(t),h))}t.add(Fl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Dl.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Dl,fp)===null||Xs.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(dp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(dp),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=b;y<E;y+=3){let A=a.getX(y),D=a.getX(y+1),C=a.getX(y+2);s=Bl(this,m,e,i,c,h,u,A,D,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);s=Bl(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=b;y<E;y+=3){let A=y,D=y+1,C=y+2;s=Bl(this,m,e,i,c,h,u,A,D,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,b=g+1,y=g+2;s=Bl(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Jx(n,e,t,i,s,r,o,a){let l;if(e.side===Un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$n,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ol);return c<t.near||c>t.far?null:{distance:c,point:Ol.clone(),object:n}}function Bl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ll),n.getVertexPosition(l,Ul),n.getVertexPosition(c,Nl);let h=Jx(n,e,t,i,Ll,Ul,Nl,pp);if(h){let u=new M;kn.getBarycoord(pp,Ll,Ul,Nl,u),s&&(h.uv=kn.getInterpolatedAttribute(s,a,l,c,u,new ce)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,l,c,u,new ce)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,l,c,u,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};kn.getNormal(Ll,Ul,Nl,d.normal),h.face=d,h.barycoord=u}return h}var qe=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function p(x,g,m,_,b,y,E,A,D,C,S){let v=y/D,I=E/C,L=y/2,O=E/2,B=A/2,V=D+1,k=C+1,te=0,q=0,ae=new M;for(let me=0;me<k;me++){let _e=me*I-O;for(let Ge=0;Ge<V;Ge++){let je=Ge*v-L;ae[x]=je*_,ae[g]=_e*b,ae[m]=B,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[m]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ge/D),u.push(1-me/C),te+=1}}for(let me=0;me<C;me++)for(let _e=0;_e<D;_e++){let Ge=d+_e+V*me,je=d+_e+V*(me+1),ht=d+(_e+1)+V*(me+1),tt=d+(_e+1)+V*me;l.push(Ge,je,tt),l.push(je,ht,tt),q+=6}a.addGroup(f,q,S),f+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ur(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=ur(n[t]);for(let s in i)e[s]=i[s]}return e}function Kx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var Tm={clone:ur,merge:Cn},$x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ci=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fa=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new M,mp=new ce,gp=new ce,wn=class extends fa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,mp,gp),t.subVectors(gp,mp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,Vr=1,lc=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(kr,Vr,e,t);s.layers=this.layers,this.add(s);let r=new wn(kr,Vr,e,t);r.layers=this.layers,this.add(r);let o=new wn(kr,Vr,e,t);o.layers=this.layers,this.add(o);let a=new wn(kr,Vr,e,t);a.layers=this.layers,this.add(a);let l=new wn(kr,Vr,e,t);l.layers=this.layers,this.add(l);let c=new wn(kr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},pa=class extends En{constructor(e=[],t=cr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cc=class extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:ss});r.uniforms.tEquirect.value=t;let o=new fe(s,r),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=un),new lc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},vn=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ks=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},so=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new M,ro=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$s=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gr,Jo=new M,Hr=new M,Wr=new M,Xr=new ce,Ko=new ce,Em=new _t,zl=new M,$o=new M,kl=new M,xp=new ce,ku=new ce,yp=new ce,oo=class extends jt{constructor(e=new $s){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ma(t,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new ro(i,3,0,!1)),Gr.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=Gr,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Vl(zl.set(-.5,-.5,0),Wr,o,Hr,s,r),Vl($o.set(.5,-.5,0),Wr,o,Hr,s,r),Vl(kl.set(.5,.5,0),Wr,o,Hr,s,r),xp.set(0,0),ku.set(1,0),yp.set(1,1);let a=e.ray.intersectTriangle(zl,$o,kl,!1,Jo);if(a===null&&(Vl($o.set(-.5,.5,0),Wr,o,Hr,s,r),ku.set(0,1),a=e.ray.intersectTriangle(zl,kl,$o,!1,Jo),a===null))return;let l=e.ray.origin.distanceTo(Jo);l<e.near||l>e.far||t.push({distance:l,point:Jo.clone(),uv:kn.getInterpolation(Jo,zl,$o,kl,xp,ku,yp,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vl(n,e,t,i,s,r){Xr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ko.x=r*Xr.x-s*Xr.y,Ko.y=s*Xr.x+r*Xr.y):Ko.copy(Xr),n.copy(e),n.x+=Ko.x,n.y+=Ko.y,n.applyMatrix4(Em)}var hi=class extends En{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vn,h=Vn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends Ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new _t,_p=new _t,Gl=[],vp=new dn,ty=new _t,Qo=new fe,ea=new ci,ga=class extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ty)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),vp.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),ea.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),_p.multiplyMatrices(i,qr),Qo.matrixWorld=_p,Qo.raycast(e,Gl);for(let o=0,a=Gl.length;o<a;o++){let l=Gl[o];l.instanceId=r,l.object=this,t.push(l)}Gl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(s*this.count),s,this.count,Hc,Di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vu=new M,ny=new M,iy=new at,Tn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vu.subVectors(i,t).cross(ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||iy.getNormalMatrix(e),s=this.coplanarPoint(Vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new ci,sy=new ce(.5,.5),Hl=new M,lo=class{constructor(e=new Tn,t=new Tn,i=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,m-p,E-_).normalize(),s[1].setComponents(c+o,f+h,m+p,E+_).normalize(),s[2].setComponents(c+a,f+u,m+x,E+b).normalize(),s[3].setComponents(c-a,f-u,m-x,E-b).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,E-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,E-y).normalize(),t===Ei)s[5].setComponents(c+l,f+d,m+g,E+y).normalize();else if(t===ca)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=sy.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Hl.x=s.normal.x>0?e.max.x:e.min.x,Hl.y=s.normal.y>0?e.max.y:e.min.y,Hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ui=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hc=new M,uc=new M,Mp=new _t,ta=new bs,Wl=new ci,Gu=new M,bp=new M,Gn=class extends jt{constructor(e=new pt,t=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)hc.fromBufferAttribute(t,s-1),uc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=hc.distanceTo(uc);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,e.ray.intersectsSphere(Wl)===!1)return;Mp.copy(s).invert(),ta.copy(e.ray).applyMatrix4(Mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),b=Xl(this,e,ta,l,m,_,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Xl(this,e,ta,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Xl(this,e,ta,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Xl(this,e,ta,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(hc.fromBufferAttribute(a,s),uc.fromBufferAttribute(a,r),t.distanceSqToSegment(hc,uc,Gu,bp)>i)return;Gu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gu);if(!(c<e.near||c>e.far))return{distance:c,point:bp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Sp=new M,wp=new M,Qs=class extends Gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Sp.fromBufferAttribute(t,s),wp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sp.distanceTo(wp);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends Gn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Ri=class extends En{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ya=class extends En{constructor(e,t,i=Cs,s,r,o,a=Vn,l=Vn,c,h=Kr,u=1){if(h!==Kr&&h!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_a=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ss=class n extends pt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,x=s+1,g=new M,m=new M;for(let _=0;_<=p;_++){let b=0,y=0,E=0,A=0;if(_<=i){let S=_/i,v=S*Math.PI/2;y=-h-e*Math.cos(v),E=e*Math.sin(v),A=-e*Math.cos(v),b=S*u}else if(_<=i+r){let S=(_-i)/r;y=-h+S*t,E=e,A=0,b=u+S*d}else{let S=(_-i-r)/i,v=S*Math.PI/2;y=h+e*Math.sin(v),E=e*Math.cos(v),A=e*Math.sin(v),b=u+d+S*u}let D=Math.max(0,Math.min(1,b/f)),C=0;_===0?C=.5/s:_===p&&(C=-.5/s);for(let S=0;S<=s;S++){let v=S/s,I=v*Math.PI*2,L=Math.sin(I),O=Math.cos(I);m.x=-E*O,m.y=y,m.z=E*L,a.push(m.x,m.y,m.z),g.set(-E*O,A,E*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(v+C,D)}if(_>0){let S=(_-1)*x;for(let v=0;v<s;v++){let I=S+v,L=S+v+1,O=_*x+v,B=_*x+v+1;o.push(I,L,O),o.push(L,B,O)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},An=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function _(){let y=new M,E=new M,A=0,D=(t-e)/i;for(let C=0;C<=r;C++){let S=[],v=C/r,I=v*(t-e)+e;for(let L=0;L<=s;L++){let O=L/s,B=O*l+a,V=Math.sin(B),k=Math.cos(B);E.x=I*V,E.y=-v*i+g,E.z=I*k,u.push(E.x,E.y,E.z),y.set(V,D,k).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-v),S.push(p++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let v=x[S][C],I=x[S+1][C],L=x[S+1][C+1],O=x[S][C+1];(e>0||S!==0)&&(h.push(v,I,O),A+=3),(t>0||S!==r-1)&&(h.push(I,L,O),A+=3)}c.addGroup(m,A,0),m+=A}function b(y){let E=p,A=new ce,D=new M,C=0,S=y===!0?e:t,v=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;let I=p;for(let L=0;L<=s;L++){let B=L/s*l+a,V=Math.cos(B),k=Math.sin(B);D.x=S*k,D.y=g*v,D.z=S*V,u.push(D.x,D.y,D.z),d.push(0,v,0),A.x=V*.5+.5,A.y=k*.5*v+.5,f.push(A.x,A.y),p++}for(let L=0;L<s;L++){let O=E+L,B=I+L;y===!0?h.push(B,B+1,O):h.push(B+1,B,O),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},er=class n extends Ot{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new M,y=new M,E=new M;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],y),f(t[A+2],E),l(b,y,E,_)}function l(_,b,y,E){let A=E+1,D=[];for(let C=0;C<=A;C++){D[C]=[];let S=_.clone().lerp(y,C/A),v=b.clone().lerp(y,C/A),I=A-C;for(let L=0;L<=I;L++)L===0&&C===A?D[C][L]=S:D[C][L]=S.clone().lerp(v,L/I)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){let v=Math.floor(S/2);S%2===0?(d(D[C][v+1]),d(D[C+1][v]),d(D[C][v])):(d(D[C][v+1]),d(D[C+1][v+1]),d(D[C+1][v]))}}function c(_){let b=new M;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new M;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(y,1-E)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],E=o[_+4],A=Math.max(b,y,E),D=Math.min(b,y,E);A>.9&&D<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function p(){let _=new M,b=new M,y=new M,E=new M,A=new ce,D=new ce,C=new ce;for(let S=0,v=0;S<r.length;S+=9,v+=6){_.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),A.set(o[v+0],o[v+1]),D.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),E.copy(_).add(b).add(y).divideScalar(3);let I=g(E);x(A,v+0,_,I),x(D,v+2,b,I),x(C,v+4,y,I)}}function x(_,b,y,E){E<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new _t;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ho=class extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dc=class extends ho{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ql=new M,Hu=new Sd,Wu=new Sd,Xu=new Sd,fc=class extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ql.subVectors(s[0],s[1]).add(s[0]),c=ql);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ql.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Hu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),Wu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),Xu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Hu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Hu.calc(l),Wu.calc(l),Xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ry(n,e){let t=1-n;return t*t*e}function oy(n,e){return 2*(1-n)*n*e}function ay(n,e){return n*n*e}function ra(n,e,t,i){return ry(n,e)+oy(n,t)+ay(n,i)}function ly(n,e){let t=1-n;return t*t*t*e}function cy(n,e){let t=1-n;return 3*t*t*n*e}function hy(n,e){return 3*(1-n)*n*n*e}function uy(n,e){return n*n*n*e}function oa(n,e,t,i,s){return ly(n,e)+cy(n,t)+hy(n,i)+uy(n,s)}var va=class extends Qn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pc=class extends Qn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,s.x,r.x,o.x,a.x),oa(e,s.y,r.y,o.y,a.y),oa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Qn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends Qn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Qn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends Qn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ra(e,s.x,r.x,o.x),ra(e,s.y,r.y,o.y),ra(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Tp(a,l.x,c.x,h.x,u.x),Tp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},$u=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:va,CubicBezierCurve3:pc,EllipseCurve:ho,LineCurve:Ma,LineCurve3:mc,QuadraticBezierCurve:ba,QuadraticBezierCurve3:gc,SplineCurve:Sa}),xc=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new $u[s.type]().fromJSON(s))}return this}},wa=class extends xc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ma(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ba(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new va(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Sa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ho(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class extends wa{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new wa().fromJSON(s))}return this}};function dy(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Am(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=xy(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ta(r,o,t,a,l,c,0),o}function Am(n,e,t,i,s){let r;if(s===Cy(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ep(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ep(o/i|0,n[o],n[o+1],r);return r&&uo(r,r.next)&&(Aa(r),r=r.next),r}function tr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(uo(t,t.next)||Qt(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ta(n,e,t,i,s,r,o){if(!n)return;!o&&r&&by(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?py(n,i,s,r):fy(n)){e.push(l.i,n.i,c.i),Aa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=my(tr(n),e),Ta(n,e,t,i,s,r,2)):o===2&&gy(n,e,t,i,s,r):Ta(tr(n),e,t,i,s,r,1);break}}}function fy(n){let e=n.prev,t=n,i=n.next;if(Qt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&na(s,a,r,l,o,c,p.x,p.y)&&Qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function py(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),m=Qu(f,p,e,t,i),_=Qu(x,g,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=m&&y&&y.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&na(a,h,l,u,c,d,b.x,b.y)&&Qt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&na(a,h,l,u,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&na(a,h,l,u,c,d,b.x,b.y)&&Qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&na(a,h,l,u,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function my(n,e){let t=n;do{let i=t.prev,s=t.next.next;!uo(i,s)&&Rm(i,t,t.next,s)&&Ea(i,s)&&Ea(s,i)&&(e.push(i.i,t.i,s.i),Aa(t),Aa(t.next),t=n=s),t=t.next}while(t!==n);return tr(t)}function gy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ty(o,a)){let l=Im(o,a);o=tr(o,o.next),l=tr(l,l.next),Ta(o,e,t,i,s,r,0),Ta(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function xy(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Am(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(wy(c))}s.sort(yy);for(let r=0;r<s.length;r++)t=_y(s[r],t);return t}function yy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function _y(n,e){let t=vy(n,e);if(!t)return e;let i=Im(t,n);return tr(i,i.next),tr(t,t.next)}function vy(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(uo(n,t))return t;do{if(uo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Cm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ea(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&My(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function My(n,e){return Qt(n.prev,n,e.prev)<0&&Qt(e.next,n,n.next)<0}function by(n,e,t,i){let s=n;do s.z===0&&(s.z=Qu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sy(s)}function Sy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Qu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function wy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Cm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function na(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Cm(n,e,t,i,s,r,o,a)}function Ty(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ey(n,e)&&(Ea(n,e)&&Ea(e,n)&&Ay(n,e)&&(Qt(n.prev,n,e.prev)||Qt(n,e.prev,e))||uo(n,e)&&Qt(n.prev,n,n.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function uo(n,e){return n.x===e.x&&n.y===e.y}function Rm(n,e,t,i){let s=Zl(Qt(n,e,t)),r=Zl(Qt(n,e,i)),o=Zl(Qt(t,i,n)),a=Zl(Qt(t,i,e));return!!(s!==r&&o!==a||s===0&&Yl(n,t,e)||r===0&&Yl(n,i,e)||o===0&&Yl(t,n,i)||a===0&&Yl(t,e,i))}function Yl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Zl(n){return n>0?1:n<0?-1:0}function Ey(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ea(n,e){return Qt(n.prev,n,n.next)<0?Qt(n,e,n.next)>=0&&Qt(n,n.prev,e)>=0:Qt(n,e,n.prev)<0||Qt(n,n.next,e)<0}function Ay(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Im(n,e){let t=ed(n.i,n.x,n.y),i=ed(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ep(n,e,t,i){let s=ed(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ed(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var td=class{static triangulate(e,t,i=2){return dy(e,t,i)}},ki=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ap(e),Cp(i,e);let o=e.length;t.forEach(Ap);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cp(i,t[l]);let a=td.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ap(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var nr=class n extends pt{constructor(e=new is([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ry,b,y=!1,E,A,D,C;m&&(b=m.getSpacedPoints(h),y=!0,d=!1,E=m.computeFrenetFrames(h,!1),A=new M,D=new M,C=new M),d||(g=0,f=0,p=0,x=0);let S=a.extractPoints(c),v=S.shape,I=S.holes;if(!ki.isClockWise(v)){v=v.reverse();for(let re=0,Q=I.length;re<Q;re++){let j=I[re];ki.isClockWise(j)&&(I[re]=j.reverse())}}function O(re){let j=10000000000000001e-36,J=re[0];for(let xe=1;xe<=re.length;xe++){let ue=xe%re.length,be=re[ue],$e=be.x-J.x,Ye=be.y-J.y,R=$e*$e+Ye*Ye,w=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(J.x),Math.abs(J.y)),H=j*w*w;if(R<=H){re.splice(ue,1),xe--;continue}J=be}}O(v),I.forEach(O);let B=I.length,V=v;for(let re=0;re<B;re++){let Q=I[re];v=v.concat(Q)}function k(re,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Q,j)}let te=v.length;function q(re,Q,j){let J,xe,ue,be=re.x-Q.x,$e=re.y-Q.y,Ye=j.x-re.x,R=j.y-re.y,w=be*be+$e*$e,H=be*R-$e*Ye;if(Math.abs(H)>Number.EPSILON){let ee=Math.sqrt(w),he=Math.sqrt(Ye*Ye+R*R),ne=Q.x-$e/ee,De=Q.y+be/ee,Me=j.x-R/he,Le=j.y+Ye/he,Fe=((Me-ne)*R-(Le-De)*Ye)/(be*R-$e*Ye);J=ne+be*Fe-re.x,xe=De+$e*Fe-re.y;let pe=J*J+xe*xe;if(pe<=2)return new ce(J,xe);ue=Math.sqrt(pe/2)}else{let ee=!1;be>Number.EPSILON?Ye>Number.EPSILON&&(ee=!0):be<-Number.EPSILON?Ye<-Number.EPSILON&&(ee=!0):Math.sign($e)===Math.sign(R)&&(ee=!0),ee?(J=-$e,xe=be,ue=Math.sqrt(w)):(J=be,xe=$e,ue=Math.sqrt(w/2))}return new ce(J/ue,xe/ue)}let ae=[];for(let re=0,Q=V.length,j=Q-1,J=re+1;re<Q;re++,j++,J++)j===Q&&(j=0),J===Q&&(J=0),ae[re]=q(V[re],V[j],V[J]);let me=[],_e,Ge=ae.concat();for(let re=0,Q=B;re<Q;re++){let j=I[re];_e=[];for(let J=0,xe=j.length,ue=xe-1,be=J+1;J<xe;J++,ue++,be++)ue===xe&&(ue=0),be===xe&&(be=0),_e[J]=q(j[J],j[ue],j[be]);me.push(_e),Ge=Ge.concat(_e)}let je;if(g===0)je=ki.triangulateShape(V,I);else{let re=[],Q=[];for(let j=0;j<g;j++){let J=j/g,xe=f*Math.cos(J*Math.PI/2),ue=p*Math.sin(J*Math.PI/2)+x;for(let be=0,$e=V.length;be<$e;be++){let Ye=k(V[be],ae[be],ue);de(Ye.x,Ye.y,-xe),J===0&&re.push(Ye)}for(let be=0,$e=B;be<$e;be++){let Ye=I[be];_e=me[be];let R=[];for(let w=0,H=Ye.length;w<H;w++){let ee=k(Ye[w],_e[w],ue);de(ee.x,ee.y,-xe),J===0&&R.push(ee)}J===0&&Q.push(R)}}je=ki.triangulateShape(re,Q)}let ht=je.length,tt=p+x;for(let re=0;re<te;re++){let Q=d?k(v[re],Ge[re],tt):v[re];y?(D.copy(E.normals[0]).multiplyScalar(Q.x),A.copy(E.binormals[0]).multiplyScalar(Q.y),C.copy(b[0]).add(D).add(A),de(C.x,C.y,C.z)):de(Q.x,Q.y,0)}for(let re=1;re<=h;re++)for(let Q=0;Q<te;Q++){let j=d?k(v[Q],Ge[Q],tt):v[Q];y?(D.copy(E.normals[re]).multiplyScalar(j.x),A.copy(E.binormals[re]).multiplyScalar(j.y),C.copy(b[re]).add(D).add(A),de(C.x,C.y,C.z)):de(j.x,j.y,u/h*re)}for(let re=g-1;re>=0;re--){let Q=re/g,j=f*Math.cos(Q*Math.PI/2),J=p*Math.sin(Q*Math.PI/2)+x;for(let xe=0,ue=V.length;xe<ue;xe++){let be=k(V[xe],ae[xe],J);de(be.x,be.y,u+j)}for(let xe=0,ue=I.length;xe<ue;xe++){let be=I[xe];_e=me[xe];for(let $e=0,Ye=be.length;$e<Ye;$e++){let R=k(be[$e],_e[$e],J);y?de(R.x,R.y+b[h-1].y,b[h-1].x+j):de(R.x,R.y,u+j)}}}se(),W();function se(){let re=s.length/3;if(d){let Q=0,j=te*Q;for(let J=0;J<ht;J++){let xe=je[J];F(xe[2]+j,xe[1]+j,xe[0]+j)}Q=h+g*2,j=te*Q;for(let J=0;J<ht;J++){let xe=je[J];F(xe[0]+j,xe[1]+j,xe[2]+j)}}else{for(let Q=0;Q<ht;Q++){let j=je[Q];F(j[2],j[1],j[0])}for(let Q=0;Q<ht;Q++){let j=je[Q];F(j[0]+te*h,j[1]+te*h,j[2]+te*h)}}i.addGroup(re,s.length/3-re,0)}function W(){let re=s.length/3,Q=0;oe(V,Q),Q+=V.length;for(let j=0,J=I.length;j<J;j++){let xe=I[j];oe(xe,Q),Q+=xe.length}i.addGroup(re,s.length/3-re,1)}function oe(re,Q){let j=re.length;for(;--j>=0;){let J=j,xe=j-1;xe<0&&(xe=re.length-1);for(let ue=0,be=h+g*2;ue<be;ue++){let $e=te*ue,Ye=te*(ue+1),R=Q+J+$e,w=Q+xe+$e,H=Q+xe+Ye,ee=Q+J+Ye;$(R,w,H,ee)}}}function de(re,Q,j){l.push(re),l.push(Q),l.push(j)}function F(re,Q,j){Ee(re),Ee(Q),Ee(j);let J=s.length/3,xe=_.generateTopUV(i,s,J-3,J-2,J-1);P(xe[0]),P(xe[1]),P(xe[2])}function $(re,Q,j,J){Ee(re),Ee(Q),Ee(J),Ee(Q),Ee(j),Ee(J);let xe=s.length/3,ue=_.generateSideWallUV(i,s,xe-6,xe-3,xe-2,xe-1);P(ue[0]),P(ue[1]),P(ue[3]),P(ue[1]),P(ue[2]),P(ue[3])}function Ee(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function P(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Iy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $u[s.type]().fromJSON(s)),new n(i,e.options)}},Ry={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-u),new ce(d,1-p),new ce(x,1-m)]:[new ce(a,1-l),new ce(h,1-u),new ce(f,1-p),new ce(g,1-m)]}};function Iy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var di=class n extends co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ca=class n extends pt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new M,d=new ce,f=new M,p=new M,x=new M,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let b=i+_*h*s,y=Math.sin(b),E=Math.cos(b);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),d.x=_/t,d.y=A/(e.length-1),a.push(d.x,d.y);let D=l[3*A+0]*y,C=l[3*A+1],S=l[3*A+0]*E;c.push(D,C,S)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,E=y,A=y+e.length,D=y+e.length+1,C=y+1;r.push(E,A,C),r.push(D,C,A)}this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},fi=class n extends co{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*d-o;for(let b=0;b<c;b++){let y=b*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let b=_+c*m,y=_+c*(m+1),E=_+1+c*(m+1),A=_+1+c*m;f.push(b,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ws=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new M,p=new ce;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,b=_,y=_+i+1,E=_+i+2,A=_+1;a.push(b,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ra=class n extends pt{constructor(e=new is([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];ki.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=ki.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){let _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],b=_[0]+u,y=_[1]+u,E=_[2]+u;i.push(b,y,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Py(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Py(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var pi=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new M,d=new M,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],b=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-b),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let b=h[m][_+1],y=h[m][_],E=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&f.push(b,y,A),(m!==i-1||l<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ir=class n extends co{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ln=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new M,u=new M,d=new M;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ia=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),Rp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Rp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var _n=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ei=class extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_c=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Dy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var sr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends sr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:r=e,a=2*t-i;break;case Ju:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:o=e,l=2*i-t;break;case Ju:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+_*o[c+E]+b*o[l+E]+y*o[u+E];return r}},Mc=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},bc=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jl(t,this.TimeBufferType),this.values=jl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jl(e.times,Array),values:jl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Dy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$l,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ic;var Ts=class extends ti{constructor(e,t,i){super(e,t,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=aa;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};Sc.prototype.ValueTypeName="color";var wc=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};wc.prototype.ValueTypeName="number";var Tc=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pa=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends ti{constructor(e,t,i){super(e,t,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=aa;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends ti{constructor(e,t,i,s){super(e,t,i,s)}};Ec.prototype.ValueTypeName="vector";var Ql={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ac=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pm=new Ac,fo=class{constructor(e){this.manager=e!==void 0?e:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=new WeakMap,Cc=class extends fo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ql.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Yr.get(o);u===void 0&&(u=[],Yr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Qr("img");function l(){h(),t&&t(this);let u=Yr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Yr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ql.remove(`image:${e}`);let d=Yr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Yr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ql.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var mi=class extends fo{constructor(e){super(e)}load(e,t,i,s){let r=new En,o=new Cc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Da=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},rr=class extends Da{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qu=new _t,Ip=new M,Pp=new M,nd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pp),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var La=class extends fa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},id=class extends nd{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new id}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rc=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wd="\\[\\]\\.:\\/",Ly=new RegExp("["+wd+"]","g"),Td="[^"+wd+"]",Uy="[^"+wd.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Td),Fy=/(WCOD+)?/.source.replace("WCOD",Uy),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Td),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Td),zy=new RegExp("^"+Ny+Fy+Oy+By+"$"),ky=["material","materials","bones","map"],sd=class{constructor(e,t,i){let s=i||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){let t=zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ky.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=sd;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _w=new Float32Array(1);var Dp=new _t,ar=class{constructor(e,t,i=0,s=1/0){this.ray=new bs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dp),this}intersectObject(e,t=!0,i=[]){return rd(e,this,i,t),i.sort(Lp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)rd(e[s],this,i,t);return i.sort(Lp),i}};function Lp(n,e){return n.distance-e.distance}function rd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)rd(r[o],e,t,!0)}}var po=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Up=new M,Jl=new M,Zr=new M,jr=new M,Yu=new M,Vy=new M,Gy=new M,Ua=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Up.subVectors(e,this.start),Jl.subVectors(this.end,this.start);let i=Jl.dot(Jl),r=Jl.dot(Up)/i;return t&&(r=it(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Vy,i=Gy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Zr.subVectors(c,a),jr.subVectors(h,l),Yu.subVectors(a,l);let u=Zr.dot(Zr),d=jr.dot(jr),f=jr.dot(Yu);if(u<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/d,o=it(o,0,1);else{let p=Zr.dot(Yu);if(d<=s)o=0,r=it(-p/u,0,1);else{let x=Zr.dot(jr),g=u*d-x*x;g!==0?r=it((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=it(-p/u,0,1)):o>1&&(o=1,r=it((x-p)/u,0,1))}}return t.copy(a).add(Zr.multiplyScalar(r)),i.copy(l).add(jr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Na=class extends Qs{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new pt;h.setAttribute("position",new Be(l,3)),h.setAttribute("color",new Be(c,3));let u=new ui({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Kl=new dn,mo=class extends Qs{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new pt;r.setIndex(new Ft(i,1)),r.setAttribute("position",new Ft(s,3)),super(r,new ui({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Kl.setFromObject(this.object),Kl.isEmpty())return;let e=Kl.min,t=Kl.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var lr=class extends Gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ed(n,e,t,i){let s=Hy(i);switch(t){case md:return n*e;case Hc:return n*e/s.components*s.byteLength;case Wc:return n*e/s.components*s.byteLength;case xd:return n*e*2/s.components*s.byteLength;case Xc:return n*e*2/s.components*s.byteLength;case gd:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case qc:return n*e*4/s.components*s.byteLength;case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Jc:return Math.max(n,16)*Math.max(e,8)/4;case Yc:case jc:return Math.max(n,8)*Math.max(e,8)/2;case Kc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _h:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hy(n){switch(n){case Pi:case ud:return{byteLength:1,components:1};case go:case dd:case xo:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case Cs:case kc:case Di:return{byteLength:4,components:1};case fd:case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Zy(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y_=`#define PI 3.141592653589793
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,Z_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sv=`#if defined( USE_POINTS_UV )
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
#endif`,rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
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
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lv=`float getShadowMask() {
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
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,MM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:jy,alphahash_pars_fragment:Jy,alphamap_fragment:Ky,alphamap_pars_fragment:$y,alphatest_fragment:Qy,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:x_,common:y_,cube_uv_reflection_fragment:__,defaultnormal_vertex:v_,displacementmap_pars_vertex:M_,displacementmap_vertex:b_,emissivemap_fragment:S_,emissivemap_pars_fragment:w_,colorspace_fragment:T_,colorspace_pars_fragment:E_,envmap_fragment:A_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:V_,envmap_vertex:P_,fog_vertex:D_,fog_pars_vertex:L_,fog_fragment:U_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:k_,lights_toon_fragment:G_,lights_toon_pars_fragment:H_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:Z_,lights_fragment_maps:j_,lights_fragment_end:J_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:ev,map_fragment:tv,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:sv,metalnessmap_fragment:rv,metalnessmap_pars_fragment:ov,morphinstance_vertex:av,morphcolor_vertex:lv,morphnormal_vertex:cv,morphtarget_pars_vertex:hv,morphtarget_vertex:uv,normal_fragment_begin:dv,normal_fragment_maps:fv,normal_pars_fragment:pv,normal_pars_vertex:mv,normal_vertex:gv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:vv,iridescence_pars_fragment:Mv,opaque_fragment:bv,packing:Sv,premultiplied_alpha_fragment:wv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:Av,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Iv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Dv,shadowmask_pars_fragment:Lv,skinbase_vertex:Uv,skinning_pars_vertex:Nv,skinning_vertex:Fv,skinnormal_vertex:Ov,specularmap_fragment:Bv,specularmap_pars_fragment:zv,tonemapping_fragment:kv,tonemapping_pars_fragment:Vv,transmission_fragment:Gv,transmission_pars_fragment:Hv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:qv,worldpos_vertex:Yv,background_vert:Zv,background_frag:jv,backgroundCube_vert:Jv,backgroundCube_frag:Kv,cube_vert:$v,cube_frag:Qv,depth_vert:eM,depth_frag:tM,distanceRGBA_vert:nM,distanceRGBA_frag:iM,equirect_vert:sM,equirect_frag:rM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:hM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:_M,meshtoon_vert:vM,meshtoon_frag:MM,points_vert:bM,points_frag:SM,shadow_vert:wM,shadow_frag:TM,sprite_vert:EM,sprite_frag:AM},Re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Xi={basic:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new He(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Cn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Cn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new He(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Cn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Cn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Cn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Cn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Cn([Re.common,Re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Cn([Re.lights,Re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Xi.physical={uniforms:Cn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var bh={r:0,b:0,g:0},dr=new tn,CM=new _t;function RM(n,e,t,i,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,E=p(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,y){let E=p(y);E&&(E.isCubeTexture||E.mapping===Oa)?(h===void 0&&(h=new fe(new qe(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ur(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),dr.copy(y.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(dr)),h.material.toneMapped=wt.getTransfer(E.colorSpace)!==Nt,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new fe(new Mn(2,2),new Ci({name:"BackgroundMaterial",uniforms:ur(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=wt.getTransfer(E.colorSpace)!==Nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(bh,bd(n)),i.buffers.color.setClear(bh.r,bh.g,bh.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g,dispose:_}}function IM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,I,L,O,B){let V=!1,k=u(O,L,I);r!==k&&(r=k,c(r.object)),V=f(v,O,L,B),V&&p(v,O,L,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(v,I,L,O),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,I,L){let O=L.wireframe===!0,B=i[v.id];B===void 0&&(B={},i[v.id]=B);let V=B[I.id];V===void 0&&(V={},B[I.id]=V);let k=V[O];return k===void 0&&(k=d(l()),V[O]=k),k}function d(v){let I=[],L=[],O=[];for(let B=0;B<t;B++)I[B]=0,L[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,I,L,O){let B=r.attributes,V=I.attributes,k=0,te=L.getAttributes();for(let q in te)if(te[q].location>=0){let me=B[q],_e=V[q];if(_e===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function p(v,I,L,O){let B={},V=I.attributes,k=0,te=L.getAttributes();for(let q in te)if(te[q].location>=0){let me=V[q];me===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),B[q]=_e,k++}r.attributes=B,r.attributesNum=k,r.index=O}function x(){let v=r.newAttributes;for(let I=0,L=v.length;I<L;I++)v[I]=0}function g(v){m(v,0)}function m(v,I){let L=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;L[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),B[v]!==I&&(n.vertexAttribDivisor(v,I),B[v]=I)}function _(){let v=r.newAttributes,I=r.enabledAttributes;for(let L=0,O=I.length;L<O;L++)I[L]!==v[L]&&(n.disableVertexAttribArray(L),I[L]=0)}function b(v,I,L,O,B,V,k){k===!0?n.vertexAttribIPointer(v,I,L,B,V):n.vertexAttribPointer(v,I,L,O,B,V)}function y(v,I,L,O){x();let B=O.attributes,V=L.getAttributes(),k=I.defaultAttributeValues;for(let te in V){let q=V[te];if(q.location>=0){let ae=B[te];if(ae===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){let me=ae.normalized,_e=ae.itemSize,Ge=e.get(ae);if(Ge===void 0)continue;let je=Ge.buffer,ht=Ge.type,tt=Ge.bytesPerElement,se=ht===n.INT||ht===n.UNSIGNED_INT||ae.gpuType===kc;if(ae.isInterleavedBufferAttribute){let W=ae.data,oe=W.stride,de=ae.offset;if(W.isInstancedInterleavedBuffer){for(let F=0;F<q.locationSize;F++)m(q.location+F,W.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let F=0;F<q.locationSize;F++)g(q.location+F);n.bindBuffer(n.ARRAY_BUFFER,je);for(let F=0;F<q.locationSize;F++)b(q.location+F,_e/q.locationSize,ht,me,oe*tt,(de+_e/q.locationSize*F)*tt,se)}else{if(ae.isInstancedBufferAttribute){for(let W=0;W<q.locationSize;W++)m(q.location+W,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<q.locationSize;W++)g(q.location+W);n.bindBuffer(n.ARRAY_BUFFER,je);for(let W=0;W<q.locationSize;W++)b(q.location+W,_e/q.locationSize,ht,me,_e*tt,_e/q.locationSize*W*tt,se)}}else if(k!==void 0){let me=k[te];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(q.location,me);break;case 3:n.vertexAttrib3fv(q.location,me);break;case 4:n.vertexAttrib4fv(q.location,me);break;default:n.vertexAttrib1fv(q.location,me)}}}}_()}function E(){C();for(let v in i){let I=i[v];for(let L in I){let O=I[L];for(let B in O)h(O[B].object),delete O[B];delete I[L]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let I=i[v.id];for(let L in I){let O=I[L];for(let B in O)h(O[B].object),delete O[B];delete I[L]}delete i[v.id]}function D(v){for(let I in i){let L=i[I];if(L[v.id]===void 0)continue;let O=L[v.id];for(let B in O)h(O[B].object),delete O[B];delete L[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function PM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Fn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let C=D===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Di&&!C)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function LM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Tn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,b=_*4,y=m.clippingState||null;l.value=y,y=h(p,d,b,f);for(let E=0;E!==b;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function UM(n){let e=new WeakMap;function t(o,a){return a===Ii?o.mapping=cr:a===Bc&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ii||a===Bc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Mo=4,Dm=[.125,.215,.35,.446,.526,.582],mr=20,Ad=new La,Lm=new He,Cd=null,Rd=0,Id=0,Pd=!1,pr=(1+Math.sqrt(5))/2,vo=1/pr,Um=[new M(-pr,vo,0),new M(pr,vo,0),new M(-vo,0,pr),new M(vo,0,pr),new M(0,pr,-vo),new M(0,pr,vo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],NM=new M,So=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=NM}=r;Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Rd,Id),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Sh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:xo,format:Fn,colorSpace:Js,depthBuffer:!1},s=Nm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FM(r)),this._blurMaterial=OM(r,e,t)}return s}_compileMaterial(e){let t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,Ad)}_sceneToCubeUV(e,t,i,s,r){let l=new wn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lm),u.toneMapping=rs,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new on({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),g=new fe(new qe,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(Lm),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let E=this._cubeSize;Sh(s,y*E,b>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Sh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ad)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Um[(s-r-1)%Um.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mr-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):mr;g>mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mr}`);let m=[],_=0;for(let D=0;D<mr;++D){let C=D/x,S=Math.exp(-C*C/2);m.push(S),D===0?_+=S:D<g&&(_+=2*S)}for(let D=0;D<m.length;D++)m[D]=m[D]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-i;let y=this._sizeLods[s],E=3*y*(s>b-Mo?s-b+Mo:0),A=4*(this._cubeSize-y);Sh(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Ad)}};function FM(n){let e=[],t=[],i=[],s=n,r=n-Mo+1+Dm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Mo?l=Dm[o-n+Mo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),b=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let A=0;A<f;A++){let D=A%3*2/3-1,C=A>2?0:-1,S=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];_.set(S,x*p*A),b.set(d,g*p*A);let v=[A,A,A,A,A,A];y.set(v,m*p*A)}let E=new pt;E.setAttribute("position",new Ft(_,x)),E.setAttribute("uv",new Ft(b,g)),E.setAttribute("faceIndex",new Ft(y,m)),e.push(E),s>Mo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nm(n,e,t){let i=new Hi(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function OM(n,e,t){let i=new Float32Array(mr),s=new M(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Fm(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Om(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function BM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ii||l===Bc,h=l===cr||l===hr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new So(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new So(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kM(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let b=0,y=_.length;b<y;b+=3){let E=_[b+0],A=_[b+1],D=_[b+2];d.push(E,A,A,D,D,E)}}else if(p!==void 0){let _=p.array;x=p.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let E=b+0,A=b+1,D=b+2;d.push(E,A,A,D,D,E)}}else return;let g=new(Md(d)?da:ua)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function VM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function GM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function HM(n,e,t){let i=new WeakMap,s=new en;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*u),D=new ha(A,y,E,u);D.type=Di,D.needsUpdate=!0;let C=b*4;for(let v=0;v<u;v++){let I=g[v],L=m[v],O=_[v],B=y*E*4*v;for(let V=0;V<I.count;V++){let k=V*C;f===!0&&(s.fromBufferAttribute(I,V),A[B+k+0]=s.x,A[B+k+1]=s.y,A[B+k+2]=s.z,A[B+k+3]=0),p===!0&&(s.fromBufferAttribute(L,V),A[B+k+4]=s.x,A[B+k+5]=s.y,A[B+k+6]=s.z,A[B+k+7]=0),x===!0&&(s.fromBufferAttribute(O,V),A[B+k+8]=s.x,A[B+k+9]=s.y,A[B+k+10]=s.z,A[B+k+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new ce(y,E)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function WM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ng=new En,Bm=new ya(1,1),ig=new ha,sg=new ac,rg=new pa,zm=[],km=[],Vm=new Float32Array(16),Gm=new Float32Array(9),Hm=new Float32Array(4);function wo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=zm[s];if(r===void 0&&(r=new Float32Array(s),zm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eh(n,e){let t=km[e];t===void 0&&(t=new Int32Array(e),km[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function YM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function ZM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function jM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Hm.set(i),n.uniformMatrix2fv(this.addr,!1,Hm),pn(t,i)}}function JM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Gm.set(i),n.uniformMatrix3fv(this.addr,!1,Gm),pn(t,i)}}function KM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;Vm.set(i),n.uniformMatrix4fv(this.addr,!1,Vm),pn(t,i)}}function $M(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function nb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function ob(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bm.compareFunction=yd,r=Bm):r=ng,t.setTexture2D(e||r,s)}function ab(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||sg,s)}function lb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||rg,s)}function cb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ig,s)}function hb(n){switch(n){case 5126:return XM;case 35664:return qM;case 35665:return YM;case 35666:return ZM;case 35674:return jM;case 35675:return JM;case 35676:return KM;case 5124:case 35670:return $M;case 35667:case 35671:return QM;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function ub(n,e){n.uniform1fv(this.addr,e)}function db(n,e){let t=wo(e,this.size,2);n.uniform2fv(this.addr,t)}function fb(n,e){let t=wo(e,this.size,3);n.uniform3fv(this.addr,t)}function pb(n,e){let t=wo(e,this.size,4);n.uniform4fv(this.addr,t)}function mb(n,e){let t=wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gb(n,e){let t=wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xb(n,e){let t=wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yb(n,e){n.uniform1iv(this.addr,e)}function _b(n,e){n.uniform2iv(this.addr,e)}function vb(n,e){n.uniform3iv(this.addr,e)}function Mb(n,e){n.uniform4iv(this.addr,e)}function bb(n,e){n.uniform1uiv(this.addr,e)}function Sb(n,e){n.uniform2uiv(this.addr,e)}function wb(n,e){n.uniform3uiv(this.addr,e)}function Tb(n,e){n.uniform4uiv(this.addr,e)}function Eb(n,e,t){let i=this.cache,s=e.length,r=Eh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ng,r[o])}function Ab(n,e,t){let i=this.cache,s=e.length,r=Eh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sg,r[o])}function Cb(n,e,t){let i=this.cache,s=e.length,r=Eh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rg,r[o])}function Rb(n,e,t){let i=this.cache,s=e.length,r=Eh(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ig,r[o])}function Ib(n){switch(n){case 5126:return ub;case 35664:return db;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return xb;case 5124:case 35670:return yb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return Mb;case 5125:return bb;case 36294:return Sb;case 36295:return wb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}var Ld=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hb(t.type)}},Ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ib(t.type)}},Nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Dd=/(\w+)(\])?(\[|\.)?/g;function Wm(n,e){n.seq.push(e),n.map[e.id]=e}function Pb(n,e,t){let i=n.name,s=i.length;for(Dd.lastIndex=0;;){let r=Dd.exec(i),o=Dd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wm(t,c===void 0?new Ld(a,n,e):new Ud(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Nd(a),Wm(t,u)),t=u}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Pb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Xm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Db=37297,Lb=0;function Ub(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var qm=new at;function Nb(n){wt._getMatrix(qm,wt.workingColorSpace,n);let e=`mat3( ${qm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ym(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ub(n.getShaderSource(e),a)}else return r}function Fb(n,e){let t=Nb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ob(n,e){let t;switch(e){case sm:t="Linear";break;case rm:t="Reinhard";break;case om:t="Cineon";break;case am:t="ACESFilmic";break;case cm:t="AgX";break;case hm:t="Neutral";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wh=new M;function Bb(){wt.getLuminanceCoefficients(wh);let n=wh.x.toFixed(4),e=wh.y.toFixed(4),t=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function kb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wa(n){return n!==""}function Zm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(n){return n.replace(Gb,Wb)}var Hb=new Map;function Wb(n,e){let t=mt[e];if(t===void 0){let i=Hb.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(t)}var Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(n){return n.replace(Xb,qb)}function qb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Km(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Yb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function Kb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $b(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Yb(t),c=Zb(t),h=jb(t),u=Jb(t),d=Kb(t),f=zb(t),p=kb(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wa).join(`
`),m.length>0&&(m+=`
`)):(g=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),m=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?mt.tonemapping_pars_fragment:"",t.toneMapping!==rs?Ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Fb("linearToOutputTexel",t.outputColorSpace),Bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),o=Fd(o),o=Zm(o,t),o=jm(o,t),a=Fd(a),a=Zm(a,t),a=jm(a,t),o=Jm(o),a=Jm(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+o,y=_+m+a,E=Xm(s,s.VERTEX_SHADER,b),A=Xm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(I){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(A)||"",V=L.trim(),k=O.trim(),te=B.trim(),q=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,A);else{let me=Ym(s,E,"vertex"),_e=Ym(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+me+`
`+_e)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||te==="")&&(ae=!1);ae&&(I.diagnostics={runnable:q,programLog:V,vertexShader:{log:k,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(E),s.deleteShader(A),C=new bo(s,x),S=Vb(s,x)}let C;this.getUniforms=function(){return C===void 0&&D(this),C};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Db)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var Qb=0,Od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bd(e),t.set(e,i)),i}},Bd=class{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}};function eS(n,e,t,i,s,r,o){let a=new no,l=new Od,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,I,L,O){let B=L.fog,V=O.geometry,k=S.isMeshStandardMaterial?L.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=te&&te.mapping===Oa?te.image.height:null,ae=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=me!==void 0?me.length:0,Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let je,ht,tt,se;if(ae){let X=Xi[ae];je=X.vertexShader,ht=X.fragmentShader}else je=S.vertexShader,ht=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);let W=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),de=O.isInstancedMesh===!0,F=O.isBatchedMesh===!0,$=!!S.map,Ee=!!S.matcap,P=!!te,re=!!S.aoMap,Q=!!S.lightMap,j=!!S.bumpMap,J=!!S.normalMap,xe=!!S.displacementMap,ue=!!S.emissiveMap,be=!!S.metalnessMap,$e=!!S.roughnessMap,Ye=S.anisotropy>0,R=S.clearcoat>0,w=S.dispersion>0,H=S.iridescence>0,ee=S.sheen>0,he=S.transmission>0,ne=Ye&&!!S.anisotropyMap,De=R&&!!S.clearcoatMap,Me=R&&!!S.clearcoatNormalMap,Le=R&&!!S.clearcoatRoughnessMap,Fe=H&&!!S.iridescenceMap,pe=H&&!!S.iridescenceThicknessMap,Ae=ee&&!!S.sheenColorMap,Ve=ee&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Ce=!!S.specularColorMap,Qe=!!S.specularIntensityMap,N=he&&!!S.transmissionMap,ye=he&&!!S.thicknessMap,Se=!!S.gradientMap,Pe=!!S.alphaMap,ge=S.alphaTest>0,le=!!S.alphaHash,Oe=!!S.extensions,rt=rs;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(rt=n.toneMapping);let kt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:ht,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:F,batchingColor:F&&O._colorsTexture!==null,instancing:de,instancingColor:de&&O.instanceColor!==null,instancingMorph:de&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:$,matcap:Ee,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:Q,bumpMap:j,normalMap:J,displacementMap:d&&xe,emissiveMap:ue,normalMapObjectSpace:J&&S.normalMapType===pm,normalMapTangentSpace:J&&S.normalMapType===Mh,metalnessMap:be,roughnessMap:$e,anisotropy:Ye,anisotropyMap:ne,clearcoat:R,clearcoatMap:De,clearcoatNormalMap:Me,clearcoatRoughnessMap:Le,dispersion:w,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:pe,sheen:ee,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:Ce,specularIntensityMap:Qe,transmission:he,transmissionMap:N,thicknessMap:ye,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ge,alphaHash:le,combine:S.combine,mapUv:$&&x(S.map.channel),aoMapUv:re&&x(S.aoMap.channel),lightMapUv:Q&&x(S.lightMap.channel),bumpMapUv:j&&x(S.bumpMap.channel),normalMapUv:J&&x(S.normalMap.channel),displacementMapUv:xe&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:be&&x(S.metalnessMap.channel),roughnessMapUv:$e&&x(S.roughnessMap.channel),anisotropyMapUv:ne&&x(S.anisotropyMap.channel),clearcoatMapUv:De&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(S.sheenRoughnessMap.channel),specularMapUv:ze&&x(S.specularMap.channel),specularColorMapUv:Ce&&x(S.specularColorMap.channel),specularIntensityMapUv:Qe&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:ye&&x(S.thicknessMap.channel),alphaMapUv:Pe&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(J||Ye),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&($||Pe),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:$&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Nt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&wt.getTransfer(S.emissiveMap.colorSpace)===Nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||F)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)v.push(I),v.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function _(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let v=p[S.type],I;if(v){let L=Xi[v];I=Tm.clone(L.uniforms)}else I=S.uniforms;return I}function E(S,v){let I;for(let L=0,O=h.length;L<O;L++){let B=h[L];if(B.cacheKey===v){I=B,++I.usedTimes;break}}return I===void 0&&(I=new $b(n,v,S,r),h.push(I)),I}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:C}}function tS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||nS),i.length>1&&i.sort(d||$m),s.length>1&&s.sort(d||$m)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function iS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Qm,n.set(i,[o])):s>=r.length?(o=new Qm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new He};break;case"SpotLight":t={position:new M,direction:new M,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function rS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var oS=0;function aS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lS(n){let e=new sS,t=rS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new _t,o=new _t;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,b=0,y=0,E=0,A=0,D=0;c.sort(aS);for(let S=0,v=c.length;S<v;S++){let I=c[S],L=I.color,O=I.intensity,B=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*O,u+=L.g*O,d+=L.b*O;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],O);D++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=I.shadow.matrix,_++}i.directional[f]=k,f++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(L).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[x]=k;let te=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,te.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=te.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=V,y++}x++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(L).multiplyScalar(O),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=k,g++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let te=I.shadow,q=t.get(I);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=k,p++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(O),k.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=D,i.version=oS++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let b=c[m];if(b.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function eg(n){let e=new lS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new eg(n),e.set(s,[a])):r>=o.length?(a=new eg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var hS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
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
}`;function dS(n,e,t){let i=new lo,s=new ce,r=new ce,o=new en,a=new yc({depthPacking:fm}),l=new _c,c={},h=t.maxTextureSize,u={[$n]:Un,[Un]:$n,[cn]:cn},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:hS,fragmentShader:uS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let m=this.type;this.render=function(A,D,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ss),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==Wi&&this.type===Wi,B=m===Wi&&this.type!==Wi;for(let V=0,k=A.length;V<k;V++){let te=A[V],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ae=q.getFrameExtents();if(s.multiply(ae),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,q.mapSize.y=r.y)),q.map===null||O===!0||B===!0){let _e=this.type!==Wi?{minFilter:Vn,magFilter:Vn}:{};q.map!==null&&q.map.dispose(),q.map=new Hi(s.x,s.y,_e),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let me=q.getViewportCount();for(let _e=0;_e<me;_e++){let Ge=q.getViewport(_e);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),L.viewport(o),q.updateMatrices(te,_e),i=q.getFrustum(),y(D,C,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Wi&&_(q,C),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,v,I)};function _(A,D){let C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,C,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,C,f,x,null)}function b(A,D,C,S){let v=null,I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let L=v.uuid,O=D.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let V=B[O];V===void 0&&(V=v.clone(),B[O]=V,D.addEventListener("dispose",E)),v=V}if(v.visible=D.visible,v.wireframe=D.wireframe,S===Wi?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:u[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=n.properties.get(v);L.light=C}return v}function y(A,D,C,S,v){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let O=e.update(A),B=A.material;if(Array.isArray(B)){let V=O.groups;for(let k=0,te=V.length;k<te;k++){let q=V[k],ae=B[q.materialIndex];if(ae&&ae.visible){let me=b(A,ae,S,v);A.onBeforeShadow(n,A,D,C,O,me,q),n.renderBufferDirect(C,null,O,me,A,q),A.onAfterShadow(n,A,D,C,O,me,q)}}}else if(B.visible){let V=b(A,B,S,v);A.onBeforeShadow(n,A,D,C,O,V,null),n.renderBufferDirect(C,null,O,V,A,null),A.onAfterShadow(n,A,D,C,O,V,null)}}let L=A.children;for(let O=0,B=L.length;O<B;O++)y(L[O],D,C,S,v)}function E(A){A.target.removeEventListener("dispose",E);for(let C in c){let S=c[C],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var fS={[Ic]:Pc,[Dc]:Nc,[Lc]:Fc,[js]:Uc,[Pc]:Ic,[Nc]:Dc,[Fc]:Lc,[Uc]:js};function pS(n,e){function t(){let N=!1,ye=new en,Se=null,Pe=new en(0,0,0,0);return{setMask:function(ge){Se!==ge&&!N&&(n.colorMask(ge,ge,ge,ge),Se=ge)},setLocked:function(ge){N=ge},setClear:function(ge,le,Oe,rt,kt){kt===!0&&(ge*=rt,le*=rt,Oe*=rt),ye.set(ge,le,Oe,rt),Pe.equals(ye)===!1&&(n.clearColor(ge,le,Oe,rt),Pe.copy(ye))},reset:function(){N=!1,Se=null,Pe.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,Se=null,Pe=null,ge=null;return{setReversed:function(le){if(ye!==le){let Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=le;let rt=ge;ge=null,this.setClear(rt)}},getReversed:function(){return ye},setTest:function(le){le?W(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(le){Se!==le&&!N&&(n.depthMask(le),Se=le)},setFunc:function(le){if(ye&&(le=fS[le]),Pe!==le){switch(le){case Ic:n.depthFunc(n.NEVER);break;case Pc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Uc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=le}},setLocked:function(le){N=le},setClear:function(le){ge!==le&&(ye&&(le=1-le),n.clearDepth(le),ge=le)},reset:function(){N=!1,Se=null,Pe=null,ge=null,ye=!1}}}function s(){let N=!1,ye=null,Se=null,Pe=null,ge=null,le=null,Oe=null,rt=null,kt=null;return{setTest:function(X){N||(X?W(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(X){ye!==X&&!N&&(n.stencilMask(X),ye=X)},setFunc:function(X,Y,we){(Se!==X||Pe!==Y||ge!==we)&&(n.stencilFunc(X,Y,we),Se=X,Pe=Y,ge=we)},setOp:function(X,Y,we){(le!==X||Oe!==Y||rt!==we)&&(n.stencilOp(X,Y,we),le=X,Oe=Y,rt=we)},setLocked:function(X){N=X},setClear:function(X){kt!==X&&(n.clearStencil(X),kt=X)},reset:function(){N=!1,ye=null,Se=null,Pe=null,ge=null,le=null,Oe=null,rt=null,kt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,b=null,y=null,E=null,A=null,D=new He(0,0,0),C=0,S=!1,v=null,I=null,L=null,O=null,B=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,te=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=te>=2);let ae=null,me={},_e=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),je=new en().fromArray(_e),ht=new en().fromArray(Ge);function tt(N,ye,Se,Pe){let ge=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<Se;Oe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ye+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return le}let se={};se[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(js),j(!1),J(od),W(n.CULL_FACE),re(ss);function W(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function oe(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function de(N,ye){return u[N]!==ye?(n.bindFramebuffer(N,ye),u[N]=ye,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function F(N,ye){let Se=f,Pe=!1;if(N){Se=d.get(ye),Se===void 0&&(Se=[],d.set(ye,Se));let ge=N.textures;if(Se.length!==ge.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Oe=ge.length;le<Oe;le++)Se[le]=n.COLOR_ATTACHMENT0+le;Se.length=ge.length,Pe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(Se)}function $(N){return p!==N?(n.useProgram(N),p=N,!0):!1}let Ee={[Ms]:n.FUNC_ADD,[zp]:n.FUNC_SUBTRACT,[kp]:n.FUNC_REVERSE_SUBTRACT};Ee[Vp]=n.MIN,Ee[Gp]=n.MAX;let P={[Hp]:n.ZERO,[Wp]:n.ONE,[Xp]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[jp]:n.DST_COLOR,[Yp]:n.DST_ALPHA,[qp]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[Jp]:n.ONE_MINUS_DST_COLOR,[Zp]:n.ONE_MINUS_DST_ALPHA,[$p]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[em]:n.CONSTANT_ALPHA,[tm]:n.ONE_MINUS_CONSTANT_ALPHA};function re(N,ye,Se,Pe,ge,le,Oe,rt,kt,X){if(N===ss){x===!0&&(oe(n.BLEND),x=!1);return}if(x===!1&&(W(n.BLEND),x=!0),N!==Bp){if(N!==g||X!==S){if((m!==Ms||y!==Ms)&&(n.blendEquation(n.FUNC_ADD),m=Ms,y=Ms),X)switch(N){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ld:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,b=null,E=null,A=null,D.set(0,0,0),C=0,g=N,S=X}return}ge=ge||ye,le=le||Se,Oe=Oe||Pe,(ye!==m||ge!==y)&&(n.blendEquationSeparate(Ee[ye],Ee[ge]),m=ye,y=ge),(Se!==_||Pe!==b||le!==E||Oe!==A)&&(n.blendFuncSeparate(P[Se],P[Pe],P[le],P[Oe]),_=Se,b=Pe,E=le,A=Oe),(rt.equals(D)===!1||kt!==C)&&(n.blendColor(rt.r,rt.g,rt.b,kt),D.copy(rt),C=kt),g=N,S=!1}function Q(N,ye){N.side===cn?oe(n.CULL_FACE):W(n.CULL_FACE);let Se=N.side===Un;ye&&(Se=!Se),j(Se),N.blending===Zs&&N.transparent===!1?re(ss):re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Pe=N.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){v!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),v=N)}function J(N){N!==Np?(W(n.CULL_FACE),N!==I&&(N===od?n.cullFace(n.BACK):N===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),I=N}function xe(N){N!==L&&(k&&n.lineWidth(N),L=N)}function ue(N,ye,Se){N?(W(n.POLYGON_OFFSET_FILL),(O!==ye||B!==Se)&&(n.polygonOffset(ye,Se),O=ye,B=Se)):oe(n.POLYGON_OFFSET_FILL)}function be(N){N?W(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function $e(N){N===void 0&&(N=n.TEXTURE0+V-1),ae!==N&&(n.activeTexture(N),ae=N)}function Ye(N,ye,Se){Se===void 0&&(ae===null?Se=n.TEXTURE0+V-1:Se=ae);let Pe=me[Se];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[Se]=Pe),(Pe.type!==N||Pe.texture!==ye)&&(ae!==Se&&(n.activeTexture(Se),ae=Se),n.bindTexture(N,ye||se[N]),Pe.type=N,Pe.texture=ye)}function R(){let N=me[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ve(N){ht.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function ze(N,ye){let Se=c.get(ye);Se===void 0&&(Se=new WeakMap,c.set(ye,Se));let Pe=Se.get(N);Pe===void 0&&(Pe=n.getUniformBlockIndex(ye,N.name),Se.set(N,Pe))}function Ce(N,ye){let Pe=c.get(ye).get(N);l.get(ye)!==Pe&&(n.uniformBlockBinding(ye,Pe,N.__bindingPointIndex),l.set(ye,Pe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,me={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,b=null,y=null,E=null,A=null,D=new He(0,0,0),C=0,S=!1,v=null,I=null,L=null,O=null,B=null,je.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:oe,bindFramebuffer:de,drawBuffers:F,useProgram:$,setBlending:re,setMaterial:Q,setFlipSided:j,setCullFace:J,setLineWidth:xe,setPolygonOffset:ue,setScissorTest:be,activeTexture:$e,bindTexture:Ye,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:Fe,texImage3D:pe,updateUBOMapping:ze,uniformBlockBinding:Ce,texStorage2D:Me,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:ne,compressedTexSubImage3D:De,scissor:Ae,viewport:Ve,reset:Qe}}function mS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,w){return f?new OffscreenCanvas(R,w):Qr("canvas")}function x(R,w,H){let ee=1,he=Ye(R);if((he.width>H||he.height>H)&&(ee=H/Math.max(he.width,he.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ne=Math.floor(ee*he.width),De=Math.floor(ee*he.height);u===void 0&&(u=p(ne,De));let Me=w?p(ne,De):u;return Me.width=ne,Me.height=De,Me.getContext("2d").drawImage(R,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ne+"x"+De+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,w,H,ee,he=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=w;if(w===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),w===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RG8UI),H===n.UNSIGNED_SHORT&&(ne=n.RG16UI),H===n.UNSIGNED_INT&&(ne=n.RG32UI),H===n.BYTE&&(ne=n.RG8I),H===n.SHORT&&(ne=n.RG16I),H===n.INT&&(ne=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),H===n.UNSIGNED_INT&&(ne=n.RGB32UI),H===n.BYTE&&(ne=n.RGB8I),H===n.SHORT&&(ne=n.RGB16I),H===n.INT&&(ne=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),H===n.UNSIGNED_INT&&(ne=n.RGBA32UI),H===n.BYTE&&(ne=n.RGBA8I),H===n.SHORT&&(ne=n.RGBA16I),H===n.INT&&(ne=n.RGBA32I)),w===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),w===n.RGBA){let De=he?la:wt.getTransfer(ee);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=De===Nt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(R,w){let H;return R?w===null||w===Cs||w===yo?H=n.DEPTH24_STENCIL8:w===Di?H=n.DEPTH32F_STENCIL8:w===go&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cs||w===yo?H=n.DEPTH_COMPONENT24:w===Di?H=n.DEPTH_COMPONENT32F:w===go&&(H=n.DEPTH_COMPONENT16),H}function E(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vn&&R.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){let w=R.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function D(R){let w=R.target;w.removeEventListener("dispose",D),v(w)}function C(R){let w=i.get(R);if(w.__webglInit===void 0)return;let H=R.source,ee=d.get(H);if(ee){let he=ee[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(R),Object.keys(ee).length===0&&d.delete(H)}i.remove(R)}function S(R){let w=i.get(R);n.deleteTexture(w.__webglTexture);let H=R.source,ee=d.get(H);delete ee[w.__cacheKey],o.memory.textures--}function v(R){let w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let he=0;he<w.__webglFramebuffer[ee].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ee][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=R.textures;for(let ee=0,he=H.length;ee<he;ee++){let ne=i.get(H[ee]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(H[ee])}i.remove(R)}let I=0;function L(){I=0}function O(){let R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function B(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function V(R,w){let H=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,R,w);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function k(R,w){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){se(H,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function te(R,w){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){se(H,R,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function q(R,w){let H=i.get(R);if(R.version>0&&H.__version!==R.version){W(H,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}let ae={[Dn]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},me={[Vn]:n.NEAREST,[um]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[zc]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},_e={[mm]:n.NEVER,[Mm]:n.ALWAYS,[gm]:n.LESS,[yd]:n.LEQUAL,[xm]:n.EQUAL,[vm]:n.GEQUAL,[ym]:n.GREATER,[_m]:n.NOTEQUAL};function Ge(R,w){if(w.type===Di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===un||w.magFilter===zc||w.magFilter===Ba||w.magFilter===Nn||w.minFilter===un||w.minFilter===zc||w.minFilter===Ba||w.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ae[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_e[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vn||w.minFilter!==Ba&&w.minFilter!==Nn||w.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function je(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));let ee=w.source,he=d.get(ee);he===void 0&&(he={},d.set(ee,he));let ne=B(w);if(ne!==R.__cacheKey){he[ne]===void 0&&(he[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),he[ne].usedTimes++;let De=he[R.__cacheKey];De!==void 0&&(he[R.__cacheKey].usedTimes--,De.usedTimes===0&&S(w)),R.__cacheKey=ne,R.__webglTexture=he[ne].texture}return H}function ht(R,w,H){return Math.floor(Math.floor(R/H)/w)}function tt(R,w,H,ee){let ne=R.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,H,ee,w.data);else{ne.sort((pe,Ae)=>pe.start-Ae.start);let De=0;for(let pe=1;pe<ne.length;pe++){let Ae=ne[De],Ve=ne[pe],ze=Ae.start+Ae.count,Ce=ht(Ve.start,w.width,4),Qe=ht(Ae.start,w.width,4);Ve.start<=ze+1&&Ce===Qe&&ht(Ve.start+Ve.count-1,w.width,4)===Ce?Ae.count=Math.max(Ae.count,Ve.start+Ve.count-Ae.start):(++De,ne[De]=Ve)}ne.length=De+1;let Me=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let pe=0,Ae=ne.length;pe<Ae;pe++){let Ve=ne[pe],ze=Math.floor(Ve.start/4),Ce=Math.ceil(Ve.count/4),Qe=ze%w.width,N=Math.floor(ze/w.width),ye=Ce,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Qe,N,ye,Se,H,ee,w.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function se(R,w,H){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);let he=je(R,w),ne=w.source;t.bindTexture(ee,R.__webglTexture,n.TEXTURE0+H);let De=i.get(ne);if(ne.version!==De.__version||he===!0){t.activeTexture(n.TEXTURE0+H);let Me=wt.getPrimaries(wt.workingColorSpace),Le=w.colorSpace===os?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===os||Me===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let pe=x(w.image,!1,s.maxTextureSize);pe=$e(w,pe);let Ae=r.convert(w.format,w.colorSpace),Ve=r.convert(w.type),ze=b(w.internalFormat,Ae,Ve,w.colorSpace,w.isVideoTexture);Ge(ee,w);let Ce,Qe=w.mipmaps,N=w.isVideoTexture!==!0,ye=De.__version===void 0||he===!0,Se=ne.dataReady,Pe=E(w,pe);if(w.isDepthTexture)ze=y(w.format===_o,w.type),ye&&(N?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ae,Ve,null));else if(w.isDataTexture)if(Qe.length>0){N&&ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Qe[0].width,Qe[0].height);for(let ge=0,le=Qe.length;ge<le;ge++)Ce=Qe[ge],N?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,Ve,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,ze,Ce.width,Ce.height,0,Ae,Ve,Ce.data);w.generateMipmaps=!1}else N?(ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,pe.width,pe.height),Se&&tt(w,pe,Ae,Ve)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ae,Ve,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,Qe[0].width,Qe[0].height,pe.depth);for(let ge=0,le=Qe.length;ge<le;ge++)if(Ce=Qe[ge],w.format!==Fn)if(Ae!==null)if(N){if(Se)if(w.layerUpdates.size>0){let Oe=Ed(Ce.width,Ce.height,w.format,w.type);for(let rt of w.layerUpdates){let kt=Ce.data.subarray(rt*Oe/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,rt,Ce.width,Ce.height,1,Ae,kt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,pe.depth,Ae,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,ze,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,pe.depth,Ae,Ve,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,ze,Ce.width,Ce.height,pe.depth,0,Ae,Ve,Ce.data)}else{N&&ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Qe[0].width,Qe[0].height);for(let ge=0,le=Qe.length;ge<le;ge++)Ce=Qe[ge],w.format!==Fn?Ae!==null?N?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ae,Ve,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,ze,Ce.width,Ce.height,0,Ae,Ve,Ce.data)}else if(w.isDataArrayTexture)if(N){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,pe.width,pe.height,pe.depth),Se)if(w.layerUpdates.size>0){let ge=Ed(pe.width,pe.height,w.format,w.type);for(let le of w.layerUpdates){let Oe=pe.data.subarray(le*ge/pe.data.BYTES_PER_ELEMENT,(le+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,Ae,Ve,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ve,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Ae,Ve,pe.data);else if(w.isData3DTexture)N?(ye&&t.texStorage3D(n.TEXTURE_3D,Pe,ze,pe.width,pe.height,pe.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Ve,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Ae,Ve,pe.data);else if(w.isFramebufferTexture){if(ye)if(N)t.texStorage2D(n.TEXTURE_2D,Pe,ze,pe.width,pe.height);else{let ge=pe.width,le=pe.height;for(let Oe=0;Oe<Pe;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,ze,ge,le,0,Ae,Ve,null),ge>>=1,le>>=1}}else if(Qe.length>0){if(N&&ye){let ge=Ye(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Pe,ze,ge.width,ge.height)}for(let ge=0,le=Qe.length;ge<le;ge++)Ce=Qe[ge],N?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ae,Ve,Ce):t.texImage2D(n.TEXTURE_2D,ge,ze,Ae,Ve,Ce);w.generateMipmaps=!1}else if(N){if(ye){let ge=Ye(pe);t.texStorage2D(n.TEXTURE_2D,Pe,ze,ge.width,ge.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ve,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ae,Ve,pe);g(w)&&m(ee),De.__version=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function W(R,w,H){if(w.image.length!==6)return;let ee=je(R,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let ne=i.get(he);if(he.version!==ne.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);let De=wt.getPrimaries(wt.workingColorSpace),Me=w.colorSpace===os?null:wt.getPrimaries(w.colorSpace),Le=w.colorSpace===os||De===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let le=0;le<6;le++)!Fe&&!pe?Ae[le]=x(w.image[le],!0,s.maxCubemapSize):Ae[le]=pe?w.image[le].image:w.image[le],Ae[le]=$e(w,Ae[le]);let Ve=Ae[0],ze=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),Qe=b(w.internalFormat,ze,Ce,w.colorSpace),N=w.isVideoTexture!==!0,ye=ne.__version===void 0||ee===!0,Se=he.dataReady,Pe=E(w,Ve);Ge(n.TEXTURE_CUBE_MAP,w);let ge;if(Fe){N&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Qe,Ve.width,Ve.height);for(let le=0;le<6;le++){ge=Ae[le].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){let rt=ge[Oe];w.format!==Fn?ze!==null?N?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,0,0,rt.width,rt.height,ze,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,Qe,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,0,0,rt.width,rt.height,ze,Ce,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe,Qe,rt.width,rt.height,0,ze,Ce,rt.data)}}}else{if(ge=w.mipmaps,N&&ye){ge.length>0&&Pe++;let le=Ye(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(pe){N?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae[le].width,Ae[le].height,ze,Ce,Ae[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,Ae[le].width,Ae[le].height,0,ze,Ce,Ae[le].data);for(let Oe=0;Oe<ge.length;Oe++){let kt=ge[Oe].image[le].image;N?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,0,0,kt.width,kt.height,ze,Ce,kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,Qe,kt.width,kt.height,0,ze,Ce,kt.data)}}else{N?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,Ce,Ae[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,ze,Ce,Ae[le]);for(let Oe=0;Oe<ge.length;Oe++){let rt=ge[Oe];N?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,0,0,ze,Ce,rt.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Oe+1,Qe,ze,Ce,rt.image[le])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),ne.__version=he.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function oe(R,w,H,ee,he,ne){let De=r.convert(H.format,H.colorSpace),Me=r.convert(H.type),Le=b(H.internalFormat,De,Me,H.colorSpace),Fe=i.get(w),pe=i.get(H);if(pe.__renderTarget=w,!Fe.__hasExternalTextures){let Ae=Math.max(1,w.width>>ne),Ve=Math.max(1,w.height>>ne);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ne,Le,Ae,Ve,w.depth,0,De,Me,null):t.texImage2D(he,ne,Le,Ae,Ve,0,De,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,he,pe.__webglTexture,0,xe(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,he,pe.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(R,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer){let ee=w.depthTexture,he=ee&&ee.isDepthTexture?ee.type:null,ne=y(w.stencilBuffer,he),De=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=xe(w);ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ne,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,R)}else{let ee=w.textures;for(let he=0;he<ee.length;he++){let ne=ee[he],De=r.convert(ne.format,ne.colorSpace),Me=r.convert(ne.type),Le=b(ne.internalFormat,De,Me,ne.colorSpace),Fe=xe(w);H&&ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Le,w.width,w.height):ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Le,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Le,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let he=ee.__webglTexture,ne=xe(w);if(w.depthTexture.format===Kr)ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(w.depthTexture.format===_o)ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function $(R){let w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let ee=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",he)};ee.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ee}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let ee=R.texture.mipmaps;ee&&ee.length>0?F(w.__webglFramebuffer[0],R):F(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),de(w.__webglDepthbuffer[ee],R,!1);else{let he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ne)}}else{let ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),de(w.__webglDepthbuffer,R,!1);else{let he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,w,H){let ee=i.get(R);w!==void 0&&oe(ee.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&$(R)}function P(R){let w=R.texture,H=i.get(R),ee=i.get(w);R.addEventListener("dispose",D);let he=R.textures,ne=R.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Me]=[];for(let Le=0;Le<w.mipmaps.length;Le++)H.__webglFramebuffer[Me][Le]=n.createFramebuffer()}else H.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)H.__webglFramebuffer[Me]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(De)for(let Me=0,Le=he.length;Me<Le;Me++){let Fe=i.get(he[Me]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Me=0;Me<he.length;Me++){let Le=he[Me];H.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Me]);let Fe=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),Ae=b(Le.internalFormat,Fe,pe,Le.colorSpace,R.isXRRenderTarget===!0),Ve=xe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,H.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),de(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)oe(H.__webglFramebuffer[Me][Le],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le);else oe(H.__webglFramebuffer[Me],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Me=0,Le=he.length;Me<Le;Me++){let Fe=he[Me],pe=i.get(Fe),Ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),Ge(Ae,Fe),oe(H.__webglFramebuffer,R,Fe,n.COLOR_ATTACHMENT0+Me,Ae,0),g(Fe)&&m(Ae)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ee.__webglTexture),Ge(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)oe(H.__webglFramebuffer[Le],R,w,n.COLOR_ATTACHMENT0,Me,Le);else oe(H.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,Me,0);g(w)&&m(Me),t.unbindTexture()}R.depthBuffer&&$(R)}function re(R){let w=R.textures;for(let H=0,ee=w.length;H<ee;H++){let he=w[H];if(g(he)){let ne=_(R),De=i.get(he).__webglTexture;t.bindTexture(ne,De),m(ne),t.unbindTexture()}}}let Q=[],j=[];function J(R){if(R.samples>0){if(ue(R)===!1){let w=R.textures,H=R.width,ee=R.height,he=n.COLOR_BUFFER_BIT,ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(R),Me=w.length>1;if(Me)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);let pe=i.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,H,ee,0,0,H,ee,he,n.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(n.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(ne),j.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);let pe=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function xe(R){return Math.min(s.maxSamples,R.samples)}function ue(R){let w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function $e(R,w){let H=R.colorSpace,ee=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Js&&H!==os&&(wt.getTransfer(H)===Nt?(ee!==Fn||he!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Ee,this.setupRenderTarget=P,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ue}function gS(n,e){function t(i,s=os){let r,o=wt.getTransfer(s);if(i===Pi)return n.UNSIGNED_BYTE;if(i===Vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ud)return n.BYTE;if(i===dd)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===Cs)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===xo)return n.HALF_FLOAT;if(i===md)return n.ALPHA;if(i===gd)return n.RGB;if(i===Fn)return n.RGBA;if(i===Kr)return n.DEPTH_COMPONENT;if(i===_o)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===Wc)return n.RED_INTEGER;if(i===xd)return n.RG;if(i===Xc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===za||i===ka||i===Va||i===Ga)if(o===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===Zc||i===jc||i===Jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===$c||i===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kc||i===$c)return o===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===eh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ph||i===mh||i===gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ph)return o===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===yh||i===_h||i===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_h)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
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

}`,zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ci({vertexShader:xS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kd=class extends Gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new zd,m={},_=t.getContextAttributes(),b=null,y=null,E=[],A=[],D=new ce,C=null,S=new wn;S.viewport=new en;let v=new wn;v.viewport=new en;let I=[S,v],L=new Rc,O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let W=E[se];return W===void 0&&(W=new io,E[se]=W),W.getTargetRaySpace()},this.getControllerGrip=function(se){let W=E[se];return W===void 0&&(W=new io,E[se]=W),W.getGripSpace()},this.getHand=function(se){let W=E[se];return W===void 0&&(W=new io,E[se]=W),W.getHandSpace()};function V(se){let W=A.indexOf(se.inputSource);if(W===-1)return;let oe=E[W];oe!==void 0&&(oe.update(se.inputSource,se.frame,c||o),oe.dispatchEvent({type:se.type,data:se.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",te);for(let se=0;se<E.length;se++){let W=A[se];W!==null&&(A[se]=null,E[se].disconnect(W))}O=null,B=null,g.reset();for(let se in m)delete m[se];e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,de=null,F=null;_.depth&&(F=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?_o:Kr,de=_.stencil?yo:Cs);let $={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Hi(d.textureWidth,d.textureHeight,{format:Fn,type:Pi,depthTexture:new ya(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Hi(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(se){for(let W=0;W<se.removed.length;W++){let oe=se.removed[W],de=A.indexOf(oe);de>=0&&(A[de]=null,E[de].disconnect(oe))}for(let W=0;W<se.added.length;W++){let oe=se.added[W],de=A.indexOf(oe);if(de===-1){for(let $=0;$<E.length;$++)if($>=A.length){A.push(oe),de=$;break}else if(A[$]===null){A[$]=oe,de=$;break}if(de===-1)break}let F=E[de];F&&F.connect(oe)}}let q=new M,ae=new M;function me(se,W,oe){q.setFromMatrixPosition(W.matrixWorld),ae.setFromMatrixPosition(oe.matrixWorld);let de=q.distanceTo(ae),F=W.projectionMatrix.elements,$=oe.projectionMatrix.elements,Ee=F[14]/(F[10]-1),P=F[14]/(F[10]+1),re=(F[9]+1)/F[5],Q=(F[9]-1)/F[5],j=(F[8]-1)/F[0],J=($[8]+1)/$[0],xe=Ee*j,ue=Ee*J,be=de/(-j+J),$e=be*-j;if(W.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX($e),se.translateZ(be),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),F[10]===-1)se.projectionMatrix.copy(W.projectionMatrix),se.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Ye=Ee+be,R=P+be,w=xe-$e,H=ue+(de-$e),ee=re*P/R*Ye,he=Q*P/R*Ye;se.projectionMatrix.makePerspective(w,H,ee,he,Ye,R),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function _e(se,W){W===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(W.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let W=se.near,oe=se.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),L.near=v.near=S.near=W,L.far=v.far=S.far=oe,(O!==L.near||B!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,B=L.far),L.layers.mask=se.layers.mask|6,S.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;let de=se.parent,F=L.cameras;_e(L,de);for(let $=0;$<F.length;$++)_e(F[$],de);F.length===2?me(L,S,v):L.projectionMatrix.copy(S.projectionMatrix),Ge(se,L,de)};function Ge(se,W,oe){oe===null?se.matrix.copy(W.matrixWorld):(se.matrix.copy(oe.matrixWorld),se.matrix.invert(),se.matrix.multiply(W.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(W.projectionMatrix),se.projectionMatrixInverse.copy(W.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=$r*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(se){return m[se]};let je=null;function ht(se,W){if(h=W.getViewerPose(c||o),p=W,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,de=!0);for(let P=0;P<oe.length;P++){let re=oe[P],Q=null;if(f!==null)Q=f.getViewport(re);else{let J=u.getViewSubImage(d,re);Q=J.viewport,P===0&&(e.setRenderTargetTextures(y,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(y))}let j=I[P];j===void 0&&(j=new wn,j.layers.enable(P),j.viewport=new en,I[P]=j),j.matrix.fromArray(re.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(re.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),de===!0&&L.cameras.push(j)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let P=u.getDepthInformation(oe[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(F&&F.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<oe.length;P++){let re=oe[P].camera;if(re){let Q=m[re];Q||(Q=new _a,m[re]=Q);let j=u.getCameraImage(re);Q.sourceTexture=j}}}}for(let oe=0;oe<E.length;oe++){let de=A[oe],F=E[oe];de!==null&&F!==void 0&&F.update(de,W,c||o)}je&&je(se,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),p=null}let tt=new tg;tt.setAnimationLoop(ht),this.setAnimationLoop=function(se){je=se},this.dispose=function(){}}},fr=new tn,_S=new _t;function vS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,bd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,y=_.envMapRotation;b&&(g.envMap.value=b,fr.copy(y),fr.x*=-1,fr.y*=-1,fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(fr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let y=b.program;i.uniformBlockBinding(_,y)}function c(_,b){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let E=b.program;i.updateUBOMapping(_,E);let A=e.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){let b=u();_.__bindingPointIndex=b;let y=n.createBuffer(),E=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],y=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,D=y.length;A<D;A++){let C=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,v=C.length;S<v;S++){let I=C[S];if(f(I,A,S,E)===!0){let L=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],B=0;for(let V=0;V<O.length;V++){let k=O[V],te=x(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,L+B,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,b,y,E){let A=_.value,D=b+"_"+y;if(E[D]===void 0)return typeof A=="number"||typeof A=="boolean"?E[D]=A:E[D]=A.clone(),!0;{let C=E[D];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[D]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function p(_){let b=_.uniforms,y=0,E=16;for(let D=0,C=b.length;D<C;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let v=0,I=S.length;v<I;v++){let L=S[v],O=Array.isArray(L.value)?L.value:[L.value];for(let B=0,V=O.length;B<V;B++){let k=O[B],te=x(k),q=y%E,ae=q%te.boundary,me=q+ae;y+=ae,me!==0&&E-me<te.storage&&(y+=E-me),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=te.storage}}}let A=y%E;return A>0&&(y+=E-A),_.__size=y,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function g(_){let b=_.target;b.removeEventListener("dispose",g);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Th=class{constructor(e={}){let{canvas:t=bm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=Mt;let A=0,D=0,C=null,S=-1,v=null,I=new en,L=new en,O=null,B=new He(0),V=0,k=t.width,te=t.height,q=1,ae=null,me=null,_e=new en(0,0,k,te),Ge=new en(0,0,k,te),je=!1,ht=new lo,tt=!1,se=!1,W=new _t,oe=new M,de=new en,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function Ee(){return C===null?q:1}let P=i;function re(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){let z="webgl2";if(P=re(z,T),P===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,j,J,xe,ue,be,$e,Ye,R,w,H,ee,he,ne,De,Me,Le,Fe,pe,Ae,Ve,ze,Ce,Qe;function N(){Q=new zM(P),Q.init(),ze=new gS(P,Q),j=new DM(P,Q,e,ze),J=new pS(P,Q),j.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),xe=new GM(P),ue=new tS,be=new mS(P,Q,J,ue,j,ze,xe),$e=new UM(y),Ye=new BM(y),R=new Zy(P),Ce=new IM(P,R),w=new kM(P,R,xe,Ce),H=new WM(P,w,R,xe),pe=new HM(P,j,be),Me=new LM(ue),ee=new eS(y,$e,Ye,Q,j,Ce,Me),he=new vS(y,ue),ne=new iS,De=new cS(Q),Fe=new RM(y,$e,Ye,J,H,f,l),Le=new dS(y,H,j),Qe=new MS(P,xe,j,J),Ae=new PM(P,Q,xe),Ve=new VM(P,Q,xe),xe.programs=ee.programs,y.capabilities=j,y.extensions=Q,y.properties=ue,y.renderLists=ne,y.shadowMap=Le,y.state=J,y.info=xe}N();let ye=new kd(y,P);this.xr=ye,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(k,te,!1))},this.getSize=function(T){return T.set(k,te)},this.setSize=function(T,z,Z=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,te=z,t.width=Math.floor(T*q),t.height=Math.floor(z*q),Z===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*q,te*q).floor()},this.setDrawingBufferSize=function(T,z,Z){k=T,te=z,q=Z,t.width=Math.floor(T*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,z,Z,K){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,z,Z,K),J.viewport(I.copy(_e).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Ge)},this.setScissor=function(T,z,Z,K){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,z,Z,K),J.scissor(L.copy(Ge).multiplyScalar(q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){J.setScissorTest(je=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Z=!0){let K=0;if(T){let G=!1;if(C!==null){let ve=C.texture.format;G=ve===qc||ve===Xc||ve===Wc}if(G){let ve=C.texture.type,Ie=ve===Pi||ve===Cs||ve===go||ve===yo||ve===Vc||ve===Gc,ke=Fe.getClearColor(),Ne=Fe.getClearAlpha(),Je=ke.r,nt=ke.g,Xe=ke.b;Ie?(p[0]=Je,p[1]=nt,p[2]=Xe,p[3]=Ne,P.clearBufferuiv(P.COLOR,0,p)):(x[0]=Je,x[1]=nt,x[2]=Xe,x[3]=Ne,P.clearBufferiv(P.COLOR,0,x))}else K|=P.COLOR_BUFFER_BIT}z&&(K|=P.DEPTH_BUFFER_BIT),Z&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Fe.dispose(),ne.dispose(),De.dispose(),ue.dispose(),$e.dispose(),Ye.dispose(),H.dispose(),Ce.dispose(),Qe.dispose(),ee.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",we),ye.removeEventListener("sessionend",We),Ue.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=xe.autoReset,z=Le.enabled,Z=Le.autoUpdate,K=Le.needsUpdate,G=Le.type;N(),xe.autoReset=T,Le.enabled=z,Le.autoUpdate=Z,Le.needsUpdate=K,Le.type=G}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){let z=T.target;z.removeEventListener("dispose",le),Oe(z)}function Oe(T){rt(T),ue.remove(T)}function rt(T){let z=ue.get(T).programs;z!==void 0&&(z.forEach(function(Z){ee.releaseProgram(Z)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,K,G,ve){z===null&&(z=F);let Ie=G.isMesh&&G.matrixWorld.determinant()<0,ke=Ht(T,z,Z,K,G);J.setMaterial(K,Ie);let Ne=Z.index,Je=1;if(K.wireframe===!0){if(Ne=w.getWireframeAttribute(Z),Ne===void 0)return;Je=2}let nt=Z.drawRange,Xe=Z.attributes.position,yt=nt.start*Je,Vt=(nt.start+nt.count)*Je;ve!==null&&(yt=Math.max(yt,ve.start*Je),Vt=Math.min(Vt,(ve.start+ve.count)*Je)),Ne!==null?(yt=Math.max(yt,0),Vt=Math.min(Vt,Ne.count)):Xe!=null&&(yt=Math.max(yt,0),Vt=Math.min(Vt,Xe.count));let rn=Vt-yt;if(rn<0||rn===1/0)return;Ce.setup(G,K,ke,Z,Ne);let qt,Wt=Ae;if(Ne!==null&&(qt=R.get(Ne),Wt=Ve,Wt.setIndex(qt)),G.isMesh)K.wireframe===!0?(J.setLineWidth(K.wireframeLinewidth*Ee()),Wt.setMode(P.LINES)):Wt.setMode(P.TRIANGLES);else if(G.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),J.setLineWidth(Ze*Ee()),G.isLineSegments?Wt.setMode(P.LINES):G.isLineLoop?Wt.setMode(P.LINE_LOOP):Wt.setMode(P.LINE_STRIP)}else G.isPoints?Wt.setMode(P.POINTS):G.isSprite&&Wt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Wt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ze=G._multiDrawStarts,Kt=G._multiDrawCounts,Et=G._multiDrawCount,Zn=Ne?R.get(Ne).bytesPerElement:1,Cr=ue.get(K).currentProgram.getUniforms();for(let jn=0;jn<Et;jn++)Cr.setValue(P,"_gl_DrawID",jn),Wt.render(Ze[jn]/Zn,Kt[jn])}else if(G.isInstancedMesh)Wt.renderInstances(yt,rn,G.count);else if(Z.isInstancedBufferGeometry){let Ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Kt=Math.min(Z.instanceCount,Ze);Wt.renderInstances(yt,rn,Kt)}else Wt.render(yt,rn)};function kt(T,z,Z){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,Zt(T,z,Z),T.side=$n,T.needsUpdate=!0,Zt(T,z,Z),T.side=cn):Zt(T,z,Z)}this.compile=function(T,z,Z=null){Z===null&&(Z=T),m=De.get(Z),m.init(z),b.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==Z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ve=G.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){let ke=ve[Ie];kt(ke,Z,G),K.add(ke)}else kt(ve,Z,G),K.add(ve)}),m=b.pop(),K},this.compileAsync=function(T,z,Z=null){let K=this.compile(T,z,Z);return new Promise(G=>{function ve(){if(K.forEach(function(Ie){ue.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){G(T);return}setTimeout(ve,10)}Q.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let X=null;function Y(T){X&&X(T)}function we(){Ue.stop()}function We(){Ue.start()}let Ue=new tg;Ue.setAnimationLoop(Y),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(T){X=T,ye.setAnimationLoop(T),T===null?Ue.stop():Ue.start()},ye.addEventListener("sessionstart",we),ye.addEventListener("sessionend",We),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,C),m=De.get(T,b.length),m.init(z),b.push(m),W.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ht.setFromProjectionMatrix(W,Ei,z.reversedDepth),se=this.localClippingEnabled,tt=Me.init(this.clippingPlanes,se),g=ne.get(T,_.length),g.init(),_.push(g),ye.enabled===!0&&ye.isPresenting===!0){let ve=y.xr.getDepthSensingMesh();ve!==null&&ot(ve,z,-1/0,y.sortObjects)}ot(T,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ae,me),$=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,$&&Fe.addToRenderList(g,T),this.info.render.frame++,tt===!0&&Me.beginShadows();let Z=m.state.shadowsArray;Le.render(Z,T,z),tt===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,G=g.transmissive;if(m.setupLights(),z.isArrayCamera){let ve=z.cameras;if(G.length>0)for(let Ie=0,ke=ve.length;Ie<ke;Ie++){let Ne=ve[Ie];ct(K,G,T,Ne)}$&&Fe.render(T);for(let Ie=0,ke=ve.length;Ie<ke;Ie++){let Ne=ve[Ie];St(g,T,Ne,Ne.viewport)}}else G.length>0&&ct(K,G,T,z),$&&Fe.render(T),St(g,T,z);C!==null&&D===0&&(be.updateMultisampleRenderTarget(C),be.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,z),Ce.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(m=b[b.length-1],tt===!0&&Me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ot(T,z,Z,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ht.intersectsSprite(T)){K&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);let Ie=H.update(T),ke=T.material;ke.visible&&g.push(T,Ie,ke,Z,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ht.intersectsObject(T))){let Ie=H.update(T),ke=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),de.copy(Ie.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(W)),Array.isArray(ke)){let Ne=Ie.groups;for(let Je=0,nt=Ne.length;Je<nt;Je++){let Xe=Ne[Je],yt=ke[Xe.materialIndex];yt&&yt.visible&&g.push(T,Ie,yt,Z,de.z,Xe)}}else ke.visible&&g.push(T,Ie,ke,Z,de.z,null)}}let ve=T.children;for(let Ie=0,ke=ve.length;Ie<ke;Ie++)ot(ve[Ie],z,Z,K)}function St(T,z,Z,K){let G=T.opaque,ve=T.transmissive,Ie=T.transparent;m.setupLightsView(Z),tt===!0&&Me.setGlobalState(y.clippingPlanes,Z),K&&J.viewport(I.copy(K)),G.length>0&&st(G,z,Z),ve.length>0&&st(ve,z,Z),Ie.length>0&&st(Ie,z,Z),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function ct(T,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Hi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?xo:Pi,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let ve=m.state.transmissionRenderTarget[K.id],Ie=K.viewport||I;ve.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);let ke=y.getRenderTarget(),Ne=y.getActiveCubeFace(),Je=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(B),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),$&&Fe.render(Z);let nt=y.toneMapping;y.toneMapping=rs;let Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),tt===!0&&Me.setGlobalState(y.clippingPlanes,K),st(T,Z,K),be.updateMultisampleRenderTarget(ve),be.updateRenderTargetMipmap(ve),Q.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Vt=0,rn=z.length;Vt<rn;Vt++){let qt=z[Vt],Wt=qt.object,Ze=qt.geometry,Kt=qt.material,Et=qt.group;if(Kt.side===cn&&Wt.layers.test(K.layers)){let Zn=Kt.side;Kt.side=Un,Kt.needsUpdate=!0,dt(Wt,Z,K,Ze,Kt,Et),Kt.side=Zn,Kt.needsUpdate=!0,yt=!0}}yt===!0&&(be.updateMultisampleRenderTarget(ve),be.updateRenderTargetMipmap(ve))}y.setRenderTarget(ke,Ne,Je),y.setClearColor(B,V),Xe!==void 0&&(K.viewport=Xe),y.toneMapping=nt}function st(T,z,Z){let K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){let Ie=T[G],ke=Ie.object,Ne=Ie.geometry,Je=Ie.group,nt=Ie.material;nt.allowOverride===!0&&K!==null&&(nt=K),ke.layers.test(Z.layers)&&dt(ke,z,Z,Ne,nt,Je)}}function dt(T,z,Z,K,G,ve){T.onBeforeRender(y,z,Z,K,G,ve),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,z,Z,K,T,ve),G.transparent===!0&&G.side===cn&&G.forceSinglePass===!1?(G.side=Un,G.needsUpdate=!0,y.renderBufferDirect(Z,z,K,G,T,ve),G.side=$n,G.needsUpdate=!0,y.renderBufferDirect(Z,z,K,G,T,ve),G.side=cn):y.renderBufferDirect(Z,z,K,G,T,ve),T.onAfterRender(y,z,Z,K,G,ve)}function Zt(T,z,Z){z.isScene!==!0&&(z=F);let K=ue.get(T),G=m.state.lights,ve=m.state.shadowsArray,Ie=G.state.version,ke=ee.getParameters(T,G.state,ve,z,Z),Ne=ee.getProgramCacheKey(ke),Je=K.programs;K.environment=T.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(T.isMeshStandardMaterial?Ye:$e).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",le),Je=new Map,K.programs=Je);let nt=Je.get(Ne);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ie)return Dt(T,ke),nt}else ke.uniforms=ee.getUniforms(T),T.onBeforeCompile(ke,y),nt=ee.acquireProgram(ke,Ne),Je.set(Ne,nt),K.uniforms=ke.uniforms;let Xe=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Dt(T,ke),K.needsLights=Ar(T),K.lightsStateVersion=Ie,K.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function Lt(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Dt(T,z){let Z=ue.get(T);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Ht(T,z,Z,K,G){z.isScene!==!0&&(z=F),be.resetTextureUnits();let ve=z.fog,Ie=K.isMeshStandardMaterial?z.environment:null,ke=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Js,Ne=(K.isMeshStandardMaterial?Ye:$e).get(K.envMap||Ie),Je=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,Vt=!!Z.morphAttributes.color,rn=rs;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(rn=y.toneMapping);let qt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Wt=qt!==void 0?qt.length:0,Ze=ue.get(K),Kt=m.state.lights;if(tt===!0&&(se===!0||T!==v)){let In=T===v&&K.id===S;Me.setState(K,T,In)}let Et=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Kt.state.version||Ze.outputColorSpace!==ke||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isBatchedMesh&&Ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ze.instancingMorph===!1&&G.morphTexture!==null||Ze.envMap!==Ne||K.fog===!0&&Ze.fog!==ve||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Me.numPlanes||Ze.numIntersection!==Me.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==nt||Ze.morphTargets!==Xe||Ze.morphNormals!==yt||Ze.morphColors!==Vt||Ze.toneMapping!==rn||Ze.morphTargetsCount!==Wt)&&(Et=!0):(Et=!0,Ze.__version=K.version);let Zn=Ze.currentProgram;Et===!0&&(Zn=Zt(K,z,G));let Cr=!1,jn=!1,Xo=!1,$t=Zn.getUniforms(),oi=Ze.uniforms;if(J.useProgram(Zn.program)&&(Cr=!0,jn=!0,Xo=!0),K.id!==S&&(S=K.id,jn=!0),Cr||v!==T){J.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),$t.setValue(P,"projectionMatrix",T.projectionMatrix),$t.setValue(P,"viewMatrix",T.matrixWorldInverse);let zn=$t.map.cameraPosition;zn!==void 0&&zn.setValue(P,oe.setFromMatrixPosition(T.matrixWorld)),j.logarithmicDepthBuffer&&$t.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&$t.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,jn=!0,Xo=!0)}if(G.isSkinnedMesh){$t.setOptional(P,G,"bindMatrix"),$t.setOptional(P,G,"bindMatrixInverse");let In=G.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),$t.setValue(P,"boneTexture",In.boneTexture,be))}G.isBatchedMesh&&($t.setOptional(P,G,"batchingTexture"),$t.setValue(P,"batchingTexture",G._matricesTexture,be),$t.setOptional(P,G,"batchingIdTexture"),$t.setValue(P,"batchingIdTexture",G._indirectTexture,be),$t.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&$t.setValue(P,"batchingColorTexture",G._colorsTexture,be));let ai=Z.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&pe.update(G,Z,Zn),(jn||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,$t.setValue(P,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(oi.envMap.value=Ne,oi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(oi.envMapIntensity.value=z.environmentIntensity),jn&&($t.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&vi(oi,Xo),ve&&K.fog===!0&&he.refreshFogUniforms(oi,ve),he.refreshMaterialUniforms(oi,K,q,te,m.state.transmissionRenderTarget[T.id]),bo.upload(P,Lt(Ze),oi,be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(bo.upload(P,Lt(Ze),oi,be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&$t.setValue(P,"center",G.center),$t.setValue(P,"modelViewMatrix",G.modelViewMatrix),$t.setValue(P,"normalMatrix",G.normalMatrix),$t.setValue(P,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let In=K.uniformsGroups;for(let zn=0,xu=In.length;zn<xu;zn++){let Gs=In[zn];Qe.update(Gs,Zn),Qe.bind(Gs,Zn)}}return Zn}function vi(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Ar(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,z,Z){let K=ue.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ue.get(T.texture).__webglTexture=z,ue.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let Z=ue.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};let _l=P.createFramebuffer();this.setRenderTarget=function(T,z=0,Z=0){C=T,A=z,D=Z;let K=!0,G=null,ve=!1,Ie=!1;if(T){let Ne=ue.get(T);if(Ne.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(P.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)be.setupRenderTarget(T);else if(Ne.__hasExternalTextures)be.rebindTextures(T,ue.get(T.texture).__webglTexture,ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xe=T.depthTexture;if(Ne.__boundDepthTexture!==Xe){if(Xe!==null&&ue.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(T)}}let Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ie=!0);let nt=ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(nt[z])?G=nt[z][Z]:G=nt[z],ve=!0):T.samples>0&&be.useMultisampledRTT(T)===!1?G=ue.get(T).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[Z]:G=nt,I.copy(T.viewport),L.copy(T.scissor),O=T.scissorTest}else I.copy(_e).multiplyScalar(q).floor(),L.copy(Ge).multiplyScalar(q).floor(),O=je;if(Z!==0&&(G=_l),J.bindFramebuffer(P.FRAMEBUFFER,G)&&K&&J.drawBuffers(T,G),J.viewport(I),J.scissor(L),J.setScissorTest(O),ve){let Ne=ue.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,Z)}else if(Ie){let Ne=z;for(let Je=0;Je<T.textures.length;Je++){let nt=ue.get(T.textures[Je]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Je,nt.__webglTexture,Z,Ne)}}else if(T!==null&&Z!==0){let Ne=ue.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(T,z,Z,K,G,ve,Ie,ke=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){J.bindFramebuffer(P.FRAMEBUFFER,Ne);try{let Je=T.textures[ke],nt=Je.format,Xe=Je.type;if(!j.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&Z>=0&&Z<=T.height-G&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke),P.readPixels(z,Z,K,G,ze.convert(nt),ze.convert(Xe),ve))}finally{let Je=C!==null?ue.get(C).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(T,z,Z,K,G,ve,Ie,ke=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(z>=0&&z<=T.width-K&&Z>=0&&Z<=T.height-G){J.bindFramebuffer(P.FRAMEBUFFER,Ne);let Je=T.textures[ke],nt=Je.format,Xe=Je.type;if(!j.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,ve.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke),P.readPixels(z,Z,K,G,ze.convert(nt),ze.convert(Xe),0);let Vt=C!==null?ue.get(C).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Vt);let rn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Sm(P,rn,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ve),P.deleteBuffer(yt),P.deleteSync(rn),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Z=0){let K=Math.pow(2,-Z),G=Math.floor(T.image.width*K),ve=Math.floor(T.image.height*K),Ie=z!==null?z.x:0,ke=z!==null?z.y:0;be.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Ie,ke,G,ve),J.unbindTexture()};let fs=P.createFramebuffer(),Wo=P.createFramebuffer();this.copyTextureToTexture=function(T,z,Z=null,K=null,G=0,ve=null){ve===null&&(G!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Ie,ke,Ne,Je,nt,Xe,yt,Vt,rn,qt=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(Z!==null)Ie=Z.max.x-Z.min.x,ke=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Je=Z.min.x,nt=Z.min.y,Xe=Z.isBox3?Z.min.z:0;else{let ai=Math.pow(2,-G);Ie=Math.floor(qt.width*ai),ke=Math.floor(qt.height*ai),T.isDataArrayTexture?Ne=qt.depth:T.isData3DTexture?Ne=Math.floor(qt.depth*ai):Ne=1,Je=0,nt=0,Xe=0}K!==null?(yt=K.x,Vt=K.y,rn=K.z):(yt=0,Vt=0,rn=0);let Wt=ze.convert(z.format),Ze=ze.convert(z.type),Kt;z.isData3DTexture?(be.setTexture3D(z,0),Kt=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(be.setTexture2DArray(z,0),Kt=P.TEXTURE_2D_ARRAY):(be.setTexture2D(z,0),Kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let Et=P.getParameter(P.UNPACK_ROW_LENGTH),Zn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Cr=P.getParameter(P.UNPACK_SKIP_PIXELS),jn=P.getParameter(P.UNPACK_SKIP_ROWS),Xo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,qt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Je),P.pixelStorei(P.UNPACK_SKIP_ROWS,nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);let $t=T.isDataArrayTexture||T.isData3DTexture,oi=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let ai=ue.get(T),In=ue.get(z),zn=ue.get(ai.__renderTarget),xu=ue.get(In.__renderTarget);J.bindFramebuffer(P.READ_FRAMEBUFFER,zn.__webglFramebuffer),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,xu.__webglFramebuffer);for(let Gs=0;Gs<Ne;Gs++)$t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(T).__webglTexture,G,Xe+Gs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(z).__webglTexture,ve,rn+Gs)),P.blitFramebuffer(Je,nt,Ie,ke,yt,Vt,Ie,ke,P.DEPTH_BUFFER_BIT,P.NEAREST);J.bindFramebuffer(P.READ_FRAMEBUFFER,null),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||ue.has(T)){let ai=ue.get(T),In=ue.get(z);J.bindFramebuffer(P.READ_FRAMEBUFFER,fs),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wo);for(let zn=0;zn<Ne;zn++)$t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ai.__webglTexture,G,Xe+zn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ai.__webglTexture,G),oi?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,In.__webglTexture,ve,rn+zn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,In.__webglTexture,ve),G!==0?P.blitFramebuffer(Je,nt,Ie,ke,yt,Vt,Ie,ke,P.COLOR_BUFFER_BIT,P.NEAREST):oi?P.copyTexSubImage3D(Kt,ve,yt,Vt,rn+zn,Je,nt,Ie,ke):P.copyTexSubImage2D(Kt,ve,yt,Vt,Je,nt,Ie,ke);J.bindFramebuffer(P.READ_FRAMEBUFFER,null),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else oi?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Kt,ve,yt,Vt,rn,Ie,ke,Ne,Wt,Ze,qt.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Kt,ve,yt,Vt,rn,Ie,ke,Ne,Wt,qt.data):P.texSubImage3D(Kt,ve,yt,Vt,rn,Ie,ke,Ne,Wt,Ze,qt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ve,yt,Vt,Ie,ke,Wt,Ze,qt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ve,yt,Vt,qt.width,qt.height,Wt,qt.data):P.texSubImage2D(P.TEXTURE_2D,ve,yt,Vt,Ie,ke,Wt,Ze,qt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Cr),P.pixelStorei(P.UNPACK_SKIP_ROWS,jn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xo),ve===0&&z.generateMipmaps&&P.generateMipmap(Kt),J.unbindTexture()},this.initRenderTarget=function(T){ue.get(T).__webglFramebuffer===void 0&&be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){A=0,D=0,C=null,J.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Gd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var XE=Gd.length-1,og=Math.min(...Gd.map(n=>n[1])),ag=Math.max(...Gd.map(n=>n[1])),qE=new M(0,0,(og+ag)/2),lg=new M(.047,.027,(ag-og)/2);var jE=new vt,JE=new M,KE=new M,$E=new _t;var QE=new M,eA=new M;var tA=new M;var nA=new M,iA=new M,sA=new M,rA=new kn,oA=new M;function Xa(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new M().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),b=new kn(g,m,_).getNormal(new M);b.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:b})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new dn().setFromPoints(i).getSize(new M),h=Math.max(1e-4,e**2*.4),u=e?new M().setScalar(1/h):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}var aA=new M,lA=new M,cA=new M,hA=new M,uA=new vt,dA=new vt,fA=new M;function To(n){return Xa(new qe(n.x*2,n.y*2,n.z*2))}var pA=new M;var cg=Xa(new fi(1,0).scale(...lg)),mA={mesh:{position:new M,quaternion:new vt},shape:cg,radius:cg.radius,precise:!0};var gA=new M,xA=new M,yA=new M,_A=new vt,vA=new vt,MA=new vt;var bA=new M,SA=new M,wA=new M,TA=new M;var EA=new M;var AA=new M,CA=new M,RA=new M,IA=new M,PA=new M,DA=new M,LA=new M;var UA={mesh:{position:null,quaternion:new vt},shape:{sphereRadius:0,normals:[],edges:[]}};function Ah(n,e,t){let i=new qe(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Hd(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function hg(n){switch(n){case"sphere":return new pi(.5,24,16);case"cylinder":return new Ot(.5,.5,1,24);case"cone":return new er(.5,1,24);case"torus":return new Ln(.34,.14,12,32);case"capsule":return new Ss(.32,.36,8,16);default:return new qe(1,1,1)}}function Wd(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new M(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new pt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.computeVertexNormals(),o}function qa(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Rs=(n,e,t)=>n+(e-n)*t,Eo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Ch(n,e){let t=Math.floor(n),i=Math.floor(e),s=Eo(0,1,n-t),r=Eo(0,1,e-i);return Rs(Rs(qa(t,i),qa(t+1,i),s),Rs(qa(t,i+1),qa(t+1,i+1),s),r)}function ug(n,e){return Ch(n,e)*.54+Ch(n*2.07+3.4,e*2.07-6.1)*.26+Ch(n*4.2+9,e*4.2)*.13+Ch(n*8.6,e*8.6-13)*.07}function dg(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((p,x)=>Rs(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=qa(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*Eo(.09,.3,c))}else{let[y,E]=s[p],A=2.8*h/(c+.16),D=y*A+3.6,C=E*A-8.1,S=ug(D,C),v=ug(D-.12,C-.09);g=Eo(.49,.66,S)*Eo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-v)*5+(S-.54)*.8))}let b=n?1:Rs(.94,1,Eo(.05,.34,c));i[x]=Rs(f[0],(139+115*m)*b,g)+_,i[x+1]=Rs(f[1],(154+100*m)*b,g)+_*.94,i[x+2]=Rs(f[2],(178+77*m)*b,g)+_*.86,i[x+3]=255}}let a=new hi(i,1024,512,Fn);return a.colorSpace=Mt,a.wrapS=Dn,a.magFilter=un,a.minFilter=Nn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function fg(){let n=dg(!1),e=dg(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new hi(t,n.image.width,n.image.height,Fn);i.colorSpace=Mt;for(let s of[n,i,e])s.mapping=Ii,s.magFilter=un,s.minFilter=un,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var nn=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),pg=nn(-24,24,-51,7),mg=34521,gg={x:0,y:0,z:3},Is={x:.05,y:1.16,z:5.9},Ao={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:nn(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:nn(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:nn(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:nn(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:nn(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:nn(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:nn(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:nn(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:nn(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:nn(9,23,-48,-37),sign:[16,-38.2]}},BA=[nn(-9,-6,-51,7),nn(6,9,-51,7),nn(-24,24,-8,-5),nn(-24,24,-27,-23),nn(9,23,-37,-34)],xg=[{name:"Glace",bounds:Ao.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Ao.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:nn(-9,9,-51,7)},{name:"Sol ouest",bounds:nn(-23,-9,-51,-23)},{name:"Sol ouest",bounds:nn(-23,-9,-8,7)},{name:"Bordure ouest",bounds:nn(-24,-23,-51,7)},{name:"Sol est",bounds:nn(9,23,-51,-48)},{name:"Sol est",bounds:nn(9,23,-37,7)},{name:"Bordure est",bounds:nn(23,24,-51,7)}],Ya={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Co=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],yg=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Ps={x:-19.4,y:.68,z:-3.25},_g=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),vg={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Za(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ri(i);return s.colorSpace=Mt,s}function Mg(n,e){let{day:t,sunset:i,night:s}=fg(),r=[t,i,s],o=new He,a=new Ks("#a6d4ea",55,135),l=Za(64,64,(X,Y)=>{X.fillStyle="#ffffff",X.beginPath(),X.arc(Y/2,Y/2,Y*.48,0,Math.PI*2),X.fill()}),c=new oo(new $s({map:l,alphaTest:.15,depthWrite:!1,fog:!1,toneMapped:!1}));n.add(c);let h=Za(128,128,(X,Y)=>{let we=X.createRadialGradient(Y/2,Y/2,0,Y/2,Y/2,Y/2);we.addColorStop(0,"rgba(255,255,255,.85)"),we.addColorStop(.16,"rgba(255,255,255,.42)"),we.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=we,X.fillRect(0,0,Y,Y)}),u=new oo(new $s({map:h,blending:Fa,depthWrite:!1,fog:!1,toneMapped:!1}));n.add(u);let d=t.clone();d.mapping=Ii,d.needsUpdate=!0;let f=new So(e);n.environment=f.fromEquirectangular(d).texture,f.dispose();let p=new rr("#daeaff","#88724c",2.25),x=new or("#fff0d0",3);x.position.set(-14,25,-16),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),Object.assign(x.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),x.shadow.bias=-25e-5,x.shadow.normalBias=.025,n.add(p,x,x.target);let g=new M,m=0,_=null,b=!0,y=null,E=null,A=!0,D=!1,C=0,S=0,v=new M,I=null,L=null,O=null,B=null,V=null,k=!1,te=0;function q(X,Y){if(Y==="#ffffff")return X;if(X===L&&Y===O)return I;let we=X.image,We=document.createElement("canvas");We.width=we.width,We.height=we.height;let Ue=We.getContext("2d");return X.isDataTexture?Ue.putImageData(new ImageData(new Uint8ClampedArray(we.data),we.width,we.height),0,0):Ue.drawImage(we,0,0),Ue.globalCompositeOperation="multiply",Ue.fillStyle=Y,Ue.fillRect(0,0,We.width,We.height),I?.dispose(),I=new Ri(We),I.mapping=Ii,I.colorSpace=Mt,I.flipY=X.flipY,L=X,O=Y,I}function ae(X){if(V===X)return B;B?.dispose();let Y=document.createElement("canvas"),we=document.createElement("canvas");Y.width=384,Y.height=192,we.width=1536,we.height=768,Y.getContext("2d").drawImage(X.image,0,0,Y.width,Y.height);let We=we.getContext("2d");return We.imageSmoothingEnabled=!1,We.drawImage(Y,0,0,we.width,we.height),B=new Ri(we),B.mapping=Ii,B.colorSpace=Mt,B.flipY=X.flipY,V=X,B}function me(X){let Y=X.shadowRange?Math.max(13,X.shadowRange):13+te*1.2,we=Math.max(33,Y*1.4);g.copy(v).multiplyScalar(we),Object.assign(x.shadow.camera,{left:-Y,right:Y,top:Y,bottom:-Y,far:Math.max(72,we+Y*1.5)}),x.shadow.camera.updateProjectionMatrix()}function _e(X){m=[0,1,2].includes(X)?X:0;let Y=_??zi(m),we=Te.degToRad(Y.azimuth),We=Te.degToRad(Y.elevation);v.set(Math.cos(we)*Math.cos(We),Math.sin(We),Math.sin(we)*Math.cos(We)),me(Y),p.color.set(Y.ambientColor),p.groundColor.set(Y.groundColor),p.intensity=Y.ambientPower,x.color.set(Y.sunColor),x.intensity=Y.sunPower,x.position.copy(x.target.position).add(g),c.material.color.set(Y.sunColor),c.visible=Y.sunPower>0,u.material.color.set(Y.sunColor),u.material.opacity=Math.min(1,Y.sunHalo*.48)*[1,.93,.45][Y.preset],u.visible=A&&c.visible&&Y.sunHalo>0;let Ue=Y.sky==="image"&&E?E:r[Y.preset],ot=q(Ue,Y.skyTint);n.background=Y.sky==="color"||!b?o.set(Y.skyColor):k&&!ot.isDataTexture?ae(ot):ot,n.backgroundRotation.y=Te.degToRad(Y.rotation),a.color.set(Y.fogColor),a.near=Y.fogNear,a.far=Y.fogFar,n.fog=Y.fog?a:null,n.environmentIntensity=C*[1,.56,.09][Y.preset]}function Ge(X,Y=()=>{}){_=X;let we=X?.sky==="image"?X.skyImage:null;if(y!==we){y=we;let We=++S;E?.dispose(),E=null,D=!!we,we&&new mi().load(we,Ue=>{if(S!==We){Ue.dispose();return}Ue.colorSpace=Mt,Ue.mapping=Ii,E=Ue,D=!1,_e(m),Y()},void 0,()=>{We===S&&(D=!1,Y())})}_e(m)}function je(X,Y=210){let we=_??zi(m),We=Y*.96,Ue=2*We*Math.tan(Te.degToRad(we.sunDiameter/2));c.position.copy(X).addScaledVector(v,We),u.position.copy(X).addScaledVector(v,We*.999),c.scale.setScalar(Ue),u.scale.setScalar(Ue*(3+we.sunHalo*2))}function ht(X){if(!x.castShadow)return;let Y=x.target.position,we=Math.round(X.x/4)*4,We=Math.round(X.y/4)*4,Ue=Math.round(X.z/4)*4;Y.x===we&&Y.y===We&&Y.z===Ue||(Y.set(we,We,Ue),x.position.copy(Y).add(g))}_e(0);let tt=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function se(X,Y,we){let[,We,Ue]=tt[Y],ot=512;X.save(),X.scale(we/512,we/512),X.fillStyle=We,X.fillRect(0,0,ot,ot);let St=Y+19;function ct(){return St=Math.imul(St,1664525)+1013904223>>>0,St/4294967296}if(X.fillStyle=Ue,Y===16){for(let st=0;st<16;st++)for(let dt=0;dt<16;dt++)(dt+st)%2===0&&X.fillRect(dt*32,st*32,32,32);X.fillStyle="#ff3957",X.fillRect(253,0,6,512),X.fillRect(0,253,512,6)}else if([0,2,8,15].includes(Y)){let st=Y===15?32:64;X.globalAlpha=.48;for(let dt=0;dt<ot;dt+=st){X.fillRect(0,dt,ot,Y===8?3:2);for(let Zt=-st;Zt<ot;Zt+=st)X.fillRect(Zt+dt/st%2*(Y===2?st/2:0),dt,2,st)}}else if([4,5,6,7,10,11,12].includes(Y)){let st=Y===5?38:Y===7?64:18;for(let dt=0;dt<st;dt++){X.strokeStyle=Ue,X.globalAlpha=.08+ct()*.22,X.lineWidth=Y===5?1+ct()*8:1+ct()*4;let Zt=ct()*ot,Lt=Y===5?.018:.009;X.beginPath();for(let Dt=0;Dt<=ot;Dt+=8){let Ht=Zt+Math.sin(Dt*Lt+dt)*(Y===6||Y===7?4:12+dt%5*3)+(Y===4?Dt*.28:0);Dt===0?X.moveTo(Dt,Ht):X.lineTo(Dt,Ht)}X.stroke()}}else{X.globalAlpha=.27;for(let st=0;st<120;st++){let dt=ct()*ot,Zt=ct()*ot,Lt=2+ct()*6;X.beginPath(),X.arc(dt,Zt,Lt,0,Math.PI*2),X.fill()}}if(Y!==16)for(let st=0;st<4400;st++)X.globalAlpha=.05+ct()*.1,X.fillStyle=ct()>.5?Ue:"#222324",X.fillRect(ct()*ot,ct()*ot,1+ct()*4,1+ct()*3);X.restore()}let W=new Set([0,2,4,5,8,15,16]),oe=tt.map(([X,Y,we,We,Ue,ot],St)=>{let ct=W.has(St)?512:256,st=Za(ct,ct,Zt=>se(Zt,St,ct));st.wrapS=st.wrapT=Dn;let dt=new _n({map:st,roughness:We,metalness:Ue,flatShading:!0,opacity:ot,transparent:ot<1,depthWrite:ot===1});return dt.name=X,dt}),de=oe.map(X=>X.map.image),F=512,$=oe.map(X=>new ei({map:X.map,flatShading:!0,opacity:X.opacity,transparent:X.transparent,depthWrite:X.depthWrite})),Ee={value:0},P={value:.24},re={value:null},Q={value:0};function j(){re.value?.dispose(),re.value=Za(512,512,(X,Y)=>{X.fillStyle="#ffffff",X.fillRect(0,0,Y,Y);let we=Y/52,We=Y/64;for(let Ue of J){if(!Ue.position||!Ue.half||Ue.position.y+Ue.half.y<.22)continue;let ot=(Ue.position.x+26)*we,St=(Ue.position.z+54)*We,ct=Math.min(55,Ue.half.x*we+5),st=Math.min(72,Ue.half.z*We+6);X.save(),X.translate(ot+Ue.half.y*we*.2,St+Ue.half.y*We*.24),X.scale(ct,st);let dt=X.createRadialGradient(0,0,.15,0,0,1);dt.addColorStop(0,"rgba(22,37,65,.54)"),dt.addColorStop(.58,"rgba(36,54,76,.29)"),dt.addColorStop(1,"rgba(38,48,57,0)"),X.fillStyle=dt,X.fillRect(-1,-1,2,2),X.restore()}})}for(let X of[...oe,...$])X.onBeforeCompile=Y=>{Y.uniforms.uFocusAmount=Ee,Y.uniforms.uFocusRadius=P,Y.uniforms.uLabLightmap=re,Y.uniforms.uLabBakedStrength=Q,Y.vertexShader=`varying vec3 vLabPosition;
`+Y.vertexShader,Y.vertexShader=Y.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),Y.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+Y.fragmentShader,Y.fragmentShader=Y.fragmentShader.replace("#include <map_fragment>",`
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
      `)},X.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let J=[],xe=[];function ue(X,Y,we,We,Ue,ot,St,ct=0,st=0,dt=1,Zt=1,Lt=!1){let Dt=new fe(Lt?new qe(Ue,ot,St):Ah(Ue,ot,St),oe[ct]);Dt.position.set(Y,we,We),Dt.rotation.x=st,Dt.receiveShadow=!0,Dt.castShadow=!0,n.add(Dt);let Ht=new M(Ue/2,ot/2,St/2),vi={mesh:Dt,position:Dt.position,quaternion:Dt.quaternion,half:Ht,min:Ht.clone().negate(),friction:dt,gravity:Zt,name:X,type:ct,shape:To(Ht)};return J.push(vi),vi}let be=xg.map(({name:X,bounds:Y,type:we=0,friction:We=.78,gravity:Ue=1})=>{let{xMin:ot,xMax:St,zMin:ct,zMax:st}=Y;return ue(X,(ot+St)/2,-.33,(ct+st)/2,St-ot,.66,st-ct,we,0,We,Ue)});for(let X of Object.values(vg))for(let Y of X)ue(...Y);let{xMin:$e,xMax:Ye,zMin:R,zMax:w}=pg;ue("But\xE9e arri\xE8re",0,1.35,R+.4,Ye-$e,2.7,.6,2),ue("But\xE9e ouest",$e+.3,1.05,(R+w)/2,.6,2.1,w-R,2),ue("But\xE9e est",Ye-.3,1.05,(R+w)/2,.6,2.1,w-R,2);let{xMin:H,xMax:ee,zMin:he,zMax:ne}=Ao.hills.bounds,De=ee-H,Me=ne-he,Le=16,Fe=64,pe=new Mn(De,Me,Le,Fe).rotateX(-Math.PI/2).translate(H+De/2,0,he+Me/2),Ae=pe.attributes.uv;for(let X=0;X<Ae.count;X++)Ae.setXY(X,Ae.getX(X)*De/2.6,Ae.getY(X)*Me/2.6);let Ve=pe.attributes.position,ze;function Ce(X){if(ze===X)return;ze=X;let Y=ze*.017;for(let we=0;we<Ve.count;we++){let We=Ve.getX(we),Ue=Ve.getZ(we),ot=Math.sin(Math.PI*Te.clamp((We-H)/De,0,1)),St=Math.min(1,(Ue-he)*.48,(ne-Ue)*.48),ct=.93+.56*Math.sin(Ue*.36+Y)+.32*Math.cos(We*.67+Ue*.26+Y*1.4)+.19*Math.sin(Ue*.81+Y*.67);Ve.setY(we,Math.max(0,ot*St*ct))}Ve.needsUpdate=!0,pe.computeVertexNormals(),pe.computeBoundingSphere()}Ce(mg);let Qe=new fe(pe,oe[3]);Qe.userData.editorAssetId="lab-hill",Qe.receiveShadow=Qe.castShadow=!0,n.add(Qe);let N=(X,Y)=>{let we=Te.clamp((X-H)/De*Le,0,Le-1e-6),We=Te.clamp((Y-he)/Me*Fe,0,Fe-1e-6),Ue=Math.floor(we),ot=Math.floor(We),St=we-Ue,ct=We-ot,st=Le+1,dt=ot*st+Ue,Zt=Ve.getY(dt),Lt=Ve.getY(dt+1),Dt=Ve.getY(dt+st),Ht=Ve.getY(dt+st+1);return St+ct<=1?Zt+(Lt-Zt)*St+(Dt-Zt)*ct:Ht+(Dt-Ht)*(1-St)+(Lt-Ht)*(1-ct)};J.push({heightfield:!0,mesh:Qe,editorAssetId:"lab-hill",height:N,...Ao.hills.bounds,friction:.81,gravity:1});function ye(X,Y,we,We,Ue=1.45){let ot=Za(384,72,(ct,st,dt)=>{ct.fillStyle="#202a32",ct.fillRect(0,0,st,dt),ct.fillStyle=We,ct.font="bold 31px system-ui",ct.textAlign="center",ct.fillText(X,st/2,48,st-20)}),St=new fe(new Mn(3.2,.6),new on({map:ot,side:cn}));St.position.set(Y,Ue,we),n.add(St),xe.push(St)}for(let X of Object.values(Ao)){ye(X.name.toLocaleUpperCase("fr"),...X.sign,X.color);let{xMin:Y,xMax:we,zMin:We,zMax:Ue}=X.bounds,ot=new xa(new pt().setFromPoints([new M(Y,.025,We),new M(we,.025,We),new M(we,.025,Ue),new M(Y,.025,Ue)]),new ui({color:X.color,transparent:!0,opacity:.72}));n.add(ot),xe.push(ot)}ye("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),ye("MURS HAUTS",3,-31,"#e8d2ff"),ye("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Se=new _n({color:"#c8e6ed",metalness:1,roughness:.16}),Pe=new fe(new di(.54,2),Se);Pe.userData.editorAssetId="chrome-sphere",Pe.position.set(Ps.x,Ps.y,Ps.z),Pe.castShadow=!0,n.add(Pe);let ge=tt.map((X,Y)=>{let{x:we,z:We}=_g(Y);return ue("\xC9chantillon "+tt[Y][0],we,.325,We,.65,.65,.65,Y,0,1,1,!0).mesh}),le=new An(1,12).rotateX(-Math.PI/2),Oe=new on({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function rt(X){let Y=new fe(le,Oe);return Y.scale.setScalar(X),n.add(Y),Y}function kt(X,Y,we,We,Ue,ot,St,ct){let st=Y>=3;e.shadowMap.enabled=st,x.castShadow=st,Oe.opacity=Y===2?.17:.11,Q.value=ct?.38+we*.04:0;let dt=Y>=9?2048:Y>=6?1024:Y>=4?512:256;x.shadow.intensity=.45+Y*.055,x.shadow.radius=.65+Y*.12,te=Y,x.shadow.mapSize.x!==dt&&(x.shadow.map?.dispose(),x.shadow.map=null,x.shadow.mapSize.set(dt,dt)),A=Ue,St!==F&&(F=St,oe.forEach((Lt,Dt)=>{let Ht=Lt.userData.texture??Lt.map,vi=W.has(Dt)?St:Math.min(256,St);if(Ht.image.width===vi)return;let Ar=document.createElement("canvas");Ar.width=Ar.height=vi;let _l=Ar.getContext("2d");vi>512?se(_l,Dt,vi):_l.drawImage(de[Dt],0,0,vi,vi);let fs=new Ri(Ar);fs.colorSpace=Ht.colorSpace,fs.wrapS=Ht.wrapS,fs.wrapT=Ht.wrapT,fs.repeat.copy(Ht.repeat);for(let Wo of[Lt,$[Dt]])Wo.userData.texture=fs,Wo.map=fs,Wo.needsUpdate=!0;Ht.dispose()}));let Zt=X>=4;for(let Lt of J)Lt.mesh?.isMesh&&!Lt.zone&&(Lt.mesh.material=Zt?oe[Lt.type]:$[Lt.type]);Qe.material=Zt?oe[3]:$[3];for(let Lt=0;Lt<ge.length;Lt++)ge[Lt].material=Zt?oe[Lt]:$[Lt];oe.forEach((Lt,Dt)=>{for(let Ht of[Lt,$[Dt]])Ht.userData.texture||(Ht.userData.texture=Ht.map),Ht.map=ot?Ht.userData.texture:null,Ht.color.set(ot?"#ffffff":tt[Dt][1]),Ht.needsUpdate=!0}),C=We?.21+we*.067:0,Se.metalness=We?.95:.1,Se.roughness=We?.13:.46,b=X>=2,_e(m)}return{boxes:J,floors:be,probe:Pe,display:ge,visual:kt,shadow:rt,setTimeOfDay:_e,setEnvironment:Ge,centerSky:je,setRetroSky(X){k!==X&&(k=X,_e(m))},sunDirection:()=>v.clone(),centerShadows:ht,lighting:[p,x,x.target,u,c],sunDisk:c,sunHalo:u,get skyLoading(){return D},get hillSeed(){return ze},setHillSeed:Ce,bakeLightmap:j,mapMaterial:(X,Y)=>Y>=4?oe[X]:$[X],builtObjects:[...J.map(X=>X.mesh).filter(X=>X?.isObject3D),Pe,...xe],materials:[...oe,...$],focus(X,Y,we){Ee.value=X?Y*.75:0,P.value=.07+we*.058}}}function bg(n,e,t){function i(c,h,u=.85){let d=c.getWorldPosition(new M),f=c.getWorldQuaternion(new vt);e.push({half:h,min:h.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:To(h),friction:u,gravity:1})}let s=[],r=[],o=new ei({color:"#485d5d",flatShading:!0});function a([c,h],u,d){let f=new fe(new qe(.095,.68,.11),o);f.position.set(c,.34,h+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new M(.0475,.34,.055));let p=new vn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new fe(new qe(.64,.36,.055),new ei({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Ri(g);_.colorSpace=Mt;let b=new fe(new Mn(.61,.095),new on({map:_}));b.position.set(0,.116,.03),p.add(b);let y=.592/d.length,E=d.map(([D,C],S)=>{let v=new fe(new qe(y-.012,.155,.04),new ei({color:"#478086"}));v.position.set(-.296+y*(S+.5),-.045,.046),p.add(v),s.push(v),v.userData.touchWidth=y-.012;let I=document.createElement("canvas");I.width=208,I.height=172;let L=new Ri(I);L.colorSpace=Mt;let O=new fe(new Mn(y-.017,.139),new on({map:L}));O.position.z=.0205,v.add(O);let B=-1/0;return v.userData.action=()=>{let V=performance.now();V-B<250||(B=V,C(),l(),v.position.z=.036,setTimeout(()=>{v.position.z=.046},115))},{label:D,context:I.getContext("2d"),texture:L}});function A(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let D of E){let C=D.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let S=(typeof D.label=="function"?D.label():D.label).split("|");S.forEach((v,I)=>C.fillText(v,104,(S.length>1?68:97)+I*37,188)),D.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(A)}function l(){for(let c of r)c()}return a(Ya.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Co[0])],["Boule",()=>t.spawn(1,Co[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Co[0])],["Vider",t.clear]]),a(Ya.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Co[1])],["Sph\xE8re",()=>t.spawn(5,Co[1])]]),a(Ya.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ya.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function Rh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new pt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Sg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Sg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Sg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Ph=0,bS=1,SS=new M,wg=new Ua,Xd=new Tn,Tg=new M,Ih=new kn,Dh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Lh,this.unassigned=new Lh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new qd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,SS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Ph){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,wg.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){wg.closestPointToPoint(p.point,!0,Tg);let x=Tg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Xd.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Xd.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(Xd.distanceToPoint(h.point)<0){u.push(Li.create(a,l,c),Li.create(h,l,a),Li.create(h,c,l),Li.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(Li.create(a,c,l),Li.create(h,a,l),Li.create(h,l,c),Li.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Ph&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=bS;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Ph&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=Li.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Li=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Ph,this.edge=null}static create(e,t,i){let s=new n,r=new ja(e,s),o=new ja(t,s),a=new ja(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Ih.set(e.point,t.point,i.point),Ih.getNormal(this.normal),Ih.getMidpoint(this.midpoint),this.area=Ih.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ja=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},qd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Lh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var as=class extends pt{constructor(e=[]){super();let t=[],i=[],r=new Dh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Be(t,3)),this.setAttribute("normal",new Be(i,3))}};var Hn=Math.PI*2,Uh=.84,ls=128;function Us(n){let e=new Uint8Array(ls*ls*4);for(let i=0;i<ls;i++)for(let s=0;s<ls;s++){let r=(s+.5)/ls,o=(i+.5)/ls,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Uh,1),Math.min(o/Uh,1),s,i),l=(s+i*ls)*4;for(let c=0;c<3;c++)e[l+c]=Te.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new hi(e,ls,ls);return t.colorSpace=Mt,t.generateMipmaps=!0,t.minFilter=Nn,t.magFilter=un,t.needsUpdate=!0,t}function gr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ut(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new He(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Uh,r.getY(l)*Uh):r.setXY(l,.95,.95);return i.setAttribute("color",new Ft(a,3)),i}function Ns(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Rh(s),material:new _n({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Eg(n,e,t){let i=n/2,s=e/2,r=new is;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Ds(n,e,t,i,s){return new nr(Eg(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ls(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=e;f++){let p=Hn*f/e,x=t(u,d,p,h);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,h/(n.length-1)),h===n.length-1||f===e)continue;let g=h*(e+1)+f,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new pt;o.setAttribute("position",new Be(i,3)),o.setAttribute("uv",new Be(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let h=0;h<n.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Ja(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Hn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new as(t)}function wS(){let t=new Ra(Eg(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Te.clamp(i.getX(l)/.098+.5,0,1),h=Te.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=Us((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Hn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[ut(Ds(.106,.207,.013,.011,.0019),8425890),ut(Ds(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),ut(Ds(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),ut(t,16777215,!0),ut(Ds(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),ut(new qe(.0036,.024,.004).translate(.055,.029,0),11714250),ut(new qe(.0036,.015,.004).translate(-.055,.032,0),11385285),ut(new qe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(ut(new Ot(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(ut(new An(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(ut(new An(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new as([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new M(c,h,l))));return Ns("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function TS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Ls(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Us((a,l,c,h)=>{let u=Hn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(_=>Math.exp(-(((d-_+.035*Math.cos(u))/.009)**2)))),x=f**3*p,g=gr(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Ja([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ns("bread","Baguette de pain",.27,o,[ut(s,16777215,!0)],r,.9)}function ES(){let n=Us((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*gr(a,l)-(c&&(u||d)?35:0);return[p*.94,p,p*1.04]}),e=Ls([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ls([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[ut(e,16777215,!0),ut(t,11056059),ut(new Ot(.067,.067,.124,10).rotateX(Math.PI/2),9346214),ut(new Ot(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Hn*r/5;i.push(ut(new qe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ja([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ns("wheel","Roue",1.8,s,i,n,.64,.23)}function AS(){let n=Us((r,o,a,l)=>{let c=gr(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Hn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=Ls([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Ln(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Hn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new as(i);return Ns("cup","Tasse",.39,s,[ut(e,16777215,!0),ut(t,15785922)],n,.37)}function CS(){let n=Ls([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Us((s,r,o,a)=>{let l=9*gr(o,a),c=11*Math.cos(s*Hn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Hn*48+s*Hn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Hn*4);return[h,h*1.13,h*1.24]}),t=[ut(n,16777215,!0),ut(new ws(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),ut(new An(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),ut(new An(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),ut(new Ot(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),ut(new An(.008,12).translate(0,.035,.0336),15633202)],i=Ja([[.033,-.143],[.054,.133]],6);return Ns("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function RS(){let n=Ls([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Us((r,o,a,l)=>{let c=10*gr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Hn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Hn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[ut(n,16777215,!0),ut(new An(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),ut(new ws(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),ut(new An(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ja([[.069,-.112],[.069,.109]],6);return Ns("soda","Canette de soda",.35,s,i,t,.42,.27)}function IS(){let n=Ls([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Us((s,r,o,a)=>{let l=15*gr(o,a),c=8*Math.cos(s*Hn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[ut(n,16777215,!0),ut(Ds(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),ut(new An(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Ja([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ns("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function PS(){let n=Us((s,r,o,a)=>{let l=8*gr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ls([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[ut(Ds(.138,.22,.061,.016,.004),14788675),ut(Ds(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),ut(new Mn(.106,.174).translate(0,-.004,.0395),16777215,!0),ut(e,2502456),ut(new Ot(.014,.017,.016,10).translate(.04,.117,.001),2503482),ut(new qe(.008,.047,.027).translate(-.072,.014,-.002),3028798),ut(new qe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),ut(new An(.004,8).translate(.04,.066,.0397),15817792),ut(new An(.004,8).translate(-.04,.066,.0397),7903100),ut(Ds(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return Ns("radio","Talkie-walkie",.43,new as(i),t,n,.61,.08)}function Ag(){return[wS(),TS(),ES(),AS(),CS(),RS(),IS(),PS()]}var DS=[0,1,2,3,4,5,7,8,9,10];function Cg(n){yg.forEach(({x:e,z:t},i)=>n(DS[i],new M(e,.8,t)))}function Rg(){let n=[["Cube",new qe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new di(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new ir(.29),"#d8ae53",0,1],["Brique",new qe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new qe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new di(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Xa(t,s),material:new _n({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:To(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Ag()){let s=Xa(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var c2=new M(0,1,0),Nh=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,t,i):e;function Ig(n){return!Array.isArray(n?.pivot)||n.pivot.length!==3?null:{pivot:n.pivot.map(e=>Nh(e,0,-6,6)),closed:Nh(n.closed,0,-180,180),open:Nh(n.open,95,-180,180),seconds:Nh(n.seconds,.7,.1,6)}}var Fh=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";Fh.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Fh.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Yd=Object.freeze(Object.fromEntries(Fh.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),Pg=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,e,t):i;function LS(n,e){let t=Yd[n];return{pivot:t.pivot.map((i,s)=>Pg(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Pg(e?.limit,0,150,t.limit)}}function Dg(n){return Object.fromEntries(Fh.map(([e])=>[e,LS(e,n?.[e])]))}function Lg(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var Ug=48,US=3,NS=128,Ng=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),FS=(n,e,t)=>Math.max(e,Math.min(t,n)),OS=()=>structuredClone(Ng.shield),Ka=(n,e,t,i)=>Number.isFinite(n)?FS(n,t,i):e;function Bh(n){let e=n?.mode==="lathe"?Ng.bottle:OS(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Ug?n.points.map(o=>[Ka(o?.[0],0,-1.5,1.5),Ka(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Ka(n?.depth,e.depth,.025,1.5),bevel:Ka(n?.bevel,e.bevel,0,.15),segments:Math.round(Ka(n?.segments,32,US,NS))}}function Fg(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Oh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function BS(n,e,t,i){let s=Oh(n,e,t),r=Oh(n,e,i),o=Oh(t,i,n),a=Oh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function zS(n){let e=Bh(n),t=e.mode==="lathe"?e.points:Fg(e);if(t.length<3||t.length>Ug*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&BS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Og(n){let e=Bh(n),t=zS(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ce(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ce(0,s[0].y)),s.at(-1).x>0&&s.push(new ce(0,s.at(-1).y)),i=new Ca(s,e.segments);let r=[],o=i.attributes.position,a=new M,l=new M,c=new M,h=new M,u=i.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);i.setIndex(r)}else{let s=Fg(e),r=new is;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new nr(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new Ft(new Float32Array(s*2),2))}return i}var Zd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],$a=null,kS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function xr(n){return typeof n=="string"&&kS.has(n.replace(/^custom-model-game-/,""))}function zh(n){let e=n?.parts;return xr(n?.id)||xr(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>xr(t?.assetId))}function zg(){if($a)return $a;let n=Rg(),e=Zd;return $a=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),$a.set("chrome-sphere",{geometry:new di(.54,2),material:new _n({color:"#c8e6ed",metalness:1,roughness:.16})}),$a}function kh(n){return typeof n=="string"&&zg().has(n)}function jd(n){return zg().get(n)??null}function VS(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function Bg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[VS(e,n)]}}function Jd(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>Bg(e,t)),Bg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var nf="gorilla-lab-models-v1",Ro=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),GS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,HS=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Vg=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Qd=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),WS=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Qa=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,e,t):i;function sf(n){return{gravity:Qa(n?.physics?.gravity,0,2.5,1),bounce:Qa(n?.physics?.bounce,0,1.65,1)}}function Gg(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Qa(n?.uv?.repeat,.01,100,1),angle:Qa(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Qa(n?.uv?.offset?.[t],-100,100,0))}}var XS=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),qS=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,YS=/^#[a-f\d]{6}$/i;function Kd(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Fs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Te.clamp(n[s],t,i):e)}function kg(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var ef=new Set(["box","sphere","capsule","convex"]);function ZS(n){if(n?.mode==="box")return{mode:"box",center:Fs(n.center,0,-6,6),size:Fs(n.size,.5,.025,12)};let e=Math.round(Te.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:ef.has(n.shape)?n.shape:"box",center:Fs(n.center,0,-6,6),size:Fs(n.size,.5,.025,12),rotation:Fs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&ef.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function yr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Ro.models||JSON.stringify(n).length>Ro.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!zh(i)).map(i=>{if(typeof i?.id!="string"||!qS.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Ro.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Kd(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:Dg(i.avatarRig)}:{},...kh(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:Object.fromEntries(Object.entries(XS).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:ZS(i?.hitbox),...i.physics?{physics:sf(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(s=>!xr(s?.assetId)).map((s,r)=>{let o=i.kind==="structure"&&s?.zone!=="trigger"?Ig(s?.hinge):null;return{name:Kd(s?.name,`Pi\xE8ce ${r+1}`),...o?{hinge:o}:{},...Object.hasOwn(Yd,s?.avatarJoint)?{avatarJoint:s.avatarJoint}:{},...Number.isInteger(s?.group)&&s.group>0&&s.group<=Ro.parts?{group:s.group}:{},shape:s?.shape==="asset"&&kh(s?.assetId)?"asset":Object.hasOwn(HS,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&kh(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:Bh(s?.profile)}:{},position:Fs(s?.position,0,-3,3),rotation:Fs(s?.rotation,0,-360,360),scale:Fs(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&YS.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(WS,s?.zone)?{zone:s.zone}:{},...s?.zone==="trigger"&&typeof s?.notice?.text=="string"&&s.notice.text.trim()?{notice:{text:Kd(s.notice.text,"Message"),phase:s.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(Qd,s?.finish)?{finish:s.finish}:{},...s?.zone==="trigger"&&kg(s.portal)?{portal:kg(s.portal)}:{},...s?.uv?{uv:Gg(s)}:{},surface:Object.hasOwn(Vg,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=Ro.textureBytes&&GS.test(s.texture)?s.texture:null}})}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&Lg(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function Hg(n){try{let e=(n??globalThis.localStorage)?.getItem(nf);if(e&&e.length<=Ro.fileBytes)return yr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function jS(n){switch(n){case"tetrahedron":return new ir(Math.sqrt(3)/2);case"sphere":return new pi(.5,20,12);case"cylinder":return new Ot(.5,.5,1,20);case"cone":return new er(.5,1,20);case"torus":return new Ln(.365,.135,8,24);case"capsule":return new Ss(.28,.44,6,16);case"diamond":return new fi(.5);default:return new qe(1,1,1)}}var Wg=Object.keys(Vg),ni=64,el=4,Xg=2,qi;function qg(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Yg(){if(qi)return qi;let n=ni*el,e=ni*Xg,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/ni)*el+Math.floor(s/ni),o=qg(Wg[r],s%ni,i%ni),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return qi=new hi(t,n,e),qi.colorSpace=Mt,qi.magFilter=un,qi.minFilter=Nn,qi.generateMipmaps=!0,qi.needsUpdate=!0,qi}var $d=new Map;function JS(n){if($d.has(n))return $d.get(n);let e=new Uint8Array(ni*ni*4);for(let i=0;i<ni;i++)for(let s=0;s<ni;s++){let r=qg(n,s,i),o=(i*ni+s)*4;e.set([r,r,r,255],o)}let t=new hi(e,ni,ni);return t.colorSpace=Mt,t.wrapS=t.wrapT=Dn,t.magFilter=un,t.minFilter=Nn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,$d.set(n,t),t}function Zg(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function KS(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=Gg(e),a=Te.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:d}=n.attributes,f=new M,p=new M;for(let x=0;x<h.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let _=Math.abs(p.x),b=Math.abs(p.y),y=Math.abs(p.z);_>=b&&_>=y?(g=f.z,m=f.y):b>=y?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Vh(n,e=new M(...n.scale)){let t=n.shape==="asset"?jd(n.assetId):null,i=n.shape==="custom"?Og(n.profile):t?.geometry?.clone()??jS(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Be(new Float32Array(s.attributes.position.count*2),2)),n.uv&&KS(s,n,e);let r=n.rotation.map(Te.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new He(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=Wg.indexOf(n.surface),u=h%el,d=Math.floor(h/el),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(u+.05+c.getX(p)*.9)/el,(d+.05+c.getY(p)*.9)/Xg);return s.setAttribute("color",new Ft(l,3)),s}function $S(n){let e=n?.shape==="asset"?jd(n.assetId):null,t=Qd[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new mi().load(n.texture);a.colorSpace=Mt,a.wrapS=a.wrapT=Dn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Dn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new He(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??Qd.original;if(!n?.texture)return new _n({vertexColors:!0,map:n?.uv?JS(n.surface):Yg(),roughness:i,metalness:s});let r=new mi().load(n.texture);return r.colorSpace=Mt,r.wrapS=r.wrapT=Dn,new _n({vertexColors:!0,map:r,roughness:i,metalness:s})}function Gh(n){return n?.parts?.some(Zg)?n.parts.map($S):new _n({vertexColors:!0,map:Yg(),roughness:.68})}function Hh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==qi&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function tf(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Vh(s);let r=new tn(...s.rotation.map(Te.degToRad),"ZYX"),o=new M(...s.scale).multiply(new M(...[0,1,2].map(a=>new M().setComponent(a,1).applyEuler(r).multiply(e).length())));return Vh(s,o)}),i=Rh(t,n.some(Zg));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function Wh(n,e=null){let t=tf(n.parts),i=t.boundingBox.getSize(new M).max(new M(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=tf(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function tl(n){let e=new dn;for(let t of n.parts??[]){let i=Vh(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function Io(n){return tl(n).getSize(new M)}function jg(n){let e=tl(n),t=e.getCenter(new M),i=e.getSize(new M),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":ef.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Te.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):i,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function QS(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function e1(n,e=null){let t=jg(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new M(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,d)=>d!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new Ss(l,c,Math.max(2,Math.round(i/8)),i):new pi(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=tf(n.parts),r=QS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new as(r),a=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new qe(1,1,1)}function Jg(n,e=null){let t=jg(n),i=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=e1(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Te.degToRad(t.rotation.x)),a.rotateY(Te.degToRad(t.rotation.y)),a.rotateZ(Te.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Kg(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=tl(n),i=t.getCenter(new M),s=t.getSize(new M).max(new M(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new M(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Vh(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new M).sub(i).multiply(r),size:l.getSize(new M).multiply(r).max(new M(.01,.01,.01))};return a.dispose(),[c]})}var e0=512,t0=1/2.6**2,qh=1e4,il=20,t1=1e6,rf=1e4,n1=1e4,of=10,af=10,i1=1e4,s1=16,Po=1e4,$g=new WeakMap,Ui=Te.clamp,Ni=Te.lerp,sl=n=>n*n*(3-2*n);function Pt(n,e,t,i){return Number.isFinite(n)?Ui(n,e,t):i}function n0(n){if(!n)return null;let e=yr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var r1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function i0(n,e=s1){return Math.round(Pt(n,1,e0,e))}function o1(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return Pt(n[e+"Density"],0,il,0);let r=Pt(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return Pt(o/t,0,il,0)}var a1=["grass","shrub","model"],l1=["keep","fit","stretch"],c1=/^#[a-f\d]{6}$/i,h1=20;function u1(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(Pt(n.minHeight,-300,300,-300),Pt(n.maxHeight,-300,300,300)),[s,r]=e(Pt(n.minX,0,100,0),Pt(n.maxX,0,100,100)),[o,a]=e(Pt(n.minZ,0,100,0),Pt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:Pt(n.maxSlope,0,90,90),yaw:Pt(n.yaw,-360,360,0),yawVariation:Pt(n.yawVariation,0,360,360)}}function d1(n){return n?{x:Pt(n.x,-256,256,0),z:Pt(n.z,-256,256,0),radius:Pt(n.radius,.1,512,5),blend:Pt(n.blend,0,1,.5)}:null}function rl(n={}){let e=n0(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,of).map(r=>c1.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:Pt(n.density,0,il,1),colors:s,seed:Math.round(Pt(n.seed,0,2147483647,1)),size:Pt(n.size,.05,rf,1),fit:l1.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:Pt(n.variation,0,af,0),...n.scatter?{scatter:u1(n.scatter)}:{}}}function f1(n,e){return Array.isArray(n.rules)?n.rules.slice(0,qh).filter(t=>t&&typeof t=="object"&&a1.includes(t.kind)).filter(t=>t.kind!=="model"||n0(t.model)).map(rl):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=o1(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[rl({kind:t,model:a,density:o,seed:n.seed,size:Pt(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function cs(n={},e=1){let t=i0(n?.detail),i=n?.heights;return{detail:t,...n?.triangulation==="varied"?{triangulation:"varied"}:{},seed:Math.round(Pt(n?.seed,0,2147483647,1)),amplitude:Pt(n?.amplitude,0,1e4,0),frequency:Pt(n?.frequency,1e-5,100,.12),octaves:Math.round(Pt(n?.octaves,1,h1,3)),roughness:Pt(n?.roughness,0,1,.42),ridge:Pt(n?.ridge,0,1,0),edgeFade:Pt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:d1(n.reliefArea)}:{},rules:f1(n??{},e),textureDensity:Pt(n?.textureDensity,1e-4,i1,t0),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&r1.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>Pt(s,-Po,Po,0)):null}}function lf(n,e,t){return t!==void 0&&ii(n,e,t)>.5}function s0(n,e,t,i,s){let r=Ui(t,0,e),o=Ui(i,0,e),a=Math.min(e-1,Math.floor(r)),l=Math.min(e-1,Math.floor(o)),c=r-a,h=o-l,u=e+1,d=l*u+a,f=n[d],p=n[d+1],x=n[d+u],g=n[d+u+1];return lf(a,l,s)?c>=h?f+(p-f)*c+(g-p)*h:f+(g-x)*c+(x-f)*h:c+h<=1?f+(p-f)*c+(x-f)*h:g+(x-g)*(1-c)+(p-g)*(1-h)}function cf(n,e){let t=i0(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>s0(n.heights,n.detail,a%i*s,Math.floor(a/i)*s,n.triangulation==="varied"?n.seed:void 0));return{...n,detail:t,heights:r}}function ii(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Xh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=sl(n-i),o=sl(e-s),a=Ni(ii(i,s,t),ii(i+1,s,t),r),l=Ni(ii(i,s+1,t),ii(i+1,s+1,t),r);return 2*Ni(a,l,o)-1}function Do(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f}=i,p=$g.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.diagonalSeed===(i.triangulation==="varied"?r:void 0)&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===d;if(x&&p.heights===f)return p;let g=s+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let y=0;y<=s;y++)for(let E=0;E<=s;E++){let A=(E/s-.5)*e,D=(y/s-.5)*t,C=1;if(d){let k=Math.hypot(A-d.x,D-d.z);if(k>=d.radius)continue;d.blend&&(C=sl(Math.min(1,(d.radius-k)/(d.radius*d.blend))))}let S=A*a,v=D*a,I=0,L=1,O=0;for(let k=0;k<l;k++){let te=Xh(S*2**k,v*2**k,r+k*13);I+=L*Ni(te,1-2*Math.abs(te),h),O+=L,L*=c}let B=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(y/s-.5))*2)),u*2):1,V=l===3&&c===.42&&h===0&&u===0;m[y*g+E]=C*(V?o*(.62*Xh(S,v,r)+.26*Xh(S*2.03,v*2.03,r+13)+.12*Xh(S*4.13,v*4.13,r+37)):o*I/O*B)}let _=f?m.map((y,E)=>y+f[E]):m,b={w:e,d:t,detail:s,seed:r,diagonalSeed:i.triangulation==="varied"?r:void 0,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f,procedural:m,surface:_};return $g.set(n,b),b}function Yh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return s0(o,i,(e/s+.5)*i,(t/r+.5)*i,n.diagonalSeed)}function Lo(n=0){return(Math.round(n/90)%4+4)%4*90}function r0(n){let e=Lo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function o0(n,e,t){let{cos:i,sin:s}=r0(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function nl(n){return Lo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function Qg(n,e,t){return n.y+Yh(Do(n),...o0(n,e,t))}var p1=.25;function hf(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=nl(n),s=nl(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let d=e[r]-u*s[a]/2,f=d-(n[r]+u*i[a]/2);Math.abs(f)<=p1&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:d,delta:f})}}return t}function a0(n,e,t=1.5){let i=hf(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:d}=i,f=n.terrain;if(Math.abs(nl(n)[a]-nl(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let C=e.terrain.detail,S=Math.ceil(f.detail/C)*C;S<=e0&&(f=cf(f,S))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:_}=Do(p),b=m?.slice()??Array((x+1)**2).fill(0),y=Math.max(t,nl(p)[o]/x),{cos:E,sin:A}=r0(p),D=!1;for(let C=0;C<=x;C++)for(let S=0;S<=x;S++){let v=(S/x-.5)*p.w,I=(C/x-.5)*p.d,L=p.x+E*v+A*I,O=p.z-A*v+E*I,B=r==="x"?L:O;if(B<l-1e-6||B>c+1e-6)continue;let V=Math.max(0,h*(u-(s==="x"?L:O)));if(V>y)continue;let k=C*(x+1)+S,te=s==="x"?Qg(e,u,O):Qg(e,L,u),q=Ni(_[k],te-p.y,sl(1-V/y))-g[k];b[k]=Ui(q,-Po,Po),D||=b[k]!==q}return{piece:{...p,terrain:{...f,heights:b}},clipped:D}}function m1(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(h+=s[d*r+f],u++);return h/u}function l0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Do(n),{detail:l,w:c,d:h,surface:u,procedural:d}=a,[f,p]=o0(n,e,t),x=Ui(f,-c/2,c/2),g=Ui(p,-h/2,h/2);if((f-x)**2+(p-g)**2>=s**2)return!1;let m=(f/c+.5)*l,_=(p/h+.5)*l,b=c/l,y=h/l,E=Math.max(0,Math.ceil(m-s/b)),A=Math.min(l,Math.floor(m+s/b)),D=Math.max(0,Math.ceil(_-s/y)),C=Math.min(l,Math.floor(_+s/y)),S=Number.isFinite(o)?o-n.y:Yh(a,f,p),v=l+1,I=a.heights?.slice()??new Array(v**2).fill(0),L=!1,O=!1;function B(V,k,te){L=!0;let q=k*v+V,ae=I[q],me;if(i==="raise"||i==="lower")me=ae+(i==="raise"?1:-1)*r*te;else{let _e=i==="flatten"?S:m1(a,V,k);me=Ni(u[q],_e,Math.min(1,r)*te)-d[q]}me=Ui(me,-Po,Po),!(Math.abs(me-ae)<1e-7)&&(I[q]=me,O=!0)}for(let V=D;V<=C;V++)for(let k=E;k<=A;k++){let te=Math.hypot((k-m)*b,(V-_)*y)/s;te<1&&B(k,V,sl(1-te))}if(!L){let V=Ui(m,0,l),k=Ui(_,0,l),te=Math.min(l-1,Math.floor(V)),q=Math.min(l-1,Math.floor(k)),ae=V-te,me=k-q,_e=ae+me<=1,Ge=_e?1-ae-me:ae+me-1,je=_e?ae:1-me,ht=_e?me:1-ae;if(Ge>=Math.max(je,ht)){let tt=+!_e;B(te+tt,q+tt,1)}else je>=ht?B(te+1,q,1):B(te,q+1,1)}return O&&(n.terrain.heights=I),O}function uf(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(i.textureDensity??t0),u=0;for(let f=0;f<=s;f++)for(let p=0;p<=s;p++){let x=f*r+p;if(o[3*x]=(p/s-.5)*e,o[3*x+2]=(f/s-.5)*t,a[2*x]=p/s*e*h,a[2*x+1]=(1-f/s)*t*h,f<s&&p<s){let g=x+1,m=x+r,_=m+1;i.triangulation==="varied"&&lf(p,f,i.seed)?(c[u]=x,c[u+1]=m,c[u+2]=_,c[u+3]=x,c[u+4]=_,c[u+5]=g):(c[u]=x,c[u+1]=m,c[u+2]=g,c[u+3]=_,c[u+4]=g,c[u+5]=m),u+=6}}let d=new pt;return d.setAttribute("position",new Ft(o,3).setUsage(Ha)),d.setAttribute("uv",new Ft(a,2)),d.setIndex(new Ft(c,1)),g1(d,n),d}function g1(n,e){let{surface:t}=Do(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function x1(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=n,l=Ui((e/r+.5)*s,0,s),c=Ui((t/o+.5)*s,0,s),h=Math.min(s-1,Math.floor(l)),u=Math.min(s-1,Math.floor(c)),d=s+1,f=u*d+h;if(lf(h,u,n.diagonalSeed)){let m=l-h>=c-u,_=m?a[f+1]-a[f]:a[f+d+1]-a[f+d],b=m?a[f+d+1]-a[f+1]:a[f+d]-a[f];return i.set(-_*s/r,1,-b*s/o).normalize()}let p=l-h+c-u<=1,x=p?a[f+1]-a[f]:a[f+d+1]-a[f+d],g=p?a[f+d]-a[f]:a[f+d+1]-a[f+1];return i.set(-x*s/r,1,-g*s/o).normalize()}function y1(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new pt;return e.setAttribute("position",new Be(n,3)),e.setAttribute("uv",new Be(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function _1(){return new di(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function v1(n,e,t){if(e==="stretch")return new M().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function M1(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),h=[],u=new M;if(!c||!e.density)return{requested:0,positions:h,area:c};let d=Math.cos(Te.degToRad(s.maxSlope)),f=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,E)=>{if(p){let A=n.y+Yh(t,y,E);if(A<s.minHeight||A>s.maxHeight)return!1}return!f||x1(t,y,E,u).y>=d-1e-7},g=1;if(f||p){let y=0,E=32;for(let A=0;A<E;A++)for(let D=0;D<E;D++)x(Ni(r,o,(D+.5)/E),Ni(a,l,(A+.5)/E))&&y++;g=y/E**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),b=f||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<b&&h.length<_;y++){let E=Ni(r,o,ii(y,27,e.seed)),A=Ni(a,l,ii(y,27,e.seed+1));x(E,A)&&h.push([E,A])}return{requested:m,positions:h,area:c*g}}function c0(n){let e=new vn,t=Do(n);e.userData.distribution=[];let i=t1,s=n1;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=M1(n,o,t,i),h=l?l.length:Math.min(a,i),u=o.collidable?Math.min(h,s):0;if(i-=h,s-=u,e.userData.distribution[r]={requested:a,count:h,area:c,collisions:u},!h)continue;let d=o.kind==="grass",f=o.model?v1(Io(o.model),o.fit,o.size):null,p=o.model?Wh(o.model,f):d?y1():_1();f?p.scale(...f):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?Gh(o.model):new ei({color:"#ffffff",side:d?cn:$n,flatShading:!0});if(d&&n.terrain.grassTexture){let b=new mi().load(n.terrain.grassTexture);b.colorSpace=Mt,x.map=b,x.userData.ownTexture=!0}let g=new ga(p,x,h);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:u,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(Ha),g.receiveShadow=!0;let m=o.colors.map(b=>new He(b)),_=new He;for(let b=0;b<h;b++){let y=ii(b,41,o.seed)*(m.length-1),E=Math.floor(y);g.setColorAt(b,_.copy(m[E]).lerp(m[E+1],y-E))}e.add(g)}return b1(e,n),e}function b1(n,e){let t=Do(e),i=new jt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(ii(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(ii(c,27,r+1)-.5)*.96*e.d;i.position.set(h,Yh(t,h,u),u),i.rotation.y=l?Te.degToRad(l.yaw+ii(c,27,r+2)*l.yawVariation):ii(c,27,r+2)*Math.PI*2,i.scale.setScalar(Ni(Math.max(.05,1-o),1+o,ii(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function h0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Hh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var d0=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],df=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],ol={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},S1=16e6,Uo=512,Yi=1024,xi=2e4,hs=512,sn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,u0=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function mn(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>S1)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>Uo)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+Uo+" pi\xE8ces.");let e=n.spawn??{},t=bl(n.environment),i=n.pieces.filter(s=>!xr(s?.sceneryId)&&!zh(s?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:u0(n.name,56,"Ma map"),worldSize:sn(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:sn(e.x,-Yi,Yi,0),y:sn(e.y,-xi,xi,.06),z:sn(e.z,-Yi,Yi,3),yaw:sn(e.yaw,-360,360,0)},pieces:i.map((s,r)=>{if(!s||typeof s!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let o=sn(s.w,.05,hs,3),a=sn(s.d,.05,hs,3),l=s.terrain&&typeof s.terrain=="object"?cs(s.terrain,o*a):null,c=s.model?yr({version:1,models:[s.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:u0(s.name,36,"Pi\xE8ce "+(r+1)),...typeof s.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(s.sceneryId)?{sceneryId:s.sceneryId}:{},x:sn(s.x,-Yi,Yi,0),y:sn(s.y,-xi,xi,0),z:sn(s.z,-Yi,Yi,0),w:o,h:sn(s.h,.05,256,.5),d:a,pitch:l?0:sn(s.pitch,-180,180,0),yaw:l?Lo(sn(s.yaw,-360,360,0)):sn(s.yaw,-360,360,0),roll:l?0:sn(s.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(s.primitive)?s.primitive:"box",uvScale:sn(s.uvScale,.05,100,1),uvOffsetX:sn(s.uvOffsetX,-100,100,0),uvOffsetY:sn(s.uvOffsetY,-100,100,0),uvRotation:sn(s.uvRotation,-360,360,0),material:Math.round(sn(s.material,0,16,0)),color:typeof s.color=="string"&&/^#[a-f0-9]{6}$/i.test(s.color)?s.color:"#ffffff",grip:sn(s.grip,0,1.5,.8),gravity:sn(s.gravity,.05,2.5,1),bounce:sn(s.bounce,0,1.65,1),solid:s.solid!==!1,texture:typeof s.texture=="string"&&s.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(s.texture)?s.texture:null}})}}function f0(n){return mn({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...gg,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new tn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function p0(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return mn({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,ol.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,ol.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,ol.rubber)]})}function si(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function m0(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new tn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>Yi||Math.abs(u)>Yi||Math.abs(h)>xi?null:{...t,x:c,y:h,z:u}}var g0="gorilla-lab-custom-map-v1";function x0(n){let e=new Blob([JSON.stringify(mn(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var w1=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function ff(){return si({name:"Miroir",sceneryId:"lab-mirror",x:Is.x,y:Is.y,z:Is.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function y0(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&w1.has(e)):!1:!0}var _0=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],pf=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},b0=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",No=(n,e,t)=>Math.min(t,Math.max(e,n)),T1=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Zh=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function S0(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var w0="gorilla-lab-texture-shelf-v1";function E1(){try{let n=JSON.parse(localStorage.getItem(w0)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function v0(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=b0(t),r.fillRect(0,0,o,o);let a=S0(s),l=o/Math.max(4,2*Math.round(4*i)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(i),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<u;d++){let f=a()*o,p=a()*o,x=a(),g=a(),m=a();Zh(r,_=>{if(e==="rock"){let b=(4+x*22)*h;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let E=y*Math.PI/3+g,A=b*(.63+.3*Math.cos(E*2+g)+.25);_.lineTo(f+Math.cos(E)*A,p+Math.sin(E)*A*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let b=(1+x*x*12)*h,y=_.createRadialGradient(f,p,0,f,p,b);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(f-b,p-b,b*2,b*2)}else if(e==="grass"||e==="wood"){let b=e==="grass",y=(b?5+x*25:7+x*110)*h;_.strokeStyle=b?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*h,_.beginPath(),_.moveTo(f,p),b?_.quadraticCurveTo(f+y*(g-.5)*.55,p-y*.58,f+y*(g-.6),p-y):_.quadraticCurveTo(f+y*.5,p+10*(g-.5),f+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let b=(e==="sand"?.6+x*1.6:1+x*5)*h;_.fillRect(f,p,b,b*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Zh(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,No(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var A1=`
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
`;function C1(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=A1,document.head.append(n)}async function M0(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function mf({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){C1();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
          <div data-shape-list></div>
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
  </section>`,document.body.append(o);let a=F=>o.querySelector(F),l=a(".texture-canvas"),c=a(".texture-tile"),h=pf(),u=pf(),d={pattern:_0.some(([F])=>F===i)?i:"grain",base:b0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,b=!1,y=null,E="paint",A=null,D=null;a("#studio-title").textContent=t+" / SURFACE LAB";let C=[],S=-1;a("[data-field=base]").value=d.base;for(let F of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+F+"]").addEventListener("input",$=>{let Ee=$.target.value;d[F]=F==="seed"?Math.trunc(No(Number(Ee)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(F)?Number(Ee):Ee});let v=F=>{a("[data-status]").textContent=F},I=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let F=c.getContext("2d");F.clearRect(0,0,256,128);for(let $=0;$<2;$++)for(let Ee=0;Ee<4;Ee++)F.drawImage(l,Ee*64,$*64,64,64)},L=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:C,editingShape:S}),O=F=>{p.putImageData(F.base,0,0),x.putImageData(F.top,0,0),C=F.shapes,S=F.editingShape,k(),I()},B=()=>{D=null,g.push(L()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},V=(F,$)=>{F.length&&(D=null,$.push(L()),O(F.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},k=()=>{a("[data-shape-count]").textContent=C.length+" forme"+(C.length>1?"s":""),a("[data-cmd=add-shape]").textContent=S<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(S+1),a("[data-shape-list]").replaceChildren(...C.map((F,$)=>{let Ee=document.createElement("div");Ee.className="texture-setting-row";let P=document.createElement("canvas");P.width=48,P.height=32;let re=Math.min(48/F.width,32/F.height);P.getContext("2d").drawImage(F,0,0,F.width*re,F.height*re);let Q=document.createElement("button"),j=document.createElement("button");return Q.textContent="Modifier "+($+1),j.textContent="Supprimer "+($+1),Q.onclick=()=>{B(),S=$,x.clearRect(0,0,512,512),x.drawImage(F,(512-F.width)/2,(512-F.height)/2),k(),I()},j.onclick=()=>{B(),C=C.filter((J,xe)=>xe!==$),S===$?(S=-1,x.clearRect(0,0,512,512)):S>$&&S--,k(),I()},Ee.append(P,Q,j),Ee}))};a("[data-cmd=add-shape]").onclick=()=>{let F=x.getImageData(0,0,512,512).data,$=512,Ee=512,P=-1,re=-1;for(let j=0;j<512;j++)for(let J=0;J<512;J++)F[4*(j*512+J)+3]&&($=Math.min($,J),Ee=Math.min(Ee,j),P=Math.max(P,J),re=Math.max(re,j));if(P<0){v("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let Q=document.createElement("canvas");Q.width=P-$+1,Q.height=re-Ee+1,Q.getContext("2d").drawImage(u,$,Ee,Q.width,Q.height,0,0,Q.width,Q.height),B(),C=S<0?[...C,Q]:C.map((j,J)=>J===S?Q:j),S=-1,x.clearRect(0,0,512,512),k(),I(),v("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let te=()=>{let F=(J,xe,ue)=>No(Number(a("[data-field="+J+"]").value)||0,xe,ue),$=Math.round(F("density",1,1e3)),Ee=F("minScale",1,200)/100,P=Math.max(Ee,F("maxScale",1,200)/100),re=F("rotation",0,360)*Math.PI/180,Q=a("[data-field=mirror]").checked,j=S0(d.seed);B(),d.pattern="solid",v0(h,d);for(let J=0;J<$&&C.length;J++){let xe=C[Math.floor(j()*C.length)],ue=j()*512,be=j()*512,$e=j()*re,Ye=512*(Ee+j()*(P-Ee))/Math.max(xe.width,xe.height),R=Q&&j()<.5?-1:1;Zh(p,w=>{w.translate(ue,be),w.rotate($e),w.scale(R*Ye,Ye),w.drawImage(xe,-xe.width/2,-xe.height/2)})}I(),v(C.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},q=F=>{let $=l.getBoundingClientRect();return{x:(F.clientX-$.left)/$.width*512,y:(F.clientY-$.top)/$.height*512}},ae=F=>{let $=d.size/2,Ee=d.opacity;Zh(x,P=>{P.save(),E==="erase"&&(P.globalCompositeOperation="destination-out"),P.globalAlpha=Ee;let re=No(d.hardness,.05,1);if(E==="stamp")P.fillStyle=d.ink,P.translate(F.x,F.y),P.rotate(Math.PI/4),P.fillRect(-$*.8,-$*.8,$*1.6,$*1.6);else{let Q=P.createRadialGradient(F.x,F.y,$*re*.85,F.x,F.y,$);if(E==="erase")Q.addColorStop(0,"rgba(0,0,0,1)"),Q.addColorStop(1,"rgba(0,0,0,0)");else{let j=d.ink.match(/[\da-f]{2}/gi).map(J=>parseInt(J,16)).join(",");Q.addColorStop(0,"rgba("+j+",1)"),Q.addColorStop(1,"rgba("+j+",0)")}P.fillStyle=Q,P.beginPath(),P.arc(F.x,F.y,$,0,2*Math.PI),P.fill()}P.restore()})},me=(F,$)=>{let Ee=Math.hypot($.x-F.x,$.y-F.y),P=Math.max(1,Math.ceil(Ee/Math.max(2,d.size*.18)));for(let re=1;re<=P;re++)ae({x:F.x+($.x-F.x)*re/P,y:F.y+($.y-F.y)*re/P})},_e=F=>{let $=f.getImageData(Math.floor(No(F.x,0,511)),Math.floor(No(F.y,0,511)),1,1).data;d.ink="#"+[...$].slice(0,3).map(Ee=>Ee.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,v("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",F=>{if(F.button!==0||b)return;let $=q(F);if(E==="pick"){_e($);return}F.preventDefault(),B(),b=!0,y=F.pointerId,A=$,l.setPointerCapture(F.pointerId),ae($),I()}),l.addEventListener("pointermove",F=>{if(!b||F.pointerId!==y)return;F.preventDefault();let $=q(F);E==="stamp"?ae($):me(A,$),A=$,I()});let Ge=F=>{F.pointerId===y&&(b=!1,y=null,A=null,l.hasPointerCapture(F.pointerId)&&l.releasePointerCapture(F.pointerId))};l.addEventListener("pointerup",Ge),l.addEventListener("pointercancel",Ge);for(let F of o.querySelectorAll("[data-tool]"))F.onclick=()=>{E=F.dataset.tool,o.querySelectorAll("[data-tool]").forEach($=>$.setAttribute("aria-pressed",String($===F)))};a("[data-cmd=generate]").onclick=te,a("[data-cmd=undo]").onclick=()=>V(g,m),a("[data-cmd=redo]").onclick=()=>V(m,g),a("[data-cmd=export]").onclick=()=>T1(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async F=>{let $=F.target.files?.[0];if(F.target.value="",!!$)try{if(!["image/png","image/jpeg","image/webp"].includes($.type))throw Error("Image PNG / JPG / WebP uniquement.");if($.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ee=await createImageBitmap($);B(),p.clearRect(0,0,512,512),p.drawImage(Ee,0,0,512,512),Ee.close(),x.clearRect(0,0,512,512),I(),v("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ee){v(Ee.message)}});let je=F=>{!F&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ht,!0),o.remove())},ht=F=>{if(F.key==="Escape"){F.preventDefault(),je(!1);return}(F.ctrlKey||F.metaKey)&&!F.target.closest("input,select")&&F.key.toLowerCase()==="z"&&(F.preventDefault(),F.stopImmediatePropagation(),F.shiftKey?V(m,g):V(g,m))};window.addEventListener("keydown",ht,!0),a("[data-cmd=close]").onclick=()=>je(!1),a("[data-cmd=cancel]").onclick=()=>je(!1);let tt=()=>{if(D?.recipe.resolution===d.resolution&&D.data.length<=s)return D.data;for(let F of[d.resolution,256,128].filter(($,Ee,P)=>$<=d.resolution&&P.indexOf($)===Ee)){let $=document.createElement("canvas");$.width=$.height=F,$.getContext("2d").drawImage(l,0,0,F,F);for(let Ee of[.85,.72,.58]){let P=$.toDataURL("image/webp",Ee);if(P.length<=s)return P}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},se=E1(),W=a("[data-field=shelf]");function oe(F=""){W.replaceChildren(new Option("Choisir une texture",""),...se.map(Ee=>new Option(Ee.name,Ee.id))),W.value=F;let $=!!W.value;a("[data-cmd=shelf-load]").disabled=!$,a("[data-cmd=shelf-remove]").disabled=!$}function de(F,$){try{localStorage.setItem(w0,JSON.stringify(F))}catch{return v("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return se.splice(0,se.length,...F),oe($),!0}return W.onchange=()=>oe(W.value),a("[data-cmd=shelf-save]").onclick=()=>{let F=_0.find(([Ee])=>Ee===d.pattern)?.[1]??"Texture",$=prompt("Nom de la texture",F)?.trim().slice(0,50);if($)try{let Ee={id:crypto.randomUUID(),name:$,data:tt()},{pattern:P,base:re,scale:Q,seed:j,resolution:J}=d;Ee.recipe={pattern:P,base:re,scale:Q,seed:j,resolution:J},de([...se,Ee],Ee.id)&&v("Texture disponible dans les deux ateliers.")}catch(Ee){v(Ee.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let F=se.find($=>$.id===W.value);if(!(!F||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let $=pf();await M0(F.data,$),B(),p.clearRect(0,0,512,512),p.drawImage($,0,0),x.clearRect(0,0,512,512),Object.assign(d,F.recipe),D=F;for(let Ee of["base","seed","resolution"])a("[data-field="+Ee+"]").value=d[Ee];I(),v("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch($){v($.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{de(se.filter(F=>F.id!==W.value),"")&&v("Texture retir\xE9e de la biblioth\xE8que.")},oe(),a("[data-cmd=apply]").onclick=async()=>{let F=a("[data-cmd=apply]");F.disabled=!0;try{let $=tt();await r($),_=!1,je(!0)}catch($){v($.message||"Impossible d\u2019appliquer la texture.")}finally{F.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,v0(h,d),I(),n&&M0(n,h).then(I).catch(()=>v("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>je(!1)}}var _r=new ar,Rn=new M,Os=new M,Jt=new vt,T0={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},gf={type:"change"},E0={type:"mouseDown",mode:null},A0={type:"mouseUp",mode:null},C0={type:"objectChange"},Qh=class extends lr{constructor(e,t=null){super(void 0,t);let i=new yf(this);this._root=i;let s=new _f;this._gizmo=s,i.add(s);let r=new vf;this._plane=r,i.add(r);let o=this;function a(b,y){let E=y;Object.defineProperty(o,b,{get:function(){return E!==void 0?E:y},set:function(A){E!==A&&(E=A,r[b]=A,s[b]=A,o.dispatchEvent({type:b+"-changed",value:A}),o.dispatchEvent(gf))}}),o[b]=y,r[b]=y,s[b]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,h=new vt,u=new vt,d=new M,f=new vt,p=new M,x=new M,g=new M,m=0,_=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new vt,this._parentQuaternionInv=new vt,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new vt,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new vt,this._scaleStart=new M,this._getPointer=R1.bind(this),this._onPointerDown=P1.bind(this),this._onPointerHover=I1.bind(this),this._onPointerMove=D1.bind(this),this._onPointerUp=L1.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&_r.setFromCamera(e,this.camera);let t=xf(this._gizmo.picker[this.mode],_r);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&_r.setFromCamera(e,this.camera);let t=xf(this._plane,_r,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,E0.mode=this.mode,this.dispatchEvent(E0)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&_r.setFromCamera(e,this.camera);let o=xf(this._plane,_r,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Jt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Rn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Rn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Os.set(a,a,a)}else Rn.copy(this.pointStart),Os.copy(this.pointEnd),Rn.applyQuaternion(this._worldQuaternionInv),Os.applyQuaternion(this._worldQuaternionInv),Os.divide(Rn),t.search("X")===-1&&(Os.x=1),t.search("Y")===-1&&(Os.y=1),t.search("Z")===-1&&(Os.z=1);s.scale.copy(this._scaleStart).multiply(Os),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Rn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Rn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(T0[t]),Rn.copy(T0[t]),r==="local"&&Rn.applyQuaternion(this.worldQuaternion),Rn.cross(this.eye),Rn.length()===0?l=!0:this.rotationAngle=this._offset.dot(Rn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gf),this.dispatchEvent(C0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(A0.mode=this.mode,this.dispatchEvent(A0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gf),this.dispatchEvent(C0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _r}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function R1(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function I1(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function P1(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function D1(n){this.enabled&&this.pointerMove(this._getPointer(n))}function L1(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function xf(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var jh=new tn,Xt=new M(0,1,0),R0=new M(0,0,0),I0=new _t,Jh=new vt,$h=new vt,Zi=new M,P0=new _t,cl=new M(1,0,0),vr=new M(0,1,0),hl=new M(0,0,1),Kh=new M,al=new M,ll=new M,yf=class extends jt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},_f=class extends jt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new on({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ui({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new Ot(0,.04,.1,12);x.translate(0,.05,0);let g=new qe(.08,.08,.08);g.translate(0,.04,0);let m=new pt;m.setAttribute("position",new Be([0,0,0,1,0,0],3));let _=new Ot(.0075,.0075,.5,3);_.translate(0,.25,0);function b(V,k){let te=new Ln(V,.0075,3,64,k*Math.PI*2);return te.rotateY(Math.PI/2),te.rotateX(Math.PI/2),te}function y(){let V=new pt;return V.setAttribute("position",new Be([0,0,0,1,1,1],3)),V}let E={X:[[new fe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(x,o),[0,.5,0]],[new fe(x,o),[0,-.5,0],[Math.PI,0,0]],[new fe(_,o)]],Z:[[new fe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new fi(.1,0),u),[0,0,0]]],XY:[[new fe(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new fe(new Ot(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new Ot(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new Ot(.2,0,.6,4),i),[0,.3,0]],[new fe(new Ot(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new Ot(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new Ot(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new fi(.2,0),i)]],XY:[[new fe(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new fe(new fi(.01,2),s),null,null,null,"helper"]],END:[[new fe(new fi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Gn(y(),s),null,null,null,"helper"]],X:[[new Gn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Gn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Gn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new fe(b(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new fe(b(.5,.5),r)]],Y:[[new fe(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new fe(b(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Gn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new fe(new pi(.25,10,8),i)]],X:[[new fe(new Ln(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new Ln(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new Ln(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new Ln(.75,.1,2,24),i)]]},I={X:[[new fe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(_,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(g,o),[0,.5,0]],[new fe(_,o)],[new fe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(_,a),[0,0,0],[Math.PI/2,0,0]],[new fe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new qe(.1,.1,.1),u)]]},L={X:[[new fe(new Ot(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new Ot(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new Ot(.2,0,.6,4),i),[0,.3,0]],[new fe(new Ot(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new Ot(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new fe(new Ot(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new fe(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new qe(.2,.2,.2),i),[0,0,0]]]},O={X:[[new Gn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Gn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Gn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function B(V){let k=new jt;for(let te in V)for(let q=V[te].length;q--;){let ae=V[te][q][0].clone(),me=V[te][q][1],_e=V[te][q][2],Ge=V[te][q][3],je=V[te][q][4];ae.name=te,ae.tag=je,me&&ae.position.set(me[0],me[1],me[2]),_e&&ae.rotation.set(_e[0],_e[1],_e[2]),Ge&&ae.scale.set(Ge[0],Ge[1],Ge[2]),ae.updateMatrix();let ht=ae.geometry.clone();ht.applyMatrix4(ae.matrix),ae.geometry=ht,ae.renderOrder=1/0,ae.position.set(0,0,0),ae.rotation.set(0,0,0),ae.scale.set(1,1,1),k.add(ae)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=B(E)),this.add(this.gizmo.rotate=B(C)),this.add(this.gizmo.scale=B(I)),this.add(this.picker.translate=B(A)),this.add(this.picker.rotate=B(v)),this.add(this.picker.scale=B(L)),this.add(this.helper.translate=B(D)),this.add(this.helper.rotate=B(S)),this.add(this.helper.scale=B(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:$h;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Jt.setFromEuler(jh.set(0,0,0)),o.quaternion.copy(i).multiply(Jt),Math.abs(Xt.copy(cl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Jt.setFromEuler(jh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Jt),Math.abs(Xt.copy(vr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Jt.setFromEuler(jh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Jt),Math.abs(Xt.copy(hl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Jt.setFromEuler(jh.set(0,Math.PI/2,0)),Xt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(I0.lookAt(R0,Xt,vr)),o.quaternion.multiply(Jt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Rn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Rn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Rn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Xt.copy(cl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Xt.copy(vr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Xt.copy(hl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Xt.copy(hl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Xt.copy(cl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Xt.copy(vr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Jh.copy(i),Xt.copy(this.eye).applyQuaternion(Jt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(I0.lookAt(this.eye,R0,vr)),o.name==="X"&&(Jt.setFromAxisAngle(cl,Math.atan2(-Xt.y,Xt.z)),Jt.multiplyQuaternions(Jh,Jt),o.quaternion.copy(Jt)),o.name==="Y"&&(Jt.setFromAxisAngle(vr,Math.atan2(Xt.x,Xt.z)),Jt.multiplyQuaternions(Jh,Jt),o.quaternion.copy(Jt)),o.name==="Z"&&(Jt.setFromAxisAngle(hl,Math.atan2(Xt.y,Xt.x)),Jt.multiplyQuaternions(Jh,Jt),o.quaternion.copy(Jt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},vf=class extends fe{constructor(){super(new Mn(1e5,1e5,2,2),new on({visible:!1,wireframe:!0,side:cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Kh.copy(cl).applyQuaternion(t==="local"?this.worldQuaternion:$h),al.copy(vr).applyQuaternion(t==="local"?this.worldQuaternion:$h),ll.copy(hl).applyQuaternion(t==="local"?this.worldQuaternion:$h),Xt.copy(al),this.mode){case"translate":case"scale":switch(this.axis){case"X":Xt.copy(this.eye).cross(Kh),Zi.copy(Kh).cross(Xt);break;case"Y":Xt.copy(this.eye).cross(al),Zi.copy(al).cross(Xt);break;case"Z":Xt.copy(this.eye).cross(ll),Zi.copy(ll).cross(Xt);break;case"XY":Zi.copy(ll);break;case"YZ":Zi.copy(Kh);break;case"XZ":Xt.copy(ll),Zi.copy(al);break;case"XYZ":case"E":Zi.set(0,0,0);break}break;case"rotate":default:Zi.set(0,0,0)}Zi.length()===0?this.quaternion.copy(this.cameraQuaternion):(P0.lookAt(Rn.set(0,0,0),Zi,Xt),this.quaternion.setFromRotationMatrix(P0)),super.updateMatrixWorld(e)}};function D0(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function L0(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new M(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new tn(Te.degToRad(n.pitch),Te.degToRad(n.yaw),Te.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var U0={type:"change"},bf={type:"start"},F0={type:"end"},eu=new bs,N0=new Tn,U1=Math.cos(70*Te.DEG2RAD),gn=new M,Wn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mf=1e-6,tu=class extends lr{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new vt,this._lastTargetPosition=new M,this._quat=new vt().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new po,this._sphericalDelta=new po,this._scale=1,this._panOffset=new M,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new M,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F1.bind(this),this._onPointerDown=N1.bind(this),this._onPointerUp=O1.bind(this),this._onContextMenu=W1.bind(this),this._onMouseWheel=k1.bind(this),this._onKeyDown=V1.bind(this),this._onTouchStart=G1.bind(this),this._onTouchMove=H1.bind(this),this._onMouseDown=B1.bind(this),this._onMouseMove=z1.bind(this),this._interceptControlDown=X1.bind(this),this._interceptControlUp=q1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U0),this.update(),this.state=Gt.NONE}update(e=null){let t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=gn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eu.origin.copy(this.object.position),eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eu.direction))<U1?this.object.lookAt(this.target):(N0.setFromNormalAndCoplanarPoint(this.object.up,this.target),eu.intersectPlane(N0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mf||this._lastTargetPosition.distanceToSquared(this.target)>Mf?(this.dispatchEvent(U0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;gn.copy(s).sub(this.target);let r=gn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function N1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function F1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function O1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(F0),this.state=Gt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function B1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Gt.DOLLY;break;case gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Gt.ROTATE}break;case gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(bf)}function z1(n){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function k1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(n.preventDefault(),this.dispatchEvent(bf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(F0))}function V1(n){this.enabled!==!1&&this._handleKeyDown(n)}function G1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Gt.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Gt.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(bf)}function H1(n){switch(this._trackPointer(n),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Gt.NONE}}function W1(n){this.enabled!==!1&&n.preventDefault()}function X1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var U=n=>document.getElementById(n),W0=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],X0=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],ou=[...document.querySelectorAll(".tool")],q0="gorilla-lab-editor-draft",us=Hg(localStorage),Y1=Jd(),Bn=[...new Map([...Y1,...us.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function Y0(n){let e=n??U("model-library").value;U("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Bn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Bn.some(t=>t.id===e)?U("model-library").value=e:Bn.length===1&&(U("model-library").value=Bn[0].id),U("place-model").disabled=!Bn.length}var Z0=new URLSearchParams(location.search),Af=Z0.get("model"),Cf="gorilla-lab-edit-map-model";Y0(Af);function br(){return Bn.find(n=>n.id===U("model-library").value)}function j0(){let n=br();if(!n)return null;let e=Io(n);return si({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Te.clamp(e.x,.2,64),h:Te.clamp(e.y,.12,36),d:Te.clamp(e.z,.2,64),...sf(n),color:"#ffffff",solid:n.properties.collidable!==!1})}U("model-library").addEventListener("change",()=>{Ke==="model"&&ds(null),qf()});var Sf={block:si({w:1,h:1,d:1}),ramp:si({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:si({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:cs({amplitude:.7,grassDensity:1.7})}),wall:si({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Nf={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ie,bt=-1,Ke="move",At=null,ri=null,dl=[],Bs=null,ru=[];function Oi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:Ke,selected:bt,...e};ru.push(i),ru.length>100&&ru.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=lt(),e=Ho.info.render;return{version:"R39.2",map:{name:ie.name,pieces:ie.pieces.length},tool:Ke,selected:bt,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[an.width,an.height],render:{...e},events:[...ru]}};window.addEventListener("error",n=>{n.message&&Oi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Oi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var zs=[],an=U("preview"),ft=U("plan"),xt=ft.getContext("2d");function Z1(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[U("shape-preset").value]??n.slab;return si({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(U("shape-preset").value)?U("shape-preset").value:"box"})}var j1=U("editor-views");function yl(){j1.dataset.layout=U("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",U("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",U("sidebar-width").value+"px"),requestAnimationFrame(()=>{fu(),pu()})}for(let n of["layout-mode","view-split","sidebar-width"])U(n).addEventListener("input",yl);U("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),yl()};var Rf=U("workspace-fullscreen");Rf.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{gt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Rf.setAttribute("aria-pressed",String(n)),Rf.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{fu(),pu()})});U("focus-3d").onclick=()=>{U("layout-mode").value="only-3d",yl()};U("focus-plan").onclick=()=>{U("layout-mode").value="only-plan",yl()};function J1(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(W,oe,de)=>{let F=document.createElement(W);return oe&&(F.className=oe),de!==void 0&&(F.textContent=de),F},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let W of ou){let oe=W.dataset.tool,de=W.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[oe]){let F=t("div","rail-divider");F.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[oe]],i.append(F)}W.classList.add("rail-tool"),W.title=de+" \xB7 "+(Nf[oe]??""),W.setAttribute("aria-label",de),W.replaceChildren(t("span","rail-glyph",s[oe]??"\u25A1"),t("span","rail-caption",de==="Redimensionner"?"\xC9chelle":de==="S\xE9lectionner"?"S\xE9lect.":de==="D\xE9placer"?"D\xE9placer":de==="Atelier"?"Mod\xE8le":de)),i.append(W)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=U("shape-preset").closest("label"),h=U("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=U("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let b=t("span","active-selection","Aucune s\xE9lection");b.id="active-selection",_.after(b);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let E=t("div","precision-options"),A=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let W of A){let oe=U(W);oe&&E.append(oe.closest("label"))}y.append(E),g.append(y);let D=W=>{if(W==="close"){o.hidden=!0;return}let oe=W==="model";o.hidden=!1,o.dataset.mode=W,a.textContent=oe?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!oe,c.hidden=oe,d.hidden=!oe,f.hidden=!oe,u&&(u.hidden=!oe),p.textContent=oe?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!oe,x.textContent=oe?Bn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let de=br();d.disabled=!de,d.textContent=de?"\u2B21 Placer \xAB "+de.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!de||!us.models.some($=>$.id===de.id),u&&(u.href="./model-editor.html"+(de?de.assetId&&de.id==="custom-model-game-"+de.assetId?"?asset="+encodeURIComponent(de.assetId):"?model="+encodeURIComponent(de.id):"")),U(oe?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{br()&&(Bi("model"),D("close"),an.focus({preventScroll:!0}),gt("Clique dans la sc\xE8ne pour placer \xAB "+br().name+" \xBB."))},f.onclick=()=>{let W=br();if(!(!W||!us.models.some(oe=>oe.id===W.id))&&confirm("Supprimer d\xE9finitivement \xAB "+W.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let oe=yr({...us,models:us.models.filter(F=>F.id!==W.id),avatarId:us.avatarId===W.id?null:us.avatarId});localStorage.setItem(nf,JSON.stringify(oe)),Object.assign(us,oe);let de=Bn.findIndex(F=>F.id===W.id);de>=0&&Bn.splice(de,1),Y0(),Ke==="model"&&!Bn.length&&Bi("move"),ds(null),qf(),D("model"),gt("\xAB "+W.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(oe){gt("Suppression impossible : "+(oe.message||"stockage local indisponible"))}},U("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&D("model")});for(let W of["model","preset"])ou.find(de=>de.dataset.tool===W)?.addEventListener("click",()=>D(W));window.addEventListener("pointerdown",W=>{!o.hidden&&!o.contains(W.target)&&!W.target.closest(".rail-tool")&&D("close")}),window.addEventListener("keydown",W=>{W.key==="Escape"&&D("close")});let C=t("section","outliner");C.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),C.append(S);let v=e.querySelector("#pieces").closest(".inspector-section");v.id="outline-content",C.append(v);let I=t("section","property-pane"),L=t("nav","inspector-tabs");L.setAttribute("aria-label","Propri\xE9t\xE9s");let O=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[W,oe]of O){let de=t("button","inspector-tab",oe);de.type="button",de.dataset.tab=W,de.setAttribute("aria-pressed",String(W==="object")),L.append(de)}let B=t("div","property-content");B.id="property-content";let V=U("piece-inspector").closest(".inspector-section");V.id="object-section";let k=V.querySelector("#surface").closest("details");k.id="surface-controls";let te=t("section");te.id="collision-options",te.append(t("h3","","Collisions de la pi\xE8ce")),te.append(V.querySelector("#p-solid").closest("label"),U("debug-controls"));let q=t("section");q.id="behavior-options";let ae=t("div","fields");for(let W of["surface","p-grip","p-gravity","p-bounce"])ae.append(k.querySelector("#"+W).closest("label"));q.append(t("h3","","Propri\xE9t\xE9s physiques")),q.append(ae,V.querySelector("#model-object-controls"));let me=t("section");me.id="publish-options";for(let[W,oe,de]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let F=t("div","piece-actions"),$=t("button","",oe);$.type="button",$.addEventListener("click",()=>U(W).click()),F.append($),me.append(t("h3","",de),F)}B.append(V,te,q,me);let _e=t("section","scene-options");_e.id="scene-options",_e.append(t("h2","","Param\xE8tres de carte"));let Ge=U("map-name").closest("label"),je=U("map-world-size").closest(".fields"),ht=U("draft-status");_e.append(Ge,je,ht);let tt=[...e.children].filter(W=>W.tagName==="DETAILS");for(let W of tt)_e.append(W);B.append(_e),I.append(L,B),e.replaceChildren(C,I);let se=W=>{let oe=ie?.pieces?.[bt];["terrain","props"].includes(W)&&!oe?.terrain&&(W="object"),["material","behavior"].includes(W)&&!oe&&(W="object"),e.dataset.tab=W;for(let de of L.querySelectorAll("button"))de.setAttribute("aria-pressed",String(de.dataset.tab===W)),de.disabled=["terrain","props"].includes(de.dataset.tab)&&!oe?.terrain;W==="terrain"&&(U("terrain-controls").open=!0),W==="material"&&(k.open=!0),B.scrollTop=0};for(let W of L.querySelectorAll("button"))W.addEventListener("click",()=>se(W.dataset.tab));window.setInspectorTab=se,se("object")}J1();var Bt={scale:10,cx:0,cz:-6,width:30,height:40},Ho=new Th({canvas:an,antialias:!0});Ho.setPixelRatio(Math.min(devicePixelRatio,1.5));an.addEventListener("webglcontextlost",()=>Oi("contexte WebGL perdu",{},"warn"));var Tt=new wn(52,1,.1,640);Tt.position.set(16,15,19);var zt=new tu(Tt,an);zt.target.set(0,0,-5);zt.mouseButtons.LEFT=null;zt.mouseButtons.RIGHT=gi.ROTATE;zt.mouseButtons.MIDDLE=gi.PAN;zt.maxDistance=580;zt.maxPolarAngle=Math.PI-.035;var xn=new so,J0=new He("#8fb6c6");xn.background=J0;var K0=new rr("#f0f5ff","#8e775c",2.6);xn.add(K0);var Ff=new or("#fff1d2",1.8);Ff.position.set(-9,18,6);xn.add(Ff);var ji=new so;ji.fog=new Ks("#a6d4ea",55,135);var Yn=Mg(ji,Ho);Yn.probe.userData.editorAssetId="chrome-sphere";var rC=bg(ji,Yn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),K1=new Map(Jd().map(n=>[n.assetId,n]));function O0(n,e,t=null,i=null){let s=structuredClone(t??K1.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=tl(s),o=r.getSize(new M),a=r.getCenter(new M);return si({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Of=()=>{let n=f0(Yn.boxes),e=Yn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let d=t+u%(o+1)/o*a,f=s+Math.floor(u/(o+1))/o*l;return e.height(d,f)});n.pieces.push(si({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:cs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(ff()),Cg((t,i)=>{let s=Zd[t];s&&n.pieces.push(O0(s,i))}),n.pieces.push(O0("chrome-sphere",new M(Ps.x,Ps.y,Ps.z))),mn(n)};ie=Of();var Bf=new fe(new qe(1.8,2.03,.1),new _n({color:"#8daebc",metalness:.9,roughness:.12}));Bf.position.set(Is.x,Is.y,Is.z);Bf.userData.editorAssetId="lab-mirror";ji.add(Bf);var $1=Yn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);$1.forEach(n=>n.mesh.removeFromParent());var au=new vn;au.add(...ji.children);xn.add(au,...Yn.lighting);var Tr=Yn.boxes.find(n=>n.heightfield).mesh;Tr.userData.editorAssetId="lab-hill";Yn.visual(7,0,7,!0,!0,!0,512,!1);var zf=[...document.querySelectorAll("[data-env]")],Fo=U("environment-status"),zo=new Na(60,60,"#d7e2e5","#5e7b8a");zo.material.transparent=!0;zo.material.opacity=.35;xn.add(zo);var Ct=new vn;xn.add(Ct);var et=new Qh(Tt,an);et.setSize(.9);et.setRotationSnap(Te.degToRad(5));et.enabled=!1;xn.add(et.getHelper());var kf=new Set(["translate","rotate","scale"]),ks=null,Xn=null,Vf=!1,fl=null,nu=!1,$0=()=>Number(U("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...U(n).options].some(t=>t.value===e)&&(U(n).value=e)}catch{}U(n).onchange=()=>{Xn=null;try{localStorage.setItem("gorilla-lab-"+n,U(n).value)}catch{}}}var Sr=new Map;try{U("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}U("magnet").onchange=()=>{Xn=null,Sr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",U("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{Vf=e.altKey});window.addEventListener("blur",()=>{Vf=!1,Xn=null});function Q0(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/gl())*gl();if(i||!U("magnet").checked||!n.solid||n.terrain)return Xn=null,s;let r=$0(),o=U("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new tn(...[p.pitch,p.yaw,p.roll??0].map(Te.degToRad),"YXZ"),g=new _t().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of ie.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,b=m.flatMap(y=>t.includes(y)&&_(m.find(E=>E!==y))?[-1,1].flatMap(E=>[-1,1].map(A=>{let D=p[y]+E*x[y]-A*c[y];return{key:y,value:D,distance:Math.abs(e[y]-D)}})):[]).sort((y,E)=>y.distance-E.distance)[0];if(!(o?!b||b.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let E=p[g]+y*(c[g]+x[g]),A=ie.pieces.indexOf(p)+":"+g+":"+y;h.push({key:A,axis:g,value:E,edge:o?b:null,distance:Math.max(Math.abs(E-e[g]),o?b.distance:0)})}}}let u=h.find(p=>p.key===Xn),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Xn&&(Sr.set(Xn,(Sr.get(Xn)??0)+1),Xn=null);let f=h.filter(p=>p.distance<=r&&(Sr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Xn=f.key;else for(let p of h)p.distance<=r&&(Sr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var pl=new qe(1,1,1),Q1=Wd(),ew=new mi,lu=.025,tw=new ws(.24,.36,40).rotateX(-Math.PI/2),ex=new on({color:"#ffcd63",side:cn}),qn=new fe(tw,ex),tx=new fe(new Mn(.12,.2).rotateX(-Math.PI/2),ex);tx.position.set(0,0,-.39);qn.add(tx);xn.add(qn);var wr=new fe(pl,new on({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Oo=new fe(new pi(.055,10,8),new on({color:"#ffc85a",depthTest:!1}));Oo.visible=!1;Oo.renderOrder=20;xn.add(Oo);var ml=new fe(qn.geometry,new on({color:"#ffe084",side:cn,opacity:.65,transparent:!0,depthWrite:!1}));wr.visible=ml.visible=!1;xn.add(wr,ml);var Vs=new ar,du=new M(0,1,0),B0=new Tn(du,0),nw=new at,Fi=null,wf=!1,ul=60,z0=-1/0;function ln(){wf||(wf=!0,requestAnimationFrame(n=>{wf=!1;let e=n-z0;z0=n,e<125&&(ul=Te.lerp(ul,1e3/Math.max(10,e),.17));let t=Tt.position.distanceTo(zt.target),i=Math.max(640,ie.worldSize*2,t+ie.worldSize*2),s=Math.max(140,t+ie.worldSize*.35),r=U("adaptive-editor-view").checked?Te.smoothstep(ul,24,50):1,o=Te.lerp(s,i,r);Tt.far=Math.max(s,Te.lerp(Tt.far,o,.2)),Tt.updateProjectionMatrix(),Yn.centerSky(Tt.position,Tt.far);let a=performance.now();Ho.render(xn,Tt);let l=performance.now()-a;l>25&&(ul=Math.min(ul,1e3/l)),Math.abs(Tt.far-o)>3&&ln(),gx()}))}function fu(){let n=an.clientWidth||1,e=an.clientHeight||1;Ho.setSize(n,e,!1),Tt.aspect=n/e,Tt.updateProjectionMatrix(),ln()}function pu(){let n=Math.max(1,ft.clientWidth),e=Math.max(1,ft.clientHeight);n===ft.width&&e===ft.height||(ft.width=n,ft.height=e,Gf(),_i())}new ResizeObserver(fu).observe(an);new ResizeObserver(pu).observe(ft);zt.addEventListener("change",ln);zt.addEventListener("start",()=>ds(null));function Gf(){Bt.scale=Math.min(ft.width/Bt.width,ft.height/Bt.height)}function cu(n,e){return[ft.width/2+(n-Bt.cx)*Bt.scale,ft.height/2+(e-Bt.cz)*Bt.scale]}function If(n){let e=ft.getBoundingClientRect();return{x:((n.clientX-e.left)*ft.width/e.width-ft.width/2)/Bt.scale+Bt.cx,z:((n.clientY-e.top)*ft.height/e.height-ft.height/2)/Bt.scale+Bt.cz}}function k0(n,e,t,i,s){let[r,o]=cu(n.x,n.z),a=Te.degToRad(n.pitch),l=Te.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);xt.save(),xt.translate(r,o),xt.rotate(-Te.degToRad(n.yaw));let u=c*Bt.scale,d=h*Bt.scale;xt.globalAlpha=s,xt.fillStyle=e,xt.fillRect(-u/2,-d/2,u,d),xt.globalAlpha=1,xt.strokeStyle=t,xt.lineWidth=i,xt.strokeRect(-u/2,-d/2,u,d),xt.restore()}function V0(n,e){let[t,i]=cu(n.x,n.z);xt.save(),xt.translate(t,i),xt.rotate(Te.degToRad(-n.yaw)),xt.strokeStyle=e?"#fff0bb":"#ffd16e",xt.lineWidth=2,xt.beginPath(),xt.arc(0,0,6,0,Math.PI*2),xt.moveTo(0,-6),xt.lineTo(0,-11),xt.stroke(),xt.restore()}function _i(){xt.fillStyle="#192e3a",xt.fillRect(0,0,ft.width,ft.height),xt.strokeStyle="#37505f",xt.lineWidth=1;let n=Bt.scale<1?25:Bt.scale<4?10:Bt.scale<12?5:1,e=(ie.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=cu(r,r);o>=0&&o<=ft.width&&(xt.beginPath(),xt.moveTo(o,0),xt.lineTo(o,ft.height),xt.stroke()),a>=0&&a<=ft.height&&(xt.beginPath(),xt.moveTo(0,a),xt.lineTo(ft.width,a),xt.stroke())}let[t,i]=cu(-e,-e);xt.strokeStyle="#ffda9077",xt.lineWidth=2,xt.strokeRect(t,i,e*2*Bt.scale,e*2*Bt.scale);let s=ie.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?df[r.material]:r.color);k0(r,a,o===bt?"#ffe095":"#a4bac7",o===bt?2:1,r.solid?.86:.38)}V0(ie.spawn,!1),ri&&(Ke==="spawn"?V0(ri,!0):k0(ri,"#8ee7fc","#afefff",2,.45))}function hu(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==wr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Te.degToRad(e.pitch),Te.degToRad(e.yaw),Te.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function nx(){Fi&&(xn.remove(Fi),Fi.geometry.dispose(),Fi.material.dispose());let n=Ct.children[bt];Fi=n?new mo(n,"#ffdf88"):null,Fi&&xn.add(Fi),Pf()}function Pf(){if(Ke==="spawn"){et.enabled=!0,et.setMode("translate"),et.setSpace("world"),et.setTranslationSnap(null),et.setRotationSnap(null),et.showX=et.showY=et.showZ=!0,et.attach(qn);return}let n=Ct.children[bt],e=lt()?.terrain,t=kf.has(Ke)&&!!n;if(et.enabled=t,!t){et.detach();return}et.setMode(Ke),et.setSpace(Ke==="translate"?"world":"local"),et.setTranslationSnap(null);let i=!!(e&&Ke==="rotate");et.setRotationSnap(i?Math.PI/2:null),et.showX=et.showZ=!i,et.showY=!(e&&Ke==="scale"),et.attach(n),U("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":Nf[Ke]}var Bo=!1;function ix(){if(Ke!=="scale")return;let n=lt(),e=ks?.map.pieces[bt],t=et.object;if(!n||!e||!t)return;let i=L0(e,n,Bo,ks?.scaleSides),s=(ie.worldSize??240)/2;n.x=Te.clamp(i.x,-s,s),n.y=Te.clamp(i.y,-xi,xi),n.z=Te.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),Fi?.update();for(let r of["x","y","z"])U("p-"+r).value=n[r].toFixed(2);_i(),ln()}function sx(n){let e=Bo;Bo=n.ctrlKey,e!==Bo&&et.dragging&&ix()}for(let n of["keydown","keyup"])window.addEventListener(n,sx);an.addEventListener("pointermove",sx,{capture:!0});et.addEventListener("change",ln);et.addEventListener("mouseDown",()=>{let n=lt();if(Xn=null,n||et.object===qn){let e=Ke==="scale"?D0(et.axis,et.pointStart,et.worldQuaternionStart):void 0;ks={map:structuredClone(ie),selected:bt,scaleSides:e},Oi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:et.axis,scaleSides:e,terrain:!!n?.terrain})}Bo=!!(Bo||window.event?.ctrlKey)});et.addEventListener("objectChange",()=>{let n=lt(),e=et.object,t=ks?.map.pieces[bt];if(e===qn&&ks){let s=(ie.worldSize??240)/2,r=Te.clamp;ie.spawn.x=r(qn.position.x,-s,s),ie.spawn.y=r(qn.position.y-lu,-xi,xi),ie.spawn.z=r(qn.position.z,-s,s),qn.position.set(ie.spawn.x,ie.spawn.y+lu,ie.spawn.z);for(let o of["x","y","z"])U("spawn-"+o).value=ie.spawn[o].toFixed(2);_i();return}if(!n||!e||!t)return;let i=Te.clamp;if(Ke==="translate"){let s=["x","y","z"].filter(a=>(et.axis??"XYZ").includes(a.toUpperCase())),r=Q0(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,Vf),o=(ie.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-xi,xi),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else Ke==="rotate"?(n.pitch=Te.radToDeg(e.rotation.x),n.yaw=Te.radToDeg(e.rotation.y),n.roll=Te.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=Lo(n.yaw),e.rotation.set(0,Te.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,hs),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,hs),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),ix());e.updateMatrixWorld(!0),Fi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])U("p-"+s).value=Number(n[s]??0).toFixed(2);_i(),ln()});et.addEventListener("dragging-changed",({value:n})=>{if(zt.enabled=!n,n||!ks)return;let e=ks;ks=null;let t=et.object===qn,i=t?e.map.spawn:e.map.pieces[bt],s=t?ie.spawn:lt();if(JSON.stringify(i)===JSON.stringify(s)){Oi("transformation sans changement",{name:s?.name,axis:et.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Oi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),zs.length>=35&&zs.shift(),zs.push(e),ie=mn(ie),It(),gt("Transformation appliqu\xE9e.")});an.addEventListener("pointerup",()=>{et.dragging||(zt.enabled=!0)});an.addEventListener("pointercancel",()=>{et.dragging&&et.pointerUp(null),zt.enabled=!0});function iw(){et.detach();for(let t of[...Ct.children])Ct.remove(t),t.geometry!==pl&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&h0(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),Hh(t.material);au.visible=!!ie.arenaBase;let n=new Set(ie.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(ie.pieces.map(t=>t.sceneryId).filter(Boolean));au.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=y0(ie,i,n,e))}),ax();for(let t of ie.pieces){if(t.model){let l=new fe(Wh(t.model,new M(t.w,t.h,t.d)),Gh(t.model));l.castShadow=l.receiveShadow=!0;let c=new fe(new qe(1,1,1),new on({colorWrite:!1,depthWrite:!1,side:cn}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=Ct.children.length,Ct.add(l),hu(l,t);continue}let i=[10,11,12].includes(t.material),s=new ei({color:new He(df[t.material]).multiply(new He(t.color)),side:t.terrain?cn:$n,transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(ie.arenaBase&&!t.texture){let l=Yn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=ew.load(t.texture,ln),s.map.colorSpace=Mt,s.map.wrapS=s.map.wrapT=Dn,s.color.set(t.color));let r=t.terrain?performance.now():0,o=t.terrain?uf(t):t.primitive==="ramp"?Wd(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?hg(t.primitive):t.texture||ie.arenaBase?Ah(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):pl;o!==pl&&Hd(o,t);let a=new fe(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=c0(t);l&&(a.add(l),a.userData.vegetation=l)}Ct.add(a),hu(a,t)}mw(),qn.position.set(ie.spawn.x,ie.spawn.y+lu,ie.spawn.z),qn.rotation.y=Te.degToRad(ie.spawn.yaw),xx(),nx()}function lt(){return ie.pieces[bt]}function gt(n){U("editor-note").textContent=n}function Rt(){zs.length>=35&&zs.shift(),zs.push({map:structuredClone(ie),selected:bt}),U("undo").disabled=!1}var Tf=0;async function mu(){let n=++Tf;try{return await _u(q0,JSON.stringify(ie)),n===Tf&&(U("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===Tf&&(U("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}U("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=lt(),i=bt;if(!(!t?.model||!await mu()))try{sessionStorage.setItem(Cf,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),gt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function sw(){let n=Z0.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Cf)),sessionStorage.removeItem(Cf)}catch{return}let t=ie.pieces[e?.index],i=us.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){gt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}bt=e.index;let o=Io(t.model),a=Io(i),l=(u,d,f,p)=>Te.clamp(u*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,hs),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,hs)},h=si({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(Rt(),ie.pieces[bt]=h),gt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var G0=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function rx(){let n=G0(U("piece-search").value.trim()),e=[];ie.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";G0(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===bt))}),U("pieces").replaceChildren(...e),U("pieces").value=String(bt),e.length||U("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(U("pieces").options[0].disabled=!0),U("count").textContent=n?e.length+" sur "+ie.pieces.length:ie.pieces.length+" / "+Uo}function ox(){rx();let n=lt();U("piece-inspector").hidden=!n,U("selection-help").hidden=!!n,U("focus-piece").disabled=!n,U("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";U("model-object-controls").hidden=!e,U("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=U("model-asset-edit-link"),i=n?.model&&Bn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(U("model-grabbable").checked=n.model.properties?.grabbable!==!1,U("model-frozen").checked=n.model.properties?.frozen===!0,U("model-collidable").checked=n.model.properties?.collidable!==!1,U("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of W0){let c=U("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])U(l).disabled=!n;U("delete").disabled=!n,U("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",U("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",U("texture-clear").disabled=!n?.texture,U("texture-paint").disabled=!n||!!n.model;let s=dl[bt],r=U("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=Uf(s));let o=n?.terrain;U("terrain-grassTexture-paint").disabled=!o;for(let l of X0){let c=U("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(U("uv-reset").disabled=!n||!!n?.model,U("terrain-controls").hidden=U("terrain-props").hidden=U("terrain-texture-density-fields").hidden=!o,U("texture-scale-label").hidden=!!o,o){U("terrain-triangulation").value=o.triangulation??"regular";for(let g of dx)U("terrain-"+g).value=o[g];let l=o.reliefArea??fx(n);U("terrain-relief-local").checked=!!o.reliefArea,U("terrain-relief-fields").hidden=!o.reliefArea;for(let g of["x","z","radius","blend"])U("terrain-relief-"+g).value=l[g];let c=Ct.children[bt]?.userData.generationMs;U("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,d=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});U("terrain-cell-size").textContent=d.format(n.w/o.detail)+" \xD7 "+d.format(n.d/o.detail)+" m par case \xB7 "+d.format(u)+" triangles (2 par case) \xB7 "+d.format(u/h)+" triangles/m\xB2",U("terrain-texture-effective").textContent=d.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2 \xE0 l\u2019\xE9cran avec l\u2019\xE9chelle enregistr\xE9e",fw(n);let f=U("terrain-neighbor"),p=f.value,x=ie.pieces.flatMap((g,m)=>hf(n,g)?[new Option(g.name,String(m))]:[]);f.replaceChildren(...x.length?x:[new Option("Aucun bord \xE0 moins de 25 cm","")]),x.some(g=>g.value===p)&&(f.value=p),f.disabled=U("terrain-stitch").disabled=!x.length,U("p-pitch").disabled=U("p-roll").disabled=!0}U("rotate").disabled=!n,U("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",U("p-yaw").step=o?"90":"1",U("surface").value="",U("undo").disabled=zs.length===0,U("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function Df(){let n=!!(ie.arenaBase||ie.environment);Ff.visible=K0.visible=!n;for(let i of Yn.lighting)i.visible=n;let{sunDisk:e,sunHalo:t}=Yn;e.visible=n&&(ie.environment?.sunPower??3)>0,t.visible=e.visible&&(ie.environment?.sunHalo??1)>0,xn.background=n?ji.background:J0,xn.backgroundRotation.copy(ji.backgroundRotation),xn.fog=n&&U("environment-fog-preview").checked?ji.fog:null,xn.environment=n?ji.environment:null,xn.environmentIntensity=ji.environmentIntensity,ln()}function ax(){let n=ie.environment??null,e=n??zi(0);for(let t of zf){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}Fo.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",Yn.setEnvironment(n,Df),Df()}function uu(n){let e=bl(n);Rt(),e?ie.environment=e:delete ie.environment,ax(),mu()}var rw=zf.find(n=>n.dataset.env==="preset");rw.replaceChildren(...Jf.map((n,e)=>new Option(n,e)));for(let n of zf)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){uu(zi(Number(n.value)));return}let t=ie.environment??zi(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,Fo.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;uu({...t,[e]:i})};U("environment-reset").onclick=()=>uu(null);U("environment-aim-sun").onclick=()=>{if(!(ie.environment??zi(0)).sunPower){Fo.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=Yn.sunDirection();zt.target.copy(Tt.position).addScaledVector(e,8),zt.update(),ln()};U("environment-fog-preview").onchange=Df;U("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=ie;if(e.value="",!t)return;if(t.size>Ml){Fo.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(ie!==i)return;let r=new Image;r.onload=()=>{if(ie===i){if(r.width!==r.height*2){Fo.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}uu({...ie.environment??zi(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{ie===i&&(Fo.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function It(){U("map-name").value=ie.name,U("map-world-size").value=ie.worldSize??240,Tt.far=Math.max(640,ie.worldSize*2),Tt.updateProjectionMatrix(),zt.maxDistance=Math.max(580,ie.worldSize*1.6);for(let n of["x","y","z","yaw"])U("spawn-"+n).value=ie.spawn[n];iw(),ox(),_i(),ln(),mu()}function ko(n){bt!==n&&(bt=n,Oi("s\xE9lection",{name:lt()?.name,terrain:!!lt()?.terrain}),Xn=null,Sr.clear(),ox(),nx(),_i(),ln())}function Hf(n){if(ie.pieces.length>=Uo)return gt("Limite de pi\xE8ces atteinte.");Rt(),ie.pieces.push(n),bt=ie.pieces.length-1,It(),gt(n.name+" ajout\xE9 \xE0 la map.")}function Wf(){if(!lt())return;let n=lt().name;Rt(),ie.pieces.splice(bt,1),bt=Math.min(bt,ie.pieces.length-1),It(),gt(n+" retir\xE9 de la map.")}function Xf(){let n=lt();if(!n)return;let e=Te.clamp(n.x+n.w+gl(),-120,120);Hf({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function ow(){let n=lt();if(!n)return;Rt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Oi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),It()}function lx(){let n=zs.pop();n&&(ie=n.map,bt=n.selected,ds(null),It(),gt("Derni\xE8re modification annul\xE9e."))}function qf(){let n=Nf[Ke]??"";if(Ke!=="model"||!br()){U("tool-help").textContent=n;return}let e=j0(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);U("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Bi(n){Ke!==n&&Oi("changement d\u2019outil",{ancien:Ke,nouveau:n,name:lt()?.name}),Ke=n,zt.mouseButtons.LEFT=Ke==="view"?gi.ROTATE:null,Pf(),ln();for(let e of ou)e.setAttribute("aria-pressed",String(e.dataset.tool===Ke));for(let e of[an,ft])e.dataset.tool=Ke,e.removeAttribute("data-hit");qf(),Pf(),ln(),ds(null)}function Er(){let n=new dn().setFromObject(Ct);n.expandByPoint(qn.position);let e=n.getCenter(new M),t=n.getSize(new M);Bt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ie.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ie.worldSize??240,500))},Gf();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));zo.scale.setScalar(i),zo.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Tt.position.clone().sub(zt.target).normalize(),r=new M().crossVectors(du,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Te.degToRad(Tt.fov/2))*.87,l=a*Tt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new M(h,u,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,zt.maxDistance),zt.target.copy(e),Tt.position.copy(e).addScaledVector(s,c),zt.update(),Tt.updateMatrixWorld(),_i(),ln()}function Yf(n,e){Rt(),ie=n,Xn=null,Sr.clear(),bt=-1,U("piece-search").value="",Bi("move"),It(),Er(),gt(e)}function gl(){return Number(U("snap").value)}function iu(n){let e=gl(),t=(ie.worldSize??240)/2;return Te.clamp(Math.round(n/e)*e,-t,t)}function Zf(n,e){if(n===ft){let t=If(e);Vs.set(new M(t.x,80,t.z),new M(0,-1,0))}else{let t=an.getBoundingClientRect();Tt.updateMatrixWorld(),Vs.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Tt)}}function Lf(n){return B0.constant=-n,Vs.ray.intersectPlane(B0,new M)}function aw(n){let e=n;for(;e&&e.parent!==Ct;)e=e.parent;return e?.parent===Ct?e:null}function Vo(n,e){Zf(n,e);let t=Tr.visible&&ie.arenaBase?[...Ct.children,Tr]:Ct.children,i=Vs.intersectObjects(t,!0);for(let s of i){if(s.object===Tr)return s;let r=aw(s.object);if(r)return{...s,object:r}}return null}function cx(n,e,t,i=null){Vs.set(new M(n,80,e),new M(0,-1,0));let s=i?Vs.intersectObject(i,!1)[0]:Vs.intersectObjects(Tr.visible&&ie.arenaBase?[...Ct.children,Tr]:Ct.children,!1).find(r=>r.object===Tr||ie.pieces[Ct.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function hx(n,e){fl=null,nu=!1;let t=Vo(n,e);if(Ke==="spawn"){if(!t)return null;let h=iu(t.point.x),u=iu(t.point.z);return cx(h,u,ie.spawn.yaw)}if(Ke==="terrain"){let h=t?.point??Lf(0);return h?{...Sf.terrain,terrain:cs(Sf.terrain.terrain),x:iu(h.x),y:h.y,z:iu(h.z)}:null}if(Ke==="sculpt"||Ke==="model"&&!br())return null;let i=t?.point??Lf(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(nw.getNormalMatrix(t.object.matrixWorld)):du,r=t&&lw(t),o=$0();r&&r.distance<=o*2&&(fl=r.point,nu=U("magnet").checked&&!e.altKey&&U("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=nu||e.altKey?1e-6:gl(),l=Ke==="model"?j0():Ke==="preset"?Z1():Sf[Ke],c=m0(nu?fl:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ie.worldSize/2?c:null}function lw(n){let e=n.object,t=ie.pieces[Ct.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function ds(n){!n&&!ri||(ri=n,Oo.visible=!!(ri&&fl),Oo.visible&&Oo.position.copy(fl),ml.visible=!!(ri&&Ke==="spawn"),wr.visible=!!(ri&&Ke!=="spawn"),ml.visible&&ml.position.set(ri.x,ri.y+lu,ri.z),wr.visible&&(wr.geometry=ri.primitive==="ramp"?Q1:pl,hu(wr,ri)),_i(),ln())}function cw(n,e){let t=hx(n,e);if(!t){gt(Ke==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ke==="spawn")Rt(),ie.spawn=t,Bi("move"),It(),gt("Point de d\xE9part d\xE9plac\xE9.");else{let i=Ke==="model";ds(null),Hf(t),i&&(Bi("move"),gt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function hw(n,e){if(Ke==="view"||e.button!==0||!e.isPrimary||At||et.dragging)return;if(Ke==="spawn"||kf.has(Ke)){if(n===an&&et.enabled){let r=an.getBoundingClientRect();if(et.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),et.axis){zt.enabled=!1;return}}if(Ke!=="spawn"){e.stopImmediatePropagation();let r=Vo(n,e);ko(r?Ct.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ke};if(At=t,Xn=null,Ke==="sculpt"){mx(n,e);return}if(Ke!=="move")return;let i=Vo(n,e);ko(i?Ct.children.indexOf(i.object):-1);let s=lt();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function uw(n,e){if(Ke==="view"||kf.has(Ke)||et.dragging)return;if(!At){Ke==="move"?n.toggleAttribute("data-hit",!!Vo(n,e)):ds(hx(n,e));return}if(Ke==="sculpt"&&At.id===e.pointerId&&At.canvas===n){Math.hypot(e.clientX-At.clientX,e.clientY-At.clientY)>=7&&(mx(n,e),At.clientX=e.clientX,At.clientY=e.clientY);return}if(At.id!==e.pointerId||At.canvas!==n||At.height===void 0||!lt()||Math.hypot(e.clientX-At.clientX,e.clientY-At.clientY)<4&&!At.recorded)return;Zf(n,e);let i=Lf(At.height);if(!i)return;let s=lt(),r=Q0(s,{x:i.x-At.dx,y:s.y,z:i.z-At.dz},["x","z"],e.altKey),o=(ie.worldSize??240)/2,a=Te.clamp(r.x,-o,o),l=Te.clamp(r.z,-o,o);a===s.x&&l===s.z||(At.recorded||(Rt(),At.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,hu(Ct.children[bt],s),Fi?.update(),U("p-x").value=a,U("p-z").value=l,_i(),ln())}function Ef(n,e,t){if(!At||At.canvas!==n||At.id!==e.pointerId)return;let i=At;if(At=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(It(),gt("Relief modifi\xE9."));return}i.recorded&&(mu(),gt(lt().name+" d\xE9plac\xE9.")),t&&Ke===i.tool&&Ke!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&cw(n,e)}var yi=null,gu=!1,su=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(gu=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(gu=!1)});window.addEventListener("blur",()=>{yi=null,gu=!1});ft.addEventListener("pointerdown",n=>{n.button!==1&&!(gu&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),yi={id:n.pointerId,x:n.clientX,y:n.clientY},ft.setPointerCapture(n.pointerId),ft.style.cursor="grabbing")},{capture:!0});ft.addEventListener("pointermove",n=>{!yi||yi.id!==n.pointerId||(n.stopImmediatePropagation(),Bt.cx-=(n.clientX-yi.x)/Bt.scale,Bt.cz-=(n.clientY-yi.y)/Bt.scale,yi.x=n.clientX,yi.y=n.clientY,_i())},{capture:!0});function ux(n){!yi||yi.id!==n.pointerId||(yi=null,ft.style.cursor="",ft.hasPointerCapture(n.pointerId)&&ft.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}ft.addEventListener("pointerup",ux,{capture:!0});ft.addEventListener("pointercancel",ux,{capture:!0});function jf(n,e){let t=ft.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=If({clientX:i,clientY:s}),o=Te.clamp(Bt.width/n,.75,4096),a=o/Bt.width;Bt.width=o,Bt.height*=a,Gf();let l=If({clientX:i,clientY:s});Bt.cx+=r.x-l.x,Bt.cz+=r.z-l.z,_i()}ft.addEventListener("wheel",n=>{n.preventDefault(),jf(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});U("plan-zoom-in").onclick=()=>jf(1.25);U("plan-zoom-out").onclick=()=>jf(.8);U("plan-fit").onclick=Er;var Ji=U("context-actions"),xl=!1;function Go(){Ji.hidden=!0}for(let n of[an,ft])n.addEventListener("pointerdown",e=>{e.button===2?su={canvas:n,x:e.clientX,y:e.clientY}:Go()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),xl){xl=!1;return}if(su?.canvas!==n||Math.hypot(e.clientX-su.x,e.clientY-su.y)>6)return;let t=Vo(n,e),i=t?Ct.children.indexOf(t.object):-1;if(i<0){Go();return}ko(i),U("context-title").textContent=lt()?.name??"Pi\xE8ce",Ji.querySelector('[data-context-action="delete"]').textContent=lt()?.model?"Retirer de la carte":"Supprimer",Ji.hidden=!1;let s=195,r=285;Ji.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Ji.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Ji.hidden||Ji.contains(n.target)||(xl=n.button===2,Go())},{capture:!0});document.addEventListener("contextmenu",n=>{xl&&n.target!==an&&n.target!==ft&&(xl=!1,n.preventDefault()),!Ji.hidden&&!Ji.contains(n.target)&&n.target!==an&&n.target!==ft&&Go()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&Go()});for(let n of Ji.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;Go(),e==="duplicate"?Xf():e==="delete"?Wf():e==="focus"?U("focus-piece").click():Bi(e==="select"?"move":e)};for(let n of[an,ft])n.addEventListener("pointerdown",e=>hw(n,e),{capture:!0}),n.addEventListener("pointermove",e=>uw(n,e)),n.addEventListener("pointerup",e=>Ef(n,e,!0)),n.addEventListener("pointercancel",e=>Ef(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Ef(n,e,!1)}),n.addEventListener("pointerleave",()=>{At||ds(null)});U("p-material").append(...d0.map((n,e)=>new Option(n,e)));for(let n of X0)U("p-"+n).addEventListener("change",e=>{let t=lt();!t||t.model||(Rt(),t[n]=Number(e.target.value),ie=mn(ie),It())});U("uv-reset").onclick=()=>{let n=lt();!n||n.model||(Rt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ie=mn(ie),It())};var dw={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(dw))U(e).addEventListener("change",t=>{let i=lt();if(!i?.model||i.model.kind!=="prop")return;Rt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),ie=mn(ie),It();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};gt(s[n])});for(let n of W0)U("p-"+n).addEventListener("change",e=>{let t=lt();if(!t)return;Rt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),ie=mn(ie),It()});U("map-world-size").onchange=n=>{Rt(),ie.worldSize=Te.clamp(Number(n.target.value)||240,24,2048),ie=mn(ie),It(),Er(),gt("Zone de construction : "+ie.worldSize+" \xD7 "+ie.worldSize+" m.")};U("map-name").onchange=n=>{Rt(),ie.name=n.target.value,ie=mn(ie),It()};U("piece-search").addEventListener("input",rx);U("pieces").onchange=n=>{n.target.value!==""&&ko(Number(n.target.value))};U("focus-piece").onclick=()=>{let n=Ct.children[bt];if(!n)return;let e=new dn().setFromObject(n).getBoundingSphere(new ci),t=Tt.position.clone().sub(zt.target).normalize(),i=Math.atan(Math.tan(Te.degToRad(Tt.fov/2))*Math.min(Tt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);zt.target.copy(e.center),Tt.position.copy(e.center).addScaledVector(t,s),zt.update(),ln()};for(let n of["x","y","z","yaw"])U("spawn-"+n).onchange=e=>{Rt(),ie.spawn[n]=Number(e.target.value),ie=mn(ie),It()};U("spawn-here").onclick=()=>{let n=lt();if(!n)return;let e=n.solid&&cx(n.x,n.z,n.yaw,Ct.children[bt]);if(!e)return gt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Rt(),ie.spawn=e,It(),gt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of ou)n.onclick=()=>Bi(n.dataset.tool);U("duplicate").onclick=Xf;U("add-mirror").onclick=()=>Hf(ff());U("delete").onclick=Wf;U("rotate").onclick=ow;U("undo").onclick=lx;U("zoom-fit").onclick=Er;U("snap").onchange=()=>ds(null);U("new-example").onclick=()=>Yf(Of(),"Ar\xE8ne de d\xE9part ouverte.");U("blank-map").onclick=()=>{let n=Te.clamp(Number(U("map-world-size").value)||240,24,2048);Yf({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[si({name:"Sol",y:-.25,w:Math.min(n,hs),d:Math.min(n,hs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};U("surface").onchange=n=>{let e=ol[n.target.value],t=lt();!e||!t||(Rt(),Object.assign(t,e),It())};U("texture-file").onchange=async n=>{let e=n.target.files[0],t=lt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ie.pieces.includes(t))return gt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Rt(),t.texture=o,It(),gt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){gt(i.message)}finally{n.target.value=""}};U("texture-paint").onclick=()=>{let n=lt();if(!n||n.model)return gt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");mf({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ie.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Rt(),n.texture=e,ie=mn(ie),It(),gt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};U("terrain-grassTexture-paint").onclick=()=>{let n=lt();n?.terrain&&mf({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ie.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Rt(),n.terrain.grassTexture=e,ie=mn(ie),It(),gt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};U("texture-clear").onclick=()=>{lt()?.texture&&(Rt(),lt().texture=null,It())};U("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{Yf(mn(await e.text()),"Map charg\xE9e.")}catch(t){gt(t.message)}finally{n.target.value=""}};U("export-map").onclick=()=>{try{x0(ie),gt("Map JSON export\xE9e.")}catch(n){gt(n.message)}};U("test-map").onclick=async()=>{try{await _u(g0,JSON.stringify(mn(ie))),location.href="./?custom=1"}catch{gt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var dx=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function fw(n){let e=n.terrain.rules,t=Ct.children[bt]?.userData.vegetation?.userData.distribution??[];U("terrain-add-rule").disabled=e.length>=qh,U("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),U("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,S,v=!1)=>{let I=document.createElement("td");v&&(I.dataset.wide="");let L=document.createElement("span");return L.textContent=C,I.append(L,S),r.append(I),S.matches("input,select")&&S.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),I},a=C=>{Rt(),e[s]=rl({...i,...C}),Oi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),It()},l=(C,S,v)=>{let I=document.createElement("select");return I.replaceChildren(...C.map(([L,O])=>new Option(L,O))),I.value=S,I.onchange=()=>v(I.value),I},c=(C,S,v,I)=>{let L=document.createElement("input");return L.type="number",L.value=i[C],L.min=S,L.max=v,L.step=I,L.onchange=()=>{Number.isFinite(L.valueAsNumber)?a({[C]:L.valueAsNumber}):L.value=i[C]},L},h=Bn.some(C=>C.id===i.model?.id)||!i.model?Bn:[...Bn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let S=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(C=>[C.name,C.id]),i.model.id,C=>a({model:h.find(S=>S.id===C)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:of-1},(C,S)=>[String(S+2),String(S+2)]),String(i.colors.length),C=>{let S=i.colors.slice(0,Number(C));for(;S.length<Number(C);)S.push(S.at(-1));a({colors:S})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[C,S]of i.colors.entries()){let v=document.createElement("input");v.type="color",v.value=S,v.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),v.onchange=()=>a({colors:i.colors.map((I,L)=>L===C?v.value:I)}),f.append(v)}u.append(f),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,il,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,rf,.05)),o("Variation de taille",c("variation",0,af,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,S,v,I]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let L=document.createElement("label"),O=document.createElement("input");L.textContent=S,O.type="number",O.min=v,O.max=I,O.step="any",O.value=i.scatter?.[C]??_[C],O.onchange=()=>{Number.isFinite(O.valueAsNumber)&&a({scatter:{...i.scatter,[C]:O.valueAsNumber}})},L.append(O),m.append(L)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let b=document.createElement("td");b.dataset.wide="",b.append(x),r.append(b);let y=document.createElement("output"),E=t[s]??{count:0,requested:0,area:0};y.textContent=E.count+" / "+E.requested+" \xB7 "+E.area.toFixed(1)+" m\xB2",E.requested>E.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+format.format(E.collisions??0)+" collisions");let A=o("Affich\xE9es / demand\xE9es",y,!0),D=document.createElement("button");return D.type="button",D.textContent="Retirer la ligne",D.onclick=()=>{Rt(),e.splice(s,1),It()},A.append(D),r}))}U("terrain-add-rule").onclick=()=>{let n=lt();!n?.terrain||n.terrain.rules.length>=qh||(Rt(),n.terrain.rules.push(rl({seed:n.terrain.seed+n.terrain.rules.length})),It(),U("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};U("terrain-stitch").onclick=()=>{let n=lt(),e=ie.pieces[Number(U("terrain-neighbor").value)],t=Te.clamp(Number(U("terrain-seam-width").value)||1.5,.1,25),i=a0(n,e,t);if(!i)return gt("Rapproche les bords \xE0 moins de 25 cm.");Rt(),ie.pieces[bt]=i.piece,It(),gt(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};U("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=lt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ie.pieces.includes(t))return;Rt(),t.terrain.grassTexture=o,It(),gt("Texture d\u2019herbe import\xE9e.")}catch(i){gt(i.message)}};U("terrain-grassTexture-clear").onclick=()=>{lt()?.terrain&&(Rt(),lt().terrain.grassTexture=null,It())};U("terrain-triangulation").onchange=n=>{let e=lt();e?.terrain&&(Rt(),e.terrain=cs({...e.terrain,triangulation:n.target.value},e.w*e.d),It())};U("adaptive-editor-view").onchange=ln;U("spawn-gizmo").onclick=()=>{Bi("spawn"),gt("Tire la fl\xE8che verte Y pour monter le point de d\xE9part.")};for(let n of dx)U("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Rt(),t.terrain=n==="detail"?cf(t.terrain,Number(e.target.value)):cs({...t.terrain,[n]:Number(e.target.value)}),It())};function fx(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function px(n){let e=lt();e?.terrain&&(Rt(),e.terrain=cs({...e.terrain,reliefArea:n},e.w*e.d),It())}U("terrain-relief-local").onchange=n=>{let e=lt();e?.terrain&&px(n.target.checked?fx(e):null)};for(let n of["x","z","radius","blend"])U("terrain-relief-"+n).onchange=e=>{let t=lt(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&px({...t.terrain.reliefArea,[n]:i})};U("terrain-reset").onclick=()=>{lt()?.terrain&&(Rt(),lt().terrain.heights=null,It())};function mx(n,e){Zf(n,e);let t=Vs.intersectObjects(Ct.children,!1).find(a=>ie.pieces[Ct.children.indexOf(a.object)]?.terrain),i=t?Ct.children.indexOf(t.object):-1,s=ie.pieces[i];if(!s?.terrain||(At.recorded||(Rt(),At.recorded=!0,At.flattenY=t.point.y,ko(i),U("terrain-controls").open=!0),i!==bt))return;let r={mode:U("terrain-brush").value,radius:Number(U("brush-radius").value),strength:Number(U("brush-strength").value),target:At.flattenY};if(!l0(s,t.point.x,t.point.z,r))return;let o=Ct.children[i];o.geometry.dispose(),o.geometry=uf(s),Hd(o.geometry,s),Fi?.update(),_i(),ln()}U("view-top").onclick=()=>{let n=zt.target,e=Math.max(10,Tt.position.distanceTo(n));Tt.position.copy(n).add(new M(0,e,.001)),zt.update(),ln()};U("view-perspective").onclick=()=>{Tt.position.copy(zt.target).add(new M(16,15,24)),Er()};U("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=ie.spawn,s=new M(0,0,-1).applyAxisAngle(du,Te.degToRad(i));Tt.position.set(n,e+.87,t),zt.target.copy(Tt.position).addScaledVector(s,5),Tt.lookAt(zt.target),ln()};var H0={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||At||et.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")lx();else if(e==="d")Xf();else return;else{if(n.altKey)return;if(H0[e])Bi(H0[e]);else if(e==="f")Er();else if(e==="delete"||e==="backspace")Wf();else return}n.preventDefault()});var Mr=new vn;xn.add(Mr);function pw(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function Uf(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function mw(){dl=Ct.children.map(pw),Bs={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of dl.entries()){for(let i of["triangles","vertices","instances"])Bs[i]+=t[i];(Bs.heavy<0||t.triangles>dl[Bs.heavy].triangles)&&(Bs.heavy=e)}U("scene-mesh-stats").textContent="Objets de la carte \xB7 "+Uf(Bs);let n=Bs.heavy;U("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+ie.pieces[n].name+" \xB7 "+Uf(dl[n]),U("scene-select-heavy").disabled=n<0}U("scene-select-heavy").onclick=()=>{let n=Bs?.heavy??-1;n<0||(ko(n),window.setInspectorTab("object"),U("focus-piece").click())};function gx(){if(!U("debug-stats"))return;let n=Ho.info.render.triangles,e=ie?.pieces?.length??0;U("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ie?.worldSize??240)+" m"}function xx(){for(let n of[...Mr.children])Mr.remove(n),n.geometry.dispose(),n.material.dispose();zo.visible=U("debug-grid").checked;for(let n of Ct.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=U("debug-wire").checked;if(U("debug-hitboxes").checked){let e=Ct.children.indexOf(n),t=ie.pieces[e];if(t?.model){let i=new M(t.w,t.h,t.d),s=Kg(t.model,i);if(s)for(let r of s){let o=new qe(...r.size),a=new fe(o,new on({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),Mr.add(a)}else{let r=Jg(t.model,i),o=new fe(r,new on({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),Mr.add(o)}}else if(t?.primitive==="ramp"){let i=new Qs(new Ia(n.geometry),new ui({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),Mr.add(i)}else Mr.add(new mo(n,"#fa9945"))}}ln()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])U(n).onchange=xx;U("debug-coords").onchange=()=>{U("debug-coords").checked||gx()};for(let n of[an,ft])n.addEventListener("pointermove",e=>{if(!U("debug-coords").checked||At||yi)return;let t=Vo(n,e);if(!t)return;let i=t.point;U("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+ie.pieces.length+" \xE9l\xE9ments"});async function gw(){try{let n=await $f(q0);if(n){let e=mn(n);if(JSON.stringify(e)!==JSON.stringify(p0()))if(e.arenaBase&&!e.editableArena){let t=Of(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=Uo?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ie=mn(e),gt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ie=e}else ie=e}}catch{}if(sw(),Bi("move"),It(),fu(),pu(),Er(),yl(),Af){let n=Bn.find(e=>e.id===Af);n?(U("place-model").click(),gt("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):gt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Oi("d\xE9marrage termin\xE9",{version:"R39.2",name:ie.name,pi\u00E8ces:ie.pieces.length})}gw();})();
