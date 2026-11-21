(()=>{var op=["Jour","Coucher de soleil","Nuit"],wl={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,sunDiameter:3.3,sunHalo:1,sunStarburst:0,shadowRange:0,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},Ox=[wl,{...wl,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...wl,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Hi(n){return{...Ox[n]??wl}}var Tl=5e6,Bx=4*Math.ceil(Tl/3)+23,Nr=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,di=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function El(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(di(n.preset,0,2,0)),t=Hi(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=Bx?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=Tl?n.skyImage:null,r=di(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:di(n.rotation,-360,360,0),skyTint:Nr(n.skyTint,"#ffffff"),skyColor:Nr(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:Nr(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,di(n.fogFar,1,4096,t.fogFar)),azimuth:di(n.azimuth,-360,360,t.azimuth),elevation:di(n.elevation,-89,89,t.elevation),sunColor:Nr(n.sunColor,t.sunColor),sunPower:di(n.sunPower,0,12,t.sunPower),sunDiameter:di(n.sunDiameter,.1,12,t.sunDiameter),sunHalo:di(n.sunHalo,0,4,t.sunHalo),sunStarburst:di(n.sunStarburst,0,2,0),shadowRange:di(n.shadowRange,0,160,t.shadowRange),ambientColor:Nr(n.ambientColor,t.ambientColor),groundColor:Nr(n.groundColor,t.groundColor),ambientPower:di(n.ambientPower,0,12,t.ambientPower)}}var bu;function zx(){return bu??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw bu=null,n}),bu}async function ap(n,e,t){let i=await zx();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function lp(n){return await ap(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function Su(n,e){await ap(n,"readwrite",(t,i)=>t.put(e,i))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xp=0,hd=1,qp=2;var ud=1,Yp=2,Zi=3,ti=0,Bn=1,un=2,ls=0,er=1,bo=2,dd=3,fd=4,Zp=5,Ss=100,jp=101,Jp=102,Kp=103,$p=104,Qp=200,em=201,tm=202,nm=203,sc=204,rc=205,im=206,sm=207,rm=208,om=209,am=210,lm=211,cm=212,hm=213,um=214,Uc=0,Fc=1,Nc=2,tr=3,Oc=4,Bc=5,zc=6,kc=7,Vc=0,dm=1,fm=2,cs=0,pm=1,mm=2,gm=3,xm=4,ym=5,_m=6,vm=7;var pd=300,mr=301,gr=302,Li=303,Gc=304,Ha=306,Cn=1e3,bs=1001,oc=1002,Wn=1003,Mm=1004;var Wa=1005;var hn=1006,Hc=1007;var Pn=1008;var Ui=1009,md=1010,gd=1011,So=1012,Wc=1013,Ps=1014,Fi=1015,wo=1016,Xc=1017,qc=1018,To=1020,xd=35902,yd=35899,_d=1021,vd=1022,zn=1023,so=1026,Eo=1027,Yc=1028,Zc=1029,Md=1030,jc=1031;var Jc=1033,Xa=33776,qa=33777,Ya=33778,Za=33779,Kc=35840,$c=35841,Qc=35842,eh=35843,th=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,lh=37812,ch=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,xh=37821,yh=36492,_h=36494,vh=36495,Mh=36283,bh=36284,Sh=36285,wh=36286;var pa=2300,ac=2301,nc=2302,$u=2400,Qu=2401,ed=2402;var bm=3200,Sm=3201;var Th=0,wm=1,hs="",vt="srgb",nr="srgb-linear",ma="linear",Ot="srgb";var Qs=7680;var td=519,Tm=512,Em=513,Am=514,bd=515,Cm=516,Rm=517,Im=518,Pm=519,lc=35044,ja=35048;var Sd="300 es",Ri=2e3,ga=2001;var qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cp=1234567,ha=Math.PI/180,ro=180/Math.PI;function Xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function wd(n,e){return(n%e+e)%e}function kx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vx(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function Gx(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function Hx(n,e=1){return e-Math.abs(wd(n,e*2)-e)}function Wx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yx(n,e){return n+Math.random()*(e-n)}function Zx(n){return n*(.5-Math.random())}function jx(n){n!==void 0&&(cp=n);let e=cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jx(n){return n*ha}function Kx(n){return n*ro}function $x(n){return(n&n-1)===0&&n!==0}function Qx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ey(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ty(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Te={DEG2RAD:ha,RAD2DEG:ro,generateUUID:Xi,clamp:at,euclideanModulo:wd,mapLinear:kx,inverseLerp:Vx,lerp:ua,damp:Gx,pingpong:Hx,smoothstep:Wx,smootherstep:Xx,randInt:qx,randFloat:Yx,randFloatSpread:Zx,seededRandom:jx,degToRad:Jx,radToDeg:Kx,isPowerOfTwo:$x,ceilPowerOfTwo:Qx,floorPowerOfTwo:ey,setQuaternionFromProperEuler:ty,normalize:Nt,denormalize:Ci},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*x,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let T=Math.sqrt(M),E=Math.atan2(T,m*_);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wu=new b,hp=new bt,ht=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],M=s[4],y=s[7],T=s[2],E=s[5],I=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*g+a*M+l*E,r[6]=o*m+a*y+l*I,r[1]=c*x+h*_+u*T,r[4]=c*g+h*M+u*E,r[7]=c*m+h*y+u*I,r[2]=d*x+f*_+p*T,r[5]=d*g+f*M+p*E,r[8]=d*m+f*y+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tu=new ht;function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dm(){let n=oo("canvas");return n.style.display="block",n}var up={};function ao(n){n in up||(up[n]=!0,console.warn(n))}function Lm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var dp=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){let n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:dp,fromXYZ:fp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:dp,fromXYZ:fp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}var Ct=ny();function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Or,cc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=oo("canvas")),Or.width=e.width,Or.height=e.height;let s=Or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(os(t[i]/255)*255):t[i]=os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iy=0,lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eu(s[o].image)):r.push(Eu(s[o]))}else r=Eu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sy=0,Au=new b,Rn=class n extends qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bs,s=bs,r=hn,o=Pn,a=zn,l=Ui,c=n.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Xi(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=pd;Rn.DEFAULT_ANISOTROPY=1;var Jt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(m+1)/2,E=(h+d)/4,I=(u+x)/4,C=(p+g)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=I/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Rn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Cl.subVectors(this.max,Qo),Br.subVectors(e.a,Qo),zr.subVectors(e.b,Qo),kr.subVectors(e.c,Qo),gs.subVectors(zr,Br),xs.subVectors(kr,zr),js.subVectors(Br,kr);let t=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-js.z,js.y,gs.z,0,-gs.x,xs.z,0,-xs.x,js.z,0,-js.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-js.y,js.x,0];return!Cu(t,Br,zr,kr,Cl)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,Br,zr,kr,Cl))?!1:(Rl.crossVectors(gs,xs),t=[Rl.x,Rl.y,Rl.z],Cu(t,Br,zr,kr,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new b,new b,new b,new b,new b,new b,new b,new b],Ti=new b,Al=new fn,Br=new b,zr=new b,kr=new b,gs=new b,xs=new b,js=new b,Qo=new b,Cl=new b,Rl=new b,Js=new b;function Cu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Js.fromArray(n,r);let a=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),h=i.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ry=new fn,ea=new b,Ru=new b,pi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ry.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Ru)),this.expandByPoint(ea.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ns=new b,Iu=new b,Il=new b,ys=new b,Pu=new b,Pl=new b,Du=new b,ws=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Iu.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Iu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Il),a=ys.dot(this.direction),l=-ys.dot(Il),c=ys.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Iu).addScaledVector(Il,d),f}intersectSphere(e,t){ns.subVectors(e.center,this.origin);let i=ns.dot(this.direction),s=ns.dot(ns)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,i,s,r){Pu.subVectors(t,e),Pl.subVectors(i,e),Du.crossVectors(Pu,Pl);let o=this.direction.dot(Du),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);let l=a*this.direction.dot(Pl.crossVectors(ys,Pl));if(l<0)return null;let c=a*this.direction.dot(Pu.cross(ys));if(c<0||l+c>o)return null;let h=-a*ys.dot(Du);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oy,e,ay)}lookAt(e,t,i){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),_s.crossVectors(i,Qn),_s.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),_s.crossVectors(i,Qn)),_s.normalize(),Dl.crossVectors(Qn,_s),s[0]=_s.x,s[4]=Dl.x,s[8]=Qn.x,s[1]=_s.y,s[5]=Dl.y,s[9]=Qn.y,s[2]=_s.z,s[6]=Dl.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],M=i[7],y=i[11],T=i[15],E=s[0],I=s[4],C=s[8],S=s[12],v=s[1],R=s[5],L=s[9],O=s[13],z=s[2],X=s[6],W=s[10],te=s[14],V=s[3],oe=s[7],xe=s[11],ye=s[15];return r[0]=o*E+a*v+l*z+c*V,r[4]=o*I+a*R+l*X+c*oe,r[8]=o*C+a*L+l*W+c*xe,r[12]=o*S+a*O+l*te+c*ye,r[1]=h*E+u*v+d*z+f*V,r[5]=h*I+u*R+d*X+f*oe,r[9]=h*C+u*L+d*W+f*xe,r[13]=h*S+u*O+d*te+f*ye,r[2]=p*E+x*v+g*z+m*V,r[6]=p*I+x*R+g*X+m*oe,r[10]=p*C+x*L+g*W+m*xe,r[14]=p*S+x*O+g*te+m*ye,r[3]=_*E+M*v+y*z+T*V,r[7]=_*I+M*R+y*X+T*oe,r[11]=_*C+M*L+y*W+T*xe,r[15]=_*S+M*O+y*te+T*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*c-x*d*c+x*l*f-a*g*f-u*l*m+a*d*m,M=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,y=h*x*c-p*u*c+p*a*f-o*x*f-h*a*m+o*u*m,T=p*u*l-h*x*l-p*a*d+o*x*d+h*a*g-o*u*g,E=t*_+i*M+s*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=_*I,e[1]=(x*d*r-u*g*r-x*s*f+i*g*f+u*s*m-i*d*m)*I,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*I,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*I,e[4]=M*I,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*I,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*I,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*I,e[8]=y*I,e[9]=(p*u*r-h*x*r-p*i*f+t*x*f+h*i*m-t*u*m)*I,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*I,e[12]=T*I,e[13]=(h*x*s-p*u*s+p*i*d-t*x*d-h*i*g+t*u*g)*I,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,M=l*h,y=l*u,T=i.x,E=i.y,I=i.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(p-M)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(p+M)*I,s[9]=(g-_)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Vr.set(s[0],s[1],s[2]).length(),o=Vr.set(s[4],s[5],s[6]).length(),a=Vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ei.copy(this);let c=1/r,h=1/o,u=1/a;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,t.setFromRotationMatrix(Ei),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ri,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ri)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ga)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ri,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ri)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ga)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vr=new b,Ei=new Mt,oy=new b(0,0,0),ay=new b(1,1,1),_s=new b,Dl=new b,Qn=new b,pp=new Mt,mp=new bt,sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ly=0,gp=new b,Gr=new bt,is=new Mt,Ll=new b,ta=new b,cy=new b,hy=new bt,xp=new b(1,0,0),yp=new b(0,1,0),_p=new b(0,0,1),vp={type:"added"},uy={type:"removed"},Hr={type:"childadded",child:null},Lu={type:"childremoved",child:null},Kt=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new sn,i=new bt,s=new b(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ht}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ll.copy(e):Ll.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(ta,Ll,this.up):is.lookAt(Ll,ta,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Gr.setFromRotationMatrix(is),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uy),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new b(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new b,ss=new b,Uu=new b,rs=new b,Wr=new b,Xr=new b,Mp=new b,Fu=new b,Nu=new b,Ou=new b,Bu=new Jt,zu=new Jt,ku=new Jt,Hn=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ai.subVectors(e,t),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ai.subVectors(s,t),ss.subVectors(i,t),Uu.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(ss),l=Ai.dot(Uu),c=ss.dot(ss),h=ss.dot(Uu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bu.setScalar(0),zu.setScalar(0),ku.setScalar(0),Bu.fromBufferAttribute(e,t),zu.fromBufferAttribute(e,i),ku.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bu,r.x),o.addScaledVector(zu,r.y),o.addScaledVector(ku,r.z),o}static isFrontFacing(e,t,i,s){return Ai.subVectors(i,t),ss.subVectors(e,t),Ai.cross(ss).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Ai.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Wr.subVectors(s,i),Xr.subVectors(r,i),Fu.subVectors(e,i);let l=Wr.dot(Fu),c=Xr.dot(Fu);if(l<=0&&c<=0)return t.copy(i);Nu.subVectors(e,s);let h=Wr.dot(Nu),u=Xr.dot(Nu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Wr,o);Ou.subVectors(e,r);let f=Wr.dot(Ou),p=Xr.dot(Ou);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Xr,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Mp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Mp,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=wd(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vu(o,r,e+1/3),this.g=Vu(o,r,e),this.b=Vu(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Um[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ct.workingToColorSpace(Tn.copy(this),e),Math.round(at(Tn.r*255,0,255))*65536+Math.round(at(Tn.g*255,0,255))*256+Math.round(at(Tn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=vt){Ct.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Ul);let i=ua(vs.h,Ul.h,t),s=ua(vs.s,Ul.s,t),r=ua(vs.l,Ul.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new He;He.NAMES=Um;var dy=0,Ii=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=er,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new b,Fl=new ae,fy=0,Bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}};var ya=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _a=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ze=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},py=0,fi=new Mt,Gu=new Kt,qr=new b,ei=new fn,na=new fn,Mn=new b,mt=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(ei.min,na.min),ei.expandByPoint(Mn),Mn.addVectors(ei.max,na.max),ei.expandByPoint(Mn)):(ei.expandByPoint(na.min),ei.expandByPoint(na.max))}ei.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Mn.add(qr)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new b,l[C]=new b;let c=new b,h=new b,u=new b,d=new ae,f=new ae,p=new ae,x=new b,g=new b;function m(C,S,v){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),a[C].add(x),a[S].add(x),a[v].add(x),l[C].add(g),l[S].add(g),l[v].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,S=_.length;C<S;++C){let v=_[C],R=v.start,L=v.count;for(let O=R,z=R+L;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new b,y=new b,T=new b,E=new b;function I(C){T.fromBufferAttribute(s,C),E.copy(T);let S=a[C];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);let R=y.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,R)}for(let C=0,S=_.length;C<S;++C){let v=_[C],R=v.start,L=v.count;for(let O=R,z=R+L;O<z;O+=3)I(e.getX(O+0)),I(e.getX(O+1)),I(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bp=new Mt,Ks=new ws,Nl=new pi,Sp=new b,Ol=new b,Bl=new b,zl=new b,Hu=new b,kl=new b,wp=new b,Vl=new b,de=class extends Kt{constructor(e=new mt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hu.fromBufferAttribute(u,e),o?kl.addScaledVector(Hu,h):kl.addScaledVector(Hu.sub(t),h))}t.add(kl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(Nl.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Nl,Sp)===null||Ks.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(bp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(bp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,T=M;y<T;y+=3){let E=a.getX(y),I=a.getX(y+1),C=a.getX(y+2);s=Gl(this,m,e,i,c,h,u,E,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Gl(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,T=M;y<T;y+=3){let E=y,I=y+1,C=y+2;s=Gl(this,m,e,i,c,h,u,E,I,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,M=g+1,y=g+2;s=Gl(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function my(n,e,t,i,s,r,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ti,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vl);return c<t.near||c>t.far?null:{distance:c,point:Vl.clone(),object:n}}function Gl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ol),n.getVertexPosition(l,Bl),n.getVertexPosition(c,zl);let h=my(n,e,t,i,Ol,Bl,zl,wp);if(h){let u=new b;Hn.getBarycoord(wp,Ol,Bl,zl,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new b,materialIndex:0};Hn.getNormal(Ol,Bl,zl,d.normal),h.face=d,h.barycoord=u}return h}var Ze=class n extends mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function p(x,g,m,_,M,y,T,E,I,C,S){let v=y/I,R=T/C,L=y/2,O=T/2,z=E/2,X=I+1,W=C+1,te=0,V=0,oe=new b;for(let xe=0;xe<W;xe++){let ye=xe*R-O;for(let Ne=0;Ne<X;Ne++){let We=Ne*v-L;oe[x]=We*_,oe[g]=ye*M,oe[m]=z,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ne/I),u.push(1-xe/C),te+=1}}for(let xe=0;xe<C;xe++)for(let ye=0;ye<I;ye++){let Ne=d+ye+X*xe,We=d+ye+X*(xe+1),ct=d+(ye+1)+X*(xe+1),it=d+(ye+1)+X*xe;l.push(Ne,We,it),l.push(We,ct,it),V+=6}a.addGroup(f,V,S),f+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=xr(n[t]);for(let s in i)e[s]=i[s]}return e}function gy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ed(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Fm={clone:xr,merge:Dn},xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},va=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ms=new b,Tp=new ae,Ep=new ae,En=class extends va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Ep),t.subVectors(Ep,Tp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yr=-90,Zr=1,dc=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(Yr,Zr,e,t);s.layers=this.layers,this.add(s);let r=new En(Yr,Zr,e,t);r.layers=this.layers,this.add(r);let o=new En(Yr,Zr,e,t);o.layers=this.layers,this.add(o);let a=new En(Yr,Zr,e,t);a.layers=this.layers,this.add(a);let l=new En(Yr,Zr,e,t);l.layers=this.layers,this.add(l);let c=new En(Yr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ma=class extends Rn{constructor(e=[],t=mr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:ls});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=hn),new dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},bn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_y={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ir=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uo=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ba=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new b,fo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ts=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jr,ia=new b,Jr=new b,Kr=new b,$r=new ae,sa=new ae,Nm=new Mt,Hl=new b,ra=new b,Wl=new b,Ap=new ae,Wu=new ae,Cp=new ae,sr=class extends Kt{constructor(e=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ba(t,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new fo(i,3,0,!1)),jr.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=jr,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Kr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Xl(Hl.set(-.5,-.5,0),Kr,o,Jr,s,r),Xl(ra.set(.5,-.5,0),Kr,o,Jr,s,r),Xl(Wl.set(.5,.5,0),Kr,o,Jr,s,r),Ap.set(0,0),Wu.set(1,0),Cp.set(1,1);let a=e.ray.intersectTriangle(Hl,ra,Wl,!1,ia);if(a===null&&(Xl(ra.set(-.5,.5,0),Kr,o,Jr,s,r),Wu.set(0,1),a=e.ray.intersectTriangle(Hl,Wl,ra,!1,ia),a===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Hn.getInterpolation(ia,Hl,ra,Wl,Ap,Wu,Cp,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xl(n,e,t,i,s,r){$r.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sa.x=r*$r.x-s*$r.y,sa.y=s*$r.x+r*$r.y):sa.copy($r),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(Nm)}var ni=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Wn,h=Wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=class extends Bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new Mt,Rp=new Mt,ql=[],Ip=new fn,vy=new Mt,oa=new de,aa=new pi,Sa=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),Ip.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),aa.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),Rp.multiplyMatrices(i,Qr),oa.matrixWorld=Rp,oa.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,Yc,Fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xu=new b,My=new b,by=new ht,An=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xu.subVectors(i,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||by.getNormalMatrix(e),s=this.coplanarPoint(Xu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new pi,Sy=new ae(.5,.5),Yl=new b,mo=class{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,m-p,T-_).normalize(),s[1].setComponents(c+o,f+h,m+p,T+_).normalize(),s[2].setComponents(c+a,f+u,m+x,T+M).normalize(),s[3].setComponents(c-a,f-u,m-x,T-M).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,T-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,T-y).normalize(),t===Ri)s[5].setComponents(c+l,f+d,m+g,T+y).normalize();else if(t===ga)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);let t=Sy.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mi=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pc=new b,mc=new b,Pp=new Mt,la=new ws,Zl=new pi,qu=new b,Dp=new b,Xn=class extends Kt{constructor(e=new mt,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)pc.fromBufferAttribute(t,s-1),mc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;Pp.copy(s).invert(),la.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),M=jl(this,e,la,l,m,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=jl(this,e,la,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=jl(this,e,la,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=jl(this,e,la,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(pc.fromBufferAttribute(a,s),mc.fromBufferAttribute(a,r),t.distanceSqToSegment(pc,mc,qu,Dp)>i)return;qu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(qu);if(!(c<e.near||c>e.far))return{distance:c,point:Dp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Lp=new b,Up=new b,rr=class extends Xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lp.fromBufferAttribute(t,s),Up.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lp.distanceTo(Up);e.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends Xn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Di=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ta=class extends Rn{constructor(e,t,i=Ps,s,r,o,a=Wn,l=Wn,c,h=so,u=1){if(h!==so&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ea=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Es=class n extends mt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,x=s+1,g=new b,m=new b;for(let _=0;_<=p;_++){let M=0,y=0,T=0,E=0;if(_<=i){let S=_/i,v=S*Math.PI/2;y=-h-e*Math.cos(v),T=e*Math.sin(v),E=-e*Math.cos(v),M=S*u}else if(_<=i+r){let S=(_-i)/r;y=-h+S*t,T=e,E=0,M=u+S*d}else{let S=(_-i-r)/i,v=S*Math.PI/2;y=h+e*Math.sin(v),T=e*Math.cos(v),E=e*Math.sin(v),M=u+d+S*u}let I=Math.max(0,Math.min(1,M/f)),C=0;_===0?C=.5/s:_===p&&(C=-.5/s);for(let S=0;S<=s;S++){let v=S/s,R=v*Math.PI*2,L=Math.sin(R),O=Math.cos(R);m.x=-T*O,m.y=y,m.z=T*L,a.push(m.x,m.y,m.z),g.set(-T*O,E,T*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(v+C,I)}if(_>0){let S=(_-1)*x;for(let v=0;v<s;v++){let R=S+v,L=S+v+1,O=_*x+v,z=_*x+v+1;o.push(R,L,O),o.push(L,z,O)}}}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},In=class n extends mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new b,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class n extends mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function _(){let y=new b,T=new b,E=0,I=(t-e)/i;for(let C=0;C<=r;C++){let S=[],v=C/r,R=v*(t-e)+e;for(let L=0;L<=s;L++){let O=L/s,z=O*l+a,X=Math.sin(z),W=Math.cos(z);T.x=R*X,T.y=-v*i+g,T.z=R*W,u.push(T.x,T.y,T.z),y.set(X,I,W).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-v),S.push(p++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let v=x[S][C],R=x[S+1][C],L=x[S+1][C+1],O=x[S][C+1];(e>0||S!==0)&&(h.push(v,R,O),E+=3),(t>0||S!==r-1)&&(h.push(R,L,O),E+=3)}c.addGroup(m,E,0),m+=E}function M(y){let T=p,E=new ae,I=new b,C=0,S=y===!0?e:t,v=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;let R=p;for(let L=0;L<=s;L++){let z=L/s*l+a,X=Math.cos(z),W=Math.sin(z);I.x=S*W,I.y=g*v,I.z=S*X,u.push(I.x,I.y,I.z),d.push(0,v,0),E.x=X*.5+.5,E.y=W*.5*v+.5,f.push(E.x,E.y),p++}for(let L=0;L<s;L++){let O=T+L,z=R+L;y===!0?h.push(z,z+1,O):h.push(z+1,z,O),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class n extends zt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},go=class n extends mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new b,y=new b,T=new b;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],T),l(M,y,T,_)}function l(_,M,y,T){let E=T+1,I=[];for(let C=0;C<=E;C++){I[C]=[];let S=_.clone().lerp(y,C/E),v=M.clone().lerp(y,C/E),R=E-C;for(let L=0;L<=R;L++)L===0&&C===E?I[C][L]=S:I[C][L]=S.clone().lerp(v,L/R)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let v=Math.floor(S/2);S%2===0?(d(I[C][v+1]),d(I[C+1][v]),d(I[C][v])):(d(I[C][v+1]),d(I[C+1][v+1]),d(I[C+1][v]))}}function c(_){let M=new b;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let _=new b;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;o.push(y,1-T)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],y=o[_+2],T=o[_+4],E=Math.max(M,y,T),I=Math.min(M,y,T);E>.9&&I<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let _=new b,M=new b,y=new b,T=new b,E=new ae,I=new ae,C=new ae;for(let S=0,v=0;S<r.length;S+=9,v+=6){_.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),T.copy(_).add(M).add(y).divideScalar(3);let R=g(T);x(E,v+0,_,R),x(I,v+2,M,R),x(C,v+4,y,R)}}function x(_,M,y,T){T<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new b,s=[],r=[],o=[],a=new b,l=new Mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xo=class extends ii{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gc=class extends xo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ad(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Jl=new b,Yu=new Ad,Zu=new Ad,ju=new Ad,xc=class extends ii{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new b){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jl.subVectors(s[0],s[1]).add(s[0]),c=Jl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Yu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),Zu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),ju.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ju.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Yu.calc(l),Zu.calc(l),ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function wy(n,e){let t=1-n;return t*t*e}function Ty(n,e){return 2*(1-n)*n*e}function Ey(n,e){return n*n*e}function da(n,e,t,i){return wy(n,e)+Ty(n,t)+Ey(n,i)}function Ay(n,e){let t=1-n;return t*t*t*e}function Cy(n,e){let t=1-n;return 3*t*t*n*e}function Ry(n,e){return 3*(1-n)*n*n*e}function Iy(n,e){return n*n*n*e}function fa(n,e,t,i,s){return Ay(n,e)+Cy(n,t)+Ry(n,i)+Iy(n,s)}var Aa=class extends ii{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,s.x,r.x,o.x,a.x),fa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yc=class extends ii{constructor(e=new b,t=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new b){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,s.x,r.x,o.x,a.x),fa(e,s.y,r.y,o.y,a.y),fa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends ii{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends ii{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends ii{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(da(e,s.x,r.x,o.x),da(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends ii{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(da(e,s.x,r.x,o.x),da(e,s.y,r.y,o.y),da(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Fp(a,l.x,c.x,h.x,u.x),Fp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},nd=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:xc,CubicBezierCurve:Aa,CubicBezierCurve3:yc,EllipseCurve:xo,LineCurve:Ca,LineCurve3:_c,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:vc,SplineCurve:Ia}),Mc=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new nd[s.type]().fromJSON(s))}return this}},Pa=class extends Mc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ca(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ra(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Aa(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ia(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new xo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},as=class extends Pa{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}};function Py(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Om(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ny(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Da(r,o,t,a,l,c,0),o}function Om(n,e,t,i,s){let r;if(s===Yy(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Np(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Np(o/i|0,n[o],n[o+1],r);return r&&yo(r,r.next)&&(Ua(r),r=r.next),r}function ar(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yo(t,t.next)||nn(t.prev,t,t.next)===0)){if(Ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Da(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Vy(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ly(n,i,s,r):Dy(n)){e.push(l.i,n.i,c.i),Ua(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Uy(ar(n),e),Da(n,e,t,i,s,r,2)):o===2&&Fy(n,e,t,i,s,r):Da(ar(n),e,t,i,s,r,1);break}}}function Dy(n){let e=n.prev,t=n,i=n.next;if(nn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ca(s,a,r,l,o,c,p.x,p.y)&&nn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ly(n,e,t,i){let s=n.prev,r=n,o=n.next;if(nn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),m=id(f,p,e,t,i),_=id(x,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=m&&y&&y.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ca(a,h,l,u,c,d,M.x,M.y)&&nn(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ca(a,h,l,u,c,d,y.x,y.y)&&nn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&ca(a,h,l,u,c,d,M.x,M.y)&&nn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ca(a,h,l,u,c,d,y.x,y.y)&&nn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Uy(n,e){let t=n;do{let i=t.prev,s=t.next.next;!yo(i,s)&&zm(i,t,t.next,s)&&La(i,s)&&La(s,i)&&(e.push(i.i,t.i,s.i),Ua(t),Ua(t.next),t=n=s),t=t.next}while(t!==n);return ar(t)}function Fy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wy(o,a)){let l=km(o,a);o=ar(o,o.next),l=ar(l,l.next),Da(o,e,t,i,s,r,0),Da(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ny(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Om(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Hy(c))}s.sort(Oy);for(let r=0;r<s.length;r++)t=By(s[r],t);return t}function Oy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function By(n,e){let t=zy(n,e);if(!t)return e;let i=km(t,n);return ar(i,i.next),ar(t,t.next)}function zy(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(yo(n,t))return t;do{if(yo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Bm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);La(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ky(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ky(n,e){return nn(n.prev,n,e.prev)<0&&nn(e.next,n,n.next)<0}function Vy(n,e,t,i){let s=n;do s.z===0&&(s.z=id(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gy(s)}function Gy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function id(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Hy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ca(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Bm(n,e,t,i,s,r,o,a)}function Wy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Xy(n,e)&&(La(n,e)&&La(e,n)&&qy(n,e)&&(nn(n.prev,n,e.prev)||nn(n,e.prev,e))||yo(n,e)&&nn(n.prev,n,n.next)>0&&nn(e.prev,e,e.next)>0)}function nn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yo(n,e){return n.x===e.x&&n.y===e.y}function zm(n,e,t,i){let s=$l(nn(n,e,t)),r=$l(nn(n,e,i)),o=$l(nn(t,i,n)),a=$l(nn(t,i,e));return!!(s!==r&&o!==a||s===0&&Kl(n,t,e)||r===0&&Kl(n,i,e)||o===0&&Kl(t,n,i)||a===0&&Kl(t,e,i))}function Kl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $l(n){return n>0?1:n<0?-1:0}function Xy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function La(n,e){return nn(n.prev,n,n.next)<0?nn(n,e,n.next)>=0&&nn(n,n.prev,e)>=0:nn(n,e,n.prev)<0||nn(n,n.next,e)<0}function qy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function km(n,e){let t=sd(n.i,n.x,n.y),i=sd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Np(n,e,t,i){let s=sd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var rd=class{static triangulate(e,t,i=2){return Py(e,t,i)}},Wi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Op(e),Bp(i,e);let o=e.length;t.forEach(Op);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bp(i,t[l]);let a=rd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Op(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var lr=class n extends mt{constructor(e=new as([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Zy,M,y=!1,T,E,I,C;m&&(M=m.getSpacedPoints(h),y=!0,d=!1,T=m.computeFrenetFrames(h,!1),E=new b,I=new b,C=new b),d||(g=0,f=0,p=0,x=0);let S=a.extractPoints(c),v=S.shape,R=S.holes;if(!Wi.isClockWise(v)){v=v.reverse();for(let re=0,Q=R.length;re<Q;re++){let j=R[re];Wi.isClockWise(j)&&(R[re]=j.reverse())}}function O(re){let j=10000000000000001e-36,ee=re[0];for(let ge=1;ge<=re.length;ge++){let fe=ge%re.length,Me=re[fe],Ke=Me.x-ee.x,Xe=Me.y-ee.y,P=Ke*Ke+Xe*Xe,w=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ee.x),Math.abs(ee.y)),q=j*w*w;if(P<=q){re.splice(fe,1),ge--;continue}ee=Me}}O(v),R.forEach(O);let z=R.length,X=v;for(let re=0;re<z;re++){let Q=R[re];v=v.concat(Q)}function W(re,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Q,j)}let te=v.length;function V(re,Q,j){let ee,ge,fe,Me=re.x-Q.x,Ke=re.y-Q.y,Xe=j.x-re.x,P=j.y-re.y,w=Me*Me+Ke*Ke,q=Me*P-Ke*Xe;if(Math.abs(q)>Number.EPSILON){let J=Math.sqrt(w),he=Math.sqrt(Xe*Xe+P*P),se=Q.x-Ke/J,ke=Q.y+Me/J,be=j.x-P/he,Oe=j.y+Xe/he,De=((be-se)*P-(Oe-ke)*Xe)/(Me*P-Ke*Xe);ee=se+Me*De-re.x,ge=ke+Ke*De-re.y;let pe=ee*ee+ge*ge;if(pe<=2)return new ae(ee,ge);fe=Math.sqrt(pe/2)}else{let J=!1;Me>Number.EPSILON?Xe>Number.EPSILON&&(J=!0):Me<-Number.EPSILON?Xe<-Number.EPSILON&&(J=!0):Math.sign(Ke)===Math.sign(P)&&(J=!0),J?(ee=-Ke,ge=Me,fe=Math.sqrt(w)):(ee=Me,ge=Ke,fe=Math.sqrt(w/2))}return new ae(ee/fe,ge/fe)}let oe=[];for(let re=0,Q=X.length,j=Q-1,ee=re+1;re<Q;re++,j++,ee++)j===Q&&(j=0),ee===Q&&(ee=0),oe[re]=V(X[re],X[j],X[ee]);let xe=[],ye,Ne=oe.concat();for(let re=0,Q=z;re<Q;re++){let j=R[re];ye=[];for(let ee=0,ge=j.length,fe=ge-1,Me=ee+1;ee<ge;ee++,fe++,Me++)fe===ge&&(fe=0),Me===ge&&(Me=0),ye[ee]=V(j[ee],j[fe],j[Me]);xe.push(ye),Ne=Ne.concat(ye)}let We;if(g===0)We=Wi.triangulateShape(X,R);else{let re=[],Q=[];for(let j=0;j<g;j++){let ee=j/g,ge=f*Math.cos(ee*Math.PI/2),fe=p*Math.sin(ee*Math.PI/2)+x;for(let Me=0,Ke=X.length;Me<Ke;Me++){let Xe=W(X[Me],oe[Me],fe);ue(Xe.x,Xe.y,-ge),ee===0&&re.push(Xe)}for(let Me=0,Ke=z;Me<Ke;Me++){let Xe=R[Me];ye=xe[Me];let P=[];for(let w=0,q=Xe.length;w<q;w++){let J=W(Xe[w],ye[w],fe);ue(J.x,J.y,-ge),ee===0&&P.push(J)}ee===0&&Q.push(P)}}We=Wi.triangulateShape(re,Q)}let ct=We.length,it=p+x;for(let re=0;re<te;re++){let Q=d?W(v[re],Ne[re],it):v[re];y?(I.copy(T.normals[0]).multiplyScalar(Q.x),E.copy(T.binormals[0]).multiplyScalar(Q.y),C.copy(M[0]).add(I).add(E),ue(C.x,C.y,C.z)):ue(Q.x,Q.y,0)}for(let re=1;re<=h;re++)for(let Q=0;Q<te;Q++){let j=d?W(v[Q],Ne[Q],it):v[Q];y?(I.copy(T.normals[re]).multiplyScalar(j.x),E.copy(T.binormals[re]).multiplyScalar(j.y),C.copy(M[re]).add(I).add(E),ue(C.x,C.y,C.z)):ue(j.x,j.y,u/h*re)}for(let re=g-1;re>=0;re--){let Q=re/g,j=f*Math.cos(Q*Math.PI/2),ee=p*Math.sin(Q*Math.PI/2)+x;for(let ge=0,fe=X.length;ge<fe;ge++){let Me=W(X[ge],oe[ge],ee);ue(Me.x,Me.y,u+j)}for(let ge=0,fe=R.length;ge<fe;ge++){let Me=R[ge];ye=xe[ge];for(let Ke=0,Xe=Me.length;Ke<Xe;Ke++){let P=W(Me[Ke],ye[Ke],ee);y?ue(P.x,P.y+M[h-1].y,M[h-1].x+j):ue(P.x,P.y,u+j)}}}ie(),k();function ie(){let re=s.length/3;if(d){let Q=0,j=te*Q;for(let ee=0;ee<ct;ee++){let ge=We[ee];N(ge[2]+j,ge[1]+j,ge[0]+j)}Q=h+g*2,j=te*Q;for(let ee=0;ee<ct;ee++){let ge=We[ee];N(ge[0]+j,ge[1]+j,ge[2]+j)}}else{for(let Q=0;Q<ct;Q++){let j=We[Q];N(j[2],j[1],j[0])}for(let Q=0;Q<ct;Q++){let j=We[Q];N(j[0]+te*h,j[1]+te*h,j[2]+te*h)}}i.addGroup(re,s.length/3-re,0)}function k(){let re=s.length/3,Q=0;ce(X,Q),Q+=X.length;for(let j=0,ee=R.length;j<ee;j++){let ge=R[j];ce(ge,Q),Q+=ge.length}i.addGroup(re,s.length/3-re,1)}function ce(re,Q){let j=re.length;for(;--j>=0;){let ee=j,ge=j-1;ge<0&&(ge=re.length-1);for(let fe=0,Me=h+g*2;fe<Me;fe++){let Ke=te*fe,Xe=te*(fe+1),P=Q+ee+Ke,w=Q+ge+Ke,q=Q+ge+Xe,J=Q+ee+Xe;Z(P,w,q,J)}}}function ue(re,Q,j){l.push(re),l.push(Q),l.push(j)}function N(re,Q,j){Ee(re),Ee(Q),Ee(j);let ee=s.length/3,ge=_.generateTopUV(i,s,ee-3,ee-2,ee-1);D(ge[0]),D(ge[1]),D(ge[2])}function Z(re,Q,j,ee){Ee(re),Ee(Q),Ee(ee),Ee(Q),Ee(j),Ee(ee);let ge=s.length/3,fe=_.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);D(fe[0]),D(fe[1]),D(fe[3]),D(fe[1]),D(fe[2]),D(fe[3])}function Ee(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function D(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nd[s.type]().fromJSON(s)),new n(i,e.options)}},Zy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(d,1-p),new ae(x,1-m)]:[new ae(a,1-l),new ae(h,1-u),new ae(f,1-p),new ae(g,1-m)]}};function jy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gi=class n extends go{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fa=class n extends mt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new b,d=new ae,f=new b,p=new b,x=new b,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let M=i+_*h*s,y=Math.sin(M),T=Math.cos(M);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);let I=l[3*E+0]*y,C=l[3*E+1],S=l[3*E+0]*T;c.push(I,C,S)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,T=y,E=y+e.length,I=y+e.length+1,C=y+1;r.push(T,E,C),r.push(I,C,E)}this.setIndex(r),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},xi=class n extends go{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Sn=class n extends mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*d-o;for(let M=0;M<c;M++){let y=M*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,y=_+c*(m+1),T=_+1+c*(m+1),E=_+1+c*m;f.push(M,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},As=class n extends mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new b,p=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,M=_,y=_+i+1,T=_+i+2,E=_+1;a.push(M,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Na=class n extends mt{constructor(e=new as([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Wi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Wi.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=Wi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){let _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],M=_[0]+u,y=_[1]+u,T=_[2]+u;i.push(M,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jy(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Jy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var yi=class n extends mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new b,d=new b,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],M=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+y,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let M=h[m][_+1],y=h[m][_],T=h[m+1][_],E=h[m+1][_+1];(m!==0||o>0)&&f.push(M,y,E),(m!==i-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},cr=class n extends go{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},On=class n extends mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Oa=class extends mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new b,r=new b;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),zp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),zp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var pn=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var si=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bc=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ql(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ky(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var hr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wc=class extends hr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$u,endingEnd:$u}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qu:r=e,a=2*t-i;break;case ed:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qu:o=e,l=2*i-t;break;case ed:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+_*o[c+T]+M*o[l+T]+y*o[u+T];return r}},Tc=class extends hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ec=class extends hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ac:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ky(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=ac;var Cs=class extends ri{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=pa;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};Ac.prototype.ValueTypeName="color";var Cc=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};Cc.prototype.ValueTypeName="number";var Rc=class extends hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)bt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ba=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends ri{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=pa;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};Ic.prototype.ValueTypeName="vector";var ic={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Pc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vm=new Pc,_o=class{constructor(e){this.manager=e!==void 0?e:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var eo=new WeakMap,Dc=class extends _o{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ic.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=eo.get(o);u===void 0&&(u=[],eo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=oo("img");function l(){h(),t&&t(this);let u=eo.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}eo.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ic.remove(`image:${e}`);let d=eo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}eo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ic.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var _i=class extends _o{constructor(e){super(e)}load(e,t,i,s){let r=new Rn,o=new Dc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},za=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ur=class extends za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ju=new Mt,kp=new b,Vp=new b,od=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(kp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),Ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ka=class extends va{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ad=class extends od{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ad}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Lc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cd="\\[\\]\\.:\\/",$y=new RegExp("["+Cd+"]","g"),Rd="[^"+Cd+"]",Qy="[^"+Cd.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",Rd),t_=/(WCOD+)?/.source.replace("WCOD",Qy),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rd),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rd),s_=new RegExp("^"+e_+t_+n_+i_+"$"),r_=["material","materials","bones","map"],ld=class{constructor(e,t,i){let s=i||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},jt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($y,"")}static parseTrackName(e){let t=s_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=ld;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hw=new Float32Array(1);var Gp=new Mt,fr=class{constructor(e,t,i=0,s=1/0){this.ray=new ws(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gp),this}intersectObject(e,t=!0,i=[]){return cd(e,this,i,t),i.sort(Hp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)cd(e[s],this,i,t);return i.sort(Hp),i}};function Hp(n,e){return n.distance-e.distance}function cd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)cd(r[o],e,t,!0)}}var vo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wp=new b,ec=new b,to=new b,no=new b,Ku=new b,o_=new b,a_=new b,Va=class{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wp.subVectors(e,this.start),ec.subVectors(this.end,this.start);let i=ec.dot(ec),r=ec.dot(Wp)/i;return t&&(r=at(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=o_,i=a_){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;to.subVectors(c,a),no.subVectors(h,l),Ku.subVectors(a,l);let u=to.dot(to),d=no.dot(no),f=no.dot(Ku);if(u<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/d,o=at(o,0,1);else{let p=to.dot(Ku);if(d<=s)o=0,r=at(-p/u,0,1);else{let x=to.dot(no),g=u*d-x*x;g!==0?r=at((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=at(-p/u,0,1)):o>1&&(o=1,r=at((x-p)/u,0,1))}}return t.copy(a).add(to.multiplyScalar(r)),i.copy(l).add(no.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ga=class extends rr{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new mt;h.setAttribute("position",new ze(l,3)),h.setAttribute("color",new ze(c,3));let u=new mi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var tc=new fn,Mo=class extends rr{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new mt;r.setIndex(new Bt(i,1)),r.setAttribute("position",new Bt(s,3)),super(r,new mi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&tc.setFromObject(this.object),tc.isEmpty())return;let e=tc.min,t=tc.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var pr=class extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Id(n,e,t,i){let s=l_(i);switch(t){case _d:return n*e;case Yc:return n*e/s.components*s.byteLength;case Zc:return n*e/s.components*s.byteLength;case Md:return n*e*2/s.components*s.byteLength;case jc:return n*e*2/s.components*s.byteLength;case vd:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case Jc:return n*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:case eh:return Math.max(n,16)*Math.max(e,8)/4;case Kc:case Qc:return Math.max(n,8)*Math.max(e,8)/2;case th:case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yh:case _h:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mh:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sh:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l_(n){switch(n){case Ui:case md:return{byteLength:1,components:1};case So:case gd:case wo:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Ps:case Wc:case Fi:return{byteLength:4,components:1};case xd:case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ug(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f_(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
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
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A_=`#ifdef USE_IRIDESCENCE
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
#endif`,C_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O_=`#define PI 3.141592653589793
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
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rv=`uniform bool receiveShadow;
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
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
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
#endif`,dv=`struct PhysicalMaterial {
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
}`,fv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$v=`float getShadowMask() {
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,MM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,EM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,IM=`#define LAMBERT
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
}`,PM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,UM=`#define NORMAL
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
}`,FM=`#define PHONG
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
}`,NM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,BM=`#define STANDARD
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
}`,zM=`#define TOON
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
}`,kM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:x_,alphatest_fragment:y_,alphatest_pars_fragment:__,aomap_fragment:v_,aomap_pars_fragment:M_,batching_pars_vertex:b_,batching_vertex:S_,begin_vertex:w_,beginnormal_vertex:T_,bsdfs:E_,iridescence_fragment:A_,bumpmap_pars_fragment:C_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:D_,color_fragment:L_,color_pars_fragment:U_,color_pars_vertex:F_,color_vertex:N_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:k_,displacementmap_vertex:V_,emissivemap_fragment:G_,emissivemap_pars_fragment:H_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:q_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:Z_,envmap_pars_vertex:j_,envmap_physical_pars_fragment:ov,envmap_vertex:J_,fog_vertex:K_,fog_pars_vertex:$_,fog_fragment:Q_,fog_pars_fragment:ev,gradientmap_pars_fragment:tv,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:sv,lights_pars_begin:rv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:hv,lights_physical_fragment:uv,lights_physical_pars_fragment:dv,lights_fragment_begin:fv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:_v,map_fragment:vv,map_pars_fragment:Mv,map_particle_fragment:bv,map_particle_pars_fragment:Sv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Tv,morphinstance_vertex:Ev,morphcolor_vertex:Av,morphnormal_vertex:Cv,morphtarget_pars_vertex:Rv,morphtarget_vertex:Iv,normal_fragment_begin:Pv,normal_fragment_maps:Dv,normal_pars_fragment:Lv,normal_pars_vertex:Uv,normal_vertex:Fv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:kv,opaque_fragment:Vv,packing:Gv,premultiplied_alpha_fragment:Hv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:qv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Kv,shadowmask_pars_fragment:$v,skinbase_vertex:Qv,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:sM,tonemapping_fragment:rM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:hM,uv_vertex:uM,worldpos_vertex:dM,background_vert:fM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:xM,cube_frag:yM,depth_vert:_M,depth_frag:vM,distanceRGBA_vert:MM,distanceRGBA_frag:bM,equirect_vert:SM,equirect_frag:wM,linedashed_vert:TM,linedashed_frag:EM,meshbasic_vert:AM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:IM,meshmatcap_vert:PM,meshmatcap_frag:DM,meshnormal_vert:LM,meshnormal_frag:UM,meshphong_vert:FM,meshphong_frag:NM,meshphysical_vert:OM,meshphysical_frag:BM,meshtoon_vert:zM,meshtoon_frag:kM,points_vert:VM,points_frag:GM,shadow_vert:HM,shadow_frag:WM,sprite_vert:XM,sprite_frag:qM},Re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ji={basic:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Dn([Re.points,Re.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Dn([Re.common,Re.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Dn([Re.sprite,Re.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Dn([Re.common,Re.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Dn([Re.lights,Re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ji.physical={uniforms:Dn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Eh={r:0,b:0,g:0},yr=new sn,YM=new Mt;function ZM(n,e,t,i,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,T=p(M);T===null?m(a,l):T&&T.isColor&&(m(T,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let T=p(y);T&&(T.isCubeTexture||T.mapping===Ha)?(h===void 0&&(h=new de(new Ze(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:xr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yr.copy(y.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(yr)),h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ot,(u!==T||d!==T.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new de(new Sn(2,2),new Pi({name:"BackgroundMaterial",uniforms:xr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ot,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(Eh,Ed(n)),i.buffers.color.setClear(Eh.r,Eh.g,Eh.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g,dispose:_}}function jM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,R,L,O,z){let X=!1,W=u(O,L,R);r!==W&&(r=W,c(r.object)),X=f(v,O,L,z),X&&p(v,O,L,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(v,R,L,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,R,L){let O=L.wireframe===!0,z=i[v.id];z===void 0&&(z={},i[v.id]=z);let X=z[R.id];X===void 0&&(X={},z[R.id]=X);let W=X[O];return W===void 0&&(W=d(l()),X[O]=W),W}function d(v){let R=[],L=[],O=[];for(let z=0;z<t;z++)R[z]=0,L[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,R,L,O){let z=r.attributes,X=R.attributes,W=0,te=L.getAttributes();for(let V in te)if(te[V].location>=0){let xe=z[V],ye=X[V];if(ye===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor)),xe===void 0||xe.attribute!==ye||ye&&xe.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function p(v,R,L,O){let z={},X=R.attributes,W=0,te=L.getAttributes();for(let V in te)if(te[V].location>=0){let xe=X[V];xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));let ye={};ye.attribute=xe,xe&&xe.data&&(ye.data=xe.data),z[V]=ye,W++}r.attributes=z,r.attributesNum=W,r.index=O}function x(){let v=r.newAttributes;for(let R=0,L=v.length;R<L;R++)v[R]=0}function g(v){m(v,0)}function m(v,R){let L=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;L[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),z[v]!==R&&(n.vertexAttribDivisor(v,R),z[v]=R)}function _(){let v=r.newAttributes,R=r.enabledAttributes;for(let L=0,O=R.length;L<O;L++)R[L]!==v[L]&&(n.disableVertexAttribArray(L),R[L]=0)}function M(v,R,L,O,z,X,W){W===!0?n.vertexAttribIPointer(v,R,L,z,X):n.vertexAttribPointer(v,R,L,O,z,X)}function y(v,R,L,O){x();let z=O.attributes,X=L.getAttributes(),W=R.defaultAttributeValues;for(let te in X){let V=X[te];if(V.location>=0){let oe=z[te];if(oe===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){let xe=oe.normalized,ye=oe.itemSize,Ne=e.get(oe);if(Ne===void 0)continue;let We=Ne.buffer,ct=Ne.type,it=Ne.bytesPerElement,ie=ct===n.INT||ct===n.UNSIGNED_INT||oe.gpuType===Wc;if(oe.isInterleavedBufferAttribute){let k=oe.data,ce=k.stride,ue=oe.offset;if(k.isInstancedInterleavedBuffer){for(let N=0;N<V.locationSize;N++)m(V.location+N,k.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let N=0;N<V.locationSize;N++)g(V.location+N);n.bindBuffer(n.ARRAY_BUFFER,We);for(let N=0;N<V.locationSize;N++)M(V.location+N,ye/V.locationSize,ct,xe,ce*it,(ue+ye/V.locationSize*N)*it,ie)}else{if(oe.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)m(V.location+k,oe.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let k=0;k<V.locationSize;k++)g(V.location+k);n.bindBuffer(n.ARRAY_BUFFER,We);for(let k=0;k<V.locationSize;k++)M(V.location+k,ye/V.locationSize,ct,xe,ye*it,ye/V.locationSize*k*it,ie)}}else if(W!==void 0){let xe=W[te];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}_()}function T(){C();for(let v in i){let R=i[v];for(let L in R){let O=R[L];for(let z in O)h(O[z].object),delete O[z];delete R[L]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let L in R){let O=R[L];for(let z in O)h(O[z].object),delete O[z];delete R[L]}delete i[v.id]}function I(v){for(let R in i){let L=i[R];if(L[v.id]===void 0)continue;let O=L[v.id];for(let z in O)h(O[z].object),delete O[z];delete L[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function JM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==zn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let C=I===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ui&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fi&&!C)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function $M(n){let e=this,t=null,i=0,s=!1,r=!1,o=new An,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,M=_*4,y=m.clippingState||null;l.value=y,y=h(p,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function QM(n){let e=new WeakMap;function t(o,a){return a===Li?o.mapping=mr:a===Gc&&(o.mapping=gr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Li||a===Gc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Co=4,Gm=[.125,.215,.35,.446,.526,.582],Mr=20,Pd=new ka,Hm=new He,Dd=null,Ld=0,Ud=0,Fd=!1,vr=(1+Math.sqrt(5))/2,Ao=1/vr,Wm=[new b(-vr,Ao,0),new b(vr,Ao,0),new b(-Ao,0,vr),new b(Ao,0,vr),new b(0,vr,-Ao),new b(0,vr,Ao),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],eb=new b,Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=eb}=r;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ld,Ud),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Ah(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:wo,format:zn,colorSpace:nr,depthBuffer:!1},s=Xm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(r)),this._blurMaterial=nb(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Pd)}_sceneToCubeUV(e,t,i,s,r){let l=new En(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hm),u.toneMapping=cs,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new an({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new de(new Ze,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(Hm),m=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let T=this._cubeSize;Ah(s,y*T,M>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ah(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wm[(s-r-1)%Wm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mr-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Mr;g>Mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);let m=[],_=0;for(let I=0;I<Mr;++I){let C=I/x,S=Math.exp(-C*C/2);m.push(S),I===0?_+=S:I<g&&(_+=2*S)}for(let I=0;I<m.length;I++)m[I]=m[I]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;let y=this._sizeLods[s],T=3*y*(s>M-Co?s-M+Co:0),E=4*(this._cubeSize-y);Ah(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Pd)}};function tb(n){let e=[],t=[],i=[],s=n,r=n-Co+1+Gm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Co?l=Gm[o-n+Co-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),M=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let E=0;E<f;E++){let I=E%3*2/3-1,C=E>2?0:-1,S=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];_.set(S,x*p*E),M.set(d,g*p*E);let v=[E,E,E,E,E,E];y.set(v,m*p*E)}let T=new mt;T.setAttribute("position",new Bt(_,x)),T.setAttribute("uv",new Bt(M,g)),T.setAttribute("faceIndex",new Bt(y,m)),e.push(T),s>Co&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xm(n,e,t){let i=new Yi(n,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ah(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nb(n,e,t){let i=new Float32Array(Mr),s=new b(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function qm(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Ym(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function ib(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Li||l===Gc,h=l===mr||l===gr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Io(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Io(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rb(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let M=0,y=_.length;M<y;M+=3){let T=_[M+0],E=_[M+1],I=_[M+2];d.push(T,E,E,I,I,T)}}else if(p!==void 0){let _=p.array;x=p.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let T=M+0,E=M+1,I=M+2;d.push(T,E,E,I,I,T)}}else return;let g=new(Td(d)?_a:ya)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ob(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ab(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lb(n,e,t){let i=new WeakMap,s=new Jt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),I=new xa(E,y,T,u);I.type=Fi,I.needsUpdate=!0;let C=M*4;for(let v=0;v<u;v++){let R=g[v],L=m[v],O=_[v],z=y*T*4*v;for(let X=0;X<R.count;X++){let W=X*C;f===!0&&(s.fromBufferAttribute(R,X),E[z+W+0]=s.x,E[z+W+1]=s.y,E[z+W+2]=s.z,E[z+W+3]=0),p===!0&&(s.fromBufferAttribute(L,X),E[z+W+4]=s.x,E[z+W+5]=s.y,E[z+W+6]=s.z,E[z+W+7]=0),x===!0&&(s.fromBufferAttribute(O,X),E[z+W+8]=s.x,E[z+W+9]=s.y,E[z+W+10]=s.z,E[z+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ae(y,T)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function cb(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dg=new Rn,Zm=new Ta(1,1),fg=new xa,pg=new uc,mg=new Ma,jm=[],Jm=[],Km=new Float32Array(16),$m=new Float32Array(9),Qm=new Float32Array(4);function Po(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jm[s];if(r===void 0&&(r=new Float32Array(s),jm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ih(n,e){let t=Jm[e];t===void 0&&(t=new Int32Array(e),Jm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function fb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function pb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;Qm.set(i),n.uniformMatrix2fv(this.addr,!1,Qm),gn(t,i)}}function mb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;$m.set(i),n.uniformMatrix3fv(this.addr,!1,$m),gn(t,i)}}function gb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;Km.set(i),n.uniformMatrix4fv(this.addr,!1,Km),gn(t,i)}}function xb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function _b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function Mb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function Sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function wb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function Tb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zm.compareFunction=bd,r=Zm):r=dg,t.setTexture2D(e||r,s)}function Eb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pg,s)}function Ab(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mg,s)}function Cb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fg,s)}function Rb(n){switch(n){case 5126:return hb;case 35664:return ub;case 35665:return db;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return Mb;case 36294:return bb;case 36295:return Sb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Cb}}function Ib(n,e){n.uniform1fv(this.addr,e)}function Pb(n,e){let t=Po(e,this.size,2);n.uniform2fv(this.addr,t)}function Db(n,e){let t=Po(e,this.size,3);n.uniform3fv(this.addr,t)}function Lb(n,e){let t=Po(e,this.size,4);n.uniform4fv(this.addr,t)}function Ub(n,e){let t=Po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fb(n,e){let t=Po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nb(n,e){let t=Po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ob(n,e){n.uniform1iv(this.addr,e)}function Bb(n,e){n.uniform2iv(this.addr,e)}function zb(n,e){n.uniform3iv(this.addr,e)}function kb(n,e){n.uniform4iv(this.addr,e)}function Vb(n,e){n.uniform1uiv(this.addr,e)}function Gb(n,e){n.uniform2uiv(this.addr,e)}function Hb(n,e){n.uniform3uiv(this.addr,e)}function Wb(n,e){n.uniform4uiv(this.addr,e)}function Xb(n,e,t){let i=this.cache,s=e.length,r=Ih(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dg,r[o])}function qb(n,e,t){let i=this.cache,s=e.length,r=Ih(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pg,r[o])}function Yb(n,e,t){let i=this.cache,s=e.length,r=Ih(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mg,r[o])}function Zb(n,e,t){let i=this.cache,s=e.length,r=Ih(t,s);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fg,r[o])}function jb(n){switch(n){case 5126:return Ib;case 35664:return Pb;case 35665:return Db;case 35666:return Lb;case 35674:return Ub;case 35675:return Fb;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Bb;case 35668:case 35672:return zb;case 35669:case 35673:return kb;case 5125:return Vb;case 36294:return Gb;case 36295:return Hb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Zb}}var Od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}},Bd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jb(t.type)}},zd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Nd=/(\w+)(\])?(\[|\.)?/g;function eg(n,e){n.seq.push(e),n.map[e.id]=e}function Jb(n,e,t){let i=n.name,s=i.length;for(Nd.lastIndex=0;;){let r=Nd.exec(i),o=Nd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eg(t,c===void 0?new Od(a,n,e):new Bd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new zd(a),eg(t,u)),t=u}}}var Ro=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function tg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Kb=37297,$b=0;function Qb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ng=new ht;function eS(n){Ct._getMatrix(ng,Ct.workingColorSpace,n);let e=`mat3( ${ng.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ig(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Qb(n.getShaderSource(e),a)}else return r}function tS(n,e){let t=eS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nS(n,e){let t;switch(e){case pm:t="Linear";break;case mm:t="Reinhard";break;case gm:t="Cineon";break;case xm:t="ACESFilmic";break;case _m:t="AgX";break;case vm:t="Neutral";break;case ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ch=new b;function iS(){Ct.getLuminanceCoefficients(Ch);let n=Ch.x.toFixed(4),e=Ch.y.toFixed(4),t=Ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function rS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ja(n){return n!==""}function sg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(n){return n.replace(aS,cS)}var lS=new Map;function cS(n,e){let t=dt[e];if(t===void 0){let i=lS.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}var hS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(n){return n.replace(hS,uS)}function uS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ag(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function dS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function fS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function mS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case fm:e="ENVMAP_BLENDING_ADD";break}return e}function gS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=dS(t),c=fS(t),h=pS(t),u=mS(t),d=gS(t),f=sS(t),p=rS(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(g=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?dt.tonemapping_pars_fragment:"",t.toneMapping!==cs?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,tS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=kd(o),o=sg(o,t),o=rg(o,t),a=kd(a),a=sg(a,t),a=rg(a,t),o=og(o),a=og(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+o,y=_+m+a,T=tg(s,s.VERTEX_SHADER,M),E=tg(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(E)||"",X=L.trim(),W=O.trim(),te=z.trim(),V=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let xe=ig(s,T,"vertex"),ye=ig(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+xe+`
`+ye)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||te==="")&&(oe=!1);oe&&(R.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(T),s.deleteShader(E),C=new Ro(s,x),S=oS(s,x)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Kb)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var yS=0,Vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gd(e),t.set(e,i)),i}},Gd=class{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}};function _S(n,e,t,i,s,r,o){let a=new co,l=new Vd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,R,L,O){let z=L.fog,X=O.geometry,W=S.isMeshStandardMaterial?L.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=te&&te.mapping===Ha?te.image.height:null,oe=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=xe!==void 0?xe.length:0,Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let We,ct,it,ie;if(oe){let At=ji[oe];We=At.vertexShader,ct=At.fragmentShader}else We=S.vertexShader,ct=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);let k=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),ue=O.isInstancedMesh===!0,N=O.isBatchedMesh===!0,Z=!!S.map,Ee=!!S.matcap,D=!!te,re=!!S.aoMap,Q=!!S.lightMap,j=!!S.bumpMap,ee=!!S.normalMap,ge=!!S.displacementMap,fe=!!S.emissiveMap,Me=!!S.metalnessMap,Ke=!!S.roughnessMap,Xe=S.anisotropy>0,P=S.clearcoat>0,w=S.dispersion>0,q=S.iridescence>0,J=S.sheen>0,he=S.transmission>0,se=Xe&&!!S.anisotropyMap,ke=P&&!!S.clearcoatMap,be=P&&!!S.clearcoatNormalMap,Oe=P&&!!S.clearcoatRoughnessMap,De=q&&!!S.iridescenceMap,pe=q&&!!S.iridescenceThicknessMap,Ce=J&&!!S.sheenColorMap,Ye=J&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Ae=!!S.specularColorMap,je=!!S.specularIntensityMap,F=he&&!!S.transmissionMap,_e=he&&!!S.thicknessMap,Se=!!S.gradientMap,Ue=!!S.alphaMap,me=S.alphaTest>0,le=!!S.alphaHash,Pe=!!S.extensions,st=cs;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(st=n.toneMapping);let Gt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:ct,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:N,batchingColor:N&&O._colorsTexture!==null,instancing:ue,instancingColor:ue&&O.instanceColor!==null,instancingMorph:ue&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:Z,matcap:Ee,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:V,aoMap:re,lightMap:Q,bumpMap:j,normalMap:ee,displacementMap:d&&ge,emissiveMap:fe,normalMapObjectSpace:ee&&S.normalMapType===wm,normalMapTangentSpace:ee&&S.normalMapType===Th,metalnessMap:Me,roughnessMap:Ke,anisotropy:Xe,anisotropyMap:se,clearcoat:P,clearcoatMap:ke,clearcoatNormalMap:be,clearcoatRoughnessMap:Oe,dispersion:w,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:pe,sheen:J,sheenColorMap:Ce,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:Ae,specularIntensityMap:je,transmission:he,transmissionMap:F,thicknessMap:_e,gradientMap:Se,opaque:S.transparent===!1&&S.blending===er&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:me,alphaHash:le,combine:S.combine,mapUv:Z&&x(S.map.channel),aoMapUv:re&&x(S.aoMap.channel),lightMapUv:Q&&x(S.lightMap.channel),bumpMapUv:j&&x(S.bumpMap.channel),normalMapUv:ee&&x(S.normalMap.channel),displacementMapUv:ge&&x(S.displacementMap.channel),emissiveMapUv:fe&&x(S.emissiveMap.channel),metalnessMapUv:Me&&x(S.metalnessMap.channel),roughnessMapUv:Ke&&x(S.roughnessMap.channel),anisotropyMapUv:se&&x(S.anisotropyMap.channel),clearcoatMapUv:ke&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(S.sheenRoughnessMap.channel),specularMapUv:Be&&x(S.specularMap.channel),specularColorMapUv:Ae&&x(S.specularColorMap.channel),specularIntensityMapUv:je&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:_e&&x(S.thicknessMap.channel),alphaMapUv:Ue&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ee||Xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Z||Ue),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Z&&S.map.isVideoTexture===!0&&Ct.getTransfer(S.map.colorSpace)===Ot,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(S.emissiveMap.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||N)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(_(v,S),M(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function _(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let v=p[S.type],R;if(v){let L=ji[v];R=Fm.clone(L.uniforms)}else R=S.uniforms;return R}function T(S,v){let R;for(let L=0,O=h.length;L<O;L++){let z=h[L];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new xS(n,v,S,r),h.push(R)),R}function E(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:C}}function vS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function MS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||MS),i.length>1&&i.sort(d||lg),s.length>1&&s.sort(d||lg)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new cg,n.set(i,[o])):s>=r.length?(o=new cg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new He};break;case"SpotLight":t={position:new b,direction:new b,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function wS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TS=0;function ES(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AS(n){let e=new SS,t=wS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let s=new b,r=new Mt,o=new Mt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,M=0,y=0,T=0,E=0,I=0;c.sort(ES);for(let S=0,v=c.length;S<v;S++){let R=c[S],L=R.color,O=R.intensity,z=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*O,u+=L.g*O,d+=L.b*O;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],O);I++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,V=t.get(R);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=R.shadow.matrix,_++}i.directional[f]=W,f++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(O),W.distance=z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[x]=W;let te=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,te.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=te.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=X,y++}x++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(L).multiplyScalar(O),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=W,g++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let te=R.shadow,V=t.get(R);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=W,p++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(O),W.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[m]=W,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=I,i.version=TS++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let M=c[m];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function hg(n){let e=new AS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function CS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hg(n),e.set(s,[a])):r>=o.length?(a=new hg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`;function PS(n,e,t){let i=new mo,s=new ae,r=new ae,o=new Jt,a=new bc({depthPacking:Sm}),l=new Sc,c={},h=t.maxTextureSize,u={[ti]:Bn,[Bn]:ti,[un]:un},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:RS,fragmentShader:IS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new mt;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let m=this.type;this.render=function(E,I,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ls),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==Zi&&this.type===Zi,z=m===Zi&&this.type!==Zi;for(let X=0,W=E.length;X<W;X++){let te=E[X],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let oe=V.getFrameExtents();if(s.multiply(oe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||O===!0||z===!0){let ye=this.type!==Zi?{minFilter:Wn,magFilter:Wn}:{};V.map!==null&&V.map.dispose(),V.map=new Yi(s.x,s.y,ye),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let xe=V.getViewportCount();for(let ye=0;ye<xe;ye++){let Ne=V.getViewport(ye);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),L.viewport(o),V.updateMatrices(te,ye),i=V.getFrustum(),y(I,C,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Zi&&_(V,C),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,v,R)};function _(E,I){let C=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,C,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,C,f,x,null)}function M(E,I,C,S){let v=null,R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=v.uuid,O=I.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let X=z[O];X===void 0&&(X=v.clone(),z[O]=X,I.addEventListener("dispose",T)),v=X}if(v.visible=I.visible,v.wireframe=I.wireframe,S===Zi?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=n.properties.get(v);L.light=C}return v}function y(E,I,C,S,v){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Zi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let O=e.update(E),z=E.material;if(Array.isArray(z)){let X=O.groups;for(let W=0,te=X.length;W<te;W++){let V=X[W],oe=z[V.materialIndex];if(oe&&oe.visible){let xe=M(E,oe,S,v);E.onBeforeShadow(n,E,I,C,O,xe,V),n.renderBufferDirect(C,null,O,xe,E,V),E.onAfterShadow(n,E,I,C,O,xe,V)}}}else if(z.visible){let X=M(E,z,S,v);E.onBeforeShadow(n,E,I,C,O,X,null),n.renderBufferDirect(C,null,O,X,E,null),E.onAfterShadow(n,E,I,C,O,X,null)}}let L=E.children;for(let O=0,z=L.length;O<z;O++)y(L[O],I,C,S,v)}function T(E){E.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var DS={[Uc]:Fc,[Nc]:zc,[Oc]:kc,[tr]:Bc,[Fc]:Uc,[zc]:Nc,[kc]:Oc,[Bc]:tr};function LS(n,e){function t(){let F=!1,_e=new Jt,Se=null,Ue=new Jt(0,0,0,0);return{setMask:function(me){Se!==me&&!F&&(n.colorMask(me,me,me,me),Se=me)},setLocked:function(me){F=me},setClear:function(me,le,Pe,st,Gt){Gt===!0&&(me*=st,le*=st,Pe*=st),_e.set(me,le,Pe,st),Ue.equals(_e)===!1&&(n.clearColor(me,le,Pe,st),Ue.copy(_e))},reset:function(){F=!1,Se=null,Ue.set(-1,0,0,0)}}}function i(){let F=!1,_e=!1,Se=null,Ue=null,me=null;return{setReversed:function(le){if(_e!==le){let Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),_e=le;let st=me;me=null,this.setClear(st)}},getReversed:function(){return _e},setTest:function(le){le?k(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(le){Se!==le&&!F&&(n.depthMask(le),Se=le)},setFunc:function(le){if(_e&&(le=DS[le]),Ue!==le){switch(le){case Uc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Oc:n.depthFunc(n.EQUAL);break;case Bc:n.depthFunc(n.GEQUAL);break;case zc:n.depthFunc(n.GREATER);break;case kc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=le}},setLocked:function(le){F=le},setClear:function(le){me!==le&&(_e&&(le=1-le),n.clearDepth(le),me=le)},reset:function(){F=!1,Se=null,Ue=null,me=null,_e=!1}}}function s(){let F=!1,_e=null,Se=null,Ue=null,me=null,le=null,Pe=null,st=null,Gt=null;return{setTest:function(At){F||(At?k(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(At){_e!==At&&!F&&(n.stencilMask(At),_e=At)},setFunc:function(At,Si,ci){(Se!==At||Ue!==Si||me!==ci)&&(n.stencilFunc(At,Si,ci),Se=At,Ue=Si,me=ci)},setOp:function(At,Si,ci){(le!==At||Pe!==Si||st!==ci)&&(n.stencilOp(At,Si,ci),le=At,Pe=Si,st=ci)},setLocked:function(At){F=At},setClear:function(At){Gt!==At&&(n.clearStencil(At),Gt=At)},reset:function(){F=!1,_e=null,Se=null,Ue=null,me=null,le=null,Pe=null,st=null,Gt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,T=null,E=null,I=new He(0,0,0),C=0,S=!1,v=null,R=null,L=null,O=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=te>=2);let oe=null,xe={},ye=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),We=new Jt().fromArray(ye),ct=new Jt().fromArray(Ne);function it(F,_e,Se,Ue){let me=new Uint8Array(4),le=n.createTexture();n.bindTexture(F,le),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Se;Pe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(_e+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return le}let ie={};ie[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(tr),j(!1),ee(hd),k(n.CULL_FACE),re(ls);function k(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ce(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ue(F,_e){return u[F]!==_e?(n.bindFramebuffer(F,_e),u[F]=_e,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function N(F,_e){let Se=f,Ue=!1;if(F){Se=d.get(_e),Se===void 0&&(Se=[],d.set(_e,Se));let me=F.textures;if(Se.length!==me.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Pe=me.length;le<Pe;le++)Se[le]=n.COLOR_ATTACHMENT0+le;Se.length=me.length,Ue=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Se)}function Z(F){return p!==F?(n.useProgram(F),p=F,!0):!1}let Ee={[Ss]:n.FUNC_ADD,[jp]:n.FUNC_SUBTRACT,[Jp]:n.FUNC_REVERSE_SUBTRACT};Ee[Kp]=n.MIN,Ee[$p]=n.MAX;let D={[Qp]:n.ZERO,[em]:n.ONE,[tm]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[am]:n.SRC_ALPHA_SATURATE,[rm]:n.DST_COLOR,[im]:n.DST_ALPHA,[nm]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[om]:n.ONE_MINUS_DST_COLOR,[sm]:n.ONE_MINUS_DST_ALPHA,[lm]:n.CONSTANT_COLOR,[cm]:n.ONE_MINUS_CONSTANT_COLOR,[hm]:n.CONSTANT_ALPHA,[um]:n.ONE_MINUS_CONSTANT_ALPHA};function re(F,_e,Se,Ue,me,le,Pe,st,Gt,At){if(F===ls){x===!0&&(ce(n.BLEND),x=!1);return}if(x===!1&&(k(n.BLEND),x=!0),F!==Zp){if(F!==g||At!==S){if((m!==Ss||y!==Ss)&&(n.blendEquation(n.FUNC_ADD),m=Ss,y=Ss),At)switch(F){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.ONE,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,M=null,T=null,E=null,I.set(0,0,0),C=0,g=F,S=At}return}me=me||_e,le=le||Se,Pe=Pe||Ue,(_e!==m||me!==y)&&(n.blendEquationSeparate(Ee[_e],Ee[me]),m=_e,y=me),(Se!==_||Ue!==M||le!==T||Pe!==E)&&(n.blendFuncSeparate(D[Se],D[Ue],D[le],D[Pe]),_=Se,M=Ue,T=le,E=Pe),(st.equals(I)===!1||Gt!==C)&&(n.blendColor(st.r,st.g,st.b,Gt),I.copy(st),C=Gt),g=F,S=!1}function Q(F,_e){F.side===un?ce(n.CULL_FACE):k(n.CULL_FACE);let Se=F.side===Bn;_e&&(Se=!Se),j(Se),F.blending===er&&F.transparent===!1?re(ls):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ue=F.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){v!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),v=F)}function ee(F){F!==Xp?(k(n.CULL_FACE),F!==R&&(F===hd?n.cullFace(n.BACK):F===qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),R=F}function ge(F){F!==L&&(W&&n.lineWidth(F),L=F)}function fe(F,_e,Se){F?(k(n.POLYGON_OFFSET_FILL),(O!==_e||z!==Se)&&(n.polygonOffset(_e,Se),O=_e,z=Se)):ce(n.POLYGON_OFFSET_FILL)}function Me(F){F?k(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=n.TEXTURE0+X-1),oe!==F&&(n.activeTexture(F),oe=F)}function Xe(F,_e,Se){Se===void 0&&(oe===null?Se=n.TEXTURE0+X-1:Se=oe);let Ue=xe[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[Se]=Ue),(Ue.type!==F||Ue.texture!==_e)&&(oe!==Se&&(n.activeTexture(Se),oe=Se),n.bindTexture(F,_e||ie[F]),Ue.type=F,Ue.texture=_e)}function P(){let F=xe[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){We.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),We.copy(F))}function Ye(F){ct.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ct.copy(F))}function Be(F,_e){let Se=c.get(_e);Se===void 0&&(Se=new WeakMap,c.set(_e,Se));let Ue=Se.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(_e,F.name),Se.set(F,Ue))}function Ae(F,_e){let Ue=c.get(_e).get(F);l.get(_e)!==Ue&&(n.uniformBlockBinding(_e,Ue,F.__bindingPointIndex),l.set(_e,Ue))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,xe={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,T=null,E=null,I=new He(0,0,0),C=0,S=!1,v=null,R=null,L=null,O=null,z=null,We.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:ce,bindFramebuffer:ue,drawBuffers:N,useProgram:Z,setBlending:re,setMaterial:Q,setFlipSided:j,setCullFace:ee,setLineWidth:ge,setPolygonOffset:fe,setScissorTest:Me,activeTexture:Ke,bindTexture:Xe,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:De,texImage3D:pe,updateUBOMapping:Be,uniformBlockBinding:Ae,texStorage2D:be,texStorage3D:Oe,texSubImage2D:J,texSubImage3D:he,compressedTexSubImage2D:se,compressedTexSubImage3D:ke,scissor:Ce,viewport:Ye,reset:je}}function US(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return f?new OffscreenCanvas(P,w):oo("canvas")}function x(P,w,q){let J=1,he=Xe(P);if((he.width>q||he.height>q)&&(J=q/Math.max(he.width,he.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(J*he.width),ke=Math.floor(J*he.height);u===void 0&&(u=p(se,ke));let be=w?p(se,ke):u;return be.width=se,be.height=ke,be.getContext("2d").drawImage(P,0,0,se,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+ke+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,w,q,J,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=w;if(w===n.RED&&(q===n.FLOAT&&(se=n.R32F),q===n.HALF_FLOAT&&(se=n.R16F),q===n.UNSIGNED_BYTE&&(se=n.R8)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.R8UI),q===n.UNSIGNED_SHORT&&(se=n.R16UI),q===n.UNSIGNED_INT&&(se=n.R32UI),q===n.BYTE&&(se=n.R8I),q===n.SHORT&&(se=n.R16I),q===n.INT&&(se=n.R32I)),w===n.RG&&(q===n.FLOAT&&(se=n.RG32F),q===n.HALF_FLOAT&&(se=n.RG16F),q===n.UNSIGNED_BYTE&&(se=n.RG8)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RG8UI),q===n.UNSIGNED_SHORT&&(se=n.RG16UI),q===n.UNSIGNED_INT&&(se=n.RG32UI),q===n.BYTE&&(se=n.RG8I),q===n.SHORT&&(se=n.RG16I),q===n.INT&&(se=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RGB8UI),q===n.UNSIGNED_SHORT&&(se=n.RGB16UI),q===n.UNSIGNED_INT&&(se=n.RGB32UI),q===n.BYTE&&(se=n.RGB8I),q===n.SHORT&&(se=n.RGB16I),q===n.INT&&(se=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),q===n.UNSIGNED_INT&&(se=n.RGBA32UI),q===n.BYTE&&(se=n.RGBA8I),q===n.SHORT&&(se=n.RGBA16I),q===n.INT&&(se=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),w===n.RGBA){let ke=he?ma:Ct.getTransfer(J);q===n.FLOAT&&(se=n.RGBA32F),q===n.HALF_FLOAT&&(se=n.RGBA16F),q===n.UNSIGNED_BYTE&&(se=ke===Ot?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(P,w){let q;return P?w===null||w===Ps||w===To?q=n.DEPTH24_STENCIL8:w===Fi?q=n.DEPTH32F_STENCIL8:w===So&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ps||w===To?q=n.DEPTH_COMPONENT24:w===Fi?q=n.DEPTH_COMPONENT32F:w===So&&(q=n.DEPTH_COMPONENT16),q}function T(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==hn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){let w=P.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function I(P){let w=P.target;w.removeEventListener("dispose",I),v(w)}function C(P){let w=i.get(P);if(w.__webglInit===void 0)return;let q=P.source,J=d.get(q);if(J){let he=J[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(P),Object.keys(J).length===0&&d.delete(q)}i.remove(P)}function S(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let q=P.source,J=d.get(q);delete J[w.__cacheKey],o.memory.textures--}function v(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let he=0;he<w.__webglFramebuffer[J].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[J][he]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=P.textures;for(let J=0,he=q.length;J<he;J++){let se=i.get(q[J]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(q[J])}i.remove(P)}let R=0;function L(){R=0}function O(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function X(P,w){let q=i.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,P,w);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function W(P,w){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ie(q,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function te(P,w){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ie(q,P,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function V(P,w){let q=i.get(P);if(P.version>0&&q.__version!==P.version){k(q,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}let oe={[Cn]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[oc]:n.MIRRORED_REPEAT},xe={[Wn]:n.NEAREST,[Mm]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Hc]:n.LINEAR_MIPMAP_NEAREST,[Pn]:n.LINEAR_MIPMAP_LINEAR},ye={[Tm]:n.NEVER,[Pm]:n.ALWAYS,[Em]:n.LESS,[bd]:n.LEQUAL,[Am]:n.EQUAL,[Im]:n.GEQUAL,[Cm]:n.GREATER,[Rm]:n.NOTEQUAL};function Ne(P,w){if(w.type===Fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hn||w.magFilter===Hc||w.magFilter===Wa||w.magFilter===Pn||w.minFilter===hn||w.minFilter===Hc||w.minFilter===Wa||w.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,oe[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,oe[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,oe[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xe[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xe[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wn||w.minFilter!==Wa&&w.minFilter!==Pn||w.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function We(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));let J=w.source,he=d.get(J);he===void 0&&(he={},d.set(J,he));let se=z(w);if(se!==P.__cacheKey){he[se]===void 0&&(he[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[se].usedTimes++;let ke=he[P.__cacheKey];ke!==void 0&&(he[P.__cacheKey].usedTimes--,ke.usedTimes===0&&S(w)),P.__cacheKey=se,P.__webglTexture=he[se].texture}return q}function ct(P,w,q){return Math.floor(Math.floor(P/q)/w)}function it(P,w,q,J){let se=P.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,J,w.data);else{se.sort((pe,Ce)=>pe.start-Ce.start);let ke=0;for(let pe=1;pe<se.length;pe++){let Ce=se[ke],Ye=se[pe],Be=Ce.start+Ce.count,Ae=ct(Ye.start,w.width,4),je=ct(Ce.start,w.width,4);Ye.start<=Be+1&&Ae===je&&ct(Ye.start+Ye.count-1,w.width,4)===Ae?Ce.count=Math.max(Ce.count,Ye.start+Ye.count-Ce.start):(++ke,se[ke]=Ye)}se.length=ke+1;let be=n.getParameter(n.UNPACK_ROW_LENGTH),Oe=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let pe=0,Ce=se.length;pe<Ce;pe++){let Ye=se[pe],Be=Math.floor(Ye.start/4),Ae=Math.ceil(Ye.count/4),je=Be%w.width,F=Math.floor(Be/w.width),_e=Ae,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,je,F,_e,Se,q,J,w.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function ie(P,w,q){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);let he=We(P,w),se=w.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+q);let ke=i.get(se);if(se.version!==ke.__version||he===!0){t.activeTexture(n.TEXTURE0+q);let be=Ct.getPrimaries(Ct.workingColorSpace),Oe=w.colorSpace===hs?null:Ct.getPrimaries(w.colorSpace),De=w.colorSpace===hs||be===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let pe=x(w.image,!1,s.maxTextureSize);pe=Ke(w,pe);let Ce=r.convert(w.format,w.colorSpace),Ye=r.convert(w.type),Be=M(w.internalFormat,Ce,Ye,w.colorSpace,w.isVideoTexture);Ne(J,w);let Ae,je=w.mipmaps,F=w.isVideoTexture!==!0,_e=ke.__version===void 0||he===!0,Se=se.dataReady,Ue=T(w,pe);if(w.isDepthTexture)Be=y(w.format===Eo,w.type),_e&&(F?t.texStorage2D(n.TEXTURE_2D,1,Be,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Be,pe.width,pe.height,0,Ce,Ye,null));else if(w.isDataTexture)if(je.length>0){F&&_e&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,je[0].width,je[0].height);for(let me=0,le=je.length;me<le;me++)Ae=je[me],F?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ce,Ye,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Be,Ae.width,Ae.height,0,Ce,Ye,Ae.data);w.generateMipmaps=!1}else F?(_e&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,pe.width,pe.height),Se&&it(w,pe,Ce,Ye)):t.texImage2D(n.TEXTURE_2D,0,Be,pe.width,pe.height,0,Ce,Ye,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,je[0].width,je[0].height,pe.depth);for(let me=0,le=je.length;me<le;me++)if(Ae=je[me],w.format!==zn)if(Ce!==null)if(F){if(Se)if(w.layerUpdates.size>0){let Pe=Id(Ae.width,Ae.height,w.format,w.type);for(let st of w.layerUpdates){let Gt=Ae.data.subarray(st*Pe/Ae.data.BYTES_PER_ELEMENT,(st+1)*Pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,st,Ae.width,Ae.height,1,Ce,Gt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,pe.depth,Ce,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Be,Ae.width,Ae.height,pe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,pe.depth,Ce,Ye,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Be,Ae.width,Ae.height,pe.depth,0,Ce,Ye,Ae.data)}else{F&&_e&&t.texStorage2D(n.TEXTURE_2D,Ue,Be,je[0].width,je[0].height);for(let me=0,le=je.length;me<le;me++)Ae=je[me],w.format!==zn?Ce!==null?F?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ce,Ye,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Be,Ae.width,Ae.height,0,Ce,Ye,Ae.data)}else if(w.isDataArrayTexture)if(F){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Be,pe.width,pe.height,pe.depth),Se)if(w.layerUpdates.size>0){let me=Id(pe.width,pe.height,w.format,w.type);for(let le of w.layerUpdates){let Pe=pe.data.subarray(le*me/pe.data.BYTES_PER_ELEMENT,(le+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,Ce,Ye,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ce,Ye,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,pe.width,pe.height,pe.depth,0,Ce,Ye,pe.data);else if(w.isData3DTexture)F?(_e&&t.texStorage3D(n.TEXTURE_3D,Ue,Be,pe.width,pe.height,pe.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ce,Ye,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,pe.width,pe.height,pe.depth,0,Ce,Ye,pe.data);else if(w.isFramebufferTexture){if(_e)if(F)t.texStorage2D(n.TEXTURE_2D,Ue,Be,pe.width,pe.height);else{let me=pe.width,le=pe.height;for(let Pe=0;Pe<Ue;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Be,me,le,0,Ce,Ye,null),me>>=1,le>>=1}}else if(je.length>0){if(F&&_e){let me=Xe(je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Be,me.width,me.height)}for(let me=0,le=je.length;me<le;me++)Ae=je[me],F?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce,Ye,Ae):t.texImage2D(n.TEXTURE_2D,me,Be,Ce,Ye,Ae);w.generateMipmaps=!1}else if(F){if(_e){let me=Xe(pe);t.texStorage2D(n.TEXTURE_2D,Ue,Be,me.width,me.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ye,pe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ce,Ye,pe);g(w)&&m(J),ke.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function k(P,w,q){if(w.image.length!==6)return;let J=We(P,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+q);let se=i.get(he);if(he.version!==se.__version||J===!0){t.activeTexture(n.TEXTURE0+q);let ke=Ct.getPrimaries(Ct.workingColorSpace),be=w.colorSpace===hs?null:Ct.getPrimaries(w.colorSpace),Oe=w.colorSpace===hs||ke===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let De=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let le=0;le<6;le++)!De&&!pe?Ce[le]=x(w.image[le],!0,s.maxCubemapSize):Ce[le]=pe?w.image[le].image:w.image[le],Ce[le]=Ke(w,Ce[le]);let Ye=Ce[0],Be=r.convert(w.format,w.colorSpace),Ae=r.convert(w.type),je=M(w.internalFormat,Be,Ae,w.colorSpace),F=w.isVideoTexture!==!0,_e=se.__version===void 0||J===!0,Se=he.dataReady,Ue=T(w,Ye);Ne(n.TEXTURE_CUBE_MAP,w);let me;if(De){F&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,Ye.width,Ye.height);for(let le=0;le<6;le++){me=Ce[le].mipmaps;for(let Pe=0;Pe<me.length;Pe++){let st=me[Pe];w.format!==zn?Be!==null?F?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,st.width,st.height,Be,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,je,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,st.width,st.height,Be,Ae,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,je,st.width,st.height,0,Be,Ae,st.data)}}}else{if(me=w.mipmaps,F&&_e){me.length>0&&Ue++;let le=Xe(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,le.width,le.height)}for(let le=0;le<6;le++)if(pe){F?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce[le].width,Ce[le].height,Be,Ae,Ce[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ce[le].width,Ce[le].height,0,Be,Ae,Ce[le].data);for(let Pe=0;Pe<me.length;Pe++){let Gt=me[Pe].image[le].image;F?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Gt.width,Gt.height,Be,Ae,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,je,Gt.width,Gt.height,0,Be,Ae,Gt.data)}}else{F?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,Ae,Ce[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Be,Ae,Ce[le]);for(let Pe=0;Pe<me.length;Pe++){let st=me[Pe];F?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Be,Ae,st.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,je,Be,Ae,st.image[le])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),se.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,q,J,he,se){let ke=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Oe=M(q.internalFormat,ke,be,q.colorSpace),De=i.get(w),pe=i.get(q);if(pe.__renderTarget=w,!De.__hasExternalTextures){let Ce=Math.max(1,w.width>>se),Ye=Math.max(1,w.height>>se);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Oe,Ce,Ye,w.depth,0,ke,be,null):t.texImage2D(he,se,Oe,Ce,Ye,0,ke,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),fe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,he,pe.__webglTexture,0,ge(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,he,pe.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(P,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let J=w.depthTexture,he=J&&J.isDepthTexture?J.type:null,se=y(w.stencilBuffer,he),ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=ge(w);fe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,se,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,se,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,P)}else{let J=w.textures;for(let he=0;he<J.length;he++){let se=J[he],ke=r.convert(se.format,se.colorSpace),be=r.convert(se.type),Oe=M(se.internalFormat,ke,be,se.colorSpace),De=ge(w);q&&fe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Oe,w.width,w.height):fe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let he=J.__webglTexture,se=ge(w);if(w.depthTexture.format===so)fe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(w.depthTexture.format===Eo)fe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Z(P){let w=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",he)};J.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let J=P.texture.mipmaps;J&&J.length>0?N(w.__webglFramebuffer[0],P):N(w.__webglFramebuffer,P)}else if(q){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=n.createRenderbuffer(),ue(w.__webglDepthbuffer[J],P,!1);else{let he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ue(w.__webglDepthbuffer,P,!1);else{let he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(P,w,q){let J=i.get(P);w!==void 0&&ce(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Z(P)}function D(P){let w=P.texture,q=i.get(P),J=i.get(w);P.addEventListener("dispose",I);let he=P.textures,se=P.isWebGLCubeRenderTarget===!0,ke=he.length>1;if(ke||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),se){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)q.__webglFramebuffer[be][Oe]=n.createFramebuffer()}else q.__webglFramebuffer[be]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)q.__webglFramebuffer[be]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(ke)for(let be=0,Oe=he.length;be<Oe;be++){let De=i.get(he[be]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&fe(P)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){let Oe=he[be];q.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let De=r.convert(Oe.format,Oe.colorSpace),pe=r.convert(Oe.type),Ce=M(Oe.internalFormat,De,pe,Oe.colorSpace,P.isXRRenderTarget===!0),Ye=ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ce,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,q.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ce(q.__webglFramebuffer[be][Oe],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe);else ce(q.__webglFramebuffer[be],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let be=0,Oe=he.length;be<Oe;be++){let De=he[be],pe=i.get(De),Ce=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),Ne(Ce,De),ce(q.__webglFramebuffer,P,De,n.COLOR_ATTACHMENT0+be,Ce,0),g(De)&&m(Ce)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,J.__webglTexture),Ne(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ce(q.__webglFramebuffer[Oe],P,w,n.COLOR_ATTACHMENT0,be,Oe);else ce(q.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,be,0);g(w)&&m(be),t.unbindTexture()}P.depthBuffer&&Z(P)}function re(P){let w=P.textures;for(let q=0,J=w.length;q<J;q++){let he=w[q];if(g(he)){let se=_(P),ke=i.get(he).__webglTexture;t.bindTexture(se,ke),m(se),t.unbindTexture()}}}let Q=[],j=[];function ee(P){if(P.samples>0){if(fe(P)===!1){let w=P.textures,q=P.width,J=P.height,he=n.COLOR_BUFFER_BIT,se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(P),be=w.length>1;if(be)for(let De=0;De<w.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);let Oe=P.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<w.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);let pe=i.get(w[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,he,n.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(n.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push(se),j.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let De=0;De<w.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);let pe=i.get(w[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ge(P){return Math.min(s.maxSamples,P.samples)}function fe(P){let w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Me(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Ke(P,w){let q=P.colorSpace,J=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==nr&&q!==hs&&(Ct.getTransfer(q)===Ot?(J!==zn||he!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=Ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=fe}function FS(n,e){function t(i,s=hs){let r,o=Ct.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===md)return n.BYTE;if(i===gd)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Wc)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===wo)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===zn)return n.RGBA;if(i===so)return n.DEPTH_COMPONENT;if(i===Eo)return n.DEPTH_STENCIL;if(i===Yc)return n.RED;if(i===Zc)return n.RED_INTEGER;if(i===Md)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===Jc)return n.RGBA_INTEGER;if(i===Xa||i===qa||i===Ya||i===Za)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===$c||i===Qc||i===eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===th||i===nh)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===_h||i===vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yh)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mh||i===bh||i===Sh||i===wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`,Hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pi({vertexShader:NS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wd=class extends qi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Hd,m={},_=t.getContextAttributes(),M=null,y=null,T=[],E=[],I=new ae,C=null,S=new En;S.viewport=new Jt;let v=new En;v.viewport=new Jt;let R=[S,v],L=new Lc,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let k=T[ie];return k===void 0&&(k=new ho,T[ie]=k),k.getTargetRaySpace()},this.getControllerGrip=function(ie){let k=T[ie];return k===void 0&&(k=new ho,T[ie]=k),k.getGripSpace()},this.getHand=function(ie){let k=T[ie];return k===void 0&&(k=new ho,T[ie]=k),k.getHandSpace()};function X(ie){let k=E.indexOf(ie.inputSource);if(k===-1)return;let ce=T[k];ce!==void 0&&(ce.update(ie.inputSource,ie.frame,c||o),ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let ie=0;ie<T.length;ie++){let k=E[ie];k!==null&&(E[ie]=null,T[ie].disconnect(k))}O=null,z=null,g.reset();for(let ie in m)delete m[ie];e.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ue=null,N=null;_.depth&&(N=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Eo:so,ue=_.stencil?To:Ps);let Z={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Yi(d.textureWidth,d.textureHeight,{format:zn,type:Ui,depthTexture:new Ta(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yi(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(ie){for(let k=0;k<ie.removed.length;k++){let ce=ie.removed[k],ue=E.indexOf(ce);ue>=0&&(E[ue]=null,T[ue].disconnect(ce))}for(let k=0;k<ie.added.length;k++){let ce=ie.added[k],ue=E.indexOf(ce);if(ue===-1){for(let Z=0;Z<T.length;Z++)if(Z>=E.length){E.push(ce),ue=Z;break}else if(E[Z]===null){E[Z]=ce,ue=Z;break}if(ue===-1)break}let N=T[ue];N&&N.connect(ce)}}let V=new b,oe=new b;function xe(ie,k,ce){V.setFromMatrixPosition(k.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);let ue=V.distanceTo(oe),N=k.projectionMatrix.elements,Z=ce.projectionMatrix.elements,Ee=N[14]/(N[10]-1),D=N[14]/(N[10]+1),re=(N[9]+1)/N[5],Q=(N[9]-1)/N[5],j=(N[8]-1)/N[0],ee=(Z[8]+1)/Z[0],ge=Ee*j,fe=Ee*ee,Me=ue/(-j+ee),Ke=Me*-j;if(k.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ke),ie.translateZ(Me),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),N[10]===-1)ie.projectionMatrix.copy(k.projectionMatrix),ie.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Xe=Ee+Me,P=D+Me,w=ge-Ke,q=fe+(ue-Ke),J=re*D/P*Xe,he=Q*D/P*Xe;ie.projectionMatrix.makePerspective(w,q,J,he,Xe,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ye(ie,k){k===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(k.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let k=ie.near,ce=ie.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),L.near=v.near=S.near=k,L.far=v.far=S.far=ce,(O!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,z=L.far),L.layers.mask=ie.layers.mask|6,S.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;let ue=ie.parent,N=L.cameras;ye(L,ue);for(let Z=0;Z<N.length;Z++)ye(N[Z],ue);N.length===2?xe(L,S,v):L.projectionMatrix.copy(S.projectionMatrix),Ne(ie,L,ue)};function Ne(ie,k,ce){ce===null?ie.matrix.copy(k.matrixWorld):(ie.matrix.copy(ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(k.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(k.projectionMatrix),ie.projectionMatrixInverse.copy(k.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ro*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(ie){return m[ie]};let We=null;function ct(ie,k){if(h=k.getViewerPose(c||o),p=k,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,ue=!0);for(let D=0;D<ce.length;D++){let re=ce[D],Q=null;if(f!==null)Q=f.getViewport(re);else{let ee=u.getViewSubImage(d,re);Q=ee.viewport,D===0&&(e.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(y))}let j=R[D];j===void 0&&(j=new En,j.layers.enable(D),j.viewport=new Jt,R[D]=j),j.matrix.fromArray(re.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(re.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ue===!0&&L.cameras.push(j)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(N&&N.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<ce.length;D++){let re=ce[D].camera;if(re){let Q=m[re];Q||(Q=new Ea,m[re]=Q);let j=u.getCameraImage(re);Q.sourceTexture=j}}}}for(let ce=0;ce<T.length;ce++){let ue=E[ce],N=T[ce];ue!==null&&N!==void 0&&N.update(ue,k,c||o)}We&&We(ie,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}let it=new ug;it.setAnimationLoop(ct),this.setAnimationLoop=function(ie){We=ie},this.dispose=function(){}}},_r=new sn,BS=new Mt;function zS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ed(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),M=_.envMap,y=_.envMapRotation;M&&(g.envMap.value=M,_r.copy(y),_r.x*=-1,_r.y*=-1,_r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(_r)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let y=M.program;i.uniformBlockBinding(_,y)}function c(_,M){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let T=M.program;i.updateUBOMapping(_,T);let E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let M=u();_.__bindingPointIndex=M;let y=n.createBuffer(),T=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=s[_.id],y=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,I=y.length;E<I;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,v=C.length;S<v;S++){let R=C[S];if(f(R,E,S,T)===!0){let L=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],z=0;for(let X=0;X<O.length;X++){let W=O[X],te=x(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,L+z,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,z),z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,M,y,T){let E=_.value,I=M+"_"+y;if(T[I]===void 0)return typeof E=="number"||typeof E=="boolean"?T[I]=E:T[I]=E.clone(),!0;{let C=T[I];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[I]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(_){let M=_.uniforms,y=0,T=16;for(let I=0,C=M.length;I<C;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let v=0,R=S.length;v<R;v++){let L=S[v],O=Array.isArray(L.value)?L.value:[L.value];for(let z=0,X=O.length;z<X;z++){let W=O[z],te=x(W),V=y%T,oe=V%te.boundary,xe=V+oe;y+=oe,xe!==0&&T-xe<te.storage&&(y+=T-xe),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=te.storage}}}let E=y%T;return E>0&&(y+=T-E),_.__size=y,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Rh=class{constructor(e={}){let{canvas:t=Dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=vt;let E=0,I=0,C=null,S=-1,v=null,R=new Jt,L=new Jt,O=null,z=new He(0),X=0,W=t.width,te=t.height,V=1,oe=null,xe=null,ye=new Jt(0,0,W,te),Ne=new Jt(0,0,W,te),We=!1,ct=new mo,it=!1,ie=!1,k=new Mt,ce=new b,ue=new Jt,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function Ee(){return C===null?V:1}let D=i;function re(A,B){return t.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){let B="webgl2";if(D=re(B,A),D===null)throw re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,j,ee,ge,fe,Me,Ke,Xe,P,w,q,J,he,se,ke,be,Oe,De,pe,Ce,Ye,Be,Ae,je;function F(){Q=new sb(D),Q.init(),Be=new FS(D,Q),j=new KM(D,Q,e,Be),ee=new LS(D,Q),j.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),ge=new ab(D),fe=new vS,Me=new US(D,Q,ee,fe,j,Be,ge),Ke=new QM(y),Xe=new ib(y),P=new f_(D),Ae=new jM(D,P),w=new rb(D,P,ge,Ae),q=new cb(D,w,P,ge),pe=new lb(D,j,Me),be=new $M(fe),J=new _S(y,Ke,Xe,Q,j,Ae,be),he=new zS(y,fe),se=new bS,ke=new CS(Q),De=new ZM(y,Ke,Xe,ee,q,f,l),Oe=new PS(y,q,j),je=new kS(D,ge,j,ee),Ce=new JM(D,Q,ge),Ye=new ob(D,Q,ge),ge.programs=J.programs,y.capabilities=j,y.extensions=Q,y.properties=fe,y.renderLists=se,y.shadowMap=Oe,y.state=ee,y.info=ge}F();let _e=new Wd(y,D);this.xr=_e,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(W,te,!1))},this.getSize=function(A){return A.set(W,te)},this.setSize=function(A,B,Y=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,te=B,t.width=Math.floor(A*V),t.height=Math.floor(B*V),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(W*V,te*V).floor()},this.setDrawingBufferSize=function(A,B,Y){W=A,te=B,V=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,B,Y,K){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,B,Y,K),ee.viewport(R.copy(ye).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,B,Y,K){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,B,Y,K),ee.scissor(L.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){ee.setScissorTest(We=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Y=!0){let K=0;if(A){let H=!1;if(C!==null){let ve=C.texture.format;H=ve===Jc||ve===jc||ve===Zc}if(H){let ve=C.texture.type,Ie=ve===Ui||ve===Ps||ve===So||ve===To||ve===Xc||ve===qc,Ge=De.getClearColor(),Fe=De.getClearAlpha(),Qe=Ge.r,ot=Ge.g,qe=Ge.b;Ie?(p[0]=Qe,p[1]=ot,p[2]=qe,p[3]=Fe,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Qe,x[1]=ot,x[2]=qe,x[3]=Fe,D.clearBufferiv(D.COLOR,0,x))}else K|=D.COLOR_BUFFER_BIT}B&&(K|=D.DEPTH_BUFFER_BIT),Y&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",me,!1),De.dispose(),se.dispose(),ke.dispose(),fe.dispose(),Ke.dispose(),Xe.dispose(),q.dispose(),Ae.dispose(),je.dispose(),J.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ci),_e.removeEventListener("sessionend",$),G.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=ge.autoReset,B=Oe.enabled,Y=Oe.autoUpdate,K=Oe.needsUpdate,H=Oe.type;F(),ge.autoReset=A,Oe.enabled=B,Oe.autoUpdate=Y,Oe.needsUpdate=K,Oe.type=H}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){let B=A.target;B.removeEventListener("dispose",le),Pe(B)}function Pe(A){st(A),fe.remove(A)}function st(A){let B=fe.get(A).programs;B!==void 0&&(B.forEach(function(Y){J.releaseProgram(Y)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,K,H,ve){B===null&&(B=N);let Ie=H.isMesh&&H.matrixWorld.determinant()<0,Ge=Qt(A,B,Y,K,H);ee.setMaterial(K,Ie);let Fe=Y.index,Qe=1;if(K.wireframe===!0){if(Fe=w.getWireframeAttribute(Y),Fe===void 0)return;Qe=2}let ot=Y.drawRange,qe=Y.attributes.position,_t=ot.start*Qe,Ht=(ot.start+ot.count)*Qe;ve!==null&&(_t=Math.max(_t,ve.start*Qe),Ht=Math.min(Ht,(ve.start+ve.count)*Qe)),Fe!==null?(_t=Math.max(_t,0),Ht=Math.min(Ht,Fe.count)):qe!=null&&(_t=Math.max(_t,0),Ht=Math.min(Ht,qe.count));let on=Ht-_t;if(on<0||on===1/0)return;Ae.setup(H,K,Ge,Y,Fe);let Zt,qt=Ce;if(Fe!==null&&(Zt=P.get(Fe),qt=Ye,qt.setIndex(Zt)),H.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*Ee()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(H.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),ee.setLineWidth(Je*Ee()),H.isLineSegments?qt.setMode(D.LINES):H.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else H.isPoints?qt.setMode(D.POINTS):H.isSprite&&qt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))qt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Je=H._multiDrawStarts,en=H._multiDrawCounts,It=H._multiDrawCount,Kn=Fe?P.get(Fe).bytesPerElement:1,Fr=fe.get(K).currentProgram.getUniforms();for(let $n=0;$n<It;$n++)Fr.setValue(D,"_gl_DrawID",$n),qt.render(Je[$n]/Kn,en[$n])}else if(H.isInstancedMesh)qt.renderInstances(_t,on,H.count);else if(Y.isInstancedBufferGeometry){let Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,en=Math.min(Y.instanceCount,Je);qt.renderInstances(_t,on,en)}else qt.render(_t,on)};function Gt(A,B,Y){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,tt(A,B,Y),A.side=ti,A.needsUpdate=!0,tt(A,B,Y),A.side=un):tt(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),m=ke.get(Y),m.init(B),M.push(m),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==Y&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let K=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ve=H.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){let Ge=ve[Ie];Gt(Ge,Y,H),K.add(Ge)}else Gt(ve,Y,H),K.add(ve)}),m=M.pop(),K},this.compileAsync=function(A,B,Y=null){let K=this.compile(A,B,Y);return new Promise(H=>{function ve(){if(K.forEach(function(Ie){fe.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){H(A);return}setTimeout(ve,10)}Q.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let At=null;function Si(A){At&&At(A)}function ci(){G.stop()}function $(){G.start()}let G=new ug;G.setAnimationLoop(Si),typeof self<"u"&&G.setContext(self),this.setAnimationLoop=function(A){At=A,_e.setAnimationLoop(A),A===null?G.stop():G.start()},_e.addEventListener("sessionstart",ci),_e.addEventListener("sessionend",$),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,C),m=ke.get(A,M.length),m.init(B),M.push(m),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ct.setFromProjectionMatrix(k,Ri,B.reversedDepth),ie=this.localClippingEnabled,it=be.init(this.clippingPlanes,ie),g=se.get(A,_.length),g.init(),_.push(g),_e.enabled===!0&&_e.isPresenting===!0){let ve=y.xr.getDepthSensingMesh();ve!==null&&we(ve,B,-1/0,y.sortObjects)}we(A,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(oe,xe),Z=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Z&&De.addToRenderList(g,A),this.info.render.frame++,it===!0&&be.beginShadows();let Y=m.state.shadowsArray;Oe.render(Y,A,B),it===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,H=g.transmissive;if(m.setupLights(),B.isArrayCamera){let ve=B.cameras;if(H.length>0)for(let Ie=0,Ge=ve.length;Ie<Ge;Ie++){let Fe=ve[Ie];Le(K,H,A,Fe)}Z&&De.render(A);for(let Ie=0,Ge=ve.length;Ie<Ge;Ie++){let Fe=ve[Ie];Ve(g,A,Fe,Fe.viewport)}}else H.length>0&&Le(K,H,A,B),Z&&De.render(A),Ve(g,A,B);C!==null&&I===0&&(Me.updateMultisampleRenderTarget(C),Me.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,B),Ae.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(m=M[M.length-1],it===!0&&be.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function we(A,B,Y,K){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ct.intersectsSprite(A)){K&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(k);let Ie=q.update(A),Ge=A.material;Ge.visible&&g.push(A,Ie,Ge,Y,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ct.intersectsObject(A))){let Ie=q.update(A),Ge=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ue.copy(Ie.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(k)),Array.isArray(Ge)){let Fe=Ie.groups;for(let Qe=0,ot=Fe.length;Qe<ot;Qe++){let qe=Fe[Qe],_t=Ge[qe.materialIndex];_t&&_t.visible&&g.push(A,Ie,_t,Y,ue.z,qe)}}else Ge.visible&&g.push(A,Ie,Ge,Y,ue.z,null)}}let ve=A.children;for(let Ie=0,Ge=ve.length;Ie<Ge;Ie++)we(ve[Ie],B,Y,K)}function Ve(A,B,Y,K){let H=A.opaque,ve=A.transmissive,Ie=A.transparent;m.setupLightsView(Y),it===!0&&be.setGlobalState(y.clippingPlanes,Y),K&&ee.viewport(R.copy(K)),H.length>0&&$e(H,B,Y),ve.length>0&&$e(ve,B,Y),Ie.length>0&&$e(Ie,B,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Le(A,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Yi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?wo:Ui,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let ve=m.state.transmissionRenderTarget[K.id],Ie=K.viewport||R;ve.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);let Ge=y.getRenderTarget(),Fe=y.getActiveCubeFace(),Qe=y.getActiveMipmapLevel();y.setRenderTarget(ve),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Z&&De.render(Y);let ot=y.toneMapping;y.toneMapping=cs;let qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),it===!0&&be.setGlobalState(y.clippingPlanes,K),$e(A,Y,K),Me.updateMultisampleRenderTarget(ve),Me.updateRenderTargetMipmap(ve),Q.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Ht=0,on=B.length;Ht<on;Ht++){let Zt=B[Ht],qt=Zt.object,Je=Zt.geometry,en=Zt.material,It=Zt.group;if(en.side===un&&qt.layers.test(K.layers)){let Kn=en.side;en.side=Bn,en.needsUpdate=!0,yt(qt,Y,K,Je,en,It),en.side=Kn,en.needsUpdate=!0,_t=!0}}_t===!0&&(Me.updateMultisampleRenderTarget(ve),Me.updateRenderTargetMipmap(ve))}y.setRenderTarget(Ge,Fe,Qe),y.setClearColor(z,X),qe!==void 0&&(K.viewport=qe),y.toneMapping=ot}function $e(A,B,Y){let K=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ve=A.length;H<ve;H++){let Ie=A[H],Ge=Ie.object,Fe=Ie.geometry,Qe=Ie.group,ot=Ie.material;ot.allowOverride===!0&&K!==null&&(ot=K),Ge.layers.test(Y.layers)&&yt(Ge,B,Y,Fe,ot,Qe)}}function yt(A,B,Y,K,H,ve){A.onBeforeRender(y,B,Y,K,H,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,B,Y,K,A,ve),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Bn,H.needsUpdate=!0,y.renderBufferDirect(Y,B,K,H,A,ve),H.side=ti,H.needsUpdate=!0,y.renderBufferDirect(Y,B,K,H,A,ve),H.side=un):y.renderBufferDirect(Y,B,K,H,A,ve),A.onAfterRender(y,B,Y,K,H,ve)}function tt(A,B,Y){B.isScene!==!0&&(B=N);let K=fe.get(A),H=m.state.lights,ve=m.state.shadowsArray,Ie=H.state.version,Ge=J.getParameters(A,H.state,ve,B,Y),Fe=J.getProgramCacheKey(Ge),Qe=K.programs;K.environment=A.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(A.isMeshStandardMaterial?Xe:Ke).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",le),Qe=new Map,K.programs=Qe);let ot=Qe.get(Fe);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===Ie)return ut(A,Ge),ot}else Ge.uniforms=J.getUniforms(A),A.onBeforeCompile(Ge,y),ot=J.acquireProgram(Ge,Fe),Qe.set(Fe,ot),K.uniforms=Ge.uniforms;let qe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=be.uniform),ut(A,Ge),K.needsLights=Ft(A),K.lightsStateVersion=Ie,K.needsLights&&(qe.ambientLightColor.value=H.state.ambient,qe.lightProbe.value=H.state.probe,qe.directionalLights.value=H.state.directional,qe.directionalLightShadows.value=H.state.directionalShadow,qe.spotLights.value=H.state.spot,qe.spotLightShadows.value=H.state.spotShadow,qe.rectAreaLights.value=H.state.rectArea,qe.ltc_1.value=H.state.rectAreaLTC1,qe.ltc_2.value=H.state.rectAreaLTC2,qe.pointLights.value=H.state.point,qe.pointLightShadows.value=H.state.pointShadow,qe.hemisphereLights.value=H.state.hemi,qe.directionalShadowMap.value=H.state.directionalShadowMap,qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qe.spotShadowMap.value=H.state.spotShadowMap,qe.spotLightMatrix.value=H.state.spotLightMatrix,qe.spotLightMap.value=H.state.spotLightMap,qe.pointShadowMap.value=H.state.pointShadowMap,qe.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=ot,K.uniformsList=null,ot}function rt(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ro.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ut(A,B){let Y=fe.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Qt(A,B,Y,K,H){B.isScene!==!0&&(B=N),Me.resetTextureUnits();let ve=B.fog,Ie=K.isMeshStandardMaterial?B.environment:null,Ge=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nr,Fe=(K.isMeshStandardMaterial?Xe:Ke).get(K.envMap||Ie),Qe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ot=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Ht=!!Y.morphAttributes.color,on=cs;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(on=y.toneMapping);let Zt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qt=Zt!==void 0?Zt.length:0,Je=fe.get(K),en=m.state.lights;if(it===!0&&(ie===!0||A!==v)){let Fn=A===v&&K.id===S;be.setState(K,A,Fn)}let It=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==en.state.version||Je.outputColorSpace!==Ge||H.isBatchedMesh&&Je.batching===!1||!H.isBatchedMesh&&Je.batching===!0||H.isBatchedMesh&&Je.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Je.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Je.instancing===!1||!H.isInstancedMesh&&Je.instancing===!0||H.isSkinnedMesh&&Je.skinning===!1||!H.isSkinnedMesh&&Je.skinning===!0||H.isInstancedMesh&&Je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Je.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Je.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Je.instancingMorph===!1&&H.morphTexture!==null||Je.envMap!==Fe||K.fog===!0&&Je.fog!==ve||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==Qe||Je.vertexTangents!==ot||Je.morphTargets!==qe||Je.morphNormals!==_t||Je.morphColors!==Ht||Je.toneMapping!==on||Je.morphTargetsCount!==qt)&&(It=!0):(It=!0,Je.__version=K.version);let Kn=Je.currentProgram;It===!0&&(Kn=tt(K,B,H));let Fr=!1,$n=!1,$o=!1,tn=Kn.getUniforms(),hi=Je.uniforms;if(ee.useProgram(Kn.program)&&(Fr=!0,$n=!0,$o=!0),K.id!==S&&(S=K.id,$n=!0),Fr||v!==A){ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tn.setValue(D,"projectionMatrix",A.projectionMatrix),tn.setValue(D,"viewMatrix",A.matrixWorldInverse);let Gn=tn.map.cameraPosition;Gn!==void 0&&Gn.setValue(D,ce.setFromMatrixPosition(A.matrixWorld)),j.logarithmicDepthBuffer&&tn.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&tn.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,$n=!0,$o=!0)}if(H.isSkinnedMesh){tn.setOptional(D,H,"bindMatrix"),tn.setOptional(D,H,"bindMatrixInverse");let Fn=H.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),tn.setValue(D,"boneTexture",Fn.boneTexture,Me))}H.isBatchedMesh&&(tn.setOptional(D,H,"batchingTexture"),tn.setValue(D,"batchingTexture",H._matricesTexture,Me),tn.setOptional(D,H,"batchingIdTexture"),tn.setValue(D,"batchingIdTexture",H._indirectTexture,Me),tn.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&tn.setValue(D,"batchingColorTexture",H._colorsTexture,Me));let ui=Y.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&pe.update(H,Y,Kn),($n||Je.receiveShadow!==H.receiveShadow)&&(Je.receiveShadow=H.receiveShadow,tn.setValue(D,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hi.envMap.value=Fe,hi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(hi.envMapIntensity.value=B.environmentIntensity),$n&&(tn.setValue(D,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Lt(hi,$o),ve&&K.fog===!0&&he.refreshFogUniforms(hi,ve),he.refreshMaterialUniforms(hi,K,V,te,m.state.transmissionRenderTarget[A.id]),Ro.upload(D,rt(Je),hi,Me)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ro.upload(D,rt(Je),hi,Me),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&tn.setValue(D,"center",H.center),tn.setValue(D,"modelViewMatrix",H.modelViewMatrix),tn.setValue(D,"normalMatrix",H.normalMatrix),tn.setValue(D,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Fn=K.uniformsGroups;for(let Gn=0,Mu=Fn.length;Gn<Mu;Gn++){let Zs=Fn[Gn];je.update(Zs,Kn),je.bind(Zs,Kn)}}return Kn}function Lt(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Ft(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,Y){let K=fe.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),fe.get(A.texture).__webglTexture=B,fe.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Y=fe.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};let Xt=D.createFramebuffer();this.setRenderTarget=function(A,B=0,Y=0){C=A,E=B,I=Y;let K=!0,H=null,ve=!1,Ie=!1;if(A){let Fe=fe.get(A);if(Fe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Fe.__webglFramebuffer===void 0)Me.setupRenderTarget(A);else if(Fe.__hasExternalTextures)Me.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let qe=A.depthTexture;if(Fe.__boundDepthTexture!==qe){if(qe!==null&&fe.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(A)}}let Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ie=!0);let ot=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[B])?H=ot[B][Y]:H=ot[B],ve=!0):A.samples>0&&Me.useMultisampledRTT(A)===!1?H=fe.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?H=ot[Y]:H=ot,R.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest}else R.copy(ye).multiplyScalar(V).floor(),L.copy(Ne).multiplyScalar(V).floor(),O=We;if(Y!==0&&(H=Xt),ee.bindFramebuffer(D.FRAMEBUFFER,H)&&K&&ee.drawBuffers(A,H),ee.viewport(R),ee.scissor(L),ee.setScissorTest(O),ve){let Fe=fe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,Y)}else if(Ie){let Fe=B;for(let Qe=0;Qe<A.textures.length;Qe++){let ot=fe.get(A.textures[Qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Qe,ot.__webglTexture,Y,Fe)}}else if(A!==null&&Y!==0){let Fe=fe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(A,B,Y,K,H,ve,Ie,Ge=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){ee.bindFramebuffer(D.FRAMEBUFFER,Fe);try{let Qe=A.textures[Ge],ot=Qe.format,qe=Qe.type;if(!j.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-K&&Y>=0&&Y<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ge),D.readPixels(B,Y,K,H,Be.convert(ot),Be.convert(qe),ve))}finally{let Qe=C!==null?fe.get(C).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,K,H,ve,Ie,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(B>=0&&B<=A.width-K&&Y>=0&&Y<=A.height-H){ee.bindFramebuffer(D.FRAMEBUFFER,Fe);let Qe=A.textures[Ge],ot=Qe.format,qe=Qe.type;if(!j.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.bufferData(D.PIXEL_PACK_BUFFER,ve.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ge),D.readPixels(B,Y,K,H,Be.convert(ot),Be.convert(qe),0);let Ht=C!==null?fe.get(C).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,Ht);let on=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lm(D,on,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ve),D.deleteBuffer(_t),D.deleteSync(on),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Y=0){let K=Math.pow(2,-Y),H=Math.floor(A.image.width*K),ve=Math.floor(A.image.height*K),Ie=B!==null?B.x:0,Ge=B!==null?B.y:0;Me.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ie,Ge,H,ve),ee.unbindTexture()};let wi=D.createFramebuffer(),Ur=D.createFramebuffer();this.copyTextureToTexture=function(A,B,Y=null,K=null,H=0,ve=null){ve===null&&(H!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=H,H=0):ve=0);let Ie,Ge,Fe,Qe,ot,qe,_t,Ht,on,Zt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(Y!==null)Ie=Y.max.x-Y.min.x,Ge=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,Qe=Y.min.x,ot=Y.min.y,qe=Y.isBox3?Y.min.z:0;else{let ui=Math.pow(2,-H);Ie=Math.floor(Zt.width*ui),Ge=Math.floor(Zt.height*ui),A.isDataArrayTexture?Fe=Zt.depth:A.isData3DTexture?Fe=Math.floor(Zt.depth*ui):Fe=1,Qe=0,ot=0,qe=0}K!==null?(_t=K.x,Ht=K.y,on=K.z):(_t=0,Ht=0,on=0);let qt=Be.convert(B.format),Je=Be.convert(B.type),en;B.isData3DTexture?(Me.setTexture3D(B,0),en=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Me.setTexture2DArray(B,0),en=D.TEXTURE_2D_ARRAY):(Me.setTexture2D(B,0),en=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let It=D.getParameter(D.UNPACK_ROW_LENGTH),Kn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fr=D.getParameter(D.UNPACK_SKIP_PIXELS),$n=D.getParameter(D.UNPACK_SKIP_ROWS),$o=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);let tn=A.isDataArrayTexture||A.isData3DTexture,hi=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let ui=fe.get(A),Fn=fe.get(B),Gn=fe.get(ui.__renderTarget),Mu=fe.get(Fn.__renderTarget);ee.bindFramebuffer(D.READ_FRAMEBUFFER,Gn.__webglFramebuffer),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mu.__webglFramebuffer);for(let Zs=0;Zs<Fe;Zs++)tn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(A).__webglTexture,H,qe+Zs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(B).__webglTexture,ve,on+Zs)),D.blitFramebuffer(Qe,ot,Ie,Ge,_t,Ht,Ie,Ge,D.DEPTH_BUFFER_BIT,D.NEAREST);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||fe.has(A)){let ui=fe.get(A),Fn=fe.get(B);ee.bindFramebuffer(D.READ_FRAMEBUFFER,wi),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ur);for(let Gn=0;Gn<Fe;Gn++)tn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ui.__webglTexture,H,qe+Gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ui.__webglTexture,H),hi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fn.__webglTexture,ve,on+Gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fn.__webglTexture,ve),H!==0?D.blitFramebuffer(Qe,ot,Ie,Ge,_t,Ht,Ie,Ge,D.COLOR_BUFFER_BIT,D.NEAREST):hi?D.copyTexSubImage3D(en,ve,_t,Ht,on+Gn,Qe,ot,Ie,Ge):D.copyTexSubImage2D(en,ve,_t,Ht,Qe,ot,Ie,Ge);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hi?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(en,ve,_t,Ht,on,Ie,Ge,Fe,qt,Je,Zt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(en,ve,_t,Ht,on,Ie,Ge,Fe,qt,Zt.data):D.texSubImage3D(en,ve,_t,Ht,on,Ie,Ge,Fe,qt,Je,Zt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ve,_t,Ht,Ie,Ge,qt,Je,Zt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ve,_t,Ht,Zt.width,Zt.height,qt,Zt.data):D.texSubImage2D(D.TEXTURE_2D,ve,_t,Ht,Ie,Ge,qt,Je,Zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fr),D.pixelStorei(D.UNPACK_SKIP_ROWS,$n),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$o),ve===0&&B.generateMipmaps&&D.generateMipmap(en),ee.unbindTexture()},this.initRenderTarget=function(A){fe.get(A).__webglFramebuffer===void 0&&Me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Me.setTextureCube(A,0):A.isData3DTexture?Me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Me.setTexture2DArray(A,0):Me.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){E=0,I=0,C=null,ee.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var qd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var mA=qd.length-1,gg=Math.min(...qd.map(n=>n[1])),xg=Math.max(...qd.map(n=>n[1])),gA=new b(0,0,(gg+xg)/2),yg=new b(.047,.027,(xg-gg)/2);var _A=new bt,vA=new b,MA=new b,bA=new Mt;var SA=new b,wA=new b;var TA=new b;var EA=new b,AA=new b,CA=new b,RA=new Hn,IA=new b,PA=new b,DA=new b,LA=new b,UA=new b;function Ka(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new b().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new b().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),M=new Hn(g,m,_).getNormal(new b);M.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:M})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new fn().setFromPoints(i).getSize(new b),h=Math.max(1e-4,e**2*.4),u=e?new b().setScalar(1/h):new b(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new b().subVectors(p.b,p.a).normalize(),new b().subVectors(p.c,p.b).normalize(),new b().subVectors(p.a,p.c).normalize()]))}}var FA=new b,NA=new b,OA=new b,BA=new b,zA=new bt,kA=new bt,VA=new b;function Do(n){return Ka(new Ze(n.x*2,n.y*2,n.z*2))}var GA=new b;var Yd=Ka(new xi(1,0).scale(...yg)),HA={mesh:{position:new b,quaternion:new bt},shape:Yd,radius:Yd.radius,precise:!0},WA=new b,XA=new b,qA=new b,YA=Yd.vertices.map(()=>new b);var ZA=new b,jA=new b,JA=new b,KA=new bt,$A=new bt,QA=new bt;var e2=new b,t2=new b,n2=new b,i2=new b;var s2=new b;var r2=new b,o2=new b,a2=new b,l2=new b,c2=new b,h2=new b,u2=new b;var d2={mesh:{position:null,quaternion:new bt},shape:{sphereRadius:0,normals:[],edges:[]}};function Ph(n,e,t){let i=new Ze(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function _g(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function vg(n){switch(n){case"sphere":return new yi(.5,24,16);case"cylinder":return new zt(.5,.5,1,24);case"cone":return new or(.5,1,24);case"torus":return new On(.34,.14,12,32);case"capsule":return new Es(.32,.36,8,16);default:return new Ze(1,1,1)}}function Zd(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new b(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new mt;return o.setAttribute("position",new ze(s,3)),o.setAttribute("uv",new ze(r,2)),o.computeVertexNormals(),o}function $a(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Ds=(n,e,t)=>n+(e-n)*t,Lo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Dh(n,e){let t=Math.floor(n),i=Math.floor(e),s=Lo(0,1,n-t),r=Lo(0,1,e-i);return Ds(Ds($a(t,i),$a(t+1,i),s),Ds($a(t,i+1),$a(t+1,i+1),s),r)}function Mg(n,e){return Dh(n,e)*.54+Dh(n*2.07+3.4,e*2.07-6.1)*.26+Dh(n*4.2+9,e*4.2)*.13+Dh(n*8.6,e*8.6-13)*.07}function bg(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((p,x)=>Ds(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=$a(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*Lo(.09,.3,c))}else{let[y,T]=s[p],E=2.8*h/(c+.16),I=y*E+3.6,C=T*E-8.1,S=Mg(I,C),v=Mg(I-.12,C-.09);g=Lo(.49,.66,S)*Lo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-v)*5+(S-.54)*.8))}let M=n?1:Ds(.94,1,Lo(.05,.34,c));i[x]=Ds(f[0],(139+115*m)*M,g)+_,i[x+1]=Ds(f[1],(154+100*m)*M,g)+_*.94,i[x+2]=Ds(f[2],(178+77*m)*M,g)+_*.86,i[x+3]=255}}let a=new ni(i,1024,512,zn);return a.colorSpace=vt,a.wrapS=Cn,a.magFilter=hn,a.minFilter=Pn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Sg(){let n=bg(!1),e=bg(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new ni(t,n.image.width,n.image.height,zn);i.colorSpace=vt;for(let s of[n,i,e])s.mapping=Li,s.magFilter=hn,s.minFilter=hn,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var rn=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),wg=rn(-24,24,-51,7),Tg=34521,Eg={x:0,y:0,z:3},Ls={x:.05,y:1.16,z:5.9},Uo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:rn(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:rn(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:rn(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:rn(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:rn(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:rn(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:rn(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:rn(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:rn(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:rn(9,23,-48,-37),sign:[16,-38.2]}},g2=[rn(-9,-6,-51,7),rn(6,9,-51,7),rn(-24,24,-8,-5),rn(-24,24,-27,-23),rn(9,23,-37,-34)],Ag=[{name:"Glace",bounds:Uo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Uo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:rn(-9,9,-51,7)},{name:"Sol ouest",bounds:rn(-23,-9,-51,-23)},{name:"Sol ouest",bounds:rn(-23,-9,-8,7)},{name:"Bordure ouest",bounds:rn(-24,-23,-51,7)},{name:"Sol est",bounds:rn(9,23,-51,-48)},{name:"Sol est",bounds:rn(9,23,-37,7)},{name:"Bordure est",bounds:rn(23,24,-51,7)}],Qa={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Fo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Cg=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Us={x:-19.4,y:.68,z:-3.25},Rg=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Ig={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function No(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Di(i);return s.colorSpace=vt,s}function Pg(n,e){let{day:t,sunset:i,night:s}=Sg(),r=[t,i,s],o=new He,a=new ir("#a6d4ea",55,135),l=No(64,64,($,G)=>{let we=$.createRadialGradient(G/2,G/2,G*.22,G/2,G/2,G*.5);we.addColorStop(0,"#fff"),we.addColorStop(.65,"#fff"),we.addColorStop(.88,"rgba(255,255,255,.72)"),we.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=we,$.fillRect(0,0,G,G)}),c=new sr(new Ts({map:l,alphaTest:.15,depthWrite:!1,fog:!1,toneMapped:!1}));n.add(c);let h=No(128,128,($,G)=>{let we=$.createRadialGradient(G/2,G/2,0,G/2,G/2,G/2);we.addColorStop(0,"rgba(255,255,255,.96)"),we.addColorStop(.11,"rgba(255,255,255,.67)"),we.addColorStop(.28,"rgba(255,255,255,.22)"),we.addColorStop(.64,"rgba(255,255,255,.055)"),we.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=we,$.fillRect(0,0,G,G)}),u=new sr(new Ts({map:h,blending:bo,depthWrite:!1,fog:!1,toneMapped:!1}));n.add(u);let d=No(256,256,($,G)=>{let we=$.createImageData(G,G);for(let Ve=0;Ve<G;Ve++)for(let Le=0;Le<G;Le++){let $e=(Le+.5-G/2)/(G/2),yt=(Ve+.5-G/2)/(G/2),tt=Math.hypot($e,yt),rt=Math.atan2(yt,$e),ut=Math.pow(Math.max(0,Math.cos(rt*8+.43)),Math.min(100,6+tt*82)),Qt=Math.pow(Math.max(0,Math.cos(rt*2-.1)),32)*.19,Lt=(ut*.74+Qt)*Math.pow(Math.max(0,1-tt),2.7);we.data.set([255,255,255,Math.min(255,255*Lt)],4*(Le+Ve*G))}$.putImageData(we,0,0)}),f=new sr(new Ts({map:d,blending:bo,depthWrite:!1,fog:!1,toneMapped:!1}));n.add(f);let p=t.clone();p.mapping=Li,p.needsUpdate=!0;let x=new Io(e);n.environment=x.fromEquirectangular(p).texture,x.dispose();let g=new ur("#daeaff","#88724c",2.25),m=new dr("#fff0d0",3);m.position.set(-14,25,-16),m.castShadow=!0,m.shadow.mapSize.set(1024,1024),Object.assign(m.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),m.shadow.bias=-25e-5,m.shadow.normalBias=.025,n.add(g,m,m.target);let _=new b,M=0,y=null,T=!0,E=null,I=null,C=!0,S=!1,v=0,R=0,L=new b,O=null,z=null,X=null,W=null,te=null,V=!1,oe=0;function xe($,G){if(G==="#ffffff")return $;if($===z&&G===X)return O;let we=$.image,Ve=document.createElement("canvas");Ve.width=we.width,Ve.height=we.height;let Le=Ve.getContext("2d");return $.isDataTexture?Le.putImageData(new ImageData(new Uint8ClampedArray(we.data),we.width,we.height),0,0):Le.drawImage(we,0,0),Le.globalCompositeOperation="multiply",Le.fillStyle=G,Le.fillRect(0,0,Ve.width,Ve.height),O?.dispose(),O=new Di(Ve),O.mapping=Li,O.colorSpace=vt,O.flipY=$.flipY,z=$,X=G,O}function ye($){if(te===$)return W;W?.dispose();let G=document.createElement("canvas"),we=document.createElement("canvas");G.width=384,G.height=192,we.width=1536,we.height=768,G.getContext("2d").drawImage($.image,0,0,G.width,G.height);let Ve=we.getContext("2d");return Ve.imageSmoothingEnabled=!1,Ve.drawImage(G,0,0,we.width,we.height),W=new Di(we),W.mapping=Li,W.colorSpace=vt,W.flipY=$.flipY,te=$,W}function Ne($){let G=$.shadowRange?Math.max(13,$.shadowRange):13+oe*1.2,we=Math.max(33,G*1.4);_.copy(L).multiplyScalar(we),Object.assign(m.shadow.camera,{left:-G,right:G,top:G,bottom:-G,far:Math.max(72,we+G*1.5)}),m.shadow.camera.updateProjectionMatrix()}function We($){M=[0,1,2].includes($)?$:0;let G=y??Hi(M),we=Te.degToRad(G.azimuth),Ve=Te.degToRad(G.elevation);L.set(Math.cos(we)*Math.cos(Ve),Math.sin(Ve),Math.sin(we)*Math.cos(Ve)),Ne(G),g.color.set(G.ambientColor),g.groundColor.set(G.groundColor),g.intensity=G.ambientPower,m.color.set(G.sunColor),m.intensity=G.sunPower,m.position.copy(m.target.position).add(_),c.material.color.set(G.sunColor),c.visible=G.sunPower>0,u.material.color.set(G.sunColor),u.material.opacity=Math.min(1,G.sunHalo*.48)*[1,.93,.45][G.preset],u.visible=C&&c.visible&&G.sunHalo>0,f.visible=u.visible&&G.sunStarburst>0,f.material.color.set(G.sunColor),f.material.opacity=Math.min(1,G.sunStarburst);let Le=G.sky==="image"&&I?I:r[G.preset],$e=xe(Le,G.skyTint);n.background=G.sky==="color"||!T?o.set(G.skyColor):V&&!$e.isDataTexture?ye($e):$e,n.backgroundRotation.y=Te.degToRad(G.rotation),a.color.set(G.fogColor),a.near=G.fogNear,a.far=G.fogFar,n.fog=G.fog?a:null,n.environmentIntensity=v*[1,.56,.09][G.preset]}function ct($,G=()=>{}){y=$;let we=$?.sky==="image"?$.skyImage:null;if(E!==we){E=we;let Ve=++R;I?.dispose(),I=null,S=!!we,we&&new _i().load(we,Le=>{if(R!==Ve){Le.dispose();return}Le.colorSpace=vt,Le.mapping=Li,I=Le,S=!1,We(M),G()},void 0,()=>{Ve===R&&(S=!1,G())})}We(M)}function it($,G=210){let we=y??Hi(M),Ve=G*.96,Le=2*Ve*Math.tan(Te.degToRad(we.sunDiameter/2));c.position.copy($).addScaledVector(L,Ve),u.position.copy($).addScaledVector(L,Ve*.999),c.scale.setScalar(Le),u.scale.setScalar(Le*(3+we.sunHalo*2)),f.position.copy($).addScaledVector(L,Ve*.998),f.scale.setScalar(Le*(7+we.sunStarburst*6))}function ie($){if(!m.castShadow)return;let G=m.target.position,we=Math.round($.x/4)*4,Ve=Math.round($.y/4)*4,Le=Math.round($.z/4)*4;G.x===we&&G.y===Ve&&G.z===Le||(G.set(we,Ve,Le),m.position.copy(G).add(_))}We(0);let k=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function ce($,G,we){let[,Ve,Le]=k[G],$e=512;$.save(),$.scale(we/512,we/512),$.fillStyle=Ve,$.fillRect(0,0,$e,$e);let yt=G+19;function tt(){return yt=Math.imul(yt,1664525)+1013904223>>>0,yt/4294967296}if($.fillStyle=Le,G===16){for(let rt=0;rt<16;rt++)for(let ut=0;ut<16;ut++)(ut+rt)%2===0&&$.fillRect(ut*32,rt*32,32,32);$.fillStyle="#ff3957",$.fillRect(253,0,6,512),$.fillRect(0,253,512,6)}else if([0,2,8,15].includes(G)){let rt=G===15?32:64;$.globalAlpha=.48;for(let ut=0;ut<$e;ut+=rt){$.fillRect(0,ut,$e,G===8?3:2);for(let Qt=-rt;Qt<$e;Qt+=rt)$.fillRect(Qt+ut/rt%2*(G===2?rt/2:0),ut,2,rt)}}else if([4,5,6,7,10,11,12].includes(G)){let rt=G===5?38:G===7?64:18;for(let ut=0;ut<rt;ut++){$.strokeStyle=Le,$.globalAlpha=.08+tt()*.22,$.lineWidth=G===5?1+tt()*8:1+tt()*4;let Qt=tt()*$e,Lt=G===5?.018:.009;$.beginPath();for(let Ft=0;Ft<=$e;Ft+=8){let Xt=Qt+Math.sin(Ft*Lt+ut)*(G===6||G===7?4:12+ut%5*3)+(G===4?Ft*.28:0);Ft===0?$.moveTo(Ft,Xt):$.lineTo(Ft,Xt)}$.stroke()}}else{$.globalAlpha=.27;for(let rt=0;rt<120;rt++){let ut=tt()*$e,Qt=tt()*$e,Lt=2+tt()*6;$.beginPath(),$.arc(ut,Qt,Lt,0,Math.PI*2),$.fill()}}if(G!==16)for(let rt=0;rt<4400;rt++)$.globalAlpha=.05+tt()*.1,$.fillStyle=tt()>.5?Le:"#222324",$.fillRect(tt()*$e,tt()*$e,1+tt()*4,1+tt()*3);$.restore()}let ue=new Set([0,2,4,5,8,15,16]),N=dt.shadowmap_pars_fragment.replace("return mix( 1.0, shadow, shadowIntensity );","vec2 edge = min(shadowCoord.xy, 1.0 - shadowCoord.xy); return mix(1.0, shadow, shadowIntensity * smoothstep(0.0, 0.14, min(edge.x, edge.y)));"),Z=k.map(([$,G,we,Ve,Le,$e],yt)=>{let tt=ue.has(yt)?512:256,rt=No(tt,tt,Qt=>ce(Qt,yt,tt));rt.wrapS=rt.wrapT=Cn;let ut=new pn({map:rt,roughness:Ve,metalness:Le,flatShading:!0,opacity:$e,transparent:$e<1,depthWrite:$e===1});return ut.name=$,ut}),Ee=Z.map($=>$.map.image),D=512,re=Z.map($=>new si({map:$.map,flatShading:!0,opacity:$.opacity,transparent:$.transparent,depthWrite:$.depthWrite})),Q={value:0},j={value:.24},ee={value:null},ge={value:0};function fe(){ee.value?.dispose(),ee.value=No(512,512,($,G)=>{$.fillStyle="#ffffff",$.fillRect(0,0,G,G);let we=G/52,Ve=G/64;for(let Le of Me){if(!Le.position||!Le.half||Le.position.y+Le.half.y<.22)continue;let $e=(Le.position.x+26)*we,yt=(Le.position.z+54)*Ve,tt=Math.min(55,Le.half.x*we+5),rt=Math.min(72,Le.half.z*Ve+6);$.save(),$.translate($e+Le.half.y*we*.2,yt+Le.half.y*Ve*.24),$.scale(tt,rt);let ut=$.createRadialGradient(0,0,.15,0,0,1);ut.addColorStop(0,"rgba(22,37,65,.54)"),ut.addColorStop(.58,"rgba(36,54,76,.29)"),ut.addColorStop(1,"rgba(38,48,57,0)"),$.fillStyle=ut,$.fillRect(-1,-1,2,2),$.restore()}})}for(let $ of[...Z,...re])$.onBeforeCompile=G=>{G.fragmentShader=G.fragmentShader.replace("#include <shadowmap_pars_fragment>",N),G.uniforms.uFocusAmount=Q,G.uniforms.uFocusRadius=j,G.uniforms.uLabLightmap=ee,G.uniforms.uLabBakedStrength=ge,G.vertexShader=`varying vec3 vLabPosition;
`+G.vertexShader,G.vertexShader=G.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),G.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+G.fragmentShader,G.fragmentShader=G.fragmentShader.replace("#include <map_fragment>",`
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
      `)},$.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v3";let Me=[],Ke=[];function Xe($,G,we,Ve,Le,$e,yt,tt=0,rt=0,ut=1,Qt=1,Lt=!1){let Ft=new de(Lt?new Ze(Le,$e,yt):Ph(Le,$e,yt),Z[tt]);Ft.position.set(G,we,Ve),Ft.rotation.x=rt,Ft.receiveShadow=!0,Ft.castShadow=!0,n.add(Ft);let Xt=new b(Le/2,$e/2,yt/2),wi={mesh:Ft,position:Ft.position,quaternion:Ft.quaternion,half:Xt,min:Xt.clone().negate(),friction:ut,gravity:Qt,name:$,type:tt,shape:Do(Xt)};return Me.push(wi),wi}let P=Ag.map(({name:$,bounds:G,type:we=0,friction:Ve=.78,gravity:Le=1})=>{let{xMin:$e,xMax:yt,zMin:tt,zMax:rt}=G;return Xe($,($e+yt)/2,-.33,(tt+rt)/2,yt-$e,.66,rt-tt,we,0,Ve,Le)});for(let $ of Object.values(Ig))for(let G of $)Xe(...G);let{xMin:w,xMax:q,zMin:J,zMax:he}=wg;Xe("But\xE9e arri\xE8re",0,1.35,J+.4,q-w,2.7,.6,2),Xe("But\xE9e ouest",w+.3,1.05,(J+he)/2,.6,2.1,he-J,2),Xe("But\xE9e est",q-.3,1.05,(J+he)/2,.6,2.1,he-J,2);let{xMin:se,xMax:ke,zMin:be,zMax:Oe}=Uo.hills.bounds,De=ke-se,pe=Oe-be,Ce=16,Ye=64,Be=new Sn(De,pe,Ce,Ye).rotateX(-Math.PI/2).translate(se+De/2,0,be+pe/2),Ae=Be.attributes.uv;for(let $=0;$<Ae.count;$++)Ae.setXY($,Ae.getX($)*De/2.6,Ae.getY($)*pe/2.6);let je=Be.attributes.position,F;function _e($){if(F===$)return;F=$;let G=F*.017;for(let we=0;we<je.count;we++){let Ve=je.getX(we),Le=je.getZ(we),$e=Math.sin(Math.PI*Te.clamp((Ve-se)/De,0,1)),yt=Math.min(1,(Le-be)*.48,(Oe-Le)*.48),tt=.93+.56*Math.sin(Le*.36+G)+.32*Math.cos(Ve*.67+Le*.26+G*1.4)+.19*Math.sin(Le*.81+G*.67);je.setY(we,Math.max(0,$e*yt*tt))}je.needsUpdate=!0,Be.computeVertexNormals(),Be.computeBoundingSphere()}_e(Tg);let Se=new de(Be,Z[3]);Se.userData.editorAssetId="lab-hill",Se.receiveShadow=Se.castShadow=!0,n.add(Se);let Ue=($,G)=>{let we=Te.clamp(($-se)/De*Ce,0,Ce-1e-6),Ve=Te.clamp((G-be)/pe*Ye,0,Ye-1e-6),Le=Math.floor(we),$e=Math.floor(Ve),yt=we-Le,tt=Ve-$e,rt=Ce+1,ut=$e*rt+Le,Qt=je.getY(ut),Lt=je.getY(ut+1),Ft=je.getY(ut+rt),Xt=je.getY(ut+rt+1);return yt+tt<=1?Qt+(Lt-Qt)*yt+(Ft-Qt)*tt:Xt+(Ft-Xt)*(1-yt)+(Lt-Xt)*(1-tt)};Me.push({heightfield:!0,mesh:Se,editorAssetId:"lab-hill",height:Ue,...Uo.hills.bounds,friction:.81,gravity:1});function me($,G,we,Ve,Le=1.45){let $e=No(384,72,(tt,rt,ut)=>{tt.fillStyle="#202a32",tt.fillRect(0,0,rt,ut),tt.fillStyle=Ve,tt.font="bold 31px system-ui",tt.textAlign="center",tt.fillText($,rt/2,48,rt-20)}),yt=new de(new Sn(3.2,.6),new an({map:$e,side:un}));yt.position.set(G,Le,we),n.add(yt),Ke.push(yt)}for(let $ of Object.values(Uo)){me($.name.toLocaleUpperCase("fr"),...$.sign,$.color);let{xMin:G,xMax:we,zMin:Ve,zMax:Le}=$.bounds,$e=new wa(new mt().setFromPoints([new b(G,.025,Ve),new b(we,.025,Ve),new b(we,.025,Le),new b(G,.025,Le)]),new mi({color:$.color,transparent:!0,opacity:.72}));n.add($e),Ke.push($e)}me("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),me("MURS HAUTS",3,-31,"#e8d2ff"),me("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let le=new pn({color:"#c8e6ed",metalness:1,roughness:.16}),Pe=new de(new gi(.54,2),le);Pe.userData.editorAssetId="chrome-sphere",Pe.position.set(Us.x,Us.y,Us.z),Pe.castShadow=!0,n.add(Pe);let st=k.map(($,G)=>{let{x:we,z:Ve}=Rg(G);return Xe("\xC9chantillon "+k[G][0],we,.325,Ve,.65,.65,.65,G,0,1,1,!0).mesh}),Gt=new In(1,12).rotateX(-Math.PI/2),At=new an({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Si($){let G=new de(Gt,At);return G.scale.setScalar($),n.add(G),G}function ci($,G,we,Ve,Le,$e,yt,tt){let rt=G>=3;e.shadowMap.enabled=rt,m.castShadow=rt,At.opacity=G===2?.17:.11,ge.value=tt?.38+we*.04:0;let ut=G>=9?2048:G>=6?1024:G>=4?512:256;m.shadow.intensity=.45+G*.055,m.shadow.radius=.65+G*.12,oe=G,m.shadow.mapSize.x!==ut&&(m.shadow.map?.dispose(),m.shadow.map=null,m.shadow.mapSize.set(ut,ut)),C=Le,yt!==D&&(D=yt,Z.forEach((Lt,Ft)=>{let Xt=Lt.userData.texture??Lt.map,wi=ue.has(Ft)?yt:Math.min(256,yt);if(Xt.image.width===wi)return;let Ur=document.createElement("canvas");Ur.width=Ur.height=wi;let A=Ur.getContext("2d");wi>512?ce(A,Ft,wi):A.drawImage(Ee[Ft],0,0,wi,wi);let B=new Di(Ur);B.colorSpace=Xt.colorSpace,B.wrapS=Xt.wrapS,B.wrapT=Xt.wrapT,B.repeat.copy(Xt.repeat);for(let Y of[Lt,re[Ft]])Y.userData.texture=B,Y.map=B,Y.needsUpdate=!0;Xt.dispose()}));let Qt=$>=4;for(let Lt of Me)Lt.mesh?.isMesh&&!Lt.zone&&(Lt.mesh.material=Qt?Z[Lt.type]:re[Lt.type]);Se.material=Qt?Z[3]:re[3];for(let Lt=0;Lt<st.length;Lt++)st[Lt].material=Qt?Z[Lt]:re[Lt];Z.forEach((Lt,Ft)=>{for(let Xt of[Lt,re[Ft]])Xt.userData.texture||(Xt.userData.texture=Xt.map),Xt.map=$e?Xt.userData.texture:null,Xt.color.set($e?"#ffffff":k[Ft][1]),Xt.needsUpdate=!0}),v=Ve?.21+we*.067:0,le.metalness=Ve?.95:.1,le.roughness=Ve?.13:.46,T=$>=2,We(M)}return{boxes:Me,floors:P,probe:Pe,display:st,visual:ci,shadow:Si,setTimeOfDay:We,setEnvironment:ct,centerSky:it,setRetroSky($){V!==$&&(V=$,We(M))},sunDirection:()=>L.clone(),centerShadows:ie,lighting:[g,m,m.target,u,c,f],sunDisk:c,sunHalo:u,sunGlare:f,get skyLoading(){return S},get hillSeed(){return F},setHillSeed:_e,bakeLightmap:fe,mapMaterial:($,G)=>G>=4?Z[$]:re[$],builtObjects:[...Me.map($=>$.mesh).filter($=>$?.isObject3D),Pe,...Ke],materials:[...Z,...re],focus($,G,we){Q.value=$?G*.75:0,j.value=.07+we*.058}}}function Dg(n,e,t){function i(c,h,u=.85){let d=c.getWorldPosition(new b),f=c.getWorldQuaternion(new bt);e.push({half:h,min:h.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:Do(h),friction:u,gravity:1})}let s=[],r=[],o=new si({color:"#485d5d",flatShading:!0});function a([c,h],u,d){let f=new de(new Ze(.095,.68,.11),o);f.position.set(c,.34,h+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new b(.0475,.34,.055));let p=new bn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new de(new Ze(.64,.36,.055),new si({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Di(g);_.colorSpace=vt;let M=new de(new Sn(.61,.095),new an({map:_}));M.position.set(0,.116,.03),p.add(M);let y=.592/d.length,T=d.map(([I,C],S)=>{let v=new de(new Ze(y-.012,.155,.04),new si({color:"#478086"}));v.position.set(-.296+y*(S+.5),-.045,.046),p.add(v),s.push(v),v.userData.touchWidth=y-.012;let R=document.createElement("canvas");R.width=208,R.height=172;let L=new Di(R);L.colorSpace=vt;let O=new de(new Sn(y-.017,.139),new an({map:L}));O.position.z=.0205,v.add(O);let z=-1/0;return v.userData.action=()=>{let X=performance.now();X-z<250||(z=X,C(),l(),v.position.z=.036,setTimeout(()=>{v.position.z=.046},115))},{label:I,context:R.getContext("2d"),texture:L}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let I of T){let C=I.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let S=(typeof I.label=="function"?I.label():I.label).split("|");S.forEach((v,R)=>C.fillText(v,104,(S.length>1?68:97)+R*37,188)),I.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(Qa.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Fo[0])],["Boule",()=>t.spawn(1,Fo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Fo[0])],["Vider",t.clear]]),a(Qa.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Fo[1])],["Sph\xE8re",()=>t.spawn(5,Fo[1])]]),a(Qa.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Qa.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function Lh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new mt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Lg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Lg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Bt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Fh=0,VS=1,GS=new b,Ug=new Va,jd=new An,Fg=new b,Uh=new Hn,Nh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Oh,this.unassigned=new Oh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Jd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new b;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,GS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Fh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new b,t=new b,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,Ug.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){Ug.closestPointToPoint(p.point,!0,Fg);let x=Fg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,jd.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(jd.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(jd.distanceToPoint(h.point)<0){u.push(Ni.create(a,l,c),Ni.create(h,l,a),Ni.create(h,c,l),Ni.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(Ni.create(a,c,l),Ni.create(h,a,l),Ni.create(h,l,c),Ni.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Fh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=VS;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Fh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=Ni.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Ni=class n{constructor(){this.normal=new b,this.midpoint=new b,this.area=0,this.constant=0,this.outside=null,this.mark=Fh,this.edge=null}static create(e,t,i){let s=new n,r=new el(e,s),o=new el(t,s),a=new el(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Uh.set(e.point,t.point,i.point),Uh.getNormal(this.normal),Uh.getMidpoint(this.midpoint),this.area=Uh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},el=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Jd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Oh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var us=class extends mt{constructor(e=[]){super();let t=[],i=[],r=new Nh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ze(t,3)),this.setAttribute("normal",new ze(i,3))}};var qn=Math.PI*2,Bh=.84,ds=128;function Os(n){let e=new Uint8Array(ds*ds*4);for(let i=0;i<ds;i++)for(let s=0;s<ds;s++){let r=(s+.5)/ds,o=(i+.5)/ds,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Bh,1),Math.min(o/Bh,1),s,i),l=(s+i*ds)*4;for(let c=0;c<3;c++)e[l+c]=Te.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ni(e,ds,ds);return t.colorSpace=vt,t.generateMipmaps=!0,t.minFilter=Pn,t.magFilter=hn,t.needsUpdate=!0,t}function br(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ft(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new He(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Bh,r.getY(l)*Bh):r.setXY(l,.95,.95);return i.setAttribute("color",new Bt(a,3)),i}function Bs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Lh(s),material:new pn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Ng(n,e,t){let i=n/2,s=e/2,r=new as;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Fs(n,e,t,i,s){return new lr(Ng(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ns(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=e;f++){let p=qn*f/e,x=t(u,d,p,h);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,h/(n.length-1)),h===n.length-1||f===e)continue;let g=h*(e+1)+f,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new mt;o.setAttribute("position",new ze(i,3)),o.setAttribute("uv",new ze(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new b,c=new b;for(let h=0;h<n.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function tl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new b(0,s,0));continue}for(let r=0;r<e;r++){let o=qn*r/e;t.push(new b(i*Math.sin(o),s,i*Math.cos(o)))}}return new us(t)}function HS(){let t=new Na(Ng(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Te.clamp(i.getX(l)/.098+.5,0,1),h=Te.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=Os((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*qn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[ft(Fs(.106,.207,.013,.011,.0019),8425890),ft(Fs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),ft(Fs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),ft(t,16777215,!0),ft(Fs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),ft(new Ze(.0036,.024,.004).translate(.055,.029,0),11714250),ft(new Ze(.0036,.015,.004).translate(-.055,.032,0),11385285),ft(new Ze(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(ft(new zt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(ft(new In(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(ft(new In(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new us([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new b(c,h,l))));return Bs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function WS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Ns(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Os((a,l,c,h)=>{let u=qn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(_=>Math.exp(-(((d-_+.035*Math.cos(u))/.009)**2)))),x=f**3*p,g=br(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=tl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Bs("bread","Baguette de pain",.27,o,[ft(s,16777215,!0)],r,.9)}function XS(){let n=Os((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*br(a,l)-(c&&(u||d)?35:0);return[p*.94,p,p*1.04]}),e=Ns([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ns([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[ft(e,16777215,!0),ft(t,11056059),ft(new zt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),ft(new zt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=qn*r/5;i.push(ft(new Ze(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=tl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Bs("wheel","Roue",1.8,s,i,n,.64,.23)}function qS(){let n=Os((r,o,a,l)=>{let c=br(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(qn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=Ns([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new On(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+qn*l/5;return new b(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new b(.166,-.027,.01),new b(.166,.053,-.01));let s=new us(i);return Bs("cup","Tasse",.39,s,[ft(e,16777215,!0),ft(t,15785922)],n,.37)}function YS(){let n=Ns([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Os((s,r,o,a)=>{let l=9*br(o,a),c=11*Math.cos(s*qn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*qn*48+s*qn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*qn*4);return[h,h*1.13,h*1.24]}),t=[ft(n,16777215,!0),ft(new As(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),ft(new In(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),ft(new In(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),ft(new zt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),ft(new In(.008,12).translate(0,.035,.0336),15633202)],i=tl([[.033,-.143],[.054,.133]],6);return Bs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function ZS(){let n=Ns([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Os((r,o,a,l)=>{let c=10*br(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(qn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(qn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[ft(n,16777215,!0),ft(new In(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),ft(new As(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),ft(new In(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=tl([[.069,-.112],[.069,.109]],6);return Bs("soda","Canette de soda",.35,s,i,t,.42,.27)}function jS(){let n=Ns([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Os((s,r,o,a)=>{let l=15*br(o,a),c=8*Math.cos(s*qn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[ft(n,16777215,!0),ft(Fs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),ft(new In(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=tl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Bs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function JS(){let n=Os((s,r,o,a)=>{let l=8*br(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ns([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[ft(Fs(.138,.22,.061,.016,.004),14788675),ft(Fs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),ft(new Sn(.106,.174).translate(0,-.004,.0395),16777215,!0),ft(e,2502456),ft(new zt(.014,.017,.016,10).translate(.04,.117,.001),2503482),ft(new Ze(.008,.047,.027).translate(-.072,.014,-.002),3028798),ft(new Ze(.006,.02,.019).translate(-.072,-.043,-.002),3950414),ft(new In(.004,8).translate(.04,.066,.0397),15817792),ft(new In(.004,8).translate(-.04,.066,.0397),7903100),ft(Fs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new b(s,l,o),new b(r,l,o),new b(r,l,a),new b(s,l,a)]);return Bs("radio","Talkie-walkie",.43,new us(i),t,n,.61,.08)}function Og(){return[HS(),WS(),XS(),qS(),YS(),ZS(),jS(),JS()]}var KS=[0,1,2,3,4,5,7,8,9,10];function Bg(n){Cg.forEach(({x:e,z:t},i)=>n(KS[i],new b(e,.8,t)))}function zg(){let n=[["Cube",new Ze(.33,.33,.33),"#b76b50",0,1.35],["Boule",new gi(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new cr(.29),"#d8ae53",0,1],["Brique",new Ze(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ze(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new gi(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Ka(t,s),material:new pn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Do(t.computeBoundingBox()??t.boundingBox.getSize(new b).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Og()){let s=Ka(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var V2=new b(0,1,0),nl=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,t,i):e;function kg(n){if(!Array.isArray(n?.pivot)||n.pivot.length!==3)return null;let e=n.mode==="slide"||n.mode==="screw"?n.mode:null,t=n.axis==="x"||n.axis==="z"?n.axis:null;return{...e?{mode:e,travel:nl(n.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:n.pivot.map(i=>nl(i,0,-6,6)),closed:nl(n.closed,0,-180,180),open:nl(n.open,95,-180,180),seconds:nl(n.seconds,.7,.1,6)}}var G2=new b;var zh=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";zh.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)zh.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Kd=Object.freeze(Object.fromEntries(zh.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),Vg=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,e,t):i;function $S(n,e){let t=Kd[n];return{pivot:t.pivot.map((i,s)=>Vg(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Vg(e?.limit,0,150,t.limit)}}function Gg(n){return Object.fromEntries(zh.map(([e])=>[e,$S(e,n?.[e])]))}function Hg(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var QS={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},e1=new WeakMap,t1={value:0},Wg=["sine","triangle","pulse","stars"],$d=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function Xg(n){if(!n||typeof n!="object")return null;let e={};for(let[t,i]of Object.entries(QS)){let s=n[t];e[t]={strength:$d(s?.strength,0,i.max,0),speed:$d(s?.speed,0,8,i.defaultSpeed),scale:$d(s?.scale,0,48,i.defaultScale),signal:Wg.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function qg(n,e){if(!e||!Object.values(e).some(r=>r.strength>0))return n;let t=r=>{let o=e[r];return new Jt(o.strength,o.speed,o.scale,Wg.indexOf(o.signal))},i={uFoundryTime:t1,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new He(e.tint.color)},uFoundryGlowColor:{value:new He(e.glow.color)}},s=`
uniform float uFoundryTime;
varying vec3 vFoundryPosition;
float foundryWave(vec4 channel, vec3 p){
  float phase=uFoundryTime*channel.y*6.2831853+dot(p,vec3(.61,.79,-.53))*channel.z;
  float wave=.5+.5*sin(phase);
  if(channel.w>1.5)return smoothstep(.65,.85,wave);
  if(channel.w>.5)return 1.-abs(fract(phase/6.2831853)*2.-1.);
  return wave;
}
`;return n.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=s+`uniform vec4 uFoundryDeform;
`+r.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vFoundryPosition=position;
      float squeeze=(foundryWave(uFoundryDeform,position)*2.-1.)*uFoundryDeform.x;
      transformed*=vec3(1.-squeeze*.4,1.+squeeze,1.-squeeze*.4);
    `),r.fragmentShader=s+`uniform vec4 uFoundryTint,uFoundryGlow;
uniform vec3 uFoundryTintColor,uFoundryGlowColor;
float foundrySurface(vec4 channel, vec3 p){
  if(channel.w<2.5)return foundryWave(channel,p);
  vec2 plane=vec2(dot(p,vec3(.74,.23,.63)),dot(p,vec3(-.28,.95,-.19)))*channel.z;
  plane+=uFoundryTime*channel.y*vec2(.09,-.04);
  vec2 cell=floor(plane);
  vec3 h=fract(cell.xyx*vec3(.1031,.1030,.0973));
  h+=dot(h,h.yxz+33.33);
  h=fract((h.xxy+h.yzz)*h.zyx);
  float distanceToStar=length(fract(plane)-(.23+.54*h.xy));
  float radius=mix(.045,.16,h.z),pixel=clamp(length(fwidth(plane))*.5,.01,.16);
  float spark=1.-smoothstep(max(0.,radius-pixel),radius+pixel,distanceToStar);
  return step(.64,h.z)*spark*(.75+.25*sin(uFoundryTime*channel.y*6.2831853+h.x*20.));
}
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb=mix(diffuseColor.rgb,uFoundryTintColor,uFoundryTint.x*foundrySurface(uFoundryTint,vFoundryPosition));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},n.customProgramCacheKey=()=>"foundry-effect-v1",e1.set(n,e),n}var Yg=48,n1=3,i1=128,Zg=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),s1=(n,e,t)=>Math.max(e,Math.min(t,n)),r1=()=>structuredClone(Zg.shield),il=(n,e,t,i)=>Number.isFinite(n)?s1(n,t,i):e;function Vh(n){let e=n?.mode==="lathe"?Zg.bottle:r1(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Yg?n.points.map(o=>[il(o?.[0],0,-1.5,1.5),il(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:il(n?.depth,e.depth,.025,1.5),bevel:il(n?.bevel,e.bevel,0,.15),segments:Math.round(il(n?.segments,32,n1,i1))}}function jg(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function kh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function o1(n,e,t,i){let s=kh(n,e,t),r=kh(n,e,i),o=kh(t,i,n),a=kh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function a1(n){let e=Vh(n),t=e.mode==="lathe"?e.points:jg(e);if(t.length<3||t.length>Yg*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&o1(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Jg(n){let e=Vh(n),t=a1(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ae(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ae(0,s[0].y)),s.at(-1).x>0&&s.push(new ae(0,s.at(-1).y)),i=new Fa(s,e.segments);let r=[],o=i.attributes.position,a=new b,l=new b,c=new b,h=new b,u=i.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);i.setIndex(r)}else{let s=jg(e),r=new as;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new lr(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new Bt(new Float32Array(s*2),2))}return i}var Qd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],sl=null,l1=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Sr(n){return typeof n=="string"&&l1.has(n.replace(/^custom-model-game-/,""))}function Gh(n){let e=n?.parts;return Sr(n?.id)||Sr(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Sr(t?.assetId))}function $g(){if(sl)return sl;let n=zg(),e=Qd;return sl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),sl.set("chrome-sphere",{geometry:new gi(.54,2),material:new pn({color:"#c8e6ed",metalness:1,roughness:.16})}),sl}function Hh(n){return typeof n=="string"&&$g().has(n)}function ef(n){return $g().get(n)??null}function c1(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function Kg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[c1(e,n)]}}function tf(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>Kg(e,t)),Kg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var rf=/^[a-z0-9-]{1,40}$/i,h1={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function u1(n,e){if(!n)return null;let t=e==="trigger"?n.phase==="exit"?"exit":"enter":n.phase==="use"?"use":null;if(!t)return null;let i=typeof n.door=="string"&&rf.test(n.door)?n.door:null,s=typeof n.light=="string"&&rf.test(n.light)?n.light:null,r=Object.hasOwn(h1,n.sound)?n.sound:null,o=t==="use"&&i0.test(n.receiver??"")?n.receiver:null;return i||s||r||o?{phase:t,...o?{receiver:o}:{},...i?{door:i,doorState:["open","close","toggle"].includes(n.doorState)||e==="trigger"&&n.doorState==="hold"?n.doorState:"open"}:{},...i&&e==="trigger"&&n.doorState==="hold"?{doorDelay:wr(n.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(n.lightState)?n.lightState:"on",lightColor:s0.test(n.lightColor??"")?n.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:wr(n.soundVolume,0,1,.6)}:{}}:null}var cf="gorilla-lab-models-v1",Oo=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),d1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,f1=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),t0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),of=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),p1=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),wr=(n,e,t,i)=>Number.isFinite(n)?Te.clamp(n,e,t):i;function hf(n){return{gravity:wr(n?.physics?.gravity,0,2.5,1),bounce:wr(n?.physics?.bounce,0,1.65,1)}}function n0(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:wr(n?.uv?.repeat,.01,100,1),angle:wr(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>wr(n?.uv?.offset?.[t],-100,100,0))}}var m1=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),i0=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,s0=/^#[a-f\d]{6}$/i;function nf(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function zs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Te.clamp(n[s],t,i):e)}function Qg(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var af=new Set(["box","sphere","capsule","convex"]);function g1(n){if(n?.mode==="box")return{mode:"box",center:zs(n.center,0,-6,6),size:zs(n.size,.5,.025,12)};let e=Math.round(Te.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:af.has(n.shape)?n.shape:"box",center:zs(n.center,0,-6,6),size:zs(n.size,.5,.025,12),rotation:zs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&af.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function Tr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Oo.models||JSON.stringify(n).length>Oo.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!Gh(i)).map(i=>{if(typeof i?.id!="string"||!i0.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Oo.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(i.id);let s=new Set;return{id:i.id,name:nf(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:Gg(i.avatarRig)}:{},...Hh(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:{...Object.fromEntries(Object.entries(m1).map(([r,o])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:o])),...i.kind!=="structure"&&i.kind!=="avatar"&&i.properties?.drivable===!0?{drivable:!0}:{}},hitbox:g1(i?.hitbox),...i.physics?{physics:hf(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Sr(r?.assetId)).map((r,o)=>{let a=Xg(r?.effect),l=typeof r?.actionId=="string"&&rf.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=i.kind==="structure"?u1(r?.reaction,r?.zone):null,h=i.kind==="structure"&&r?.zone!=="trigger"?kg(r?.hinge):null;return{name:nf(r?.name,`Pi\xE8ce ${o+1}`),...h?{hinge:h}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(Kd,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Oo.parts?{group:r.group}:{},shape:r?.shape==="asset"&&Hh(r?.assetId)?"asset":Object.hasOwn(f1,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Hh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Vh(r?.profile)}:{},position:zs(r?.position,0,-3,3),rotation:zs(r?.rotation,0,-360,360),scale:zs(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&s0.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(p1,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:nf(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(of,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&Qg(r.portal)?{portal:Qg(r.portal)}:{},...r?.uv?{uv:n0(r)}:{},surface:Object.hasOwn(t0,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Oo.textureBytes&&d1.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&Hg(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function r0(n){try{let e=(n??globalThis.localStorage)?.getItem(cf);if(e&&e.length<=Oo.fileBytes)return Tr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function x1(n){switch(n){case"tetrahedron":return new cr(Math.sqrt(3)/2);case"sphere":return new yi(.5,20,12);case"cylinder":return new zt(.5,.5,1,20);case"cone":return new or(.5,1,20);case"torus":return new On(.365,.135,8,24);case"capsule":return new Es(.28,.44,6,16);case"diamond":return new xi(.5);default:return new Ze(1,1,1)}}var o0=Object.keys(t0),xn=64,rl=4,a0=2,Ji;function l0(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function c0(){if(Ji)return Ji;let n=xn*rl,e=xn*a0,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/xn)*rl+Math.floor(s/xn),o=l0(o0[r],s%xn,i%xn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ji=new ni(t,n,e),Ji.colorSpace=vt,Ji.magFilter=hn,Ji.minFilter=Pn,Ji.generateMipmaps=!0,Ji.needsUpdate=!0,Ji}var sf=new Map,Oi;function y1(){if(Oi)return Oi;let n=new Uint8Array(xn**2*4);for(let e=0;e<xn;e++)for(let t=0;t<xn;t++){let i=t>>3,s=e>>3,r=(i*13+s*17+i*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;n.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*xn+t)*4)}return Oi=new ni(n,xn,xn),Oi.colorSpace=vt,Oi.wrapS=Oi.wrapT=Cn,Oi.magFilter=hn,Oi.minFilter=Pn,Oi.generateMipmaps=!0,Oi.needsUpdate=!0,Oi}function e0(n){if(sf.has(n))return sf.get(n);let e=new Uint8Array(xn*xn*4);for(let i=0;i<xn;i++)for(let s=0;s<xn;s++){let r=l0(n,s,i),o=(i*xn+s)*4;e.set([r,r,r,255],o)}let t=new ni(e,xn,xn);return t.colorSpace=vt,t.wrapS=t.wrapT=Cn,t.magFilter=hn,t.minFilter=Pn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,sf.set(n,t),t}function h0(n){return!!(n?.effect||n?.texture||n?.uv||n?.surface==="windows"||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function _1(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=n0(e),a=Te.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:d}=n.attributes,f=new b,p=new b;for(let x=0;x<h.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let _=Math.abs(p.x),M=Math.abs(p.y),y=Math.abs(p.z);_>=M&&_>=y?(g=f.z,m=f.y):M>=y?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Wh(n,e=new b(...n.scale)){let t=n.shape==="asset"?ef(n.assetId):null,i=n.shape==="custom"?Jg(n.profile):t?.geometry?.clone()??x1(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new ze(new Float32Array(s.attributes.position.count*2),2)),n.uv&&_1(s,n,e);let r=n.rotation.map(Te.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new He(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=o0.indexOf(n.surface),u=h%rl,d=Math.floor(h/rl),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&n.surface!=="windows"&&c.setXY(p,(u+.05+c.getX(p)*.9)/rl,(d+.05+c.getY(p)*.9)/a0);return s.setAttribute("color",new Bt(l,3)),s}function v1(n){return qg(M1(n),n?.effect)}function M1(n){let e=n?.shape==="asset"?ef(n.assetId):null,t=of[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new _i().load(n.texture);a.colorSpace=vt,a.wrapS=a.wrapT=Cn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Cn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new He(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??of.original;if(n?.surface==="windows"&&!n.texture)return new pn({vertexColors:!0,map:e0("windows"),emissive:"#ffffff",emissiveMap:y1(),emissiveIntensity:1.3,roughness:i,metalness:s});if(!n?.texture)return new pn({vertexColors:!0,map:n?.uv?e0(n.surface):c0(),roughness:i,metalness:s});let r=new _i().load(n.texture);return r.colorSpace=vt,r.wrapS=r.wrapT=Cn,new pn({vertexColors:!0,map:r,roughness:i,metalness:s})}function Xh(n){return n?.parts?.some(h0)?n.parts.map(v1):new pn({vertexColors:!0,map:c0(),roughness:.68})}function qh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ji&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function lf(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Wh(s);let r=new sn(...s.rotation.map(Te.degToRad),"ZYX"),o=new b(...s.scale).multiply(new b(...[0,1,2].map(a=>new b().setComponent(a,1).applyEuler(r).multiply(e).length())));return Wh(s,o)}),i=Lh(t,n.some(h0));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function Yh(n,e=null){let t=lf(n.parts),i=t.boundingBox.getSize(new b).max(new b(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=lf(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function ol(n){let e=new fn;for(let t of n.parts??[]){let i=Wh(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new b,new b(1,1,1)),e}function Bo(n){return ol(n).getSize(new b)}function u0(n){let e=ol(n),t=e.getCenter(new b),i=e.getSize(new b),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":af.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Te.clamp(s.precision,8,96):48,center:r?new b(...s.center):t,size:r?new b(...s.size):i,rotation:r?new b(...s.rotation??[0,0,0]):new b,boundsCenter:t,boundsSize:i}}function b1(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new b().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function S1(n,e=null){let t=u0(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new b(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,d)=>d!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new Es(l,c,Math.max(2,Math.round(i/8)),i):new yi(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=lf(n.parts),r=b1(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new us(r),a=t.boundsSize.clone().max(new b(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new Ze(1,1,1)}function d0(n,e=null){let t=u0(n),i=t.boundsSize.clone().max(new b(1e-5,1e-5,1e-5)),s=e?new b(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=S1(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Te.degToRad(t.rotation.x)),a.rotateY(Te.degToRad(t.rotation.y)),a.rotateZ(Te.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function f0(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=ol(n),i=t.getCenter(new b),s=t.getSize(new b).max(new b(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new b(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Wh(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new b).sub(i).multiply(r),size:l.getSize(new b).multiply(r).max(new b(.01,.01,.01))};return a.dispose(),[c]})}var x0=512,df=1/2.6**2,Jh=1e4,ll=20,w1=1e6,ff=1e4,T1=1e4,pf=10,mf=10,E1=1e4,A1=16,zo=1e4,p0=new WeakMap,Bi=Te.clamp,zi=Te.lerp,cl=n=>n*n*(3-2*n);function Pt(n,e,t,i){return Number.isFinite(n)?Bi(n,e,t):i}function y0(n){if(!n)return null;let e=Tr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var C1=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function _0(n,e=A1){return Math.round(Pt(n,1,x0,e))}function R1(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return Pt(n[e+"Density"],0,ll,0);let r=Pt(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return Pt(o/t,0,ll,0)}var I1=["grass","shrub","model"],P1=["keep","fit","stretch"],D1=/^#[a-f\d]{6}$/i,L1=20;function U1(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(Pt(n.minHeight,-300,300,-300),Pt(n.maxHeight,-300,300,300)),[s,r]=e(Pt(n.minX,0,100,0),Pt(n.maxX,0,100,100)),[o,a]=e(Pt(n.minZ,0,100,0),Pt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:Pt(n.maxSlope,0,90,90),yaw:Pt(n.yaw,-360,360,0),yawVariation:Pt(n.yawVariation,0,360,360)}}function F1(n){return n?{x:Pt(n.x,-256,256,0),z:Pt(n.z,-256,256,0),radius:Pt(n.radius,.1,512,5),blend:Pt(n.blend,0,1,.5)}:null}function hl(n={}){let e=y0(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,pf).map(r=>D1.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:Pt(n.density,0,ll,1),colors:s,seed:Math.round(Pt(n.seed,0,2147483647,1)),size:Pt(n.size,.05,ff,1),fit:P1.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:Pt(n.variation,0,mf,0),...n.scatter?{scatter:U1(n.scatter)}:{}}}function N1(n,e){return Array.isArray(n.rules)?n.rules.slice(0,Jh).filter(t=>t&&typeof t=="object"&&I1.includes(t.kind)).filter(t=>t.kind!=="model"||y0(t.model)).map(hl):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=R1(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[hl({kind:t,model:a,density:o,seed:n.seed,size:Pt(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function fs(n={},e=1){let t=_0(n?.detail),i=n?.heights;return{detail:t,...["varied","irregular","staggered"].includes(n?.triangulation)?{triangulation:n.triangulation}:{},...n?.thickness>0?{thickness:Pt(n.thickness,0,100,0)}:{},seed:Math.round(Pt(n?.seed,0,2147483647,1)),amplitude:Pt(n?.amplitude,0,1e4,0),frequency:Pt(n?.frequency,1e-5,100,.12),octaves:Math.round(Pt(n?.octaves,1,L1,3)),roughness:Pt(n?.roughness,0,1,.42),ridge:Pt(n?.ridge,0,1,0),edgeFade:Pt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:F1(n.reliefArea)}:{},rules:N1(n??{},e),...["triplanar","regolith"].includes(n?.projection)?{projection:n.projection}:{},textureDensity:Pt(n?.textureDensity,1e-4,E1,df),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&C1.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>Pt(s,-zo,zo,0)):null}}function gf(n,e,t){return t!==void 0&&kn(n,e,t)>.5}function uf(n,e=n.detail){let{triangulation:t,seed:i}=n;if(t!=="irregular"&&t!=="staggered")return null;let s=e+1,r=s**2,o=new Float32Array(r),a=new Float32Array(r);for(let l=0;l<=e;l++)for(let c=0;c<=e;c++){let h=l*s+c,u=l>0&&l<e&&c>0&&c<e,d=u&&t==="irregular";o[h]=c+(d?(2*kn(c,l,i)-1)*.2:u?.25*(l%2?1:-1):0),a[h]=l+(d?(2*kn(c,l,i+417)-1)*.2:0)}return{x:o,z:a,staggered:t==="staggered"}}function v0(n,e,t,i){return i?.staggered?e%2===1:gf(n,e,t)}var ks={a:0,b:0,c:0,u:0,v:0};function Zh(n,e,t,i,s,r){let o=n-t.x[i],a=e-t.z[i],l=t.x[s]-t.x[i],c=t.z[s]-t.z[i],h=t.x[r]-t.x[i],u=t.z[r]-t.z[i],d=1/(l*u-c*h),f=(o*u-a*h)*d,p=(l*a-c*o)*d;return f<-1e-6||p<-1e-6||f+p>1+1e-6?!1:(ks.a=i,ks.b=s,ks.c=r,ks.u=f,ks.v=p,!0)}function m0(n,e,t,i,s,r,o){let a=r*i+s,l=a+1,c=a+i,h=c+1;return v0(s,r,o,t)?Zh(n,e,t,a,c,h)||Zh(n,e,t,a,h,l):Zh(n,e,t,a,c,l)||Zh(n,e,t,h,l,c)}function xf(n,e,t,i,s){let r=t+1,o=Math.min(t-1,Math.floor(n)),a=Math.min(t-1,Math.floor(e));if(m0(n,e,s,r,o,a,i))return!0;for(let l=Math.max(0,a-1);l<=Math.min(t-1,a+1);l++)for(let c=Math.max(0,o-1);c<=Math.min(t-1,o+1);c++)if((c!==o||l!==a)&&m0(n,e,s,r,c,l,i))return!0;return!1}function M0(n,e,t,i,s,r){let o=Bi(t,0,e),a=Bi(i,0,e);if(r&&xf(o,a,e,s,r)){let{a:_,b:M,c:y,u:T,v:E}=ks;return n[_]+(n[M]-n[_])*T+(n[y]-n[_])*E}let l=Math.min(e-1,Math.floor(o)),c=Math.min(e-1,Math.floor(a)),h=o-l,u=a-c,d=e+1,f=c*d+l,p=n[f],x=n[f+1],g=n[f+d],m=n[f+d+1];return gf(l,c,s)?h>=u?p+(x-p)*h+(m-x)*u:p+(m-g)*h+(g-p)*u:h+u<=1?p+(x-p)*h+(g-p)*u:m+(g-m)*(1-h)+(x-m)*(1-u)}function yf(n,e){let t=_0(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=uf(n),o=uf(n,t),a=n.triangulation?n.seed:void 0,l=Array.from({length:i**2},(c,h)=>M0(n.heights,n.detail,(o?.x[h]??h%i)*s,(o?.z[h]??Math.floor(h/i))*s,a,r));return{...n,detail:t,heights:l}}function kn(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function jh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=cl(n-i),o=cl(e-s),a=zi(kn(i,s,t),kn(i+1,s,t),r),l=zi(kn(i,s+1,t),kn(i+1,s+1,t),r);return 2*zi(a,l,o)-1}function Er(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f}=i,p=p0.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.triangulation===i.triangulation&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===d;if(x&&p.heights===f)return p;let g=s+1,m=x?p.layout:uf(i),_=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let T=0;T<=s;T++)for(let E=0;E<=s;E++){let I=T*g+E,C=((m?.x[I]??E)/s-.5)*e,S=((m?.z[I]??T)/s-.5)*t,v=1;if(d){let V=Math.hypot(C-d.x,S-d.z);if(V>=d.radius)continue;d.blend&&(v=cl(Math.min(1,(d.radius-V)/(d.radius*d.blend))))}let R=C*a,L=S*a,O=0,z=1,X=0;for(let V=0;V<l;V++){let oe=jh(R*2**V,L*2**V,r+V*13);O+=z*zi(oe,1-2*Math.abs(oe),h),X+=z,z*=c}let W=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(T/s-.5))*2)),u*2):1,te=l===3&&c===.42&&h===0&&u===0;_[T*g+E]=v*(te?o*(.62*jh(R,L,r)+.26*jh(R*2.03,L*2.03,r+13)+.12*jh(R*4.13,L*4.13,r+37)):o*O/X*W)}let M=f?_.map((T,E)=>T+f[E]):_,y={w:e,d:t,detail:s,seed:r,layout:m,triangulation:i.triangulation,diagonalSeed:i.triangulation?r:void 0,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f,procedural:_,surface:M};return p0.set(n,y),y}function Kh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return M0(o,i,(e/s+.5)*i,(t/r+.5)*i,n.diagonalSeed,n.layout)}function ko(n=0){return(Math.round(n/90)%4+4)%4*90}function b0(n){let e=ko(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function S0(n,e,t){let{cos:i,sin:s}=b0(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function al(n){return ko(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function g0(n,e,t){return n.y+Kh(Er(n),...S0(n,e,t))}var O1=.25;function _f(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=al(n),s=al(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let d=e[r]-u*s[a]/2,f=d-(n[r]+u*i[a]/2);Math.abs(f)<=O1&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:d,delta:f})}}return t}function w0(n,e,t=1.5){let i=_f(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:d}=i,f=n.terrain;if(Math.abs(al(n)[a]-al(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let S=e.terrain.detail,v=Math.ceil(f.detail/S)*S;v<=x0&&(f=yf(f,v))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:_,layout:M}=Er(p),y=m?.slice()??Array((x+1)**2).fill(0),T=Math.max(t,al(p)[o]/x),{cos:E,sin:I}=b0(p),C=!1;for(let S=0;S<=x;S++)for(let v=0;v<=x;v++){let R=S*(x+1)+v,L=((M?.x[R]??v)/x-.5)*p.w,O=((M?.z[R]??S)/x-.5)*p.d,z=p.x+E*L+I*O,X=p.z-I*L+E*O,W=r==="x"?z:X;if(W<l-1e-6||W>c+1e-6)continue;let te=Math.max(0,h*(u-(s==="x"?z:X)));if(te>T)continue;let V=s==="x"?g0(e,u,X):g0(e,z,u),oe=zi(_[R],V-p.y,cl(1-te/T))-g[R];y[R]=Bi(oe,-zo,zo),C||=y[R]!==oe}return{piece:{...p,terrain:{...f,heights:y}},clipped:C}}function B1(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(h+=s[d*r+f],u++);return h/u}function T0(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Er(n),{detail:l,w:c,d:h,surface:u,procedural:d,layout:f}=a,[p,x]=S0(n,e,t),g=Bi(p,-c/2,c/2),m=Bi(x,-h/2,h/2);if((p-g)**2+(x-m)**2>=s**2)return!1;let _=(p/c+.5)*l,M=(x/h+.5)*l,y=c/l,T=h/l,E=Math.max(0,Math.ceil(_-s/y-(f?.25:0))),I=Math.min(l,Math.floor(_+s/y+(f?.25:0))),C=Math.max(0,Math.ceil(M-s/T-(f?.25:0))),S=Math.min(l,Math.floor(M+s/T+(f?.25:0))),v=Number.isFinite(o)?o-n.y:Kh(a,p,x),R=l+1,L=a.heights?.slice()??new Array(R**2).fill(0),O=!1,z=!1;function X(W,te,V){O=!0;let oe=te*R+W,xe=L[oe],ye;if(i==="raise"||i==="lower")ye=xe+(i==="raise"?1:-1)*r*V;else{let Ne=i==="flatten"?v:B1(a,W,te);ye=zi(u[oe],Ne,Math.min(1,r)*V)-d[oe]}ye=Bi(ye,-zo,zo),!(Math.abs(ye-xe)<1e-7)&&(L[oe]=ye,z=!0)}for(let W=C;W<=S;W++)for(let te=E;te<=I;te++){let V=W*R+te,oe=Math.hypot(((f?.x[V]??te)-_)*y,((f?.z[V]??W)-M)*T)/s;oe<1&&X(te,W,cl(1-oe))}if(!O){let W=Bi(_,0,l),te=Bi(M,0,l),V=Math.min(l-1,Math.floor(W)),oe=Math.min(l-1,Math.floor(te)),xe=W-V,ye=te-oe;if(f&&xf(W,te,l,a.diagonalSeed,f)){let{a:Ne,b:We,c:ct,u:it,v:ie}=ks,k=1-it-ie>=Math.max(it,ie)?Ne:it>=ie?We:ct;X(k%R,Math.floor(k/R),1)}else{let Ne=xe+ye<=1,We=Ne?1-xe-ye:xe+ye-1,ct=Ne?xe:1-ye,it=Ne?ye:1-xe;if(We>=Math.max(ct,it)){let ie=+!Ne;X(V+ie,oe+ie,1)}else ct>=it?X(V+1,oe,1):X(V,oe+1,1)}}return z&&(n.terrain.heights=L),z}function E0(n,e){let t=e.terrain?.projection==="regolith";if(!t&&e.terrain?.projection!=="triplanar")return;let i=n.onBeforeCompile,s=n.customProgramCacheKey(),r=Te.degToRad(e.uvRotation??0),o=Math.sqrt(e.terrain.textureDensity??df)/(e.uvScale??1);n.onBeforeCompile=function(a,l){Object.assign(a.uniforms,{terrainRepeat:{value:o},terrainUvBasis:{value:new ae(Math.cos(r),Math.sin(r))},terrainUvOffset:{value:new ae(e.uvOffsetX??0,e.uvOffsetY??0)},terrainHalfSize:{value:new ae(e.w/2,e.d/2)}});let c=`varying vec3 terrainPoint; varying vec3 terrainNormal;
`;a.vertexShader=c+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
terrainPoint=position; terrainNormal=normal;`),a.fragmentShader=c+`
      uniform float terrainRepeat;
      uniform vec2 terrainUvBasis,terrainUvOffset,terrainHalfSize;
      vec2 terrainUv(vec2 value){
        vec2 r=terrainUvBasis;
        return mat2(r.x,r.y,-r.y,r.x)*value*terrainRepeat+terrainUvOffset;
      }
    `+a.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        vec3 weight=pow(abs(normalize(terrainNormal)),vec3(4.0));
        weight/=max(.0001,weight.x+weight.y+weight.z);
        vec3 p=terrainPoint;
        vec4 xSample=texture2D(map,terrainUv(vec2(p.z+terrainHalfSize.y,p.y)));
        vec4 ySample=texture2D(map,terrainUv(vec2(p.x+terrainHalfSize.x,terrainHalfSize.y-p.z)));
        vec4 zSample=texture2D(map,terrainUv(vec2(p.x+terrainHalfSize.x,p.y)));
        ${t?`
        vec2 macro=p.xz;
        vec2 alt=mat2(.79,.61,-.61,.79)*macro*.39;
        float veins=smoothstep(-.85,.85,sin(macro.x*.073+sin(macro.y*.057))+sin(macro.y*.091-macro.x*.021)*.68);
        vec4 mixedDust=mix(ySample,texture2D(map,terrainUv(alt)+.371),.26+veins*.29);
        mixedDust.rgb*=.74+veins*.43;
        diffuseColor*=xSample*weight.x+mixedDust*weight.y+zSample*weight.z;
        `:"diffuseColor*=xSample*weight.x+ySample*weight.y+zSample*weight.z;"}
      #endif
    `),i.call(this,a,l)},n.customProgramCacheKey=()=>s+(t?"|terrain-regolith":"|terrain-triplanar")}function A0(n){let{w:e,d:t,terrain:i}=n,{detail:s,layout:r,diagonalSeed:o}=Er(n),a=s+1,l=a**2,c=i.thickness??0,h=c?4*s:0,u=l*(c?2:1)+4*h,d=new Float32Array(u*3),f=new Float32Array(u*2),p=u>65536?Uint32Array:Uint16Array,x=s**2*6,g=new p(x*(c?2:1)+h*6),m=Math.sqrt(i.textureDensity??df),_=0;for(let T=0;T<=s;T++)for(let E=0;E<=s;E++){let I=T*a+E,C=(r?.x[I]??E)/s,S=(r?.z[I]??T)/s;if(d[3*I]=(C-.5)*e,d[3*I+2]=(S-.5)*t,f[2*I]=C*e*m,f[2*I+1]=(1-S)*t*m,T>=s||E>=s)continue;let v=I+1,R=I+a,L=R+1;v0(E,T,o,r)?(g[_++]=I,g[_++]=R,g[_++]=L,g[_++]=I,g[_++]=L,g[_++]=v):(g[_++]=I,g[_++]=R,g[_++]=v,g[_++]=L,g[_++]=v,g[_++]=R)}let M=[];if(c){d.copyWithin(l*3,0,l*3),f.copyWithin(l*2,0,l*2);for(let E=0;E<x;E+=3)g[_++]=l+g[E],g[_++]=l+g[E+2],g[_++]=l+g[E+1];let T=(E,I)=>{for(let C=0;C<s;C++){let S=E+C*I,v=S+I,R=l*2+M.length*4;M.push([S,v]);for(let L=0;L<4;L++){let O=L%2?v:S;d[3*(R+L)]=d[3*O],d[3*(R+L)+2]=d[3*O+2];let z=Math.abs(I)===1?e:t;f[2*(R+L)]=(C+L%2)/s*z*m,f[2*(R+L)+1]=L<2?c*m:0}g.set([R,R+1,R+2,R+1,R+3,R+2],_),_+=6}};T(0,1),T(s,a),T(l-1,-1),T(l-a,-a)}let y=new mt;return y.setAttribute("position",new Bt(d,3).setUsage(ja)),y.setAttribute("uv",new Bt(f,2)),y.setIndex(new Bt(g,1)),y.userData.terrainSides=M,vf(y,n),y}function vf(n,e){let{surface:t}=Er(e),{position:i}=n.attributes,s=e.terrain.thickness??0,r=t.length;for(let o=0;o<r;o++)i.setY(o,t[o]),s&&i.setY(r+o,t[o]-s);n.userData.terrainSides.forEach(([o,a],l)=>{let c=r*2+l*4;i.setY(c,t[o]),i.setY(c+1,t[a]),i.setY(c+2,t[o]-s),i.setY(c+3,t[a]-s)}),i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function z1(n,e,t,i){let{detail:s,w:r,d:o,surface:a,layout:l}=n,c=Bi((e/r+.5)*s,0,s),h=Bi((t/o+.5)*s,0,s);if(l&&xf(c,h,s,n.diagonalSeed,l)){let{a:_,b:M,c:y}=ks,T=(l.x[M]-l.x[_])*r/s,E=(l.z[M]-l.z[_])*o/s,I=a[M]-a[_],C=(l.x[y]-l.x[_])*r/s,S=(l.z[y]-l.z[_])*o/s,v=a[y]-a[_];return i.set(I*S-E*v,E*C-T*S,T*v-I*C).normalize()}let u=Math.min(s-1,Math.floor(c)),d=Math.min(s-1,Math.floor(h)),f=s+1,p=d*f+u;if(gf(u,d,n.diagonalSeed)){let _=c-u>=h-d,M=_?a[p+1]-a[p]:a[p+f+1]-a[p+f],y=_?a[p+f+1]-a[p+1]:a[p+f]-a[p];return i.set(-M*s/r,1,-y*s/o).normalize()}let x=c-u+h-d<=1,g=x?a[p+1]-a[p]:a[p+f+1]-a[p+f],m=x?a[p+f]-a[p]:a[p+f+1]-a[p+1];return i.set(-g*s/r,1,-m*s/o).normalize()}function k1(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new mt;return e.setAttribute("position",new ze(n,3)),e.setAttribute("uv",new ze(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function V1(){return new gi(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function G1(n,e,t){if(e==="stretch")return new b().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function H1(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),h=[],u=new b;if(!c||!e.density)return{requested:0,positions:h,area:c};let d=Math.cos(Te.degToRad(s.maxSlope)),f=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,T)=>{if(p){let E=n.y+Kh(t,y,T);if(E<s.minHeight||E>s.maxHeight)return!1}return!f||z1(t,y,T,u).y>=d-1e-7},g=1;if(f||p){let y=0,T=32;for(let E=0;E<T;E++)for(let I=0;I<T;I++)x(zi(r,o,(I+.5)/T),zi(a,l,(E+.5)/T))&&y++;g=y/T**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),M=f||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<M&&h.length<_;y++){let T=zi(r,o,kn(y,27,e.seed)),E=zi(a,l,kn(y,27,e.seed+1));x(T,E)&&h.push([T,E])}return{requested:m,positions:h,area:c*g}}function C0(n){let e=new bn,t=Er(n);e.userData.distribution=[];let i=w1,s=T1;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=H1(n,o,t,i),h=l?l.length:Math.min(a,i),u=o.collidable?Math.min(h,s):0;if(i-=h,s-=u,e.userData.distribution[r]={requested:a,count:h,area:c,collisions:u},!h)continue;let d=o.kind==="grass",f=o.model?G1(Bo(o.model),o.fit,o.size):null,p=o.model?Yh(o.model,f):d?k1():V1();f?p.scale(...f):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?Xh(o.model):new si({color:"#ffffff",side:d?un:ti,flatShading:!0});if(d&&n.terrain.grassTexture){let M=new _i().load(n.terrain.grassTexture);M.colorSpace=vt,x.map=M,x.userData.ownTexture=!0}let g=new Sa(p,x,h);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:u,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(ja),g.receiveShadow=!0;let m=o.colors.map(M=>new He(M)),_=new He;for(let M=0;M<h;M++){let y=kn(M,41,o.seed)*(m.length-1),T=Math.floor(y);g.setColorAt(M,_.copy(m[T]).lerp(m[T+1],y-T))}e.add(g)}return W1(e,n),e}function W1(n,e){let t=Er(e),i=new Kt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(kn(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(kn(c,27,r+1)-.5)*.96*e.d;i.position.set(h,Kh(t,h,u),u),i.rotation.y=l?Te.degToRad(l.yaw+kn(c,27,r+2)*l.yawVariation):kn(c,27,r+2)*Math.PI*2,i.scale.setScalar(zi(Math.max(.05,1-o),1+o,kn(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function R0(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),qh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var P0=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Mf=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],ul={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},X1=16e6,Vo=512,Ki=1024,oi=2e4,Vs=512,$h=1024,Ut=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,I0=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function q1(n){return!n||!Number.isFinite(n.seconds)||!(n.x>0||n.z>0)?null:{x:Ut(n.x,0,640,0),z:Ut(n.z,0,640,0),seconds:Ut(n.seconds,10,900,90),phase:Ut(n.phase,-360,360,0),rise:Ut(n.rise,0,100,0)}}function yn(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>X1)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>Vo)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+Vo+" pi\xE8ces.");let e=n.spawn??{},t=n.boundary,i=El(n.environment),s=n.pieces.filter(r=>!Sr(r?.sceneryId)&&!Gh(r?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:I0(n.name,56,"Ma map"),worldSize:Ut(n.worldSize,24,2048,240),...i?{environment:i}:{},...t?.diameter>0?{boundary:{diameter:Ut(t.diameter,12,2048,650),ceiling:Ut(t.ceiling,3,256,128)}}:{},spawn:{x:Ut(e.x,-Ki,Ki,0),y:Ut(e.y,-oi,oi,.06),z:Ut(e.z,-Ki,Ki,3),yaw:Ut(e.yaw,-360,360,0)},pieces:s.map((r,o)=>{if(!r||typeof r!="object")throw Error("Pi\xE8ce invalide : "+(o+1));let a=r.terrain?$h:Vs,l=Ut(r.w,.05,a,3),c=Ut(r.d,.05,a,3),h=r.solid===!1?q1(r.flight):null,u=r.terrain&&typeof r.terrain=="object"?fs(r.terrain,l*c):null,d=r.model?Tr({version:1,models:[r.model]}).models[0]:null;if(d&&!d.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:I0(r.name,36,"Pi\xE8ce "+(o+1)),...typeof r.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(r.sceneryId)?{sceneryId:r.sceneryId}:{},x:Ut(r.x,-Ki,Ki,0),y:Ut(r.y,-oi,oi,0),z:Ut(r.z,-Ki,Ki,0),w:l,h:Ut(r.h,.05,256,.5),d:c,pitch:u?0:Ut(r.pitch,-180,180,0),yaw:u?ko(Ut(r.yaw,-360,360,0)):Ut(r.yaw,-360,360,0),roll:u?0:Ut(r.roll,-180,180,0),...u?{terrain:u}:{},...h?{flight:h}:{},...d?{model:d}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(r.primitive)?r.primitive:"box",uvScale:Ut(r.uvScale,.05,100,1),uvOffsetX:Ut(r.uvOffsetX,-100,100,0),uvOffsetY:Ut(r.uvOffsetY,-100,100,0),uvRotation:Ut(r.uvRotation,-360,360,0),material:Math.round(Ut(r.material,0,16,0)),color:typeof r.color=="string"&&/^#[a-f0-9]{6}$/i.test(r.color)?r.color:"#ffffff",grip:Ut(r.grip,0,1.5,.8),gravity:Ut(r.gravity,.05,2.5,1),bounce:Ut(r.bounce,0,1.65,1),solid:r.solid!==!1,texture:typeof r.texture=="string"&&r.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(r.texture)?r.texture:null}})}}function D0(n){return yn({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Eg,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new sn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function L0(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return yn({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,ul.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,ul.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,ul.rubber)]})}function ai(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function U0(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new sn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new b(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>Ki||Math.abs(u)>Ki||Math.abs(h)>oi?null:{...t,x:c,y:h,z:u}}var F0="gorilla-lab-custom-map-v1";function N0(n){let e=new Blob([JSON.stringify(yn(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var Y1=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function bf(){return ai({name:"Miroir",sceneryId:"lab-mirror",x:Ls.x,y:Ls.y,z:Ls.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function O0(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&Y1.has(e)):!1:!0}var B0=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Sf=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},V0=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",Go=(n,e,t)=>Math.min(t,Math.max(e,n)),Z1=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Qh=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function G0(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var H0="gorilla-lab-texture-shelf-v1";function j1(){try{let n=JSON.parse(localStorage.getItem(H0)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function z0(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=V0(t),r.fillRect(0,0,o,o);let a=G0(s),l=o/Math.max(4,2*Math.round(4*i)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(i),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<u;d++){let f=a()*o,p=a()*o,x=a(),g=a(),m=a();Qh(r,_=>{if(e==="rock"){let M=(4+x*22)*h;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let T=y*Math.PI/3+g,E=M*(.63+.3*Math.cos(T*2+g)+.25);_.lineTo(f+Math.cos(T)*E,p+Math.sin(T)*E*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let M=(1+x*x*12)*h,y=_.createRadialGradient(f,p,0,f,p,M);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(f-M,p-M,M*2,M*2)}else if(e==="grass"||e==="wood"){let M=e==="grass",y=(M?5+x*25:7+x*110)*h;_.strokeStyle=M?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*h,_.beginPath(),_.moveTo(f,p),M?_.quadraticCurveTo(f+y*(g-.5)*.55,p-y*.58,f+y*(g-.6),p-y):_.quadraticCurveTo(f+y*.5,p+10*(g-.5),f+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let M=(e==="sand"?.6+x*1.6:1+x*5)*h;_.fillRect(f,p,M,M*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Qh(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,Go(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var J1=`
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
`;function K1(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=J1,document.head.append(n)}async function k0(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function wf({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){K1();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=N=>o.querySelector(N),l=a(".texture-canvas"),c=a(".texture-tile"),h=Sf(),u=Sf(),d={pattern:B0.some(([N])=>N===i)?i:"grain",base:V0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,M=!1,y=null,T="paint",E=null,I=null;a("#studio-title").textContent=t+" / SURFACE LAB";let C=[],S=-1;a("[data-field=base]").value=d.base;for(let N of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+N+"]").addEventListener("input",Z=>{let Ee=Z.target.value;d[N]=N==="seed"?Math.trunc(Go(Number(Ee)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(N)?Number(Ee):Ee});let v=N=>{a("[data-status]").textContent=N},R=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let N=c.getContext("2d");N.clearRect(0,0,256,128);for(let Z=0;Z<2;Z++)for(let Ee=0;Ee<4;Ee++)N.drawImage(l,Ee*64,Z*64,64,64)},L=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:C,editingShape:S}),O=N=>{p.putImageData(N.base,0,0),x.putImageData(N.top,0,0),C=N.shapes,S=N.editingShape,W(),R()},z=()=>{I=null,g.push(L()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},X=(N,Z)=>{N.length&&(I=null,Z.push(L()),O(N.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},W=()=>{a("[data-shape-count]").textContent=C.length+" forme"+(C.length>1?"s":""),a("[data-cmd=add-shape]").textContent=S<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(S+1),a("[data-shape-list]").replaceChildren(...C.map((N,Z)=>{let Ee=document.createElement("div");Ee.className="texture-setting-row";let D=document.createElement("canvas");D.width=48,D.height=32;let re=Math.min(48/N.width,32/N.height);D.getContext("2d").drawImage(N,0,0,N.width*re,N.height*re);let Q=document.createElement("button"),j=document.createElement("button");return Q.textContent="Modifier "+(Z+1),j.textContent="Supprimer "+(Z+1),Q.onclick=()=>{z(),S=Z,x.clearRect(0,0,512,512),x.drawImage(N,(512-N.width)/2,(512-N.height)/2),W(),R()},j.onclick=()=>{z(),C=C.filter((ee,ge)=>ge!==Z),S===Z?(S=-1,x.clearRect(0,0,512,512)):S>Z&&S--,W(),R()},Ee.append(D,Q,j),Ee}))};a("[data-cmd=add-shape]").onclick=()=>{let N=x.getImageData(0,0,512,512).data,Z=512,Ee=512,D=-1,re=-1;for(let j=0;j<512;j++)for(let ee=0;ee<512;ee++)N[4*(j*512+ee)+3]&&(Z=Math.min(Z,ee),Ee=Math.min(Ee,j),D=Math.max(D,ee),re=Math.max(re,j));if(D<0){v("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let Q=document.createElement("canvas");Q.width=D-Z+1,Q.height=re-Ee+1,Q.getContext("2d").drawImage(u,Z,Ee,Q.width,Q.height,0,0,Q.width,Q.height),z(),C=S<0?[...C,Q]:C.map((j,ee)=>ee===S?Q:j),S=-1,x.clearRect(0,0,512,512),W(),R(),v("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let te=()=>{let N=(ee,ge,fe)=>Go(Number(a("[data-field="+ee+"]").value)||0,ge,fe),Z=Math.round(N("density",1,1e3)),Ee=N("minScale",1,200)/100,D=Math.max(Ee,N("maxScale",1,200)/100),re=N("rotation",0,360)*Math.PI/180,Q=a("[data-field=mirror]").checked,j=G0(d.seed);z(),d.pattern="solid",z0(h,d);for(let ee=0;ee<Z&&C.length;ee++){let ge=C[Math.floor(j()*C.length)],fe=j()*512,Me=j()*512,Ke=j()*re,Xe=512*(Ee+j()*(D-Ee))/Math.max(ge.width,ge.height),P=Q&&j()<.5?-1:1;Qh(p,w=>{w.translate(fe,Me),w.rotate(Ke),w.scale(P*Xe,Xe),w.drawImage(ge,-ge.width/2,-ge.height/2)})}R(),v(C.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},V=N=>{let Z=l.getBoundingClientRect();return{x:(N.clientX-Z.left)/Z.width*512,y:(N.clientY-Z.top)/Z.height*512}},oe=N=>{let Z=d.size/2,Ee=d.opacity;Qh(x,D=>{D.save(),T==="erase"&&(D.globalCompositeOperation="destination-out"),D.globalAlpha=Ee;let re=Go(d.hardness,.05,1);if(T==="stamp")D.fillStyle=d.ink,D.translate(N.x,N.y),D.rotate(Math.PI/4),D.fillRect(-Z*.8,-Z*.8,Z*1.6,Z*1.6);else{let Q=D.createRadialGradient(N.x,N.y,Z*re*.85,N.x,N.y,Z);if(T==="erase")Q.addColorStop(0,"rgba(0,0,0,1)"),Q.addColorStop(1,"rgba(0,0,0,0)");else{let j=d.ink.match(/[\da-f]{2}/gi).map(ee=>parseInt(ee,16)).join(",");Q.addColorStop(0,"rgba("+j+",1)"),Q.addColorStop(1,"rgba("+j+",0)")}D.fillStyle=Q,D.beginPath(),D.arc(N.x,N.y,Z,0,2*Math.PI),D.fill()}D.restore()})},xe=(N,Z)=>{let Ee=Math.hypot(Z.x-N.x,Z.y-N.y),D=Math.max(1,Math.ceil(Ee/Math.max(2,d.size*.18)));for(let re=1;re<=D;re++)oe({x:N.x+(Z.x-N.x)*re/D,y:N.y+(Z.y-N.y)*re/D})},ye=N=>{let Z=f.getImageData(Math.floor(Go(N.x,0,511)),Math.floor(Go(N.y,0,511)),1,1).data;d.ink="#"+[...Z].slice(0,3).map(Ee=>Ee.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,v("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",N=>{if(N.button!==0||M)return;let Z=V(N);if(T==="pick"){ye(Z);return}N.preventDefault(),z(),M=!0,y=N.pointerId,E=Z,l.setPointerCapture(N.pointerId),oe(Z),R()}),l.addEventListener("pointermove",N=>{if(!M||N.pointerId!==y)return;N.preventDefault();let Z=V(N);T==="stamp"?oe(Z):xe(E,Z),E=Z,R()});let Ne=N=>{N.pointerId===y&&(M=!1,y=null,E=null,l.hasPointerCapture(N.pointerId)&&l.releasePointerCapture(N.pointerId))};l.addEventListener("pointerup",Ne),l.addEventListener("pointercancel",Ne);for(let N of o.querySelectorAll("[data-tool]"))N.onclick=()=>{T=N.dataset.tool,o.querySelectorAll("[data-tool]").forEach(Z=>Z.setAttribute("aria-pressed",String(Z===N)))};a("[data-cmd=generate]").onclick=te,a("[data-cmd=undo]").onclick=()=>X(g,m),a("[data-cmd=redo]").onclick=()=>X(m,g),a("[data-cmd=export]").onclick=()=>Z1(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async N=>{let Z=N.target.files?.[0];if(N.target.value="",!!Z)try{if(!["image/png","image/jpeg","image/webp"].includes(Z.type))throw Error("Image PNG / JPG / WebP uniquement.");if(Z.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ee=await createImageBitmap(Z);z(),p.clearRect(0,0,512,512),p.drawImage(Ee,0,0,512,512),Ee.close(),x.clearRect(0,0,512,512),R(),v("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ee){v(Ee.message)}});let We=N=>{!N&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ct,!0),o.remove())},ct=N=>{if(N.key==="Escape"){N.preventDefault(),We(!1);return}(N.ctrlKey||N.metaKey)&&!N.target.closest("input,select")&&N.key.toLowerCase()==="z"&&(N.preventDefault(),N.stopImmediatePropagation(),N.shiftKey?X(m,g):X(g,m))};window.addEventListener("keydown",ct,!0),a("[data-cmd=close]").onclick=()=>We(!1),a("[data-cmd=cancel]").onclick=()=>We(!1);let it=()=>{if(I?.recipe.resolution===d.resolution&&I.data.length<=s)return I.data;for(let N of[d.resolution,256,128].filter((Z,Ee,D)=>Z<=d.resolution&&D.indexOf(Z)===Ee)){let Z=document.createElement("canvas");Z.width=Z.height=N,Z.getContext("2d").drawImage(l,0,0,N,N);for(let Ee of[.85,.72,.58]){let D=Z.toDataURL("image/webp",Ee);if(D.length<=s)return D}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},ie=j1(),k=a("[data-field=shelf]");function ce(N=""){k.replaceChildren(new Option("Choisir une texture",""),...ie.map(Ee=>new Option(Ee.name,Ee.id))),k.value=N;let Z=!!k.value;a("[data-cmd=shelf-load]").disabled=!Z,a("[data-cmd=shelf-remove]").disabled=!Z}function ue(N,Z){try{localStorage.setItem(H0,JSON.stringify(N))}catch{return v("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return ie.splice(0,ie.length,...N),ce(Z),!0}return k.onchange=()=>ce(k.value),a("[data-cmd=shelf-save]").onclick=()=>{let N=B0.find(([Ee])=>Ee===d.pattern)?.[1]??"Texture",Z=prompt("Nom de la texture",N)?.trim().slice(0,50);if(Z)try{let Ee={id:crypto.randomUUID(),name:Z,data:it()},{pattern:D,base:re,scale:Q,seed:j,resolution:ee}=d;Ee.recipe={pattern:D,base:re,scale:Q,seed:j,resolution:ee},ue([...ie,Ee],Ee.id)&&v("Texture disponible dans les deux ateliers.")}catch(Ee){v(Ee.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let N=ie.find(Z=>Z.id===k.value);if(!(!N||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let Z=Sf();await k0(N.data,Z),z(),p.clearRect(0,0,512,512),p.drawImage(Z,0,0),x.clearRect(0,0,512,512),Object.assign(d,N.recipe),I=N;for(let Ee of["base","seed","resolution"])a("[data-field="+Ee+"]").value=d[Ee];R(),v("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(Z){v(Z.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{ue(ie.filter(N=>N.id!==k.value),"")&&v("Texture retir\xE9e de la biblioth\xE8que.")},ce(),a("[data-cmd=apply]").onclick=async()=>{let N=a("[data-cmd=apply]");N.disabled=!0;try{let Z=it();await r(Z),_=!1,We(!0)}catch(Z){v(Z.message||"Impossible d\u2019appliquer la texture.")}finally{N.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,z0(h,d),R(),n&&k0(n,h).then(R).catch(()=>v("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>We(!1)}}var Ar=new fr,Un=new b,Gs=new b,$t=new bt,W0={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Tf={type:"change"},X0={type:"mouseDown",mode:null},q0={type:"mouseUp",mode:null},Y0={type:"objectChange"},su=class extends pr{constructor(e,t=null){super(void 0,t);let i=new Af(this);this._root=i;let s=new Cf;this._gizmo=s,i.add(s);let r=new Rf;this._plane=r,i.add(r);let o=this;function a(M,y){let T=y;Object.defineProperty(o,M,{get:function(){return T!==void 0?T:y},set:function(E){T!==E&&(T=E,r[M]=E,s[M]=E,o.dispatchEvent({type:M+"-changed",value:E}),o.dispatchEvent(Tf))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new b,c=new b,h=new bt,u=new bt,d=new b,f=new bt,p=new b,x=new b,g=new b,m=0,_=new b;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new bt,this._parentQuaternionInv=new bt,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new bt,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new bt,this._scaleStart=new b,this._getPointer=$1.bind(this),this._onPointerDown=ew.bind(this),this._onPointerHover=Q1.bind(this),this._onPointerMove=tw.bind(this),this._onPointerUp=nw.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Ar.setFromCamera(e,this.camera);let t=Ef(this._gizmo.picker[this.mode],Ar);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Ar.setFromCamera(e,this.camera);let t=Ef(this._plane,Ar,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,X0.mode=this.mode,this.dispatchEvent(X0)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Ar.setFromCamera(e,this.camera);let o=Ef(this._plane,Ar,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion($t.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Un.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Un.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Gs.set(a,a,a)}else Un.copy(this.pointStart),Gs.copy(this.pointEnd),Un.applyQuaternion(this._worldQuaternionInv),Gs.applyQuaternion(this._worldQuaternionInv),Gs.divide(Un),t.search("X")===-1&&(Gs.x=1),t.search("Y")===-1&&(Gs.y=1),t.search("Z")===-1&&(Gs.z=1);s.scale.copy(this._scaleStart).multiply(Gs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Un.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Un.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(W0[t]),Un.copy(W0[t]),r==="local"&&Un.applyQuaternion(this.worldQuaternion),Un.cross(this.eye),Un.length()===0?l=!0:this.rotationAngle=this._offset.dot(Un.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply($t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy($t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Tf),this.dispatchEvent(Y0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(q0.mode=this.mode,this.dispatchEvent(q0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Tf),this.dispatchEvent(Y0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ar}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function $1(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function Q1(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function ew(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function tw(n){this.enabled&&this.pointerMove(this._getPointer(n))}function nw(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Ef(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var eu=new sn,Yt=new b(0,1,0),Z0=new b(0,0,0),j0=new Mt,tu=new bt,iu=new bt,$i=new b,J0=new Mt,pl=new b(1,0,0),Cr=new b(0,1,0),ml=new b(0,0,1),nu=new b,dl=new b,fl=new b,Af=class extends Kt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Cf=class extends Kt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new an({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new mi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new zt(0,.04,.1,12);x.translate(0,.05,0);let g=new Ze(.08,.08,.08);g.translate(0,.04,0);let m=new mt;m.setAttribute("position",new ze([0,0,0,1,0,0],3));let _=new zt(.0075,.0075,.5,3);_.translate(0,.25,0);function M(X,W){let te=new On(X,.0075,3,64,W*Math.PI*2);return te.rotateY(Math.PI/2),te.rotateX(Math.PI/2),te}function y(){let X=new mt;return X.setAttribute("position",new ze([0,0,0,1,1,1],3)),X}let T={X:[[new de(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new de(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(x,o),[0,.5,0]],[new de(x,o),[0,-.5,0],[Math.PI,0,0]],[new de(_,o)]],Z:[[new de(x,a),[0,0,.5],[Math.PI/2,0,0]],[new de(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new xi(.1,0),u),[0,0,0]]],XY:[[new de(new Ze(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new Ze(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Ze(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new de(new zt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new zt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new zt(.2,0,.6,4),i),[0,.3,0]],[new de(new zt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new zt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new zt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new xi(.2,0),i)]],XY:[[new de(new Ze(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new Ze(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Ze(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new de(new xi(.01,2),s),null,null,null,"helper"]],END:[[new de(new xi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Xn(y(),s),null,null,null,"helper"]],X:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new de(M(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new de(M(.5,.5),r)]],Y:[[new de(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(M(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new de(new yi(.25,10,8),i)]],X:[[new de(new On(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new On(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new On(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new On(.75,.1,2,24),i)]]},R={X:[[new de(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(_,r),[0,0,0],[0,0,-Math.PI/2]],[new de(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(_,o)],[new de(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(_,a),[0,0,0],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new Ze(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new Ze(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Ze(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new Ze(.1,.1,.1),u)]]},L={X:[[new de(new zt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new zt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new zt(.2,0,.6,4),i),[0,.3,0]],[new de(new zt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new zt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new zt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new Ze(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new Ze(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Ze(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new Ze(.2,.2,.2),i),[0,0,0]]]},O={X:[[new Xn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(X){let W=new Kt;for(let te in X)for(let V=X[te].length;V--;){let oe=X[te][V][0].clone(),xe=X[te][V][1],ye=X[te][V][2],Ne=X[te][V][3],We=X[te][V][4];oe.name=te,oe.tag=We,xe&&oe.position.set(xe[0],xe[1],xe[2]),ye&&oe.rotation.set(ye[0],ye[1],ye[2]),Ne&&oe.scale.set(Ne[0],Ne[1],Ne[2]),oe.updateMatrix();let ct=oe.geometry.clone();ct.applyMatrix4(oe.matrix),oe.geometry=ct,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),W.add(oe)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(T)),this.add(this.gizmo.rotate=z(C)),this.add(this.gizmo.scale=z(R)),this.add(this.picker.translate=z(E)),this.add(this.picker.rotate=z(v)),this.add(this.picker.scale=z(L)),this.add(this.helper.translate=z(I)),this.add(this.helper.rotate=z(S)),this.add(this.helper.scale=z(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:iu;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&($t.setFromEuler(eu.set(0,0,0)),o.quaternion.copy(i).multiply($t),Math.abs(Yt.copy(pl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&($t.setFromEuler(eu.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply($t),Math.abs(Yt.copy(Cr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&($t.setFromEuler(eu.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply($t),Math.abs(Yt.copy(ml).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&($t.setFromEuler(eu.set(0,Math.PI/2,0)),Yt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(j0.lookAt(Z0,Yt,Cr)),o.quaternion.multiply($t),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Un.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Un.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Un),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Yt.copy(pl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Yt.copy(Cr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Yt.copy(ml).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Yt.copy(ml).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Yt.copy(pl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Yt.copy(Cr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(tu.copy(i),Yt.copy(this.eye).applyQuaternion($t.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(j0.lookAt(this.eye,Z0,Cr)),o.name==="X"&&($t.setFromAxisAngle(pl,Math.atan2(-Yt.y,Yt.z)),$t.multiplyQuaternions(tu,$t),o.quaternion.copy($t)),o.name==="Y"&&($t.setFromAxisAngle(Cr,Math.atan2(Yt.x,Yt.z)),$t.multiplyQuaternions(tu,$t),o.quaternion.copy($t)),o.name==="Z"&&($t.setFromAxisAngle(ml,Math.atan2(Yt.y,Yt.x)),$t.multiplyQuaternions(tu,$t),o.quaternion.copy($t))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Rf=class extends de{constructor(){super(new Sn(1e5,1e5,2,2),new an({visible:!1,wireframe:!0,side:un,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),nu.copy(pl).applyQuaternion(t==="local"?this.worldQuaternion:iu),dl.copy(Cr).applyQuaternion(t==="local"?this.worldQuaternion:iu),fl.copy(ml).applyQuaternion(t==="local"?this.worldQuaternion:iu),Yt.copy(dl),this.mode){case"translate":case"scale":switch(this.axis){case"X":Yt.copy(this.eye).cross(nu),$i.copy(nu).cross(Yt);break;case"Y":Yt.copy(this.eye).cross(dl),$i.copy(dl).cross(Yt);break;case"Z":Yt.copy(this.eye).cross(fl),$i.copy(fl).cross(Yt);break;case"XY":$i.copy(fl);break;case"YZ":$i.copy(nu);break;case"XZ":Yt.copy(fl),$i.copy(dl);break;case"XYZ":case"E":$i.set(0,0,0);break}break;case"rotate":default:$i.set(0,0,0)}$i.length()===0?this.quaternion.copy(this.cameraQuaternion):(J0.lookAt(Un.set(0,0,0),$i,Yt),this.quaternion.setFromRotationMatrix(J0)),super.updateMatrixWorld(e)}};function K0(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function $0(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new b(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new sn(Te.degToRad(n.pitch),Te.degToRad(n.yaw),Te.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var Q0={type:"change"},Pf={type:"start"},tx={type:"end"},ru=new ws,ex=new An,iw=Math.cos(70*Te.DEG2RAD),_n=new b,Yn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},If=1e-6,ou=class extends pr{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new bt,this._lastTargetPosition=new b,this._quat=new bt().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vo,this._sphericalDelta=new vo,this._scale=1,this._panOffset=new b,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new b,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rw.bind(this),this._onPointerDown=sw.bind(this),this._onPointerUp=ow.bind(this),this._onContextMenu=fw.bind(this),this._onMouseWheel=cw.bind(this),this._onKeyDown=hw.bind(this),this._onTouchStart=uw.bind(this),this._onTouchMove=dw.bind(this),this._onMouseDown=aw.bind(this),this._onMouseMove=lw.bind(this),this._interceptControlDown=pw.bind(this),this._interceptControlUp=mw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q0),this.update(),this.state=Wt.NONE}update(e=null){let t=this.object.position;_n.copy(t).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yn:i>Math.PI&&(i-=Yn),s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),t.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=_n.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<iw?this.object.lookAt(this.target):(ex.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(ex,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>If||8*(1-this._lastQuaternion.dot(this.object.quaternion))>If||this._lastTargetPosition.distanceToSquared(this.target)>If?(this.dispatchEvent(Q0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_n.setFromMatrixColumn(t,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,t){this.screenSpacePanning===!0?_n.setFromMatrixColumn(t,1):(_n.setFromMatrixColumn(t,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;_n.copy(s).sub(this.target);let r=_n.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function sw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function rw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ow(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tx),this.state=Wt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Wt.DOLLY;break;case vi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Wt.ROTATE}break;case vi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Pf)}function lw(n){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function cw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(n.preventDefault(),this.dispatchEvent(Pf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tx))}function hw(n){this.enabled!==!1&&this._handleKeyDown(n)}function uw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Wt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Wt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Pf)}function dw(n){switch(this._trackPointer(n),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Wt.NONE}}function fw(n){this.enabled!==!1&&n.preventDefault()}function pw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var U=n=>document.getElementById(n),cx=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],hx=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],uu=[...document.querySelectorAll(".tool")],ux="gorilla-lab-editor-draft",ps=r0(localStorage),gw=tf(),Vn=[...new Map([...gw,...ps.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function dx(n){let e=n??U("model-library").value;U("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Vn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Vn.some(t=>t.id===e)?U("model-library").value=e:Vn.length===1&&(U("model-library").value=Vn[0].id),U("place-model").disabled=!Vn.length}var fx=new URLSearchParams(location.search),Nf=fx.get("model"),Of="gorilla-lab-edit-map-model";dx(Nf);function Ir(){return Vn.find(n=>n.id===U("model-library").value)}function px(){let n=Ir();if(!n)return null;let e=Bo(n);return ai({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Te.clamp(e.x,.2,64),h:Te.clamp(e.y,.12,36),d:Te.clamp(e.z,.2,64),...hf(n),color:"#ffffff",solid:n.properties.collidable!==!1})}U("model-library").addEventListener("change",()=>{et==="model"&&ms(null),np()});var Df={block:ai({w:1,h:1,d:1}),ramp:ai({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:ai({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:fs({amplitude:.7,grassDensity:1.7})}),wall:ai({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Xf={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ne,St=-1,et="move",Dt=null,li=null,xl=[],Hs=null,hu=[];function Vi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:et,selected:St,...e};hu.push(i),hu.length>100&&hu.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=lt(),e=Jo.info.render;return{version:"R41",map:{name:ne.name,pieces:ne.pieces.length},tool:et,selected:St,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[ln.width,ln.height],render:{...e},events:[...hu]}};window.addEventListener("error",n=>{n.message&&Vi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Vi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Xs=[],ln=U("preview"),pt=U("plan"),xt=pt.getContext("2d");function xw(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[U("shape-preset").value]??n.slab;return ai({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(U("shape-preset").value)?U("shape-preset").value:"box"})}var yw=U("editor-views");function Sl(){yw.dataset.layout=U("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",U("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",U("sidebar-width").value+"px"),requestAnimationFrame(()=>{yu(),_u()})}for(let n of["layout-mode","view-split","sidebar-width"])U(n).addEventListener("input",Sl);U("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Sl()};var Bf=U("workspace-fullscreen");Bf.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{gt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Bf.setAttribute("aria-pressed",String(n)),Bf.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{yu(),_u()})});U("focus-3d").onclick=()=>{U("layout-mode").value="only-3d",Sl()};U("focus-plan").onclick=()=>{U("layout-mode").value="only-plan",Sl()};function _w(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(k,ce,ue)=>{let N=document.createElement(k);return ce&&(N.className=ce),ue!==void 0&&(N.textContent=ue),N},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let k of uu){let ce=k.dataset.tool,ue=k.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[ce]){let N=t("div","rail-divider");N.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[ce]],i.append(N)}k.classList.add("rail-tool"),k.title=ue+" \xB7 "+(Xf[ce]??""),k.setAttribute("aria-label",ue),k.replaceChildren(t("span","rail-glyph",s[ce]??"\u25A1"),t("span","rail-caption",ue==="Redimensionner"?"\xC9chelle":ue==="S\xE9lectionner"?"S\xE9lect.":ue==="D\xE9placer"?"D\xE9placer":ue==="Atelier"?"Mod\xE8le":ue)),i.append(k)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=U("shape-preset").closest("label"),h=U("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=U("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let M=t("span","active-selection","Aucune s\xE9lection");M.id="active-selection",_.after(M);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let T=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let k of E){let ce=U(k);ce&&T.append(ce.closest("label"))}y.append(T),g.append(y);let I=k=>{if(k==="close"){o.hidden=!0;return}let ce=k==="model";o.hidden=!1,o.dataset.mode=k,a.textContent=ce?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!ce,c.hidden=ce,d.hidden=!ce,f.hidden=!ce,u&&(u.hidden=!ce),p.textContent=ce?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!ce,x.textContent=ce?Vn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ue=Ir();d.disabled=!ue,d.textContent=ue?"\u2B21 Placer \xAB "+ue.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!ue||!ps.models.some(Z=>Z.id===ue.id),u&&(u.href="./model-editor.html"+(ue?ue.assetId&&ue.id==="custom-model-game-"+ue.assetId?"?asset="+encodeURIComponent(ue.assetId):"?model="+encodeURIComponent(ue.id):"")),U(ce?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{Ir()&&(Gi("model"),I("close"),ln.focus({preventScroll:!0}),gt("Clique dans la sc\xE8ne pour placer \xAB "+Ir().name+" \xBB."))},f.onclick=()=>{let k=Ir();if(!(!k||!ps.models.some(ce=>ce.id===k.id))&&confirm("Supprimer d\xE9finitivement \xAB "+k.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let ce=Tr({...ps,models:ps.models.filter(N=>N.id!==k.id),avatarId:ps.avatarId===k.id?null:ps.avatarId});localStorage.setItem(cf,JSON.stringify(ce)),Object.assign(ps,ce);let ue=Vn.findIndex(N=>N.id===k.id);ue>=0&&Vn.splice(ue,1),dx(),et==="model"&&!Vn.length&&Gi("move"),ms(null),np(),I("model"),gt("\xAB "+k.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(ce){gt("Suppression impossible : "+(ce.message||"stockage local indisponible"))}},U("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&I("model")});for(let k of["model","preset"])uu.find(ue=>ue.dataset.tool===k)?.addEventListener("click",()=>I(k));window.addEventListener("pointerdown",k=>{!o.hidden&&!o.contains(k.target)&&!k.target.closest(".rail-tool")&&I("close")}),window.addEventListener("keydown",k=>{k.key==="Escape"&&I("close")});let C=t("section","outliner");C.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),C.append(S);let v=e.querySelector("#pieces").closest(".inspector-section");v.id="outline-content",C.append(v);let R=t("section","property-pane"),L=t("nav","inspector-tabs");L.setAttribute("aria-label","Propri\xE9t\xE9s");let O=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[k,ce]of O){let ue=t("button","inspector-tab",ce);ue.type="button",ue.dataset.tab=k,ue.setAttribute("aria-pressed",String(k==="object")),L.append(ue)}let z=t("div","property-content");z.id="property-content";let X=U("piece-inspector").closest(".inspector-section");X.id="object-section";let W=X.querySelector("#surface").closest("details");W.id="surface-controls";let te=t("section");te.id="collision-options",te.append(t("h3","","Collisions de la pi\xE8ce")),te.append(X.querySelector("#p-solid").closest("label"),U("debug-controls"));let V=t("section");V.id="behavior-options";let oe=t("div","fields");for(let k of["surface","p-grip","p-gravity","p-bounce"])oe.append(W.querySelector("#"+k).closest("label"));V.append(t("h3","","Propri\xE9t\xE9s physiques")),V.append(oe,X.querySelector("#model-object-controls"));let xe=t("section");xe.id="publish-options";for(let[k,ce,ue]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let N=t("div","piece-actions"),Z=t("button","",ce);Z.type="button",Z.addEventListener("click",()=>U(k).click()),N.append(Z),xe.append(t("h3","",ue),N)}z.append(X,te,V,xe);let ye=t("section","scene-options");ye.id="scene-options",ye.append(t("h2","","Param\xE8tres de carte"));let Ne=U("map-name").closest("label"),We=U("map-world-size").closest(".fields"),ct=U("draft-status");ye.append(Ne,We,ct);let it=[...e.children].filter(k=>k.tagName==="DETAILS");for(let k of it)ye.append(k);z.append(ye),R.append(L,z),e.replaceChildren(C,R);let ie=k=>{let ce=ne?.pieces?.[St];["terrain","props"].includes(k)&&!ce?.terrain&&(k="object"),["material","behavior"].includes(k)&&!ce&&(k="object"),e.dataset.tab=k;for(let ue of L.querySelectorAll("button"))ue.setAttribute("aria-pressed",String(ue.dataset.tab===k)),ue.disabled=["terrain","props"].includes(ue.dataset.tab)&&!ce?.terrain;k==="terrain"&&(U("terrain-controls").open=!0),k==="material"&&(W.open=!0),z.scrollTop=0};for(let k of L.querySelectorAll("button"))k.addEventListener("click",()=>ie(k.dataset.tab));window.setInspectorTab=ie,ie("object")}_w();var kt={scale:10,cx:0,cz:-6,width:30,height:40},Jo=new Rh({canvas:ln,antialias:!0});Jo.setPixelRatio(Math.min(devicePixelRatio,1.5));ln.addEventListener("webglcontextlost",()=>Vi("contexte WebGL perdu",{},"warn"));var Rt=new En(52,1,.1,640);Rt.position.set(16,15,19);var Vt=new ou(Rt,ln);Vt.target.set(0,0,-5);Vt.mouseButtons.LEFT=null;Vt.mouseButtons.RIGHT=vi.ROTATE;Vt.mouseButtons.MIDDLE=vi.PAN;Vt.maxDistance=580;Vt.maxPolarAngle=Math.PI-.035;var vn=new uo,mx=new He("#8fb6c6");vn.background=mx;var gx=new ur("#f0f5ff","#8e775c",2.6);vn.add(gx);var qf=new dr("#fff1d2",1.8);qf.position.set(-9,18,6);vn.add(qf);var Qi=new uo;Qi.fog=new ir("#a6d4ea",55,135);var Jn=Pg(Qi,Jo);Jn.probe.userData.editorAssetId="chrome-sphere";var kC=Dg(Qi,Jn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),vw=new Map(tf().map(n=>[n.assetId,n]));function nx(n,e,t=null,i=null){let s=structuredClone(t??vw.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=ol(s),o=r.getSize(new b),a=r.getCenter(new b);return ai({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Yf=()=>{let n=D0(Jn.boxes),e=Jn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let d=t+u%(o+1)/o*a,f=s+Math.floor(u/(o+1))/o*l;return e.height(d,f)});n.pieces.push(ai({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:fs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(bf()),Bg((t,i)=>{let s=Qd[t];s&&n.pieces.push(nx(s,i))}),n.pieces.push(nx("chrome-sphere",new b(Us.x,Us.y,Us.z))),yn(n)};ne=Yf();var Zf=new de(new Ze(1.8,2.03,.1),new pn({color:"#8daebc",metalness:.9,roughness:.12}));Zf.position.set(Ls.x,Ls.y,Ls.z);Zf.userData.editorAssetId="lab-mirror";Qi.add(Zf);var Mw=Jn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);Mw.forEach(n=>n.mesh.removeFromParent());var du=new bn;du.add(...Qi.children);vn.add(du,...Jn.lighting);var Ws=Jn.boxes.find(n=>n.heightfield).mesh;Ws.userData.editorAssetId="lab-hill";Jn.visual(7,0,7,!0,!0,!0,512,!1);var jf=[...document.querySelectorAll("[data-env]")],Ho=U("environment-status"),qo=new Ga(60,60,"#d7e2e5","#5e7b8a");qo.material.transparent=!0;qo.material.opacity=.35;vn.add(qo);var wt=new bn;vn.add(wt);var nt=new su(Rt,ln);nt.setSize(.9);nt.setRotationSnap(Te.degToRad(5));nt.enabled=!1;vn.add(nt.getHelper());var Jf=new Set(["translate","rotate","scale"]),qs=null,Zn=null,Kf=!1,yl=null,au=!1,xx=()=>Number(U("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...U(n).options].some(t=>t.value===e)&&(U(n).value=e)}catch{}U(n).onchange=()=>{Zn=null;try{localStorage.setItem("gorilla-lab-"+n,U(n).value)}catch{}}}var Pr=new Map;try{U("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}U("magnet").onchange=()=>{Zn=null,Pr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",U("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{Kf=e.altKey});window.addEventListener("blur",()=>{Kf=!1,Zn=null});function yx(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/Ml())*Ml();if(i||!U("magnet").checked||!n.solid||n.terrain)return Zn=null,s;let r=xx(),o=U("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new sn(...[p.pitch,p.yaw,p.roll??0].map(Te.degToRad),"YXZ"),g=new Mt().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of ne.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,M=m.flatMap(y=>t.includes(y)&&_(m.find(T=>T!==y))?[-1,1].flatMap(T=>[-1,1].map(E=>{let I=p[y]+T*x[y]-E*c[y];return{key:y,value:I,distance:Math.abs(e[y]-I)}})):[]).sort((y,T)=>y.distance-T.distance)[0];if(!(o?!M||M.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let T=p[g]+y*(c[g]+x[g]),E=ne.pieces.indexOf(p)+":"+g+":"+y;h.push({key:E,axis:g,value:T,edge:o?M:null,distance:Math.max(Math.abs(T-e[g]),o?M.distance:0)})}}}let u=h.find(p=>p.key===Zn),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Zn&&(Pr.set(Zn,(Pr.get(Zn)??0)+1),Zn=null);let f=h.filter(p=>p.distance<=r&&(Pr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Zn=f.key;else for(let p of h)p.distance<=r&&(Pr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var _l=new Ze(1,1,1),bw=Zd(),Sw=new _i,fu=.025,ww=new As(.24,.36,40).rotateX(-Math.PI/2),_x=new an({color:"#ffcd63",side:un}),jn=new de(ww,_x),vx=new de(new Sn(.12,.2).rotateX(-Math.PI/2),_x);vx.position.set(0,0,-.39);jn.add(vx);vn.add(jn);var Dr=new de(_l,new an({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Wo=new de(new yi(.055,10,8),new an({color:"#ffc85a",depthTest:!1}));Wo.visible=!1;Wo.renderOrder=20;vn.add(Wo);var vl=new de(jn.geometry,new an({color:"#ffe084",side:un,opacity:.65,transparent:!0,depthWrite:!1}));Dr.visible=vl.visible=!1;vn.add(Dr,vl);var Ys=new fr,xu=new b(0,1,0),ix=new An(xu,0),Tw=new ht,ki=null,Lf=!1,gl=60,sx=-1/0;function cn(){Lf||(Lf=!0,requestAnimationFrame(n=>{Lf=!1;let e=n-sx;sx=n,e<125&&(gl=Te.lerp(gl,1e3/Math.max(10,e),.17));let t=Rt.position.distanceTo(Vt.target),i=Math.max(640,ne.worldSize*2,t+ne.worldSize*2),s=Math.max(140,t+ne.worldSize*.35),r=U("adaptive-editor-view").checked?Te.smoothstep(gl,24,50):1,o=Te.lerp(s,i,r);Rt.far=Math.max(s,Te.lerp(Rt.far,o,.2)),Rt.updateProjectionMatrix(),Jn.centerSky(Rt.position,Rt.far);let a=performance.now();Jo.render(vn,Rt);let l=performance.now()-a;l>25&&(gl=Math.min(gl,1e3/l)),Math.abs(Rt.far-o)>3&&cn(),Fx()}))}function yu(){let n=ln.clientWidth||1,e=ln.clientHeight||1;Jo.setSize(n,e,!1),Rt.aspect=n/e,Rt.updateProjectionMatrix(),cn()}function _u(){let n=Math.max(1,pt.clientWidth),e=Math.max(1,pt.clientHeight);n===pt.width&&e===pt.height||(pt.width=n,pt.height=e,$f(),bi())}new ResizeObserver(yu).observe(ln);new ResizeObserver(_u).observe(pt);Vt.addEventListener("change",cn);Vt.addEventListener("start",()=>ms(null));function $f(){kt.scale=Math.min(pt.width/kt.width,pt.height/kt.height)}function pu(n,e){return[pt.width/2+(n-kt.cx)*kt.scale,pt.height/2+(e-kt.cz)*kt.scale]}function zf(n){let e=pt.getBoundingClientRect();return{x:((n.clientX-e.left)*pt.width/e.width-pt.width/2)/kt.scale+kt.cx,z:((n.clientY-e.top)*pt.height/e.height-pt.height/2)/kt.scale+kt.cz}}function rx(n,e,t,i,s){let[r,o]=pu(n.x,n.z),a=Te.degToRad(n.pitch),l=Te.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);xt.save(),xt.translate(r,o),xt.rotate(-Te.degToRad(n.yaw));let u=c*kt.scale,d=h*kt.scale;xt.globalAlpha=s,xt.fillStyle=e,xt.fillRect(-u/2,-d/2,u,d),xt.globalAlpha=1,xt.strokeStyle=t,xt.lineWidth=i,xt.strokeRect(-u/2,-d/2,u,d),xt.restore()}function ox(n,e){let[t,i]=pu(n.x,n.z);xt.save(),xt.translate(t,i),xt.rotate(Te.degToRad(-n.yaw)),xt.strokeStyle=e?"#fff0bb":"#ffd16e",xt.lineWidth=2,xt.beginPath(),xt.arc(0,0,6,0,Math.PI*2),xt.moveTo(0,-6),xt.lineTo(0,-11),xt.stroke(),xt.restore()}function bi(){xt.fillStyle="#192e3a",xt.fillRect(0,0,pt.width,pt.height),xt.strokeStyle="#37505f",xt.lineWidth=1;let n=kt.scale<1?25:kt.scale<4?10:kt.scale<12?5:1,e=(ne.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=pu(r,r);o>=0&&o<=pt.width&&(xt.beginPath(),xt.moveTo(o,0),xt.lineTo(o,pt.height),xt.stroke()),a>=0&&a<=pt.height&&(xt.beginPath(),xt.moveTo(0,a),xt.lineTo(pt.width,a),xt.stroke())}let[t,i]=pu(-e,-e);xt.strokeStyle="#ffda9077",xt.lineWidth=2,xt.strokeRect(t,i,e*2*kt.scale,e*2*kt.scale);let s=ne.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Mf[r.material]:r.color);rx(r,a,o===St?"#ffe095":"#a4bac7",o===St?2:1,r.solid?.86:.38)}ox(ne.spawn,!1),li&&(et==="spawn"?ox(li,!0):rx(li,"#8ee7fc","#afefff",2,.45))}function mu(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==Dr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Te.degToRad(e.pitch),Te.degToRad(e.yaw),Te.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function Mx(){ki&&(vn.remove(ki),ki.geometry.dispose(),ki.material.dispose());let n=wt.children[St];ki=n?new Mo(n,"#ffdf88"):null,ki&&vn.add(ki),kf()}function kf(){if(et==="spawn"){nt.enabled=!0,nt.setMode("translate"),nt.setSpace("world"),nt.setTranslationSnap(null),nt.setRotationSnap(null),nt.showX=nt.showY=nt.showZ=!0,nt.attach(jn);return}let n=wt.children[St],e=lt()?.terrain,t=Jf.has(et)&&!!n;if(nt.enabled=t,!t){nt.detach();return}nt.setMode(et),nt.setSpace(et==="translate"?"world":"local"),nt.setTranslationSnap(null);let i=!!(e&&et==="rotate");nt.setRotationSnap(i?Math.PI/2:null),nt.showX=nt.showZ=!i,nt.showY=!(e&&et==="scale"),nt.attach(n),U("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":Xf[et]}var Xo=!1;function bx(){if(et!=="scale")return;let n=lt(),e=qs?.map.pieces[St],t=nt.object;if(!n||!e||!t)return;let i=$0(e,n,Xo,qs?.scaleSides),s=(ne.worldSize??240)/2;n.x=Te.clamp(i.x,-s,s),n.y=Te.clamp(i.y,-oi,oi),n.z=Te.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),ki?.update();for(let r of["x","y","z"])U("p-"+r).value=n[r].toFixed(2);bi(),cn()}function Sx(n){let e=Xo;Xo=n.ctrlKey,e!==Xo&&nt.dragging&&bx()}for(let n of["keydown","keyup"])window.addEventListener(n,Sx);ln.addEventListener("pointermove",Sx,{capture:!0});nt.addEventListener("change",cn);nt.addEventListener("mouseDown",()=>{let n=lt();if(Zn=null,n||nt.object===jn){let e=et==="scale"?K0(nt.axis,nt.pointStart,nt.worldQuaternionStart):void 0;qs={map:structuredClone(ne),selected:St,scaleSides:e},Vi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:nt.axis,scaleSides:e,terrain:!!n?.terrain})}Xo=!!(Xo||window.event?.ctrlKey)});nt.addEventListener("objectChange",()=>{let n=lt(),e=nt.object,t=qs?.map.pieces[St];if(e===jn&&qs){let s=(ne.worldSize??240)/2,r=Te.clamp;ne.spawn.x=r(jn.position.x,-s,s),ne.spawn.y=r(jn.position.y-fu,-oi,oi),ne.spawn.z=r(jn.position.z,-s,s),jn.position.set(ne.spawn.x,ne.spawn.y+fu,ne.spawn.z);for(let o of["x","y","z"])U("spawn-"+o).value=ne.spawn[o].toFixed(2);bi();return}if(!n||!e||!t)return;let i=Te.clamp;if(et==="translate"){let s=["x","y","z"].filter(a=>(nt.axis??"XYZ").includes(a.toUpperCase())),r=yx(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,Kf),o=(ne.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-oi,oi),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else et==="rotate"?(n.pitch=Te.radToDeg(e.rotation.x),n.yaw=Te.radToDeg(e.rotation.y),n.roll=Te.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=ko(n.yaw),e.rotation.set(0,Te.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,n.terrain?$h:Vs),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,n.terrain?$h:Vs),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),bx());e.updateMatrixWorld(!0),ki?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])U("p-"+s).value=Number(n[s]??0).toFixed(2);bi(),cn()});nt.addEventListener("dragging-changed",({value:n})=>{if(Vt.enabled=!n,n||!qs)return;let e=qs;qs=null;let t=nt.object===jn,i=t?e.map.spawn:e.map.pieces[St],s=t?ne.spawn:lt();if(JSON.stringify(i)===JSON.stringify(s)){Vi("transformation sans changement",{name:s?.name,axis:nt.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Vi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Xs.length>=35&&Xs.shift(),Xs.push(e),ne=yn(ne),Et(),gt("Transformation appliqu\xE9e.")});ln.addEventListener("pointerup",()=>{nt.dragging||(Vt.enabled=!0)});ln.addEventListener("pointercancel",()=>{nt.dragging&&nt.pointerUp(null),Vt.enabled=!0});function Ew(){nt.detach();for(let t of[...wt.children])wt.remove(t),t.geometry!==_l&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&R0(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),qh(t.material);du.visible=!!ne.arenaBase;let n=new Set(ne.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(ne.pieces.map(t=>t.sceneryId).filter(Boolean));du.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=O0(ne,i,n,e))}),Ex();for(let t of ne.pieces){if(t.model){let l=new de(Yh(t.model,new b(t.w,t.h,t.d)),Xh(t.model));l.castShadow=l.receiveShadow=!0;let c=new de(new Ze(1,1,1),new an({colorWrite:!1,depthWrite:!1,side:un}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=wt.children.length,wt.add(l),mu(l,t);continue}let i=[10,11,12].includes(t.material),s=new si({color:new He(Mf[t.material]).multiply(new He(t.color)),side:t.terrain?un:ti,transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(ne.arenaBase&&!t.texture){let l=Jn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=Sw.load(t.texture,cn),s.map.colorSpace=vt,s.map.wrapS=s.map.wrapT=Cn,s.color.set(t.color)),t.terrain&&(t.terrain.projection==="regolith"&&(s.flatShading=!1),E0(s,t));let r=t.terrain?performance.now():0,o=t.terrain?A0(t):t.primitive==="ramp"?Zd(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?vg(t.primitive):t.texture||ne.arenaBase?Ph(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):_l;o!==_l&&_g(o,t);let a=new de(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=C0(t);l&&(a.add(l),a.userData.vegetation=l)}wt.add(a),mu(a,t)}zw(),jn.position.set(ne.spawn.x,ne.spawn.y+fu,ne.spawn.z),jn.rotation.y=Te.degToRad(ne.spawn.yaw),Nx(),Mx()}function lt(){return ne.pieces[St]}function gt(n){U("editor-note").textContent=n}function Tt(){Xs.length>=35&&Xs.shift(),Xs.push({map:structuredClone(ne),selected:St}),U("undo").disabled=!1}var Uf=0;async function Ko(){let n=++Uf;try{return await Su(ux,JSON.stringify(ne)),n===Uf&&(U("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===Uf&&(U("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}U("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=lt(),i=St;if(!(!t?.model||!await Ko()))try{sessionStorage.setItem(Of,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),gt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function Aw(){let n=fx.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Of)),sessionStorage.removeItem(Of)}catch{return}let t=ne.pieces[e?.index],i=ps.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){gt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}St=e.index;let o=Bo(t.model),a=Bo(i),l=(u,d,f,p)=>Te.clamp(u*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,Vs),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Vs)},h=ai({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(Tt(),ne.pieces[St]=h),gt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var ax=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function wx(){let n=ax(U("piece-search").value.trim()),e=[];ne.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";ax(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===St))}),U("pieces").replaceChildren(...e),U("pieces").value=String(St),e.length||U("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(U("pieces").options[0].disabled=!0),U("count").textContent=n?e.length+" sur "+ne.pieces.length:ne.pieces.length+" / "+Vo}function Tx(){wx();let n=lt();U("piece-inspector").hidden=!n,U("selection-help").hidden=!!n,U("focus-piece").disabled=!n,U("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";U("model-object-controls").hidden=!e,U("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=U("model-asset-edit-link"),i=n?.model&&Vn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(U("model-grabbable").checked=n.model.properties?.grabbable!==!1,U("model-frozen").checked=n.model.properties?.frozen===!0,U("model-collidable").checked=n.model.properties?.collidable!==!1,U("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of cx){let c=U("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])U(l).disabled=!n;U("delete").disabled=!n,U("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",U("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",U("texture-clear").disabled=!n?.texture,U("texture-paint").disabled=!n||!!n.model,U("flight-controls").hidden=!n||n.solid||!!n.terrain||n.model?.kind==="prop";for(let[l,c]of Object.entries(Hf))U("flight-"+l).value=n?.flight?.[l]??c;let s=xl[St],r=U("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=Wf(s));let o=n?.terrain;U("terrain-grassTexture-paint").disabled=!o;for(let l of hx){let c=U("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(U("uv-reset").disabled=!n||!!n?.model,U("terrain-controls").hidden=U("terrain-props").hidden=U("terrain-texture-density-fields").hidden=!o,U("texture-scale-label").hidden=!!o,o){U("terrain-triangulation").value=o.triangulation??"regular",U("terrain-projection").value=o.projection??"flat";for(let m of Px)U("terrain-"+m).value=o[m]??0;let l=o.reliefArea??Dx(n);U("terrain-relief-local").checked=!!o.reliefArea,U("terrain-relief-fields").hidden=!o.reliefArea;for(let m of["x","z","radius","blend"])U("terrain-relief-"+m).value=l[m];let c=wt.children[St]?.userData.generationMs;U("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,d=wt.children[St]?.geometry.index.count/3||u,f=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});U("terrain-cell-size").textContent=f.format(n.w/o.detail)+" \xD7 "+f.format(n.d/o.detail)+" m de pas moyen \xB7 "+f.format(d)+" triangles au total \xB7 "+f.format(u/h)+" triangles/m\xB2 au sol",U("terrain-texture-effective").textContent=f.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2 \xE0 l\u2019\xE9cran avec l\u2019\xE9chelle enregistr\xE9e",Ow(n);let p=U("terrain-neighbor"),x=p.value,g=ne.pieces.flatMap((m,_)=>_f(n,m)?[new Option(m.name,String(_))]:[]);p.replaceChildren(...g.length?g:[new Option("Aucun bord \xE0 moins de 25 cm","")]),g.some(m=>m.value===x)&&(p.value=x),p.disabled=U("terrain-stitch").disabled=!g.length,U("p-pitch").disabled=U("p-roll").disabled=!0}U("rotate").disabled=!n,U("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",U("p-yaw").step=o?"90":"1",U("surface").value="",U("undo").disabled=Xs.length===0,U("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function Vf(){let n=!!(ne.arenaBase||ne.environment);qf.visible=gx.visible=!n;for(let s of Jn.lighting)s.visible=n;let{sunDisk:e,sunHalo:t,sunGlare:i}=Jn;e.visible=n&&(ne.environment?.sunPower??3)>0,t.visible=e.visible&&(ne.environment?.sunHalo??1)>0,i.visible=t.visible&&(ne.environment?.sunStarburst??0)>0,vn.background=n?Qi.background:mx,vn.backgroundRotation.copy(Qi.backgroundRotation),vn.fog=n&&U("environment-fog-preview").checked?Qi.fog:null,vn.environment=n?Qi.environment:null,vn.environmentIntensity=Qi.environmentIntensity,cn()}function Ex(){let n=ne.environment??null,e=n??Hi(0);for(let t of jf){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}Ho.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",Jn.setEnvironment(n,Vf),Vf()}function gu(n){let e=El(n);Tt(),e?ne.environment=e:delete ne.environment,Ex(),Ko()}var Cw=jf.find(n=>n.dataset.env==="preset");Cw.replaceChildren(...op.map((n,e)=>new Option(n,e)));for(let n of jf)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){gu(Hi(Number(n.value)));return}let t=ne.environment??Hi(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,Ho.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;gu({...t,[e]:i})};U("environment-reset").onclick=()=>gu(null);U("environment-aim-sun").onclick=()=>{if(!(ne.environment??Hi(0)).sunPower){Ho.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=Jn.sunDirection();Vt.target.copy(Rt.position).addScaledVector(e,8),Vt.update(),cn()};U("environment-fog-preview").onchange=Vf;U("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=ne;if(e.value="",!t)return;if(t.size>Tl){Ho.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(ne!==i)return;let r=new Image;r.onload=()=>{if(ne===i){if(r.width!==r.height*2){Ho.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}gu({...ne.environment??Hi(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{ne===i&&(Ho.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function Et(){U("map-name").value=ne.name,U("map-world-size").value=ne.worldSize??240,U("map-boundary").value=ne.boundary?.diameter??0,U("map-ceiling").value=ne.boundary?.ceiling??128,Rt.far=Math.max(640,ne.worldSize*2),Rt.updateProjectionMatrix(),Vt.maxDistance=Math.max(580,ne.worldSize*1.6);for(let n of["x","y","z","yaw"])U("spawn-"+n).value=ne.spawn[n];Ew(),Tx(),bi(),cn(),Ko()}function Yo(n){St!==n&&(St=n,Vi("s\xE9lection",{name:lt()?.name,terrain:!!lt()?.terrain}),Zn=null,Pr.clear(),Tx(),Mx(),bi(),cn())}function Qf(n){if(ne.pieces.length>=Vo)return gt("Limite de pi\xE8ces atteinte.");Tt(),ne.pieces.push(n),St=ne.pieces.length-1,Et(),gt(n.name+" ajout\xE9 \xE0 la map.")}function ep(){if(!lt())return;let n=lt().name;Tt(),ne.pieces.splice(St,1),St=Math.min(St,ne.pieces.length-1),Et(),gt(n+" retir\xE9 de la map.")}function tp(){let n=lt();if(!n)return;let e=Te.clamp(n.x+n.w+Ml(),-120,120);Qf({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function Rw(){let n=lt();if(!n)return;Tt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Vi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),Et()}function Ax(){let n=Xs.pop();n&&(ne=n.map,St=n.selected,ms(null),Et(),gt("Derni\xE8re modification annul\xE9e."))}function np(){let n=Xf[et]??"";if(et!=="model"||!Ir()){U("tool-help").textContent=n;return}let e=px(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);U("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Gi(n){et!==n&&Vi("changement d\u2019outil",{ancien:et,nouveau:n,name:lt()?.name}),et=n,Vt.mouseButtons.LEFT=et==="view"?vi.ROTATE:null,kf(),cn();for(let e of uu)e.setAttribute("aria-pressed",String(e.dataset.tool===et));for(let e of[ln,pt])e.dataset.tool=et,e.removeAttribute("data-hit");np(),kf(),cn(),ms(null)}function Lr(){let n=new fn().setFromObject(wt);n.expandByPoint(jn.position);let e=n.getCenter(new b),t=n.getSize(new b);kt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ne.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ne.worldSize??240,500))},$f();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));qo.scale.setScalar(i),qo.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Rt.position.clone().sub(Vt.target).normalize(),r=new b().crossVectors(xu,s).normalize(),o=new b().crossVectors(s,r),a=Math.tan(Te.degToRad(Rt.fov/2))*.87,l=a*Rt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new b(h,u,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,Vt.maxDistance),Vt.target.copy(e),Rt.position.copy(e).addScaledVector(s,c),Vt.update(),Rt.updateMatrixWorld(),bi(),cn()}function ip(n,e){Tt(),ne=n,Zn=null,Pr.clear(),St=-1,U("piece-search").value="",Gi("move"),Et(),Lr(),gt(e)}function Ml(){return Number(U("snap").value)}function lu(n){let e=Ml(),t=(ne.worldSize??240)/2;return Te.clamp(Math.round(n/e)*e,-t,t)}function sp(n,e){if(n===pt){let t=zf(e);Ys.set(new b(t.x,80,t.z),new b(0,-1,0))}else{let t=ln.getBoundingClientRect();Rt.updateMatrixWorld(),Ys.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Rt)}}function Gf(n){return ix.constant=-n,Ys.ray.intersectPlane(ix,new b)}function Iw(n){let e=n;for(;e&&e.parent!==wt;)e=e.parent;return e?.parent===wt?e:null}function Zo(n,e){sp(n,e);let t=Ws.visible&&ne.arenaBase?[...wt.children,Ws]:wt.children,i=Ys.intersectObjects(t,!0);for(let s of i){if(s.object===Ws)return s;let r=Iw(s.object);if(r)return{...s,object:r}}return null}function Cx(n,e,t,i=null){let s=i?[i]:wt.children,r=0;for(let a of s){a.geometry.boundingBox||a.geometry.computeBoundingBox();let l=new fn().copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld).max.y;r=Math.max(r,l)}Ws.visible&&ne.arenaBase&&(r=Math.max(r,80)),Ys.set(new b(n,r+1,e),new b(0,-1,0));let o=i?Ys.intersectObject(i,!1)[0]:Ys.intersectObjects(Ws.visible&&ne.arenaBase?[...wt.children,Ws]:wt.children,!1).find(a=>a.object===Ws||ne.pieces[wt.children.indexOf(a.object)]?.solid);return!o||Math.abs(o.point.y+.08)>oi?null:{x:n,y:o.point.y+.08,z:e,yaw:t}}function Rx(n,e){yl=null,au=!1;let t=Zo(n,e);if(et==="spawn"){if(!t)return null;let h=lu(t.point.x),u=lu(t.point.z);return Cx(h,u,ne.spawn.yaw)}if(et==="terrain"){let h=t?.point??Gf(0);return h?{...Df.terrain,terrain:fs(Df.terrain.terrain),x:lu(h.x),y:h.y,z:lu(h.z)}:null}if(et==="sculpt"||et==="model"&&!Ir())return null;let i=t?.point??Gf(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(Tw.getNormalMatrix(t.object.matrixWorld)):xu,r=t&&Pw(t),o=xx();r&&r.distance<=o*2&&(yl=r.point,au=U("magnet").checked&&!e.altKey&&U("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=au||e.altKey?1e-6:Ml(),l=et==="model"?px():et==="preset"?xw():Df[et],c=U0(au?yl:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ne.worldSize/2?c:null}function Pw(n){let e=n.object,t=ne.pieces[wt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function ms(n){!n&&!li||(li=n,Wo.visible=!!(li&&yl),Wo.visible&&Wo.position.copy(yl),vl.visible=!!(li&&et==="spawn"),Dr.visible=!!(li&&et!=="spawn"),vl.visible&&vl.position.set(li.x,li.y+fu,li.z),Dr.visible&&(Dr.geometry=li.primitive==="ramp"?bw:_l,mu(Dr,li)),bi(),cn())}function Dw(n,e){let t=Rx(n,e);if(!t){gt(et==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(et==="spawn")Tt(),ne.spawn=t,Gi("move"),Et(),gt("Point de d\xE9part d\xE9plac\xE9.");else{let i=et==="model";ms(null),Qf(t),i&&(Gi("move"),gt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function Lw(n,e){if(et==="view"||e.button!==0||!e.isPrimary||Dt||nt.dragging)return;if(et==="spawn"||Jf.has(et)){if(n===ln&&nt.enabled){let r=ln.getBoundingClientRect();if(nt.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),nt.axis){Vt.enabled=!1;return}}if(et!=="spawn"){e.stopImmediatePropagation();let r=Zo(n,e);Yo(r?wt.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:et};if(Dt=t,Zn=null,et==="sculpt"){Ux(n,e);return}if(et!=="move")return;let i=Zo(n,e);Yo(i?wt.children.indexOf(i.object):-1);let s=lt();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function Uw(n,e){if(et==="view"||Jf.has(et)||nt.dragging)return;if(!Dt){et==="move"?n.toggleAttribute("data-hit",!!Zo(n,e)):ms(Rx(n,e));return}if(et==="sculpt"&&Dt.id===e.pointerId&&Dt.canvas===n){Math.hypot(e.clientX-Dt.clientX,e.clientY-Dt.clientY)>=7&&(Ux(n,e),Dt.clientX=e.clientX,Dt.clientY=e.clientY);return}if(Dt.id!==e.pointerId||Dt.canvas!==n||Dt.height===void 0||!lt()||Math.hypot(e.clientX-Dt.clientX,e.clientY-Dt.clientY)<4&&!Dt.recorded)return;sp(n,e);let i=Gf(Dt.height);if(!i)return;let s=lt(),r=yx(s,{x:i.x-Dt.dx,y:s.y,z:i.z-Dt.dz},["x","z"],e.altKey),o=(ne.worldSize??240)/2,a=Te.clamp(r.x,-o,o),l=Te.clamp(r.z,-o,o);a===s.x&&l===s.z||(Dt.recorded||(Tt(),Dt.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,mu(wt.children[St],s),ki?.update(),U("p-x").value=a,U("p-z").value=l,bi(),cn())}function Ff(n,e,t){if(!Dt||Dt.canvas!==n||Dt.id!==e.pointerId)return;let i=Dt;if(Dt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Et(),gt("Relief modifi\xE9."));return}i.recorded&&(Ko(),gt(lt().name+" d\xE9plac\xE9.")),t&&et===i.tool&&et!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&Dw(n,e)}var Mi=null,vu=!1,cu=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(vu=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(vu=!1)});window.addEventListener("blur",()=>{Mi=null,vu=!1});pt.addEventListener("pointerdown",n=>{n.button!==1&&!(vu&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Mi={id:n.pointerId,x:n.clientX,y:n.clientY},pt.setPointerCapture(n.pointerId),pt.style.cursor="grabbing")},{capture:!0});pt.addEventListener("pointermove",n=>{!Mi||Mi.id!==n.pointerId||(n.stopImmediatePropagation(),kt.cx-=(n.clientX-Mi.x)/kt.scale,kt.cz-=(n.clientY-Mi.y)/kt.scale,Mi.x=n.clientX,Mi.y=n.clientY,bi())},{capture:!0});function Ix(n){!Mi||Mi.id!==n.pointerId||(Mi=null,pt.style.cursor="",pt.hasPointerCapture(n.pointerId)&&pt.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}pt.addEventListener("pointerup",Ix,{capture:!0});pt.addEventListener("pointercancel",Ix,{capture:!0});function rp(n,e){let t=pt.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=zf({clientX:i,clientY:s}),o=Te.clamp(kt.width/n,.75,4096),a=o/kt.width;kt.width=o,kt.height*=a,$f();let l=zf({clientX:i,clientY:s});kt.cx+=r.x-l.x,kt.cz+=r.z-l.z,bi()}pt.addEventListener("wheel",n=>{n.preventDefault(),rp(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});U("plan-zoom-in").onclick=()=>rp(1.25);U("plan-zoom-out").onclick=()=>rp(.8);U("plan-fit").onclick=Lr;var es=U("context-actions"),bl=!1;function jo(){es.hidden=!0}for(let n of[ln,pt])n.addEventListener("pointerdown",e=>{e.button===2?cu={canvas:n,x:e.clientX,y:e.clientY}:jo()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),bl){bl=!1;return}if(cu?.canvas!==n||Math.hypot(e.clientX-cu.x,e.clientY-cu.y)>6)return;let t=Zo(n,e),i=t?wt.children.indexOf(t.object):-1;if(i<0){jo();return}Yo(i),U("context-title").textContent=lt()?.name??"Pi\xE8ce",es.querySelector('[data-context-action="delete"]').textContent=lt()?.model?"Retirer de la carte":"Supprimer",es.hidden=!1;let s=195,r=285;es.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",es.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{es.hidden||es.contains(n.target)||(bl=n.button===2,jo())},{capture:!0});document.addEventListener("contextmenu",n=>{bl&&n.target!==ln&&n.target!==pt&&(bl=!1,n.preventDefault()),!es.hidden&&!es.contains(n.target)&&n.target!==ln&&n.target!==pt&&jo()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&jo()});for(let n of es.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;jo(),e==="duplicate"?tp():e==="delete"?ep():e==="focus"?U("focus-piece").click():Gi(e==="select"?"move":e)};for(let n of[ln,pt])n.addEventListener("pointerdown",e=>Lw(n,e),{capture:!0}),n.addEventListener("pointermove",e=>Uw(n,e)),n.addEventListener("pointerup",e=>Ff(n,e,!0)),n.addEventListener("pointercancel",e=>Ff(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Ff(n,e,!1)}),n.addEventListener("pointerleave",()=>{Dt||ms(null)});U("p-material").append(...P0.map((n,e)=>new Option(n,e)));for(let n of hx)U("p-"+n).addEventListener("change",e=>{let t=lt();!t||t.model||(Tt(),t[n]=Number(e.target.value),ne=yn(ne),Et())});U("uv-reset").onclick=()=>{let n=lt();!n||n.model||(Tt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ne=yn(ne),Et())};var Fw={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(Fw))U(e).addEventListener("change",t=>{let i=lt();if(!i?.model||i.model.kind!=="prop")return;Tt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),ne=yn(ne),Et();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};gt(s[n])});for(let n of cx)U("p-"+n).addEventListener("change",e=>{let t=lt();if(!t)return;Tt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),ne=yn(ne),Et()});var Hf={x:0,z:0,seconds:90,phase:0,rise:0};for(let n of Object.keys(Hf))U("flight-"+n).onchange=()=>{let e=lt();if(!e||e.solid)return;Tt();let t=Object.fromEntries(Object.entries(Hf).map(([i,s])=>{let r=U("flight-"+i);return[i,Te.clamp(Number.isFinite(r.valueAsNumber)?r.valueAsNumber:s,Number(r.min),Number(r.max))]}));t.x||t.z?e.flight=t:delete e.flight,Et(),Ko()};U("map-boundary").onchange=U("map-ceiling").onchange=()=>{Tt();let n=U("map-boundary").valueAsNumber;n>0?ne.boundary={diameter:Te.clamp(n,12,2048),ceiling:Te.clamp(U("map-ceiling").valueAsNumber||128,3,256)}:delete ne.boundary,Et(),Ko()};U("map-world-size").onchange=n=>{Tt(),ne.worldSize=Te.clamp(Number(n.target.value)||240,24,2048),ne=yn(ne),Et(),Lr(),gt("Zone de construction : "+ne.worldSize+" \xD7 "+ne.worldSize+" m.")};U("map-name").onchange=n=>{Tt(),ne.name=n.target.value,ne=yn(ne),Et()};U("piece-search").addEventListener("input",wx);U("pieces").onchange=n=>{n.target.value!==""&&Yo(Number(n.target.value))};U("focus-piece").onclick=()=>{let n=wt.children[St];if(!n)return;let e=new fn().setFromObject(n).getBoundingSphere(new pi),t=Rt.position.clone().sub(Vt.target).normalize(),i=Math.atan(Math.tan(Te.degToRad(Rt.fov/2))*Math.min(Rt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Vt.target.copy(e.center),Rt.position.copy(e.center).addScaledVector(t,s),Vt.update(),cn()};for(let n of["x","y","z","yaw"])U("spawn-"+n).onchange=e=>{Tt(),ne.spawn[n]=Number(e.target.value),ne=yn(ne),Et()};U("spawn-here").onclick=()=>{let n=lt();if(!n)return;let e=n.solid&&Cx(n.x,n.z,n.yaw,wt.children[St]);if(!e)return gt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Tt(),ne.spawn=e,Et(),gt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of uu)n.onclick=()=>Gi(n.dataset.tool);U("duplicate").onclick=tp;U("add-mirror").onclick=()=>Qf(bf());U("delete").onclick=ep;U("rotate").onclick=Rw;U("undo").onclick=Ax;U("zoom-fit").onclick=Lr;U("snap").onchange=()=>ms(null);U("new-example").onclick=()=>ip(Yf(),"Ar\xE8ne de d\xE9part ouverte.");U("blank-map").onclick=()=>{let n=Te.clamp(Number(U("map-world-size").value)||240,24,2048);ip({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[ai({name:"Sol",y:-.25,w:Math.min(n,Vs),d:Math.min(n,Vs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};U("surface").onchange=n=>{let e=ul[n.target.value],t=lt();!e||!t||(Tt(),Object.assign(t,e),Et())};U("texture-file").onchange=async n=>{let e=n.target.files[0],t=lt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ne.pieces.includes(t))return gt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Tt(),t.texture=o,Et(),gt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){gt(i.message)}finally{n.target.value=""}};U("texture-paint").onclick=()=>{let n=lt();if(!n||n.model)return gt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");wf({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Tt(),n.texture=e,ne=yn(ne),Et(),gt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};U("terrain-grassTexture-paint").onclick=()=>{let n=lt();n?.terrain&&wf({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ne.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Tt(),n.terrain.grassTexture=e,ne=yn(ne),Et(),gt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};U("texture-clear").onclick=()=>{lt()?.texture&&(Tt(),lt().texture=null,Et())};U("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{ip(yn(await e.text()),"Map charg\xE9e.")}catch(t){gt(t.message)}finally{n.target.value=""}};U("export-map").onclick=()=>{try{N0(ne),gt("Map JSON export\xE9e.")}catch(n){gt(n.message)}};U("test-map").onclick=async()=>{try{await Su(F0,JSON.stringify(yn(ne))),location.href="./?custom=1"}catch{gt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Px=["detail","thickness","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"],Nw=new Intl.NumberFormat("fr-FR");function Ow(n){let e=n.terrain.rules,t=wt.children[St]?.userData.vegetation?.userData.distribution??[];U("terrain-add-rule").disabled=e.length>=Jh,U("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),U("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,S,v=!1)=>{let R=document.createElement("td");v&&(R.dataset.wide="");let L=document.createElement("span");return L.textContent=C,R.append(L,S),r.append(R),S.matches("input,select")&&S.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),R},a=C=>{Tt(),e[s]=hl({...i,...C}),Vi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),Et()},l=(C,S,v)=>{let R=document.createElement("select");return R.replaceChildren(...C.map(([L,O])=>new Option(L,O))),R.value=S,R.onchange=()=>v(R.value),R},c=(C,S,v,R)=>{let L=document.createElement("input");return L.type="number",L.value=i[C],L.min=S,L.max=v,L.step=R,L.onchange=()=>{Number.isFinite(L.valueAsNumber)?a({[C]:L.valueAsNumber}):L.value=i[C]},L},h=Vn.some(C=>C.id===i.model?.id)||!i.model?Vn:[...Vn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let S=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(C=>[C.name,C.id]),i.model.id,C=>a({model:h.find(S=>S.id===C)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:pf-1},(C,S)=>[String(S+2),String(S+2)]),String(i.colors.length),C=>{let S=i.colors.slice(0,Number(C));for(;S.length<Number(C);)S.push(S.at(-1));a({colors:S})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[C,S]of i.colors.entries()){let v=document.createElement("input");v.type="color",v.value=S,v.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),v.onchange=()=>a({colors:i.colors.map((R,L)=>L===C?v.value:R)}),f.append(v)}u.append(f),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,ll,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,ff,.05)),o("Variation de taille",c("variation",0,mf,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,S,v,R]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let L=document.createElement("label"),O=document.createElement("input");L.textContent=S,O.type="number",O.min=v,O.max=R,O.step="any",O.value=i.scatter?.[C]??_[C],O.onchange=()=>{Number.isFinite(O.valueAsNumber)&&a({scatter:{...i.scatter,[C]:O.valueAsNumber}})},L.append(O),m.append(L)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let M=document.createElement("td");M.dataset.wide="",M.append(x),r.append(M);let y=document.createElement("output"),T=t[s]??{count:0,requested:0,area:0};y.textContent=T.count+" / "+T.requested+" \xB7 "+T.area.toFixed(1)+" m\xB2",T.requested>T.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+Nw.format(T.collisions??0)+" collisions");let E=o("Affich\xE9es / demand\xE9es",y,!0),I=document.createElement("button");return I.type="button",I.textContent="Retirer la ligne",I.onclick=()=>{Tt(),e.splice(s,1),Et()},E.append(I),r}))}U("terrain-add-rule").onclick=()=>{let n=lt();!n?.terrain||n.terrain.rules.length>=Jh||(Tt(),n.terrain.rules.push(hl({seed:n.terrain.seed+n.terrain.rules.length})),Et(),U("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};U("terrain-stitch").onclick=()=>{let n=lt(),e=ne.pieces[Number(U("terrain-neighbor").value)],t=Te.clamp(Number(U("terrain-seam-width").value)||1.5,.1,25),i=w0(n,e,t);if(!i)return gt("Rapproche les bords \xE0 moins de 25 cm.");Tt(),ne.pieces[St]=i.piece,Et(),gt(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};U("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=lt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ne.pieces.includes(t))return;Tt(),t.terrain.grassTexture=o,Et(),gt("Texture d\u2019herbe import\xE9e.")}catch(i){gt(i.message)}};U("terrain-grassTexture-clear").onclick=()=>{lt()?.terrain&&(Tt(),lt().terrain.grassTexture=null,Et())};for(let n of["triangulation","projection"])U("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Tt(),t.terrain=fs({...t.terrain,[n]:e.target.value},t.w*t.d),Et())};U("adaptive-editor-view").onchange=cn;U("spawn-gizmo").onclick=()=>{Gi("spawn"),gt("Tire la fl\xE8che verte Y pour monter le point de d\xE9part.")};for(let n of Px)U("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Tt(),t.terrain=n==="detail"?yf(t.terrain,Number(e.target.value)):fs({...t.terrain,[n]:Number(e.target.value)},t.w*t.d),Et())};function Dx(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function Lx(n){let e=lt();e?.terrain&&(Tt(),e.terrain=fs({...e.terrain,reliefArea:n},e.w*e.d),Et())}U("terrain-relief-local").onchange=n=>{let e=lt();e?.terrain&&Lx(n.target.checked?Dx(e):null)};for(let n of["x","z","radius","blend"])U("terrain-relief-"+n).onchange=e=>{let t=lt(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&Lx({...t.terrain.reliefArea,[n]:i})};U("terrain-reset").onclick=()=>{lt()?.terrain&&(Tt(),lt().terrain.heights=null,Et())};function Ux(n,e){sp(n,e);let t=Ys.intersectObjects(wt.children,!1).find(a=>ne.pieces[wt.children.indexOf(a.object)]?.terrain),i=t?wt.children.indexOf(t.object):-1,s=ne.pieces[i];if(!s?.terrain||(Dt.recorded||(Tt(),Dt.recorded=!0,Dt.flattenY=t.point.y,Yo(i),U("terrain-controls").open=!0),i!==St))return;let r={mode:U("terrain-brush").value,radius:Number(U("brush-radius").value),strength:Number(U("brush-strength").value),target:Dt.flattenY};if(!T0(s,t.point.x,t.point.z,r))return;let o=wt.children[i];vf(o.geometry,s),ki?.update(),bi(),cn()}U("view-top").onclick=()=>{let n=Vt.target,e=Math.max(10,Rt.position.distanceTo(n));Rt.position.copy(n).add(new b(0,e,.001)),Vt.update(),cn()};U("view-perspective").onclick=()=>{Rt.position.copy(Vt.target).add(new b(16,15,24)),Lr()};U("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=ne.spawn,s=new b(0,0,-1).applyAxisAngle(xu,Te.degToRad(i));Rt.position.set(n,e+.87,t),Vt.target.copy(Rt.position).addScaledVector(s,5),Rt.lookAt(Vt.target),cn()};var lx={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||Dt||nt.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")Ax();else if(e==="d")tp();else return;else{if(n.altKey)return;if(lx[e])Gi(lx[e]);else if(e==="f")Lr();else if(e==="delete"||e==="backspace")ep();else return}n.preventDefault()});var Rr=new bn;vn.add(Rr);function Bw(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function Wf(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function zw(){xl=wt.children.map(Bw),Hs={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of xl.entries()){for(let i of["triangles","vertices","instances"])Hs[i]+=t[i];(Hs.heavy<0||t.triangles>xl[Hs.heavy].triangles)&&(Hs.heavy=e)}U("scene-mesh-stats").textContent="Objets de la carte \xB7 "+Wf(Hs);let n=Hs.heavy;U("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+ne.pieces[n].name+" \xB7 "+Wf(xl[n]),U("scene-select-heavy").disabled=n<0}U("scene-select-heavy").onclick=()=>{let n=Hs?.heavy??-1;n<0||(Yo(n),window.setInspectorTab("object"),U("focus-piece").click())};function Fx(){if(!U("debug-stats"))return;let n=Jo.info.render.triangles,e=ne?.pieces?.length??0;U("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ne?.worldSize??240)+" m"}function Nx(){for(let n of[...Rr.children])Rr.remove(n),n.geometry.dispose(),n.material.dispose();qo.visible=U("debug-grid").checked;for(let n of wt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=U("debug-wire").checked;if(U("debug-hitboxes").checked){let e=wt.children.indexOf(n),t=ne.pieces[e];if(t?.model){let i=new b(t.w,t.h,t.d),s=f0(t.model,i);if(s)for(let r of s){let o=new Ze(...r.size),a=new de(o,new an({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),Rr.add(a)}else{let r=d0(t.model,i),o=new de(r,new an({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),Rr.add(o)}}else if(t?.primitive==="ramp"){let i=new rr(new Oa(n.geometry),new mi({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),Rr.add(i)}else Rr.add(new Mo(n,"#fa9945"))}}cn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])U(n).onchange=Nx;U("debug-coords").onchange=()=>{U("debug-coords").checked||Fx()};for(let n of[ln,pt])n.addEventListener("pointermove",e=>{if(!U("debug-coords").checked||Dt||Mi)return;let t=Zo(n,e);if(!t)return;let i=t.point;U("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+ne.pieces.length+" \xE9l\xE9ments"});async function kw(){try{let n=await lp(ux);if(n){let e=yn(n);if(JSON.stringify(e)!==JSON.stringify(L0()))if(e.arenaBase&&!e.editableArena){let t=Yf(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=Vo?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ne=yn(e),gt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ne=e}else ne=e}}catch{}if(Aw(),Gi("move"),Et(),yu(),_u(),Lr(),Sl(),Nf){let n=Vn.find(e=>e.id===Nf);n?(U("place-model").click(),gt("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):gt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Vi("d\xE9marrage termin\xE9",{version:"R41",name:ne.name,pi\u00E8ces:ne.pieces.length})}kw();})();
