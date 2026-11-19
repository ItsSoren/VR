(()=>{var Ff=["Jour","Coucher de soleil","Nuit"],cl={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},tx=[cl,{...cl,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...cl,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Gi(n){return{...tx[n]??cl}}var ru=12e5,br=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,rs=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function hl(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(rs(n.preset,0,2,0)),t=Gi(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=ru&&/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(n.skyImage)?n.skyImage:null,s=rs(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&i?n.sky:"preset",rotation:rs(n.rotation,-360,360,0),skyTint:br(n.skyTint,"#ffffff"),skyColor:br(n.skyColor,t.skyColor),skyImage:i,fog:n.fog!==!1,fogColor:br(n.fogColor,t.fogColor),fogNear:s,fogFar:Math.max(s+1,rs(n.fogFar,1,4096,t.fogFar)),azimuth:rs(n.azimuth,-360,360,t.azimuth),elevation:rs(n.elevation,-89,89,t.elevation),sunColor:br(n.sunColor,t.sunColor),sunPower:rs(n.sunPower,0,12,t.sunPower),ambientColor:br(n.ambientColor,t.ambientColor),groundColor:br(n.groundColor,t.groundColor),ambientPower:rs(n.ambientPower,0,12,t.ambientPower)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_p=0,qu=1,vp=2;var Yu=1,Mp=2,Ii=3,mi=0,En=1,tn=2,Ji=0,Hs=1,Ca=2,Zu=3,ju=4,bp=5,fs=100,Sp=101,wp=102,Tp=103,Ep=104,Ap=200,Cp=201,Rp=202,Pp=203,Gl=204,Hl=205,Ip=206,Lp=207,Dp=208,Up=209,Np=210,Fp=211,Op=212,Bp=213,zp=214,yc=0,_c=1,vc=2,Ws=3,Mc=4,bc=5,Sc=6,wc=7,Tc=0,kp=1,Vp=2,Ki=0,Gp=1,Hp=2,Wp=3,Xp=4,qp=5,Yp=6,Zp=7;var Ju=300,ir=301,sr=302,Li=303,Ec=304,Ra=306,wn=1e3,ds=1001,Wl=1002,Ln=1003,jp=1004;var Pa=1005;var en=1006,Ac=1007;var An=1008;var yi=1009,Ku=1010,$u=1011,lo=1012,Cc=1013,vs=1014,_i=1015,co=1016,Rc=1017,Pc=1018,ho=1020,Qu=35902,ed=35899,td=1021,nd=1022,Cn=1023,Wr=1026,uo=1027,Ic=1028,Lc=1029,id=1030,Dc=1031;var Uc=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Nc=35840,Fc=35841,Oc=35842,Bc=35843,zc=36196,kc=37492,Vc=37496,Gc=37808,Hc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,Zc=37814,jc=37815,Jc=37816,Kc=37817,$c=37818,Qc=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,oh=36284,ah=36285,lh=36286;var $o=2300,Xl=2301,kl=2302,Uu=2400,Nu=2401,Fu=2402;var Jp=3200,Kp=3201;var ch=0,$p=1,$i="",mt="srgb",Xs="srgb-linear",Qo="linear",Et="srgb";var Gs=7680;var Ou=519,Qp=512,em=513,tm=514,sd=515,nm=516,im=517,sm=518,rm=519,ql=35044,Na=35048;var rd="300 es",pi=2e3,ea=2001;var Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=1234567,Zo=Math.PI/180,Xr=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function od(n,e){return(n%e+e)%e}function nx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ix(n,e,t){return n!==e?(t-n)/(e-n):0}function jo(n,e,t){return(1-t)*n+t*e}function sx(n,e,t,i){return jo(n,e,1-Math.exp(-t*i))}function rx(n,e=1){return e-Math.abs(od(n,e*2)-e)}function ox(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ax(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cx(n,e){return n+Math.random()*(e-n)}function hx(n){return n*(.5-Math.random())}function ux(n){n!==void 0&&(Of=n);let e=Of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dx(n){return n*Zo}function fx(n){return n*Xr}function px(n){return(n&n-1)===0&&n!==0}function mx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ce={DEG2RAD:Zo,RAD2DEG:Xr,generateUUID:Ai,clamp:Qe,euclideanModulo:od,mapLinear:nx,inverseLerp:ix,lerp:jo,damp:sx,pingpong:rx,smoothstep:ox,smootherstep:ax,randInt:lx,randFloat:cx,randFloatSpread:hx,seededRandom:ux,degToRad:dx,radToDeg:fx,isPowerOfTwo:px,ceilPowerOfTwo:mx,floorPowerOfTwo:gx,setQuaternionFromProperEuler:xx,normalize:Tt,denormalize:fi},he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let E=Math.sqrt(M),C=Math.atan2(E,m*_);g=Math.sin(g*C)/E,a=Math.sin(a*C)/E}let y=a*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ou=new v,Bf=new pt,tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],M=s[4],y=s[7],E=s[2],C=s[5],I=s[8];return r[0]=o*x+a*_+l*E,r[3]=o*g+a*M+l*C,r[6]=o*m+a*y+l*I,r[1]=c*x+h*_+u*E,r[4]=c*g+h*M+u*C,r[7]=c*m+h*y+u*I,r[2]=f*x+d*_+p*E,r[5]=f*g+d*M+p*C,r[8]=f*m+d*y+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},au=new tt;function ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function om(){let n=qr("canvas");return n.style.display="block",n}var zf={};function Yr(n){n in zf||(zf[n]=!0,console.warn(n))}function am(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var kf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yx(){let n={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xs]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:kf,fromXYZ:Vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:kf,fromXYZ:Vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),n}var xt=yx();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=qr("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_x=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lu(s[o].image)):r.push(lu(s[o]))}else r=lu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function lu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vx=0,cu=new v,yn=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ds,s=ds,r=en,o=An,a=Cn,l=yi,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Ai(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Ju;yn.DEFAULT_ANISOTROPY=1;var Xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,E=(m+1)/2,C=(h+f)/4,I=(u+x)/4,R=(p+g)/4;return M>y&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=I/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=R/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=I/r,s=R/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new yn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Zl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ta=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),dl.subVectors(this.max,Oo),wr.subVectors(e.a,Oo),Tr.subVectors(e.b,Oo),Er.subVectors(e.c,Oo),os.subVectors(Tr,wr),as.subVectors(Er,Tr),Bs.subVectors(wr,Er);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Bs.z,Bs.y,os.z,0,-os.x,as.z,0,-as.x,Bs.z,0,-Bs.x,-os.y,os.x,0,-as.y,as.x,0,-Bs.y,Bs.x,0];return!hu(t,wr,Tr,Er,dl)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,wr,Tr,Er,dl))?!1:(fl.crossVectors(os,as),t=[fl.x,fl.y,fl.z],hu(t,wr,Tr,Er,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new v,new v,new v,new v,new v,new v,new v,new v],hi=new v,ul=new sn,wr=new v,Tr=new v,Er=new v,os=new v,as=new v,Bs=new v,Oo=new v,dl=new v,fl=new v,zs=new v;function hu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zs.fromArray(n,r);let a=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mx=new sn,Bo=new v,uu=new v,Qn=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let t=Bo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Bo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(uu)),this.expandByPoint(Bo.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wi=new v,du=new v,pl=new v,ls=new v,fu=new v,ml=new v,pu=new v,ps=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){du.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(du);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pl),a=ls.dot(this.direction),l=-ls.dot(pl),c=ls.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(du).addScaledVector(pl,f),d}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,s,r){fu.subVectors(t,e),ml.subVectors(i,e),pu.crossVectors(fu,ml);let o=this.direction.dot(pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);let l=a*this.direction.dot(ml.crossVectors(ls,ml));if(l<0)return null;let c=a*this.direction.dot(fu.cross(ls));if(c<0||l+c>o)return null;let h=-a*ls.dot(pu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Sx)}lookAt(e,t,i){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),cs.crossVectors(i,Vn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),cs.crossVectors(i,Vn)),cs.normalize(),gl.crossVectors(Vn,cs),s[0]=cs.x,s[4]=gl.x,s[8]=Vn.x,s[1]=cs.y,s[5]=gl.y,s[9]=Vn.y,s[2]=cs.z,s[6]=gl.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],M=i[7],y=i[11],E=i[15],C=s[0],I=s[4],R=s[8],S=s[12],b=s[1],L=s[5],U=s[9],z=s[13],X=s[2],W=s[6],V=s[10],te=s[14],q=s[3],se=s[7],fe=s[11],be=s[15];return r[0]=o*C+a*b+l*X+c*q,r[4]=o*I+a*L+l*W+c*se,r[8]=o*R+a*U+l*V+c*fe,r[12]=o*S+a*z+l*te+c*be,r[1]=h*C+u*b+f*X+d*q,r[5]=h*I+u*L+f*W+d*se,r[9]=h*R+u*U+f*V+d*fe,r[13]=h*S+u*z+f*te+d*be,r[2]=p*C+x*b+g*X+m*q,r[6]=p*I+x*L+g*W+m*se,r[10]=p*R+x*U+g*V+m*fe,r[14]=p*S+x*z+g*te+m*be,r[3]=_*C+M*b+y*X+E*q,r[7]=_*I+M*L+y*W+E*se,r[11]=_*R+M*U+y*V+E*fe,r[15]=_*S+M*z+y*te+E*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,M=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,y=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,E=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,C=t*_+i*M+s*y+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=_*I,e[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*m-i*f*m)*I,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*I,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=M*I,e[5]=(h*g*r-p*f*r+p*s*d-t*g*d-h*s*m+t*f*m)*I,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=y*I,e[9]=(p*u*r-h*x*r-p*i*d+t*x*d+h*i*m-t*u*m)*I,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*I,e[12]=E*I,e[13]=(h*x*s-p*u*s+p*i*f-t*x*f-h*i*g+t*u*g)*I,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,M=l*h,y=l*u,E=i.x,C=i.y,I=i.z;return s[0]=(1-(x+m))*E,s[1]=(d+y)*E,s[2]=(p-M)*E,s[3]=0,s[4]=(d-y)*C,s[5]=(1-(f+m))*C,s[6]=(g+_)*C,s[7]=0,s[8]=(p+M)*I,s[9]=(g-_)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),a=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,h=1/o,u=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===pi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ea)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===pi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ea)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ar=new v,ui=new ft,bx=new v(0,0,0),Sx=new v(1,1,1),cs=new v,gl=new v,Vn=new v,Gf=new ft,Hf=new pt,qt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wx=0,Wf=new v,Cr=new pt,Xi=new ft,xl=new v,zo=new v,Tx=new v,Ex=new pt,Xf=new v(1,0,0),qf=new v(0,1,0),Yf=new v(0,0,1),Zf={type:"added"},Ax={type:"removed"},Rr={type:"childadded",child:null},mu={type:"childremoved",child:null},zt=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new v,t=new qt,i=new pt,s=new v(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new tt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xl.copy(e):xl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(zo,xl,this.up):Xi.lookAt(xl,zo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new v(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new v,qi=new v,gu=new v,Yi=new v,Pr=new v,Ir=new v,jf=new v,xu=new v,yu=new v,_u=new v,vu=new Xt,Mu=new Xt,bu=new Xt,In=class n{constructor(e=new v,t=new v,i=new v){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){di.subVectors(s,t),qi.subVectors(i,t),gu.subVectors(e,t);let o=di.dot(di),a=di.dot(qi),l=di.dot(gu),c=qi.dot(qi),h=qi.dot(gu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return vu.setScalar(0),Mu.setScalar(0),bu.setScalar(0),vu.fromBufferAttribute(e,t),Mu.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vu,r.x),o.addScaledVector(Mu,r.y),o.addScaledVector(bu,r.z),o}static isFrontFacing(e,t,i,s){return di.subVectors(i,t),qi.subVectors(e,t),di.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Pr.subVectors(s,i),Ir.subVectors(r,i),xu.subVectors(e,i);let l=Pr.dot(xu),c=Ir.dot(xu);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,s);let h=Pr.dot(yu),u=Ir.dot(yu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Pr,o);_u.subVectors(e,r);let d=Pr.dot(_u),p=Ir.dot(_u);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ir,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return jf.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(jf,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Su(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=od(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Su(o,r,e+1/3),this.g=Su(o,r,e),this.b=Su(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let i=lm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return xt.workingToColorSpace(pn.copy(this),e),Math.round(Qe(pn.r*255,0,255))*65536+Math.round(Qe(pn.g*255,0,255))*256+Math.round(Qe(pn.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mt){xt.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(yl);let i=jo(hs.h,yl.h,t),s=jo(hs.s,yl.s,t),r=jo(hs.l,yl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new ke;ke.NAMES=lm;var Cx=0,gi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Hs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new v,_l=new he,Rx=0,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}};var na=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ia=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Fe=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Px=0,$n=new ft,wu=new zt,Lr=new v,Gn=new sn,ko=new sn,hn=new v,at=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Gn.min,ko.min),Gn.expandByPoint(hn),hn.addVectors(Gn.max,ko.max),Gn.expandByPoint(hn)):(Gn.expandByPoint(ko.min),Gn.expandByPoint(ko.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),hn.add(Lr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new v,l[R]=new v;let c=new v,h=new v,u=new v,f=new he,d=new he,p=new he,x=new v,g=new v;function m(R,S,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[R].add(x),a[S].add(x),a[b].add(x),l[R].add(g),l[S].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){let b=_[R],L=b.start,U=b.count;for(let z=L,X=L+U;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new v,y=new v,E=new v,C=new v;function I(R){E.fromBufferAttribute(s,R),C.copy(E);let S=a[R];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(C,S);let L=y.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,S=_.length;R<S;++R){let b=_[R],L=b.start,U=b.count;for(let z=L,X=L+U;z<X;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jf=new ft,ks=new ps,vl=new Qn,Kf=new v,Ml=new v,bl=new v,Sl=new v,Tu=new v,wl=new v,$f=new v,Tl=new v,pe=class extends zt{constructor(e=new at,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Tu.fromBufferAttribute(u,e),o?wl.addScaledVector(Tu,h):wl.addScaledVector(Tu.sub(t),h))}t.add(wl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(vl.containsPoint(ks.origin)===!1&&(ks.intersectSphere(vl,Kf)===null||ks.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Jf.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Jf),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,E=M;y<E;y+=3){let C=a.getX(y),I=a.getX(y+1),R=a.getX(y+2);s=El(this,m,e,i,c,h,u,C,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=El(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,E=M;y<E;y+=3){let C=y,I=y+1,R=y+2;s=El(this,m,e,i,c,h,u,C,I,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,M=g+1,y=g+2;s=El(this,o,e,i,c,h,u,_,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ix(n,e,t,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:n}}function El(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ml),n.getVertexPosition(l,bl),n.getVertexPosition(c,Sl);let h=Ix(n,e,t,i,Ml,bl,Sl,$f);if(h){let u=new v;In.getBarycoord($f,Ml,bl,Sl,u),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new v,materialIndex:0};In.getNormal(Ml,bl,Sl,f.normal),h.face=f,h.barycoord=u}return h}var Ge=class n extends at{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function p(x,g,m,_,M,y,E,C,I,R,S){let b=y/I,L=E/R,U=y/2,z=E/2,X=C/2,W=I+1,V=R+1,te=0,q=0,se=new v;for(let fe=0;fe<V;fe++){let be=fe*L-z;for(let Ie=0;Ie<W;Ie++){let He=Ie*b-U;se[x]=He*_,se[g]=be*M,se[m]=X,c.push(se.x,se.y,se.z),se[x]=0,se[g]=0,se[m]=C>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ie/I),u.push(1-fe/R),te+=1}}for(let fe=0;fe<R;fe++)for(let be=0;be<I;be++){let Ie=f+be+W*fe,He=f+be+W*(fe+1),je=f+(be+1)+W*(fe+1),et=f+(be+1)+W*fe;l.push(Ie,He,et),l.push(He,je,et),q+=6}a.addGroup(d,q,S),d+=q,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=rr(n[t]);for(let s in i)e[s]=i[s]}return e}function Lx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var cm={clone:rr,merge:vn},Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xi=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sa=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},us=new v,Qf=new he,ep=new he,mn=class extends sa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,ep),t.subVectors(ep,Qf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Ur=1,Jl=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Dr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new mn(Dr,Ur,e,t);r.layers=this.layers,this.add(r);let o=new mn(Dr,Ur,e,t);o.layers=this.layers,this.add(o);let a=new mn(Dr,Ur,e,t);a.layers=this.layers,this.add(a);let l=new mn(Dr,Ur,e,t);l.layers=this.layers,this.add(l);let c=new mn(Dr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ra=class extends yn{constructor(e=[],t=ir,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ji});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=en),new Jl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},xn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var qs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new v,$r=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Vo=new v,Fr=new v,Or=new v,Br=new he,Go=new he,hm=new ft,Al=new v,Ho=new v,Cl=new v,tp=new he,Eu=new he,np=new he,aa=class extends zt{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oa(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new $r(i,3,0,!1)),Nr.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),hm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Rl(Al.set(-.5,-.5,0),Or,o,Fr,s,r),Rl(Ho.set(.5,-.5,0),Or,o,Fr,s,r),Rl(Cl.set(.5,.5,0),Or,o,Fr,s,r),tp.set(0,0),Eu.set(1,0),np.set(1,1);let a=e.ray.intersectTriangle(Al,Ho,Cl,!1,Vo);if(a===null&&(Rl(Ho.set(-.5,.5,0),Or,o,Fr,s,r),Eu.set(0,1),a=e.ray.intersectTriangle(Al,Cl,Ho,!1,Vo),a===null))return;let l=e.ray.origin.distanceTo(Vo);l<e.near||l>e.far||t.push({distance:l,point:Vo.clone(),uv:In.getInterpolation(Vo,Al,Ho,Cl,tp,Eu,np,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rl(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Go.x=r*Br.x-s*Br.y,Go.y=s*Br.x+r*Br.y):Go.copy(Br),n.copy(e),n.x+=Go.x,n.y+=Go.y,n.applyMatrix4(hm)}var ei=class extends yn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ln,h=Ln,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new ft,ip=new ft,Pl=[],sp=new sn,Fx=new ft,Wo=new pe,Xo=new Qn,la=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),sp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(sp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Xo.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),ip.multiplyMatrices(i,zr),Wo.matrixWorld=ip,Wo.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){let l=Pl[o];l.instanceId=r,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,Ic,_i));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Au=new v,Ox=new v,Bx=new tt,gn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Au.subVectors(i,t).cross(Ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Au),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bx.getNormalMatrix(e),s=this.coplanarPoint(Au).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new Qn,zx=new he(.5,.5),Il=new v,to=class{constructor(e=new gn,t=new gn,i=new gn,s=new gn,r=new gn,o=new gn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],M=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,m-p,E-_).normalize(),s[1].setComponents(c+o,d+h,m+p,E+_).normalize(),s[2].setComponents(c+a,d+u,m+x,E+M).normalize(),s[3].setComponents(c-a,d-u,m-x,E-M).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,m-g,E-y).normalize();else if(s[4].setComponents(c-l,d-f,m-g,E-y).normalize(),t===pi)s[5].setComponents(c+l,d+f,m+g,E+y).normalize();else if(t===ea)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=zx.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Il.x=s.normal.x>0?e.max.x:e.min.x,Il.y=s.normal.y>0?e.max.y:e.min.y,Il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ti=class extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new v,Ql=new v,rp=new ft,qo=new ps,Ll=new Qn,Cu=new v,op=new v,Dn=class extends zt{constructor(e=new at,t=new ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$l.fromBufferAttribute(t,s-1),Ql.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$l.distanceTo(Ql);e.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;rp.copy(s).invert(),qo.copy(e.ray).applyMatrix4(rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),M=Dl(this,e,qo,l,m,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Dl(this,e,qo,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Dl(this,e,qo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Dl(this,e,qo,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if($l.fromBufferAttribute(a,s),Ql.fromBufferAttribute(a,r),t.distanceSqToSegment($l,Ql,Cu,op)>i)return;Cu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Cu);if(!(c<e.near||c>e.far))return{distance:c,point:op.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ap=new v,lp=new v,Ys=class extends Dn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ap.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ap.distanceTo(lp);e.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ca=class extends Dn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Pi=class extends yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends yn{constructor(e,t,i=vs,s,r,o,a=Ln,l=Ln,c,h=Wr,u=1){if(h!==Wr&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ua=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class n extends at{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,x=s+1,g=new v,m=new v;for(let _=0;_<=p;_++){let M=0,y=0,E=0,C=0;if(_<=i){let S=_/i,b=S*Math.PI/2;y=-h-e*Math.cos(b),E=e*Math.sin(b),C=-e*Math.cos(b),M=S*u}else if(_<=i+r){let S=(_-i)/r;y=-h+S*t,E=e,C=0,M=u+S*f}else{let S=(_-i-r)/i,b=S*Math.PI/2;y=h+e*Math.sin(b),E=e*Math.cos(b),C=e*Math.sin(b),M=u+f+S*u}let I=Math.max(0,Math.min(1,M/d)),R=0;_===0?R=.5/s:_===p&&(R=-.5/s);for(let S=0;S<=s;S++){let b=S/s,L=b*Math.PI*2,U=Math.sin(L),z=Math.cos(L);m.x=-E*z,m.y=y,m.z=E*U,a.push(m.x,m.y,m.z),g.set(-E*z,C,E*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+R,I)}if(_>0){let S=(_-1)*x;for(let b=0;b<s;b++){let L=S+b,U=S+b+1,z=_*x+b,X=_*x+b+1;o.push(L,U,z),o.push(U,X,z)}}}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_n=class n extends at{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ct=class n extends at{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(d,2));function _(){let y=new v,E=new v,C=0,I=(t-e)/i;for(let R=0;R<=r;R++){let S=[],b=R/r,L=b*(t-e)+e;for(let U=0;U<=s;U++){let z=U/s,X=z*l+a,W=Math.sin(X),V=Math.cos(X);E.x=L*W,E.y=-b*i+g,E.z=L*V,u.push(E.x,E.y,E.z),y.set(W,I,V).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-b),S.push(p++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let b=x[S][R],L=x[S+1][R],U=x[S+1][R+1],z=x[S][R+1];(e>0||S!==0)&&(h.push(b,L,z),C+=3),(t>0||S!==r-1)&&(h.push(L,U,z),C+=3)}c.addGroup(m,C,0),m+=C}function M(y){let E=p,C=new he,I=new v,R=0,S=y===!0?e:t,b=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let L=p;for(let U=0;U<=s;U++){let X=U/s*l+a,W=Math.cos(X),V=Math.sin(X);I.x=S*V,I.y=g*b,I.z=S*W,u.push(I.x,I.y,I.z),f.push(0,b,0),C.x=W*.5+.5,C.y=V*.5*b+.5,d.push(C.x,C.y),p++}for(let U=0;U<s;U++){let z=E+U,X=L+U;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),R+=3}c.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class n extends Ct{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},no=class n extends at{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(r.slice(),3)),this.setAttribute("uv",new Fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new v,y=new v,E=new v;for(let C=0;C<t.length;C+=3)d(t[C+0],M),d(t[C+1],y),d(t[C+2],E),l(M,y,E,_)}function l(_,M,y,E){let C=E+1,I=[];for(let R=0;R<=C;R++){I[R]=[];let S=_.clone().lerp(y,R/C),b=M.clone().lerp(y,R/C),L=C-R;for(let U=0;U<=L;U++)U===0&&R===C?I[R][U]=S:I[R][U]=S.clone().lerp(b,U/L)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){let b=Math.floor(S/2);S%2===0?(f(I[R][b+1]),f(I[R+1][b]),f(I[R][b])):(f(I[R][b+1]),f(I[R+1][b+1]),f(I[R+1][b]))}}function c(_){let M=new v;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let _=new v;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;o.push(y,1-E)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],y=o[_+2],E=o[_+4],C=Math.max(M,y,E),I=Math.min(M,y,E);C>.9&&I<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let _=new v,M=new v,y=new v,E=new v,C=new he,I=new he,R=new he;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[b+0],o[b+1]),I.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),E.copy(_).add(M).add(y).divideScalar(3);let L=g(E);x(C,b+0,_,L),x(I,b+2,M,L),x(R,b+4,y,L)}}function x(_,M,y,E){E<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new v,s=[],r=[],o=[],a=new v,l=new ft;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},io=class extends Hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ec=class extends io{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ul=new v,Ru=new cd,Pu=new cd,Iu=new cd,tc=class extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new v){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ul.subVectors(s[0],s[1]).add(s[0]),c=Ul);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ul.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Ru.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),Pu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),Iu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Ru.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Pu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Iu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ru.calc(l),Pu.calc(l),Iu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new v().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function kx(n,e){let t=1-n;return t*t*e}function Vx(n,e){return 2*(1-n)*n*e}function Gx(n,e){return n*n*e}function Jo(n,e,t,i){return kx(n,e)+Vx(n,t)+Gx(n,i)}function Hx(n,e){let t=1-n;return t*t*t*e}function Wx(n,e){let t=1-n;return 3*t*t*n*e}function Xx(n,e){return 3*(1-n)*n*n*e}function qx(n,e){return n*n*n*e}function Ko(n,e,t,i,s){return Hx(n,e)+Wx(n,t)+Xx(n,i)+qx(n,s)}var da=class extends Hn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends Hn{constructor(e=new v,t=new v,i=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends Hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Hn{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Hn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends Hn{constructor(e=new v,t=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jo(e,s.x,r.x,o.x),Jo(e,s.y,r.y,o.y),Jo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(cp(a,l.x,c.x,h.x,u.x),cp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Bu=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:tc,CubicBezierCurve:da,CubicBezierCurve3:nc,EllipseCurve:io,LineCurve:fa,LineCurve3:ic,QuadraticBezierCurve:pa,QuadraticBezierCurve3:sc,SplineCurve:ma}),rc=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Bu[s.type]().fromJSON(s))}return this}},ga=class extends rc{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new fa(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new pa(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new da(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ma(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new io(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class extends ga{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ga().fromJSON(s))}return this}};function Yx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=um(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=$x(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return xa(r,o,t,a,l,c,0),o}function um(n,e,t,i,s){let r;if(s===cy(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=hp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=hp(o/i|0,n[o],n[o+1],r);return r&&so(r,r.next)&&(_a(r),r=r.next),r}function js(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(so(t,t.next)||Wt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&iy(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?jx(n,i,s,r):Zx(n)){e.push(l.i,n.i,c.i),_a(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Jx(js(n),e),xa(n,e,t,i,s,r,2)):o===2&&Kx(n,e,t,i,s,r):xa(js(n),e,t,i,s,r,1);break}}}function Zx(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Yo(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function jx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=zu(d,p,e,t,i),_=zu(x,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=m&&y&&y.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Yo(a,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Yo(a,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Yo(a,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Yo(a,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!so(i,s)&&fm(i,t,t.next,s)&&ya(i,s)&&ya(s,i)&&(e.push(i.i,t.i,s.i),_a(t),_a(t.next),t=n=s),t=t.next}while(t!==n);return js(t)}function Kx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oy(o,a)){let l=pm(o,a);o=js(o,o.next),l=js(l,l.next),xa(o,e,t,i,s,r,0),xa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $x(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=um(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ry(c))}s.sort(Qx);for(let r=0;r<s.length;r++)t=ey(s[r],t);return t}function Qx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ey(n,e){let t=ty(n,e);if(!t)return e;let i=pm(t,n);return js(i,i.next),js(t,t.next)}function ty(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(so(n,t))return t;do{if(so(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&dm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ya(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ny(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ny(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function iy(n,e,t,i){let s=n;do s.z===0&&(s.z=zu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sy(s)}function sy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function zu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ry(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Yo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&dm(n,e,t,i,s,r,o,a)}function oy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ay(n,e)&&(ya(n,e)&&ya(e,n)&&ly(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||so(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function so(n,e){return n.x===e.x&&n.y===e.y}function fm(n,e,t,i){let s=Fl(Wt(n,e,t)),r=Fl(Wt(n,e,i)),o=Fl(Wt(t,i,n)),a=Fl(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&Nl(n,t,e)||r===0&&Nl(n,i,e)||o===0&&Nl(t,n,i)||a===0&&Nl(t,e,i))}function Nl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fl(n){return n>0?1:n<0?-1:0}function ay(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function ly(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pm(n,e){let t=ku(n.i,n.x,n.y),i=ku(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hp(n,e,t,i){let s=ku(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ku(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Vu=class{static triangulate(e,t,i=2){return Yx(e,t,i)}},Ei=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];up(e),dp(i,e);let o=e.length;t.forEach(up);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,dp(i,t[l]);let a=Vu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function up(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function dp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Js=class n extends at{constructor(e=new ji([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:hy,M,y=!1,E,C,I,R;m&&(M=m.getSpacedPoints(h),y=!0,f=!1,E=m.computeFrenetFrames(h,!1),C=new v,I=new v,R=new v),f||(g=0,d=0,p=0,x=0);let S=a.extractPoints(c),b=S.shape,L=S.holes;if(!Ei.isClockWise(b)){b=b.reverse();for(let ce=0,le=L.length;ce<le;ce++){let oe=L[ce];Ei.isClockWise(oe)&&(L[ce]=oe.reverse())}}function z(ce){let oe=10000000000000001e-36,ae=ce[0];for(let Me=1;Me<=ce.length;Me++){let ge=Me%ce.length,_e=ce[ge],Je=_e.x-ae.x,Xe=_e.y-ae.y,P=Je*Je+Xe*Xe,w=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(ae.x),Math.abs(ae.y)),H=oe*w*w;if(P<=H){ce.splice(ge,1),Me--;continue}ae=_e}}z(b),L.forEach(z);let X=L.length,W=b;for(let ce=0;ce<X;ce++){let le=L[ce];b=b.concat(le)}function V(ce,le,oe){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(le,oe)}let te=b.length;function q(ce,le,oe){let ae,Me,ge,_e=ce.x-le.x,Je=ce.y-le.y,Xe=oe.x-ce.x,P=oe.y-ce.y,w=_e*_e+Je*Je,H=_e*P-Je*Xe;if(Math.abs(H)>Number.EPSILON){let j=Math.sqrt(w),de=Math.sqrt(Xe*Xe+P*P),ne=le.x-Je/j,Le=le.y+_e/j,ve=oe.x-P/de,De=oe.y+Xe/de,Ne=((ve-ne)*P-(De-Le)*Xe)/(_e*P-Je*Xe);ae=ne+_e*Ne-ce.x,Me=Le+Je*Ne-ce.y;let me=ae*ae+Me*Me;if(me<=2)return new he(ae,Me);ge=Math.sqrt(me/2)}else{let j=!1;_e>Number.EPSILON?Xe>Number.EPSILON&&(j=!0):_e<-Number.EPSILON?Xe<-Number.EPSILON&&(j=!0):Math.sign(Je)===Math.sign(P)&&(j=!0),j?(ae=-Je,Me=_e,ge=Math.sqrt(w)):(ae=_e,Me=Je,ge=Math.sqrt(w/2))}return new he(ae/ge,Me/ge)}let se=[];for(let ce=0,le=W.length,oe=le-1,ae=ce+1;ce<le;ce++,oe++,ae++)oe===le&&(oe=0),ae===le&&(ae=0),se[ce]=q(W[ce],W[oe],W[ae]);let fe=[],be,Ie=se.concat();for(let ce=0,le=X;ce<le;ce++){let oe=L[ce];be=[];for(let ae=0,Me=oe.length,ge=Me-1,_e=ae+1;ae<Me;ae++,ge++,_e++)ge===Me&&(ge=0),_e===Me&&(_e=0),be[ae]=q(oe[ae],oe[ge],oe[_e]);fe.push(be),Ie=Ie.concat(be)}let He;if(g===0)He=Ei.triangulateShape(W,L);else{let ce=[],le=[];for(let oe=0;oe<g;oe++){let ae=oe/g,Me=d*Math.cos(ae*Math.PI/2),ge=p*Math.sin(ae*Math.PI/2)+x;for(let _e=0,Je=W.length;_e<Je;_e++){let Xe=V(W[_e],se[_e],ge);Q(Xe.x,Xe.y,-Me),ae===0&&ce.push(Xe)}for(let _e=0,Je=X;_e<Je;_e++){let Xe=L[_e];be=fe[_e];let P=[];for(let w=0,H=Xe.length;w<H;w++){let j=V(Xe[w],be[w],ge);Q(j.x,j.y,-Me),ae===0&&P.push(j)}ae===0&&le.push(P)}}He=Ei.triangulateShape(ce,le)}let je=He.length,et=p+x;for(let ce=0;ce<te;ce++){let le=f?V(b[ce],Ie[ce],et):b[ce];y?(I.copy(E.normals[0]).multiplyScalar(le.x),C.copy(E.binormals[0]).multiplyScalar(le.y),R.copy(M[0]).add(I).add(C),Q(R.x,R.y,R.z)):Q(le.x,le.y,0)}for(let ce=1;ce<=h;ce++)for(let le=0;le<te;le++){let oe=f?V(b[le],Ie[le],et):b[le];y?(I.copy(E.normals[ce]).multiplyScalar(oe.x),C.copy(E.binormals[ce]).multiplyScalar(oe.y),R.copy(M[ce]).add(I).add(C),Q(R.x,R.y,R.z)):Q(oe.x,oe.y,u/h*ce)}for(let ce=g-1;ce>=0;ce--){let le=ce/g,oe=d*Math.cos(le*Math.PI/2),ae=p*Math.sin(le*Math.PI/2)+x;for(let Me=0,ge=W.length;Me<ge;Me++){let _e=V(W[Me],se[Me],ae);Q(_e.x,_e.y,u+oe)}for(let Me=0,ge=L.length;Me<ge;Me++){let _e=L[Me];be=fe[Me];for(let Je=0,Xe=_e.length;Je<Xe;Je++){let P=V(_e[Je],be[Je],ae);y?Q(P.x,P.y+M[h-1].y,M[h-1].x+oe):Q(P.x,P.y,u+oe)}}}re(),F();function re(){let ce=s.length/3;if(f){let le=0,oe=te*le;for(let ae=0;ae<je;ae++){let Me=He[ae];ee(Me[2]+oe,Me[1]+oe,Me[0]+oe)}le=h+g*2,oe=te*le;for(let ae=0;ae<je;ae++){let Me=He[ae];ee(Me[0]+oe,Me[1]+oe,Me[2]+oe)}}else{for(let le=0;le<je;le++){let oe=He[le];ee(oe[2],oe[1],oe[0])}for(let le=0;le<je;le++){let oe=He[le];ee(oe[0]+te*h,oe[1]+te*h,oe[2]+te*h)}}i.addGroup(ce,s.length/3-ce,0)}function F(){let ce=s.length/3,le=0;O(W,le),le+=W.length;for(let oe=0,ae=L.length;oe<ae;oe++){let Me=L[oe];O(Me,le),le+=Me.length}i.addGroup(ce,s.length/3-ce,1)}function O(ce,le){let oe=ce.length;for(;--oe>=0;){let ae=oe,Me=oe-1;Me<0&&(Me=ce.length-1);for(let ge=0,_e=h+g*2;ge<_e;ge++){let Je=te*ge,Xe=te*(ge+1),P=le+ae+Je,w=le+Me+Je,H=le+Me+Xe,j=le+ae+Xe;ze(P,w,H,j)}}}function Q(ce,le,oe){l.push(ce),l.push(le),l.push(oe)}function ee(ce,le,oe){ht(ce),ht(le),ht(oe);let ae=s.length/3,Me=_.generateTopUV(i,s,ae-3,ae-2,ae-1);D(Me[0]),D(Me[1]),D(Me[2])}function ze(ce,le,oe,ae){ht(ce),ht(le),ht(ae),ht(le),ht(oe),ht(ae);let Me=s.length/3,ge=_.generateSideWallUV(i,s,Me-6,Me-3,Me-2,Me-1);D(ge[0]),D(ge[1]),D(ge[3]),D(ge[1]),D(ge[2]),D(ge[3])}function ht(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function D(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return uy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bu[s.type]().fromJSON(s)),new n(i,e.options)}},hy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(f,1-p),new he(x,1-m)]:[new he(a,1-l),new he(h,1-u),new he(d,1-p),new he(g,1-m)]}};function uy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ni=class n extends no{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},va=class n extends at{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,f=new he,d=new v,p=new v,x=new v,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let M=i+_*h*s,y=Math.sin(M),E=Math.cos(M);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*E,o.push(u.x,u.y,u.z),f.x=_/t,f.y=C/(e.length-1),a.push(f.x,f.y);let I=l[3*C+0]*y,R=l[3*C+1],S=l[3*C+0]*E;c.push(I,R,S)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,E=y,C=y+e.length,I=y+e.length+1,R=y+1;r.push(E,C,R),r.push(I,R,C)}this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("uv",new Fe(a,2)),this.setAttribute("normal",new Fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ii=class n extends no{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},dn=class n extends at{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let M=0;M<c;M++){let y=M*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,y=_+c*(m+1),E=_+1+c*(m+1),C=_+1+c*m;d.push(M,y,C),d.push(y,E,C)}this.setIndex(d),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gs=class n extends at{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new v,p=new he;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,M=_,y=_+i+1,E=_+i+2,C=_+1;a.push(M,y,C),a.push(y,E,C)}}this.setIndex(a),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ma=class n extends at{constructor(e=new ji([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Ei.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Ei.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=Ei.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];d=d.concat(_)}for(let g=0,m=d.length;g<m;g++){let _=d[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],M=_[0]+u,y=_[1]+u,E=_[2]+u;i.push(M,y,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dy(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function dy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var si=class n extends at{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,f=new v,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],M=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let C=E/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(C+y,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let M=h[m][_+1],y=h[m][_],E=h[m+1][_],C=h[m+1][_+1];(m!==0||o>0)&&d.push(M,y,C),(m!==i-1||l<Math.PI)&&d.push(y,E,C)}this.setIndex(d),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ks=class n extends no{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Tn=class n extends at{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new v,u=new v,f=new v;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,_=(s+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ba=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new v,r=new v;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),fp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),fp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function fp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var un=class extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wn=class extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oc=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ol(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lc=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:r=e,a=2*t-i;break;case Fu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:o=e,l=2*i-t;break;case Fu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+_*o[c+E]+M*o[l+E]+y*o[u+E];return r}},cc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},hc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ol(t,this.TimeBufferType),this.values=Ol(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ol(e.times,Array),values:Ol(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&fy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Xl;var xs=class extends Xn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=$o;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};uc.prototype.ValueTypeName="color";var dc=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};dc.prototype.ValueTypeName="number";var fc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)pt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sa=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Xn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=$o;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends Xn{constructor(e,t,i,s){super(e,t,i,s)}};pc.prototype.ValueTypeName="vector";var Vl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},mc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mm=new mc,ro=class{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=new WeakMap,gc=class extends ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Vl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=kr.get(o);u===void 0&&(u=[],kr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=qr("img");function l(){h(),t&&t(this);let u=kr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}kr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Vl.remove(`image:${e}`);let f=kr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ri=class extends ro{constructor(e){super(e)}load(e,t,i,s){let r=new yn,o=new gc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},wa=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qs=class extends wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lu=new ft,pp=new v,mp=new v,Gu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(pp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),Lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ta=class extends sa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hu=class extends Gu{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xc=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hd="\\[\\]\\.:\\/",py=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",my="[^"+hd.replace("\\.","")+"]",gy=/((?:WC+[\/:])*)/.source.replace("WC",ud),xy=/(WCOD+)?/.source.replace("WCOD",my),yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),vy=new RegExp("^"+gy+xy+yy+_y+"$"),My=["material","materials","bones","map"],Wu=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(py,"")}static parseTrackName(e){let t=vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);My.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Wu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $1=new Float32Array(1);var gp=new ft,tr=class{constructor(e,t,i=0,s=1/0){this.ray=new ps(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,i=[]){return Xu(e,this,i,t),i.sort(xp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Xu(e[s],this,i,t);return i.sort(xp),i}};function xp(n,e){return n.distance-e.distance}function Xu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Xu(r[o],e,t,!0)}}var oo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yp=new v,Bl=new v,Vr=new v,Gr=new v,Du=new v,by=new v,Sy=new v,Ea=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){yp.subVectors(e,this.start),Bl.subVectors(this.end,this.start);let i=Bl.dot(Bl),r=Bl.dot(yp)/i;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=by,i=Sy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Vr.subVectors(c,a),Gr.subVectors(h,l),Du.subVectors(a,l);let u=Vr.dot(Vr),f=Gr.dot(Gr),d=Gr.dot(Du);if(u<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=d/f,o=Qe(o,0,1);else{let p=Vr.dot(Du);if(f<=s)o=0,r=Qe(-p/u,0,1);else{let x=Vr.dot(Gr),g=u*f-x*x;g!==0?r=Qe((x*d-p*f)/g,0,1):r=0,o=(x*r+d)/f,o<0?(o=0,r=Qe(-p/u,0,1)):o>1&&(o=1,r=Qe((x-p)/u,0,1))}}return t.copy(a).add(Vr.multiplyScalar(r)),i.copy(l).add(Gr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Aa=class extends Ys{constructor(e=10,t=10,i=4473924,s=8947848){i=new ke(i),s=new ke(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new at;h.setAttribute("position",new Fe(l,3)),h.setAttribute("color",new Fe(c,3));let u=new ti({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var zl=new sn,ao=class extends Ys{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new at;r.setIndex(new At(i,1)),r.setAttribute("position",new At(s,3)),super(r,new ti({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&zl.setFromObject(this.object),zl.isEmpty())return;let e=zl.min,t=zl.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var nr=class extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function dd(n,e,t,i){let s=wy(i);switch(t){case td:return n*e;case Ic:return n*e/s.components*s.byteLength;case Lc:return n*e/s.components*s.byteLength;case id:return n*e*2/s.components*s.byteLength;case Dc:return n*e*2/s.components*s.byteLength;case nd:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Uc:return n*e*4/s.components*s.byteLength;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Bc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wy(n){switch(n){case yi:case Ku:return{byteLength:1,components:1};case lo:case $u:case co:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case vs:case Cc:case _i:return{byteLength:4,components:1};case Qu:case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ry(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
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
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
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
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
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
#endif`,Wy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qy=`#define PI 3.141592653589793
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",a_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,C_=`struct PhysicalMaterial {
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
}`,R_=`
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
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
}`,Fv=`#if DEPTH_PACKING == 3200
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
}`,Ov=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Hv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,eM=`#define STANDARD
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
}`,tM=`#define TOON
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
}`,nM=`#define TOON
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
}`,iM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,oM=`uniform vec3 color;
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
}`,aM=`uniform float rotation;
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
}`,lM=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Py,alphahash_pars_fragment:Iy,alphamap_fragment:Ly,alphamap_pars_fragment:Dy,alphatest_fragment:Uy,alphatest_pars_fragment:Ny,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:By,batching_vertex:zy,begin_vertex:ky,beginnormal_vertex:Vy,bsdfs:Gy,iridescence_fragment:Hy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:Zy,color_fragment:jy,color_pars_fragment:Jy,color_pars_vertex:Ky,color_vertex:$y,common:Qy,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:o_,colorspace_pars_fragment:a_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:b_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:x_,lightmap_pars_fragment:y_,lights_lambert_fragment:__,lights_lambert_pars_fragment:v_,lights_pars_begin:M_,lights_toon_fragment:S_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:E_,lights_physical_fragment:A_,lights_physical_pars_fragment:C_,lights_fragment_begin:R_,lights_fragment_maps:P_,lights_fragment_end:I_,logdepthbuf_fragment:L_,logdepthbuf_pars_fragment:D_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:N_,map_fragment:F_,map_pars_fragment:O_,map_particle_fragment:B_,map_particle_pars_fragment:z_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:V_,morphinstance_vertex:G_,morphcolor_vertex:H_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:Z_,normal_pars_fragment:j_,normal_pars_vertex:J_,normal_vertex:K_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:xv,skinnormal_vertex:yv,specularmap_fragment:_v,specularmap_pars_fragment:vv,tonemapping_fragment:Mv,tonemapping_pars_fragment:bv,transmission_fragment:Sv,transmission_pars_fragment:wv,uv_pars_fragment:Tv,uv_pars_vertex:Ev,uv_vertex:Av,worldpos_vertex:Cv,background_vert:Rv,background_frag:Pv,backgroundCube_vert:Iv,backgroundCube_frag:Lv,cube_vert:Dv,cube_frag:Uv,depth_vert:Nv,depth_frag:Fv,distanceRGBA_vert:Ov,distanceRGBA_frag:Bv,equirect_vert:zv,equirect_frag:kv,linedashed_vert:Vv,linedashed_frag:Gv,meshbasic_vert:Hv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:Zv,meshnormal_vert:jv,meshnormal_frag:Jv,meshphong_vert:Kv,meshphong_frag:$v,meshphysical_vert:Qv,meshphysical_frag:eM,meshtoon_vert:tM,meshtoon_frag:nM,points_vert:iM,points_frag:sM,shadow_vert:rM,shadow_frag:oM,sprite_vert:aM,sprite_frag:lM},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Di={basic:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:vn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:vn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:vn([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:vn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:vn([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:vn([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:vn([Ee.common,Ee.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:vn([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Di.physical={uniforms:vn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var hh={r:0,b:0,g:0},or=new qt,cM=new ft;function hM(n,e,t,i,s,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,E=p(M);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let E=p(y);E&&(E.isCubeTexture||E.mapping===Ra)?(h===void 0&&(h=new pe(new Ge(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:rr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),or.copy(y.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(or)),h.material.toneMapped=xt.getTransfer(E.colorSpace)!==Et,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pe(new dn(2,2),new xi({name:"BackgroundMaterial",uniforms:rr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(E.colorSpace)!==Et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(hh,ld(n)),i.buffers.color.setClear(hh.r,hh.g,hh.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g,dispose:_}}function uM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,L,U,z,X){let W=!1,V=u(z,U,L);r!==V&&(r=V,c(r.object)),W=d(b,z,U,X),W&&p(b,z,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(b,L,U,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,L,U){let z=U.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let W=X[L.id];W===void 0&&(W={},X[L.id]=W);let V=W[z];return V===void 0&&(V=f(l()),W[z]=V),V}function f(b){let L=[],U=[],z=[];for(let X=0;X<t;X++)L[X]=0,U[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,L,U,z){let X=r.attributes,W=L.attributes,V=0,te=U.getAttributes();for(let q in te)if(te[q].location>=0){let fe=X[q],be=W[q];if(be===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function p(b,L,U,z){let X={},W=L.attributes,V=0,te=U.getAttributes();for(let q in te)if(te[q].location>=0){let fe=W[q];fe===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));let be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),X[q]=be,V++}r.attributes=X,r.attributesNum=V,r.index=z}function x(){let b=r.newAttributes;for(let L=0,U=b.length;L<U;L++)b[L]=0}function g(b){m(b,0)}function m(b,L){let U=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;U[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),X[b]!==L&&(n.vertexAttribDivisor(b,L),X[b]=L)}function _(){let b=r.newAttributes,L=r.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==b[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function M(b,L,U,z,X,W,V){V===!0?n.vertexAttribIPointer(b,L,U,X,W):n.vertexAttribPointer(b,L,U,z,X,W)}function y(b,L,U,z){x();let X=z.attributes,W=U.getAttributes(),V=L.defaultAttributeValues;for(let te in W){let q=W[te];if(q.location>=0){let se=X[te];if(se===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let fe=se.normalized,be=se.itemSize,Ie=e.get(se);if(Ie===void 0)continue;let He=Ie.buffer,je=Ie.type,et=Ie.bytesPerElement,re=je===n.INT||je===n.UNSIGNED_INT||se.gpuType===Cc;if(se.isInterleavedBufferAttribute){let F=se.data,O=F.stride,Q=se.offset;if(F.isInstancedInterleavedBuffer){for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee,F.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<q.locationSize;ee++)g(q.location+ee);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ee=0;ee<q.locationSize;ee++)M(q.location+ee,be/q.locationSize,je,fe,O*et,(Q+be/q.locationSize*ee)*et,re)}else{if(se.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)m(q.location+F,se.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let F=0;F<q.locationSize;F++)g(q.location+F);n.bindBuffer(n.ARRAY_BUFFER,He);for(let F=0;F<q.locationSize;F++)M(q.location+F,be/q.locationSize,je,fe,be*et,be/q.locationSize*F*et,re)}}else if(V!==void 0){let fe=V[te];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(q.location,fe);break;case 3:n.vertexAttrib3fv(q.location,fe);break;case 4:n.vertexAttrib4fv(q.location,fe);break;default:n.vertexAttrib1fv(q.location,fe)}}}}_()}function E(){R();for(let b in i){let L=i[b];for(let U in L){let z=L[U];for(let X in z)h(z[X].object),delete z[X];delete L[U]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let U in L){let z=L[U];for(let X in z)h(z[X].object),delete z[X];delete L[U]}delete i[b.id]}function I(b){for(let L in i){let U=i[L];if(U[b.id]===void 0)continue;let z=U[b.id];for(let X in z)h(z[X].object),delete z[X];delete U[b.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function dM(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let R=I===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_i&&!R)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:E,maxSamples:C}}function pM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,M=_*4,y=m.clippingState||null;l.value=y,y=h(p,f,M,d);for(let E=0;E!==M;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function mM(n){let e=new WeakMap;function t(o,a){return a===Li?o.mapping=ir:a===Ec&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Li||a===Ec)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var po=4,gm=[.125,.215,.35,.446,.526,.582],cr=20,fd=new Ta,xm=new ke,pd=null,md=0,gd=0,xd=!1,lr=(1+Math.sqrt(5))/2,fo=1/lr,ym=[new v(-lr,fo,0),new v(lr,fo,0),new v(-fo,0,lr),new v(fo,0,lr),new v(0,lr,-fo),new v(0,lr,fo),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],gM=new v,go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=gM}=r;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=xd,e.scissorTest=!1,uh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:co,format:Cn,colorSpace:Xs,depthBuffer:!1},s=_m(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(r)),this._blurMaterial=yM(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,fd)}_sceneToCubeUV(e,t,i,s,r){let l=new mn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xm),u.toneMapping=Ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Jt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new pe(new Ge,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(xm),m=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let E=this._cubeSize;uh(s,y*E,M>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;uh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ym[(s-r-1)%ym.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cr-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):cr;g>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);let m=[],_=0;for(let I=0;I<cr;++I){let R=I/x,S=Math.exp(-R*R/2);m.push(S),I===0?_+=S:I<g&&(_+=2*S)}for(let I=0;I<m.length;I++)m[I]=m[I]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-i;let y=this._sizeLods[s],E=3*y*(s>M-po?s-M+po:0),C=4*(this._cubeSize-y);uh(t,E,C,3*y,2*y),l.setRenderTarget(t),l.render(u,fd)}};function xM(n){let e=[],t=[],i=[],s=n,r=n-po+1+gm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-po?l=gm[o-n+po-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),M=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let C=0;C<d;C++){let I=C%3*2/3-1,R=C>2?0:-1,S=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];_.set(S,x*p*C),M.set(f,g*p*C);let b=[C,C,C,C,C,C];y.set(b,m*p*C)}let E=new at;E.setAttribute("position",new At(_,x)),E.setAttribute("uv",new At(M,g)),E.setAttribute("faceIndex",new At(y,m)),e.push(E),s>po&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _m(n,e,t){let i=new Ri(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yM(n,e,t){let i=new Float32Array(cr),s=new v(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function vm(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Mm(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ad(){return`

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
	`}function _M(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Li||l===Ec,h=l===ir||l===sr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new go(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new go(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function MM(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let E=_[M+0],C=_[M+1],I=_[M+2];f.push(E,C,C,I,I,E)}}else if(p!==void 0){let _=p.array;x=p.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let E=M+0,C=M+1,I=M+2;f.push(E,C,C,I,I,E)}}else return;let g=new(ad(f)?ia:na)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function SM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wM(n,e,t){let i=new WeakMap,s=new Xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*E*4*u),I=new ta(C,y,E,u);I.type=_i,I.needsUpdate=!0;let R=M*4;for(let b=0;b<u;b++){let L=g[b],U=m[b],z=_[b],X=y*E*4*b;for(let W=0;W<L.count;W++){let V=W*R;d===!0&&(s.fromBufferAttribute(L,W),C[X+V+0]=s.x,C[X+V+1]=s.y,C[X+V+2]=s.z,C[X+V+3]=0),p===!0&&(s.fromBufferAttribute(U,W),C[X+V+4]=s.x,C[X+V+5]=s.y,C[X+V+6]=s.z,C[X+V+7]=0),x===!0&&(s.fromBufferAttribute(z,W),C[X+V+8]=s.x,C[X+V+9]=s.y,C[X+V+10]=s.z,C[X+V+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new he(y,E)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function TM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var km=new yn,bm=new ha(1,1),Vm=new ta,Gm=new jl,Hm=new ra,Sm=[],wm=[],Tm=new Float32Array(16),Em=new Float32Array(9),Am=new Float32Array(4);function xo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sm[s];if(r===void 0&&(r=new Float32Array(s),Sm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ph(n,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function PM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Am.set(i),n.uniformMatrix2fv(this.addr,!1,Am),on(t,i)}}function IM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Em.set(i),n.uniformMatrix3fv(this.addr,!1,Em),on(t,i)}}function LM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Tm.set(i),n.uniformMatrix4fv(this.addr,!1,Tm),on(t,i)}}function DM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function OM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function zM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function VM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bm.compareFunction=sd,r=bm):r=km,t.setTexture2D(e||r,s)}function GM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gm,s)}function HM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hm,s)}function WM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vm,s)}function XM(n){switch(n){case 5126:return EM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return WM}}function qM(n,e){n.uniform1fv(this.addr,e)}function YM(n,e){let t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function ZM(n,e){let t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function jM(n,e){let t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function JM(n,e){let t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KM(n,e){let t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $M(n,e){let t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QM(n,e){n.uniform1iv(this.addr,e)}function eb(n,e){n.uniform2iv(this.addr,e)}function tb(n,e){n.uniform3iv(this.addr,e)}function nb(n,e){n.uniform4iv(this.addr,e)}function ib(n,e){n.uniform1uiv(this.addr,e)}function sb(n,e){n.uniform2uiv(this.addr,e)}function rb(n,e){n.uniform3uiv(this.addr,e)}function ob(n,e){n.uniform4uiv(this.addr,e)}function ab(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||km,r[o])}function lb(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gm,r[o])}function cb(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hm,r[o])}function hb(n,e,t){let i=this.cache,s=e.length,r=ph(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vm,r[o])}function ub(n){switch(n){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return jM;case 35674:return JM;case 35675:return KM;case 35676:return $M;case 5124:case 35670:return QM;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return hb}}var _d=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}},vd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ub(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},yd=/(\w+)(\])?(\[|\.)?/g;function Cm(n,e){n.seq.push(e),n.map[e.id]=e}function db(n,e,t){let i=n.name,s=i.length;for(yd.lastIndex=0;;){let r=yd.exec(i),o=yd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cm(t,c===void 0?new _d(a,n,e):new vd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Md(a),Cm(t,u)),t=u}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);db(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Rm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var fb=37297,pb=0;function mb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Pm=new tt;function gb(n){xt._getMatrix(Pm,xt.workingColorSpace,n);let e=`mat3( ${Pm.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Qo:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Im(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mb(n.getShaderSource(e),a)}else return r}function xb(n,e){let t=gb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yb(n,e){let t;switch(e){case Gp:t="Linear";break;case Hp:t="Reinhard";break;case Wp:t="Cineon";break;case Xp:t="ACESFilmic";break;case Yp:t="AgX";break;case Zp:t="Neutral";break;case qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dh=new v;function _b(){xt.getLuminanceCoefficients(dh);let n=dh.x.toFixed(4),e=dh.y.toFixed(4),t=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Mb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fa(n){return n!==""}function Lm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(n){return n.replace(Sb,Tb)}var wb=new Map;function Tb(n,e){let t=lt[e];if(t===void 0){let i=wb.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(t)}var Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(n){return n.replace(Eb,Ab)}function Ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Cb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ib(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case kp:e="ENVMAP_BLENDING_MIX";break;case Vp:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Db(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Cb(t),c=Rb(t),h=Pb(t),u=Ib(t),f=Lb(t),d=vb(t),p=Mb(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(g=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,xb("linearToOutputTexel",t.outputColorSpace),_b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=bd(o),o=Lm(o,t),o=Dm(o,t),a=bd(a),a=Lm(a,t),a=Dm(a,t),o=Um(o),a=Um(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+o,y=_+m+a,E=Rm(s,s.VERTEX_SHADER,M),C=Rm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(C)||"",W=U.trim(),V=z.trim(),te=X.trim(),q=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,C);else{let fe=Im(s,E,"vertex"),be=Im(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+fe+`
`+be)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||te==="")&&(se=!1);se&&(L.diagnostics={runnable:q,programLog:W,vertexShader:{log:V,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(E),s.deleteShader(C),R=new mo(s,x),S=bb(s,x)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,fb)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=C,this}var Ub=0,Sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wd(e),t.set(e,i)),i}},wd=class{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}};function Nb(n,e,t,i,s,r,o){let a=new jr,l=new Sd,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,U,z){let X=U.fog,W=z.geometry,V=S.isMeshStandardMaterial?U.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),q=te&&te.mapping===Ra?te.image.height:null,se=p[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=fe!==void 0?fe.length:0,Ie=0;W.morphAttributes.position!==void 0&&(Ie=1),W.morphAttributes.normal!==void 0&&(Ie=2),W.morphAttributes.color!==void 0&&(Ie=3);let He,je,et,re;if(se){let Re=Di[se];He=Re.vertexShader,je=Re.fragmentShader}else He=S.vertexShader,je=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);let F=n.getRenderTarget(),O=n.state.buffers.depth.getReversed(),Q=z.isInstancedMesh===!0,ee=z.isBatchedMesh===!0,ze=!!S.map,ht=!!S.matcap,D=!!te,ce=!!S.aoMap,le=!!S.lightMap,oe=!!S.bumpMap,ae=!!S.normalMap,Me=!!S.displacementMap,ge=!!S.emissiveMap,_e=!!S.metalnessMap,Je=!!S.roughnessMap,Xe=S.anisotropy>0,P=S.clearcoat>0,w=S.dispersion>0,H=S.iridescence>0,j=S.sheen>0,de=S.transmission>0,ne=Xe&&!!S.anisotropyMap,Le=P&&!!S.clearcoatMap,ve=P&&!!S.clearcoatNormalMap,De=P&&!!S.clearcoatRoughnessMap,Ne=H&&!!S.iridescenceMap,me=H&&!!S.iridescenceThicknessMap,we=j&&!!S.sheenColorMap,qe=j&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Te=!!S.specularColorMap,it=!!S.specularIntensityMap,A=de&&!!S.transmissionMap,N=de&&!!S.thicknessMap,$=!!S.gradientMap,ue=!!S.alphaMap,Y=S.alphaTest>0,Z=!!S.alphaHash,xe=!!S.extensions,Se=Ki;S.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Se=n.toneMapping);let Pe={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:je,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ee,batchingColor:ee&&z._colorsTexture!==null,instancing:Q,instancingColor:Q&&z.instanceColor!==null,instancingMorph:Q&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:ze,matcap:ht,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:le,bumpMap:oe,normalMap:ae,displacementMap:f&&Me,emissiveMap:ge,normalMapObjectSpace:ae&&S.normalMapType===$p,normalMapTangentSpace:ae&&S.normalMapType===ch,metalnessMap:_e,roughnessMap:Je,anisotropy:Xe,anisotropyMap:ne,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:w,iridescence:H,iridescenceMap:Ne,iridescenceThicknessMap:me,sheen:j,sheenColorMap:we,sheenRoughnessMap:qe,specularMap:Be,specularColorMap:Te,specularIntensityMap:it,transmission:de,transmissionMap:A,thicknessMap:N,gradientMap:$,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:Y,alphaHash:Z,combine:S.combine,mapUv:ze&&x(S.map.channel),aoMapUv:ce&&x(S.aoMap.channel),lightMapUv:le&&x(S.lightMap.channel),bumpMapUv:oe&&x(S.bumpMap.channel),normalMapUv:ae&&x(S.normalMap.channel),displacementMapUv:Me&&x(S.displacementMap.channel),emissiveMapUv:ge&&x(S.emissiveMap.channel),metalnessMapUv:_e&&x(S.metalnessMap.channel),roughnessMapUv:Je&&x(S.roughnessMap.channel),anisotropyMapUv:ne&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(S.sheenRoughnessMap.channel),specularMapUv:Be&&x(S.specularMap.channel),specularColorMapUv:Te&&x(S.specularColorMap.channel),specularIntensityMapUv:it&&x(S.specularIntensityMap.channel),transmissionMapUv:A&&x(S.transmissionMap.channel),thicknessMapUv:N&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ae||Xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(ze||ue),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:O,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(b,S),M(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=p[S.type],L;if(b){let U=Di[b];L=cm.clone(U.uniforms)}else L=S.uniforms;return L}function E(S,b){let L;for(let U=0,z=h.length;U<z;U++){let X=h[U];if(X.cacheKey===b){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Db(n,b,S,r),h.push(L)),L}function C(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:R}}function Fb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Om(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Ob),i.length>1&&i.sort(f||Fm),s.length>1&&s.sort(f||Fm)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Om,n.set(i,[o])):s>=r.length?(o=new Om,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new ke};break;case"SpotLight":t={position:new v,direction:new v,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new v,halfWidth:new v,halfHeight:new v};break}return n[e.id]=t,t}}}function kb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Vb=0;function Gb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hb(n){let e=new zb,t=kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new v);let s=new v,r=new ft,o=new ft;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,M=0,y=0,E=0,C=0,I=0;c.sort(Gb);for(let S=0,b=c.length;S<b;S++){let L=c[S],U=L.color,z=L.intensity,X=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*z,u+=U.g*z,f+=U.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],z);I++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=V,d++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(U).multiplyScalar(z),V.distance=X,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[x]=V;let te=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,te.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=W,y++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(U).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=V,g++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=L.shadow.matrix,M++}i.point[p]=V,p++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==_||R.numPointShadows!==M||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,R.directionalLength=d,R.pointLength=p,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=_,R.numPointShadows=M,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=I,i.version=Vb++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let M=c[m];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Bm(n){let e=new Hb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bm(n),e.set(s,[a])):r>=o.length?(a=new Bm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
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
}`;function Yb(n,e,t){let i=new to,s=new he,r=new he,o=new Xt,a=new oc({depthPacking:Kp}),l=new ac,c={},h=t.maxTextureSize,u={[mi]:En,[En]:mi,[tn]:tn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new at;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let m=this.type;this.render=function(C,I,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=m!==Ii&&this.type===Ii,X=m===Ii&&this.type!==Ii;for(let W=0,V=C.length;W<V;W++){let te=C[W],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();if(s.multiply(se),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,q.mapSize.y=r.y)),q.map===null||z===!0||X===!0){let be=this.type!==Ii?{minFilter:Ln,magFilter:Ln}:{};q.map!==null&&q.map.dispose(),q.map=new Ri(s.x,s.y,be),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let fe=q.getViewportCount();for(let be=0;be<fe;be++){let Ie=q.getViewport(be);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),U.viewport(o),q.updateMatrices(te,be),i=q.getFrustum(),y(I,R,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Ii&&_(q,R),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,b,L)};function _(C,I){let R=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,R,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,R,d,x,null)}function M(C,I,R,S){let b=null,L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=b.uuid,z=I.uuid,X=c[U];X===void 0&&(X={},c[U]=X);let W=X[z];W===void 0&&(W=b.clone(),X[z]=W,I.addEventListener("dispose",E)),b=W}if(b.visible=I.visible,b.wireframe=I.wireframe,S===Ii?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=n.properties.get(b);U.light=R}return b}function y(C,I,R,S,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);let z=e.update(C),X=C.material;if(Array.isArray(X)){let W=z.groups;for(let V=0,te=W.length;V<te;V++){let q=W[V],se=X[q.materialIndex];if(se&&se.visible){let fe=M(C,se,S,b);C.onBeforeShadow(n,C,I,R,z,fe,q),n.renderBufferDirect(R,null,z,fe,C,q),C.onAfterShadow(n,C,I,R,z,fe,q)}}}else if(X.visible){let W=M(C,X,S,b);C.onBeforeShadow(n,C,I,R,z,W,null),n.renderBufferDirect(R,null,z,W,C,null),C.onAfterShadow(n,C,I,R,z,W,null)}}let U=C.children;for(let z=0,X=U.length;z<X;z++)y(U[z],I,R,S,b)}function E(C){C.target.removeEventListener("dispose",E);for(let R in c){let S=c[R],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Zb={[yc]:_c,[vc]:Sc,[Mc]:wc,[Ws]:bc,[_c]:yc,[Sc]:vc,[wc]:Mc,[bc]:Ws};function jb(n,e){function t(){let A=!1,N=new Xt,$=null,ue=new Xt(0,0,0,0);return{setMask:function(Y){$!==Y&&!A&&(n.colorMask(Y,Y,Y,Y),$=Y)},setLocked:function(Y){A=Y},setClear:function(Y,Z,xe,Se,Pe){Pe===!0&&(Y*=Se,Z*=Se,xe*=Se),N.set(Y,Z,xe,Se),ue.equals(N)===!1&&(n.clearColor(Y,Z,xe,Se),ue.copy(N))},reset:function(){A=!1,$=null,ue.set(-1,0,0,0)}}}function i(){let A=!1,N=!1,$=null,ue=null,Y=null;return{setReversed:function(Z){if(N!==Z){let xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),N=Z;let Se=Y;Y=null,this.setClear(Se)}},getReversed:function(){return N},setTest:function(Z){Z?F(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Z){$!==Z&&!A&&(n.depthMask(Z),$=Z)},setFunc:function(Z){if(N&&(Z=Zb[Z]),ue!==Z){switch(Z){case yc:n.depthFunc(n.NEVER);break;case _c:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Z}},setLocked:function(Z){A=Z},setClear:function(Z){Y!==Z&&(N&&(Z=1-Z),n.clearDepth(Z),Y=Z)},reset:function(){A=!1,$=null,ue=null,Y=null,N=!1}}}function s(){let A=!1,N=null,$=null,ue=null,Y=null,Z=null,xe=null,Se=null,Pe=null;return{setTest:function(Re){A||(Re?F(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(Re){N!==Re&&!A&&(n.stencilMask(Re),N=Re)},setFunc:function(Re,wt,Vt){($!==Re||ue!==wt||Y!==Vt)&&(n.stencilFunc(Re,wt,Vt),$=Re,ue=wt,Y=Vt)},setOp:function(Re,wt,Vt){(Z!==Re||xe!==wt||Se!==Vt)&&(n.stencilOp(Re,wt,Vt),Z=Re,xe=wt,Se=Vt)},setLocked:function(Re){A=Re},setClear:function(Re){Pe!==Re&&(n.clearStencil(Re),Pe=Re)},reset:function(){A=!1,N=null,$=null,ue=null,Y=null,Z=null,xe=null,Se=null,Pe=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,E=null,C=null,I=new ke(0,0,0),R=0,S=!1,b=null,L=null,U=null,z=null,X=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=te>=2);let se=null,fe={},be=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),He=new Xt().fromArray(be),je=new Xt().fromArray(Ie);function et(A,N,$,ue){let Y=new Uint8Array(4),Z=n.createTexture();n.bindTexture(A,Z),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<$;xe++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(N,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Y):n.texImage2D(N+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Y);return Z}let re={};re[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Ws),oe(!1),ae(qu),F(n.CULL_FACE),ce(Ji);function F(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function O(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function Q(A,N){return u[A]!==N?(n.bindFramebuffer(A,N),u[A]=N,A===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=N),A===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=N),!0):!1}function ee(A,N){let $=d,ue=!1;if(A){$=f.get(N),$===void 0&&($=[],f.set(N,$));let Y=A.textures;if($.length!==Y.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,xe=Y.length;Z<xe;Z++)$[Z]=n.COLOR_ATTACHMENT0+Z;$.length=Y.length,ue=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ue=!0);ue&&n.drawBuffers($)}function ze(A){return p!==A?(n.useProgram(A),p=A,!0):!1}let ht={[fs]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};ht[Tp]=n.MIN,ht[Ep]=n.MAX;let D={[Ap]:n.ZERO,[Cp]:n.ONE,[Rp]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Np]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Ip]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[Up]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA,[Fp]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Bp]:n.CONSTANT_ALPHA,[zp]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(A,N,$,ue,Y,Z,xe,Se,Pe,Re){if(A===Ji){x===!0&&(O(n.BLEND),x=!1);return}if(x===!1&&(F(n.BLEND),x=!0),A!==bp){if(A!==g||Re!==S){if((m!==fs||y!==fs)&&(n.blendEquation(n.FUNC_ADD),m=fs,y=fs),Re)switch(A){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}_=null,M=null,E=null,C=null,I.set(0,0,0),R=0,g=A,S=Re}return}Y=Y||N,Z=Z||$,xe=xe||ue,(N!==m||Y!==y)&&(n.blendEquationSeparate(ht[N],ht[Y]),m=N,y=Y),($!==_||ue!==M||Z!==E||xe!==C)&&(n.blendFuncSeparate(D[$],D[ue],D[Z],D[xe]),_=$,M=ue,E=Z,C=xe),(Se.equals(I)===!1||Pe!==R)&&(n.blendColor(Se.r,Se.g,Se.b,Pe),I.copy(Se),R=Pe),g=A,S=!1}function le(A,N){A.side===tn?O(n.CULL_FACE):F(n.CULL_FACE);let $=A.side===En;N&&($=!$),oe($),A.blending===Hs&&A.transparent===!1?ce(Ji):ce(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);let ue=A.stencilWrite;a.setTest(ue),ue&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ge(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(A){b!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),b=A)}function ae(A){A!==_p?(F(n.CULL_FACE),A!==L&&(A===qu?n.cullFace(n.BACK):A===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),L=A}function Me(A){A!==U&&(V&&n.lineWidth(A),U=A)}function ge(A,N,$){A?(F(n.POLYGON_OFFSET_FILL),(z!==N||X!==$)&&(n.polygonOffset(N,$),z=N,X=$)):O(n.POLYGON_OFFSET_FILL)}function _e(A){A?F(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function Je(A){A===void 0&&(A=n.TEXTURE0+W-1),se!==A&&(n.activeTexture(A),se=A)}function Xe(A,N,$){$===void 0&&(se===null?$=n.TEXTURE0+W-1:$=se);let ue=fe[$];ue===void 0&&(ue={type:void 0,texture:void 0},fe[$]=ue),(ue.type!==A||ue.texture!==N)&&(se!==$&&(n.activeTexture($),se=$),n.bindTexture(A,N||re[A]),ue.type=A,ue.texture=N)}function P(){let A=fe[se];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ne(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function we(A){He.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),He.copy(A))}function qe(A){je.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),je.copy(A))}function Be(A,N){let $=c.get(N);$===void 0&&($=new WeakMap,c.set(N,$));let ue=$.get(A);ue===void 0&&(ue=n.getUniformBlockIndex(N,A.name),$.set(A,ue))}function Te(A,N){let ue=c.get(N).get(A);l.get(N)!==ue&&(n.uniformBlockBinding(N,ue,A.__bindingPointIndex),l.set(N,ue))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,fe={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,M=null,y=null,E=null,C=null,I=new ke(0,0,0),R=0,S=!1,b=null,L=null,U=null,z=null,X=null,He.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:O,bindFramebuffer:Q,drawBuffers:ee,useProgram:ze,setBlending:ce,setMaterial:le,setFlipSided:oe,setCullFace:ae,setLineWidth:Me,setPolygonOffset:ge,setScissorTest:_e,activeTexture:Je,bindTexture:Xe,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:Ne,texImage3D:me,updateUBOMapping:Be,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:De,texSubImage2D:j,texSubImage3D:de,compressedTexSubImage2D:ne,compressedTexSubImage3D:Le,scissor:we,viewport:qe,reset:it}}function Jb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return d?new OffscreenCanvas(P,w):qr("canvas")}function x(P,w,H){let j=1,de=Xe(P);if((de.width>H||de.height>H)&&(j=H/Math.max(de.width,de.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ne=Math.floor(j*de.width),Le=Math.floor(j*de.height);u===void 0&&(u=p(ne,Le));let ve=w?p(ne,Le):u;return ve.width=ne,ve.height=Le,ve.getContext("2d").drawImage(P,0,0,ne,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ne+"x"+Le+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,w,H,j,de=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=w;if(w===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),w===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RG8UI),H===n.UNSIGNED_SHORT&&(ne=n.RG16UI),H===n.UNSIGNED_INT&&(ne=n.RG32UI),H===n.BYTE&&(ne=n.RG8I),H===n.SHORT&&(ne=n.RG16I),H===n.INT&&(ne=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),H===n.UNSIGNED_INT&&(ne=n.RGB32UI),H===n.BYTE&&(ne=n.RGB8I),H===n.SHORT&&(ne=n.RGB16I),H===n.INT&&(ne=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),H===n.UNSIGNED_INT&&(ne=n.RGBA32UI),H===n.BYTE&&(ne=n.RGBA8I),H===n.SHORT&&(ne=n.RGBA16I),H===n.INT&&(ne=n.RGBA32I)),w===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),w===n.RGBA){let Le=de?Qo:xt.getTransfer(j);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=Le===Et?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(P,w){let H;return P?w===null||w===vs||w===ho?H=n.DEPTH24_STENCIL8:w===_i?H=n.DEPTH32F_STENCIL8:w===lo&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===ho?H=n.DEPTH_COMPONENT24:w===_i?H=n.DEPTH_COMPONENT32F:w===lo&&(H=n.DEPTH_COMPONENT16),H}function E(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){let w=P.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&h.delete(w)}function I(P){let w=P.target;w.removeEventListener("dispose",I),b(w)}function R(P){let w=i.get(P);if(w.__webglInit===void 0)return;let H=P.source,j=f.get(H);if(j){let de=j[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&S(P),Object.keys(j).length===0&&f.delete(H)}i.remove(P)}function S(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let H=P.source,j=f.get(H);delete j[w.__cacheKey],o.memory.textures--}function b(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let de=0;de<w.__webglFramebuffer[j].length;de++)n.deleteFramebuffer(w.__webglFramebuffer[j][de]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=P.textures;for(let j=0,de=H.length;j<de;j++){let ne=i.get(H[j]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(H[j])}i.remove(P)}let L=0;function U(){L=0}function z(){let P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function X(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function W(P,w){let H=i.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,P,w);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function V(P,w){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){re(H,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function te(P,w){let H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){re(H,P,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function q(P,w){let H=i.get(P);if(P.version>0&&H.__version!==P.version){F(H,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}let se={[wn]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[Wl]:n.MIRRORED_REPEAT},fe={[Ln]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Ac]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},be={[Qp]:n.NEVER,[rm]:n.ALWAYS,[em]:n.LESS,[sd]:n.LEQUAL,[tm]:n.EQUAL,[sm]:n.GEQUAL,[nm]:n.GREATER,[im]:n.NOTEQUAL};function Ie(P,w){if(w.type===_i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===Ac||w.magFilter===Pa||w.magFilter===An||w.minFilter===en||w.minFilter===Ac||w.minFilter===Pa||w.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,se[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,fe[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==Pa&&w.minFilter!==An||w.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function He(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",C));let j=w.source,de=f.get(j);de===void 0&&(de={},f.set(j,de));let ne=X(w);if(ne!==P.__cacheKey){de[ne]===void 0&&(de[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),de[ne].usedTimes++;let Le=de[P.__cacheKey];Le!==void 0&&(de[P.__cacheKey].usedTimes--,Le.usedTimes===0&&S(w)),P.__cacheKey=ne,P.__webglTexture=de[ne].texture}return H}function je(P,w,H){return Math.floor(Math.floor(P/H)/w)}function et(P,w,H,j){let ne=P.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,H,j,w.data);else{ne.sort((me,we)=>me.start-we.start);let Le=0;for(let me=1;me<ne.length;me++){let we=ne[Le],qe=ne[me],Be=we.start+we.count,Te=je(qe.start,w.width,4),it=je(we.start,w.width,4);qe.start<=Be+1&&Te===it&&je(qe.start+qe.count-1,w.width,4)===Te?we.count=Math.max(we.count,qe.start+qe.count-we.start):(++Le,ne[Le]=qe)}ne.length=Le+1;let ve=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let me=0,we=ne.length;me<we;me++){let qe=ne[me],Be=Math.floor(qe.start/4),Te=Math.ceil(qe.count/4),it=Be%w.width,A=Math.floor(Be/w.width),N=Te,$=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,A),t.texSubImage2D(n.TEXTURE_2D,0,it,A,N,$,H,j,w.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function re(P,w,H){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);let de=He(P,w),ne=w.source;t.bindTexture(j,P.__webglTexture,n.TEXTURE0+H);let Le=i.get(ne);if(ne.version!==Le.__version||de===!0){t.activeTexture(n.TEXTURE0+H);let ve=xt.getPrimaries(xt.workingColorSpace),De=w.colorSpace===$i?null:xt.getPrimaries(w.colorSpace),Ne=w.colorSpace===$i||ve===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let me=x(w.image,!1,s.maxTextureSize);me=Je(w,me);let we=r.convert(w.format,w.colorSpace),qe=r.convert(w.type),Be=M(w.internalFormat,we,qe,w.colorSpace,w.isVideoTexture);Ie(j,w);let Te,it=w.mipmaps,A=w.isVideoTexture!==!0,N=Le.__version===void 0||de===!0,$=ne.dataReady,ue=E(w,me);if(w.isDepthTexture)Be=y(w.format===uo,w.type),N&&(A?t.texStorage2D(n.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,we,qe,null));else if(w.isDataTexture)if(it.length>0){A&&N&&t.texStorage2D(n.TEXTURE_2D,ue,Be,it[0].width,it[0].height);for(let Y=0,Z=it.length;Y<Z;Y++)Te=it[Y],A?$&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,qe,Te.data):t.texImage2D(n.TEXTURE_2D,Y,Be,Te.width,Te.height,0,we,qe,Te.data);w.generateMipmaps=!1}else A?(N&&t.texStorage2D(n.TEXTURE_2D,ue,Be,me.width,me.height),$&&et(w,me,we,qe)):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,we,qe,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){A&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Be,it[0].width,it[0].height,me.depth);for(let Y=0,Z=it.length;Y<Z;Y++)if(Te=it[Y],w.format!==Cn)if(we!==null)if(A){if($)if(w.layerUpdates.size>0){let xe=dd(Te.width,Te.height,w.format,w.type);for(let Se of w.layerUpdates){let Pe=Te.data.subarray(Se*xe/Te.data.BYTES_PER_ELEMENT,(Se+1)*xe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Se,Te.width,Te.height,1,we,Pe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,me.depth,we,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Be,Te.width,Te.height,me.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,me.depth,we,qe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Be,Te.width,Te.height,me.depth,0,we,qe,Te.data)}else{A&&N&&t.texStorage2D(n.TEXTURE_2D,ue,Be,it[0].width,it[0].height);for(let Y=0,Z=it.length;Y<Z;Y++)Te=it[Y],w.format!==Cn?we!==null?A?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?$&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Te.width,Te.height,we,qe,Te.data):t.texImage2D(n.TEXTURE_2D,Y,Be,Te.width,Te.height,0,we,qe,Te.data)}else if(w.isDataArrayTexture)if(A){if(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Be,me.width,me.height,me.depth),$)if(w.layerUpdates.size>0){let Y=dd(me.width,me.height,w.format,w.type);for(let Z of w.layerUpdates){let xe=me.data.subarray(Z*Y/me.data.BYTES_PER_ELEMENT,(Z+1)*Y/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,me.width,me.height,1,we,qe,xe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,we,qe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,we,qe,me.data);else if(w.isData3DTexture)A?(N&&t.texStorage3D(n.TEXTURE_3D,ue,Be,me.width,me.height,me.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,we,qe,me.data)):t.texImage3D(n.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,we,qe,me.data);else if(w.isFramebufferTexture){if(N)if(A)t.texStorage2D(n.TEXTURE_2D,ue,Be,me.width,me.height);else{let Y=me.width,Z=me.height;for(let xe=0;xe<ue;xe++)t.texImage2D(n.TEXTURE_2D,xe,Be,Y,Z,0,we,qe,null),Y>>=1,Z>>=1}}else if(it.length>0){if(A&&N){let Y=Xe(it[0]);t.texStorage2D(n.TEXTURE_2D,ue,Be,Y.width,Y.height)}for(let Y=0,Z=it.length;Y<Z;Y++)Te=it[Y],A?$&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,we,qe,Te):t.texImage2D(n.TEXTURE_2D,Y,Be,we,qe,Te);w.generateMipmaps=!1}else if(A){if(N){let Y=Xe(me);t.texStorage2D(n.TEXTURE_2D,ue,Be,Y.width,Y.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,qe,me)}else t.texImage2D(n.TEXTURE_2D,0,Be,we,qe,me);g(w)&&m(j),Le.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function F(P,w,H){if(w.image.length!==6)return;let j=He(P,w),de=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);let ne=i.get(de);if(de.version!==ne.__version||j===!0){t.activeTexture(n.TEXTURE0+H);let Le=xt.getPrimaries(xt.workingColorSpace),ve=w.colorSpace===$i?null:xt.getPrimaries(w.colorSpace),De=w.colorSpace===$i||Le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ne=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,we=[];for(let Z=0;Z<6;Z++)!Ne&&!me?we[Z]=x(w.image[Z],!0,s.maxCubemapSize):we[Z]=me?w.image[Z].image:w.image[Z],we[Z]=Je(w,we[Z]);let qe=we[0],Be=r.convert(w.format,w.colorSpace),Te=r.convert(w.type),it=M(w.internalFormat,Be,Te,w.colorSpace),A=w.isVideoTexture!==!0,N=ne.__version===void 0||j===!0,$=de.dataReady,ue=E(w,qe);Ie(n.TEXTURE_CUBE_MAP,w);let Y;if(Ne){A&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,it,qe.width,qe.height);for(let Z=0;Z<6;Z++){Y=we[Z].mipmaps;for(let xe=0;xe<Y.length;xe++){let Se=Y[xe];w.format!==Cn?Be!==null?A?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,it,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Se.width,Se.height,Be,Te,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,it,Se.width,Se.height,0,Be,Te,Se.data)}}}else{if(Y=w.mipmaps,A&&N){Y.length>0&&ue++;let Z=Xe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,it,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(me){A?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we[Z].width,we[Z].height,Be,Te,we[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,we[Z].width,we[Z].height,0,Be,Te,we[Z].data);for(let xe=0;xe<Y.length;xe++){let Pe=Y[xe].image[Z].image;A?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Pe.width,Pe.height,Be,Te,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,it,Pe.width,Pe.height,0,Be,Te,Pe.data)}}else{A?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Be,Te,we[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,it,Be,Te,we[Z]);for(let xe=0;xe<Y.length;xe++){let Se=Y[xe];A?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Be,Te,Se.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,it,Be,Te,Se.image[Z])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),ne.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function O(P,w,H,j,de,ne){let Le=r.convert(H.format,H.colorSpace),ve=r.convert(H.type),De=M(H.internalFormat,Le,ve,H.colorSpace),Ne=i.get(w),me=i.get(H);if(me.__renderTarget=w,!Ne.__hasExternalTextures){let we=Math.max(1,w.width>>ne),qe=Math.max(1,w.height>>ne);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ne,De,we,qe,w.depth,0,Le,ve,null):t.texImage2D(de,ne,De,we,qe,0,Le,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ge(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,de,me.__webglTexture,0,Me(w)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,de,me.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(P,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let j=w.depthTexture,de=j&&j.isDepthTexture?j.type:null,ne=y(w.stencilBuffer,de),Le=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=Me(w);ge(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ne,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,P)}else{let j=w.textures;for(let de=0;de<j.length;de++){let ne=j[de],Le=r.convert(ne.format,ne.colorSpace),ve=r.convert(ne.type),De=M(ne.internalFormat,Le,ve,ne.colorSpace),Ne=Me(w);H&&ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,De,w.width,w.height):ge(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,De,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,De,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);let de=j.__webglTexture,ne=Me(w);if(w.depthTexture.format===Wr)ge(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(w.depthTexture.format===uo)ge(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ze(P){let w=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",de)};j.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let j=P.texture.mipmaps;j&&j.length>0?ee(w.__webglFramebuffer[0],P):ee(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),Q(w.__webglDepthbuffer[j],P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Q(w.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(P,w,H){let j=i.get(P);w!==void 0&&O(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ze(P)}function D(P){let w=P.texture,H=i.get(P),j=i.get(w);P.addEventListener("dispose",I);let de=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let De=0;De<w.mipmaps.length;De++)H.__webglFramebuffer[ve][De]=n.createFramebuffer()}else H.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)H.__webglFramebuffer[ve]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Le)for(let ve=0,De=de.length;ve<De;ve++){let Ne=i.get(de[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){let De=de[ve];H.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);let Ne=r.convert(De.format,De.colorSpace),me=r.convert(De.type),we=M(De.internalFormat,Ne,me,De.colorSpace,P.isXRRenderTarget===!0),qe=Me(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)O(H.__webglFramebuffer[ve][De],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else O(H.__webglFramebuffer[ve],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ve=0,De=de.length;ve<De;ve++){let Ne=de[ve],me=i.get(Ne),we=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,me.__webglTexture),Ie(we,Ne),O(H.__webglFramebuffer,P,Ne,n.COLOR_ATTACHMENT0+ve,we,0),g(Ne)&&m(we)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,j.__webglTexture),Ie(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)O(H.__webglFramebuffer[De],P,w,n.COLOR_ATTACHMENT0,ve,De);else O(H.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ve,0);g(w)&&m(ve),t.unbindTexture()}P.depthBuffer&&ze(P)}function ce(P){let w=P.textures;for(let H=0,j=w.length;H<j;H++){let de=w[H];if(g(de)){let ne=_(P),Le=i.get(de).__webglTexture;t.bindTexture(ne,Le),m(ne),t.unbindTexture()}}}let le=[],oe=[];function ae(P){if(P.samples>0){if(ge(P)===!1){let w=P.textures,H=P.width,j=P.height,de=n.COLOR_BUFFER_BIT,ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(P),ve=w.length>1;if(ve)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let De=P.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let me=i.get(w[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,H,j,0,0,H,j,de,n.NEAREST),l===!0&&(le.length=0,oe.length=0,le.push(n.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push(ne),oe.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);let me=i.get(w[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Me(P){return Math.min(s.maxSamples,P.samples)}function ge(P){let w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _e(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Je(P,w){let H=P.colorSpace,j=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Xs&&H!==$i&&(xt.getTransfer(H)===Et?(j!==Cn||de!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=O,this.useMultisampledRTT=ge}function Kb(n,e){function t(i,s=$i){let r,o=xt.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ku)return n.BYTE;if(i===$u)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===nd)return n.RGB;if(i===Cn)return n.RGBA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===id)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===Ia||i===La||i===Da||i===Ua)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Fc||i===Oc||i===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===kc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===kc)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===jc||i===Jc||i===Kc||i===$c||i===Qc||i===eh||i===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nh||i===ih||i===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nh)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===oh||i===ah||i===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xi({vertexShader:$b,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ed=class extends Ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new Td,m={},_=t.getContextAttributes(),M=null,y=null,E=[],C=[],I=new he,R=null,S=new mn;S.viewport=new Xt;let b=new mn;b.viewport=new Xt;let L=[S,b],U=new xc,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let F=E[re];return F===void 0&&(F=new Jr,E[re]=F),F.getTargetRaySpace()},this.getControllerGrip=function(re){let F=E[re];return F===void 0&&(F=new Jr,E[re]=F),F.getGripSpace()},this.getHand=function(re){let F=E[re];return F===void 0&&(F=new Jr,E[re]=F),F.getHandSpace()};function W(re){let F=C.indexOf(re.inputSource);if(F===-1)return;let O=E[F];O!==void 0&&(O.update(re.inputSource,re.frame,c||o),O.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let re=0;re<E.length;re++){let F=C[re];F!==null&&(C[re]=null,E[re].disconnect(F))}z=null,X=null,g.reset();for(let re in m)delete m[re];e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,Q=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=_.stencil?uo:Wr,Q=_.stencil?ho:vs);let ze={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ri(f.textureWidth,f.textureHeight,{format:Cn,type:yi,depthTexture:new ha(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let O={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(re){for(let F=0;F<re.removed.length;F++){let O=re.removed[F],Q=C.indexOf(O);Q>=0&&(C[Q]=null,E[Q].disconnect(O))}for(let F=0;F<re.added.length;F++){let O=re.added[F],Q=C.indexOf(O);if(Q===-1){for(let ze=0;ze<E.length;ze++)if(ze>=C.length){C.push(O),Q=ze;break}else if(C[ze]===null){C[ze]=O,Q=ze;break}if(Q===-1)break}let ee=E[Q];ee&&ee.connect(O)}}let q=new v,se=new v;function fe(re,F,O){q.setFromMatrixPosition(F.matrixWorld),se.setFromMatrixPosition(O.matrixWorld);let Q=q.distanceTo(se),ee=F.projectionMatrix.elements,ze=O.projectionMatrix.elements,ht=ee[14]/(ee[10]-1),D=ee[14]/(ee[10]+1),ce=(ee[9]+1)/ee[5],le=(ee[9]-1)/ee[5],oe=(ee[8]-1)/ee[0],ae=(ze[8]+1)/ze[0],Me=ht*oe,ge=ht*ae,_e=Q/(-oe+ae),Je=_e*-oe;if(F.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Je),re.translateZ(_e),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ee[10]===-1)re.projectionMatrix.copy(F.projectionMatrix),re.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Xe=ht+_e,P=D+_e,w=Me-Je,H=ge+(Q-Je),j=ce*D/P*Xe,de=le*D/P*Xe;re.projectionMatrix.makePerspective(w,H,j,de,Xe,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function be(re,F){F===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(F.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let F=re.near,O=re.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(O=g.depthFar)),U.near=b.near=S.near=F,U.far=b.far=S.far=O,(z!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,X=U.far),U.layers.mask=re.layers.mask|6,S.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;let Q=re.parent,ee=U.cameras;be(U,Q);for(let ze=0;ze<ee.length;ze++)be(ee[ze],Q);ee.length===2?fe(U,S,b):U.projectionMatrix.copy(S.projectionMatrix),Ie(re,U,Q)};function Ie(re,F,O){O===null?re.matrix.copy(F.matrixWorld):(re.matrix.copy(O.matrixWorld),re.matrix.invert(),re.matrix.multiply(F.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(F.projectionMatrix),re.projectionMatrixInverse.copy(F.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Xr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(re){return m[re]};let He=null;function je(re,F){if(h=F.getViewerPose(c||o),p=F,h!==null){let O=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Q=!1;O.length!==U.cameras.length&&(U.cameras.length=0,Q=!0);for(let D=0;D<O.length;D++){let ce=O[D],le=null;if(d!==null)le=d.getViewport(ce);else{let ae=u.getViewSubImage(f,ce);le=ae.viewport,D===0&&(e.setRenderTargetTextures(y,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(y))}let oe=L[D];oe===void 0&&(oe=new mn,oe.layers.enable(D),oe.viewport=new Xt,L[D]=oe),oe.matrix.fromArray(ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(le.x,le.y,le.width,le.height),D===0&&(U.matrix.copy(oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Q===!0&&U.cameras.push(oe)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(O[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(ee&&ee.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<O.length;D++){let ce=O[D].camera;if(ce){let le=m[ce];le||(le=new ua,m[ce]=le);let oe=u.getCameraImage(ce);le.sourceTexture=oe}}}}for(let O=0;O<E.length;O++){let Q=C[O],ee=E[O];Q!==null&&ee!==void 0&&ee.update(Q,F,c||o)}He&&He(re,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),p=null}let et=new zm;et.setAnimationLoop(je),this.setAnimationLoop=function(re){He=re},this.dispose=function(){}}},ar=new qt,eS=new ft;function tS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ld(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),M=_.envMap,y=_.envMapRotation;M&&(g.envMap.value=M,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(eS.makeRotationFromEuler(ar)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let y=M.program;i.uniformBlockBinding(_,y)}function c(_,M){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let E=M.program;i.updateUBOMapping(_,E);let C=e.render.frame;r[_.id]!==C&&(f(_),r[_.id]=C)}function h(_){let M=u();_.__bindingPointIndex=M;let y=n.createBuffer(),E=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],y=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,I=y.length;C<I;C++){let R=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,b=R.length;S<b;S++){let L=R[S];if(d(L,C,S,E)===!0){let U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],X=0;for(let W=0;W<z.length;W++){let V=z[W],te=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,U+X,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,M,y,E){let C=_.value,I=M+"_"+y;if(E[I]===void 0)return typeof C=="number"||typeof C=="boolean"?E[I]=C:E[I]=C.clone(),!0;{let R=E[I];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return E[I]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function p(_){let M=_.uniforms,y=0,E=16;for(let I=0,R=M.length;I<R;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let b=0,L=S.length;b<L;b++){let U=S[b],z=Array.isArray(U.value)?U.value:[U.value];for(let X=0,W=z.length;X<W;X++){let V=z[X],te=x(V),q=y%E,se=q%te.boundary,fe=q+se;y+=se,fe!==0&&E-fe<te.storage&&(y+=E-fe),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=te.storage}}}let C=y%E;return C>0&&(y+=E-C),_.__size=y,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var fh=class{constructor(e={}){let{canvas:t=om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=mt;let C=0,I=0,R=null,S=-1,b=null,L=new Xt,U=new Xt,z=null,X=new ke(0),W=0,V=t.width,te=t.height,q=1,se=null,fe=null,be=new Xt(0,0,V,te),Ie=new Xt(0,0,V,te),He=!1,je=new to,et=!1,re=!1,F=new ft,O=new v,Q=new Xt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function ht(){return R===null?q:1}let D=i;function ce(T,k){return t.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Y,!1),D===null){let k="webgl2";if(D=ce(k,T),D===null)throw ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let le,oe,ae,Me,ge,_e,Je,Xe,P,w,H,j,de,ne,Le,ve,De,Ne,me,we,qe,Be,Te,it;function A(){le=new vM(D),le.init(),Be=new Kb(D,le),oe=new fM(D,le,e,Be),ae=new jb(D,le),oe.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Me=new SM(D),ge=new Fb,_e=new Jb(D,le,ae,ge,oe,Be,Me),Je=new mM(y),Xe=new _M(y),P=new Ry(D),Te=new uM(D,P),w=new MM(D,P,Me,Te),H=new TM(D,w,P,Me),me=new wM(D,oe,_e),ve=new pM(ge),j=new Nb(y,Je,Xe,le,oe,Te,ve),de=new tS(y,ge),ne=new Bb,Le=new Wb(le),Ne=new hM(y,Je,Xe,ae,H,d,l),De=new Yb(y,H,oe),it=new nS(D,Me,oe,ae),we=new dM(D,le,Me),qe=new bM(D,le,Me),Me.programs=j.programs,y.capabilities=oe,y.extensions=le,y.properties=ge,y.renderLists=ne,y.shadowMap=De,y.state=ae,y.info=Me}A();let N=new Ed(y,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(V,te,!1))},this.getSize=function(T){return T.set(V,te)},this.setSize=function(T,k,J=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,te=k,t.width=Math.floor(T*q),t.height=Math.floor(k*q),J===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*q,te*q).floor()},this.setDrawingBufferSize=function(T,k,J){V=T,te=k,q=J,t.width=Math.floor(T*J),t.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,k,J,K){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,k,J,K),ae.viewport(L.copy(be).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,k,J,K){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,k,J,K),ae.scissor(U.copy(Ie).multiplyScalar(q).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){ae.setScissorTest(He=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,J=!0){let K=0;if(T){let G=!1;if(R!==null){let ye=R.texture.format;G=ye===Uc||ye===Dc||ye===Lc}if(G){let ye=R.texture.type,Ae=ye===yi||ye===vs||ye===lo||ye===ho||ye===Rc||ye===Pc,Oe=Ne.getClearColor(),Ue=Ne.getClearAlpha(),Ye=Oe.r,$e=Oe.g,Ve=Oe.b;Ae?(p[0]=Ye,p[1]=$e,p[2]=Ve,p[3]=Ue,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Ye,x[1]=$e,x[2]=Ve,x[3]=Ue,D.clearBufferiv(D.COLOR,0,x))}else K|=D.COLOR_BUFFER_BIT}k&&(K|=D.DEPTH_BUFFER_BIT),J&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Ne.dispose(),ne.dispose(),Le.dispose(),ge.dispose(),Je.dispose(),Xe.dispose(),H.dispose(),Te.dispose(),it.dispose(),j.dispose(),N.dispose(),N.removeEventListener("sessionstart",Vt),N.removeEventListener("sessionend",ot),Ft.stop()};function $(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=Me.autoReset,k=De.enabled,J=De.autoUpdate,K=De.needsUpdate,G=De.type;A(),Me.autoReset=T,De.enabled=k,De.autoUpdate=J,De.needsUpdate=K,De.type=G}function Y(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){let k=T.target;k.removeEventListener("dispose",Z),xe(k)}function xe(T){Se(T),ge.remove(T)}function Se(T){let k=ge.get(T).programs;k!==void 0&&(k.forEach(function(J){j.releaseProgram(J)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,K,G,ye){k===null&&(k=ee);let Ae=G.isMesh&&G.matrixWorld.determinant()<0,Oe=j0(T,k,J,K,G);ae.setMaterial(K,Ae);let Ue=J.index,Ye=1;if(K.wireframe===!0){if(Ue=w.getWireframeAttribute(J),Ue===void 0)return;Ye=2}let $e=J.drawRange,Ve=J.attributes.position,dt=$e.start*Ye,Pt=($e.start+$e.count)*Ye;ye!==null&&(dt=Math.max(dt,ye.start*Ye),Pt=Math.min(Pt,(ye.start+ye.count)*Ye)),Ue!==null?(dt=Math.max(dt,0),Pt=Math.min(Pt,Ue.count)):Ve!=null&&(dt=Math.max(dt,0),Pt=Math.min(Pt,Ve.count));let jt=Pt-dt;if(jt<0||jt===1/0)return;Te.setup(G,K,Oe,J,Ue);let Ot,Dt=we;if(Ue!==null&&(Ot=P.get(Ue),Dt=qe,Dt.setIndex(Ot)),G.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*ht()),Dt.setMode(D.LINES)):Dt.setMode(D.TRIANGLES);else if(G.isLine){let We=K.linewidth;We===void 0&&(We=1),ae.setLineWidth(We*ht()),G.isLineSegments?Dt.setMode(D.LINES):G.isLineLoop?Dt.setMode(D.LINE_LOOP):Dt.setMode(D.LINE_STRIP)}else G.isPoints?Dt.setMode(D.POINTS):G.isSprite&&Dt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,Gt=G._multiDrawCounts,yt=G._multiDrawCount,zn=Ue?P.get(Ue).bytesPerElement:1,Mr=ge.get(K).currentProgram.getUniforms();for(let kn=0;kn<yt;kn++)Mr.setValue(D,"_gl_DrawID",kn),Dt.render(We[kn]/zn,Gt[kn])}else if(G.isInstancedMesh)Dt.renderInstances(dt,jt,G.count);else if(J.isInstancedBufferGeometry){let We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Gt=Math.min(J.instanceCount,We);Dt.renderInstances(dt,jt,Gt)}else Dt.render(dt,jt)};function Pe(T,k,J){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,ss(T,k,J),T.side=mi,T.needsUpdate=!0,ss(T,k,J),T.side=tn):ss(T,k,J)}this.compile=function(T,k,J=null){J===null&&(J=T),m=Le.get(J),m.init(k),M.push(m),J.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==J&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){let Oe=ye[Ae];Pe(Oe,J,G),K.add(Oe)}else Pe(ye,J,G),K.add(ye)}),m=M.pop(),K},this.compileAsync=function(T,k,J=null){let K=this.compile(T,k,J);return new Promise(G=>{function ye(){if(K.forEach(function(Ae){ge.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){G(T);return}setTimeout(ye,10)}le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Re=null;function wt(T){Re&&Re(T)}function Vt(){Ft.stop()}function ot(){Ft.start()}let Ft=new zm;Ft.setAnimationLoop(wt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){Re=T,N.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},N.addEventListener("sessionstart",Vt),N.addEventListener("sessionend",ot),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,R),m=Le.get(T,M.length),m.init(k),M.push(m),F.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),je.setFromProjectionMatrix(F,pi,k.reversedDepth),re=this.localClippingEnabled,et=ve.init(this.clippingPlanes,re),g=ne.get(T,_.length),g.init(),_.push(g),N.enabled===!0&&N.isPresenting===!0){let ye=y.xr.getDepthSensingMesh();ye!==null&&$t(ye,k,-1/0,y.sortObjects)}$t(T,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,fe),ze=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,ze&&Ne.addToRenderList(g,T),this.info.render.frame++,et===!0&&ve.beginShadows();let J=m.state.shadowsArray;De.render(J,T,k),et===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,G=g.transmissive;if(m.setupLights(),k.isArrayCamera){let ye=k.cameras;if(G.length>0)for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++){let Ue=ye[Ae];Ns(K,G,T,Ue)}ze&&Ne.render(T);for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++){let Ue=ye[Ae];ki(g,T,Ue,Ue.viewport)}}else G.length>0&&Ns(K,G,T,k),ze&&Ne.render(T),ki(g,T,k);R!==null&&I===0&&(_e.updateMultisampleRenderTarget(R),_e.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,k),Te.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],et===!0&&ve.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function $t(T,k,J,K){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){K&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);let Ae=H.update(T),Oe=T.material;Oe.visible&&g.push(T,Ae,Oe,J,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){let Ae=H.update(T),Oe=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Q.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Q.copy(Ae.boundingSphere.center)),Q.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Oe)){let Ue=Ae.groups;for(let Ye=0,$e=Ue.length;Ye<$e;Ye++){let Ve=Ue[Ye],dt=Oe[Ve.materialIndex];dt&&dt.visible&&g.push(T,Ae,dt,J,Q.z,Ve)}}else Oe.visible&&g.push(T,Ae,Oe,J,Q.z,null)}}let ye=T.children;for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++)$t(ye[Ae],k,J,K)}function ki(T,k,J,K){let G=T.opaque,ye=T.transmissive,Ae=T.transparent;m.setupLightsView(J),et===!0&&ve.setGlobalState(y.clippingPlanes,J),K&&ae.viewport(L.copy(K)),G.length>0&&Fs(G,k,J),ye.length>0&&Fs(ye,k,J),Ae.length>0&&Fs(Ae,k,J),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ns(T,k,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Ri(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?co:yi,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let ye=m.state.transmissionRenderTarget[K.id],Ae=K.viewport||L;ye.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);let Oe=y.getRenderTarget(),Ue=y.getActiveCubeFace(),Ye=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(X),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Ne.render(J);let $e=y.toneMapping;y.toneMapping=Ki;let Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),et===!0&&ve.setGlobalState(y.clippingPlanes,K),Fs(T,J,K),_e.updateMultisampleRenderTarget(ye),_e.updateRenderTargetMipmap(ye),le.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Pt=0,jt=k.length;Pt<jt;Pt++){let Ot=k[Pt],Dt=Ot.object,We=Ot.geometry,Gt=Ot.material,yt=Ot.group;if(Gt.side===tn&&Dt.layers.test(K.layers)){let zn=Gt.side;Gt.side=En,Gt.needsUpdate=!0,Vi(Dt,J,K,We,Gt,yt),Gt.side=zn,Gt.needsUpdate=!0,dt=!0}}dt===!0&&(_e.updateMultisampleRenderTarget(ye),_e.updateRenderTargetMipmap(ye))}y.setRenderTarget(Oe,Ue,Ye),y.setClearColor(X,W),Ve!==void 0&&(K.viewport=Ve),y.toneMapping=$e}function Fs(T,k,J){let K=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ye=T.length;G<ye;G++){let Ae=T[G],Oe=Ae.object,Ue=Ae.geometry,Ye=Ae.group,$e=Ae.material;$e.allowOverride===!0&&K!==null&&($e=K),Oe.layers.test(J.layers)&&Vi(Oe,k,J,Ue,$e,Ye)}}function Vi(T,k,J,K,G,ye){T.onBeforeRender(y,k,J,K,G,ye),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,k,J,K,T,ye),G.transparent===!0&&G.side===tn&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,y.renderBufferDirect(J,k,K,G,T,ye),G.side=mi,G.needsUpdate=!0,y.renderBufferDirect(J,k,K,G,T,ye),G.side=tn):y.renderBufferDirect(J,k,K,G,T,ye),T.onAfterRender(y,k,J,K,G,ye)}function ss(T,k,J){k.isScene!==!0&&(k=ee);let K=ge.get(T),G=m.state.lights,ye=m.state.shadowsArray,Ae=G.state.version,Oe=j.getParameters(T,G.state,ye,k,J),Ue=j.getProgramCacheKey(Oe),Ye=K.programs;K.environment=T.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(T.isMeshStandardMaterial?Xe:Je).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",Z),Ye=new Map,K.programs=Ye);let $e=Ye.get(Ue);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===Ae)return Nf(T,Oe),$e}else Oe.uniforms=j.getUniforms(T),T.onBeforeCompile(Oe,y),$e=j.acquireProgram(Oe,Ue),Ye.set(Ue,$e),K.uniforms=Oe.uniforms;let Ve=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=ve.uniform),Nf(T,Oe),K.needsLights=K0(T),K.lightsStateVersion=Ae,K.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function Uf(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Nf(T,k){let J=ge.get(T);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function j0(T,k,J,K,G){k.isScene!==!0&&(k=ee),_e.resetTextureUnits();let ye=k.fog,Ae=K.isMeshStandardMaterial?k.environment:null,Oe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xs,Ue=(K.isMeshStandardMaterial?Xe:Je).get(K.envMap||Ae),Ye=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Pt=!!J.morphAttributes.color,jt=Ki;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(jt=y.toneMapping);let Ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=Ot!==void 0?Ot.length:0,We=ge.get(K),Gt=m.state.lights;if(et===!0&&(re===!0||T!==b)){let bn=T===b&&K.id===S;ve.setState(K,T,bn)}let yt=!1;K.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Gt.state.version||We.outputColorSpace!==Oe||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==Ue||K.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==Ye||We.vertexTangents!==$e||We.morphTargets!==Ve||We.morphNormals!==dt||We.morphColors!==Pt||We.toneMapping!==jt||We.morphTargetsCount!==Dt)&&(yt=!0):(yt=!0,We.__version=K.version);let zn=We.currentProgram;yt===!0&&(zn=ss(K,k,G));let Mr=!1,kn=!1,Fo=!1,Ht=zn.getUniforms(),Jn=We.uniforms;if(ae.useProgram(zn.program)&&(Mr=!0,kn=!0,Fo=!0),K.id!==S&&(S=K.id,kn=!0),Mr||b!==T){ae.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ht.setValue(D,"projectionMatrix",T.projectionMatrix),Ht.setValue(D,"viewMatrix",T.matrixWorldInverse);let Pn=Ht.map.cameraPosition;Pn!==void 0&&Pn.setValue(D,O.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Ht.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,kn=!0,Fo=!0)}if(G.isSkinnedMesh){Ht.setOptional(D,G,"bindMatrix"),Ht.setOptional(D,G,"bindMatrixInverse");let bn=G.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(D,"boneTexture",bn.boneTexture,_e))}G.isBatchedMesh&&(Ht.setOptional(D,G,"batchingTexture"),Ht.setValue(D,"batchingTexture",G._matricesTexture,_e),Ht.setOptional(D,G,"batchingIdTexture"),Ht.setValue(D,"batchingIdTexture",G._indirectTexture,_e),Ht.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Ht.setValue(D,"batchingColorTexture",G._colorsTexture,_e));let Kn=J.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&me.update(G,J,zn),(kn||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,Ht.setValue(D,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Jn.envMap.value=Ue,Jn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Jn.envMapIntensity.value=k.environmentIntensity),kn&&(Ht.setValue(D,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&J0(Jn,Fo),ye&&K.fog===!0&&de.refreshFogUniforms(Jn,ye),de.refreshMaterialUniforms(Jn,K,q,te,m.state.transmissionRenderTarget[T.id]),mo.upload(D,Uf(We),Jn,_e)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(mo.upload(D,Uf(We),Jn,_e),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(D,"center",G.center),Ht.setValue(D,"modelViewMatrix",G.modelViewMatrix),Ht.setValue(D,"normalMatrix",G.normalMatrix),Ht.setValue(D,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let bn=K.uniformsGroups;for(let Pn=0,su=bn.length;Pn<su;Pn++){let Os=bn[Pn];it.update(Os,zn),it.bind(Os,zn)}}return zn}function J0(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function K0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,J){let K=ge.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ge.get(T.texture).__webglTexture=k,ge.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let J=ge.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};let $0=D.createFramebuffer();this.setRenderTarget=function(T,k=0,J=0){R=T,C=k,I=J;let K=!0,G=null,ye=!1,Ae=!1;if(T){let Ue=ge.get(T);if(Ue.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Ue.__webglFramebuffer===void 0)_e.setupRenderTarget(T);else if(Ue.__hasExternalTextures)_e.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ve=T.depthTexture;if(Ue.__boundDepthTexture!==Ve){if(Ve!==null&&ge.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(T)}}let Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);let $e=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[k])?G=$e[k][J]:G=$e[k],ye=!0):T.samples>0&&_e.useMultisampledRTT(T)===!1?G=ge.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?G=$e[J]:G=$e,L.copy(T.viewport),U.copy(T.scissor),z=T.scissorTest}else L.copy(be).multiplyScalar(q).floor(),U.copy(Ie).multiplyScalar(q).floor(),z=He;if(J!==0&&(G=$0),ae.bindFramebuffer(D.FRAMEBUFFER,G)&&K&&ae.drawBuffers(T,G),ae.viewport(L),ae.scissor(U),ae.setScissorTest(z),ye){let Ue=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,J)}else if(Ae){let Ue=k;for(let Ye=0;Ye<T.textures.length;Ye++){let $e=ge.get(T.textures[Ye]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ye,$e.__webglTexture,J,Ue)}}else if(T!==null&&J!==0){let Ue=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(T,k,J,K,G,ye,Ae,Oe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){ae.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let Ye=T.textures[Oe],$e=Ye.format,Ve=Ye.type;if(!oe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-K&&J>=0&&J<=T.height-G&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(k,J,K,G,Be.convert($e),Be.convert(Ve),ye))}finally{let Ye=R!==null?ge.get(R).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(T,k,J,K,G,ye,Ae,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue)if(k>=0&&k<=T.width-K&&J>=0&&J<=T.height-G){ae.bindFramebuffer(D.FRAMEBUFFER,Ue);let Ye=T.textures[Oe],$e=Ye.format,Ve=Ye.type;if(!oe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(k,J,K,G,Be.convert($e),Be.convert(Ve),0);let Pt=R!==null?ge.get(R).__webglFramebuffer:null;ae.bindFramebuffer(D.FRAMEBUFFER,Pt);let jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await am(D,jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(dt),D.deleteSync(jt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,J=0){let K=Math.pow(2,-J),G=Math.floor(T.image.width*K),ye=Math.floor(T.image.height*K),Ae=k!==null?k.x:0,Oe=k!==null?k.y:0;_e.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ae,Oe,G,ye),ae.unbindTexture()};let Q0=D.createFramebuffer(),ex=D.createFramebuffer();this.copyTextureToTexture=function(T,k,J=null,K=null,G=0,ye=null){ye===null&&(G!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ae,Oe,Ue,Ye,$e,Ve,dt,Pt,jt,Ot=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(J!==null)Ae=J.max.x-J.min.x,Oe=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,Ye=J.min.x,$e=J.min.y,Ve=J.isBox3?J.min.z:0;else{let Kn=Math.pow(2,-G);Ae=Math.floor(Ot.width*Kn),Oe=Math.floor(Ot.height*Kn),T.isDataArrayTexture?Ue=Ot.depth:T.isData3DTexture?Ue=Math.floor(Ot.depth*Kn):Ue=1,Ye=0,$e=0,Ve=0}K!==null?(dt=K.x,Pt=K.y,jt=K.z):(dt=0,Pt=0,jt=0);let Dt=Be.convert(k.format),We=Be.convert(k.type),Gt;k.isData3DTexture?(_e.setTexture3D(k,0),Gt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(_e.setTexture2DArray(k,0),Gt=D.TEXTURE_2D_ARRAY):(_e.setTexture2D(k,0),Gt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let yt=D.getParameter(D.UNPACK_ROW_LENGTH),zn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mr=D.getParameter(D.UNPACK_SKIP_PIXELS),kn=D.getParameter(D.UNPACK_SKIP_ROWS),Fo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,$e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);let Ht=T.isDataArrayTexture||T.isData3DTexture,Jn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let Kn=ge.get(T),bn=ge.get(k),Pn=ge.get(Kn.__renderTarget),su=ge.get(bn.__renderTarget);ae.bindFramebuffer(D.READ_FRAMEBUFFER,Pn.__webglFramebuffer),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let Os=0;Os<Ue;Os++)Ht&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(T).__webglTexture,G,Ve+Os),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(k).__webglTexture,ye,jt+Os)),D.blitFramebuffer(Ye,$e,Ae,Oe,dt,Pt,Ae,Oe,D.DEPTH_BUFFER_BIT,D.NEAREST);ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||ge.has(T)){let Kn=ge.get(T),bn=ge.get(k);ae.bindFramebuffer(D.READ_FRAMEBUFFER,Q0),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,ex);for(let Pn=0;Pn<Ue;Pn++)Ht?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kn.__webglTexture,G,Ve+Pn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kn.__webglTexture,G),Jn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,ye,jt+Pn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,ye),G!==0?D.blitFramebuffer(Ye,$e,Ae,Oe,dt,Pt,Ae,Oe,D.COLOR_BUFFER_BIT,D.NEAREST):Jn?D.copyTexSubImage3D(Gt,ye,dt,Pt,jt+Pn,Ye,$e,Ae,Oe):D.copyTexSubImage2D(Gt,ye,dt,Pt,Ye,$e,Ae,Oe);ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Gt,ye,dt,Pt,jt,Ae,Oe,Ue,Dt,We,Ot.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Gt,ye,dt,Pt,jt,Ae,Oe,Ue,Dt,Ot.data):D.texSubImage3D(Gt,ye,dt,Pt,jt,Ae,Oe,Ue,Dt,We,Ot):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,dt,Pt,Ae,Oe,Dt,We,Ot.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,dt,Pt,Ot.width,Ot.height,Dt,Ot.data):D.texSubImage2D(D.TEXTURE_2D,ye,dt,Pt,Ae,Oe,Dt,We,Ot);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mr),D.pixelStorei(D.UNPACK_SKIP_ROWS,kn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fo),ye===0&&k.generateMipmaps&&D.generateMipmap(Gt),ae.unbindTexture()},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&_e.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?_e.setTextureCube(T,0):T.isData3DTexture?_e.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_e.setTexture2DArray(T,0):_e.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){C=0,I=0,R=null,ae.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Cd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var wE=Cd.length-1,Wm=Math.min(...Cd.map(n=>n[1])),Xm=Math.max(...Cd.map(n=>n[1])),TE=new v(0,0,(Wm+Xm)/2),qm=new v(.047,.027,(Xm-Wm)/2);var CE=new pt,RE=new v,PE=new v,IE=new ft;var LE=new v,DE=new v;var UE=new v;var NE=new v,FE=new v,OE=new v,BE=new In,zE=new v;function Oa(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new v().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new v().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),M=new In(g,m,_).getNormal(new v);M.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:M})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new sn().setFromPoints(i).getSize(new v),h=Math.max(1e-4,e**2*.4),u=e?new v().setScalar(1/h):new v(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:f,normals:e?[]:d(s.map(p=>p.n)),edges:e?[]:d(s.flatMap(p=>[new v().subVectors(p.b,p.a).normalize(),new v().subVectors(p.c,p.b).normalize(),new v().subVectors(p.a,p.c).normalize()]))}}var kE=new v,VE=new v,GE=new v,HE=new v,WE=new pt,XE=new pt,qE=new v;function yo(n){return Oa(new Ge(n.x*2,n.y*2,n.z*2))}var YE=new v;var Ym=Oa(new ii(1,0).scale(...qm)),ZE={mesh:{position:new v,quaternion:new pt},shape:Ym,radius:Ym.radius,precise:!0};var jE=new v,JE=new v,KE=new v,$E=new pt,QE=new pt,eA=new pt;var tA=new v,nA=new v,iA=new v,sA=new v;var rA=new v;var oA=new v,aA=new v,lA=new v,cA=new v,hA=new v,uA=new v,dA=new v;var fA={mesh:{position:null,quaternion:new pt},shape:{sphereRadius:0,normals:[],edges:[]}};function mh(n,e,t){let i=new Ge(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Rd(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function Zm(n){switch(n){case"sphere":return new si(.5,24,16);case"cylinder":return new Ct(.5,.5,1,24);case"cone":return new Zs(.5,1,24);case"torus":return new Tn(.34,.14,12,32);case"capsule":return new ms(.32,.36,8,16);default:return new Ge(1,1,1)}}function Pd(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new v(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let f=1;f<l.length-1;f++)for(let d of[c,l[f],l[f+1]]){s.push(...d);let p=d.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new at;return o.setAttribute("position",new Fe(s,3)),o.setAttribute("uv",new Fe(r,2)),o.computeVertexNormals(),o}function Ba(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Ms=(n,e,t)=>n+(e-n)*t,_o=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function gh(n,e){let t=Math.floor(n),i=Math.floor(e),s=_o(0,1,n-t),r=_o(0,1,e-i);return Ms(Ms(Ba(t,i),Ba(t+1,i),s),Ms(Ba(t,i+1),Ba(t+1,i+1),s),r)}function jm(n,e){return gh(n,e)*.54+gh(n*2.07+3.4,e*2.07-6.1)*.26+gh(n*4.2+9,e*4.2)*.13+gh(n*8.6,e*8.6-13)*.07}function Jm(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),f=u**.54,d=r.map((p,x)=>Ms(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=Ba(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*_o(.09,.3,c))}else{let[y,E]=s[p],C=2.8*h/(c+.16),I=y*C+3.6,R=E*C-8.1,S=jm(I,R),b=jm(I-.12,R-.09);g=_o(.49,.66,S)*_o(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-b)*5+(S-.54)*.8))}let M=n?1:Ms(.94,1,_o(.05,.34,c));i[x]=Ms(d[0],(139+115*m)*M,g)+_,i[x+1]=Ms(d[1],(154+100*m)*M,g)+_*.94,i[x+2]=Ms(d[2],(178+77*m)*M,g)+_*.86,i[x+3]=255}}let a=new ei(i,1024,512,Cn);return a.colorSpace=mt,a.wrapS=wn,a.magFilter=en,a.minFilter=An,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Km(){let n=Jm(!1),e=Jm(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new ei(t,n.image.width,n.image.height,Cn);i.colorSpace=mt;for(let s of[n,i,e])s.mapping=Li,s.magFilter=en,s.minFilter=en,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var Yt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),$m=Yt(-24,24,-51,7),Qm=34521,eg={x:0,y:0,z:3},bs={x:.05,y:1.16,z:5.9},vo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Yt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Yt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Yt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Yt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Yt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Yt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Yt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Yt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Yt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Yt(9,23,-48,-37),sign:[16,-38.2]}},xA=[Yt(-9,-6,-51,7),Yt(6,9,-51,7),Yt(-24,24,-8,-5),Yt(-24,24,-27,-23),Yt(9,23,-37,-34)],tg=[{name:"Glace",bounds:vo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:vo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Yt(-9,9,-51,7)},{name:"Sol ouest",bounds:Yt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Yt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Yt(-24,-23,-51,7)},{name:"Sol est",bounds:Yt(9,23,-51,-48)},{name:"Sol est",bounds:Yt(9,23,-37,7)},{name:"Bordure est",bounds:Yt(23,24,-51,7)}],za={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Mo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],ng=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Ss={x:-19.4,y:.68,z:-3.25},ig=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),sg={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function xh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Pi(i);return s.colorSpace=mt,s}function rg(n,e){let{day:t,sunset:i,night:s}=Km(),r=[t,i,s],o=new ke,a=new qs("#a6d4ea",55,135),l=xh(128,128,(A,N)=>{let $=A.createRadialGradient(N/2,N/2,0,N/2,N/2,N/2);$.addColorStop(0,"#fff8df"),$.addColorStop(.12,"#fff3bd"),$.addColorStop(.18,"rgba(255,225,144,.40)"),$.addColorStop(1,"rgba(255,220,144,0)"),A.fillStyle=$,A.fillRect(0,0,N,N)}),c=new aa(new Qr({map:l,blending:Ca,depthWrite:!1,fog:!1,toneMapped:!1}));c.scale.setScalar(34),n.add(c);let h=t.clone();h.mapping=Li,h.needsUpdate=!0;let u=new go(e);n.environment=u.fromEquirectangular(h).texture,u.dispose();let f=new Qs("#daeaff","#88724c",2.25),d=new er("#fff0d0",3);d.position.set(-14,25,-16),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),Object.assign(d.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),d.shadow.bias=-25e-5,d.shadow.normalBias=.025,n.add(f,d,d.target);let p=new v,x=0,g=null,m=!0,_=null,M=null,y=!0,E=0,C=0,I=new v,R=null,S=null,b=null;function L(A,N){if(N==="#ffffff")return A;if(A===S&&N===b)return R;let $=A.image,ue=document.createElement("canvas");ue.width=$.width,ue.height=$.height;let Y=ue.getContext("2d");return A.isDataTexture?Y.putImageData(new ImageData(new Uint8ClampedArray($.data),$.width,$.height),0,0):Y.drawImage($,0,0),Y.globalCompositeOperation="multiply",Y.fillStyle=N,Y.fillRect(0,0,ue.width,ue.height),R?.dispose(),R=new Pi(ue),R.mapping=Li,R.colorSpace=mt,R.flipY=A.flipY,S=A,b=N,R}function U(A){x=[0,1,2].includes(A)?A:0;let N=g??Gi(x),$=Ce.degToRad(N.azimuth),ue=Ce.degToRad(N.elevation);I.set(Math.cos($)*Math.cos(ue),Math.sin(ue),Math.sin($)*Math.cos(ue)),p.copy(I).multiplyScalar(33),f.color.set(N.ambientColor),f.groundColor.set(N.groundColor),f.intensity=N.ambientPower,d.color.set(N.sunColor),d.intensity=N.sunPower,d.position.copy(d.target.position).add(p),c.material.color.set(N.sunColor),c.material.opacity=[1,.93,.22][N.preset]*Math.min(1,N.sunPower),c.visible=y&&N.sunPower>0;let Y=N.sky==="image"&&M?M:r[N.preset];n.background=N.sky==="color"||!m?o.set(N.skyColor):L(Y,N.skyTint),n.backgroundRotation.y=Ce.degToRad(N.rotation),a.color.set(N.fogColor),a.near=N.fogNear,a.far=N.fogFar,n.fog=N.fog?a:null,n.environmentIntensity=E*[1,.56,.09][N.preset]}function z(A,N=()=>{}){g=A;let $=A?.sky==="image"?A.skyImage:null;if(_!==$){_=$;let ue=++C;M?.dispose(),M=null,$&&new ri().load($,Y=>{if(C!==ue){Y.dispose();return}Y.colorSpace=mt,Y.mapping=Li,M=Y,U(x),N()},void 0,()=>N())}U(x)}function X(A){c.position.copy(A).addScaledVector(I,94)}function W(A){if(!d.castShadow)return;let N=d.target.position,$=Math.round(A.x/4)*4,ue=Math.round(A.y/4)*4,Y=Math.round(A.z/4)*4;N.x===$&&N.y===ue&&N.z===Y||(N.set($,ue,Y),d.position.copy(N).add(p))}U(0);let V=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function te(A,N,$){let[,ue,Y]=V[N],Z=512;A.save(),A.scale($/512,$/512),A.fillStyle=ue,A.fillRect(0,0,Z,Z);let xe=N+19;function Se(){return xe=Math.imul(xe,1664525)+1013904223>>>0,xe/4294967296}if(A.fillStyle=Y,N===16){for(let Pe=0;Pe<16;Pe++)for(let Re=0;Re<16;Re++)(Re+Pe)%2===0&&A.fillRect(Re*32,Pe*32,32,32);A.fillStyle="#ff3957",A.fillRect(253,0,6,512),A.fillRect(0,253,512,6)}else if([0,2,8,15].includes(N)){let Pe=N===15?32:64;A.globalAlpha=.48;for(let Re=0;Re<Z;Re+=Pe){A.fillRect(0,Re,Z,N===8?3:2);for(let wt=-Pe;wt<Z;wt+=Pe)A.fillRect(wt+Re/Pe%2*(N===2?Pe/2:0),Re,2,Pe)}}else if([4,5,6,7,10,11,12].includes(N)){let Pe=N===5?38:N===7?64:18;for(let Re=0;Re<Pe;Re++){A.strokeStyle=Y,A.globalAlpha=.08+Se()*.22,A.lineWidth=N===5?1+Se()*8:1+Se()*4;let wt=Se()*Z,Vt=N===5?.018:.009;A.beginPath();for(let ot=0;ot<=Z;ot+=8){let Ft=wt+Math.sin(ot*Vt+Re)*(N===6||N===7?4:12+Re%5*3)+(N===4?ot*.28:0);ot===0?A.moveTo(ot,Ft):A.lineTo(ot,Ft)}A.stroke()}}else{A.globalAlpha=.27;for(let Pe=0;Pe<120;Pe++){let Re=Se()*Z,wt=Se()*Z,Vt=2+Se()*6;A.beginPath(),A.arc(Re,wt,Vt,0,Math.PI*2),A.fill()}}if(N!==16)for(let Pe=0;Pe<4400;Pe++)A.globalAlpha=.05+Se()*.1,A.fillStyle=Se()>.5?Y:"#222324",A.fillRect(Se()*Z,Se()*Z,1+Se()*4,1+Se()*3);A.restore()}let q=new Set([0,2,4,5,8,15,16]),se=V.map(([A,N,$,ue,Y,Z],xe)=>{let Se=q.has(xe)?512:256,Pe=xh(Se,Se,wt=>te(wt,xe,Se));Pe.wrapS=Pe.wrapT=wn;let Re=new un({map:Pe,roughness:ue,metalness:Y,flatShading:!0,opacity:Z,transparent:Z<1,depthWrite:Z===1});return Re.name=A,Re}),fe=se.map(A=>A.map.image),be=512,Ie=se.map(A=>new Wn({map:A.map,flatShading:!0,opacity:A.opacity,transparent:A.transparent,depthWrite:A.depthWrite})),He={value:0},je={value:.24},et={value:null},re={value:0};function F(){et.value?.dispose(),et.value=xh(512,512,(A,N)=>{A.fillStyle="#ffffff",A.fillRect(0,0,N,N);let $=N/52,ue=N/64;for(let Y of O){if(!Y.position||!Y.half||Y.position.y+Y.half.y<.22)continue;let Z=(Y.position.x+26)*$,xe=(Y.position.z+54)*ue,Se=Math.min(55,Y.half.x*$+5),Pe=Math.min(72,Y.half.z*ue+6);A.save(),A.translate(Z+Y.half.y*$*.2,xe+Y.half.y*ue*.24),A.scale(Se,Pe);let Re=A.createRadialGradient(0,0,.15,0,0,1);Re.addColorStop(0,"rgba(22,37,65,.54)"),Re.addColorStop(.58,"rgba(36,54,76,.29)"),Re.addColorStop(1,"rgba(38,48,57,0)"),A.fillStyle=Re,A.fillRect(-1,-1,2,2),A.restore()}})}for(let A of[...se,...Ie])A.onBeforeCompile=N=>{N.uniforms.uFocusAmount=He,N.uniforms.uFocusRadius=je,N.uniforms.uLabLightmap=et,N.uniforms.uLabBakedStrength=re,N.vertexShader=`varying vec3 vLabPosition;
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
      `)},A.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let O=[],Q=[];function ee(A,N,$,ue,Y,Z,xe,Se=0,Pe=0,Re=1,wt=1,Vt=!1){let ot=new pe(Vt?new Ge(Y,Z,xe):mh(Y,Z,xe),se[Se]);ot.position.set(N,$,ue),ot.rotation.x=Pe,ot.receiveShadow=!0,ot.castShadow=!0,n.add(ot);let Ft=new v(Y/2,Z/2,xe/2),$t={mesh:ot,position:ot.position,quaternion:ot.quaternion,half:Ft,min:Ft.clone().negate(),friction:Re,gravity:wt,name:A,type:Se,shape:yo(Ft)};return O.push($t),$t}let ze=tg.map(({name:A,bounds:N,type:$=0,friction:ue=.78,gravity:Y=1})=>{let{xMin:Z,xMax:xe,zMin:Se,zMax:Pe}=N;return ee(A,(Z+xe)/2,-.33,(Se+Pe)/2,xe-Z,.66,Pe-Se,$,0,ue,Y)});for(let A of Object.values(sg))for(let N of A)ee(...N);let{xMin:ht,xMax:D,zMin:ce,zMax:le}=$m;ee("But\xE9e arri\xE8re",0,1.35,ce+.4,D-ht,2.7,.6,2),ee("But\xE9e ouest",ht+.3,1.05,(ce+le)/2,.6,2.1,le-ce,2),ee("But\xE9e est",D-.3,1.05,(ce+le)/2,.6,2.1,le-ce,2);let{xMin:oe,xMax:ae,zMin:Me,zMax:ge}=vo.hills.bounds,_e=ae-oe,Je=ge-Me,Xe=16,P=64,w=new dn(_e,Je,Xe,P).rotateX(-Math.PI/2).translate(oe+_e/2,0,Me+Je/2),H=w.attributes.uv;for(let A=0;A<H.count;A++)H.setXY(A,H.getX(A)*_e/2.6,H.getY(A)*Je/2.6);let j=w.attributes.position,de;function ne(A){if(de===A)return;de=A;let N=de*.017;for(let $=0;$<j.count;$++){let ue=j.getX($),Y=j.getZ($),Z=Math.sin(Math.PI*Ce.clamp((ue-oe)/_e,0,1)),xe=Math.min(1,(Y-Me)*.48,(ge-Y)*.48),Se=.93+.56*Math.sin(Y*.36+N)+.32*Math.cos(ue*.67+Y*.26+N*1.4)+.19*Math.sin(Y*.81+N*.67);j.setY($,Math.max(0,Z*xe*Se))}j.needsUpdate=!0,w.computeVertexNormals(),w.computeBoundingSphere()}ne(Qm);let Le=new pe(w,se[3]);Le.userData.editorAssetId="lab-hill",Le.receiveShadow=Le.castShadow=!0,n.add(Le);let ve=(A,N)=>{let $=Ce.clamp((A-oe)/_e*Xe,0,Xe-1e-6),ue=Ce.clamp((N-Me)/Je*P,0,P-1e-6),Y=Math.floor($),Z=Math.floor(ue),xe=$-Y,Se=ue-Z,Pe=Xe+1,Re=Z*Pe+Y,wt=j.getY(Re),Vt=j.getY(Re+1),ot=j.getY(Re+Pe),Ft=j.getY(Re+Pe+1);return xe+Se<=1?wt+(Vt-wt)*xe+(ot-wt)*Se:Ft+(ot-Ft)*(1-xe)+(Vt-Ft)*(1-Se)};O.push({heightfield:!0,mesh:Le,editorAssetId:"lab-hill",height:ve,...vo.hills.bounds,friction:.81,gravity:1});function De(A,N,$,ue,Y=1.45){let Z=xh(384,72,(Se,Pe,Re)=>{Se.fillStyle="#202a32",Se.fillRect(0,0,Pe,Re),Se.fillStyle=ue,Se.font="bold 31px system-ui",Se.textAlign="center",Se.fillText(A,Pe/2,48,Pe-20)}),xe=new pe(new dn(3.2,.6),new Jt({map:Z,side:tn}));xe.position.set(N,Y,$),n.add(xe),Q.push(xe)}for(let A of Object.values(vo)){De(A.name.toLocaleUpperCase("fr"),...A.sign,A.color);let{xMin:N,xMax:$,zMin:ue,zMax:Y}=A.bounds,Z=new ca(new at().setFromPoints([new v(N,.025,ue),new v($,.025,ue),new v($,.025,Y),new v(N,.025,Y)]),new ti({color:A.color,transparent:!0,opacity:.72}));n.add(Z),Q.push(Z)}De("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),De("MURS HAUTS",3,-31,"#e8d2ff"),De("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Ne=new un({color:"#c8e6ed",metalness:1,roughness:.16}),me=new pe(new ni(.54,2),Ne);me.userData.editorAssetId="chrome-sphere",me.position.set(Ss.x,Ss.y,Ss.z),me.castShadow=!0,n.add(me);let we=V.map((A,N)=>{let{x:$,z:ue}=ig(N);return ee("\xC9chantillon "+V[N][0],$,.325,ue,.65,.65,.65,N,0,1,1,!0).mesh}),qe=new _n(1,12).rotateX(-Math.PI/2),Be=new Jt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Te(A){let N=new pe(qe,Be);return N.scale.setScalar(A),n.add(N),N}function it(A,N,$,ue,Y,Z,xe,Se){let Pe=N>=3;e.shadowMap.enabled=Pe,d.castShadow=Pe,Be.opacity=N===2?.17:.11,re.value=Se?.38+$*.04:0;let Re=N>=9?2048:N>=6?1024:N>=4?512:256;d.shadow.intensity=.45+N*.055,d.shadow.radius=.65+N*.12;let wt=13+N*1.2;Object.assign(d.shadow.camera,{left:-wt,right:wt,top:wt,bottom:-wt}),d.shadow.camera.updateProjectionMatrix(),d.shadow.mapSize.x!==Re&&(d.shadow.map?.dispose(),d.shadow.map=null,d.shadow.mapSize.set(Re,Re)),y=Y,xe!==be&&(be=xe,se.forEach((ot,Ft)=>{let $t=ot.userData.texture??ot.map,ki=q.has(Ft)?xe:Math.min(256,xe);if($t.image.width===ki)return;let Ns=document.createElement("canvas");Ns.width=Ns.height=ki;let Fs=Ns.getContext("2d");ki>512?te(Fs,Ft,ki):Fs.drawImage(fe[Ft],0,0,ki,ki);let Vi=new Pi(Ns);Vi.colorSpace=$t.colorSpace,Vi.wrapS=$t.wrapS,Vi.wrapT=$t.wrapT,Vi.repeat.copy($t.repeat);for(let ss of[ot,Ie[Ft]])ss.userData.texture=Vi,ss.map=Vi,ss.needsUpdate=!0;$t.dispose()}));let Vt=A>=4;for(let ot of O)ot.mesh?.isMesh&&!ot.zone&&(ot.mesh.material=Vt?se[ot.type]:Ie[ot.type]);Le.material=Vt?se[3]:Ie[3];for(let ot=0;ot<we.length;ot++)we[ot].material=Vt?se[ot]:Ie[ot];se.forEach((ot,Ft)=>{for(let $t of[ot,Ie[Ft]])$t.userData.texture||($t.userData.texture=$t.map),$t.map=Z?$t.userData.texture:null,$t.color.set(Z?"#ffffff":V[Ft][1]),$t.needsUpdate=!0}),E=ue?.21+$*.067:0,Ne.metalness=ue?.95:.1,Ne.roughness=ue?.13:.46,m=A>=2,U(x)}return{boxes:O,floors:ze,probe:me,display:we,visual:it,shadow:Te,setTimeOfDay:U,setEnvironment:z,centerSky:X,sunDirection:()=>I.clone(),centerShadows:W,lighting:[f,d,d.target,c],get hillSeed(){return de},setHillSeed:ne,bakeLightmap:F,mapMaterial:(A,N)=>N>=4?se[A]:Ie[A],builtObjects:[...O.map(A=>A.mesh).filter(A=>A?.isObject3D),me,...Q],materials:[...se,...Ie],focus(A,N,$){He.value=A?N*.75:0,je.value=.07+$*.058}}}function og(n,e,t){function i(c,h,u=.85){let f=c.getWorldPosition(new v),d=c.getWorldQuaternion(new pt);e.push({half:h,min:h.clone().negate(),position:f,quaternion:d,mesh:{position:f,quaternion:d},shape:yo(h),friction:u,gravity:1})}let s=[],r=[],o=new Wn({color:"#485d5d",flatShading:!0});function a([c,h],u,f){let d=new pe(new Ge(.095,.68,.11),o);d.position.set(c,.34,h+.46),d.castShadow=d.receiveShadow=!0,n.add(d),i(d,new v(.0475,.34,.055));let p=new xn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new pe(new Ge(.64,.36,.055),new Wn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Pi(g);_.colorSpace=mt;let M=new pe(new dn(.61,.095),new Jt({map:_}));M.position.set(0,.116,.03),p.add(M);let y=.592/f.length,E=f.map(([I,R],S)=>{let b=new pe(new Ge(y-.012,.155,.04),new Wn({color:"#478086"}));b.position.set(-.296+y*(S+.5),-.045,.046),p.add(b),s.push(b),b.userData.touchWidth=y-.012;let L=document.createElement("canvas");L.width=208,L.height=172;let U=new Pi(L);U.colorSpace=mt;let z=new pe(new dn(y-.017,.139),new Jt({map:U}));z.position.z=.0205,b.add(z);let X=-1/0;return b.userData.action=()=>{let W=performance.now();W-X<250||(X=W,R(),l(),b.position.z=.036,setTimeout(()=>{b.position.z=.046},115))},{label:I,context:L.getContext("2d"),texture:U}});function C(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let I of E){let R=I.context;R.fillStyle="#386269",R.fillRect(0,0,208,172),R.fillStyle="#fff2d5",R.textAlign="center",R.font="bold 27px system-ui";let S=(typeof I.label=="function"?I.label():I.label).split("|");S.forEach((b,L)=>R.fillText(b,104,(S.length>1?68:97)+L*37,188)),I.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(C)}function l(){for(let c of r)c()}return a(za.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Mo[0])],["Boule",()=>t.spawn(1,Mo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Mo[0])],["Vider",t.clear]]),a(za.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Mo[1])],["Sph\xE8re",()=>t.spawn(5,Mo[1])]]),a(za.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(za.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function yh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new at,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ag(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=ag(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function ag(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var vh=0,iS=1,sS=new v,lg=new Ea,Id=new gn,cg=new v,_h=new In,Mh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new bh,this.unassigned=new bh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Ld(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new v;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,sS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===vh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new v,t=new v,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,h;r=0,lg.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l){lg.closestPointToPoint(p.point,!0,cg);let x=cg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Id.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Id.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(Id.distanceToPoint(h.point)<0){u.push(vi.create(a,l,c),vi.create(h,l,a),vi.create(h,c,l),vi.create(h,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge(d)),u[f+1].getEdge(1).setTwin(u[d+1].getEdge(0))}}else{u.push(vi.create(a,c,l),vi.create(h,a,l),vi.create(h,l,c),vi.create(h,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge((3-f)%3)),u[f+1].getEdge(0).setTwin(u[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(u[f]);for(let f=0,d=e.length;f<d;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===vh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=iS;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===vh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=vi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},vi=class n{constructor(){this.normal=new v,this.midpoint=new v,this.area=0,this.constant=0,this.outside=null,this.mark=vh,this.edge=null}static create(e,t,i){let s=new n,r=new ka(e,s),o=new ka(t,s),a=new ka(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return _h.set(e.point,t.point,i.point),_h.getNormal(this.normal),_h.getMidpoint(this.midpoint),this.area=_h.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ka=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Ld=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},bh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Qi=class extends at{constructor(e=[]){super();let t=[],i=[],r=new Mh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Fe(t,3)),this.setAttribute("normal",new Fe(i,3))}};var Un=Math.PI*2,Sh=.84,es=128;function Es(n){let e=new Uint8Array(es*es*4);for(let i=0;i<es;i++)for(let s=0;s<es;s++){let r=(s+.5)/es,o=(i+.5)/es,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Sh,1),Math.min(o/Sh,1),s,i),l=(s+i*es)*4;for(let c=0;c<3;c++)e[l+c]=Ce.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ei(e,es,es);return t.colorSpace=mt,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=en,t.needsUpdate=!0,t}function hr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function st(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new ke(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Sh,r.getY(l)*Sh):r.setXY(l,.95,.95);return i.setAttribute("color",new At(a,3)),i}function As(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:yh(s),material:new un({vertexColors:!0,map:r,roughness:o,metalness:a})}}function hg(n,e,t){let i=n/2,s=e/2,r=new ji;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function ws(n,e,t,i,s){return new Js(hg(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ts(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,f]=n[h];for(let d=0;d<=e;d++){let p=Un*d/e,x=t(u,f,p,h);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(d/e,h/(n.length-1)),h===n.length-1||d===e)continue;let g=h*(e+1)+d,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new at;o.setAttribute("position",new Fe(i,3)),o.setAttribute("uv",new Fe(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new v,c=new v;for(let h=0;h<n.length;h++){let u=h*(e+1),f=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Va(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new v(0,s,0));continue}for(let r=0;r<e;r++){let o=Un*r/e;t.push(new v(i*Math.sin(o),s,i*Math.cos(o)))}}return new Qi(t)}function rS(){let t=new Ma(hg(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ce.clamp(i.getX(l)/.098+.5,0,1),h=Ce.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=Es((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Un),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[st(ws(.106,.207,.013,.011,.0019),8425890),st(ws(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),st(ws(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),st(t,16777215,!0),st(ws(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),st(new Ge(.0036,.024,.004).translate(.055,.029,0),11714250),st(new Ge(.0036,.015,.004).translate(-.055,.032,0),11385285),st(new Ge(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(st(new Ct(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(st(new _n(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(st(new _n(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Qi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new v(c,h,l))));return As("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function oS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Ts(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+u)/.014)**2))));return a*(1-.14*h**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Es((a,l,c,h)=>{let u=Un*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(_=>Math.exp(-(((f-_+.035*Math.cos(u))/.009)**2)))),x=d**3*p,g=hr(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*x+m,76+24*d+70*x+m,24+11*d+52*x+m*.8]}),o=Va([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return As("bread","Baguette de pain",.27,o,[st(s,16777215,!0)],r,.9)}function aS(){let n=Es((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*hr(a,l)-(c&&(u||f)?35:0);return[p*.94,p,p*1.04]}),e=Ts([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ts([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[st(e,16777215,!0),st(t,11056059),st(new Ct(.067,.067,.124,10).rotateX(Math.PI/2),9346214),st(new Ct(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Un*r/5;i.push(st(new Ge(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Va([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return As("wheel","Roue",1.8,s,i,n,.64,.23)}function lS(){let n=Es((r,o,a,l)=>{let c=hr(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Un*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=Ts([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Tn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Un*l/5;return new v(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new v(.166,-.027,.01),new v(.166,.053,-.01));let s=new Qi(i);return As("cup","Tasse",.39,s,[st(e,16777215,!0),st(t,15785922)],n,.37)}function cS(){let n=Ts([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Es((s,r,o,a)=>{let l=9*hr(o,a),c=11*Math.cos(s*Un*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Un*48+s*Un*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Un*4);return[h,h*1.13,h*1.24]}),t=[st(n,16777215,!0),st(new gs(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),st(new _n(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),st(new _n(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),st(new Ct(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),st(new _n(.008,12).translate(0,.035,.0336),15633202)],i=Va([[.033,-.143],[.054,.133]],6);return As("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function hS(){let n=Ts([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Es((r,o,a,l)=>{let c=10*hr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(Un*r*2));if(e[f]?.[u]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Un*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[st(n,16777215,!0),st(new _n(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),st(new gs(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),st(new _n(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Va([[.069,-.112],[.069,.109]],6);return As("soda","Canette de soda",.35,s,i,t,.42,.27)}function uS(){let n=Ts([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Es((s,r,o,a)=>{let l=15*hr(o,a),c=8*Math.cos(s*Un*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[st(n,16777215,!0),st(ws(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),st(new _n(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Va([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return As("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function dS(){let n=Es((s,r,o,a)=>{let l=8*hr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ts([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[st(ws(.138,.22,.061,.016,.004),14788675),st(ws(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),st(new dn(.106,.174).translate(0,-.004,.0395),16777215,!0),st(e,2502456),st(new Ct(.014,.017,.016,10).translate(.04,.117,.001),2503482),st(new Ge(.008,.047,.027).translate(-.072,.014,-.002),3028798),st(new Ge(.006,.02,.019).translate(-.072,-.043,-.002),3950414),st(new _n(.004,8).translate(.04,.066,.0397),15817792),st(new _n(.004,8).translate(-.04,.066,.0397),7903100),st(ws(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new v(s,l,o),new v(r,l,o),new v(r,l,a),new v(s,l,a)]);return As("radio","Talkie-walkie",.43,new Qi(i),t,n,.61,.08)}function ug(){return[rS(),oS(),aS(),lS(),cS(),hS(),uS(),dS()]}var fS=[0,1,2,3,4,5,7,8,9,10];function dg(n){ng.forEach(({x:e,z:t},i)=>n(fS[i],new v(e,.8,t)))}function fg(){let n=[["Cube",new Ge(.33,.33,.33),"#b76b50",0,1.35],["Boule",new ni(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ks(.29),"#d8ae53",0,1],["Brique",new Ge(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ge(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new ni(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Oa(t,s),material:new un({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:yo(t.computeBoundingBox()??t.boundingBox.getSize(new v).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of ug()){let s=Oa(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var pg=48,pS=3,mS=128,mg=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),gS=(n,e,t)=>Math.max(e,Math.min(t,n)),xS=()=>structuredClone(mg.shield),Ga=(n,e,t,i)=>Number.isFinite(n)?gS(n,t,i):e;function Th(n){let e=n?.mode==="lathe"?mg.bottle:xS(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=pg?n.points.map(o=>[Ga(o?.[0],0,-1.5,1.5),Ga(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Ga(n?.depth,e.depth,.025,1.5),bevel:Ga(n?.bevel,e.bevel,0,.15),segments:Math.round(Ga(n?.segments,32,pS,mS))}}function gg(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function wh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function yS(n,e,t,i){let s=wh(n,e,t),r=wh(n,e,i),o=wh(t,i,n),a=wh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function _S(n){let e=Th(n),t=e.mode==="lathe"?e.points:gg(e);if(t.length<3||t.length>pg*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&yS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function xg(n){let e=Th(n),t=_S(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([f,d])=>new he(Math.max(0,f),d));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new he(0,s[0].y)),s.at(-1).x>0&&s.push(new he(0,s.at(-1).y)),i=new va(s,e.segments);let r=[],o=i.attributes.position,a=new v,l=new v,c=new v,h=new v,u=i.index.array;for(let f=0;f<u.length;f+=3)a.fromBufferAttribute(o,u[f]),l.fromBufferAttribute(o,u[f+1]),c.fromBufferAttribute(o,u[f+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[f],u[f+1],u[f+2]);i.setIndex(r)}else{let s=gg(e),r=new ji;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Js(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new At(new Float32Array(s*2),2))}return i}var Dd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ha=null,vS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function ur(n){return typeof n=="string"&&vS.has(n.replace(/^custom-model-game-/,""))}function Eh(n){let e=n?.parts;return ur(n?.id)||ur(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>ur(t?.assetId))}function _g(){if(Ha)return Ha;let n=fg(),e=Dd;return Ha=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Ha.set("chrome-sphere",{geometry:new ni(.54,2),material:new un({color:"#c8e6ed",metalness:1,roughness:.16})}),Ha}function Ah(n){return typeof n=="string"&&_g().has(n)}function Ud(n){return _g().get(n)??null}function MS(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function yg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[MS(e,n)]}}function Nd(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>yg(e,t)),yg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var kd="gorilla-lab-models-v1",bo=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),bS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,SS=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Mg=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Od=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),wS=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Wa=(n,e,t,i)=>Number.isFinite(n)?Ce.clamp(n,e,t):i;function Vd(n){return{gravity:Wa(n?.physics?.gravity,0,2.5,1),bounce:Wa(n?.physics?.bounce,0,1.65,1)}}function bg(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Wa(n?.uv?.repeat,.01,100,1),angle:Wa(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Wa(n?.uv?.offset?.[t],-100,100,0))}}var TS=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),ES=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,AS=/^#[a-f\d]{6}$/i;function vg(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Cs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ce.clamp(n[s],t,i):e)}var Bd=new Set(["box","sphere","capsule","convex"]);function CS(n){if(n?.mode==="box")return{mode:"box",center:Cs(n.center,0,-6,6),size:Cs(n.size,.5,.025,12)};let e=Math.round(Ce.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Bd.has(n.shape)?n.shape:"box",center:Cs(n.center,0,-6,6),size:Cs(n.size,.5,.025,12),rotation:Cs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Bd.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function dr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>bo.models||JSON.stringify(n).length>bo.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!Eh(i)).map(i=>{if(typeof i?.id!="string"||!ES.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>bo.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:vg(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...Ah(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(TS).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:CS(i?.hitbox),...i.physics?{physics:Vd(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(s=>!ur(s?.assetId)).map((s,r)=>({name:vg(s?.name,`Pi\xE8ce ${r+1}`),...Number.isInteger(s?.group)&&s.group>0&&s.group<=bo.parts?{group:s.group}:{},shape:s?.shape==="asset"&&Ah(s?.assetId)?"asset":Object.hasOwn(SS,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&Ah(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:Th(s?.profile)}:{},position:Cs(s?.position,0,-3,3),rotation:Cs(s?.rotation,0,-360,360),scale:Cs(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&AS.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(wS,s?.zone)?{zone:s.zone}:{},...Object.hasOwn(Od,s?.finish)?{finish:s.finish}:{},...s?.uv?{uv:bg(s)}:{},surface:Object.hasOwn(Mg,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=bo.textureBytes&&bS.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Sg(n){try{let e=(n??globalThis.localStorage)?.getItem(kd);if(e&&e.length<=bo.fileBytes)return dr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function RS(n){switch(n){case"tetrahedron":return new Ks(Math.sqrt(3)/2);case"sphere":return new si(.5,20,12);case"cylinder":return new Ct(.5,.5,1,20);case"cone":return new Zs(.5,1,20);case"torus":return new Tn(.365,.135,8,24);case"capsule":return new ms(.28,.44,6,16);case"diamond":return new ii(.5);default:return new Ge(1,1,1)}}var wg=Object.keys(Mg),Yn=64,Xa=4,Tg=2,Ui;function Eg(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Ag(){if(Ui)return Ui;let n=Yn*Xa,e=Yn*Tg,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Yn)*Xa+Math.floor(s/Yn),o=Eg(wg[r],s%Yn,i%Yn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ui=new ei(t,n,e),Ui.colorSpace=mt,Ui.magFilter=en,Ui.minFilter=An,Ui.generateMipmaps=!0,Ui.needsUpdate=!0,Ui}var Fd=new Map;function PS(n){if(Fd.has(n))return Fd.get(n);let e=new Uint8Array(Yn*Yn*4);for(let i=0;i<Yn;i++)for(let s=0;s<Yn;s++){let r=Eg(n,s,i),o=(i*Yn+s)*4;e.set([r,r,r,255],o)}let t=new ei(e,Yn,Yn);return t.colorSpace=mt,t.wrapS=t.wrapT=wn,t.magFilter=en,t.minFilter=An,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Fd.set(n,t),t}function Cg(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function IS(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=bg(e),a=Ce.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:f}=n.attributes,d=new v,p=new v;for(let x=0;x<h.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){d.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let _=Math.abs(p.x),M=Math.abs(p.y),y=Math.abs(p.z);_>=M&&_>=y?(g=d.z,m=d.y):M>=y?(g=d.x,m=d.z):(g=d.x,m=d.y)}f.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Ch(n,e=new v(...n.scale)){let t=n.shape==="asset"?Ud(n.assetId):null,i=n.shape==="custom"?xg(n.profile):t?.geometry?.clone()??RS(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Fe(new Float32Array(s.attributes.position.count*2),2)),n.uv&&IS(s,n,e);let r=n.rotation.map(Ce.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new ke(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=wg.indexOf(n.surface),u=h%Xa,f=Math.floor(h/Xa),d=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&d?(l[p*3]=d.getX(p)*o.r,l[p*3+1]=d.getY(p)*o.g,l[p*3+2]=d.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(u+.05+c.getX(p)*.9)/Xa,(f+.05+c.getY(p)*.9)/Tg);return s.setAttribute("color",new At(l,3)),s}function LS(n){let e=n?.shape==="asset"?Ud(n.assetId):null,t=Od[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new ri().load(n.texture);a.colorSpace=mt,a.wrapS=a.wrapT=wn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=wn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new ke(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??Od.original;if(!n?.texture)return new un({vertexColors:!0,map:n?.uv?PS(n.surface):Ag(),roughness:i,metalness:s});let r=new ri().load(n.texture);return r.colorSpace=mt,r.wrapS=r.wrapT=wn,new un({vertexColors:!0,map:r,roughness:i,metalness:s})}function Rh(n){return n?.parts?.some(Cg)?n.parts.map(LS):new un({vertexColors:!0,map:Ag(),roughness:.68})}function Ph(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ui&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function zd(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Ch(s);let r=new qt(...s.rotation.map(Ce.degToRad),"ZYX"),o=new v(...s.scale).multiply(new v(...[0,1,2].map(a=>new v().setComponent(a,1).applyEuler(r).multiply(e).length())));return Ch(s,o)}),i=yh(t,n.some(Cg));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function Ih(n,e=null){let t=zd(n.parts),i=t.boundingBox.getSize(new v).max(new v(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=zd(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function qa(n){let e=new sn;for(let t of n.parts??[]){let i=Ch(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new v,new v(1,1,1)),e}function So(n){return qa(n).getSize(new v)}function Rg(n){let e=qa(n),t=e.getCenter(new v),i=e.getSize(new v),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Bd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ce.clamp(s.precision,8,96):48,center:r?new v(...s.center):t,size:r?new v(...s.size):i,rotation:r?new v(...s.rotation??[0,0,0]):new v,boundsCenter:t,boundsSize:i}}function DS(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new v().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function US(n,e=null){let t=Rg(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new v(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,f)=>f!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new ms(l,c,Math.max(2,Math.round(i/8)),i):new si(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=zd(n.parts),r=DS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new Qi(r),a=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new Ge(1,1,1)}function Pg(n,e=null){let t=Rg(n),i=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5)),s=e?new v(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=US(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Ce.degToRad(t.rotation.x)),a.rotateY(Ce.degToRad(t.rotation.y)),a.rotateZ(Ce.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Ig(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=qa(n),i=t.getCenter(new v),s=t.getSize(new v).max(new v(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new v(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Ch(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new v).sub(i).multiply(r),size:l.getSize(new v).multiply(r).max(new v(.01,.01,.01))};return a.dispose(),[c]})}var Ug=256,Ng=1/2.6**2,Dh=1e4,Si=1e4,Gd=10,Hd=10,NS=256,FS=16,wo=24,Lg=new WeakMap,Mi=Ce.clamp,bi=Ce.lerp,Za=n=>n*n*(3-2*n);function St(n,e,t,i){return Number.isFinite(n)?Mi(n,e,t):i}function Fg(n){if(!n)return null;let e=dr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var OS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Og(n,e=FS){return Math.round(St(n,1,Ug,e))}function BS(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return St(n[e+"Density"],0,Si,0);let r=St(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return St(o/t,0,Si,0)}var zS=["grass","shrub","model"],kS=["keep","fit","stretch"],VS=/^#[a-f\d]{6}$/i,GS=10;function HS(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(St(n.minHeight,-300,300,-300),St(n.maxHeight,-300,300,300)),[s,r]=e(St(n.minX,0,100,0),St(n.maxX,0,100,100)),[o,a]=e(St(n.minZ,0,100,0),St(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:St(n.maxSlope,0,90,90),yaw:St(n.yaw,-360,360,0),yawVariation:St(n.yawVariation,0,360,360)}}function WS(n){return n?{x:St(n.x,-256,256,0),z:St(n.z,-256,256,0),radius:St(n.radius,.1,512,5),blend:St(n.blend,0,1,.5)}:null}function ja(n={}){let e=Fg(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,Gd).map(r=>VS.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:St(n.density,0,Si,1),colors:s,seed:Math.round(St(n.seed,0,2147483647,1)),size:St(n.size,.05,Si,1),fit:kS.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:St(n.variation,0,Hd,0),...n.scatter?{scatter:HS(n.scatter)}:{}}}function XS(n,e){return Array.isArray(n.rules)?n.rules.slice(0,Dh).filter(t=>t&&typeof t=="object"&&zS.includes(t.kind)).filter(t=>t.kind!=="model"||Fg(t.model)).map(ja):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=BS(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[ja({kind:t,model:a,density:o,seed:n.seed,size:St(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Rs(n={},e=1){let t=Og(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(St(n?.seed,0,2147483647,1)),amplitude:St(n?.amplitude,0,12,0),frequency:St(n?.frequency,.015,2,.12),octaves:Math.round(St(n?.octaves,1,GS,3)),roughness:St(n?.roughness,.15,.95,.42),ridge:St(n?.ridge,0,1,0),edgeFade:St(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:WS(n.reliefArea)}:{},rules:XS(n??{},e),textureDensity:St(n?.textureDensity,1e-4,NS,Ng),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&OS.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>St(s,-wo,wo,0)):null}}function Bg(n,e,t,i){let s=Mi(t,0,e),r=Mi(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,f=n[u],d=n[u+1],p=n[u+h],x=n[u+h+1];return l+c<=1?f+(d-f)*l+(p-f)*c:x+(p-x)*(1-l)+(d-x)*(1-c)}function Wd(n,e){let t=Og(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>Bg(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function ai(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Lh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Za(n-i),o=Za(e-s),a=bi(ai(i,s,t),ai(i+1,s,t),r),l=bi(ai(i,s+1,t),ai(i+1,s+1,t),r);return 2*bi(a,l,o)-1}function To(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d}=i,p=Lg.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===f;if(x&&p.heights===d)return p;let g=s+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let y=0;y<=s;y++)for(let E=0;E<=s;E++){let C=(E/s-.5)*e,I=(y/s-.5)*t,R=1;if(f){let V=Math.hypot(C-f.x,I-f.z);if(V>=f.radius)continue;f.blend&&(R=Za(Math.min(1,(f.radius-V)/(f.radius*f.blend))))}let S=C*a,b=I*a,L=0,U=1,z=0;for(let V=0;V<l;V++){let te=Lh(S*2**V,b*2**V,r+V*13);L+=U*bi(te,1-2*Math.abs(te),h),z+=U,U*=c}let X=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(y/s-.5))*2)),u*2):1,W=l===3&&c===.42&&h===0&&u===0;m[y*g+E]=R*(W?o*(.62*Lh(S,b,r)+.26*Lh(S*2.03,b*2.03,r+13)+.12*Lh(S*4.13,b*4.13,r+37)):o*L/z*X)}let _=d?m.map((y,E)=>y+d[E]):m,M={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:f,heights:d,procedural:m,surface:_};return Lg.set(n,M),M}function Uh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Bg(o,i,(e/s+.5)*i,(t/r+.5)*i)}function Eo(n=0){return(Math.round(n/90)%4+4)%4*90}function zg(n){let e=Eo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function kg(n,e,t){let{cos:i,sin:s}=zg(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Ya(n){return Eo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function Dg(n,e,t){return n.y+Uh(To(n),...kg(n,e,t))}var qS=.25;function Xd(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Ya(n),s=Ya(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let f=e[r]-u*s[a]/2,d=f-(n[r]+u*i[a]/2);Math.abs(d)<=qS&&(!t||Math.abs(d)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:f,delta:d})}}return t}function Vg(n,e,t=1.5){let i=Xd(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:f}=i,d=n.terrain;if(Math.abs(Ya(n)[a]-Ya(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let R=e.terrain.detail,S=Math.ceil(d.detail/R)*R;S<=Ug&&(d=Wd(d,S))}let p={...n,[s]:n[s]+f,terrain:d},{detail:x,procedural:g,heights:m,surface:_}=To(p),M=m?.slice()??Array((x+1)**2).fill(0),y=Math.max(t,Ya(p)[o]/x),{cos:E,sin:C}=zg(p),I=!1;for(let R=0;R<=x;R++)for(let S=0;S<=x;S++){let b=(S/x-.5)*p.w,L=(R/x-.5)*p.d,U=p.x+E*b+C*L,z=p.z-C*b+E*L,X=r==="x"?U:z;if(X<l-1e-6||X>c+1e-6)continue;let W=Math.max(0,h*(u-(s==="x"?U:z)));if(W>y)continue;let V=R*(x+1)+S,te=s==="x"?Dg(e,u,z):Dg(e,U,u),q=bi(_[V],te-p.y,Za(1-W/y))-g[V];M[V]=Mi(q,-wo,wo),I||=M[V]!==q}return{piece:{...p,terrain:{...d,heights:M}},clipped:I}}function YS(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(h+=s[f*r+d],u++);return h/u}function Gg(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=To(n),{detail:l,w:c,d:h,surface:u,procedural:f}=a,[d,p]=kg(n,e,t),x=Mi(d,-c/2,c/2),g=Mi(p,-h/2,h/2);if((d-x)**2+(p-g)**2>=s**2)return!1;let m=(d/c+.5)*l,_=(p/h+.5)*l,M=c/l,y=h/l,E=Math.max(0,Math.ceil(m-s/M)),C=Math.min(l,Math.floor(m+s/M)),I=Math.max(0,Math.ceil(_-s/y)),R=Math.min(l,Math.floor(_+s/y)),S=Number.isFinite(o)?o-n.y:Uh(a,d,p),b=l+1,L=a.heights?.slice()??new Array(b**2).fill(0),U=!1,z=!1;function X(W,V,te){U=!0;let q=V*b+W,se=L[q],fe;if(i==="raise"||i==="lower")fe=se+(i==="raise"?1:-1)*r*te;else{let be=i==="flatten"?S:YS(a,W,V);fe=bi(u[q],be,Math.min(1,r)*te)-f[q]}fe=Mi(fe,-wo,wo),!(Math.abs(fe-se)<1e-7)&&(L[q]=fe,z=!0)}for(let W=I;W<=R;W++)for(let V=E;V<=C;V++){let te=Math.hypot((V-m)*M,(W-_)*y)/s;te<1&&X(V,W,Za(1-te))}if(!U){let W=Mi(m,0,l),V=Mi(_,0,l),te=Math.min(l-1,Math.floor(W)),q=Math.min(l-1,Math.floor(V)),se=W-te,fe=V-q,be=se+fe<=1,Ie=be?1-se-fe:se+fe-1,He=be?se:1-fe,je=be?fe:1-se;if(Ie>=Math.max(He,je)){let et=+!be;X(te+et,q+et,1)}else He>=je?X(te+1,q,1):X(te,q+1,1)}return z&&(n.terrain.heights=L),z}function qd(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(i.textureDensity??Ng),u=0;for(let d=0;d<=s;d++)for(let p=0;p<=s;p++){let x=d*r+p;o[3*x]=(p/s-.5)*e,o[3*x+2]=(d/s-.5)*t,a[2*x]=p/s*e*h,a[2*x+1]=(1-d/s)*t*h,d<s&&p<s&&(c.set([x,x+r,x+1,x+r+1,x+1,x+r],u),u+=6)}let f=new at;return f.setAttribute("position",new At(o,3).setUsage(Na)),f.setAttribute("uv",new At(a,2)),f.setIndex(new At(c,1)),ZS(f,n),f}function ZS(n,e){let{surface:t}=To(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function jS(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=n,l=Mi((e/r+.5)*s,0,s),c=Mi((t/o+.5)*s,0,s),h=Math.min(s-1,Math.floor(l)),u=Math.min(s-1,Math.floor(c)),f=s+1,d=u*f+h,p=l-h+c-u<=1,x=p?a[d+1]-a[d]:a[d+f+1]-a[d+f],g=p?a[d+f]-a[d]:a[d+f+1]-a[d+1];return i.set(-x*s/r,1,-g*s/o).normalize()}function JS(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new at;return e.setAttribute("position",new Fe(n,3)),e.setAttribute("uv",new Fe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function KS(){return new ni(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function $S(n,e,t){if(e==="stretch")return new v().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function QS(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let s=(i.minX/100-.5)*n.w,r=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(r-s)*(a-o),c=[],h=new v;if(!l||!e.density)return{requested:0,positions:c,area:l};let u=Math.cos(Ce.degToRad(i.maxSlope)),f=i.maxSlope<90,d=i.minHeight>-300||i.maxHeight<300,p=(M,y)=>{if(d){let E=n.y+Uh(t,M,y);if(E<i.minHeight||E>i.maxHeight)return!1}return!f||jS(t,M,y,h).y>=u-1e-7},x=1;if(f||d){let M=0,y=32;for(let E=0;E<y;E++)for(let C=0;C<y;C++)p(bi(s,r,(C+.5)/y),bi(o,a,(E+.5)/y))&&M++;x=M/y**2}let g=Math.round(l*x*e.density),m=Math.min(g,Si),_=f||d?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let M=0;M<_&&c.length<m;M++){let y=bi(s,r,ai(M,27,e.seed)),E=bi(o,a,ai(M,27,e.seed+1));p(y,E)&&c.push([y,E])}return{requested:g,positions:c,area:l*x}}function Hg(n){let e=new xn,t=To(n);e.userData.distribution=[];for(let[i,s]of(n.terrain.rules??[]).entries()){let{requested:r,positions:o,area:a}=QS(n,s,t),l=o?o.length:Math.min(r,Si);if(e.userData.distribution[i]={requested:r,count:l,area:a},!l)continue;let c=s.kind==="grass",h=s.model?$S(So(s.model),s.fit,s.size):null,u=s.model?Ih(s.model,h):c?JS():KS();h?u.scale(...h):u.scale(s.size,s.size,s.size),u.computeBoundingBox(),u.translate(0,-u.boundingBox.min.y,0),u.computeBoundingBox();let f=s.model?Rh(s.model):new Wn({color:"#ffffff",side:c?tn:mi,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new ri().load(n.terrain.grassTexture);g.colorSpace=mt,f.map=g,f.userData.ownTexture=!0}let d=new la(u,f,l);d.name=s.kind,d.userData={ruleIndex:i,seed:s.seed,variation:s.variation,collidable:s.collidable,requestedCount:r,positions:o,scatter:s.scatter},d.instanceMatrix.setUsage(Na),d.receiveShadow=!0;let p=s.colors.map(g=>new ke(g)),x=new ke;for(let g=0;g<l;g++){let m=ai(g,41,s.seed)*(p.length-1),_=Math.floor(m);d.setColorAt(g,x.copy(p[_]).lerp(p[_+1],m-_))}e.add(d)}return e1(e,n),e}function e1(n,e){let t=To(e),i=new zt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(ai(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(ai(c,27,r+1)-.5)*.96*e.d;i.position.set(h,Uh(t,h,u),u),i.rotation.y=l?Ce.degToRad(l.yaw+ai(c,27,r+2)*l.yawVariation):ai(c,27,r+2)*Math.PI*2,i.scale.setScalar(bi(Math.max(.05,1-o),1+o,ai(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Wg(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Ph(e.material),e.dispose();n.clear(),n.removeFromParent()}}var qg=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Yd=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Ja={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},t1=8e6,Ao=512,Ni=1024,ts=512,Zt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Xg=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function an(n){if(typeof n=="string"){if(n.length>t1)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ao)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ao+" pi\xE8ces.");let e=n.spawn??{},t=hl(n.environment),i=n.pieces.filter(s=>!ur(s?.sceneryId)&&!Eh(s?.model));if(!i.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Xg(n.name,56,"Ma map"),worldSize:Zt(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:Zt(e.x,-Ni,Ni,0),y:Zt(e.y,-256,256,.06),z:Zt(e.z,-Ni,Ni,3),yaw:Zt(e.yaw,-360,360,0)},pieces:i.map((s,r)=>{if(!s||typeof s!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let o=Zt(s.w,.05,ts,3),a=Zt(s.d,.05,ts,3),l=s.terrain&&typeof s.terrain=="object"?Rs(s.terrain,o*a):null,c=s.model?dr({version:1,models:[s.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Xg(s.name,36,"Pi\xE8ce "+(r+1)),...typeof s.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(s.sceneryId)?{sceneryId:s.sceneryId}:{},x:Zt(s.x,-Ni,Ni,0),y:Zt(s.y,-256,256,0),z:Zt(s.z,-Ni,Ni,0),w:o,h:Zt(s.h,.05,256,.5),d:a,pitch:l?0:Zt(s.pitch,-180,180,0),yaw:l?Eo(Zt(s.yaw,-360,360,0)):Zt(s.yaw,-360,360,0),roll:l?0:Zt(s.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(s.primitive)?s.primitive:"box",uvScale:Zt(s.uvScale,.05,100,1),uvOffsetX:Zt(s.uvOffsetX,-100,100,0),uvOffsetY:Zt(s.uvOffsetY,-100,100,0),uvRotation:Zt(s.uvRotation,-360,360,0),material:Math.round(Zt(s.material,0,16,0)),color:typeof s.color=="string"&&/^#[a-f0-9]{6}$/i.test(s.color)?s.color:"#ffffff",grip:Zt(s.grip,0,1.5,.8),gravity:Zt(s.gravity,.05,2.5,1),bounce:Zt(s.bounce,0,1.65,1),solid:s.solid!==!1,texture:typeof s.texture=="string"&&s.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(s.texture)?s.texture:null}})}}function Yg(n){return an({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...eg,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new qt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Zg(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return an({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,Ja.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Ja.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Ja.rubber)]})}function Zn(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function jg(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new qt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new v(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=d=>Math.round(d/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*f,h+=s.y*f,u+=s.z*f,![c,h,u].every(Number.isFinite)||Math.abs(c)>Ni||Math.abs(u)>Ni||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var Jg="gorilla-lab-custom-map-v1";function Kg(n){let e=new Blob([JSON.stringify(an(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var n1=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Zd(){return Zn({name:"Miroir",sceneryId:"lab-mirror",x:bs.x,y:bs.y,z:bs.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function $g(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&n1.has(e)):!1:!0}var jd=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Jd=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},e0=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",Ka=(n,e,t)=>Math.min(t,Math.max(e,n)),i1=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Kd=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function s1(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var t0="gorilla-lab-texture-shelf-v1";function r1(){try{let n=JSON.parse(localStorage.getItem(t0)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function Nh(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=e0(t),r.fillRect(0,0,o,o);let a=s1(s),l=o/Math.max(4,2*Math.round(4*i)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(i),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<u;f++){let d=a()*o,p=a()*o,x=a(),g=a(),m=a();Kd(r,_=>{if(e==="rock"){let M=(4+x*22)*h;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let E=y*Math.PI/3+g,C=M*(.63+.3*Math.cos(E*2+g)+.25);_.lineTo(d+Math.cos(E)*C,p+Math.sin(E)*C*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let M=(1+x*x*12)*h,y=_.createRadialGradient(d,p,0,d,p,M);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(d-M,p-M,M*2,M*2)}else if(e==="grass"||e==="wood"){let M=e==="grass",y=(M?5+x*25:7+x*110)*h;_.strokeStyle=M?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*h,_.beginPath(),_.moveTo(d,p),M?_.quadraticCurveTo(d+y*(g-.5)*.55,p-y*.58,d+y*(g-.6),p-y):_.quadraticCurveTo(d+y*.5,p+10*(g-.5),d+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let M=(e==="sand"?.6+x*1.6:1+x*5)*h;_.fillRect(d,p,M,M*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let f=0;f<h;f++)Kd(r,d=>{d.beginPath(),d.arc(f*l+l/2,u*l+l/2,Ka(l*.11,2,13),0,Math.PI*2),d.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let f=0;f<=o;f+=l){let d=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(f+d,u),r.lineTo(f+d,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var o1=`
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
`;function a1(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=o1,document.head.append(n)}async function Qg(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function $d({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){a1();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
          <label>G\xE9n\xE9rateur<select data-field="pattern"></select></label>
          <div class="texture-setting-row">
            <label>Couleur de fond<input type="color" data-field="base" value="#687a86"></label>
            <label>R\xE9p\xE9tition<input type="range" min=".5" max="5" value="1" step=".25" data-field="scale"></label>
          </div>
          <div class="texture-setting-row">
            <label>Graine<input type="number" min="0" max="2147483647" step="1" data-field="seed" value="23"></label>
            <label>R\xE9solution \xE0 l\u2019application<select data-field="resolution"><option value="128">128 \xD7 128</option><option value="256">256 \xD7 256</option><option value="512" selected>512 \xD7 512</option></select></label>
          </div>
          <button data-cmd="generate">G\xE9n\xE9rer l\u2019aper\xE7u</button>
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
  </section>`,document.body.append(o);let a=F=>o.querySelector(F),l=a(".texture-canvas"),c=a(".texture-tile"),h=Jd(),u=Jd(),f={pattern:jd.some(([F])=>F===i)?i:"grain",base:e0(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},d=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,M=!1,y=null,E="paint",C=null,I=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...jd.map(([F,O])=>new Option(O,F))),a("[data-field=base]").value=f.base,a("[data-field=pattern]").value=f.pattern;for(let F of["pattern","base","scale","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+F+"]").addEventListener("input",O=>{let Q=O.target.value;f[F]=F==="seed"?Math.trunc(Ka(Number(Q)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(F)?Number(Q):Q});let R=F=>{a("[data-status]").textContent=F},S=()=>{d.clearRect(0,0,512,512),d.drawImage(h,0,0),d.drawImage(u,0,0);let F=c.getContext("2d");F.clearRect(0,0,256,128);for(let O=0;O<2;O++)for(let Q=0;Q<4;Q++)F.drawImage(l,Q*64,O*64,64,64)},b=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512)}),L=F=>{p.putImageData(F.base,0,0),x.putImageData(F.top,0,0),S()},U=()=>{I=null,g.push(b()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},z=(F,O)=>{F.length&&(I=null,O.push(b()),L(F.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},X=()=>{_&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(U(),Nh(h,f),x.clearRect(0,0,512,512),S(),R("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},W=F=>{let O=l.getBoundingClientRect();return{x:(F.clientX-O.left)/O.width*512,y:(F.clientY-O.top)/O.height*512}},V=F=>{let O=f.size/2,Q=f.opacity;Kd(x,ee=>{ee.save(),E==="erase"&&(ee.globalCompositeOperation="destination-out"),ee.globalAlpha=Q;let ze=Ka(f.hardness,.05,1);if(E==="stamp")ee.fillStyle=f.ink,ee.translate(F.x,F.y),ee.rotate(Math.PI/4),ee.fillRect(-O*.8,-O*.8,O*1.6,O*1.6);else{let ht=ee.createRadialGradient(F.x,F.y,O*ze*.85,F.x,F.y,O);if(E==="erase")ht.addColorStop(0,"rgba(0,0,0,1)"),ht.addColorStop(1,"rgba(0,0,0,0)");else{let D=f.ink.match(/[\da-f]{2}/gi).map(ce=>parseInt(ce,16)).join(",");ht.addColorStop(0,"rgba("+D+",1)"),ht.addColorStop(1,"rgba("+D+",0)")}ee.fillStyle=ht,ee.beginPath(),ee.arc(F.x,F.y,O,0,2*Math.PI),ee.fill()}ee.restore()})},te=(F,O)=>{let Q=Math.hypot(O.x-F.x,O.y-F.y),ee=Math.max(1,Math.ceil(Q/Math.max(2,f.size*.18)));for(let ze=1;ze<=ee;ze++)V({x:F.x+(O.x-F.x)*ze/ee,y:F.y+(O.y-F.y)*ze/ee})},q=F=>{let O=d.getImageData(Math.floor(Ka(F.x,0,511)),Math.floor(Ka(F.y,0,511)),1,1).data;f.ink="#"+[...O].slice(0,3).map(Q=>Q.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=f.ink,R("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",F=>{if(F.button!==0||M)return;let O=W(F);if(E==="pick"){q(O);return}F.preventDefault(),U(),M=!0,y=F.pointerId,C=O,l.setPointerCapture(F.pointerId),V(O),S()}),l.addEventListener("pointermove",F=>{if(!M||F.pointerId!==y)return;F.preventDefault();let O=W(F);E==="stamp"?V(O):te(C,O),C=O,S()});let se=F=>{F.pointerId===y&&(M=!1,y=null,C=null,l.hasPointerCapture(F.pointerId)&&l.releasePointerCapture(F.pointerId))};l.addEventListener("pointerup",se),l.addEventListener("pointercancel",se);for(let F of o.querySelectorAll("[data-tool]"))F.onclick=()=>{E=F.dataset.tool,o.querySelectorAll("[data-tool]").forEach(O=>O.setAttribute("aria-pressed",String(O===F)))};a("[data-cmd=generate]").onclick=X,a("[data-cmd=undo]").onclick=()=>z(g,m),a("[data-cmd=redo]").onclick=()=>z(m,g),a("[data-cmd=export]").onclick=()=>i1(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async F=>{let O=F.target.files?.[0];if(F.target.value="",!!O)try{if(!["image/png","image/jpeg","image/webp"].includes(O.type))throw Error("Image PNG / JPG / WebP uniquement.");if(O.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Q=await createImageBitmap(O);U(),p.clearRect(0,0,512,512),p.drawImage(Q,0,0,512,512),Q.close(),x.clearRect(0,0,512,512),S(),R("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Q){R(Q.message)}});let fe=F=>{!F&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",be,!0),o.remove())},be=F=>{if(F.key==="Escape"){F.preventDefault(),fe(!1);return}(F.ctrlKey||F.metaKey)&&!F.target.closest("input,select")&&F.key.toLowerCase()==="z"&&(F.preventDefault(),F.stopImmediatePropagation(),F.shiftKey?z(m,g):z(g,m))};window.addEventListener("keydown",be,!0),a("[data-cmd=close]").onclick=()=>fe(!1),a("[data-cmd=cancel]").onclick=()=>fe(!1);let Ie=()=>{if(I?.recipe.resolution===f.resolution&&I.data.length<=s)return I.data;for(let F of[f.resolution,256,128].filter((O,Q,ee)=>O<=f.resolution&&ee.indexOf(O)===Q)){let O=document.createElement("canvas");O.width=O.height=F,O.getContext("2d").drawImage(l,0,0,F,F);for(let Q of[.85,.72,.58]){let ee=O.toDataURL("image/webp",Q);if(ee.length<=s)return ee}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},He=r1(),je=a("[data-field=shelf]");function et(F=""){je.replaceChildren(new Option("Choisir une texture",""),...He.map(Q=>new Option(Q.name,Q.id))),je.value=F;let O=!!je.value;a("[data-cmd=shelf-load]").disabled=!O,a("[data-cmd=shelf-remove]").disabled=!O}function re(F,O){try{localStorage.setItem(t0,JSON.stringify(F))}catch{return R("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return He.splice(0,He.length,...F),et(O),!0}return je.onchange=()=>et(je.value),a("[data-cmd=shelf-save]").onclick=()=>{let F=jd.find(([Q])=>Q===f.pattern)?.[1]??"Texture",O=prompt("Nom de la texture",F)?.trim().slice(0,50);if(O)try{let Q={id:crypto.randomUUID(),name:O,data:Ie()},{pattern:ee,base:ze,scale:ht,seed:D,resolution:ce}=f;Q.recipe={pattern:ee,base:ze,scale:ht,seed:D,resolution:ce},re([...He,Q],Q.id)&&R("Texture disponible dans les deux ateliers.")}catch(Q){R(Q.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let F=He.find(O=>O.id===je.value);if(!(!F||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let O=Jd();await Qg(F.data,O),U(),p.clearRect(0,0,512,512),p.drawImage(O,0,0),x.clearRect(0,0,512,512),Object.assign(f,F.recipe),I=F;for(let Q of["pattern","base","scale","seed","resolution"])a("[data-field="+Q+"]").value=f[Q];S(),R("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(O){R(O.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{re(He.filter(F=>F.id!==je.value),"")&&R("Texture retir\xE9e de la biblioth\xE8que.")},et(),a("[data-cmd=apply]").onclick=async()=>{let F=a("[data-cmd=apply]");F.disabled=!0;try{let O=Ie();await r(O),_=!1,fe(!0)}catch(O){R(O.message||"Impossible d\u2019appliquer la texture.")}finally{F.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Nh(h,f),S(),n&&Qg(n,h).then(S).catch(()=>R("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>fe(!1)}}var Qd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],l1=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"],c1=["rock","soil","grass","sand","wood","tiles"];function n0(n,e){n=Math.max(0,Math.min(Qd.length-1,n|0));let t=document.createElement("canvas");return t.width=t.height=512,Nh(t,{pattern:c1[n],base:e??l1[n],seed:(n+45)*31337}),t}var fr=new tr,Mn=new v,Ps=new v,kt=new pt,i0={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},ef={type:"change"},s0={type:"mouseDown",mode:null},r0={type:"mouseUp",mode:null},o0={type:"objectChange"},kh=class extends nr{constructor(e,t=null){super(void 0,t);let i=new nf(this);this._root=i;let s=new sf;this._gizmo=s,i.add(s);let r=new rf;this._plane=r,i.add(r);let o=this;function a(M,y){let E=y;Object.defineProperty(o,M,{get:function(){return E!==void 0?E:y},set:function(C){E!==C&&(E=C,r[M]=C,s[M]=C,o.dispatchEvent({type:M+"-changed",value:C}),o.dispatchEvent(ef))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new v,c=new v,h=new pt,u=new pt,f=new v,d=new pt,p=new v,x=new v,g=new v,m=0,_=new v;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",f),a("cameraQuaternion",d),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new pt,this._parentQuaternionInv=new pt,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new pt,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new pt,this._scaleStart=new v,this._getPointer=h1.bind(this),this._onPointerDown=d1.bind(this),this._onPointerHover=u1.bind(this),this._onPointerMove=f1.bind(this),this._onPointerUp=p1.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fr.setFromCamera(e,this.camera);let t=tf(this._gizmo.picker[this.mode],fr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fr.setFromCamera(e,this.camera);let t=tf(this._plane,fr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,s0.mode=this.mode,this.dispatchEvent(s0)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fr.setFromCamera(e,this.camera);let o=tf(this._plane,fr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(kt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Mn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Mn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ps.set(a,a,a)}else Mn.copy(this.pointStart),Ps.copy(this.pointEnd),Mn.applyQuaternion(this._worldQuaternionInv),Ps.applyQuaternion(this._worldQuaternionInv),Ps.divide(Mn),t.search("X")===-1&&(Ps.x=1),t.search("Y")===-1&&(Ps.y=1),t.search("Z")===-1&&(Ps.z=1);s.scale.copy(this._scaleStart).multiply(Ps),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Mn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Mn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(i0[t]),Mn.copy(i0[t]),r==="local"&&Mn.applyQuaternion(this.worldQuaternion),Mn.cross(this.eye),Mn.length()===0?l=!0:this.rotationAngle=this._offset.dot(Mn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ef),this.dispatchEvent(o0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(r0.mode=this.mode,this.dispatchEvent(r0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ef),this.dispatchEvent(o0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function h1(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function u1(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function d1(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function f1(n){this.enabled&&this.pointerMove(this._getPointer(n))}function p1(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function tf(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var Fh=new qt,Ut=new v(0,1,0),a0=new v(0,0,0),l0=new ft,Oh=new pt,zh=new pt,Fi=new v,c0=new ft,el=new v(1,0,0),pr=new v(0,1,0),tl=new v(0,0,1),Bh=new v,$a=new v,Qa=new v,nf=class extends zt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},sf=class extends zt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Jt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let d=e.clone();d.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};let x=new Ct(0,.04,.1,12);x.translate(0,.05,0);let g=new Ge(.08,.08,.08);g.translate(0,.04,0);let m=new at;m.setAttribute("position",new Fe([0,0,0,1,0,0],3));let _=new Ct(.0075,.0075,.5,3);_.translate(0,.25,0);function M(W,V){let te=new Tn(W,.0075,3,64,V*Math.PI*2);return te.rotateY(Math.PI/2),te.rotateX(Math.PI/2),te}function y(){let W=new at;return W.setAttribute("position",new Fe([0,0,0,1,1,1],3)),W}let E={X:[[new pe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(x,o),[0,.5,0]],[new pe(x,o),[0,-.5,0],[Math.PI,0,0]],[new pe(_,o)]],Z:[[new pe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new ii(.1,0),u),[0,0,0]]],XY:[[new pe(new Ge(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pe(new Ge(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ge(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new pe(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ct(.2,0,.6,4),i),[0,.3,0]],[new pe(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new ii(.2,0),i)]],XY:[[new pe(new Ge(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ge(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ge(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new pe(new ii(.01,2),s),null,null,null,"helper"]],END:[[new pe(new ii(.01,2),s),null,null,null,"helper"]],DELTA:[[new Dn(y(),s),null,null,null,"helper"]],X:[[new Dn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Dn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Dn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R={XYZE:[[new pe(M(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new pe(M(.5,.5),r)]],Y:[[new pe(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pe(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pe(M(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Dn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new pe(new si(.25,10,8),i)]],X:[[new pe(new Tn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new Tn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new Tn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new Tn(.75,.1,2,24),i)]]},L={X:[[new pe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]],[new pe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(g,o),[0,.5,0]],[new pe(_,o)],[new pe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(_,a),[0,0,0],[Math.PI/2,0,0]],[new pe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new Ge(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pe(new Ge(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ge(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ge(.1,.1,.1),u)]]},U={X:[[new pe(new Ct(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ct(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ct(.2,0,.6,4),i),[0,.3,0]],[new pe(new Ct(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ct(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ct(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new Ge(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ge(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ge(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ge(.2,.2,.2),i),[0,0,0]]]},z={X:[[new Dn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Dn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Dn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function X(W){let V=new zt;for(let te in W)for(let q=W[te].length;q--;){let se=W[te][q][0].clone(),fe=W[te][q][1],be=W[te][q][2],Ie=W[te][q][3],He=W[te][q][4];se.name=te,se.tag=He,fe&&se.position.set(fe[0],fe[1],fe[2]),be&&se.rotation.set(be[0],be[1],be[2]),Ie&&se.scale.set(Ie[0],Ie[1],Ie[2]),se.updateMatrix();let je=se.geometry.clone();je.applyMatrix4(se.matrix),se.geometry=je,se.renderOrder=1/0,se.position.set(0,0,0),se.rotation.set(0,0,0),se.scale.set(1,1,1),V.add(se)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=X(E)),this.add(this.gizmo.rotate=X(R)),this.add(this.gizmo.scale=X(L)),this.add(this.picker.translate=X(C)),this.add(this.picker.rotate=X(b)),this.add(this.picker.scale=X(U)),this.add(this.helper.translate=X(I)),this.add(this.helper.rotate=X(S)),this.add(this.helper.scale=X(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:zh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(kt.setFromEuler(Fh.set(0,0,0)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(el).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(kt.setFromEuler(Fh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(kt.setFromEuler(Fh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(kt),Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(kt.setFromEuler(Fh.set(0,Math.PI/2,0)),Ut.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(l0.lookAt(a0,Ut,pr)),o.quaternion.multiply(kt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Mn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Mn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Mn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ut.copy(el).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ut.copy(tl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ut.copy(el).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ut.copy(pr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Oh.copy(i),Ut.copy(this.eye).applyQuaternion(kt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(l0.lookAt(this.eye,a0,pr)),o.name==="X"&&(kt.setFromAxisAngle(el,Math.atan2(-Ut.y,Ut.z)),kt.multiplyQuaternions(Oh,kt),o.quaternion.copy(kt)),o.name==="Y"&&(kt.setFromAxisAngle(pr,Math.atan2(Ut.x,Ut.z)),kt.multiplyQuaternions(Oh,kt),o.quaternion.copy(kt)),o.name==="Z"&&(kt.setFromAxisAngle(tl,Math.atan2(Ut.y,Ut.x)),kt.multiplyQuaternions(Oh,kt),o.quaternion.copy(kt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},rf=class extends pe{constructor(){super(new dn(1e5,1e5,2,2),new Jt({visible:!1,wireframe:!0,side:tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Bh.copy(el).applyQuaternion(t==="local"?this.worldQuaternion:zh),$a.copy(pr).applyQuaternion(t==="local"?this.worldQuaternion:zh),Qa.copy(tl).applyQuaternion(t==="local"?this.worldQuaternion:zh),Ut.copy($a),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ut.copy(this.eye).cross(Bh),Fi.copy(Bh).cross(Ut);break;case"Y":Ut.copy(this.eye).cross($a),Fi.copy($a).cross(Ut);break;case"Z":Ut.copy(this.eye).cross(Qa),Fi.copy(Qa).cross(Ut);break;case"XY":Fi.copy(Qa);break;case"YZ":Fi.copy(Bh);break;case"XZ":Ut.copy(Qa),Fi.copy($a);break;case"XYZ":case"E":Fi.set(0,0,0);break}break;case"rotate":default:Fi.set(0,0,0)}Fi.length()===0?this.quaternion.copy(this.cameraQuaternion):(c0.lookAt(Mn.set(0,0,0),Fi,Ut),this.quaternion.setFromRotationMatrix(c0)),super.updateMatrixWorld(e)}};function h0(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function u0(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new v(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new qt(Ce.degToRad(n.pitch),Ce.degToRad(n.yaw),Ce.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var d0={type:"change"},af={type:"start"},p0={type:"end"},Vh=new ps,f0=new gn,m1=Math.cos(70*Ce.DEG2RAD),ln=new v,Nn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},of=1e-6,Gh=class extends nr{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new pt,this._lastTargetPosition=new v,this._quat=new pt().setFromUnitVectors(e.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new v,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new v,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x1.bind(this),this._onPointerDown=g1.bind(this),this._onPointerUp=y1.bind(this),this._onContextMenu=T1.bind(this),this._onMouseWheel=M1.bind(this),this._onKeyDown=b1.bind(this),this._onTouchStart=S1.bind(this),this._onTouchMove=w1.bind(this),this._onMouseDown=_1.bind(this),this._onMouseMove=v1.bind(this),this._interceptControlDown=E1.bind(this),this._interceptControlUp=A1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(d0),this.update(),this.state=It.NONE}update(e=null){let t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new v(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new v(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vh.origin.copy(this.object.position),Vh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vh.direction))<m1?this.object.lookAt(this.target):(f0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vh.intersectPlane(f0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>of||8*(1-this._lastQuaternion.dot(this.object.quaternion))>of||this._lastTargetPosition.distanceToSquared(this.target)>of?(this.dispatchEvent(d0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function g1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function x1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function y1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(p0),this.state=It.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case oi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case oi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(af)}function v1(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function M1(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(af),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(p0))}function b1(n){this.enabled!==!1&&this._handleKeyDown(n)}function S1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(af)}function w1(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function T1(n){this.enabled!==!1&&n.preventDefault()}function E1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var B=n=>document.getElementById(n),M0=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],b0=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Yh=[...document.querySelectorAll(".tool")],S0="gorilla-lab-editor-draft",ns=Sg(localStorage),C1=Nd(),Rn=[...new Map([...C1,...ns.models].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function w0(n){let e=n??B("model-library").value;B("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Rn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Rn.some(t=>t.id===e)?B("model-library").value=e:Rn.length===1&&(B("model-library").value=Rn[0].id),B("place-model").disabled=!Rn.length}var T0=new URLSearchParams(location.search),uf=T0.get("model"),df="gorilla-lab-edit-map-model";w0(uf);function gr(){return Rn.find(n=>n.id===B("model-library").value)}function E0(){let n=gr();if(!n)return null;let e=So(n);return Zn({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Ce.clamp(e.x,.2,64),h:Ce.clamp(e.y,.12,36),d:Ce.clamp(e.z,.2,64),...Vd(n),color:"#ffffff",solid:n.properties.collidable!==!1})}B("model-library").addEventListener("change",()=>{Ze==="model"&&is(null),Pf()});var lf={block:Zn({w:1,h:1,d:1}),ramp:Zn({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:Zn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Rs({amplitude:.7,grassDensity:1.7})}),wall:Zn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},_f={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},ie,gt=-1,Ze="move",_t=null,jn=null,nl=[],Is=null,qh=[];function Ti(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:Ze,selected:gt,...e};qh.push(i),qh.length>100&&qh.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=nt(),e=No.info.render;return{version:"R38.9",map:{name:ie.name,pieces:ie.pieces.length},tool:Ze,selected:gt,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[Kt.width,Kt.height],render:{...e},events:[...qh]}};window.addEventListener("error",n=>{n.message&&Ti("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Ti("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Ls=[],Kt=B("preview"),rt=B("plan"),ut=rt.getContext("2d");function R1(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[B("shape-preset").value]??n.slab;return Zn({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(B("shape-preset").value)?B("shape-preset").value:"box"})}var P1=B("editor-views");function ll(){P1.dataset.layout=B("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",B("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",B("sidebar-width").value+"px"),requestAnimationFrame(()=>{eu(),tu()})}for(let n of["layout-mode","view-split","sidebar-width"])B(n).addEventListener("input",ll);B("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),ll()};var ff=B("workspace-fullscreen");ff.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ct("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;ff.setAttribute("aria-pressed",String(n)),ff.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{eu(),tu()})});B("focus-3d").onclick=()=>{B("layout-mode").value="only-3d",ll()};B("focus-plan").onclick=()=>{B("layout-mode").value="only-plan",ll()};function I1(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(O,Q,ee)=>{let ze=document.createElement(O);return Q&&(ze.className=Q),ee!==void 0&&(ze.textContent=ee),ze},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let O of Yh){let Q=O.dataset.tool,ee=O.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[Q]){let ze=t("div","rail-divider");ze.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[Q]],i.append(ze)}O.classList.add("rail-tool"),O.title=ee+" \xB7 "+(_f[Q]??""),O.setAttribute("aria-label",ee),O.replaceChildren(t("span","rail-glyph",s[Q]??"\u25A1"),t("span","rail-caption",ee==="Redimensionner"?"\xC9chelle":ee==="S\xE9lectionner"?"S\xE9lect.":ee==="D\xE9placer"?"D\xE9placer":ee==="Atelier"?"Mod\xE8le":ee)),i.append(O)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=B("shape-preset").closest("label"),h=B("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let f=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");f.id="model-place-action",f.type="button",o.append(f);let d=t("button","delete-library-model","Supprimer de la biblioth\xE8que");d.type="button",d.id="delete-library-model",d.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(d),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=B("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let M=t("span","active-selection","Aucune s\xE9lection");M.id="active-selection",_.after(M);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let E=t("div","precision-options"),C=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let O of C){let Q=B(O);Q&&E.append(Q.closest("label"))}y.append(E),g.append(y);let I=O=>{if(O==="close"){o.hidden=!0;return}let Q=O==="model";o.hidden=!1,o.dataset.mode=O,a.textContent=Q?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!Q,c.hidden=Q,f.hidden=!Q,d.hidden=!Q,u&&(u.hidden=!Q),p.textContent=Q?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!Q,x.textContent=Q?Rn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ee=gr();f.disabled=!ee,f.textContent=ee?"\u2B21 Placer \xAB "+ee.name+" \xBB":"Aucun mod\xE8le \xE0 placer",d.disabled=!ee||!ns.models.some(ht=>ht.id===ee.id),u&&(u.href="./model-editor.html"+(ee?ee.assetId&&ee.id==="custom-model-game-"+ee.assetId?"?asset="+encodeURIComponent(ee.assetId):"?model="+encodeURIComponent(ee.id):"")),B(Q?"model-library":"shape-preset").focus({preventScroll:!0})};f.onclick=()=>{gr()&&(zi("model"),I("close"),Kt.focus({preventScroll:!0}),ct("Clique dans la sc\xE8ne pour placer \xAB "+gr().name+" \xBB."))},d.onclick=()=>{let O=gr();if(!(!O||!ns.models.some(Q=>Q.id===O.id))&&confirm("Supprimer d\xE9finitivement \xAB "+O.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let Q=dr({...ns,models:ns.models.filter(ze=>ze.id!==O.id),avatarId:ns.avatarId===O.id?null:ns.avatarId});localStorage.setItem(kd,JSON.stringify(Q)),Object.assign(ns,Q);let ee=Rn.findIndex(ze=>ze.id===O.id);ee>=0&&Rn.splice(ee,1),w0(),Ze==="model"&&!Rn.length&&zi("move"),is(null),Pf(),I("model"),ct("\xAB "+O.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(Q){ct("Suppression impossible : "+(Q.message||"stockage local indisponible"))}},B("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&I("model")});for(let O of["model","preset"])Yh.find(ee=>ee.dataset.tool===O)?.addEventListener("click",()=>I(O));window.addEventListener("pointerdown",O=>{!o.hidden&&!o.contains(O.target)&&!O.target.closest(".rail-tool")&&I("close")}),window.addEventListener("keydown",O=>{O.key==="Escape"&&I("close")});let R=t("section","outliner");R.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),R.append(S);let b=e.querySelector("#pieces").closest(".inspector-section");b.id="outline-content",R.append(b);let L=t("section","property-pane"),U=t("nav","inspector-tabs");U.setAttribute("aria-label","Propri\xE9t\xE9s");let z=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[O,Q]of z){let ee=t("button","inspector-tab",Q);ee.type="button",ee.dataset.tab=O,ee.setAttribute("aria-pressed",String(O==="object")),U.append(ee)}let X=t("div","property-content");X.id="property-content";let W=B("piece-inspector").closest(".inspector-section");W.id="object-section";let V=W.querySelector("#surface").closest("details");V.id="surface-controls";let te=t("section");te.id="collision-options",te.append(t("h3","","Collisions de la pi\xE8ce")),te.append(W.querySelector("#p-solid").closest("label"),B("debug-controls"));let q=t("section");q.id="behavior-options";let se=t("div","fields");for(let O of["surface","p-grip","p-gravity","p-bounce"])se.append(V.querySelector("#"+O).closest("label"));q.append(t("h3","","Propri\xE9t\xE9s physiques")),q.append(se,W.querySelector("#model-object-controls"));let fe=t("section");fe.id="publish-options";let be=t("div","piece-actions");for(let[O,Q]of[["test-map","Jouer cette map"],["export-map","Exporter JSON"]]){let ee=t("button","",Q);ee.type="button",ee.addEventListener("click",()=>B(O).click()),be.append(ee)}fe.append(be),X.append(W,te,q,fe);let Ie=t("section","scene-options");Ie.id="scene-options",Ie.append(t("h2","","Param\xE8tres de carte"));let He=B("map-name").closest("label"),je=B("map-world-size").closest(".fields"),et=B("draft-status");Ie.append(He,je,et);let re=[...e.children].filter(O=>O.tagName==="DETAILS");for(let O of re)Ie.append(O);X.append(Ie),L.append(U,X),e.replaceChildren(R,L);let F=O=>{let Q=ie?.pieces?.[gt];["terrain","props"].includes(O)&&!Q?.terrain&&(O="object"),["material","behavior"].includes(O)&&!Q&&(O="object"),e.dataset.tab=O;for(let ee of U.querySelectorAll("button"))ee.setAttribute("aria-pressed",String(ee.dataset.tab===O)),ee.disabled=["terrain","props"].includes(ee.dataset.tab)&&!Q?.terrain;O==="terrain"&&(B("terrain-controls").open=!0),O==="material"&&(V.open=!0),X.scrollTop=0};for(let O of U.querySelectorAll("button"))O.addEventListener("click",()=>F(O.dataset.tab));window.setInspectorTab=F,F("object")}I1();var Rt={scale:10,cx:0,cz:-6,width:30,height:40},No=new fh({canvas:Kt,antialias:!0});No.setPixelRatio(Math.min(devicePixelRatio,1.5));Kt.addEventListener("webglcontextlost",()=>Ti("contexte WebGL perdu",{},"warn"));var Nt=new mn(52,1,.1,640);Nt.position.set(16,15,19);var Lt=new Gh(Nt,Kt);Lt.target.set(0,0,-5);Lt.mouseButtons.LEFT=null;Lt.mouseButtons.RIGHT=oi.ROTATE;Lt.mouseButtons.MIDDLE=oi.PAN;Lt.maxDistance=580;Lt.maxPolarAngle=Math.PI-.035;var cn=new Kr,A0=new ke("#8fb6c6");cn.background=A0;var C0=new Qs("#f0f5ff","#8e775c",2.6);cn.add(C0);var vf=new er("#fff1d2",1.8);vf.position.set(-9,18,6);cn.add(vf);var Oi=new Kr;Oi.fog=new qs("#a6d4ea",55,135);var Bn=rg(Oi,No);Bn.probe.userData.editorAssetId="chrome-sphere";var N2=og(Oi,Bn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),L1=new Map(Nd().map(n=>[n.assetId,n]));function m0(n,e,t=null,i=null){let s=structuredClone(t??L1.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=qa(s),o=r.getSize(new v),a=r.getCenter(new v);return Zn({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Mf=()=>{let n=Yg(Bn.boxes),e=Bn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let f=t+u%(o+1)/o*a,d=s+Math.floor(u/(o+1))/o*l;return e.height(f,d)});n.pieces.push(Zn({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:Rs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(Zd()),dg((t,i)=>{let s=Dd[t];s&&n.pieces.push(m0(s,i))}),n.pieces.push(m0("chrome-sphere",new v(Ss.x,Ss.y,Ss.z))),an(n)};ie=Mf();var bf=new pe(new Ge(1.8,2.03,.1),new un({color:"#8daebc",metalness:.9,roughness:.12}));bf.position.set(bs.x,bs.y,bs.z);bf.userData.editorAssetId="lab-mirror";Oi.add(bf);var D1=Bn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);D1.forEach(n=>n.mesh.removeFromParent());var Zh=new xn;Zh.add(...Oi.children);cn.add(Zh,...Bn.lighting);var _r=Bn.boxes.find(n=>n.heightfield).mesh;_r.userData.editorAssetId="lab-hill";Bn.visual(7,0,7,!0,!0,!0,512,!1);var Sf=[...document.querySelectorAll("[data-env]")],Co=B("environment-status"),Io=new Aa(60,60,"#d7e2e5","#5e7b8a");Io.material.transparent=!0;Io.material.opacity=.35;cn.add(Io);var vt=new xn;cn.add(vt);var Ke=new kh(Nt,Kt);Ke.setSize(.9);Ke.setRotationSnap(Ce.degToRad(5));Ke.enabled=!1;cn.add(Ke.getHelper());var wf=new Set(["translate","rotate","scale"]),Ds=null,Fn=null,Tf=!1,il=null,Hh=!1,R0=()=>Number(B("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...B(n).options].some(t=>t.value===e)&&(B(n).value=e)}catch{}B(n).onchange=()=>{Fn=null;try{localStorage.setItem("gorilla-lab-"+n,B(n).value)}catch{}}}var xr=new Map;try{B("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}B("magnet").onchange=()=>{Fn=null,xr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",B("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{Tf=e.altKey});window.addEventListener("blur",()=>{Tf=!1,Fn=null});function P0(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/ol())*ol();if(i||!B("magnet").checked||!n.solid||n.terrain)return Fn=null,s;let r=R0(),o=B("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new qt(...[p.pitch,p.yaw,p.roll??0].map(Ce.degToRad),"YXZ"),g=new ft().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of ie.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,M=m.flatMap(y=>t.includes(y)&&_(m.find(E=>E!==y))?[-1,1].flatMap(E=>[-1,1].map(C=>{let I=p[y]+E*x[y]-C*c[y];return{key:y,value:I,distance:Math.abs(e[y]-I)}})):[]).sort((y,E)=>y.distance-E.distance)[0];if(!(o?!M||M.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let E=p[g]+y*(c[g]+x[g]),C=ie.pieces.indexOf(p)+":"+g+":"+y;h.push({key:C,axis:g,value:E,edge:o?M:null,distance:Math.max(Math.abs(E-e[g]),o?M.distance:0)})}}}let u=h.find(p=>p.key===Fn),f=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return f(u),s;Fn&&(xr.set(Fn,(xr.get(Fn)??0)+1),Fn=null);let d=h.filter(p=>p.distance<=r&&(xr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(d)f(d),Fn=d.key;else for(let p of h)p.distance<=r&&(xr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var sl=new Ge(1,1,1),U1=Pd(),N1=new ri,jh=.025,F1=new gs(.24,.36,40).rotateX(-Math.PI/2),I0=new Jt({color:"#ffcd63",side:tn}),On=new pe(F1,I0),L0=new pe(new dn(.12,.2).rotateX(-Math.PI/2),I0);L0.position.set(0,0,-.39);On.add(L0);cn.add(On);var yr=new pe(sl,new Jt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Ro=new pe(new si(.055,10,8),new Jt({color:"#ffc85a",depthTest:!1}));Ro.visible=!1;Ro.renderOrder=20;cn.add(Ro);var rl=new pe(On.geometry,new Jt({color:"#ffe084",side:tn,opacity:.65,transparent:!0,depthWrite:!1}));yr.visible=rl.visible=!1;cn.add(yr,rl);var Us=new tr,Qh=new v(0,1,0),g0=new gn(Qh,0),O1=new tt,wi=null,cf=!1;function nn(){cf||(cf=!0,requestAnimationFrame(()=>{cf=!1,Bn.centerSky(Nt.position),No.render(cn,Nt),Y0()}))}function eu(){let n=Kt.clientWidth||1,e=Kt.clientHeight||1;No.setSize(n,e,!1),Nt.aspect=n/e,Nt.updateProjectionMatrix(),nn()}function tu(){let n=Math.max(1,rt.clientWidth),e=Math.max(1,rt.clientHeight);n===rt.width&&e===rt.height||(rt.width=n,rt.height=e,Ef(),ci())}new ResizeObserver(eu).observe(Kt);new ResizeObserver(tu).observe(rt);Lt.addEventListener("change",nn);Lt.addEventListener("start",()=>is(null));function Ef(){Rt.scale=Math.min(rt.width/Rt.width,rt.height/Rt.height)}function Jh(n,e){return[rt.width/2+(n-Rt.cx)*Rt.scale,rt.height/2+(e-Rt.cz)*Rt.scale]}function pf(n){let e=rt.getBoundingClientRect();return{x:((n.clientX-e.left)*rt.width/e.width-rt.width/2)/Rt.scale+Rt.cx,z:((n.clientY-e.top)*rt.height/e.height-rt.height/2)/Rt.scale+Rt.cz}}function x0(n,e,t,i,s){let[r,o]=Jh(n.x,n.z),a=Ce.degToRad(n.pitch),l=Ce.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);ut.save(),ut.translate(r,o),ut.rotate(-Ce.degToRad(n.yaw));let u=c*Rt.scale,f=h*Rt.scale;ut.globalAlpha=s,ut.fillStyle=e,ut.fillRect(-u/2,-f/2,u,f),ut.globalAlpha=1,ut.strokeStyle=t,ut.lineWidth=i,ut.strokeRect(-u/2,-f/2,u,f),ut.restore()}function y0(n,e){let[t,i]=Jh(n.x,n.z);ut.save(),ut.translate(t,i),ut.rotate(Ce.degToRad(-n.yaw)),ut.strokeStyle=e?"#fff0bb":"#ffd16e",ut.lineWidth=2,ut.beginPath(),ut.arc(0,0,6,0,Math.PI*2),ut.moveTo(0,-6),ut.lineTo(0,-11),ut.stroke(),ut.restore()}function ci(){ut.fillStyle="#192e3a",ut.fillRect(0,0,rt.width,rt.height),ut.strokeStyle="#37505f",ut.lineWidth=1;let n=Rt.scale<1?25:Rt.scale<4?10:Rt.scale<12?5:1,e=(ie.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Jh(r,r);o>=0&&o<=rt.width&&(ut.beginPath(),ut.moveTo(o,0),ut.lineTo(o,rt.height),ut.stroke()),a>=0&&a<=rt.height&&(ut.beginPath(),ut.moveTo(0,a),ut.lineTo(rt.width,a),ut.stroke())}let[t,i]=Jh(-e,-e);ut.strokeStyle="#ffda9077",ut.lineWidth=2,ut.strokeRect(t,i,e*2*Rt.scale,e*2*Rt.scale);let s=ie.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Yd[r.material]:r.color);x0(r,a,o===gt?"#ffe095":"#a4bac7",o===gt?2:1,r.solid?.86:.38)}y0(ie.spawn,!1),jn&&(Ze==="spawn"?y0(jn,!0):x0(jn,"#8ee7fc","#afefff",2,.45))}function Kh(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==yr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Ce.degToRad(e.pitch),Ce.degToRad(e.yaw),Ce.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function D0(){wi&&(cn.remove(wi),wi.geometry.dispose(),wi.material.dispose());let n=vt.children[gt];wi=n?new ao(n,"#ffdf88"):null,wi&&cn.add(wi),mf()}function mf(){if(Ze==="spawn"){Ke.enabled=!0,Ke.setMode("translate"),Ke.setSpace("world"),Ke.setTranslationSnap(null),Ke.setRotationSnap(null),Ke.showX=Ke.showY=Ke.showZ=!0,Ke.attach(On);return}let n=vt.children[gt],e=nt()?.terrain,t=wf.has(Ze)&&!!n;if(Ke.enabled=t,!t){Ke.detach();return}Ke.setMode(Ze),Ke.setSpace(Ze==="translate"?"world":"local"),Ke.setTranslationSnap(null);let i=!!(e&&Ze==="rotate");Ke.setRotationSnap(i?Math.PI/2:null),Ke.showX=Ke.showZ=!i,Ke.showY=!(e&&Ze==="scale"),Ke.attach(n),B("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":_f[Ze]}var Po=!1;function U0(){if(Ze!=="scale")return;let n=nt(),e=Ds?.map.pieces[gt],t=Ke.object;if(!n||!e||!t)return;let i=u0(e,n,Po,Ds?.scaleSides),s=(ie.worldSize??240)/2;n.x=Ce.clamp(i.x,-s,s),n.y=Ce.clamp(i.y,-256,256),n.z=Ce.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),wi?.update();for(let r of["x","y","z"])B("p-"+r).value=n[r].toFixed(2);ci(),nn()}function N0(n){let e=Po;Po=n.ctrlKey,e!==Po&&Ke.dragging&&U0()}for(let n of["keydown","keyup"])window.addEventListener(n,N0);Kt.addEventListener("pointermove",N0,{capture:!0});Ke.addEventListener("change",nn);Ke.addEventListener("mouseDown",()=>{let n=nt();if(Fn=null,n||Ke.object===On){let e=Ze==="scale"?h0(Ke.axis,Ke.pointStart,Ke.worldQuaternionStart):void 0;Ds={map:structuredClone(ie),selected:gt,scaleSides:e},Ti("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Ke.axis,scaleSides:e,terrain:!!n?.terrain})}Po=!!(Po||window.event?.ctrlKey)});Ke.addEventListener("objectChange",()=>{let n=nt(),e=Ke.object,t=Ds?.map.pieces[gt];if(e===On&&Ds){let s=(ie.worldSize??240)/2,r=Ce.clamp;ie.spawn.x=r(On.position.x,-s,s),ie.spawn.y=r(On.position.y-jh,-256,256),ie.spawn.z=r(On.position.z,-s,s),On.position.set(ie.spawn.x,ie.spawn.y+jh,ie.spawn.z);for(let o of["x","y","z"])B("spawn-"+o).value=ie.spawn[o].toFixed(2);ci();return}if(!n||!e||!t)return;let i=Ce.clamp;if(Ze==="translate"){let s=["x","y","z"].filter(a=>(Ke.axis??"XYZ").includes(a.toUpperCase())),r=P0(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,Tf),o=(ie.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else Ze==="rotate"?(n.pitch=Ce.radToDeg(e.rotation.x),n.yaw=Ce.radToDeg(e.rotation.y),n.roll=Ce.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=Eo(n.yaw),e.rotation.set(0,Ce.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,ts),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,ts),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),U0());e.updateMatrixWorld(!0),wi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])B("p-"+s).value=Number(n[s]??0).toFixed(2);ci(),nn()});Ke.addEventListener("dragging-changed",({value:n})=>{if(Lt.enabled=!n,n||!Ds)return;let e=Ds;Ds=null;let t=Ke.object===On,i=t?e.map.spawn:e.map.pieces[gt],s=t?ie.spawn:nt();if(JSON.stringify(i)===JSON.stringify(s)){Ti("transformation sans changement",{name:s?.name,axis:Ke.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Ti("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Ls.length>=35&&Ls.shift(),Ls.push(e),ie=an(ie),bt(),ct("Transformation appliqu\xE9e.")});Kt.addEventListener("pointerup",()=>{Ke.dragging||(Lt.enabled=!0)});Kt.addEventListener("pointercancel",()=>{Ke.dragging&&Ke.pointerUp(null),Lt.enabled=!0});function B1(){Ke.detach();for(let t of[...vt.children])vt.remove(t),t.geometry!==sl&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&Wg(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),Ph(t.material);Zh.visible=!!ie.arenaBase;let n=new Set(ie.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(ie.pieces.map(t=>t.sceneryId).filter(Boolean));Zh.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=$g(ie,i,n,e))}),B0();for(let t of ie.pieces){if(t.model){let l=new pe(Ih(t.model,new v(t.w,t.h,t.d)),Rh(t.model));l.castShadow=l.receiveShadow=!0;let c=new pe(new Ge(1,1,1),new Jt({colorWrite:!1,depthWrite:!1,side:tn}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=vt.children.length,vt.add(l),Kh(l,t);continue}let i=[10,11,12].includes(t.material),s=new Wn({color:new ke(Yd[t.material]).multiply(new ke(t.color)),transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(ie.arenaBase&&!t.texture){let l=Bn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=N1.load(t.texture,nn),s.map.colorSpace=mt,s.map.wrapS=s.map.wrapT=wn,s.color.set(t.color));let r=t.terrain?performance.now():0,o=t.terrain?qd(t):t.primitive==="ramp"?Pd(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?Zm(t.primitive):t.texture||ie.arenaBase?mh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):sl;o!==sl&&Rd(o,t);let a=new pe(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=Hg(t);l&&(a.add(l),a.userData.vegetation=l)}vt.add(a),Kh(a,t)}J1(),On.position.set(ie.spawn.x,ie.spawn.y+jh,ie.spawn.z),On.rotation.y=Ce.degToRad(ie.spawn.yaw),Z0(),D0()}function nt(){return ie.pieces[gt]}function ct(n){B("editor-note").textContent=n}function Mt(){Ls.length>=35&&Ls.shift(),Ls.push({map:structuredClone(ie),selected:gt}),B("undo").disabled=!1}function nu(){try{return localStorage.setItem(S0,JSON.stringify(ie)),B("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil",!0}catch{return B("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.",!1}}B("model-asset-edit-link").onclick=n=>{let e=nt();if(!e?.model||!nu()){n.preventDefault();return}try{sessionStorage.setItem(df,JSON.stringify({index:gt,piece:e}))}catch{n.preventDefault(),ct("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function z1(){let n=T0.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(df)),sessionStorage.removeItem(df)}catch{return}let t=ie.pieces[e?.index],i=ns.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){ct("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}gt=e.index;let o=So(t.model),a=So(i),l=(u,f,d,p)=>Ce.clamp(u*d/Math.max(f,.001),.05,p),c={w:l(t.w,o.x,a.x,ts),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,ts)},h=Zn({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(Mt(),ie.pieces[gt]=h),ct("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var _0=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function F0(){let n=_0(B("piece-search").value.trim()),e=[];ie.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";_0(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===gt))}),B("pieces").replaceChildren(...e),B("pieces").value=String(gt),e.length||B("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(B("pieces").options[0].disabled=!0),B("count").textContent=n?e.length+" sur "+ie.pieces.length:ie.pieces.length+" / "+Ao}function O0(){F0();let n=nt();B("piece-inspector").hidden=!n,B("selection-help").hidden=!!n,B("focus-piece").disabled=!n,B("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";B("model-object-controls").hidden=!e,B("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=B("model-asset-edit-link"),i=n?.model&&Rn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(B("model-grabbable").checked=n.model.properties?.grabbable!==!1,B("model-frozen").checked=n.model.properties?.frozen===!0,B("model-collidable").checked=n.model.properties?.collidable!==!1,B("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of M0){let c=B("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])B(l).disabled=!n;B("delete").disabled=!n||ie.pieces.length===1,B("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",B("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",B("texture-clear").disabled=!n?.texture,B("texture-paint").disabled=!n||!!n.model;let s=nl[gt],r=B("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=yf(s));let o=n?.terrain;B("terrain-grassTexture-paint").disabled=!o;for(let l of b0){let c=B("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(B("uv-reset").disabled=!n||!!n?.model,B("terrain-controls").hidden=B("terrain-props").hidden=B("terrain-texture-density-fields").hidden=!o,o){for(let g of H0)B("terrain-"+g).value=o[g];let l=o.reliefArea??W0(n);B("terrain-relief-local").checked=!!o.reliefArea,B("terrain-relief-fields").hidden=!o.reliefArea;for(let g of["x","z","radius","blend"])B("terrain-relief-"+g).value=l[g];let c=vt.children[gt]?.userData.generationMs;B("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,f=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2});B("terrain-cell-size").textContent=f.format(n.w/o.detail)+" \xD7 "+f.format(n.d/o.detail)+" m par case \xB7 "+f.format(u)+" triangles \xB7 "+f.format(u/h)+" triangles/m\xB2",B("terrain-texture-effective").textContent=f.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2",Z1(n);let d=B("terrain-neighbor"),p=d.value,x=ie.pieces.flatMap((g,m)=>Xd(n,g)?[new Option(g.name,String(m))]:[]);d.replaceChildren(...x.length?x:[new Option("Aucun bord \xE0 moins de 25 cm","")]),x.some(g=>g.value===p)&&(d.value=p),d.disabled=B("terrain-stitch").disabled=!x.length,B("p-pitch").disabled=B("p-roll").disabled=!0}B("rotate").disabled=!n,B("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",B("p-yaw").step=o?"90":"1",B("texture-create").disabled=!n,B("surface").value="",B("undo").disabled=Ls.length===0,B("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function gf(){let n=!!(ie.arenaBase||ie.environment);vf.visible=C0.visible=!n;for(let t of Bn.lighting)t.visible=n;let e=Bn.lighting.at(-1);e.visible=n&&(ie.environment?.sunPower??3)>0,cn.background=n?Oi.background:A0,cn.backgroundRotation.copy(Oi.backgroundRotation),cn.fog=n&&B("environment-fog-preview").checked?Oi.fog:null,cn.environment=n?Oi.environment:null,cn.environmentIntensity=Oi.environmentIntensity,nn()}function B0(){let n=ie.environment??null,e=n??Gi(0);for(let t of Sf){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}Co.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",Bn.setEnvironment(n,gf),gf()}function $h(n){let e=hl(n);Mt(),e?ie.environment=e:delete ie.environment,B0(),nu()}var k1=Sf.find(n=>n.dataset.env==="preset");k1.replaceChildren(...Ff.map((n,e)=>new Option(n,e)));for(let n of Sf)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){$h(Gi(Number(n.value)));return}let t=ie.environment??Gi(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,Co.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;$h({...t,[e]:i})};B("environment-reset").onclick=()=>$h(null);B("environment-aim-sun").onclick=()=>{if(!(ie.environment??Gi(0)).sunPower){Co.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=Bn.sunDirection();Lt.target.copy(Nt.position).addScaledVector(e,8),Lt.update(),nn()};B("environment-fog-preview").onchange=gf;B("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=ie;if(e.value="",!t)return;if(t.size>Math.floor((ru-32)*.75)){Co.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de moins de 900 ko.";return}let s=new FileReader;s.onload=()=>{if(ie!==i)return;let r=new Image;r.onload=()=>{if(ie===i){if(r.width!==r.height*2){Co.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}$h({...ie.environment??Gi(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{ie===i&&(Co.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function bt(){B("map-name").value=ie.name,B("map-world-size").value=ie.worldSize??240,Nt.far=Math.max(640,ie.worldSize*2),Nt.updateProjectionMatrix(),Lt.maxDistance=Math.max(580,ie.worldSize*1.6);for(let n of["x","y","z","yaw"])B("spawn-"+n).value=ie.spawn[n];B1(),O0(),ci(),nn(),nu()}function Lo(n){gt!==n&&(gt=n,Ti("s\xE9lection",{name:nt()?.name,terrain:!!nt()?.terrain}),Fn=null,xr.clear(),O0(),D0(),ci(),nn())}function Af(n){if(ie.pieces.length>=Ao)return ct("Limite de pi\xE8ces atteinte.");Mt(),ie.pieces.push(n),gt=ie.pieces.length-1,bt(),ct(n.name+" ajout\xE9 \xE0 la map.")}function Cf(){if(!nt()||ie.pieces.length===1)return;let n=nt().name;Mt(),ie.pieces.splice(gt,1),gt=Math.min(gt,ie.pieces.length-1),bt(),ct(n+" retir\xE9 de la map.")}function Rf(){let n=nt();if(!n)return;let e=Ce.clamp(n.x+n.w+ol(),-120,120);Af({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function V1(){let n=nt();if(!n)return;Mt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Ti("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),bt()}function z0(){let n=Ls.pop();n&&(ie=n.map,gt=n.selected,is(null),bt(),ct("Derni\xE8re modification annul\xE9e."))}function Pf(){let n=_f[Ze]??"";if(Ze!=="model"||!gr()){B("tool-help").textContent=n;return}let e=E0(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);B("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function zi(n){Ze!==n&&Ti("changement d\u2019outil",{ancien:Ze,nouveau:n,name:nt()?.name}),Ze=n,Lt.mouseButtons.LEFT=Ze==="view"?oi.ROTATE:null,mf(),nn();for(let e of Yh)e.setAttribute("aria-pressed",String(e.dataset.tool===Ze));for(let e of[Kt,rt])e.dataset.tool=Ze,e.removeAttribute("data-hit");Pf(),mf(),nn(),is(null)}function vr(){let n=new sn().setFromObject(vt);n.expandByPoint(On.position);let e=n.getCenter(new v),t=n.getSize(new v);Rt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(ie.worldSize??240,500)),height:Math.max(t.z+5,Math.min(ie.worldSize??240,500))},Ef();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));Io.scale.setScalar(i),Io.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Nt.position.clone().sub(Lt.target).normalize(),r=new v().crossVectors(Qh,s).normalize(),o=new v().crossVectors(s,r),a=Math.tan(Ce.degToRad(Nt.fov/2))*.87,l=a*Nt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let f of[n.min.z,n.max.z]){let d=new v(h,u,f).sub(e),p=Math.max(Math.abs(d.dot(r))/l,Math.abs(d.dot(o))/a);c=Math.max(c,p+d.dot(s))}c=Math.min(c,Lt.maxDistance),Lt.target.copy(e),Nt.position.copy(e).addScaledVector(s,c),Lt.update(),Nt.updateMatrixWorld(),ci(),nn()}function If(n,e){Mt(),ie=n,Fn=null,xr.clear(),gt=-1,B("piece-search").value="",zi("move"),bt(),vr(),ct(e)}function ol(){return Number(B("snap").value)}function Wh(n){let e=ol(),t=(ie.worldSize??240)/2;return Ce.clamp(Math.round(n/e)*e,-t,t)}function Lf(n,e){if(n===rt){let t=pf(e);Us.set(new v(t.x,80,t.z),new v(0,-1,0))}else{let t=Kt.getBoundingClientRect();Nt.updateMatrixWorld(),Us.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Nt)}}function xf(n){return g0.constant=-n,Us.ray.intersectPlane(g0,new v)}function G1(n){let e=n;for(;e&&e.parent!==vt;)e=e.parent;return e?.parent===vt?e:null}function Do(n,e){Lf(n,e);let t=_r.visible&&ie.arenaBase?[...vt.children,_r]:vt.children,i=Us.intersectObjects(t,!0);for(let s of i){if(s.object===_r)return s;let r=G1(s.object);if(r)return{...s,object:r}}return null}function k0(n,e,t,i=null){Us.set(new v(n,80,e),new v(0,-1,0));let s=i?Us.intersectObject(i,!1)[0]:Us.intersectObjects(_r.visible&&ie.arenaBase?[...vt.children,_r]:vt.children,!1).find(r=>r.object===_r||ie.pieces[vt.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function V0(n,e){il=null,Hh=!1;let t=Do(n,e);if(Ze==="spawn"){if(!t)return null;let h=Wh(t.point.x),u=Wh(t.point.z);return k0(h,u,ie.spawn.yaw)}if(Ze==="terrain"){let h=t?.point??xf(0);return h?{...lf.terrain,terrain:Rs(lf.terrain.terrain),x:Wh(h.x),y:h.y,z:Wh(h.z)}:null}if(Ze==="sculpt"||Ze==="model"&&!gr())return null;let i=t?.point??xf(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(O1.getNormalMatrix(t.object.matrixWorld)):Qh,r=t&&H1(t),o=R0();r&&r.distance<=o*2&&(il=r.point,Hh=B("magnet").checked&&!e.altKey&&B("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=Hh||e.altKey?1e-6:ol(),l=Ze==="model"?E0():Ze==="preset"?R1():lf[Ze],c=jg(Hh?il:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=ie.worldSize/2?c:null}function H1(n){let e=n.object,t=ie.pieces[vt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function is(n){!n&&!jn||(jn=n,Ro.visible=!!(jn&&il),Ro.visible&&Ro.position.copy(il),rl.visible=!!(jn&&Ze==="spawn"),yr.visible=!!(jn&&Ze!=="spawn"),rl.visible&&rl.position.set(jn.x,jn.y+jh,jn.z),yr.visible&&(yr.geometry=jn.primitive==="ramp"?U1:sl,Kh(yr,jn)),ci(),nn())}function W1(n,e){let t=V0(n,e);if(!t){ct(Ze==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ze==="spawn")Mt(),ie.spawn=t,zi("move"),bt(),ct("Point de d\xE9part d\xE9plac\xE9.");else{let i=Ze==="model";is(null),Af(t),i&&(zi("move"),ct(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function X1(n,e){if(Ze==="view"||e.button!==0||!e.isPrimary||_t||Ke.dragging)return;if(Ze==="spawn"||wf.has(Ze)){if(n===Kt&&Ke.enabled){let r=Kt.getBoundingClientRect();if(Ke.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),Ke.axis){Lt.enabled=!1;return}}if(Ze!=="spawn"){e.stopImmediatePropagation();let r=Do(n,e);Lo(r?vt.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ze};if(_t=t,Fn=null,Ze==="sculpt"){q0(n,e);return}if(Ze!=="move")return;let i=Do(n,e);Lo(i?vt.children.indexOf(i.object):-1);let s=nt();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function q1(n,e){if(Ze==="view"||wf.has(Ze)||Ke.dragging)return;if(!_t){Ze==="move"?n.toggleAttribute("data-hit",!!Do(n,e)):is(V0(n,e));return}if(Ze==="sculpt"&&_t.id===e.pointerId&&_t.canvas===n){Math.hypot(e.clientX-_t.clientX,e.clientY-_t.clientY)>=7&&(q0(n,e),_t.clientX=e.clientX,_t.clientY=e.clientY);return}if(_t.id!==e.pointerId||_t.canvas!==n||_t.height===void 0||!nt()||Math.hypot(e.clientX-_t.clientX,e.clientY-_t.clientY)<4&&!_t.recorded)return;Lf(n,e);let i=xf(_t.height);if(!i)return;let s=nt(),r=P0(s,{x:i.x-_t.dx,y:s.y,z:i.z-_t.dz},["x","z"],e.altKey),o=(ie.worldSize??240)/2,a=Ce.clamp(r.x,-o,o),l=Ce.clamp(r.z,-o,o);a===s.x&&l===s.z||(_t.recorded||(Mt(),_t.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,Kh(vt.children[gt],s),wi?.update(),B("p-x").value=a,B("p-z").value=l,ci(),nn())}function hf(n,e,t){if(!_t||_t.canvas!==n||_t.id!==e.pointerId)return;let i=_t;if(_t=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(bt(),ct("Relief modifi\xE9."));return}i.recorded&&(nu(),ct(nt().name+" d\xE9plac\xE9.")),t&&Ze===i.tool&&Ze!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&W1(n,e)}var li=null,iu=!1,Xh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(iu=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(iu=!1)});window.addEventListener("blur",()=>{li=null,iu=!1});rt.addEventListener("pointerdown",n=>{n.button!==1&&!(iu&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),li={id:n.pointerId,x:n.clientX,y:n.clientY},rt.setPointerCapture(n.pointerId),rt.style.cursor="grabbing")},{capture:!0});rt.addEventListener("pointermove",n=>{!li||li.id!==n.pointerId||(n.stopImmediatePropagation(),Rt.cx-=(n.clientX-li.x)/Rt.scale,Rt.cz-=(n.clientY-li.y)/Rt.scale,li.x=n.clientX,li.y=n.clientY,ci())},{capture:!0});function G0(n){!li||li.id!==n.pointerId||(li=null,rt.style.cursor="",rt.hasPointerCapture(n.pointerId)&&rt.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}rt.addEventListener("pointerup",G0,{capture:!0});rt.addEventListener("pointercancel",G0,{capture:!0});function Df(n,e){let t=rt.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=pf({clientX:i,clientY:s}),o=Ce.clamp(Rt.width/n,.75,4096),a=o/Rt.width;Rt.width=o,Rt.height*=a,Ef();let l=pf({clientX:i,clientY:s});Rt.cx+=r.x-l.x,Rt.cz+=r.z-l.z,ci()}rt.addEventListener("wheel",n=>{n.preventDefault(),Df(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});B("plan-zoom-in").onclick=()=>Df(1.25);B("plan-zoom-out").onclick=()=>Df(.8);B("plan-fit").onclick=vr;var Bi=B("context-actions"),al=!1;function Uo(){Bi.hidden=!0}for(let n of[Kt,rt])n.addEventListener("pointerdown",e=>{e.button===2?Xh={canvas:n,x:e.clientX,y:e.clientY}:Uo()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),al){al=!1;return}if(Xh?.canvas!==n||Math.hypot(e.clientX-Xh.x,e.clientY-Xh.y)>6)return;let t=Do(n,e),i=t?vt.children.indexOf(t.object):-1;if(i<0){Uo();return}Lo(i),B("context-title").textContent=nt()?.name??"Pi\xE8ce",Bi.querySelector('[data-context-action="delete"]').textContent=nt()?.model?"Retirer de la carte":"Supprimer",Bi.hidden=!1;let s=195,r=285;Bi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Bi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Bi.hidden||Bi.contains(n.target)||(al=n.button===2,Uo())},{capture:!0});document.addEventListener("contextmenu",n=>{al&&n.target!==Kt&&n.target!==rt&&(al=!1,n.preventDefault()),!Bi.hidden&&!Bi.contains(n.target)&&n.target!==Kt&&n.target!==rt&&Uo()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&Uo()});for(let n of Bi.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;Uo(),e==="duplicate"?Rf():e==="delete"?Cf():e==="focus"?B("focus-piece").click():zi(e==="select"?"move":e)};for(let n of[Kt,rt])n.addEventListener("pointerdown",e=>X1(n,e),{capture:!0}),n.addEventListener("pointermove",e=>q1(n,e)),n.addEventListener("pointerup",e=>hf(n,e,!0)),n.addEventListener("pointercancel",e=>hf(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||hf(n,e,!1)}),n.addEventListener("pointerleave",()=>{_t||is(null)});B("p-material").append(...qg.map((n,e)=>new Option(n,e)));for(let n of b0)B("p-"+n).addEventListener("change",e=>{let t=nt();!t||t.model||(Mt(),t[n]=Number(e.target.value),ie=an(ie),bt())});B("uv-reset").onclick=()=>{let n=nt();!n||n.model||(Mt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),ie=an(ie),bt())};var Y1={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(Y1))B(e).addEventListener("change",t=>{let i=nt();if(!i?.model||i.model.kind!=="prop")return;Mt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),ie=an(ie),bt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};ct(s[n])});for(let n of M0)B("p-"+n).addEventListener("change",e=>{let t=nt();if(!t)return;Mt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),ie=an(ie),bt()});B("map-world-size").onchange=n=>{Mt(),ie.worldSize=Ce.clamp(Number(n.target.value)||240,24,2048),ie=an(ie),bt(),vr(),ct("Zone de construction : "+ie.worldSize+" \xD7 "+ie.worldSize+" m.")};B("map-name").onchange=n=>{Mt(),ie.name=n.target.value,ie=an(ie),bt()};B("piece-search").addEventListener("input",F0);B("pieces").onchange=n=>{n.target.value!==""&&Lo(Number(n.target.value))};B("focus-piece").onclick=()=>{let n=vt.children[gt];if(!n)return;let e=new sn().setFromObject(n).getBoundingSphere(new Qn),t=Nt.position.clone().sub(Lt.target).normalize(),i=Math.atan(Math.tan(Ce.degToRad(Nt.fov/2))*Math.min(Nt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Lt.target.copy(e.center),Nt.position.copy(e.center).addScaledVector(t,s),Lt.update(),nn()};for(let n of["x","y","z","yaw"])B("spawn-"+n).onchange=e=>{Mt(),ie.spawn[n]=Number(e.target.value),ie=an(ie),bt()};B("spawn-here").onclick=()=>{let n=nt();if(!n)return;let e=n.solid&&k0(n.x,n.z,n.yaw,vt.children[gt]);if(!e)return ct("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Mt(),ie.spawn=e,bt(),ct("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Yh)n.onclick=()=>zi(n.dataset.tool);B("duplicate").onclick=Rf;B("add-mirror").onclick=()=>Af(Zd());B("delete").onclick=Cf;B("rotate").onclick=V1;B("undo").onclick=z0;B("zoom-fit").onclick=vr;B("snap").onchange=()=>is(null);B("new-example").onclick=()=>If(Mf(),"Ar\xE8ne de d\xE9part ouverte.");B("blank-map").onclick=()=>{let n=Ce.clamp(Number(B("map-world-size").value)||240,24,2048);If({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Zn({name:"Sol",y:-.25,w:Math.min(n,ts),d:Math.min(n,ts)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};B("surface").onchange=n=>{let e=Ja[n.target.value],t=nt();!e||!t||(Mt(),Object.assign(t,e),bt())};B("texture-file").onchange=async n=>{let e=n.target.files[0],t=nt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!ie.pieces.includes(t))return ct("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Mt(),t.texture=o,bt(),ct("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){ct(i.message)}finally{n.target.value=""}};B("texture-paint").onclick=()=>{let n=nt();if(!n||n.model)return ct("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");$d({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!ie.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Mt(),n.texture=e,ie=an(ie),bt(),ct("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};B("terrain-grassTexture-paint").onclick=()=>{let n=nt();n?.terrain&&$d({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!ie.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Mt(),n.terrain.grassTexture=e,ie=an(ie),bt(),ct("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};B("texture-clear").onclick=()=>{nt()?.texture&&(Mt(),nt().texture=null,bt())};B("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{If(an(await e.text()),"Map charg\xE9e.")}catch(t){ct(t.message)}finally{n.target.value=""}};B("export-map").onclick=()=>{try{Kg(ie),ct("Map JSON export\xE9e.")}catch(n){ct(n.message)}};B("test-map").onclick=()=>{try{localStorage.setItem(Jg,JSON.stringify(an(ie))),location.href="./?custom=1"}catch{ct("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var H0=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function Z1(n){let e=n.terrain.rules,t=vt.children[gt]?.userData.vegetation?.userData.distribution??[];B("terrain-add-rule").disabled=e.length>=Dh,B("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),B("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(R,S,b=!1)=>{let L=document.createElement("td");b&&(L.dataset.wide="");let U=document.createElement("span");return U.textContent=R,L.append(U,S),r.append(L),S.matches("input,select")&&S.setAttribute("aria-label",R+" \xB7 r\xE8gle "+(s+1)),L},a=R=>{Mt(),e[s]=ja({...i,...R}),Ti("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(R)}),bt()},l=(R,S,b)=>{let L=document.createElement("select");return L.replaceChildren(...R.map(([U,z])=>new Option(U,z))),L.value=S,L.onchange=()=>b(L.value),L},c=(R,S,b,L)=>{let U=document.createElement("input");return U.type="number",U.value=i[R],U.min=S,U.max=b,U.step=L,U.onchange=()=>{Number.isFinite(U.valueAsNumber)?a({[R]:U.valueAsNumber}):U.value=i[R]},U},h=Rn.some(R=>R.id===i.model?.id)||!i.model?Rn:[...Rn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,R=>{let S=R==="grass"?"#527a34":R==="shrub"?"#36583c":"#ffffff";a({kind:R,model:R==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(R=>[R.name,R.id]),i.model.id,R=>a({model:h.find(S=>S.id===R)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let f=l(Array.from({length:Gd-1},(R,S)=>[String(S+2),String(S+2)]),String(i.colors.length),R=>{let S=i.colors.slice(0,Number(R));for(;S.length<Number(R);)S.push(S.at(-1));a({colors:S})});f.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(f);let d=document.createElement("div");d.className="terrain-swatches";for(let[R,S]of i.colors.entries()){let b=document.createElement("input");b.type="color",b.value=S,b.setAttribute("aria-label","Teinte "+(R+1)+" \xB7 r\xE8gle "+(s+1)),b.onchange=()=>a({colors:i.colors.map((L,U)=>U===R?b.value:L)}),d.append(b)}u.append(d),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,Si,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,R=>a({fit:R})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,Si,.05)),o("Variation de taille",c("variation",0,Hd,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[R,S,b,L]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let U=document.createElement("label"),z=document.createElement("input");U.textContent=S,z.type="number",z.min=b,z.max=L,z.step="any",z.value=i.scatter?.[R]??_[R],z.onchange=()=>{Number.isFinite(z.valueAsNumber)&&a({scatter:{...i.scatter,[R]:z.valueAsNumber}})},U.append(z),m.append(U)}if(i.scatter){let R=document.createElement("button");R.type="button",R.textContent="R\xE9initialiser la zone",R.onclick=()=>a({scatter:null}),x.append(R)}let M=document.createElement("td");M.dataset.wide="",M.append(x),r.append(M);let y=document.createElement("output"),E=t[s]??{count:0,requested:0,area:0};y.textContent=E.count+" / "+E.requested+" \xB7 "+E.area.toFixed(1)+" m\xB2",E.requested>Si&&(y.textContent+=" \xB7 plafond "+Si);let C=o("Affich\xE9es / demand\xE9es",y,!0),I=document.createElement("button");return I.type="button",I.textContent="Retirer la ligne",I.onclick=()=>{Mt(),e.splice(s,1),bt()},C.append(I),r}))}B("terrain-add-rule").onclick=()=>{let n=nt();!n?.terrain||n.terrain.rules.length>=Dh||(Mt(),n.terrain.rules.push(ja({seed:n.terrain.seed+n.terrain.rules.length})),bt(),B("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};B("terrain-stitch").onclick=()=>{let n=nt(),e=ie.pieces[Number(B("terrain-neighbor").value)],t=Ce.clamp(Number(B("terrain-seam-width").value)||1.5,.1,25),i=Vg(n,e,t);if(!i)return ct("Rapproche les bords \xE0 moins de 25 cm.");Mt(),ie.pieces[gt]=i.piece,bt(),ct(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};B("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=nt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!ie.pieces.includes(t))return;Mt(),t.terrain.grassTexture=o,bt(),ct("Texture d\u2019herbe import\xE9e.")}catch(i){ct(i.message)}};B("terrain-grassTexture-clear").onclick=()=>{nt()?.terrain&&(Mt(),nt().terrain.grassTexture=null,bt())};for(let n of H0)B("terrain-"+n).onchange=e=>{let t=nt();t?.terrain&&(Mt(),t.terrain=n==="detail"?Wd(t.terrain,Number(e.target.value)):Rs({...t.terrain,[n]:Number(e.target.value)}),bt())};function W0(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function X0(n){let e=nt();e?.terrain&&(Mt(),e.terrain=Rs({...e.terrain,reliefArea:n},e.w*e.d),bt())}B("terrain-relief-local").onchange=n=>{let e=nt();e?.terrain&&X0(n.target.checked?W0(e):null)};for(let n of["x","z","radius","blend"])B("terrain-relief-"+n).onchange=e=>{let t=nt(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&X0({...t.terrain.reliefArea,[n]:i})};B("terrain-reset").onclick=()=>{nt()?.terrain&&(Mt(),nt().terrain.heights=null,bt())};function q0(n,e){Lf(n,e);let t=Us.intersectObjects(vt.children,!1).find(a=>ie.pieces[vt.children.indexOf(a.object)]?.terrain),i=t?vt.children.indexOf(t.object):-1,s=ie.pieces[i];if(!s?.terrain||(_t.recorded||(Mt(),_t.recorded=!0,_t.flattenY=t.point.y,Lo(i),B("terrain-controls").open=!0),i!==gt))return;let r={mode:B("terrain-brush").value,radius:Number(B("brush-radius").value),strength:Number(B("brush-strength").value),target:_t.flattenY};if(!Gg(s,t.point.x,t.point.z,r))return;let o=vt.children[i];o.geometry.dispose(),o.geometry=qd(s),Rd(o.geometry,s),wi?.update(),ci(),nn()}B("texture-style").replaceChildren(...Qd.map((n,e)=>new Option(n,e)));B("texture-create").onclick=()=>{let n=nt();if(!n)return;let e=n0(Number(B("texture-style").value),B("texture-tint").value);Mt(),n.texture=e.toDataURL("image/webp",.85),bt(),ct("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};B("view-top").onclick=()=>{let n=Lt.target,e=Math.max(10,Nt.position.distanceTo(n));Nt.position.copy(n).add(new v(0,e,.001)),Lt.update(),nn()};B("view-perspective").onclick=()=>{Nt.position.copy(Lt.target).add(new v(16,15,24)),vr()};B("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=ie.spawn,s=new v(0,0,-1).applyAxisAngle(Qh,Ce.degToRad(i));Nt.position.set(n,e+.87,t),Lt.target.copy(Nt.position).addScaledVector(s,5),Nt.lookAt(Lt.target),nn()};var v0={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||_t||Ke.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")z0();else if(e==="d")Rf();else return;else{if(n.altKey)return;if(v0[e])zi(v0[e]);else if(e==="f")vr();else if(e==="delete"||e==="backspace")Cf();else return}n.preventDefault()});var mr=new xn;cn.add(mr);function j1(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function yf(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function J1(){nl=vt.children.map(j1),Is={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of nl.entries()){for(let i of["triangles","vertices","instances"])Is[i]+=t[i];(Is.heavy<0||t.triangles>nl[Is.heavy].triangles)&&(Is.heavy=e)}B("scene-mesh-stats").textContent="Objets de la carte \xB7 "+yf(Is);let n=Is.heavy;B("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+ie.pieces[n].name+" \xB7 "+yf(nl[n]),B("scene-select-heavy").disabled=n<0}B("scene-select-heavy").onclick=()=>{let n=Is?.heavy??-1;n<0||(Lo(n),window.setInspectorTab("object"),B("focus-piece").click())};function Y0(){if(!B("debug-stats"))return;let n=No.info.render.triangles,e=ie?.pieces?.length??0;B("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(ie?.worldSize??240)+" m"}function Z0(){for(let n of[...mr.children])mr.remove(n),n.geometry.dispose(),n.material.dispose();Io.visible=B("debug-grid").checked;for(let n of vt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=B("debug-wire").checked;if(B("debug-hitboxes").checked){let e=vt.children.indexOf(n),t=ie.pieces[e];if(t?.model){let i=new v(t.w,t.h,t.d),s=Ig(t.model,i);if(s)for(let r of s){let o=new Ge(...r.size),a=new pe(o,new Jt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),mr.add(a)}else{let r=Pg(t.model,i),o=new pe(r,new Jt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),mr.add(o)}}else if(t?.primitive==="ramp"){let i=new Ys(new ba(n.geometry),new ti({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),mr.add(i)}else mr.add(new ao(n,"#fa9945"))}}nn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])B(n).onchange=Z0;B("debug-coords").onchange=()=>{B("debug-coords").checked||Y0()};for(let n of[Kt,rt])n.addEventListener("pointermove",e=>{if(!B("debug-coords").checked||_t||li)return;let t=Do(n,e);if(!t)return;let i=t.point;B("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+ie.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(S0);if(n){let e=an(n);if(JSON.stringify(e)!==JSON.stringify(Zg()))if(e.arenaBase&&!e.editableArena){let t=Mf(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=Ao?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,ie=an(e),ct("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):ie=e}else ie=e}}catch{}z1();zi("move");bt();eu();tu();vr();ll();if(uf){let n=Rn.find(e=>e.id===uf);n?(B("place-model").click(),ct("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):ct("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Ti("d\xE9marrage termin\xE9",{version:"R38.9",name:ie.name,pi\u00E8ces:ie.pieces.length});})();
