(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uf=0,xu=1,Nf=2;var _u=1,Ff=2,yi=3,si=0,on=1,Yt=2,Ni=0,Ts=1,ra=2,yu=3,vu=4,Of=5,Ki=100,Bf=101,zf=102,kf=103,Vf=104,Gf=200,Hf=201,Wf=202,Xf=203,gl=204,xl=205,qf=206,Yf=207,Zf=208,jf=209,Jf=210,Kf=211,$f=212,Qf=213,ep=214,ql=0,Yl=1,Zl=2,Es=3,jl=4,Jl=5,Kl=6,$l=7,Ql=0,tp=1,np=2,Fi=0,ip=1,sp=2,rp=3,op=4,ap=5,lp=6,cp=7;var Mu=300,Fs=301,Os=302,Gr=303,ec=304,oa=306,Fn=1e3,Ji=1001,_l=1002,Sn=1003,hp=1004;var aa=1005;var sn=1006,tc=1007;var En=1008;var ai=1009,bu=1010,Su=1011,Hr=1012,nc=1013,ss=1014,li=1015,Wr=1016,ic=1017,sc=1018,Xr=1020,wu=35902,Tu=35899,Eu=1021,Au=1022,An=1023,wr=1026,qr=1027,rc=1028,oc=1029,Cu=1030,ac=1031;var lc=1033,la=33776,ca=33777,ha=33778,ua=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,xc=37809,_c=37810,yc=37811,vc=37812,Mc=37813,bc=37814,Sc=37815,wc=37816,Tc=37817,Ec=37818,Ac=37819,Cc=37820,Rc=37821,Pc=36492,Ic=36494,Lc=36495,Dc=36283,Uc=36284,Nc=36285,Fc=36286;var Ao=2300,yl=2301,pl=2302,ru=2400,ou=2401,au=2402;var up=3200,dp=3201;var Oc=0,fp=1,Oi="",gt="srgb",As="srgb-linear",Co="linear",_t="srgb";var ws=7680;var lu=519,pp=512,mp=513,gp=514,Ru=515,xp=516,_p=517,yp=518,vp=519,vl=35044,da=35048;var Pu="300 es",ii=2e3,Ro=2001;var pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$d=1234567,So=Math.PI/180,Tr=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function c0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function h0(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function d0(i,e=1){return e-Math.abs(Iu(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function m0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function x0(i){return i*(.5-Math.random())}function _0(i){i!==void 0&&($d=i);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(i){return i*So}function v0(i){return i*Tr}function M0(i){return(i&i-1)===0&&i!==0}function b0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function S0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:So,RAD2DEG:Tr,generateUUID:fi,clamp:Ze,euclideanModulo:Iu,mapLinear:c0,inverseLerp:h0,lerp:wo,damp:u0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:x0,seededRandom:_0,degToRad:y0,radToDeg:v0,isPowerOfTwo:M0,ceilPowerOfTwo:b0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:w0,normalize:xt,denormalize:ni},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let A=Math.sqrt(S),E=Math.atan2(A,p*b);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let y=a*b;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ih=new v,Qd=new ht,$e=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],S=s[4],y=s[7],A=s[2],E=s[5],P=s[8];return r[0]=o*_+a*b+l*A,r[3]=o*g+a*S+l*E,r[6]=o*p+a*y+l*P,r[1]=c*_+h*b+u*A,r[4]=c*g+h*S+u*E,r[7]=c*p+h*y+u*P,r[2]=f*_+d*b+m*A,r[5]=f*g+d*S+m*E,r[8]=f*p+d*y+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new $e;function Lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){let i=Er("canvas");return i.style.display="block",i}var ef={};function Ar(i){i in ef||(ef[i]=!0,console.warn(i))}function bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var tf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}var ut=T0();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ir,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ir===void 0&&(ir=Er("canvas")),ir.width=e.width,ir.height=e.height;let s=ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,Cr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dh(s[o].image)):r.push(Dh(s[o]))}else r=Dh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A0=0,Uh=new v,dn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ji,s=Ji,r=sn,o=En,a=An,l=ai,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=fi(),this.name="",this.source=new Cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Mu;dn.DEFAULT_ANISOTROPY=1;var zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(d+1)/2,A=(p+1)/2,E=(h+f)/4,P=(u+_)/4,I=(m+g)/4;return S>y&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=P/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=I/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new dn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),ka.subVectors(this.max,uo),sr.subVectors(e.a,uo),rr.subVectors(e.b,uo),or.subVectors(e.c,uo),Wi.subVectors(rr,sr),Xi.subVectors(or,rr),vs.subVectors(sr,or);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-vs.z,vs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,vs.z,0,-vs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-vs.y,vs.x,0];return!Nh(t,sr,rr,or,ka)||(t=[1,0,0,0,1,0,0,0,1],!Nh(t,sr,rr,or,ka))?!1:(Va.crossVectors(Wi,Xi),t=[Va.x,Va.y,Va.z],Nh(t,sr,rr,or,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new v,new v,new v,new v,new v,new v,new v,new v],Qn=new v,za=new jt,sr=new v,rr=new v,or=new v,Wi=new v,Xi=new v,vs=new v,uo=new v,ka=new v,Va=new v,Ms=new v;function Nh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var C0=new jt,fo=new v,Fh=new v,Xn=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):C0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Fh)),this.expandByPoint(fo.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ci=new v,Oh=new v,Ga=new v,qi=new v,Bh=new v,Ha=new v,zh=new v,$i=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oh.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=qi.dot(this.direction),l=-qi.dot(Ga),c=qi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oh).addScaledVector(Ga,f),d}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){Bh.subVectors(t,e),Ha.subVectors(n,e),zh.crossVectors(Bh,Ha);let o=this.direction.dot(zh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let l=a*this.direction.dot(Ha.crossVectors(qi,Ha));if(l<0)return null;let c=a*this.direction.dot(Bh.cross(qi));if(c<0||l+c>o)return null;let h=-a*qi.dot(zh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,P0)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Yi.crossVectors(n,Un),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Yi.crossVectors(n,Un)),Yi.normalize(),Wa.crossVectors(Un,Yi),s[0]=Yi.x,s[4]=Wa.x,s[8]=Un.x,s[1]=Yi.y,s[5]=Wa.y,s[9]=Un.y,s[2]=Yi.z,s[6]=Wa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],S=n[7],y=n[11],A=n[15],E=s[0],P=s[4],I=s[8],w=s[12],M=s[1],L=s[5],N=s[9],G=s[13],H=s[2],V=s[6],q=s[10],Q=s[14],W=s[3],ee=s[7],pe=s[11],Te=s[15];return r[0]=o*E+a*M+l*H+c*W,r[4]=o*P+a*L+l*V+c*ee,r[8]=o*I+a*N+l*q+c*pe,r[12]=o*w+a*G+l*Q+c*Te,r[1]=h*E+u*M+f*H+d*W,r[5]=h*P+u*L+f*V+d*ee,r[9]=h*I+u*N+f*q+d*pe,r[13]=h*w+u*G+f*Q+d*Te,r[2]=m*E+_*M+g*H+p*W,r[6]=m*P+_*L+g*V+p*ee,r[10]=m*I+_*N+g*q+p*pe,r[14]=m*w+_*G+g*Q+p*Te,r[3]=b*E+S*M+y*H+A*W,r[7]=b*P+S*L+y*V+A*ee,r[11]=b*I+S*N+y*q+A*pe,r[15]=b*w+S*G+y*Q+A*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],b=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,S=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,y=h*_*c-m*u*c+m*a*d-o*_*d-h*a*p+o*u*p,A=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,E=t*b+n*S+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=b*P,e[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*P,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*p+n*l*p)*P,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*P,e[4]=S*P,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*P,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*P,e[10]=(o*_*r-m*a*r+m*n*c-t*_*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*P,e[12]=A*P,e[13]=(h*_*s-m*u*s+m*n*f-t*_*f-h*n*g+t*u*g)*P,e[14]=(m*a*s-o*_*s-m*n*l+t*_*l+o*n*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,b=l*c,S=l*h,y=l*u,A=n.x,E=n.y,P=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+y)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+p))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(m+S)*P,s[9]=(g-b)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),a=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,h=1/o,u=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===ii)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ro)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===ii)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ro)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new v,ei=new ct,R0=new v(0,0,0),P0=new v(1,1,1),Yi=new v,Wa=new v,Un=new v,sf=new ct,rf=new ht,Xt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xt.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I0=0,of=new v,lr=new ht,Ri=new ct,Xa=new v,po=new v,L0=new v,D0=new ht,af=new v(1,0,0),lf=new v(0,1,0),cf=new v(0,0,1),hf={type:"added"},U0={type:"removed"},cr={type:"childadded",child:null},kh={type:"childremoved",child:null},Ut=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new v,t=new Xt,n=new ht,s=new v(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(po,Xa,this.up):Ri.lookAt(Xa,po,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Ri),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new v(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new v,Pi=new v,Vh=new v,Ii=new v,hr=new v,ur=new v,uf=new v,Gh=new v,Hh=new v,Wh=new v,Xh=new zt,qh=new zt,Yh=new zt,bn=class i{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Pi.subVectors(n,t),Vh.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Pi),l=ti.dot(Vh),c=Pi.dot(Pi),h=Pi.dot(Vh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Xh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,n),Yh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xh,r.x),o.addScaledVector(qh,r.y),o.addScaledVector(Yh,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Pi.subVectors(e,t),ti.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,n),ur.subVectors(r,n),Gh.subVectors(e,n);let l=hr.dot(Gh),c=ur.dot(Gh);if(l<=0&&c<=0)return t.copy(n);Hh.subVectors(e,s);let h=hr.dot(Hh),u=ur.dot(Hh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(hr,o);Wh.subVectors(e,r);let d=hr.dot(Wh),m=ur.dot(Wh);if(m>=0&&d<=m)return t.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ur,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return uf.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(uf,a);let p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(hr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Zh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Iu(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zh(o,r,e+1/3),this.g=Zh(o,r,e),this.b=Zh(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=Sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ut.workingToColorSpace(ln.copy(this),e),Math.round(Ze(ln.r*255,0,255))*65536+Math.round(Ze(ln.g*255,0,255))*256+Math.round(Ze(ln.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=gt){ut.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(qa);let n=wo(Zi.h,qa.h,t),s=wo(Zi.s,qa.s,t),r=wo(Zi.l,qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ve;Ve.NAMES=Sp;var N0=0,ri=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ts,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==xl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new v,Ya=new ae,F0=0,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}};var Io=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},O0=0,Wn=new ct,jh=new Ut,dr=new v,Nn=new jt,mo=new jt,en=new v,rt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Lo:Io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Nn.min,mo.min),Nn.expandByPoint(en),en.addVectors(Nn.max,mo.max),Nn.expandByPoint(en)):(Nn.expandByPoint(mo.min),Nn.expandByPoint(mo.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),en.add(dr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new v,l[I]=new v;let c=new v,h=new v,u=new v,f=new ae,d=new ae,m=new ae,_=new v,g=new v;function p(I,w,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(_),a[w].add(_),a[M].add(_),l[I].add(g),l[w].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,w=b.length;I<w;++I){let M=b[I],L=M.start,N=M.count;for(let G=L,H=L+N;G<H;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new v,y=new v,A=new v,E=new v;function P(I){A.fromBufferAttribute(s,I),E.copy(A);let w=a[I];S.copy(w),S.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);let L=y.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,w=b.length;I<w;++I){let M=b[I],L=M.start,N=M.count;for(let G=L,H=L+N;G<H;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new yt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new ct,bs=new $i,Za=new Xn,ff=new v,ja=new v,Ja=new v,Ka=new v,Jh=new v,$a=new v,pf=new v,Qa=new v,fe=class extends Ut{constructor(e=new rt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Jh.fromBufferAttribute(u,e),o?$a.addScaledVector(Jh,h):$a.addScaledVector(Jh.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Za.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Za,ff)===null||bs.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(df.copy(r).invert(),bs.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,A=S;y<A;y+=3){let E=a.getX(y),P=a.getX(y+1),I=a.getX(y+2);s=el(this,p,e,n,c,h,u,E,P,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);s=el(this,o,e,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,A=S;y<A;y+=3){let E=y,P=y+1,I=y+2;s=el(this,p,e,n,c,h,u,E,P,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let b=g,S=g+1,y=g+2;s=el(this,o,e,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function B0(i,e,t,n,s,r,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:i}}function el(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ja),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Ka);let h=B0(i,e,t,n,ja,Ja,Ka,pf);if(h){let u=new v;bn.getBarycoord(pf,ja,Ja,Ka,u),s&&(h.uv=bn.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new v,materialIndex:0};bn.getNormal(ja,Ja,Ka,f.normal),h.face=f,h.barycoord=u}return h}var We=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function m(_,g,p,b,S,y,A,E,P,I,w){let M=y/P,L=A/I,N=y/2,G=A/2,H=E/2,V=P+1,q=I+1,Q=0,W=0,ee=new v;for(let pe=0;pe<q;pe++){let Te=pe*L-G;for(let Z=0;Z<V;Z++){let X=Z*M-N;ee[_]=X*b,ee[g]=Te*S,ee[p]=H,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[p]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Z/P),u.push(1-pe/I),Q+=1}}for(let pe=0;pe<I;pe++)for(let Te=0;Te<P;Te++){let Z=f+Te+V*pe,X=f+Te+V*(pe+1),be=f+(Te+1)+V*(pe+1),ue=f+(Te+1)+V*pe;l.push(Z,X,ue),l.push(X,be,ue),W+=6}a.addGroup(d,W,w),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=Bs(i[t]);for(let s in n)e[s]=n[s]}return e}function z0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var wp={clone:Bs,merge:pn},k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Do=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new v,mf=new ae,gf=new ae,cn=class extends Do{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fr=-90,pr=1,wl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new cn(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new cn(fr,pr,e,t);o.layers=this.layers,this.add(o);let a=new cn(fr,pr,e,t);a.layers=this.layers,this.add(a);let l=new cn(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new cn(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Uo=class extends dn{constructor(e=[],t=Fs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ni});r.uniforms.tEquirect.value=t;let o=new fe(s,r),a=t.minFilter;return t.minFilter===En&&(t.minFilter=sn),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},un=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var No=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new v,Lr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mr,go=new v,gr=new v,xr=new v,_r=new ae,xo=new ae,Tp=new ct,tl=new v,_o=new v,nl=new v,xf=new ae,Kh=new ae,_f=new ae,Oo=class extends Ut{constructor(e=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Lr(n,3,0,!1)),mr.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;il(tl.set(-.5,-.5,0),xr,o,gr,s,r),il(_o.set(.5,-.5,0),xr,o,gr,s,r),il(nl.set(.5,.5,0),xr,o,gr,s,r),xf.set(0,0),Kh.set(1,0),_f.set(1,1);let a=e.ray.intersectTriangle(tl,_o,nl,!1,go);if(a===null&&(il(_o.set(-.5,.5,0),xr,o,gr,s,r),Kh.set(0,1),a=e.ray.intersectTriangle(tl,nl,_o,!1,go),a===null))return;let l=e.ray.origin.distanceTo(go);l<e.near||l>e.far||t.push({distance:l,point:go.clone(),uv:bn.getInterpolation(go,tl,_o,nl,xf,Kh,_f,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function il(i,e,t,n,s,r){_r.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xo.x=r*_r.x-s*_r.y,xo.y=s*_r.x+r*_r.y):xo.copy(_r),i.copy(e),i.x+=xo.x,i.y+=xo.y,i.applyMatrix4(Tp)}var gi=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Sn,h=Sn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new ct,yf=new ct,sl=[],vf=new jt,H0=new ct,yo=new fe,vo=new Xn,Bo=class extends fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),vf.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),vo.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),yf.multiplyMatrices(n,yr),yo.matrixWorld=yf,yo.raycast(e,sl);for(let o=0,a=sl.length;o<a;o++){let l=sl[o];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(s*this.count),s,this.count,rc,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$h=new v,W0=new v,X0=new $e,hn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$h.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($h),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||X0.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Xn,q0=new ae(.5,.5),rl=new v,Nr=class{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,o=new hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],S=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,p-m,A-b).normalize(),s[1].setComponents(c+o,d+h,p+m,A+b).normalize(),s[2].setComponents(c+a,d+u,p+_,A+S).normalize(),s[3].setComponents(c-a,d-u,p-_,A-S).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,p-g,A-y).normalize();else if(s[4].setComponents(c-l,d-f,p-g,A-y).normalize(),t===ii)s[5].setComponents(c+l,d+f,p+g,A+y).normalize();else if(t===Ro)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=q0.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xi=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new v,Al=new v,Mf=new ct,Mo=new $i,ol=new Xn,Qh=new v,bf=new v,wn=class extends Ut{constructor(e=new rt,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),Al.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(Al);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Mf.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=h.getX(_),b=h.getX(_+1),S=al(this,e,Mo,l,p,b,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=al(this,e,Mo,l,_,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=al(this,e,Mo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=al(this,e,Mo,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function al(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(El.fromBufferAttribute(a,s),Al.fromBufferAttribute(a,r),t.distanceSqToSegment(El,Al,Qh,bf)>n)return;Qh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qh);if(!(c<e.near||c>e.far))return{distance:c,point:bf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Sf=new v,wf=new v,zo=class extends wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sf.fromBufferAttribute(t,s),wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sf.distanceTo(wf);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ko=class extends wn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Di=class extends dn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vo=class extends dn{constructor(e,t,n=ss,s,r,o,a=Sn,l=Sn,c,h=wr,u=1){if(h!==wr&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Go=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class i extends rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,_=s+1,g=new v,p=new v;for(let b=0;b<=m;b++){let S=0,y=0,A=0,E=0;if(b<=n){let w=b/n,M=w*Math.PI/2;y=-h-e*Math.cos(M),A=e*Math.sin(M),E=-e*Math.cos(M),S=w*u}else if(b<=n+r){let w=(b-n)/r;y=-h+w*t,A=e,E=0,S=u+w*f}else{let w=(b-n-r)/n,M=w*Math.PI/2;y=h+e*Math.sin(M),A=e*Math.cos(M),E=e*Math.sin(M),S=u+f+w*u}let P=Math.max(0,Math.min(1,S/d)),I=0;b===0?I=.5/s:b===m&&(I=-.5/s);for(let w=0;w<=s;w++){let M=w/s,L=M*Math.PI*2,N=Math.sin(L),G=Math.cos(L);p.x=-A*G,p.y=y,p.z=A*N,a.push(p.x,p.y,p.z),g.set(-A*G,E,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+I,P)}if(b>0){let w=(b-1)*_;for(let M=0;M<s;M++){let L=w+M,N=w+M+1,G=b*_+M,H=b*_+M+1;o.push(L,N,G),o.push(N,H,G)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fn=class i extends rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],g=n/2,p=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function b(){let y=new v,A=new v,E=0,P=(t-e)/n;for(let I=0;I<=r;I++){let w=[],M=I/r,L=M*(t-e)+e;for(let N=0;N<=s;N++){let G=N/s,H=G*l+a,V=Math.sin(H),q=Math.cos(H);A.x=L*V,A.y=-M*n+g,A.z=L*q,u.push(A.x,A.y,A.z),y.set(V,P,q).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-M),w.push(m++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let M=_[w][I],L=_[w+1][I],N=_[w+1][I+1],G=_[w][I+1];(e>0||w!==0)&&(h.push(M,L,G),E+=3),(t>0||w!==r-1)&&(h.push(L,N,G),E+=3)}c.addGroup(p,E,0),p+=E}function S(y){let A=m,E=new ae,P=new v,I=0,w=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let L=m;for(let N=0;N<=s;N++){let H=N/s*l+a,V=Math.cos(H),q=Math.sin(H);P.x=w*q,P.y=g*M,P.z=w*V,u.push(P.x,P.y,P.z),f.push(0,M,0),E.x=V*.5+.5,E.y=q*.5*M+.5,d.push(E.x,E.y),m++}for(let N=0;N<s;N++){let G=A+N,H=L+N;y===!0?h.push(H,H+1,G):h.push(H+1,H,G),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cs=class i extends vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class i extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new v,y=new v,A=new v;for(let E=0;E<t.length;E+=3)d(t[E+0],S),d(t[E+1],y),d(t[E+2],A),l(S,y,A,b)}function l(b,S,y,A){let E=A+1,P=[];for(let I=0;I<=E;I++){P[I]=[];let w=b.clone().lerp(y,I/E),M=S.clone().lerp(y,I/E),L=E-I;for(let N=0;N<=L;N++)N===0&&I===E?P[I][N]=w:P[I][N]=w.clone().lerp(M,N/L)}for(let I=0;I<E;I++)for(let w=0;w<2*(E-I)-1;w++){let M=Math.floor(w/2);w%2===0?(f(P[I][M+1]),f(P[I+1][M]),f(P[I][M])):(f(P[I][M+1]),f(P[I+1][M+1]),f(P[I+1][M]))}}function c(b){let S=new v;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(b),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let b=new v;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let y=g(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let S=o[b+0],y=o[b+2],A=o[b+4],E=Math.max(S,y,A),P=Math.min(S,y,A);E>.9&&P<.1&&(S<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,S){let y=b*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function m(){let b=new v,S=new v,y=new v,A=new v,E=new ae,P=new ae,I=new ae;for(let w=0,M=0;w<r.length;w+=9,M+=6){b.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),A.copy(b).add(S).add(y).divideScalar(3);let L=g(A);_(E,M+0,b,L),_(P,M+2,S,L),_(I,M+4,y,L)}}function _(b,S,y,A){A<0&&b.x===1&&(o[S]=b.x-1),y.x===0&&y.z===0&&(o[S]=A/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new v,s=[],r=[],o=[],a=new v,l=new ct;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Or{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ll=new v,eu=new Uu,tu=new Uu,nu=new Uu,Rl=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new v){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ll.subVectors(s[0],s[1]).add(s[0]),c=ll);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ll.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ll),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),eu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),tu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),nu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(eu.calc(l),tu.calc(l),nu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new v().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Y0(i,e){let t=1-i;return t*t*e}function Z0(i,e){return 2*(1-i)*i*e}function j0(i,e){return i*i*e}function To(i,e,t,n){return Y0(i,e)+Z0(i,t)+j0(i,n)}function J0(i,e){let t=1-i;return t*t*t*e}function K0(i,e){let t=1-i;return 3*t*t*i*e}function $0(i,e){return 3*(1-i)*i*i*e}function Q0(i,e){return i*i*i*e}function Eo(i,e,t,n,s){return J0(i,e)+K0(i,t)+$0(i,n)+Q0(i,s)}var Ho=class extends On{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends On{constructor(e=new v,t=new v,n=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new v){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y),Eo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends On{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends On{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends On{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends On{constructor(e=new v,t=new v,n=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new v){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y),To(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Tf(a,l.x,c.x,h.x,u.x),Tf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},cu=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Rl,CubicBezierCurve:Ho,CubicBezierCurve3:Pl,EllipseCurve:Or,LineCurve:Wo,LineCurve3:Il,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Ll,SplineCurve:qo}),Dl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new cu[s.type]().fromJSON(s))}return this}},Yo=class extends Dl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xo(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ho(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Or(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ui=class extends Yo{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yo().fromJSON(s))}return this}};function ex(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ep(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=rx(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Zo(r,o,t,a,l,c,0),o}function Ep(i,e,t,n,s){let r;if(s===gx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ef(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ef(o/n|0,i[o],i[o+1],r);return r&&Br(r,r.next)&&(Jo(r),r=r.next),r}function Rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Jo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?nx(i,n,s,r):tx(i)){e.push(l.i,i.i,c.i),Jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ix(Rs(i),e),Zo(i,e,t,n,s,r,2)):o===2&&sx(i,e,t,n,s,r):Zo(Rs(i),e,t,n,s,r,1);break}}}function tx(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&bo(s,a,r,l,o,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),_=Math.max(a,l,c),g=Math.max(h,u,f),p=hu(d,m,e,t,n),b=hu(_,g,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=b;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&bo(a,h,l,u,c,f,S.x,S.y)&&Bt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&bo(a,h,l,u,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&bo(a,h,l,u,c,f,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&bo(a,h,l,u,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ix(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Br(n,s)&&Cp(n,t,t.next,s)&&jo(n,s)&&jo(s,n)&&(e.push(n.i,t.i,s.i),Jo(t),Jo(t.next),t=i=s),t=t.next}while(t!==i);return Rs(t)}function sx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fx(o,a)){let l=Rp(o,a);o=Rs(o,o.next),l=Rs(l,l.next),Zo(o,e,t,n,s,r,0),Zo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Ep(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dx(c))}s.sort(ox);for(let r=0;r<s.length;r++)t=ax(s[r],t);return t}function ox(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ax(i,e){let t=lx(i,e);if(!t)return e;let n=Rp(t,i);return Rs(n,n.next),Rs(t,t.next)}function lx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ap(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);jo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&cx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function cx(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function hx(i,e,t,n){let s=i;do s.z===0&&(s.z=hu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function hu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ap(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ap(i,e,t,n,s,r,o,a)}function fx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!px(i,e)&&(jo(i,e)&&jo(e,i)&&mx(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Br(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function Cp(i,e,t,n){let s=hl(Bt(i,e,t)),r=hl(Bt(i,e,n)),o=hl(Bt(t,n,i)),a=hl(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&cl(i,t,e)||r===0&&cl(i,n,e)||o===0&&cl(t,i,n)||a===0&&cl(t,e,n))}function cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hl(i){return i>0?1:i<0?-1:0}function px(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function jo(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function mx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rp(i,e){let t=uu(i.i,i.x,i.y),n=uu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ef(i,e,t,n){let s=uu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var du=class{static triangulate(e,t,n=2){return ex(e,t,n)}},di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Af(e),Cf(n,e);let o=e.length;t.forEach(Af);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cf(n,t[l]);let a=du.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Af(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ps=class i extends rt{constructor(e=new Ui([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:xx,S,y=!1,A,E,P,I;p&&(S=p.getSpacedPoints(h),y=!0,f=!1,A=p.computeFrenetFrames(h,!1),E=new v,P=new v,I=new v),f||(g=0,d=0,m=0,_=0);let w=a.extractPoints(c),M=w.shape,L=w.holes;if(!di.isClockWise(M)){M=M.reverse();for(let ce=0,re=L.length;ce<re;ce++){let te=L[ce];di.isClockWise(te)&&(L[ce]=te.reverse())}}function G(ce){let te=10000000000000001e-36,ne=ce[0];for(let we=1;we<=ce.length;we++){let ge=we%ce.length,Ee=ce[ge],Je=Ee.x-ne.x,qe=Ee.y-ne.y,C=Je*Je+qe*qe,x=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ne.x),Math.abs(ne.y)),R=te*x*x;if(C<=R){ce.splice(ge,1),we--;continue}ne=Ee}}G(M),L.forEach(G);let H=L.length,V=M;for(let ce=0;ce<H;ce++){let re=L[ce];M=M.concat(re)}function q(ce,re,te){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(re,te)}let Q=M.length;function W(ce,re,te){let ne,we,ge,Ee=ce.x-re.x,Je=ce.y-re.y,qe=te.x-ce.x,C=te.y-ce.y,x=Ee*Ee+Je*Je,R=Ee*C-Je*qe;if(Math.abs(R)>Number.EPSILON){let F=Math.sqrt(x),K=Math.sqrt(qe*qe+C*C),k=re.x-Je/F,me=re.y+Ee/F,ie=te.x-C/K,de=te.y+qe/K,he=((ie-k)*C-(de-me)*qe)/(Ee*C-Je*qe);ne=k+Ee*he-ce.x,we=me+Je*he-ce.y;let $=ne*ne+we*we;if($<=2)return new ae(ne,we);ge=Math.sqrt($/2)}else{let F=!1;Ee>Number.EPSILON?qe>Number.EPSILON&&(F=!0):Ee<-Number.EPSILON?qe<-Number.EPSILON&&(F=!0):Math.sign(Je)===Math.sign(C)&&(F=!0),F?(ne=-Je,we=Ee,ge=Math.sqrt(x)):(ne=Ee,we=Je,ge=Math.sqrt(x/2))}return new ae(ne/ge,we/ge)}let ee=[];for(let ce=0,re=V.length,te=re-1,ne=ce+1;ce<re;ce++,te++,ne++)te===re&&(te=0),ne===re&&(ne=0),ee[ce]=W(V[ce],V[te],V[ne]);let pe=[],Te,Z=ee.concat();for(let ce=0,re=H;ce<re;ce++){let te=L[ce];Te=[];for(let ne=0,we=te.length,ge=we-1,Ee=ne+1;ne<we;ne++,ge++,Ee++)ge===we&&(ge=0),Ee===we&&(Ee=0),Te[ne]=W(te[ne],te[ge],te[Ee]);pe.push(Te),Z=Z.concat(Te)}let X;if(g===0)X=di.triangulateShape(V,L);else{let ce=[],re=[];for(let te=0;te<g;te++){let ne=te/g,we=d*Math.cos(ne*Math.PI/2),ge=m*Math.sin(ne*Math.PI/2)+_;for(let Ee=0,Je=V.length;Ee<Je;Ee++){let qe=q(V[Ee],ee[Ee],ge);Ue(qe.x,qe.y,-we),ne===0&&ce.push(qe)}for(let Ee=0,Je=H;Ee<Je;Ee++){let qe=L[Ee];Te=pe[Ee];let C=[];for(let x=0,R=qe.length;x<R;x++){let F=q(qe[x],Te[x],ge);Ue(F.x,F.y,-we),ne===0&&C.push(F)}ne===0&&re.push(C)}}X=di.triangulateShape(ce,re)}let be=X.length,ue=m+_;for(let ce=0;ce<Q;ce++){let re=f?q(M[ce],Z[ce],ue):M[ce];y?(P.copy(A.normals[0]).multiplyScalar(re.x),E.copy(A.binormals[0]).multiplyScalar(re.y),I.copy(S[0]).add(P).add(E),Ue(I.x,I.y,I.z)):Ue(re.x,re.y,0)}for(let ce=1;ce<=h;ce++)for(let re=0;re<Q;re++){let te=f?q(M[re],Z[re],ue):M[re];y?(P.copy(A.normals[ce]).multiplyScalar(te.x),E.copy(A.binormals[ce]).multiplyScalar(te.y),I.copy(S[ce]).add(P).add(E),Ue(I.x,I.y,I.z)):Ue(te.x,te.y,u/h*ce)}for(let ce=g-1;ce>=0;ce--){let re=ce/g,te=d*Math.cos(re*Math.PI/2),ne=m*Math.sin(re*Math.PI/2)+_;for(let we=0,ge=V.length;we<ge;we++){let Ee=q(V[we],ee[we],ne);Ue(Ee.x,Ee.y,u+te)}for(let we=0,ge=L.length;we<ge;we++){let Ee=L[we];Te=pe[we];for(let Je=0,qe=Ee.length;Je<qe;Je++){let C=q(Ee[Je],Te[Je],ne);y?Ue(C.x,C.y+S[h-1].y,S[h-1].x+te):Ue(C.x,C.y,u+te)}}}J(),se();function J(){let ce=s.length/3;if(f){let re=0,te=Q*re;for(let ne=0;ne<be;ne++){let we=X[ne];Le(we[2]+te,we[1]+te,we[0]+te)}re=h+g*2,te=Q*re;for(let ne=0;ne<be;ne++){let we=X[ne];Le(we[0]+te,we[1]+te,we[2]+te)}}else{for(let re=0;re<be;re++){let te=X[re];Le(te[2],te[1],te[0])}for(let re=0;re<be;re++){let te=X[re];Le(te[0]+Q*h,te[1]+Q*h,te[2]+Q*h)}}n.addGroup(ce,s.length/3-ce,0)}function se(){let ce=s.length/3,re=0;Pe(V,re),re+=V.length;for(let te=0,ne=L.length;te<ne;te++){let we=L[te];Pe(we,re),re+=we.length}n.addGroup(ce,s.length/3-ce,1)}function Pe(ce,re){let te=ce.length;for(;--te>=0;){let ne=te,we=te-1;we<0&&(we=ce.length-1);for(let ge=0,Ee=h+g*2;ge<Ee;ge++){let Je=Q*ge,qe=Q*(ge+1),C=re+ne+Je,x=re+we+Je,R=re+we+qe,F=re+ne+qe;je(C,x,R,F)}}}function Ue(ce,re,te){l.push(ce),l.push(re),l.push(te)}function Le(ce,re,te){pt(ce),pt(re),pt(te);let ne=s.length/3,we=b.generateTopUV(n,s,ne-3,ne-2,ne-1);D(we[0]),D(we[1]),D(we[2])}function je(ce,re,te,ne){pt(ce),pt(re),pt(ne),pt(re),pt(te),pt(ne);let we=s.length/3,ge=b.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);D(ge[0]),D(ge[1]),D(ge[3]),D(ge[1]),D(ge[2]),D(ge[3])}function pt(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function D(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _x(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cu[s.type]().fromJSON(s)),new i(n,e.options)}},xx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(f,1-m),new ae(_,1-p)]:[new ae(a,1-l),new ae(h,1-u),new ae(d,1-m),new ae(g,1-p)]}};function _x(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qn=class i extends Fr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ko=class i extends rt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,f=new ae,d=new v,m=new v,_=new v,g=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let b=0;b<=t;b++){let S=n+b*h*s,y=Math.sin(S),A=Math.cos(S);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*A,o.push(u.x,u.y,u.z),f.x=b/t,f.y=E/(e.length-1),a.push(f.x,f.y);let P=l[3*E+0]*y,I=l[3*E+1],w=l[3*E+0]*A;c.push(P,I,w)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let y=S+b*e.length,A=y,E=y+e.length,P=y+e.length+1,I=y+1;r.push(A,E,I),r.push(P,I,E)}this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("uv",new ke(a,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Yn=class i extends Fr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},rn=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let b=p*f-o;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-b,0),_.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,y=b+c*(p+1),A=b+1+c*(p+1),E=b+1+c*p;d.push(S,y,E),d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},es=class i extends rt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new v,m=new ae;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let b=p+g,S=b,y=b+n+1,A=b+n+2,E=b+1;a.push(S,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$o=class i extends rt{constructor(e=new Ui([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,m=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let b=m[g];di.isClockWise(b)===!0&&(m[g]=b.reverse())}let _=di.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let b=m[g];d=d.concat(b)}for(let g=0,p=d.length;g<p;g++){let b=d[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,p=_.length;g<p;g++){let b=_[g],S=b[0]+u,y=b[1]+u,A=b[2]+u;n.push(S,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return yx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function yx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Tn=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,f=new v,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+y,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let S=h[p][b+1],y=h[p][b],A=h[p+1][b],E=h[p+1][b+1];(p!==0||o>0)&&d.push(S,y,E),(p!==n-1||l<Math.PI)&&d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qo=class i extends Fr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yn=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new v,u=new v,f=new v;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let _=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,b=(s+1)*d+m;o.push(_,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tn=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bn=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ul=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ul(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,b=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[c+A]+S*o[l+A]+y*o[u+A];return r}},Ol=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Bl=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ul(t,this.TimeBufferType),this.values=ul(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ul(e.times,Array),values:ul(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case yl:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=yl;var ts=class extends zn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ao;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};zl.prototype.ValueTypeName="color";var kl=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};kl.prototype.ValueTypeName="number";var Vl=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}},ea=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends zn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ao;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Gl.prototype.ValueTypeName="vector";var ml={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Hl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pp=new Hl,zr=class{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=new WeakMap,Wl=class extends zr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ml.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=vr.get(o);u===void 0&&(u=[],vr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Er("img");function l(){h(),t&&t(this);let u=vr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}vr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ml.remove(`image:${e}`);let f=vr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ml.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var _i=class extends zr{constructor(e){super(e)}load(e,t,n,s){let r=new dn,o=new Wl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ta=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ls=class extends ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},iu=new ct,Rf=new v,Pf=new v,fu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var na=class extends Do{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pu=class extends fu{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new pu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xl=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nu="\\[\\]\\.:\\/",Mx=new RegExp("["+Nu+"]","g"),Fu="[^"+Nu+"]",bx="[^"+Nu.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Fu),wx=/(WCOD+)?/.source.replace("WCOD",bx),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),Ax=new RegExp("^"+Sx+wx+Tx+Ex+"$"),Cx=["material","materials","bones","map"],mu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mx,"")}static parseTrackName(e){let t=Ax.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=mu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var US=new Float32Array(1);var If=new ct,Us=class{constructor(e,t,n=0,s=1/0){this.ray=new $i(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return If.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(If),this}intersectObject(e,t=!0,n=[]){return gu(e,this,n,t),n.sort(Lf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)gu(e[s],this,n,t);return n.sort(Lf),n}};function Lf(i,e){return i.distance-e.distance}function gu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)gu(r[o],e,t,!0)}}var kr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Df=new v,dl=new v,Mr=new v,br=new v,su=new v,Rx=new v,Px=new v,ia=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Df.subVectors(e,this.start),dl.subVectors(this.end,this.start);let n=dl.dot(dl),r=dl.dot(Df)/n;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Rx,n=Px){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Mr.subVectors(c,a),br.subVectors(h,l),su.subVectors(a,l);let u=Mr.dot(Mr),f=br.dot(br),d=br.dot(su);if(u<=s&&f<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=s)r=0,o=d/f,o=Ze(o,0,1);else{let m=Mr.dot(su);if(f<=s)o=0,r=Ze(-m/u,0,1);else{let _=Mr.dot(br),g=u*f-_*_;g!==0?r=Ze((_*d-m*f)/g,0,1):r=0,o=(_*r+d)/f,o<0?(o=0,r=Ze(-m/u,0,1)):o>1&&(o=1,r=Ze((_-m)/u,0,1))}}return t.copy(a).add(Mr.multiplyScalar(r)),n.copy(l).add(br.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var sa=class extends zo{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ve(n),s=new Ve(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=f===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}let h=new rt;h.setAttribute("position",new ke(l,3)),h.setAttribute("color",new ke(c,3));let u=new xi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var fl=new jt,Vr=class extends zo{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new rt;r.setIndex(new yt(n,1)),r.setAttribute("position",new yt(s,3)),super(r,new xi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&fl.setFromObject(this.object),fl.isEmpty())return;let e=fl.min,t=fl.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ns=class extends pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ou(i,e,t,n){let s=Ix(n);switch(t){case Eu:return i*e;case rc:return i*e/s.components*s.byteLength;case oc:return i*e/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case ac:return i*e*2/s.components*s.byteLength;case Au:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(i){switch(i){case ai:case bu:return{byteLength:1,components:1};case Hr:case Su:case Wr:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case ss:case nc:case li:return{byteLength:4,components:1};case wu:case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function em(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Kx=`#ifdef USE_BUMPMAP
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l_=`vec3 transformedNormal = objectNormal;
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
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",p_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
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
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
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
#endif`,N_=`struct PhysicalMaterial {
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
}`,F_=`
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
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
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ry=`#ifdef USE_NORMALMAP
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
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,My=`float getShadowMask() {
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
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`#include <common>
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
}`,Hy=`#if DEPTH_PACKING == 3200
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
}`,Wy=`#define DISTANCE
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
}`,Xy=`#define DISTANCE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Ky=`uniform vec3 diffuse;
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
}`,$y=`#define LAMBERT
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
}`,Qy=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,tv=`#define MATCAP
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
}`,nv=`#define NORMAL
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
}`,iv=`#define NORMAL
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
}`,sv=`#define PHONG
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
}`,rv=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,av=`#define STANDARD
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
}`,lv=`#define TOON
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
}`,cv=`#define TOON
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
}`,hv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,pv=`uniform float rotation;
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
}`,mv=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ox,alphahash_pars_fragment:Bx,alphamap_fragment:zx,alphamap_pars_fragment:kx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Hx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:Zx,bsdfs:jx,iridescence_fragment:Jx,bumpmap_pars_fragment:Kx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:e_,clipping_planes_vertex:t_,color_fragment:n_,color_pars_fragment:i_,color_pars_vertex:s_,color_vertex:r_,common:o_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:l_,displacementmap_pars_vertex:c_,displacementmap_vertex:h_,emissivemap_fragment:u_,emissivemap_pars_fragment:d_,colorspace_fragment:f_,colorspace_pars_fragment:p_,envmap_fragment:m_,envmap_common_pars_fragment:g_,envmap_pars_fragment:x_,envmap_pars_vertex:__,envmap_physical_pars_fragment:R_,envmap_vertex:y_,fog_vertex:v_,fog_pars_vertex:M_,fog_fragment:b_,fog_pars_fragment:S_,gradientmap_pars_fragment:w_,lightmap_pars_fragment:T_,lights_lambert_fragment:E_,lights_lambert_pars_fragment:A_,lights_pars_begin:C_,lights_toon_fragment:P_,lights_toon_pars_fragment:I_,lights_phong_fragment:L_,lights_phong_pars_fragment:D_,lights_physical_fragment:U_,lights_physical_pars_fragment:N_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:B_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:k_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:G_,map_fragment:H_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:j_,morphcolor_vertex:J_,morphnormal_vertex:K_,morphtarget_pars_vertex:$_,morphtarget_vertex:Q_,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:sy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ay,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,opaque_fragment:hy,packing:uy,premultiplied_alpha_fragment:dy,project_vertex:fy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:yy,shadowmap_vertex:vy,shadowmask_pars_fragment:My,skinbase_vertex:by,skinning_pars_vertex:Sy,skinning_vertex:wy,skinnormal_vertex:Ty,specularmap_fragment:Ey,specularmap_pars_fragment:Ay,tonemapping_fragment:Cy,tonemapping_pars_fragment:Ry,transmission_fragment:Py,transmission_pars_fragment:Iy,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Uy,worldpos_vertex:Ny,background_vert:Fy,background_frag:Oy,backgroundCube_vert:By,backgroundCube_frag:zy,cube_vert:ky,cube_frag:Vy,depth_vert:Gy,depth_frag:Hy,distanceRGBA_vert:Wy,distanceRGBA_frag:Xy,equirect_vert:qy,equirect_frag:Yy,linedashed_vert:Zy,linedashed_frag:jy,meshbasic_vert:Jy,meshbasic_frag:Ky,meshlambert_vert:$y,meshlambert_frag:Qy,meshmatcap_vert:ev,meshmatcap_frag:tv,meshnormal_vert:nv,meshnormal_frag:iv,meshphong_vert:sv,meshphong_frag:rv,meshphysical_vert:ov,meshphysical_frag:av,meshtoon_vert:lv,meshtoon_frag:cv,points_vert:hv,points_frag:uv,shadow_vert:dv,shadow_frag:fv,sprite_vert:pv,sprite_frag:mv},Ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},vi={basic:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:pn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:pn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:pn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:pn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:pn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:pn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:pn([Ce.common,Ce.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:pn([Ce.lights,Ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};vi.physical={uniforms:pn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Bc={r:0,b:0,g:0},zs=new Xt,gv=new ct;function xv(i,e,t,n,s,r,o){let a=new Ve(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1,A=m(S);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){let A=m(y);A&&(A.isCubeTexture||A.mapping===oa)?(h===void 0&&(h=new fe(new We(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Bs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(y.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gv.makeRotationFromEuler(zs)),h.material.toneMapped=ut.getTransfer(A.colorSpace)!==_t,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new fe(new rn(2,2),new oi({name:"BackgroundMaterial",uniforms:Bs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Bc,Du(i)),n.buffers.color.setClear(Bc.r,Bc.g,Bc.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:g,dispose:b}}function _v(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,L,N,G,H){let V=!1,q=u(G,N,L);r!==q&&(r=q,c(r.object)),V=d(M,G,N,H),V&&m(M,G,N,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,L,N,G),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,N){let G=N.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let V=H[L.id];V===void 0&&(V={},H[L.id]=V);let q=V[G];return q===void 0&&(q=f(l()),V[G]=q),q}function f(M){let L=[],N=[],G=[];for(let H=0;H<t;H++)L[H]=0,N[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:G,object:M,attributes:{},index:null}}function d(M,L,N,G){let H=r.attributes,V=L.attributes,q=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let pe=H[W],Te=V[W];if(Te===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),pe===void 0||pe.attribute!==Te||Te&&pe.data!==Te.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function m(M,L,N,G){let H={},V=L.attributes,q=0,Q=N.getAttributes();for(let W in Q)if(Q[W].location>=0){let pe=V[W];pe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let Te={};Te.attribute=pe,pe&&pe.data&&(Te.data=pe.data),H[W]=Te,q++}r.attributes=H,r.attributesNum=q,r.index=G}function _(){let M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let N=r.newAttributes,G=r.enabledAttributes,H=r.attributeDivisors;N[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),H[M]!==L&&(i.vertexAttribDivisor(M,L),H[M]=L)}function b(){let M=r.newAttributes,L=r.enabledAttributes;for(let N=0,G=L.length;N<G;N++)L[N]!==M[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function S(M,L,N,G,H,V,q){q===!0?i.vertexAttribIPointer(M,L,N,H,V):i.vertexAttribPointer(M,L,N,G,H,V)}function y(M,L,N,G){_();let H=G.attributes,V=N.getAttributes(),q=L.defaultAttributeValues;for(let Q in V){let W=V[Q];if(W.location>=0){let ee=H[Q];if(ee===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let pe=ee.normalized,Te=ee.itemSize,Z=e.get(ee);if(Z===void 0)continue;let X=Z.buffer,be=Z.type,ue=Z.bytesPerElement,J=be===i.INT||be===i.UNSIGNED_INT||ee.gpuType===nc;if(ee.isInterleavedBufferAttribute){let se=ee.data,Pe=se.stride,Ue=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)p(W.location+Le,se.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<W.locationSize;Le++)g(W.location+Le);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Le=0;Le<W.locationSize;Le++)S(W.location+Le,Te/W.locationSize,be,pe,Pe*ue,(Ue+Te/W.locationSize*Le)*ue,J)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)p(W.location+se,ee.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<W.locationSize;se++)g(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,X);for(let se=0;se<W.locationSize;se++)S(W.location+se,Te/W.locationSize,be,pe,Te*ue,Te/W.locationSize*se*ue,J)}}else if(q!==void 0){let pe=q[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}b()}function A(){I();for(let M in n){let L=n[M];for(let N in L){let G=L[N];for(let H in G)h(G[H].object),delete G[H];delete L[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let N in L){let G=L[N];for(let H in G)h(G[H].object),delete G[H];delete L[N]}delete n[M.id]}function P(M){for(let L in n){let N=n[L];if(N[M.id]===void 0)continue;let G=N[M.id];for(let H in G)h(G[H].object),delete G[H];delete N[M.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function yv(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ai&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==li&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function Mv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new hn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,S=b*4,y=p.clippingState||null;l.value=y,y=h(m,f,S,d);for(let A=0;A!==S;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function bv(i){let e=new WeakMap;function t(o,a){return a===Gr?o.mapping=Fs:a===ec&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gr||a===ec)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Tl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zr=4,Ip=[.125,.215,.35,.446,.526,.582],Gs=20,Bu=new na,Lp=new Ve,zu=null,ku=0,Vu=0,Gu=!1,Vs=(1+Math.sqrt(5))/2,Yr=1/Vs,Dp=[new v(-Vs,Yr,0),new v(Vs,Yr,0),new v(-Yr,0,Vs),new v(Yr,0,Vs),new v(0,Vs,-Yr),new v(0,Vs,Yr),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],Sv=new v,Jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sv}=r;zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,ku,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Wr,format:An,colorSpace:As,depthBuffer:!1},s=Up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(r)),this._blurMaterial=Tv(r,e,t)}return s}_compileMaterial(e){let t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,Bu)}_sceneToCubeUV(e,t,n,s,r){let l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lp),u.toneMapping=Fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Ht({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new fe(new We,_),p=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Lp),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;zc(s,y*A,S>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;zc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dp[(s-r-1)%Dp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Gs;g>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gs}`);let p=[],b=0;for(let P=0;P<Gs;++P){let I=P/_,w=Math.exp(-I*I/2);p.push(w),P===0?b+=w:P<g&&(b+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;let y=this._sizeLods[s],A=3*y*(s>S-Zr?s-S+Zr:0),E=4*(this._cubeSize-y);zc(t,A,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Bu)}};function wv(i){let e=[],t=[],n=[],s=i,r=i-Zr+1+Ip.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Zr?l=Ip[o-i+Zr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*d),S=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){let P=E%3*2/3-1,I=E>2?0:-1,w=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(w,_*m*E),S.set(f,g*m*E);let M=[E,E,E,E,E,E];y.set(M,p*m*E)}let A=new rt;A.setAttribute("position",new yt(b,_)),A.setAttribute("uv",new yt(S,g)),A.setAttribute("faceIndex",new yt(y,p)),e.push(A),s>Zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Up(i,e,t){let n=new mi(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tv(i,e,t){let n=new Float32Array(Gs),s=new v(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Np(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Fp(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function Ev(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Gr||l===ec,h=l===Fs||l===Os;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jr(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Jr(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Av(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cv(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let S=0,y=b.length;S<y;S+=3){let A=b[S+0],E=b[S+1],P=b[S+2];f.push(A,E,E,P,P,A)}}else if(m!==void 0){let b=m.array;_=m.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let A=S+0,E=S+1,P=S+2;f.push(A,E,E,P,P,A)}}else return;let g=new(Lu(f)?Lo:Io)(f,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Iv(i,e,t){let n=new WeakMap,s=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*u),P=new Po(E,y,A,u);P.type=li,P.needsUpdate=!0;let I=S*4;for(let M=0;M<u;M++){let L=g[M],N=p[M],G=b[M],H=y*A*4*M;for(let V=0;V<L.count;V++){let q=V*I;d===!0&&(s.fromBufferAttribute(L,V),E[H+q+0]=s.x,E[H+q+1]=s.y,E[H+q+2]=s.z,E[H+q+3]=0),m===!0&&(s.fromBufferAttribute(N,V),E[H+q+4]=s.x,E[H+q+5]=s.y,E[H+q+6]=s.z,E[H+q+7]=0),_===!0&&(s.fromBufferAttribute(G,V),E[H+q+8]=s.x,E[H+q+9]=s.y,E[H+q+10]=s.z,E[H+q+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ae(y,A)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Lv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var tm=new dn,Op=new Vo(1,1),nm=new Po,im=new Sl,sm=new Uo,Bp=[],zp=[],kp=new Float32Array(16),Vp=new Float32Array(9),Gp=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bp[s];if(r===void 0&&(r=new Float32Array(s),Bp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Gp.set(n),i.uniformMatrix2fv(this.addr,!1,Gp),Kt(t,n)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),Kt(t,n)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),Kt(t,n)}}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Op.compareFunction=Ru,r=Op):r=tm,t.setTexture2D(e||r,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||im,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sm,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nm,s)}function $v(i){switch(i){case 5126:return Dv;case 35664:return Uv;case 35665:return Nv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return kv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Qv(i,e){i.uniform1fv(this.addr,e)}function eM(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function tM(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function nM(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function iM(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sM(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rM(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oM(i,e){i.uniform1iv(this.addr,e)}function aM(i,e){i.uniform2iv(this.addr,e)}function lM(i,e){i.uniform3iv(this.addr,e)}function cM(i,e){i.uniform4iv(this.addr,e)}function hM(i,e){i.uniform1uiv(this.addr,e)}function uM(i,e){i.uniform2uiv(this.addr,e)}function dM(i,e){i.uniform3uiv(this.addr,e)}function fM(i,e){i.uniform4uiv(this.addr,e)}function pM(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tm,r[o])}function mM(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||im,r[o])}function gM(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sm,r[o])}function xM(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nm,r[o])}function _M(i){switch(i){case 5126:return Qv;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return xM}}var Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}},Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}},qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Hp(i,e){i.seq.push(e),i.map[e.id]=e}function yM(i,e,t){let n=i.name,s=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),o=Hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hp(t,c===void 0?new Wu(a,i,e):new Xu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new qu(a),Hp(t,u)),t=u}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yM(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Wp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vM=37297,MM=0;function bM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Xp=new $e;function SM(i){ut._getMatrix(Xp,ut.workingColorSpace,i);let e=`mat3( ${Xp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bM(i.getShaderSource(e),a)}else return r}function wM(i,e){let t=SM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TM(i,e){let t;switch(e){case ip:t="Linear";break;case sp:t="Reinhard";break;case rp:t="Cineon";break;case op:t="ACESFilmic";break;case lp:t="AgX";break;case cp:t="Neutral";break;case ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new v;function EM(){ut.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function CM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fa(i){return i!==""}function Yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(PM,LM)}var IM=new Map;function LM(i,e){let t=it[e];if(t===void 0){let n=IM.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}var DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(DM,UM)}function UM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function BM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case tp:e="ENVMAP_BLENDING_MIX";break;case np:e="ENVMAP_BLENDING_ADD";break}return e}function zM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=NM(t),c=FM(t),h=OM(t),u=BM(t),f=zM(t),d=AM(t),m=CM(r),_=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(g=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?it.tonemapping_pars_fragment:"",t.toneMapping!==Fi?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=Yu(o),o=Yp(o,t),o=Zp(o,t),a=Yu(a),a=Yp(a,t),a=Zp(a,t),o=jp(o),a=jp(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+o,y=b+p+a,A=Wp(s,s.VERTEX_SHADER,S),E=Wp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(E)||"",V=N.trim(),q=G.trim(),Q=H.trim(),W=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{let pe=qp(s,A,"vertex"),Te=qp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+pe+`
`+Te)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||Q==="")&&(ee=!1);ee&&(L.diagnostics={runnable:W,programLog:V,vertexShader:{log:q,prefix:g},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(A),s.deleteShader(E),I=new jr(s,_),w=RM(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,vM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var VM=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ju(e),t.set(e,n)),n}},ju=class{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}};function GM(i,e,t,n,s,r,o){let a=new Rr,l=new Zu,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,L,N,G){let H=N.fog,V=G.geometry,q=w.isMeshStandardMaterial?N.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),W=Q&&Q.mapping===oa?Q.image.height:null,ee=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let pe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=pe!==void 0?pe.length:0,Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let X,be,ue,J;if(ee){let mt=vi[ee];X=mt.vertexShader,be=mt.fragmentShader}else X=w.vertexShader,be=w.fragmentShader,l.update(w),ue=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let se=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Le=G.isBatchedMesh===!0,je=!!w.map,pt=!!w.matcap,D=!!Q,ce=!!w.aoMap,re=!!w.lightMap,te=!!w.bumpMap,ne=!!w.normalMap,we=!!w.displacementMap,ge=!!w.emissiveMap,Ee=!!w.metalnessMap,Je=!!w.roughnessMap,qe=w.anisotropy>0,C=w.clearcoat>0,x=w.dispersion>0,R=w.iridescence>0,F=w.sheen>0,K=w.transmission>0,k=qe&&!!w.anisotropyMap,me=C&&!!w.clearcoatMap,ie=C&&!!w.clearcoatNormalMap,de=C&&!!w.clearcoatRoughnessMap,he=R&&!!w.iridescenceMap,$=R&&!!w.iridescenceThicknessMap,ve=F&&!!w.sheenColorMap,Ne=F&&!!w.sheenRoughnessMap,xe=!!w.specularMap,Me=!!w.specularColorMap,ze=!!w.specularIntensityMap,U=K&&!!w.transmissionMap,ye=K&&!!w.thicknessMap,Ae=!!w.gradientMap,Ie=!!w.alphaMap,_e=w.alphaTest>0,oe=!!w.alphaHash,Be=!!w.extensions,Qe=Fi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let Pt={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:X,fragmentShader:be,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Le,batchingColor:Le&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:pt,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:re,bumpMap:te,normalMap:ne,displacementMap:f&&we,emissiveMap:ge,normalMapObjectSpace:ne&&w.normalMapType===fp,normalMapTangentSpace:ne&&w.normalMapType===Oc,metalnessMap:Ee,roughnessMap:Je,anisotropy:qe,anisotropyMap:k,clearcoat:C,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:de,dispersion:x,iridescence:R,iridescenceMap:he,iridescenceThicknessMap:$,sheen:F,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:xe,specularColorMap:Me,specularIntensityMap:ze,transmission:K,transmissionMap:U,thicknessMap:ye,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Ts&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:_e,alphaHash:oe,combine:w.combine,mapUv:je&&_(w.map.channel),aoMapUv:ce&&_(w.aoMap.channel),lightMapUv:re&&_(w.lightMap.channel),bumpMapUv:te&&_(w.bumpMap.channel),normalMapUv:ne&&_(w.normalMap.channel),displacementMapUv:we&&_(w.displacementMap.channel),emissiveMapUv:ge&&_(w.emissiveMap.channel),metalnessMapUv:Ee&&_(w.metalnessMap.channel),roughnessMapUv:Je&&_(w.roughnessMap.channel),anisotropyMapUv:k&&_(w.anisotropyMap.channel),clearcoatMapUv:me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(w.sheenRoughnessMap.channel),specularMapUv:xe&&_(w.specularMap.channel),specularColorMapUv:Me&&_(w.specularColorMap.channel),specularIntensityMapUv:ze&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:ye&&_(w.thicknessMap.channel),alphaMapUv:Ie&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ne||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(je||Ie),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&ut.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&ut.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Yt,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(b(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=m[w.type],L;if(M){let N=vi[M];L=wp.clone(N.uniforms)}else L=w.uniforms;return L}function A(w,M){let L;for(let N=0,G=h.length;N<G;N++){let H=h[N];if(H.cacheKey===M){L=H,++L.usedTimes;break}}return L===void 0&&(L=new kM(i,M,w,r),h.push(L)),L}function E(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:I}}function HM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function WM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $p(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||WM),n.length>1&&n.sort(f||Kp),s.length>1&&s.sort(f||Kp)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function XM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new $p,i.set(n,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new Ve};break;case"SpotLight":t={position:new v,direction:new v,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new v,halfWidth:new v,halfHeight:new v};break}return i[e.id]=t,t}}}function YM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ZM=0;function jM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function JM(i){let e=new qM,t=YM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new v);let s=new v,r=new ct,o=new ct;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,b=0,S=0,y=0,A=0,E=0,P=0;c.sort(jM);for(let w=0,M=c.length;w<M;w++){let L=c[w],N=L.color,G=L.intensity,H=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*G,u+=N.g*G,f+=N.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],G);P++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=q,d++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(G),q.distance=H,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;let Q=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){let W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,y++}_++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(N).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=P,n.version=ZM++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Qp(i){let e=new JM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qp(i),e.set(s,[a])):r>=o.length?(a=new Qp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`;function eb(i,e,t){let n=new Nr,s=new ae,r=new ae,o=new zt,a=new Ul({depthPacking:dp}),l=new Nl,c={},h=t.maxTextureSize,u={[si]:on,[on]:si,[Yt]:Yt},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:$M,fragmentShader:QM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(E,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=p!==yi&&this.type===yi,H=p===yi&&this.type!==yi;for(let V=0,q=E.length;V<q;V++){let Q=E[V],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ee=W.getFrameExtents();if(s.multiply(ee),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||G===!0||H===!0){let Te=this.type!==yi?{minFilter:Sn,magFilter:Sn}:{};W.map!==null&&W.map.dispose(),W.map=new mi(s.x,s.y,Te),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let pe=W.getViewportCount();for(let Te=0;Te<pe;Te++){let Z=W.getViewport(Te);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(o),W.updateMatrices(Q,Te),n=W.getFrustum(),y(P,I,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===yi&&b(W,I),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,L)};function b(E,P){let I=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,I,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,I,d,_,null)}function S(E,P,I,w){let M=null,L=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=M.uuid,G=P.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let V=H[G];V===void 0&&(V=M.clone(),H[G]=V,P.addEventListener("dispose",A)),M=V}if(M.visible=P.visible,M.wireframe=P.wireframe,w===yi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=i.properties.get(M);N.light=I}return M}function y(E,P,I,w,M){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===yi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let G=e.update(E),H=E.material;if(Array.isArray(H)){let V=G.groups;for(let q=0,Q=V.length;q<Q;q++){let W=V[q],ee=H[W.materialIndex];if(ee&&ee.visible){let pe=S(E,ee,w,M);E.onBeforeShadow(i,E,P,I,G,pe,W),i.renderBufferDirect(I,null,G,pe,E,W),E.onAfterShadow(i,E,P,I,G,pe,W)}}}else if(H.visible){let V=S(E,H,w,M);E.onBeforeShadow(i,E,P,I,G,V,null),i.renderBufferDirect(I,null,G,V,E,null),E.onAfterShadow(i,E,P,I,G,V,null)}}let N=E.children;for(let G=0,H=N.length;G<H;G++)y(N[G],P,I,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let w=c[I],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var tb={[ql]:Yl,[Zl]:Kl,[jl]:$l,[Es]:Jl,[Yl]:ql,[Kl]:Zl,[$l]:jl,[Jl]:Es};function nb(i,e){function t(){let U=!1,ye=new zt,Ae=null,Ie=new zt(0,0,0,0);return{setMask:function(_e){Ae!==_e&&!U&&(i.colorMask(_e,_e,_e,_e),Ae=_e)},setLocked:function(_e){U=_e},setClear:function(_e,oe,Be,Qe,Pt){Pt===!0&&(_e*=Qe,oe*=Qe,Be*=Qe),ye.set(_e,oe,Be,Qe),Ie.equals(ye)===!1&&(i.clearColor(_e,oe,Be,Qe),Ie.copy(ye))},reset:function(){U=!1,Ae=null,Ie.set(-1,0,0,0)}}}function n(){let U=!1,ye=!1,Ae=null,Ie=null,_e=null;return{setReversed:function(oe){if(ye!==oe){let Be=e.get("EXT_clip_control");oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ye=oe;let Qe=_e;_e=null,this.setClear(Qe)}},getReversed:function(){return ye},setTest:function(oe){oe?se(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(oe){Ae!==oe&&!U&&(i.depthMask(oe),Ae=oe)},setFunc:function(oe){if(ye&&(oe=tb[oe]),Ie!==oe){switch(oe){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case jl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=oe}},setLocked:function(oe){U=oe},setClear:function(oe){_e!==oe&&(ye&&(oe=1-oe),i.clearDepth(oe),_e=oe)},reset:function(){U=!1,Ae=null,Ie=null,_e=null,ye=!1}}}function s(){let U=!1,ye=null,Ae=null,Ie=null,_e=null,oe=null,Be=null,Qe=null,Pt=null;return{setTest:function(mt){U||(mt?se(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(mt){ye!==mt&&!U&&(i.stencilMask(mt),ye=mt)},setFunc:function(mt,Ei,ui){(Ae!==mt||Ie!==Ei||_e!==ui)&&(i.stencilFunc(mt,Ei,ui),Ae=mt,Ie=Ei,_e=ui)},setOp:function(mt,Ei,ui){(oe!==mt||Be!==Ei||Qe!==ui)&&(i.stencilOp(mt,Ei,ui),oe=mt,Be=Ei,Qe=ui)},setLocked:function(mt){U=mt},setClear:function(mt){Pt!==mt&&(i.clearStencil(mt),Pt=mt)},reset:function(){U=!1,ye=null,Ae=null,Ie=null,_e=null,oe=null,Be=null,Qe=null,Pt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,S=null,y=null,A=null,E=null,P=new Ve(0,0,0),I=0,w=!1,M=null,L=null,N=null,G=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=Q>=2);let ee=null,pe={},Te=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),X=new zt().fromArray(Te),be=new zt().fromArray(Z);function ue(U,ye,Ae,Ie){let _e=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Ae;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ye+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return oe}let J={};J[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Es),te(!1),ne(xu),se(i.CULL_FACE),ce(Ni);function se(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ue(U,ye){return u[U]!==ye?(i.bindFramebuffer(U,ye),u[U]=ye,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Le(U,ye){let Ae=d,Ie=!1;if(U){Ae=f.get(ye),Ae===void 0&&(Ae=[],f.set(ye,Ae));let _e=U.textures;if(Ae.length!==_e.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Be=_e.length;oe<Be;oe++)Ae[oe]=i.COLOR_ATTACHMENT0+oe;Ae.length=_e.length,Ie=!0}}else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(Ae)}function je(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let pt={[Ki]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[zf]:i.FUNC_REVERSE_SUBTRACT};pt[kf]=i.MIN,pt[Vf]=i.MAX;let D={[Gf]:i.ZERO,[Hf]:i.ONE,[Wf]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[$f]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(U,ye,Ae,Ie,_e,oe,Be,Qe,Pt,mt){if(U===Ni){_===!0&&(Pe(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),U!==Of){if(U!==g||mt!==w){if((p!==Ki||y!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,y=Ki),mt)switch(U){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,A=null,E=null,P.set(0,0,0),I=0,g=U,w=mt}return}_e=_e||ye,oe=oe||Ae,Be=Be||Ie,(ye!==p||_e!==y)&&(i.blendEquationSeparate(pt[ye],pt[_e]),p=ye,y=_e),(Ae!==b||Ie!==S||oe!==A||Be!==E)&&(i.blendFuncSeparate(D[Ae],D[Ie],D[oe],D[Be]),b=Ae,S=Ie,A=oe,E=Be),(Qe.equals(P)===!1||Pt!==I)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Pt),P.copy(Qe),I=Pt),g=U,w=!1}function re(U,ye){U.side===Yt?Pe(i.CULL_FACE):se(i.CULL_FACE);let Ae=U.side===on;ye&&(Ae=!Ae),te(Ae),U.blending===Ts&&U.transparent===!1?ce(Ni):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ie=U.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function ne(U){U!==Uf?(se(i.CULL_FACE),U!==L&&(U===xu?i.cullFace(i.BACK):U===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),L=U}function we(U){U!==N&&(q&&i.lineWidth(U),N=U)}function ge(U,ye,Ae){U?(se(i.POLYGON_OFFSET_FILL),(G!==ye||H!==Ae)&&(i.polygonOffset(ye,Ae),G=ye,H=Ae)):Pe(i.POLYGON_OFFSET_FILL)}function Ee(U){U?se(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Je(U){U===void 0&&(U=i.TEXTURE0+V-1),ee!==U&&(i.activeTexture(U),ee=U)}function qe(U,ye,Ae){Ae===void 0&&(ee===null?Ae=i.TEXTURE0+V-1:Ae=ee);let Ie=pe[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[Ae]=Ie),(Ie.type!==U||Ie.texture!==ye)&&(ee!==Ae&&(i.activeTexture(Ae),ee=Ae),i.bindTexture(U,ye||J[U]),Ie.type=U,Ie.texture=ye)}function C(){let U=pe[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){X.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),X.copy(U))}function Ne(U){be.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),be.copy(U))}function xe(U,ye){let Ae=c.get(ye);Ae===void 0&&(Ae=new WeakMap,c.set(ye,Ae));let Ie=Ae.get(U);Ie===void 0&&(Ie=i.getUniformBlockIndex(ye,U.name),Ae.set(U,Ie))}function Me(U,ye){let Ie=c.get(ye).get(U);l.get(ye)!==Ie&&(i.uniformBlockBinding(ye,Ie,U.__bindingPointIndex),l.set(ye,Ie))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,pe={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,b=null,S=null,y=null,A=null,E=null,P=new Ve(0,0,0),I=0,w=!1,M=null,L=null,N=null,G=null,H=null,X.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Pe,bindFramebuffer:Ue,drawBuffers:Le,useProgram:je,setBlending:ce,setMaterial:re,setFlipSided:te,setCullFace:ne,setLineWidth:we,setPolygonOffset:ge,setScissorTest:Ee,activeTexture:Je,bindTexture:qe,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:he,texImage3D:$,updateUBOMapping:xe,uniformBlockBinding:Me,texStorage2D:ie,texStorage3D:de,texSubImage2D:F,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:me,scissor:ve,viewport:Ne,reset:ze}}function ib(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,x){return d?new OffscreenCanvas(C,x):Er("canvas")}function _(C,x,R){let F=1,K=qe(C);if((K.width>R||K.height>R)&&(F=R/Math.max(K.width,K.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let k=Math.floor(F*K.width),me=Math.floor(F*K.height);u===void 0&&(u=m(k,me));let ie=x?m(k,me):u;return ie.width=k,ie.height=me,ie.getContext("2d").drawImage(C,0,0,k,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+me+")."),ie}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,x,R,F,K=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let k=x;if(x===i.RED&&(R===i.FLOAT&&(k=i.R32F),R===i.HALF_FLOAT&&(k=i.R16F),R===i.UNSIGNED_BYTE&&(k=i.R8)),x===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.R8UI),R===i.UNSIGNED_SHORT&&(k=i.R16UI),R===i.UNSIGNED_INT&&(k=i.R32UI),R===i.BYTE&&(k=i.R8I),R===i.SHORT&&(k=i.R16I),R===i.INT&&(k=i.R32I)),x===i.RG&&(R===i.FLOAT&&(k=i.RG32F),R===i.HALF_FLOAT&&(k=i.RG16F),R===i.UNSIGNED_BYTE&&(k=i.RG8)),x===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RG8UI),R===i.UNSIGNED_SHORT&&(k=i.RG16UI),R===i.UNSIGNED_INT&&(k=i.RG32UI),R===i.BYTE&&(k=i.RG8I),R===i.SHORT&&(k=i.RG16I),R===i.INT&&(k=i.RG32I)),x===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGB8UI),R===i.UNSIGNED_SHORT&&(k=i.RGB16UI),R===i.UNSIGNED_INT&&(k=i.RGB32UI),R===i.BYTE&&(k=i.RGB8I),R===i.SHORT&&(k=i.RGB16I),R===i.INT&&(k=i.RGB32I)),x===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),R===i.UNSIGNED_INT&&(k=i.RGBA32UI),R===i.BYTE&&(k=i.RGBA8I),R===i.SHORT&&(k=i.RGBA16I),R===i.INT&&(k=i.RGBA32I)),x===i.RGB&&(R===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),x===i.RGBA){let me=K?Co:ut.getTransfer(F);R===i.FLOAT&&(k=i.RGBA32F),R===i.HALF_FLOAT&&(k=i.RGBA16F),R===i.UNSIGNED_BYTE&&(k=me===_t?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(C,x){let R;return C?x===null||x===ss||x===Xr?R=i.DEPTH24_STENCIL8:x===li?R=i.DEPTH32F_STENCIL8:x===Hr&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ss||x===Xr?R=i.DEPTH_COMPONENT24:x===li?R=i.DEPTH_COMPONENT32F:x===Hr&&(R=i.DEPTH_COMPONENT16),R}function A(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){let x=C.target;x.removeEventListener("dispose",E),I(x),x.isVideoTexture&&h.delete(x)}function P(C){let x=C.target;x.removeEventListener("dispose",P),M(x)}function I(C){let x=n.get(C);if(x.__webglInit===void 0)return;let R=C.source,F=f.get(R);if(F){let K=F[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(C),Object.keys(F).length===0&&f.delete(R)}n.remove(C)}function w(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let R=C.source,F=f.get(R);delete F[x.__cacheKey],o.memory.textures--}function M(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let K=0;K<x.__webglFramebuffer[F].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[F][K]);else i.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)i.deleteFramebuffer(x.__webglFramebuffer[F]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let R=C.textures;for(let F=0,K=R.length;F<K;F++){let k=n.get(R[F]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(R[F])}n.remove(C)}let L=0;function N(){L=0}function G(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function H(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function V(C,x){let R=n.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&R.__version!==C.version){let F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(R,C,x);return}}else C.isExternalTexture&&(R.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+x)}function q(C,x){let R=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){J(R,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+x)}function Q(C,x){let R=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){J(R,C,x);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+x)}function W(C,x){let R=n.get(C);if(C.version>0&&R.__version!==C.version){se(R,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+x)}let ee={[Fn]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},pe={[Sn]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[tc]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},Te={[pp]:i.NEVER,[vp]:i.ALWAYS,[mp]:i.LESS,[Ru]:i.LEQUAL,[gp]:i.EQUAL,[yp]:i.GEQUAL,[xp]:i.GREATER,[_p]:i.NOTEQUAL};function Z(C,x){if(x.type===li&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===tc||x.magFilter===aa||x.magFilter===En||x.minFilter===sn||x.minFilter===tc||x.minFilter===aa||x.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Sn||x.minFilter!==aa&&x.minFilter!==En||x.type===li&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function X(C,x){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",E));let F=x.source,K=f.get(F);K===void 0&&(K={},f.set(F,K));let k=H(x);if(k!==C.__cacheKey){K[k]===void 0&&(K[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,R=!0),K[k].usedTimes++;let me=K[C.__cacheKey];me!==void 0&&(K[C.__cacheKey].usedTimes--,me.usedTimes===0&&w(x)),C.__cacheKey=k,C.__webglTexture=K[k].texture}return R}function be(C,x,R){return Math.floor(Math.floor(C/R)/x)}function ue(C,x,R,F){let k=C.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,R,F,x.data);else{k.sort(($,ve)=>$.start-ve.start);let me=0;for(let $=1;$<k.length;$++){let ve=k[me],Ne=k[$],xe=ve.start+ve.count,Me=be(Ne.start,x.width,4),ze=be(ve.start,x.width,4);Ne.start<=xe+1&&Me===ze&&be(Ne.start+Ne.count-1,x.width,4)===Me?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++me,k[me]=Ne)}k.length=me+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),de=i.getParameter(i.UNPACK_SKIP_PIXELS),he=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let $=0,ve=k.length;$<ve;$++){let Ne=k[$],xe=Math.floor(Ne.start/4),Me=Math.ceil(Ne.count/4),ze=xe%x.width,U=Math.floor(xe/x.width),ye=Me,Ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ze,U,ye,Ae,R,F,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,de),i.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function J(C,x,R){let F=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=i.TEXTURE_3D);let K=X(C,x),k=x.source;t.bindTexture(F,C.__webglTexture,i.TEXTURE0+R);let me=n.get(k);if(k.version!==me.__version||K===!0){t.activeTexture(i.TEXTURE0+R);let ie=ut.getPrimaries(ut.workingColorSpace),de=x.colorSpace===Oi?null:ut.getPrimaries(x.colorSpace),he=x.colorSpace===Oi||ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let $=_(x.image,!1,s.maxTextureSize);$=Je(x,$);let ve=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),xe=S(x.internalFormat,ve,Ne,x.colorSpace,x.isVideoTexture);Z(F,x);let Me,ze=x.mipmaps,U=x.isVideoTexture!==!0,ye=me.__version===void 0||K===!0,Ae=k.dataReady,Ie=A(x,$);if(x.isDepthTexture)xe=y(x.format===qr,x.type),ye&&(U?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,ve,Ne,null));else if(x.isDataTexture)if(ze.length>0){U&&ye&&t.texStorage2D(i.TEXTURE_2D,Ie,xe,ze[0].width,ze[0].height);for(let _e=0,oe=ze.length;_e<oe;_e++)Me=ze[_e],U?Ae&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Me.width,Me.height,ve,Ne,Me.data):t.texImage2D(i.TEXTURE_2D,_e,xe,Me.width,Me.height,0,ve,Ne,Me.data);x.generateMipmaps=!1}else U?(ye&&t.texStorage2D(i.TEXTURE_2D,Ie,xe,$.width,$.height),Ae&&ue(x,$,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,ve,Ne,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,xe,ze[0].width,ze[0].height,$.depth);for(let _e=0,oe=ze.length;_e<oe;_e++)if(Me=ze[_e],x.format!==An)if(ve!==null)if(U){if(Ae)if(x.layerUpdates.size>0){let Be=Ou(Me.width,Me.height,x.format,x.type);for(let Qe of x.layerUpdates){let Pt=Me.data.subarray(Qe*Be/Me.data.BYTES_PER_ELEMENT,(Qe+1)*Be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Qe,Me.width,Me.height,1,ve,Pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,$.depth,ve,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,xe,Me.width,Me.height,$.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Me.width,Me.height,$.depth,ve,Ne,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,xe,Me.width,Me.height,$.depth,0,ve,Ne,Me.data)}else{U&&ye&&t.texStorage2D(i.TEXTURE_2D,Ie,xe,ze[0].width,ze[0].height);for(let _e=0,oe=ze.length;_e<oe;_e++)Me=ze[_e],x.format!==An?ve!==null?U?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Ae&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Me.width,Me.height,ve,Ne,Me.data):t.texImage2D(i.TEXTURE_2D,_e,xe,Me.width,Me.height,0,ve,Ne,Me.data)}else if(x.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,xe,$.width,$.height,$.depth),Ae)if(x.layerUpdates.size>0){let _e=Ou($.width,$.height,x.format,x.type);for(let oe of x.layerUpdates){let Be=$.data.subarray(oe*_e/$.data.BYTES_PER_ELEMENT,(oe+1)*_e/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,$.width,$.height,1,ve,Ne,Be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ve,Ne,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,ve,Ne,$.data);else if(x.isData3DTexture)U?(ye&&t.texStorage3D(i.TEXTURE_3D,Ie,xe,$.width,$.height,$.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ve,Ne,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,ve,Ne,$.data);else if(x.isFramebufferTexture){if(ye)if(U)t.texStorage2D(i.TEXTURE_2D,Ie,xe,$.width,$.height);else{let _e=$.width,oe=$.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(i.TEXTURE_2D,Be,xe,_e,oe,0,ve,Ne,null),_e>>=1,oe>>=1}}else if(ze.length>0){if(U&&ye){let _e=qe(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ie,xe,_e.width,_e.height)}for(let _e=0,oe=ze.length;_e<oe;_e++)Me=ze[_e],U?Ae&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ve,Ne,Me):t.texImage2D(i.TEXTURE_2D,_e,xe,ve,Ne,Me);x.generateMipmaps=!1}else if(U){if(ye){let _e=qe($);t.texStorage2D(i.TEXTURE_2D,Ie,xe,_e.width,_e.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,$)}else t.texImage2D(i.TEXTURE_2D,0,xe,ve,Ne,$);g(x)&&p(F),me.__version=k.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function se(C,x,R){if(x.image.length!==6)return;let F=X(C,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+R);let k=n.get(K);if(K.version!==k.__version||F===!0){t.activeTexture(i.TEXTURE0+R);let me=ut.getPrimaries(ut.workingColorSpace),ie=x.colorSpace===Oi?null:ut.getPrimaries(x.colorSpace),de=x.colorSpace===Oi||me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let he=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!he&&!$?ve[oe]=_(x.image[oe],!0,s.maxCubemapSize):ve[oe]=$?x.image[oe].image:x.image[oe],ve[oe]=Je(x,ve[oe]);let Ne=ve[0],xe=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),ze=S(x.internalFormat,xe,Me,x.colorSpace),U=x.isVideoTexture!==!0,ye=k.__version===void 0||F===!0,Ae=K.dataReady,Ie=A(x,Ne);Z(i.TEXTURE_CUBE_MAP,x);let _e;if(he){U&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ze,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){_e=ve[oe].mipmaps;for(let Be=0;Be<_e.length;Be++){let Qe=_e[Be];x.format!==An?xe!==null?U?Ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be,0,0,Qe.width,Qe.height,xe,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be,ze,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be,0,0,Qe.width,Qe.height,xe,Me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be,ze,Qe.width,Qe.height,0,xe,Me,Qe.data)}}}else{if(_e=x.mipmaps,U&&ye){_e.length>0&&Ie++;let oe=qe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if($){U?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,xe,Me,ve[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,ve[oe].width,ve[oe].height,0,xe,Me,ve[oe].data);for(let Be=0;Be<_e.length;Be++){let Pt=_e[Be].image[oe].image;U?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be+1,0,0,Pt.width,Pt.height,xe,Me,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be+1,ze,Pt.width,Pt.height,0,xe,Me,Pt.data)}}else{U?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe,Me,ve[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ze,xe,Me,ve[oe]);for(let Be=0;Be<_e.length;Be++){let Qe=_e[Be];U?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be+1,0,0,xe,Me,Qe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Be+1,ze,xe,Me,Qe.image[oe])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),k.__version=K.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Pe(C,x,R,F,K,k){let me=r.convert(R.format,R.colorSpace),ie=r.convert(R.type),de=S(R.internalFormat,me,ie,R.colorSpace),he=n.get(x),$=n.get(R);if($.__renderTarget=x,!he.__hasExternalTextures){let ve=Math.max(1,x.width>>k),Ne=Math.max(1,x.height>>k);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,k,de,ve,Ne,x.depth,0,me,ie,null):t.texImage2D(K,k,de,ve,Ne,0,me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,K,$.__webglTexture,0,we(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,K,$.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(C,x,R){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let F=x.depthTexture,K=F&&F.isDepthTexture?F.type:null,k=y(x.stencilBuffer,K),me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=we(x);ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,k,x.width,x.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{let F=x.textures;for(let K=0;K<F.length;K++){let k=F[K],me=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),de=S(k.internalFormat,me,ie,k.colorSpace),he=we(x);R&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,de,x.width,x.height):ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(x.depthTexture);F.__renderTarget=x,(!F.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let K=F.__webglTexture,k=we(x);if(x.depthTexture.format===wr)ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===qr)ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function je(C){let x=n.get(C),R=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let F=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),F){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,F.removeEventListener("dispose",K)};F.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=F}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let F=C.texture.mipmaps;F&&F.length>0?Le(x.__webglFramebuffer[0],C):Le(x.__webglFramebuffer,C)}else if(R){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]===void 0)x.__webglDepthbuffer[F]=i.createRenderbuffer(),Ue(x.__webglDepthbuffer[F],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,k)}}else{let F=C.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ue(x.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,x,R){let F=n.get(C);x!==void 0&&Pe(F.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&je(C)}function D(C){let x=C.texture,R=n.get(C),F=n.get(x);C.addEventListener("dispose",P);let K=C.textures,k=C.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=x.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[ie]=[];for(let de=0;de<x.mipmaps.length;de++)R.__webglFramebuffer[ie][de]=i.createFramebuffer()}else R.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)R.__webglFramebuffer[ie]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(me)for(let ie=0,de=K.length;ie<de;ie++){let he=n.get(K[ie]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ge(C)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let de=K[ie];R.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[ie]);let he=r.convert(de.format,de.colorSpace),$=r.convert(de.type),ve=S(de.internalFormat,he,$,de.colorSpace,C.isXRRenderTarget===!0),Ne=we(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,R.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(R.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Z(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Pe(R.__webglFramebuffer[ie][de],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Pe(R.__webglFramebuffer[ie],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,de=K.length;ie<de;ie++){let he=K[ie],$=n.get(he),ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,$.__webglTexture),Z(ve,he),Pe(R.__webglFramebuffer,C,he,i.COLOR_ATTACHMENT0+ie,ve,0),g(he)&&p(ve)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,F.__webglTexture),Z(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Pe(R.__webglFramebuffer[de],C,x,i.COLOR_ATTACHMENT0,ie,de);else Pe(R.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ie,0);g(x)&&p(ie),t.unbindTexture()}C.depthBuffer&&je(C)}function ce(C){let x=C.textures;for(let R=0,F=x.length;R<F;R++){let K=x[R];if(g(K)){let k=b(C),me=n.get(K).__webglTexture;t.bindTexture(k,me),p(k),t.unbindTexture()}}}let re=[],te=[];function ne(C){if(C.samples>0){if(ge(C)===!1){let x=C.textures,R=C.width,F=C.height,K=i.COLOR_BUFFER_BIT,k=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),ie=x.length>1;if(ie)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let de=C.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let he=0;he<x.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let $=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,R,F,0,0,R,F,K,i.NEAREST),l===!0&&(re.length=0,te.length=0,re.push(i.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(k),te.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let $=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function we(C){return Math.min(s.maxSamples,C.samples)}function ge(C){let x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Je(C,x){let R=C.colorSpace,F=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==As&&R!==Oi&&(ut.getTransfer(R)===_t?(F!==An||K!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=ge}function sb(i,e){function t(n,s=Oi){let r,o=ut.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return i.BYTE;if(n===Su)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Au)return i.RGB;if(n===An)return i.RGBA;if(n===wr)return i.DEPTH_COMPONENT;if(n===qr)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Cc||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Ic||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Uc||n===Nc||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
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

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Go(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oi({vertexShader:rb,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new Ju,p={},b=t.getContextAttributes(),S=null,y=null,A=[],E=[],P=new ae,I=null,w=new cn;w.viewport=new zt;let M=new cn;M.viewport=new zt;let L=[w,M],N=new Xl,G=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=A[J];return se===void 0&&(se=new Pr,A[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=A[J];return se===void 0&&(se=new Pr,A[J]=se),se.getGripSpace()},this.getHand=function(J){let se=A[J];return se===void 0&&(se=new Pr,A[J]=se),se.getHandSpace()};function V(J){let se=E.indexOf(J.inputSource);if(se===-1)return;let Pe=A[se];Pe!==void 0&&(Pe.update(J.inputSource,J.frame,c||o),Pe.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<A.length;J++){let se=E[J];se!==null&&(E[J]=null,A[J].disconnect(se))}G=null,H=null,g.reset();for(let J in p)delete p[J];e.setRenderTarget(S),d=null,f=null,u=null,s=null,y=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ue=null,Le=null;b.depth&&(Le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=b.stencil?qr:wr,Ue=b.stencil?Xr:ss);let je={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mi(f.textureWidth,f.textureHeight,{format:An,type:ai,depthTexture:new Vo(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new mi(d.framebufferWidth,d.framebufferHeight,{format:An,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(J){for(let se=0;se<J.removed.length;se++){let Pe=J.removed[se],Ue=E.indexOf(Pe);Ue>=0&&(E[Ue]=null,A[Ue].disconnect(Pe))}for(let se=0;se<J.added.length;se++){let Pe=J.added[se],Ue=E.indexOf(Pe);if(Ue===-1){for(let je=0;je<A.length;je++)if(je>=E.length){E.push(Pe),Ue=je;break}else if(E[je]===null){E[je]=Pe,Ue=je;break}if(Ue===-1)break}let Le=A[Ue];Le&&Le.connect(Pe)}}let W=new v,ee=new v;function pe(J,se,Pe){W.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Pe.matrixWorld);let Ue=W.distanceTo(ee),Le=se.projectionMatrix.elements,je=Pe.projectionMatrix.elements,pt=Le[14]/(Le[10]-1),D=Le[14]/(Le[10]+1),ce=(Le[9]+1)/Le[5],re=(Le[9]-1)/Le[5],te=(Le[8]-1)/Le[0],ne=(je[8]+1)/je[0],we=pt*te,ge=pt*ne,Ee=Ue/(-te+ne),Je=Ee*-te;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Je),J.translateZ(Ee),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let qe=pt+Ee,C=D+Ee,x=we-Je,R=ge+(Ue-Je),F=ce*D/C*qe,K=re*D/C*qe;J.projectionMatrix.makePerspective(x,R,F,K,qe,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Te(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let se=J.near,Pe=J.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Pe=g.depthFar)),N.near=M.near=w.near=se,N.far=M.far=w.far=Pe,(G!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,H=N.far),N.layers.mask=J.layers.mask|6,w.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;let Ue=J.parent,Le=N.cameras;Te(N,Ue);for(let je=0;je<Le.length;je++)Te(Le[je],Ue);Le.length===2?pe(N,w,M):N.projectionMatrix.copy(w.projectionMatrix),Z(J,N,Ue)};function Z(J,se,Pe){Pe===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(Pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Tr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let X=null;function be(J,se){if(h=se.getViewerPose(c||o),m=se,h!==null){let Pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ue=!1;Pe.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let D=0;D<Pe.length;D++){let ce=Pe[D],re=null;if(d!==null)re=d.getViewport(ce);else{let ne=u.getViewSubImage(f,ce);re=ne.viewport,D===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let te=L[D];te===void 0&&(te=new cn,te.layers.enable(D),te.viewport=new zt,L[D]=te),te.matrix.fromArray(ce.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ce.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),D===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(te)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let D=u.getDepthInformation(Pe[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Pe.length;D++){let ce=Pe[D].camera;if(ce){let re=p[ce];re||(re=new Go,p[ce]=re);let te=u.getCameraImage(ce);re.sourceTexture=te}}}}for(let Pe=0;Pe<A.length;Pe++){let Ue=E[Pe],Le=A[Pe];Ue!==null&&Le!==void 0&&Le.update(Ue,se,c||o)}X&&X(J,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let ue=new em;ue.setAnimationLoop(be),this.setAnimationLoop=function(J){X=J},this.dispose=function(){}}},ks=new Xt,ab=new ct;function lb(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Du(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,y=b.envMapRotation;S&&(g.envMap.value=S,ks.copy(y),ks.x*=-1,ks.y*=-1,ks.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(ks)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let y=S.program;n.uniformBlockBinding(b,y)}function c(b,S){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",g));let A=S.program;n.updateUBOMapping(b,A);let E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){let S=u();b.__bindingPointIndex=S;let y=i.createBuffer(),A=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=s[b.id],y=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,P=y.length;E<P;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,M=I.length;w<M;w++){let L=I[w];if(d(L,E,w,A)===!0){let N=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],H=0;for(let V=0;V<G.length;V++){let q=G[V],Q=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,N+H,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,y,A){let E=b.value,P=S+"_"+y;if(A[P]===void 0)return typeof E=="number"||typeof E=="boolean"?A[P]=E:A[P]=E.clone(),!0;{let I=A[P];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[P]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(b){let S=b.uniforms,y=0,A=16;for(let P=0,I=S.length;P<I;P++){let w=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,L=w.length;M<L;M++){let N=w[M],G=Array.isArray(N.value)?N.value:[N.value];for(let H=0,V=G.length;H<V;H++){let q=G[H],Q=_(q),W=y%A,ee=W%Q.boundary,pe=W+ee;y+=ee,pe!==0&&A-pe<Q.storage&&(y+=A-pe),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Q.storage}}}let E=y%A;return E>0&&(y+=A-E),b.__size=y,b.__cache={},this}function _(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){let S=b.target;S.removeEventListener("dispose",g);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Vc=class{constructor(e={}){let{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=gt;let E=0,P=0,I=null,w=-1,M=null,L=new zt,N=new zt,G=null,H=new Ve(0),V=0,q=t.width,Q=t.height,W=1,ee=null,pe=null,Te=new zt(0,0,q,Q),Z=new zt(0,0,q,Q),X=!1,be=new Nr,ue=!1,J=!1,se=new ct,Pe=new v,Ue=new zt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function pt(){return I===null?W:1}let D=n;function ce(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){let O="webgl2";if(D=ce(O,T),D===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,te,ne,we,ge,Ee,Je,qe,C,x,R,F,K,k,me,ie,de,he,$,ve,Ne,xe,Me,ze;function U(){re=new Av(D),re.init(),xe=new sb(D,re),te=new vv(D,re,e,xe),ne=new nb(D,re),te.reversedDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),we=new Pv(D),ge=new HM,Ee=new ib(D,re,ne,ge,te,xe,we),Je=new bv(y),qe=new Ev(y),C=new Fx(D),Me=new _v(D,C),x=new Cv(D,C,we,Me),R=new Lv(D,x,C,we),$=new Iv(D,te,Ee),ie=new Mv(ge),F=new GM(y,Je,qe,re,te,Me,ie),K=new lb(y,ge),k=new XM,me=new KM(re),he=new xv(y,Je,qe,ne,R,d,l),de=new eb(y,R,te),ze=new cb(D,we,te,ne),ve=new yv(D,re,we),Ne=new Rv(D,re,we),we.programs=F.programs,y.capabilities=te,y.extensions=re,y.properties=ge,y.renderLists=k,y.shadowMap=de,y.state=ne,y.info=we}U();let ye=new Ku(y,D);this.xr=ye,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,Q,!1))},this.getSize=function(T){return T.set(q,Q)},this.setSize=function(T,O,Y=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Q=O,t.width=Math.floor(T*W),t.height=Math.floor(O*W),Y===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(q*W,Q*W).floor()},this.setDrawingBufferSize=function(T,O,Y){q=T,Q=O,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,O,Y,j){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,O,Y,j),ne.viewport(L.copy(Te).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,O,Y,j){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,O,Y,j),ne.scissor(N.copy(Z).multiplyScalar(W).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ne.setScissorTest(X=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let j=0;if(T){let B=!1;if(I!==null){let Se=I.texture.format;B=Se===lc||Se===ac||Se===oc}if(B){let Se=I.texture.type,Re=Se===ai||Se===ss||Se===Hr||Se===Xr||Se===ic||Se===sc,Fe=he.getClearColor(),De=he.getClearAlpha(),Xe=Fe.r,Ye=Fe.g,Ge=Fe.b;Re?(m[0]=Xe,m[1]=Ye,m[2]=Ge,m[3]=De,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Xe,_[1]=Ye,_[2]=Ge,_[3]=De,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}O&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),he.dispose(),k.dispose(),me.dispose(),ge.dispose(),Je.dispose(),qe.dispose(),R.dispose(),Me.dispose(),ze.dispose(),F.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ui),ye.removeEventListener("sessionend",qd),_s.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=we.autoReset,O=de.enabled,Y=de.autoUpdate,j=de.needsUpdate,B=de.type;U(),we.autoReset=T,de.enabled=O,de.autoUpdate=Y,de.needsUpdate=j,de.type=B}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){let O=T.target;O.removeEventListener("dispose",oe),Be(O)}function Be(T){Qe(T),ge.remove(T)}function Qe(T){let O=ge.get(T).programs;O!==void 0&&(O.forEach(function(Y){F.releaseProgram(Y)}),T.isShaderMaterial&&F.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,j,B,Se){O===null&&(O=Le);let Re=B.isMesh&&B.matrixWorld.determinant()<0,Fe=i0(T,O,Y,j,B);ne.setMaterial(j,Re);let De=Y.index,Xe=1;if(j.wireframe===!0){if(De=x.getWireframeAttribute(Y),De===void 0)return;Xe=2}let Ye=Y.drawRange,Ge=Y.attributes.position,at=Ye.start*Xe,St=(Ye.start+Ye.count)*Xe;Se!==null&&(at=Math.max(at,Se.start*Xe),St=Math.min(St,(Se.start+Se.count)*Xe)),De!==null?(at=Math.max(at,0),St=Math.min(St,De.count)):Ge!=null&&(at=Math.max(at,0),St=Math.min(St,Ge.count));let Gt=St-at;if(Gt<0||Gt===1/0)return;Me.setup(B,j,Fe,Y,De);let It,At=ve;if(De!==null&&(It=C.get(De),At=Ne,At.setIndex(It)),B.isMesh)j.wireframe===!0?(ne.setLineWidth(j.wireframeLinewidth*pt()),At.setMode(D.LINES)):At.setMode(D.TRIANGLES);else if(B.isLine){let He=j.linewidth;He===void 0&&(He=1),ne.setLineWidth(He*pt()),B.isLineSegments?At.setMode(D.LINES):B.isLineLoop?At.setMode(D.LINE_LOOP):At.setMode(D.LINE_STRIP)}else B.isPoints?At.setMode(D.POINTS):B.isSprite&&At.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))At.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let He=B._multiDrawStarts,Ft=B._multiDrawCounts,dt=B._multiDrawCount,Ln=De?C.get(De).bytesPerElement:1,nr=ge.get(j).currentProgram.getUniforms();for(let Dn=0;Dn<dt;Dn++)nr.setValue(D,"_gl_DrawID",Dn),At.render(He[Dn]/Ln,Ft[Dn])}else if(B.isInstancedMesh)At.renderInstances(at,Gt,B.count);else if(Y.isInstancedBufferGeometry){let He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ft=Math.min(Y.instanceCount,He);At.renderInstances(at,Gt,Ft)}else At.render(at,Gt)};function Pt(T,O,Y){T.transparent===!0&&T.side===Yt&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Ba(T,O,Y),T.side=si,T.needsUpdate=!0,Ba(T,O,Y),T.side=Yt):Ba(T,O,Y)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),p=me.get(Y),p.init(O),S.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let j=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let Se=B.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){let Fe=Se[Re];Pt(Fe,Y,B),j.add(Fe)}else Pt(Se,Y,B),j.add(Se)}),p=S.pop(),j},this.compileAsync=function(T,O,Y=null){let j=this.compile(T,O,Y);return new Promise(B=>{function Se(){if(j.forEach(function(Re){ge.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){B(T);return}setTimeout(Se,10)}re.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let mt=null;function Ei(T){mt&&mt(T)}function ui(){_s.stop()}function qd(){_s.start()}let _s=new em;_s.setAnimationLoop(Ei),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(T){mt=T,ye.setAnimationLoop(T),T===null?_s.stop():_s.start()},ye.addEventListener("sessionstart",ui),ye.addEventListener("sessionend",qd),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,I),p=me.get(T,S.length),p.init(O),S.push(p),se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),be.setFromProjectionMatrix(se,ii,O.reversedDepth),J=this.localClippingEnabled,ue=ie.init(this.clippingPlanes,J),g=k.get(T,b.length),g.init(),b.push(g),ye.enabled===!0&&ye.isPresenting===!0){let Se=y.xr.getDepthSensingMesh();Se!==null&&Rh(Se,O,-1/0,y.sortObjects)}Rh(T,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ee,pe),je=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,je&&he.addToRenderList(g,T),this.info.render.frame++,ue===!0&&ie.beginShadows();let Y=p.state.shadowsArray;de.render(Y,T,O),ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,B=g.transmissive;if(p.setupLights(),O.isArrayCamera){let Se=O.cameras;if(B.length>0)for(let Re=0,Fe=Se.length;Re<Fe;Re++){let De=Se[Re];Zd(j,B,T,De)}je&&he.render(T);for(let Re=0,Fe=Se.length;Re<Fe;Re++){let De=Se[Re];Yd(g,T,De,De.viewport)}}else B.length>0&&Zd(j,B,T,O),je&&he.render(T),Yd(g,T,O);I!==null&&P===0&&(Ee.updateMultisampleRenderTarget(I),Ee.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(y,T,O),Me.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ue===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Rh(T,O,Y,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||be.intersectsSprite(T)){j&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);let Re=R.update(T),Fe=T.material;Fe.visible&&g.push(T,Re,Fe,Y,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||be.intersectsObject(T))){let Re=R.update(T),Fe=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ue.copy(Re.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){let De=Re.groups;for(let Xe=0,Ye=De.length;Xe<Ye;Xe++){let Ge=De[Xe],at=Fe[Ge.materialIndex];at&&at.visible&&g.push(T,Re,at,Y,Ue.z,Ge)}}else Fe.visible&&g.push(T,Re,Fe,Y,Ue.z,null)}}let Se=T.children;for(let Re=0,Fe=Se.length;Re<Fe;Re++)Rh(Se[Re],O,Y,j)}function Yd(T,O,Y,j){let B=T.opaque,Se=T.transmissive,Re=T.transparent;p.setupLightsView(Y),ue===!0&&ie.setGlobalState(y.clippingPlanes,Y),j&&ne.viewport(L.copy(j)),B.length>0&&Oa(B,O,Y),Se.length>0&&Oa(Se,O,Y),Re.length>0&&Oa(Re,O,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Zd(T,O,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new mi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Wr:ai,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Se=p.state.transmissionRenderTarget[j.id],Re=j.viewport||L;Se.setSize(Re.z*y.transmissionResolutionScale,Re.w*y.transmissionResolutionScale);let Fe=y.getRenderTarget(),De=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(H),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),je&&he.render(Y);let Ye=y.toneMapping;y.toneMapping=Fi;let Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ue===!0&&ie.setGlobalState(y.clippingPlanes,j),Oa(T,Y,j),Ee.updateMultisampleRenderTarget(Se),Ee.updateRenderTargetMipmap(Se),re.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let St=0,Gt=O.length;St<Gt;St++){let It=O[St],At=It.object,He=It.geometry,Ft=It.material,dt=It.group;if(Ft.side===Yt&&At.layers.test(j.layers)){let Ln=Ft.side;Ft.side=on,Ft.needsUpdate=!0,jd(At,Y,j,He,Ft,dt),Ft.side=Ln,Ft.needsUpdate=!0,at=!0}}at===!0&&(Ee.updateMultisampleRenderTarget(Se),Ee.updateRenderTargetMipmap(Se))}y.setRenderTarget(Fe,De,Xe),y.setClearColor(H,V),Ge!==void 0&&(j.viewport=Ge),y.toneMapping=Ye}function Oa(T,O,Y){let j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,Se=T.length;B<Se;B++){let Re=T[B],Fe=Re.object,De=Re.geometry,Xe=Re.group,Ye=Re.material;Ye.allowOverride===!0&&j!==null&&(Ye=j),Fe.layers.test(Y.layers)&&jd(Fe,O,Y,De,Ye,Xe)}}function jd(T,O,Y,j,B,Se){T.onBeforeRender(y,O,Y,j,B,Se),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,O,Y,j,T,Se),B.transparent===!0&&B.side===Yt&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,y.renderBufferDirect(Y,O,j,B,T,Se),B.side=si,B.needsUpdate=!0,y.renderBufferDirect(Y,O,j,B,T,Se),B.side=Yt):y.renderBufferDirect(Y,O,j,B,T,Se),T.onAfterRender(y,O,Y,j,B,Se)}function Ba(T,O,Y){O.isScene!==!0&&(O=Le);let j=ge.get(T),B=p.state.lights,Se=p.state.shadowsArray,Re=B.state.version,Fe=F.getParameters(T,B.state,Se,O,Y),De=F.getProgramCacheKey(Fe),Xe=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?qe:Je).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",oe),Xe=new Map,j.programs=Xe);let Ye=Xe.get(De);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===Re)return Kd(T,Fe),Ye}else Fe.uniforms=F.getUniforms(T),T.onBeforeCompile(Fe,y),Ye=F.acquireProgram(Fe,De),Xe.set(De,Ye),j.uniforms=Fe.uniforms;let Ge=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=ie.uniform),Kd(T,Fe),j.needsLights=r0(T),j.lightsStateVersion=Re,j.needsLights&&(Ge.ambientLightColor.value=B.state.ambient,Ge.lightProbe.value=B.state.probe,Ge.directionalLights.value=B.state.directional,Ge.directionalLightShadows.value=B.state.directionalShadow,Ge.spotLights.value=B.state.spot,Ge.spotLightShadows.value=B.state.spotShadow,Ge.rectAreaLights.value=B.state.rectArea,Ge.ltc_1.value=B.state.rectAreaLTC1,Ge.ltc_2.value=B.state.rectAreaLTC2,Ge.pointLights.value=B.state.point,Ge.pointLightShadows.value=B.state.pointShadow,Ge.hemisphereLights.value=B.state.hemi,Ge.directionalShadowMap.value=B.state.directionalShadowMap,Ge.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ge.spotShadowMap.value=B.state.spotShadowMap,Ge.spotLightMatrix.value=B.state.spotLightMatrix,Ge.spotLightMap.value=B.state.spotLightMap,Ge.pointShadowMap.value=B.state.pointShadowMap,Ge.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Ye,j.uniformsList=null,Ye}function Jd(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=jr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Kd(T,O){let Y=ge.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function i0(T,O,Y,j,B){O.isScene!==!0&&(O=Le),Ee.resetTextureUnits();let Se=O.fog,Re=j.isMeshStandardMaterial?O.environment:null,Fe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:As,De=(j.isMeshStandardMaterial?qe:Je).get(j.envMap||Re),Xe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,Gt=Fi;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=It!==void 0?It.length:0,He=ge.get(j),Ft=p.state.lights;if(ue===!0&&(J===!0||T!==M)){let xn=T===M&&j.id===w;ie.setState(j,T,xn)}let dt=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ft.state.version||He.outputColorSpace!==Fe||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isBatchedMesh&&He.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&He.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==De||j.fog===!0&&He.fog!==Se||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Ye||He.morphTargets!==Ge||He.morphNormals!==at||He.morphColors!==St||He.toneMapping!==Gt||He.morphTargetsCount!==At)&&(dt=!0):(dt=!0,He.__version=j.version);let Ln=He.currentProgram;dt===!0&&(Ln=Ba(j,O,B));let nr=!1,Dn=!1,ho=!1,Ot=Ln.getUniforms(),Gn=He.uniforms;if(ne.useProgram(Ln.program)&&(nr=!0,Dn=!0,ho=!0),j.id!==w&&(w=j.id,Dn=!0),nr||M!==T){ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(D,"projectionMatrix",T.projectionMatrix),Ot.setValue(D,"viewMatrix",T.matrixWorldInverse);let Mn=Ot.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Pe.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Dn=!0,ho=!0)}if(B.isSkinnedMesh){Ot.setOptional(D,B,"bindMatrix"),Ot.setOptional(D,B,"bindMatrixInverse");let xn=B.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ot.setValue(D,"boneTexture",xn.boneTexture,Ee))}B.isBatchedMesh&&(Ot.setOptional(D,B,"batchingTexture"),Ot.setValue(D,"batchingTexture",B._matricesTexture,Ee),Ot.setOptional(D,B,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",B._indirectTexture,Ee),Ot.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",B._colorsTexture,Ee));let Hn=Y.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&$.update(B,Y,Ln),(Dn||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Ot.setValue(D,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Gn.envMap.value=De,Gn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(Gn.envMapIntensity.value=O.environmentIntensity),Dn&&(Ot.setValue(D,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&s0(Gn,ho),Se&&j.fog===!0&&K.refreshFogUniforms(Gn,Se),K.refreshMaterialUniforms(Gn,j,W,Q,p.state.transmissionRenderTarget[T.id]),jr.upload(D,Jd(He),Gn,Ee)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(jr.upload(D,Jd(He),Gn,Ee),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(D,"center",B.center),Ot.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ot.setValue(D,"normalMatrix",B.normalMatrix),Ot.setValue(D,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let xn=j.uniformsGroups;for(let Mn=0,Ph=xn.length;Mn<Ph;Mn++){let ys=xn[Mn];ze.update(ys,Ln),ze.bind(ys,Ln)}}return Ln}function s0(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function r0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,O,Y){let j=ge.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ge.get(T.texture).__webglTexture=O,ge.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Y=ge.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};let o0=D.createFramebuffer();this.setRenderTarget=function(T,O=0,Y=0){I=T,E=O,P=Y;let j=!0,B=null,Se=!1,Re=!1;if(T){let De=ge.get(T);if(De.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(De.__webglFramebuffer===void 0)Ee.setupRenderTarget(T);else if(De.__hasExternalTextures)Ee.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(De.__boundDepthTexture!==Ge){if(Ge!==null&&ge.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(T)}}let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);let Ye=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?B=Ye[O][Y]:B=Ye[O],Se=!0):T.samples>0&&Ee.useMultisampledRTT(T)===!1?B=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[Y]:B=Ye,L.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else L.copy(Te).multiplyScalar(W).floor(),N.copy(Z).multiplyScalar(W).floor(),G=X;if(Y!==0&&(B=o0),ne.bindFramebuffer(D.FRAMEBUFFER,B)&&j&&ne.drawBuffers(T,B),ne.viewport(L),ne.scissor(N),ne.setScissorTest(G),Se){let De=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,Y)}else if(Re){let De=O;for(let Xe=0;Xe<T.textures.length;Xe++){let Ye=ge.get(T.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,Y,De)}}else if(T!==null&&Y!==0){let De=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(T,O,Y,j,B,Se,Re,Fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){ne.bindFramebuffer(D.FRAMEBUFFER,De);try{let Xe=T.textures[Fe],Ye=Xe.format,Ge=Xe.type;if(!te.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&Y>=0&&Y<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(O,Y,j,B,xe.convert(Ye),xe.convert(Ge),Se))}finally{let Xe=I!==null?ge.get(I).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,j,B,Se,Re,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(O>=0&&O<=T.width-j&&Y>=0&&Y<=T.height-B){ne.bindFramebuffer(D.FRAMEBUFFER,De);let Xe=T.textures[Fe],Ye=Xe.format,Ge=Xe.type;if(!te.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.bufferData(D.PIXEL_PACK_BUFFER,Se.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(O,Y,j,B,xe.convert(Ye),xe.convert(Ge),0);let St=I!==null?ge.get(I).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,St);let Gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bp(D,Gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Se),D.deleteBuffer(at),D.deleteSync(Gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){let j=Math.pow(2,-Y),B=Math.floor(T.image.width*j),Se=Math.floor(T.image.height*j),Re=O!==null?O.x:0,Fe=O!==null?O.y:0;Ee.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Re,Fe,B,Se),ne.unbindTexture()};let a0=D.createFramebuffer(),l0=D.createFramebuffer();this.copyTextureToTexture=function(T,O,Y=null,j=null,B=0,Se=null){Se===null&&(B!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=B,B=0):Se=0);let Re,Fe,De,Xe,Ye,Ge,at,St,Gt,It=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(Y!==null)Re=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Xe=Y.min.x,Ye=Y.min.y,Ge=Y.isBox3?Y.min.z:0;else{let Hn=Math.pow(2,-B);Re=Math.floor(It.width*Hn),Fe=Math.floor(It.height*Hn),T.isDataArrayTexture?De=It.depth:T.isData3DTexture?De=Math.floor(It.depth*Hn):De=1,Xe=0,Ye=0,Ge=0}j!==null?(at=j.x,St=j.y,Gt=j.z):(at=0,St=0,Gt=0);let At=xe.convert(O.format),He=xe.convert(O.type),Ft;O.isData3DTexture?(Ee.setTexture3D(O,0),Ft=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ee.setTexture2DArray(O,0),Ft=D.TEXTURE_2D_ARRAY):(Ee.setTexture2D(O,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let dt=D.getParameter(D.UNPACK_ROW_LENGTH),Ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nr=D.getParameter(D.UNPACK_SKIP_PIXELS),Dn=D.getParameter(D.UNPACK_SKIP_ROWS),ho=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let Ot=T.isDataArrayTexture||T.isData3DTexture,Gn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Hn=ge.get(T),xn=ge.get(O),Mn=ge.get(Hn.__renderTarget),Ph=ge.get(xn.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ph.__webglFramebuffer);for(let ys=0;ys<De;ys++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(T).__webglTexture,B,Ge+ys),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(O).__webglTexture,Se,Gt+ys)),D.blitFramebuffer(Xe,Ye,Re,Fe,at,St,Re,Fe,D.DEPTH_BUFFER_BIT,D.NEAREST);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||ge.has(T)){let Hn=ge.get(T),xn=ge.get(O);ne.bindFramebuffer(D.READ_FRAMEBUFFER,a0),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,l0);for(let Mn=0;Mn<De;Mn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,B,Ge+Mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,B),Gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,Se,Gt+Mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,Se),B!==0?D.blitFramebuffer(Xe,Ye,Re,Fe,at,St,Re,Fe,D.COLOR_BUFFER_BIT,D.NEAREST):Gn?D.copyTexSubImage3D(Ft,Se,at,St,Gt+Mn,Xe,Ye,Re,Fe):D.copyTexSubImage2D(Ft,Se,at,St,Xe,Ye,Re,Fe);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ft,Se,at,St,Gt,Re,Fe,De,At,He,It.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,Se,at,St,Gt,Re,Fe,De,At,It.data):D.texSubImage3D(Ft,Se,at,St,Gt,Re,Fe,De,At,He,It):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Se,at,St,Re,Fe,At,He,It.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Se,at,St,It.width,It.height,At,It.data):D.texSubImage2D(D.TEXTURE_2D,Se,at,St,Re,Fe,At,He,It);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ho),Se===0&&O.generateMipmaps&&D.generateMipmap(Ft),ne.unbindTexture()},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&Ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ee.setTextureCube(T,0):T.isData3DTexture?Ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ee.setTexture2DArray(T,0):Ee.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){E=0,P=0,I=null,ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Qu=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var aT=Qu.length-1,rm=Math.min(...Qu.map(i=>i[1])),om=Math.max(...Qu.map(i=>i[1])),lT=new v(0,0,(rm+om)/2),am=new v(.047,.027,(om-rm)/2);var uT=new ht,dT=new v,fT=new v,pT=new ct;var mT=new v,gT=new v;var xT=new v;var _T=new v,yT=new v,vT=new v,MT=new bn,bT=new v;function pa(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let m=0;m<t.count;m++){let _=new v().fromBufferAttribute(t,m),g=_.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),n.push(_))}for(let m=0;m<(i.index?.count??t.count);m+=3){let _=y=>new v().fromBufferAttribute(t,i.index?i.index.getX(y):y),g=_(m),p=_(m+1),b=_(m+2),S=new bn(g,p,b).getNormal(new v);S.lengthSq()>.1&&s.push({a:g,b:p,c:b,n:S})}let o=e||Math.max(...n.map(m=>m.length())),{x:a,y:l,z:c}=new jt().setFromPoints(n).getSize(new v),h=Math.max(1e-4,e**2*.4),u=e?new v().setScalar(1/h):new v(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=m=>{let _=[];for(let g of m)g.lengthSq()>.5&&!_.some(p=>Math.abs(p.dot(g))>.9999)&&_.push(g);return _};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:f,normals:e?[]:d(s.map(m=>m.n)),edges:e?[]:d(s.flatMap(m=>[new v().subVectors(m.b,m.a).normalize(),new v().subVectors(m.c,m.b).normalize(),new v().subVectors(m.a,m.c).normalize()]))}}var ST=new v,wT=new v,TT=new v,ET=new v,AT=new ht,CT=new ht,RT=new v;function $r(i){return pa(new We(i.x*2,i.y*2,i.z*2))}var PT=new v;var lm=pa(new Yn(1,0).scale(...am)),IT={mesh:{position:new v,quaternion:new ht},shape:lm,radius:lm.radius,precise:!0};var LT=new v,DT=new v,UT=new v,NT=new ht,FT=new ht,OT=new ht;var BT=new v,zT=new v,kT=new v,VT=new v;var GT=new v;var HT=new v,WT=new v,XT=new v,qT=new v,YT=new v,ZT=new v,jT=new v;var JT={mesh:{position:null,quaternion:new ht},shape:{sphereRadius:0,normals:[],edges:[]}};function Hc(i,e,t){let n=new We(i,e,t),{uv:s,normal:r}=n.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:i,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return n}function cm(i,e){let t=i.attributes.uv;if(!t)return i;let n=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*n,u=t.getY(c)*n;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,i}function hm(i){switch(i){case"sphere":return new Tn(.5,24,16);case"cylinder":return new vt(.5,.5,1,24);case"cone":return new Cs(.5,1,24);case"torus":return new yn(.34,.14,12,32);case"capsule":return new Qi(.32,.36,8,16);default:return new We(1,1,1)}}function ma(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var rs=(i,e,t)=>i+(e-i)*t,Qr=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};function Wc(i,e){let t=Math.floor(i),n=Math.floor(e),s=Qr(0,1,i-t),r=Qr(0,1,e-n);return rs(rs(ma(t,n),ma(t+1,n),s),rs(ma(t,n+1),ma(t+1,n+1),s),r)}function um(i,e){return Wc(i,e)*.54+Wc(i*2.07+3.4,e*2.07-6.1)*.26+Wc(i*4.2+9,e*4.2)*.13+Wc(i*8.6,e*8.6-13)*.07}function dm(i){let n=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=i?[12,19,38]:[188,213,225],o=i?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),f=u**.54,d=r.map((m,_)=>rs(m,o[_],f));for(let m=0;m<1024;m++){let _=4*(m+l*1024),g=0,p=0,b=0;if(c>.025)if(i){let y=ma(m+792,l+677);y>.9988&&(b=(y-.9988)*49e3*Qr(.09,.3,c))}else{let[y,A]=s[m],E=2.8*h/(c+.16),P=y*E+3.6,I=A*E-8.1,w=um(P,I),M=um(P-.12,I-.09);g=Qr(.49,.66,w)*Qr(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-M)*5+(w-.54)*.8))}let S=i?1:rs(.94,1,Qr(.05,.34,c));n[_]=rs(d[0],(139+115*p)*S,g)+b,n[_+1]=rs(d[1],(154+100*p)*S,g)+b*.94,n[_+2]=rs(d[2],(178+77*p)*S,g)+b*.86,n[_+3]=255}}let a=new gi(n,1024,512,An);return a.colorSpace=gt,a.wrapS=Fn,a.magFilter=sn,a.minFilter=En,a.generateMipmaps=!0,a.needsUpdate=!0,a}function fm(){return{day:dm(!1),night:dm(!0)}}var kt=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),pm=kt(-24,24,-51,7),mm=34521,gm={x:0,y:0,z:3},os={x:.05,y:1.16,z:5.9},eo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:kt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:kt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:kt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:kt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:kt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:kt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:kt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:kt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:kt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:kt(9,23,-48,-37),sign:[16,-38.2]}},eE=[kt(-9,-6,-51,7),kt(6,9,-51,7),kt(-24,24,-8,-5),kt(-24,24,-27,-23),kt(9,23,-37,-34)],xm=[{name:"Glace",bounds:eo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:eo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:kt(-9,9,-51,7)},{name:"Sol ouest",bounds:kt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:kt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:kt(-24,-23,-51,7)},{name:"Sol est",bounds:kt(9,23,-51,-48)},{name:"Sol est",bounds:kt(9,23,-37,7)},{name:"Bordure est",bounds:kt(23,24,-51,7)}],ga={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},to=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],_m=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i}))),as={x:-19.4,y:.68,z:-3.25},ym=i=>({x:-20+i%6*1.52,z:.5-Math.floor(i/6)*1.25}),vm={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Xc(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Di(n);return s.colorSpace=gt,s}function Mm(i,e){let{day:t,night:n}=fm(),s=new fe(new Tn(180,40,20),new Ht({map:t,side:on,fog:!1,toneMapped:!1}));i.add(s);let r=Xc(128,128,(x,R)=>{let F=x.createRadialGradient(R/2,R/2,0,R/2,R/2,R/2);F.addColorStop(0,"#fff8df"),F.addColorStop(.12,"#fff3bd"),F.addColorStop(.18,"rgba(255,225,144,.40)"),F.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=F,x.fillRect(0,0,R,R)}),o=new Oo(new Dr({map:r,blending:ra,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),i.add(o);let a=t.clone();a.mapping=Gr,a.needsUpdate=!0;let l=new Jr(e);i.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Ls("#daeaff","#88724c",2.25),h=new Ds("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,i.add(c,h,h.target);let u=new v,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],d=0;function m(x){d=f[x]?x:0;let R=f[d];c.color.set(R.fill),c.groundColor.set(R.ground),c.intensity=R.hemi,h.color.set(R.sun),h.intensity=R.power,u.set(...R.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(R.sun),o.material.opacity=R.glow,s.material.map=d===2?n:t,s.material.color.set(R.sky),i.fog.color.set(R.fog),i.background.set(R.fog),i.environmentIntensity=g*[1,.56,.09][d]}function _(x){if(!h.castShadow)return;let R=h.target.position,F=Math.round(x.x/4)*4,K=Math.round(x.y/4)*4,k=Math.round(x.z/4)*4;R.x===F&&R.y===K&&R.z===k||(R.set(F,K,k),h.position.copy(R).add(u))}let g=0;i.background=new Ve(f[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(x,R,F){let[,K,k]=p[R],me=512;x.save(),x.scale(F/512,F/512),x.fillStyle=K,x.fillRect(0,0,me,me);let ie=R+19;function de(){return ie=Math.imul(ie,1664525)+1013904223>>>0,ie/4294967296}if(x.fillStyle=k,R===16){for(let he=0;he<16;he++)for(let $=0;$<16;$++)($+he)%2===0&&x.fillRect($*32,he*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(R)){let he=R===15?32:64;x.globalAlpha=.48;for(let $=0;$<me;$+=he){x.fillRect(0,$,me,R===8?3:2);for(let ve=-he;ve<me;ve+=he)x.fillRect(ve+$/he%2*(R===2?he/2:0),$,2,he)}}else if([4,5,6,7,10,11,12].includes(R)){let he=R===5?38:R===7?64:18;for(let $=0;$<he;$++){x.strokeStyle=k,x.globalAlpha=.08+de()*.22,x.lineWidth=R===5?1+de()*8:1+de()*4;let ve=de()*me,Ne=R===5?.018:.009;x.beginPath();for(let xe=0;xe<=me;xe+=8){let Me=ve+Math.sin(xe*Ne+$)*(R===6||R===7?4:12+$%5*3)+(R===4?xe*.28:0);xe===0?x.moveTo(xe,Me):x.lineTo(xe,Me)}x.stroke()}}else{x.globalAlpha=.27;for(let he=0;he<120;he++){let $=de()*me,ve=de()*me,Ne=2+de()*6;x.beginPath(),x.arc($,ve,Ne,0,Math.PI*2),x.fill()}}if(R!==16)for(let he=0;he<4400;he++)x.globalAlpha=.05+de()*.1,x.fillStyle=de()>.5?k:"#222324",x.fillRect(de()*me,de()*me,1+de()*4,1+de()*3);x.restore()}let S=new Set([0,2,4,5,8,15,16]),y=p.map(([x,R,F,K,k,me],ie)=>{let de=S.has(ie)?512:256,he=Xc(de,de,ve=>b(ve,ie,de));he.wrapS=he.wrapT=Fn;let $=new tn({map:he,roughness:K,metalness:k,flatShading:!0,opacity:me,transparent:me<1,depthWrite:me===1});return $.name=x,$}),A=y.map(x=>x.map.image),E=512,P=y.map(x=>new Bn({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),I={value:0},w={value:.24},M={value:null},L={value:0};function N(){M.value?.dispose(),M.value=Xc(512,512,(x,R)=>{x.fillStyle="#ffffff",x.fillRect(0,0,R,R);let F=R/52,K=R/64;for(let k of G){if(!k.position||!k.half||k.position.y+k.half.y<.22)continue;let me=(k.position.x+26)*F,ie=(k.position.z+54)*K,de=Math.min(55,k.half.x*F+5),he=Math.min(72,k.half.z*K+6);x.save(),x.translate(me+k.half.y*F*.2,ie+k.half.y*K*.24),x.scale(de,he);let $=x.createRadialGradient(0,0,.15,0,0,1);$.addColorStop(0,"rgba(22,37,65,.54)"),$.addColorStop(.58,"rgba(36,54,76,.29)"),$.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=$,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[...y,...P])x.onBeforeCompile=R=>{R.uniforms.uFocusAmount=I,R.uniforms.uFocusRadius=w,R.uniforms.uLabLightmap=M,R.uniforms.uLabBakedStrength=L,R.vertexShader=`varying vec3 vLabPosition;
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),R.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <map_fragment>",`
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let G=[],H=[];function V(x,R,F,K,k,me,ie,de=0,he=0,$=1,ve=1,Ne=!1){let xe=new fe(Ne?new We(k,me,ie):Hc(k,me,ie),y[de]);xe.position.set(R,F,K),xe.rotation.x=he,xe.receiveShadow=!0,xe.castShadow=!0,i.add(xe);let Me=new v(k/2,me/2,ie/2),ze={mesh:xe,position:xe.position,quaternion:xe.quaternion,half:Me,min:Me.clone().negate(),friction:$,gravity:ve,name:x,type:de,shape:$r(Me)};return G.push(ze),ze}let q=xm.map(({name:x,bounds:R,type:F=0,friction:K=.78,gravity:k=1})=>{let{xMin:me,xMax:ie,zMin:de,zMax:he}=R;return V(x,(me+ie)/2,-.33,(de+he)/2,ie-me,.66,he-de,F,0,K,k)});for(let x of Object.values(vm))for(let R of x)V(...R);let{xMin:Q,xMax:W,zMin:ee,zMax:pe}=pm;V("But\xE9e arri\xE8re",0,1.35,ee+.4,W-Q,2.7,.6,2),V("But\xE9e ouest",Q+.3,1.05,(ee+pe)/2,.6,2.1,pe-ee,2),V("But\xE9e est",W-.3,1.05,(ee+pe)/2,.6,2.1,pe-ee,2);let{xMin:Te,xMax:Z,zMin:X,zMax:be}=eo.hills.bounds,ue=Z-Te,J=be-X,se=16,Pe=64,Ue=new rn(ue,J,se,Pe).rotateX(-Math.PI/2).translate(Te+ue/2,0,X+J/2),Le=Ue.attributes.uv;for(let x=0;x<Le.count;x++)Le.setXY(x,Le.getX(x)*ue/2.6,Le.getY(x)*J/2.6);let je=Ue.attributes.position,pt;function D(x){if(pt===x)return;pt=x;let R=pt*.017;for(let F=0;F<je.count;F++){let K=je.getX(F),k=je.getZ(F),me=Math.sin(Math.PI*Oe.clamp((K-Te)/ue,0,1)),ie=Math.min(1,(k-X)*.48,(be-k)*.48),de=.93+.56*Math.sin(k*.36+R)+.32*Math.cos(K*.67+k*.26+R*1.4)+.19*Math.sin(k*.81+R*.67);je.setY(F,Math.max(0,me*ie*de))}je.needsUpdate=!0,Ue.computeVertexNormals(),Ue.computeBoundingSphere()}D(mm);let ce=new fe(Ue,y[3]);ce.userData.editorAssetId="lab-hill",ce.receiveShadow=ce.castShadow=!0,i.add(ce);let re=(x,R)=>{let F=Oe.clamp((x-Te)/ue*se,0,se-1e-6),K=Oe.clamp((R-X)/J*Pe,0,Pe-1e-6),k=Math.floor(F),me=Math.floor(K),ie=F-k,de=K-me,he=se+1,$=me*he+k,ve=je.getY($),Ne=je.getY($+1),xe=je.getY($+he),Me=je.getY($+he+1);return ie+de<=1?ve+(Ne-ve)*ie+(xe-ve)*de:Me+(xe-Me)*(1-ie)+(Ne-Me)*(1-de)};G.push({heightfield:!0,mesh:ce,editorAssetId:"lab-hill",height:re,...eo.hills.bounds,friction:.81,gravity:1});function te(x,R,F,K,k=1.45){let me=Xc(384,72,(de,he,$)=>{de.fillStyle="#202a32",de.fillRect(0,0,he,$),de.fillStyle=K,de.font="bold 31px system-ui",de.textAlign="center",de.fillText(x,he/2,48,he-20)}),ie=new fe(new rn(3.2,.6),new Ht({map:me,side:Yt}));ie.position.set(R,k,F),i.add(ie),H.push(ie)}for(let x of Object.values(eo)){te(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:R,xMax:F,zMin:K,zMax:k}=x.bounds,me=new ko(new rt().setFromPoints([new v(R,.025,K),new v(F,.025,K),new v(F,.025,k),new v(R,.025,k)]),new xi({color:x.color,transparent:!0,opacity:.72}));i.add(me),H.push(me)}te("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),te("MURS HAUTS",3,-31,"#e8d2ff"),te("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ne=new tn({color:"#c8e6ed",metalness:1,roughness:.16}),we=new fe(new qn(.54,2),ne);we.userData.editorAssetId="chrome-sphere",we.position.set(as.x,as.y,as.z),we.castShadow=!0,i.add(we);let ge=p.map((x,R)=>{let{x:F,z:K}=ym(R);return V("\xC9chantillon "+p[R][0],F,.325,K,.65,.65,.65,R,0,1,1,!0).mesh}),Ee=new fn(1,12).rotateX(-Math.PI/2),Je=new Ht({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function qe(x){let R=new fe(Ee,Je);return R.scale.setScalar(x),i.add(R),R}function C(x,R,F,K,k,me,ie,de){let he=R>=3;e.shadowMap.enabled=he,h.castShadow=he,Je.opacity=R===2?.17:.11,L.value=de?.38+F*.04:0;let $=R>=9?2048:R>=6?1024:R>=4?512:256;h.shadow.intensity=.45+R*.055,h.shadow.radius=.65+R*.12;let ve=13+R*1.2;Object.assign(h.shadow.camera,{left:-ve,right:ve,top:ve,bottom:-ve}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==$&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set($,$)),o.visible=k,ie!==E&&(E=ie,y.forEach((xe,Me)=>{let ze=xe.userData.texture??xe.map,U=S.has(Me)?ie:Math.min(256,ie);if(ze.image.width===U)return;let ye=document.createElement("canvas");ye.width=ye.height=U;let Ae=ye.getContext("2d");U>512?b(Ae,Me,U):Ae.drawImage(A[Me],0,0,U,U);let Ie=new Di(ye);Ie.colorSpace=ze.colorSpace,Ie.wrapS=ze.wrapS,Ie.wrapT=ze.wrapT,Ie.repeat.copy(ze.repeat);for(let _e of[xe,P[Me]])_e.userData.texture=Ie,_e.map=Ie,_e.needsUpdate=!0;ze.dispose()}));let Ne=x>=4;for(let xe of G)xe.mesh?.isMesh&&!xe.zone&&(xe.mesh.material=Ne?y[xe.type]:P[xe.type]);ce.material=Ne?y[3]:P[3];for(let xe=0;xe<ge.length;xe++)ge[xe].material=Ne?y[xe]:P[xe];y.forEach((xe,Me)=>{for(let ze of[xe,P[Me]])ze.userData.texture||(ze.userData.texture=ze.map),ze.map=me?ze.userData.texture:null,ze.color.set(me?"#ffffff":p[Me][1]),ze.needsUpdate=!0}),g=K?.21+F*.067:0,ne.metalness=K?.95:.1,ne.roughness=K?.13:.46,s.visible=x>=2,m(d)}return{boxes:G,floors:q,probe:we,display:ge,visual:C,shadow:qe,setTimeOfDay:m,centerShadows:_,get hillSeed(){return pt},setHillSeed:D,bakeLightmap:N,mapMaterial:(x,R)=>R>=4?y[x]:P[x],builtObjects:[...G.map(x=>x.mesh).filter(x=>x?.isObject3D),we,...H],materials:[...y,...P],focus(x,R,F){I.value=x?R*.75:0,w.value=.07+F*.058}}}function bm(i,e,t){function n(c,h,u=.85){let f=c.getWorldPosition(new v),d=c.getWorldQuaternion(new ht);e.push({half:h,min:h.clone().negate(),position:f,quaternion:d,mesh:{position:f,quaternion:d},shape:$r(h),friction:u,gravity:1})}let s=[],r=[],o=new Bn({color:"#485d5d",flatShading:!0});function a([c,h],u,f){let d=new fe(new We(.095,.68,.11),o);d.position.set(c,.34,h+.46),d.castShadow=d.receiveShadow=!0,i.add(d),n(d,new v(.0475,.34,.055));let m=new un;m.position.set(c,.85,h+.4),m.rotation.x=-.35,i.add(m);let _=new fe(new We(.64,.36,.055),new Bn({color:"#182831"}));m.add(_);let g=document.createElement("canvas");g.width=512,g.height=96;let p=g.getContext("2d"),b=new Di(g);b.colorSpace=gt;let S=new fe(new rn(.61,.095),new Ht({map:b}));S.position.set(0,.116,.03),m.add(S);let y=.592/f.length,A=f.map(([P,I],w)=>{let M=new fe(new We(y-.012,.155,.04),new Bn({color:"#478086"}));M.position.set(-.296+y*(w+.5),-.045,.046),m.add(M),s.push(M),M.userData.touchWidth=y-.012;let L=document.createElement("canvas");L.width=208,L.height=172;let N=new Di(L);N.colorSpace=gt;let G=new fe(new rn(y-.017,.139),new Ht({map:N}));G.position.z=.0205,M.add(G);let H=-1/0;return M.userData.action=()=>{let V=performance.now();V-H<250||(H=V,I(),l(),M.position.z=.036,setTimeout(()=>{M.position.z=.046},115))},{label:P,context:L.getContext("2d"),texture:N}});function E(){p.fillStyle="#182831",p.fillRect(0,0,512,96),p.fillStyle="#ffe1a0",p.font="bold 38px system-ui",p.fillText(u,17,62,478);for(let P of A){let I=P.context;I.fillStyle="#386269",I.fillRect(0,0,208,172),I.fillStyle="#fff2d5",I.textAlign="center",I.font="bold 27px system-ui";let w=(typeof P.label=="function"?P.label():P.label).split("|");w.forEach((M,L)=>I.fillText(M,104,(w.length>1?68:97)+L*37,188)),P.texture.needsUpdate=!0}b.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(ga.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,to[0])],["Boule",()=>t.spawn(1,to[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,to[0])],["Vider",t.clear]]),a(ga.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,to[1])],["Sph\xE8re",()=>t.spawn(5,to[1])]]),a(ga.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(ga.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function qc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new rt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Sm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let m=Sm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Sm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Zc=0,hb=1,ub=new v,wm=new ia,ed=new hn,Tm=new v,Yc=new bn,jc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Jc,this.unassigned=new Jc,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new td(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new v;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,ub)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Zc){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new v,t=new v,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-n[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=n[o],l=s[o],c,h;r=0,wm.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let m=e[f];if(m!==a&&m!==l){wm.closestPointToPoint(m.point,!0,Tm);let _=Tm.distanceToSquared(m.point);_>r&&(r=_,c=m)}}r=-1,ed.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let m=e[f];if(m!==a&&m!==l&&m!==c){let _=Math.abs(ed.distanceToPoint(m.point));_>r&&(r=_,h=m)}}let u=[];if(ed.distanceToPoint(h.point)<0){u.push(ci.create(a,l,c),ci.create(h,l,a),ci.create(h,c,l),ci.create(h,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge(d)),u[f+1].getEdge(1).setTwin(u[d+1].getEdge(0))}}else{u.push(ci.create(a,c,l),ci.create(h,a,l),ci.create(h,l,c),ci.create(h,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge((3-f)%3)),u[f+1].getEdge(0).setTwin(u[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(u[f]);for(let f=0,d=e.length;f<d;f++){let m=e[f];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let _=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,_=this.faces[g])}_!==null&&this._addVertexToFace(m,_)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===Zc&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=hb;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Zc&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=ci.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},ci=class i{constructor(){this.normal=new v,this.midpoint=new v,this.area=0,this.constant=0,this.outside=null,this.mark=Zc,this.edge=null}static create(e,t,n){let s=new i,r=new xa(e,s),o=new xa(t,s),a=new xa(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Yc.set(e.point,t.point,n.point),Yc.getNormal(this.normal),Yc.getMidpoint(this.midpoint),this.area=Yc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},xa=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},td=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Jc=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Bi=class extends rt{constructor(e=[]){super();let t=[],n=[],r=new jc().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ke(t,3)),this.setAttribute("normal",new ke(n,3))}};var Cn=Math.PI*2,Kc=.84,zi=128;function hs(i){let e=new Uint8Array(zi*zi*4);for(let n=0;n<zi;n++)for(let s=0;s<zi;s++){let r=(s+.5)/zi,o=(n+.5)/zi,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/Kc,1),Math.min(o/Kc,1),s,n),l=(s+n*zi)*4;for(let c=0;c<3;c++)e[l+c]=Oe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new gi(e,zi,zi);return t.colorSpace=gt,t.generateMipmaps=!0,t.minFilter=En,t.magFilter=sn,t.needsUpdate=!0,t}function Hs(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function et(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new Ve(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Kc,r.getY(l)*Kc):r.setXY(l,.95,.95);return n.setAttribute("color",new yt(a,3)),n}function us(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:qc(s),material:new tn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Em(i,e,t){let n=i/2,s=e/2,r=new Ui;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function ls(i,e,t,n,s){return new Ps(Em(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function cs(i,e,t=n=>n){let n=[],s=[],r=[];for(let h=0;h<i.length;h++){let[u,f]=i[h];for(let d=0;d<=e;d++){let m=Cn*d/e,_=t(u,f,m,h);if(n.push(_*Math.sin(m),f,_*Math.cos(m)),s.push(d/e,h/(i.length-1)),h===i.length-1||d===e)continue;let g=h*(e+1)+d,p=g+e+1;u>0&&r.push(g,g+1,p),i[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new rt;o.setAttribute("position",new ke(n,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new v,c=new v;for(let h=0;h<i.length;h++){let u=h*(e+1),f=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function _a(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new v(0,s,0));continue}for(let r=0;r<e;r++){let o=Cn*r/e;t.push(new v(n*Math.sin(o),s,n*Math.cos(o)))}}return new Bi(t)}function db(){let t=new $o(Em(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let l=0;l<n.count;l++){let c=Oe.clamp(n.getX(l)/.098+.5,0,1),h=Oe.clamp((n.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=hs((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Cn),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[et(ls(.106,.207,.013,.011,.0019),8425890),et(ls(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),et(ls(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),et(t,16777215,!0),et(ls(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),et(new We(.0036,.024,.004).translate(.055,.029,0),11714250),et(new We(.0036,.015,.004).translate(-.055,.032,0),11385285),et(new We(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(et(new vt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(et(new fn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(et(new fn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Bi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new v(c,h,l))));return us("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function fb(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=cs(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+u)/.014)**2))));return a*(1-.14*h**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=hs((a,l,c,h)=>{let u=Cn*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(u)),m=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(u))/.009)**2)))),_=d**3*m,g=Hs(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*_+p,76+24*d+70*_+p,24+11*d+52*_+p*.8]}),o=_a([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return us("bread","Baguette de pain",.27,o,[et(s,16777215,!0)],r,.9)}function pb(){let i=hs((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,f=Math.abs(o-.5)<.013,m=46+12*Hs(a,l)-(c&&(u||f)?35:0);return[m*.94,m,m*1.04]}),e=cs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=cs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[et(e,16777215,!0),et(t,11056059),et(new vt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),et(new vt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;n.push(et(new We(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=_a([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return us("wheel","Roue",1.8,s,n,i,.64,.23)}function mb(){let i=hs((r,o,a,l)=>{let c=Hs(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=cs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new yn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new v(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new v(.166,-.027,.01),new v(.166,.053,-.01));let s=new Bi(n);return us("cup","Tasse",.39,s,[et(e,16777215,!0),et(t,15785922)],i,.37)}function gb(){let i=cs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=hs((s,r,o,a)=>{let l=9*Hs(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Cn*4);return[h,h*1.13,h*1.24]}),t=[et(i,16777215,!0),et(new es(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),et(new fn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),et(new fn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),et(new vt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),et(new fn(.008,12).translate(0,.035,.0336),15633202)],n=_a([[.033,-.143],[.054,.133]],6);return us("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function xb(){let i=cs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=hs((r,o,a,l)=>{let c=10*Hs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(Cn*r*2));if(e[f]?.[u]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Cn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),n=[et(i,16777215,!0),et(new fn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),et(new es(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),et(new fn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=_a([[.069,-.112],[.069,.109]],6);return us("soda","Canette de soda",.35,s,n,t,.42,.27)}function _b(){let i=cs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=hs((s,r,o,a)=>{let l=15*Hs(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[et(i,16777215,!0),et(ls(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),et(new fn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=_a([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return us("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function yb(){let i=hs((s,r,o,a)=>{let l=8*Hs(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=cs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[et(ls(.138,.22,.061,.016,.004),14788675),et(ls(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),et(new rn(.106,.174).translate(0,-.004,.0395),16777215,!0),et(e,2502456),et(new vt(.014,.017,.016,10).translate(.04,.117,.001),2503482),et(new We(.008,.047,.027).translate(-.072,.014,-.002),3028798),et(new We(.006,.02,.019).translate(-.072,-.043,-.002),3950414),et(new fn(.004,8).translate(.04,.066,.0397),15817792),et(new fn(.004,8).translate(-.04,.066,.0397),7903100),et(ls(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new v(s,l,o),new v(r,l,o),new v(r,l,a),new v(s,l,a)]);return us("radio","Talkie-walkie",.43,new Bi(n),t,i,.61,.08)}function Am(){return[db(),fb(),pb(),mb(),gb(),xb(),_b(),yb()]}var vb=[0,1,2,3,4,5,7,8,9,10];function Cm(i){_m.forEach(({x:e,z:t},n)=>i(vb[n],new v(e,.8,t)))}function Rm(){let i=[["Cube",new We(.33,.33,.33),"#b76b50",0,1.35],["Boule",new qn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Qo(.29),"#d8ae53",0,1],["Brique",new We(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new We(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new qn(.6,4),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:pa(t,s),material:new tn({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:$r(t.computeBoundingBox()??t.boundingBox.getSize(new v).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of Am()){let s=pa(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var Pm=48,Im=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),Mb=(i,e,t)=>Math.max(e,Math.min(t,i)),bb=()=>structuredClone(Im.shield),ya=(i,e,t,n)=>Number.isFinite(i)?Mb(i,t,n):e;function Qc(i){let e=i?.mode==="lathe"?Im.bottle:bb(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=Pm?i.points.map(o=>[ya(o?.[0],0,-1.5,1.5),ya(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:ya(i?.depth,e.depth,.025,1.5),bevel:ya(i?.bevel,e.bevel,0,.15),segments:Math.round(ya(i?.segments,32,8,64))}}function Lm(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function $c(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function Sb(i,e,t,n){let s=$c(i,e,t),r=$c(i,e,n),o=$c(t,n,i),a=$c(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function wb(i){let e=Qc(i),t=e.mode==="lathe"?e.points:Lm(e);if(t.length<3||t.length>Pm*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&Sb(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Dm(i){let e=Qc(i),t=wb(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([r,o])=>new ae(Math.max(0,r),o));n=new Ko(s,e.segments)}else{let s=Lm(e),r=new Ui;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new Ps(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new yt(new Float32Array(s*2),2))}return n}var nd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],va=null,Tb=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Ws(i){return typeof i=="string"&&Tb.has(i.replace(/^custom-model-game-/,""))}function eh(i){let e=i?.parts;return Ws(i?.id)||Ws(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Ws(t?.assetId))}function Nm(){if(va)return va;let i=Rm(),e=nd;return va=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),va.set("chrome-sphere",{geometry:new qn(.54,2),material:new tn({color:"#c8e6ed",metalness:1,roughness:.16})}),va}function th(i){return typeof i=="string"&&Nm().has(i)}function id(i){return Nm().get(i)??null}function Eb(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function Um(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[Eb(e,i)]}}function sd(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>Um(e,t)),Um("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var od="gorilla-lab-models-v1",Ma=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),Ab=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,Cb=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Om=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Rb=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),Pb=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Ib=/^#[a-f\d]{6}$/i;function Fm(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function ds(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?Oe.clamp(i[s],t,n):e)}var rd=new Set(["box","sphere","capsule","convex"]);function Lb(i){if(i?.mode==="box")return{mode:"box",center:ds(i.center,0,-6,6),size:ds(i.size,.5,.025,12)};let e=Math.round(Oe.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:rd.has(i.shape)?i.shape:"box",center:ds(i.center,0,-6,6),size:ds(i.size,.5,.025,12),rotation:ds(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&rd.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Xs(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>Ma.models||JSON.stringify(i).length>Ma.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:i.models.filter(n=>!eh(n)).map(n=>{if(typeof n?.id!="string"||!Pb.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>Ma.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(n.id),{id:n.id,name:Fm(n.name,"Mod\xE8le sans nom"),kind:n.kind==="structure"?"structure":"prop",...th(n.assetId)?{assetId:n.assetId}:{},inGame:n.inGame===!0,properties:Object.fromEntries(Object.entries(Rb).map(([s,r])=>[s,typeof n.properties?.[s]=="boolean"?n.properties[s]:r])),hitbox:Lb(n?.hitbox),parts:n.parts.filter(s=>!Ws(s?.assetId)).map((s,r)=>({name:Fm(s?.name,`Pi\xE8ce ${r+1}`),shape:s?.shape==="asset"&&th(s?.assetId)?"asset":Object.hasOwn(Cb,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&th(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:Qc(s?.profile)}:{},position:ds(s?.position,0,-3,3),rotation:ds(s?.rotation,0,-360,360),scale:ds(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&Ib.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(Om,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=Ma.textureBytes&&Ab.test(s.texture)?s.texture:null}))}}),avatarId:typeof i.avatarId=="string"&&e.has(i.avatarId)?i.avatarId:null}}function Bm(i){try{let e=(i??globalThis.localStorage)?.getItem(od);if(e&&e.length<=Ma.fileBytes)return Xs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Db(i){switch(i){case"sphere":return new Tn(.5,20,12);case"cylinder":return new vt(.5,.5,1,20);case"cone":return new Cs(.5,1,20);case"torus":return new yn(.365,.135,8,24);case"capsule":return new Qi(.28,.44,6,16);case"diamond":return new Yn(.5);default:return new We(1,1,1)}}var zm=Object.keys(Om),no=64,ba=4,km=2,Mi;function Ub(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Vm(){if(Mi)return Mi;let i=no*ba,e=no*km,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/no)*ba+Math.floor(s/no),o=Ub(zm[r],s%no,n%no),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Mi=new gi(t,i,e),Mi.colorSpace=gt,Mi.magFilter=sn,Mi.minFilter=En,Mi.generateMipmaps=!0,Mi.needsUpdate=!0,Mi}function Gm(i){let e=i.shape==="asset"?id(i.assetId):null,t=i.shape==="custom"?Dm(i.profile):e?.geometry?.clone()??Db(i.shape),n=t.index?t.toNonIndexed():t;n!==t&&t.dispose(),n.attributes.uv||n.setAttribute("uv",new ke(new Float32Array(n.attributes.position.count*2),2));let s=i.rotation.map(Oe.degToRad);n.scale(...i.scale),n.rotateX(s[0]),n.rotateY(s[1]),n.rotateZ(s[2]),n.translate(...i.position);let r=new Ve(i.color),o=n.attributes.position.count,a=new Float32Array(o*3),l=n.attributes.uv,c=zm.indexOf(i.surface),h=c%ba,u=Math.floor(c/ba),f=n.attributes.color;for(let d=0;d<o;d++)i.shape==="asset"&&f?(a[d*3]=f.getX(d)*r.r,a[d*3+1]=f.getY(d)*r.g,a[d*3+2]=f.getZ(d)*r.b):r.toArray(a,d*3),i.shape!=="asset"&&!i.texture&&l.setXY(d,(h+.05+l.getX(d)*.9)/ba,(u+.05+l.getY(d)*.9)/km);return n.setAttribute("color",new yt(a,3)),n}function Nb(i){let e=i?.shape==="asset"?id(i.assetId):null;if(e?.material){let n=e.material.clone();if(n.map&&(n.map=n.map.clone(),n.map.needsUpdate=!0),i.texture){n.map?.dispose();let s=new _i().load(i.texture);s.colorSpace=gt,s.wrapS=s.wrapT=Fn,n.map=s}return i.color&&i.color!=="#ffffff"&&n.color?.multiply(new Ve(i.color)),n.needsUpdate=!0,n}if(!i?.texture)return new tn({vertexColors:!0,map:Vm(),roughness:.68});let t=new _i().load(i.texture);return t.colorSpace=gt,t.wrapS=t.wrapT=Fn,new tn({vertexColors:!0,map:t,roughness:.68})}function nh(i){return i?.parts?.some(e=>e.texture||e.shape==="asset")?i.parts.map(Nb):new tn({vertexColors:!0,map:Vm(),roughness:.68})}function ih(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==Mi&&e.map.dispose(),e.dispose()}}function Hm(i){let e=i.map(Gm),t=qc(e,i.some(n=>n.texture||n.shape==="asset"));return e.forEach(n=>n.dispose()),t.center(),t.computeBoundingBox(),t}function sh(i){let e=Hm(i.parts),t=e.boundingBox.getSize(new v);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function rh(i){let e=new jt;for(let t of i.parts??[]){let n=Gm(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new v,new v(1,1,1)),e}function oh(i){return rh(i).getSize(new v)}function Wm(i){let e=rh(i),t=e.getCenter(new v),n=e.getSize(new v),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":rd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Oe.clamp(s.precision,8,96):48,center:r?new v(...s.center):t,size:r?new v(...s.size):n,rotation:r?new v(...s.rotation??[0,0,0]):new v,boundsCenter:t,boundsSize:n}}function Fb(i,e){let t=i.attributes.position,n=[],s=new Set;for(let l=0;l<t.count;l++){let c=new v().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),n.push(c))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<n.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(n[l]);for(let h=0;h<n.length;h++)a[h]=Math.min(a[h],n[h].distanceToSquared(n[l]))}return r}function Ob(i){let e=Wm(i),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new Tn(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new Qi(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&i.parts?.length){let n=Hm(i.parts),s=Fb(n,e.precision);if(n.dispose(),s.length>=4)try{let r=new Bi(s),o=e.boundsSize.clone().max(new v(1e-5,1e-5,1e-5));return r.scale(1/o.x,1/o.y,1/o.z),r.computeVertexNormals(),r}catch{}}return new We(1,1,1)}function Xm(i,e=null){let t=Wm(i),n=Ob(i),s=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5)),r=e?new v(e.x,e.y,e.z):s.clone(),o=t.size.clone().multiply(r).divide(s),a=t.center.clone().sub(t.boundsCenter).multiply(r).divide(s);return n.scale(o.x,o.y,o.z),n.rotateX(Oe.degToRad(t.rotation.x)),n.rotateY(Oe.degToRad(t.rotation.y)),n.rotateZ(Oe.degToRad(t.rotation.z)),n.translate(a.x,a.y,a.z),n.computeBoundingBox(),n}var Zm=Object.freeze([8,16,32,48,64,96,128]),jm=16,lh=24,qm=new WeakMap,fs=Oe.clamp,qs=Oe.lerp,ad=i=>i*i*(3-2*i);function jn(i,e,t,n){return Number.isFinite(i)?fs(i,e,t):n}function Ym(i){if(!i)return null;let e=Xs({version:1,models:[i]});return e.models[0]?.parts.length?e.models[0]:null}var Bb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Ys(i={}){let e=Zm.includes(i?.detail)?i.detail:jm,t=i?.heights;return{detail:e,seed:Math.round(jn(i?.seed,0,2147483647,1)),amplitude:jn(i?.amplitude,0,12,0),frequency:jn(i?.frequency,.015,2,.12),octaves:Math.round(jn(i?.octaves,1,5,3)),roughness:jn(i?.roughness,.15,.95,.42),ridge:jn(i?.ridge,0,1,0),edgeFade:jn(i?.edgeFade,0,1,0),grass:jn(i?.grass,0,1,0),shrub:jn(i?.shrub,0,1,0),grassSize:jn(i?.grassSize,.1,5,1),shrubSize:jn(i?.shrubSize,.1,5,1),grassModel:Ym(i?.grassModel),shrubModel:Ym(i?.shrubModel),grassTexture:typeof i?.grassTexture=="string"&&i.grassTexture.length<5e5&&Bb.test(i.grassTexture)?i.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,n=>jn(n,-lh,lh,0)):null}}function Jm(i,e,t,n){let s=fs(t,0,e),r=fs(n,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,f=i[u],d=i[u+1],m=i[u+h],_=i[u+h+1];return l+c<=1?f+(d-f)*l+(m-f)*c:_+(m-_)*(1-l)+(d-_)*(1-c)}function Km(i,e){let t=Zm.includes(e)?e:jm;if(t===i.detail)return i;if(!i.heights)return{...i,detail:t,heights:null};let n=t+1,s=i.detail/t,r=Array.from({length:n**2},(o,a)=>Jm(i.heights,i.detail,a%n*s,Math.floor(a/n)*s));return{...i,detail:t,heights:r}}function ki(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ah(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=ad(i-n),o=ad(e-s),a=qs(ki(n,s,t),ki(n+1,s,t),r),l=qs(ki(n,s+1,t),ki(n+1,s+1,t),r);return 2*qs(a,l,o)-1}function ld(i){let{w:e,d:t,terrain:n}=i,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:f}=n,d=qm.get(i),m=d&&d.w===e&&d.d===t&&d.detail===s&&d.seed===r&&d.amplitude===o&&d.frequency===a&&d.octaves===l&&d.roughness===c&&d.ridge===h&&d.edgeFade===u;if(m&&d.heights===f)return d;let _=s+1,g=m?d.procedural:new Float64Array(_**2);if(!m&&o)for(let S=0;S<=s;S++)for(let y=0;y<=s;y++){let A=(y/s-.5)*e*a,E=(S/s-.5)*t*a,P=0,I=1,w=0;for(let N=0;N<l;N++){let G=ah(A*2**N,E*2**N,r+N*13);P+=I*qs(G,1-2*Math.abs(G),h),w+=I,I*=c}let M=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(y/s-.5))*2,(.5-Math.abs(S/s-.5))*2)),u*2):1,L=l===3&&c===.42&&h===0&&u===0;g[S*_+y]=L?o*(.62*ah(A,E,r)+.26*ah(A*2.03,E*2.03,r+13)+.12*ah(A*4.13,E*4.13,r+37)):o*P/w*M}let p=f?g.map((S,y)=>S+f[y]):g,b={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:f,procedural:g,surface:p};return qm.set(i,b),b}function $m(i,e,t){let{detail:n,w:s,d:r,surface:o}=i;return Jm(o,n,(e/s+.5)*n,(t/r+.5)*n)}function zb(i,e,t){let{detail:n,surface:s}=i,r=n+1,o=Math.max(0,e-1),a=Math.min(n,e+1),l=Math.max(0,t-1),c=Math.min(n,t+1),h=0,u=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(h+=s[f*r+d],u++);return h/u}function Qm(i,e,t,{mode:n,radius:s,strength:r,target:o}={}){if(!i?.terrain||!["raise","lower","smooth","flatten"].includes(n)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=ld(i),{detail:l,w:c,d:h,surface:u,procedural:f}=a,d=e-i.x,m=t-i.z,_=fs(d,-c/2,c/2),g=fs(m,-h/2,h/2);if((d-_)**2+(m-g)**2>=s**2)return!1;let p=(d/c+.5)*l,b=(m/h+.5)*l,S=c/l,y=h/l,A=Math.max(0,Math.ceil(p-s/S)),E=Math.min(l,Math.floor(p+s/S)),P=Math.max(0,Math.ceil(b-s/y)),I=Math.min(l,Math.floor(b+s/y)),w=Number.isFinite(o)?o-i.y:$m(a,d,m),M=l+1,L=a.heights?.slice()??new Array(M**2).fill(0),N=!1,G=!1;function H(V,q,Q){N=!0;let W=q*M+V,ee=L[W],pe;if(n==="raise"||n==="lower")pe=ee+(n==="raise"?1:-1)*r*Q;else{let Te=n==="flatten"?w:zb(a,V,q);pe=qs(u[W],Te,Math.min(1,r)*Q)-f[W]}pe=fs(pe,-lh,lh),!(Math.abs(pe-ee)<1e-7)&&(L[W]=pe,G=!0)}for(let V=P;V<=I;V++)for(let q=A;q<=E;q++){let Q=Math.hypot((q-p)*S,(V-b)*y)/s;Q<1&&H(q,V,ad(1-Q))}if(!N){let V=fs(p,0,l),q=fs(b,0,l),Q=Math.min(l-1,Math.floor(V)),W=Math.min(l-1,Math.floor(q)),ee=V-Q,pe=q-W,Te=ee+pe<=1,Z=Te?1-ee-pe:ee+pe-1,X=Te?ee:1-pe,be=Te?pe:1-ee;if(Z>=Math.max(X,be)){let ue=+!Te;H(Q+ue,W+ue,1)}else X>=be?H(Q+1,W,1):H(Q,W+1,1)}return G&&(i.terrain.heights=L),G}function cd(i){let{w:e,d:t,terrain:n}=i,{detail:s}=n,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let f=0;f<=s;f++){let d=u*r+f;o[3*d]=(f/s-.5)*e,o[3*d+2]=(u/s-.5)*t,a[2*d]=f/s*e/2.6,a[2*d+1]=(1-u/s)*t/2.6,u<s&&f<s&&(l.set([d,d+r,d+1,d+r+1,d+1,d+r],c),c+=6)}let h=new rt;return h.setAttribute("position",new yt(o,3).setUsage(da)),h.setAttribute("uv",new yt(a,2)),h.setIndex(new yt(l,1)),kb(h,i),h}function kb(i,e){let{surface:t}=ld(e),{position:n}=i.attributes;for(let s=0;s<t.length;s++)n.setY(s,t[s]);n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere(),i.boundingBox&&i.computeBoundingBox()}function Vb(){let i=[];for(let t=0;t<5;t++){let n=t*2.4,s=Math.cos(n),r=Math.sin(n),o=s*.105,a=r*.105;i.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new rt;return e.setAttribute("position",new ke(i,3)),e.setAttribute("uv",new ke(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function Gb(){return new qn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var Hb=[{name:"grass",geometry:Vb,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:Gb,perMetre:.17,max:48,salt:47,color:"#36583c"}];function eg(i){let e=new un;for(let{name:t,geometry:n,perMetre:s,max:r,salt:o,color:a}of Hb){let l=i.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,i.w*i.d*s)*l)),h=i.terrain[t+"Model"],u=i.terrain[t+"Size"]??1,f,d;if(h){let g=t==="grass"?.42:.85;f=sh(h),f.scale(g*u,g*u,g*u),f.translate(0,g*u/2,0),d=nh(h)}else if(f=n(),f.scale(u,u,u),d=new Bn({color:a,side:t==="grass"?Yt:si,flatShading:!0}),t==="grass"&&i.terrain.grassTexture){let g=new _i().load(i.terrain.grassTexture);g.colorSpace=gt,d.map=g,d.color.set("#ffffff"),d.userData.ownTexture=!0}let m=new Bo(f,d,c);m.name=t,m.instanceMatrix.setUsage(da),m.userData.salt=o,m.receiveShadow=!0;let _=new Ve;for(let g=0;g<c;g++){let p=qs(.68,1.2,ki(g,o,i.terrain.seed+4));m.setColorAt(g,_.setRGB(p,p,p))}e.add(m)}return Wb(e,i),e}function Wb(i,e){let t=ld(e),n=new Ut;for(let s of i.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(ki(a,r,o)-.5)*.96*e.w,c=(ki(a,r,o+1)-.5)*.96*e.d;n.position.set(l,$m(t,l,c),c),n.rotation.y=ki(a,r,o+2)*2*Math.PI,n.scale.setScalar(qs(.58,1.34,ki(a,r,o+3))),n.updateMatrix(),s.setMatrixAt(a,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function tg(i){if(i){for(let e of i.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),ih(e.material),e.dispose();i.clear(),i.removeFromParent()}}var ig=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],hd=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Sa={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Xb=8e6,io=512,bi=1024,Vi=512,Wt=(i,e,t,n)=>typeof i=="number"&&Number.isFinite(i)?Math.max(e,Math.min(t,i)):n,ng=(i,e,t)=>typeof i=="string"&&i.trim()?i.trim().slice(0,e):t;function Zt(i){if(typeof i=="string"){if(i.length>Xb)throw Error("Cette map d\xE9passe 3 Mo.");i=JSON.parse(i)}if(i?.format!=="gorilla-lab-map"||i.version!==1||!Array.isArray(i.pieces)||i.pieces.length<1||i.pieces.length>io)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+io+" pi\xE8ces.");let e=i.spawn??{},t=i.pieces.filter(n=>!Ws(n?.sceneryId)&&!eh(n?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...i.arenaBase===!0?{arenaBase:!0}:{},...i.assetLayer===!0?{assetLayer:!0}:{},...i.editableArena===!0?{editableArena:!0}:{},name:ng(i.name,56,"Ma map"),worldSize:Wt(i.worldSize,24,2048,240),spawn:{x:Wt(e.x,-bi,bi,0),y:Wt(e.y,-256,256,.06),z:Wt(e.z,-bi,bi,3),yaw:Wt(e.yaw,-360,360,0)},pieces:t.map((n,s)=>{if(!n||typeof n!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let r=n.terrain&&typeof n.terrain=="object"?Ys(n.terrain):null,o=n.model?Xs({version:1,models:[n.model]}).models[0]:null;if(o&&!o.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:ng(n.name,36,"Pi\xE8ce "+(s+1)),...typeof n.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(n.sceneryId)?{sceneryId:n.sceneryId}:{},x:Wt(n.x,-bi,bi,0),y:Wt(n.y,-256,256,0),z:Wt(n.z,-bi,bi,0),w:Wt(n.w,.05,Vi,3),h:Wt(n.h,.05,256,.5),d:Wt(n.d,.05,Vi,3),pitch:r?0:Wt(n.pitch,-180,180,0),yaw:r?0:Wt(n.yaw,-360,360,0),roll:r?0:Wt(n.roll,-180,180,0),...r?{terrain:r}:{},...o?{model:o}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(n.primitive)?n.primitive:"box",uvScale:Wt(n.uvScale,.05,100,1),uvOffsetX:Wt(n.uvOffsetX,-100,100,0),uvOffsetY:Wt(n.uvOffsetY,-100,100,0),uvRotation:Wt(n.uvRotation,-360,360,0),material:Math.round(Wt(n.material,0,16,0)),color:typeof n.color=="string"&&/^#[a-f0-9]{6}$/i.test(n.color)?n.color:"#ffffff",grip:Wt(n.grip,0,1.5,.8),gravity:Wt(n.gravity,.05,2.5,1),bounce:Wt(n.bounce,0,1.65,1),solid:n.solid!==!1,texture:typeof n.texture=="string"&&n.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(n.texture)?n.texture:null}})}}function sg(i){return Zt({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...gm,yaw:0},pieces:i.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Xt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function rg(){let i=(e,t,n,s,r,o,a,l,c={})=>({name:e,x:t,y:n,z:s,w:r,h:o,d:a,material:l,...c});return Zt({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[i("Placette",0,-.24,1,13,.48,12,0),i("Piste de glace",-5,-.24,-10,5,.48,11,12,Sa.ice),i("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Sa.moon),i("Couloir central",0,-.24,-12,5,.48,14,9),i("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),i("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),i("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),i("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Sa.rubber)]})}function Vn(i={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...i}}function og(i,e,t,n=.25){if(!i||!e||!Number.isFinite(n)||n<=0)return null;let s=e,r=new Xt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new v(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=d=>Math.round(d/n)*n,c=l(i.x+s.x*a),h=l(i.y+s.y*a),u=l(i.z+s.z*a),f=a-(c-i.x)*s.x-(h-i.y)*s.y-(u-i.z)*s.z;return c+=s.x*f,h+=s.y*f,u+=s.z*f,![c,h,u].every(Number.isFinite)||Math.abs(c)>bi||Math.abs(u)>bi||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var ag="gorilla-lab-custom-map-v1";function lg(i){let e=new Blob([JSON.stringify(Zt(i),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=i.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var qb=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function ud(){return Vn({name:"Miroir",sceneryId:"lab-mirror",x:os.x,y:os.y,z:os.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function cg(i,e,t,n){return i?i.arenaBase?!e||!t.has(e)&&!n.has(e)&&!(i.editableArena&&qb.has(e)):!1:!0}var dd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],hg=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function ug(i,e=hg[i]){i=Math.max(0,Math.min(dd.length-1,i|0));let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d");n.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:hg[i],n.fillRect(0,0,512,512);let s=(i+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let f of[0,-512])n.fillRect(a+u,l+f,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;n.fillStyle=r()>.46?"#fcf5dc":"#212131",n.globalAlpha=.025+r()*.19,o(l,c,i===4?3+r()*62:1+r()*9,1+r()*(i===4?3:8))}if(i===5){n.fillStyle="#151d22",n.globalAlpha=.47;for(let a=0;a<512;a+=128)n.fillRect(0,a,512,3),n.fillRect(a,0,3,512)}return t}var dg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],fg=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},mg=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",wa=(i,e,t)=>Math.min(t,Math.max(e,i)),Yb=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},fd=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function Zb(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function pg(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=mg(t),r.fillRect(0,0,o,o);let a=Zb(s),l=wa(64/n,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(e)){let h=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let u=0;u<h;u++){let f=a()*o,d=a()*o,m=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,_=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),fd(r,g=>g.fillRect(f,d,m,_))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let f=0;f<h;f++)fd(r,d=>{d.beginPath(),d.arc(f*l+l/2,u*l+l/2,wa(l*.11,2,13),0,Math.PI*2),d.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let f=0;f<=o;f+=l){let d=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(f+d,u),r.lineTo(f+d,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var jb=`
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
`;function Jb(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=jb,document.head.append(i)}async function Kb(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function pd({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){Jb();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
          <button data-cmd="generate">R\xE9g\xE9n\xE9rer le motif</button>
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
  </section>`,document.body.append(o);let a=Z=>o.querySelector(Z),l=a(".texture-canvas"),c=a(".texture-tile"),h=fg(),u=fg(),f={pattern:dg.some(([Z])=>Z===n)?n:"grain",base:mg(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},d=l.getContext("2d"),m=h.getContext("2d"),_=u.getContext("2d"),g=[],p=[],b=!1,S=!1,y=null,A="paint",E=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...dg.map(([Z,X])=>new Option(X,Z))),a("[data-field=base]").value=f.base,a("[data-field=pattern]").value=f.pattern;for(let Z of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+Z+"]").addEventListener("input",X=>{f[Z]=["scale","size","opacity","hardness"].includes(Z)?Number(X.target.value):X.target.value});let P=Z=>{a("[data-status]").textContent=Z},I=()=>{d.clearRect(0,0,512,512),d.drawImage(h,0,0),d.drawImage(u,0,0);let Z=c.getContext("2d");Z.clearRect(0,0,256,128);for(let X=0;X<2;X++)for(let be=0;be<4;be++)Z.drawImage(l,be*64,X*64,64,64)},w=()=>({base:m.getImageData(0,0,512,512),top:_.getImageData(0,0,512,512)}),M=Z=>{m.putImageData(Z.base,0,0),_.putImageData(Z.top,0,0),I()},L=()=>{g.push(w()),g.length>16&&g.shift(),p.length=0,b=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},N=(Z,X)=>{Z.length&&(X.push(w()),M(Z.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,b=!0)},G=()=>{b&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(L(),pg(h,f),_.clearRect(0,0,512,512),I(),P("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},H=Z=>{let X=l.getBoundingClientRect();return{x:(Z.clientX-X.left)/X.width*512,y:(Z.clientY-X.top)/X.height*512}},V=Z=>{let X=f.size/2,be=f.opacity;fd(_,ue=>{ue.save(),A==="erase"&&(ue.globalCompositeOperation="destination-out"),ue.globalAlpha=be;let J=wa(f.hardness,.05,1);if(A==="stamp")ue.fillStyle=f.ink,ue.translate(Z.x,Z.y),ue.rotate(Math.PI/4),ue.fillRect(-X*.8,-X*.8,X*1.6,X*1.6);else{let se=ue.createRadialGradient(Z.x,Z.y,X*J*.85,Z.x,Z.y,X);if(A==="erase")se.addColorStop(0,"rgba(0,0,0,1)"),se.addColorStop(1,"rgba(0,0,0,0)");else{let Pe=f.ink.match(/[\da-f]{2}/gi).map(Ue=>parseInt(Ue,16)).join(",");se.addColorStop(0,"rgba("+Pe+",1)"),se.addColorStop(1,"rgba("+Pe+",0)")}ue.fillStyle=se,ue.beginPath(),ue.arc(Z.x,Z.y,X,0,2*Math.PI),ue.fill()}ue.restore()})},q=(Z,X)=>{let be=Math.hypot(X.x-Z.x,X.y-Z.y),ue=Math.max(1,Math.ceil(be/Math.max(2,f.size*.18)));for(let J=1;J<=ue;J++)V({x:Z.x+(X.x-Z.x)*J/ue,y:Z.y+(X.y-Z.y)*J/ue})},Q=Z=>{let X=d.getImageData(Math.floor(wa(Z.x,0,511)),Math.floor(wa(Z.y,0,511)),1,1).data;f.ink="#"+[...X].slice(0,3).map(be=>be.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=f.ink,P("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",Z=>{if(Z.button!==0||S)return;let X=H(Z);if(A==="pick"){Q(X);return}Z.preventDefault(),L(),S=!0,y=Z.pointerId,E=X,l.setPointerCapture(Z.pointerId),V(X),I()}),l.addEventListener("pointermove",Z=>{if(!S||Z.pointerId!==y)return;Z.preventDefault();let X=H(Z);A==="stamp"?V(X):q(E,X),E=X,I()});let W=Z=>{Z.pointerId===y&&(S=!1,y=null,E=null,l.hasPointerCapture(Z.pointerId)&&l.releasePointerCapture(Z.pointerId))};l.addEventListener("pointerup",W),l.addEventListener("pointercancel",W);for(let Z of o.querySelectorAll("[data-tool]"))Z.onclick=()=>{A=Z.dataset.tool,o.querySelectorAll("[data-tool]").forEach(X=>X.setAttribute("aria-pressed",String(X===Z)))};a("[data-cmd=generate]").onclick=G,a("[data-cmd=undo]").onclick=()=>N(g,p),a("[data-cmd=redo]").onclick=()=>N(p,g),a("[data-cmd=export]").onclick=()=>Yb(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async Z=>{let X=Z.target.files?.[0];if(Z.target.value="",!!X)try{if(!["image/png","image/jpeg","image/webp"].includes(X.type))throw Error("Image PNG / JPG / WebP uniquement.");if(X.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let be=await createImageBitmap(X);L(),m.clearRect(0,0,512,512),m.drawImage(be,0,0,512,512),be.close(),_.clearRect(0,0,512,512),I(),P("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(be){P(be.message)}});let ee=Z=>{!Z&&b&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",pe,!0),o.remove())},pe=Z=>{if(Z.key==="Escape"){Z.preventDefault(),ee(!1);return}(Z.ctrlKey||Z.metaKey)&&!Z.target.closest("input,select")&&Z.key.toLowerCase()==="z"&&(Z.preventDefault(),Z.stopImmediatePropagation(),Z.shiftKey?N(p,g):N(g,p))};window.addEventListener("keydown",pe,!0),a("[data-cmd=close]").onclick=()=>ee(!1),a("[data-cmd=cancel]").onclick=()=>ee(!1);let Te=()=>{for(let Z of[512,384,256,192]){let X=document.createElement("canvas");X.width=X.height=Z,X.getContext("2d").drawImage(l,0,0,Z,Z);for(let be of[.85,.72,.58]){let ue=X.toDataURL("image/webp",be);if(ue.length<=s)return ue}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let Z=a("[data-cmd=apply]");Z.disabled=!0;try{let X=Te();await r(X),b=!1,ee(!0)}catch(X){P(X.message||"Impossible d\u2019appliquer la texture.")}finally{Z.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,pg(h,f),I(),i&&Kb(i,h).then(I).catch(()=>P("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>ee(!1)}}var Zs=new Us,mn=new v,ps=new v,Nt=new ht,gg={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},md={type:"change"},xg={type:"mouseDown",mode:null},_g={type:"mouseUp",mode:null},yg={type:"objectChange"},fh=class extends Ns{constructor(e,t=null){super(void 0,t);let n=new xd(this);this._root=n;let s=new _d;this._gizmo=s,n.add(s);let r=new yd;this._plane=r,n.add(r);let o=this;function a(S,y){let A=y;Object.defineProperty(o,S,{get:function(){return A!==void 0?A:y},set:function(E){A!==E&&(A=E,r[S]=E,s[S]=E,o.dispatchEvent({type:S+"-changed",value:E}),o.dispatchEvent(md))}}),o[S]=y,r[S]=y,s[S]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new v,c=new v,h=new ht,u=new ht,f=new v,d=new ht,m=new v,_=new v,g=new v,p=0,b=new v;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",f),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",b),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new ht,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new ht,this._scaleStart=new v,this._getPointer=$b.bind(this),this._onPointerDown=eS.bind(this),this._onPointerHover=Qb.bind(this),this._onPointerMove=tS.bind(this),this._onPointerUp=nS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Zs.setFromCamera(e,this.camera);let t=gd(this._gizmo.picker[this.mode],Zs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Zs.setFromCamera(e,this.camera);let t=gd(this._plane,Zs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,xg.mode=this.mode,this.dispatchEvent(xg)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Zs.setFromCamera(e,this.camera);let o=gd(this._plane,Zs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(mn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(mn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ps.set(a,a,a)}else mn.copy(this.pointStart),ps.copy(this.pointEnd),mn.applyQuaternion(this._worldQuaternionInv),ps.applyQuaternion(this._worldQuaternionInv),ps.divide(mn),t.search("X")===-1&&(ps.x=1),t.search("Y")===-1&&(ps.y=1),t.search("Z")===-1&&(ps.z=1);s.scale.copy(this._scaleStart).multiply(ps),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(mn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(mn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(gg[t]),mn.copy(gg[t]),r==="local"&&mn.applyQuaternion(this.worldQuaternion),mn.cross(this.eye),mn.length()===0?l=!0:this.rotationAngle=this._offset.dot(mn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(md),this.dispatchEvent(yg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(_g.mode=this.mode,this.dispatchEvent(_g)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(md),this.dispatchEvent(yg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Zs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function $b(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Qb(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function eS(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function tS(i){this.enabled&&this.pointerMove(this._getPointer(i))}function nS(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function gd(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var ch=new Xt,Ct=new v(0,1,0),vg=new v(0,0,0),Mg=new ct,hh=new ht,dh=new ht,Si=new v,bg=new ct,Aa=new v(1,0,0),js=new v(0,1,0),Ca=new v(0,0,1),uh=new v,Ta=new v,Ea=new v,xd=class extends Ut{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},_d=class extends Ut{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Ht({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new xi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let d=e.clone();d.color.setHex(16776960);let m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};let _=new vt(0,.04,.1,12);_.translate(0,.05,0);let g=new We(.08,.08,.08);g.translate(0,.04,0);let p=new rt;p.setAttribute("position",new ke([0,0,0,1,0,0],3));let b=new vt(.0075,.0075,.5,3);b.translate(0,.25,0);function S(V,q){let Q=new yn(V,.0075,3,64,q*Math.PI*2);return Q.rotateY(Math.PI/2),Q.rotateX(Math.PI/2),Q}function y(){let V=new rt;return V.setAttribute("position",new ke([0,0,0,1,1,1],3)),V}let A={X:[[new fe(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new fe(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new fe(_,o),[0,.5,0]],[new fe(_,o),[0,-.5,0],[Math.PI,0,0]],[new fe(b,o)]],Z:[[new fe(_,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new fe(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new fe(new Yn(.1,0),u),[0,0,0]]],XY:[[new fe(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new fe(new vt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new vt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new vt(.2,0,.6,4),n),[0,.3,0]],[new fe(new vt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new vt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new vt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new fe(new Yn(.2,0),n)]],XY:[[new fe(new We(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new We(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new fe(new Yn(.01,2),s),null,null,null,"helper"]],END:[[new fe(new Yn(.01,2),s),null,null,null,"helper"]],DELTA:[[new wn(y(),s),null,null,null,"helper"]],X:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new fe(S(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new fe(S(.5,.5),r)]],Y:[[new fe(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new fe(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new fe(S(.75,1),f),null,[0,Math.PI/2,0]]]},w={AXIS:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new fe(new Tn(.25,10,8),n)]],X:[[new fe(new yn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new fe(new yn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new fe(new yn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new fe(new yn(.75,.1,2,24),n)]]},L={X:[[new fe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new fe(b,r),[0,0,0],[0,0,-Math.PI/2]],[new fe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new fe(g,o),[0,.5,0]],[new fe(b,o)],[new fe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new fe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new fe(b,a),[0,0,0],[Math.PI/2,0,0]],[new fe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new fe(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new fe(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new We(.1,.1,.1),u)]]},N={X:[[new fe(new vt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new fe(new vt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new fe(new vt(.2,0,.6,4),n),[0,.3,0]],[new fe(new vt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new fe(new vt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new fe(new vt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new fe(new We(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new fe(new We(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new fe(new We(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new fe(new We(.2,.2,.2),n),[0,0,0]]]},G={X:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function H(V){let q=new Ut;for(let Q in V)for(let W=V[Q].length;W--;){let ee=V[Q][W][0].clone(),pe=V[Q][W][1],Te=V[Q][W][2],Z=V[Q][W][3],X=V[Q][W][4];ee.name=Q,ee.tag=X,pe&&ee.position.set(pe[0],pe[1],pe[2]),Te&&ee.rotation.set(Te[0],Te[1],Te[2]),Z&&ee.scale.set(Z[0],Z[1],Z[2]),ee.updateMatrix();let be=ee.geometry.clone();be.applyMatrix4(ee.matrix),ee.geometry=be,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),q.add(ee)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=H(A)),this.add(this.gizmo.rotate=H(I)),this.add(this.gizmo.scale=H(L)),this.add(this.picker.translate=H(E)),this.add(this.picker.rotate=H(M)),this.add(this.picker.scale=H(N)),this.add(this.helper.translate=H(P)),this.add(this.helper.rotate=H(w)),this.add(this.helper.scale=H(G)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:dh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Nt.setFromEuler(ch.set(0,0,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Ct.copy(Aa).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Nt.setFromEuler(ch.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Nt),Math.abs(Ct.copy(js).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Nt.setFromEuler(ch.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Nt),Math.abs(Ct.copy(Ca).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Nt.setFromEuler(ch.set(0,Math.PI/2,0)),Ct.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Mg.lookAt(vg,Ct,js)),o.quaternion.multiply(Nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),mn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),mn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(mn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ct.copy(Aa).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ct.copy(js).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ct.copy(Ca).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ct.copy(Ca).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ct.copy(Aa).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ct.copy(js).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(hh.copy(n),Ct.copy(this.eye).applyQuaternion(Nt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Mg.lookAt(this.eye,vg,js)),o.name==="X"&&(Nt.setFromAxisAngle(Aa,Math.atan2(-Ct.y,Ct.z)),Nt.multiplyQuaternions(hh,Nt),o.quaternion.copy(Nt)),o.name==="Y"&&(Nt.setFromAxisAngle(js,Math.atan2(Ct.x,Ct.z)),Nt.multiplyQuaternions(hh,Nt),o.quaternion.copy(Nt)),o.name==="Z"&&(Nt.setFromAxisAngle(Ca,Math.atan2(Ct.y,Ct.x)),Nt.multiplyQuaternions(hh,Nt),o.quaternion.copy(Nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},yd=class extends fe{constructor(){super(new rn(1e5,1e5,2,2),new Ht({visible:!1,wireframe:!0,side:Yt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),uh.copy(Aa).applyQuaternion(t==="local"?this.worldQuaternion:dh),Ta.copy(js).applyQuaternion(t==="local"?this.worldQuaternion:dh),Ea.copy(Ca).applyQuaternion(t==="local"?this.worldQuaternion:dh),Ct.copy(Ta),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ct.copy(this.eye).cross(uh),Si.copy(uh).cross(Ct);break;case"Y":Ct.copy(this.eye).cross(Ta),Si.copy(Ta).cross(Ct);break;case"Z":Ct.copy(this.eye).cross(Ea),Si.copy(Ea).cross(Ct);break;case"XY":Si.copy(Ea);break;case"YZ":Si.copy(uh);break;case"XZ":Ct.copy(Ea),Si.copy(Ta);break;case"XYZ":case"E":Si.set(0,0,0);break}break;case"rotate":default:Si.set(0,0,0)}Si.length()===0?this.quaternion.copy(this.cameraQuaternion):(bg.lookAt(mn.set(0,0,0),Si,Ct),this.quaternion.setFromRotationMatrix(bg)),super.updateMatrixWorld(e)}};function Sg(i,e,t=!1){if(t)return{x:i.x,y:i.y,z:i.z};let n=new v((e.w-i.w)/2,i.terrain?0:(e.h-i.h)/2,(e.d-i.d)/2);return n.applyEuler(new Xt(Oe.degToRad(i.pitch),Oe.degToRad(i.yaw),Oe.degToRad(i.roll??0),"YXZ")),{x:i.x+n.x,y:i.y+n.y,z:i.z+n.z}}var wg={type:"change"},Md={type:"start"},Eg={type:"end"},ph=new $i,Tg=new hn,iS=Math.cos(70*Oe.DEG2RAD),$t=new v,Rn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6,mh=class extends Ns{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new ht,this._lastTargetPosition=new v,this._quat=new ht().setFromUnitVectors(e.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kr,this._sphericalDelta=new kr,this._scale=1,this._panOffset=new v,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new v,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rS.bind(this),this._onPointerDown=sS.bind(this),this._onPointerUp=oS.bind(this),this._onContextMenu=fS.bind(this),this._onMouseWheel=cS.bind(this),this._onKeyDown=hS.bind(this),this._onTouchStart=uS.bind(this),this._onTouchMove=dS.bind(this),this._onMouseDown=aS.bind(this),this._onMouseMove=lS.bind(this),this._interceptControlDown=pS.bind(this),this._interceptControlUp=mS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wg),this.update(),this.state=wt.NONE}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$t.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new v(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new v(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ph.origin.copy(this.object.position),ph.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ph.direction))<iS?this.object.lookAt(this.target):(Tg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ph.intersectPlane(Tg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(wg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function sS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function rS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function oS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eg),this.state=wt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case Zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case Zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Md)}function lS(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cS(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eg))}function hS(i){this.enabled!==!1&&this._handleKeyDown(i)}function uS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Md)}function dS(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function fS(i){this.enabled!==!1&&i.preventDefault()}function pS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var z=i=>document.getElementById(i),Dg=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],Ug=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],vh=[...document.querySelectorAll(".tool")],Ng="gorilla-lab-editor-draft",Gi=Bm(localStorage),gS=sd(),vn=[...new Map([...gS,...Gi.models].map(i=>[i.id,i])).values()].filter(i=>i.parts.length);function Fg(i){let e=i??z("model-library").value;z("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...vn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),vn.some(t=>t.id===e)?z("model-library").value=e:vn.length===1&&(z("model-library").value=vn[0].id),z("place-model").disabled=!vn.length;for(let t of["terrain-grassModel","terrain-shrubModel"]){let n=z(t),s=n.value;n.replaceChildren(new Option("G\xE9om\xE9trie simple (d\xE9faut)",""),...vn.map(r=>new Option(r.name,r.id))),vn.some(r=>r.id===s)&&(n.value=s)}}var Og=new URLSearchParams(location.search),Td=Og.get("model"),Ed="gorilla-lab-edit-map-model";Fg(Td);function Js(){return vn.find(i=>i.id===z("model-library").value)}function Bg(){let i=Js();if(!i)return null;let e=oh(i);return Vn({name:i.name.slice(0,36),model:structuredClone(i),x:0,y:Math.max(.15,e.y/2),z:0,w:Oe.clamp(e.x,.2,64),h:Oe.clamp(e.y,.12,36),d:Oe.clamp(e.z,.2,64),color:"#ffffff",solid:i.properties.collidable!==!1})}z("model-library").addEventListener("change",()=>{Ke==="model"&&Hi(null),Gd()});var bd={block:Vn(),ramp:Vn({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:Vn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Ys({amplitude:.7,grass:.34})}),wall:Vn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Id={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},le,Tt=-1,Ke="move",ft=null,Jn=null,ms=[],Qt=z("preview"),nt=z("plan"),ot=nt.getContext("2d");function xS(){let i={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,n,s]=i[z("shape-preset").value]??i.slab;return Vn({name:e,w:t,h:n,d:s,y:n/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(z("shape-preset").value)?z("shape-preset").value:"box"})}var _S=z("editor-views");function Na(){_S.dataset.layout=z("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",z("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",z("sidebar-width").value+"px"),requestAnimationFrame(()=>{Eh(),Ah()})}for(let i of["layout-mode","view-split","sidebar-width"])z(i).addEventListener("input",Na);z("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Na()};var Ad=z("workspace-fullscreen");Ad.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{st("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let i=document.fullscreenElement===document.documentElement;Ad.setAttribute("aria-pressed",String(i)),Ad.textContent=i?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{Eh(),Ah()})});z("focus-3d").onclick=()=>{z("layout-mode").value="only-3d",Na()};z("focus-plan").onclick=()=>{z("layout-mode").value="only-plan",Na()};function yS(){let i=document.querySelector("main"),e=i.querySelector("aside.panel");e.id="scene-sidebar";let t=(X,be,ue)=>{let J=document.createElement(X);return be&&(J.className=be),ue!==void 0&&(J.textContent=ue),J},n=t("nav","tool-rail");n.id="tool-rail",n.setAttribute("aria-label","Outils de l\u2019atelier"),i.prepend(n);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let X of vh){let be=X.dataset.tool,ue=X.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[be]){let J=t("div","rail-divider");J.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[be]],n.append(J)}X.classList.add("rail-tool"),X.title=ue+" \xB7 "+(Id[be]??""),X.setAttribute("aria-label",ue),X.replaceChildren(t("span","rail-glyph",s[be]??"\u25A1"),t("span","rail-caption",ue==="Redimensionner"?"\xC9chelle":ue==="S\xE9lectionner"?"S\xE9lect.":ue==="D\xE9placer"?"D\xE9placer":ue==="Atelier"?"Mod\xE8le":ue)),n.append(X)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=z("shape-preset").closest("label"),h=z("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let f=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");f.id="model-place-action",f.type="button",o.append(f);let d=t("button","delete-library-model","Supprimer de la biblioth\xE8que");d.type="button",d.id="delete-library-model",d.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(d),u&&o.append(u);let m=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(m);let _=t("p","model-count-hint","");o.append(_),i.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let b=z("layout-mode").closest("label");b.classList.add("viewport-layout"),g.prepend(b);let S=t("span","active-selection","Aucune s\xE9lection");S.id="active-selection",b.after(S);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let A=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let X of E){let be=z(X);be&&A.append(be.closest("label"))}y.append(A),g.append(y);let P=X=>{if(X==="close"){o.hidden=!0;return}let be=X==="model";o.hidden=!1,o.dataset.mode=X,a.textContent=be?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!be,c.hidden=be,f.hidden=!be,d.hidden=!be,u&&(u.hidden=!be),m.textContent=be?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",_.hidden=!be,_.textContent=be?vn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ue=Js();f.disabled=!ue,f.textContent=ue?"\u2B21 Placer \xAB "+ue.name+" \xBB":"Aucun mod\xE8le \xE0 placer",d.disabled=!ue||!Gi.models.some(se=>se.id===ue.id),u&&(u.href="./model-editor.html"+(ue?ue.assetId&&ue.id==="custom-model-game-"+ue.assetId?"?asset="+encodeURIComponent(ue.assetId):"?model="+encodeURIComponent(ue.id):"")),z(be?"model-library":"shape-preset").focus({preventScroll:!0})};f.onclick=()=>{Js()&&(Ti("model"),P("close"),Qt.focus({preventScroll:!0}),st("Clique dans la sc\xE8ne pour placer \xAB "+Js().name+" \xBB."))},d.onclick=()=>{let X=Js();if(!(!X||!Gi.models.some(be=>be.id===X.id))&&confirm("Supprimer d\xE9finitivement \xAB "+X.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let be=Xs({...Gi,models:Gi.models.filter(J=>J.id!==X.id),avatarId:Gi.avatarId===X.id?null:Gi.avatarId});localStorage.setItem(od,JSON.stringify(be)),Object.assign(Gi,be);let ue=vn.findIndex(J=>J.id===X.id);ue>=0&&vn.splice(ue,1),Fg(),Ke==="model"&&!vn.length&&Ti("move"),Hi(null),Gd(),P("model"),st("\xAB "+X.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(be){st("Suppression impossible : "+(be.message||"stockage local indisponible"))}},z("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&P("model")});for(let X of["model","preset"])vh.find(ue=>ue.dataset.tool===X)?.addEventListener("click",()=>P(X));window.addEventListener("pointerdown",X=>{!o.hidden&&!o.contains(X.target)&&!X.target.closest(".rail-tool")&&P("close")}),window.addEventListener("keydown",X=>{X.key==="Escape"&&P("close")});let I=t("section","outliner");I.id="scene-outline";let w=t("header","side-section-head");w.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),w.append(t("span","outline-meta","Objets")),I.append(w);let M=e.querySelector("#pieces").closest(".inspector-section");M.id="outline-content",I.append(M);let L=t("section","property-pane"),N=t("nav","inspector-tabs");N.setAttribute("aria-label","Propri\xE9t\xE9s");let G=[["object","Objet"],["terrain","Terrain"],["material","Mat\xE9riaux"],["scene","Sc\xE8ne"]];for(let[X,be]of G){let ue=t("button","inspector-tab",be);ue.type="button",ue.dataset.tab=X,ue.setAttribute("aria-pressed",String(X==="object")),N.append(ue)}let H=t("div","property-content");H.id="property-content";let V=z("piece-inspector").closest(".inspector-section");V.id="object-section";let q=z("surface").closest("details");q.id="surface-controls",H.append(V);let Q=t("section","scene-options");Q.id="scene-options",Q.append(t("h2","","Param\xE8tres de carte"));let W=z("map-name").closest("label"),ee=z("map-world-size").closest(".fields"),pe=z("draft-status");Q.append(W,ee,pe);let Te=[...e.children].filter(X=>X.tagName==="DETAILS");for(let X of Te)Q.append(X);H.append(Q),L.append(N,H),e.replaceChildren(I,L);let Z=X=>{let be=le?.pieces?.[Tt];X==="terrain"&&!be?.terrain&&(X="object"),X==="material"&&!be&&(X="object"),e.dataset.tab=X;for(let ue of N.querySelectorAll("button"))ue.setAttribute("aria-pressed",String(ue.dataset.tab===X)),ue.disabled=ue.dataset.tab==="terrain"&&!be?.terrain;X==="terrain"&&(z("terrain-controls").open=!0),X==="material"&&(q.open=!0),H.scrollTop=0};for(let X of N.querySelectorAll("button"))X.addEventListener("click",()=>Z(X.dataset.tab));window.setInspectorTab=Z,Z("object")}yS();var Mt={scale:10,cx:0,cz:-6,width:30,height:40},Fa=new Vc({canvas:Qt,antialias:!0});Fa.setPixelRatio(Math.min(devicePixelRatio,1.5));var Vt=new cn(52,1,.1,640);Vt.position.set(16,15,19);var Dt=new mh(Vt,Qt);Dt.target.set(0,0,-5);Dt.mouseButtons.LEFT=null;Dt.mouseButtons.RIGHT=Zn.ROTATE;Dt.mouseButtons.MIDDLE=Zn.PAN;Dt.maxDistance=580;Dt.maxPolarAngle=Math.PI/2-.035;var gn=new Ir;gn.background=new Ve("#8fb6c6");var zg=new Ls("#f0f5ff","#8e775c",2.6);gn.add(zg);var Ld=new Ds("#fff1d2",1.8);Ld.position.set(-9,18,6);gn.add(Ld);var er=new Ir;er.fog=new No("#a6d4ea",55,135);var xs=Mm(er,Fa);xs.probe.userData.editorAssetId="chrome-sphere";var pA=bm(er,xs.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),vS=new Map(sd().map(i=>[i.assetId,i]));function Ag(i,e,t=null,n=null){let s=structuredClone(t??vS.get(i));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+i);let r=rh(s),o=r.getSize(new v),a=r.getCenter(new v);return Vn({name:(n??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Dd=()=>{let i=sg(xs.boxes),e=xs.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:n,zMin:s,zMax:r}=e,o=32,a=n-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let f=t+u%(o+1)/o*a,d=s+Math.floor(u/(o+1))/o*l;return e.height(f,d)});i.pieces.push(Vn({name:"Relief principal",sceneryId:"lab-hill",x:(t+n)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:Ys({detail:o,seed:1,amplitude:0,heights:c})}))}return i.assetLayer=!0,i.editableArena=!0,i.pieces.push(ud()),Cm((t,n)=>{let s=nd[t];s&&i.pieces.push(Ag(s,n))}),i.pieces.push(Ag("chrome-sphere",new v(as.x,as.y,as.z))),Zt(i)};le=Dd();var Ud=new fe(new We(1.8,2.03,.1),new tn({color:"#8daebc",metalness:.9,roughness:.12}));Ud.position.set(os.x,os.y,os.z);Ud.userData.editorAssetId="lab-mirror";er.add(Ud);var MS=xs.boxes.filter(i=>i.half&&i.mesh?.isObject3D);MS.forEach(i=>i.mesh.removeFromParent());var Mh=new un;Mh.add(...er.children);gn.add(Mh);var $s=xs.boxes.find(i=>i.heightfield).mesh;$s.userData.editorAssetId="lab-hill";xs.visual(7,0,7,!0,!0,!0,512,!1);var ao=new sa(60,60,"#d7e2e5","#5e7b8a");ao.material.transparent=!0;ao.material.opacity=.35;gn.add(ao);var bt=new un;gn.add(bt);var tt=new fh(Vt,Qt);tt.setSize(.9);tt.setRotationSnap(Oe.degToRad(5));tt.enabled=!1;gn.add(tt.getHelper());var Nd=new Set(["translate","rotate","scale"]),Qs=null,Pn=null,Fd=!1,Pa=null,gh=!1,kg=()=>Number(z("magnet-distance").value);for(let i of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+i);[...z(i).options].some(t=>t.value===e)&&(z(i).value=e)}catch{}z(i).onchange=()=>{Pn=null;try{localStorage.setItem("gorilla-lab-"+i,z(i).value)}catch{}}}var Ks=new Map;try{z("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}z("magnet").onchange=()=>{Pn=null,Ks.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",z("magnet").checked?"on":"off")}catch{}};for(let i of["keydown","keyup"])window.addEventListener(i,e=>{Fd=e.altKey});window.addEventListener("blur",()=>{Fd=!1,Pn=null});function Vg(i,e,t,n){let s={...e};if(!n)for(let m of t)s[m]=Math.round(e[m]/Da())*Da();if(n||!z("magnet").checked||!i.solid||i.terrain)return Pn=null,s;let r=kg(),o=z("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let _=new Xt(...[m.pitch,m.yaw,m.roll??0].map(Oe.degToRad),"YXZ"),g=new ct().makeRotationFromEuler(_).elements;return Object.fromEntries(["x","y","z"].map((p,b)=>[p,(Math.abs(g[b])*m.w+Math.abs(g[4+b])*m.h+Math.abs(g[8+b])*m.d)/2]))},c=l(i);if(!c)return s;let h=[];for(let m of le.pieces){if(m===i)continue;let _=l(m);if(_)for(let g of t){let p=Object.keys(a).filter(y=>y!==g),b=y=>Math.abs(s[y]-m[y])<c[y]+_[y]-.001,S=p.flatMap(y=>t.includes(y)&&b(p.find(A=>A!==y))?[-1,1].flatMap(A=>[-1,1].map(E=>{let P=m[y]+A*_[y]-E*c[y];return{key:y,value:P,distance:Math.abs(e[y]-P)}})):[]).sort((y,A)=>y.distance-A.distance)[0];if(!(o?!S||S.distance>r*1.8:!p.every(b)))for(let y of[-1,1]){let A=m[g]+y*(c[g]+_[g]),E=le.pieces.indexOf(m)+":"+g+":"+y;h.push({key:E,axis:g,value:A,edge:o?S:null,distance:Math.max(Math.abs(A-e[g]),o?S.distance:0)})}}}let u=h.find(m=>m.key===Pn),f=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return f(u),s;Pn&&(Ks.set(Pn,(Ks.get(Pn)??0)+1),Pn=null);let d=h.filter(m=>m.distance<=r&&(Ks.get(m.key)??0)<3).sort((m,_)=>m.distance-_.distance)[0];if(d)f(d),Pn=d.key;else for(let m of h)m.distance<=r&&(Ks.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=e[m.axis]);return s}var yh=new We(1,1,1),bS=new _i,bh=.025,SS=new es(.24,.36,40).rotateX(-Math.PI/2),Gg=new Ht({color:"#ffcd63",side:Yt}),In=new fe(SS,Gg),Hg=new fe(new rn(.12,.2).rotateX(-Math.PI/2),Gg);Hg.position.set(0,0,-.39);In.add(Hg);gn.add(In);var so=new fe(yh,new Ht({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),ro=new fe(new Tn(.055,10,8),new Ht({color:"#ffc85a",depthTest:!1}));ro.visible=!1;ro.renderOrder=20;gn.add(ro);var Ia=new fe(In.geometry,new Ht({color:"#ffe084",side:Yt,opacity:.65,transparent:!0,depthWrite:!1}));so.visible=Ia.visible=!1;gn.add(so,Ia);var gs=new Us,Th=new v(0,1,0),Cg=new hn(Th,0),wS=new $e,hi=null,Sd=!1;function nn(){Sd||(Sd=!0,requestAnimationFrame(()=>{Sd=!1,Fa.render(gn,Vt),t0()}))}function Eh(){let i=Qt.clientWidth||1,e=Qt.clientHeight||1;Fa.setSize(i,e,!1),Vt.aspect=i/e,Vt.updateProjectionMatrix(),nn()}function Ah(){let i=Math.max(1,nt.clientWidth),e=Math.max(1,nt.clientHeight);i===nt.width&&e===nt.height||(nt.width=i,nt.height=e,Od(),$n())}new ResizeObserver(Eh).observe(Qt);new ResizeObserver(Ah).observe(nt);Dt.addEventListener("change",nn);Dt.addEventListener("start",()=>Hi(null));function Od(){Mt.scale=Math.min(nt.width/Mt.width,nt.height/Mt.height)}function Sh(i,e){return[nt.width/2+(i-Mt.cx)*Mt.scale,nt.height/2+(e-Mt.cz)*Mt.scale]}function Cd(i){let e=nt.getBoundingClientRect();return{x:((i.clientX-e.left)*nt.width/e.width-nt.width/2)/Mt.scale+Mt.cx,z:((i.clientY-e.top)*nt.height/e.height-nt.height/2)/Mt.scale+Mt.cz}}function Rg(i,e,t,n,s){let[r,o]=Sh(i.x,i.z),a=Oe.degToRad(i.pitch),l=Oe.degToRad(i.roll??0),c=Math.abs(Math.cos(l))*i.w+Math.abs(Math.sin(l))*i.h,h=Math.abs(Math.cos(a))*i.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*i.w+Math.abs(Math.cos(l))*i.h);ot.save(),ot.translate(r,o),ot.rotate(-Oe.degToRad(i.yaw));let u=c*Mt.scale,f=h*Mt.scale;ot.globalAlpha=s,ot.fillStyle=e,ot.fillRect(-u/2,-f/2,u,f),ot.globalAlpha=1,ot.strokeStyle=t,ot.lineWidth=n,ot.strokeRect(-u/2,-f/2,u,f),ot.restore()}function Pg(i,e){let[t,n]=Sh(i.x,i.z);ot.save(),ot.translate(t,n),ot.rotate(Oe.degToRad(-i.yaw)),ot.strokeStyle=e?"#fff0bb":"#ffd16e",ot.lineWidth=2,ot.beginPath(),ot.arc(0,0,6,0,Math.PI*2),ot.moveTo(0,-6),ot.lineTo(0,-11),ot.stroke(),ot.restore()}function $n(){ot.fillStyle="#192e3a",ot.fillRect(0,0,nt.width,nt.height),ot.strokeStyle="#37505f",ot.lineWidth=1;let i=Mt.scale<1?25:Mt.scale<4?10:Mt.scale<12?5:1,e=(le.worldSize??240)/2;for(let r=-Math.ceil(e/i)*i;r<=e;r+=i){let[o,a]=Sh(r,r);o>=0&&o<=nt.width&&(ot.beginPath(),ot.moveTo(o,0),ot.lineTo(o,nt.height),ot.stroke()),a>=0&&a<=nt.height&&(ot.beginPath(),ot.moveTo(0,a),ot.lineTo(nt.width,a),ot.stroke())}let[t,n]=Sh(-e,-e);ot.strokeStyle="#ffda9077",ot.lineWidth=2,ot.strokeRect(t,n,e*2*Mt.scale,e*2*Mt.scale);let s=le.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?hd[r.material]:r.color);Rg(r,a,o===Tt?"#ffe095":"#a4bac7",o===Tt?2:1,r.solid?.86:.38)}Pg(le.spawn,!1),Jn&&(Ke==="spawn"?Pg(Jn,!0):Rg(Jn,"#8ee7fc","#afefff",2,.45))}function wh(i,e){i.position.set(e.x,e.y,e.z),e.terrain&&i!==so?i.scale.setScalar(1):i.scale.set(e.w,e.h,e.d),i.rotation.set(Oe.degToRad(e.pitch),Oe.degToRad(e.yaw),Oe.degToRad(e.roll??0),"YXZ"),i.updateMatrixWorld()}function Wg(){hi&&(gn.remove(hi),hi.geometry.dispose(),hi.material.dispose());let i=bt.children[Tt];hi=i?new Vr(i,"#ffdf88"):null,hi&&gn.add(hi),Rd()}function Rd(){if(Ke==="spawn"){tt.enabled=!0,tt.setMode("translate"),tt.setSpace("world"),tt.setTranslationSnap(null),tt.showX=tt.showY=tt.showZ=!0,tt.attach(In);return}let i=bt.children[Tt],e=lt()?.terrain,t=Nd.has(Ke)&&!!i&&!(e&&Ke==="rotate");if(tt.enabled=t,!t){tt.detach(),e&&Ke==="rotate"&&(z("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}tt.setMode(Ke),tt.setSpace(Ke==="translate"?"world":"local"),tt.setTranslationSnap(null),tt.showX=tt.showZ=!0,tt.showY=!(e&&Ke==="scale"),tt.attach(i),z("tool-help").textContent=Id[Ke]}var oo=!1;function Xg(){if(Ke!=="scale")return;let i=lt(),e=Qs?.map.pieces[Tt],t=tt.object;if(!i||!e||!t)return;let n=Sg(e,i,oo),s=(le.worldSize??240)/2;i.x=Oe.clamp(n.x,-s,s),i.y=Oe.clamp(n.y,-256,256),i.z=Oe.clamp(n.z,-s,s),t.position.set(i.x,i.y,i.z),hi?.update();for(let r of["x","y","z"])z("p-"+r).value=i[r].toFixed(2);$n(),nn()}function qg(i){let e=oo;oo=i.ctrlKey,e!==oo&&tt.dragging&&Xg()}for(let i of["keydown","keyup"])window.addEventListener(i,qg);Qt.addEventListener("pointermove",qg,{capture:!0});tt.addEventListener("change",nn);tt.addEventListener("mouseDown",()=>{let i=lt();Pn=null,(i||tt.object===In)&&(Qs={map:structuredClone(le),selected:Tt}),oo=!!(oo||window.event?.ctrlKey)});tt.addEventListener("objectChange",()=>{let i=lt(),e=tt.object,t=Qs?.map.pieces[Tt];if(e===In&&Qs){let s=(le.worldSize??240)/2,r=Oe.clamp;le.spawn.x=r(In.position.x,-s,s),le.spawn.y=r(In.position.y-bh,-256,256),le.spawn.z=r(In.position.z,-s,s),In.position.set(le.spawn.x,le.spawn.y+bh,le.spawn.z);for(let o of["x","y","z"])z("spawn-"+o).value=le.spawn[o].toFixed(2);$n();return}if(!i||!e||!t)return;let n=Oe.clamp;if(Ke==="translate"){let s=["x","y","z"].filter(a=>(tt.axis??"XYZ").includes(a.toUpperCase())),r=Vg(i,{x:e.position.x,y:e.position.y,z:e.position.z},s,Fd),o=(le.worldSize??240)/2;i.x=n(r.x,-o,o),i.y=n(r.y,-256,256),i.z=n(r.z,-o,o),e.position.set(i.x,i.y,i.z)}else Ke==="rotate"?(i.pitch=Oe.radToDeg(e.rotation.x),i.yaw=Oe.radToDeg(e.rotation.y),i.roll=Oe.radToDeg(e.rotation.z)):(i.w=n(e.scale.x*(i.terrain?t.w:1),.05,Vi),i.d=n(e.scale.z*(i.terrain?t.d:1),.05,Vi),i.terrain||(i.h=n(e.scale.y,.05,256)),e.scale.set(i.terrain?i.w/t.w:i.w,i.terrain?1:i.h,i.terrain?i.d/t.d:i.d),Xg());e.updateMatrixWorld(!0),hi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])z("p-"+s).value=Number(i[s]??0).toFixed(2);$n(),nn()});tt.addEventListener("dragging-changed",({value:i})=>{if(Dt.enabled=!i,i||!Qs)return;let e=Qs;Qs=null;let t=tt.object===In,n=t?e.map.spawn:e.map.pieces[Tt],s=t?le.spawn:lt();JSON.stringify(n)!==JSON.stringify(s)&&(ms.length>=35&&ms.shift(),ms.push(e),le=Zt(le),Et(),st("Transformation appliqu\xE9e."))});Qt.addEventListener("pointerup",()=>{tt.dragging||(Dt.enabled=!0)});Qt.addEventListener("pointercancel",()=>{tt.dragging&&tt.pointerUp(null),Dt.enabled=!0});function TS(){tt.detach();for(let t of[...bt.children])bt.remove(t),t.geometry!==yh&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&tg(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),ih(t.material);Mh.visible=!!le.arenaBase;let i=new Set(le.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(le.pieces.map(t=>t.sceneryId).filter(Boolean));Mh.traverse(t=>{let n=t.userData.editorAssetId;n&&(t.visible=cg(le,n,i,e))}),Ld.visible=zg.visible=!le.arenaBase,gn.fog=le.arenaBase?er.fog:null,gn.environment=le.arenaBase?er.environment:null;for(let t of le.pieces){if(t.model){let a=new fe(sh(t.model),nh(t.model));a.castShadow=a.receiveShadow=!0;let l=new fe(new We(1,1,1),new Ht({colorWrite:!1,depthWrite:!1,side:Yt}));l.name="model-selection-volume",a.add(l),a.userData.pickProxy=l,a.userData.mapIndex=bt.children.length,bt.add(a),wh(a,t);continue}let n=[10,11,12].includes(t.material),s=new Bn({color:new Ve(hd[t.material]).multiply(new Ve(t.color)),transparent:!t.solid||n,opacity:t.solid?n?.55:1:.4});if(le.arenaBase&&!t.texture){let a=xs.mapMaterial(t.material,7);s.color.set(t.color),s.map=a.map,s.opacity=t.solid?a.opacity:.4,s.transparent=!t.solid||a.transparent}t.texture&&(s.map=bS.load(t.texture,nn),s.map.colorSpace=gt,s.map.wrapS=s.map.wrapT=Fn,s.color.set(t.color));let r=t.terrain?cd(t):t.primitive&&t.primitive!=="box"?hm(t.primitive):t.texture||le.arenaBase?Hc(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):yh;r!==yh&&cm(r,t);let o=new fe(r,s);if(o.userData.ownsTexture=!!t.texture,t.terrain){let a=eg(t);a&&(o.add(a),o.userData.vegetation=a)}bt.add(o),wh(o,t)}In.position.set(le.spawn.x,le.spawn.y+bh,le.spawn.z),In.rotation.y=Oe.degToRad(le.spawn.yaw),n0(),Wg()}function lt(){return le.pieces[Tt]}function st(i){z("editor-note").textContent=i}function Rt(){ms.length>=35&&ms.shift(),ms.push({map:structuredClone(le),selected:Tt}),z("undo").disabled=!1}function Bd(){try{return localStorage.setItem(Ng,JSON.stringify(le)),z("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil",!0}catch{return z("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.",!1}}z("model-asset-edit-link").onclick=i=>{let e=lt();if(!e?.model||!Bd()){i.preventDefault();return}try{sessionStorage.setItem(Ed,JSON.stringify({index:Tt,piece:e}))}catch{i.preventDefault(),st("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function ES(){let i=Og.get("applyModel");if(!i)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Ed)),sessionStorage.removeItem(Ed)}catch{return}let t=le.pieces[e?.index],n=Gi.models.find(u=>u.id===i&&u.parts.length),s=t?.model;if(!(n&&s&&(n.id===s.id||s.id==="custom-model-game-"+s.assetId&&n.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){st("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}Tt=e.index;let o=oh(t.model),a=oh(n),l=(u,f,d,m)=>Oe.clamp(u*d/Math.max(f,.001),.05,m),c={w:l(t.w,o.x,a.x,Vi),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Vi)},h=Vn({...t,...c,model:{...t.model,id:n.id,parts:n.parts,hitbox:n.hitbox}});JSON.stringify(h)!==JSON.stringify(t)&&(Rt(),le.pieces[Tt]=h),st("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var Ig=i=>i.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Yg(){let i=Ig(z("piece-search").value.trim()),e=[];le.pieces.forEach((t,n)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";Ig(t.name+" "+s).includes(i)&&e.push(new Option(t.name+s,n,!1,n===Tt))}),z("pieces").replaceChildren(...e),z("pieces").value=String(Tt),e.length||z("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(z("pieces").options[0].disabled=!0),z("count").textContent=i?e.length+" sur "+le.pieces.length:le.pieces.length+" / "+io}function Zg(){Yg();let i=lt();z("piece-inspector").hidden=!i,z("selection-help").hidden=!!i,z("focus-piece").disabled=!i,z("selection-title").textContent=i?i.name+(i.model?i.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=i?.model?.kind==="prop";z("model-object-controls").hidden=!e,z("model-structure-note").hidden=!i?.model||i.model.kind!=="structure";let t=z("model-asset-edit-link"),n=i?.model&&vn.some(r=>r.id===i.model.id);if(t.hidden=!n,n){let r=i.model.assetId,o=r&&i.model.id==="custom-model-game-"+r,a=new URLSearchParams(o?{asset:r}:{model:i.model.id});a.set("from","cards"),t.href="./model-editor.html?"+a}e&&(z("model-grabbable").checked=i.model.properties?.grabbable!==!1,z("model-frozen").checked=i.model.properties?.frozen===!0,z("model-collidable").checked=i.model.properties?.collidable!==!1,z("model-support-held").checked=i.model.properties?.supportWhileHeld===!0);for(let r of Dg){let o=z("p-"+r);o.disabled=!i,r==="solid"?o.checked=i?.solid??!1:o.value=i?.[r]??(r==="color"?"#ffffff":"")}for(let r of["rotate","duplicate","texture-file","surface","spawn-here"])z(r).disabled=!i;z("delete").disabled=!i||le.pieces.length===1,z("delete").title=i?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",z("delete").firstChild.textContent=i?.model?"Retirer ":"Supprimer ",z("texture-clear").disabled=!i?.texture,z("texture-paint").disabled=!i||!!i.model;let s=i?.terrain;z("terrain-grassTexture-paint").disabled=!s;for(let r of Ug){let o=z("p-"+r);o.disabled=!i||!!i?.model,o.value=i?.[r]??(r==="uvScale"?1:0)}if(z("uv-reset").disabled=!i||!!i?.model,z("terrain-controls").hidden=!s,s){for(let r of Qg)z("terrain-"+r).value=s[r];for(let r of["grass","shrub"]){let o=z("terrain-"+r+"Model"),a=s[r+"Model"]?.id??"";a&&![...o.options].some(l=>l.value===a)&&o.add(new Option(s[r+"Model"].name+" (carte)",a)),o.value=a}z("terrain-cell-size").textContent=(i.w/s.detail).toFixed(2)+" \xD7 "+(i.d/s.detail).toFixed(2)+" m",z("p-pitch").disabled=z("p-yaw").disabled=z("p-roll").disabled=!0}z("rotate").disabled=!i||!!s,z("texture-create").disabled=!i,z("surface").value="",z("undo").disabled=ms.length===0,z("active-selection").textContent=i?i.name:"Aucune s\xE9lection",document.querySelector("#scene-sidebar").dataset.tab==="terrain"&&!s&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="terrain"]').disabled=!s}function Et(){z("map-name").value=le.name,z("map-world-size").value=le.worldSize??240,Zg();for(let i of["x","y","z","yaw"])z("spawn-"+i).value=le.spawn[i];TS(),$n(),nn(),Bd()}function La(i){Tt!==i&&(Tt=i,Pn=null,Ks.clear(),Zg(),Wg(),$n(),nn())}function zd(i){if(le.pieces.length>=io)return st("Limite de pi\xE8ces atteinte.");Rt(),le.pieces.push(i),Tt=le.pieces.length-1,Et(),st(i.name+" ajout\xE9 \xE0 la map.")}function kd(){if(!lt()||le.pieces.length===1)return;let i=lt().name;Rt(),le.pieces.splice(Tt,1),Tt=Math.min(Tt,le.pieces.length-1),Et(),st(i+" retir\xE9 de la map.")}function Vd(){let i=lt();if(!i)return;let e=Oe.clamp(i.x+i.w+Da(),-120,120);zd({...structuredClone(i),name:(i.name+" bis").slice(0,36),x:e})}function AS(){let i=lt();!i||i.terrain||(Rt(),i.yaw=(i.yaw+45)%360,Et())}function jg(){let i=ms.pop();i&&(le=i.map,Tt=i.selected,Hi(null),Et(),st("Derni\xE8re modification annul\xE9e."))}function Gd(){let i=Id[Ke]??"";if(Ke!=="model"||!Js()){z("tool-help").textContent=i;return}let e=Bg(),t=n=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(n);z("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+i}function Ti(i){Ke=i,Dt.mouseButtons.LEFT=Ke==="view"?Zn.ROTATE:null,Rd(),nn();for(let e of vh)e.setAttribute("aria-pressed",String(e.dataset.tool===Ke));for(let e of[Qt,nt])e.dataset.tool=Ke,e.removeAttribute("data-hit");Gd(),Rd(),nn(),Hi(null)}function tr(){let i=new jt().setFromObject(bt);i.expandByPoint(In.position);let e=i.getCenter(new v),t=i.getSize(new v);Mt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(le.worldSize??240,500)),height:Math.max(t.z+5,Math.min(le.worldSize??240,500))},Od();let n=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));ao.scale.setScalar(n),ao.position.set(Math.round(e.x/n)*n,-.035,Math.round(e.z/n)*n);let s=Vt.position.clone().sub(Dt.target).normalize(),r=new v().crossVectors(Th,s).normalize(),o=new v().crossVectors(s,r),a=Math.tan(Oe.degToRad(Vt.fov/2))*.87,l=a*Vt.aspect,c=6;for(let h of[i.min.x,i.max.x])for(let u of[i.min.y,i.max.y])for(let f of[i.min.z,i.max.z]){let d=new v(h,u,f).sub(e),m=Math.max(Math.abs(d.dot(r))/l,Math.abs(d.dot(o))/a);c=Math.max(c,m+d.dot(s))}c=Math.min(c,Dt.maxDistance),Dt.target.copy(e),Vt.position.copy(e).addScaledVector(s,c),Dt.update(),Vt.updateMatrixWorld(),$n(),nn()}function Hd(i,e){Rt(),le=i,Pn=null,Ks.clear(),Tt=-1,z("piece-search").value="",Ti("move"),Et(),tr(),st(e)}function Da(){return Number(z("snap").value)}function xh(i){let e=Da(),t=(le.worldSize??240)/2;return Oe.clamp(Math.round(i/e)*e,-t,t)}function Wd(i,e){if(i===nt){let t=Cd(e);gs.set(new v(t.x,80,t.z),new v(0,-1,0))}else{let t=Qt.getBoundingClientRect();Vt.updateMatrixWorld(),gs.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Vt)}}function Pd(i){return Cg.constant=-i,gs.ray.intersectPlane(Cg,new v)}function CS(i){let e=i;for(;e&&e.parent!==bt;)e=e.parent;return e?.parent===bt?e:null}function lo(i,e){Wd(i,e);let t=$s.visible&&le.arenaBase?[...bt.children,$s]:bt.children,n=gs.intersectObjects(t,!0);for(let s of n){if(s.object===$s)return s;let r=CS(s.object);if(r)return{...s,object:r}}return null}function Jg(i,e,t,n=null){gs.set(new v(i,80,e),new v(0,-1,0));let s=n?gs.intersectObject(n,!1)[0]:gs.intersectObjects($s.visible&&le.arenaBase?[...bt.children,$s]:bt.children,!1).find(r=>r.object===$s||le.pieces[bt.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:i,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function Kg(i,e){Pa=null,gh=!1;let t=lo(i,e);if(Ke==="spawn"){if(!t)return null;let h=xh(t.point.x),u=xh(t.point.z);return Jg(h,u,le.spawn.yaw)}if(Ke==="terrain"){let h=t?.point??Pd(0);return h?{...bd.terrain,terrain:Ys(bd.terrain.terrain),x:xh(h.x),y:h.y,z:xh(h.z)}:null}if(Ke==="sculpt"||Ke==="model"&&!Js())return null;let n=t?.point??Pd(0);if(!n)return null;let s=t?t.face.normal.clone().applyNormalMatrix(wS.getNormalMatrix(t.object.matrixWorld)):Th,r=t&&RS(t),o=kg();r&&r.distance<=o*2&&(Pa=r.point,gh=z("magnet").checked&&!e.altKey&&z("magnet-mode").value==="edge"&&r.point.distanceTo(n)<=o);let a=gh||e.altKey?1e-6:Da(),l=Ke==="model"?Bg():Ke==="preset"?xS():bd[Ke],c=og(gh?Pa:n,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=le.worldSize/2?c:null}function RS(i){let e=i.object,t=le.pieces[bt.children.indexOf(e)];if(!t||t.terrain)return null;let n=e.worldToLocal(i.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(i.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=n.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(i.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function Hi(i){!i&&!Jn||(Jn=i,ro.visible=!!(Jn&&Pa),ro.visible&&ro.position.copy(Pa),Ia.visible=!!(Jn&&Ke==="spawn"),so.visible=!!(Jn&&Ke!=="spawn"),Ia.visible&&Ia.position.set(Jn.x,Jn.y+bh,Jn.z),so.visible&&wh(so,Jn),$n(),nn())}function PS(i,e){let t=Kg(i,e);if(!t){st(Ke==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ke==="spawn")Rt(),le.spawn=t,Ti("move"),Et(),st("Point de d\xE9part d\xE9plac\xE9.");else{let n=Ke==="model";Hi(null),zd(t),n&&(Ti("move"),st(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function IS(i,e){if(Ke==="view"||e.button!==0||!e.isPrimary||ft||tt.dragging)return;if(Ke==="spawn"||Nd.has(Ke)){if(i===Qt&&tt.enabled){let r=Qt.getBoundingClientRect();if(tt.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),tt.axis){Dt.enabled=!1;return}}if(Ke!=="spawn"){e.stopImmediatePropagation();let r=lo(i,e);La(r?bt.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),i.focus({preventScroll:!0}),i.setPointerCapture(e.pointerId);let t={canvas:i,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ke};if(ft=t,Pn=null,Ke==="sculpt"){e0(i,e);return}if(Ke!=="move")return;let n=lo(i,e);La(n?bt.children.indexOf(n.object):-1);let s=lt();!n||!s||(t.height=n.point.y,t.dx=n.point.x-s.x,t.dz=n.point.z-s.z)}function LS(i,e){if(Ke==="view"||Nd.has(Ke)||tt.dragging)return;if(!ft){Ke==="move"?i.toggleAttribute("data-hit",!!lo(i,e)):Hi(Kg(i,e));return}if(Ke==="sculpt"&&ft.id===e.pointerId&&ft.canvas===i){Math.hypot(e.clientX-ft.clientX,e.clientY-ft.clientY)>=7&&(e0(i,e),ft.clientX=e.clientX,ft.clientY=e.clientY);return}if(ft.id!==e.pointerId||ft.canvas!==i||ft.height===void 0||!lt()||Math.hypot(e.clientX-ft.clientX,e.clientY-ft.clientY)<4&&!ft.recorded)return;Wd(i,e);let n=Pd(ft.height);if(!n)return;let s=lt(),r=Vg(s,{x:n.x-ft.dx,y:s.y,z:n.z-ft.dz},["x","z"],e.altKey),o=(le.worldSize??240)/2,a=Oe.clamp(r.x,-o,o),l=Oe.clamp(r.z,-o,o);a===s.x&&l===s.z||(ft.recorded||(Rt(),ft.recorded=!0,i.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,wh(bt.children[Tt],s),hi?.update(),z("p-x").value=a,z("p-z").value=l,$n(),nn())}function wd(i,e,t){if(!ft||ft.canvas!==i||ft.id!==e.pointerId)return;let n=ft;if(ft=null,i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),i.removeAttribute("data-dragging"),n.tool==="sculpt"){n.recorded&&(Et(),st("Relief modifi\xE9."));return}n.recorded&&(Bd(),st(lt().name+" d\xE9plac\xE9.")),t&&Ke===n.tool&&Ke!=="move"&&Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY)<6&&PS(i,e)}var Kn=null,Ch=!1,_h=null;document.addEventListener("keydown",i=>{i.code==="Space"&&!i.target.closest?.("input,select,textarea,button")&&(Ch=!0)});document.addEventListener("keyup",i=>{i.code==="Space"&&(Ch=!1)});window.addEventListener("blur",()=>{Kn=null,Ch=!1});nt.addEventListener("pointerdown",i=>{i.button!==1&&!(Ch&&i.button===0)||(i.preventDefault(),i.stopImmediatePropagation(),Kn={id:i.pointerId,x:i.clientX,y:i.clientY},nt.setPointerCapture(i.pointerId),nt.style.cursor="grabbing")},{capture:!0});nt.addEventListener("pointermove",i=>{!Kn||Kn.id!==i.pointerId||(i.stopImmediatePropagation(),Mt.cx-=(i.clientX-Kn.x)/Mt.scale,Mt.cz-=(i.clientY-Kn.y)/Mt.scale,Kn.x=i.clientX,Kn.y=i.clientY,$n())},{capture:!0});function $g(i){!Kn||Kn.id!==i.pointerId||(Kn=null,nt.style.cursor="",nt.hasPointerCapture(i.pointerId)&&nt.releasePointerCapture(i.pointerId),i.stopImmediatePropagation())}nt.addEventListener("pointerup",$g,{capture:!0});nt.addEventListener("pointercancel",$g,{capture:!0});function Xd(i,e){let t=nt.getBoundingClientRect(),n=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=Cd({clientX:n,clientY:s}),o=Oe.clamp(Mt.width/i,.75,4096),a=o/Mt.width;Mt.width=o,Mt.height*=a,Od();let l=Cd({clientX:n,clientY:s});Mt.cx+=r.x-l.x,Mt.cz+=r.z-l.z,$n()}nt.addEventListener("wheel",i=>{i.preventDefault(),Xd(Math.exp(-Math.sign(i.deltaY)*.18),i)},{passive:!1});z("plan-zoom-in").onclick=()=>Xd(1.25);z("plan-zoom-out").onclick=()=>Xd(.8);z("plan-fit").onclick=tr;var wi=z("context-actions"),Ua=!1;function co(){wi.hidden=!0}for(let i of[Qt,nt])i.addEventListener("pointerdown",e=>{e.button===2?_h={canvas:i,x:e.clientX,y:e.clientY}:co()}),i.addEventListener("contextmenu",e=>{if(e.preventDefault(),Ua){Ua=!1;return}if(_h?.canvas!==i||Math.hypot(e.clientX-_h.x,e.clientY-_h.y)>6)return;let t=lo(i,e),n=t?bt.children.indexOf(t.object):-1;if(n<0){co();return}La(n),z("context-title").textContent=lt()?.name??"Pi\xE8ce",wi.querySelector('[data-context-action="delete"]').textContent=lt()?.model?"Retirer de la carte":"Supprimer",wi.hidden=!1;let s=195,r=285;wi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",wi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",i=>{wi.hidden||wi.contains(i.target)||(Ua=i.button===2,co())},{capture:!0});document.addEventListener("contextmenu",i=>{Ua&&i.target!==Qt&&i.target!==nt&&(Ua=!1,i.preventDefault()),!wi.hidden&&!wi.contains(i.target)&&i.target!==Qt&&i.target!==nt&&co()},{capture:!0});document.addEventListener("keydown",i=>{i.key==="Escape"&&co()});for(let i of wi.querySelectorAll("[data-context-action]"))i.onclick=()=>{let e=i.dataset.contextAction;co(),e==="duplicate"?Vd():e==="delete"?kd():e==="focus"?z("focus-piece").click():Ti(e==="select"?"move":e)};for(let i of[Qt,nt])i.addEventListener("pointerdown",e=>IS(i,e),{capture:!0}),i.addEventListener("pointermove",e=>LS(i,e)),i.addEventListener("pointerup",e=>wd(i,e,!0)),i.addEventListener("pointercancel",e=>wd(i,e,!1)),i.addEventListener("lostpointercapture",e=>{i.hasPointerCapture(e.pointerId)||wd(i,e,!1)}),i.addEventListener("pointerleave",()=>{ft||Hi(null)});z("p-material").append(...ig.map((i,e)=>new Option(i,e)));for(let i of Ug)z("p-"+i).addEventListener("change",e=>{let t=lt();!t||t.model||(Rt(),t[i]=Number(e.target.value),le=Zt(le),Et())});z("uv-reset").onclick=()=>{let i=lt();!i||i.model||(Rt(),Object.assign(i,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),le=Zt(le),Et())};var DS={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[i,e]of Object.entries(DS))z(e).addEventListener("change",t=>{let n=lt();if(!n?.model||n.model.kind!=="prop")return;Rt(),n.model.properties[i]=t.target.checked,i==="collidable"&&(n.solid=t.target.checked),le=Zt(le),Et();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};st(s[i])});for(let i of Dg)z("p-"+i).addEventListener("change",e=>{let t=lt();if(!t)return;Rt();let n=e.target;i==="solid"?(t[i]=n.checked,t.model&&(t.model.properties.collidable=n.checked)):t[i]=["name","color"].includes(i)?n.value:Number(n.value),le=Zt(le),Et()});z("map-world-size").onchange=i=>{Rt(),le.worldSize=Oe.clamp(Number(i.target.value)||240,24,2048),le=Zt(le),Et(),tr(),st("Zone de construction : "+le.worldSize+" \xD7 "+le.worldSize+" m.")};z("map-name").onchange=i=>{Rt(),le.name=i.target.value,le=Zt(le),Et()};z("piece-search").addEventListener("input",Yg);z("pieces").onchange=i=>{i.target.value!==""&&La(Number(i.target.value))};z("focus-piece").onclick=()=>{let i=bt.children[Tt];if(!i)return;let e=new jt().setFromObject(i).getBoundingSphere(new Xn),t=Vt.position.clone().sub(Dt.target).normalize(),n=Math.atan(Math.tan(Oe.degToRad(Vt.fov/2))*Math.min(Vt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(n)*1.15);Dt.target.copy(e.center),Vt.position.copy(e.center).addScaledVector(t,s),Dt.update(),nn()};for(let i of["x","y","z","yaw"])z("spawn-"+i).onchange=e=>{Rt(),le.spawn[i]=Number(e.target.value),le=Zt(le),Et()};z("spawn-here").onclick=()=>{let i=lt();if(!i)return;let e=i.solid&&Jg(i.x,i.z,i.yaw,bt.children[Tt]);if(!e)return st("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Rt(),le.spawn=e,Et(),st("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let i of vh)i.onclick=()=>Ti(i.dataset.tool);z("duplicate").onclick=Vd;z("add-mirror").onclick=()=>zd(ud());z("delete").onclick=kd;z("rotate").onclick=AS;z("undo").onclick=jg;z("zoom-fit").onclick=tr;z("snap").onchange=()=>Hi(null);z("new-example").onclick=()=>Hd(Dd(),"Ar\xE8ne de d\xE9part ouverte.");z("blank-map").onclick=()=>{let i=Oe.clamp(Number(z("map-world-size").value)||240,24,2048);Hd({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:i,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Vn({name:"Sol",y:-.25,w:Math.min(i,Vi),d:Math.min(i,Vi)})]},"Nouvelle carte : "+i+" \xD7 "+i+" m. Tu peux s\xE9lectionner et modeler le sol.")};z("surface").onchange=i=>{let e=Sa[i.target.value],t=lt();!e||!t||(Rt(),Object.assign(t,e),Et())};z("texture-file").onchange=async i=>{let e=i.target.files[0],t=lt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let n=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(n.width,n.height));s.width=Math.max(1,Math.round(n.width*r)),s.height=Math.max(1,Math.round(n.height*r)),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!le.pieces.includes(t))return st("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Rt(),t.texture=o,Et(),st("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(n){st(n.message)}finally{i.target.value=""}};z("texture-paint").onclick=()=>{let i=lt();if(!i||i.model)return st("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");pd({name:i.name||"\xC9l\xE9ment du d\xE9cor",initial:i.texture,tint:i.color&&i.color!=="#ffffff"?i.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!le.pieces.includes(i))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Rt(),i.texture=e,le=Zt(le),Et(),st("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};z("terrain-grassTexture-paint").onclick=()=>{let i=lt();i?.terrain&&pd({name:"Herbe / "+i.name,initial:i.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!le.pieces.includes(i))throw Error("Terrain supprim\xE9 avant application.");Rt(),i.terrain.grassTexture=e,le=Zt(le),Et(),st("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};z("texture-clear").onclick=()=>{lt()?.texture&&(Rt(),lt().texture=null,Et())};z("import-map").onchange=async i=>{let e=i.target.files[0];if(e)try{Hd(Zt(await e.text()),"Map charg\xE9e.")}catch(t){st(t.message)}finally{i.target.value=""}};z("export-map").onclick=()=>{try{lg(le),st("Map JSON export\xE9e.")}catch(i){st(i.message)}};z("test-map").onclick=()=>{try{localStorage.setItem(ag,JSON.stringify(Zt(le))),location.href="./?custom=1"}catch{st("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Qg=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","grass","shrub","grassSize","shrubSize"];for(let i of["grass","shrub"])z("terrain-"+i+"Model").addEventListener("change",e=>{let t=lt();if(!t?.terrain)return;let n=vn.find(s=>s.id===e.target.value)??(t.terrain[i+"Model"]?.id===e.target.value?t.terrain[i+"Model"]:null);Rt(),t.terrain[i+"Model"]=n?structuredClone(n):null,le=Zt(le),Et(),st("V\xE9g\xE9tation personnalis\xE9e mise \xE0 jour.")});z("terrain-grassTexture-file").onchange=async i=>{let e=i.target.files?.[0],t=lt();if(i.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let n=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(n.width,n.height));s.width=Math.round(n.width*r),s.height=Math.round(n.height*r),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!le.pieces.includes(t))return;Rt(),t.terrain.grassTexture=o,Et(),st("Texture d\u2019herbe import\xE9e.")}catch(n){st(n.message)}};z("terrain-grassTexture-clear").onclick=()=>{lt()?.terrain&&(Rt(),lt().terrain.grassTexture=null,Et())};for(let i of Qg)z("terrain-"+i).onchange=e=>{let t=lt();t?.terrain&&(Rt(),t.terrain=i==="detail"?Km(t.terrain,Number(e.target.value)):Ys({...t.terrain,[i]:Number(e.target.value)}),Et())};z("terrain-reset").onclick=()=>{lt()?.terrain&&(Rt(),lt().terrain.heights=null,Et())};function e0(i,e){Wd(i,e);let t=gs.intersectObjects(bt.children,!1).find(a=>le.pieces[bt.children.indexOf(a.object)]?.terrain),n=t?bt.children.indexOf(t.object):-1,s=le.pieces[n];if(!s?.terrain||(ft.recorded||(Rt(),ft.recorded=!0,ft.flattenY=t.point.y,La(n),z("terrain-controls").open=!0),n!==Tt))return;let r={mode:z("terrain-brush").value,radius:Number(z("brush-radius").value),strength:Number(z("brush-strength").value),target:ft.flattenY};if(!Qm(s,t.point.x,t.point.z,r))return;let o=bt.children[n];o.geometry.dispose(),o.geometry=cd(s),hi?.update(),$n(),nn()}z("texture-style").replaceChildren(...dd.map((i,e)=>new Option(i,e)));z("texture-create").onclick=()=>{let i=lt();if(!i)return;let e=ug(Number(z("texture-style").value),z("texture-tint").value);Rt(),i.texture=e.toDataURL("image/webp",.85),Et(),st("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};z("view-top").onclick=()=>{let i=Dt.target,e=Math.max(10,Vt.position.distanceTo(i));Vt.position.copy(i).add(new v(0,e,.001)),Dt.update(),nn()};z("view-perspective").onclick=()=>{Vt.position.copy(Dt.target).add(new v(16,15,24)),tr()};z("view-spawn").onclick=()=>{let{x:i,y:e,z:t,yaw:n}=le.spawn,s=new v(0,0,-1).applyAxisAngle(Th,Oe.degToRad(n));Vt.position.set(i,e+.87,t),Dt.target.copy(Vt.position).addScaledVector(s,5),Vt.lookAt(Dt.target),nn()};var Lg={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",i=>{if(i.target.closest?.("input, select, textarea, [contenteditable]")||ft||tt.dragging)return;let e=i.key.toLowerCase();if(i.ctrlKey||i.metaKey)if(e==="z")jg();else if(e==="d")Vd();else return;else{if(i.altKey)return;if(Lg[e])Ti(Lg[e]);else if(e==="f")tr();else if(e==="delete"||e==="backspace")kd();else return}i.preventDefault()});var Ra=new un;gn.add(Ra);function t0(){if(!z("debug-stats"))return;let i=Fa.info.render.triangles,e=le?.pieces?.length??0;z("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+i.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(le?.worldSize??240)+" m"}function n0(){for(let i of[...Ra.children])Ra.remove(i),i.geometry.dispose(),i.material.dispose();ao.visible=z("debug-grid").checked;for(let i of bt.children){if(i.material)for(let e of Array.isArray(i.material)?i.material:[i.material])e.wireframe=z("debug-wire").checked;if(z("debug-hitboxes").checked){let e=bt.children.indexOf(i),t=le.pieces[e];if(t?.model){let n=Xm(t.model,new v(t.w,t.h,t.d)),s=new fe(n,new Ht({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));s.position.copy(i.position),s.rotation.copy(i.rotation),Ra.add(s)}else Ra.add(new Vr(i,"#fa9945"))}}nn()}for(let i of["debug-grid","debug-wire","debug-hitboxes"])z(i).onchange=n0;z("debug-coords").onchange=()=>{z("debug-coords").checked||t0()};for(let i of[Qt,nt])i.addEventListener("pointermove",e=>{if(!z("debug-coords").checked||ft||Kn)return;let t=lo(i,e);if(!t)return;let n=t.point;z("debug-stats").textContent="X "+n.x.toFixed(2)+" \xB7 Y "+n.y.toFixed(2)+" \xB7 Z "+n.z.toFixed(2)+" m \xB7 "+le.pieces.length+" \xE9l\xE9ments"});try{let i=localStorage.getItem(Ng);if(i){let e=Zt(i);if(JSON.stringify(e)!==JSON.stringify(rg()))if(e.arenaBase&&!e.editableArena){let t=Dd(),n=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!n.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=io?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,le=Zt(e),st("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):le=e}else le=e}}catch{}ES();Ti("move");Et();Eh();Ah();tr();Na();if(Td){let i=vn.find(e=>e.id===Td);i?(z("place-model").click(),st("\xAB "+i.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):st("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}})();
