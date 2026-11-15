(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ap=0,td=1,Ep=2;var ia=1,Cp=2,ri=3,Mi=0,on=1,kt=2,wi=0,ds=1,oi=2,nd=3,id=4,Rp=5,Gi=100,Ip=101,Pp=102,Lp=103,Dp=104,Up=200,Np=201,Fp=202,Bp=203,bl=204,wl=205,Op=206,zp=207,Vp=208,kp=209,Gp=210,Hp=211,Wp=212,Xp=213,qp=214,tc=0,nc=1,ic=2,fs=3,sc=4,rc=5,oc=6,ac=7,lc=0,Yp=1,Zp=2,Ti=0,Jp=1,jp=2,Kp=3,cc=4,$p=5,Qp=6,em=7;var sd=300,ws=301,Ts=302,Rr=303,uc=304,sa=306,si=1e3,ki=1001,Tl=1002,sn=1003,tm=1004;var ra=1005;var yn=1006,hc=1007;var Hn=1008;var Bn=1009,rd=1010,od=1011,Ir=1012,dc=1013,Xi=1014,ai=1015,li=1016,fc=1017,pc=1018,Pr=1020,ad=35902,ld=35899,cd=1021,ud=1022,Tn=1023,hr=1026,Lr=1027,hd=1028,mc=1029,dd=1030,gc=1031;var xc=1033,oa=33776,aa=33777,la=33778,ca=33779,yc=35840,_c=35841,vc=35842,Mc=35843,Sc=36196,bc=37492,wc=37496,Tc=37808,Ac=37809,Ec=37810,Cc=37811,Rc=37812,Ic=37813,Pc=37814,Lc=37815,Dc=37816,Uc=37817,Nc=37818,Fc=37819,Bc=37820,Oc=37821,zc=36492,Vc=36494,kc=36495,Gc=36283,Hc=36284,Wc=36285,Xc=36286;var wo=2300,Al=2301,Ml=2302,Hh=2400,Wh=2401,Xh=2402;var nm=3200,im=3201;var qc=0,sm=1,Ai="",_t="srgb",ps="srgb-linear",To="linear",pt="srgb";var hs=7680;var qh=519,rm=512,om=513,am=514,fd=515,lm=516,cm=517,um=518,hm=519,El=35044,Dr=35048;var pd="300 es",Kn=2e3,Ao=2001;var Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=1234567,vo=Math.PI/180,dr=180/Math.PI;function ii(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function md(n,e){return(n%e+e)%e}function ox(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ax(n,e,t){return n!==e?(t-n)/(e-n):0}function Mo(n,e,t){return(1-t)*n+t*e}function lx(n,e,t,i){return Mo(n,e,1-Math.exp(-t*i))}function cx(n,e=1){return e-Math.abs(md(n,e*2)-e)}function ux(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fx(n,e){return n+Math.random()*(e-n)}function px(n){return n*(.5-Math.random())}function mx(n){n!==void 0&&(Zf=n);let e=Zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gx(n){return n*vo}function xx(n){return n*dr}function yx(n){return(n&n-1)===0&&n!==0}function _x(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:vo,RAD2DEG:dr,generateUUID:ii,clamp:Ze,euclideanModulo:md,mapLinear:ox,inverseLerp:ax,lerp:Mo,damp:lx,pingpong:cx,smoothstep:ux,smootherstep:hx,randInt:dx,randFloat:fx,randFloatSpread:px,seededRandom:mx,degToRad:gx,radToDeg:xx,isPowerOfTwo:yx,ceilPowerOfTwo:_x,floorPowerOfTwo:vx,setQuaternionFromProperEuler:Mx,normalize:ft,denormalize:jn},be=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==p){let g=1-a,m=l*h+c*f+u*p+d*x,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let E=Math.sqrt(b),I=Math.atan2(E,m*w);g=Math.sin(g*I)/E,a=Math.sin(a*I)/E}let _=a*w;if(l=l*g+h*_,c=c*g+f*_,u=u*g+p*_,d=d*g+x*_,g===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ph=new M,Jf=new Je,$e=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],w=s[1],b=s[4],_=s[7],E=s[2],I=s[5],D=s[8];return r[0]=o*x+a*w+l*E,r[3]=o*g+a*b+l*I,r[6]=o*m+a*_+l*D,r[1]=c*x+u*w+d*E,r[4]=c*g+u*b+d*I,r[7]=c*m+u*_+d*D,r[2]=h*x+f*w+p*E,r[5]=h*g+f*b+p*I,r[8]=h*m+f*_+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new $e;function gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dm(){let n=fr("canvas");return n.style.display="block",n}var jf={};function pr(n){n in jf||(jf[n]=!0,console.warn(n))}function fm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Kf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){let n={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ps]:{primaries:e,whitePoint:i,transfer:To,toXYZ:Kf,fromXYZ:$f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Kf,fromXYZ:$f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),n}var at=Sx();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=fr("canvas")),Xs.width=e.width,Xs.height=e.height;let s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bx=0,mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gh(s[o].image)):r.push(gh(s[o]))}else r=gh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wx=0,xh=new M,cn=class n extends Si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ki,s=ki,r=yn,o=Hn,a=Tn,l=Bn,c=n.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ii(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=sd;cn.DEFAULT_ANISOTROPY=1;var ot=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(f+1)/2,E=(m+1)/2,I=(u+h)/4,D=(d+x)/4,P=(p+g)/4;return b>_&&b>E?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=I/i,r=D/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=I/s,r=P/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=P/r),this.set(i,s,r,t),this}let w=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(d-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new cn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Rl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Eo=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ja.subVectors(this.max,co),qs.subVectors(e.a,co),Ys.subVectors(e.b,co),Zs.subVectors(e.c,co),Ni.subVectors(Ys,qs),Fi.subVectors(Zs,Ys),as.subVectors(qs,Zs);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-as.z,as.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,as.z,0,-as.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-as.y,as.x,0];return!yh(t,qs,Ys,Zs,Ja)||(t=[1,0,0,0,1,0,0,0,1],!yh(t,qs,Ys,Zs,Ja))?!1:(ja.crossVectors(Ni,Fi),t=[ja.x,ja.y,ja.z],yh(t,qs,Ys,Zs,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new M,new M,new M,new M,new M,new M,new M,new M],Yn=new M,Za=new un,qs=new M,Ys=new M,Zs=new M,Ni=new M,Fi=new M,as=new M,co=new M,Ja=new M,ja=new M,ls=new M;function yh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Tx=new un,uo=new M,_h=new M,bi=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(uo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(_h)),this.expandByPoint(uo.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gi=new M,vh=new M,Ka=new M,Bi=new M,Mh=new M,$a=new M,Sh=new M,gr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vh.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(vh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=Bi.dot(this.direction),l=-Bi.dot(Ka),c=Bi.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vh).addScaledVector(Ka,h),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){Mh.subVectors(t,e),$a.subVectors(i,e),Sh.crossVectors(Mh,$a);let o=this.direction.dot(Sh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let l=a*this.direction.dot($a.crossVectors(Bi,$a));if(l<0)return null;let c=a*this.direction.dot(Mh.cross(Bi));if(c<0||l+c>o)return null;let u=-a*Bi.dot(Sh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Ex)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Oi.crossVectors(i,Dn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Oi.crossVectors(i,Dn)),Oi.normalize(),Qa.crossVectors(Dn,Oi),s[0]=Oi.x,s[4]=Qa.x,s[8]=Dn.x,s[1]=Oi.y,s[5]=Qa.y,s[9]=Dn.y,s[2]=Oi.z,s[6]=Qa.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],w=i[3],b=i[7],_=i[11],E=i[15],I=s[0],D=s[4],P=s[8],S=s[12],v=s[1],R=s[5],F=s[9],Y=s[13],Z=s[2],j=s[6],J=s[10],ee=s[14],G=s[3],te=s[7],fe=s[11],le=s[15];return r[0]=o*I+a*v+l*Z+c*G,r[4]=o*D+a*R+l*j+c*te,r[8]=o*P+a*F+l*J+c*fe,r[12]=o*S+a*Y+l*ee+c*le,r[1]=u*I+d*v+h*Z+f*G,r[5]=u*D+d*R+h*j+f*te,r[9]=u*P+d*F+h*J+f*fe,r[13]=u*S+d*Y+h*ee+f*le,r[2]=p*I+x*v+g*Z+m*G,r[6]=p*D+x*R+g*j+m*te,r[10]=p*P+x*F+g*J+m*fe,r[14]=p*S+x*Y+g*ee+m*le,r[3]=w*I+b*v+_*Z+E*G,r[7]=w*D+b*R+_*j+E*te,r[11]=w*P+b*F+_*J+E*fe,r[15]=w*S+b*Y+_*ee+E*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+x*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+g*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],w=d*g*c-x*h*c+x*l*f-a*g*f-d*l*m+a*h*m,b=p*h*c-u*g*c-p*l*f+o*g*f+u*l*m-o*h*m,_=u*x*c-p*d*c+p*a*f-o*x*f-u*a*m+o*d*m,E=p*d*l-u*x*l-p*a*h+o*x*h+u*a*g-o*d*g,I=t*w+i*b+s*_+r*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=w*D,e[1]=(x*h*r-d*g*r-x*s*f+i*g*f+d*s*m-i*h*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*D,e[4]=b*D,e[5]=(u*g*r-p*h*r+p*s*f-t*g*f-u*s*m+t*h*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*D,e[8]=_*D,e[9]=(p*d*r-u*x*r-p*i*f+t*x*f+u*i*m-t*d*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*D,e[12]=E*D,e[13]=(u*x*s-p*d*s+p*i*h-t*x*h-u*i*g+t*d*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,g=o*d,m=a*d,w=l*c,b=l*u,_=l*d,E=i.x,I=i.y,D=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+_)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-_)*I,s[5]=(1-(h+m))*I,s[6]=(g+w)*I,s[7]=0,s[8]=(p+b)*D,s[9]=(g-w)*D,s[10]=(1-(h+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Js.set(s[0],s[1],s[2]).length(),o=Js.set(s[4],s[5],s[6]).length(),a=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,u=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Kn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ao)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Kn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ao)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new M,Zn=new ct,Ax=new M(0,0,0),Ex=new M(1,1,1),Oi=new M,Qa=new M,Dn=new M,Qf=new ct,ep=new Je,rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cx=0,tp=new M,js=new Je,xi=new ct,el=new M,ho=new M,Rx=new M,Ix=new Je,np=new M(1,0,0),ip=new M(0,1,0),sp=new M(0,0,1),rp={type:"added"},Px={type:"removed"},Ks={type:"childadded",child:null},bh={type:"childremoved",child:null},Bt=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new rn,i=new Je,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new $e}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?el.copy(e):el.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ho,el,this.up):xi.lookAt(el,ho,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(xi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Px),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new M(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new M,yi=new M,wh=new M,_i=new M,$s=new M,Qs=new M,op=new M,Th=new M,Ah=new M,Eh=new M,Ch=new ot,Rh=new ot,Ih=new ot,bn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),yi.subVectors(i,t),wh.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(yi),l=Jn.dot(wh),c=yi.dot(yi),u=yi.dot(wh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ch.setScalar(0),Rh.setScalar(0),Ih.setScalar(0),Ch.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ch,r.x),o.addScaledVector(Rh,r.y),o.addScaledVector(Ih,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),yi.subVectors(e,t),Jn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,i),Qs.subVectors(r,i),Th.subVectors(e,i);let l=$s.dot(Th),c=Qs.dot(Th);if(l<=0&&c<=0)return t.copy(i);Ah.subVectors(e,s);let u=$s.dot(Ah),d=Qs.dot(Ah);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($s,o);Eh.subVectors(e,r);let f=$s.dot(Eh),p=Qs.dot(Eh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Qs,a);let g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return op.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(op,a);let m=1/(g+x+h);return o=x*m,a=h*m,t.copy(i).addScaledVector($s,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Ph(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=md(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ph(o,r,e+1/3),this.g=Ph(o,r,e),this.b=Ph(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return at.workingToColorSpace(ln.copy(this),e),Math.round(Ze(ln.r*255,0,255))*65536+Math.round(Ze(ln.g*255,0,255))*256+Math.round(Ze(ln.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=_t){at.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(tl);let i=Mo(zi.h,tl.h,t),s=Mo(zi.s,tl.s,t),r=Mo(zi.l,tl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ge;Ge.NAMES=pm;var Lx=0,$n=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=ds,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==wl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new M,nl=new be,Dx=0,Ot=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=El,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}};var ms=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Co=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xe=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ux=0,kn=new ct,Lh=new Bt,er=new M,Un=new un,fo=new un,$t=new M,rt=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Co:ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Un.min,fo.min),Un.expandByPoint($t),$t.addVectors(Un.max,fo.max),Un.expandByPoint($t)):(Un.expandByPoint(fo.min),Un.expandByPoint(fo.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),$t.add(er)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new M,l[P]=new M;let c=new M,u=new M,d=new M,h=new be,f=new be,p=new be,x=new M,g=new M;function m(P,S,v){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,v),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,v),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(R),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),a[P].add(x),a[S].add(x),a[v].add(x),l[P].add(g),l[S].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,S=w.length;P<S;++P){let v=w[P],R=v.start,F=v.count;for(let Y=R,Z=R+F;Y<Z;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let b=new M,_=new M,E=new M,I=new M;function D(P){E.fromBufferAttribute(s,P),I.copy(E);let S=a[P];b.copy(S),b.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(I,S);let R=_.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,S=w.length;P<S;++P){let v=w[P],R=v.start,F=v.count;for(let Y=R,Z=R+F;Y<Z;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new Ot(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ap=new ct,cs=new gr,il=new bi,lp=new M,sl=new M,rl=new M,ol=new M,Dh=new M,al=new M,cp=new M,ll=new M,Ve=class extends Bt{constructor(e=new rt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Dh.fromBufferAttribute(d,e),o?al.addScaledVector(Dh,u):al.addScaledVector(Dh.sub(t),u))}t.add(al)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(il.containsPoint(cs.origin)===!1&&(cs.intersectSphere(il,lp)===null||cs.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(ap.copy(r).invert(),cs.copy(e.ray).applyMatrix4(ap),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=w,E=b;_<E;_+=3){let I=a.getX(_),D=a.getX(_+1),P=a.getX(_+2);s=cl(this,m,e,i,c,u,d,I,D,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let w=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=cl(this,o,e,i,c,u,d,w,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=w,E=b;_<E;_+=3){let I=_,D=_+1,P=_+2;s=cl(this,m,e,i,c,u,d,I,D,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let w=g,b=g+1,_=g+2;s=cl(this,o,e,i,c,u,d,w,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Nx(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Mi,a),l===null)return null;ll.copy(a),ll.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:n}}function cl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,sl),n.getVertexPosition(l,rl),n.getVertexPosition(c,ol);let u=Nx(n,e,t,i,sl,rl,ol,cp);if(u){let d=new M;bn.getBarycoord(cp,sl,rl,ol,d),s&&(u.uv=bn.getInterpolatedAttribute(s,a,l,c,d,new be)),r&&(u.uv1=bn.getInterpolatedAttribute(r,a,l,c,d,new be)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new M,materialIndex:0};bn.getNormal(sl,rl,ol,h.normal),u.face=h,u.barycoord=d}return u}var it=class n extends rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function p(x,g,m,w,b,_,E,I,D,P,S){let v=_/D,R=E/P,F=_/2,Y=E/2,Z=I/2,j=D+1,J=P+1,ee=0,G=0,te=new M;for(let fe=0;fe<J;fe++){let le=fe*R-Y;for(let me=0;me<j;me++){let Ae=me*v-F;te[x]=Ae*w,te[g]=le*b,te[m]=Z,c.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[m]=I>0?1:-1,u.push(te.x,te.y,te.z),d.push(me/D),d.push(1-fe/P),ee+=1}}for(let fe=0;fe<P;fe++)for(let le=0;le<D;le++){let me=h+le+j*fe,Ae=h+le+j*(fe+1),Ce=h+(le+1)+j*(fe+1),$=h+(le+1)+j*fe;l.push(me,Ae,$),l.push(Ae,Ce,$),G+=6}a.addGroup(f,G,S),f+=G,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=As(n[t]);for(let s in i)e[s]=i[s]}return e}function Fx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Yc={clone:As,merge:hn},Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ro=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new M,up=new be,hp=new be,Ft=class extends Ro{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,up,hp),t.subVectors(hp,up)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tr=-90,nr=1,Pl=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(tr,nr,e,t);s.layers=this.layers,this.add(s);let r=new Ft(tr,nr,e,t);r.layers=this.layers,this.add(r);let o=new Ft(tr,nr,e,t);o.layers=this.layers,this.add(o);let a=new Ft(tr,nr,e,t);a.layers=this.layers,this.add(a);let l=new Ft(tr,nr,e,t);l.layers=this.layers,this.add(l);let c=new Ft(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Io=class extends cn{constructor(e=[],t=ws,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ll=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new it(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:wi});r.uniforms.tEquirect.value=t;let o=new Ve(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=yn),new Pl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ct=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zx={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Po=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gs=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new M,_r=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vr=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ir,po=new M,sr=new M,rr=new M,or=new be,mo=new be,mm=new ct,ul=new M,go=new M,hl=new M,dp=new be,Uh=new be,fp=new be,Do=class extends Bt{constructor(e=new vr){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lo(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new _r(i,3,0,!1)),ir.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=ir,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;dl(ul.set(-.5,-.5,0),rr,o,sr,s,r),dl(go.set(.5,-.5,0),rr,o,sr,s,r),dl(hl.set(.5,.5,0),rr,o,sr,s,r),dp.set(0,0),Uh.set(1,0),fp.set(1,1);let a=e.ray.intersectTriangle(ul,go,hl,!1,po);if(a===null&&(dl(go.set(-.5,.5,0),rr,o,sr,s,r),Uh.set(0,1),a=e.ray.intersectTriangle(ul,hl,go,!1,po),a===null))return;let l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||t.push({distance:l,point:po.clone(),uv:bn.getInterpolation(po,ul,go,hl,dp,Uh,fp,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dl(n,e,t,i,s,r){or.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(mo.x=r*or.x-s*or.y,mo.y=s*or.x+r*or.y):mo.copy(or),n.copy(e),n.x+=mo.x,n.y+=mo.y,n.applyMatrix4(mm)}var xs=class extends cn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nh=new M,Vx=new M,kx=new $e,Sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nh.subVectors(i,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kx.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new bi,Gx=new be(.5,.5),fl=new M,Mr=class{constructor(e=new Sn,t=new Sn,i=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],w=r[12],b=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,m-p,E-w).normalize(),s[1].setComponents(c+o,f+u,m+p,E+w).normalize(),s[2].setComponents(c+a,f+d,m+x,E+b).normalize(),s[3].setComponents(c-a,f-d,m-x,E-b).normalize(),i)s[4].setComponents(l,h,g,_).normalize(),s[5].setComponents(c-l,f-h,m-g,E-_).normalize();else if(s[4].setComponents(c-l,f-h,m-g,E-_).normalize(),t===Kn)s[5].setComponents(c+l,f+h,m+g,E+_).normalize();else if(t===Ao)s[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Gx.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fl.x=s.normal.x>0?e.max.x:e.min.x,fl.y=s.normal.y>0?e.max.y:e.min.y,fl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sr=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dl=new M,Ul=new M,pp=new ct,xo=new gr,pl=new bi,Fh=new M,mp=new M,Nl=class extends Bt{constructor(e=new rt,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Dl.fromBufferAttribute(t,s-1),Ul.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;pp.copy(s).invert(),xo.copy(e.ray).applyMatrix4(pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),w=u.getX(x+1),b=ml(this,e,xo,l,m,w,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=ml(this,e,xo,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=ml(this,e,xo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ml(this,e,xo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Dl.fromBufferAttribute(a,s),Ul.fromBufferAttribute(a,r),t.distanceSqToSegment(Dl,Ul,Fh,mp)>i)return;Fh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fh);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Uo=class extends Nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Gn=class extends cn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},No=class extends cn{constructor(e,t,i=Xi,s,r,o,a=sn,l=sn,c,u=hr,d=1){if(u!==hr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fo=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vt=class n extends rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class n extends rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,x=[],g=i/2,m=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function w(){let _=new M,E=new M,I=0,D=(t-e)/i;for(let P=0;P<=r;P++){let S=[],v=P/r,R=v*(t-e)+e;for(let F=0;F<=s;F++){let Y=F/s,Z=Y*l+a,j=Math.sin(Z),J=Math.cos(Z);E.x=R*j,E.y=-v*i+g,E.z=R*J,d.push(E.x,E.y,E.z),_.set(j,D,J).normalize(),h.push(_.x,_.y,_.z),f.push(Y,1-v),S.push(p++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let v=x[S][P],R=x[S+1][P],F=x[S+1][P+1],Y=x[S][P+1];(e>0||S!==0)&&(u.push(v,R,Y),I+=3),(t>0||S!==r-1)&&(u.push(R,F,Y),I+=3)}c.addGroup(m,I,0),m+=I}function b(_){let E=p,I=new be,D=new M,P=0,S=_===!0?e:t,v=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*v,0),h.push(0,v,0),f.push(.5,.5),p++;let R=p;for(let F=0;F<=s;F++){let Z=F/s*l+a,j=Math.cos(Z),J=Math.sin(Z);D.x=S*J,D.y=g*v,D.z=S*j,d.push(D.x,D.y,D.z),h.push(0,v,0),I.x=j*.5+.5,I.y=J*.5*v+.5,f.push(I.x,I.y),p++}for(let F=0;F<s;F++){let Y=E+F,Z=R+F;_===!0?u.push(Z,Z+1,Y):u.push(Z+1,Z,Y),P+=3}c.addGroup(m,P,_===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bo=class n extends Qt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},br=class n extends rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let b=new M,_=new M,E=new M;for(let I=0;I<t.length;I+=3)f(t[I+0],b),f(t[I+1],_),f(t[I+2],E),l(b,_,E,w)}function l(w,b,_,E){let I=E+1,D=[];for(let P=0;P<=I;P++){D[P]=[];let S=w.clone().lerp(_,P/I),v=b.clone().lerp(_,P/I),R=I-P;for(let F=0;F<=R;F++)F===0&&P===I?D[P][F]=S:D[P][F]=S.clone().lerp(v,F/R)}for(let P=0;P<I;P++)for(let S=0;S<2*(I-P)-1;S++){let v=Math.floor(S/2);S%2===0?(h(D[P][v+1]),h(D[P+1][v]),h(D[P][v])):(h(D[P][v+1]),h(D[P+1][v+1]),h(D[P+1][v]))}}function c(w){let b=new M;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(w),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let w=new M;for(let b=0;b<r.length;b+=3){w.x=r[b+0],w.y=r[b+1],w.z=r[b+2];let _=g(w)/2/Math.PI+.5,E=m(w)/Math.PI+.5;o.push(_,1-E)}p(),d()}function d(){for(let w=0;w<o.length;w+=6){let b=o[w+0],_=o[w+2],E=o[w+4],I=Math.max(b,_,E),D=Math.min(b,_,E);I>.9&&D<.1&&(b<.2&&(o[w+0]+=1),_<.2&&(o[w+2]+=1),E<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function f(w,b){let _=w*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){let w=new M,b=new M,_=new M,E=new M,I=new be,D=new be,P=new be;for(let S=0,v=0;S<r.length;S+=9,v+=6){w.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),I.set(o[v+0],o[v+1]),D.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),E.copy(w).add(b).add(_).divideScalar(3);let R=g(E);x(I,v+0,w,R),x(D,v+2,b,R),x(P,v+4,_,R)}}function x(w,b,_,E){E<0&&w.x===1&&(o[b]=w.x-1),_.x===0&&_.z===0&&(o[b]=E/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wr=class extends Nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends wr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var gl=new M,Bh=new yd,Oh=new yd,zh=new yd,Bl=class extends Nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(gl.subVectors(s[0],s[1]).add(s[0]),c=gl);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(gl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=gl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Bh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,g),Oh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,g),zh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Oh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),zh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Bh.calc(l),Oh.calc(l),zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Hx(n,e){let t=1-n;return t*t*e}function Wx(n,e){return 2*(1-n)*n*e}function Xx(n,e){return n*n*e}function So(n,e,t,i){return Hx(n,e)+Wx(n,t)+Xx(n,i)}function qx(n,e){let t=1-n;return t*t*t*e}function Yx(n,e){let t=1-n;return 3*t*t*n*e}function Zx(n,e){return 3*(1-n)*n*n*e}function Jx(n,e){return n*n*n*e}function bo(n,e,t,i,s){return qx(n,e)+Yx(n,t)+Zx(n,i)+Jx(n,s)}var Oo=class extends Nn{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends Nn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y),bo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zo=class extends Nn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Nn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Nn{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends Nn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y),So(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(gp(a,l.x,c.x,u.x,d.x),gp(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Bl,CubicBezierCurve:Oo,CubicBezierCurve3:Ol,EllipseCurve:wr,LineCurve:zo,LineCurve3:zl,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Vl,SplineCurve:ko}),kl=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}},Go=class extends kl{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new zo(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Vo(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Oo(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new wr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ys=class extends Go{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Go().fromJSON(s))}return this}};function jx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=gm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ty(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ho(r,o,t,a,l,c,0),o}function gm(n,e,t,i,s){let r;if(s===dy(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=xp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=xp(o/i|0,n[o],n[o+1],r);return r&&Tr(r,r.next)&&(Xo(r),r=r.next),r}function _s(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Tr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ho(n,e,t,i,s,r,o){if(!n)return;!o&&r&&oy(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?$x(n,i,s,r):Kx(n)){e.push(l.i,n.i,c.i),Xo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Qx(_s(n),e),Ho(n,e,t,i,s,r,2)):o===2&&ey(n,e,t,i,s,r):Ho(_s(n),e,t,i,s,r,1);break}}}function Kx(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&_o(s,a,r,l,o,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $x(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),g=Math.max(u,d,h),m=Zh(f,p,e,t,i),w=Zh(x,g,e,t,i),b=n.prevZ,_=n.nextZ;for(;b&&b.z>=m&&_&&_.z<=w;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&_o(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&_o(a,u,l,d,c,h,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&_o(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=w;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&_o(a,u,l,d,c,h,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Tr(i,s)&&ym(i,t,t.next,s)&&Wo(i,s)&&Wo(s,i)&&(e.push(i.i,t.i,s.i),Xo(t),Xo(t.next),t=n=s),t=t.next}while(t!==n);return _s(t)}function ey(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cy(o,a)){let l=_m(o,a);o=_s(o,o.next),l=_s(l,l.next),Ho(o,e,t,i,s,r,0),Ho(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ty(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=gm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ly(c))}s.sort(ny);for(let r=0;r<s.length;r++)t=iy(s[r],t);return t}function ny(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function iy(n,e){let t=sy(n,e);if(!t)return e;let i=_m(t,n);return _s(i,i.next),_s(t,t.next)}function sy(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Tr(n,t))return t;do{if(Tr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&xm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Wo(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&ry(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function ry(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function oy(n,e,t,i){let s=n;do s.z===0&&(s.z=Zh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ay(s)}function ay(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Zh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ly(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function _o(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&xm(n,e,t,i,s,r,o,a)}function cy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!uy(n,e)&&(Wo(n,e)&&Wo(e,n)&&hy(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Tr(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Tr(n,e){return n.x===e.x&&n.y===e.y}function ym(n,e,t,i){let s=yl(Lt(n,e,t)),r=yl(Lt(n,e,i)),o=yl(Lt(t,i,n)),a=yl(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&xl(n,t,e)||r===0&&xl(n,i,e)||o===0&&xl(t,n,i)||a===0&&xl(t,e,i))}function xl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yl(n){return n>0?1:n<0?-1:0}function uy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wo(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function hy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _m(n,e){let t=Jh(n.i,n.x,n.y),i=Jh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function xp(n,e,t,i){let s=Jh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var jh=class{static triangulate(e,t,i=2){return jx(e,t,i)}},ni=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yp(e),_p(i,e);let o=e.length;t.forEach(yp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,_p(i,t[l]);let a=jh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _p(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qo=class n extends rt{constructor(e=new ys([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:fy,b,_=!1,E,I,D,P;m&&(b=m.getSpacedPoints(u),_=!0,h=!1,E=m.computeFrenetFrames(u,!1),I=new M,D=new M,P=new M),h||(g=0,f=0,p=0,x=0);let S=a.extractPoints(c),v=S.shape,R=S.holes;if(!ni.isClockWise(v)){v=v.reverse();for(let V=0,B=R.length;V<B;V++){let k=R[V];ni.isClockWise(k)&&(R[V]=k.reverse())}}function Y(V){let k=10000000000000001e-36,z=V[0];for(let re=1;re<=V.length;re++){let ie=re%V.length,de=V[ie],Ue=de.x-z.x,Ne=de.y-z.y,C=Ue*Ue+Ne*Ne,y=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(z.x),Math.abs(z.y)),L=k*y*y;if(C<=L){V.splice(ie,1),re--;continue}z=de}}Y(v),R.forEach(Y);let Z=R.length,j=v;for(let V=0;V<Z;V++){let B=R[V];v=v.concat(B)}function J(V,B,k){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(B,k)}let ee=v.length;function G(V,B,k){let z,re,ie,de=V.x-B.x,Ue=V.y-B.y,Ne=k.x-V.x,C=k.y-V.y,y=de*de+Ue*Ue,L=de*C-Ue*Ne;if(Math.abs(L)>Number.EPSILON){let H=Math.sqrt(y),oe=Math.sqrt(Ne*Ne+C*C),W=B.x-Ue/H,ge=B.y+de/H,he=k.x-C/oe,xe=k.y+Ne/oe,ye=((he-W)*C-(xe-ge)*Ne)/(de*C-Ue*Ne);z=W+de*ye-V.x,re=ge+Ue*ye-V.y;let ce=z*z+re*re;if(ce<=2)return new be(z,re);ie=Math.sqrt(ce/2)}else{let H=!1;de>Number.EPSILON?Ne>Number.EPSILON&&(H=!0):de<-Number.EPSILON?Ne<-Number.EPSILON&&(H=!0):Math.sign(Ue)===Math.sign(C)&&(H=!0),H?(z=-Ue,re=de,ie=Math.sqrt(y)):(z=de,re=Ue,ie=Math.sqrt(y/2))}return new be(z/ie,re/ie)}let te=[];for(let V=0,B=j.length,k=B-1,z=V+1;V<B;V++,k++,z++)k===B&&(k=0),z===B&&(z=0),te[V]=G(j[V],j[k],j[z]);let fe=[],le,me=te.concat();for(let V=0,B=Z;V<B;V++){let k=R[V];le=[];for(let z=0,re=k.length,ie=re-1,de=z+1;z<re;z++,ie++,de++)ie===re&&(ie=0),de===re&&(de=0),le[z]=G(k[z],k[ie],k[de]);fe.push(le),me=me.concat(le)}let Ae;if(g===0)Ae=ni.triangulateShape(j,R);else{let V=[],B=[];for(let k=0;k<g;k++){let z=k/g,re=f*Math.cos(z*Math.PI/2),ie=p*Math.sin(z*Math.PI/2)+x;for(let de=0,Ue=j.length;de<Ue;de++){let Ne=J(j[de],te[de],ie);ue(Ne.x,Ne.y,-re),z===0&&V.push(Ne)}for(let de=0,Ue=Z;de<Ue;de++){let Ne=R[de];le=fe[de];let C=[];for(let y=0,L=Ne.length;y<L;y++){let H=J(Ne[y],le[y],ie);ue(H.x,H.y,-re),z===0&&C.push(H)}z===0&&B.push(C)}}Ae=ni.triangulateShape(V,B)}let Ce=Ae.length,$=p+x;for(let V=0;V<ee;V++){let B=h?J(v[V],me[V],$):v[V];_?(D.copy(E.normals[0]).multiplyScalar(B.x),I.copy(E.binormals[0]).multiplyScalar(B.y),P.copy(b[0]).add(D).add(I),ue(P.x,P.y,P.z)):ue(B.x,B.y,0)}for(let V=1;V<=u;V++)for(let B=0;B<ee;B++){let k=h?J(v[B],me[B],$):v[B];_?(D.copy(E.normals[V]).multiplyScalar(k.x),I.copy(E.binormals[V]).multiplyScalar(k.y),P.copy(b[V]).add(D).add(I),ue(P.x,P.y,P.z)):ue(k.x,k.y,d/u*V)}for(let V=g-1;V>=0;V--){let B=V/g,k=f*Math.cos(B*Math.PI/2),z=p*Math.sin(B*Math.PI/2)+x;for(let re=0,ie=j.length;re<ie;re++){let de=J(j[re],te[re],z);ue(de.x,de.y,d+k)}for(let re=0,ie=R.length;re<ie;re++){let de=R[re];le=fe[re];for(let Ue=0,Ne=de.length;Ue<Ne;Ue++){let C=J(de[Ue],le[Ue],z);_?ue(C.x,C.y+b[u-1].y,b[u-1].x+k):ue(C.x,C.y,d+k)}}}U(),N();function U(){let V=s.length/3;if(h){let B=0,k=ee*B;for(let z=0;z<Ce;z++){let re=Ae[z];Q(re[2]+k,re[1]+k,re[0]+k)}B=u+g*2,k=ee*B;for(let z=0;z<Ce;z++){let re=Ae[z];Q(re[0]+k,re[1]+k,re[2]+k)}}else{for(let B=0;B<Ce;B++){let k=Ae[B];Q(k[2],k[1],k[0])}for(let B=0;B<Ce;B++){let k=Ae[B];Q(k[0]+ee*u,k[1]+ee*u,k[2]+ee*u)}}i.addGroup(V,s.length/3-V,0)}function N(){let V=s.length/3,B=0;ae(j,B),B+=j.length;for(let k=0,z=R.length;k<z;k++){let re=R[k];ae(re,B),B+=re.length}i.addGroup(V,s.length/3-V,1)}function ae(V,B){let k=V.length;for(;--k>=0;){let z=k,re=k-1;re<0&&(re=V.length-1);for(let ie=0,de=u+g*2;ie<de;ie++){let Ue=ee*ie,Ne=ee*(ie+1),C=B+z+Ue,y=B+re+Ue,L=B+re+Ne,H=B+z+Ne;Me(C,y,L,H)}}}function ue(V,B,k){l.push(V),l.push(B),l.push(k)}function Q(V,B,k){Pe(V),Pe(B),Pe(k);let z=s.length/3,re=w.generateTopUV(i,s,z-3,z-2,z-1);T(re[0]),T(re[1]),T(re[2])}function Me(V,B,k,z){Pe(V),Pe(B),Pe(z),Pe(B),Pe(k),Pe(z);let re=s.length/3,ie=w.generateSideWallUV(i,s,re-6,re-3,re-2,re-1);T(ie[0]),T(ie[1]),T(ie[3]),T(ie[1]),T(ie[2]),T(ie[3])}function Pe(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function T(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return py(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yh[s.type]().fromJSON(s)),new n(i,e.options)}},fy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new be(r,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-d),new be(h,1-p),new be(x,1-m)]:[new be(a,1-l),new be(u,1-d),new be(f,1-p),new be(g,1-m)]}};function py(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var en=class n extends br{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var vs=class n extends br{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xt=class n extends rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let w=m*h-o;for(let b=0;b<c;b++){let _=b*d-r;p.push(_,-w,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let b=w+c*m,_=w+c*(m+1),E=w+1+c*(m+1),I=w+1+c*m;f.push(b,_,I),f.push(_,E,I)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ar=class n extends rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new M,p=new be;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let w=m+g,b=w,_=w+i+1,E=w+i+2,I=w+1;a.push(b,_,I),a.push(_,E,I)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Yo=class n extends rt{constructor(e=new ys([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(o,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,p=h.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let w=p[g];ni.isClockWise(w)===!0&&(p[g]=w.reverse())}let x=ni.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let w=p[g];f=f.concat(w)}for(let g=0,m=f.length;g<m;g++){let w=f[g];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let g=0,m=x.length;g<m;g++){let w=x[g],b=w[0]+d,_=w[1]+d,E=w[2]+d;i.push(b,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return my(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function my(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Zo=class n extends rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,h=new M,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let w=[],b=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let I=E/t;d.x=-e*Math.cos(s+I*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+I*r)*Math.sin(o+b*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(I+_,1-b),w.push(c++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<t;w++){let b=u[m][w+1],_=u[m][w],E=u[m+1][w],I=u[m+1][w+1];(m!==0||o>0)&&f.push(b,_,I),(m!==i-1||l<Math.PI)&&f.push(_,E,I)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Jo=class n extends br{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ms=class n extends rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,h=new M;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,w=(s+1)*f+p;o.push(x,g,w),o.push(g,m,w)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var qt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var tn=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gl=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _l(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ss=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Ss{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wh:r=e,a=2*t-i;break;case Xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:o=e,l=2*i-t;break;case Xh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,w=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+w*o[c+E]+b*o[l+E]+_*o[d+E];return r}},Xl=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},ql=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_l(t,this.TimeBufferType),this.values=_l(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_l(e.times,Array),values:_l(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case Ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return Ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Al;var Hi=class extends Fn{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=wo;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};Yl.prototype.ValueTypeName="color";var Zl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};Zl.prototype.ValueTypeName="number";var Jl=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}},jo=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Fn{constructor(e,t,i){super(e,t,i)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=wo;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};jl.prototype.ValueTypeName="vector";var Sl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Kl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},vm=new Kl,Er=class{constructor(e){this.manager=e!==void 0?e:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=new WeakMap,$l=class extends Er{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Sl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ar.get(o);d===void 0&&(d=[],ar.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=fr("img");function l(){u(),t&&t(this);let d=ar.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}ar.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Sl.remove(`image:${e}`);let h=ar.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(d)}ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Sl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ko=class extends Er{constructor(e){super(e)}load(e,t,i,s){let r=new cn,o=new $l(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Cr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$o=class extends Cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vh=new ct,vp=new M,Mp=new M,Ql=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),Vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Sp=new ct,yo=new M,kh=new M,Kh=class extends Ql{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),kh.copy(i.position),kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kh),i.updateMatrixWorld(),s.makeTranslation(-yo.x,-yo.y,-yo.z),Sp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp,i.coordinateSystem,i.reversedDepth)}},Qo=class extends Cr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ea=class extends Ro{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$h=class extends Ql{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ec=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _d="\\[\\]\\.:\\/",xy=new RegExp("["+_d+"]","g"),vd="[^"+_d+"]",yy="[^"+_d.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",vd),vy=/(WCOD+)?/.source.replace("WCOD",yy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vd),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vd),by=new RegExp("^"+_y+vy+My+Sy+"$"),wy=["material","materials","bones","map"],Qh=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(e){let t=by.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Qh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var bp=new ct,bs=class{constructor(e,t,i=0,s=1/0){this.ray=new gr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(e,t=!0,i=[]){return ed(e,this,i,t),i.sort(wp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ed(e[s],this,i,t);return i.sort(wp),i}};function wp(n,e){return n.distance-e.distance}function ed(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ed(r[o],e,t,!0)}}var Tp=new M,vl=new M,lr=new M,cr=new M,Gh=new M,Ty=new M,Ay=new M,na=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Tp.subVectors(e,this.start),vl.subVectors(this.end,this.start);let i=vl.dot(vl),r=vl.dot(Tp)/i;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Ty,i=Ay){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;lr.subVectors(c,a),cr.subVectors(u,l),Gh.subVectors(a,l);let d=lr.dot(lr),h=cr.dot(cr),f=cr.dot(Gh);if(d<=s&&h<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=f/h,o=Ze(o,0,1);else{let p=lr.dot(Gh);if(h<=s)o=0,r=Ze(-p/d,0,1);else{let x=lr.dot(cr),g=d*h-x*x;g!==0?r=Ze((x*f-p*h)/g,0,1):r=0,o=(x*r+f)/h,o<0?(o=0,r=Ze(-p/d,0,1)):o>1&&(o=1,r=Ze((x-p)/d,0,1))}}return t.copy(a).add(lr.multiplyScalar(r)),i.copy(l).add(cr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Md(n,e,t,i){let s=Ey(i);switch(t){case cd:return n*e;case hd:return n*e/s.components*s.byteLength;case mc:return n*e/s.components*s.byteLength;case dd:return n*e*2/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case ud:return n*e*3/s.components*s.byteLength;case Tn:return n*e*4/s.components*s.byteLength;case xc:return n*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case yc:case vc:return Math.max(n,8)*Math.max(e,8)/2;case Sc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zc:case Vc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gc:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ey(n){switch(n){case Bn:case rd:return{byteLength:1,components:1};case Ir:case od:case li:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Xi:case dc:case ai:return{byteLength:4,components:1};case ad:case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Dy(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
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
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,Zy=`#ifdef USE_BUMPMAP
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
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i_=`#define PI 3.141592653589793
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
} // validated`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r_=`vec3 transformedNormal = objectNormal;
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
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,__=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
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
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T_=`uniform bool receiveShadow;
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
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P_=`PhysicalMaterial material;
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
#endif`,L_=`struct PhysicalMaterial {
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
}`,D_=`
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
#endif`,U_=`#if defined( RE_IndirectDiffuse )
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
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H_=`#if defined( USE_POINTS_UV )
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
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,j_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
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
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,Gv=`#define DISTANCE
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,$v=`#define MATCAP
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
}`,Qv=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,dM=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Uy,alphahash_pars_fragment:Ny,alphamap_fragment:Fy,alphamap_pars_fragment:By,alphatest_fragment:Oy,alphatest_pars_fragment:zy,aomap_fragment:Vy,aomap_pars_fragment:ky,batching_pars_vertex:Gy,batching_vertex:Hy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Zy,clipping_planes_fragment:Jy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:$y,color_fragment:Qy,color_pars_fragment:e_,color_pars_vertex:t_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:r_,displacementmap_pars_vertex:o_,displacementmap_vertex:a_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,colorspace_fragment:u_,colorspace_pars_fragment:h_,envmap_fragment:d_,envmap_common_pars_fragment:f_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:A_,envmap_vertex:g_,fog_vertex:x_,fog_pars_vertex:y_,fog_fragment:__,fog_pars_fragment:v_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:S_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:w_,lights_pars_begin:T_,lights_toon_fragment:E_,lights_toon_pars_fragment:C_,lights_phong_fragment:R_,lights_phong_pars_fragment:I_,lights_physical_fragment:P_,lights_physical_pars_fragment:L_,lights_fragment_begin:D_,lights_fragment_maps:U_,lights_fragment_end:N_,logdepthbuf_fragment:F_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:z_,map_fragment:V_,map_pars_fragment:k_,map_particle_fragment:G_,map_particle_pars_fragment:H_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:X_,morphinstance_vertex:q_,morphcolor_vertex:Y_,morphnormal_vertex:Z_,morphtarget_pars_vertex:J_,morphtarget_vertex:j_,normal_fragment_begin:K_,normal_fragment_maps:$_,normal_pars_fragment:Q_,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:ov,opaque_fragment:av,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:uv,dithering_fragment:hv,dithering_pars_fragment:dv,roughnessmap_fragment:fv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:xv,shadowmask_pars_fragment:yv,skinbase_vertex:_v,skinning_pars_vertex:vv,skinning_vertex:Mv,skinnormal_vertex:Sv,specularmap_fragment:bv,specularmap_pars_fragment:wv,tonemapping_fragment:Tv,tonemapping_pars_fragment:Av,transmission_fragment:Ev,transmission_pars_fragment:Cv,uv_pars_fragment:Rv,uv_pars_vertex:Iv,uv_vertex:Pv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Uv,backgroundCube_vert:Nv,backgroundCube_frag:Fv,cube_vert:Bv,cube_frag:Ov,depth_vert:zv,depth_frag:Vv,distanceRGBA_vert:kv,distanceRGBA_frag:Gv,equirect_vert:Hv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:qv,meshbasic_vert:Yv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:jv,meshmatcap_vert:Kv,meshmatcap_frag:$v,meshnormal_vert:Qv,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:sM,meshtoon_vert:rM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:hM,sprite_frag:dM},Ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ci={basic:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([Ie.points,Ie.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([Ie.common,Ie.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([Ie.sprite,Ie.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:hn([Ie.lights,Ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Zc={r:0,b:0,g:0},Es=new rn,fM=new ct;function pM(n,e,t,i,s,r,o){let a=new Ge(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function p(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,E=p(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),_=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,_){let E=p(_);E&&(E.isCubeTexture||E.mapping===sa)?(u===void 0&&(u=new Ve(new it(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:As(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Es.copy(_.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(Es)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ve(new Xt(2,2),new _n({name:"BackgroundMaterial",uniforms:As(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,_){b.getRGB(Zc,xd(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,_,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g,dispose:w}}function mM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(v,R,F,Y,Z){let j=!1,J=d(Y,F,R);r!==J&&(r=J,c(r.object)),j=f(v,Y,F,Z),j&&p(v,Y,F,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(v,R,F,Y),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,R,F){let Y=F.wireframe===!0,Z=i[v.id];Z===void 0&&(Z={},i[v.id]=Z);let j=Z[R.id];j===void 0&&(j={},Z[R.id]=j);let J=j[Y];return J===void 0&&(J=h(l()),j[Y]=J),J}function h(v){let R=[],F=[],Y=[];for(let Z=0;Z<t;Z++)R[Z]=0,F[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:Y,object:v,attributes:{},index:null}}function f(v,R,F,Y){let Z=r.attributes,j=R.attributes,J=0,ee=F.getAttributes();for(let G in ee)if(ee[G].location>=0){let fe=Z[G],le=j[G];if(le===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),fe===void 0||fe.attribute!==le||le&&fe.data!==le.data)return!0;J++}return r.attributesNum!==J||r.index!==Y}function p(v,R,F,Y){let Z={},j=R.attributes,J=0,ee=F.getAttributes();for(let G in ee)if(ee[G].location>=0){let fe=j[G];fe===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let le={};le.attribute=fe,fe&&fe.data&&(le.data=fe.data),Z[G]=le,J++}r.attributes=Z,r.attributesNum=J,r.index=Y}function x(){let v=r.newAttributes;for(let R=0,F=v.length;R<F;R++)v[R]=0}function g(v){m(v,0)}function m(v,R){let F=r.newAttributes,Y=r.enabledAttributes,Z=r.attributeDivisors;F[v]=1,Y[v]===0&&(n.enableVertexAttribArray(v),Y[v]=1),Z[v]!==R&&(n.vertexAttribDivisor(v,R),Z[v]=R)}function w(){let v=r.newAttributes,R=r.enabledAttributes;for(let F=0,Y=R.length;F<Y;F++)R[F]!==v[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function b(v,R,F,Y,Z,j,J){J===!0?n.vertexAttribIPointer(v,R,F,Z,j):n.vertexAttribPointer(v,R,F,Y,Z,j)}function _(v,R,F,Y){x();let Z=Y.attributes,j=F.getAttributes(),J=R.defaultAttributeValues;for(let ee in j){let G=j[ee];if(G.location>=0){let te=Z[ee];if(te===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){let fe=te.normalized,le=te.itemSize,me=e.get(te);if(me===void 0)continue;let Ae=me.buffer,Ce=me.type,$=me.bytesPerElement,U=Ce===n.INT||Ce===n.UNSIGNED_INT||te.gpuType===dc;if(te.isInterleavedBufferAttribute){let N=te.data,ae=N.stride,ue=te.offset;if(N.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q,N.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Q=0;Q<G.locationSize;Q++)g(G.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Q=0;Q<G.locationSize;Q++)b(G.location+Q,le/G.locationSize,Ce,fe,ae*$,(ue+le/G.locationSize*Q)*$,U)}else{if(te.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)m(G.location+N,te.meshPerAttribute);v.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let N=0;N<G.locationSize;N++)g(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let N=0;N<G.locationSize;N++)b(G.location+N,le/G.locationSize,Ce,fe,le*$,le/G.locationSize*N*$,U)}}else if(J!==void 0){let fe=J[ee];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(G.location,fe);break;case 3:n.vertexAttrib3fv(G.location,fe);break;case 4:n.vertexAttrib4fv(G.location,fe);break;default:n.vertexAttrib1fv(G.location,fe)}}}}w()}function E(){P();for(let v in i){let R=i[v];for(let F in R){let Y=R[F];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete R[F]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let F in R){let Y=R[F];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete R[F]}delete i[v.id]}function D(v){for(let R in i){let F=i[R];if(F[v.id]===void 0)continue;let Y=F[v.id];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete F[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function gM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*h[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Tn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let P=D===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Bn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ai&&!P)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:E,maxSamples:I}}function yM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Sn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let w=r?0:i,b=w*4,_=m.clippingState||null;l.value=_,_=u(p,h,b,f);for(let E=0;E!==b;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function _M(n){let e=new WeakMap;function t(o,a){return a===Rr?o.mapping=ws:a===uc&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rr||a===uc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ll(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Nr=4,Mm=[.125,.215,.35,.446,.526,.582],Is=20,Sd=new ea,Sm=new Ge,bd=null,wd=0,Td=0,Ad=!1,Rs=(1+Math.sqrt(5))/2,Ur=1/Rs,bm=[new M(-Rs,Ur,0),new M(Rs,Ur,0),new M(-Ur,0,Rs),new M(Ur,0,Rs),new M(0,Rs,-Ur),new M(0,Rs,Ur),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],vM=new M,Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=vM}=r;bd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,wd,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:li,format:Tn,colorSpace:ps,depthBuffer:!1},s=wm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(r)),this._blurMaterial=SM(r,e,t)}return s}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Sd)}_sceneToCubeUV(e,t,i,s,r){let l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Sm),d.toneMapping=Ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new vt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Ve(new it,x),m=!1,w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,m=!0):(x.color.copy(Sm),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let E=this._cubeSize;Jc(s,_*E,b>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ws||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Jc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bm[(s-r-1)%bm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ve(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Is-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let m=[],w=0;for(let D=0;D<Is;++D){let P=D/x,S=Math.exp(-P*P/2);m.push(S),D===0?w+=S:D<g&&(w+=2*S)}for(let D=0;D<m.length;D++)m[D]=m[D]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-i;let _=this._sizeLods[s],E=3*_*(s>b-Nr?s-b+Nr:0),I=4*(this._cubeSize-_);Jc(t,E,I,3*_,2*_),l.setRenderTarget(t),l.render(d,Sd)}};function MM(n){let e=[],t=[],i=[],s=n,r=n-Nr+1+Mm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Nr?l=Mm[o-n+Nr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,x=3,g=2,m=1,w=new Float32Array(x*p*f),b=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let I=0;I<f;I++){let D=I%3*2/3-1,P=I>2?0:-1,S=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];w.set(S,x*p*I),b.set(h,g*p*I);let v=[I,I,I,I,I,I];_.set(v,m*p*I)}let E=new rt;E.setAttribute("position",new Ot(w,x)),E.setAttribute("uv",new Ot(b,g)),E.setAttribute("faceIndex",new Ot(_,m)),e.push(E),s>Nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wm(n,e,t){let i=new wn(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function SM(n,e,t){let i=new Float32Array(Is),s=new M(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Tm(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Am(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function bM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rr||l===uc,u=l===ws||l===Ts;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Br(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Br(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function TM(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let b=0,_=w.length;b<_;b+=3){let E=w[b+0],I=w[b+1],D=w[b+2];h.push(E,I,I,D,D,E)}}else if(p!==void 0){let w=p.array;x=p.version;for(let b=0,_=w.length/3-1;b<_;b+=3){let E=b+0,I=b+1,D=b+2;h.push(E,I,I,D,D,E)}}else return;let g=new(gd(h)?Co:ms)(h,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function AM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,h*o,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function d(h,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,x,0,p);let m=0;for(let w=0;w<p;w++)m+=f[w]*x[w];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function EM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function CM(n,e,t){let i=new WeakMap,s=new ot;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let I=new Float32Array(_*E*4*d),D=new Eo(I,_,E,d);D.type=ai,D.needsUpdate=!0;let P=b*4;for(let v=0;v<d;v++){let R=g[v],F=m[v],Y=w[v],Z=_*E*4*v;for(let j=0;j<R.count;j++){let J=j*P;f===!0&&(s.fromBufferAttribute(R,j),I[Z+J+0]=s.x,I[Z+J+1]=s.y,I[Z+J+2]=s.z,I[Z+J+3]=0),p===!0&&(s.fromBufferAttribute(F,j),I[Z+J+4]=s.x,I[Z+J+5]=s.y,I[Z+J+6]=s.z,I[Z+J+7]=0),x===!0&&(s.fromBufferAttribute(Y,j),I[Z+J+8]=s.x,I[Z+J+9]=s.y,I[Z+J+10]=s.z,I[Z+J+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:D,size:new be(_,E)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function RM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Xm=new cn,Em=new No(1,1),qm=new Eo,Ym=new Il,Zm=new Io,Cm=[],Rm=[],Im=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function Or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Cm[s];if(r===void 0&&(r=new Float32Array(s),Cm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=Rm[e];t===void 0&&(t=new Int32Array(e),Rm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function UM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Lm.set(i),n.uniformMatrix2fv(this.addr,!1,Lm),Zt(t,i)}}function NM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Pm.set(i),n.uniformMatrix3fv(this.addr,!1,Pm),Zt(t,i)}}function FM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Im.set(i),n.uniformMatrix4fv(this.addr,!1,Im),Zt(t,i)}}function BM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function zM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function VM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function kM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function HM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function WM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function XM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Em.compareFunction=fd,r=Em):r=Xm,t.setTexture2D(e||r,s)}function qM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ym,s)}function YM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zm,s)}function ZM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qm,s)}function JM(n){switch(n){case 5126:return IM;case 35664:return PM;case 35665:return LM;case 35666:return DM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return BM;case 35667:case 35671:return OM;case 35668:case 35672:return zM;case 35669:case 35673:return VM;case 5125:return kM;case 36294:return GM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return ZM}}function jM(n,e){n.uniform1fv(this.addr,e)}function KM(n,e){let t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function $M(n,e){let t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function QM(n,e){let t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function eS(n,e){let t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tS(n,e){let t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nS(n,e){let t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iS(n,e){n.uniform1iv(this.addr,e)}function sS(n,e){n.uniform2iv(this.addr,e)}function rS(n,e){n.uniform3iv(this.addr,e)}function oS(n,e){n.uniform4iv(this.addr,e)}function aS(n,e){n.uniform1uiv(this.addr,e)}function lS(n,e){n.uniform2uiv(this.addr,e)}function cS(n,e){n.uniform3uiv(this.addr,e)}function uS(n,e){n.uniform4uiv(this.addr,e)}function hS(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xm,r[o])}function dS(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ym,r[o])}function fS(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zm,r[o])}function pS(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qm,r[o])}function mS(n){switch(n){case 5126:return jM;case 35664:return KM;case 35665:return $M;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}var Cd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}},Rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}},Id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ed=/(\w+)(\])?(\[|\.)?/g;function Dm(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){let i=n.name,s=i.length;for(Ed.lastIndex=0;;){let r=Ed.exec(i),o=Ed.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dm(t,c===void 0?new Cd(a,n,e):new Rd(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Id(a),Dm(t,d)),t=d}}}var Fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Um(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xS=37297,yS=0;function _S(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Nm=new $e;function vS(n){at._getMatrix(Nm,at.workingColorSpace,n);let e=`mat3( ${Nm.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case To:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_S(n.getShaderSource(e),a)}else return r}function MS(n,e){let t=vS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SS(n,e){let t;switch(e){case Jp:t="Linear";break;case jp:t="Reinhard";break;case Kp:t="Cineon";break;case cc:t="ACESFilmic";break;case Qp:t="AgX";break;case em:t="Neutral";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new M;function bS(){at.getLuminanceCoefficients(jc);let n=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function TS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ua(n){return n!==""}function Bm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(n){return n.replace(ES,RS)}var CS=new Map;function RS(n,e){let t=et[e];if(t===void 0){let i=CS.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}var IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(n){return n.replace(IS,PS)}function PS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function LS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ia?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function DS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function US(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function NS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function FS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=LS(t),c=DS(t),u=US(t),d=NS(t),h=FS(t),f=wS(t),p=TS(r),x=s.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ua).join(`
`),m.length>0&&(m+=`
`)):(g=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),m=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?et.tonemapping_pars_fragment:"",t.toneMapping!==Ti?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=Pd(o),o=Bm(o,t),o=Om(o,t),a=Pd(a),a=Bm(a,t),a=Om(a,t),o=zm(o),a=zm(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=w+g+o,_=w+m+a,E=Um(s,s.VERTEX_SHADER,b),I=Um(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(R){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(E)||"",Z=s.getShaderInfoLog(I)||"",j=F.trim(),J=Y.trim(),ee=Z.trim(),G=!0,te=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,I);else{let fe=Fm(s,E,"vertex"),le=Fm(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+fe+`
`+le)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(J===""||ee==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:j,vertexShader:{log:J,prefix:g},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(E),s.deleteShader(I),P=new Fr(s,x),S=AS(s,x)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,xS)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=I,this}var OS=0,Ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Dd(e),t.set(e,i)),i}},Dd=class{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}};function zS(n,e,t,i,s,r,o){let a=new xr,l=new Ld,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,v,R,F,Y){let Z=F.fog,j=Y.geometry,J=S.isMeshStandardMaterial?F.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),G=ee&&ee.mapping===sa?ee.image.height:null,te=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=fe!==void 0?fe.length:0,me=0;j.morphAttributes.position!==void 0&&(me=1),j.morphAttributes.normal!==void 0&&(me=2),j.morphAttributes.color!==void 0&&(me=3);let Ae,Ce,$,U;if(te){let ht=ci[te];Ae=ht.vertexShader,Ce=ht.fragmentShader}else Ae=S.vertexShader,Ce=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),U=l.getFragmentShaderID(S);let N=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),ue=Y.isInstancedMesh===!0,Q=Y.isBatchedMesh===!0,Me=!!S.map,Pe=!!S.matcap,T=!!ee,V=!!S.aoMap,B=!!S.lightMap,k=!!S.bumpMap,z=!!S.normalMap,re=!!S.displacementMap,ie=!!S.emissiveMap,de=!!S.metalnessMap,Ue=!!S.roughnessMap,Ne=S.anisotropy>0,C=S.clearcoat>0,y=S.dispersion>0,L=S.iridescence>0,H=S.sheen>0,oe=S.transmission>0,W=Ne&&!!S.anisotropyMap,ge=C&&!!S.clearcoatMap,he=C&&!!S.clearcoatNormalMap,xe=C&&!!S.clearcoatRoughnessMap,ye=L&&!!S.iridescenceMap,ce=L&&!!S.iridescenceThicknessMap,we=H&&!!S.sheenColorMap,Be=H&&!!S.sheenRoughnessMap,_e=!!S.specularMap,Te=!!S.specularColorMap,ke=!!S.specularIntensityMap,O=oe&&!!S.transmissionMap,Se=oe&&!!S.thicknessMap,Re=!!S.gradientMap,De=!!S.alphaMap,ve=S.alphaTest>0,pe=!!S.alphaHash,ze=!!S.extensions,Ke=Ti;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let bt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Ae,fragmentShader:Ce,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:U,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Q,batchingColor:Q&&Y._colorsTexture!==null,instancing:ue,instancingColor:ue&&Y.instanceColor!==null,instancingMorph:ue&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ps,alphaToCoverage:!!S.alphaToCoverage,map:Me,matcap:Pe,envMap:T,envMapMode:T&&ee.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:B,bumpMap:k,normalMap:z,displacementMap:h&&re,emissiveMap:ie,normalMapObjectSpace:z&&S.normalMapType===sm,normalMapTangentSpace:z&&S.normalMapType===qc,metalnessMap:de,roughnessMap:Ue,anisotropy:Ne,anisotropyMap:W,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:he,clearcoatRoughnessMap:xe,dispersion:y,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:we,sheenRoughnessMap:Be,specularMap:_e,specularColorMap:Te,specularIntensityMap:ke,transmission:oe,transmissionMap:O,thicknessMap:Se,gradientMap:Re,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:S.combine,mapUv:Me&&x(S.map.channel),aoMapUv:V&&x(S.aoMap.channel),lightMapUv:B&&x(S.lightMap.channel),bumpMapUv:k&&x(S.bumpMap.channel),normalMapUv:z&&x(S.normalMap.channel),displacementMapUv:re&&x(S.displacementMap.channel),emissiveMapUv:ie&&x(S.emissiveMap.channel),metalnessMapUv:de&&x(S.metalnessMap.channel),roughnessMapUv:Ue&&x(S.roughnessMap.channel),anisotropyMapUv:W&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(S.sheenRoughnessMap.channel),specularMapUv:_e&&x(S.specularMap.channel),specularColorMapUv:Te&&x(S.specularColorMap.channel),specularIntensityMapUv:ke&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:Se&&x(S.thicknessMap.channel),alphaMapUv:De&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(z||Ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(Me||De),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kt,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function w(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let v=p[S.type],R;if(v){let F=ci[v];R=Yc.clone(F.uniforms)}else R=S.uniforms;return R}function E(S,v){let R;for(let F=0,Y=u.length;F<Y;F++){let Z=u[F];if(Z.cacheKey===v){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new BS(n,v,S,r),u.push(R)),R}function I(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:E,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:P}}function VS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function kS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function km(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,h,f,p,x,g){let m=o(d,h,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,h,f,p,x,g){let m=o(d,h,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||kS),i.length>1&&i.sort(h||km),s.length>1&&s.sort(h||km)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function GS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Gm,n.set(i,[o])):s>=r.length?(o=new Gm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ge};break;case"SpotLight":t={position:new M,direction:new M,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function WS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var XS=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YS(n){let e=new HS,t=WS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new ct,o=new ct;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,w=0,b=0,_=0,E=0,I=0,D=0;c.sort(qS);for(let S=0,v=c.length;S<v;S++){let R=c[S],F=R.color,Y=R.intensity,Z=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*Y,d+=F.g*Y,h+=F.b*Y;else if(R.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(R.sh.coefficients[J],Y);D++}else if(R.isDirectionalLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,G=t.get(R);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=R.shadow.matrix,w++}i.directional[f]=J,f++}else if(R.isSpotLight){let J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(F).multiplyScalar(Y),J.distance=Z,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,i.spot[x]=J;let ee=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,ee.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[x]=ee.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=j,_++}x++}else if(R.isRectAreaLight){let J=e.get(R);J.color.copy(F).multiplyScalar(Y),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=J,g++}else if(R.isPointLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let ee=R.shadow,G=t.get(R);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=R.shadow.matrix,b++}i.point[p]=J,p++}else if(R.isHemisphereLight){let J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(Y),J.groundColor.copy(R.groundColor).multiplyScalar(Y),i.hemi[m]=J,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,P.directionalLength=f,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=D,i.version=XS++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let b=c[m];if(b.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(b.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Hm(n){let e=new YS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ZS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hm(n),e.set(s,[a])):r>=o.length?(a=new Hm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
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
}`;function KS(n,e,t){let i=new Mr,s=new be,r=new be,o=new ot,a=new Gl({depthPacking:im}),l=new Hl,c={},u=t.maxTextureSize,d={[Mi]:on,[on]:Mi,[kt]:kt},h=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:JS,fragmentShader:jS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new rt;p.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ve(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let m=this.type;this.render=function(I,D,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=m!==ri&&this.type===ri,Z=m===ri&&this.type!==ri;for(let j=0,J=I.length;j<J;j++){let ee=I[j],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();if(s.multiply(te),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||Y===!0||Z===!0){let le=this.type!==ri?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new wn(s.x,s.y,le),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let fe=G.getViewportCount();for(let le=0;le<fe;le++){let me=G.getViewport(le);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),F.viewport(o),G.updateMatrices(ee,le),i=G.getFrustum(),_(D,P,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&w(G,P),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,v,R)};function w(I,D){let P=e.update(x);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new wn(s.x,s.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,P,h,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,P,f,x,null)}function b(I,D,P,S){let v=null,R=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let F=v.uuid,Y=D.uuid,Z=c[F];Z===void 0&&(Z={},c[F]=Z);let j=Z[Y];j===void 0&&(j=v.clone(),Z[Y]=j,D.addEventListener("dispose",E)),v=j}if(v.visible=D.visible,v.wireframe=D.wireframe,S===ri?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:d[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=n.properties.get(v);F.light=P}return v}function _(I,D,P,S,v){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===ri)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);let Y=e.update(I),Z=I.material;if(Array.isArray(Z)){let j=Y.groups;for(let J=0,ee=j.length;J<ee;J++){let G=j[J],te=Z[G.materialIndex];if(te&&te.visible){let fe=b(I,te,S,v);I.onBeforeShadow(n,I,D,P,Y,fe,G),n.renderBufferDirect(P,null,Y,fe,I,G),I.onAfterShadow(n,I,D,P,Y,fe,G)}}}else if(Z.visible){let j=b(I,Z,S,v);I.onBeforeShadow(n,I,D,P,Y,j,null),n.renderBufferDirect(P,null,Y,j,I,null),I.onAfterShadow(n,I,D,P,Y,j,null)}}let F=I.children;for(let Y=0,Z=F.length;Y<Z;Y++)_(F[Y],D,P,S,v)}function E(I){I.target.removeEventListener("dispose",E);for(let P in c){let S=c[P],v=I.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var $S={[tc]:nc,[ic]:oc,[sc]:ac,[fs]:rc,[nc]:tc,[oc]:ic,[ac]:sc,[rc]:fs};function QS(n,e){function t(){let O=!1,Se=new ot,Re=null,De=new ot(0,0,0,0);return{setMask:function(ve){Re!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),Re=ve)},setLocked:function(ve){O=ve},setClear:function(ve,pe,ze,Ke,bt){bt===!0&&(ve*=Ke,pe*=Ke,ze*=Ke),Se.set(ve,pe,ze,Ke),De.equals(Se)===!1&&(n.clearColor(ve,pe,ze,Ke),De.copy(Se))},reset:function(){O=!1,Re=null,De.set(-1,0,0,0)}}}function i(){let O=!1,Se=!1,Re=null,De=null,ve=null;return{setReversed:function(pe){if(Se!==pe){let ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Se=pe;let Ke=ve;ve=null,this.setClear(Ke)}},getReversed:function(){return Se},setTest:function(pe){pe?N(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!O&&(n.depthMask(pe),Re=pe)},setFunc:function(pe){if(Se&&(pe=$S[pe]),De!==pe){switch(pe){case tc:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=pe}},setLocked:function(pe){O=pe},setClear:function(pe){ve!==pe&&(Se&&(pe=1-pe),n.clearDepth(pe),ve=pe)},reset:function(){O=!1,Re=null,De=null,ve=null,Se=!1}}}function s(){let O=!1,Se=null,Re=null,De=null,ve=null,pe=null,ze=null,Ke=null,bt=null;return{setTest:function(ht){O||(ht?N(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!O&&(n.stencilMask(ht),Se=ht)},setFunc:function(ht,pi,ti){(Re!==ht||De!==pi||ve!==ti)&&(n.stencilFunc(ht,pi,ti),Re=ht,De=pi,ve=ti)},setOp:function(ht,pi,ti){(pe!==ht||ze!==pi||Ke!==ti)&&(n.stencilOp(ht,pi,ti),pe=ht,ze=pi,Ke=ti)},setLocked:function(ht){O=ht},setClear:function(ht){bt!==ht&&(n.clearStencil(ht),bt=ht)},reset:function(){O=!1,Se=null,Re=null,De=null,ve=null,pe=null,ze=null,Ke=null,bt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,f=[],p=null,x=!1,g=null,m=null,w=null,b=null,_=null,E=null,I=null,D=new Ge(0,0,0),P=0,S=!1,v=null,R=null,F=null,Y=null,Z=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ee=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=ee>=2);let te=null,fe={},le=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Ae=new ot().fromArray(le),Ce=new ot().fromArray(me);function $(O,Se,Re,De){let ve=new Uint8Array(4),pe=n.createTexture();n.bindTexture(O,pe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Re;ze++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Se+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return pe}let U={};U[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(fs),k(!1),z(td),N(n.CULL_FACE),V(wi);function N(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ae(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ue(O,Se){return d[O]!==Se?(n.bindFramebuffer(O,Se),d[O]=Se,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Q(O,Se){let Re=f,De=!1;if(O){Re=h.get(Se),Re===void 0&&(Re=[],h.set(Se,Re));let ve=O.textures;if(Re.length!==ve.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ve.length;pe<ze;pe++)Re[pe]=n.COLOR_ATTACHMENT0+pe;Re.length=ve.length,De=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,De=!0);De&&n.drawBuffers(Re)}function Me(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Pe={[Gi]:n.FUNC_ADD,[Ip]:n.FUNC_SUBTRACT,[Pp]:n.FUNC_REVERSE_SUBTRACT};Pe[Lp]=n.MIN,Pe[Dp]=n.MAX;let T={[Up]:n.ZERO,[Np]:n.ONE,[Fp]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Gp]:n.SRC_ALPHA_SATURATE,[Vp]:n.DST_COLOR,[Op]:n.DST_ALPHA,[Bp]:n.ONE_MINUS_SRC_COLOR,[wl]:n.ONE_MINUS_SRC_ALPHA,[kp]:n.ONE_MINUS_DST_COLOR,[zp]:n.ONE_MINUS_DST_ALPHA,[Hp]:n.CONSTANT_COLOR,[Wp]:n.ONE_MINUS_CONSTANT_COLOR,[Xp]:n.CONSTANT_ALPHA,[qp]:n.ONE_MINUS_CONSTANT_ALPHA};function V(O,Se,Re,De,ve,pe,ze,Ke,bt,ht){if(O===wi){x===!0&&(ae(n.BLEND),x=!1);return}if(x===!1&&(N(n.BLEND),x=!0),O!==Rp){if(O!==g||ht!==S){if((m!==Gi||_!==Gi)&&(n.blendEquation(n.FUNC_ADD),m=Gi,_=Gi),ht)switch(O){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFunc(n.ONE,n.ONE);break;case nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case id:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case id:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,b=null,E=null,I=null,D.set(0,0,0),P=0,g=O,S=ht}return}ve=ve||Se,pe=pe||Re,ze=ze||De,(Se!==m||ve!==_)&&(n.blendEquationSeparate(Pe[Se],Pe[ve]),m=Se,_=ve),(Re!==w||De!==b||pe!==E||ze!==I)&&(n.blendFuncSeparate(T[Re],T[De],T[pe],T[ze]),w=Re,b=De,E=pe,I=ze),(Ke.equals(D)===!1||bt!==P)&&(n.blendColor(Ke.r,Ke.g,Ke.b,bt),D.copy(Ke),P=bt),g=O,S=!1}function B(O,Se){O.side===kt?ae(n.CULL_FACE):N(n.CULL_FACE);let Re=O.side===on;Se&&(Re=!Re),k(Re),O.blending===ds&&O.transparent===!1?V(wi):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let De=O.stencilWrite;a.setTest(De),De&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(O){v!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),v=O)}function z(O){O!==Ap?(N(n.CULL_FACE),O!==R&&(O===td?n.cullFace(n.BACK):O===Ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),R=O}function re(O){O!==F&&(J&&n.lineWidth(O),F=O)}function ie(O,Se,Re){O?(N(n.POLYGON_OFFSET_FILL),(Y!==Se||Z!==Re)&&(n.polygonOffset(Se,Re),Y=Se,Z=Re)):ae(n.POLYGON_OFFSET_FILL)}function de(O){O?N(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function Ue(O){O===void 0&&(O=n.TEXTURE0+j-1),te!==O&&(n.activeTexture(O),te=O)}function Ne(O,Se,Re){Re===void 0&&(te===null?Re=n.TEXTURE0+j-1:Re=te);let De=fe[Re];De===void 0&&(De={type:void 0,texture:void 0},fe[Re]=De),(De.type!==O||De.texture!==Se)&&(te!==Re&&(n.activeTexture(Re),te=Re),n.bindTexture(O,Se||U[O]),De.type=O,De.texture=Se)}function C(){let O=fe[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){Ae.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ae.copy(O))}function Be(O){Ce.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ce.copy(O))}function _e(O,Se){let Re=c.get(Se);Re===void 0&&(Re=new WeakMap,c.set(Se,Re));let De=Re.get(O);De===void 0&&(De=n.getUniformBlockIndex(Se,O.name),Re.set(O,De))}function Te(O,Se){let De=c.get(Se).get(O);l.get(Se)!==De&&(n.uniformBlockBinding(Se,De,O.__bindingPointIndex),l.set(Se,De))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,fe={},d={},h=new WeakMap,f=[],p=null,x=!1,g=null,m=null,w=null,b=null,_=null,E=null,I=null,D=new Ge(0,0,0),P=0,S=!1,v=null,R=null,F=null,Y=null,Z=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:ae,bindFramebuffer:ue,drawBuffers:Q,useProgram:Me,setBlending:V,setMaterial:B,setFlipSided:k,setCullFace:z,setLineWidth:re,setPolygonOffset:ie,setScissorTest:de,activeTexture:Ue,bindTexture:Ne,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ye,texImage3D:ce,updateUBOMapping:_e,uniformBlockBinding:Te,texStorage2D:he,texStorage3D:xe,texSubImage2D:H,texSubImage3D:oe,compressedTexSubImage2D:W,compressedTexSubImage3D:ge,scissor:we,viewport:Be,reset:ke}}function eb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return f?new OffscreenCanvas(C,y):fr("canvas")}function x(C,y,L){let H=1,oe=Ne(C);if((oe.width>L||oe.height>L)&&(H=L/Math.max(oe.width,oe.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(H*oe.width),ge=Math.floor(H*oe.height);d===void 0&&(d=p(W,ge));let he=y?p(W,ge):d;return he.width=W,he.height=ge,he.getContext("2d").drawImage(C,0,0,W,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+W+"x"+ge+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,y,L,H,oe=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=y;if(y===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),y===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),y===n.RGBA){let ge=oe?To:at.getTransfer(H);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=ge===pt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function _(C,y){let L;return C?y===null||y===Xi||y===Pr?L=n.DEPTH24_STENCIL8:y===ai?L=n.DEPTH32F_STENCIL8:y===Ir&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===Pr?L=n.DEPTH_COMPONENT24:y===ai?L=n.DEPTH_COMPONENT32F:y===Ir&&(L=n.DEPTH_COMPONENT16),L}function E(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function I(C){let y=C.target;y.removeEventListener("dispose",I),P(y),y.isVideoTexture&&u.delete(y)}function D(C){let y=C.target;y.removeEventListener("dispose",D),v(y)}function P(C){let y=i.get(C);if(y.__webglInit===void 0)return;let L=C.source,H=h.get(L);if(H){let oe=H[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(C),Object.keys(H).length===0&&h.delete(L)}i.remove(C)}function S(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let L=C.source,H=h.get(L);delete H[y.__cacheKey],o.memory.textures--}function v(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let oe=0;oe<y.__webglFramebuffer[H].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[H][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=C.textures;for(let H=0,oe=L.length;H<oe;H++){let W=i.get(L[H]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(L[H])}i.remove(C)}let R=0;function F(){R=0}function Y(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function Z(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){let L=i.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&L.__version!==C.version){let H=C.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(L,C,y);return}}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function J(C,y){let L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){U(L,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function ee(C,y){let L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){U(L,C,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function G(C,y){let L=i.get(C);if(C.version>0&&L.__version!==C.version){N(L,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let te={[si]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},fe={[sn]:n.NEAREST,[tm]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[hc]:n.LINEAR_MIPMAP_NEAREST,[Hn]:n.LINEAR_MIPMAP_LINEAR},le={[rm]:n.NEVER,[hm]:n.ALWAYS,[om]:n.LESS,[fd]:n.LEQUAL,[am]:n.EQUAL,[um]:n.GEQUAL,[lm]:n.GREATER,[cm]:n.NOTEQUAL};function me(C,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===yn||y.magFilter===hc||y.magFilter===ra||y.magFilter===Hn||y.minFilter===yn||y.minFilter===hc||y.minFilter===ra||y.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,te[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==ra&&y.minFilter!==Hn||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(C,y){let L=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",I));let H=y.source,oe=h.get(H);oe===void 0&&(oe={},h.set(H,oe));let W=Z(y);if(W!==C.__cacheKey){oe[W]===void 0&&(oe[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),oe[W].usedTimes++;let ge=oe[C.__cacheKey];ge!==void 0&&(oe[C.__cacheKey].usedTimes--,ge.usedTimes===0&&S(y)),C.__cacheKey=W,C.__webglTexture=oe[W].texture}return L}function Ce(C,y,L){return Math.floor(Math.floor(C/L)/y)}function $(C,y,L,H){let W=C.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,H,y.data);else{W.sort((ce,we)=>ce.start-we.start);let ge=0;for(let ce=1;ce<W.length;ce++){let we=W[ge],Be=W[ce],_e=we.start+we.count,Te=Ce(Be.start,y.width,4),ke=Ce(we.start,y.width,4);Be.start<=_e+1&&Te===ke&&Ce(Be.start+Be.count-1,y.width,4)===Te?we.count=Math.max(we.count,Be.start+Be.count-we.start):(++ge,W[ge]=Be)}W.length=ge+1;let he=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ce=0,we=W.length;ce<we;ce++){let Be=W[ce],_e=Math.floor(Be.start/4),Te=Math.ceil(Be.count/4),ke=_e%y.width,O=Math.floor(_e/y.width),Se=Te,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,ke,O,Se,Re,L,H,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function U(C,y,L){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);let oe=Ae(C,y),W=y.source;t.bindTexture(H,C.__webglTexture,n.TEXTURE0+L);let ge=i.get(W);if(W.version!==ge.__version||oe===!0){t.activeTexture(n.TEXTURE0+L);let he=at.getPrimaries(at.workingColorSpace),xe=y.colorSpace===Ai?null:at.getPrimaries(y.colorSpace),ye=y.colorSpace===Ai||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ce=x(y.image,!1,s.maxTextureSize);ce=Ue(y,ce);let we=r.convert(y.format,y.colorSpace),Be=r.convert(y.type),_e=b(y.internalFormat,we,Be,y.colorSpace,y.isVideoTexture);me(H,y);let Te,ke=y.mipmaps,O=y.isVideoTexture!==!0,Se=ge.__version===void 0||oe===!0,Re=W.dataReady,De=E(y,ce);if(y.isDepthTexture)_e=_(y.format===Lr,y.type),Se&&(O?t.texStorage2D(n.TEXTURE_2D,1,_e,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,_e,ce.width,ce.height,0,we,Be,null));else if(y.isDataTexture)if(ke.length>0){O&&Se&&t.texStorage2D(n.TEXTURE_2D,De,_e,ke[0].width,ke[0].height);for(let ve=0,pe=ke.length;ve<pe;ve++)Te=ke[ve],O?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,we,Be,Te.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Te.width,Te.height,0,we,Be,Te.data);y.generateMipmaps=!1}else O?(Se&&t.texStorage2D(n.TEXTURE_2D,De,_e,ce.width,ce.height),Re&&$(y,ce,we,Be)):t.texImage2D(n.TEXTURE_2D,0,_e,ce.width,ce.height,0,we,Be,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,_e,ke[0].width,ke[0].height,ce.depth);for(let ve=0,pe=ke.length;ve<pe;ve++)if(Te=ke[ve],y.format!==Tn)if(we!==null)if(O){if(Re)if(y.layerUpdates.size>0){let ze=Md(Te.width,Te.height,y.format,y.type);for(let Ke of y.layerUpdates){let bt=Te.data.subarray(Ke*ze/Te.data.BYTES_PER_ELEMENT,(Ke+1)*ze/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ke,Te.width,Te.height,1,we,bt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,ce.depth,we,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Te.width,Te.height,ce.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,ce.depth,we,Be,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Te.width,Te.height,ce.depth,0,we,Be,Te.data)}else{O&&Se&&t.texStorage2D(n.TEXTURE_2D,De,_e,ke[0].width,ke[0].height);for(let ve=0,pe=ke.length;ve<pe;ve++)Te=ke[ve],y.format!==Tn?we!==null?O?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,_e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,we,Be,Te.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Te.width,Te.height,0,we,Be,Te.data)}else if(y.isDataArrayTexture)if(O){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,_e,ce.width,ce.height,ce.depth),Re)if(y.layerUpdates.size>0){let ve=Md(ce.width,ce.height,y.format,y.type);for(let pe of y.layerUpdates){let ze=ce.data.subarray(pe*ve/ce.data.BYTES_PER_ELEMENT,(pe+1)*ve/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,we,Be,ze)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,we,Be,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ce.width,ce.height,ce.depth,0,we,Be,ce.data);else if(y.isData3DTexture)O?(Se&&t.texStorage3D(n.TEXTURE_3D,De,_e,ce.width,ce.height,ce.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,we,Be,ce.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ce.width,ce.height,ce.depth,0,we,Be,ce.data);else if(y.isFramebufferTexture){if(Se)if(O)t.texStorage2D(n.TEXTURE_2D,De,_e,ce.width,ce.height);else{let ve=ce.width,pe=ce.height;for(let ze=0;ze<De;ze++)t.texImage2D(n.TEXTURE_2D,ze,_e,ve,pe,0,we,Be,null),ve>>=1,pe>>=1}}else if(ke.length>0){if(O&&Se){let ve=Ne(ke[0]);t.texStorage2D(n.TEXTURE_2D,De,_e,ve.width,ve.height)}for(let ve=0,pe=ke.length;ve<pe;ve++)Te=ke[ve],O?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,we,Be,Te):t.texImage2D(n.TEXTURE_2D,ve,_e,we,Be,Te);y.generateMipmaps=!1}else if(O){if(Se){let ve=Ne(ce);t.texStorage2D(n.TEXTURE_2D,De,_e,ve.width,ve.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Be,ce)}else t.texImage2D(n.TEXTURE_2D,0,_e,we,Be,ce);g(y)&&m(H),ge.__version=W.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function N(C,y,L){if(y.image.length!==6)return;let H=Ae(C,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+L);let W=i.get(oe);if(oe.version!==W.__version||H===!0){t.activeTexture(n.TEXTURE0+L);let ge=at.getPrimaries(at.workingColorSpace),he=y.colorSpace===Ai?null:at.getPrimaries(y.colorSpace),xe=y.colorSpace===Ai||ge===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,we=[];for(let pe=0;pe<6;pe++)!ye&&!ce?we[pe]=x(y.image[pe],!0,s.maxCubemapSize):we[pe]=ce?y.image[pe].image:y.image[pe],we[pe]=Ue(y,we[pe]);let Be=we[0],_e=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),ke=b(y.internalFormat,_e,Te,y.colorSpace),O=y.isVideoTexture!==!0,Se=W.__version===void 0||H===!0,Re=oe.dataReady,De=E(y,Be);me(n.TEXTURE_CUBE_MAP,y);let ve;if(ye){O&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ke,Be.width,Be.height);for(let pe=0;pe<6;pe++){ve=we[pe].mipmaps;for(let ze=0;ze<ve.length;ze++){let Ke=ve[ze];y.format!==Tn?_e!==null?O?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,0,0,Ke.width,Ke.height,_e,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,ke,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,0,0,Ke.width,Ke.height,_e,Te,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,ke,Ke.width,Ke.height,0,_e,Te,Ke.data)}}}else{if(ve=y.mipmaps,O&&Se){ve.length>0&&De++;let pe=Ne(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ke,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,we[pe].width,we[pe].height,_e,Te,we[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ke,we[pe].width,we[pe].height,0,_e,Te,we[pe].data);for(let ze=0;ze<ve.length;ze++){let bt=ve[ze].image[pe].image;O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,0,0,bt.width,bt.height,_e,Te,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,ke,bt.width,bt.height,0,_e,Te,bt.data)}}else{O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,_e,Te,we[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ke,_e,Te,we[pe]);for(let ze=0;ze<ve.length;ze++){let Ke=ve[ze];O?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,0,0,_e,Te,Ke.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,ke,_e,Te,Ke.image[pe])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),W.__version=oe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ae(C,y,L,H,oe,W){let ge=r.convert(L.format,L.colorSpace),he=r.convert(L.type),xe=b(L.internalFormat,ge,he,L.colorSpace),ye=i.get(y),ce=i.get(L);if(ce.__renderTarget=y,!ye.__hasExternalTextures){let we=Math.max(1,y.width>>W),Be=Math.max(1,y.height>>W);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,W,xe,we,Be,y.depth,0,ge,he,null):t.texImage2D(oe,W,xe,we,Be,0,ge,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,oe,ce.__webglTexture,0,re(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,oe,ce.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let H=y.depthTexture,oe=H&&H.isDepthTexture?H.type:null,W=_(y.stencilBuffer,oe),ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=re(y);ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,W,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,C)}else{let H=y.textures;for(let oe=0;oe<H.length;oe++){let W=H[oe],ge=r.convert(W.format,W.colorSpace),he=r.convert(W.type),xe=b(W.internalFormat,ge,he,W.colorSpace),ye=re(y);L&&ie(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,xe,y.width,y.height):ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let oe=H.__webglTexture,W=re(y);if(y.depthTexture.format===hr)ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(y.depthTexture.format===Lr)ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Me(C){let y=i.get(C),L=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",oe)};H.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=H}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let H=C.texture.mipmaps;H&&H.length>0?Q(y.__webglFramebuffer[0],C):Q(y.__webglFramebuffer,C)}else if(L){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),ue(y.__webglDepthbuffer[H],C,!1);else{let oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,W)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ue(y.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(C,y,L){let H=i.get(C);y!==void 0&&ae(H.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Me(C)}function T(C){let y=C.texture,L=i.get(C),H=i.get(y);C.addEventListener("dispose",D);let oe=C.textures,W=C.isWebGLCubeRenderTarget===!0,ge=oe.length>1;if(ge||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let xe=0;xe<y.mipmaps.length;xe++)L.__webglFramebuffer[he][xe]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ge)for(let he=0,xe=oe.length;he<xe;he++){let ye=i.get(oe[he]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ie(C)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){let xe=oe[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);let ye=r.convert(xe.format,xe.colorSpace),ce=r.convert(xe.type),we=b(xe.internalFormat,ye,ce,xe.colorSpace,C.isXRRenderTarget===!0),Be=re(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,we,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(L.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),me(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ae(L.__webglFramebuffer[he][xe],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else ae(L.__webglFramebuffer[he],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let he=0,xe=oe.length;he<xe;he++){let ye=oe[he],ce=i.get(ye),we=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(we=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ce.__webglTexture),me(we,ye),ae(L.__webglFramebuffer,C,ye,n.COLOR_ATTACHMENT0+he,we,0),g(ye)&&m(we)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),me(he,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ae(L.__webglFramebuffer[xe],C,y,n.COLOR_ATTACHMENT0,he,xe);else ae(L.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,he,0);g(y)&&m(he),t.unbindTexture()}C.depthBuffer&&Me(C)}function V(C){let y=C.textures;for(let L=0,H=y.length;L<H;L++){let oe=y[L];if(g(oe)){let W=w(C),ge=i.get(oe).__webglTexture;t.bindTexture(W,ge),m(W),t.unbindTexture()}}}let B=[],k=[];function z(C){if(C.samples>0){if(ie(C)===!1){let y=C.textures,L=C.width,H=C.height,oe=n.COLOR_BUFFER_BIT,W=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(C),he=y.length>1;if(he)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let xe=C.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let ce=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,H,0,0,L,H,oe,n.NEAREST),l===!0&&(B.length=0,k.length=0,B.push(n.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(B.push(W),k.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let ce=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function re(C){return Math.min(s.maxSamples,C.samples)}function ie(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(C){let y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ue(C,y){let L=C.colorSpace,H=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||L!==ps&&L!==Ai&&(at.getTransfer(L)===pt?(H!==Tn||oe!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=T,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ie}function tb(n,e){function t(i,s=Ai){let r,o=at.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rd)return n.BYTE;if(i===od)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===dc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===Tn)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===dd)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===xc)return n.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===_c||i===vc||i===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===bc||i===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===bc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tc||i===Ac||i===Ec||i===Cc||i===Rc||i===Ic||i===Pc||i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Bc||i===Oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Vc||i===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gc||i===Hc||i===Wc||i===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ib=`
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

}`,Ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:nb,fragmentShader:ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nd=class extends Si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Ud,m={},w=t.getContextAttributes(),b=null,_=null,E=[],I=[],D=new be,P=null,S=new Ft;S.viewport=new ot;let v=new Ft;v.viewport=new ot;let R=[S,v],F=new ec,Y=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let N=E[U];return N===void 0&&(N=new yr,E[U]=N),N.getTargetRaySpace()},this.getControllerGrip=function(U){let N=E[U];return N===void 0&&(N=new yr,E[U]=N),N.getGripSpace()},this.getHand=function(U){let N=E[U];return N===void 0&&(N=new yr,E[U]=N),N.getHandSpace()};function j(U){let N=I.indexOf(U.inputSource);if(N===-1)return;let ae=E[N];ae!==void 0&&(ae.update(U.inputSource,U.frame,c||o),ae.dispatchEvent({type:U.type,data:U.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ee);for(let U=0;U<E.length;U++){let N=I[U];N!==null&&(I[U]=null,E[U].disconnect(N))}Y=null,Z=null,g.reset();for(let U in m)delete m[U];e.setRenderTarget(b),f=null,h=null,d=null,s=null,_=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ue=null,Q=null;w.depth&&(Q=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=w.stencil?Lr:hr,ue=w.stencil?Pr:Xi);let Me={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new wn(h.textureWidth,h.textureHeight,{format:Tn,type:Bn,depthTexture:new No(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new wn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(U){for(let N=0;N<U.removed.length;N++){let ae=U.removed[N],ue=I.indexOf(ae);ue>=0&&(I[ue]=null,E[ue].disconnect(ae))}for(let N=0;N<U.added.length;N++){let ae=U.added[N],ue=I.indexOf(ae);if(ue===-1){for(let Me=0;Me<E.length;Me++)if(Me>=I.length){I.push(ae),ue=Me;break}else if(I[Me]===null){I[Me]=ae,ue=Me;break}if(ue===-1)break}let Q=E[ue];Q&&Q.connect(ae)}}let G=new M,te=new M;function fe(U,N,ae){G.setFromMatrixPosition(N.matrixWorld),te.setFromMatrixPosition(ae.matrixWorld);let ue=G.distanceTo(te),Q=N.projectionMatrix.elements,Me=ae.projectionMatrix.elements,Pe=Q[14]/(Q[10]-1),T=Q[14]/(Q[10]+1),V=(Q[9]+1)/Q[5],B=(Q[9]-1)/Q[5],k=(Q[8]-1)/Q[0],z=(Me[8]+1)/Me[0],re=Pe*k,ie=Pe*z,de=ue/(-k+z),Ue=de*-k;if(N.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ue),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Q[10]===-1)U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Ne=Pe+de,C=T+de,y=re-Ue,L=ie+(ue-Ue),H=V*T/C*Ne,oe=B*T/C*Ne;U.projectionMatrix.makePerspective(y,L,H,oe,Ne,C),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function le(U,N){N===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(N.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let N=U.near,ae=U.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),F.near=v.near=S.near=N,F.far=v.far=S.far=ae,(Y!==F.near||Z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,Z=F.far),F.layers.mask=U.layers.mask|6,S.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let ue=U.parent,Q=F.cameras;le(F,ue);for(let Me=0;Me<Q.length;Me++)le(Q[Me],ue);Q.length===2?fe(F,S,v):F.projectionMatrix.copy(S.projectionMatrix),me(U,F,ue)};function me(U,N,ae){ae===null?U.matrix.copy(N.matrixWorld):(U.matrix.copy(ae.matrixWorld),U.matrix.invert(),U.matrix.multiply(N.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=dr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(U){return m[U]};let Ae=null;function Ce(U,N){if(u=N.getViewerPose(c||o),p=N,u!==null){let ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,ue=!0);for(let T=0;T<ae.length;T++){let V=ae[T],B=null;if(f!==null)B=f.getViewport(V);else{let z=d.getViewSubImage(h,V);B=z.viewport,T===0&&(e.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(_))}let k=R[T];k===void 0&&(k=new Ft,k.layers.enable(T),k.viewport=new ot,R[T]=k),k.matrix.fromArray(V.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(V.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(B.x,B.y,B.width,B.height),T===0&&(F.matrix.copy(k.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ue===!0&&F.cameras.push(k)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let T=d.getDepthInformation(ae[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<ae.length;T++){let V=ae[T].camera;if(V){let B=m[V];B||(B=new Fo,m[V]=B);let k=d.getCameraImage(V);B.sourceTexture=k}}}}for(let ae=0;ae<E.length;ae++){let ue=I[ae],Q=E[ae];ue!==null&&Q!==void 0&&Q.update(ue,N,c||o)}Ae&&Ae(U,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),p=null}let $=new Wm;$.setAnimationLoop(Ce),this.setAnimationLoop=function(U){Ae=U},this.dispose=function(){}}},Cs=new rn,sb=new ct;function rb(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),b=w.envMap,_=w.envMapRotation;b&&(g.envMap.value=b,Cs.copy(_),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Cs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ob(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let _=b.program;i.uniformBlockBinding(w,_)}function c(w,b){let _=s[w.id];_===void 0&&(p(w),_=u(w),s[w.id]=_,w.addEventListener("dispose",g));let E=b.program;i.updateUBOMapping(w,E);let I=e.render.frame;r[w.id]!==I&&(h(w),r[w.id]=I)}function u(w){let b=d();w.__bindingPointIndex=b;let _=n.createBuffer(),E=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let b=s[w.id],_=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,D=_.length;I<D;I++){let P=Array.isArray(_[I])?_[I]:[_[I]];for(let S=0,v=P.length;S<v;S++){let R=P[S];if(f(R,I,S,E)===!0){let F=R.__offset,Y=Array.isArray(R.value)?R.value:[R.value],Z=0;for(let j=0;j<Y.length;j++){let J=Y[j],ee=x(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,F+Z,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,b,_,E){let I=w.value,D=b+"_"+_;if(E[D]===void 0)return typeof I=="number"||typeof I=="boolean"?E[D]=I:E[D]=I.clone(),!0;{let P=E[D];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return E[D]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function p(w){let b=w.uniforms,_=0,E=16;for(let D=0,P=b.length;D<P;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let v=0,R=S.length;v<R;v++){let F=S[v],Y=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,j=Y.length;Z<j;Z++){let J=Y[Z],ee=x(J),G=_%E,te=G%ee.boundary,fe=G+te;_+=te,fe!==0&&E-fe<ee.storage&&(_+=E-fe),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=ee.storage}}}let I=_%E;return I>0&&(_+=E-I),w.__size=_,w.__cache={},this}function x(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function g(w){let b=w.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Kc=class{constructor(e={}){let{canvas:t=dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=_t;let I=0,D=0,P=null,S=-1,v=null,R=new ot,F=new ot,Y=null,Z=new Ge(0),j=0,J=t.width,ee=t.height,G=1,te=null,fe=null,le=new ot(0,0,J,ee),me=new ot(0,0,J,ee),Ae=!1,Ce=new Mr,$=!1,U=!1,N=new ct,ae=new M,ue=new ot,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Pe(){return P===null?G:1}let T=i;function V(A,X){return t.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ve,!1),T===null){let X="webgl2";if(T=V(X,A),T===null)throw V(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let B,k,z,re,ie,de,Ue,Ne,C,y,L,H,oe,W,ge,he,xe,ye,ce,we,Be,_e,Te,ke;function O(){B=new wM(T),B.init(),_e=new tb(T,B),k=new xM(T,B,e,_e),z=new QS(T,B),k.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),re=new EM(T),ie=new VS,de=new eb(T,B,z,ie,k,_e,re),Ue=new _M(_),Ne=new bM(_),C=new Dy(T),Te=new mM(T,C),y=new TM(T,C,re,Te),L=new RM(T,y,C,re),ce=new CM(T,k,de),he=new yM(ie),H=new zS(_,Ue,Ne,B,k,Te,he),oe=new rb(_,ie),W=new GS,ge=new ZS(B),ye=new pM(_,Ue,Ne,z,L,f,l),xe=new KS(_,L,k),ke=new ob(T,re,k,z),we=new gM(T,B,re),Be=new AM(T,B,re),re.programs=H.programs,_.capabilities=k,_.extensions=B,_.properties=ie,_.renderLists=W,_.shadowMap=xe,_.state=z,_.info=re}O();let Se=new Nd(_,T);this.xr=Se,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=B.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=B.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(J,ee,!1))},this.getSize=function(A){return A.set(J,ee)},this.setSize=function(A,X,ne=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ee=X,t.width=Math.floor(A*G),t.height=Math.floor(X*G),ne===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(J*G,ee*G).floor()},this.setDrawingBufferSize=function(A,X,ne){J=A,ee=X,G=ne,t.width=Math.floor(A*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,ne,se){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,ne,se),z.viewport(R.copy(le).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,X,ne,se){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,X,ne,se),z.scissor(F.copy(me).multiplyScalar(G).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){z.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ne=!0){let se=0;if(A){let q=!1;if(P!==null){let Ee=P.texture.format;q=Ee===xc||Ee===gc||Ee===mc}if(q){let Ee=P.texture.type,Le=Ee===Bn||Ee===Xi||Ee===Ir||Ee===Pr||Ee===fc||Ee===pc,Oe=ye.getClearColor(),Fe=ye.getClearAlpha(),qe=Oe.r,Ye=Oe.g,He=Oe.b;Le?(p[0]=qe,p[1]=Ye,p[2]=He,p[3]=Fe,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=qe,x[1]=Ye,x[2]=He,x[3]=Fe,T.clearBufferiv(T.COLOR,0,x))}else se|=T.COLOR_BUFFER_BIT}X&&(se|=T.DEPTH_BUFFER_BIT),ne&&(se|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),W.dispose(),ge.dispose(),ie.dispose(),Ue.dispose(),Ne.dispose(),L.dispose(),Te.dispose(),ke.dispose(),H.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ti),Se.removeEventListener("sessionend",Gf),rs.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=re.autoReset,X=xe.enabled,ne=xe.autoUpdate,se=xe.needsUpdate,q=xe.type;O(),re.autoReset=A,xe.enabled=X,xe.autoUpdate=ne,xe.needsUpdate=se,xe.type=q}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){let X=A.target;X.removeEventListener("dispose",pe),ze(X)}function ze(A){Ke(A),ie.remove(A)}function Ke(A){let X=ie.get(A).programs;X!==void 0&&(X.forEach(function(ne){H.releaseProgram(ne)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ne,se,q,Ee){X===null&&(X=Q);let Le=q.isMesh&&q.matrixWorld.determinant()<0,Oe=ex(A,X,ne,se,q);z.setMaterial(se,Le);let Fe=ne.index,qe=1;if(se.wireframe===!0){if(Fe=y.getWireframeAttribute(ne),Fe===void 0)return;qe=2}let Ye=ne.drawRange,He=ne.attributes.position,st=Ye.start*qe,gt=(Ye.start+Ye.count)*qe;Ee!==null&&(st=Math.max(st,Ee.start*qe),gt=Math.min(gt,(Ee.start+Ee.count)*qe)),Fe!==null?(st=Math.max(st,0),gt=Math.min(gt,Fe.count)):He!=null&&(st=Math.max(st,0),gt=Math.min(gt,He.count));let Nt=gt-st;if(Nt<0||Nt===1/0)return;Te.setup(q,se,Oe,ne,Fe);let Tt,yt=we;if(Fe!==null&&(Tt=C.get(Fe),yt=Be,yt.setIndex(Tt)),q.isMesh)se.wireframe===!0?(z.setLineWidth(se.wireframeLinewidth*Pe()),yt.setMode(T.LINES)):yt.setMode(T.TRIANGLES);else if(q.isLine){let We=se.linewidth;We===void 0&&(We=1),z.setLineWidth(We*Pe()),q.isLineSegments?yt.setMode(T.LINES):q.isLineLoop?yt.setMode(T.LINE_LOOP):yt.setMode(T.LINE_STRIP)}else q.isPoints?yt.setMode(T.POINTS):q.isSprite&&yt.setMode(T.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let We=q._multiDrawStarts,It=q._multiDrawCounts,lt=q._multiDrawCount,Pn=Fe?C.get(Fe).bytesPerElement:1,Ws=ie.get(se).currentProgram.getUniforms();for(let Ln=0;Ln<lt;Ln++)Ws.setValue(T,"_gl_DrawID",Ln),yt.render(We[Ln]/Pn,It[Ln])}else if(q.isInstancedMesh)yt.renderInstances(st,Nt,q.count);else if(ne.isInstancedBufferGeometry){let We=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,It=Math.min(ne.instanceCount,We);yt.renderInstances(st,Nt,It)}else yt.render(st,Nt)};function bt(A,X,ne){A.transparent===!0&&A.side===kt&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,Ya(A,X,ne),A.side=Mi,A.needsUpdate=!0,Ya(A,X,ne),A.side=kt):Ya(A,X,ne)}this.compile=function(A,X,ne=null){ne===null&&(ne=A),m=ge.get(ne),m.init(X),b.push(m),ne.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==ne&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let se=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let Oe=Ee[Le];bt(Oe,ne,q),se.add(Oe)}else bt(Ee,ne,q),se.add(Ee)}),m=b.pop(),se},this.compileAsync=function(A,X,ne=null){let se=this.compile(A,X,ne);return new Promise(q=>{function Ee(){if(se.forEach(function(Le){ie.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){q(A);return}setTimeout(Ee,10)}B.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ht=null;function pi(A){ht&&ht(A)}function ti(){rs.stop()}function Gf(){rs.start()}let rs=new Wm;rs.setAnimationLoop(pi),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(A){ht=A,Se.setAnimationLoop(A),A===null?rs.stop():rs.start()},Se.addEventListener("sessionstart",ti),Se.addEventListener("sessionend",Gf),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(X),X=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,X,P),m=ge.get(A,b.length),m.init(X),b.push(m),N.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ce.setFromProjectionMatrix(N,Kn,X.reversedDepth),U=this.localClippingEnabled,$=he.init(this.clippingPlanes,U),g=W.get(A,w.length),g.init(),w.push(g),Se.enabled===!0&&Se.isPresenting===!0){let Ee=_.xr.getDepthSensingMesh();Ee!==null&&dh(Ee,X,-1/0,_.sortObjects)}dh(A,X,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(te,fe),Me=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Me&&ye.addToRenderList(g,A),this.info.render.frame++,$===!0&&he.beginShadows();let ne=m.state.shadowsArray;xe.render(ne,A,X),$===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=g.opaque,q=g.transmissive;if(m.setupLights(),X.isArrayCamera){let Ee=X.cameras;if(q.length>0)for(let Le=0,Oe=Ee.length;Le<Oe;Le++){let Fe=Ee[Le];Wf(se,q,A,Fe)}Me&&ye.render(A);for(let Le=0,Oe=Ee.length;Le<Oe;Le++){let Fe=Ee[Le];Hf(g,A,Fe,Fe.viewport)}}else q.length>0&&Wf(se,q,A,X),Me&&ye.render(A),Hf(g,A,X);P!==null&&D===0&&(de.updateMultisampleRenderTarget(P),de.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,X),Te.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(m=b[b.length-1],$===!0&&he.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function dh(A,X,ne,se){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){se&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);let Le=L.update(A),Oe=A.material;Oe.visible&&g.push(A,Le,Oe,ne,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){let Le=L.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ue.copy(Le.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Oe)){let Fe=Le.groups;for(let qe=0,Ye=Fe.length;qe<Ye;qe++){let He=Fe[qe],st=Oe[He.materialIndex];st&&st.visible&&g.push(A,Le,st,ne,ue.z,He)}}else Oe.visible&&g.push(A,Le,Oe,ne,ue.z,null)}}let Ee=A.children;for(let Le=0,Oe=Ee.length;Le<Oe;Le++)dh(Ee[Le],X,ne,se)}function Hf(A,X,ne,se){let q=A.opaque,Ee=A.transmissive,Le=A.transparent;m.setupLightsView(ne),$===!0&&he.setGlobalState(_.clippingPlanes,ne),se&&z.viewport(R.copy(se)),q.length>0&&qa(q,X,ne),Ee.length>0&&qa(Ee,X,ne),Le.length>0&&qa(Le,X,ne),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Wf(A,X,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[se.id]===void 0&&(m.state.transmissionRenderTarget[se.id]=new wn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?li:Bn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let Ee=m.state.transmissionRenderTarget[se.id],Le=se.viewport||R;Ee.setSize(Le.z*_.transmissionResolutionScale,Le.w*_.transmissionResolutionScale);let Oe=_.getRenderTarget(),Fe=_.getActiveCubeFace(),qe=_.getActiveMipmapLevel();_.setRenderTarget(Ee),_.getClearColor(Z),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Me&&ye.render(ne);let Ye=_.toneMapping;_.toneMapping=Ti;let He=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),m.setupLightsView(se),$===!0&&he.setGlobalState(_.clippingPlanes,se),qa(A,ne,se),de.updateMultisampleRenderTarget(Ee),de.updateRenderTargetMipmap(Ee),B.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let gt=0,Nt=X.length;gt<Nt;gt++){let Tt=X[gt],yt=Tt.object,We=Tt.geometry,It=Tt.material,lt=Tt.group;if(It.side===kt&&yt.layers.test(se.layers)){let Pn=It.side;It.side=on,It.needsUpdate=!0,Xf(yt,ne,se,We,It,lt),It.side=Pn,It.needsUpdate=!0,st=!0}}st===!0&&(de.updateMultisampleRenderTarget(Ee),de.updateRenderTargetMipmap(Ee))}_.setRenderTarget(Oe,Fe,qe),_.setClearColor(Z,j),He!==void 0&&(se.viewport=He),_.toneMapping=Ye}function qa(A,X,ne){let se=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=A.length;q<Ee;q++){let Le=A[q],Oe=Le.object,Fe=Le.geometry,qe=Le.group,Ye=Le.material;Ye.allowOverride===!0&&se!==null&&(Ye=se),Oe.layers.test(ne.layers)&&Xf(Oe,X,ne,Fe,Ye,qe)}}function Xf(A,X,ne,se,q,Ee){A.onBeforeRender(_,X,ne,se,q,Ee),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(_,X,ne,se,A,Ee),q.transparent===!0&&q.side===kt&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,_.renderBufferDirect(ne,X,se,q,A,Ee),q.side=Mi,q.needsUpdate=!0,_.renderBufferDirect(ne,X,se,q,A,Ee),q.side=kt):_.renderBufferDirect(ne,X,se,q,A,Ee),A.onAfterRender(_,X,ne,se,q,Ee)}function Ya(A,X,ne){X.isScene!==!0&&(X=Q);let se=ie.get(A),q=m.state.lights,Ee=m.state.shadowsArray,Le=q.state.version,Oe=H.getParameters(A,q.state,Ee,X,ne),Fe=H.getProgramCacheKey(Oe),qe=se.programs;se.environment=A.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(A.isMeshStandardMaterial?Ne:Ue).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",pe),qe=new Map,se.programs=qe);let Ye=qe.get(Fe);if(Ye!==void 0){if(se.currentProgram===Ye&&se.lightsStateVersion===Le)return Yf(A,Oe),Ye}else Oe.uniforms=H.getUniforms(A),A.onBeforeCompile(Oe,_),Ye=H.acquireProgram(Oe,Fe),qe.set(Fe,Ye),se.uniforms=Oe.uniforms;let He=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=he.uniform),Yf(A,Oe),se.needsLights=nx(A),se.lightsStateVersion=Le,se.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=Ye,se.uniformsList=null,Ye}function qf(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Fr.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Yf(A,X){let ne=ie.get(A);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function ex(A,X,ne,se,q){X.isScene!==!0&&(X=Q),de.resetTextureUnits();let Ee=X.fog,Le=se.isMeshStandardMaterial?X.environment:null,Oe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ps,Fe=(se.isMeshStandardMaterial?Ne:Ue).get(se.envMap||Le),qe=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),He=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,gt=!!ne.morphAttributes.color,Nt=Ti;se.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=_.toneMapping);let Tt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Tt!==void 0?Tt.length:0,We=ie.get(se),It=m.state.lights;if($===!0&&(U===!0||A!==v)){let gn=A===v&&se.id===S;he.setState(se,A,gn)}let lt=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==It.state.version||We.outputColorSpace!==Oe||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Fe||se.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==he.numPlanes||We.numIntersection!==he.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ye||We.morphTargets!==He||We.morphNormals!==st||We.morphColors!==gt||We.toneMapping!==Nt||We.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,We.__version=se.version);let Pn=We.currentProgram;lt===!0&&(Pn=Ya(se,X,q));let Ws=!1,Ln=!1,lo=!1,Pt=Pn.getUniforms(),zn=We.uniforms;if(z.useProgram(Pn.program)&&(Ws=!0,Ln=!0,lo=!0),se.id!==S&&(S=se.id,Ln=!0),Ws||v!==A){z.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(T,"projectionMatrix",A.projectionMatrix),Pt.setValue(T,"viewMatrix",A.matrixWorldInverse);let Mn=Pt.map.cameraPosition;Mn!==void 0&&Mn.setValue(T,ae.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Pt.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Ln=!0,lo=!0)}if(q.isSkinnedMesh){Pt.setOptional(T,q,"bindMatrix"),Pt.setOptional(T,q,"bindMatrixInverse");let gn=q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Pt.setValue(T,"boneTexture",gn.boneTexture,de))}q.isBatchedMesh&&(Pt.setOptional(T,q,"batchingTexture"),Pt.setValue(T,"batchingTexture",q._matricesTexture,de),Pt.setOptional(T,q,"batchingIdTexture"),Pt.setValue(T,"batchingIdTexture",q._indirectTexture,de),Pt.setOptional(T,q,"batchingColorTexture"),q._colorsTexture!==null&&Pt.setValue(T,"batchingColorTexture",q._colorsTexture,de));let Vn=ne.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ce.update(q,ne,Pn),(Ln||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,Pt.setValue(T,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(zn.envMap.value=Fe,zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(zn.envMapIntensity.value=X.environmentIntensity),Ln&&(Pt.setValue(T,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&tx(zn,lo),Ee&&se.fog===!0&&oe.refreshFogUniforms(zn,Ee),oe.refreshMaterialUniforms(zn,se,G,ee,m.state.transmissionRenderTarget[A.id]),Fr.upload(T,qf(We),zn,de)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Fr.upload(T,qf(We),zn,de),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(T,"center",q.center),Pt.setValue(T,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(T,"normalMatrix",q.normalMatrix),Pt.setValue(T,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let gn=se.uniformsGroups;for(let Mn=0,fh=gn.length;Mn<fh;Mn++){let os=gn[Mn];ke.update(os,Pn),ke.bind(os,Pn)}}return Pn}function tx(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function nx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,X,ne){let se=ie.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ie.get(A.texture).__webglTexture=X,ie.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ne,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let ne=ie.get(A);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};let ix=T.createFramebuffer();this.setRenderTarget=function(A,X=0,ne=0){P=A,I=X,D=ne;let se=!0,q=null,Ee=!1,Le=!1;if(A){let Fe=ie.get(A);if(Fe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(T.FRAMEBUFFER,null),se=!1;else if(Fe.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Fe.__hasExternalTextures)de.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let He=A.depthTexture;if(Fe.__boundDepthTexture!==He){if(He!==null&&ie.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);let Ye=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?q=Ye[X][ne]:q=Ye[X],Ee=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?q=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[ne]:q=Ye,R.copy(A.viewport),F.copy(A.scissor),Y=A.scissorTest}else R.copy(le).multiplyScalar(G).floor(),F.copy(me).multiplyScalar(G).floor(),Y=Ae;if(ne!==0&&(q=ix),z.bindFramebuffer(T.FRAMEBUFFER,q)&&se&&z.drawBuffers(A,q),z.viewport(R),z.scissor(F),z.setScissorTest(Y),Ee){let Fe=ie.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,ne)}else if(Le){let Fe=X;for(let qe=0;qe<A.textures.length;qe++){let Ye=ie.get(A.textures[qe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ne,Fe)}}else if(A!==null&&ne!==0){let Fe=ie.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Fe.__webglTexture,ne)}S=-1},this.readRenderTargetPixels=function(A,X,ne,se,q,Ee,Le,Oe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){z.bindFramebuffer(T.FRAMEBUFFER,Fe);try{let qe=A.textures[Oe],Ye=qe.format,He=qe.type;if(!k.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-se&&ne>=0&&ne<=A.height-q&&(A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Oe),T.readPixels(X,ne,se,q,_e.convert(Ye),_e.convert(He),Ee))}finally{let qe=P!==null?ie.get(P).__webglFramebuffer:null;z.bindFramebuffer(T.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,ne,se,q,Ee,Le,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(X>=0&&X<=A.width-se&&ne>=0&&ne<=A.height-q){z.bindFramebuffer(T.FRAMEBUFFER,Fe);let qe=A.textures[Oe],Ye=qe.format,He=qe.type;if(!k.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,st),T.bufferData(T.PIXEL_PACK_BUFFER,Ee.byteLength,T.STREAM_READ),A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Oe),T.readPixels(X,ne,se,q,_e.convert(Ye),_e.convert(He),0);let gt=P!==null?ie.get(P).__webglFramebuffer:null;z.bindFramebuffer(T.FRAMEBUFFER,gt);let Nt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await fm(T,Nt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,st),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ee),T.deleteBuffer(st),T.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ne=0){let se=Math.pow(2,-ne),q=Math.floor(A.image.width*se),Ee=Math.floor(A.image.height*se),Le=X!==null?X.x:0,Oe=X!==null?X.y:0;de.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,ne,0,0,Le,Oe,q,Ee),z.unbindTexture()};let sx=T.createFramebuffer(),rx=T.createFramebuffer();this.copyTextureToTexture=function(A,X,ne=null,se=null,q=0,Ee=null){Ee===null&&(q!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=q,q=0):Ee=0);let Le,Oe,Fe,qe,Ye,He,st,gt,Nt,Tt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(ne!==null)Le=ne.max.x-ne.min.x,Oe=ne.max.y-ne.min.y,Fe=ne.isBox3?ne.max.z-ne.min.z:1,qe=ne.min.x,Ye=ne.min.y,He=ne.isBox3?ne.min.z:0;else{let Vn=Math.pow(2,-q);Le=Math.floor(Tt.width*Vn),Oe=Math.floor(Tt.height*Vn),A.isDataArrayTexture?Fe=Tt.depth:A.isData3DTexture?Fe=Math.floor(Tt.depth*Vn):Fe=1,qe=0,Ye=0,He=0}se!==null?(st=se.x,gt=se.y,Nt=se.z):(st=0,gt=0,Nt=0);let yt=_e.convert(X.format),We=_e.convert(X.type),It;X.isData3DTexture?(de.setTexture3D(X,0),It=T.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(de.setTexture2DArray(X,0),It=T.TEXTURE_2D_ARRAY):(de.setTexture2D(X,0),It=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,X.unpackAlignment);let lt=T.getParameter(T.UNPACK_ROW_LENGTH),Pn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ws=T.getParameter(T.UNPACK_SKIP_PIXELS),Ln=T.getParameter(T.UNPACK_SKIP_ROWS),lo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,qe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ye),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);let Pt=A.isDataArrayTexture||A.isData3DTexture,zn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let Vn=ie.get(A),gn=ie.get(X),Mn=ie.get(Vn.__renderTarget),fh=ie.get(gn.__renderTarget);z.bindFramebuffer(T.READ_FRAMEBUFFER,Mn.__webglFramebuffer),z.bindFramebuffer(T.DRAW_FRAMEBUFFER,fh.__webglFramebuffer);for(let os=0;os<Fe;os++)Pt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(A).__webglTexture,q,He+os),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(X).__webglTexture,Ee,Nt+os)),T.blitFramebuffer(qe,Ye,Le,Oe,st,gt,Le,Oe,T.DEPTH_BUFFER_BIT,T.NEAREST);z.bindFramebuffer(T.READ_FRAMEBUFFER,null),z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||ie.has(A)){let Vn=ie.get(A),gn=ie.get(X);z.bindFramebuffer(T.READ_FRAMEBUFFER,sx),z.bindFramebuffer(T.DRAW_FRAMEBUFFER,rx);for(let Mn=0;Mn<Fe;Mn++)Pt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Vn.__webglTexture,q,He+Mn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Vn.__webglTexture,q),zn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,gn.__webglTexture,Ee,Nt+Mn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,gn.__webglTexture,Ee),q!==0?T.blitFramebuffer(qe,Ye,Le,Oe,st,gt,Le,Oe,T.COLOR_BUFFER_BIT,T.NEAREST):zn?T.copyTexSubImage3D(It,Ee,st,gt,Nt+Mn,qe,Ye,Le,Oe):T.copyTexSubImage2D(It,Ee,st,gt,qe,Ye,Le,Oe);z.bindFramebuffer(T.READ_FRAMEBUFFER,null),z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(It,Ee,st,gt,Nt,Le,Oe,Fe,yt,We,Tt.data):X.isCompressedArrayTexture?T.compressedTexSubImage3D(It,Ee,st,gt,Nt,Le,Oe,Fe,yt,Tt.data):T.texSubImage3D(It,Ee,st,gt,Nt,Le,Oe,Fe,yt,We,Tt):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ee,st,gt,Le,Oe,yt,We,Tt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ee,st,gt,Tt.width,Tt.height,yt,Tt.data):T.texSubImage2D(T.TEXTURE_2D,Ee,st,gt,Le,Oe,yt,We,Tt);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ws),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ln),T.pixelStorei(T.UNPACK_SKIP_IMAGES,lo),Ee===0&&X.generateMipmaps&&T.generateMipmap(It),z.unbindTexture()},this.initRenderTarget=function(A){ie.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){I=0,D=0,P=null,z.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var ha=class n extends Ve{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ft;let i=this,s=t.color!==void 0?new Ge(t.color):new Ge(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new M,h=new M,f=new M,p=new ct,x=new M(0,0,-1),g=new ot,m=new M,w=new M,b=new ot,_=new ct,E=this.camera,I=new wn(r,o,{samples:c,type:li}),D=new _n({name:l.name!==void 0?l.name:"unspecified",uniforms:Yc.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=I.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=_,this.material=D,this.onBeforeRender=function(P,S,v){if(h.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(v.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(h,f),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(h),p.extractRotation(v.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(f),w.subVectors(h,x),w.reflect(d).negate(),w.add(h),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(p),E.up.reflect(d),E.lookAt(w),E.far=v.far,E.updateMatrixWorld(),E.projectionMatrix.copy(v.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(E.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=E.projectionMatrix;b.x=(Math.sign(g.x)+F.elements[8])/F.elements[0],b.y=(Math.sign(g.y)+F.elements[9])/F.elements[5],b.z=-1,b.w=(1+F.elements[10])/F.elements[14],g.multiplyScalar(2/g.dot(b)),F.elements[2]=g.x,F.elements[6]=g.y,F.elements[10]=g.z+1-a,F.elements[14]=g.w,i.visible=!1;let Y=P.getRenderTarget(),Z=P.xr.enabled,j=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(I),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(S,E),P.xr.enabled=Z,P.shadowMap.autoUpdate=j,P.setRenderTarget(Y);let J=v.viewport;J!==void 0&&P.state.viewport(J),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return I},this.dispose=function(){I.dispose(),i.material.dispose()}}};ha.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Qc=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function jm(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function dn(n,e,t,i=0,s=0){return jm(n,new en(1,i),e,t,s)}function Bd(n,e,t,i=0){return jm(n,new vs(1),e,t,i)}function ab(n,e){let t=new rt;return t.setAttribute("position",new Xe(e.flat(),3)),{tone:n,geometry:t}}function Jm(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return ab(n,i)}function lb(){let n=[dn("fur",[0,.012,.011],[.154,.161,.132],1),dn("fur",[0,-.065,.008],[.128,.079,.108]),dn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),dn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),Jm("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),dn("skin",[0,-.061,-.133],[.102,.066,.065],1),dn("skinShade",[0,-.097,-.14],[.076,.031,.047]),dn("skin",[0,.015,-.15],[.041,.056,.038]),dn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(dn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),dn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),Bd("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),dn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),dn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),dn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),dn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),dn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),dn("ink",[e*.047,.031,-.183],[.011,.012,.006]),Bd("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),Bd("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(Jm("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function cb(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new rt;return s.setAttribute("position",new Ot(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var ub=cb(lb());function eu(n=0){let e=new tn({flatShading:!0}),t=new tn({flatShading:!0}),i=new tn({vertexColors:!0,flatShading:!0}),s=[],r={ink:new Ge("#212128"),ivory:new Ge("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:h,start:f,end:p}of d){let{r:x,g,b:m}=r[h];for(let w=f;w<p;w++)u.setXYZ(w,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Qc.length?u:0;if(d===o)return;o=d;let h=Qc[o];for(let[f,p]of Object.entries(h))(r[f]??=new Ge).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),h=new Ot(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",h);let f={colors:h,ranges:u.ranges};return s.push(f),a(f),new Ve(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new Ct;return u.add(c(ub)),u}}}var da=[[.026,.021,.015],[.044,-.004,.018],[.052,-.032,.017],[.043,-.063,.014],[.011,-.071,.012],[-.005,-.073,.012],[-.039,-.068,.013],[-.049,-.046,.014],[-.048,-.016,.015],[-.039,.003,.017],[-.026,.021,.015]],Km=[{edge:5,length:.08,splay:.04},{edge:3,length:.06,splay:-.04},{edge:7,length:.053,splay:-.64}],tu=da.length-1,hb=[[.23,.98,.91],[.48,.86,.82],[.73,.78,.75],[.93,.66,.67]],db=[-.78,.78,1,.78,-.78,-1],fb=[1,1,0,-1,-1,0];function nu(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(S=0,v=0,R=0){let F=r.length/3;return r.push(S*s,v,R),F}function c(S,v,R){i?o.push(S,R,v):o.push(S,v,R)}function u(S,v,R,F){c(S,v,R),c(S,R,F)}function d(S,v){for(let R=0;R<S.length;R++){let F=(R+1)%S.length;u(S[F],S[R],v[R],v[F])}}function h(S,v){for(let R=0;R<S.length;R++)c(v,S[(R+1)%S.length],S[R])}let f=l(0,.028,-.025),p=l(-.003,-.024,-.025),x=da.map(([S,v,R],F)=>({top:l(S,R,v),middle:l(S*1.08,0,F===0||F===tu?v:-.025+(v+.025)*1.05),bottom:l(S,-R,v)}));function g(S){let v=x[S],R=x[(S+1)%x.length];return[v.top,R.top,R.middle,R.bottom,v.bottom,v.middle]}let m=new Set(Km.map(({edge:S})=>S));m.add(tu);for(let S=0;S<x.length;S++){let v=x[S],R=x[(S+1)%x.length];c(f,v.top,R.top),c(p,R.bottom,v.bottom),m.has(S)||(u(R.top,v.top,v.middle,R.middle),u(R.middle,v.middle,v.bottom,R.bottom))}let w=g(tu);t||h(w,l(0,0,da[tu][1]));let b=i?[w[1],w[0],w[5],w[4],w[3],w[2]]:w;for(let{edge:S,length:v,splay:R}of Km){let[F,Y,Z]=da[S],[j,J,ee]=da[S+1],G=j-F,te=J-Y,fe=-te+G*R,le=G+te*R,me=Math.hypot(fe,le),Ae=[],Ce=g(S);for(let[U,N,ae]of hb){let ue=[l(),l(),l(),l(),l(),l()];d(Ce,ue),Ae.push({ring:ue,distance:U*v,width:N*Math.hypot(G,te)/2,height:ae*(Z+ee)/2}),Ce=ue}let $=l();h(Ce,$),a.push({x:(F+j)/2,z:(Y+J)/2,forwardX:fe/me,forwardZ:le/me,rows:Ae,tip:$,length:v,pressure:-1})}let _=new rt,E=new Xe(r,3).setUsage(Dr);_.setAttribute("position",E),_.setIndex(o),_.boundingSphere=new bi(new M(0,-.018,-.052),.12),_.boundingBox=new un(new M(-.1,-.082,-.17),new M(.1,.038,.025));let I=!0;function D(S,v=!0){let R=!1;for(let F=0;F<a.length;F++){let Y=a[F],Z=S?.[F],j=Number.isFinite(Z)?je.clamp(Z,0,1):0;if(j===Y.pressure)continue;Y.pressure=j,R=!0;let{forwardX:J,forwardZ:ee,length:G,rows:te,tip:fe}=Y,le=Y.x,me=Y.z,Ae=0,Ce=0,$=0;for(let{ring:ae,distance:ue,width:Q,height:Me}of te){let Pe=ue/G,T=je.smoothstep(Pe,0,.57),V=je.smoothstep(Pe,.38,1),B=(.17+j*.83)*T+(.14+j*.76)*V,k=(B+Ce)/2,z=ue-$,re=Math.cos(k)*z;le+=J*re,Ae-=Math.sin(k)*z,me+=ee*re;for(let ie=0;ie<ae.length;ie++){let de=db[ie]*Q,Ue=fb[ie]*Me,Ne=Ue*Math.sin(B);E.setXYZ(ae[ie],s*(le+ee*de+J*Ne),Ae+Ue*Math.cos(B),me-J*de+ee*Ne)}Ce=B,$=ue}let U=G-$,N=U*Math.cos(Ce);E.setXYZ(fe,s*(le+J*N),Ae-U*Math.sin(Ce),me+ee*N)}R&&(E.needsUpdate=!0,I=!0),v&&I&&(_.computeVertexNormals(),I=!1)}D(),_.getAttribute("normal").setUsage(Dr);let P=new Ve(_,e);return P.castShadow=!0,{mesh:P,pose:D,wristIndices:b}}var qi=12,Od=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],pb=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],$m=Od.flatMap(([n,e,t])=>Array.from({length:qi},(i,s)=>{let r=(s-.5)*Math.PI*2/qi;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function iu(n,e){let t=$m.length,i=[],s=(ee,G,te,fe,le)=>ee.push(G,te,fe,G,fe,le);function r(ee,G,te=!1){for(let fe=1;fe<G.length-1;fe++)te?ee.push(G[0],G[fe+1],G[fe]):ee.push(G[0],G[fe],G[fe+1])}let o=(ee,G)=>ee*qi+(G+qi)%qi;for(let ee=0;ee<Od.length-1;ee++)for(let G=0;G<qi;G++)(ee===2||ee===3)&&(G===0||G===6)||s(i,o(ee,G),o(ee+1,G),o(ee+1,G+1),o(ee,G+1));r(i,Array.from({length:qi},(ee,G)=>o(0,G))),r(i,Array.from({length:qi},(ee,G)=>o(Od.length-1,G)),!0);let a=t,l=e.map(({geometry:ee,wristIndices:G},te)=>{let fe=te===0?6:0,le=[o(4,fe),o(4,fe+1),o(3,fe+1),o(2,fe+1),o(2,fe),o(3,fe)],me=[le,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Ae=me.at(-1),Ce=new Array(ee.attributes.position.count);G.forEach((N,ae)=>{Ce[N]=Ae[ae]});for(let N=0;N<Ce.length;N++)Ce[N]??=a++;let $=[];for(let N=0;N<ee.index.count;N++)$.push(Ce[ee.index.getX(N)]);for(let N=0;N<me.length-1;N++)for(let ae=0;ae<6;ae++){let ue=(ae+1)%6;s(i,me[N][ae],me[N][ue],me[N+1][ue],me[N+1][ae])}let U=[];return r(U,Ae),{socket:le,rings:me,wrist:Ae,wristIndices:G,remap:Ce,skin:$,cap:U,sign:te===0?-1:1}}),c=new rt,u=new Xe(a*3,3).setUsage(Dr);c.setAttribute("position",u);let d=new Ve(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let h=Array.from({length:4},(ee,G)=>new ms([...i,...l.flatMap((te,fe)=>G&1<<fe?te.skin:te.cap)],1));c.setIndex(h[0]);let f=new M,p=new M,x=new M,g=new M,m=new M,w=new M,b=new M,_=new M,E=new M,I=new Je,D=new Je,P=new Je,S=new M(0,0,-1),v=new Je().setFromEuler(new rn(-1.42,0,0)),R=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],Y=0,Z=0,j=!0;function J(ee,G,te,fe,le){let me=!!(ee[0]||ee[1]);if(!me&&!j&&Y===te&&Z===fe)return;Y=te,Z=fe,j=me;for(let Ce=0;Ce<t;Ce++){let[$,U,N]=$m[Ce];u.setXYZ(Ce,$*te,U*fe,N*te)}let Ae=0;for(let Ce=0;Ce<l.length;Ce++){let $=l[Ce],U=ee[Ce],N=e[Ce].geometry.attributes.position,ae=!!U,ue=$.wristIndices;ae&&le&&(Ae|=1<<Ce),p.set(0,0,0);for(let Q of $.socket)p.add(f.fromBufferAttribute(u,Q));p.multiplyScalar(1/6),g.set(0,0,0);for(let Q of ue)g.add(f.fromBufferAttribute(N,Q));g.multiplyScalar(1/6).applyQuaternion(U?.quaternion??v),ae?g.add(U.position):g.add(f.set(p.x+$.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),w.copy(m).normalize(),b.set($.sign*.38,-1,.27).addScaledVector(w,-w.dot(f.set($.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),ae&&x.addScaledVector(b,Math.sqrt(Math.max(.007,G**2-m.lengthSq()*.25))*.72),I.setFromUnitVectors(S,w.subVectors(x,p).normalize()),D.copy(U?.quaternion??v);for(let Q=0;Q<4;Q++){let Me=Q===3;E.lerpVectors(Me?x:p,Me?g:x,R[Q]),P.copy(I).slerp(D,Me?.79:Q*.19);for(let Pe=0;Pe<6;Pe++){let T=pb[Pe],V=F[Q];_.set(T[0]*V,T[1]*V*.84,0).applyQuaternion(P).add(E),u.setXYZ($.rings[Q+1][Pe],_.x,_.y,_.z)}}for(let Q=0;Q<$.remap.length;Q++)_.fromBufferAttribute(N,Q).applyQuaternion(D),ae?_.add(U.position):_.add(f.set(p.x+$.sign*.026,p.y-.43,p.z-.015)),u.setXYZ($.remap[Q],_.x,_.y,_.z)}c.index!==h[Ae]&&c.setIndex(h[Ae]),u.needsUpdate=!0,c.computeVertexNormals()}return J([null,null],.42,1,1,!1),{mesh:d,pose:J}}var Qm=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],mb=new M(0,1,0);function su(n){let e=new Ct,t=new qt({color:"#2c4750",roughness:.43,metalness:.47}),i=new qt({color:"#899fa3",roughness:.46,metalness:.57}),s=new vt({toneMapped:!1});function r(f,p,x,g,m,w=0){let b=new Ve(f,p);return b.position.set(x,g,m),b.rotation.x=w,e.add(b),b}r(new it(.071,.059,.149),t,.038,.026,-.054),r(new it(.04,.072,.05),i,.038,-.028,-.014,-.29),r(new Qt(.019,.024,.064,8),i,.038,.025,-.137,Math.PI/2),r(new Qt(.015,.016,.008,8),s,.038,.025,-.173,Math.PI/2),r(new it(.041,.009,.047),s,.038,.059,-.067);let o=new Ve(new Qt(.002,.003,1,5,1,!0),new vt({transparent:!0,opacity:.52,depthWrite:!1,blending:oi,toneMapped:!1})),a=new Ve(new en(.012,0),new vt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function h({mode:f,position:p,quaternion:x,end:g}){if(!f||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),f!==u&&(u=f,s.color.set(Qm[f-1]??Qm[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(mb,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:h}}var gb="wss://clouddata.turbowarp.org",xb="itssoren.github.io/VR/gorilla-lab/",zd={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},ou=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),yb=new Map([[zd.vr,"vr"],[zd.pc,"pc"],...ou.map(n=>[n,"player"])]),Vd=15,ru=4400,tg=64e3,Gt=(n,e)=>Math.round(n).toString().padStart(e,"0");function fa(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function pa(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function _b({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Gt(e,7)+a.map(c=>Gt(c*100+2e4,5)).join("")+Gt(Math.round(l*10)%3600,4)+Gt(o,6)}function vb(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function ng({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},Socket:s=globalThis.WebSocket,now:r=Date.now,monotonicNow:o=r===Date.now?()=>performance.now():r,random:a=Math.random}={}){let l=new Map,c=o(),u=r(),d=null,h=null,f="",p=0,x="",g=-1/0,m=null,w=0,b=0,_=1/0,E=0,I="offline",D=!1,P=-1,S=0,v=[],R=1/0;function F(U,N){I=U,n(N)}function Y(){return"Salon "+f+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente du joueur VR")}function Z(){return[...l.values()].map(U=>U.pose).filter(Boolean)}function j(){let U=Z().filter(Q=>h==="vr"?Q.role!=="vr":Q.role==="vr"),N=Q=>Number(Q.ready)*2+ +(Q.role==="pc"),ae=U.find(Q=>Q.id===m?.id)??null,ue=U.reduce((Q,Me)=>!Q||N(Me)>N(Q)?Me:Q,ae);ue!==m&&(m=ue,e(m))}function J(U){for(let N of l.values())N.pose&&t(null,N.pose),N.pose=N.candidate=null;U&&l.clear(),j()}function ee(){let U=d;if(d=null,U){U.onopen=U.onmessage=U.onerror=U.onclose=null;try{U.close()}catch{}}}function G(){ee(),h=null,f="",_=1/0,D=!1,P=-1,v=[],J(!0),F("offline","Hors ligne")}function te(U){let N=Math.min(3e4,1500*2**Math.min(E++,5));_=o()+N,F("retry","TurboWarp d\xE9connect\xE9 ("+U+") \xB7 reconnexion automatique au salon "+f)}function fe(U){let N=!1;for(let[ae,ue]of l)ue.pose&&U-ue.pose.arrival>ru&&(t(null,ue.pose),ue.pose=null,N=!0),ue.candidate&&U-ue.candidate.arrival>ru&&(ue.candidate=null),U-ue.lastArrival>6e4&&l.delete(ae);N&&j()}function le(U,N,ae,ue){let Q=Rb(ae.value,null);if(!Q||Q.id===p)return;let Me=l.get(Q.id);if(!Me){if(l.size>=64)return;Me={lastTime:-1/0,lastAction:0,lastArrival:ue,pose:null,candidate:null},l.set(Q.id,Me)}if(Q.time<=Me.lastTime)return;let Pe=Me.pose??Me.candidate;if(Pe&&Q.time-Pe.time>ru+ue-Pe.arrival){if(Me.pose)return;Me.candidate=null}Me.lastTime=Q.time,Me.lastArrival=ue;let T={...Q,ready:Q.ready??!0,protocol:Q.ready===void 0?3:4,role:U,channel:N,received:r(),arrival:ue},V=Me.candidate;if(!Me.pose&&(!V||V.channel!==N||V.map!==T.map||ue-V.arrival>ru)&&(Q.ready!==void 0||Math.abs(Q.time-T.received)>25e3)){Me.candidate=T;return}if(Me.candidate=null,!Me.pose&&V?.objects&&V.ready&&V.map===T.map&&!T.objects&&(T.objects=V.objects),Me.pose=T,t(T),j(),!(h!=="vr"||U!=="player"||!D||!T.ready||T.map!==P||Q.actionTarget!==p))for(let{seq:B,action:k}of Q.actions)B<=Me.lastAction||(Me.lastAction=B,i(k,T))}function me(){let U;try{U=new s(gb)}catch{return!1}return d=U,b=o(),g=-1/0,F("connecting","Connexion \xE0 TurboWarp \xB7 salon "+f),U.onopen=()=>{d===U&&(w=o(),U.send(JSON.stringify({method:"handshake",project_id:xb+f,user:"player"+p})+`
`),F("open",Y()))},U.onmessage=N=>{if(d!==U||typeof N.data!="string"||N.data.length>105e4)return;let ae=o();fe(ae);for(let ue of N.data.split(`
`)){if(!ue.trim())continue;let Q;try{Q=JSON.parse(ue)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",ue.slice(0,200));continue}let Me=yb.get(Q?.name);Q?.method!=="set"||!Me||Me==="vr"&&h==="vr"||le(Me,Q.name,Q,ae)}},U.onerror=()=>{d===U&&F("connecting","Impossible de joindre TurboWarp \xB7 salon "+f)},U.onclose=N=>{if(d!==U)return;let ae=N.code;if(ee(),J(!1),v=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(ae)){te(ae);return}h=null,f="";let ue={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[ae];F("error","TurboWarp d\xE9connect\xE9 ("+ae+")"+(ue?" \xB7 "+ue:N.reason?" \xB7 "+N.reason.slice(0,100):""))},!0}function Ae(U,N){let ae=fa(U);return!/^[A-Z0-9]{5,12}$/.test(ae)||!["vr","pc","player"].includes(N)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===N&&f===ae?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(J(!0),p=Math.floor(1e6+a()*8999999),h=N,f=ae,x=zd[h]??ou[p%ou.length],S=0,E=0,_=R=1/0,me()?!0:(h=null,f="",F("error","WebSocket indisponible."),!1))}function Ce(U,N){if(h!=="player"||I!=="open"||!m?.ready||m.protocol<4||m.map!==N||!kd(U)||S>=99999999)return!1;let ae=o();return v=v.filter(ue=>ue.expires>=ae&&ue.target===m.id&&ue.map===N),v.length>=8?!1:(v.push({action:{...U},seq:++S,expires:ae+1800,target:m.id,map:N}),!0)}function $(U){let N=o();if(D=!!U&&U.ready!==!1,P=U?.map??-1,fe(N),h&&!d&&N>=_&&(_=1/0,me()||te(1006)),d&&d.readyState===0&&N-b>1e4&&(ee(),te(1006)),!U||!h||d?.readyState!==1||d.bufferedAmount>4096||N-w<350||N-g<100)return!1;if(h==="player"){let Pe=Z().filter(V=>V.role==="player"),T=Pe.find(V=>V.channel===x);if(T?R=Math.min(N,R):R=1/0,T&&(T.id<p||N-R>=800)){let V=ou.find(B=>!Pe.some(k=>k.channel===B));if(!V)return I!=="capacity"&&F("capacity","Salon "+f+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;x=V,R=1/0}}(E||I==="capacity")&&(E=0,F("open",Y()));let ae=Math.round(u+N-c),ue=_b({...U,time:ae,id:p});if(!ue)return!1;v=v.filter(Pe=>Pe.expires>=N&&Pe.target===m?.id&&Pe.map===U.map);let Q=U.ready!==void 0||U.avatar?.tool||h==="player",Me=Cb(ue,U.avatar,U.objectFeed?.(N),Q?{ready:U.ready!==!1,actions:v,actionTarget:v[0]?.target??0}:null);return g=N,d.send(JSON.stringify({method:"set",name:x,value:Me})+`
`),!0}return{join:Ae,leave:G,tick:$,sendAction:Ce,get role(){return h},get code(){return f},get state(){return I},get remote(){return m},get peers(){return Z()}}}var Mb=15,Sb=12,ig=44,au=15,cu=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Gt(e*100+2e4,5)).join(""):null;function lu(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var uu=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Gt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function hu(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function bb(n){let e=cu(n.mesh.position),t=uu(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>Vd)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Gt(i,5)+Gt(s,2)+r+o+Gt(a,8)+e+t}function wb(n){return Gt(n,5)+"99"+"0".repeat(ig-7)}function Tb(n){if(!n)return null;let e=uu(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&cu(l.position),u=l&&uu(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(Mb+Sb)}),s=Gt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Gt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Gt(n.coconuts??31,2)+Gt(n.color??0,2)+a}function kd(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;return e==="spawn"?Number.isInteger(t)&&t>=0&&t<=Vd?"10"+Gt(t,5):null:!Number.isInteger(i)||i<1||i>=1e5?null:e==="tool"?Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Gt(i,5):null:e==="hold"||e==="release"?(e==="hold"?"30":"40")+Gt(i,5):null}function Ab(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release"][e];if(!s)return null;let r=s==="spawn"?{type:s,typeId:i}:s==="tool"?{type:s,mode:t,objectId:i}:{type:s,objectId:i};return kd(r)===n?r:null}function Eb(n){let e=cu(n?.position),t=uu(n?.quaternion),i=cu(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function Cb(n,e,t,i=null){let s=Tb(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:l,action:c})=>Gt(l,8)+kd(c)).join(""),a=n+"4"+Number(i.ready)+ +!!s+(s??"")+Eb(s?e.tool:null)+Gt(i.actionTarget??0,7)+Gt(o.length/au,1)+o;return a.length+1+r.length>tg&&(t=null,r=""),a+(t?t.full?"2":"1":"0")+r}function eg(n,e,t){let i=hu(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:lu(n,a+1),quaternion:hu(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function Rb(n,e){if(typeof n!="string"||n.length>tg||!/^[0-9]+$/.test(n))return null;let t=vb(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:ig,r=i?125:133;if(n[46]==="4"){if(n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=eg(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=lu(n,a+2),h=hu(n,a+17),f=lu(n,a+29);if(u<1||u>7||!d||!h||!f)return null;t.avatar.tool={mode:u,position:d,quaternion:h,end:f},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*au+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=au){let u=Number(n.slice(a,a+8)),d=Ab(n.slice(a+8,a+au));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=eg(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let h=Number(n[c]),f=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=lu(n,c+10),g=hu(n,c+25);if(d>Vd||h>7||f>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:h,style:f,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}function sg(){let n=new Map,e=-1/0,t=-1/0;function i(s,r){if(s-e<200)return null;e=s;let o=s-t>=1600;o&&(t=s);let a=new Set,l=[];for(let c of r){if(!c.mesh.visible)continue;let u=bb(c);u&&(a.add(c.netId),(o||n.get(c.netId)!==u)&&l.push(u),n.set(c.netId,u))}for(let c of n.keys())a.has(c)||(o||l.push(wb(c)),n.delete(c));return o||l.length?{full:o,records:l}:null}return{capture:i,reset(){n.clear(),e=t=-1/0}}}var rg=Bt.DEFAULT_UP,Ib=15,og=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function Pb(){let n=new Ct,e=new Ve(new en(.155,1),new qt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Ve(new Ms(.23,.018,5,20),new vt({color:"#84e6ff",transparent:!0,opacity:.85,blending:oi,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Ve(new Bo(.11,.28,9,1,!0),new vt({color:"#55c7ff",transparent:!0,opacity:.45,side:kt,blending:oi,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function Lb(){let n=new Ct,e=new Ct,t=eu(0),i=t.createHead(),s=["left","right"].map(g=>({skin:nu(g,t.hand,{openWrist:!0}),position:new M,quaternion:new Je,pressure:[0,0,0],tracked:!1})),r=iu(t.fur,s.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=su(e),l=new M,c=[null,null],u=new M,d=new Je,h=new Je,f=new Je,p={mode:0,position:new M,quaternion:new Je,end:new M};function x(g,m,w){let b=g.avatar,_=1-Math.exp(-w*20);if(!b){o.position.set(0,-.46,0),o.rotation.x=0,c.fill(null),r.pose(c,.42,.97,.68,!0),a.hide(),p.mode=0;return}d.copy(n.quaternion).invert(),f.copy(b.head).premultiply(d),i.quaternion.slerp(f,_),u.set(0,0,-1).applyQuaternion(i.quaternion);let E=je.smoothstep(-u.y,.28,.94),I=Math.max(.38,b.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*I,.24*E),o.rotation.x=-.5*E,h.copy(o.quaternion).invert(),t.setColor(b.color??0);for(let S=0;S<s.length;S++){let v=s[S],R=b.hands[S];if(c[S]=R?v:null,!R){v.tracked=!1;continue}l.copy(R.position).sub(g).applyQuaternion(d).sub(o.position).applyQuaternion(h),f.copy(R.quaternion).premultiply(d).premultiply(h),v.tracked?(v.position.lerp(l,_),v.quaternion.slerp(f,_)):(v.position.copy(l),v.quaternion.copy(f)),v.tracked=!0;for(let F=0;F<3;F++)v.pressure[F]+=((R.pressure?.[F]??0)-v.pressure[F])*_;v.skin.pose(v.pressure,!1)}r.pose(c,b.armSpan*.5,.97,I,!0);let D=b.tool;if(!D){a.hide(),p.mode=0;return}let P=p.mode?_:1;p.mode=D.mode,p.position.lerp(D.position,P),p.quaternion.slerp(f.copy(D.quaternion),P),p.end.lerp(D.end,P),a.update(p)}return{model:n,toolRoot:e,draw:x,dispose(){for(let g of s)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function ag(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function lg({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,onAction:o}){let a=new Map,l=new Map,c=sg(),u=0,d=-1,h=-1,f=-1,p="",x=0,g=null,m=0;function w(){let T=e();return T!==p&&(p=T,x=pa(T)),x}function b(T){return!!T?.ready&&T.map===w()}function _(T){let V=l.get(T);V&&(n.remove(V.mesh),V.mesh.material?.dispose(),l.delete(T))}function E(){for(let T of l.keys())_(T);u=0,d=-1,h!==-1&&(h=-1,s?.(null)),f!==-1&&(f=-1,r?.(null))}function I(T,V){if(T.color===V.color&&T.style===V.style)return;T.color=V.color,T.style=V.style;let B=T.mesh.material;if(B?.color){if(B.color.setHex(V.color),V.style===0){Object.assign(B,T.baseMaterial),T.baseEmissive&&B.emissive.copy(T.baseEmissive),B.needsUpdate=!0;return}B.roughness=[.44,.94,.12,.16,.4][V.style],B.metalness=[.1,0,.87,.12,0][V.style],B.opacity=V.style===3?.4:1,B.transparent=V.style===3,B.depthWrite=!B.transparent,B.emissive?.copy(B.color),B.emissiveIntensity=V.style===4?1.65:0,B.needsUpdate=!0}}function D(T){if(!b(T)){E();return}if((u!==T.id||d!==T.map)&&(E(),u=T.id,d=T.map),T.avatar&&T.avatar.light!==h&&(h=T.avatar.light,s?.(h)),T.avatar&&T.avatar.coconuts!==f&&(f=T.avatar.coconuts,r?.(f)),!T.objects)return;let V=T.objects.full?new Set:null;for(let B of T.objects.records){if(B.removed){_(B.id);continue}V?.add(B.id);let k=l.get(B.id);if(k&&k.type!==B.type&&(_(B.id),k=null),!k){let re=i?.(B.type);if(!re)continue;let{roughness:ie,metalness:de,transparent:Ue,depthWrite:Ne,opacity:C,emissiveIntensity:y}=re.material??{},L={roughness:ie,metalness:de,transparent:Ue,depthWrite:Ne,opacity:C,emissiveIntensity:y};re.userData.netId=B.id,re.userData.netType=B.type,k={mesh:re,baseMaterial:L,baseEmissive:re.material?.emissive?.clone(),type:B.type,target:new M().copy(B.position),quaternion:new Je().copy(B.rotation),velocity:new M,time:T.time},re.position.copy(k.target),re.quaternion.copy(k.quaternion),l.set(B.id,k),n.add(re)}let z=(T.time-k.time)/1e3;z>.06&&z<.65&&!(B.flags&6)?k.velocity.copy(B.position).sub(k.target).multiplyScalar(1/z).clampLength(0,23):k.velocity.set(0,0,0),k.target.copy(B.position),k.quaternion.copy(B.rotation),k.time=T.time,k.flags=B.flags,k.received=T.arrival,k.mesh.userData.netFlags=B.flags,k.mesh.userData.held=!!(B.flags&1),I(k,B)}if(V)for(let B of l.keys())V.has(B)||_(B)}let P=new M;function S(T,V,B){let k=1-Math.exp(-T*22);for(let z of l.values()){if(z.mesh.visible=V,!V)continue;let re=z.flags&6?0:Math.min(.12,Math.max(0,(B-z.received)/1e3));P.copy(z.target).addScaledVector(z.velocity,re),z.mesh.position.distanceToSquared(P)>16||z.flags&6&&z.mesh.position.distanceToSquared(z.target)<1e-4?z.mesh.position.copy(P):z.mesh.position.lerp(P,k),z.mesh.quaternion.slerp(z.quaternion,k),z.flags&6&&z.mesh.quaternion.angleTo(z.quaternion)<.008&&z.mesh.quaternion.copy(z.quaternion),z.mesh.updateMatrixWorld(!0)}}let v=T=>document.querySelector(T),R=v("#cloud-status"),F=v("#cloud-room"),Y=v("#cloud-camera"),Z=0,j="Hors ligne",J=0;function ee(T){Z=T,Y.textContent="Cam\xE9ra : "+og[T]}function G(){ee((Z+1)%og.length)}Y.onclick=G;let te=ng({onStatus(T){j=T,R.textContent=T},onPose(T){te.role!=="vr"&&D(T)},onPeer(T,V){if(!T){let z=a.get(V.id);z?.art&&(ag(z.art.model),ag(z.art.toolRoot),z.art.dispose?.()),a.delete(V.id);return}let B=a.get(T.id);B||(B={art:null,motion:new M},a.set(T.id,B));let k=B.pose;if(B.motion.set(0,0,0),k&&k.map===T.map){let z=(T.time-k.time)/1e3;z>=.055&&z<=.65&&(B.motion.set(T.x-k.x,T.y-k.y,T.z-k.z).multiplyScalar(1/z),B.motion.lengthSq()>=18**2&&B.motion.set(0,0,0))}B.pose=T},onAction:o}),fe=fa(new URLSearchParams(location.search).get("room")??"");F.value=/^[A-Z0-9]{5,12}$/.test(fe)?fe:Math.random().toString(36).slice(2,8).padEnd(6,"0").toUpperCase();function le(T){let V=fa(F.value);te.role===T&&te.code===V||te.join(V,T)&&(F.value=V,T!=="vr"&&v("#game").focus(),c.reset(),g=null,ee(0),t(pa(V)),p="")}v("#cloud-vr").onclick=()=>le("vr"),v("#cloud-pc").onclick=()=>le("pc");let me=v("#cloud-player");me&&(me.onclick=()=>le("player")),v("#cloud-leave").onclick=()=>{J=0,te.leave()},v("#cloud-copy").onclick=async()=>{let T=new URL(location.href);T.searchParams.set("room",fa(F.value));try{await navigator.clipboard.writeText(T.href),R.textContent="Lien copi\xE9."}catch{R.textContent=T.href}J=performance.now()+2500},addEventListener("pagehide",()=>te.leave());let Ae=new M,Ce=new M,$=new M,U=new M,N=0;function ae({dt:T,position:V,yaw:B,pitch:k,camera:z,rig:re,keys:ie,flat:de}){let Ue=de?.movement,Ne=Number(ie.has("KeyD"))-Number(ie.has("KeyQ")||ie.has("KeyA"))+(Ue?.x??0),C=Number(ie.has("KeyS"))-Number(ie.has("KeyZ")||ie.has("KeyW"))+(Ue?.z??0);de?.consumeJump?.()&&(N=.26),N=Math.max(0,N-T);let y=Number(ie.has("Space")||N>0)-Number(ie.has("ShiftLeft")||ie.has("ShiftRight")),L=ie.has("ControlLeft")||ie.has("ControlRight")?11:3.2;U.set(Ne,y,C).clampLength(0,1).applyAxisAngle(rg,B),re.position.addScaledVector(U,T*L).clampScalar(-175,175),re.rotation.set(0,B,0),z.position.set(0,0,0),z.rotation.set(k,0,0,"YXZ"),re.updateMatrixWorld(!0),V.copy(re.position)}function ue(T,V,B,k){for(let z of a.values()){let re=z.pose;if(!(T&&b(re))){z.art&&(z.art.model.visible=!1,z.art.toolRoot&&(z.art.toolRoot.visible=!1));continue}z.art||(z.art=re.role==="pc"?Pb():Lb(),n.add(z.art.model),z.art.model.visible=!1,z.art.toolRoot&&n.add(z.art.toolRoot));let{model:de,toolRoot:Ue}=z.art,Ne=Math.min(.19,Math.max(0,(k-re.arrival)/1e3+.036));Ae.copy(re).addScaledVector(z.motion,Ne),!de.visible||de.position.distanceToSquared(Ae)>64?de.position.copy(Ae):de.position.lerp(Ae,1-Math.exp(-B*11)),de.rotation.y=re.yaw,de.visible=!0,Ue&&(Ue.visible=!0),z.art.draw(re,V,B)}}function Q(T,V){if(V<J)return;let B=te.remote,k=j;if(te.state==="open"){let z="Salon "+te.code+" \xB7 ",re=te.peers.filter(ie=>ie.ready);if(!T)k=z+(te.role==="vr"?"s\xE9lectionne \xAB Entrer en VR \xBB pour ouvrir la partie":"quitte la session VR pour utiliser ce r\xF4le");else if(te.role!=="vr"&&B&&B.map!==w())k=z+"le joueur VR utilise une autre carte. Chargez la m\xEAme carte.";else if(te.role!=="vr"&&B&&!B.ready)k=z+"casque connect\xE9 \xB7 en attente du d\xE9marrage VR";else if(te.role==="player"&&B&&B.protocol<4)k=z+"mets \xE0 jour le jeu sur le casque pour jouer ensemble";else if(te.role!=="vr"&&b(B))k=z+"joueur VR connect\xE9";else if(te.role==="vr"){let ie=re.filter(b),de=ie.filter(Ne=>Ne.role==="player").length,Ue=ie.some(Ne=>Ne.role==="pc");de||Ue?k=z+[Ue?"spectateur connect\xE9":"",de?de+" joueur"+(de===1?"":"s")+" PC / mobile":""].filter(Boolean).join(" \xB7 "):re.length&&(k=z+"le correspondant utilise une autre carte. Chargez la m\xEAme carte.")}}R.textContent!==k&&(R.textContent=k)}function Me(T){let{inVR:V,time:B,dt:k,position:z,yaw:re,camera:ie,rig:de,keys:Ue,avatar:Ne,bodies:C}=T;if(!te.role){E();return}let y=te.role==="vr"?V:!V,L=performance.now(),H=w(),oe=te.role!=="vr"?te.remote:null,W=y&&b(oe);if(!W&&d!==-1&&E(),S(k,W,L),ue(y,B,k,L),te.role==="pc"&&!V){Ue.delete("KeyC")&&G();let ge=Z===3&&W?[...l.values()].find(xe=>xe.type===Ib)?.mesh:null,he=W?a.get(oe.id)?.art?.model:null;ge?($.set(0,0,-.23).applyQuaternion(ge.quaternion),de.position.copy(ge.position).add($),de.rotation.set(0,0,0),ie.position.set(0,0,0),ie.quaternion.copy(ge.quaternion),de.updateMatrixWorld(!0),z.copy(de.position)):he&&(Z===1||Z===2)?($.set(0,.72,Z===1?-2.7:2.7).applyAxisAngle(rg,he.rotation.y),Ce.copy(he.position).add($),de.position.lerp(Ce,1-Math.exp(-k*11)),ie.position.set(0,0,0),de.updateMatrixWorld(!0),ie.lookAt(he.position),ie.updateWorldMatrix(!0,!1),z.copy(de.position)):ae(T)}te.tick({x:z.x,y:z.y,z:z.z,yaw:re,map:H,ready:y,avatar:y?Ne:null,objectFeed:y&&te.role==="vr"&&C?ge=>{let he=c.capture(ge,C);return he&&(g=he,m=ge+200),ge<m?g:null}:null}),Q(y,L)}function Pe(T){let V=a.get(T)?.pose;return b(V)?V:null}return{update:Me,getPeer:Pe,sendAction(T){return te.sendAction(T,w())},get role(){return te.role},get connected(){return b(te.remote)},get remoteSpectator(){return te.peers.find(T=>T.role==="pc"&&b(T))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return l.size},forEachReplica(T){for(let V of l.values())V.mesh.visible&&T(V.mesh)}}}function cg({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=f=>Math.min(1,Math.max(-1,f));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=f=>{if(e()){if(f.pointerType==="touch"){let p=n.getBoundingClientRect();if(f.clientX-p.left<p.width*.46){if(o)return;o={id:f.pointerId,x:f.clientX,y:f.clientY}}else{if(a)return;a={id:f.pointerId,x:f.clientX,y:f.clientY,total:0}}f.preventDefault()}else{if(f.button!==0&&f.button!==2)return;l=!0}n.setPointerCapture(f.pointerId)}},n.onpointermove=f=>{if(e())if(f.pointerId===o?.id)r.x=u((f.clientX-o.x)/48),r.z=u((f.clientY-o.y)/48);else if(f.pointerId===a?.id){let p=f.clientX-a.x,x=f.clientY-a.y;a.x=f.clientX,a.y=f.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&f.pointerType!=="touch"&&t(f.movementX,f.movementY,.004)};function h(f,p){f.pointerId===o?.id&&(r.x=r.z=0,o=null),f.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),f.pointerType!=="touch"&&(l=!1)}return n.onpointerup=f=>h(f,!0),n.onpointercancel=n.onlostpointercapture=f=>h(f,!1),n.oncontextmenu=f=>f.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(f=>{f.onclick=()=>{if(!e())return;let p=f.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let f=c;return c=!1,f}}}var du=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,gravity:i,settings:s,boxes:r,velocity:o,movement:a,reach:l}){this.dt=t,this.settings=s,this.boxes=r,this.contacts=0,this.released=!1,this.intent.set(0,0,0),a.set(0,0,0),this.flight.copy(o),this.flight.y-=i*t,this.flight.multiplyScalar(t);for(let c of this.hands){let{hand:u,normal:d,offset:h}=c,f=u.surface;if(c.released=null,u.surface=null,c.releaseTime=Math.max(0,c.releaseTime-t),c.eligible=u.valid&&!u.held&&s.movement!==!1,!u.valid)continue;let p=u.locomotionTarget.subVectors(u.target,e).clampLength(0,l).add(e);if(h.set(0,0,-.036).applyQuaternion(u.mesh.quaternion),!c.eligible)continue;let x=f&&r.includes(f)&&!f.objectBody?.owner,g=x&&f.objectBody;g&&(c.previousPalm.copy(c.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),d.copy(c.localNormal).applyQuaternion(g.mesh.quaternion)),x&&u.anchor.copy(c.previousPalm).sub(h),this.from.copy(p).add(h),c.tracked&&this.from.copy(c.previousPalm),this.to.copy(p).add(h),x||this.to.add(this.flight),this.to.y-=Math.min(.003,i*t*t);let m=this.sweep(c,this.from,this.to);if(x){let P=this.correction.subVectors(p,u.anchor),S=P.dot(d)<=.035&&u.anchor.distanceToSquared(e)<=(l+.035)**2&&P.lengthSq()<=Math.max(.12,l*.5)**2;S&&(!m||m===f&&this.hitNormal.dot(d)>.7)?(m=f,this.hit.copy(u.anchor).add(h),this.hitNormal.copy(d)):!S&&m===f&&P.dot(d)>.035&&(m=null),!m&&c.tracked&&(c.released=f,this.released=!0)}if(!m)continue;u.anchor.copy(this.hit).sub(h),d.copy(this.hitNormal);let w=m.friction??.8,b=Math.min(1,Math.max(0,w*(.75+s.grip*.09))),_=Math.min(.97,Math.max(0,1-b+(s.slide-3)*.035)),E=this.correction.subVectors(u.anchor,p),I=E.dot(d);if(E.addScaledVector(d,-I),E.lengthSq()*_**2>.003**2){if(this.to.copy(u.anchor).add(h).addScaledVector(E,-_),this.from.copy(this.to).addScaledVector(d,.003),this.to.addScaledVector(d,-.003*2),this.supportBoxes[0]=m,this.palmContact(this.from,this.to,u.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))u.anchor.copy(this.hit).sub(h);else if(_>.5&&E.lengthSq()>.035**2)continue}E.subVectors(u.anchor,p),x&&E.dot(d)<0&&E.addScaledVector(d,-E.dot(d)),a.add(E);let D=m.objectBody;if(D){let P=c.inverseRotation.copy(D.mesh.quaternion).invert();c.localAnchor.copy(u.anchor).add(h).sub(D.mesh.position).applyQuaternion(P),c.localNormal.copy(d).applyQuaternion(P)}if(u.surface=m,this.contacts++,c.tracked){let P=this.handMotion.subVectors(c.previousTarget,p),S=P.dot(d);P.multiplyScalar(1-_).addScaledVector(d,Math.max(0,S)-S*(1-_)),this.intent.add(P)}}this.contacts?(a.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),o.set(0,0,0)):(a.copy(this.flight),o.y-=i*t),this.planned.copy(a)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let f of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=f;f.tracked=f.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=s,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let f=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(f,this.planned.length()))}let u=.065;this.average.set(0,0,0);for(let f=0;f<o.length&&u>0;f++){let p=o[(this.historyIndex-f+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/.065),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let f=0;f<2;f++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:h}=this.settings;if(this.average.lengthSq()<(1.05+.04*h)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*h)),t.clampLength(0,8.5+.28*d);for(let f of this.hands){let p=f.hand.surface??f.released;p&&(f.releaseSurface=p,f.releaseTime=.08,f.hand.surface=null,f.previousPalm.copy(f.previousTarget).add(f.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function hg(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new rt,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=ug(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let p=ug(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function ug(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Ot(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let x=u.getComponent(h,p);a.setComponent(h+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var pu=0,Db=1,Ub=new M,dg=new na,Gd=new Sn,fg=new M,fu=new bn,mu=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new gu,this.unassigned=new gu,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Hd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Ub)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===pu){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let h=0;h<3;h++){let f=s[h].point.getComponent(h)-i[h].point.getComponent(h);f>r&&(r=f,o=h)}let a=i[o],l=s[o],c,u;r=0,dg.set(a.point,l.point);for(let h=0,f=this.vertices.length;h<f;h++){let p=e[h];if(p!==a&&p!==l){dg.closestPointToPoint(p.point,!0,fg);let x=fg.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Gd.setFromCoplanarPoints(a.point,l.point,c.point);for(let h=0,f=this.vertices.length;h<f;h++){let p=e[h];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Gd.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(Gd.distanceToPoint(u.point)<0){d.push(Qn.create(a,l,c),Qn.create(u,l,a),Qn.create(u,c,l),Qn.create(u,a,c));for(let h=0;h<3;h++){let f=(h+1)%3;d[h+1].getEdge(2).setTwin(d[0].getEdge(f)),d[h+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(Qn.create(a,c,l),Qn.create(u,a,l),Qn.create(u,l,c),Qn.create(u,c,a));for(let h=0;h<3;h++){let f=(h+1)%3;d[h+1].getEdge(2).setTwin(d[0].getEdge((3-h)%3)),d[h+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let h=0;h<4;h++)this.faces.push(d[h]);for(let h=0,f=e.length;h<f;h++){let p=e[h];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===pu&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Db;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===pu&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=Qn.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Qn=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=pu,this.edge=null}static create(e,t,i){let s=new n,r=new ma(e,s),o=new ma(t,s),a=new ma(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return fu.set(e.point,t.point,i.point),fu.getNormal(this.normal),fu.getMidpoint(this.midpoint),this.area=fu.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ma=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Hd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},gu=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Ps=class extends rt{constructor(e=[]){super();let t=[],i=[],r=new mu().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Xe(t,3)),this.setAttribute("normal",new Xe(i,3))}};var En=Math.PI*2,xu=.84,Ei=128;function Ji(n){let e=new Uint8Array(Ei*Ei*4);for(let i=0;i<Ei;i++)for(let s=0;s<Ei;s++){let r=(s+.5)/Ei,o=(i+.5)/Ei,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/xu,1),Math.min(o/xu,1),s,i),l=(s+i*Ei)*4;for(let c=0;c<3;c++)e[l+c]=je.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new xs(e,Ei,Ei);return t.colorSpace=_t,t.generateMipmaps=!0,t.minFilter=Hn,t.magFilter=yn,t.needsUpdate=!0,t}function Ls(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Qe(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Ge(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*xu,r.getY(l)*xu):r.setXY(l,.95,.95);return i.setAttribute("color",new Ot(a,3)),i}function ji(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:hg(s),material:new qt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function pg(n,e,t){let i=n/2,s=e/2,r=new ys;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Yi(n,e,t,i,s){return new qo(pg(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Zi(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,h]=n[u];for(let f=0;f<=e;f++){let p=En*f/e,x=t(d,h,p,u);if(i.push(x*Math.sin(p),h,x*Math.cos(p)),s.push(f/e,u/(n.length-1)),u===n.length-1||f===e)continue;let g=u*(e+1)+f,m=g+e+1;d>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new rt;o.setAttribute("position",new Xe(i,3)),o.setAttribute("uv",new Xe(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),h=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,h)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(h,l.x,l.y,l.z)}return o}function ga(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=En*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new Ps(t)}function Nb(){let t=new Yo(pg(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=je.clamp(i.getX(l)/.098+.5,0,1),u=je.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=Ji((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*En),h=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:h||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[Qe(Yi(.106,.207,.013,.011,.0019),8425890),Qe(Yi(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),Qe(Yi(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),Qe(t,16777215,!0),Qe(Yi(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),Qe(new it(.0036,.024,.004).translate(.055,.029,0),11714250),Qe(new it(.0036,.015,.004).translate(-.055,.032,0),11385285),Qe(new it(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(Qe(new Qt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(Qe(new Vt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(Qe(new Vt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ps([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return ji("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Fb(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Zi(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),h=Math.max(...e.map(f=>Math.exp(-(((l-f+d)/.014)**2))));return a*(1-.14*u**6*h+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Ji((a,l,c,u)=>{let d=En*a,h=(l*2-1)*.275,f=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(w=>Math.exp(-(((h-w+.035*Math.cos(d))/.009)**2)))),x=f**3*p,g=Ls(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=ga([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return ji("bread","Baguette de pain",.27,o,[Qe(s,16777215,!0)],r,.9)}function Bb(){let n=Ji((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,h=Math.abs(o-.5)<.013,p=46+12*Ls(a,l)-(c&&(d||h)?35:0);return[p*.94,p,p*1.04]}),e=Zi([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Zi([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[Qe(e,16777215,!0),Qe(t,11056059),Qe(new Qt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),Qe(new Qt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=En*r/5;i.push(Qe(new it(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=ga([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return ji("wheel","Roue",1.8,s,i,n,.64,.23)}function Ob(){let n=Ji((r,o,a,l)=>{let c=Ls(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(En*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Zi([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Ms(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+En*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new Ps(i);return ji("cup","Tasse",.39,s,[Qe(e,16777215,!0),Qe(t,15785922)],n,.37)}function zb(){let n=Zi([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Ji((s,r,o,a)=>{let l=9*Ls(o,a),c=11*Math.cos(s*En*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*En*48+s*En*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*En*4);return[u,u*1.13,u*1.24]}),t=[Qe(n,16777215,!0),Qe(new Ar(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),Qe(new Vt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),Qe(new Vt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),Qe(new Qt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),Qe(new Vt(.008,12).translate(0,.035,.0336),15633202)],i=ga([[.033,-.143],[.054,.133]],6);return ji("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function Vb(){let n=Zi([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Ji((r,o,a,l)=>{let c=10*Ls(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),h=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(En*r*2));if(e[h]?.[d]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(En*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[Qe(n,16777215,!0),Qe(new Vt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),Qe(new Ar(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),Qe(new Vt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=ga([[.069,-.112],[.069,.109]],6);return ji("soda","Canette de soda",.35,s,i,t,.42,.27)}function kb(){let n=Zi([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Ji((s,r,o,a)=>{let l=15*Ls(o,a),c=8*Math.cos(s*En*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[Qe(n,16777215,!0),Qe(Yi(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),Qe(new Vt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=ga([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return ji("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function Gb(){let n=Ji((s,r,o,a)=>{let l=8*Ls(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let h=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return h||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Zi([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[Qe(Yi(.138,.22,.061,.016,.004),14788675),Qe(Yi(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),Qe(new Xt(.106,.174).translate(0,-.004,.0395),16777215,!0),Qe(e,2502456),Qe(new Qt(.014,.017,.016,10).translate(.04,.117,.001),2503482),Qe(new it(.008,.047,.027).translate(-.072,.014,-.002),3028798),Qe(new it(.006,.02,.019).translate(-.072,-.043,-.002),3950414),Qe(new Vt(.004,8).translate(.04,.066,.0397),15817792),Qe(new Vt(.004,8).translate(-.04,.066,.0397),7903100),Qe(Yi(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return ji("radio","Talkie-walkie",.43,new Ps(i),t,n,.61,.08)}function mg(){return[Nb(),Fb(),Bb(),Ob(),zb(),Vb(),kb(),Gb()]}var Dt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),gg=Dt(-24,24,-51,7),yu={x:0,y:0,z:3},_u={x:.05,y:1.16,z:5.9},zr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Dt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Dt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Dt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Dt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Dt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Dt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Dt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Dt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Dt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Dt(9,23,-48,-37),sign:[16,-38.2]}},nE=[Dt(-9,-6,-51,7),Dt(6,9,-51,7),Dt(-24,24,-8,-5),Dt(-24,24,-27,-23),Dt(9,23,-37,-34)],xg=[{name:"Glace",bounds:zr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:zr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Dt(-9,9,-51,7)},{name:"Sol ouest",bounds:Dt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Dt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Dt(-24,-23,-51,7)},{name:"Sol est",bounds:Dt(9,23,-51,-48)},{name:"Sol est",bounds:Dt(9,23,-37,7)},{name:"Bordure est",bounds:Dt(23,24,-51,7)}],Vr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},kr=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Wd=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Xd={x:16,z:-31},qd={x:16,y:1.52,z:-21},vu={x:-19.4,y:.68,z:-3.25},yg=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),_g={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",qd.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Mu(n,e,t){let i=new it(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}var Cn=new Je,Ut=new M,Ru=new M,Hb=new ct,vg=new WeakMap;function Du(n){if(n.heightfield||n.objectBody)return null;let e=vg.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=Hb.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return vg.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function Eg(n,e,t){let i=Du(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Iu(n,e,t,i){if(t.heightfield)return t1(n,e,t,i);if(t.objectBody)return Og(n,e,t.objectBody,i);if(!Eg(n,e,t))return 0;Cn.copy(t.quaternion).invert(),Ut.copy(n).sub(t.position).applyQuaternion(Cn);let s=t.half;Ru.copy(Ut).clamp(t.min,s),i.subVectors(Ut,Ru);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Ut.x),a=s.y-Math.abs(Ut.y),l=s.z-Math.abs(Ut.z);return o<=a&&o<=l?i.set(Math.sign(Ut.x)||1,0,0):a<=l?i.set(0,Math.sign(Ut.y)||1,0):i.set(0,0,Math.sign(Ut.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var nt=new M,Ci=new M;function nf(n,e,t,i,s=0,r=0,o=0){let a=!1;for(let l=0;l<3;l++)for(let c of t){let u=Iu(n,e,c,nt);if(!u||(n.addScaledVector(nt,u+1e-4),nt.y>.65&&(a=!0),!i))continue;let d=i.dot(nt);d<0&&i.addScaledVector(nt,-d*(Math.abs(d)<.55?1:1+s)),Ci.copy(i).addScaledVector(nt,-i.dot(nt)),i.addScaledVector(Ci,-Math.min(.95,r*c.friction*o))}return a}var Yd=new M,Xr=[];function Sa(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Xr.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,h=Math.max(n.z,e.z)+t;for(let f of i){let p=Du(f);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&h>=p.minZ&&d<=p.maxZ)&&Xr.push(f)}for(let f=1;f<=o;f++){Yd.copy(n).lerp(e,f/o);for(let p of Xr){let x=Iu(Yd,t,p,nt);if(x)return s.copy(Yd).addScaledVector(nt,x+.001),r.copy(nt),p}}return null}var _a=new M,Ma=new M,qr=new M,Cg=new bn,va=new M;function ba(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=_=>new M().fromBufferAttribute(t,n.index?n.index.getX(_):_),g=x(p),m=x(p+1),w=x(p+2),b=new bn(g,m,w).getNormal(new M);b.lengthSq()>.1&&s.push({a:g,b:m,c:w,n:b})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new un().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),h=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:h,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Rg(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Cn.copy(t.quaternion).invert(),Ut.copy(n).sub(t.position).applyQuaternion(Cn),i.faces.every(r=>r.n.dot(_a.subVectors(Ut,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)Cg.set(r,o,a).closestPointToPoint(Ut,va),s=Math.min(s,Ut.distanceToSquared(va));return Math.sqrt(s)}function Wb(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=Iu(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Cn.copy(e.quaternion).invert(),Ut.copy(s.position).sub(e.position).applyQuaternion(Cn),Ru.copy(Ut).clamp(e.min,e.half),Ut.distanceToSquared(Ru)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){_a.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=Iu(_a,.007,e,qr);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(_a),t.copy(qr)):Math.abs(c-o)<.003&&qr.dot(t)>.98&&(i.lerp(_a,1/++a),o=Math.max(o,c)))}return o}var Su=new M,Xb=new M,bu=new M,qb=new M,Yb=new M;function Ri(n){return ba(new it(n.x*2,n.y*2,n.z*2))}function Uu(n,e,t){let i=qb.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=Yb.copy(o).negate(),c=Ns(n,l)+Ns(e,o)-a,u=Ns(n,o)+Ns(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(Su.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(Su.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){bu.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(Su.copy(a).applyQuaternion(e.mesh.quaternion).cross(bu)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(Xb.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Cn.copy(a.mesh.quaternion).invert(),Ut.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Cn);for(let{a:c,b:u,c:d}of a.shape.faces){Cg.set(c,u,d).closestPointToPoint(Ut,va);let h=Ut.distanceToSquared(va);h<l&&(l=h,bu.copy(va))}if(!r(Su.subVectors(Ut,bu).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var Zb=new M;function Jb(n,e,t){Cn.copy(e.quaternion).invert(),Ut.copy(n.mesh.position).sub(e.position).applyQuaternion(Cn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Ut.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Ut.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+Ns(n,Zb.copy(t).negate())-s,a=r+Ns(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function sf(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return Wb(n,e,t,i??Ma);let s=Jb(n,e,t)??Uu(n,e,t);return s>0&&i&&Lg(n,e,t,i),s}var Qd=ba(new vs(1,0).scale(.055,.033,.075)),wu={mesh:{position:new M,quaternion:new Je},shape:Qd,radius:Qd.radius,precise:!0};function Ig(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Qd.radius;Xr.length=0;for(let c of i){let u=Du(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Xr.push(c)}wu.mesh.quaternion.copy(t);let l=wu.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Xr){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let h=d?Uu(wu,d,nt):sf(wu,u,nt);if(h>0)return s.copy(l).addScaledVector(nt,h+5e-4),r.copy(nt),u}}return null}function wa(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!Eg(n.mesh.position,n.radius,s))continue;let r=sf(n,s,nt);r<=1e-6||(n.mesh.position.addScaledVector(nt,r),i=!0)}if(!i)break}}var Zd=new M,xa=new M,Tu=new M,Jd=new Je,Ki=new Je,Mg=new Je;function Sg(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Pg(n,e,t,i,s){let{mesh:r,shape:o}=n;Zd.copy(r.position),Jd.copy(r.quaternion),xa.subVectors(e,Zd);let a=Sg(Jd,t,Ki),l=xa.length()+a*o.radius,c=Fg(o),u=Math.max(1,Math.min(Ng,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,h=a*d/u;Tu.set(Ki.x,Ki.y,Ki.z).normalize(),Mg.setFromAxisAngle(Tu,h),xa.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(xa),r.quaternion.premultiply(Mg).normalize(),wa(n,i);let f=Math.max(.006,s||0);n.velocity.lerp(xa.subVectors(r.position,Zd).divideScalar(f).clampLength(0,23),.52);let p=Sg(Jd,r.quaternion,Ki);Tu.set(Ki.x,Ki.y,Ki.z).normalize().multiplyScalar(Math.min(24,p/f)),n.angular.lerp(Tu,.52)}function Ns(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Cn.copy(n.mesh.quaternion).invert(),qr.copy(e).applyQuaternion(Cn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(qr));return t}var Wr=new M,Pu=new M,jb=new M,jd=new M,Gr={},Hr={};function bg(n,e,t,i){let{mesh:s,shape:r}=n,o=Ns(n,jb.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(Wr),i.minV=i.maxV=s.position.dot(Pu);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(qr)<o-.0015)continue;jd.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=jd.dot(Wr),c=jd.dot(Pu);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Lg(n,e,t,i){Math.abs(t.y)<.8?Wr.set(-t.z,0,t.x).normalize():Wr.set(t.y,-t.x,0).normalize(),Pu.crossVectors(t,Wr),bg(n,t,-1,Gr),bg(e,t,1,Hr);let s=(Math.max(Gr.minU,Hr.minU)+Math.min(Gr.maxU,Hr.maxU))*.5,r=(Math.max(Gr.minV,Hr.minV)+Math.min(Gr.maxV,Hr.maxV))*.5;i.copy(t).multiplyScalar((Gr.plane+Hr.plane)*.5).addScaledVector(Wr,s).addScaledVector(Pu,r)}var wg=new M;function Lu(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)wg.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(wg)}}function Kb(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Dg(n){return!n.owner&&!n.frozen}var Ds=new M,Us=new M,ya=new M,Tg=new M,ef=new M,tf=new M,$b=new M;function Au(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function Ug(n,e,t,i){let{mesh:s,shape:r}=n.body;return Cn.copy(s.quaternion).invert(),ef.crossVectors(e,t),i.copy(ef).applyQuaternion(Cn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function Eu(n,e,t){return n?.inverseMass?(Ug(n,e,t,tf),n.inverseMass+ef.dot(tf)):0}function Cu(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(Ug(n,e,t,tf),i))}function Kd(n){return n.friction??n.spec?.friction??.78}function Ag(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(Kd(r)*Kd(o)):Math.min(Kd(r),t.friction??.78);Ds.subVectors(Ma,r.mesh.position),o&&Us.subVectors(Ma,o.mesh.position),Au(n,Ds,ya).sub(Au(e,Us,Tg));let l=ya.dot(nt),c=!1;if(l<-1e-5){let d=l<-.8?je.clamp(s*(t?.bounce??1),0,.98):0,h=-l*(1+d)/(Eu(n,Ds,nt)+Eu(e,Us,nt));Cu(n,Ds,nt,h),Cu(e,Us,nt,-h),Au(n,Ds,ya).sub(Au(e,Us,Tg)),Ci.copy(ya).addScaledVector(nt,-ya.dot(nt));let f=Ci.length();if(f>1e-5&&a>0){Ci.divideScalar(f);let p=Math.min(h*a,f/(Eu(n,Ds,Ci)+Eu(e,Us,Ci)));Cu(n,Ds,Ci,-p),Cu(e,Us,Ci,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(nt,u*n.inverseMass/d),Lu(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(nt,-u*e.inverseMass/d),Lu(e)),c=!0}return n.inverseMass&&nt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,nt.y)),e?.inverseMass&&nt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-nt.y)),c}function Qb(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Ng=96,e1=5;function Fg(n){return Math.max(.008,n.thickness*.35)}function Bg(n,e,t,i,s,r){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:Du(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1)continue;let d=Dg(u);if(d){let f=Math.min(u.angular.length(),30),p=u.velocity.length()+f*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/Fg(u.shape)))}let h={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new un,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Lu(h),o.push(h)}l=Math.min(Ng,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:h}=d,{mesh:f,velocity:p,angular:x}=h;d.groundFriction=0,d.groundY=0,p.y-=i*c*(r?.(f.position)?.gravity??1),f.position.addScaledVector(p,c);let g=x.length();g>1e-5&&f.rotateOnWorldAxis($b.copy(x).divideScalar(g),Math.min(g,30)*c),Lu(d)}for(let d=0;d<e1;d++){let h=!1;for(let f of o)if(f.inverseMass)for(let{box:p,bounds:x}of a){if(!Kb(f.bounds,p,x))continue;let g=sf(f.body,p,nt,Ma);g>0&&(h=Ag(f,null,p,g,s)||h)}for(let f of o)f.sweepStart=f.bounds.min.x,f.sweepEnd=f.bounds.max.x;o.sort((f,p)=>f.sweepStart-p.sweepStart);for(let f=0;f<o.length;f++){let p=o[f];for(let x=f+1;x<o.length;x++){let g=o[x];if(g.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!g.inverseMass||!p.bounds.intersectsBox(g.bounds))continue;let m=Uu(p.body,g.body,nt);m<=0||(Lg(p.body,g.body,nt,Ma),h=Ag(p,g,null,m,s)||h)}}if(!h)break}for(let d of o)d.inverseMass&&Qb(d,c)}}function t1(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(n.y-s>=e*1.6)return 0;let r=.045,o=(t.height(n.x+r,n.z)-t.height(n.x-r,n.z))/(2*r),a=(t.height(n.x,n.z+r)-t.height(n.x,n.z-r))/(2*r);return i.set(-o,1,-a).normalize(),Math.max(0,e-(n.y-s)*i.y)}var $d={mesh:{position:null,quaternion:new Je},shape:{sphereRadius:0,normals:[],edges:[]}};function Og(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:($d.mesh.position=n,$d.shape.sphereRadius=e,Uu($d,t,i))}function zg(n,e,t,i){let s=Og(n,e,t,nt);if(s<=0)return!1;n.addScaledVector(nt,s+.001);let r=i.dot(nt);return r<0&&(i.addScaledVector(nt,-r),Math.abs(nt.y)<.6&&Dg(t)&&t.velocity.addScaledVector(nt,-Math.min(2.8,-r*.24))),!0}var rf=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"];var kg={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Nu=3e6,Ta=240,fn=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Vg=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Fu(n){if(typeof n=="string"){if(n.length>Nu)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ta)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ta+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,name:Vg(n.name,56,"Ma map"),spawn:{x:fn(e.x,-120,120,0),y:fn(e.y,-10,30,.06),z:fn(e.z,-120,120,3),yaw:fn(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));return{name:Vg(t.name,36,"Pi\xE8ce "+(i+1)),x:fn(t.x,-120,120,0),y:fn(t.y,-12,33,0),z:fn(t.z,-120,120,0),w:fn(t.w,.2,64,3),h:fn(t.h,.12,36,.5),d:fn(t.d,.2,64,3),pitch:fn(t.pitch,-70,70,0),yaw:fn(t.yaw,-360,360,0),material:Math.round(fn(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:fn(t.grip,0,1.5,.8),gravity:fn(t.gravity,.05,2.5,1),bounce:fn(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function Bu(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Gg(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=t.pitch*Math.PI/180,r=t.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),u=e,d=Math.abs(u.x*l-u.z*c)*t.w*.5+Math.abs(u.x*c*a+u.y*o+u.z*l*a)*t.h*.5+Math.abs(u.x*c*o-u.y*a+u.z*l*o)*t.d*.5,h=m=>Math.round(m/i)*i,f=h(n.x+u.x*d),p=h(n.y+u.y*d),x=h(n.z+u.z*d),g=d-(f-n.x)*u.x-(p-n.y)*u.y-(x-n.z)*u.z;return f+=u.x*g,p+=u.y*g,x+=u.z*g,![f,p,x].every(Number.isFinite)||Math.abs(f)>120||Math.abs(x)>120||p<-12||p>33?null:{...t,x:f,y:p,z:x}}var Aa="gorilla-lab-custom-map-v1";function Hg(n){let e=new Blob([JSON.stringify(Fu(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function Wg({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new Ct;n.add(l);let c=[],u=[],d=new Ko,h=null,f="",p=-1,x=-1,g="",m="",w=new it(1,1,1),b=new Ve(w,new vt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));b.visible=!1,n.add(b);let _=new bs,E=new M,I=new M,D=document.querySelector("#map-note");function P($){g=$,D.textContent=$}function S(){u.length>=20&&u.shift(),u.push(JSON.stringify(h))}function v($){let U=e.mapMaterial($.material,r());if(!$.texture&&$.color==="#ffffff")return{material:U,custom:!1};let N=U.clone();return N.onBeforeCompile=U.onBeforeCompile,N.customProgramCacheKey=U.customProgramCacheKey,N.color.multiply(new Ge($.color)),$.texture&&(N.map=d.load($.texture,ae=>{(ae.image.width>2048||ae.image.height>2048)&&(N.map=null,ae.dispose(),N.needsUpdate=!0,P("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px."))},void 0,()=>{N.map=null,N.needsUpdate=!0}),N.map.colorSpace=_t,N.map.wrapS=N.map.wrapT=si),{material:N,custom:!0,ownTexture:!!$.texture}}function R($){l.remove($.mesh),$.mesh.geometry.dispose(),$.custom&&($.ownTexture&&$.mesh.material.map?.dispose(),$.mesh.material.dispose())}function F($,U){let{material:N,custom:ae,ownTexture:ue}=v($),Q=new Ve(Mu($.w,$.h,$.d),N);Q.position.set($.x,$.y,$.z),Q.rotation.set(je.degToRad($.pitch),je.degToRad($.yaw),0,"YXZ"),Q.castShadow=Q.receiveShadow=!0,Q.userData.mapIndex=U,l.add(Q);let Me=new M($.w/2,$.h/2,$.d/2),Pe={mesh:Q,position:Q.position,quaternion:Q.quaternion,half:Me,min:Me.clone().negate(),shape:Ri(Me),friction:$.grip,gravity:$.gravity,bounce:$.bounce,zone:!0,type:$.material};return{mesh:Q,collider:Pe,custom:ae,ownTexture:ue}}function Y(){for(let $ of c){let U=h?.pieces[$.mesh.userData.mapIndex];if(!U||$.ownTexture)continue;let N=e.mapMaterial(U.material,r());$.custom?$.mesh.material.map!==N.map&&($.mesh.material.map=N.map,$.mesh.material.needsUpdate=!0):$.mesh.material=N}}function Z(){for(let U of c)R(U);c.length=0;let $=h?.pieces??[];f=h?"custom-"+pa(JSON.stringify(h)):"",o.forEach(U=>U.visible=!h);for(let U=0;U<$.length;U++)c.push(F($[U],U));if(h?e.boxes.splice(0,e.boxes.length,...c.filter((U,N)=>$[N].solid).map(U=>U.collider)):e.boxes.splice(0,e.boxes.length,...a),l.updateMatrixWorld(!0),e.bakeLightmap(),s(),h)try{localStorage.setItem(Aa,JSON.stringify(h))}catch{}else try{localStorage.removeItem(Aa)}catch{}}function j($){let U=Fu($);u.length=0,h=U,p=x=-1,t.set(h.spawn.x,h.spawn.y,h.spawn.z),Z(),i(h.spawn.yaw),P("Map : "+h.name+" \xB7 "+h.pieces.length+" pi\xE8ces")}function J(){h=null,u.length=0,p=x=-1,t.set(0,0,3),Z(),i(0),P("Ar\xE8ne int\xE9gr\xE9e")}function ee(){j({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Bu({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function G(){if(!u.length)return P("Rien \xE0 annuler.");h=Fu(u.pop()),p=x=-1,t.set(h.spawn.x,h.spawn.y,h.spawn.z),Z(),P("Derni\xE8re modification annul\xE9e.")}function te(){h?Hg(h):P("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function fe($,U,N,ae){h&&(S(),h.spawn={x:$,y:U,z:N,yaw:je.radToDeg(ae)},t.set($,U,N),Z(),P("Point de d\xE9part m\xE9moris\xE9."))}function le($,U,N,{mode:ae,piece:ue,head:Q,feet:Me}){_.set($,U),_.far=12;let Pe=_.intersectObjects(c.map(re=>re.mesh),!1)[0];if(b.visible=!1,!h)return;if(ae===2||ae===3||ae===4){if(!Pe)return;let re=Pe.object.userData.mapIndex,ie=h.pieces[re];if(N&&ae===2&&(p=re,x=re,P("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),N&&ae===3){if(h.pieces.length===1)return P("Garde au moins une pi\xE8ce dans la map.");S(),h.pieces.splice(re,1),p=x=-1,Z(),P("Pi\xE8ce supprim\xE9e.")}N&&ae===4&&(S(),Object.assign(h.pieces[re],{material:ue.material,grip:ue.grip,gravity:ue.gravity,bounce:ue.bounce,solid:ue.solid}),Z(),P("Surface modifi\xE9e.")),Pe&&(b.position.copy(Pe.object.position),b.rotation.copy(Pe.object.rotation),b.scale.set(ie.w,ie.h,ie.d).multiplyScalar(1.006),b.visible=!0,b.material.color.set(ae===3?"#ff8271":"#ffe2a2"));return}if(!Pe)return;let T=x>=0?h.pieces[x]:ue;if(Pe.object.userData.mapIndex===x)return;E.copy(Pe.face.normal).transformDirection(Pe.object.matrixWorld);let V=Gg(Pe.point,E,T);if(!V)return;b.position.set(V.x,V.y,V.z),b.rotation.set(je.degToRad(V.pitch),je.degToRad(V.yaw),0,"YXZ"),b.scale.set(V.w,V.h,V.d),b.updateMatrixWorld(!0),b.visible=!0;let B=new un().setFromObject(b),k=new un(new M(Q.x-.26,Me+.01,Q.z-.26),new M(Q.x+.26,Q.y+.19,Q.z+.26)),z=V.solid&&B.intersectsBox(k);if(b.material.color.set(z?"#fd7763":"#8be4b9"),N){if(z)return P("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(x<0&&h.pieces.length>=Ta)return P("Limite de "+Ta+" pi\xE8ces atteinte.");S(),x>=0?(h.pieces[x]=V,x=-1):h.pieces.push(V),Z(),P("Pi\xE8ce pos\xE9e \xB7 "+h.pieces.length+" pi\xE8ces")}}let me=document.querySelector("#map-file"),Ae=document.querySelector("#map-url");me.onchange=async()=>{let $=me.files[0];if($)try{if($.size>Nu)throw Error("Map trop lourde.");j(await $.text())}catch(U){P(U.message)}finally{me.value=""}};async function Ce($){try{let U=new URL($,location.href);if(!["http:","https:"].includes(U.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let N=await fetch(U,{credentials:"omit"});if(!N.ok)throw Error("URL de map inaccessible ("+N.status+").");if(Number(N.headers.get("content-length"))>Nu)throw Error("Map trop lourde.");j(await N.text())}catch(U){P(U.message)}}return document.querySelector("#map-load-url").onclick=()=>Ce(Ae.value),document.querySelector("#map-export").onclick=te,document.querySelector("#map-reset").onclick=J,{refreshMaterials:Y,load:j,loadURL:Ce,reset:J,blank:ee,undo:G,save:te,edit:le,recenter:fe,inform:P,clearGhost(){b.visible=!1},get active(){return!!h},get status(){return g},get yaw(){return h?.spawn.yaw??0},get nodes(){return h?.pieces.length??0},get name(){return h?.name??null},get signature(){return f}}}function Xg(n){let e=new gs,t=new Ft;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new be(1,1)},bloom:{value:0},exposure:{value:1}},s=new _n({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}"}),r=new Ve(new Xt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,h)=>{let f=Math.max(0,l.indexOf(h)),p=a[f]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(m=>!m.viewport?.z||!m.viewport?.w))return!1;i.bloom.value=h?.18:0,i.exposure.value=n.toneMappingExposure;let f=n.getRenderTarget(),p=n.xr.enabled,x=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let m=0;m<l.length;m++){let w=l[m],b=Math.max(32,Math.round(w.viewport.z)),_=Math.max(32,Math.round(w.viewport.w)),E=a[m];E?(E.width!==b||E.height!==_)&&E.setSize(b,_):E=a[m]=new wn(b,_,{type:o?li:Bn,minFilter:sn,magFilter:sn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=m===0&&x,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=x,n.xr.enabled=p,n.setRenderTarget(f),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function qg(n){let e={value:0},t={value:Array.from({length:7},()=>new ot(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Yg(n,e,t){let i=new tn({color:16777215,vertexColors:!0,flatShading:!0}),s=new Qt(.16,.25,3.15,9,12),r=s.attributes.position,o=new Ge,a=[];for(let le=0;le<r.count;le++){let me=Math.round((r.getY(le)+1.575)/3.15*12),Ae=Math.floor((Math.atan2(r.getX(le),r.getZ(le))+Math.PI)*1.43);o.setHSL(.084+me*.002,.35,.35+me%3*.032+Ae%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Xe(a,3));let l=new Ct;l.position.set(Xd.x,0,Xd.z),l.rotation.z=-.14,n.add(l);let c=new Ve(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(le,me,Ae=.85){let Ce=le.getWorldPosition(new M),$=le.getWorldQuaternion(new Je);e.push({half:me,min:me.clone().negate(),position:Ce,quaternion:$,mesh:{position:Ce,quaternion:$},shape:Ri(me),friction:Ae,gravity:1})}for(let le=0;le<4;le++){let me=new Bt;me.position.y=(le+.5)*3.15/4,l.add(me);let Ae=.237-le*.022;u(me,new M(Ae,.398,Ae))}let d=[],h=[],f=3.14;function p(le,me,Ae,Ce){d.push(...le,...me,...Ae),o.setHSL(.25+Ce*.043,.54,.28+Ce*.17);for(let $=0;$<3;$++)h.push(o.r,o.g,o.b)}for(let le=0;le<10;le++){let Ce=function($,U){let N=$*Ae;return[Math.cos(me)*N-Math.sin(me)*U,f+Math.sin($*Math.PI)*.38-$*$*.54+le%3*.055,Math.sin(me)*N+Math.cos(me)*U]},me=le*2.39996,Ae=1.35+le%4*.2;for(let $=0;$<7;$++){let U=$/7,N=($+1)/7,ae=.285*Math.sin(Math.PI*U)**.7,ue=.285*Math.sin(Math.PI*N)**.7;for(let Q of[-1,1]){let Me=Ce(U,ae*Q),Pe=Ce(N,ue*Q);Me[1]-=.065,Pe[1]-=.065,p(Ce(U,0),Me,Pe,.31+$%4*.14),p(Ce(U,0),Pe,Ce(N,0),.47+le%3*.16)}}}let x=new rt;x.setAttribute("position",new Xe(d,3)),x.setAttribute("color",new Xe(h,3)),x.computeVertexNormals();let g=new Ve(x,new tn({vertexColors:!0,side:kt,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new qt({color:"#956238",roughness:.92,flatShading:!0}),w=[];for(let le=0;le<5;le++){let me=le*Math.PI*2/5,Ae=new Ve(new en(.124,1),m);Ae.position.set(Math.cos(me)*(.25+le%2*.1),2.88+le%3*.06,Math.sin(me)*(.25+le%2*.1)),Ae.scale.set(.91,1.16,.91),Ae.castShadow=!0,l.add(Ae),w.push(Ae)}l.updateMatrixWorld(!0);let b=[],_=[],E=new tn({color:"#485d5d",flatShading:!0});function I([le,me],Ae,Ce){let $=new Ve(new it(1.72,.91,.57),E);$.position.set(le,.455,me),$.castShadow=$.receiveShadow=!0,n.add($),u($,new M(.86,.455,.285));let U=new Ct;U.position.set(le,1.1,me+.4),U.rotation.x=-.35,n.add(U);let N=new Ve(new it(.64,.36,.055),new tn({color:"#182831"}));U.add(N);let ae=document.createElement("canvas");ae.width=512,ae.height=96;let ue=ae.getContext("2d"),Q=new Gn(ae);Q.colorSpace=_t;let Me=new Ve(new Xt(.61,.095),new vt({map:Q}));Me.position.set(0,.116,.03),U.add(Me);let Pe=.592/Ce.length,T=Ce.map(([B,k],z)=>{let re=new Ve(new it(Pe-.012,.155,.04),new tn({color:"#478086"}));re.position.set(-.296+Pe*(z+.5),-.045,.046),U.add(re),b.push(re),re.userData.touchWidth=Pe-.012;let ie=document.createElement("canvas");ie.width=208,ie.height=172;let de=new Gn(ie);de.colorSpace=_t;let Ue=new Ve(new Xt(Pe-.017,.139),new vt({map:de}));Ue.position.z=.0205,re.add(Ue);let Ne=-1/0;return re.userData.action=()=>{let C=performance.now();C-Ne<250||(Ne=C,k(),D(),re.position.z=.036,setTimeout(()=>{re.position.z=.046},115))},{label:B,context:ie.getContext("2d"),texture:de}});function V(){ue.fillStyle="#182831",ue.fillRect(0,0,512,96),ue.fillStyle="#ffe1a0",ue.font="bold 38px system-ui",ue.fillText(Ae,17,62,478);for(let B of T){let k=B.context;k.fillStyle="#386269",k.fillRect(0,0,208,172),k.fillStyle="#fff2d5",k.textAlign="center",k.font="bold 27px system-ui";let z=(typeof B.label=="function"?B.label():B.label).split("|");z.forEach((re,ie)=>k.fillText(re,104,(z.length>1?68:97)+ie*37,188)),B.texture.needsUpdate=!0}Q.needsUpdate=!0}_.push(V)}function D(){for(let le of _)le()}I(Vr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,kr[0])],["Boule",()=>t.spawn(1,kr[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,kr[0])],["Vider",t.clear]]),I(Vr.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,kr[1])],["Sph\xE8re",()=>t.spawn(5,kr[1])]]),I(Vr.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),I(Vr.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),I(Vr.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),D();let P=new Ct,{x:S,y:v,z:R}=qd;P.position.set(S,v,R),n.add(P);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let le=0;le<3;le++){let me=[.9,.58,.27][le],Ae=new Ve(new Vt(me,20),new tn({color:F[le],side:kt}));Ae.position.z=le*.012,P.add(Ae)}let Y=new Ve(new it(.14,1.5,.14),E);Y.position.set(0,.75-v,-.11),P.add(Y);let Z=0,j=document.createElement("canvas");j.width=256,j.height=64;let J=j.getContext("2d"),ee=new Gn(j);ee.colorSpace=_t;let G=new Ve(new Xt(1.4,.35),new vt({map:ee,side:kt}));G.position.set(0,2.64-v,.02),P.add(G);function te(){J.fillStyle="#182831",J.fillRect(0,0,256,64),J.textAlign="center",J.font="bold 28px system-ui",J.fillStyle="#fff0ce",J.fillText("CIBLE  \xB7  "+Z,128,42),ee.needsUpdate=!0}function fe(le){for(let me of le){if(!me.beforePhysics||me.owner||me.frozen||!me.mesh.visible)continue;let Ae=me.beforePhysics,Ce=me.mesh.position;if(Ae.z<=R||Ce.z>R||me.velocity.z>=-1)continue;let $=(Ae.z-R)/(Ae.z-Ce.z),U=Math.hypot(je.lerp(Ae.x,Ce.x,$)-S,je.lerp(Ae.y,Ce.y,$)-v);U<=.9+me.radius*.45&&(Z+=U<.27?3:U<.58?2:1,te())}}return te(),{targets:b,coconuts:w,redraw:D,updateTarget:fe,score:()=>Z}}function Ea(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var $i=(n,e,t)=>n+(e-n)*t,Yr=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Ou(n,e){let t=Math.floor(n),i=Math.floor(e),s=Yr(0,1,n-t),r=Yr(0,1,e-i);return $i($i(Ea(t,i),Ea(t+1,i),s),$i(Ea(t,i+1),Ea(t+1,i+1),s),r)}function Zg(n,e){return Ou(n,e)*.54+Ou(n*2.07+3.4,e*2.07-6.1)*.26+Ou(n*4.2+9,e*4.2)*.13+Ou(n*8.6,e*8.6-13)*.07}function Jg(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),h=d**.54,f=r.map((p,x)=>$i(p,o[x],h));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,w=0;if(c>.025)if(n){let _=Ea(p+792,l+677);_>.9988&&(w=(_-.9988)*49e3*Yr(.09,.3,c))}else{let[_,E]=s[p],I=2.8*u/(c+.16),D=_*I+3.6,P=E*I-8.1,S=Zg(D,P),v=Zg(D-.12,P-.09);g=Yr(.49,.66,S)*Yr(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-v)*5+(S-.54)*.8))}let b=n?1:$i(.94,1,Yr(.05,.34,c));i[x]=$i(f[0],(139+115*m)*b,g)+w,i[x+1]=$i(f[1],(154+100*m)*b,g)+w*.94,i[x+2]=$i(f[2],(178+77*m)*b,g)+w*.86,i[x+3]=255}}let a=new xs(i,1024,512,Tn);return a.colorSpace=_t,a.wrapS=si,a.magFilter=yn,a.minFilter=Hn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function jg(){return{day:Jg(!1),night:Jg(!0)}}function zu(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Gn(i);return s.colorSpace=_t,s}function Kg(n,e){let{day:t,night:i}=jg(),s=new Ve(new Zo(180,40,20),new vt({map:t,side:on,fog:!1,toneMapped:!1}));n.add(s);let r=zu(128,128,(y,L)=>{let H=y.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);H.addColorStop(0,"#fff8df"),H.addColorStop(.12,"#fff3bd"),H.addColorStop(.18,"rgba(255,225,144,.40)"),H.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=H,y.fillRect(0,0,L,L)}),o=new Do(new vr({map:r,blending:oi,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Rr,a.needsUpdate=!0;let l=new Br(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new $o("#daeaff","#88724c",2.25),u=new ta("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,h=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function p(y){f=h[y]?y:0;let L=h[f];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,d.set(...L.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=f===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][f]}function x(y){if(!u.castShadow)return;let L=u.target.position,H=Math.round(y.x/4)*4,oe=Math.round(y.y/4)*4,W=Math.round(y.z/4)*4;L.x===H&&L.y===oe&&L.z===W||(L.set(H,oe,W),u.position.copy(L).add(d))}let g=0;n.background=new Ge(h[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function w(y,L,H){let[,oe,W]=m[L],ge=512;y.save(),y.scale(H/512,H/512),y.fillStyle=oe,y.fillRect(0,0,ge,ge);let he=L+19;function xe(){return he=Math.imul(he,1664525)+1013904223>>>0,he/4294967296}if(y.fillStyle=W,L===16){for(let ye=0;ye<16;ye++)for(let ce=0;ce<16;ce++)(ce+ye)%2===0&&y.fillRect(ce*32,ye*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let ye=L===15?32:64;y.globalAlpha=.48;for(let ce=0;ce<ge;ce+=ye){y.fillRect(0,ce,ge,L===8?3:2);for(let we=-ye;we<ge;we+=ye)y.fillRect(we+ce/ye%2*(L===2?ye/2:0),ce,2,ye)}}else if([4,5,6,7,10,11,12].includes(L)){let ye=L===5?38:L===7?64:18;for(let ce=0;ce<ye;ce++){y.strokeStyle=W,y.globalAlpha=.08+xe()*.22,y.lineWidth=L===5?1+xe()*8:1+xe()*4;let we=xe()*ge,Be=L===5?.018:.009;y.beginPath();for(let _e=0;_e<=ge;_e+=8){let Te=we+Math.sin(_e*Be+ce)*(L===6||L===7?4:12+ce%5*3)+(L===4?_e*.28:0);_e===0?y.moveTo(_e,Te):y.lineTo(_e,Te)}y.stroke()}}else{y.globalAlpha=.27;for(let ye=0;ye<120;ye++){let ce=xe()*ge,we=xe()*ge,Be=2+xe()*6;y.beginPath(),y.arc(ce,we,Be,0,Math.PI*2),y.fill()}}if(L!==16)for(let ye=0;ye<4400;ye++)y.globalAlpha=.05+xe()*.1,y.fillStyle=xe()>.5?W:"#222324",y.fillRect(xe()*ge,xe()*ge,1+xe()*4,1+xe()*3);y.restore()}let b=new Set([0,2,4,5,8,15,16]),_=m.map(([y,L,H,oe,W,ge],he)=>{let xe=b.has(he)?512:256,ye=zu(xe,xe,we=>w(we,he,xe));ye.wrapS=ye.wrapT=si;let ce=new qt({map:ye,roughness:oe,metalness:W,flatShading:!0,opacity:ge,transparent:ge<1,depthWrite:ge===1});return ce.name=y,ce}),E=_.map(y=>y.map.image),I=512,D=_.map(y=>new tn({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),P={value:0},S={value:.24},v={value:null},R={value:0};function F(){v.value?.dispose(),v.value=zu(512,512,(y,L)=>{y.fillStyle="#ffffff",y.fillRect(0,0,L,L);let H=L/52,oe=L/64;for(let W of Y){if(!W.position||!W.half||W.position.y+W.half.y<.22)continue;let ge=(W.position.x+26)*H,he=(W.position.z+54)*oe,xe=Math.min(55,W.half.x*H+5),ye=Math.min(72,W.half.z*oe+6);y.save(),y.translate(ge+W.half.y*H*.2,he+W.half.y*oe*.24),y.scale(xe,ye);let ce=y.createRadialGradient(0,0,.15,0,0,1);ce.addColorStop(0,"rgba(22,37,65,.54)"),ce.addColorStop(.58,"rgba(36,54,76,.29)"),ce.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=ce,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[..._,...D])y.onBeforeCompile=L=>{L.uniforms.uFocusAmount=P,L.uniforms.uFocusRadius=S,L.uniforms.uLabLightmap=v,L.uniforms.uLabBakedStrength=R,L.vertexShader=`varying vec3 vLabPosition;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),L.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+L.fragmentShader,L.fragmentShader=L.fragmentShader.replace("#include <map_fragment>",`
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let Y=[],Z=[];function j(y,L,H,oe,W,ge,he,xe=0,ye=0,ce=1,we=1,Be=!1){let _e=new Ve(Be?new it(W,ge,he):Mu(W,ge,he),_[xe]);_e.position.set(L,H,oe),_e.rotation.x=ye,_e.receiveShadow=!0,_e.castShadow=!0,n.add(_e);let Te=new M(W/2,ge/2,he/2),ke={mesh:_e,position:_e.position,quaternion:_e.quaternion,half:Te,min:Te.clone().negate(),friction:ce,gravity:we,name:y,type:xe,shape:Ri(Te)};return Y.push(ke),ke}let J=xg.map(({name:y,bounds:L,type:H=0,friction:oe=.78,gravity:W=1})=>{let{xMin:ge,xMax:he,zMin:xe,zMax:ye}=L;return j(y,(ge+he)/2,-.33,(xe+ye)/2,he-ge,.66,ye-xe,H,0,oe,W)});for(let y of Object.values(_g))for(let L of y)j(...L);let{xMin:ee,xMax:G,zMin:te,zMax:fe}=gg;j("But\xE9e arri\xE8re",0,1.35,te+.4,G-ee,2.7,.6,2),j("But\xE9e ouest",ee+.3,1.05,(te+fe)/2,.6,2.1,fe-te,2),j("But\xE9e est",G-.3,1.05,(te+fe)/2,.6,2.1,fe-te,2);let{xMin:le,xMax:me,zMin:Ae,zMax:Ce}=zr.hills.bounds,$=me-le,U=Ce-Ae,N=16,ae=64,ue=new Xt($,U,N,ae).rotateX(-Math.PI/2).translate(le+$/2,0,Ae+U/2),Q=ue.attributes.uv;for(let y=0;y<Q.count;y++)Q.setXY(y,Q.getX(y)*$/2.6,Q.getY(y)*U/2.6);let Me=ue.attributes.position,Pe;function T(y){if(Pe===y)return;Pe=y;let L=Pe*.017;for(let H=0;H<Me.count;H++){let oe=Me.getX(H),W=Me.getZ(H),ge=Math.sin(Math.PI*je.clamp((oe-le)/$,0,1)),he=Math.min(1,(W-Ae)*.48,(Ce-W)*.48),xe=.93+.56*Math.sin(W*.36+L)+.32*Math.cos(oe*.67+W*.26+L*1.4)+.19*Math.sin(W*.81+L*.67);Me.setY(H,Math.max(0,ge*he*xe))}Me.needsUpdate=!0,ue.computeVertexNormals(),ue.computeBoundingSphere()}T(Math.floor(Math.random()*1e6));let V=new Ve(ue,_[3]);V.receiveShadow=V.castShadow=!0,n.add(V);let B=(y,L)=>{let H=je.clamp((y-le)/$*N,0,N-1e-6),oe=je.clamp((L-Ae)/U*ae,0,ae-1e-6),W=Math.floor(H),ge=Math.floor(oe),he=H-W,xe=oe-ge,ye=N+1,ce=ge*ye+W,we=Me.getY(ce),Be=Me.getY(ce+1),_e=Me.getY(ce+ye),Te=Me.getY(ce+ye+1);return he+xe<=1?we+(Be-we)*he+(_e-we)*xe:Te+(_e-Te)*(1-he)+(Be-Te)*(1-xe)};Y.push({heightfield:!0,height:B,...zr.hills.bounds,friction:.81,gravity:1});function k(y,L,H,oe,W=1.45){let ge=zu(384,72,(xe,ye,ce)=>{xe.fillStyle="#202a32",xe.fillRect(0,0,ye,ce),xe.fillStyle=oe,xe.font="bold 31px system-ui",xe.textAlign="center",xe.fillText(y,ye/2,48,ye-20)}),he=new Ve(new Xt(3.2,.6),new vt({map:ge,side:kt}));he.position.set(L,W,H),n.add(he),Z.push(he)}for(let y of Object.values(zr)){k(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:L,xMax:H,zMin:oe,zMax:W}=y.bounds,ge=new Uo(new rt().setFromPoints([new M(L,.025,oe),new M(H,.025,oe),new M(H,.025,W),new M(L,.025,W)]),new Sr({color:y.color,transparent:!0,opacity:.72}));n.add(ge),Z.push(ge)}k("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),k("MURS HAUTS",3,-31,"#e8d2ff"),k("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let z=new qt({color:"#c8e6ed",metalness:1,roughness:.16}),re=new Ve(new en(.54,2),z);re.position.set(vu.x,vu.y,vu.z),re.castShadow=!0,n.add(re);let ie=m.map((y,L)=>{let{x:H,z:oe}=yg(L);return j("\xC9chantillon "+m[L][0],H,.325,oe,.65,.65,.65,L,0,1,1,!0).mesh}),de=new Vt(1,12).rotateX(-Math.PI/2),Ue=new vt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ne(y){let L=new Ve(de,Ue);return L.scale.setScalar(y),n.add(L),L}function C(y,L,H,oe,W,ge,he,xe){let ye=L>=3;e.shadowMap.enabled=ye,u.castShadow=ye,Ue.opacity=L===2?.17:.11,R.value=xe?.38+H*.04:0;let ce=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let we=13+L*1.2;Object.assign(u.shadow.camera,{left:-we,right:we,top:we,bottom:-we}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==ce&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(ce,ce)),o.visible=W,he!==I&&(I=he,_.forEach((_e,Te)=>{let ke=_e.userData.texture??_e.map,O=b.has(Te)?he:Math.min(256,he);if(ke.image.width===O)return;let Se=document.createElement("canvas");Se.width=Se.height=O;let Re=Se.getContext("2d");O>512?w(Re,Te,O):Re.drawImage(E[Te],0,0,O,O);let De=new Gn(Se);De.colorSpace=ke.colorSpace,De.wrapS=ke.wrapS,De.wrapT=ke.wrapT,De.repeat.copy(ke.repeat);for(let ve of[_e,D[Te]])ve.userData.texture=De,ve.map=De,ve.needsUpdate=!0;ke.dispose()}));let Be=y>=4;for(let _e of Y)_e.mesh?.isMesh&&!_e.zone&&(_e.mesh.material=Be?_[_e.type]:D[_e.type]);V.material=Be?_[3]:D[3];for(let _e=0;_e<ie.length;_e++)ie[_e].material=Be?_[_e]:D[_e];_.forEach((_e,Te)=>{for(let ke of[_e,D[Te]])ke.userData.texture||(ke.userData.texture=ke.map),ke.map=ge?ke.userData.texture:null,ke.color.set(ge?"#ffffff":m[Te][1]),ke.needsUpdate=!0}),g=oe?.21+H*.067:0,z.metalness=oe?.95:.1,z.roughness=oe?.13:.46,s.visible=y>=2,p(f)}return{boxes:Y,floors:J,probe:re,display:ie,visual:C,shadow:Ne,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Pe},setHillSeed:T,bakeLightmap:F,mapMaterial:(y,L)=>L>=4?_[y]:D[y],builtObjects:[...Y.map(y=>y.mesh).filter(y=>y?.isObject3D),V,re,...Z],materials:[..._,...D],focus(y,L,H){P.value=y?L*.75:0,S.value=.07+H*.058}}}var Jr=document.getElementById("game");Jr instanceof HTMLCanvasElement||(Jr=document.createElement("canvas"),Jr.id="game",Jr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Jr));var tt;try{tt=new Kc({canvas:Jr,antialias:!0,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}tt.xr.enabled=!0;tt.xr.setReferenceSpaceType("local-floor");tt.shadowMap.type=ia;tt.shadowMap.autoUpdate=!1;var $g=-1/0;tt.toneMapping=cc;tt.toneMappingExposure=1.15;var Et=new gs;Et.fog=new Po("#a6d4ea",55,135);var ut=new Ct,Qu=new Ct,Ht=new Ft(70,1,.035,210);ut.add(Qu);Qu.add(Ht);Et.add(ut);var St=Kg(Et,tt),n1=Xg(tt),i1=qg(St.probe),K={timeOfDay:1,shaderMode:1,shadowQuality:10,lightQuality:10,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,contrast:5,saturation:5,exposure:5,warmth:5,bounce:4,throw:5,preciseHitboxes:!1,quality:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,toolMode:1,toolActive:!1,focus:!1,focusStrength:5,focusSize:5,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,textures:!0,reflections:!0,shadows:!0,bloom:!0},s1={...K},bf=new M(yu.x,yu.y,yu.z);ut.position.copy(bf);var Rn=new M,Ca=new M,wt=new M,Qg=new M,Xn=new M,Wn=new M,e0=new M,Fa=new M,Fs=new M,t0=new M,of=new M,n0=new M,i0=new M,s0=.105,r0=new M,Wu=!1,jr=!1,r1=new Je,o1=new M(0,0,1),wf=0,Tf=null,Da=[],Af=100,Rt=new M(0,1,0),di=new Je,mt=0,Pi=0,Qi=0,hi=0,to=NaN,Xu=!1,af=0,Os=0,lf=0,Vu=0,Kr=0,$r=0,Qr=0,Wt=7,Ua=72,Jt=!1,b0="left",jt=0,Va=0,ka=0,mn=!0,o0=0,a1=[],ku=[],ks=St.boxes,l1=new en(1,0),w0=1+Math.floor(Math.random()*(Qc.length-1)),T0=eu(w0),{hand:c1,fur:u1}=T0;function h1(n,e,t,i,s,r,o,a){let l=new Ve(l1,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var ns=T0.createHead();ns.visible=!1;Et.add(ns);var Bs=new M,qu=new Je,a0=new M,l0=new M,c0=new rn(0,0,0,"YXZ"),Ra=0,cf=new Je,u0=[null,null];function eh(){return .24+K.arms*.036}function d1(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=je.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=je.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=je.lerp(r[2],i,s),n.skin.pose(r,!K.body)}var Kt=["left","right"].map(n=>{let e=nu(n,c1,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Et.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new Je},target:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new Je,aimDirection:new M}}),Yu=new du(M,Kt,Ig),A0=iu(u1,Kt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Kt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var es=A0.mesh;Et.add(es);function f1(n,e){if(K.body){cf.copy(es.quaternion).invert();for(let t=0;t<Kt.length;t++){let i=Kt[t];u0[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(es.position).applyQuaternion(cf),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(cf))}A0.pose(u0,eh(),n,e,K.hands)}}var ro=[["Cube",new it(.33,.33,.33),"#b76b50",0,1.35],["Boule",new en(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Jo(.29),"#d8ae53",0,1],["Brique",new it(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new it(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new en(.6,2),"#dbab58",.6,3.7],["Coco",new en(.124,1),"#956238",.124,.44]].map(([n,e,t,i,s])=>({name:n,geo:e,mass:s,shape:ba(e,i),material:new qt({color:t,roughness:.44,metalness:.1,flatShading:!0}),lowShape:i?null:Ri(e.computeBoundingBox()??e.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:n,sphere:e=0,...t}of mg()){let i=ba(n??t.geo,e);ro.push({...t,shape:i,lowShape:i})}var Ga=[0,1,2,3,4,5,7,8,9,10,11,12,13,14],Ha=15,h0=Ri(new M(.13,.088,.115)),p1=new it(.26,.176,.23),m1=new qt({color:"#536771",roughness:.36,metalness:.28});ro[Ha]={name:"Cam\xE9ra du spectateur",geo:p1,material:m1,shape:h0,lowShape:h0,mass:1.2};function g1(n){let e=new Ve(new Qt(.058,.074,.1,12).rotateX(Math.PI/2),new qt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Ve(new Vt(.048,12),new vt({color:"#7bd7ed",side:kt}));t.position.z=-.203,n.add(t);let i=new Ve(new it(.045,.013,.012),new vt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function E0(n,e=!1){let t=ro[n];if(!t)return null;let i=new Ve(t.geo,e?t.material.clone():t.material);return i.castShadow=i.receiveShadow=!0,n===Ha&&g1(i),i}var Mt=[],x1=[],is={held:null},io=new Map,Li=0,y1=1,Ia=new Je,uf=new Je,Pa=new M,th=new M,zs=new M,C0=new M,R0=new M;function _1(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){th.set(0,0,-1).applyAxisAngle(Rt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(Pa.copy(n).addScaledVector(th,r),Pa.y+=.15,!Sa(n,Pa,Math.min(.2,t*.5),ks,C0,R0)&&!Mt.some(o=>o.mesh.position.distanceToSquared(Pa)<(t+o.radius+.07)**2))return Pa}}return null}function Hs(n,e,t,i=!1){let s=ro[n];if(!s)return null;if(!e&&(t?zs.set(t.x,t.y,t.z):tt.xr.isPresenting?zs.copy(wt):Ht.getWorldPosition(zs),e=_1(zs,t?.yaw??Pi,s.shape.radius),!e))return i||so("Aucun espace libre pour cet objet."),null;let r=E0(n);r.position.copy(e),Et.add(r);let o=K.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:y1++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:n===4||n===5,precise:K.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new Je,shadow:St.shadow(s.shape.radius)};return a.frozen=!1,a.toolHold=!1,a.protected=n===Ha,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.78,gravity:1}),Mt.push(a),wa(a,St.boxes),a}function I0(){for(let n of Kt)ei(n,!1);ei(is,!1);for(let n of io.values())ei(n,!1)}function lh(){I0();for(let n of Mt)Et.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose();Mt.length=0,io.clear()}function P0(){Ga.slice(0,Wd.length).forEach((n,e)=>{let{x:t,z:i}=Wd[e];Hs(n,new M(t,.8,i))})}P0();function ei(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+K.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function oo(){I0();for(let n of Mt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!1}function Ui(){ut.position.copy(bf),mt=je.degToRad(xt.yaw),Qi=0,ut.rotation.y=mt,Rn.set(0,0,0),Xu=!1,jr=!1,Wu=!1,Yu.reset();for(let n of Kt)n.valid=!1,ei(n,!1)}oo();function nh(){return K.auto?Math.min(K.shadowQuality,Wt):K.shadowQuality}function Ba(){return K.auto?Math.min(K.lightQuality,Wt):K.lightQuality}function ss(){let n=K.texturePower;St.visual(Wt,K.shadows?nh():0,Ba(),K.reflections,K.bloom,K.textures,2**(n-1),K.lightmap),xt.refreshMaterials?.(),tt.shadowMap.needsUpdate=!0,St.setTimeOfDay(dt.remoteLight??K.timeOfDay-1),yf=sh.slice(0,Ba()>=8?3:Ba()>=4?2:1),kf.value=K.shaderMode-1,St.focus(K.focus,K.focusStrength,K.focusSize),tt.toneMappingExposure=.58+K.exposure*.114,K0.value=.55+K.contrast*.09,$0.value=K.saturation*.2,Q0.value=(K.warmth-5)*.022,tt.xr.setFoveation(je.clamp(1.16-Wt*.105,.12,1)),tt.xr.isPresenting||Ef(),mn=!0,fi.redraw()}function Ef(){tt.xr.isPresenting||(tt.setPixelRatio(Math.min(devicePixelRatio,1.75)*(.53+Wt*.047)),tt.setSize(innerWidth,innerHeight,!1),Ht.aspect=innerWidth/innerHeight,Ht.updateProjectionMatrix())}addEventListener("resize",Ef);var no=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],gf=["Naturel","Cellulo","Affiche","R\xE9tro"],Cf={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:3,focusSize:6},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};function v1(n){Object.assign(K,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Cf[n]),Wt=K.quality,$r=Qr=Kr=0,ss()}var ao=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Retour au d\xE9part",Ui]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",oo]]],["Rendu",[]]],ch=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Rf(){return jt===2?ch[Va][1]:jt===3?Nf[ka][1]:ao[jt][1]}function L0(n){jt=n,mn=!0}var ih=null,If=[],Zu=0,xf=0,Pf=null,Lf=!1,Df=0,Uf=0,D0={},sh=Array.from({length:3},()=>{let n=new Qo("#ffffff",0,22,1.6);return n.visible=!1,Et.add(n),{light:n,mesh:null,distance:1/0}}),yf=sh,rh=new M;function d0(n){if(!n.visible||n.material.emissiveIntensity<1||n.material.emissive.getHex()===0)return;let e=n.position.distanceToSquared(rh);if(e>34**2)return;let t=yf[0];for(let i of yf)i.distance>t.distance&&(t=i);e<t.distance&&(t.mesh=n,t.distance=e)}function M1(n){n?Ht.getWorldPosition(rh):rh.copy(wt);for(let t of sh)t.mesh=null,t.distance=1/0;if(n)dt.forEachReplica(d0);else if(K.objects)for(let t of Mt)t.materialStyle===3&&d0(t.mesh);let e=20+Ba()*.75;for(let{light:t,mesh:i}of sh)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy(i.material.emissive))}function uh(){let n=If.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;ih={game:"Gorilla Lab",version:"r25",time:new Date().toISOString(),mode:Lf?"VR":"PC",settings:{...K},qualityActive:Wt,performance:{fps:Os,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:Pf,renderer:D0,terrainSeed:St.hillSeed,map:xt.active?{name:xt.name,pieces:xt.nodes}:null,objects:{total:Mt.length,held:Mt.filter(t=>t.owner).length,frozen:Mt.filter(t=>t.frozen).length},cloud:{role:dt.role,connected:dt.connected,replicas:dt.replicaCount},targetScore:fi.score(),locomotion:{trackedFrames:Uf,contactFrames:Df,launchCount:wf,lastLaunch:Tf,standingHeight:Number.isFinite(to)?to:null,viewOffset:hi}},document.querySelector("#download-report").disabled=!1,mn=!0}function S1(){ih||uh();let n=URL.createObjectURL(new Blob([JSON.stringify(ih,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=S1;document.querySelector("#capture-report").onclick=uh;ao[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Capturer un rapport",uh]);var Nf=[["Basiques",Ga.slice(0,6)],["D\xE9taill\xE9s",Ga.slice(6)]].map(([n,e])=>[n,[...e.map(t=>[ro[t].name,()=>X0(t)]),["Tout retirer",W0]]]);ao.push(["Spawn",[]]);ao.push(["Carte",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Cr\xE9er atelier vide",()=>{xt.blank(),K.mapEdit=!0}],["Annuler placement",()=>xt.undo()],["Enregistrer d\xE9part",()=>xt.recenter(wt.x,ut.position.y,wt.z,Pi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{xt.reset(),K.mapEdit=!1}]]]);var b1=document.querySelector("#section"),hf=document.querySelector("#settings"),w1=document.querySelector("#readings");function vn(n,e){if(n==="shaderMode"){K.shaderMode=(K.shaderMode-1+e+gf.length)%gf.length+1,kf.value=K.shaderMode-1,mn=!0;return}if(n==="timeOfDay"){K.timeOfDay=(K.timeOfDay-1+e+3)%3+1,ss();return}if(n==="mapMode"||n==="mapShape"||n==="mapMaterial"||n==="mapSurface"||n==="mapTurn"){let t={mapMode:4,mapShape:4,mapMaterial:rf.length,mapSurface:4,mapTurn:8}[n];K[n]=(K[n]-1+e+t)%t+1,mn=!0;return}if(n==="mapEdit"&&!K.mapEdit&&!xt.active&&xt.blank(),n==="toolMode"){K.toolMode=(K.toolMode-1+e+no.length)%no.length+1,tt.xr.isPresenting||so("Outil \xB7 "+no[K.toolMode-1]),mn=!0;return}if(n==="preset"){let t=Object.keys(Cf);K.preset=(K.preset-1+e+t.length)%t.length+1,v1(t[K.preset-1]);return}if(typeof K[n]=="boolean"?K[n]=!K[n]:K[n]=je.clamp(K[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let t of Kt)t.valid=!1,t.surface=null;if(n==="quality"&&(K.auto=!1,Wt=K.quality),n==="auto"&&!K.auto&&(Wt=K.quality),n==="movement"||n==="collisions")for(let t of Kt)t.surface=null;if(n==="objects"&&!K.objects&&oo(),n==="toolActive"&&!K.toolActive)for(let t of Kt)t.held?.toolHold&&ei(t,!1);n==="preciseHitboxes"&&U0(),ss()}function U0(){for(let n of Mt)n.precise=K.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||wa(n,St.boxes)}function N0(){let n=jt===2?ch.flatMap(e=>e[1]):Rf();for(let[,e]of n)typeof e=="string"&&(K[e]=s1[e]);jt===0&&Ui(),jt===1&&(U0(),oo()),jt===3&&W0(),jt===2&&(Wt=K.quality),ss()}function La(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),Wa(),mn=!0},t}function F0(n){return n==="preciseHitboxes"?K[n]?"High":"Low":K[n]?"Actif":"Coup\xE9"}function Ff(n){if(n==="shaderMode")return gf[K.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=K[n],t=n==="shadowQuality"?nh():Ba();return t===e?e+"/10":e+"/10 \xB7 "+t+" auto"}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][K.timeOfDay-1]:n==="mapMode"?V0[K.mapMode-1]:n==="mapShape"?R1[K.mapShape-1]:n==="mapSurface"?I1[K.mapSurface-1]:n==="mapMaterial"?rf[K.mapMaterial-1]:n==="mapTurn"?(K.mapTurn-1)*45+"\xB0":n==="toolMode"?no[K.toolMode-1]:n==="preset"?Object.keys(Cf)[K.preset-1]:n==="texturePower"?[2**(K[n]-1),2**(K[n]-1)].join("\xD7"):K[n]}function B0(n){return n===uh?"Capturer":n===lh?"Vider":n===Ui||n===oo?"R\xE9initialiser":jt===3?"Cr\xE9er":"Appliquer"}function Wa(){if(b1.textContent=ao[jt][0],O0.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===jt))),hf.replaceChildren(),jt===2||jt===3){let n=document.createElement("nav"),e=jt===2;n.setAttribute("aria-label",e?"R\xE9glages du rendu":"Familles d\u2019objets"),(e?ch:Nf).forEach(([t],i)=>{let s=La(t,()=>{e?Va=i:ka=i});s.setAttribute("aria-pressed",String((e?Va:ka)===i)),n.append(s)}),hf.append(n)}for(let[n,e]of Rf()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(La(B0(e),e)):typeof K[e]=="boolean"?i.append(La(F0(e),()=>vn(e,1))):i.append(La("\u2212",()=>vn(e,-1)),document.createTextNode(" "+Ff(e)+" "),La("+",()=>vn(e,1))),t.append(i),hf.append(t)}}var O0=document.querySelectorAll("[data-page]");O0.forEach((n,e)=>n.onclick=()=>{L0(e),Wa()});document.querySelector("#restore").onclick=()=>{N0(),Wa()};Wa();function z0(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Gn(r);a.colorSpace=_t;let l=new Ve(new Xt(t,i),new vt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var pn=z0(640,652,.84,.86,Et);pn.mesh.visible=!1;var Ii=z0(416,84,.32,.065,Et);Ii.mesh.visible=!1;var Zr=new Ft(75,1,.07,140),qn=new ha(new Xt(1.7,1.95),{color:16054015,textureWidth:256,textureHeight:256,clipBias:.004,multisample:0}),T1=new M(0,0,-1),Gu=new M,f0=new M;qn.position.set(_u.x,_u.y,_u.z);qn.rotation.y=Math.PI;Et.add(qn);var Bf=new Ve(new it(1.8,2.03,.1),new tn({color:"#344650"}));Bf.position.copy(qn.position).z+=.064;Et.add(Bf);var A1=qn.onBeforeRender.bind(qn);qn.onBeforeRender=()=>{};qn.visible=!1;var df=-1/0;function E1(n,e){if(Zr.position.copy(wt),e){let i=e.transform.orientation;Zr.quaternion.set(i.x,i.y,i.z,i.w).premultiply(qu.setFromAxisAngle(Rt,mt))}else Ht.getWorldQuaternion(Zr.quaternion);f0.set(0,0,-1).applyQuaternion(Zr.quaternion),Gu.subVectors(qn.position,wt);let t=Gu.length();if(qn.visible=!xt.active&&K.reflections&&t<4&&Gu.dot(T1)<-.15&&Gu.multiplyScalar(1/Math.max(.001,t)).dot(f0)>.66,!qn.visible){df=-1/0;return}if(!(n-df<45)){df=n,Zr.updateMatrixWorld(!0),qn.updateMatrixWorld(!0),ns.visible=K.body;try{A1(tt,Et,Zr)}finally{ns.visible=!1}}}var ui=new bs,On=new M,In=new M,_f=new M,Hu=new M,p0=new M,Na=null,Ju=null,ju=null,C1=new Set(Et.children),fi=Yg(Et,St.boxes,{spawn:(n,e)=>{K.objects||(K.objects=!0),Hs(n,e)},clear:lh,resetPlayer:Ui,resetObjects:oo,resetTree:()=>{for(let n of fi.coconuts)n.visible=!0},quality:()=>Wt+"/10",resolution:()=>K.resolution+"/10 \xB7 relancer VR",textureSize:()=>Ff("texturePower"),qualityNext:()=>{K.quality>=10&&(K.quality=0),vn("quality",1)},resolutionNext:()=>{K.resolution>=10&&(K.resolution=0),vn("resolution",1)},textureNext:()=>{K.texturePower>=12&&(K.texturePower=0),vn("texturePower",1)},hitbox:()=>vn("preciseHitboxes",1),movement:()=>vn("movement",1)}),V0=["Poser","D\xE9placer","Supprimer","Peindre"],R1=["Bloc","Rampe","Mur","Dalle"],I1=["Normale","Glace","Caoutchouc","Lune"],xt=Wg({scene:Et,arena:St,boot:bf,onReset:n=>{lh(),Ui(),mt=je.degToRad(n),xt.active||P0()},onVisual:ss,getLevel:()=>Wt,defaultObjects:[...St.builtObjects,...Et.children.filter(n=>!C1.has(n)),Bf]}),dt=lg({scene:Et,currentMap:()=>xt.signature||"arena-r25-"+St.hillSeed,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=E0(n,!0);return e&&Xa(e.material),e},onAction:F1,applyLight:n=>St.setTimeOfDay(n??K.timeOfDay-1),applyCoconuts:n=>fi.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function P1(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1}][K.mapShape-1];return Bu({...n,...Object.values(kg)[K.mapSurface-1],material:K.mapMaterial-1,yaw:(K.mapTurn-1)*45})}function L1(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-hi,r.z).applyAxisAngle(Rt,mt).add(ut.position),di.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(di).applyAxisAngle(Rt,mt),xt.edit(On,In,i,{mode:K.mapMode,piece:P1(),head:wt,feet:ut.position.y}),i&&(mn=!0)}function D1(n){if(xt.active||!n.valid||n.held||Jt)return;let e=null;for(let t of fi.targets)if(t.getWorldPosition(p0),!(n.mesh.position.distanceToSquared(p0)>.11**2)&&(t.worldToLocal(Hu.copy(n.mesh.position)),Math.abs(Hu.x)<t.userData.touchWidth*.5+.025&&Math.abs(Hu.y)<.095&&Math.abs(Hu.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function k0(n,e=null){n.getWorldPosition(_f),n.visible=!1,K.objects||(K.objects=!0);let t=Hs(6,_f);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function vf(n,e,t){if(xt.active)return;ui.set(n,e),ui.far=5.5;let i=ui.intersectObjects([...fi.targets,...fi.coconuts.filter(r=>r.visible)],!1);ui.far=1/0;let s=i[0];s&&(Gs.visible=!0,Gs.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):k0(s.object,e),Wa()))}var m0=new M,G0=new Je,Of=su(Et),OE=Of.mesh,Ku=new M,Di=new Je,oh=new M,eo={mode:0,position:oh,quaternion:Di,end:Ku},g0=new M,U1=new M,x0=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var ah=new M,N1={position:oh,quaternion:Di,pressure:[.1,.66,.08]},ff=new M,y0=new Je;function H0(n){is.held&&ei(is,n)}function W0(){dt.role==="player"||dt.role==="pc"?so("Le joueur VR g\xE8re la remise \xE0 z\xE9ro."):lh()}function X0(n){if(K.objects=!0,dt.role==="pc"){so("Commence par rejoindre le salon en joueur.");return}dt.role==="player"?dt.sendAction({type:"spawn",typeId:n})||so("Attends la connexion au joueur VR."):Hs(n)}function F1(n,e){if(!K.objects||!e)return;if(n.type==="spawn"){Ga.includes(n.typeId)&&Hs(n.typeId,null,e);return}let t=Mt.find(l=>l.netId===n.objectId);if(!t)return;let i=io.get(e.id);if(i||(i={held:null,controllerRotation:new Je},io.set(e.id,i)),n.type==="release"){i.held===t&&ei(i,!0);return}let s=Math.hypot(t.mesh.position.x-e.x,t.mesh.position.y-e.y,t.mesh.position.z-e.z);if(s>10)return;let r=zs.set(e.x,e.y,e.z);if(Sa(r,t.mesh.position,.01,ks,C0,R0))return;let o=n.type==="hold"?1:n.mode;if(o===1&&i.held)return;let a=e.avatar?.tool?.quaternion??e.avatar?.head;a&&i.controllerRotation.copy(a),zf(t,o,i,je.clamp(s,1.1,5))}function B1(n){if(tt.xr.isPresenting)for(let t of Kt)t.valid&&t.held&&pf(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of io){let s=dt.getPeer?.(t);if(!s){ei(i,!1),io.delete(t);continue}let r=i.held;if(!r)continue;let o=s.avatar?.head??s.avatar?.tool?.quaternion;o&&i.controllerRotation.copy(o),zs.set(s.x,s.y,s.z),th.set(0,0,-1).applyQuaternion(i.controllerRotation),pf(r,zs,th,i.controllerRotation,n)}let e=is.held;e&&(Ht.getWorldPosition(ah),Ht.getWorldDirection(m0),Ht.getWorldQuaternion(Di),pf(e,ah,m0,Di,n))}function pf(n,e,t,i,s){n.toolHold?ff.copy(e).addScaledVector(t,n.toolDistance):ff.copy(n.offset).applyQuaternion(i).add(e),y0.multiplyQuaternions(i,n.relativeRotation),Pg(n,ff,y0,ks,s)}function q0(n){return n.customMaterial||(n.mesh.material=n.mesh.material.clone(),n.customMaterial=!0,Xa(n.mesh.material)),n.mesh.material}function O1(n){let e=q0(n),t=n.materialStyle;e.roughness=[.94,.12,.16,.4][t],e.metalness=[0,.87,.12,0][t],e.transparent=t===2,e.depthWrite=t!==2,e.opacity=t===2?.4:1,e.emissive.copy(e.color),e.emissiveIntensity=t===3?1.65:0,e.needsUpdate=!0}function Y0(n,e,t){ui.set(n,e),ui.far=9;let i=ui.intersectObjects(t,!1)[0];return ui.far=1/0,Ku.copy(n).addScaledVector(e,i?.distance??9),Sa(n,Ku,.006,ks,g0,U1)?(Ku.copy(g0),null):i}function zf(n,e,t,i){if(e===1){if(t?.held){t===is?H0(!0):ei(t,!0);return}if(!n||n.owner)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??Di;n.relativeRotation.multiplyQuaternions(G0.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected)Et.remove(n.mesh,n.shadow),n.customMaterial&&n.mesh.material.dispose(),Mt.splice(Mt.indexOf(n),1);else if(e===4&&!n.protected){ah.copy(n.mesh.position).addScaledVector(Rt,n.radius*2+.08);let s=Hs(n.netType,ah);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=n.mesh.material.clone(),s.customMaterial=!0,Xa(s.mesh.material)),wa(s,St.boxes))}else if(e===5){let s=q0(n);s.color.set(x0[n.paint++%x0.length]),n.materialStyle===3&&s.emissive.copy(s.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,O1(n));mn=!0}}var ts=[];function Z0(n,e,t,i){if(!K.objects)return;let s=dt.role==="player";if(ts.length=0,s)dt.forEachReplica(a=>ts.push(a));else for(let a of Mt)!a.owner&&a.mesh.visible&&ts.push(a.mesh);let r=Y0(n,e,ts);if(eo.mode=K.toolMode,i?(oh.copy(i.mesh.position),Di.copy(i.controllerRotation)):(Ht.getWorldQuaternion(Di),oh.set(.16,-.17,-.43).applyQuaternion(Di).add(n)),Of.update(eo),!t)return;if(s){if(K.toolMode===1&&Li)dt.sendAction({type:"release",objectId:Li}),Li=0;else if(r){let a=r.object.userData.netId;dt.sendAction({type:"tool",mode:K.toolMode,objectId:a})&&K.toolMode===1&&(Li=a)}return}let o=r&&Mt.find(a=>a.mesh===r.object);zf(o,K.toolMode,i??is,r?je.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function z1(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;On.set(o.x,o.y-hi,o.z).applyAxisAngle(Rt,mt).add(ut.position),di.set(a.x,a.y,a.z,a.w),In.set(0,0,-1).applyQuaternion(di).applyAxisAngle(Rt,mt),Z0(On,In,s,i)}function V1(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-hi,r.z).applyAxisAngle(Rt,mt).add(ut.position),di.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(di).applyAxisAngle(Rt,mt),vf(On,In,i)}var Gs=h1(Et,new vt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Gs.visible=!1;var Mf=[],Vs=null;function _0(){let n=pn.ctx;Mf=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB",25,42),n.font="20px system-ui",n.fillText(Os+" FPS   \xB7   Q "+Wt+"/10   \xB7   "+(K.auto?"AUTO":"MANUEL"),390,40);function e(s,r,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(s,r,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,s+o/2,r+a/2+7),n.textAlign="left",Mf.push({x:s,y:r,w:o,h:a,action:c,label:l})}ao.forEach(([s],r)=>e(25+r*119,61,114,44,s,()=>L0(r),jt===r?"#586d53":"#334b58"));let t=jt===2,i=t||jt===3;i&&(t?ch:Nf).forEach(([s],r)=>{let o=(t?Va:ka)===r;e(25+r*149,114,144,38,s,()=>{t?Va=r:ka=r},o?"#546947":"#263d49")}),Rf().forEach(([s,r],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(s,37,a+26),typeof r=="function"?e(406,a,206,36,B0(r),r):typeof K[r]=="boolean"?e(406,a,206,36,F0(r),()=>vn(r,1),K[r]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>vn(r,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Ff(r)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>vn(r,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",N0),e(325,579,287,44,"Fermer",()=>Jt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Vf||(jt===4&&xt.status?xt.status.slice(0,64):ih?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),pn.texture.needsUpdate=!0}function k1(n){Jt=!Jt,Jt&&(b0=n,a0.set(0,0,-1).applyAxisAngle(Rt,Pi),pn.mesh.position.copy(wt).addScaledVector(a0,1.25),pn.mesh.position.y+=.08,pn.mesh.lookAt(wt),pn.mesh.updateMatrixWorld(!0)),mn=!0}function G1(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;On.set(r.x,r.y-hi,r.z).applyAxisAngle(Rt,mt).add(ut.position),di.set(o.x,o.y,o.z,o.w),In.set(0,0,-1).applyQuaternion(di).applyAxisAngle(Rt,mt),ui.set(On,In);let a=ui.intersectObject(pn.mesh)[0];if(a&&(Gs.visible=!0,Gs.position.copy(a.point).addScaledVector(In,-.012),i)){let l=a.uv.x*pn.w,c=(1-a.uv.y)*pn.h;Mf.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),mn=!0}}var nn=new Set,v0=document.querySelector("#game-settings"),J0=document.querySelector("#open-settings"),Sf=document.querySelector("#game-hint"),$u=0;function so(n){Sf.textContent=n,Sf.hidden=!1,$u=performance.now()+2400,Vf=n,mn=!0}var Vf="";function hh(n){let e=n??!v0.hidden;v0.hidden=e,J0.hidden=!e,e&&tt.domElement.focus()}J0.onclick=()=>hh(!1);document.querySelector("#close-settings").onclick=()=>hh(!0);var Oa=cg({canvas:tt.domElement,enabled:()=>!tt.xr.isPresenting,onLook:(n,e,t)=>{mt-=n*t,Qi=je.clamp(Qi-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&nn.add(e)},onMenu:()=>hh()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!tt.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||hh();return}n.code==="Space"&&n.preventDefault(),!(n.repeat&&["KeyC","KeyE","KeyF","KeyG","KeyT","Space"].includes(n.code))&&(nn.add(n.code),n.code==="KeyR"&&Ui())}});addEventListener("keyup",n=>nn.delete(n.code));addEventListener("blur",()=>{nn.clear(),Oa.clear()});function H1(n,e){if(!K.objects)return!1;let t=dt.role==="player";if(t&&Li)return dt.sendAction({type:"release",objectId:Li}),Li=0,!0;if(is.held)return H0(!0),!0;if(ts.length=0,t)dt.forEachReplica(s=>ts.push(s));else for(let s of Mt)!s.owner&&s.mesh.visible&&ts.push(s.mesh);let i=Y0(n,e,ts);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;dt.sendAction({type:"hold",objectId:s})&&(Li=s)}else Ht.getWorldQuaternion(Di),zf(Mt.find(s=>s.mesh===i.object),1,is,Math.max(.75,i.distance));return!0}var mf=[];function W1(){return mf.length=0,dt.forEachReplica(n=>{let e=n.userData.netType;if(e!==4&&e!==5||n.userData.held)return;let t=ro[e],i=K.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0};s.shape=i,s.radius=i.radius,s.precise=K.preciseHitboxes,mf.push(s)}),mf}function X1(){dt.role!=="vr"||!dt.remoteSpectator||Mt.some(n=>n.netType===Ha)||Hs(Ha,null,null,!0)}var za=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{za.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});za.onclick=async()=>{let n;try{za.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),tt.xr.setFramebufferScaleFactor(.45+K.resolution*.055),await tt.xr.setSession(n),Ua=n.frameRate||72,Da=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Da.includes(120)?120:Da.find(t=>t>=100)??Da.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Ua=n.frameRate||Ua,Af=Math.min(100,Ua),K.auto&&(Wt=Math.min(Wt,4),Kr=$r=Qr=0),If=[],Zu=0,xf=0,Df=Uf=wf=0,Tf=null,Lf=!0,Pf=null,to=NaN,hi=0,Ui(),ss(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),za.disabled=!1,document.querySelector("#status").textContent=e.message}};tt.xr.addEventListener("sessionend",()=>{za.disabled=!1,Jt=!1,pn.mesh.visible=!1,Ii.mesh.visible=!1,document.body.classList.remove("immersive"),Ui(),Ef()});function j0(n){if(!xt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(xt.active){let e=-1/0,t;for(let i of St.boxes){let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function q1(n,e,t){let i=[...n.session.inputSources];for(let s of Kt){let r=i.find(p=>p.handedness===s.side&&p.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.mesh.visible=!!o&&K.hands&&!K.body,!o){s.valid=!1,s.surface=null,ei(s,!1);continue}let a=o.transform.position;Fa.set(a.x,a.y-hi,a.z),s.target.copy(Fa).applyAxisAngle(Rt,mt).add(ut.position),s.valid=!0;let l=!!r.gamepad?.buttons[1]?.pressed,c=o.transform.orientation;if(Ia.set(c.x,c.y,c.z,c.w).premultiply(di.setFromAxisAngle(Rt,mt)),s.controllerRotation.copy(Ia),s.mesh.quaternion.copy(Ia).multiply(r1.setFromAxisAngle(o1,s.side==="left"?Math.PI/2:-Math.PI/2)),d1(s,r.gamepad?.buttons??[],t),!Jt&&l&&!s.grip&&K.objects&&!s.held){let p=null,x=.15,g=fi.coconuts.find(m=>m.visible&&m.getWorldPosition(_f).distanceToSquared(s.target)<.26**2);g&&(p=k0(g));for(let m of Mt){if(m.owner||m.mesh.position.distanceToSquared(s.target)>(m.radius+.18)**2)continue;let w=Rg(s.target,m);!g&&w<x&&(x=w,p=m)}p&&!s.held&&(s.held=p,p.owner=s,p.frozen=!1,uf.copy(Ia).invert(),p.offset.copy(p.mesh.position).sub(s.target).applyQuaternion(uf),p.relativeRotation.multiplyQuaternions(uf,p.mesh.quaternion),p.velocity.set(0,0,0),p.angular.set(0,0,0))}if(!l&&s.grip&&!s.held?.toolHold&&ei(s,!Jt),s.grip=l,s.held?.toolHold){let x=n.getPose(r.targetRaySpace,e)?.transform.orientation;x?s.aimDirection.set(0,0,-1).applyQuaternion(G0.set(x.x,x.y,x.z,x.w)).applyAxisAngle(Rt,mt):s.aimDirection.set(0,0,-1).applyQuaternion(Ia)}let u=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");u&&!s.menu&&k1(s.side),s.menu=u;let d=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&d&&!s.toolButton&&!Jt&&vn("toolActive",1),s.toolButton=d;let h=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&h&&!s.toolCycle&&K.toolActive&&!Jt&&vn("toolMode",1),s.toolCycle=h;let f=!!r.gamepad?.buttons[0]?.pressed;if(Jt){let p=f&&!s.trigger;(p||!Vs||!Vs.click&&s.side!==b0)&&(Vs={source:r,click:p})}else!Jt&&s.side==="right"&&K.mapEdit?ju={source:r,click:f&&!s.trigger}:!Jt&&s.side==="right"&&K.toolActive?Ju={source:r,hand:s,click:f&&!s.trigger}:!Jt&&(s.side==="right"||f&&!s.trigger)&&(Na={source:r,click:f&&!s.trigger});s.trigger=f}}function Y1(n,e,t,i){let s=!!t,r=.43+K.size*.088;if(s){let h=t.transform.position;Number.isFinite(to)||(to=h.y),hi=je.clamp(to-r,-.65,1.7),Qu.position.y=-hi,Xn.set(h.x,h.y-hi,h.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(Xu=!1),Math.abs(p)>.67&&!Xu&&!Jt&&(Xu=!0,Wn.copy(Xn).applyAxisAngle(Rt,mt),mt-=Math.sign(p)*Math.PI/4,Qg.copy(Xn).applyAxisAngle(Rt,mt),ut.position.add(Wn.sub(Qg)),Yu.reset(),Wu=!1)}else Qu.position.y=0,Xn.set(0,r,0),Ht.position.copy(Xn),Ht.rotation.set(Qi,0,0,"YXZ");if(wt.copy(Xn).applyAxisAngle(Rt,mt).add(ut.position),s){let h=t.transform.orientation;qu.set(h.x,h.y,h.z,h.w),Bs.set(0,0,-1).applyQuaternion(qu),Bs.x**2+Bs.z**2>.018&&(Pi=mt+Math.atan2(-Bs.x,-Bs.z))}else Pi=mt;let o=j0(wt),a=9.81*(K.gravity/5)*(o?.gravity??1);if(t0.copy(ut.position),s){q1(n,e,i),Kt.some(h=>h.valid)&&Uf++,ku.length=0;for(let h of ks)ku.push(h);if(K.collisions&&K.objects)for(let h of Mt)h.handCollider&&!h.owner&&ku.push(h.handCollider);Yu.move({head:wt,dt:i,gravity:a,settings:K,boxes:ku,velocity:Rn,movement:Ca,reach:eh()*2+.16})}else{Rn.y-=a*i;let h=Number(nn.has("KeyD"))-Number(nn.has("KeyA")||nn.has("KeyQ"))+Oa.movement.x,f=Number(nn.has("KeyS"))-Number(nn.has("KeyW")||nn.has("KeyZ"))+Oa.movement.z,p=nn.has("ShiftLeft")||nn.has("ShiftRight");Fs.set(h,0,f).clampLength(0,1).applyAxisAngle(Rt,mt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(o?.friction<.1?2:jr?13:4));Rn.x=je.lerp(Rn.x,Fs.x,x),Rn.z=je.lerp(Rn.z,Fs.z,x),(Oa.consumeJump()||nn.delete("Space"))&&jr&&(Rn.y=3.1+K.jump*.18),Ca.copy(Rn).multiplyScalar(i)}if(K.collisions&&Wu&&(Fa.copy(wt).add(Ca),Sa(n0,Fa,s0,ks,Wn,i0)&&Fs.subVectors(Fa,Wn).dot(i0)<0&&Ca.copy(Wn).sub(wt)),ut.position.add(Ca),wt.copy(Xn).applyAxisAngle(Rt,mt).add(ut.position),jr=!1,K.collisions){let h=dt.role==="player"?W1():Mt;r0.set(0,0,1).applyAxisAngle(Rt,Pi);let f=s?-Bs.y:Math.max(0,-Math.sin(Qi)),p=s?.17+je.smoothstep(f,.15,.9)*.21:.08;for(let x=0;x<3;x++){let g=x===0?.18:x===1?Math.max(.26,Xn.y*.57):Xn.y,m=x===2?s0:x===0?.18:.17;if(Wn.set(wt.x,ut.position.y+g,wt.z),x<2&&Wn.addScaledVector(r0,p),e0.copy(Wn),jr=nf(Wn,m,St.boxes,Rn,0,3+K.grip,i)||jr,K.objects)for(let w of h)w.blocksPlayer&&!w.owner&&zg(Wn,m,w,Rn);nf(Wn,m,St.boxes,Rn,0,3+K.grip,i),Fs.subVectors(Wn,e0),ut.position.add(Fs),wt.add(Fs)}}if(of.subVectors(ut.position,t0),s){let h=Yu.finish(of,Rn);h.contacts&&Df++,h.launched&&(wf++,Tf={handSpeed:h.launchSpeed,velocity:Rn.toArray(),t:performance.now()})}(xt.active?ut.position.y<-24||Math.abs(ut.position.x)>155||Math.abs(ut.position.z)>155:ut.position.y<-9||Math.abs(ut.position.x)>33||ut.position.z<-57||ut.position.z>13)&&(Ui(),wt.copy(Xn).applyAxisAngle(Rt,mt).add(ut.position)),n0.copy(wt),Wu=!0,ut.rotation.y=mt,s&&Ht.position.set(0,0,0);for(let h of Kt)s&&h.valid&&h.mesh.position.copy(h.surface?h.anchor:h.held?h.target:h.locomotionTarget).addScaledVector(of,h.surface?0:1),s||(h.mesh.visible=!1);let l=Math.min(.3,Math.max(.21,Xn.y*.31)),c=.72+K.size*.05,u=eh()*2*(2/3)/.82;es.visible=K.body,es.position.set(wt.x,wt.y-l-.24*u-.05*Ra,wt.z);let d=s?-Bs.y:Math.max(0,-Math.sin(Qi));Ra=je.lerp(Ra,je.smoothstep(d,.24,.92),1-Math.exp(-i*14)),l0.set(0,0,1).applyAxisAngle(Rt,Pi),es.position.addScaledVector(l0,.32*Ra),c0.set(-.48*Ra,Pi,0,"YXZ"),es.quaternion.setFromEuler(c0),ns.position.copy(wt),s?ns.quaternion.copy(qu).premultiply(di.setFromAxisAngle(Rt,mt)):ns.quaternion.setFromEuler(new rn(Qi,mt,0,"YXZ")),f1(c,u),ut.updateMatrixWorld(!0),Ht.updateWorldMatrix(!0,!1)}function Z1(n,e){if(Vu+=n,lf++,Kr+=n,Vu<1||(Os=Math.round(lf/Vu),lf=0,Vu=0,mn=!0,w1.textContent=Os+" FPS \xB7 qualit\xE9 "+Wt+"/10 \xB7 "+(K.auto?"auto":"manuel"),!K.auto||Kr<5))return;Kr=0;let t=e?Math.min(100,tt.xr.getSession()?.frameRate||Ua):60;e&&(Af=t),$r=Os<t-4?$r+1:0,Qr=Os>=t-1?Qr+1:0;let i=je.clamp(Wt+($r>=1?-1:Qr>=2?1:0),1,10);i!==Wt&&(Wt=i,Kr=$r=Qr=0,ss())}St.bakeLightmap();var K0={value:1},$0={value:1},Q0={value:0},kf={value:0},M0=new WeakSet;function Xa(n){if(!n||M0.has(n))return;M0.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:K0,uPhotoSaturation:$0,uPhotoWarmth:Q0,uLabShader:kf}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <colorspace_fragment>",`
      #include <colorspace_fragment>
      vec3 photo=gl_FragColor.rgb;
      photo=mix(vec3(dot(photo,vec3(.2126,.7152,.0722))),photo,uPhotoSaturation);
      photo=(photo-.5)*uPhotoContrast+.5;
      photo=clamp(photo+uPhotoWarmth*vec3(1.,.16,-1.),0.,1.);
      float luma=dot(photo,vec3(.2126,.7152,.0722));
      if(uLabShader==1){
        float band=floor(luma*6.+.5)/6.;
        photo*=.35+.65*(band/max(.035,luma));
      }else if(uLabShader==2){
        vec3 ink=mix(vec3(.071,.13,.24),vec3(.99,.83,.54),smoothstep(.10,.92,luma));
        photo=mix(ink,photo,.28);
      }else if(uLabShader==3){
        vec2 tile=mod(floor(gl_FragCoord.xy),2.);
        float threshold=mod(2.*tile.x+3.*tile.y,4.)*.25;
        photo=floor(photo*7.+threshold)/7.;
      }
      gl_FragColor.rgb=clamp(photo,0.,1.);
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)Xa(n);Et.traverse(n=>{n.isMesh&&![pn.mesh,Ii.mesh,Gs].includes(n)&&Xa(n.material)});ss();var S0=new URLSearchParams(location.search);if(S0.has("map"))xt.loadURL(S0.get("map"));else try{let n=localStorage.getItem(Aa);n&&xt.load(n)}catch(n){xt.inform(n.message)}tt.setAnimationLoop((n,e)=>{let t=af?Math.max(0,(n-af)/1e3):.014;af=n;let i=Math.min(.035,t),s=tt.xr.isPresenting,r=tt.xr.getReferenceSpace(),o=e&&r&&e.getViewerPose(r);if(s&&!o)return;if($u&&n>$u&&(Sf.hidden=!0,$u=0,Vf=""),Gs.visible=!1,Of.hide(),eo.mode=0,ks=K.collisions?St.boxes:a1,Vs=null,Na=null,Ju=null,ju=null,xt.clearGhost(),pn.mesh.visible=!1,!s&&dt.role==="pc"){es.visible=!1;for(let p of Kt)p.mesh.visible=!1}else Y1(e,r,o,i);let a=!s&&dt.role==="pc",l=a||dt.role==="player";dt.role!=="player"&&(Li=0),l||(B1(i),X1());let c=St.boxes.find(p=>p.heightfield);for(let p of Mt){p.mesh.visible=K.objects&&!l;let{x,y:g,z:m}=p.mesh.position;if((xt.active?g<-24||Math.abs(x)>155||Math.abs(m)>155:g<-8||Math.abs(x)>28||m<-57||m>13)&&(p.owner||(p.mesh.position.copy(p.start),p.velocity.set(0,0,0),p.angular.set(0,0,0))),p.shadow.visible=!l&&K.shadows&&nh()<3&&K.objects&&p.mesh.position.y<2,p.shadow.visible){let{x:b,z:_}=p.mesh.position,E=c&&b>=c.xMin&&b<=c.xMax&&_>=c.zMin&&_<=c.zMax?c.height(b,_):0;p.shadow.position.set(b,E+.006,_)}}for(let p of Mt)p.beforePhysics.copy(p.mesh.position);if(l||Bg(Mt,St.boxes,i,9.81*K.gravity/5,.12+K.bounce*.064,j0),!xt.active&&!l&&fi.updateTarget(Mt),s&&!Jt)for(let p of Kt)D1(p);if(St.probe.rotation.y+=i*.29,Z1(Math.min(.3,t),s),pn.mesh.visible=s&&Jt,pn.mesh.visible&&mn&&_0(),pn.mesh.visible&&Vs)G1(e,r,Vs.source,Vs.click);else if(s&&ju)L1(e,r,ju);else if(s&&Ju)z1(e,r,Ju);else if(s&&Na)V1(e,r,Na.source,Na.click);else if(!s&&!a){Ht.getWorldPosition(On),Ht.getWorldDirection(In),nn.delete("KeyG")&&(vn("toolActive",1),K.toolActive&&so("Outil \xB7 "+no[K.toolMode-1])),nn.delete("KeyT")&&vn("toolMode",1);let p=nn.delete("KeyE");K.toolActive?Z0(On,In,p,null):p&&!H1(On,In)?vf(On,In,!0):!p&&!l&&vf(On,In,!1),nn.delete("KeyF")&&(K.objects=!0,X0(Ga[0]))}if(Ii.mesh.visible=s&&!Jt&&Kt[0].valid,Ii.mesh.visible&&(Ii.mesh.position.copy(Kt[0].mesh.position).y+=.12,Ii.mesh.lookAt(wt)),mn||n-o0>1100){mn=!1,o0=n,Jt&&_0();let p=Ii.ctx;p.clearRect(0,0,416,84),p.fillStyle="#182632",p.fillRect(0,0,416,84),p.fillStyle="#fff0cf",p.font="bold 25px system-ui",p.fillText(Os+" FPS     Q "+Wt+"/10",17,32),p.font="20px system-ui",p.fillText(K.mapEdit?"\xC9dition : "+V0[K.mapMode-1]:K.toolActive?"Tool Gun : "+no[K.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Ii.texture.needsUpdate=!0}let u=!a&&(dt.role==="player"||s&&dt.role==="vr")?{head:ns.quaternion,hands:s?Kt.map(p=>p.valid?{position:p.mesh.position,quaternion:p.mesh.quaternion,pressure:p.pressure}:null):[null,eo.mode?N1:null],height:Xn.y,armSpan:eh()*2,light:K.timeOfDay-1,color:w0,coconuts:fi.coconuts.reduce((p,x,g)=>p|Number(x.visible)<<g,0),tool:eo.mode?eo:null}:null;dt.update({inVR:s,time:n,dt:i,position:wt,yaw:a?mt:Pi,pitch:Qi,camera:Ht,rig:ut,keys:nn,flat:Oa,avatar:u,bodies:K.objects?Mt:x1}),M1(l),St.centerShadows(rh);let d=25+(10-nh())*(s?7:4);tt.shadowMap.enabled&&n-$g>=d&&(tt.shadowMap.needsUpdate=!0,$g=n),E1(n,o);let h=s&&K.post,f=s&&K.rayTrace;if(i1(f,Mt),(!h||!n1.render(Et,Ht,{bloom:K.bloom}))&&tt.render(Et,Ht),(s||!Lf)&&(If[Zu]=t*1e3,Zu=(Zu+1)%720,n-xf>350)){xf=n;let{calls:p,triangles:x,lines:g,points:m}=tt.info.render;D0={calls:p,triangles:x,lines:g,points:m,textures:tt.info.memory.textures},s&&(Pf={refreshHz:tt.xr.getSession()?.frameRate??null,targetFps:Af,supportedHz:Da.slice(),foveation:tt.xr.getFoveation()??null,visualEffects:{post:h,bloom:h&&K.bloom,rayTrace:f},eyeViewports:tt.xr.getCamera().cameras.map(w=>({width:w.viewport?.z??null,height:w.viewport?.w??null}))})}});})();
