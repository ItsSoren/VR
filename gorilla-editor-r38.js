(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rp=0,Lu=1,op=2;var Du=1,ap=2,Ti=3,ai=0,an=1,jt=2,Vi=0,Ls=1,xa=2,Uu=3,Nu=4,lp=5,ns=100,cp=101,hp=102,up=103,dp=104,fp=200,pp=201,mp=202,gp=203,Il=204,Ll=205,xp=206,yp=207,_p=208,vp=209,Mp=210,bp=211,Sp=212,wp=213,Tp=214,ac=0,lc=1,cc=2,Ds=3,hc=4,uc=5,dc=6,fc=7,pc=0,Ep=1,Ap=2,Gi=0,Cp=1,Rp=2,Pp=3,Ip=4,Lp=5,Dp=6,Up=7;var Fu=300,Xs=301,qs=302,Jr=303,mc=304,ya=306,vn=1e3,ts=1001,Dl=1002,En=1003,Np=1004;var _a=1005;var nn=1006,gc=1007;var bn=1008;var ui=1009,Ou=1010,Bu=1011,Kr=1012,xc=1013,cs=1014,di=1015,$r=1016,yc=1017,_c=1018,Qr=1020,zu=35902,ku=35899,Vu=1021,Gu=1022,Rn=1023,Lr=1026,eo=1027,vc=1028,Mc=1029,Hu=1030,bc=1031;var Sc=1033,va=33776,Ma=33777,ba=33778,Sa=33779,wc=35840,Tc=35841,Ec=35842,Ac=35843,Cc=36196,Rc=37492,Pc=37496,Ic=37808,Lc=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,kc=37817,Vc=37818,Gc=37819,Hc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,jc=36284,Jc=36285,Kc=36286;var ko=2300,Ul=2301,Rl=2302,vu=2400,Mu=2401,bu=2402;var Fp=3200,Op=3201;var $c=0,Bp=1,Hi="",yt="srgb",Us="srgb-linear",Vo="linear",St="srgb";var Is=7680;var Su=519,zp=512,kp=513,Vp=514,Wu=515,Gp=516,Hp=517,Wp=518,Xp=519,Nl=35044,wa=35048;var Xu="300 es",oi=2e3,Go=2001;var bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=1234567,Fo=Math.PI/180,Dr=180/Math.PI;function Mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function qu(n,e){return(n%e+e)%e}function V0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function G0(n,e,t){return n!==e?(t-n)/(e-n):0}function Oo(n,e,t){return(1-t)*n+t*e}function H0(n,e,t,i){return Oo(n,e,1-Math.exp(-t*i))}function W0(n,e=1){return e-Math.abs(qu(n,e*2)-e)}function X0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function q0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Y0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Z0(n,e){return n+Math.random()*(e-n)}function j0(n){return n*(.5-Math.random())}function J0(n){n!==void 0&&(Sf=n);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(n){return n*Fo}function $0(n){return n*Dr}function Q0(n){return(n&n-1)===0&&n!==0}function ex(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Le={DEG2RAD:Fo,RAD2DEG:Dr,generateUUID:Mi,clamp:Ke,euclideanModulo:qu,mapLinear:V0,inverseLerp:G0,lerp:Oo,damp:H0,pingpong:W0,smoothstep:X0,smootherstep:q0,randInt:Y0,randFloat:Z0,randFloatSpread:j0,seededRandom:J0,degToRad:K0,radToDeg:$0,isPowerOfTwo:Q0,ceilPowerOfTwo:ex,floorPowerOfTwo:tx,setQuaternionFromProperEuler:nx,normalize:bt,denormalize:ri},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*x,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let E=Math.sqrt(w),A=Math.atan2(E,m*b);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let _=a*b;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qh=new v,wf=new ht,Qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],b=s[1],w=s[4],_=s[7],E=s[2],A=s[5],P=s[8];return r[0]=o*x+a*b+l*E,r[3]=o*g+a*w+l*A,r[6]=o*m+a*_+l*P,r[1]=c*x+h*b+u*E,r[4]=c*g+h*w+u*A,r[7]=c*m+h*_+u*P,r[2]=d*x+f*b+p*E,r[5]=d*g+f*w+p*A,r[8]=d*m+f*_+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new Qe;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qp(){let n=Ur("canvas");return n.style.display="block",n}var Tf={};function Nr(n){n in Tf||(Tf[n]=!0,console.warn(n))}function Yp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ef=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){let n={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Us]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:Ef,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Ef,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var ft=ix();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ur,Fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Ur("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sx=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zh(s[o].image)):r.push(Zh(s[o]))}else r=Zh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rx=0,jh=new v,fn=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ts,s=ts,r=nn,o=bn,a=Rn,l=ui,c=n.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Mi(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Fu;fn.DEFAULT_ANISOTROPY=1;var kt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,E=(m+1)/2,A=(h+d)/4,P=(u+x)/4,C=(p+g)/4;return w>_&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=P/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=C/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=C/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ho=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),tl.subVectors(this.max,To),dr.subVectors(e.a,To),fr.subVectors(e.b,To),pr.subVectors(e.c,To),ji.subVectors(fr,dr),Ji.subVectors(pr,fr),As.subVectors(dr,pr);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-As.z,As.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,As.z,0,-As.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-As.y,As.x,0];return!Jh(t,dr,fr,pr,tl)||(t=[1,0,0,0,1,0,0,0,1],!Jh(t,dr,fr,pr,tl))?!1:(nl.crossVectors(ji,Ji),t=[nl.x,nl.y,nl.z],Jh(t,dr,fr,pr,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new v,new v,new v,new v,new v,new v,new v,new v],ni=new v,el=new Jt,dr=new v,fr=new v,pr=new v,ji=new v,Ji=new v,As=new v,To=new v,tl=new v,nl=new v,Cs=new v;function Jh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cs.fromArray(n,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),h=i.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ox=new Jt,Eo=new v,Kh=new v,Zn=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ox.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Kh)),this.expandByPoint(Eo.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ui=new v,$h=new v,il=new v,Ki=new v,Qh=new v,sl=new v,eu=new v,is=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$h.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub($h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(il),a=Ki.dot(this.direction),l=-Ki.dot(il),c=Ki.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($h).addScaledVector(il,d),f}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,s,r){Qh.subVectors(t,e),sl.subVectors(i,e),eu.crossVectors(Qh,sl);let o=this.direction.dot(eu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let l=a*this.direction.dot(sl.crossVectors(Ki,sl));if(l<0)return null;let c=a*this.direction.dot(Qh.cross(Ki));if(c<0||l+c>o)return null;let h=-a*Ki.dot(eu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,lx)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),$i.crossVectors(i,Fn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),$i.crossVectors(i,Fn)),$i.normalize(),rl.crossVectors(Fn,$i),s[0]=$i.x,s[4]=rl.x,s[8]=Fn.x,s[1]=$i.y,s[5]=rl.y,s[9]=Fn.y,s[2]=$i.z,s[6]=rl.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],b=i[3],w=i[7],_=i[11],E=i[15],A=s[0],P=s[4],C=s[8],S=s[12],M=s[1],L=s[5],U=s[9],O=s[13],W=s[2],k=s[6],H=s[10],J=s[14],X=s[3],ee=s[7],ge=s[11],Ee=s[15];return r[0]=o*A+a*M+l*W+c*X,r[4]=o*P+a*L+l*k+c*ee,r[8]=o*C+a*U+l*H+c*ge,r[12]=o*S+a*O+l*J+c*Ee,r[1]=h*A+u*M+d*W+f*X,r[5]=h*P+u*L+d*k+f*ee,r[9]=h*C+u*U+d*H+f*ge,r[13]=h*S+u*O+d*J+f*Ee,r[2]=p*A+x*M+g*W+m*X,r[6]=p*P+x*L+g*k+m*ee,r[10]=p*C+x*U+g*H+m*ge,r[14]=p*S+x*O+g*J+m*Ee,r[3]=b*A+w*M+_*W+E*X,r[7]=b*P+w*L+_*k+E*ee,r[11]=b*C+w*U+_*H+E*ge,r[15]=b*S+w*O+_*J+E*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=u*g*c-x*d*c+x*l*f-a*g*f-u*l*m+a*d*m,w=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,_=h*x*c-p*u*c+p*a*f-o*x*f-h*a*m+o*u*m,E=p*u*l-h*x*l-p*a*d+o*x*d+h*a*g-o*u*g,A=t*b+i*w+s*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=b*P,e[1]=(x*d*r-u*g*r-x*s*f+i*g*f+u*s*m-i*d*m)*P,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*P,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,e[4]=w*P,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*P,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=_*P,e[9]=(p*u*r-h*x*r-p*i*f+t*x*f+h*i*m-t*u*m)*P,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*P,e[12]=E*P,e[13]=(h*x*s-p*u*s+p*i*d-t*x*d-h*i*g+t*u*g)*P,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,b=l*c,w=l*h,_=l*u,E=i.x,A=i.y,P=i.z;return s[0]=(1-(x+m))*E,s[1]=(f+_)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+m))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(p+w)*P,s[9]=(g-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=mr.set(s[0],s[1],s[2]).length(),o=mr.set(s[4],s[5],s[6]).length(),a=mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,h=1/o,u=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Go)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Go)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mr=new v,ii=new ct,ax=new v(0,0,0),lx=new v(1,1,1),$i=new v,rl=new v,Fn=new v,Cf=new ct,Rf=new ht,Vt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cx=0,Pf=new v,gr=new ht,Ni=new ct,ol=new v,Ao=new v,hx=new v,ux=new ht,If=new v(1,0,0),Lf=new v(0,1,0),Df=new v(0,0,1),Uf={type:"added"},dx={type:"removed"},xr={type:"childadded",child:null},tu={type:"childremoved",child:null},Nt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new v,t=new Vt,i=new ht,s=new v(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,t){return Pf.copy(e).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ol.copy(e):ol.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ao,ol,this.up):Ni.lookAt(ol,Ao,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Ni),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uf),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new v(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new v,Fi=new v,nu=new v,Oi=new v,yr=new v,_r=new v,Nf=new v,iu=new v,su=new v,ru=new v,ou=new kt,au=new kt,lu=new kt,Tn=class n{constructor(e=new v,t=new v,i=new v){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),Fi.subVectors(i,t),nu.subVectors(e,t);let o=si.dot(si),a=si.dot(Fi),l=si.dot(nu),c=Fi.dot(Fi),h=Fi.dot(nu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,i),lu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),Fi.subVectors(e,t),si.cross(Fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;yr.subVectors(s,i),_r.subVectors(r,i),iu.subVectors(e,i);let l=yr.dot(iu),c=_r.dot(iu);if(l<=0&&c<=0)return t.copy(i);su.subVectors(e,s);let h=yr.dot(su),u=_r.dot(su);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(yr,o);ru.subVectors(e,r);let f=yr.dot(ru),p=_r.dot(ru);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(_r,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Nf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Nf,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(yr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},al={h:0,s:0,l:0};function cu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=qu(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cu(o,r,e+1/3),this.g=cu(o,r,e),this.b=cu(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ft.workingToColorSpace(cn.copy(this),e),Math.round(Ke(cn.r*255,0,255))*65536+Math.round(Ke(cn.g*255,0,255))*256+Math.round(Ke(cn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=yt){ft.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(al);let i=Oo(Qi.h,al.h,t),s=Oo(Qi.s,al.s,t),r=Oo(Qi.l,al.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ge;Ge.NAMES=Zp;var fx=0,li=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ls,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ll,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Ll&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new v,ll=new ae,px=0,wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}};var Wo=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xo=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},mx=0,Yn=new ct,hu=new Nt,vr=new v,On=new Jt,Co=new Jt,tn=new v,st=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(On.min,Co.min),On.expandByPoint(tn),tn.addVectors(On.max,Co.max),On.expandByPoint(tn)):(On.expandByPoint(Co.min),On.expandByPoint(Co.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),tn.add(vr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new v,l[C]=new v;let c=new v,h=new v,u=new v,d=new ae,f=new ae,p=new ae,x=new v,g=new v;function m(C,S,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[C].add(x),a[S].add(x),a[M].add(x),l[C].add(g),l[S].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,S=b.length;C<S;++C){let M=b[C],L=M.start,U=M.count;for(let O=L,W=L+U;O<W;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new v,_=new v,E=new v,A=new v;function P(C){E.fromBufferAttribute(s,C),A.copy(E);let S=a[C];w.copy(S),w.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(A,S);let L=_.dot(l[C])<0?-1:1;o.setXYZW(C,w.x,w.y,w.z,L)}for(let C=0,S=b.length;C<S;++C){let M=b[C],L=M.start,U=M.count;for(let O=L,W=L+U;O<W;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ff=new ct,Rs=new is,cl=new Zn,Of=new v,hl=new v,ul=new v,dl=new v,uu=new v,fl=new v,Bf=new v,pl=new v,me=class extends Nt{constructor(e=new st,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(uu.fromBufferAttribute(u,e),o?fl.addScaledVector(uu,h):fl.addScaledVector(uu.sub(t),h))}t.add(fl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(cl.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(cl,Of)===null||Rs.origin.distanceToSquared(Of)>(e.far-e.near)**2))&&(Ff.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Ff),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let A=a.getX(_),P=a.getX(_+1),C=a.getX(_+2);s=ml(this,m,e,i,c,h,u,A,P,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),w=a.getX(g+1),_=a.getX(g+2);s=ml(this,o,e,i,c,h,u,b,w,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let A=_,P=_+1,C=_+2;s=ml(this,m,e,i,c,h,u,A,P,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=g,w=g+1,_=g+2;s=ml(this,o,e,i,c,h,u,b,w,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function gx(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;pl.copy(a),pl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:n}}function ml(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hl),n.getVertexPosition(l,ul),n.getVertexPosition(c,dl);let h=gx(n,e,t,i,hl,ul,dl,Bf);if(h){let u=new v;Tn.getBarycoord(Bf,hl,ul,dl,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new v,materialIndex:0};Tn.getNormal(hl,ul,dl,d.normal),h.face=d,h.barycoord=u}return h}var We=class n extends st{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function p(x,g,m,b,w,_,E,A,P,C,S){let M=_/P,L=E/C,U=_/2,O=E/2,W=A/2,k=P+1,H=C+1,J=0,X=0,ee=new v;for(let ge=0;ge<H;ge++){let Ee=ge*L-O;for(let q=0;q<k;q++){let ue=q*M-U;ee[x]=ue*b,ee[g]=Ee*w,ee[m]=W,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=A>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(q/P),u.push(1-ge/C),J+=1}}for(let ge=0;ge<C;ge++)for(let Ee=0;Ee<P;Ee++){let q=d+Ee+k*ge,ue=d+Ee+k*(ge+1),Ve=d+(Ee+1)+k*(ge+1),De=d+(Ee+1)+k*ge;l.push(q,ue,De),l.push(ue,Ve,De),X+=6}a.addGroup(f,X,S),f+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Ys(n[t]);for(let s in i)e[s]=i[s]}return e}function xx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var jp={clone:Ys,merge:mn},yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qo=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new v,zf=new ae,kf=new ae,hn=class extends qo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,zf,kf),t.subVectors(kf,zf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mr=-90,br=1,zl=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Mr,br,e,t);s.layers=this.layers,this.add(s);let r=new hn(Mr,br,e,t);r.layers=this.layers,this.add(r);let o=new hn(Mr,br,e,t);o.layers=this.layers,this.add(o);let a=new hn(Mr,br,e,t);a.layers=this.layers,this.add(a);let l=new hn(Mr,br,e,t);l.layers=this.layers,this.add(l);let c=new hn(Mr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Yo=class extends fn{constructor(e=[],t=Xs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Vi});r.uniforms.tEquirect.value=t;let o=new me(s,r),a=t.minFilter;return t.minFilter===bn&&(t.minFilter=nn),new zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},dn=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vx={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Zo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new v,kr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vr=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Ro=new v,wr=new v,Tr=new v,Er=new ae,Po=new ae,Jp=new ct,gl=new v,Io=new v,xl=new v,Vf=new ae,du=new ae,Gf=new ae,Jo=class extends Nt{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jo(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new kr(i,3,0,!1)),Sr.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Jp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;yl(gl.set(-.5,-.5,0),Tr,o,wr,s,r),yl(Io.set(.5,-.5,0),Tr,o,wr,s,r),yl(xl.set(.5,.5,0),Tr,o,wr,s,r),Vf.set(0,0),du.set(1,0),Gf.set(1,1);let a=e.ray.intersectTriangle(gl,Io,xl,!1,Ro);if(a===null&&(yl(Io.set(-.5,.5,0),Tr,o,wr,s,r),du.set(0,1),a=e.ray.intersectTriangle(gl,xl,Io,!1,Ro),a===null))return;let l=e.ray.origin.distanceTo(Ro);l<e.near||l>e.far||t.push({distance:l,point:Ro.clone(),uv:Tn.getInterpolation(Ro,gl,Io,xl,Vf,du,Gf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yl(n,e,t,i,s,r){Er.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Po.x=r*Er.x-s*Er.y,Po.y=s*Er.x+r*Er.y):Po.copy(Er),n.copy(e),n.x+=Po.x,n.y+=Po.y,n.applyMatrix4(Jp)}var hi=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gr=class extends wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new ct,Hf=new ct,_l=[],Wf=new Jt,Mx=new ct,Lo=new me,Do=new Zn,Ko=class extends me{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Wf.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Do.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Hf.multiplyMatrices(i,Ar),Lo.matrixWorld=Hf,Lo.raycast(e,_l);for(let o=0,a=_l.length;o<a;o++){let l=_l[o];l.instanceId=r,l.object=this,t.push(l)}_l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(s*this.count),s,this.count,vc,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fu=new v,bx=new v,Sx=new Qe,un=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fu.subVectors(i,t).cross(bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(fu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sx.getNormalMatrix(e),s=this.coplanarPoint(fu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Zn,wx=new ae(.5,.5),vl=new v,Hr=class{constructor(e=new un,t=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],w=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,m-p,E-b).normalize(),s[1].setComponents(c+o,f+h,m+p,E+b).normalize(),s[2].setComponents(c+a,f+u,m+x,E+w).normalize(),s[3].setComponents(c-a,f-u,m-x,E-w).normalize(),i)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,m-g,E-_).normalize();else if(s[4].setComponents(c-l,f-d,m-g,E-_).normalize(),t===oi)s[5].setComponents(c+l,f+d,m+g,E+_).normalize();else if(t===Go)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);let t=wx.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(vl.x=s.normal.x>0?e.max.x:e.min.x,vl.y=s.normal.y>0?e.max.y:e.min.y,vl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jn=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new v,Gl=new v,Xf=new ct,Uo=new is,Ml=new Zn,pu=new v,qf=new v,An=class extends Nt{constructor(e=new st,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vl.fromBufferAttribute(t,s-1),Gl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Ml.radius+=r,e.ray.intersectsSphere(Ml)===!1)return;Xf.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(Xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),b=h.getX(x+1),w=bl(this,e,Uo,l,m,b,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=bl(this,e,Uo,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=bl(this,e,Uo,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=bl(this,e,Uo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Vl.fromBufferAttribute(a,s),Gl.fromBufferAttribute(a,r),t.distanceSqToSegment(Vl,Gl,pu,qf)>i)return;pu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:qf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Yf=new v,Zf=new v,Ns=class extends An{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Yf.fromBufferAttribute(t,s),Zf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yf.distanceTo(Zf);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$o=class extends An{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var zi=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qo=class extends fn{constructor(e,t,i=cs,s,r,o,a=En,l=En,c,h=Lr,u=1){if(h!==Lr&&h!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ea=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ss=class n extends st{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,x=s+1,g=new v,m=new v;for(let b=0;b<=p;b++){let w=0,_=0,E=0,A=0;if(b<=i){let S=b/i,M=S*Math.PI/2;_=-h-e*Math.cos(M),E=e*Math.sin(M),A=-e*Math.cos(M),w=S*u}else if(b<=i+r){let S=(b-i)/r;_=-h+S*t,E=e,A=0,w=u+S*d}else{let S=(b-i-r)/i,M=S*Math.PI/2;_=h+e*Math.sin(M),E=e*Math.cos(M),A=e*Math.sin(M),w=u+d+S*u}let P=Math.max(0,Math.min(1,w/f)),C=0;b===0?C=.5/s:b===p&&(C=-.5/s);for(let S=0;S<=s;S++){let M=S/s,L=M*Math.PI*2,U=Math.sin(L),O=Math.cos(L);m.x=-E*O,m.y=_,m.z=E*U,a.push(m.x,m.y,m.z),g.set(-E*O,A,E*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+C,P)}if(b>0){let S=(b-1)*x;for(let M=0;M<s;M++){let L=S+M,U=S+M+1,O=b*x+M,W=b*x+M+1;o.push(L,U,O),o.push(U,W,O)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pn=class n extends st{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class n extends st{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function b(){let _=new v,E=new v,A=0,P=(t-e)/i;for(let C=0;C<=r;C++){let S=[],M=C/r,L=M*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,W=O*l+a,k=Math.sin(W),H=Math.cos(W);E.x=L*k,E.y=-M*i+g,E.z=L*H,u.push(E.x,E.y,E.z),_.set(k,P,H).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-M),S.push(p++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let M=x[S][C],L=x[S+1][C],U=x[S+1][C+1],O=x[S][C+1];(e>0||S!==0)&&(h.push(M,L,O),A+=3),(t>0||S!==r-1)&&(h.push(L,U,O),A+=3)}c.addGroup(m,A,0),m+=A}function w(_){let E=p,A=new ae,P=new v,C=0,S=_===!0?e:t,M=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let L=p;for(let U=0;U<=s;U++){let W=U/s*l+a,k=Math.cos(W),H=Math.sin(W);P.x=S*H,P.y=g*M,P.z=S*k,u.push(P.x,P.y,P.z),d.push(0,M,0),A.x=k*.5+.5,A.y=H*.5*M+.5,f.push(A.x,A.y),p++}for(let U=0;U<s;U++){let O=E+U,W=L+U;_===!0?h.push(W,W+1,O):h.push(W+1,W,O),C+=3}c.addGroup(m,C,_===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fs=class n extends Tt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class n extends st{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new v,_=new v,E=new v;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],_),f(t[A+2],E),l(w,_,E,b)}function l(b,w,_,E){let A=E+1,P=[];for(let C=0;C<=A;C++){P[C]=[];let S=b.clone().lerp(_,C/A),M=w.clone().lerp(_,C/A),L=A-C;for(let U=0;U<=L;U++)U===0&&C===A?P[C][U]=S:P[C][U]=S.clone().lerp(M,U/L)}for(let C=0;C<A;C++)for(let S=0;S<2*(A-C)-1;S++){let M=Math.floor(S/2);S%2===0?(d(P[C][M+1]),d(P[C+1][M]),d(P[C][M])):(d(P[C][M+1]),d(P[C+1][M+1]),d(P[C+1][M]))}}function c(b){let w=new v;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let b=new v;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let _=g(b)/2/Math.PI+.5,E=m(b)/Math.PI+.5;o.push(_,1-E)}p(),u()}function u(){for(let b=0;b<o.length;b+=6){let w=o[b+0],_=o[b+2],E=o[b+4],A=Math.max(w,_,E),P=Math.min(w,_,E);A>.9&&P<.1&&(w<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,w){let _=b*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let b=new v,w=new v,_=new v,E=new v,A=new ae,P=new ae,C=new ae;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),E.copy(b).add(w).add(_).divideScalar(3);let L=g(E);x(A,M+0,b,L),x(P,M+2,w,L),x(C,M+4,_,L)}}function x(b,w,_,E){E<0&&b.x===1&&(o[w]=b.x-1),_.x===0&&_.z===0&&(o[w]=E/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new v,s=[],r=[],o=[],a=new v,l=new ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hl=class extends Xr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Sl=new v,mu=new ju,gu=new ju,xu=new ju,Wl=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new v){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Sl.subVectors(s[0],s[1]).add(s[0]),c=Sl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Sl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),mu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),gu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),xu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(mu.calc(l),gu.calc(l),xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new v().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Tx(n,e){let t=1-n;return t*t*e}function Ex(n,e){return 2*(1-n)*n*e}function Ax(n,e){return n*n*e}function Bo(n,e,t,i){return Tx(n,e)+Ex(n,t)+Ax(n,i)}function Cx(n,e){let t=1-n;return t*t*t*e}function Rx(n,e){let t=1-n;return 3*t*t*n*e}function Px(n,e){return 3*(1-n)*n*n*e}function Ix(n,e){return n*n*n*e}function zo(n,e,t,i,s){return Cx(n,e)+Rx(n,t)+Px(n,i)+Ix(n,s)}var ta=class extends Bn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,s.x,r.x,o.x,a.x),zo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xl=class extends Bn{constructor(e=new v,t=new v,i=new v,s=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,s.x,r.x,o.x,a.x),zo(e,s.y,r.y,o.y,a.y),zo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Bn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends Bn{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Bn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Bo(e,s.x,r.x,o.x),Bo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends Bn{constructor(e=new v,t=new v,i=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new v){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Bo(e,s.x,r.x,o.x),Bo(e,s.y,r.y,o.y),Bo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(jf(a,l.x,c.x,h.x,u.x),jf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},wu=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:Wl,CubicBezierCurve:ta,CubicBezierCurve3:Xl,EllipseCurve:Xr,LineCurve:na,LineCurve3:ql,QuadraticBezierCurve:ia,QuadraticBezierCurve3:Yl,SplineCurve:sa}),Zl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wu[s.type]().fromJSON(s))}return this}},ra=class extends Zl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new na(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ia(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ta(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new sa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Xr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ki=class extends ra{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ra().fromJSON(s))}return this}};function Lx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Kp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ox(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return oa(r,o,t,a,l,c,0),o}function Kp(n,e,t,i,s){let r;if(s===Zx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Jf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Jf(o/i|0,n[o],n[o+1],r);return r&&qr(r,r.next)&&(la(r),r=r.next),r}function Os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qr(t,t.next)||zt(t.prev,t,t.next)===0)){if(la(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function oa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Gx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ux(n,i,s,r):Dx(n)){e.push(l.i,n.i,c.i),la(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Nx(Os(n),e),oa(n,e,t,i,s,r,2)):o===2&&Fx(n,e,t,i,s,r):oa(Os(n),e,t,i,s,r,1);break}}}function Dx(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&No(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ux(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),m=Tu(f,p,e,t,i),b=Tu(x,g,e,t,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=m&&_&&_.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&No(a,h,l,u,c,d,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&No(a,h,l,u,c,d,_.x,_.y)&&zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&No(a,h,l,u,c,d,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&No(a,h,l,u,c,d,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Nx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!qr(i,s)&&Qp(i,t,t.next,s)&&aa(i,s)&&aa(s,i)&&(e.push(i.i,t.i,s.i),la(t),la(t.next),t=n=s),t=t.next}while(t!==n);return Os(t)}function Fx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xx(o,a)){let l=em(o,a);o=Os(o,o.next),l=Os(l,l.next),oa(o,e,t,i,s,r,0),oa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ox(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Kp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Wx(c))}s.sort(Bx);for(let r=0;r<s.length;r++)t=zx(s[r],t);return t}function Bx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function zx(n,e){let t=kx(n,e);if(!t)return e;let i=em(t,n);return Os(i,i.next),Os(t,t.next)}function kx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(qr(n,t))return t;do{if(qr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&$p(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);aa(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Vx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Vx(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function Gx(n,e,t,i){let s=n;do s.z===0&&(s.z=Tu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hx(s)}function Hx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Tu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $p(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function No(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&$p(n,e,t,i,s,r,o,a)}function Xx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qx(n,e)&&(aa(n,e)&&aa(e,n)&&Yx(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||qr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qr(n,e){return n.x===e.x&&n.y===e.y}function Qp(n,e,t,i){let s=Tl(zt(n,e,t)),r=Tl(zt(n,e,i)),o=Tl(zt(t,i,n)),a=Tl(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&wl(n,t,e)||r===0&&wl(n,i,e)||o===0&&wl(t,n,i)||a===0&&wl(t,e,i))}function wl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Tl(n){return n>0?1:n<0?-1:0}function qx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function aa(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function Yx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function em(n,e){let t=Eu(n.i,n.x,n.y),i=Eu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Jf(n,e,t,i){let s=Eu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function la(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Au=class{static triangulate(e,t,i=2){return Lx(e,t,i)}},vi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Kf(e),$f(i,e);let o=e.length;t.forEach(Kf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$f(i,t[l]);let a=Au.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Kf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $f(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Bs=class n extends st{constructor(e=new ki([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:jx,w,_=!1,E,A,P,C;m&&(w=m.getSpacedPoints(h),_=!0,d=!1,E=m.computeFrenetFrames(h,!1),A=new v,P=new v,C=new v),d||(g=0,f=0,p=0,x=0);let S=a.extractPoints(c),M=S.shape,L=S.holes;if(!vi.isClockWise(M)){M=M.reverse();for(let he=0,oe=L.length;he<oe;he++){let te=L[he];vi.isClockWise(te)&&(L[he]=te.reverse())}}function O(he){let te=10000000000000001e-36,ne=he[0];for(let Te=1;Te<=he.length;Te++){let ye=Te%he.length,Ae=he[ye],$e=Ae.x-ne.x,je=Ae.y-ne.y,R=$e*$e+je*je,y=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ne.x),Math.abs(ne.y)),I=te*y*y;if(R<=I){he.splice(ye,1),Te--;continue}ne=Ae}}O(M),L.forEach(O);let W=L.length,k=M;for(let he=0;he<W;he++){let oe=L[he];M=M.concat(oe)}function H(he,oe,te){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(oe,te)}let J=M.length;function X(he,oe,te){let ne,Te,ye,Ae=he.x-oe.x,$e=he.y-oe.y,je=te.x-he.x,R=te.y-he.y,y=Ae*Ae+$e*$e,I=Ae*R-$e*je;if(Math.abs(I)>Number.EPSILON){let B=Math.sqrt(y),j=Math.sqrt(je*je+R*R),G=oe.x-$e/B,xe=oe.y+Ae/B,ie=te.x-R/j,pe=te.y+je/j,de=((ie-G)*R-(pe-xe)*je)/(Ae*R-$e*je);ne=G+Ae*de-he.x,Te=xe+$e*de-he.y;let K=ne*ne+Te*Te;if(K<=2)return new ae(ne,Te);ye=Math.sqrt(K/2)}else{let B=!1;Ae>Number.EPSILON?je>Number.EPSILON&&(B=!0):Ae<-Number.EPSILON?je<-Number.EPSILON&&(B=!0):Math.sign($e)===Math.sign(R)&&(B=!0),B?(ne=-$e,Te=Ae,ye=Math.sqrt(y)):(ne=Ae,Te=$e,ye=Math.sqrt(y/2))}return new ae(ne/ye,Te/ye)}let ee=[];for(let he=0,oe=k.length,te=oe-1,ne=he+1;he<oe;he++,te++,ne++)te===oe&&(te=0),ne===oe&&(ne=0),ee[he]=X(k[he],k[te],k[ne]);let ge=[],Ee,q=ee.concat();for(let he=0,oe=W;he<oe;he++){let te=L[he];Ee=[];for(let ne=0,Te=te.length,ye=Te-1,Ae=ne+1;ne<Te;ne++,ye++,Ae++)ye===Te&&(ye=0),Ae===Te&&(Ae=0),Ee[ne]=X(te[ne],te[ye],te[Ae]);ge.push(Ee),q=q.concat(Ee)}let ue;if(g===0)ue=vi.triangulateShape(k,L);else{let he=[],oe=[];for(let te=0;te<g;te++){let ne=te/g,Te=f*Math.cos(ne*Math.PI/2),ye=p*Math.sin(ne*Math.PI/2)+x;for(let Ae=0,$e=k.length;Ae<$e;Ae++){let je=H(k[Ae],ee[Ae],ye);fe(je.x,je.y,-Te),ne===0&&he.push(je)}for(let Ae=0,$e=W;Ae<$e;Ae++){let je=L[Ae];Ee=ge[Ae];let R=[];for(let y=0,I=je.length;y<I;y++){let B=H(je[y],Ee[y],ye);fe(B.x,B.y,-Te),ne===0&&R.push(B)}ne===0&&oe.push(R)}}ue=vi.triangulateShape(he,oe)}let Ve=ue.length,De=p+x;for(let he=0;he<J;he++){let oe=d?H(M[he],q[he],De):M[he];_?(P.copy(E.normals[0]).multiplyScalar(oe.x),A.copy(E.binormals[0]).multiplyScalar(oe.y),C.copy(w[0]).add(P).add(A),fe(C.x,C.y,C.z)):fe(oe.x,oe.y,0)}for(let he=1;he<=h;he++)for(let oe=0;oe<J;oe++){let te=d?H(M[oe],q[oe],De):M[oe];_?(P.copy(E.normals[he]).multiplyScalar(te.x),A.copy(E.binormals[he]).multiplyScalar(te.y),C.copy(w[he]).add(P).add(A),fe(C.x,C.y,C.z)):fe(te.x,te.y,u/h*he)}for(let he=g-1;he>=0;he--){let oe=he/g,te=f*Math.cos(oe*Math.PI/2),ne=p*Math.sin(oe*Math.PI/2)+x;for(let Te=0,ye=k.length;Te<ye;Te++){let Ae=H(k[Te],ee[Te],ne);fe(Ae.x,Ae.y,u+te)}for(let Te=0,ye=L.length;Te<ye;Te++){let Ae=L[Te];Ee=ge[Te];for(let $e=0,je=Ae.length;$e<je;$e++){let R=H(Ae[$e],Ee[$e],ne);_?fe(R.x,R.y+w[h-1].y,w[h-1].x+te):fe(R.x,R.y,u+te)}}}$(),se();function $(){let he=s.length/3;if(d){let oe=0,te=J*oe;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[2]+te,Te[1]+te,Te[0]+te)}oe=h+g*2,te=J*oe;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[0]+te,Te[1]+te,Te[2]+te)}}else{for(let oe=0;oe<Ve;oe++){let te=ue[oe];ce(te[2],te[1],te[0])}for(let oe=0;oe<Ve;oe++){let te=ue[oe];ce(te[0]+J*h,te[1]+J*h,te[2]+J*h)}}i.addGroup(he,s.length/3-he,0)}function se(){let he=s.length/3,oe=0;Q(k,oe),oe+=k.length;for(let te=0,ne=L.length;te<ne;te++){let Te=L[te];Q(Te,oe),oe+=Te.length}i.addGroup(he,s.length/3-he,1)}function Q(he,oe){let te=he.length;for(;--te>=0;){let ne=te,Te=te-1;Te<0&&(Te=he.length-1);for(let ye=0,Ae=h+g*2;ye<Ae;ye++){let $e=J*ye,je=J*(ye+1),R=oe+ne+$e,y=oe+Te+$e,I=oe+Te+je,B=oe+ne+je;ke(R,y,I,B)}}}function fe(he,oe,te){l.push(he),l.push(oe),l.push(te)}function ce(he,oe,te){dt(he),dt(oe),dt(te);let ne=s.length/3,Te=b.generateTopUV(i,s,ne-3,ne-2,ne-1);D(Te[0]),D(Te[1]),D(Te[2])}function ke(he,oe,te,ne){dt(he),dt(oe),dt(ne),dt(oe),dt(te),dt(ne);let Te=s.length/3,ye=b.generateSideWallUV(i,s,Te-6,Te-3,Te-2,Te-1);D(ye[0]),D(ye[1]),D(ye[3]),D(ye[1]),D(ye[2]),D(ye[3])}function dt(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function D(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wu[s.type]().fromJSON(s)),new n(i,e.options)}},jx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(d,1-p),new ae(x,1-m)]:[new ae(a,1-l),new ae(h,1-u),new ae(f,1-p),new ae(g,1-m)]}};function Jx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jn=class n extends Wr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ca=class n extends st{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ke(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,d=new ae,f=new v,p=new v,x=new v,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let b=0;b<=t;b++){let w=i+b*h*s,_=Math.sin(w),E=Math.cos(w);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),d.x=b/t,d.y=A/(e.length-1),a.push(d.x,d.y);let P=l[3*A+0]*_,C=l[3*A+1],S=l[3*A+0]*E;c.push(P,C,S)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let _=w+b*e.length,E=_,A=_+e.length,P=_+e.length+1,C=_+1;r.push(E,A,C),r.push(P,C,A)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Kn=class n extends Wr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},on=class n extends st{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let b=m*d-o;for(let w=0;w<c;w++){let _=w*u-r;p.push(_,-b,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let w=b+c*m,_=b+c*(m+1),E=b+1+c*(m+1),A=b+1+c*m;f.push(w,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},rs=class n extends st{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new v,p=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let b=m+g,w=b,_=b+i+1,E=b+i+2,A=b+1;a.push(w,_,A),a.push(_,E,A)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ha=class n extends st{constructor(e=new ki([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;vi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];vi.isClockWise(b)===!0&&(p[g]=b.reverse())}let x=vi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){let b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,m=x.length;g<m;g++){let b=x[g],w=b[0]+u,_=b[1]+u,E=b[2]+u;i.push(w,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Kx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Kx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Cn=class n extends st{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,d=new v,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let b=[],w=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+w*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+_,1-w),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){let w=h[m][b+1],_=h[m][b],E=h[m+1][b],A=h[m+1][b+1];(m!==0||o>0)&&f.push(w,_,A),(m!==i-1||l<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},zs=class n extends Wr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends st{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new v,u=new v,d=new v;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,b=(s+1)*f+p;o.push(x,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ua=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new v,r=new v;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),b=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,b),Qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Qf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var sn=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zn=class extends li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jl=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function El(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $x(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ks=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kl=class extends ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:r=e,a=2*t-i;break;case bu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:o=e,l=2*i-t;break;case bu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+b*o[c+E]+w*o[l+E]+_*o[u+E];return r}},$l=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ql=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=El(t,this.TimeBufferType),this.values=El(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:El(e.times,Array),values:El(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$x(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ul;var os=class extends kn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ko;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};ec.prototype.ValueTypeName="color";var tc=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};tc.prototype.ValueTypeName="number";var nc=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}},da=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends kn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ko;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};ic.prototype.ValueTypeName="vector";var Pl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},tm=new sc,Yr=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=new WeakMap,rc=class extends Yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Cr.get(o);u===void 0&&(u=[],Cr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Ur("img");function l(){h(),t&&t(this);let u=Cr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Pl.remove(`image:${e}`);let d=Cr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var wi=class extends Yr{constructor(e){super(e)}load(e,t,i,s){let r=new fn,o=new rc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},fa=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vs=class extends fa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yu=new ct,ep=new v,tp=new v,Cu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pa=class extends qo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends Cu{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ju="\\[\\]\\.:\\/",Qx=new RegExp("["+Ju+"]","g"),Ku="[^"+Ju+"]",ey="[^"+Ju.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",Ku),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones","map"],Pu=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){let t=ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);oy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Pu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D1=new Float32Array(1);var np=new ct,Hs=class{constructor(e,t,i=0,s=1/0){this.ray=new is(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(np),this}intersectObject(e,t=!0,i=[]){return Iu(e,this,i,t),i.sort(ip),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Iu(e[s],this,i,t);return i.sort(ip),i}};function ip(n,e){return n.distance-e.distance}function Iu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Iu(r[o],e,t,!0)}}var Zr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sp=new v,Al=new v,Rr=new v,Pr=new v,_u=new v,ay=new v,ly=new v,ma=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){sp.subVectors(e,this.start),Al.subVectors(this.end,this.start);let i=Al.dot(Al),r=Al.dot(sp)/i;return t&&(r=Ke(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=ay,i=ly){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Rr.subVectors(c,a),Pr.subVectors(h,l),_u.subVectors(a,l);let u=Rr.dot(Rr),d=Pr.dot(Pr),f=Pr.dot(_u);if(u<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/d,o=Ke(o,0,1);else{let p=Rr.dot(_u);if(d<=s)o=0,r=Ke(-p/u,0,1);else{let x=Rr.dot(Pr),g=u*d-x*x;g!==0?r=Ke((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=Ke(-p/u,0,1)):o>1&&(o=1,r=Ke((x-p)/u,0,1))}}return t.copy(a).add(Rr.multiplyScalar(r)),i.copy(l).add(Pr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ga=class extends Ns{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ge(i),s=new Ge(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new st;h.setAttribute("position",new Ne(l,3)),h.setAttribute("color",new Ne(c,3));let u=new jn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Cl=new Jt,jr=class extends Ns{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new st;r.setIndex(new wt(i,1)),r.setAttribute("position",new wt(s,3)),super(r,new jn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Cl.setFromObject(this.object),Cl.isEmpty())return;let e=Cl.min,t=Cl.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ws=class extends bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function $u(n,e,t,i){let s=cy(i);switch(t){case Vu:return n*e;case vc:return n*e/s.components*s.byteLength;case Mc:return n*e/s.components*s.byteLength;case Hu:return n*e*2/s.components*s.byteLength;case bc:return n*e*2/s.components*s.byteLength;case Gu:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Sc:return n*e*4/s.components*s.byteLength;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Ac:return Math.max(n,16)*Math.max(e,8)/4;case wc:case Ec:return Math.max(n,8)*Math.max(e,8)/2;case Cc:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cy(n){switch(n){case ui:case Ou:return{byteLength:1,components:1};case Kr:case Bu:case $r:return{byteLength:2,components:1};case yc:case _c:return{byteLength:2,components:4};case cs:case xc:case di:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function py(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`vec3 transformedNormal = objectNormal;
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
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
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
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
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
#endif`,f_=`struct PhysicalMaterial {
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
}`,p_=`
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
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
}`,Mv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Sv=`#define DISTANCE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Pv=`#define LAMBERT
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
}`,Iv=`#define LAMBERT
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
}`,Lv=`#define MATCAP
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
}`,Dv=`#define MATCAP
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
}`,Uv=`#define NORMAL
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
}`,Nv=`#define NORMAL
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
}`,Fv=`#define PHONG
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Gv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 color;
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
}`,qv=`uniform float rotation;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:My,aomap_pars_fragment:by,batching_pars_vertex:Sy,batching_vertex:wy,begin_vertex:Ty,beginnormal_vertex:Ey,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Uy,color_pars_fragment:Ny,color_pars_vertex:Fy,color_vertex:Oy,common:By,cube_uv_reflection_fragment:zy,defaultnormal_vertex:ky,displacementmap_pars_vertex:Vy,displacementmap_vertex:Gy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:Zy,envmap_pars_fragment:jy,envmap_pars_vertex:Jy,envmap_physical_pars_fragment:a_,envmap_vertex:Ky,fog_vertex:$y,fog_pars_vertex:Qy,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:u_,lights_physical_fragment:d_,lights_physical_pars_fragment:f_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:__,logdepthbuf_vertex:v_,map_fragment:M_,map_pars_fragment:b_,map_particle_fragment:S_,map_particle_pars_fragment:w_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:E_,morphinstance_vertex:A_,morphcolor_vertex:C_,morphnormal_vertex:R_,morphtarget_pars_vertex:P_,morphtarget_vertex:I_,normal_fragment_begin:L_,normal_fragment_maps:D_,normal_pars_fragment:U_,normal_pars_vertex:N_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:H_,premultiplied_alpha_fragment:W_,project_vertex:X_,dithering_fragment:q_,dithering_pars_fragment:Y_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:K_,shadowmap_vertex:$_,shadowmask_pars_fragment:Q_,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:sv,specularmap_pars_fragment:rv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:hv,uv_pars_vertex:uv,uv_vertex:dv,worldpos_vertex:fv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:xv,cube_vert:yv,cube_frag:_v,depth_vert:vv,depth_frag:Mv,distanceRGBA_vert:bv,distanceRGBA_frag:Sv,equirect_vert:wv,equirect_frag:Tv,linedashed_vert:Ev,linedashed_frag:Av,meshbasic_vert:Cv,meshbasic_frag:Rv,meshlambert_vert:Pv,meshlambert_frag:Iv,meshmatcap_vert:Lv,meshmatcap_frag:Dv,meshnormal_vert:Uv,meshnormal_frag:Nv,meshphong_vert:Fv,meshphong_frag:Ov,meshphysical_vert:Bv,meshphysical_frag:zv,meshtoon_vert:kv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Hv,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:qv,sprite_frag:Yv},Re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ei={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Qc={r:0,b:0,g:0},Zs=new Vt,Zv=new ct;function jv(n,e,t,i,s,r,o){let a=new Ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function x(w){let _=!1,E=p(w);E===null?m(a,l):E&&E.isColor&&(m(E,1),_=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,_){let E=p(_);E&&(E.isCubeTexture||E.mapping===ya)?(h===void 0&&(h=new me(new We(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zs.copy(_.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(Zs)),h.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new me(new on(2,2),new ci({name:"BackgroundMaterial",uniforms:Ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,_){w.getRGB(Qc,Zu(n)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,_,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:b}}function Jv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,L,U,O,W){let k=!1,H=u(O,U,L);r!==H&&(r=H,c(r.object)),k=f(M,O,U,W),k&&p(M,O,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(M,L,U,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,U){let O=U.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let k=W[L.id];k===void 0&&(k={},W[L.id]=k);let H=k[O];return H===void 0&&(H=d(l()),k[O]=H),H}function d(M){let L=[],U=[],O=[];for(let W=0;W<t;W++)L[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,L,U,O){let W=r.attributes,k=L.attributes,H=0,J=U.getAttributes();for(let X in J)if(J[X].location>=0){let ge=W[X],Ee=k[X];if(Ee===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function p(M,L,U,O){let W={},k=L.attributes,H=0,J=U.getAttributes();for(let X in J)if(J[X].location>=0){let ge=k[X];ge===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),W[X]=Ee,H++}r.attributes=W,r.attributesNum=H,r.index=O}function x(){let M=r.newAttributes;for(let L=0,U=M.length;L<U;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){let U=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),W[M]!==L&&(n.vertexAttribDivisor(M,L),W[M]=L)}function b(){let M=r.newAttributes,L=r.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==M[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function w(M,L,U,O,W,k,H){H===!0?n.vertexAttribIPointer(M,L,U,W,k):n.vertexAttribPointer(M,L,U,O,W,k)}function _(M,L,U,O){x();let W=O.attributes,k=U.getAttributes(),H=L.defaultAttributeValues;for(let J in k){let X=k[J];if(X.location>=0){let ee=W[J];if(ee===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let ge=ee.normalized,Ee=ee.itemSize,q=e.get(ee);if(q===void 0)continue;let ue=q.buffer,Ve=q.type,De=q.bytesPerElement,$=Ve===n.INT||Ve===n.UNSIGNED_INT||ee.gpuType===xc;if(ee.isInterleavedBufferAttribute){let se=ee.data,Q=se.stride,fe=ee.offset;if(se.isInstancedInterleavedBuffer){for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce,se.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let ce=0;ce<X.locationSize;ce++)w(X.location+ce,Ee/X.locationSize,Ve,ge,Q*De,(fe+Ee/X.locationSize*ce)*De,$)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)m(X.location+se,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<X.locationSize;se++)g(X.location+se);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let se=0;se<X.locationSize;se++)w(X.location+se,Ee/X.locationSize,Ve,ge,Ee*De,Ee/X.locationSize*se*De,$)}}else if(H!==void 0){let ge=H[J];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(X.location,ge);break;case 3:n.vertexAttrib3fv(X.location,ge);break;case 4:n.vertexAttrib4fv(X.location,ge);break;default:n.vertexAttrib1fv(X.location,ge)}}}}b()}function E(){C();for(let M in i){let L=i[M];for(let U in L){let O=L[U];for(let W in O)h(O[W].object),delete O[W];delete L[U]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let L=i[M.id];for(let U in L){let O=L[U];for(let W in O)h(O[W].object),delete O[W];delete L[U]}delete i[M.id]}function P(M){for(let L in i){let U=i[L];if(U[M.id]===void 0)continue;let O=U[M.id];for(let W in O)h(O[W].object),delete O[W];delete U[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Kv(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $v(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let C=P===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ui&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!C)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function Qv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new un,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:i,w=b*4,_=m.clippingState||null;l.value=_,_=h(p,d,w,f);for(let E=0;E!==w;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,_=f;w!==x;++w,_+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function eM(n){let e=new WeakMap;function t(o,a){return a===Jr?o.mapping=Xs:a===mc&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jr||a===mc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var no=4,nm=[.125,.215,.35,.446,.526,.582],Ks=20,Qu=new pa,im=new Ge,ed=null,td=0,nd=0,id=!1,Js=(1+Math.sqrt(5))/2,to=1/Js,sm=[new v(-Js,to,0),new v(Js,to,0),new v(-to,0,Js),new v(to,0,Js),new v(0,Js,-to),new v(0,Js,to),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],tM=new v,so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=tM}=r;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,eh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:$r,format:Rn,colorSpace:Us,depthBuffer:!1},s=rm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(r)),this._blurMaterial=iM(r,e,t)}return s}_compileMaterial(e){let t=new me(this._lodPlanes[0],e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(im),u.toneMapping=Gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Gt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new me(new We,x),m=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,m=!0):(x.color.copy(im),m=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;eh(s,_*E,w>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;eh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sm[(s-r-1)%sm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ks-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Ks;g>Ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ks}`);let m=[],b=0;for(let P=0;P<Ks;++P){let C=P/x,S=Math.exp(-C*C/2);m.push(S),P===0?b+=S:P<g&&(b+=2*S)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let _=this._sizeLods[s],E=3*_*(s>w-no?s-w+no:0),A=4*(this._cubeSize-_);eh(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(u,Qu)}};function nM(n){let e=[],t=[],i=[],s=n,r=n-no+1+nm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-no?l=nm[o-n+no-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*f),w=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,C=A>2?0:-1,S=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];b.set(S,x*p*A),w.set(d,g*p*A);let M=[A,A,A,A,A,A];_.set(M,m*p*A)}let E=new st;E.setAttribute("position",new wt(b,x)),E.setAttribute("uv",new wt(w,g)),E.setAttribute("faceIndex",new wt(_,m)),e.push(E),s>no&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rm(n,e,t){let i=new Si(n,e,t);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iM(n,e,t){let i=new Float32Array(Ks),s=new v(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function om(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function am(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function sM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jr||l===mc,h=l===Xs||l===qs;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new so(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new so(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oM(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let w=0,_=b.length;w<_;w+=3){let E=b[w+0],A=b[w+1],P=b[w+2];d.push(E,A,A,P,P,E)}}else if(p!==void 0){let b=p.array;x=p.version;for(let w=0,_=b.length/3-1;w<_;w+=3){let E=w+0,A=w+1,P=w+2;d.push(E,A,A,P,P,E)}}else return;let g=new(Yu(d)?Xo:Wo)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function aM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*x[b];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cM(n,e,t){let i=new WeakMap,s=new kt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=a.attributes.position.count*w,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*E*4*u),P=new Ho(A,_,E,u);P.type=di,P.needsUpdate=!0;let C=w*4;for(let M=0;M<u;M++){let L=g[M],U=m[M],O=b[M],W=_*E*4*M;for(let k=0;k<L.count;k++){let H=k*C;f===!0&&(s.fromBufferAttribute(L,k),A[W+H+0]=s.x,A[W+H+1]=s.y,A[W+H+2]=s.z,A[W+H+3]=0),p===!0&&(s.fromBufferAttribute(U,k),A[W+H+4]=s.x,A[W+H+5]=s.y,A[W+H+6]=s.z,A[W+H+7]=0),x===!0&&(s.fromBufferAttribute(O,k),A[W+H+8]=s.x,A[W+H+9]=s.y,A[W+H+10]=s.z,A[W+H+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ae(_,E)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function hM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Em=new fn,lm=new Qo(1,1),Am=new Ho,Cm=new Bl,Rm=new Yo,cm=[],hm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function ro(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cm[s];if(r===void 0&&(r=new Float32Array(s),cm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ih(n,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function fM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function mM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;fm.set(i),n.uniformMatrix2fv(this.addr,!1,fm),$t(t,i)}}function gM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;dm.set(i),n.uniformMatrix3fv(this.addr,!1,dm),$t(t,i)}}function xM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;um.set(i),n.uniformMatrix4fv(this.addr,!1,um),$t(t,i)}}function yM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function bM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function EM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lm.compareFunction=Wu,r=lm):r=Em,t.setTexture2D(e||r,s)}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cm,s)}function CM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rm,s)}function RM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Am,s)}function PM(n){switch(n){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return SM;case 36295:return wM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function IM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){let t=ro(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){let t=ro(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){let t=ro(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){let t=ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){let t=ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){let t=ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function zM(n,e){n.uniform2iv(this.addr,e)}function kM(n,e){n.uniform3iv(this.addr,e)}function VM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function HM(n,e){n.uniform2uiv(this.addr,e)}function WM(n,e){n.uniform3uiv(this.addr,e)}function XM(n,e){n.uniform4uiv(this.addr,e)}function qM(n,e,t){let i=this.cache,s=e.length,r=ih(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Em,r[o])}function YM(n,e,t){let i=this.cache,s=e.length,r=ih(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function ZM(n,e,t){let i=this.cache,s=e.length,r=ih(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rm,r[o])}function jM(n,e,t){let i=this.cache,s=e.length,r=ih(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Am,r[o])}function JM(n){switch(n){case 5126:return IM;case 35664:return LM;case 35665:return DM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return kM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return HM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return jM}}var rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}},od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}},ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},sd=/(\w+)(\])?(\[|\.)?/g;function pm(n,e){n.seq.push(e),n.map[e.id]=e}function KM(n,e,t){let i=n.name,s=i.length;for(sd.lastIndex=0;;){let r=sd.exec(i),o=sd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pm(t,c===void 0?new rd(a,n,e):new od(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ad(a),pm(t,u)),t=u}}}var io=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);KM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function mm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $M=37297,QM=0;function eb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var gm=new Qe;function tb(n){ft._getMatrix(gm,ft.workingColorSpace,n);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+eb(n.getShaderSource(e),a)}else return r}function nb(n,e){let t=tb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ib(n,e){let t;switch(e){case Cp:t="Linear";break;case Rp:t="Reinhard";break;case Pp:t="Cineon";break;case Ip:t="ACESFilmic";break;case Dp:t="AgX";break;case Up:t="Neutral";break;case Lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var th=new v;function sb(){ft.getLuminanceCoefficients(th);let n=th.x.toFixed(4),e=th.y.toFixed(4),t=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function ob(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ab(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function ym(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(lb,hb)}var cb=new Map;function hb(n,e){let t=rt[e];if(t===void 0){let i=cb.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(t)}var ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(n){return n.replace(ub,db)}function db(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function fb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function pb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function gb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function xb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fb(t),c=pb(t),h=mb(t),u=gb(t),d=xb(t),f=rb(t),p=ob(r),x=s.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ta).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,nb("linearToOutputTexel",t.outputColorSpace),sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=ld(o),o=ym(o,t),o=_m(o,t),a=ld(a),a=ym(a,t),a=_m(a,t),o=vm(o),a=vm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+o,_=b+m+a,E=mm(s,s.VERTEX_SHADER,w),A=mm(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(A)||"",k=U.trim(),H=O.trim(),J=W.trim(),X=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,A);else{let ge=xm(s,E,"vertex"),Ee=xm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ge+`
`+Ee)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||J==="")&&(ee=!1);ee&&(L.diagnostics={runnable:X,programLog:k,vertexShader:{log:H,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(E),s.deleteShader(A),C=new io(s,x),S=ab(s,x)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,$M)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var _b=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hd(e),t.set(e,i)),i}},hd=class{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}};function vb(n,e,t,i,s,r,o){let a=new Or,l=new cd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,U,O){let W=U.fog,k=O.geometry,H=S.isMeshStandardMaterial?U.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),X=J&&J.mapping===ya?J.image.height:null,ee=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=ge!==void 0?ge.length:0,q=0;k.morphAttributes.position!==void 0&&(q=1),k.morphAttributes.normal!==void 0&&(q=2),k.morphAttributes.color!==void 0&&(q=3);let ue,Ve,De,$;if(ee){let Mt=Ei[ee];ue=Mt.vertexShader,Ve=Mt.fragmentShader}else ue=S.vertexShader,Ve=S.fragmentShader,l.update(S),De=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);let se=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),fe=O.isInstancedMesh===!0,ce=O.isBatchedMesh===!0,ke=!!S.map,dt=!!S.matcap,D=!!J,he=!!S.aoMap,oe=!!S.lightMap,te=!!S.bumpMap,ne=!!S.normalMap,Te=!!S.displacementMap,ye=!!S.emissiveMap,Ae=!!S.metalnessMap,$e=!!S.roughnessMap,je=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,I=S.iridescence>0,B=S.sheen>0,j=S.transmission>0,G=je&&!!S.anisotropyMap,xe=R&&!!S.clearcoatMap,ie=R&&!!S.clearcoatNormalMap,pe=R&&!!S.clearcoatRoughnessMap,de=I&&!!S.iridescenceMap,K=I&&!!S.iridescenceThicknessMap,be=B&&!!S.sheenColorMap,Fe=B&&!!S.sheenRoughnessMap,_e=!!S.specularMap,Se=!!S.specularColorMap,ze=!!S.specularIntensityMap,N=j&&!!S.transmissionMap,Me=j&&!!S.thicknessMap,Ce=!!S.gradientMap,Ie=!!S.alphaMap,ve=S.alphaTest>0,le=!!S.alphaHash,Be=!!S.extensions,tt=Gi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(tt=n.toneMapping);let It={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:Ve,defines:S.defines,customVertexShaderID:De,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ce,batchingColor:ce&&O._colorsTexture!==null,instancing:fe,instancingColor:fe&&O.instanceColor!==null,instancingMorph:fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:dt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:X,aoMap:he,lightMap:oe,bumpMap:te,normalMap:ne,displacementMap:d&&Te,emissiveMap:ye,normalMapObjectSpace:ne&&S.normalMapType===Bp,normalMapTangentSpace:ne&&S.normalMapType===$c,metalnessMap:Ae,roughnessMap:$e,anisotropy:je,anisotropyMap:G,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:y,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:K,sheen:B,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:_e,specularColorMap:Se,specularIntensityMap:ze,transmission:j,transmissionMap:N,thicknessMap:Me,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:le,combine:S.combine,mapUv:ke&&x(S.map.channel),aoMapUv:he&&x(S.aoMap.channel),lightMapUv:oe&&x(S.lightMap.channel),bumpMapUv:te&&x(S.bumpMap.channel),normalMapUv:ne&&x(S.normalMap.channel),displacementMapUv:Te&&x(S.displacementMap.channel),emissiveMapUv:ye&&x(S.emissiveMap.channel),metalnessMapUv:Ae&&x(S.metalnessMap.channel),roughnessMapUv:$e&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:xe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(S.sheenRoughnessMap.channel),specularMapUv:_e&&x(S.specularMap.channel),specularColorMapUv:Se&&x(S.specularColorMap.channel),specularIntensityMapUv:ze&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:Me&&x(S.thicknessMap.channel),alphaMapUv:Ie&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ne||je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(ke||Ie),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jt,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(M,S),w(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let M=p[S.type],L;if(M){let U=Ei[M];L=jp.clone(U.uniforms)}else L=S.uniforms;return L}function E(S,M){let L;for(let U=0,O=h.length;U<O;U++){let W=h[U];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new yb(n,M,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:C}}function Mb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||bb),i.length>1&&i.sort(d||bm),s.length>1&&s.sort(d||bm)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Sb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Sm,n.set(i,[o])):s>=r.length?(o=new Sm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new Ge};break;case"SpotLight":t={position:new v,direction:new v,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new v,halfWidth:new v,halfHeight:new v};break}return n[e.id]=t,t}}}function Tb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Eb=0;function Ab(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cb(n){let e=new wb,t=Tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new v);let s=new v,r=new ct,o=new ct;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,b=0,w=0,_=0,E=0,A=0,P=0;c.sort(Ab);for(let S=0,M=c.length;S<M;S++){let L=c[S],U=L.color,O=L.intensity,W=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],O);P++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=L.shadow.matrix,b++}i.directional[f]=H,f++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[x]=H;let J=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,J.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=J.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=k,_++}x++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(U).multiplyScalar(O),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=H,g++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let J=L.shadow,X=t.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=H,p++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(O),H.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[m]=H,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==w||C.numSpotShadows!==_||C.numSpotMaps!==E||C.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=w,C.numSpotShadows=_,C.numSpotMaps=E,C.numLightProbes=P,i.version=Eb++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let w=c[m];if(w.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(w.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function wm(n){let e=new Cb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wm(n),e.set(s,[a])):r>=o.length?(a=new wm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`;function Lb(n,e,t){let i=new Hr,s=new ae,r=new ae,o=new kt,a=new jl({depthPacking:Op}),l=new Jl,c={},h=t.maxTextureSize,u={[ai]:an,[an]:ai,[jt]:jt},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Pb,fragmentShader:Ib}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new st;p.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let m=this.type;this.render=function(A,P,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Vi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==Ti&&this.type===Ti,W=m===Ti&&this.type!==Ti;for(let k=0,H=A.length;k<H;k++){let J=A[k],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ee=X.getFrameExtents();if(s.multiply(ee),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,X.mapSize.y=r.y)),X.map===null||O===!0||W===!0){let Ee=this.type!==Ti?{minFilter:En,magFilter:En}:{};X.map!==null&&X.map.dispose(),X.map=new Si(s.x,s.y,Ee),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ge=X.getViewportCount();for(let Ee=0;Ee<ge;Ee++){let q=X.getViewport(Ee);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(o),X.updateMatrices(J,Ee),i=X.getFrustum(),_(P,C,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Ti&&b(X,C),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,L)};function b(A,P){let C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,C,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,C,f,x,null)}function w(A,P,C,S){let M=null,L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=M.uuid,O=P.uuid,W=c[U];W===void 0&&(W={},c[U]=W);let k=W[O];k===void 0&&(k=M.clone(),W[O]=k,P.addEventListener("dispose",E)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Ti?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=n.properties.get(M);U.light=C}return M}function _(A,P,C,S,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let O=e.update(A),W=A.material;if(Array.isArray(W)){let k=O.groups;for(let H=0,J=k.length;H<J;H++){let X=k[H],ee=W[X.materialIndex];if(ee&&ee.visible){let ge=w(A,ee,S,M);A.onBeforeShadow(n,A,P,C,O,ge,X),n.renderBufferDirect(C,null,O,ge,A,X),A.onAfterShadow(n,A,P,C,O,ge,X)}}}else if(W.visible){let k=w(A,W,S,M);A.onBeforeShadow(n,A,P,C,O,k,null),n.renderBufferDirect(C,null,O,k,A,null),A.onAfterShadow(n,A,P,C,O,k,null)}}let U=A.children;for(let O=0,W=U.length;O<W;O++)_(U[O],P,C,S,M)}function E(A){A.target.removeEventListener("dispose",E);for(let C in c){let S=c[C],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Db={[ac]:lc,[cc]:dc,[hc]:fc,[Ds]:uc,[lc]:ac,[dc]:cc,[fc]:hc,[uc]:Ds};function Ub(n,e){function t(){let N=!1,Me=new kt,Ce=null,Ie=new kt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){N=ve},setClear:function(ve,le,Be,tt,It){It===!0&&(ve*=tt,le*=tt,Be*=tt),Me.set(ve,le,Be,tt),Ie.equals(Me)===!1&&(n.clearColor(ve,le,Be,tt),Ie.copy(Me))},reset:function(){N=!1,Ce=null,Ie.set(-1,0,0,0)}}}function i(){let N=!1,Me=!1,Ce=null,Ie=null,ve=null;return{setReversed:function(le){if(Me!==le){let Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Me=le;let tt=ve;ve=null,this.setClear(tt)}},getReversed:function(){return Me},setTest:function(le){le?se(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(le){Ce!==le&&!N&&(n.depthMask(le),Ce=le)},setFunc:function(le){if(Me&&(le=Db[le]),Ie!==le){switch(le){case ac:n.depthFunc(n.NEVER);break;case lc:n.depthFunc(n.ALWAYS);break;case cc:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case hc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case dc:n.depthFunc(n.GREATER);break;case fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=le}},setLocked:function(le){N=le},setClear:function(le){ve!==le&&(Me&&(le=1-le),n.clearDepth(le),ve=le)},reset:function(){N=!1,Ce=null,Ie=null,ve=null,Me=!1}}}function s(){let N=!1,Me=null,Ce=null,Ie=null,ve=null,le=null,Be=null,tt=null,It=null;return{setTest:function(Mt){N||(Mt?se(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(Mt){Me!==Mt&&!N&&(n.stencilMask(Mt),Me=Mt)},setFunc:function(Mt,Li,_i){(Ce!==Mt||Ie!==Li||ve!==_i)&&(n.stencilFunc(Mt,Li,_i),Ce=Mt,Ie=Li,ve=_i)},setOp:function(Mt,Li,_i){(le!==Mt||Be!==Li||tt!==_i)&&(n.stencilOp(Mt,Li,_i),le=Mt,Be=Li,tt=_i)},setLocked:function(Mt){N=Mt},setClear:function(Mt){It!==Mt&&(n.clearStencil(Mt),It=Mt)},reset:function(){N=!1,Me=null,Ce=null,Ie=null,ve=null,le=null,Be=null,tt=null,It=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,b=null,w=null,_=null,E=null,A=null,P=new Ge(0,0,0),C=0,S=!1,M=null,L=null,U=null,O=null,W=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let ee=null,ge={},Ee=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ue=new kt().fromArray(Ee),Ve=new kt().fromArray(q);function De(N,Me,Ce,Ie){let ve=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Ce;Be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Me+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return le}let $={};$[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ds),te(!1),ne(Lu),se(n.CULL_FACE),he(Vi);function se(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Q(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function fe(N,Me){return u[N]!==Me?(n.bindFramebuffer(N,Me),u[N]=Me,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(N,Me){let Ce=f,Ie=!1;if(N){Ce=d.get(Me),Ce===void 0&&(Ce=[],d.set(Me,Ce));let ve=N.textures;if(Ce.length!==ve.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Be=ve.length;le<Be;le++)Ce[le]=n.COLOR_ATTACHMENT0+le;Ce.length=ve.length,Ie=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Ce)}function ke(N){return p!==N?(n.useProgram(N),p=N,!0):!1}let dt={[ns]:n.FUNC_ADD,[cp]:n.FUNC_SUBTRACT,[hp]:n.FUNC_REVERSE_SUBTRACT};dt[up]=n.MIN,dt[dp]=n.MAX;let D={[fp]:n.ZERO,[pp]:n.ONE,[mp]:n.SRC_COLOR,[Il]:n.SRC_ALPHA,[Mp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[xp]:n.DST_ALPHA,[gp]:n.ONE_MINUS_SRC_COLOR,[Ll]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[yp]:n.ONE_MINUS_DST_ALPHA,[bp]:n.CONSTANT_COLOR,[Sp]:n.ONE_MINUS_CONSTANT_COLOR,[wp]:n.CONSTANT_ALPHA,[Tp]:n.ONE_MINUS_CONSTANT_ALPHA};function he(N,Me,Ce,Ie,ve,le,Be,tt,It,Mt){if(N===Vi){x===!0&&(Q(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),N!==lp){if(N!==g||Mt!==S){if((m!==ns||_!==ns)&&(n.blendEquation(n.FUNC_ADD),m=ns,_=ns),Mt)switch(N){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFunc(n.ONE,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,w=null,E=null,A=null,P.set(0,0,0),C=0,g=N,S=Mt}return}ve=ve||Me,le=le||Ce,Be=Be||Ie,(Me!==m||ve!==_)&&(n.blendEquationSeparate(dt[Me],dt[ve]),m=Me,_=ve),(Ce!==b||Ie!==w||le!==E||Be!==A)&&(n.blendFuncSeparate(D[Ce],D[Ie],D[le],D[Be]),b=Ce,w=Ie,E=le,A=Be),(tt.equals(P)===!1||It!==C)&&(n.blendColor(tt.r,tt.g,tt.b,It),P.copy(tt),C=It),g=N,S=!1}function oe(N,Me){N.side===jt?Q(n.CULL_FACE):se(n.CULL_FACE);let Ce=N.side===an;Me&&(Ce=!Ce),te(Ce),N.blending===Ls&&N.transparent===!1?he(Vi):he(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Ie=N.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function ne(N){N!==rp?(se(n.CULL_FACE),N!==L&&(N===Lu?n.cullFace(n.BACK):N===op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),L=N}function Te(N){N!==U&&(H&&n.lineWidth(N),U=N)}function ye(N,Me,Ce){N?(se(n.POLYGON_OFFSET_FILL),(O!==Me||W!==Ce)&&(n.polygonOffset(Me,Ce),O=Me,W=Ce)):Q(n.POLYGON_OFFSET_FILL)}function Ae(N){N?se(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function $e(N){N===void 0&&(N=n.TEXTURE0+k-1),ee!==N&&(n.activeTexture(N),ee=N)}function je(N,Me,Ce){Ce===void 0&&(ee===null?Ce=n.TEXTURE0+k-1:Ce=ee);let Ie=ge[Ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},ge[Ce]=Ie),(Ie.type!==N||Ie.texture!==Me)&&(ee!==Ce&&(n.activeTexture(Ce),ee=Ce),n.bindTexture(N,Me||$[N]),Ie.type=N,Ie.texture=Me)}function R(){let N=ge[ee];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){ue.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function Fe(N){Ve.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ve.copy(N))}function _e(N,Me){let Ce=c.get(Me);Ce===void 0&&(Ce=new WeakMap,c.set(Me,Ce));let Ie=Ce.get(N);Ie===void 0&&(Ie=n.getUniformBlockIndex(Me,N.name),Ce.set(N,Ie))}function Se(N,Me){let Ie=c.get(Me).get(N);l.get(Me)!==Ie&&(n.uniformBlockBinding(Me,Ie,N.__bindingPointIndex),l.set(Me,Ie))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,ge={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,b=null,w=null,_=null,E=null,A=null,P=new Ge(0,0,0),C=0,S=!1,M=null,L=null,U=null,O=null,W=null,ue.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Q,bindFramebuffer:fe,drawBuffers:ce,useProgram:ke,setBlending:he,setMaterial:oe,setFlipSided:te,setCullFace:ne,setLineWidth:Te,setPolygonOffset:ye,setScissorTest:Ae,activeTexture:$e,bindTexture:je,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:de,texImage3D:K,updateUBOMapping:_e,uniformBlockBinding:Se,texStorage2D:ie,texStorage3D:pe,texSubImage2D:B,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:be,viewport:Fe,reset:ze}}function Nb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return f?new OffscreenCanvas(R,y):Ur("canvas")}function x(R,y,I){let B=1,j=je(R);if((j.width>I||j.height>I)&&(B=I/Math.max(j.width,j.height)),B<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let G=Math.floor(B*j.width),xe=Math.floor(B*j.height);u===void 0&&(u=p(G,xe));let ie=y?p(G,xe):u;return ie.width=G,ie.height=xe,ie.getContext("2d").drawImage(R,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+xe+")."),ie}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,I,B,j=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G=y;if(y===n.RED&&(I===n.FLOAT&&(G=n.R32F),I===n.HALF_FLOAT&&(G=n.R16F),I===n.UNSIGNED_BYTE&&(G=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.R8UI),I===n.UNSIGNED_SHORT&&(G=n.R16UI),I===n.UNSIGNED_INT&&(G=n.R32UI),I===n.BYTE&&(G=n.R8I),I===n.SHORT&&(G=n.R16I),I===n.INT&&(G=n.R32I)),y===n.RG&&(I===n.FLOAT&&(G=n.RG32F),I===n.HALF_FLOAT&&(G=n.RG16F),I===n.UNSIGNED_BYTE&&(G=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RG8UI),I===n.UNSIGNED_SHORT&&(G=n.RG16UI),I===n.UNSIGNED_INT&&(G=n.RG32UI),I===n.BYTE&&(G=n.RG8I),I===n.SHORT&&(G=n.RG16I),I===n.INT&&(G=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGB8UI),I===n.UNSIGNED_SHORT&&(G=n.RGB16UI),I===n.UNSIGNED_INT&&(G=n.RGB32UI),I===n.BYTE&&(G=n.RGB8I),I===n.SHORT&&(G=n.RGB16I),I===n.INT&&(G=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),I===n.UNSIGNED_INT&&(G=n.RGBA32UI),I===n.BYTE&&(G=n.RGBA8I),I===n.SHORT&&(G=n.RGBA16I),I===n.INT&&(G=n.RGBA32I)),y===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),y===n.RGBA){let xe=j?Vo:ft.getTransfer(B);I===n.FLOAT&&(G=n.RGBA32F),I===n.HALF_FLOAT&&(G=n.RGBA16F),I===n.UNSIGNED_BYTE&&(G=xe===St?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(R,y){let I;return R?y===null||y===cs||y===Qr?I=n.DEPTH24_STENCIL8:y===di?I=n.DEPTH32F_STENCIL8:y===Kr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cs||y===Qr?I=n.DEPTH_COMPONENT24:y===di?I=n.DEPTH_COMPONENT32F:y===Kr&&(I=n.DEPTH_COMPONENT16),I}function E(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y)}function P(R){let y=R.target;y.removeEventListener("dispose",P),M(y)}function C(R){let y=i.get(R);if(y.__webglInit===void 0)return;let I=R.source,B=d.get(I);if(B){let j=B[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(B).length===0&&d.delete(I)}i.remove(R)}function S(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let I=R.source,B=d.get(I);delete B[y.__cacheKey],o.memory.textures--}function M(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let j=0;j<y.__webglFramebuffer[B].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[B][j]);else n.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)n.deleteFramebuffer(y.__webglFramebuffer[B]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=R.textures;for(let B=0,j=I.length;B<j;B++){let G=i.get(I[B]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(I[B])}i.remove(R)}let L=0;function U(){L=0}function O(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function W(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function k(R,y){let I=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let B=R.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}function H(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}function J(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}function X(R,y){let I=i.get(R);if(R.version>0&&I.__version!==R.version){se(I,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}let ee={[vn]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},ge={[En]:n.NEAREST,[Np]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[gc]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},Ee={[zp]:n.NEVER,[Xp]:n.ALWAYS,[kp]:n.LESS,[Wu]:n.LEQUAL,[Vp]:n.EQUAL,[Wp]:n.GEQUAL,[Gp]:n.GREATER,[Hp]:n.NOTEQUAL};function q(R,y){if(y.type===di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===gc||y.magFilter===_a||y.magFilter===bn||y.minFilter===nn||y.minFilter===gc||y.minFilter===_a||y.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ee[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==_a&&y.minFilter!==bn||y.type===di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ue(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let B=y.source,j=d.get(B);j===void 0&&(j={},d.set(B,j));let G=W(y);if(G!==R.__cacheKey){j[G]===void 0&&(j[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[G].usedTimes++;let xe=j[R.__cacheKey];xe!==void 0&&(j[R.__cacheKey].usedTimes--,xe.usedTimes===0&&S(y)),R.__cacheKey=G,R.__webglTexture=j[G].texture}return I}function Ve(R,y,I){return Math.floor(Math.floor(R/I)/y)}function De(R,y,I,B){let G=R.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,I,B,y.data);else{G.sort((K,be)=>K.start-be.start);let xe=0;for(let K=1;K<G.length;K++){let be=G[xe],Fe=G[K],_e=be.start+be.count,Se=Ve(Fe.start,y.width,4),ze=Ve(be.start,y.width,4);Fe.start<=_e+1&&Se===ze&&Ve(Fe.start+Fe.count-1,y.width,4)===Se?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++xe,G[xe]=Fe)}G.length=xe+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),pe=n.getParameter(n.UNPACK_SKIP_PIXELS),de=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let K=0,be=G.length;K<be;K++){let Fe=G[K],_e=Math.floor(Fe.start/4),Se=Math.ceil(Fe.count/4),ze=_e%y.width,N=Math.floor(_e/y.width),Me=Se,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ze,N,Me,Ce,I,B,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function $(R,y,I){let B=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=n.TEXTURE_3D);let j=ue(R,y),G=y.source;t.bindTexture(B,R.__webglTexture,n.TEXTURE0+I);let xe=i.get(G);if(G.version!==xe.__version||j===!0){t.activeTexture(n.TEXTURE0+I);let ie=ft.getPrimaries(ft.workingColorSpace),pe=y.colorSpace===Hi?null:ft.getPrimaries(y.colorSpace),de=y.colorSpace===Hi||ie===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let K=x(y.image,!1,s.maxTextureSize);K=$e(y,K);let be=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),_e=w(y.internalFormat,be,Fe,y.colorSpace,y.isVideoTexture);q(B,y);let Se,ze=y.mipmaps,N=y.isVideoTexture!==!0,Me=xe.__version===void 0||j===!0,Ce=G.dataReady,Ie=E(y,K);if(y.isDepthTexture)_e=_(y.format===eo,y.type),Me&&(N?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,be,Fe,null));else if(y.isDataTexture)if(ze.length>0){N&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],N?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,be,Fe,Se.data);y.generateMipmaps=!1}else N?(Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,K.width,K.height),Ce&&De(y,K,be,Fe)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,be,Fe,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,_e,ze[0].width,ze[0].height,K.depth);for(let ve=0,le=ze.length;ve<le;ve++)if(Se=ze[ve],y.format!==Rn)if(be!==null)if(N){if(Ce)if(y.layerUpdates.size>0){let Be=$u(Se.width,Se.height,y.format,y.type);for(let tt of y.layerUpdates){let It=Se.data.subarray(tt*Be/Se.data.BYTES_PER_ELEMENT,(tt+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,tt,Se.width,Se.height,1,be,It)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,K.depth,be,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Se.width,Se.height,K.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,K.depth,be,Fe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Se.width,Se.height,K.depth,0,be,Fe,Se.data)}else{N&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],y.format!==Rn?be!==null?N?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,be,Fe,Se.data)}else if(y.isDataArrayTexture)if(N){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,_e,K.width,K.height,K.depth),Ce)if(y.layerUpdates.size>0){let ve=$u(K.width,K.height,y.format,y.type);for(let le of y.layerUpdates){let Be=K.data.subarray(le*ve/K.data.BYTES_PER_ELEMENT,(le+1)*ve/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,K.width,K.height,1,be,Fe,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,be,Fe,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,be,Fe,K.data);else if(y.isData3DTexture)N?(Me&&t.texStorage3D(n.TEXTURE_3D,Ie,_e,K.width,K.height,K.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,be,Fe,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,be,Fe,K.data);else if(y.isFramebufferTexture){if(Me)if(N)t.texStorage2D(n.TEXTURE_2D,Ie,_e,K.width,K.height);else{let ve=K.width,le=K.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(n.TEXTURE_2D,Be,_e,ve,le,0,be,Fe,null),ve>>=1,le>>=1}}else if(ze.length>0){if(N&&Me){let ve=je(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ie,_e,ve.width,ve.height)}for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],N?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,be,Fe,Se):t.texImage2D(n.TEXTURE_2D,ve,_e,be,Fe,Se);y.generateMipmaps=!1}else if(N){if(Me){let ve=je(K);t.texStorage2D(n.TEXTURE_2D,Ie,_e,ve.width,ve.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Fe,K)}else t.texImage2D(n.TEXTURE_2D,0,_e,be,Fe,K);g(y)&&m(B),xe.__version=G.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function se(R,y,I){if(y.image.length!==6)return;let B=ue(R,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let G=i.get(j);if(j.version!==G.__version||B===!0){t.activeTexture(n.TEXTURE0+I);let xe=ft.getPrimaries(ft.workingColorSpace),ie=y.colorSpace===Hi?null:ft.getPrimaries(y.colorSpace),pe=y.colorSpace===Hi||xe===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!de&&!K?be[le]=x(y.image[le],!0,s.maxCubemapSize):be[le]=K?y.image[le].image:y.image[le],be[le]=$e(y,be[le]);let Fe=be[0],_e=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),ze=w(y.internalFormat,_e,Se,y.colorSpace),N=y.isVideoTexture!==!0,Me=G.__version===void 0||B===!0,Ce=j.dataReady,Ie=E(y,Fe);q(n.TEXTURE_CUBE_MAP,y);let ve;if(de){N&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ze,Fe.width,Fe.height);for(let le=0;le<6;le++){ve=be[le].mipmaps;for(let Be=0;Be<ve.length;Be++){let tt=ve[Be];y.format!==Rn?_e!==null?N?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,tt.width,tt.height,_e,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,tt.width,tt.height,_e,Se,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,tt.width,tt.height,0,_e,Se,tt.data)}}}else{if(ve=y.mipmaps,N&&Me){ve.length>0&&Ie++;let le=je(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ze,le.width,le.height)}for(let le=0;le<6;le++)if(K){N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,_e,Se,be[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,be[le].width,be[le].height,0,_e,Se,be[le].data);for(let Be=0;Be<ve.length;Be++){let It=ve[Be].image[le].image;N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,It.width,It.height,_e,Se,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,It.width,It.height,0,_e,Se,It.data)}}else{N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,_e,Se,be[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,_e,Se,be[le]);for(let Be=0;Be<ve.length;Be++){let tt=ve[Be];N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,_e,Se,tt.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,_e,Se,tt.image[le])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),G.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Q(R,y,I,B,j,G){let xe=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),pe=w(I.internalFormat,xe,ie,I.colorSpace),de=i.get(y),K=i.get(I);if(K.__renderTarget=y,!de.__hasExternalTextures){let be=Math.max(1,y.width>>G),Fe=Math.max(1,y.height>>G);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,G,pe,be,Fe,y.depth,0,xe,ie,null):t.texImage2D(j,G,pe,be,Fe,0,xe,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,j,K.__webglTexture,0,Te(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,j,K.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(R,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let B=y.depthTexture,j=B&&B.isDepthTexture?B.type:null,G=_(y.stencilBuffer,j),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Te(y);ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,G,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,G,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,G,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let B=y.textures;for(let j=0;j<B.length;j++){let G=B[j],xe=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),pe=w(G.internalFormat,xe,ie,G.colorSpace),de=Te(y);I&&ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,pe,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,pe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,pe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=i.get(y.depthTexture);B.__renderTarget=y,(!B.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let j=B.__webglTexture,G=Te(y);if(y.depthTexture.format===Lr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===eo)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(R){let y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let B=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",j)};B.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=B}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let B=R.texture.mipmaps;B&&B.length>0?ce(y.__webglFramebuffer[0],R):ce(y.__webglFramebuffer,R)}else if(I){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=n.createRenderbuffer(),fe(y.__webglDepthbuffer[B],R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}}else{let B=R.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),fe(y.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,y,I){let B=i.get(R);y!==void 0&&Q(B.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ke(R)}function D(R){let y=R.texture,I=i.get(R),B=i.get(y);R.addEventListener("dispose",P);let j=R.textures,G=R.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=y.version,o.memory.textures++),G){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let pe=0;pe<y.mipmaps.length;pe++)I.__webglFramebuffer[ie][pe]=n.createFramebuffer()}else I.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)I.__webglFramebuffer[ie]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ie=0,pe=j.length;ie<pe;ie++){let de=i.get(j[ie]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){let pe=j[ie];I.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);let de=r.convert(pe.format,pe.colorSpace),K=r.convert(pe.type),be=w(pe.internalFormat,de,K,pe.colorSpace,R.isXRRenderTarget===!0),Fe=Te(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,be,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),q(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Q(I.__webglFramebuffer[ie][pe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else Q(I.__webglFramebuffer[ie],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ie=0,pe=j.length;ie<pe;ie++){let de=j[ie],K=i.get(de),be=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,K.__webglTexture),q(be,de),Q(I.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+ie,be,0),g(de)&&m(be)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,B.__webglTexture),q(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Q(I.__webglFramebuffer[pe],R,y,n.COLOR_ATTACHMENT0,ie,pe);else Q(I.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ie,0);g(y)&&m(ie),t.unbindTexture()}R.depthBuffer&&ke(R)}function he(R){let y=R.textures;for(let I=0,B=y.length;I<B;I++){let j=y[I];if(g(j)){let G=b(R),xe=i.get(j).__webglTexture;t.bindTexture(G,xe),m(G),t.unbindTexture()}}}let oe=[],te=[];function ne(R){if(R.samples>0){if(ye(R)===!1){let y=R.textures,I=R.width,B=R.height,j=n.COLOR_BUFFER_BIT,G=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),ie=y.length>1;if(ie)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let pe=R.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<y.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let K=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,I,B,0,0,I,B,j,n.NEAREST),l===!0&&(oe.length=0,te.length=0,oe.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(G),te.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let K=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,K,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Te(R){return Math.min(s.maxSamples,R.samples)}function ye(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function $e(R,y){let I=R.colorSpace,B=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Us&&I!==Hi&&(ft.getTransfer(I)===St?(B!==Rn||j!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=dt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function Fb(n,e){function t(i,s=Hi){let r,o=ft.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ou)return n.BYTE;if(i===Bu)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===xc)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Vu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===Rn)return n.RGBA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===eo)return n.DEPTH_STENCIL;if(i===vc)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Hu)return n.RG;if(i===bc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===va||i===Ma||i===ba||i===Sa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Tc||i===Ec||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Rc||i===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Rc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ic||i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Vc||i===Gc||i===Hc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===qc||i===Yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===jc||i===Jc||i===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
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

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ci({vertexShader:Ob,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ud,m={},b=t.getContextAttributes(),w=null,_=null,E=[],A=[],P=new ae,C=null,S=new hn;S.viewport=new kt;let M=new hn;M.viewport=new kt;let L=[S,M],U=new oc,O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=E[$];return se===void 0&&(se=new Br,E[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=E[$];return se===void 0&&(se=new Br,E[$]=se),se.getGripSpace()},this.getHand=function($){let se=E[$];return se===void 0&&(se=new Br,E[$]=se),se.getHandSpace()};function k($){let se=A.indexOf($.inputSource);if(se===-1)return;let Q=E[se];Q!==void 0&&(Q.update($.inputSource,$.frame,c||o),Q.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let $=0;$<E.length;$++){let se=A[$];se!==null&&(A[$]=null,E[$].disconnect(se))}O=null,W=null,g.reset();for(let $ in m)delete m[$];e.setRenderTarget(w),f=null,d=null,u=null,s=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,fe=null,ce=null;b.depth&&(ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=b.stencil?eo:Lr,fe=b.stencil?Qr:cs);let ke={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Si(d.textureWidth,d.textureHeight,{format:Rn,type:ui,depthTexture:new Qo(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Si(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J($){for(let se=0;se<$.removed.length;se++){let Q=$.removed[se],fe=A.indexOf(Q);fe>=0&&(A[fe]=null,E[fe].disconnect(Q))}for(let se=0;se<$.added.length;se++){let Q=$.added[se],fe=A.indexOf(Q);if(fe===-1){for(let ke=0;ke<E.length;ke++)if(ke>=A.length){A.push(Q),fe=ke;break}else if(A[ke]===null){A[ke]=Q,fe=ke;break}if(fe===-1)break}let ce=E[fe];ce&&ce.connect(Q)}}let X=new v,ee=new v;function ge($,se,Q){X.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Q.matrixWorld);let fe=X.distanceTo(ee),ce=se.projectionMatrix.elements,ke=Q.projectionMatrix.elements,dt=ce[14]/(ce[10]-1),D=ce[14]/(ce[10]+1),he=(ce[9]+1)/ce[5],oe=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],ne=(ke[8]+1)/ke[0],Te=dt*te,ye=dt*ne,Ae=fe/(-te+ne),$e=Ae*-te;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($e),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ce[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let je=dt+Ae,R=D+Ae,y=Te-$e,I=ye+(fe-$e),B=he*D/R*je,j=oe*D/R*je;$.projectionMatrix.makePerspective(y,I,B,j,je,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let se=$.near,Q=$.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),U.near=M.near=S.near=se,U.far=M.far=S.far=Q,(O!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,W=U.far),U.layers.mask=$.layers.mask|6,S.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;let fe=$.parent,ce=U.cameras;Ee(U,fe);for(let ke=0;ke<ce.length;ke++)Ee(ce[ke],fe);ce.length===2?ge(U,S,M):U.projectionMatrix.copy(S.projectionMatrix),q($,U,fe)};function q($,se,Q){Q===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Q.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Dr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let ue=null;function Ve($,se){if(h=se.getViewerPose(c||o),p=se,h!==null){let Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let fe=!1;Q.length!==U.cameras.length&&(U.cameras.length=0,fe=!0);for(let D=0;D<Q.length;D++){let he=Q[D],oe=null;if(f!==null)oe=f.getViewport(he);else{let ne=u.getViewSubImage(d,he);oe=ne.viewport,D===0&&(e.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(_))}let te=L[D];te===void 0&&(te=new hn,te.layers.enable(D),te.viewport=new kt,L[D]=te),te.matrix.fromArray(he.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(he.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(oe.x,oe.y,oe.width,oe.height),D===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),fe===!0&&U.cameras.push(te)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(Q[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Q.length;D++){let he=Q[D].camera;if(he){let oe=m[he];oe||(oe=new ea,m[he]=oe);let te=u.getCameraImage(he);oe.sourceTexture=te}}}}for(let Q=0;Q<E.length;Q++){let fe=A[Q],ce=E[Q];fe!==null&&ce!==void 0&&ce.update(fe,se,c||o)}ue&&ue($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let De=new Tm;De.setAnimationLoop(Ve),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}},js=new Vt,zb=new ct;function kb(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Zu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,_=b.envMapRotation;w&&(g.envMap.value=w,js.copy(_),js.x*=-1,js.y*=-1,js.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),g.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(js)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let _=w.program;i.uniformBlockBinding(b,_)}function c(b,w){let _=s[b.id];_===void 0&&(p(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",g));let E=w.program;i.updateUBOMapping(b,E);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let w=u();b.__bindingPointIndex=w;let _=n.createBuffer(),E=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=s[b.id],_=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,P=_.length;A<P;A++){let C=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,M=C.length;S<M;S++){let L=C[S];if(f(L,A,S,E)===!0){let U=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],W=0;for(let k=0;k<O.length;k++){let H=O[k],J=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,_,E){let A=b.value,P=w+"_"+_;if(E[P]===void 0)return typeof A=="number"||typeof A=="boolean"?E[P]=A:E[P]=A.clone(),!0;{let C=E[P];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[P]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function p(b){let w=b.uniforms,_=0,E=16;for(let P=0,C=w.length;P<C;P++){let S=Array.isArray(w[P])?w[P]:[w[P]];for(let M=0,L=S.length;M<L;M++){let U=S[M],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,k=O.length;W<k;W++){let H=O[W],J=x(H),X=_%E,ee=X%J.boundary,ge=X+ee;_+=ee,ge!==0&&E-ge<J.storage&&(_+=E-ge),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=J.storage}}}let A=_%E;return A>0&&(_+=E-A),b.__size=_,b.__cache={},this}function x(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){let w=b.target;w.removeEventListener("dispose",g);let _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var nh=class{constructor(e={}){let{canvas:t=qp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=yt;let A=0,P=0,C=null,S=-1,M=null,L=new kt,U=new kt,O=null,W=new Ge(0),k=0,H=t.width,J=t.height,X=1,ee=null,ge=null,Ee=new kt(0,0,H,J),q=new kt(0,0,H,J),ue=!1,Ve=new Hr,De=!1,$=!1,se=new ct,Q=new v,fe=new kt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function dt(){return C===null?X:1}let D=i;function he(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let z="webgl2";if(D=he(z,T),D===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,te,ne,Te,ye,Ae,$e,je,R,y,I,B,j,G,xe,ie,pe,de,K,be,Fe,_e,Se,ze;function N(){oe=new rM(D),oe.init(),_e=new Fb(D,oe),te=new $v(D,oe,e,_e),ne=new Ub(D,oe),te.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Te=new lM(D),ye=new Mb,Ae=new Nb(D,oe,ne,ye,te,_e,Te),$e=new eM(_),je=new sM(_),R=new py(D),Se=new Jv(D,R),y=new oM(D,R,Te,Se),I=new hM(D,y,R,Te),K=new cM(D,te,Ae),ie=new Qv(ye),B=new vb(_,$e,je,oe,te,Se,ie),j=new kb(_,ye),G=new Sb,xe=new Rb(oe),de=new jv(_,$e,je,ne,I,f,l),pe=new Lb(_,I,te),ze=new Vb(D,Te,te,ne),be=new Kv(D,oe,Te),Fe=new aM(D,oe,Te),Te.programs=B.programs,_.capabilities=te,_.extensions=oe,_.properties=ye,_.renderLists=G,_.shadowMap=pe,_.state=ne,_.info=Te}N();let Me=new dd(_,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(H,J,!1))},this.getSize=function(T){return T.set(H,J)},this.setSize=function(T,z,Y=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,J=z,t.width=Math.floor(T*X),t.height=Math.floor(z*X),Y===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(H*X,J*X).floor()},this.setDrawingBufferSize=function(T,z,Y){H=T,J=z,X=Y,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,z,Y,Z){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,z,Y,Z),ne.viewport(L.copy(Ee).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,z,Y,Z){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,z,Y,Z),ne.scissor(U.copy(q).multiplyScalar(X).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){ne.setScissorTest(ue=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let Z=0;if(T){let V=!1;if(C!==null){let we=C.texture.format;V=we===Sc||we===bc||we===Mc}if(V){let we=C.texture.type,Pe=we===ui||we===cs||we===Kr||we===Qr||we===yc||we===_c,Oe=de.getClearColor(),Ue=de.getClearAlpha(),qe=Oe.r,Je=Oe.g,He=Oe.b;Pe?(p[0]=qe,p[1]=Je,p[2]=He,p[3]=Ue,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=qe,x[1]=Je,x[2]=He,x[3]=Ue,D.clearBufferiv(D.COLOR,0,x))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),de.dispose(),G.dispose(),xe.dispose(),ye.dispose(),$e.dispose(),je.dispose(),I.dispose(),Se.dispose(),ze.dispose(),B.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",_i),Me.removeEventListener("sessionend",xf),Ts.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=Te.autoReset,z=pe.enabled,Y=pe.autoUpdate,Z=pe.needsUpdate,V=pe.type;N(),Te.autoReset=T,pe.enabled=z,pe.autoUpdate=Y,pe.needsUpdate=Z,pe.type=V}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){let z=T.target;z.removeEventListener("dispose",le),Be(z)}function Be(T){tt(T),ye.remove(T)}function tt(T){let z=ye.get(T).programs;z!==void 0&&(z.forEach(function(Y){B.releaseProgram(Y)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,Z,V,we){z===null&&(z=ce);let Pe=V.isMesh&&V.matrixWorld.determinant()<0,Oe=N0(T,z,Y,Z,V);ne.setMaterial(Z,Pe);let Ue=Y.index,qe=1;if(Z.wireframe===!0){if(Ue=y.getWireframeAttribute(Y),Ue===void 0)return;qe=2}let Je=Y.drawRange,He=Y.attributes.position,lt=Je.start*qe,At=(Je.start+Je.count)*qe;we!==null&&(lt=Math.max(lt,we.start*qe),At=Math.min(At,(we.start+we.count)*qe)),Ue!==null?(lt=Math.max(lt,0),At=Math.min(At,Ue.count)):He!=null&&(lt=Math.max(lt,0),At=Math.min(At,He.count));let qt=At-lt;if(qt<0||qt===1/0)return;Se.setup(V,Z,Oe,Y,Ue);let Lt,Rt=be;if(Ue!==null&&(Lt=R.get(Ue),Rt=Fe,Rt.setIndex(Lt)),V.isMesh)Z.wireframe===!0?(ne.setLineWidth(Z.wireframeLinewidth*dt()),Rt.setMode(D.LINES)):Rt.setMode(D.TRIANGLES);else if(V.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*dt()),V.isLineSegments?Rt.setMode(D.LINES):V.isLineLoop?Rt.setMode(D.LINE_LOOP):Rt.setMode(D.LINE_STRIP)}else V.isPoints?Rt.setMode(D.POINTS):V.isSprite&&Rt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xe=V._multiDrawStarts,Ot=V._multiDrawCounts,pt=V._multiDrawCount,Un=Ue?R.get(Ue).bytesPerElement:1,hr=ye.get(Z).currentProgram.getUniforms();for(let Nn=0;Nn<pt;Nn++)hr.setValue(D,"_gl_DrawID",Nn),Rt.render(Xe[Nn]/Un,Ot[Nn])}else if(V.isInstancedMesh)Rt.renderInstances(lt,qt,V.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ot=Math.min(Y.instanceCount,Xe);Rt.renderInstances(lt,qt,Ot)}else Rt.render(lt,qt)};function It(T,z,Y){T.transparent===!0&&T.side===jt&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Qa(T,z,Y),T.side=ai,T.needsUpdate=!0,Qa(T,z,Y),T.side=jt):Qa(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),m=xe.get(Y),m.init(z),w.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let Z=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let we=V.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Oe=we[Pe];It(Oe,Y,V),Z.add(Oe)}else It(we,Y,V),Z.add(we)}),m=w.pop(),Z},this.compileAsync=function(T,z,Y=null){let Z=this.compile(T,z,Y);return new Promise(V=>{function we(){if(Z.forEach(function(Pe){ye.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){V(T);return}setTimeout(we,10)}oe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Mt=null;function Li(T){Mt&&Mt(T)}function _i(){Ts.stop()}function xf(){Ts.start()}let Ts=new Tm;Ts.setAnimationLoop(Li),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(T){Mt=T,Me.setAnimationLoop(T),T===null?Ts.stop():Ts.start()},Me.addEventListener("sessionstart",_i),Me.addEventListener("sessionend",xf),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,C),m=xe.get(T,w.length),m.init(z),w.push(m),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ve.setFromProjectionMatrix(se,oi,z.reversedDepth),$=this.localClippingEnabled,De=ie.init(this.clippingPlanes,$),g=G.get(T,b.length),g.init(),b.push(g),Me.enabled===!0&&Me.isPresenting===!0){let we=_.xr.getDepthSensingMesh();we!==null&&Wh(we,z,-1/0,_.sortObjects)}Wh(T,z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ee,ge),ke=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ke&&de.addToRenderList(g,T),this.info.render.frame++,De===!0&&ie.beginShadows();let Y=m.state.shadowsArray;pe.render(Y,T,z),De===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,V=g.transmissive;if(m.setupLights(),z.isArrayCamera){let we=z.cameras;if(V.length>0)for(let Pe=0,Oe=we.length;Pe<Oe;Pe++){let Ue=we[Pe];_f(Z,V,T,Ue)}ke&&de.render(T);for(let Pe=0,Oe=we.length;Pe<Oe;Pe++){let Ue=we[Pe];yf(g,T,Ue,Ue.viewport)}}else V.length>0&&_f(Z,V,T,z),ke&&de.render(T),yf(g,T,z);C!==null&&P===0&&(Ae.updateMultisampleRenderTarget(C),Ae.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,z),Se.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],De===!0&&ie.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Wh(T,z,Y,Z){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){Z&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);let Pe=I.update(T),Oe=T.material;Oe.visible&&g.push(T,Pe,Oe,Y,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){let Pe=I.update(T),Oe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),fe.copy(Pe.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Oe)){let Ue=Pe.groups;for(let qe=0,Je=Ue.length;qe<Je;qe++){let He=Ue[qe],lt=Oe[He.materialIndex];lt&&lt.visible&&g.push(T,Pe,lt,Y,fe.z,He)}}else Oe.visible&&g.push(T,Pe,Oe,Y,fe.z,null)}}let we=T.children;for(let Pe=0,Oe=we.length;Pe<Oe;Pe++)Wh(we[Pe],z,Y,Z)}function yf(T,z,Y,Z){let V=T.opaque,we=T.transmissive,Pe=T.transparent;m.setupLightsView(Y),De===!0&&ie.setGlobalState(_.clippingPlanes,Y),Z&&ne.viewport(L.copy(Z)),V.length>0&&$a(V,z,Y),we.length>0&&$a(we,z,Y),Pe.length>0&&$a(Pe,z,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function _f(T,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Si(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?$r:ui,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let we=m.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||L;we.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);let Oe=_.getRenderTarget(),Ue=_.getActiveCubeFace(),qe=_.getActiveMipmapLevel();_.setRenderTarget(we),_.getClearColor(W),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),ke&&de.render(Y);let Je=_.toneMapping;_.toneMapping=Gi;let He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),De===!0&&ie.setGlobalState(_.clippingPlanes,Z),$a(T,Y,Z),Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we),oe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let At=0,qt=z.length;At<qt;At++){let Lt=z[At],Rt=Lt.object,Xe=Lt.geometry,Ot=Lt.material,pt=Lt.group;if(Ot.side===jt&&Rt.layers.test(Z.layers)){let Un=Ot.side;Ot.side=an,Ot.needsUpdate=!0,vf(Rt,Y,Z,Xe,Ot,pt),Ot.side=Un,Ot.needsUpdate=!0,lt=!0}}lt===!0&&(Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we))}_.setRenderTarget(Oe,Ue,qe),_.setClearColor(W,k),He!==void 0&&(Z.viewport=He),_.toneMapping=Je}function $a(T,z,Y){let Z=z.isScene===!0?z.overrideMaterial:null;for(let V=0,we=T.length;V<we;V++){let Pe=T[V],Oe=Pe.object,Ue=Pe.geometry,qe=Pe.group,Je=Pe.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Oe.layers.test(Y.layers)&&vf(Oe,z,Y,Ue,Je,qe)}}function vf(T,z,Y,Z,V,we){T.onBeforeRender(_,z,Y,Z,V,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(_,z,Y,Z,T,we),V.transparent===!0&&V.side===jt&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,_.renderBufferDirect(Y,z,Z,V,T,we),V.side=ai,V.needsUpdate=!0,_.renderBufferDirect(Y,z,Z,V,T,we),V.side=jt):_.renderBufferDirect(Y,z,Z,V,T,we),T.onAfterRender(_,z,Y,Z,V,we)}function Qa(T,z,Y){z.isScene!==!0&&(z=ce);let Z=ye.get(T),V=m.state.lights,we=m.state.shadowsArray,Pe=V.state.version,Oe=B.getParameters(T,V.state,we,z,Y),Ue=B.getProgramCacheKey(Oe),qe=Z.programs;Z.environment=T.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(T.isMeshStandardMaterial?je:$e).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",le),qe=new Map,Z.programs=qe);let Je=qe.get(Ue);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Pe)return bf(T,Oe),Je}else Oe.uniforms=B.getUniforms(T),T.onBeforeCompile(Oe,_),Je=B.acquireProgram(Oe,Ue),qe.set(Ue,Je),Z.uniforms=Oe.uniforms;let He=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=ie.uniform),bf(T,Oe),Z.needsLights=O0(T),Z.lightsStateVersion=Pe,Z.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function Mf(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=io.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function bf(T,z){let Y=ye.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function N0(T,z,Y,Z,V){z.isScene!==!0&&(z=ce),Ae.resetTextureUnits();let we=z.fog,Pe=Z.isMeshStandardMaterial?z.environment:null,Oe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Us,Ue=(Z.isMeshStandardMaterial?je:$e).get(Z.envMap||Pe),qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,At=!!Y.morphAttributes.color,qt=Gi;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qt=_.toneMapping);let Lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=Lt!==void 0?Lt.length:0,Xe=ye.get(Z),Ot=m.state.lights;if(De===!0&&($===!0||T!==M)){let yn=T===M&&Z.id===S;ie.setState(Z,T,yn)}let pt=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ot.state.version||Xe.outputColorSpace!==Oe||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isBatchedMesh&&Xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xe.instancingMorph===!1&&V.morphTexture!==null||Xe.envMap!==Ue||Z.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ie.numPlanes||Xe.numIntersection!==ie.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Je||Xe.morphTargets!==He||Xe.morphNormals!==lt||Xe.morphColors!==At||Xe.toneMapping!==qt||Xe.morphTargetsCount!==Rt)&&(pt=!0):(pt=!0,Xe.__version=Z.version);let Un=Xe.currentProgram;pt===!0&&(Un=Qa(Z,z,V));let hr=!1,Nn=!1,wo=!1,Bt=Un.getUniforms(),Xn=Xe.uniforms;if(ne.useProgram(Un.program)&&(hr=!0,Nn=!0,wo=!0),Z.id!==S&&(S=Z.id,Nn=!0),hr||M!==T){ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Bt.setValue(D,"projectionMatrix",T.projectionMatrix),Bt.setValue(D,"viewMatrix",T.matrixWorldInverse);let wn=Bt.map.cameraPosition;wn!==void 0&&wn.setValue(D,Q.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Bt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Bt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Nn=!0,wo=!0)}if(V.isSkinnedMesh){Bt.setOptional(D,V,"bindMatrix"),Bt.setOptional(D,V,"bindMatrixInverse");let yn=V.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Bt.setValue(D,"boneTexture",yn.boneTexture,Ae))}V.isBatchedMesh&&(Bt.setOptional(D,V,"batchingTexture"),Bt.setValue(D,"batchingTexture",V._matricesTexture,Ae),Bt.setOptional(D,V,"batchingIdTexture"),Bt.setValue(D,"batchingIdTexture",V._indirectTexture,Ae),Bt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Bt.setValue(D,"batchingColorTexture",V._colorsTexture,Ae));let qn=Y.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&K.update(V,Y,Un),(Nn||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Bt.setValue(D,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xn.envMap.value=Ue,Xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(Xn.envMapIntensity.value=z.environmentIntensity),Nn&&(Bt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&F0(Xn,wo),we&&Z.fog===!0&&j.refreshFogUniforms(Xn,we),j.refreshMaterialUniforms(Xn,Z,X,J,m.state.transmissionRenderTarget[T.id]),io.upload(D,Mf(Xe),Xn,Ae)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(io.upload(D,Mf(Xe),Xn,Ae),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Bt.setValue(D,"center",V.center),Bt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Bt.setValue(D,"normalMatrix",V.normalMatrix),Bt.setValue(D,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let yn=Z.uniformsGroups;for(let wn=0,Xh=yn.length;wn<Xh;wn++){let Es=yn[wn];ze.update(Es,Un),ze.bind(Es,Un)}}return Un}function F0(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function O0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,z,Y){let Z=ye.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=z,ye.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let Y=ye.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};let B0=D.createFramebuffer();this.setRenderTarget=function(T,z=0,Y=0){C=T,A=z,P=Y;let Z=!0,V=null,we=!1,Pe=!1;if(T){let Ue=ye.get(T);if(Ue.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ue.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Ue.__hasExternalTextures)Ae.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let He=T.depthTexture;if(Ue.__boundDepthTexture!==He){if(He!==null&&ye.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);let Je=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?V=Je[z][Y]:V=Je[z],we=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?V=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[Y]:V=Je,L.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else L.copy(Ee).multiplyScalar(X).floor(),U.copy(q).multiplyScalar(X).floor(),O=ue;if(Y!==0&&(V=B0),ne.bindFramebuffer(D.FRAMEBUFFER,V)&&Z&&ne.drawBuffers(T,V),ne.viewport(L),ne.scissor(U),ne.setScissorTest(O),we){let Ue=ye.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,Y)}else if(Pe){let Ue=z;for(let qe=0;qe<T.textures.length;qe++){let Je=ye.get(T.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Je.__webglTexture,Y,Ue)}}else if(T!==null&&Y!==0){let Ue=ye.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(T,z,Y,Z,V,we,Pe,Oe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){ne.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let qe=T.textures[Oe],Je=qe.format,He=qe.type;if(!te.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Z&&Y>=0&&Y<=T.height-V&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(z,Y,Z,V,_e.convert(Je),_e.convert(He),we))}finally{let qe=C!==null?ye.get(C).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,Z,V,we,Pe,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(z>=0&&z<=T.width-Z&&Y>=0&&Y<=T.height-V){ne.bindFramebuffer(D.FRAMEBUFFER,Ue);let qe=T.textures[Oe],Je=qe.format,He=qe.type;if(!te.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(z,Y,Z,V,_e.convert(Je),_e.convert(He),0);let At=C!==null?ye.get(C).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,At);let qt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yp(D,qt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(lt),D.deleteSync(qt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){let Z=Math.pow(2,-Y),V=Math.floor(T.image.width*Z),we=Math.floor(T.image.height*Z),Pe=z!==null?z.x:0,Oe=z!==null?z.y:0;Ae.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Pe,Oe,V,we),ne.unbindTexture()};let z0=D.createFramebuffer(),k0=D.createFramebuffer();this.copyTextureToTexture=function(T,z,Y=null,Z=null,V=0,we=null){we===null&&(V!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=V,V=0):we=0);let Pe,Oe,Ue,qe,Je,He,lt,At,qt,Lt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Oe=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Je=Y.min.y,He=Y.isBox3?Y.min.z:0;else{let qn=Math.pow(2,-V);Pe=Math.floor(Lt.width*qn),Oe=Math.floor(Lt.height*qn),T.isDataArrayTexture?Ue=Lt.depth:T.isData3DTexture?Ue=Math.floor(Lt.depth*qn):Ue=1,qe=0,Je=0,He=0}Z!==null?(lt=Z.x,At=Z.y,qt=Z.z):(lt=0,At=0,qt=0);let Rt=_e.convert(z.format),Xe=_e.convert(z.type),Ot;z.isData3DTexture?(Ae.setTexture3D(z,0),Ot=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ae.setTexture2DArray(z,0),Ot=D.TEXTURE_2D_ARRAY):(Ae.setTexture2D(z,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let pt=D.getParameter(D.UNPACK_ROW_LENGTH),Un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hr=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),wo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);let Bt=T.isDataArrayTexture||T.isData3DTexture,Xn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let qn=ye.get(T),yn=ye.get(z),wn=ye.get(qn.__renderTarget),Xh=ye.get(yn.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xh.__webglFramebuffer);for(let Es=0;Es<Ue;Es++)Bt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,V,He+Es),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(z).__webglTexture,we,qt+Es)),D.blitFramebuffer(qe,Je,Pe,Oe,lt,At,Pe,Oe,D.DEPTH_BUFFER_BIT,D.NEAREST);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||ye.has(T)){let qn=ye.get(T),yn=ye.get(z);ne.bindFramebuffer(D.READ_FRAMEBUFFER,z0),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,k0);for(let wn=0;wn<Ue;wn++)Bt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qn.__webglTexture,V,He+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qn.__webglTexture,V),Xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,we,qt+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,we),V!==0?D.blitFramebuffer(qe,Je,Pe,Oe,lt,At,Pe,Oe,D.COLOR_BUFFER_BIT,D.NEAREST):Xn?D.copyTexSubImage3D(Ot,we,lt,At,qt+wn,qe,Je,Pe,Oe):D.copyTexSubImage2D(Ot,we,lt,At,qe,Je,Pe,Oe);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ot,we,lt,At,qt,Pe,Oe,Ue,Rt,Xe,Lt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,we,lt,At,qt,Pe,Oe,Ue,Rt,Lt.data):D.texSubImage3D(Ot,we,lt,At,qt,Pe,Oe,Ue,Rt,Xe,Lt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,lt,At,Pe,Oe,Rt,Xe,Lt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,lt,At,Lt.width,Lt.height,Rt,Lt.data):D.texSubImage2D(D.TEXTURE_2D,we,lt,At,Pe,Oe,Rt,Xe,Lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wo),we===0&&z.generateMipmaps&&D.generateMipmap(Ot),ne.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){A=0,P=0,C=null,ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var pd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var rE=pd.length-1,Pm=Math.min(...pd.map(n=>n[1])),Im=Math.max(...pd.map(n=>n[1])),oE=new v(0,0,(Pm+Im)/2),Lm=new v(.047,.027,(Im-Pm)/2);var cE=new ht,hE=new v,uE=new v,dE=new ct;var fE=new v,pE=new v;var mE=new v;var gE=new v,xE=new v,yE=new v,_E=new Tn,vE=new v;function Ea(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new v().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=_=>new v().fromBufferAttribute(t,n.index?n.index.getX(_):_),g=x(p),m=x(p+1),b=x(p+2),w=new Tn(g,m,b).getNormal(new v);w.lengthSq()>.1&&s.push({a:g,b:m,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new Jt().setFromPoints(i).getSize(new v),h=Math.max(1e-4,e**2*.4),u=e?new v().setScalar(1/h):new v(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new v().subVectors(p.b,p.a).normalize(),new v().subVectors(p.c,p.b).normalize(),new v().subVectors(p.a,p.c).normalize()]))}}var ME=new v,bE=new v,SE=new v,wE=new v,TE=new ht,EE=new ht,AE=new v;function oo(n){return Ea(new We(n.x*2,n.y*2,n.z*2))}var CE=new v;var Dm=Ea(new Kn(1,0).scale(...Lm)),RE={mesh:{position:new v,quaternion:new ht},shape:Dm,radius:Dm.radius,precise:!0};var PE=new v,IE=new v,LE=new v,DE=new ht,UE=new ht,NE=new ht;var FE=new v,OE=new v,BE=new v,zE=new v;var kE=new v;var VE=new v,GE=new v,HE=new v,WE=new v,XE=new v,qE=new v,YE=new v;var ZE={mesh:{position:null,quaternion:new ht},shape:{sphereRadius:0,normals:[],edges:[]}};function sh(n,e,t){let i=new We(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function md(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function Um(n){switch(n){case"sphere":return new Cn(.5,24,16);case"cylinder":return new Tt(.5,.5,1,24);case"cone":return new Fs(.5,1,24);case"torus":return new Mn(.34,.14,12,32);case"capsule":return new ss(.32,.36,8,16);default:return new We(1,1,1)}}function gd(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new v(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new st;return o.setAttribute("position",new Ne(s,3)),o.setAttribute("uv",new Ne(r,2)),o.computeVertexNormals(),o}function Aa(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var hs=(n,e,t)=>n+(e-n)*t,ao=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function rh(n,e){let t=Math.floor(n),i=Math.floor(e),s=ao(0,1,n-t),r=ao(0,1,e-i);return hs(hs(Aa(t,i),Aa(t+1,i),s),hs(Aa(t,i+1),Aa(t+1,i+1),s),r)}function Nm(n,e){return rh(n,e)*.54+rh(n*2.07+3.4,e*2.07-6.1)*.26+rh(n*4.2+9,e*4.2)*.13+rh(n*8.6,e*8.6-13)*.07}function Fm(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((p,x)=>hs(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,b=0;if(c>.025)if(n){let _=Aa(p+792,l+677);_>.9988&&(b=(_-.9988)*49e3*ao(.09,.3,c))}else{let[_,E]=s[p],A=2.8*h/(c+.16),P=_*A+3.6,C=E*A-8.1,S=Nm(P,C),M=Nm(P-.12,C-.09);g=ao(.49,.66,S)*ao(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-M)*5+(S-.54)*.8))}let w=n?1:hs(.94,1,ao(.05,.34,c));i[x]=hs(f[0],(139+115*m)*w,g)+b,i[x+1]=hs(f[1],(154+100*m)*w,g)+b*.94,i[x+2]=hs(f[2],(178+77*m)*w,g)+b*.86,i[x+3]=255}}let a=new hi(i,1024,512,Rn);return a.colorSpace=yt,a.wrapS=vn,a.magFilter=nn,a.minFilter=bn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Om(){return{day:Fm(!1),night:Fm(!0)}}var Ht=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Bm=Ht(-24,24,-51,7),zm=34521,km={x:0,y:0,z:3},us={x:.05,y:1.16,z:5.9},lo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Ht(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Ht(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Ht(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Ht(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Ht(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Ht(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Ht(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Ht(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Ht(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Ht(9,23,-48,-37),sign:[16,-38.2]}},$E=[Ht(-9,-6,-51,7),Ht(6,9,-51,7),Ht(-24,24,-8,-5),Ht(-24,24,-27,-23),Ht(9,23,-37,-34)],Vm=[{name:"Glace",bounds:lo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:lo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Ht(-9,9,-51,7)},{name:"Sol ouest",bounds:Ht(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Ht(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Ht(-24,-23,-51,7)},{name:"Sol est",bounds:Ht(9,23,-51,-48)},{name:"Sol est",bounds:Ht(9,23,-37,7)},{name:"Bordure est",bounds:Ht(23,24,-51,7)}],Ca={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},co=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Gm=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),ds={x:-19.4,y:.68,z:-3.25},Hm=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Wm={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function oh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new zi(i);return s.colorSpace=yt,s}function Xm(n,e){let{day:t,night:i}=Om(),s=new me(new Cn(180,40,20),new Gt({map:t,side:an,fog:!1,toneMapped:!1}));n.add(s);let r=oh(128,128,(y,I)=>{let B=y.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);B.addColorStop(0,"#fff8df"),B.addColorStop(.12,"#fff3bd"),B.addColorStop(.18,"rgba(255,225,144,.40)"),B.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=B,y.fillRect(0,0,I,I)}),o=new Jo(new Vr({map:r,blending:xa,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Jr,a.needsUpdate=!0;let l=new so(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Vs("#daeaff","#88724c",2.25),h=new Gs("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(c,h,h.target);let u=new v,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function p(y){f=d[y]?y:0;let I=d[f];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,h.color.set(I.sun),h.intensity=I.power,u.set(...I.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,s.material.map=f===2?i:t,s.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=g*[1,.56,.09][f]}function x(y){if(!h.castShadow)return;let I=h.target.position,B=Math.round(y.x/4)*4,j=Math.round(y.y/4)*4,G=Math.round(y.z/4)*4;I.x===B&&I.y===j&&I.z===G||(I.set(B,j,G),h.position.copy(I).add(u))}let g=0;n.background=new Ge(d[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(y,I,B){let[,j,G]=m[I],xe=512;y.save(),y.scale(B/512,B/512),y.fillStyle=j,y.fillRect(0,0,xe,xe);let ie=I+19;function pe(){return ie=Math.imul(ie,1664525)+1013904223>>>0,ie/4294967296}if(y.fillStyle=G,I===16){for(let de=0;de<16;de++)for(let K=0;K<16;K++)(K+de)%2===0&&y.fillRect(K*32,de*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let de=I===15?32:64;y.globalAlpha=.48;for(let K=0;K<xe;K+=de){y.fillRect(0,K,xe,I===8?3:2);for(let be=-de;be<xe;be+=de)y.fillRect(be+K/de%2*(I===2?de/2:0),K,2,de)}}else if([4,5,6,7,10,11,12].includes(I)){let de=I===5?38:I===7?64:18;for(let K=0;K<de;K++){y.strokeStyle=G,y.globalAlpha=.08+pe()*.22,y.lineWidth=I===5?1+pe()*8:1+pe()*4;let be=pe()*xe,Fe=I===5?.018:.009;y.beginPath();for(let _e=0;_e<=xe;_e+=8){let Se=be+Math.sin(_e*Fe+K)*(I===6||I===7?4:12+K%5*3)+(I===4?_e*.28:0);_e===0?y.moveTo(_e,Se):y.lineTo(_e,Se)}y.stroke()}}else{y.globalAlpha=.27;for(let de=0;de<120;de++){let K=pe()*xe,be=pe()*xe,Fe=2+pe()*6;y.beginPath(),y.arc(K,be,Fe,0,Math.PI*2),y.fill()}}if(I!==16)for(let de=0;de<4400;de++)y.globalAlpha=.05+pe()*.1,y.fillStyle=pe()>.5?G:"#222324",y.fillRect(pe()*xe,pe()*xe,1+pe()*4,1+pe()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),_=m.map(([y,I,B,j,G,xe],ie)=>{let pe=w.has(ie)?512:256,de=oh(pe,pe,be=>b(be,ie,pe));de.wrapS=de.wrapT=vn;let K=new sn({map:de,roughness:j,metalness:G,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return K.name=y,K}),E=_.map(y=>y.map.image),A=512,P=_.map(y=>new zn({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),C={value:0},S={value:.24},M={value:null},L={value:0};function U(){M.value?.dispose(),M.value=oh(512,512,(y,I)=>{y.fillStyle="#ffffff",y.fillRect(0,0,I,I);let B=I/52,j=I/64;for(let G of O){if(!G.position||!G.half||G.position.y+G.half.y<.22)continue;let xe=(G.position.x+26)*B,ie=(G.position.z+54)*j,pe=Math.min(55,G.half.x*B+5),de=Math.min(72,G.half.z*j+6);y.save(),y.translate(xe+G.half.y*B*.2,ie+G.half.y*j*.24),y.scale(pe,de);let K=y.createRadialGradient(0,0,.15,0,0,1);K.addColorStop(0,"rgba(22,37,65,.54)"),K.addColorStop(.58,"rgba(36,54,76,.29)"),K.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=K,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[..._,...P])y.onBeforeCompile=I=>{I.uniforms.uFocusAmount=C,I.uniforms.uFocusRadius=S,I.uniforms.uLabLightmap=M,I.uniforms.uLabBakedStrength=L,I.vertexShader=`varying vec3 vLabPosition;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),I.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <map_fragment>",`
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let O=[],W=[];function k(y,I,B,j,G,xe,ie,pe=0,de=0,K=1,be=1,Fe=!1){let _e=new me(Fe?new We(G,xe,ie):sh(G,xe,ie),_[pe]);_e.position.set(I,B,j),_e.rotation.x=de,_e.receiveShadow=!0,_e.castShadow=!0,n.add(_e);let Se=new v(G/2,xe/2,ie/2),ze={mesh:_e,position:_e.position,quaternion:_e.quaternion,half:Se,min:Se.clone().negate(),friction:K,gravity:be,name:y,type:pe,shape:oo(Se)};return O.push(ze),ze}let H=Vm.map(({name:y,bounds:I,type:B=0,friction:j=.78,gravity:G=1})=>{let{xMin:xe,xMax:ie,zMin:pe,zMax:de}=I;return k(y,(xe+ie)/2,-.33,(pe+de)/2,ie-xe,.66,de-pe,B,0,j,G)});for(let y of Object.values(Wm))for(let I of y)k(...I);let{xMin:J,xMax:X,zMin:ee,zMax:ge}=Bm;k("But\xE9e arri\xE8re",0,1.35,ee+.4,X-J,2.7,.6,2),k("But\xE9e ouest",J+.3,1.05,(ee+ge)/2,.6,2.1,ge-ee,2),k("But\xE9e est",X-.3,1.05,(ee+ge)/2,.6,2.1,ge-ee,2);let{xMin:Ee,xMax:q,zMin:ue,zMax:Ve}=lo.hills.bounds,De=q-Ee,$=Ve-ue,se=16,Q=64,fe=new on(De,$,se,Q).rotateX(-Math.PI/2).translate(Ee+De/2,0,ue+$/2),ce=fe.attributes.uv;for(let y=0;y<ce.count;y++)ce.setXY(y,ce.getX(y)*De/2.6,ce.getY(y)*$/2.6);let ke=fe.attributes.position,dt;function D(y){if(dt===y)return;dt=y;let I=dt*.017;for(let B=0;B<ke.count;B++){let j=ke.getX(B),G=ke.getZ(B),xe=Math.sin(Math.PI*Le.clamp((j-Ee)/De,0,1)),ie=Math.min(1,(G-ue)*.48,(Ve-G)*.48),pe=.93+.56*Math.sin(G*.36+I)+.32*Math.cos(j*.67+G*.26+I*1.4)+.19*Math.sin(G*.81+I*.67);ke.setY(B,Math.max(0,xe*ie*pe))}ke.needsUpdate=!0,fe.computeVertexNormals(),fe.computeBoundingSphere()}D(zm);let he=new me(fe,_[3]);he.userData.editorAssetId="lab-hill",he.receiveShadow=he.castShadow=!0,n.add(he);let oe=(y,I)=>{let B=Le.clamp((y-Ee)/De*se,0,se-1e-6),j=Le.clamp((I-ue)/$*Q,0,Q-1e-6),G=Math.floor(B),xe=Math.floor(j),ie=B-G,pe=j-xe,de=se+1,K=xe*de+G,be=ke.getY(K),Fe=ke.getY(K+1),_e=ke.getY(K+de),Se=ke.getY(K+de+1);return ie+pe<=1?be+(Fe-be)*ie+(_e-be)*pe:Se+(_e-Se)*(1-ie)+(Fe-Se)*(1-pe)};O.push({heightfield:!0,mesh:he,editorAssetId:"lab-hill",height:oe,...lo.hills.bounds,friction:.81,gravity:1});function te(y,I,B,j,G=1.45){let xe=oh(384,72,(pe,de,K)=>{pe.fillStyle="#202a32",pe.fillRect(0,0,de,K),pe.fillStyle=j,pe.font="bold 31px system-ui",pe.textAlign="center",pe.fillText(y,de/2,48,de-20)}),ie=new me(new on(3.2,.6),new Gt({map:xe,side:jt}));ie.position.set(I,G,B),n.add(ie),W.push(ie)}for(let y of Object.values(lo)){te(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:I,xMax:B,zMin:j,zMax:G}=y.bounds,xe=new $o(new st().setFromPoints([new v(I,.025,j),new v(B,.025,j),new v(B,.025,G),new v(I,.025,G)]),new jn({color:y.color,transparent:!0,opacity:.72}));n.add(xe),W.push(xe)}te("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),te("MURS HAUTS",3,-31,"#e8d2ff"),te("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ne=new sn({color:"#c8e6ed",metalness:1,roughness:.16}),Te=new me(new Jn(.54,2),ne);Te.userData.editorAssetId="chrome-sphere",Te.position.set(ds.x,ds.y,ds.z),Te.castShadow=!0,n.add(Te);let ye=m.map((y,I)=>{let{x:B,z:j}=Hm(I);return k("\xC9chantillon "+m[I][0],B,.325,j,.65,.65,.65,I,0,1,1,!0).mesh}),Ae=new pn(1,12).rotateX(-Math.PI/2),$e=new Gt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function je(y){let I=new me(Ae,$e);return I.scale.setScalar(y),n.add(I),I}function R(y,I,B,j,G,xe,ie,pe){let de=I>=3;e.shadowMap.enabled=de,h.castShadow=de,$e.opacity=I===2?.17:.11,L.value=pe?.38+B*.04:0;let K=I>=9?2048:I>=6?1024:I>=4?512:256;h.shadow.intensity=.45+I*.055,h.shadow.radius=.65+I*.12;let be=13+I*1.2;Object.assign(h.shadow.camera,{left:-be,right:be,top:be,bottom:-be}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==K&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(K,K)),o.visible=G,ie!==A&&(A=ie,_.forEach((_e,Se)=>{let ze=_e.userData.texture??_e.map,N=w.has(Se)?ie:Math.min(256,ie);if(ze.image.width===N)return;let Me=document.createElement("canvas");Me.width=Me.height=N;let Ce=Me.getContext("2d");N>512?b(Ce,Se,N):Ce.drawImage(E[Se],0,0,N,N);let Ie=new zi(Me);Ie.colorSpace=ze.colorSpace,Ie.wrapS=ze.wrapS,Ie.wrapT=ze.wrapT,Ie.repeat.copy(ze.repeat);for(let ve of[_e,P[Se]])ve.userData.texture=Ie,ve.map=Ie,ve.needsUpdate=!0;ze.dispose()}));let Fe=y>=4;for(let _e of O)_e.mesh?.isMesh&&!_e.zone&&(_e.mesh.material=Fe?_[_e.type]:P[_e.type]);he.material=Fe?_[3]:P[3];for(let _e=0;_e<ye.length;_e++)ye[_e].material=Fe?_[_e]:P[_e];_.forEach((_e,Se)=>{for(let ze of[_e,P[Se]])ze.userData.texture||(ze.userData.texture=ze.map),ze.map=xe?ze.userData.texture:null,ze.color.set(xe?"#ffffff":m[Se][1]),ze.needsUpdate=!0}),g=j?.21+B*.067:0,ne.metalness=j?.95:.1,ne.roughness=j?.13:.46,s.visible=y>=2,p(f)}return{boxes:O,floors:H,probe:Te,display:ye,visual:R,shadow:je,setTimeOfDay:p,centerShadows:x,get hillSeed(){return dt},setHillSeed:D,bakeLightmap:U,mapMaterial:(y,I)=>I>=4?_[y]:P[y],builtObjects:[...O.map(y=>y.mesh).filter(y=>y?.isObject3D),Te,...W],materials:[..._,...P],focus(y,I,B){C.value=y?I*.75:0,S.value=.07+B*.058}}}function qm(n,e,t){function i(c,h,u=.85){let d=c.getWorldPosition(new v),f=c.getWorldQuaternion(new ht);e.push({half:h,min:h.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:oo(h),friction:u,gravity:1})}let s=[],r=[],o=new zn({color:"#485d5d",flatShading:!0});function a([c,h],u,d){let f=new me(new We(.095,.68,.11),o);f.position.set(c,.34,h+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new v(.0475,.34,.055));let p=new dn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new me(new We(.64,.36,.055),new zn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),b=new zi(g);b.colorSpace=yt;let w=new me(new on(.61,.095),new Gt({map:b}));w.position.set(0,.116,.03),p.add(w);let _=.592/d.length,E=d.map(([P,C],S)=>{let M=new me(new We(_-.012,.155,.04),new zn({color:"#478086"}));M.position.set(-.296+_*(S+.5),-.045,.046),p.add(M),s.push(M),M.userData.touchWidth=_-.012;let L=document.createElement("canvas");L.width=208,L.height=172;let U=new zi(L);U.colorSpace=yt;let O=new me(new on(_-.017,.139),new Gt({map:U}));O.position.z=.0205,M.add(O);let W=-1/0;return M.userData.action=()=>{let k=performance.now();k-W<250||(W=k,C(),l(),M.position.z=.036,setTimeout(()=>{M.position.z=.046},115))},{label:P,context:L.getContext("2d"),texture:U}});function A(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let P of E){let C=P.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let S=(typeof P.label=="function"?P.label():P.label).split("|");S.forEach((M,L)=>C.fillText(M,104,(S.length>1?68:97)+L*37,188)),P.texture.needsUpdate=!0}b.needsUpdate=!0}r.push(A)}function l(){for(let c of r)c()}return a(Ca.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,co[0])],["Boule",()=>t.spawn(1,co[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,co[0])],["Vider",t.clear]]),a(Ca.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,co[1])],["Sph\xE8re",()=>t.spawn(5,co[1])]]),a(Ca.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ca.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function ah(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new st,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ym(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Ym(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Ym(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new wt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ch=0,Gb=1,Hb=new v,Zm=new ma,xd=new un,jm=new v,lh=new Tn,hh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new uh,this.unassigned=new uh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new yd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new v;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Hb)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===ch){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new v,t=new v,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,Zm.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){Zm.closestPointToPoint(p.point,!0,jm);let x=jm.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,xd.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(xd.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(xd.distanceToPoint(h.point)<0){u.push(fi.create(a,l,c),fi.create(h,l,a),fi.create(h,c,l),fi.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(fi.create(a,c,l),fi.create(h,a,l),fi.create(h,l,c),fi.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===ch&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Gb;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===ch&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=fi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},fi=class n{constructor(){this.normal=new v,this.midpoint=new v,this.area=0,this.constant=0,this.outside=null,this.mark=ch,this.edge=null}static create(e,t,i){let s=new n,r=new Ra(e,s),o=new Ra(t,s),a=new Ra(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return lh.set(e.point,t.point,i.point),lh.getNormal(this.normal),lh.getMidpoint(this.midpoint),this.area=lh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ra=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},yd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},uh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Wi=class extends st{constructor(e=[]){super();let t=[],i=[],r=new hh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var Pn=Math.PI*2,dh=.84,Xi=128;function ms(n){let e=new Uint8Array(Xi*Xi*4);for(let i=0;i<Xi;i++)for(let s=0;s<Xi;s++){let r=(s+.5)/Xi,o=(i+.5)/Xi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/dh,1),Math.min(o/dh,1),s,i),l=(s+i*Xi)*4;for(let c=0;c<3;c++)e[l+c]=Le.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new hi(e,Xi,Xi);return t.colorSpace=yt,t.generateMipmaps=!0,t.minFilter=bn,t.magFilter=nn,t.needsUpdate=!0,t}function $s(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function nt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Ge(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*dh,r.getY(l)*dh):r.setXY(l,.95,.95);return i.setAttribute("color",new wt(a,3)),i}function gs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:ah(s),material:new sn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Jm(n,e,t){let i=n/2,s=e/2,r=new ki;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function fs(n,e,t,i,s){return new Bs(Jm(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ps(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=e;f++){let p=Pn*f/e,x=t(u,d,p,h);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,h/(n.length-1)),h===n.length-1||f===e)continue;let g=h*(e+1)+f,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new st;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new v,c=new v;for(let h=0;h<n.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Pa(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new v(0,s,0));continue}for(let r=0;r<e;r++){let o=Pn*r/e;t.push(new v(i*Math.sin(o),s,i*Math.cos(o)))}}return new Wi(t)}function Wb(){let t=new ha(Jm(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Le.clamp(i.getX(l)/.098+.5,0,1),h=Le.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=ms((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Pn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[nt(fs(.106,.207,.013,.011,.0019),8425890),nt(fs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),nt(fs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),nt(t,16777215,!0),nt(fs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),nt(new We(.0036,.024,.004).translate(.055,.029,0),11714250),nt(new We(.0036,.015,.004).translate(-.055,.032,0),11385285),nt(new We(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(nt(new Tt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(nt(new pn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(nt(new pn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Wi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new v(c,h,l))));return gs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Xb(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ps(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=ms((a,l,c,h)=>{let u=Pn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(b=>Math.exp(-(((d-b+.035*Math.cos(u))/.009)**2)))),x=f**3*p,g=$s(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Pa([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return gs("bread","Baguette de pain",.27,o,[nt(s,16777215,!0)],r,.9)}function qb(){let n=ms((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*$s(a,l)-(c&&(u||d)?35:0);return[p*.94,p,p*1.04]}),e=ps([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ps([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[nt(e,16777215,!0),nt(t,11056059),nt(new Tt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),nt(new Tt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Pn*r/5;i.push(nt(new We(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Pa([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return gs("wheel","Roue",1.8,s,i,n,.64,.23)}function Yb(){let n=ms((r,o,a,l)=>{let c=$s(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Pn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=ps([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Mn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Pn*l/5;return new v(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new v(.166,-.027,.01),new v(.166,.053,-.01));let s=new Wi(i);return gs("cup","Tasse",.39,s,[nt(e,16777215,!0),nt(t,15785922)],n,.37)}function Zb(){let n=ps([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=ms((s,r,o,a)=>{let l=9*$s(o,a),c=11*Math.cos(s*Pn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Pn*48+s*Pn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Pn*4);return[h,h*1.13,h*1.24]}),t=[nt(n,16777215,!0),nt(new rs(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),nt(new pn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),nt(new pn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),nt(new Tt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),nt(new pn(.008,12).translate(0,.035,.0336),15633202)],i=Pa([[.033,-.143],[.054,.133]],6);return gs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function jb(){let n=ps([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=ms((r,o,a,l)=>{let c=10*$s(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Pn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Pn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[nt(n,16777215,!0),nt(new pn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),nt(new rs(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),nt(new pn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Pa([[.069,-.112],[.069,.109]],6);return gs("soda","Canette de soda",.35,s,i,t,.42,.27)}function Jb(){let n=ps([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=ms((s,r,o,a)=>{let l=15*$s(o,a),c=8*Math.cos(s*Pn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[nt(n,16777215,!0),nt(fs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),nt(new pn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Pa([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return gs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function Kb(){let n=ms((s,r,o,a)=>{let l=8*$s(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ps([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[nt(fs(.138,.22,.061,.016,.004),14788675),nt(fs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),nt(new on(.106,.174).translate(0,-.004,.0395),16777215,!0),nt(e,2502456),nt(new Tt(.014,.017,.016,10).translate(.04,.117,.001),2503482),nt(new We(.008,.047,.027).translate(-.072,.014,-.002),3028798),nt(new We(.006,.02,.019).translate(-.072,-.043,-.002),3950414),nt(new pn(.004,8).translate(.04,.066,.0397),15817792),nt(new pn(.004,8).translate(-.04,.066,.0397),7903100),nt(fs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new v(s,l,o),new v(r,l,o),new v(r,l,a),new v(s,l,a)]);return gs("radio","Talkie-walkie",.43,new Wi(i),t,n,.61,.08)}function Km(){return[Wb(),Xb(),qb(),Yb(),Zb(),jb(),Jb(),Kb()]}var $b=[0,1,2,3,4,5,7,8,9,10];function $m(n){Gm.forEach(({x:e,z:t},i)=>n($b[i],new v(e,.8,t)))}function Qm(){let n=[["Cube",new We(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Jn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new zs(.29),"#d8ae53",0,1],["Brique",new We(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new We(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Jn(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Ea(t,s),material:new sn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:oo(t.computeBoundingBox()??t.boundingBox.getSize(new v).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Km()){let s=Ea(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var eg=48,Qb=3,eS=128,tg=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),tS=(n,e,t)=>Math.max(e,Math.min(t,n)),nS=()=>structuredClone(tg.shield),Ia=(n,e,t,i)=>Number.isFinite(n)?tS(n,t,i):e;function ph(n){let e=n?.mode==="lathe"?tg.bottle:nS(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=eg?n.points.map(o=>[Ia(o?.[0],0,-1.5,1.5),Ia(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Ia(n?.depth,e.depth,.025,1.5),bevel:Ia(n?.bevel,e.bevel,0,.15),segments:Math.round(Ia(n?.segments,32,Qb,eS))}}function ng(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function fh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function iS(n,e,t,i){let s=fh(n,e,t),r=fh(n,e,i),o=fh(t,i,n),a=fh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function sS(n){let e=ph(n),t=e.mode==="lathe"?e.points:ng(e);if(t.length<3||t.length>eg*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&iS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function ig(n){let e=ph(n),t=sS(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ae(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ae(0,s[0].y)),s.at(-1).x>0&&s.push(new ae(0,s.at(-1).y)),i=new ca(s,e.segments);let r=[],o=i.attributes.position,a=new v,l=new v,c=new v,h=new v,u=i.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);i.setIndex(r)}else{let s=ng(e),r=new ki;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Bs(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new wt(new Float32Array(s*2),2))}return i}var _d=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],La=null,rS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Qs(n){return typeof n=="string"&&rS.has(n.replace(/^custom-model-game-/,""))}function mh(n){let e=n?.parts;return Qs(n?.id)||Qs(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Qs(t?.assetId))}function rg(){if(La)return La;let n=Qm(),e=_d;return La=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),La.set("chrome-sphere",{geometry:new Jn(.54,2),material:new sn({color:"#c8e6ed",metalness:1,roughness:.16})}),La}function gh(n){return typeof n=="string"&&rg().has(n)}function vd(n){return rg().get(n)??null}function oS(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function sg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[oS(e,n)]}}function Md(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>sg(e,t)),sg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Ed="gorilla-lab-models-v1",ho=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),aS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,lS=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),ag=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Sd=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),cS=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Da=(n,e,t,i)=>Number.isFinite(n)?Le.clamp(n,e,t):i;function Ad(n){return{gravity:Da(n?.physics?.gravity,0,2.5,1),bounce:Da(n?.physics?.bounce,0,1.65,1)}}function lg(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Da(n?.uv?.repeat,.01,100,1),angle:Da(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Da(n?.uv?.offset?.[t],-100,100,0))}}var hS=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),uS=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,dS=/^#[a-f\d]{6}$/i;function og(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function xs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Le.clamp(n[s],t,i):e)}var wd=new Set(["box","sphere","capsule","convex"]);function fS(n){if(n?.mode==="box")return{mode:"box",center:xs(n.center,0,-6,6),size:xs(n.size,.5,.025,12)};let e=Math.round(Le.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:wd.has(n.shape)?n.shape:"box",center:xs(n.center,0,-6,6),size:xs(n.size,.5,.025,12),rotation:xs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&wd.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function er(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ho.models||JSON.stringify(n).length>ho.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!mh(i)).map(i=>{if(typeof i?.id!="string"||!uS.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ho.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:og(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...gh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(hS).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:fS(i?.hitbox),...i.physics?{physics:Ad(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(s=>!Qs(s?.assetId)).map((s,r)=>({name:og(s?.name,`Pi\xE8ce ${r+1}`),...Number.isInteger(s?.group)&&s.group>0&&s.group<=ho.parts?{group:s.group}:{},shape:s?.shape==="asset"&&gh(s?.assetId)?"asset":Object.hasOwn(lS,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&gh(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:ph(s?.profile)}:{},position:xs(s?.position,0,-3,3),rotation:xs(s?.rotation,0,-360,360),scale:xs(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&dS.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(cS,s?.zone)?{zone:s.zone}:{},...Object.hasOwn(Sd,s?.finish)?{finish:s.finish}:{},...s?.uv?{uv:lg(s)}:{},surface:Object.hasOwn(ag,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=ho.textureBytes&&aS.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function cg(n){try{let e=(n??globalThis.localStorage)?.getItem(Ed);if(e&&e.length<=ho.fileBytes)return er(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function pS(n){switch(n){case"tetrahedron":return new zs(Math.sqrt(3)/2);case"sphere":return new Cn(.5,20,12);case"cylinder":return new Tt(.5,.5,1,20);case"cone":return new Fs(.5,1,20);case"torus":return new Mn(.365,.135,8,24);case"capsule":return new ss(.28,.44,6,16);case"diamond":return new Kn(.5);default:return new We(1,1,1)}}var hg=Object.keys(ag),Gn=64,Ua=4,ug=2,Ai;function dg(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function fg(){if(Ai)return Ai;let n=Gn*Ua,e=Gn*ug,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Gn)*Ua+Math.floor(s/Gn),o=dg(hg[r],s%Gn,i%Gn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ai=new hi(t,n,e),Ai.colorSpace=yt,Ai.magFilter=nn,Ai.minFilter=bn,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}var bd=new Map;function mS(n){if(bd.has(n))return bd.get(n);let e=new Uint8Array(Gn*Gn*4);for(let i=0;i<Gn;i++)for(let s=0;s<Gn;s++){let r=dg(n,s,i),o=(i*Gn+s)*4;e.set([r,r,r,255],o)}let t=new hi(e,Gn,Gn);return t.colorSpace=yt,t.wrapS=t.wrapT=vn,t.magFilter=nn,t.minFilter=bn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,bd.set(n,t),t}function pg(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function gS(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=lg(e),a=Le.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:d}=n.attributes,f=new v,p=new v;for(let x=0;x<h.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let b=Math.abs(p.x),w=Math.abs(p.y),_=Math.abs(p.z);b>=w&&b>=_?(g=f.z,m=f.y):w>=_?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function xh(n,e=new v(...n.scale)){let t=n.shape==="asset"?vd(n.assetId):null,i=n.shape==="custom"?ig(n.profile):t?.geometry?.clone()??pS(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Ne(new Float32Array(s.attributes.position.count*2),2)),n.uv&&gS(s,n,e);let r=n.rotation.map(Le.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new Ge(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=hg.indexOf(n.surface),u=h%Ua,d=Math.floor(h/Ua),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(u+.05+c.getX(p)*.9)/Ua,(d+.05+c.getY(p)*.9)/ug);return s.setAttribute("color",new wt(l,3)),s}function xS(n){let e=n?.shape==="asset"?vd(n.assetId):null,t=Sd[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new wi().load(n.texture);a.colorSpace=yt,a.wrapS=a.wrapT=vn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=vn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Ge(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??Sd.original;if(!n?.texture)return new sn({vertexColors:!0,map:n?.uv?mS(n.surface):fg(),roughness:i,metalness:s});let r=new wi().load(n.texture);return r.colorSpace=yt,r.wrapS=r.wrapT=vn,new sn({vertexColors:!0,map:r,roughness:i,metalness:s})}function yh(n){return n?.parts?.some(pg)?n.parts.map(xS):new sn({vertexColors:!0,map:fg(),roughness:.68})}function _h(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ai&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Td(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return xh(s);let r=new Vt(...s.rotation.map(Le.degToRad),"ZYX"),o=new v(...s.scale).multiply(new v(...[0,1,2].map(a=>new v().setComponent(a,1).applyEuler(r).multiply(e).length())));return xh(s,o)}),i=ah(t,n.some(pg));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function vh(n,e=null){let t=Td(n.parts),i=t.boundingBox.getSize(new v).max(new v(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=Td(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function Na(n){let e=new Jt;for(let t of n.parts??[]){let i=xh(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new v,new v(1,1,1)),e}function uo(n){return Na(n).getSize(new v)}function mg(n){let e=Na(n),t=e.getCenter(new v),i=e.getSize(new v),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":wd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Le.clamp(s.precision,8,96):48,center:r?new v(...s.center):t,size:r?new v(...s.size):i,rotation:r?new v(...s.rotation??[0,0,0]):new v,boundsCenter:t,boundsSize:i}}function yS(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new v().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function _S(n,e=null){let t=mg(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new v(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,d)=>d!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new ss(l,c,Math.max(2,Math.round(i/8)),i):new Cn(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=Td(n.parts),r=yS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new Wi(r),a=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new We(1,1,1)}function gg(n,e=null){let t=mg(n),i=t.boundsSize.clone().max(new v(1e-5,1e-5,1e-5)),s=e?new v(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=_S(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Le.degToRad(t.rotation.x)),a.rotateY(Le.degToRad(t.rotation.y)),a.rotateZ(Le.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function xg(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=Na(n),i=t.getCenter(new v),s=t.getSize(new v).max(new v(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new v(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=xh(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new v).sub(i).multiply(r),size:l.getSize(new v).multiply(r).max(new v(.01,.01,.01))};return a.dispose(),[c]})}var vg=256,Mg=1/2.6**2,bh=1e4,gi=1e4,Cd=10,Rd=10,vS=256,MS=16,fo=24,yg=new WeakMap,pi=Le.clamp,mi=Le.lerp,Oa=n=>n*n*(3-2*n);function _t(n,e,t,i){return Number.isFinite(n)?pi(n,e,t):i}function bg(n){if(!n)return null;let e=er({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var bS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Sg(n,e=MS){return Math.round(_t(n,1,vg,e))}function SS(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return _t(n[e+"Density"],0,gi,0);let r=_t(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return _t(o/t,0,gi,0)}var wS=["grass","shrub","model"],TS=["keep","fit","stretch"],ES=/^#[a-f\d]{6}$/i,AS=10;function CS(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(_t(n.minHeight,-300,300,-300),_t(n.maxHeight,-300,300,300)),[s,r]=e(_t(n.minX,0,100,0),_t(n.maxX,0,100,100)),[o,a]=e(_t(n.minZ,0,100,0),_t(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:_t(n.maxSlope,0,90,90),yaw:_t(n.yaw,-360,360,0),yawVariation:_t(n.yawVariation,0,360,360)}}function RS(n){return n?{x:_t(n.x,-256,256,0),z:_t(n.z,-256,256,0),radius:_t(n.radius,.1,512,5),blend:_t(n.blend,0,1,.5)}:null}function Ba(n={}){let e=bg(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,Cd).map(r=>ES.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:_t(n.density,0,gi,1),colors:s,seed:Math.round(_t(n.seed,0,2147483647,1)),size:_t(n.size,.05,gi,1),fit:TS.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:_t(n.variation,0,Rd,0),...n.scatter?{scatter:CS(n.scatter)}:{}}}function PS(n,e){return Array.isArray(n.rules)?n.rules.slice(0,bh).filter(t=>t&&typeof t=="object"&&wS.includes(t.kind)).filter(t=>t.kind!=="model"||bg(t.model)).map(Ba):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=SS(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ba({kind:t,model:a,density:o,seed:n.seed,size:_t(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function ys(n={},e=1){let t=Sg(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(_t(n?.seed,0,2147483647,1)),amplitude:_t(n?.amplitude,0,12,0),frequency:_t(n?.frequency,.015,2,.12),octaves:Math.round(_t(n?.octaves,1,AS,3)),roughness:_t(n?.roughness,.15,.95,.42),ridge:_t(n?.ridge,0,1,0),edgeFade:_t(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:RS(n.reliefArea)}:{},rules:PS(n??{},e),textureDensity:_t(n?.textureDensity,1e-4,vS,Mg),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&bS.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>_t(s,-fo,fo,0)):null}}function wg(n,e,t,i){let s=pi(t,0,e),r=pi(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,d=n[u],f=n[u+1],p=n[u+h],x=n[u+h+1];return l+c<=1?d+(f-d)*l+(p-d)*c:x+(p-x)*(1-l)+(f-x)*(1-c)}function Pd(n,e){let t=Sg(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>wg(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Qn(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Mh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Oa(n-i),o=Oa(e-s),a=mi(Qn(i,s,t),Qn(i+1,s,t),r),l=mi(Qn(i,s+1,t),Qn(i+1,s+1,t),r);return 2*mi(a,l,o)-1}function po(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f}=i,p=yg.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===h&&p.edgeFade===u&&p.reliefArea===d;if(x&&p.heights===f)return p;let g=s+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let _=0;_<=s;_++)for(let E=0;E<=s;E++){let A=(E/s-.5)*e,P=(_/s-.5)*t,C=1;if(d){let H=Math.hypot(A-d.x,P-d.z);if(H>=d.radius)continue;d.blend&&(C=Oa(Math.min(1,(d.radius-H)/(d.radius*d.blend))))}let S=A*a,M=P*a,L=0,U=1,O=0;for(let H=0;H<l;H++){let J=Mh(S*2**H,M*2**H,r+H*13);L+=U*mi(J,1-2*Math.abs(J),h),O+=U,U*=c}let W=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(_/s-.5))*2)),u*2):1,k=l===3&&c===.42&&h===0&&u===0;m[_*g+E]=C*(k?o*(.62*Mh(S,M,r)+.26*Mh(S*2.03,M*2.03,r+13)+.12*Mh(S*4.13,M*4.13,r+37)):o*L/O*W)}let b=f?m.map((_,E)=>_+f[E]):m,w={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,reliefArea:d,heights:f,procedural:m,surface:b};return yg.set(n,w),w}function Sh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return wg(o,i,(e/s+.5)*i,(t/r+.5)*i)}function mo(n=0){return(Math.round(n/90)%4+4)%4*90}function Tg(n){let e=mo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Eg(n,e,t){let{cos:i,sin:s}=Tg(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Fa(n){return mo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function _g(n,e,t){return n.y+Sh(po(n),...Eg(n,e,t))}var IS=.25;function Id(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Fa(n),s=Fa(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let d=e[r]-u*s[a]/2,f=d-(n[r]+u*i[a]/2);Math.abs(f)<=IS&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:d,delta:f})}}return t}function Ag(n,e,t=1.5){let i=Id(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:d}=i,f=n.terrain;if(Math.abs(Fa(n)[a]-Fa(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let C=e.terrain.detail,S=Math.ceil(f.detail/C)*C;S<=vg&&(f=Pd(f,S))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:b}=po(p),w=m?.slice()??Array((x+1)**2).fill(0),_=Math.max(t,Fa(p)[o]/x),{cos:E,sin:A}=Tg(p),P=!1;for(let C=0;C<=x;C++)for(let S=0;S<=x;S++){let M=(S/x-.5)*p.w,L=(C/x-.5)*p.d,U=p.x+E*M+A*L,O=p.z-A*M+E*L,W=r==="x"?U:O;if(W<l-1e-6||W>c+1e-6)continue;let k=Math.max(0,h*(u-(s==="x"?U:O)));if(k>_)continue;let H=C*(x+1)+S,J=s==="x"?_g(e,u,O):_g(e,U,u),X=mi(b[H],J-p.y,Oa(1-k/_))-g[H];w[H]=pi(X,-fo,fo),P||=w[H]!==X}return{piece:{...p,terrain:{...f,heights:w}},clipped:P}}function LS(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(h+=s[d*r+f],u++);return h/u}function Cg(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=po(n),{detail:l,w:c,d:h,surface:u,procedural:d}=a,[f,p]=Eg(n,e,t),x=pi(f,-c/2,c/2),g=pi(p,-h/2,h/2);if((f-x)**2+(p-g)**2>=s**2)return!1;let m=(f/c+.5)*l,b=(p/h+.5)*l,w=c/l,_=h/l,E=Math.max(0,Math.ceil(m-s/w)),A=Math.min(l,Math.floor(m+s/w)),P=Math.max(0,Math.ceil(b-s/_)),C=Math.min(l,Math.floor(b+s/_)),S=Number.isFinite(o)?o-n.y:Sh(a,f,p),M=l+1,L=a.heights?.slice()??new Array(M**2).fill(0),U=!1,O=!1;function W(k,H,J){U=!0;let X=H*M+k,ee=L[X],ge;if(i==="raise"||i==="lower")ge=ee+(i==="raise"?1:-1)*r*J;else{let Ee=i==="flatten"?S:LS(a,k,H);ge=mi(u[X],Ee,Math.min(1,r)*J)-d[X]}ge=pi(ge,-fo,fo),!(Math.abs(ge-ee)<1e-7)&&(L[X]=ge,O=!0)}for(let k=P;k<=C;k++)for(let H=E;H<=A;H++){let J=Math.hypot((H-m)*w,(k-b)*_)/s;J<1&&W(H,k,Oa(1-J))}if(!U){let k=pi(m,0,l),H=pi(b,0,l),J=Math.min(l-1,Math.floor(k)),X=Math.min(l-1,Math.floor(H)),ee=k-J,ge=H-X,Ee=ee+ge<=1,q=Ee?1-ee-ge:ee+ge-1,ue=Ee?ee:1-ge,Ve=Ee?ge:1-ee;if(q>=Math.max(ue,Ve)){let De=+!Ee;W(J+De,X+De,1)}else ue>=Ve?W(J+1,X,1):W(J,X+1,1)}return O&&(n.terrain.heights=L),O}function Ld(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(i.textureDensity??Mg),u=0;for(let f=0;f<=s;f++)for(let p=0;p<=s;p++){let x=f*r+p;o[3*x]=(p/s-.5)*e,o[3*x+2]=(f/s-.5)*t,a[2*x]=p/s*e*h,a[2*x+1]=(1-f/s)*t*h,f<s&&p<s&&(c.set([x,x+r,x+1,x+r+1,x+1,x+r],u),u+=6)}let d=new st;return d.setAttribute("position",new wt(o,3).setUsage(wa)),d.setAttribute("uv",new wt(a,2)),d.setIndex(new wt(c,1)),DS(d,n),d}function DS(n,e){let{surface:t}=po(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function US(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=n,l=pi((e/r+.5)*s,0,s),c=pi((t/o+.5)*s,0,s),h=Math.min(s-1,Math.floor(l)),u=Math.min(s-1,Math.floor(c)),d=s+1,f=u*d+h,p=l-h+c-u<=1,x=p?a[f+1]-a[f]:a[f+d+1]-a[f+d],g=p?a[f+d]-a[f]:a[f+d+1]-a[f+1];return i.set(-x*s/r,1,-g*s/o).normalize()}function NS(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new st;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function FS(){return new Jn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function OS(n,e,t){if(e==="stretch")return new v().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function BS(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let s=(i.minX/100-.5)*n.w,r=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(r-s)*(a-o),c=[],h=new v;if(!l||!e.density)return{requested:0,positions:c,area:l};let u=Math.cos(Le.degToRad(i.maxSlope)),d=i.maxSlope<90,f=i.minHeight>-300||i.maxHeight<300,p=(w,_)=>{if(f){let E=n.y+Sh(t,w,_);if(E<i.minHeight||E>i.maxHeight)return!1}return!d||US(t,w,_,h).y>=u-1e-7},x=1;if(d||f){let w=0,_=32;for(let E=0;E<_;E++)for(let A=0;A<_;A++)p(mi(s,r,(A+.5)/_),mi(o,a,(E+.5)/_))&&w++;x=w/_**2}let g=Math.round(l*x*e.density),m=Math.min(g,gi),b=d||f?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let w=0;w<b&&c.length<m;w++){let _=mi(s,r,Qn(w,27,e.seed)),E=mi(o,a,Qn(w,27,e.seed+1));p(_,E)&&c.push([_,E])}return{requested:g,positions:c,area:l*x}}function Rg(n){let e=new dn,t=po(n);e.userData.distribution=[];for(let[i,s]of(n.terrain.rules??[]).entries()){let{requested:r,positions:o,area:a}=BS(n,s,t),l=o?o.length:Math.min(r,gi);if(e.userData.distribution[i]={requested:r,count:l,area:a},!l)continue;let c=s.kind==="grass",h=s.model?OS(uo(s.model),s.fit,s.size):null,u=s.model?vh(s.model,h):c?NS():FS();h?u.scale(...h):u.scale(s.size,s.size,s.size),u.computeBoundingBox(),u.translate(0,-u.boundingBox.min.y,0),u.computeBoundingBox();let d=s.model?yh(s.model):new zn({color:"#ffffff",side:c?jt:ai,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new wi().load(n.terrain.grassTexture);g.colorSpace=yt,d.map=g,d.userData.ownTexture=!0}let f=new Ko(u,d,l);f.name=s.kind,f.userData={ruleIndex:i,seed:s.seed,variation:s.variation,collidable:s.collidable,requestedCount:r,positions:o,scatter:s.scatter},f.instanceMatrix.setUsage(wa),f.receiveShadow=!0;let p=s.colors.map(g=>new Ge(g)),x=new Ge;for(let g=0;g<l;g++){let m=Qn(g,41,s.seed)*(p.length-1),b=Math.floor(m);f.setColorAt(g,x.copy(p[b]).lerp(p[b+1],m-b))}e.add(f)}return zS(e,n),e}function zS(n,e){let t=po(e),i=new Nt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let h=a?.[c][0]??(Qn(c,27,r)-.5)*.96*e.w,u=a?.[c][1]??(Qn(c,27,r+1)-.5)*.96*e.d;i.position.set(h,Sh(t,h,u),u),i.rotation.y=l?Le.degToRad(l.yaw+Qn(c,27,r+2)*l.yawVariation):Qn(c,27,r+2)*Math.PI*2,i.scale.setScalar(mi(Math.max(.05,1-o),1+o,Qn(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Pg(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),_h(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Lg=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Dd=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],za={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},kS=8e6,go=512,Ci=1024,qi=512,Wt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Ig=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Qt(n){if(typeof n=="string"){if(n.length>kS)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>go)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+go+" pi\xE8ces.");let e=n.spawn??{},t=n.pieces.filter(i=>!Qs(i?.sceneryId)&&!mh(i?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Ig(n.name,56,"Ma map"),worldSize:Wt(n.worldSize,24,2048,240),spawn:{x:Wt(e.x,-Ci,Ci,0),y:Wt(e.y,-256,256,.06),z:Wt(e.z,-Ci,Ci,3),yaw:Wt(e.yaw,-360,360,0)},pieces:t.map((i,s)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let r=Wt(i.w,.05,qi,3),o=Wt(i.d,.05,qi,3),a=i.terrain&&typeof i.terrain=="object"?ys(i.terrain,r*o):null,l=i.model?er({version:1,models:[i.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Ig(i.name,36,"Pi\xE8ce "+(s+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Wt(i.x,-Ci,Ci,0),y:Wt(i.y,-256,256,0),z:Wt(i.z,-Ci,Ci,0),w:r,h:Wt(i.h,.05,256,.5),d:o,pitch:a?0:Wt(i.pitch,-180,180,0),yaw:a?mo(Wt(i.yaw,-360,360,0)):Wt(i.yaw,-360,360,0),roll:a?0:Wt(i.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(i.primitive)?i.primitive:"box",uvScale:Wt(i.uvScale,.05,100,1),uvOffsetX:Wt(i.uvOffsetX,-100,100,0),uvOffsetY:Wt(i.uvOffsetY,-100,100,0),uvRotation:Wt(i.uvRotation,-360,360,0),material:Math.round(Wt(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Wt(i.grip,0,1.5,.8),gravity:Wt(i.gravity,.05,2.5,1),bounce:Wt(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function Dg(n){return Qt({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...km,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Vt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Ug(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return Qt({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,za.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,za.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,za.rubber)]})}function Hn(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Ng(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new Vt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new v(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>Ci||Math.abs(u)>Ci||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var Fg="gorilla-lab-custom-map-v1";function Og(n){let e=new Blob([JSON.stringify(Qt(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var VS=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Ud(){return Hn({name:"Miroir",sceneryId:"lab-mirror",x:us.x,y:us.y,z:us.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function Bg(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&VS.has(e)):!1:!0}var Nd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],zg=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function kg(n,e=zg[n]){n=Math.max(0,Math.min(Nd.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:zg[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])i.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}var Vg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Gg=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Wg=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",ka=(n,e,t)=>Math.min(t,Math.max(e,n)),GS=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Fd=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function HS(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function Hg(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Wg(t),r.fillRect(0,0,o,o);let a=HS(s),l=ka(64/i,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(e)){let h=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let u=0;u<h;u++){let d=a()*o,f=a()*o,p=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,x=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),Fd(r,g=>g.fillRect(d,f,p,x))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Fd(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,ka(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var WS=`
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
`;function XS(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=WS,document.head.append(n)}async function qS(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function Od({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){XS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=q=>o.querySelector(q),l=a(".texture-canvas"),c=a(".texture-tile"),h=Gg(),u=Gg(),d={pattern:Vg.some(([q])=>q===i)?i:"grain",base:Wg(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],b=!1,w=!1,_=null,E="paint",A=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...Vg.map(([q,ue])=>new Option(ue,q))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let q of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+q+"]").addEventListener("input",ue=>{d[q]=["scale","size","opacity","hardness"].includes(q)?Number(ue.target.value):ue.target.value});let P=q=>{a("[data-status]").textContent=q},C=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let q=c.getContext("2d");q.clearRect(0,0,256,128);for(let ue=0;ue<2;ue++)for(let Ve=0;Ve<4;Ve++)q.drawImage(l,Ve*64,ue*64,64,64)},S=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512)}),M=q=>{p.putImageData(q.base,0,0),x.putImageData(q.top,0,0),C()},L=()=>{g.push(S()),g.length>16&&g.shift(),m.length=0,b=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},U=(q,ue)=>{q.length&&(ue.push(S()),M(q.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,b=!0)},O=()=>{b&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(L(),Hg(h,d),x.clearRect(0,0,512,512),C(),P("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},W=q=>{let ue=l.getBoundingClientRect();return{x:(q.clientX-ue.left)/ue.width*512,y:(q.clientY-ue.top)/ue.height*512}},k=q=>{let ue=d.size/2,Ve=d.opacity;Fd(x,De=>{De.save(),E==="erase"&&(De.globalCompositeOperation="destination-out"),De.globalAlpha=Ve;let $=ka(d.hardness,.05,1);if(E==="stamp")De.fillStyle=d.ink,De.translate(q.x,q.y),De.rotate(Math.PI/4),De.fillRect(-ue*.8,-ue*.8,ue*1.6,ue*1.6);else{let se=De.createRadialGradient(q.x,q.y,ue*$*.85,q.x,q.y,ue);if(E==="erase")se.addColorStop(0,"rgba(0,0,0,1)"),se.addColorStop(1,"rgba(0,0,0,0)");else{let Q=d.ink.match(/[\da-f]{2}/gi).map(fe=>parseInt(fe,16)).join(",");se.addColorStop(0,"rgba("+Q+",1)"),se.addColorStop(1,"rgba("+Q+",0)")}De.fillStyle=se,De.beginPath(),De.arc(q.x,q.y,ue,0,2*Math.PI),De.fill()}De.restore()})},H=(q,ue)=>{let Ve=Math.hypot(ue.x-q.x,ue.y-q.y),De=Math.max(1,Math.ceil(Ve/Math.max(2,d.size*.18)));for(let $=1;$<=De;$++)k({x:q.x+(ue.x-q.x)*$/De,y:q.y+(ue.y-q.y)*$/De})},J=q=>{let ue=f.getImageData(Math.floor(ka(q.x,0,511)),Math.floor(ka(q.y,0,511)),1,1).data;d.ink="#"+[...ue].slice(0,3).map(Ve=>Ve.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,P("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",q=>{if(q.button!==0||w)return;let ue=W(q);if(E==="pick"){J(ue);return}q.preventDefault(),L(),w=!0,_=q.pointerId,A=ue,l.setPointerCapture(q.pointerId),k(ue),C()}),l.addEventListener("pointermove",q=>{if(!w||q.pointerId!==_)return;q.preventDefault();let ue=W(q);E==="stamp"?k(ue):H(A,ue),A=ue,C()});let X=q=>{q.pointerId===_&&(w=!1,_=null,A=null,l.hasPointerCapture(q.pointerId)&&l.releasePointerCapture(q.pointerId))};l.addEventListener("pointerup",X),l.addEventListener("pointercancel",X);for(let q of o.querySelectorAll("[data-tool]"))q.onclick=()=>{E=q.dataset.tool,o.querySelectorAll("[data-tool]").forEach(ue=>ue.setAttribute("aria-pressed",String(ue===q)))};a("[data-cmd=generate]").onclick=O,a("[data-cmd=undo]").onclick=()=>U(g,m),a("[data-cmd=redo]").onclick=()=>U(m,g),a("[data-cmd=export]").onclick=()=>GS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async q=>{let ue=q.target.files?.[0];if(q.target.value="",!!ue)try{if(!["image/png","image/jpeg","image/webp"].includes(ue.type))throw Error("Image PNG / JPG / WebP uniquement.");if(ue.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ve=await createImageBitmap(ue);L(),p.clearRect(0,0,512,512),p.drawImage(Ve,0,0,512,512),Ve.close(),x.clearRect(0,0,512,512),C(),P("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ve){P(Ve.message)}});let ee=q=>{!q&&b&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ge,!0),o.remove())},ge=q=>{if(q.key==="Escape"){q.preventDefault(),ee(!1);return}(q.ctrlKey||q.metaKey)&&!q.target.closest("input,select")&&q.key.toLowerCase()==="z"&&(q.preventDefault(),q.stopImmediatePropagation(),q.shiftKey?U(m,g):U(g,m))};window.addEventListener("keydown",ge,!0),a("[data-cmd=close]").onclick=()=>ee(!1),a("[data-cmd=cancel]").onclick=()=>ee(!1);let Ee=()=>{for(let q of[512,384,256,192]){let ue=document.createElement("canvas");ue.width=ue.height=q,ue.getContext("2d").drawImage(l,0,0,q,q);for(let Ve of[.85,.72,.58]){let De=ue.toDataURL("image/webp",Ve);if(De.length<=s)return De}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let q=a("[data-cmd=apply]");q.disabled=!0;try{let ue=Ee();await r(ue),b=!1,ee(!0)}catch(ue){P(ue.message||"Impossible d\u2019appliquer la texture.")}finally{q.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Hg(h,d),C(),n&&qS(n,h).then(C).catch(()=>P("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>ee(!1)}}var tr=new Hs,gn=new v,_s=new v,Ft=new ht,Xg={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},Bd={type:"change"},qg={type:"mouseDown",mode:null},Yg={type:"mouseUp",mode:null},Zg={type:"objectChange"},Ch=class extends Ws{constructor(e,t=null){super(void 0,t);let i=new kd(this);this._root=i;let s=new Vd;this._gizmo=s,i.add(s);let r=new Gd;this._plane=r,i.add(r);let o=this;function a(w,_){let E=_;Object.defineProperty(o,w,{get:function(){return E!==void 0?E:_},set:function(A){E!==A&&(E=A,r[w]=A,s[w]=A,o.dispatchEvent({type:w+"-changed",value:A}),o.dispatchEvent(Bd))}}),o[w]=_,r[w]=_,s[w]=_}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new v,c=new v,h=new ht,u=new ht,d=new v,f=new ht,p=new v,x=new v,g=new v,m=0,b=new v;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",b),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new ht,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new ht,this._scaleStart=new v,this._getPointer=YS.bind(this),this._onPointerDown=jS.bind(this),this._onPointerHover=ZS.bind(this),this._onPointerMove=JS.bind(this),this._onPointerUp=KS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&tr.setFromCamera(e,this.camera);let t=zd(this._gizmo.picker[this.mode],tr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&tr.setFromCamera(e,this.camera);let t=zd(this._plane,tr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,qg.mode=this.mode,this.dispatchEvent(qg)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&tr.setFromCamera(e,this.camera);let o=zd(this._plane,tr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ft.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),_s.set(a,a,a)}else gn.copy(this.pointStart),_s.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),_s.applyQuaternion(this._worldQuaternionInv),_s.divide(gn),t.search("X")===-1&&(_s.x=1),t.search("Y")===-1&&(_s.y=1),t.search("Z")===-1&&(_s.z=1);s.scale.copy(this._scaleStart).multiply(_s),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Xg[t]),gn.copy(Xg[t]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Bd),this.dispatchEvent(Zg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Yg.mode=this.mode,this.dispatchEvent(Yg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Bd),this.dispatchEvent(Zg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return tr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function YS(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function ZS(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function jS(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function JS(n){this.enabled&&this.pointerMove(this._getPointer(n))}function KS(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function zd(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var wh=new Vt,Pt=new v(0,1,0),jg=new v(0,0,0),Jg=new ct,Th=new ht,Ah=new ht,Ri=new v,Kg=new ct,Ha=new v(1,0,0),nr=new v(0,1,0),Wa=new v(0,0,1),Eh=new v,Va=new v,Ga=new v,kd=class extends Nt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Vd=class extends Nt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Gt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new jn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new Tt(0,.04,.1,12);x.translate(0,.05,0);let g=new We(.08,.08,.08);g.translate(0,.04,0);let m=new st;m.setAttribute("position",new Ne([0,0,0,1,0,0],3));let b=new Tt(.0075,.0075,.5,3);b.translate(0,.25,0);function w(k,H){let J=new Mn(k,.0075,3,64,H*Math.PI*2);return J.rotateY(Math.PI/2),J.rotateX(Math.PI/2),J}function _(){let k=new st;return k.setAttribute("position",new Ne([0,0,0,1,1,1],3)),k}let E={X:[[new me(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new me(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new me(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new me(x,o),[0,.5,0]],[new me(x,o),[0,-.5,0],[Math.PI,0,0]],[new me(b,o)]],Z:[[new me(x,a),[0,0,.5],[Math.PI/2,0,0]],[new me(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new me(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new me(new Kn(.1,0),u),[0,0,0]]],XY:[[new me(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new me(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new me(new Tt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new Tt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new Tt(.2,0,.6,4),i),[0,.3,0]],[new me(new Tt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new Tt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new Tt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new me(new Kn(.2,0),i)]],XY:[[new me(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new me(new Kn(.01,2),s),null,null,null,"helper"]],END:[[new me(new Kn(.01,2),s),null,null,null,"helper"]],DELTA:[[new An(_(),s),null,null,null,"helper"]],X:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new An(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new An(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new me(w(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new me(w(.5,.5),r)]],Y:[[new me(w(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new me(w(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new me(w(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new me(new Cn(.25,10,8),i)]],X:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new me(new Mn(.75,.1,2,24),i)]]},L={X:[[new me(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new me(b,r),[0,0,0],[0,0,-Math.PI/2]],[new me(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new me(g,o),[0,.5,0]],[new me(b,o)],[new me(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new me(g,a),[0,0,.5],[Math.PI/2,0,0]],[new me(b,a),[0,0,0],[Math.PI/2,0,0]],[new me(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new me(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new me(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new We(.1,.1,.1),u)]]},U={X:[[new me(new Tt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new Tt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new Tt(.2,0,.6,4),i),[0,.3,0]],[new me(new Tt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new Tt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new Tt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new me(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new We(.2,.2,.2),i),[0,0,0]]]},O={X:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new An(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new An(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(k){let H=new Nt;for(let J in k)for(let X=k[J].length;X--;){let ee=k[J][X][0].clone(),ge=k[J][X][1],Ee=k[J][X][2],q=k[J][X][3],ue=k[J][X][4];ee.name=J,ee.tag=ue,ge&&ee.position.set(ge[0],ge[1],ge[2]),Ee&&ee.rotation.set(Ee[0],Ee[1],Ee[2]),q&&ee.scale.set(q[0],q[1],q[2]),ee.updateMatrix();let Ve=ee.geometry.clone();Ve.applyMatrix4(ee.matrix),ee.geometry=Ve,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),H.add(ee)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(E)),this.add(this.gizmo.rotate=W(C)),this.add(this.gizmo.scale=W(L)),this.add(this.picker.translate=W(A)),this.add(this.picker.rotate=W(M)),this.add(this.picker.scale=W(U)),this.add(this.helper.translate=W(P)),this.add(this.helper.rotate=W(S)),this.add(this.helper.scale=W(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ah;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ft.setFromEuler(wh.set(0,0,0)),o.quaternion.copy(i).multiply(Ft),Math.abs(Pt.copy(Ha).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ft.setFromEuler(wh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Ft),Math.abs(Pt.copy(nr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ft.setFromEuler(wh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Ft),Math.abs(Pt.copy(Wa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ft.setFromEuler(wh.set(0,Math.PI/2,0)),Pt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Jg.lookAt(jg,Pt,nr)),o.quaternion.multiply(Ft),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Pt.copy(Ha).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Pt.copy(nr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Pt.copy(Wa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Pt.copy(Wa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Pt.copy(Ha).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Pt.copy(nr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Th.copy(i),Pt.copy(this.eye).applyQuaternion(Ft.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Jg.lookAt(this.eye,jg,nr)),o.name==="X"&&(Ft.setFromAxisAngle(Ha,Math.atan2(-Pt.y,Pt.z)),Ft.multiplyQuaternions(Th,Ft),o.quaternion.copy(Ft)),o.name==="Y"&&(Ft.setFromAxisAngle(nr,Math.atan2(Pt.x,Pt.z)),Ft.multiplyQuaternions(Th,Ft),o.quaternion.copy(Ft)),o.name==="Z"&&(Ft.setFromAxisAngle(Wa,Math.atan2(Pt.y,Pt.x)),Ft.multiplyQuaternions(Th,Ft),o.quaternion.copy(Ft))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Gd=class extends me{constructor(){super(new on(1e5,1e5,2,2),new Gt({visible:!1,wireframe:!0,side:jt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Eh.copy(Ha).applyQuaternion(t==="local"?this.worldQuaternion:Ah),Va.copy(nr).applyQuaternion(t==="local"?this.worldQuaternion:Ah),Ga.copy(Wa).applyQuaternion(t==="local"?this.worldQuaternion:Ah),Pt.copy(Va),this.mode){case"translate":case"scale":switch(this.axis){case"X":Pt.copy(this.eye).cross(Eh),Ri.copy(Eh).cross(Pt);break;case"Y":Pt.copy(this.eye).cross(Va),Ri.copy(Va).cross(Pt);break;case"Z":Pt.copy(this.eye).cross(Ga),Ri.copy(Ga).cross(Pt);break;case"XY":Ri.copy(Ga);break;case"YZ":Ri.copy(Eh);break;case"XZ":Pt.copy(Ga),Ri.copy(Va);break;case"XYZ":case"E":Ri.set(0,0,0);break}break;case"rotate":default:Ri.set(0,0,0)}Ri.length()===0?this.quaternion.copy(this.cameraQuaternion):(Kg.lookAt(gn.set(0,0,0),Ri,Pt),this.quaternion.setFromRotationMatrix(Kg)),super.updateMatrixWorld(e)}};function $g(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function Qg(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new v(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new Vt(Le.degToRad(n.pitch),Le.degToRad(n.yaw),Le.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var e0={type:"change"},Wd={type:"start"},n0={type:"end"},Rh=new is,t0=new un,$S=Math.cos(70*Le.DEG2RAD),en=new v,In=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hd=1e-6,Ph=class extends Ws{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new ht,this._lastTargetPosition=new v,this._quat=new ht().setFromUnitVectors(e.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zr,this._sphericalDelta=new Zr,this._scale=1,this._panOffset=new v,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new v,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e1.bind(this),this._onPointerDown=QS.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=l1.bind(this),this._onMouseWheel=s1.bind(this),this._onKeyDown=r1.bind(this),this._onTouchStart=o1.bind(this),this._onTouchMove=a1.bind(this),this._onMouseDown=n1.bind(this),this._onMouseMove=i1.bind(this),this._interceptControlDown=c1.bind(this),this._interceptControlUp=h1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(e0),this.update(),this.state=Ct.NONE}update(e=null){let t=this.object.position;en.copy(t).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),t.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=en.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new v(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new v(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rh.origin.copy(this.object.position),Rh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rh.direction))<$S?this.object.lookAt(this.target):(t0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rh.intersectPlane(t0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hd||this._lastTargetPosition.distanceToSquared(this.target)>Hd?(this.dispatchEvent(e0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){en.setFromMatrixColumn(t,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,t){this.screenSpacePanning===!0?en.setFromMatrixColumn(t,1):(en.setFromMatrixColumn(t,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function QS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function e1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function t1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n0),this.state=Ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function n1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case $n.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case $n.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Wd)}function i1(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function s1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(Wd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(n0))}function r1(n){this.enabled!==!1&&this._handleKeyDown(n)}function o1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Wd)}function a1(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function l1(n){this.enabled!==!1&&n.preventDefault()}function c1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var F=n=>document.getElementById(n),c0=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],h0=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Nh=[...document.querySelectorAll(".tool")],u0="gorilla-lab-editor-draft",Yi=cg(localStorage),u1=Md(),Sn=[...new Map([...u1,...Yi.models].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function d0(n){let e=n??F("model-library").value;F("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Sn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Sn.some(t=>t.id===e)?F("model-library").value=e:Sn.length===1&&(F("model-library").value=Sn[0].id),F("place-model").disabled=!Sn.length}var f0=new URLSearchParams(location.search),Zd=f0.get("model"),jd="gorilla-lab-edit-map-model";d0(Zd);function sr(){return Sn.find(n=>n.id===F("model-library").value)}function p0(){let n=sr();if(!n)return null;let e=uo(n);return Hn({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Le.clamp(e.x,.2,64),h:Le.clamp(e.y,.12,36),d:Le.clamp(e.z,.2,64),...Ad(n),color:"#ffffff",solid:n.properties.collidable!==!1})}F("model-library").addEventListener("change",()=>{Ye==="model"&&Zi(null),ff()});var Xd={block:Hn({w:1,h:1,d:1}),ramp:Hn({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:Hn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:ys({amplitude:.7,grassDensity:1.7})}),wall:Hn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},tf={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},re,ut=-1,Ye="move",mt=null,Wn=null,Xa=[],vs=null,Uh=[];function yi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:Ye,selected:ut,...e};Uh.push(i),Uh.length>100&&Uh.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=et(),e=So.info.render;return{version:"R38.7",map:{name:re.name,pieces:re.pieces.length},tool:Ye,selected:ut,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[Yt.width,Yt.height],render:{...e},events:[...Uh]}};window.addEventListener("error",n=>{n.message&&yi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>yi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Ms=[],Yt=F("preview"),it=F("plan"),at=it.getContext("2d");function d1(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[F("shape-preset").value]??n.slab;return Hn({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(F("shape-preset").value)?F("shape-preset").value:"box"})}var f1=F("editor-views");function Ka(){f1.dataset.layout=F("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",F("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",F("sidebar-width").value+"px"),requestAnimationFrame(()=>{Vh(),Gh()})}for(let n of["layout-mode","view-split","sidebar-width"])F(n).addEventListener("input",Ka);F("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Ka()};var Jd=F("workspace-fullscreen");Jd.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ot("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Jd.setAttribute("aria-pressed",String(n)),Jd.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{Vh(),Gh()})});F("focus-3d").onclick=()=>{F("layout-mode").value="only-3d",Ka()};F("focus-plan").onclick=()=>{F("layout-mode").value="only-plan",Ka()};function p1(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(Q,fe,ce)=>{let ke=document.createElement(Q);return fe&&(ke.className=fe),ce!==void 0&&(ke.textContent=ce),ke},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let Q of Nh){let fe=Q.dataset.tool,ce=Q.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[fe]){let ke=t("div","rail-divider");ke.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[fe]],i.append(ke)}Q.classList.add("rail-tool"),Q.title=ce+" \xB7 "+(tf[fe]??""),Q.setAttribute("aria-label",ce),Q.replaceChildren(t("span","rail-glyph",s[fe]??"\u25A1"),t("span","rail-caption",ce==="Redimensionner"?"\xC9chelle":ce==="S\xE9lectionner"?"S\xE9lect.":ce==="D\xE9placer"?"D\xE9placer":ce==="Atelier"?"Mod\xE8le":ce)),i.append(Q)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=F("shape-preset").closest("label"),h=F("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let b=F("layout-mode").closest("label");b.classList.add("viewport-layout"),g.prepend(b);let w=t("span","active-selection","Aucune s\xE9lection");w.id="active-selection",b.after(w);let _=t("details","precision-menu");_.id="precision-menu",_.append(t("summary","","Accrochage \u25BE"));let E=t("div","precision-options"),A=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let Q of A){let fe=F(Q);fe&&E.append(fe.closest("label"))}_.append(E),g.append(_);let P=Q=>{if(Q==="close"){o.hidden=!0;return}let fe=Q==="model";o.hidden=!1,o.dataset.mode=Q,a.textContent=fe?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!fe,c.hidden=fe,d.hidden=!fe,f.hidden=!fe,u&&(u.hidden=!fe),p.textContent=fe?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!fe,x.textContent=fe?Sn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ce=sr();d.disabled=!ce,d.textContent=ce?"\u2B21 Placer \xAB "+ce.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!ce||!Yi.models.some(dt=>dt.id===ce.id),u&&(u.href="./model-editor.html"+(ce?ce.assetId&&ce.id==="custom-model-game-"+ce.assetId?"?asset="+encodeURIComponent(ce.assetId):"?model="+encodeURIComponent(ce.id):"")),F(fe?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{sr()&&(Ii("model"),P("close"),Yt.focus({preventScroll:!0}),ot("Clique dans la sc\xE8ne pour placer \xAB "+sr().name+" \xBB."))},f.onclick=()=>{let Q=sr();if(!(!Q||!Yi.models.some(fe=>fe.id===Q.id))&&confirm("Supprimer d\xE9finitivement \xAB "+Q.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let fe=er({...Yi,models:Yi.models.filter(ke=>ke.id!==Q.id),avatarId:Yi.avatarId===Q.id?null:Yi.avatarId});localStorage.setItem(Ed,JSON.stringify(fe)),Object.assign(Yi,fe);let ce=Sn.findIndex(ke=>ke.id===Q.id);ce>=0&&Sn.splice(ce,1),d0(),Ye==="model"&&!Sn.length&&Ii("move"),Zi(null),ff(),P("model"),ot("\xAB "+Q.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(fe){ot("Suppression impossible : "+(fe.message||"stockage local indisponible"))}},F("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&P("model")});for(let Q of["model","preset"])Nh.find(ce=>ce.dataset.tool===Q)?.addEventListener("click",()=>P(Q));window.addEventListener("pointerdown",Q=>{!o.hidden&&!o.contains(Q.target)&&!Q.target.closest(".rail-tool")&&P("close")}),window.addEventListener("keydown",Q=>{Q.key==="Escape"&&P("close")});let C=t("section","outliner");C.id="scene-outline";let S=t("header","side-section-head");S.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),S.append(t("span","outline-meta","Objets")),C.append(S);let M=e.querySelector("#pieces").closest(".inspector-section");M.id="outline-content",C.append(M);let L=t("section","property-pane"),U=t("nav","inspector-tabs");U.setAttribute("aria-label","Propri\xE9t\xE9s");let O=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[Q,fe]of O){let ce=t("button","inspector-tab",fe);ce.type="button",ce.dataset.tab=Q,ce.setAttribute("aria-pressed",String(Q==="object")),U.append(ce)}let W=t("div","property-content");W.id="property-content";let k=F("piece-inspector").closest(".inspector-section");k.id="object-section";let H=k.querySelector("#surface").closest("details");H.id="surface-controls";let J=t("section");J.id="collision-options",J.append(t("h3","","Collisions de la pi\xE8ce")),J.append(k.querySelector("#p-solid").closest("label"),F("debug-controls"));let X=t("section");X.id="behavior-options";let ee=t("div","fields");for(let Q of["surface","p-grip","p-gravity","p-bounce"])ee.append(H.querySelector("#"+Q).closest("label"));X.append(t("h3","","Propri\xE9t\xE9s physiques")),X.append(ee,k.querySelector("#model-object-controls"));let ge=t("section");ge.id="publish-options";let Ee=t("div","piece-actions");for(let[Q,fe]of[["test-map","Jouer cette map"],["export-map","Exporter JSON"]]){let ce=t("button","",fe);ce.type="button",ce.addEventListener("click",()=>F(Q).click()),Ee.append(ce)}ge.append(Ee),W.append(k,J,X,ge);let q=t("section","scene-options");q.id="scene-options",q.append(t("h2","","Param\xE8tres de carte"));let ue=F("map-name").closest("label"),Ve=F("map-world-size").closest(".fields"),De=F("draft-status");q.append(ue,Ve,De);let $=[...e.children].filter(Q=>Q.tagName==="DETAILS");for(let Q of $)q.append(Q);W.append(q),L.append(U,W),e.replaceChildren(C,L);let se=Q=>{let fe=re?.pieces?.[ut];["terrain","props"].includes(Q)&&!fe?.terrain&&(Q="object"),["material","behavior"].includes(Q)&&!fe&&(Q="object"),e.dataset.tab=Q;for(let ce of U.querySelectorAll("button"))ce.setAttribute("aria-pressed",String(ce.dataset.tab===Q)),ce.disabled=["terrain","props"].includes(ce.dataset.tab)&&!fe?.terrain;Q==="terrain"&&(F("terrain-controls").open=!0),Q==="material"&&(H.open=!0),W.scrollTop=0};for(let Q of U.querySelectorAll("button"))Q.addEventListener("click",()=>se(Q.dataset.tab));window.setInspectorTab=se,se("object")}p1();var Et={scale:10,cx:0,cz:-6,width:30,height:40},So=new nh({canvas:Yt,antialias:!0});So.setPixelRatio(Math.min(devicePixelRatio,1.5));Yt.addEventListener("webglcontextlost",()=>yi("contexte WebGL perdu",{},"warn"));var Xt=new hn(52,1,.1,640);Xt.position.set(16,15,19);var Ut=new Ph(Xt,Yt);Ut.target.set(0,0,-5);Ut.mouseButtons.LEFT=null;Ut.mouseButtons.RIGHT=$n.ROTATE;Ut.mouseButtons.MIDDLE=$n.PAN;Ut.maxDistance=580;Ut.maxPolarAngle=Math.PI/2-.035;var xn=new zr;xn.background=new Ge("#8fb6c6");var m0=new Vs("#f0f5ff","#8e775c",2.6);xn.add(m0);var nf=new Gs("#fff1d2",1.8);nf.position.set(-9,18,6);xn.add(nf);var lr=new zr;lr.fog=new Zo("#a6d4ea",55,135);var ws=Xm(lr,So);ws.probe.userData.editorAssetId="chrome-sphere";var d2=qm(lr,ws.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),m1=new Map(Md().map(n=>[n.assetId,n]));function i0(n,e,t=null,i=null){let s=structuredClone(t??m1.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=Na(s),o=r.getSize(new v),a=r.getCenter(new v);return Hn({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var sf=()=>{let n=Dg(ws.boxes),e=ws.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let d=t+u%(o+1)/o*a,f=s+Math.floor(u/(o+1))/o*l;return e.height(d,f)});n.pieces.push(Hn({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:ys({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(Ud()),$m((t,i)=>{let s=_d[t];s&&n.pieces.push(i0(s,i))}),n.pieces.push(i0("chrome-sphere",new v(ds.x,ds.y,ds.z))),Qt(n)};re=sf();var rf=new me(new We(1.8,2.03,.1),new sn({color:"#8daebc",metalness:.9,roughness:.12}));rf.position.set(us.x,us.y,us.z);rf.userData.editorAssetId="lab-mirror";lr.add(rf);var g1=ws.boxes.filter(n=>n.half&&n.mesh?.isObject3D);g1.forEach(n=>n.mesh.removeFromParent());var Fh=new dn;Fh.add(...lr.children);xn.add(Fh);var ar=ws.boxes.find(n=>n.heightfield).mesh;ar.userData.editorAssetId="lab-hill";ws.visual(7,0,7,!0,!0,!0,512,!1);var _o=new ga(60,60,"#d7e2e5","#5e7b8a");_o.material.transparent=!0;_o.material.opacity=.35;xn.add(_o);var gt=new dn;xn.add(gt);var Ze=new Ch(Xt,Yt);Ze.setSize(.9);Ze.setRotationSnap(Le.degToRad(5));Ze.enabled=!1;xn.add(Ze.getHelper());var of=new Set(["translate","rotate","scale"]),bs=null,Ln=null,af=!1,qa=null,Ih=!1,g0=()=>Number(F("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...F(n).options].some(t=>t.value===e)&&(F(n).value=e)}catch{}F(n).onchange=()=>{Ln=null;try{localStorage.setItem("gorilla-lab-"+n,F(n).value)}catch{}}}var rr=new Map;try{F("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}F("magnet").onchange=()=>{Ln=null,rr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",F("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{af=e.altKey});window.addEventListener("blur",()=>{af=!1,Ln=null});function x0(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/ja())*ja();if(i||!F("magnet").checked||!n.solid||n.terrain)return Ln=null,s;let r=g0(),o=F("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new Vt(...[p.pitch,p.yaw,p.roll??0].map(Le.degToRad),"YXZ"),g=new ct().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,b)=>[m,(Math.abs(g[b])*p.w+Math.abs(g[4+b])*p.h+Math.abs(g[8+b])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of re.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(_=>_!==g),b=_=>Math.abs(s[_]-p[_])<c[_]+x[_]-.001,w=m.flatMap(_=>t.includes(_)&&b(m.find(E=>E!==_))?[-1,1].flatMap(E=>[-1,1].map(A=>{let P=p[_]+E*x[_]-A*c[_];return{key:_,value:P,distance:Math.abs(e[_]-P)}})):[]).sort((_,E)=>_.distance-E.distance)[0];if(!(o?!w||w.distance>r*1.8:!m.every(b)))for(let _ of[-1,1]){let E=p[g]+_*(c[g]+x[g]),A=re.pieces.indexOf(p)+":"+g+":"+_;h.push({key:A,axis:g,value:E,edge:o?w:null,distance:Math.max(Math.abs(E-e[g]),o?w.distance:0)})}}}let u=h.find(p=>p.key===Ln),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Ln&&(rr.set(Ln,(rr.get(Ln)??0)+1),Ln=null);let f=h.filter(p=>p.distance<=r&&(rr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Ln=f.key;else for(let p of h)p.distance<=r&&(rr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var Ya=new We(1,1,1),x1=gd(),y1=new wi,Oh=.025,_1=new rs(.24,.36,40).rotateX(-Math.PI/2),y0=new Gt({color:"#ffcd63",side:jt}),Dn=new me(_1,y0),_0=new me(new on(.12,.2).rotateX(-Math.PI/2),y0);_0.position.set(0,0,-.39);Dn.add(_0);xn.add(Dn);var or=new me(Ya,new Gt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),xo=new me(new Cn(.055,10,8),new Gt({color:"#ffc85a",depthTest:!1}));xo.visible=!1;xo.renderOrder=20;xn.add(xo);var Za=new me(Dn.geometry,new Gt({color:"#ffe084",side:jt,opacity:.65,transparent:!0,depthWrite:!1}));or.visible=Za.visible=!1;xn.add(or,Za);var Ss=new Hs,kh=new v(0,1,0),s0=new un(kh,0),v1=new Qe,xi=null,qd=!1;function rn(){qd||(qd=!0,requestAnimationFrame(()=>{qd=!1,So.render(xn,Xt),D0()}))}function Vh(){let n=Yt.clientWidth||1,e=Yt.clientHeight||1;So.setSize(n,e,!1),Xt.aspect=n/e,Xt.updateProjectionMatrix(),rn()}function Gh(){let n=Math.max(1,it.clientWidth),e=Math.max(1,it.clientHeight);n===it.width&&e===it.height||(it.width=n,it.height=e,lf(),ti())}new ResizeObserver(Vh).observe(Yt);new ResizeObserver(Gh).observe(it);Ut.addEventListener("change",rn);Ut.addEventListener("start",()=>Zi(null));function lf(){Et.scale=Math.min(it.width/Et.width,it.height/Et.height)}function Bh(n,e){return[it.width/2+(n-Et.cx)*Et.scale,it.height/2+(e-Et.cz)*Et.scale]}function Kd(n){let e=it.getBoundingClientRect();return{x:((n.clientX-e.left)*it.width/e.width-it.width/2)/Et.scale+Et.cx,z:((n.clientY-e.top)*it.height/e.height-it.height/2)/Et.scale+Et.cz}}function r0(n,e,t,i,s){let[r,o]=Bh(n.x,n.z),a=Le.degToRad(n.pitch),l=Le.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);at.save(),at.translate(r,o),at.rotate(-Le.degToRad(n.yaw));let u=c*Et.scale,d=h*Et.scale;at.globalAlpha=s,at.fillStyle=e,at.fillRect(-u/2,-d/2,u,d),at.globalAlpha=1,at.strokeStyle=t,at.lineWidth=i,at.strokeRect(-u/2,-d/2,u,d),at.restore()}function o0(n,e){let[t,i]=Bh(n.x,n.z);at.save(),at.translate(t,i),at.rotate(Le.degToRad(-n.yaw)),at.strokeStyle=e?"#fff0bb":"#ffd16e",at.lineWidth=2,at.beginPath(),at.arc(0,0,6,0,Math.PI*2),at.moveTo(0,-6),at.lineTo(0,-11),at.stroke(),at.restore()}function ti(){at.fillStyle="#192e3a",at.fillRect(0,0,it.width,it.height),at.strokeStyle="#37505f",at.lineWidth=1;let n=Et.scale<1?25:Et.scale<4?10:Et.scale<12?5:1,e=(re.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Bh(r,r);o>=0&&o<=it.width&&(at.beginPath(),at.moveTo(o,0),at.lineTo(o,it.height),at.stroke()),a>=0&&a<=it.height&&(at.beginPath(),at.moveTo(0,a),at.lineTo(it.width,a),at.stroke())}let[t,i]=Bh(-e,-e);at.strokeStyle="#ffda9077",at.lineWidth=2,at.strokeRect(t,i,e*2*Et.scale,e*2*Et.scale);let s=re.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Dd[r.material]:r.color);r0(r,a,o===ut?"#ffe095":"#a4bac7",o===ut?2:1,r.solid?.86:.38)}o0(re.spawn,!1),Wn&&(Ye==="spawn"?o0(Wn,!0):r0(Wn,"#8ee7fc","#afefff",2,.45))}function zh(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==or?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Le.degToRad(e.pitch),Le.degToRad(e.yaw),Le.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function v0(){xi&&(xn.remove(xi),xi.geometry.dispose(),xi.material.dispose());let n=gt.children[ut];xi=n?new jr(n,"#ffdf88"):null,xi&&xn.add(xi),$d()}function $d(){if(Ye==="spawn"){Ze.enabled=!0,Ze.setMode("translate"),Ze.setSpace("world"),Ze.setTranslationSnap(null),Ze.setRotationSnap(null),Ze.showX=Ze.showY=Ze.showZ=!0,Ze.attach(Dn);return}let n=gt.children[ut],e=et()?.terrain,t=of.has(Ye)&&!!n;if(Ze.enabled=t,!t){Ze.detach();return}Ze.setMode(Ye),Ze.setSpace(Ye==="translate"?"world":"local"),Ze.setTranslationSnap(null);let i=!!(e&&Ye==="rotate");Ze.setRotationSnap(i?Math.PI/2:null),Ze.showX=Ze.showZ=!i,Ze.showY=!(e&&Ye==="scale"),Ze.attach(n),F("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":tf[Ye]}var yo=!1;function M0(){if(Ye!=="scale")return;let n=et(),e=bs?.map.pieces[ut],t=Ze.object;if(!n||!e||!t)return;let i=Qg(e,n,yo,bs?.scaleSides),s=(re.worldSize??240)/2;n.x=Le.clamp(i.x,-s,s),n.y=Le.clamp(i.y,-256,256),n.z=Le.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),xi?.update();for(let r of["x","y","z"])F("p-"+r).value=n[r].toFixed(2);ti(),rn()}function b0(n){let e=yo;yo=n.ctrlKey,e!==yo&&Ze.dragging&&M0()}for(let n of["keydown","keyup"])window.addEventListener(n,b0);Yt.addEventListener("pointermove",b0,{capture:!0});Ze.addEventListener("change",rn);Ze.addEventListener("mouseDown",()=>{let n=et();if(Ln=null,n||Ze.object===Dn){let e=Ye==="scale"?$g(Ze.axis,Ze.pointStart,Ze.worldQuaternionStart):void 0;bs={map:structuredClone(re),selected:ut,scaleSides:e},yi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Ze.axis,scaleSides:e,terrain:!!n?.terrain})}yo=!!(yo||window.event?.ctrlKey)});Ze.addEventListener("objectChange",()=>{let n=et(),e=Ze.object,t=bs?.map.pieces[ut];if(e===Dn&&bs){let s=(re.worldSize??240)/2,r=Le.clamp;re.spawn.x=r(Dn.position.x,-s,s),re.spawn.y=r(Dn.position.y-Oh,-256,256),re.spawn.z=r(Dn.position.z,-s,s),Dn.position.set(re.spawn.x,re.spawn.y+Oh,re.spawn.z);for(let o of["x","y","z"])F("spawn-"+o).value=re.spawn[o].toFixed(2);ti();return}if(!n||!e||!t)return;let i=Le.clamp;if(Ye==="translate"){let s=["x","y","z"].filter(a=>(Ze.axis??"XYZ").includes(a.toUpperCase())),r=x0(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,af),o=(re.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else Ye==="rotate"?(n.pitch=Le.radToDeg(e.rotation.x),n.yaw=Le.radToDeg(e.rotation.y),n.roll=Le.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=mo(n.yaw),e.rotation.set(0,Le.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,qi),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,qi),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),M0());e.updateMatrixWorld(!0),xi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])F("p-"+s).value=Number(n[s]??0).toFixed(2);ti(),rn()});Ze.addEventListener("dragging-changed",({value:n})=>{if(Ut.enabled=!n,n||!bs)return;let e=bs;bs=null;let t=Ze.object===Dn,i=t?e.map.spawn:e.map.pieces[ut],s=t?re.spawn:et();if(JSON.stringify(i)===JSON.stringify(s)){yi("transformation sans changement",{name:s?.name,axis:Ze.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));yi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Ms.length>=35&&Ms.shift(),Ms.push(e),re=Qt(re),xt(),ot("Transformation appliqu\xE9e.")});Yt.addEventListener("pointerup",()=>{Ze.dragging||(Ut.enabled=!0)});Yt.addEventListener("pointercancel",()=>{Ze.dragging&&Ze.pointerUp(null),Ut.enabled=!0});function M1(){Ze.detach();for(let t of[...gt.children])gt.remove(t),t.geometry!==Ya&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&Pg(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),_h(t.material);Fh.visible=!!re.arenaBase;let n=new Set(re.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(re.pieces.map(t=>t.sceneryId).filter(Boolean));Fh.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=Bg(re,i,n,e))}),nf.visible=m0.visible=!re.arenaBase,xn.fog=re.arenaBase?lr.fog:null,xn.environment=re.arenaBase?lr.environment:null;for(let t of re.pieces){if(t.model){let l=new me(vh(t.model,new v(t.w,t.h,t.d)),yh(t.model));l.castShadow=l.receiveShadow=!0;let c=new me(new We(1,1,1),new Gt({colorWrite:!1,depthWrite:!1,side:jt}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=gt.children.length,gt.add(l),zh(l,t);continue}let i=[10,11,12].includes(t.material),s=new zn({color:new Ge(Dd[t.material]).multiply(new Ge(t.color)),transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(re.arenaBase&&!t.texture){let l=ws.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=y1.load(t.texture,rn),s.map.colorSpace=yt,s.map.wrapS=s.map.wrapT=vn,s.color.set(t.color));let r=t.terrain?performance.now():0,o=t.terrain?Ld(t):t.primitive==="ramp"?gd(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?Um(t.primitive):t.texture||re.arenaBase?sh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):Ya;o!==Ya&&md(o,t);let a=new me(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=Rg(t);l&&(a.add(l),a.userData.vegetation=l)}gt.add(a),zh(a,t)}L1(),Dn.position.set(re.spawn.x,re.spawn.y+Oh,re.spawn.z),Dn.rotation.y=Le.degToRad(re.spawn.yaw),U0(),v0()}function et(){return re.pieces[ut]}function ot(n){F("editor-note").textContent=n}function vt(){Ms.length>=35&&Ms.shift(),Ms.push({map:structuredClone(re),selected:ut}),F("undo").disabled=!1}function cf(){try{return localStorage.setItem(u0,JSON.stringify(re)),F("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil",!0}catch{return F("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.",!1}}F("model-asset-edit-link").onclick=n=>{let e=et();if(!e?.model||!cf()){n.preventDefault();return}try{sessionStorage.setItem(jd,JSON.stringify({index:ut,piece:e}))}catch{n.preventDefault(),ot("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function b1(){let n=f0.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(jd)),sessionStorage.removeItem(jd)}catch{return}let t=re.pieces[e?.index],i=Yi.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){ot("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}ut=e.index;let o=uo(t.model),a=uo(i),l=(u,d,f,p)=>Le.clamp(u*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,qi),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,qi)},h=Hn({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(vt(),re.pieces[ut]=h),ot("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var a0=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function S0(){let n=a0(F("piece-search").value.trim()),e=[];re.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";a0(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===ut))}),F("pieces").replaceChildren(...e),F("pieces").value=String(ut),e.length||F("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(F("pieces").options[0].disabled=!0),F("count").textContent=n?e.length+" sur "+re.pieces.length:re.pieces.length+" / "+go}function w0(){S0();let n=et();F("piece-inspector").hidden=!n,F("selection-help").hidden=!!n,F("focus-piece").disabled=!n,F("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";F("model-object-controls").hidden=!e,F("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=F("model-asset-edit-link"),i=n?.model&&Sn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,h=new URLSearchParams(c?{asset:l}:{model:n.model.id});h.set("from","cards"),t.href="./model-editor.html?"+h}e&&(F("model-grabbable").checked=n.model.properties?.grabbable!==!1,F("model-frozen").checked=n.model.properties?.frozen===!0,F("model-collidable").checked=n.model.properties?.collidable!==!1,F("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of c0){let c=F("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])F(l).disabled=!n;F("delete").disabled=!n||re.pieces.length===1,F("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",F("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",F("texture-clear").disabled=!n?.texture,F("texture-paint").disabled=!n||!!n.model;let s=Xa[ut],r=F("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=ef(s));let o=n?.terrain;F("terrain-grassTexture-paint").disabled=!o;for(let l of h0){let c=F("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(F("uv-reset").disabled=!n||!!n?.model,F("terrain-controls").hidden=F("terrain-props").hidden=F("terrain-texture-density-fields").hidden=!o,o){for(let g of R0)F("terrain-"+g).value=o[g];let l=o.reliefArea??P0(n);F("terrain-relief-local").checked=!!o.reliefArea,F("terrain-relief-fields").hidden=!o.reliefArea;for(let g of["x","z","radius","blend"])F("terrain-relief-"+g).value=l[g];let c=gt.children[ut]?.userData.generationMs;F("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let h=n.w*n.d,u=2*o.detail**2,d=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2});F("terrain-cell-size").textContent=d.format(n.w/o.detail)+" \xD7 "+d.format(n.d/o.detail)+" m par case \xB7 "+d.format(u)+" triangles \xB7 "+d.format(u/h)+" triangles/m\xB2",F("terrain-texture-effective").textContent=d.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2",P1(n);let f=F("terrain-neighbor"),p=f.value,x=re.pieces.flatMap((g,m)=>Id(n,g)?[new Option(g.name,String(m))]:[]);f.replaceChildren(...x.length?x:[new Option("Aucun bord \xE0 moins de 25 cm","")]),x.some(g=>g.value===p)&&(f.value=p),f.disabled=F("terrain-stitch").disabled=!x.length,F("p-pitch").disabled=F("p-roll").disabled=!0}F("rotate").disabled=!n,F("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",F("p-yaw").step=o?"90":"1",F("texture-create").disabled=!n,F("surface").value="",F("undo").disabled=Ms.length===0,F("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o}function xt(){F("map-name").value=re.name,F("map-world-size").value=re.worldSize??240;for(let n of["x","y","z","yaw"])F("spawn-"+n).value=re.spawn[n];M1(),w0(),ti(),rn(),cf()}function vo(n){ut!==n&&(ut=n,yi("s\xE9lection",{name:et()?.name,terrain:!!et()?.terrain}),Ln=null,rr.clear(),w0(),v0(),ti(),rn())}function hf(n){if(re.pieces.length>=go)return ot("Limite de pi\xE8ces atteinte.");vt(),re.pieces.push(n),ut=re.pieces.length-1,xt(),ot(n.name+" ajout\xE9 \xE0 la map.")}function uf(){if(!et()||re.pieces.length===1)return;let n=et().name;vt(),re.pieces.splice(ut,1),ut=Math.min(ut,re.pieces.length-1),xt(),ot(n+" retir\xE9 de la map.")}function df(){let n=et();if(!n)return;let e=Le.clamp(n.x+n.w+ja(),-120,120);hf({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function S1(){let n=et();if(!n)return;vt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,yi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),xt()}function T0(){let n=Ms.pop();n&&(re=n.map,ut=n.selected,Zi(null),xt(),ot("Derni\xE8re modification annul\xE9e."))}function ff(){let n=tf[Ye]??"";if(Ye!=="model"||!sr()){F("tool-help").textContent=n;return}let e=p0(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);F("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Ii(n){Ye!==n&&yi("changement d\u2019outil",{ancien:Ye,nouveau:n,name:et()?.name}),Ye=n,Ut.mouseButtons.LEFT=Ye==="view"?$n.ROTATE:null,$d(),rn();for(let e of Nh)e.setAttribute("aria-pressed",String(e.dataset.tool===Ye));for(let e of[Yt,it])e.dataset.tool=Ye,e.removeAttribute("data-hit");ff(),$d(),rn(),Zi(null)}function cr(){let n=new Jt().setFromObject(gt);n.expandByPoint(Dn.position);let e=n.getCenter(new v),t=n.getSize(new v);Et={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(re.worldSize??240,500)),height:Math.max(t.z+5,Math.min(re.worldSize??240,500))},lf();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));_o.scale.setScalar(i),_o.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Xt.position.clone().sub(Ut.target).normalize(),r=new v().crossVectors(kh,s).normalize(),o=new v().crossVectors(s,r),a=Math.tan(Le.degToRad(Xt.fov/2))*.87,l=a*Xt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new v(h,u,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,Ut.maxDistance),Ut.target.copy(e),Xt.position.copy(e).addScaledVector(s,c),Ut.update(),Xt.updateMatrixWorld(),ti(),rn()}function pf(n,e){vt(),re=n,Ln=null,rr.clear(),ut=-1,F("piece-search").value="",Ii("move"),xt(),cr(),ot(e)}function ja(){return Number(F("snap").value)}function Lh(n){let e=ja(),t=(re.worldSize??240)/2;return Le.clamp(Math.round(n/e)*e,-t,t)}function mf(n,e){if(n===it){let t=Kd(e);Ss.set(new v(t.x,80,t.z),new v(0,-1,0))}else{let t=Yt.getBoundingClientRect();Xt.updateMatrixWorld(),Ss.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Xt)}}function Qd(n){return s0.constant=-n,Ss.ray.intersectPlane(s0,new v)}function w1(n){let e=n;for(;e&&e.parent!==gt;)e=e.parent;return e?.parent===gt?e:null}function Mo(n,e){mf(n,e);let t=ar.visible&&re.arenaBase?[...gt.children,ar]:gt.children,i=Ss.intersectObjects(t,!0);for(let s of i){if(s.object===ar)return s;let r=w1(s.object);if(r)return{...s,object:r}}return null}function E0(n,e,t,i=null){Ss.set(new v(n,80,e),new v(0,-1,0));let s=i?Ss.intersectObject(i,!1)[0]:Ss.intersectObjects(ar.visible&&re.arenaBase?[...gt.children,ar]:gt.children,!1).find(r=>r.object===ar||re.pieces[gt.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function A0(n,e){qa=null,Ih=!1;let t=Mo(n,e);if(Ye==="spawn"){if(!t)return null;let h=Lh(t.point.x),u=Lh(t.point.z);return E0(h,u,re.spawn.yaw)}if(Ye==="terrain"){let h=t?.point??Qd(0);return h?{...Xd.terrain,terrain:ys(Xd.terrain.terrain),x:Lh(h.x),y:h.y,z:Lh(h.z)}:null}if(Ye==="sculpt"||Ye==="model"&&!sr())return null;let i=t?.point??Qd(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(v1.getNormalMatrix(t.object.matrixWorld)):kh,r=t&&T1(t),o=g0();r&&r.distance<=o*2&&(qa=r.point,Ih=F("magnet").checked&&!e.altKey&&F("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=Ih||e.altKey?1e-6:ja(),l=Ye==="model"?p0():Ye==="preset"?d1():Xd[Ye],c=Ng(Ih?qa:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=re.worldSize/2?c:null}function T1(n){let e=n.object,t=re.pieces[gt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function Zi(n){!n&&!Wn||(Wn=n,xo.visible=!!(Wn&&qa),xo.visible&&xo.position.copy(qa),Za.visible=!!(Wn&&Ye==="spawn"),or.visible=!!(Wn&&Ye!=="spawn"),Za.visible&&Za.position.set(Wn.x,Wn.y+Oh,Wn.z),or.visible&&(or.geometry=Wn.primitive==="ramp"?x1:Ya,zh(or,Wn)),ti(),rn())}function E1(n,e){let t=A0(n,e);if(!t){ot(Ye==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ye==="spawn")vt(),re.spawn=t,Ii("move"),xt(),ot("Point de d\xE9part d\xE9plac\xE9.");else{let i=Ye==="model";Zi(null),hf(t),i&&(Ii("move"),ot(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function A1(n,e){if(Ye==="view"||e.button!==0||!e.isPrimary||mt||Ze.dragging)return;if(Ye==="spawn"||of.has(Ye)){if(n===Yt&&Ze.enabled){let r=Yt.getBoundingClientRect();if(Ze.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),Ze.axis){Ut.enabled=!1;return}}if(Ye!=="spawn"){e.stopImmediatePropagation();let r=Mo(n,e);vo(r?gt.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ye};if(mt=t,Ln=null,Ye==="sculpt"){L0(n,e);return}if(Ye!=="move")return;let i=Mo(n,e);vo(i?gt.children.indexOf(i.object):-1);let s=et();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function C1(n,e){if(Ye==="view"||of.has(Ye)||Ze.dragging)return;if(!mt){Ye==="move"?n.toggleAttribute("data-hit",!!Mo(n,e)):Zi(A0(n,e));return}if(Ye==="sculpt"&&mt.id===e.pointerId&&mt.canvas===n){Math.hypot(e.clientX-mt.clientX,e.clientY-mt.clientY)>=7&&(L0(n,e),mt.clientX=e.clientX,mt.clientY=e.clientY);return}if(mt.id!==e.pointerId||mt.canvas!==n||mt.height===void 0||!et()||Math.hypot(e.clientX-mt.clientX,e.clientY-mt.clientY)<4&&!mt.recorded)return;mf(n,e);let i=Qd(mt.height);if(!i)return;let s=et(),r=x0(s,{x:i.x-mt.dx,y:s.y,z:i.z-mt.dz},["x","z"],e.altKey),o=(re.worldSize??240)/2,a=Le.clamp(r.x,-o,o),l=Le.clamp(r.z,-o,o);a===s.x&&l===s.z||(mt.recorded||(vt(),mt.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,zh(gt.children[ut],s),xi?.update(),F("p-x").value=a,F("p-z").value=l,ti(),rn())}function Yd(n,e,t){if(!mt||mt.canvas!==n||mt.id!==e.pointerId)return;let i=mt;if(mt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(xt(),ot("Relief modifi\xE9."));return}i.recorded&&(cf(),ot(et().name+" d\xE9plac\xE9.")),t&&Ye===i.tool&&Ye!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&E1(n,e)}var ei=null,Hh=!1,Dh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(Hh=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(Hh=!1)});window.addEventListener("blur",()=>{ei=null,Hh=!1});it.addEventListener("pointerdown",n=>{n.button!==1&&!(Hh&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),ei={id:n.pointerId,x:n.clientX,y:n.clientY},it.setPointerCapture(n.pointerId),it.style.cursor="grabbing")},{capture:!0});it.addEventListener("pointermove",n=>{!ei||ei.id!==n.pointerId||(n.stopImmediatePropagation(),Et.cx-=(n.clientX-ei.x)/Et.scale,Et.cz-=(n.clientY-ei.y)/Et.scale,ei.x=n.clientX,ei.y=n.clientY,ti())},{capture:!0});function C0(n){!ei||ei.id!==n.pointerId||(ei=null,it.style.cursor="",it.hasPointerCapture(n.pointerId)&&it.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}it.addEventListener("pointerup",C0,{capture:!0});it.addEventListener("pointercancel",C0,{capture:!0});function gf(n,e){let t=it.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=Kd({clientX:i,clientY:s}),o=Le.clamp(Et.width/n,.75,4096),a=o/Et.width;Et.width=o,Et.height*=a,lf();let l=Kd({clientX:i,clientY:s});Et.cx+=r.x-l.x,Et.cz+=r.z-l.z,ti()}it.addEventListener("wheel",n=>{n.preventDefault(),gf(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});F("plan-zoom-in").onclick=()=>gf(1.25);F("plan-zoom-out").onclick=()=>gf(.8);F("plan-fit").onclick=cr;var Pi=F("context-actions"),Ja=!1;function bo(){Pi.hidden=!0}for(let n of[Yt,it])n.addEventListener("pointerdown",e=>{e.button===2?Dh={canvas:n,x:e.clientX,y:e.clientY}:bo()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Ja){Ja=!1;return}if(Dh?.canvas!==n||Math.hypot(e.clientX-Dh.x,e.clientY-Dh.y)>6)return;let t=Mo(n,e),i=t?gt.children.indexOf(t.object):-1;if(i<0){bo();return}vo(i),F("context-title").textContent=et()?.name??"Pi\xE8ce",Pi.querySelector('[data-context-action="delete"]').textContent=et()?.model?"Retirer de la carte":"Supprimer",Pi.hidden=!1;let s=195,r=285;Pi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Pi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Pi.hidden||Pi.contains(n.target)||(Ja=n.button===2,bo())},{capture:!0});document.addEventListener("contextmenu",n=>{Ja&&n.target!==Yt&&n.target!==it&&(Ja=!1,n.preventDefault()),!Pi.hidden&&!Pi.contains(n.target)&&n.target!==Yt&&n.target!==it&&bo()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&bo()});for(let n of Pi.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;bo(),e==="duplicate"?df():e==="delete"?uf():e==="focus"?F("focus-piece").click():Ii(e==="select"?"move":e)};for(let n of[Yt,it])n.addEventListener("pointerdown",e=>A1(n,e),{capture:!0}),n.addEventListener("pointermove",e=>C1(n,e)),n.addEventListener("pointerup",e=>Yd(n,e,!0)),n.addEventListener("pointercancel",e=>Yd(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Yd(n,e,!1)}),n.addEventListener("pointerleave",()=>{mt||Zi(null)});F("p-material").append(...Lg.map((n,e)=>new Option(n,e)));for(let n of h0)F("p-"+n).addEventListener("change",e=>{let t=et();!t||t.model||(vt(),t[n]=Number(e.target.value),re=Qt(re),xt())});F("uv-reset").onclick=()=>{let n=et();!n||n.model||(vt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),re=Qt(re),xt())};var R1={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(R1))F(e).addEventListener("change",t=>{let i=et();if(!i?.model||i.model.kind!=="prop")return;vt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),re=Qt(re),xt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};ot(s[n])});for(let n of c0)F("p-"+n).addEventListener("change",e=>{let t=et();if(!t)return;vt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),re=Qt(re),xt()});F("map-world-size").onchange=n=>{vt(),re.worldSize=Le.clamp(Number(n.target.value)||240,24,2048),re=Qt(re),xt(),cr(),ot("Zone de construction : "+re.worldSize+" \xD7 "+re.worldSize+" m.")};F("map-name").onchange=n=>{vt(),re.name=n.target.value,re=Qt(re),xt()};F("piece-search").addEventListener("input",S0);F("pieces").onchange=n=>{n.target.value!==""&&vo(Number(n.target.value))};F("focus-piece").onclick=()=>{let n=gt.children[ut];if(!n)return;let e=new Jt().setFromObject(n).getBoundingSphere(new Zn),t=Xt.position.clone().sub(Ut.target).normalize(),i=Math.atan(Math.tan(Le.degToRad(Xt.fov/2))*Math.min(Xt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Ut.target.copy(e.center),Xt.position.copy(e.center).addScaledVector(t,s),Ut.update(),rn()};for(let n of["x","y","z","yaw"])F("spawn-"+n).onchange=e=>{vt(),re.spawn[n]=Number(e.target.value),re=Qt(re),xt()};F("spawn-here").onclick=()=>{let n=et();if(!n)return;let e=n.solid&&E0(n.x,n.z,n.yaw,gt.children[ut]);if(!e)return ot("Choisis une pi\xE8ce solide pour placer le d\xE9part.");vt(),re.spawn=e,xt(),ot("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Nh)n.onclick=()=>Ii(n.dataset.tool);F("duplicate").onclick=df;F("add-mirror").onclick=()=>hf(Ud());F("delete").onclick=uf;F("rotate").onclick=S1;F("undo").onclick=T0;F("zoom-fit").onclick=cr;F("snap").onchange=()=>Zi(null);F("new-example").onclick=()=>pf(sf(),"Ar\xE8ne de d\xE9part ouverte.");F("blank-map").onclick=()=>{let n=Le.clamp(Number(F("map-world-size").value)||240,24,2048);pf({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Hn({name:"Sol",y:-.25,w:Math.min(n,qi),d:Math.min(n,qi)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};F("surface").onchange=n=>{let e=za[n.target.value],t=et();!e||!t||(vt(),Object.assign(t,e),xt())};F("texture-file").onchange=async n=>{let e=n.target.files[0],t=et();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!re.pieces.includes(t))return ot("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");vt(),t.texture=o,xt(),ot("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){ot(i.message)}finally{n.target.value=""}};F("texture-paint").onclick=()=>{let n=et();if(!n||n.model)return ot("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Od({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!re.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");vt(),n.texture=e,re=Qt(re),xt(),ot("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};F("terrain-grassTexture-paint").onclick=()=>{let n=et();n?.terrain&&Od({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!re.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");vt(),n.terrain.grassTexture=e,re=Qt(re),xt(),ot("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};F("texture-clear").onclick=()=>{et()?.texture&&(vt(),et().texture=null,xt())};F("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{pf(Qt(await e.text()),"Map charg\xE9e.")}catch(t){ot(t.message)}finally{n.target.value=""}};F("export-map").onclick=()=>{try{Og(re),ot("Map JSON export\xE9e.")}catch(n){ot(n.message)}};F("test-map").onclick=()=>{try{localStorage.setItem(Fg,JSON.stringify(Qt(re))),location.href="./?custom=1"}catch{ot("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var R0=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function P1(n){let e=n.terrain.rules,t=gt.children[ut]?.userData.vegetation?.userData.distribution??[];F("terrain-add-rule").disabled=e.length>=bh,F("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),F("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,S,M=!1)=>{let L=document.createElement("td");M&&(L.dataset.wide="");let U=document.createElement("span");return U.textContent=C,L.append(U,S),r.append(L),S.matches("input,select")&&S.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),L},a=C=>{vt(),e[s]=Ba({...i,...C}),yi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),xt()},l=(C,S,M)=>{let L=document.createElement("select");return L.replaceChildren(...C.map(([U,O])=>new Option(U,O))),L.value=S,L.onchange=()=>M(L.value),L},c=(C,S,M,L)=>{let U=document.createElement("input");return U.type="number",U.value=i[C],U.min=S,U.max=M,U.step=L,U.onchange=()=>{Number.isFinite(U.valueAsNumber)?a({[C]:U.valueAsNumber}):U.value=i[C]},U},h=Sn.some(C=>C.id===i.model?.id)||!i.model?Sn:[...Sn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let S=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?h[0]:null,colors:i.colors.map(()=>S),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(C=>[C.name,C.id]),i.model.id,C=>a({model:h.find(S=>S.id===C)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:Cd-1},(C,S)=>[String(S+2),String(S+2)]),String(i.colors.length),C=>{let S=i.colors.slice(0,Number(C));for(;S.length<Number(C);)S.push(S.at(-1));a({colors:S})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[C,S]of i.colors.entries()){let M=document.createElement("input");M.type="color",M.value=S,M.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),M.onchange=()=>a({colors:i.colors.map((L,U)=>U===C?M.value:L)}),f.append(M)}u.append(f),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,gi,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,gi,.05)),o("Variation de taille",c("variation",0,Rd,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let b={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,S,M,L]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let U=document.createElement("label"),O=document.createElement("input");U.textContent=S,O.type="number",O.min=M,O.max=L,O.step="any",O.value=i.scatter?.[C]??b[C],O.onchange=()=>{Number.isFinite(O.valueAsNumber)&&a({scatter:{...i.scatter,[C]:O.valueAsNumber}})},U.append(O),m.append(U)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let w=document.createElement("td");w.dataset.wide="",w.append(x),r.append(w);let _=document.createElement("output"),E=t[s]??{count:0,requested:0,area:0};_.textContent=E.count+" / "+E.requested+" \xB7 "+E.area.toFixed(1)+" m\xB2",E.requested>gi&&(_.textContent+=" \xB7 plafond "+gi);let A=o("Affich\xE9es / demand\xE9es",_,!0),P=document.createElement("button");return P.type="button",P.textContent="Retirer la ligne",P.onclick=()=>{vt(),e.splice(s,1),xt()},A.append(P),r}))}F("terrain-add-rule").onclick=()=>{let n=et();!n?.terrain||n.terrain.rules.length>=bh||(vt(),n.terrain.rules.push(Ba({seed:n.terrain.seed+n.terrain.rules.length})),xt(),F("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};F("terrain-stitch").onclick=()=>{let n=et(),e=re.pieces[Number(F("terrain-neighbor").value)],t=Le.clamp(Number(F("terrain-seam-width").value)||1.5,.1,25),i=Ag(n,e,t);if(!i)return ot("Rapproche les bords \xE0 moins de 25 cm.");vt(),re.pieces[ut]=i.piece,xt(),ot(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};F("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=et();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!re.pieces.includes(t))return;vt(),t.terrain.grassTexture=o,xt(),ot("Texture d\u2019herbe import\xE9e.")}catch(i){ot(i.message)}};F("terrain-grassTexture-clear").onclick=()=>{et()?.terrain&&(vt(),et().terrain.grassTexture=null,xt())};for(let n of R0)F("terrain-"+n).onchange=e=>{let t=et();t?.terrain&&(vt(),t.terrain=n==="detail"?Pd(t.terrain,Number(e.target.value)):ys({...t.terrain,[n]:Number(e.target.value)}),xt())};function P0(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function I0(n){let e=et();e?.terrain&&(vt(),e.terrain=ys({...e.terrain,reliefArea:n},e.w*e.d),xt())}F("terrain-relief-local").onchange=n=>{let e=et();e?.terrain&&I0(n.target.checked?P0(e):null)};for(let n of["x","z","radius","blend"])F("terrain-relief-"+n).onchange=e=>{let t=et(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&I0({...t.terrain.reliefArea,[n]:i})};F("terrain-reset").onclick=()=>{et()?.terrain&&(vt(),et().terrain.heights=null,xt())};function L0(n,e){mf(n,e);let t=Ss.intersectObjects(gt.children,!1).find(a=>re.pieces[gt.children.indexOf(a.object)]?.terrain),i=t?gt.children.indexOf(t.object):-1,s=re.pieces[i];if(!s?.terrain||(mt.recorded||(vt(),mt.recorded=!0,mt.flattenY=t.point.y,vo(i),F("terrain-controls").open=!0),i!==ut))return;let r={mode:F("terrain-brush").value,radius:Number(F("brush-radius").value),strength:Number(F("brush-strength").value),target:mt.flattenY};if(!Cg(s,t.point.x,t.point.z,r))return;let o=gt.children[i];o.geometry.dispose(),o.geometry=Ld(s),md(o.geometry,s),xi?.update(),ti(),rn()}F("texture-style").replaceChildren(...Nd.map((n,e)=>new Option(n,e)));F("texture-create").onclick=()=>{let n=et();if(!n)return;let e=kg(Number(F("texture-style").value),F("texture-tint").value);vt(),n.texture=e.toDataURL("image/webp",.85),xt(),ot("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};F("view-top").onclick=()=>{let n=Ut.target,e=Math.max(10,Xt.position.distanceTo(n));Xt.position.copy(n).add(new v(0,e,.001)),Ut.update(),rn()};F("view-perspective").onclick=()=>{Xt.position.copy(Ut.target).add(new v(16,15,24)),cr()};F("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=re.spawn,s=new v(0,0,-1).applyAxisAngle(kh,Le.degToRad(i));Xt.position.set(n,e+.87,t),Ut.target.copy(Xt.position).addScaledVector(s,5),Xt.lookAt(Ut.target),rn()};var l0={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||mt||Ze.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")T0();else if(e==="d")df();else return;else{if(n.altKey)return;if(l0[e])Ii(l0[e]);else if(e==="f")cr();else if(e==="delete"||e==="backspace")uf();else return}n.preventDefault()});var ir=new dn;xn.add(ir);function I1(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function ef(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function L1(){Xa=gt.children.map(I1),vs={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of Xa.entries()){for(let i of["triangles","vertices","instances"])vs[i]+=t[i];(vs.heavy<0||t.triangles>Xa[vs.heavy].triangles)&&(vs.heavy=e)}F("scene-mesh-stats").textContent="Objets de la carte \xB7 "+ef(vs);let n=vs.heavy;F("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+re.pieces[n].name+" \xB7 "+ef(Xa[n]),F("scene-select-heavy").disabled=n<0}F("scene-select-heavy").onclick=()=>{let n=vs?.heavy??-1;n<0||(vo(n),window.setInspectorTab("object"),F("focus-piece").click())};function D0(){if(!F("debug-stats"))return;let n=So.info.render.triangles,e=re?.pieces?.length??0;F("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(re?.worldSize??240)+" m"}function U0(){for(let n of[...ir.children])ir.remove(n),n.geometry.dispose(),n.material.dispose();_o.visible=F("debug-grid").checked;for(let n of gt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=F("debug-wire").checked;if(F("debug-hitboxes").checked){let e=gt.children.indexOf(n),t=re.pieces[e];if(t?.model){let i=new v(t.w,t.h,t.d),s=xg(t.model,i);if(s)for(let r of s){let o=new We(...r.size),a=new me(o,new Gt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),ir.add(a)}else{let r=gg(t.model,i),o=new me(r,new Gt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),ir.add(o)}}else if(t?.primitive==="ramp"){let i=new Ns(new ua(n.geometry),new jn({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),ir.add(i)}else ir.add(new jr(n,"#fa9945"))}}rn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])F(n).onchange=U0;F("debug-coords").onchange=()=>{F("debug-coords").checked||D0()};for(let n of[Yt,it])n.addEventListener("pointermove",e=>{if(!F("debug-coords").checked||mt||ei)return;let t=Mo(n,e);if(!t)return;let i=t.point;F("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+re.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(u0);if(n){let e=Qt(n);if(JSON.stringify(e)!==JSON.stringify(Ug()))if(e.arenaBase&&!e.editableArena){let t=sf(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=go?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,re=Qt(e),ot("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):re=e}else re=e}}catch{}b1();Ii("move");xt();Vh();Gh();cr();Ka();if(Zd){let n=Sn.find(e=>e.id===Zd);n?(F("place-model").click(),ot("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):ot("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}yi("d\xE9marrage termin\xE9",{version:"R38.7",name:re.name,pi\u00E8ces:re.pieces.length});})();
