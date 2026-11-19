(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Ru=1,ip=2;var Pu=1,sp=2,Mi=3,oi=0,an=1,Zt=2,Oi=0,Rs=1,pa=2,Iu=3,Lu=4,rp=5,es=100,op=101,ap=102,lp=103,cp=104,hp=200,up=201,dp=202,fp=203,Cl=204,Rl=205,pp=206,mp=207,gp=208,xp=209,yp=210,_p=211,vp=212,Mp=213,bp=214,sc=0,rc=1,oc=2,Ps=3,ac=4,lc=5,cc=6,hc=7,uc=0,Sp=1,wp=2,Bi=0,Tp=1,Ep=2,Ap=3,Cp=4,Rp=5,Pp=6,Ip=7;var Du=300,Gs=301,Hs=302,jr=303,dc=304,ma=306,vn=1e3,Qi=1001,Pl=1002,En=1003,Lp=1004;var ga=1005;var tn=1006,fc=1007;var bn=1008;var hi=1009,Uu=1010,Nu=1011,Jr=1012,pc=1013,as=1014,ui=1015,Kr=1016,mc=1017,gc=1018,$r=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,Rn=1023,Ir=1026,Qr=1027,xc=1028,yc=1029,ku=1030,_c=1031;var vc=1033,xa=33776,ya=33777,_a=33778,va=33779,Mc=35840,bc=35841,Sc=35842,wc=35843,Tc=36196,Ec=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Ic=37811,Lc=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,Bc=37818,zc=37819,kc=37820,Vc=37821,Gc=36492,Hc=36494,Wc=36495,Xc=36283,qc=36284,Yc=36285,Zc=36286;var Oo=2300,Il=2301,El=2302,xu=2400,yu=2401,_u=2402;var Dp=3200,Up=3201;var jc=0,Np=1,zi="",gt="srgb",Is="srgb-linear",Bo="linear",bt="srgb";var Cs=7680;var vu=519,Fp=512,Op=513,Bp=514,Vu=515,zp=516,kp=517,Vp=518,Gp=519,Ll=35044,Ma=35048;var Gu="300 es",ri=2e3,zo=2001;var yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=1234567,Do=Math.PI/180,Lr=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Hu(n,e){return(n%e+e)%e}function F0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function O0(n,e,t){return n!==e?(t-n)/(e-n):0}function Uo(n,e,t){return(1-t)*n+t*e}function B0(n,e,t,i){return Uo(n,e,1-Math.exp(-t*i))}function z0(n,e=1){return e-Math.abs(Hu(n,e*2)-e)}function k0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function V0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function G0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function H0(n,e){return n+Math.random()*(e-n)}function W0(n){return n*(.5-Math.random())}function X0(n){n!==void 0&&(vf=n);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q0(n){return n*Do}function Y0(n){return n*Lr}function Z0(n){return(n&n-1)===0&&n!==0}function j0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function J0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function K0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Le={DEG2RAD:Do,RAD2DEG:Lr,generateUUID:xi,clamp:Ke,euclideanModulo:Hu,mapLinear:F0,inverseLerp:O0,lerp:Uo,damp:B0,pingpong:z0,smoothstep:k0,smootherstep:V0,randInt:G0,randFloat:H0,randFloatSpread:W0,seededRandom:X0,degToRad:q0,radToDeg:Y0,isPowerOfTwo:Z0,ceilPowerOfTwo:j0,floorPowerOfTwo:J0,setQuaternionFromProperEuler:K0,normalize:Mt,denormalize:si},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*x,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let A=Math.sqrt(b),E=Math.atan2(A,m*v);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let _=a*v;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new M,Mf=new ht,Qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],v=s[1],b=s[4],_=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*x+a*v+l*A,r[3]=o*g+a*b+l*E,r[6]=o*m+a*_+l*R,r[1]=c*x+h*v+u*A,r[4]=c*g+h*b+u*E,r[7]=c*m+h*_+u*R,r[2]=d*x+f*v+p*A,r[5]=d*g+f*b+p*E,r[8]=d*m+f*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wh.makeScale(e,t)),this}rotate(e){return this.premultiply(Wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wh=new Qe;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hp(){let n=Dr("canvas");return n.style.display="block",n}var bf={};function Ur(n){n in bf||(bf[n]=!0,console.warn(n))}function Wp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Sf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){let n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?Bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Is]:{primaries:e,whitePoint:i,transfer:Bo,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),n}var dt=$0();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,Dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=Dr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q0=0,Nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xh(s[o].image)):r.push(Xh(s[o]))}else r=Xh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ex=0,qh=new M,fn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=tn,o=bn,a=Rn,l=hi,c=n.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=xi(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qh).x}get height(){return this.source.getSize(qh).y}get depth(){return this.source.getSize(qh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Du;fn.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(f+1)/2,A=(m+1)/2,E=(h+d)/4,R=(u+x)/4,I=(p+g)/4;return b>_&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=R/i):_>A?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=I/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=I/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Ul{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ko=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),$a.subVectors(this.max,bo),ur.subVectors(e.a,bo),dr.subVectors(e.b,bo),fr.subVectors(e.c,bo),Yi.subVectors(dr,ur),Zi.subVectors(fr,dr),ws.subVectors(ur,fr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ws.z,ws.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ws.z,0,-ws.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ws.y,ws.x,0];return!Yh(t,ur,dr,fr,$a)||(t=[1,0,0,0,1,0,0,0,1],!Yh(t,ur,dr,fr,$a))?!1:(Qa.crossVectors(Yi,Zi),t=[Qa.x,Qa.y,Qa.z],Yh(t,ur,dr,fr,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new M,new M,new M,new M,new M,new M,new M,new M],ti=new M,Ka=new jt,ur=new M,dr=new M,fr=new M,Yi=new M,Zi=new M,ws=new M,bo=new M,$a=new M,Qa=new M,Ts=new M;function Yh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tx=new jt,So=new M,Zh=new M,Zn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);let t=So.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(So,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Zh)),this.expandByPoint(So.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pi=new M,jh=new M,el=new M,ji=new M,Jh=new M,tl=new M,Kh=new M,ts=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){jh.copy(e).add(t).multiplyScalar(.5),el.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(jh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(el),a=ji.dot(this.direction),l=-ji.dot(el),c=ji.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jh).addScaledVector(el,d),f}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){Jh.subVectors(t,e),tl.subVectors(i,e),Kh.crossVectors(Jh,tl);let o=this.direction.dot(Kh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let l=a*this.direction.dot(tl.crossVectors(ji,tl));if(l<0)return null;let c=a*this.direction.dot(Jh.cross(ji));if(c<0||l+c>o)return null;let h=-a*ji.dot(Kh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ji.crossVectors(i,Fn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ji.crossVectors(i,Fn)),Ji.normalize(),nl.crossVectors(Fn,Ji),s[0]=Ji.x,s[4]=nl.x,s[8]=Fn.x,s[1]=Ji.y,s[5]=nl.y,s[9]=Fn.y,s[2]=Ji.z,s[6]=nl.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],b=i[7],_=i[11],A=i[15],E=s[0],R=s[4],I=s[8],w=s[12],S=s[1],L=s[5],N=s[9],G=s[13],H=s[2],z=s[6],X=s[10],K=s[14],W=s[3],ee=s[7],ge=s[11],Ee=s[15];return r[0]=o*E+a*S+l*H+c*W,r[4]=o*R+a*L+l*z+c*ee,r[8]=o*I+a*N+l*X+c*ge,r[12]=o*w+a*G+l*K+c*Ee,r[1]=h*E+u*S+d*H+f*W,r[5]=h*R+u*L+d*z+f*ee,r[9]=h*I+u*N+d*X+f*ge,r[13]=h*w+u*G+d*K+f*Ee,r[2]=p*E+x*S+g*H+m*W,r[6]=p*R+x*L+g*z+m*ee,r[10]=p*I+x*N+g*X+m*ge,r[14]=p*w+x*G+g*K+m*Ee,r[3]=v*E+b*S+_*H+A*W,r[7]=v*R+b*L+_*z+A*ee,r[11]=v*I+b*N+_*X+A*ge,r[15]=v*w+b*G+_*K+A*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*m+a*d*m,b=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,_=h*x*c-p*u*c+p*a*f-o*x*f-h*a*m+o*u*m,A=p*u*l-h*x*l-p*a*d+o*x*d+h*a*g-o*u*g,E=t*v+i*b+s*_+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=v*R,e[1]=(x*d*r-u*g*r-x*s*f+i*g*f+u*s*m-i*d*m)*R,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=b*R,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*R,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=_*R,e[9]=(p*u*r-h*x*r-p*i*f+t*x*f+h*i*m-t*u*m)*R,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=A*R,e[13]=(h*x*s-p*u*s+p*i*d-t*x*d-h*i*g+t*u*g)*R,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,v=l*c,b=l*h,_=l*u,A=i.x,E=i.y,R=i.z;return s[0]=(1-(x+m))*A,s[1]=(f+_)*A,s[2]=(p-b)*A,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+b)*R,s[9]=(g-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),a=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let c=1/r,h=1/o,u=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,t.setFromRotationMatrix(ni),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ri)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===zo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pr=new M,ni=new ct,nx=new M(0,0,0),ix=new M(1,1,1),Ji=new M,nl=new M,Fn=new M,Tf=new ct,Ef=new ht,kt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kt.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sx=0,Af=new M,mr=new ht,Ii=new ct,il=new M,wo=new M,rx=new M,ox=new ht,Cf=new M(1,0,0),Rf=new M(0,1,0),Pf=new M(0,0,1),If={type:"added"},ax={type:"removed"},gr={type:"childadded",child:null},$h={type:"childremoved",child:null},Ut=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new kt,i=new ht,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?il.copy(e):il.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(wo,il,this.up):Ii.lookAt(il,wo,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ii),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(If),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(If),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new M(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new M,Li=new M,Qh=new M,Di=new M,xr=new M,yr=new M,Lf=new M,eu=new M,tu=new M,nu=new M,iu=new zt,su=new zt,ru=new zt,Tn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Li.subVectors(i,t),Qh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Li),l=ii.dot(Qh),c=Li.dot(Li),h=Li.dot(Qh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return iu.setScalar(0),su.setScalar(0),ru.setScalar(0),iu.fromBufferAttribute(e,t),su.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(iu,r.x),o.addScaledVector(su,r.y),o.addScaledVector(ru,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Li.subVectors(e,t),ii.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xr.subVectors(s,i),yr.subVectors(r,i),eu.subVectors(e,i);let l=xr.dot(eu),c=yr.dot(eu);if(l<=0&&c<=0)return t.copy(i);tu.subVectors(e,s);let h=xr.dot(tu),u=yr.dot(tu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(xr,o);nu.subVectors(e,r);let f=xr.dot(nu),p=yr.dot(nu);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(yr,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Lf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Lf,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},sl={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Hu(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ou(o,r,e+1/3),this.g=ou(o,r,e),this.b=ou(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=Xp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return dt.workingToColorSpace(cn.copy(this),e),Math.round(Ke(cn.r*255,0,255))*65536+Math.round(Ke(cn.g*255,0,255))*256+Math.round(Ke(cn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=gt){dt.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(sl);let i=Uo(Ki.h,sl.h,t),s=Uo(Ki.s,sl.s,t),r=Uo(Ki.l,sl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ge;Ge.NAMES=Xp;var lx=0,ai=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Rs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Rl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new M,rl=new ae,cx=0,St=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ll,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}};var Vo=class extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Go=class extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}},hx=0,Yn=new ct,au=new Ut,_r=new M,On=new jt,To=new jt,en=new M,st=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Go:Vo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];To.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(On.min,To.min),On.expandByPoint(en),en.addVectors(On.max,To.max),On.expandByPoint(en)):(On.expandByPoint(To.min),On.expandByPoint(To.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),en.add(_r)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new M,l[I]=new M;let c=new M,h=new M,u=new M,d=new ae,f=new ae,p=new ae,x=new M,g=new M;function m(I,w,S){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[I].add(x),a[w].add(x),a[S].add(x),l[I].add(g),l[w].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,w=v.length;I<w;++I){let S=v[I],L=S.start,N=S.count;for(let G=L,H=L+N;G<H;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new M,_=new M,A=new M,E=new M;function R(I){A.fromBufferAttribute(s,I),E.copy(A);let w=a[I];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),_.crossVectors(E,w);let L=_.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,w=v.length;I<w;++I){let S=v[I],L=S.start,N=S.count;for(let G=L,H=L+N;G<H;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Df=new ct,Es=new ts,ol=new Zn,Uf=new M,al=new M,ll=new M,cl=new M,lu=new M,hl=new M,Nf=new M,ul=new M,me=class extends Ut{constructor(e=new st,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(lu.fromBufferAttribute(u,e),o?hl.addScaledVector(lu,h):hl.addScaledVector(lu.sub(t),h))}t.add(hl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(ol.containsPoint(Es.origin)===!1&&(Es.intersectSphere(ol,Uf)===null||Es.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Df.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Df),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,A=b;_<A;_+=3){let E=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);s=dl(this,m,e,i,c,h,u,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=dl(this,o,e,i,c,h,u,v,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,A=b;_<A;_+=3){let E=_,R=_+1,I=_+2;s=dl(this,m,e,i,c,h,u,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,b=g+1,_=g+2;s=dl(this,o,e,i,c,h,u,v,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ux(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;ul.copy(a),ul.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ul);return c<t.near||c>t.far?null:{distance:c,point:ul.clone(),object:n}}function dl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,al),n.getVertexPosition(l,ll),n.getVertexPosition(c,cl);let h=ux(n,e,t,i,al,ll,cl,Nf);if(h){let u=new M;Tn.getBarycoord(Nf,al,ll,cl,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};Tn.getNormal(al,ll,cl,d.normal),h.face=d,h.barycoord=u}return h}var We=class n extends st{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function p(x,g,m,v,b,_,A,E,R,I,w){let S=_/R,L=A/I,N=_/2,G=A/2,H=E/2,z=R+1,X=I+1,K=0,W=0,ee=new M;for(let ge=0;ge<X;ge++){let Ee=ge*L-G;for(let q=0;q<z;q++){let ue=q*S-N;ee[x]=ue*v,ee[g]=Ee*b,ee[m]=H,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(q/R),u.push(1-ge/I),K+=1}}for(let ge=0;ge<I;ge++)for(let Ee=0;Ee<R;Ee++){let q=d+Ee+z*ge,ue=d+Ee+z*(ge+1),Ve=d+(Ee+1)+z*(ge+1),De=d+(Ee+1)+z*ge;l.push(q,ue,De),l.push(ue,Ve,De),W+=6}a.addGroup(f,W,w),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let s in i)e[s]=i[s]}return e}function dx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var qp={clone:Ws,merge:mn},fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ho=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new M,Ff=new ae,Of=new ae,hn=class extends Ho{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Of),t.subVectors(Of,Ff)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vr=-90,Mr=1,Fl=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(vr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new hn(vr,Mr,e,t);r.layers=this.layers,this.add(r);let o=new hn(vr,Mr,e,t);o.layers=this.layers,this.add(o);let a=new hn(vr,Mr,e,t);a.layers=this.layers,this.add(a);let l=new hn(vr,Mr,e,t);l.layers=this.layers,this.add(l);let c=new hn(vr,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Wo=class extends fn{constructor(e=[],t=Gs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ol=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Oi});r.uniforms.tEquirect.value=t;let o=new me(s,r),a=t.minFilter;return t.minFilter===bn&&(t.minFilter=tn),new Fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},dn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Xo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Br=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kt,this.environmentIntensity=1,this.environmentRotation=new kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new M,zr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kr=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,Eo=new M,Sr=new M,wr=new M,Tr=new ae,Ao=new ae,Yp=new ct,fl=new M,Co=new M,pl=new M,Bf=new ae,cu=new ae,zf=new ae,Yo=class extends Ut{constructor(e=new kr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qo(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new zr(i,3,0,!1)),br.setAttribute("uv",new zr(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ml(fl.set(-.5,-.5,0),wr,o,Sr,s,r),ml(Co.set(.5,-.5,0),wr,o,Sr,s,r),ml(pl.set(.5,.5,0),wr,o,Sr,s,r),Bf.set(0,0),cu.set(1,0),zf.set(1,1);let a=e.ray.intersectTriangle(fl,Co,pl,!1,Eo);if(a===null&&(ml(Co.set(-.5,.5,0),wr,o,Sr,s,r),cu.set(0,1),a=e.ray.intersectTriangle(fl,pl,Co,!1,Eo),a===null))return;let l=e.ray.origin.distanceTo(Eo);l<e.near||l>e.far||t.push({distance:l,point:Eo.clone(),uv:Tn.getInterpolation(Eo,fl,Co,pl,Bf,cu,zf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ml(n,e,t,i,s,r){Tr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ao.x=r*Tr.x-s*Tr.y,Ao.y=s*Tr.x+r*Tr.y):Ao.copy(Tr),n.copy(e),n.x+=Ao.x,n.y+=Ao.y,n.applyMatrix4(Yp)}var ci=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends St{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new ct,kf=new ct,gl=[],Vf=new jt,gx=new ct,Ro=new me,Po=new Zn,Zo=class extends me{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Vf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Er),Po.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(i),e.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),kf.multiplyMatrices(i,Er),Ro.matrixWorld=kf,Ro.raycast(e,gl);for(let o=0,a=gl.length;o<a;o++){let l=gl[o];l.instanceId=r,l.object=this,t.push(l)}gl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,xc,ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hu=new M,xx=new M,yx=new Qe,un=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hu.subVectors(i,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||yx.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new Zn,_x=new ae(.5,.5),xl=new M,Gr=class{constructor(e=new un,t=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],b=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,m-p,A-v).normalize(),s[1].setComponents(c+o,f+h,m+p,A+v).normalize(),s[2].setComponents(c+a,f+u,m+x,A+b).normalize(),s[3].setComponents(c-a,f-u,m-x,A-b).normalize(),i)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,m-g,A-_).normalize();else if(s[4].setComponents(c-l,f-d,m-g,A-_).normalize(),t===ri)s[5].setComponents(c+l,f+d,m+g,A+_).normalize();else if(t===zo)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=_x.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xl.x=s.normal.x>0?e.max.x:e.min.x,xl.y=s.normal.y>0?e.max.y:e.min.y,xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jn=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new M,zl=new M,Gf=new ct,Io=new ts,yl=new Zn,uu=new M,Hf=new M,An=class extends Ut{constructor(e=new st,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bl.fromBufferAttribute(t,s-1),zl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bl.distanceTo(zl);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),yl.radius+=r,e.ray.intersectsSphere(yl)===!1)return;Gf.copy(s).invert(),Io.copy(e.ray).applyMatrix4(Gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),v=h.getX(x+1),b=_l(this,e,Io,l,m,v,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=_l(this,e,Io,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=_l(this,e,Io,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=_l(this,e,Io,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _l(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Bl.fromBufferAttribute(a,s),zl.fromBufferAttribute(a,r),t.distanceSqToSegment(Bl,zl,uu,Hf)>i)return;uu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(uu);if(!(c<e.near||c>e.far))return{distance:c,point:Hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Wf=new M,Xf=new M,Ls=class extends An{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wf.fromBufferAttribute(t,s),Xf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wf.distanceTo(Xf);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jo=class extends An{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Ni=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jo=class extends fn{constructor(e,t,i=as,s,r,o,a=En,l=En,c,h=Ir,u=1){if(h!==Ir&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ko=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ns=class n extends st{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,x=s+1,g=new M,m=new M;for(let v=0;v<=p;v++){let b=0,_=0,A=0,E=0;if(v<=i){let w=v/i,S=w*Math.PI/2;_=-h-e*Math.cos(S),A=e*Math.sin(S),E=-e*Math.cos(S),b=w*u}else if(v<=i+r){let w=(v-i)/r;_=-h+w*t,A=e,E=0,b=u+w*d}else{let w=(v-i-r)/i,S=w*Math.PI/2;_=h+e*Math.sin(S),A=e*Math.cos(S),E=e*Math.sin(S),b=u+d+w*u}let R=Math.max(0,Math.min(1,b/f)),I=0;v===0?I=.5/s:v===p&&(I=-.5/s);for(let w=0;w<=s;w++){let S=w/s,L=S*Math.PI*2,N=Math.sin(L),G=Math.cos(L);m.x=-A*G,m.y=_,m.z=A*N,a.push(m.x,m.y,m.z),g.set(-A*G,E,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+I,R)}if(v>0){let w=(v-1)*x;for(let S=0;S<s;S++){let L=w+S,N=w+S+1,G=v*x+S,H=v*x+S+1;o.push(L,N,G),o.push(N,H,G)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pn=class n extends st{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class n extends st{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function v(){let _=new M,A=new M,E=0,R=(t-e)/i;for(let I=0;I<=r;I++){let w=[],S=I/r,L=S*(t-e)+e;for(let N=0;N<=s;N++){let G=N/s,H=G*l+a,z=Math.sin(H),X=Math.cos(H);A.x=L*z,A.y=-S*i+g,A.z=L*X,u.push(A.x,A.y,A.z),_.set(z,R,X).normalize(),d.push(_.x,_.y,_.z),f.push(G,1-S),w.push(p++)}x.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let S=x[w][I],L=x[w+1][I],N=x[w+1][I+1],G=x[w][I+1];(e>0||w!==0)&&(h.push(S,L,G),E+=3),(t>0||w!==r-1)&&(h.push(L,N,G),E+=3)}c.addGroup(m,E,0),m+=E}function b(_){let A=p,E=new ae,R=new M,I=0,w=_===!0?e:t,S=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;let L=p;for(let N=0;N<=s;N++){let H=N/s*l+a,z=Math.cos(H),X=Math.sin(H);R.x=w*X,R.y=g*S,R.z=w*z,u.push(R.x,R.y,R.z),d.push(0,S,0),E.x=z*.5+.5,E.y=X*.5*S+.5,f.push(E.x,E.y),p++}for(let N=0;N<s;N++){let G=A+N,H=L+N;_===!0?h.push(H,H+1,G):h.push(H+1,H,G),I+=3}c.addGroup(m,I,_===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ds=class n extends wt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class n extends st{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new M,_=new M,A=new M;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],_),f(t[E+2],A),l(b,_,A,v)}function l(v,b,_,A){let E=A+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let w=v.clone().lerp(_,I/E),S=b.clone().lerp(_,I/E),L=E-I;for(let N=0;N<=L;N++)N===0&&I===E?R[I][N]=w:R[I][N]=w.clone().lerp(S,N/L)}for(let I=0;I<E;I++)for(let w=0;w<2*(E-I)-1;w++){let S=Math.floor(w/2);w%2===0?(d(R[I][S+1]),d(R[I+1][S]),d(R[I][S])):(d(R[I][S+1]),d(R[I+1][S+1]),d(R[I+1][S]))}}function c(v){let b=new M;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let v=new M;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=g(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;o.push(_,1-A)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],_=o[v+2],A=o[v+4],E=Math.max(b,_,A),R=Math.min(b,_,A);E>.9&&R<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){let v=new M,b=new M,_=new M,A=new M,E=new ae,R=new ae,I=new ae;for(let w=0,S=0;w<r.length;w+=9,S+=6){v.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),A.copy(v).add(b).add(_).divideScalar(3);let L=g(A);x(E,S+0,v,L),x(R,S+2,b,L),x(I,S+4,_,L)}}function x(v,b,_,A){A<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kl=class extends Wr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var vl=new M,du=new qu,fu=new qu,pu=new qu,Vl=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vl.subVectors(s[0],s[1]).add(s[0]),c=vl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),du.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),fu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),pu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(du.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),pu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(du.calc(l),fu.calc(l),pu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function vx(n,e){let t=1-n;return t*t*e}function Mx(n,e){return 2*(1-n)*n*e}function bx(n,e){return n*n*e}function No(n,e,t,i){return vx(n,e)+Mx(n,t)+bx(n,i)}function Sx(n,e){let t=1-n;return t*t*t*e}function wx(n,e){let t=1-n;return 3*t*t*n*e}function Tx(n,e){return 3*(1-n)*n*n*e}function Ex(n,e){return n*n*n*e}function Fo(n,e,t,i,s){return Sx(n,e)+wx(n,t)+Tx(n,i)+Ex(n,s)}var $o=class extends Bn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fo(e,s.x,r.x,o.x,a.x),Fo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends Bn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fo(e,s.x,r.x,o.x,a.x),Fo(e,s.y,r.y,o.y,a.y),Fo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends Bn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends Bn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Bn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends Bn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y),No(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(qf(a,l.x,c.x,h.x,u.x),qf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Mu=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Vl,CubicBezierCurve:$o,CubicBezierCurve3:Gl,EllipseCurve:Wr,LineCurve:Qo,LineCurve3:Hl,QuadraticBezierCurve:ea,QuadraticBezierCurve3:Wl,SplineCurve:ta}),Xl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Mu[s.type]().fromJSON(s))}return this}},na=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Qo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ea(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new $o(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ta(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fi=class extends na{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new na().fromJSON(s))}return this}};function Ax(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Zp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Lx(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ia(r,o,t,a,l,c,0),o}function Zp(n,e,t,i,s){let r;if(s===Hx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Yf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Yf(o/i|0,n[o],n[o+1],r);return r&&Xr(r,r.next)&&(ra(r),r=r.next),r}function Us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Xr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ia(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ox(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Rx(n,i,s,r):Cx(n)){e.push(l.i,n.i,c.i),ra(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Px(Us(n),e),ia(n,e,t,i,s,r,2)):o===2&&Ix(n,e,t,i,s,r):ia(Us(n),e,t,i,s,r,1);break}}}function Cx(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Lo(s,a,r,l,o,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Rx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),m=bu(f,p,e,t,i),v=bu(x,g,e,t,i),b=n.prevZ,_=n.nextZ;for(;b&&b.z>=m&&_&&_.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Lo(a,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Lo(a,h,l,u,c,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Lo(a,h,l,u,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Lo(a,h,l,u,c,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Px(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Xr(i,s)&&Jp(i,t,t.next,s)&&sa(i,s)&&sa(s,i)&&(e.push(i.i,t.i,s.i),ra(t),ra(t.next),t=n=s),t=t.next}while(t!==n);return Us(t)}function Ix(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kx(o,a)){let l=Kp(o,a);o=Us(o,o.next),l=Us(l,l.next),ia(o,e,t,i,s,r,0),ia(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Lx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Zp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(zx(c))}s.sort(Dx);for(let r=0;r<s.length;r++)t=Ux(s[r],t);return t}function Dx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ux(n,e){let t=Nx(n,e);if(!t)return e;let i=Kp(t,n);return Us(i,i.next),Us(t,t.next)}function Nx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Xr(n,t))return t;do{if(Xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&jp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);sa(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Fx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Fx(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function Ox(n,e,t,i){let s=n;do s.z===0&&(s.z=bu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bx(s)}function Bx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function bu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jp(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Lo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&jp(n,e,t,i,s,r,o,a)}function kx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vx(n,e)&&(sa(n,e)&&sa(e,n)&&Gx(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Xr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xr(n,e){return n.x===e.x&&n.y===e.y}function Jp(n,e,t,i){let s=bl(Bt(n,e,t)),r=bl(Bt(n,e,i)),o=bl(Bt(t,i,n)),a=bl(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ml(n,t,e)||r===0&&Ml(n,i,e)||o===0&&Ml(t,n,i)||a===0&&Ml(t,e,i))}function Ml(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bl(n){return n>0?1:n<0?-1:0}function Vx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function sa(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function Gx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kp(n,e){let t=Su(n.i,n.x,n.y),i=Su(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Yf(n,e,t,i){let s=Su(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ra(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Su(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var wu=class{static triangulate(e,t,i=2){return Ax(e,t,i)}},gi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Zf(e),jf(i,e);let o=e.length;t.forEach(Zf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,jf(i,t[l]);let a=wu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function jf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ns=class n extends st{constructor(e=new Fi([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Wx,b,_=!1,A,E,R,I;m&&(b=m.getSpacedPoints(h),_=!0,d=!1,A=m.computeFrenetFrames(h,!1),E=new M,R=new M,I=new M),d||(g=0,f=0,p=0,x=0);let w=a.extractPoints(c),S=w.shape,L=w.holes;if(!gi.isClockWise(S)){S=S.reverse();for(let he=0,oe=L.length;he<oe;he++){let te=L[he];gi.isClockWise(te)&&(L[he]=te.reverse())}}function G(he){let te=10000000000000001e-36,ne=he[0];for(let Te=1;Te<=he.length;Te++){let ye=Te%he.length,Ae=he[ye],$e=Ae.x-ne.x,je=Ae.y-ne.y,C=$e*$e+je*je,y=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ne.x),Math.abs(ne.y)),P=te*y*y;if(C<=P){he.splice(ye,1),Te--;continue}ne=Ae}}G(S),L.forEach(G);let H=L.length,z=S;for(let he=0;he<H;he++){let oe=L[he];S=S.concat(oe)}function X(he,oe,te){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(oe,te)}let K=S.length;function W(he,oe,te){let ne,Te,ye,Ae=he.x-oe.x,$e=he.y-oe.y,je=te.x-he.x,C=te.y-he.y,y=Ae*Ae+$e*$e,P=Ae*C-$e*je;if(Math.abs(P)>Number.EPSILON){let O=Math.sqrt(y),j=Math.sqrt(je*je+C*C),V=oe.x-$e/O,xe=oe.y+Ae/O,ie=te.x-C/j,pe=te.y+je/j,de=((ie-V)*C-(pe-xe)*je)/(Ae*C-$e*je);ne=V+Ae*de-he.x,Te=xe+$e*de-he.y;let J=ne*ne+Te*Te;if(J<=2)return new ae(ne,Te);ye=Math.sqrt(J/2)}else{let O=!1;Ae>Number.EPSILON?je>Number.EPSILON&&(O=!0):Ae<-Number.EPSILON?je<-Number.EPSILON&&(O=!0):Math.sign($e)===Math.sign(C)&&(O=!0),O?(ne=-$e,Te=Ae,ye=Math.sqrt(y)):(ne=Ae,Te=$e,ye=Math.sqrt(y/2))}return new ae(ne/ye,Te/ye)}let ee=[];for(let he=0,oe=z.length,te=oe-1,ne=he+1;he<oe;he++,te++,ne++)te===oe&&(te=0),ne===oe&&(ne=0),ee[he]=W(z[he],z[te],z[ne]);let ge=[],Ee,q=ee.concat();for(let he=0,oe=H;he<oe;he++){let te=L[he];Ee=[];for(let ne=0,Te=te.length,ye=Te-1,Ae=ne+1;ne<Te;ne++,ye++,Ae++)ye===Te&&(ye=0),Ae===Te&&(Ae=0),Ee[ne]=W(te[ne],te[ye],te[Ae]);ge.push(Ee),q=q.concat(Ee)}let ue;if(g===0)ue=gi.triangulateShape(z,L);else{let he=[],oe=[];for(let te=0;te<g;te++){let ne=te/g,Te=f*Math.cos(ne*Math.PI/2),ye=p*Math.sin(ne*Math.PI/2)+x;for(let Ae=0,$e=z.length;Ae<$e;Ae++){let je=X(z[Ae],ee[Ae],ye);fe(je.x,je.y,-Te),ne===0&&he.push(je)}for(let Ae=0,$e=H;Ae<$e;Ae++){let je=L[Ae];Ee=ge[Ae];let C=[];for(let y=0,P=je.length;y<P;y++){let O=X(je[y],Ee[y],ye);fe(O.x,O.y,-Te),ne===0&&C.push(O)}ne===0&&oe.push(C)}}ue=gi.triangulateShape(he,oe)}let Ve=ue.length,De=p+x;for(let he=0;he<K;he++){let oe=d?X(S[he],q[he],De):S[he];_?(R.copy(A.normals[0]).multiplyScalar(oe.x),E.copy(A.binormals[0]).multiplyScalar(oe.y),I.copy(b[0]).add(R).add(E),fe(I.x,I.y,I.z)):fe(oe.x,oe.y,0)}for(let he=1;he<=h;he++)for(let oe=0;oe<K;oe++){let te=d?X(S[oe],q[oe],De):S[oe];_?(R.copy(A.normals[he]).multiplyScalar(te.x),E.copy(A.binormals[he]).multiplyScalar(te.y),I.copy(b[he]).add(R).add(E),fe(I.x,I.y,I.z)):fe(te.x,te.y,u/h*he)}for(let he=g-1;he>=0;he--){let oe=he/g,te=f*Math.cos(oe*Math.PI/2),ne=p*Math.sin(oe*Math.PI/2)+x;for(let Te=0,ye=z.length;Te<ye;Te++){let Ae=X(z[Te],ee[Te],ne);fe(Ae.x,Ae.y,u+te)}for(let Te=0,ye=L.length;Te<ye;Te++){let Ae=L[Te];Ee=ge[Te];for(let $e=0,je=Ae.length;$e<je;$e++){let C=X(Ae[$e],Ee[$e],ne);_?fe(C.x,C.y+b[h-1].y,b[h-1].x+te):fe(C.x,C.y,u+te)}}}$(),se();function $(){let he=s.length/3;if(d){let oe=0,te=K*oe;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[2]+te,Te[1]+te,Te[0]+te)}oe=h+g*2,te=K*oe;for(let ne=0;ne<Ve;ne++){let Te=ue[ne];ce(Te[0]+te,Te[1]+te,Te[2]+te)}}else{for(let oe=0;oe<Ve;oe++){let te=ue[oe];ce(te[2],te[1],te[0])}for(let oe=0;oe<Ve;oe++){let te=ue[oe];ce(te[0]+K*h,te[1]+K*h,te[2]+K*h)}}i.addGroup(he,s.length/3-he,0)}function se(){let he=s.length/3,oe=0;Q(z,oe),oe+=z.length;for(let te=0,ne=L.length;te<ne;te++){let Te=L[te];Q(Te,oe),oe+=Te.length}i.addGroup(he,s.length/3-he,1)}function Q(he,oe){let te=he.length;for(;--te>=0;){let ne=te,Te=te-1;Te<0&&(Te=he.length-1);for(let ye=0,Ae=h+g*2;ye<Ae;ye++){let $e=K*ye,je=K*(ye+1),C=oe+ne+$e,y=oe+Te+$e,P=oe+Te+je,O=oe+ne+je;ke(C,y,P,O)}}}function fe(he,oe,te){l.push(he),l.push(oe),l.push(te)}function ce(he,oe,te){ut(he),ut(oe),ut(te);let ne=s.length/3,Te=v.generateTopUV(i,s,ne-3,ne-2,ne-1);D(Te[0]),D(Te[1]),D(Te[2])}function ke(he,oe,te,ne){ut(he),ut(oe),ut(ne),ut(oe),ut(te),ut(ne);let Te=s.length/3,ye=v.generateSideWallUV(i,s,Te-6,Te-3,Te-2,Te-1);D(ye[0]),D(ye[1]),D(ye[3]),D(ye[1]),D(ye[2]),D(ye[3])}function ut(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function D(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Xx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mu[s.type]().fromJSON(s)),new n(i,e.options)}},Wx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(d,1-p),new ae(x,1-m)]:[new ae(a,1-l),new ae(h,1-u),new ae(f,1-p),new ae(g,1-m)]}};function Xx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jn=class n extends Hr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},oa=class n extends st{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ke(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new M,d=new ae,f=new M,p=new M,x=new M,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=t;v++){let b=i+v*h*s,_=Math.sin(b),A=Math.cos(b);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*A,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);let R=l[3*E+0]*_,I=l[3*E+1],w=l[3*E+0]*A;c.push(R,I,w)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let _=b+v*e.length,A=_,E=_+e.length,R=_+e.length+1,I=_+1;r.push(A,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Kn=class n extends Hr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},on=class n extends st{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-o;for(let b=0;b<c;b++){let _=b*u-r;p.push(_,-v,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,_=v+c*(m+1),A=v+1+c*(m+1),E=v+1+c*m;f.push(b,_,E),f.push(_,A,E)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},is=class n extends st{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new M,p=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,b=v,_=v+i+1,A=v+i+2,E=v+1;a.push(b,_,E),a.push(_,A,E)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},aa=class n extends st{constructor(e=new Fi([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];gi.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=gi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],b=v[0]+u,_=v[1]+u,A=v[2]+u;i.push(b,_,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function qx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Cn=class n extends st{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new M,d=new M,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],b=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+b*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+_,1-b),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let b=h[m][v+1],_=h[m][v],A=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(b,_,E),(m!==i-1||l<Math.PI)&&f.push(_,A,E)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Fs=class n extends Hr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mn=class n extends st{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new M,u=new M,d=new M;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,v=(s+1)*f+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var la=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),v=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),Jf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Jf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Jf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var nn=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zn=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kt,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ql=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yl=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Yx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends Os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yu:r=e,a=2*t-i;break;case _u:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:o=e,l=2*i-t;break;case _u:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+v*o[c+A]+b*o[l+A]+_*o[u+A];return r}},jl=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Jl=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sl(t,this.TimeBufferType),this.values=Sl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sl(e.times,Array),values:Sl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case Il:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Yx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Il;var ss=class extends kn{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Oo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};Kl.prototype.ValueTypeName="color";var $l=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};$l.prototype.ValueTypeName="number";var Ql=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ht.slerpFlat(r,0,o,c-a,o,c,l);return r}},ca=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends kn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Oo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};ec.prototype.ValueTypeName="vector";var Al={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},tc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},$p=new tc,qr=class{constructor(e){this.manager=e!==void 0?e:$p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=new WeakMap,nc=class extends qr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Al.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ar.get(o);u===void 0&&(u=[],Ar.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Dr("img");function l(){h(),t&&t(this);let u=Ar.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Al.remove(`image:${e}`);let d=Ar.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Al.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var vi=class extends qr{constructor(e){super(e)}load(e,t,i,s){let r=new fn,o=new nc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ha=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bs=class extends ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mu=new ct,Kf=new M,$f=new M,Tu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ua=class extends Ho{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eu=class extends Tu{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ic=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yu="\\[\\]\\.:\\/",Zx=new RegExp("["+Yu+"]","g"),Zu="[^"+Yu+"]",jx="[^"+Yu.replace("\\.","")+"]",Jx=/((?:WC+[\/:])*)/.source.replace("WC",Zu),Kx=/(WCOD+)?/.source.replace("WCOD",jx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),ey=new RegExp("^"+Jx+Kx+$x+Qx+"$"),ty=["material","materials","bones","map"],Au=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(e){let t=ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Au;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);var Qf=new ct,ks=class{constructor(e,t,i=0,s=1/0){this.ray=new ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qf),this}intersectObject(e,t=!0,i=[]){return Cu(e,this,i,t),i.sort(ep),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Cu(e[s],this,i,t);return i.sort(ep),i}};function ep(n,e){return n.distance-e.distance}function Cu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Cu(r[o],e,t,!0)}}var Yr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tp=new M,wl=new M,Cr=new M,Rr=new M,gu=new M,ny=new M,iy=new M,da=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tp.subVectors(e,this.start),wl.subVectors(this.end,this.start);let i=wl.dot(wl),r=wl.dot(tp)/i;return t&&(r=Ke(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=ny,i=iy){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Cr.subVectors(c,a),Rr.subVectors(h,l),gu.subVectors(a,l);let u=Cr.dot(Cr),d=Rr.dot(Rr),f=Rr.dot(gu);if(u<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/d,o=Ke(o,0,1);else{let p=Cr.dot(gu);if(d<=s)o=0,r=Ke(-p/u,0,1);else{let x=Cr.dot(Rr),g=u*d-x*x;g!==0?r=Ke((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=Ke(-p/u,0,1)):o>1&&(o=1,r=Ke((x-p)/u,0,1))}}return t.copy(a).add(Cr.multiplyScalar(r)),i.copy(l).add(Rr.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var fa=class extends Ls{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ge(i),s=new Ge(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new st;h.setAttribute("position",new Ne(l,3)),h.setAttribute("color",new Ne(c,3));let u=new jn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Tl=new jt,Zr=class extends Ls{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new st;r.setIndex(new St(i,1)),r.setAttribute("position",new St(s,3)),super(r,new jn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Tl.setFromObject(this.object),Tl.isEmpty())return;let e=Tl.min,t=Tl.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Vs=class extends yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ju(n,e,t,i){let s=sy(i);switch(t){case Bu:return n*e;case xc:return n*e/s.components*s.byteLength;case yc:return n*e/s.components*s.byteLength;case ku:return n*e*2/s.components*s.byteLength;case _c:return n*e*2/s.components*s.byteLength;case zu:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case vc:return n*e*4/s.components*s.byteLength;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Mc:case Sc:return Math.max(n,8)*Math.max(e,8)/2;case Tc:case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Hc:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sy(n){switch(n){case hi:case Uu:return{byteLength:1,components:1};case Jr:case Nu:case Kr:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case as:case pc:case ui:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cy(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
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
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
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
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,wy=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dy=`#define PI 3.141592653589793
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
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ny=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
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
#endif`,l_=`struct PhysicalMaterial {
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
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
}`,gv=`#if DEPTH_PACKING == 3200
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
}`,xv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,wv=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,Av=`#define MATCAP
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
}`,Cv=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,Pv=`#define NORMAL
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
}`,Iv=`#define PHONG
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
}`,Lv=`#define PHONG
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
}`,Dv=`#define STANDARD
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
}`,Uv=`#define STANDARD
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
}`,Nv=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Ov=`uniform float size;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,kv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:hy,alphahash_pars_fragment:uy,alphamap_fragment:dy,alphamap_pars_fragment:fy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:xy,batching_pars_vertex:yy,batching_vertex:_y,begin_vertex:vy,beginnormal_vertex:My,bsdfs:by,iridescence_fragment:Sy,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Cy,color_fragment:Ry,color_pars_fragment:Py,color_pars_vertex:Iy,color_vertex:Ly,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Fy,displacementmap_vertex:Oy,emissivemap_fragment:By,emissivemap_pars_fragment:zy,colorspace_fragment:ky,colorspace_pars_fragment:Vy,envmap_fragment:Gy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:n_,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Zy,fog_fragment:jy,fog_pars_fragment:Jy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:o_,lights_physical_fragment:a_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:y_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:M_,morphinstance_vertex:b_,morphcolor_vertex:S_,morphnormal_vertex:w_,morphtarget_pars_vertex:T_,morphtarget_vertex:E_,normal_fragment_begin:A_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:F_,opaque_fragment:O_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:k_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:j_,skinning_pars_vertex:J_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:Q_,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:rv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:lv,background_vert:cv,background_frag:hv,backgroundCube_vert:uv,backgroundCube_frag:dv,cube_vert:fv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distanceRGBA_vert:xv,distanceRGBA_frag:yv,equirect_vert:_v,equirect_frag:vv,linedashed_vert:Mv,linedashed_frag:bv,meshbasic_vert:Sv,meshbasic_frag:wv,meshlambert_vert:Tv,meshlambert_frag:Ev,meshmatcap_vert:Av,meshmatcap_frag:Cv,meshnormal_vert:Rv,meshnormal_frag:Pv,meshphong_vert:Iv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Uv,meshtoon_vert:Nv,meshtoon_frag:Fv,points_vert:Ov,points_frag:Bv,shadow_vert:zv,shadow_frag:kv,sprite_vert:Vv,sprite_frag:Gv},Re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},bi={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:mn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Jc={r:0,b:0,g:0},Xs=new kt,Hv=new ct;function Wv(n,e,t,i,s,r,o){let a=new Ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,A=p(b);A===null?m(a,l):A&&A.isColor&&(m(A,1),_=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,_){let A=p(_);A&&(A.isCubeTexture||A.mapping===ma)?(h===void 0&&(h=new me(new We(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ws(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xs.copy(_.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Xs)),h.material.toneMapped=dt.getTransfer(A.colorSpace)!==bt,(u!==A||d!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new me(new on(2,2),new li({name:"BackgroundMaterial",uniforms:Ws(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,_){b.getRGB(Jc,Xu(n)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g,dispose:v}}function Xv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,L,N,G,H){let z=!1,X=u(G,N,L);r!==X&&(r=X,c(r.object)),z=f(S,G,N,H),z&&p(S,G,N,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(S,L,N,G),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,L,N){let G=N.wireframe===!0,H=i[S.id];H===void 0&&(H={},i[S.id]=H);let z=H[L.id];z===void 0&&(z={},H[L.id]=z);let X=z[G];return X===void 0&&(X=d(l()),z[G]=X),X}function d(S){let L=[],N=[],G=[];for(let H=0;H<t;H++)L[H]=0,N[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,L,N,G){let H=r.attributes,z=L.attributes,X=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let ge=H[W],Ee=z[W];if(Ee===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function p(S,L,N,G){let H={},z=L.attributes,X=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let ge=z[W];ge===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));let Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),H[W]=Ee,X++}r.attributes=H,r.attributesNum=X,r.index=G}function x(){let S=r.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function g(S){m(S,0)}function m(S,L){let N=r.newAttributes,G=r.enabledAttributes,H=r.attributeDivisors;N[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),H[S]!==L&&(n.vertexAttribDivisor(S,L),H[S]=L)}function v(){let S=r.newAttributes,L=r.enabledAttributes;for(let N=0,G=L.length;N<G;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function b(S,L,N,G,H,z,X){X===!0?n.vertexAttribIPointer(S,L,N,H,z):n.vertexAttribPointer(S,L,N,G,H,z)}function _(S,L,N,G){x();let H=G.attributes,z=N.getAttributes(),X=L.defaultAttributeValues;for(let K in z){let W=z[K];if(W.location>=0){let ee=H[K];if(ee===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){let ge=ee.normalized,Ee=ee.itemSize,q=e.get(ee);if(q===void 0)continue;let ue=q.buffer,Ve=q.type,De=q.bytesPerElement,$=Ve===n.INT||Ve===n.UNSIGNED_INT||ee.gpuType===pc;if(ee.isInterleavedBufferAttribute){let se=ee.data,Q=se.stride,fe=ee.offset;if(se.isInstancedInterleavedBuffer){for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce,se.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let ce=0;ce<W.locationSize;ce++)b(W.location+ce,Ee/W.locationSize,Ve,ge,Q*De,(fe+Ee/W.locationSize*ce)*De,$)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)m(W.location+se,ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<W.locationSize;se++)g(W.location+se);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let se=0;se<W.locationSize;se++)b(W.location+se,Ee/W.locationSize,Ve,ge,Ee*De,Ee/W.locationSize*se*De,$)}}else if(X!==void 0){let ge=X[K];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(W.location,ge);break;case 3:n.vertexAttrib3fv(W.location,ge);break;case 4:n.vertexAttrib4fv(W.location,ge);break;default:n.vertexAttrib1fv(W.location,ge)}}}}v()}function A(){I();for(let S in i){let L=i[S];for(let N in L){let G=L[N];for(let H in G)h(G[H].object),delete G[H];delete L[N]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let L=i[S.id];for(let N in L){let G=L[N];for(let H in G)h(G[H].object),delete G[H];delete L[N]}delete i[S.id]}function R(S){for(let L in i){let N=i[L];if(N[S.id]===void 0)continue;let G=N[S.id];for(let H in G)h(G[H].object),delete G[H];delete N[S.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function qv(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ui&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function Zv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new un,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,b=v*4,_=m.clippingState||null;l.value=_,_=h(p,d,b,f);for(let A=0;A!==b;++A)_[A]=t[A];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function jv(n){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=Gs:a===dc&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jr||a===dc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ol(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var to=4,Qp=[.125,.215,.35,.446,.526,.582],Zs=20,Ju=new ua,em=new Ge,Ku=null,$u=0,Qu=0,ed=!1,Ys=(1+Math.sqrt(5))/2,eo=1/Ys,tm=[new M(-Ys,eo,0),new M(Ys,eo,0),new M(-eo,0,Ys),new M(eo,0,Ys),new M(0,Ys,-eo),new M(0,Ys,eo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Jv=new M,io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Jv}=r;Ku=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,$u,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,Kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Kr,format:Rn,colorSpace:Is,depthBuffer:!1},s=nm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(r)),this._blurMaterial=$v(r,e,t)}return s}_compileMaterial(e){let t=new me(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(em),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Vt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new me(new We,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(em),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;Kc(s,_*A,b>2?A:0,A,A),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Gs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Kc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ju)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tm[(s-r-1)%tm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Zs;g>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zs}`);let m=[],v=0;for(let R=0;R<Zs;++R){let I=R/x,w=Math.exp(-I*I/2);m.push(w),R===0?v+=w:R<g&&(v+=2*w)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-i;let _=this._sizeLods[s],A=3*_*(s>b-to?s-b+to:0),E=4*(this._cubeSize-_);Kc(t,A,E,3*_,2*_),l.setRenderTarget(t),l.render(u,Ju)}};function Kv(n){let e=[],t=[],i=[],s=n,r=n-to+1+Qp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-to?l=Qp[o-n+to-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),b=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,I=E>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(w,x*p*E),b.set(d,g*p*E);let S=[E,E,E,E,E,E];_.set(S,m*p*E)}let A=new st;A.setAttribute("position",new St(v,x)),A.setAttribute("uv",new St(b,g)),A.setAttribute("faceIndex",new St(_,m)),e.push(A),s>to&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nm(n,e,t){let i=new _i(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $v(n,e,t){let i=new Float32Array(Zs),s=new M(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function im(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function sm(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hd(){return`

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
	`}function Qv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===jr||l===dc,h=l===Gs||l===Hs;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new io(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new io(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tM(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let b=0,_=v.length;b<_;b+=3){let A=v[b+0],E=v[b+1],R=v[b+2];d.push(A,E,E,R,R,A)}}else if(p!==void 0){let v=p.array;x=p.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let A=b+0,E=b+1,R=b+2;d.push(A,E,E,R,R,A)}}else return;let g=new(Wu(d)?Go:Vo)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sM(n,e,t){let i=new WeakMap,s=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*A*4*u),R=new ko(E,_,A,u);R.type=ui,R.needsUpdate=!0;let I=b*4;for(let S=0;S<u;S++){let L=g[S],N=m[S],G=v[S],H=_*A*4*S;for(let z=0;z<L.count;z++){let X=z*I;f===!0&&(s.fromBufferAttribute(L,z),E[H+X+0]=s.x,E[H+X+1]=s.y,E[H+X+2]=s.z,E[H+X+3]=0),p===!0&&(s.fromBufferAttribute(N,z),E[H+X+4]=s.x,E[H+X+5]=s.y,E[H+X+6]=s.z,E[H+X+7]=0),x===!0&&(s.fromBufferAttribute(G,z),E[H+X+8]=s.x,E[H+X+9]=s.y,E[H+X+10]=s.z,E[H+X+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ae(_,A)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function rM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Sm=new fn,rm=new Jo(1,1),wm=new ko,Tm=new Nl,Em=new Wo,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),hm=new Float32Array(4);function so(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=om[s];if(r===void 0&&(r=new Float32Array(s),om[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eh(n,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function hM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;hm.set(i),n.uniformMatrix2fv(this.addr,!1,hm),Kt(t,i)}}function uM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;cm.set(i),n.uniformMatrix3fv(this.addr,!1,cm),Kt(t,i)}}function dM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;lm.set(i),n.uniformMatrix4fv(this.addr,!1,lm),Kt(t,i)}}function fM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function xM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function MM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rm.compareFunction=Vu,r=rm):r=Sm,t.setTexture2D(e||r,s)}function bM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tm,s)}function SM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Em,s)}function wM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wm,s)}function TM(n){switch(n){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return yM;case 36295:return _M;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return wM}}function EM(n,e){n.uniform1fv(this.addr,e)}function AM(n,e){let t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function CM(n,e){let t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function RM(n,e){let t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function PM(n,e){let t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IM(n,e){let t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LM(n,e){let t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DM(n,e){n.uniform1iv(this.addr,e)}function UM(n,e){n.uniform2iv(this.addr,e)}function NM(n,e){n.uniform3iv(this.addr,e)}function FM(n,e){n.uniform4iv(this.addr,e)}function OM(n,e){n.uniform1uiv(this.addr,e)}function BM(n,e){n.uniform2uiv(this.addr,e)}function zM(n,e){n.uniform3uiv(this.addr,e)}function kM(n,e){n.uniform4uiv(this.addr,e)}function VM(n,e,t){let i=this.cache,s=e.length,r=eh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sm,r[o])}function GM(n,e,t){let i=this.cache,s=e.length,r=eh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tm,r[o])}function HM(n,e,t){let i=this.cache,s=e.length,r=eh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Em,r[o])}function WM(n,e,t){let i=this.cache,s=e.length,r=eh(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wm,r[o])}function XM(n){switch(n){case 5126:return EM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return WM}}var nd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TM(t.type)}},id=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}},sd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},td=/(\w+)(\])?(\[|\.)?/g;function um(n,e){n.seq.push(e),n.map[e.id]=e}function qM(n,e,t){let i=n.name,s=i.length;for(td.lastIndex=0;;){let r=td.exec(i),o=td.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){um(t,c===void 0?new nd(a,n,e):new id(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new sd(a),um(t,u)),t=u}}}var no=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);qM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function dm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var YM=37297,ZM=0;function jM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var fm=new Qe;function JM(n){dt._getMatrix(fm,dt.workingColorSpace,n);let e=`mat3( ${fm.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Bo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),a)}else return r}function KM(n,e){let t=JM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $M(n,e){let t;switch(e){case Tp:t="Linear";break;case Ep:t="Reinhard";break;case Ap:t="Cineon";break;case Cp:t="ACESFilmic";break;case Pp:t="AgX";break;case Ip:t="Neutral";break;case Rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new M;function QM(){dt.getLuminanceCoefficients($c);let n=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function tb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ba(n){return n!==""}function mm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(n){return n.replace(ib,rb)}var sb=new Map;function rb(n,e){let t=rt[e];if(t===void 0){let i=sb.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(t)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(n){return n.replace(ob,ab)}function ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ym(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function lb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Hs:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function ub(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Sp:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function db(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lb(t),c=cb(t),h=hb(t),u=ub(t),d=db(t),f=eb(t),p=tb(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ba).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ba).join(`
`),m.length>0&&(m+=`
`)):(g=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),m=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?$M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,KM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),o=rd(o),o=mm(o,t),o=gm(o,t),a=rd(a),a=mm(a,t),a=gm(a,t),o=xm(o),a=xm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+g+o,_=v+m+a,A=dm(s,s.VERTEX_SHADER,b),E=dm(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(E)||"",z=N.trim(),X=G.trim(),K=H.trim(),W=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,E);else{let ge=pm(s,A,"vertex"),Ee=pm(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ge+`
`+Ee)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(X===""||K==="")&&(ee=!1);ee&&(L.diagnostics={runnable:W,programLog:z,vertexShader:{log:X,prefix:g},fragmentShader:{log:K,prefix:m}})}s.deleteShader(A),s.deleteShader(E),I=new no(s,x),w=nb(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,YM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var pb=0,od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ad(e),t.set(e,i)),i}},ad=class{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}};function mb(n,e,t,i,s,r,o){let a=new Fr,l=new od,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,N,G){let H=N.fog,z=G.geometry,X=w.isMeshStandardMaterial?N.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),W=K&&K.mapping===ma?K.image.height:null,ee=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=ge!==void 0?ge.length:0,q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let ue,Ve,De,$;if(ee){let yt=bi[ee];ue=yt.vertexShader,Ve=yt.fragmentShader}else ue=w.vertexShader,Ve=w.fragmentShader,l.update(w),De=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);let se=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),fe=G.isInstancedMesh===!0,ce=G.isBatchedMesh===!0,ke=!!w.map,ut=!!w.matcap,D=!!K,he=!!w.aoMap,oe=!!w.lightMap,te=!!w.bumpMap,ne=!!w.normalMap,Te=!!w.displacementMap,ye=!!w.emissiveMap,Ae=!!w.metalnessMap,$e=!!w.roughnessMap,je=w.anisotropy>0,C=w.clearcoat>0,y=w.dispersion>0,P=w.iridescence>0,O=w.sheen>0,j=w.transmission>0,V=je&&!!w.anisotropyMap,xe=C&&!!w.clearcoatMap,ie=C&&!!w.clearcoatNormalMap,pe=C&&!!w.clearcoatRoughnessMap,de=P&&!!w.iridescenceMap,J=P&&!!w.iridescenceThicknessMap,be=O&&!!w.sheenColorMap,Fe=O&&!!w.sheenRoughnessMap,_e=!!w.specularMap,Se=!!w.specularColorMap,ze=!!w.specularIntensityMap,U=j&&!!w.transmissionMap,Me=j&&!!w.thicknessMap,Ce=!!w.gradientMap,Ie=!!w.alphaMap,ve=w.alphaTest>0,le=!!w.alphaHash,Be=!!w.extensions,et=Bi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=n.toneMapping);let Pt={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:ue,fragmentShader:Ve,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ce,batchingColor:ce&&G._colorsTexture!==null,instancing:fe,instancingColor:fe&&G.instanceColor!==null,instancingMorph:fe&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Is,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:ut,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:W,aoMap:he,lightMap:oe,bumpMap:te,normalMap:ne,displacementMap:d&&Te,emissiveMap:ye,normalMapObjectSpace:ne&&w.normalMapType===Np,normalMapTangentSpace:ne&&w.normalMapType===jc,metalnessMap:Ae,roughnessMap:$e,anisotropy:je,anisotropyMap:V,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:y,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:J,sheen:O,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:_e,specularColorMap:Se,specularIntensityMap:ze,transmission:j,transmissionMap:U,thicknessMap:Me,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:le,combine:w.combine,mapUv:ke&&x(w.map.channel),aoMapUv:he&&x(w.aoMap.channel),lightMapUv:oe&&x(w.lightMap.channel),bumpMapUv:te&&x(w.bumpMap.channel),normalMapUv:ne&&x(w.normalMap.channel),displacementMapUv:Te&&x(w.displacementMap.channel),emissiveMapUv:ye&&x(w.emissiveMap.channel),metalnessMapUv:Ae&&x(w.metalnessMap.channel),roughnessMapUv:$e&&x(w.roughnessMap.channel),anisotropyMapUv:V&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(w.sheenRoughnessMap.channel),specularMapUv:_e&&x(w.specularMap.channel),specularColorMapUv:Se&&x(w.specularColorMap.channel),specularIntensityMapUv:ze&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:Me&&x(w.thicknessMap.channel),alphaMapUv:Ie&&x(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ne||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(ke||Ie),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zt,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function m(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(S,w),b(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let S=p[w.type],L;if(S){let N=bi[S];L=qp.clone(N.uniforms)}else L=w.uniforms;return L}function A(w,S){let L;for(let N=0,G=h.length;N<G;N++){let H=h[N];if(H.cacheKey===S){L=H,++L.usedTimes;break}}return L===void 0&&(L=new fb(n,S,w,r),h.push(L)),L}function E(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function gb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,x,g){let m=o(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||xb),i.length>1&&i.sort(d||_m),s.length>1&&s.sort(d||_m)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function yb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new vm,n.set(i,[o])):s>=r.length?(o=new vm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _b(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ge};break;case"SpotLight":t={position:new M,direction:new M,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function vb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Mb=0;function bb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sb(n){let e=new _b,t=vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new ct,o=new ct;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,b=0,_=0,A=0,E=0,R=0;c.sort(bb);for(let w=0,S=c.length;w<S;w++){let L=c[w],N=L.color,G=L.intensity,H=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*G,u+=N.g*G,d+=N.b*G;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],G);R++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,W=t.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=L.shadow.matrix,v++}i.directional[f]=X,f++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(G),X.distance=H,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;let K=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[x]=K.matrix,L.castShadow){let W=t.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=z,_++}x++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(N).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,W=t.get(L);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(G),X.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[m]=X,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,I.directionalLength=f,I.pointLength=p,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=R,i.version=Mb++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Mm(n){let e=new Sb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Mm(n),e.set(s,[a])):r>=o.length?(a=new Mm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`;function Ab(n,e,t){let i=new Gr,s=new ae,r=new ae,o=new zt,a=new ql({depthPacking:Up}),l=new Yl,c={},h=t.maxTextureSize,u={[oi]:an,[an]:oi,[Zt]:Zt},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Tb,fragmentShader:Eb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new st;p.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let m=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Oi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=m!==Mi&&this.type===Mi,H=m===Mi&&this.type!==Mi;for(let z=0,X=E.length;z<X;z++){let K=E[z],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ee=W.getFrameExtents();if(s.multiply(ee),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||G===!0||H===!0){let Ee=this.type!==Mi?{minFilter:En,magFilter:En}:{};W.map!==null&&W.map.dispose(),W.map=new _i(s.x,s.y,Ee),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let ge=W.getViewportCount();for(let Ee=0;Ee<ge;Ee++){let q=W.getViewport(Ee);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o),W.updateMatrices(K,Ee),i=W.getFrustum(),_(R,I,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Mi&&v(W,I),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,S,L)};function v(E,R){let I=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,I,f,x,null)}function b(E,R,I,w){let S=null,L=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=S.uuid,G=R.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let z=H[G];z===void 0&&(z=S.clone(),H[G]=z,R.addEventListener("dispose",A)),S=z}if(S.visible=R.visible,S.wireframe=R.wireframe,w===Mi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=I}return S}function _(E,R,I,w,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let G=e.update(E),H=E.material;if(Array.isArray(H)){let z=G.groups;for(let X=0,K=z.length;X<K;X++){let W=z[X],ee=H[W.materialIndex];if(ee&&ee.visible){let ge=b(E,ee,w,S);E.onBeforeShadow(n,E,R,I,G,ge,W),n.renderBufferDirect(I,null,G,ge,E,W),E.onAfterShadow(n,E,R,I,G,ge,W)}}}else if(H.visible){let z=b(E,H,w,S);E.onBeforeShadow(n,E,R,I,G,z,null),n.renderBufferDirect(I,null,G,z,E,null),E.onAfterShadow(n,E,R,I,G,z,null)}}let N=E.children;for(let G=0,H=N.length;G<H;G++)_(N[G],R,I,w,S)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let w=c[I],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var Cb={[sc]:rc,[oc]:cc,[ac]:hc,[Ps]:lc,[rc]:sc,[cc]:oc,[hc]:ac,[lc]:Ps};function Rb(n,e){function t(){let U=!1,Me=new zt,Ce=null,Ie=new zt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){U=ve},setClear:function(ve,le,Be,et,Pt){Pt===!0&&(ve*=et,le*=et,Be*=et),Me.set(ve,le,Be,et),Ie.equals(Me)===!1&&(n.clearColor(ve,le,Be,et),Ie.copy(Me))},reset:function(){U=!1,Ce=null,Ie.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,Ce=null,Ie=null,ve=null;return{setReversed:function(le){if(Me!==le){let Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Me=le;let et=ve;ve=null,this.setClear(et)}},getReversed:function(){return Me},setTest:function(le){le?se(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(le){Ce!==le&&!U&&(n.depthMask(le),Ce=le)},setFunc:function(le){if(Me&&(le=Cb[le]),Ie!==le){switch(le){case sc:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case lc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=le}},setLocked:function(le){U=le},setClear:function(le){ve!==le&&(Me&&(le=1-le),n.clearDepth(le),ve=le)},reset:function(){U=!1,Ce=null,Ie=null,ve=null,Me=!1}}}function s(){let U=!1,Me=null,Ce=null,Ie=null,ve=null,le=null,Be=null,et=null,Pt=null;return{setTest:function(yt){U||(yt?se(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(yt){Me!==yt&&!U&&(n.stencilMask(yt),Me=yt)},setFunc:function(yt,Ci,mi){(Ce!==yt||Ie!==Ci||ve!==mi)&&(n.stencilFunc(yt,Ci,mi),Ce=yt,Ie=Ci,ve=mi)},setOp:function(yt,Ci,mi){(le!==yt||Be!==Ci||et!==mi)&&(n.stencilOp(yt,Ci,mi),le=yt,Be=Ci,et=mi)},setLocked:function(yt){U=yt},setClear:function(yt){Pt!==yt&&(n.clearStencil(yt),Pt=yt)},reset:function(){U=!1,Me=null,Ce=null,Ie=null,ve=null,le=null,Be=null,et=null,Pt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,b=null,_=null,A=null,E=null,R=new Ge(0,0,0),I=0,w=!1,S=null,L=null,N=null,G=null,H=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=K>=2);let ee=null,ge={},Ee=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ue=new zt().fromArray(Ee),Ve=new zt().fromArray(q);function De(U,Me,Ce,Ie){let ve=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Ce;Be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Me+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return le}let $={};$[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ps),te(!1),ne(Ru),se(n.CULL_FACE),he(Oi);function se(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function fe(U,Me){return u[U]!==Me?(n.bindFramebuffer(U,Me),u[U]=Me,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(U,Me){let Ce=f,Ie=!1;if(U){Ce=d.get(Me),Ce===void 0&&(Ce=[],d.set(Me,Ce));let ve=U.textures;if(Ce.length!==ve.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Be=ve.length;le<Be;le++)Ce[le]=n.COLOR_ATTACHMENT0+le;Ce.length=ve.length,Ie=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Ce)}function ke(U){return p!==U?(n.useProgram(U),p=U,!0):!1}let ut={[es]:n.FUNC_ADD,[op]:n.FUNC_SUBTRACT,[ap]:n.FUNC_REVERSE_SUBTRACT};ut[lp]=n.MIN,ut[cp]=n.MAX;let D={[hp]:n.ZERO,[up]:n.ONE,[dp]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[gp]:n.DST_COLOR,[pp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[xp]:n.ONE_MINUS_DST_COLOR,[mp]:n.ONE_MINUS_DST_ALPHA,[_p]:n.CONSTANT_COLOR,[vp]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function he(U,Me,Ce,Ie,ve,le,Be,et,Pt,yt){if(U===Oi){x===!0&&(Q(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),U!==rp){if(U!==g||yt!==w){if((m!==es||_!==es)&&(n.blendEquation(n.FUNC_ADD),m=es,_=es),yt)switch(U){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Iu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,b=null,A=null,E=null,R.set(0,0,0),I=0,g=U,w=yt}return}ve=ve||Me,le=le||Ce,Be=Be||Ie,(Me!==m||ve!==_)&&(n.blendEquationSeparate(ut[Me],ut[ve]),m=Me,_=ve),(Ce!==v||Ie!==b||le!==A||Be!==E)&&(n.blendFuncSeparate(D[Ce],D[Ie],D[le],D[Be]),v=Ce,b=Ie,A=le,E=Be),(et.equals(R)===!1||Pt!==I)&&(n.blendColor(et.r,et.g,et.b,Pt),R.copy(et),I=Pt),g=U,w=!1}function oe(U,Me){U.side===Zt?Q(n.CULL_FACE):se(n.CULL_FACE);let Ce=U.side===an;Me&&(Ce=!Ce),te(Ce),U.blending===Rs&&U.transparent===!1?he(Oi):he(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ie=U.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function ne(U){U!==np?(se(n.CULL_FACE),U!==L&&(U===Ru?n.cullFace(n.BACK):U===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),L=U}function Te(U){U!==N&&(X&&n.lineWidth(U),N=U)}function ye(U,Me,Ce){U?(se(n.POLYGON_OFFSET_FILL),(G!==Me||H!==Ce)&&(n.polygonOffset(Me,Ce),G=Me,H=Ce)):Q(n.POLYGON_OFFSET_FILL)}function Ae(U){U?se(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function $e(U){U===void 0&&(U=n.TEXTURE0+z-1),ee!==U&&(n.activeTexture(U),ee=U)}function je(U,Me,Ce){Ce===void 0&&(ee===null?Ce=n.TEXTURE0+z-1:Ce=ee);let Ie=ge[Ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},ge[Ce]=Ie),(Ie.type!==U||Ie.texture!==Me)&&(ee!==Ce&&(n.activeTexture(Ce),ee=Ce),n.bindTexture(U,Me||$[U]),Ie.type=U,Ie.texture=Me)}function C(){let U=ge[ee];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ue.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Fe(U){Ve.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function _e(U,Me){let Ce=c.get(Me);Ce===void 0&&(Ce=new WeakMap,c.set(Me,Ce));let Ie=Ce.get(U);Ie===void 0&&(Ie=n.getUniformBlockIndex(Me,U.name),Ce.set(U,Ie))}function Se(U,Me){let Ie=c.get(Me).get(U);l.get(Me)!==Ie&&(n.uniformBlockBinding(Me,Ie,U.__bindingPointIndex),l.set(Me,Ie))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,ge={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,b=null,_=null,A=null,E=null,R=new Ge(0,0,0),I=0,w=!1,S=null,L=null,N=null,G=null,H=null,ue.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Q,bindFramebuffer:fe,drawBuffers:ce,useProgram:ke,setBlending:he,setMaterial:oe,setFlipSided:te,setCullFace:ne,setLineWidth:Te,setPolygonOffset:ye,setScissorTest:Ae,activeTexture:$e,bindTexture:je,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:P,texImage2D:de,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:Se,texStorage2D:ie,texStorage3D:pe,texSubImage2D:O,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:xe,scissor:be,viewport:Fe,reset:ze}}function Pb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return f?new OffscreenCanvas(C,y):Dr("canvas")}function x(C,y,P){let O=1,j=je(C);if((j.width>P||j.height>P)&&(O=P/Math.max(j.width,j.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let V=Math.floor(O*j.width),xe=Math.floor(O*j.height);u===void 0&&(u=p(V,xe));let ie=y?p(V,xe):u;return ie.width=V,ie.height=xe,ie.getContext("2d").drawImage(C,0,0,V,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+xe+")."),ie}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,y,P,O,j=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=y;if(y===n.RED&&(P===n.FLOAT&&(V=n.R32F),P===n.HALF_FLOAT&&(V=n.R16F),P===n.UNSIGNED_BYTE&&(V=n.R8)),y===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.R8UI),P===n.UNSIGNED_SHORT&&(V=n.R16UI),P===n.UNSIGNED_INT&&(V=n.R32UI),P===n.BYTE&&(V=n.R8I),P===n.SHORT&&(V=n.R16I),P===n.INT&&(V=n.R32I)),y===n.RG&&(P===n.FLOAT&&(V=n.RG32F),P===n.HALF_FLOAT&&(V=n.RG16F),P===n.UNSIGNED_BYTE&&(V=n.RG8)),y===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RG8UI),P===n.UNSIGNED_SHORT&&(V=n.RG16UI),P===n.UNSIGNED_INT&&(V=n.RG32UI),P===n.BYTE&&(V=n.RG8I),P===n.SHORT&&(V=n.RG16I),P===n.INT&&(V=n.RG32I)),y===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGB8UI),P===n.UNSIGNED_SHORT&&(V=n.RGB16UI),P===n.UNSIGNED_INT&&(V=n.RGB32UI),P===n.BYTE&&(V=n.RGB8I),P===n.SHORT&&(V=n.RGB16I),P===n.INT&&(V=n.RGB32I)),y===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),P===n.UNSIGNED_INT&&(V=n.RGBA32UI),P===n.BYTE&&(V=n.RGBA8I),P===n.SHORT&&(V=n.RGBA16I),P===n.INT&&(V=n.RGBA32I)),y===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),y===n.RGBA){let xe=j?Bo:dt.getTransfer(O);P===n.FLOAT&&(V=n.RGBA32F),P===n.HALF_FLOAT&&(V=n.RGBA16F),P===n.UNSIGNED_BYTE&&(V=xe===bt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function _(C,y){let P;return C?y===null||y===as||y===$r?P=n.DEPTH24_STENCIL8:y===ui?P=n.DEPTH32F_STENCIL8:y===Jr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===as||y===$r?P=n.DEPTH_COMPONENT24:y===ui?P=n.DEPTH_COMPONENT32F:y===Jr&&(P=n.DEPTH_COMPONENT16),P}function A(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function E(C){let y=C.target;y.removeEventListener("dispose",E),I(y),y.isVideoTexture&&h.delete(y)}function R(C){let y=C.target;y.removeEventListener("dispose",R),S(y)}function I(C){let y=i.get(C);if(y.__webglInit===void 0)return;let P=C.source,O=d.get(P);if(O){let j=O[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(C),Object.keys(O).length===0&&d.delete(P)}i.remove(C)}function w(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let P=C.source,O=d.get(P);delete O[y.__cacheKey],o.memory.textures--}function S(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(y.__webglFramebuffer[O]))for(let j=0;j<y.__webglFramebuffer[O].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[O][j]);else n.deleteFramebuffer(y.__webglFramebuffer[O]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[O])}else{if(Array.isArray(y.__webglFramebuffer))for(let O=0;O<y.__webglFramebuffer.length;O++)n.deleteFramebuffer(y.__webglFramebuffer[O]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let O=0;O<y.__webglColorRenderbuffer.length;O++)y.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[O]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=C.textures;for(let O=0,j=P.length;O<j;O++){let V=i.get(P[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(P[O])}i.remove(C)}let L=0;function N(){L=0}function G(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function H(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){let P=i.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let O=C.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(P,C,y);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+y)}function X(C,y){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){$(P,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+y)}function K(C,y){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){$(P,C,y);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+y)}function W(C,y){let P=i.get(C);if(C.version>0&&P.__version!==C.version){se(P,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+y)}let ee={[vn]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Pl]:n.MIRRORED_REPEAT},ge={[En]:n.NEAREST,[Lp]:n.NEAREST_MIPMAP_NEAREST,[ga]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[fc]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},Ee={[Fp]:n.NEVER,[Gp]:n.ALWAYS,[Op]:n.LESS,[Vu]:n.LEQUAL,[Bp]:n.EQUAL,[Vp]:n.GEQUAL,[zp]:n.GREATER,[kp]:n.NOTEQUAL};function q(C,y){if(y.type===ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===fc||y.magFilter===ga||y.magFilter===bn||y.minFilter===tn||y.minFilter===fc||y.minFilter===ga||y.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ee[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==ga&&y.minFilter!==bn||y.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ue(C,y){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));let O=y.source,j=d.get(O);j===void 0&&(j={},d.set(O,j));let V=H(y);if(V!==C.__cacheKey){j[V]===void 0&&(j[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),j[V].usedTimes++;let xe=j[C.__cacheKey];xe!==void 0&&(j[C.__cacheKey].usedTimes--,xe.usedTimes===0&&w(y)),C.__cacheKey=V,C.__webglTexture=j[V].texture}return P}function Ve(C,y,P){return Math.floor(Math.floor(C/P)/y)}function De(C,y,P,O){let V=C.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,P,O,y.data);else{V.sort((J,be)=>J.start-be.start);let xe=0;for(let J=1;J<V.length;J++){let be=V[xe],Fe=V[J],_e=be.start+be.count,Se=Ve(Fe.start,y.width,4),ze=Ve(be.start,y.width,4);Fe.start<=_e+1&&Se===ze&&Ve(Fe.start+Fe.count-1,y.width,4)===Se?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++xe,V[xe]=Fe)}V.length=xe+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),pe=n.getParameter(n.UNPACK_SKIP_PIXELS),de=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let J=0,be=V.length;J<be;J++){let Fe=V[J],_e=Math.floor(Fe.start/4),Se=Math.ceil(Fe.count/4),ze=_e%y.width,U=Math.floor(_e/y.width),Me=Se,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ze,U,Me,Ce,P,O,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function $(C,y,P){let O=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(O=n.TEXTURE_3D);let j=ue(C,y),V=y.source;t.bindTexture(O,C.__webglTexture,n.TEXTURE0+P);let xe=i.get(V);if(V.version!==xe.__version||j===!0){t.activeTexture(n.TEXTURE0+P);let ie=dt.getPrimaries(dt.workingColorSpace),pe=y.colorSpace===zi?null:dt.getPrimaries(y.colorSpace),de=y.colorSpace===zi||ie===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let J=x(y.image,!1,s.maxTextureSize);J=$e(y,J);let be=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),_e=b(y.internalFormat,be,Fe,y.colorSpace,y.isVideoTexture);q(O,y);let Se,ze=y.mipmaps,U=y.isVideoTexture!==!0,Me=xe.__version===void 0||j===!0,Ce=V.dataReady,Ie=A(y,J);if(y.isDepthTexture)_e=_(y.format===Qr,y.type),Me&&(U?t.texStorage2D(n.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,be,Fe,null));else if(y.isDataTexture)if(ze.length>0){U&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],U?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,be,Fe,Se.data);y.generateMipmaps=!1}else U?(Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,J.width,J.height),Ce&&De(y,J,be,Fe)):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,be,Fe,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,_e,ze[0].width,ze[0].height,J.depth);for(let ve=0,le=ze.length;ve<le;ve++)if(Se=ze[ve],y.format!==Rn)if(be!==null)if(U){if(Ce)if(y.layerUpdates.size>0){let Be=ju(Se.width,Se.height,y.format,y.type);for(let et of y.layerUpdates){let Pt=Se.data.subarray(et*Be/Se.data.BYTES_PER_ELEMENT,(et+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,et,Se.width,Se.height,1,be,Pt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,be,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Se.width,Se.height,J.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,J.depth,be,Fe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,_e,Se.width,Se.height,J.depth,0,be,Fe,Se.data)}else{U&&Me&&t.texStorage2D(n.TEXTURE_2D,Ie,_e,ze[0].width,ze[0].height);for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],y.format!==Rn?be!==null?U?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,ve,_e,Se.width,Se.height,0,be,Fe,Se.data)}else if(y.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,_e,J.width,J.height,J.depth),Ce)if(y.layerUpdates.size>0){let ve=ju(J.width,J.height,y.format,y.type);for(let le of y.layerUpdates){let Be=J.data.subarray(le*ve/J.data.BYTES_PER_ELEMENT,(le+1)*ve/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,be,Fe,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,be,Fe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,be,Fe,J.data);else if(y.isData3DTexture)U?(Me&&t.texStorage3D(n.TEXTURE_3D,Ie,_e,J.width,J.height,J.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,be,Fe,J.data)):t.texImage3D(n.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,be,Fe,J.data);else if(y.isFramebufferTexture){if(Me)if(U)t.texStorage2D(n.TEXTURE_2D,Ie,_e,J.width,J.height);else{let ve=J.width,le=J.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(n.TEXTURE_2D,Be,_e,ve,le,0,be,Fe,null),ve>>=1,le>>=1}}else if(ze.length>0){if(U&&Me){let ve=je(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ie,_e,ve.width,ve.height)}for(let ve=0,le=ze.length;ve<le;ve++)Se=ze[ve],U?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,be,Fe,Se):t.texImage2D(n.TEXTURE_2D,ve,_e,be,Fe,Se);y.generateMipmaps=!1}else if(U){if(Me){let ve=je(J);t.texStorage2D(n.TEXTURE_2D,Ie,_e,ve.width,ve.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Fe,J)}else t.texImage2D(n.TEXTURE_2D,0,_e,be,Fe,J);g(y)&&m(O),xe.__version=V.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function se(C,y,P){if(y.image.length!==6)return;let O=ue(C,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+P);let V=i.get(j);if(j.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+P);let xe=dt.getPrimaries(dt.workingColorSpace),ie=y.colorSpace===zi?null:dt.getPrimaries(y.colorSpace),pe=y.colorSpace===zi||xe===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!de&&!J?be[le]=x(y.image[le],!0,s.maxCubemapSize):be[le]=J?y.image[le].image:y.image[le],be[le]=$e(y,be[le]);let Fe=be[0],_e=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),ze=b(y.internalFormat,_e,Se,y.colorSpace),U=y.isVideoTexture!==!0,Me=V.__version===void 0||O===!0,Ce=j.dataReady,Ie=A(y,Fe);q(n.TEXTURE_CUBE_MAP,y);let ve;if(de){U&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ze,Fe.width,Fe.height);for(let le=0;le<6;le++){ve=be[le].mipmaps;for(let Be=0;Be<ve.length;Be++){let et=ve[Be];y.format!==Rn?_e!==null?U?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,et.width,et.height,_e,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,et.width,et.height,_e,Se,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,ze,et.width,et.height,0,_e,Se,et.data)}}}else{if(ve=y.mipmaps,U&&Me){ve.length>0&&Ie++;let le=je(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ze,le.width,le.height)}for(let le=0;le<6;le++)if(J){U?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,_e,Se,be[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,be[le].width,be[le].height,0,_e,Se,be[le].data);for(let Be=0;Be<ve.length;Be++){let Pt=ve[Be].image[le].image;U?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,Pt.width,Pt.height,_e,Se,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,Pt.width,Pt.height,0,_e,Se,Pt.data)}}else{U?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,_e,Se,be[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,_e,Se,be[le]);for(let Be=0;Be<ve.length;Be++){let et=ve[Be];U?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,_e,Se,et.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,ze,_e,Se,et.image[le])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),V.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Q(C,y,P,O,j,V){let xe=r.convert(P.format,P.colorSpace),ie=r.convert(P.type),pe=b(P.internalFormat,xe,ie,P.colorSpace),de=i.get(y),J=i.get(P);if(J.__renderTarget=y,!de.__hasExternalTextures){let be=Math.max(1,y.width>>V),Fe=Math.max(1,y.height>>V);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,V,pe,be,Fe,y.depth,0,xe,ie,null):t.texImage2D(j,V,pe,be,Fe,0,xe,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,j,J.__webglTexture,0,Te(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,j,J.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(C,y,P){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let O=y.depthTexture,j=O&&O.isDepthTexture?O.type:null,V=_(y.stencilBuffer,j),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Te(y);ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,y.width,y.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,V,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let O=y.textures;for(let j=0;j<O.length;j++){let V=O[j],xe=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),pe=b(V.internalFormat,xe,ie,V.colorSpace),de=Te(y);P&&ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,pe,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,pe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,pe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(y.depthTexture);O.__renderTarget=y,(!O.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);let j=O.__webglTexture,V=Te(y);if(y.depthTexture.format===Ir)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Qr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(C){let y=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let O=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),O){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,O.removeEventListener("dispose",j)};O.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=O}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let O=C.texture.mipmaps;O&&O.length>0?ce(y.__webglFramebuffer[0],C):ce(y.__webglFramebuffer,C)}else if(P){y.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[O]),y.__webglDepthbuffer[O]===void 0)y.__webglDepthbuffer[O]=n.createRenderbuffer(),fe(y.__webglDepthbuffer[O],C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}else{let O=C.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),fe(y.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,y,P){let O=i.get(C);y!==void 0&&Q(O.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&ke(C)}function D(C){let y=C.texture,P=i.get(C),O=i.get(y);C.addEventListener("dispose",R);let j=C.textures,V=C.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=y.version,o.memory.textures++),V){P.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[ie]=[];for(let pe=0;pe<y.mipmaps.length;pe++)P.__webglFramebuffer[ie][pe]=n.createFramebuffer()}else P.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)P.__webglFramebuffer[ie]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ie=0,pe=j.length;ie<pe;ie++){let de=i.get(j[ie]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ye(C)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){let pe=j[ie];P.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ie]);let de=r.convert(pe.format,pe.colorSpace),J=r.convert(pe.type),be=b(pe.internalFormat,de,J,pe.colorSpace,C.isXRRenderTarget===!0),Fe=Te(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,P.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(P.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),q(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Q(P.__webglFramebuffer[ie][pe],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else Q(P.__webglFramebuffer[ie],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ie=0,pe=j.length;ie<pe;ie++){let de=j[ie],J=i.get(de),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,J.__webglTexture),q(be,de),Q(P.__webglFramebuffer,C,de,n.COLOR_ATTACHMENT0+ie,be,0),g(de)&&m(be)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,O.__webglTexture),q(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Q(P.__webglFramebuffer[pe],C,y,n.COLOR_ATTACHMENT0,ie,pe);else Q(P.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,ie,0);g(y)&&m(ie),t.unbindTexture()}C.depthBuffer&&ke(C)}function he(C){let y=C.textures;for(let P=0,O=y.length;P<O;P++){let j=y[P];if(g(j)){let V=v(C),xe=i.get(j).__webglTexture;t.bindTexture(V,xe),m(V),t.unbindTexture()}}}let oe=[],te=[];function ne(C){if(C.samples>0){if(ye(C)===!1){let y=C.textures,P=C.width,O=C.height,j=n.COLOR_BUFFER_BIT,V=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),ie=y.length>1;if(ie)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let pe=C.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<y.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let J=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,P,O,0,0,P,O,j,n.NEAREST),l===!0&&(oe.length=0,te.length=0,oe.push(n.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(V),te.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let J=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Te(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function $e(C,y){let P=C.colorSpace,O=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Is&&P!==zi&&(dt.getTransfer(P)===bt?(O!==Rn||j!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),y}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=ut,this.setupRenderTarget=D,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function Ib(n,e){function t(i,s=zi){let r,o=dt.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===Nu)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===zu)return n.RGB;if(i===Rn)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===_c)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===xa||i===ya||i===_a||i===va)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===bc||i===Sc||i===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tc||i===Ec||i===Ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tc||i===Ec)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Hc||i===Wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gc)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xc||i===qc||i===Yc||i===Zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`,ld=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new li({vertexShader:Lb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cd=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ld,m={},v=t.getContextAttributes(),b=null,_=null,A=[],E=[],R=new ae,I=null,w=new hn;w.viewport=new zt;let S=new hn;S.viewport=new zt;let L=[w,S],N=new ic,G=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=A[$];return se===void 0&&(se=new Or,A[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=A[$];return se===void 0&&(se=new Or,A[$]=se),se.getGripSpace()},this.getHand=function($){let se=A[$];return se===void 0&&(se=new Or,A[$]=se),se.getHandSpace()};function z($){let se=E.indexOf($.inputSource);if(se===-1)return;let Q=A[se];Q!==void 0&&(Q.update($.inputSource,$.frame,c||o),Q.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let $=0;$<A.length;$++){let se=E[$];se!==null&&(E[$]=null,A[$].disconnect(se))}G=null,H=null,g.reset();for(let $ in m)delete m[$];e.setRenderTarget(b),f=null,d=null,u=null,s=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,fe=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?Qr:Ir,fe=v.stencil?$r:as);let ke={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new _i(d.textureWidth,d.textureHeight,{format:Rn,type:hi,depthTexture:new Jo(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new _i(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let se=0;se<$.removed.length;se++){let Q=$.removed[se],fe=E.indexOf(Q);fe>=0&&(E[fe]=null,A[fe].disconnect(Q))}for(let se=0;se<$.added.length;se++){let Q=$.added[se],fe=E.indexOf(Q);if(fe===-1){for(let ke=0;ke<A.length;ke++)if(ke>=E.length){E.push(Q),fe=ke;break}else if(E[ke]===null){E[ke]=Q,fe=ke;break}if(fe===-1)break}let ce=A[fe];ce&&ce.connect(Q)}}let W=new M,ee=new M;function ge($,se,Q){W.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Q.matrixWorld);let fe=W.distanceTo(ee),ce=se.projectionMatrix.elements,ke=Q.projectionMatrix.elements,ut=ce[14]/(ce[10]-1),D=ce[14]/(ce[10]+1),he=(ce[9]+1)/ce[5],oe=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],ne=(ke[8]+1)/ke[0],Te=ut*te,ye=ut*ne,Ae=fe/(-te+ne),$e=Ae*-te;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($e),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ce[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let je=ut+Ae,C=D+Ae,y=Te-$e,P=ye+(fe-$e),O=he*D/C*je,j=oe*D/C*je;$.projectionMatrix.makePerspective(y,P,O,j,je,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let se=$.near,Q=$.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),N.near=S.near=w.near=se,N.far=S.far=w.far=Q,(G!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,H=N.far),N.layers.mask=$.layers.mask|6,w.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let fe=$.parent,ce=N.cameras;Ee(N,fe);for(let ke=0;ke<ce.length;ke++)Ee(ce[ke],fe);ce.length===2?ge(N,w,S):N.projectionMatrix.copy(w.projectionMatrix),q($,N,fe)};function q($,se,Q){Q===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Q.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function($){return m[$]};let ue=null;function Ve($,se){if(h=se.getViewerPose(c||o),p=se,h!==null){let Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let fe=!1;Q.length!==N.cameras.length&&(N.cameras.length=0,fe=!0);for(let D=0;D<Q.length;D++){let he=Q[D],oe=null;if(f!==null)oe=f.getViewport(he);else{let ne=u.getViewSubImage(d,he);oe=ne.viewport,D===0&&(e.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(_))}let te=L[D];te===void 0&&(te=new hn,te.layers.enable(D),te.viewport=new zt,L[D]=te),te.matrix.fromArray(he.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(he.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(oe.x,oe.y,oe.width,oe.height),D===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),fe===!0&&N.cameras.push(te)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(Q[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Q.length;D++){let he=Q[D].camera;if(he){let oe=m[he];oe||(oe=new Ko,m[he]=oe);let te=u.getCameraImage(he);oe.sourceTexture=te}}}}for(let Q=0;Q<A.length;Q++){let fe=E[Q],ce=A[Q];fe!==null&&ce!==void 0&&ce.update(fe,se,c||o)}ue&&ue($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let De=new bm;De.setAnimationLoop(Ve),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}},qs=new kt,Ub=new ct;function Nb(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Xu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,_=v.envMapRotation;b&&(g.envMap.value=b,qs.copy(_),qs.x*=-1,qs.y*=-1,qs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),g.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(qs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let _=b.program;i.uniformBlockBinding(v,_)}function c(v,b){let _=s[v.id];_===void 0&&(p(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let A=b.program;i.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let b=u();v.__bindingPointIndex=b;let _=n.createBuffer(),A=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],_=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,R=_.length;E<R;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,S=I.length;w<S;w++){let L=I[w];if(f(L,E,w,A)===!0){let N=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],H=0;for(let z=0;z<G.length;z++){let X=G[z],K=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+H,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,b,_,A){let E=v.value,R=b+"_"+_;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{let I=A[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function p(v){let b=v.uniforms,_=0,A=16;for(let R=0,I=b.length;R<I;R++){let w=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,L=w.length;S<L;S++){let N=w[S],G=Array.isArray(N.value)?N.value:[N.value];for(let H=0,z=G.length;H<z;H++){let X=G[H],K=x(X),W=_%A,ee=W%K.boundary,ge=W+ee;_+=ee,ge!==0&&A-ge<K.storage&&(_+=A-ge),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=K.storage}}}let E=_%A;return E>0&&(_+=A-E),v.__size=_,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Qc=class{constructor(e={}){let{canvas:t=Hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=gt;let E=0,R=0,I=null,w=-1,S=null,L=new zt,N=new zt,G=null,H=new Ge(0),z=0,X=t.width,K=t.height,W=1,ee=null,ge=null,Ee=new zt(0,0,X,K),q=new zt(0,0,X,K),ue=!1,Ve=new Gr,De=!1,$=!1,se=new ct,Q=new M,fe=new zt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function ut(){return I===null?W:1}let D=i;function he(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let B="webgl2";if(D=he(B,T),D===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,te,ne,Te,ye,Ae,$e,je,C,y,P,O,j,V,xe,ie,pe,de,J,be,Fe,_e,Se,ze;function U(){oe=new eM(D),oe.init(),_e=new Ib(D,oe),te=new Yv(D,oe,e,_e),ne=new Rb(D,oe),te.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Te=new iM(D),ye=new gb,Ae=new Pb(D,oe,ne,ye,te,_e,Te),$e=new jv(_),je=new Qv(_),C=new cy(D),Se=new Xv(D,C),y=new tM(D,C,Te,Se),P=new rM(D,y,C,Te),J=new sM(D,te,Ae),ie=new Zv(ye),O=new mb(_,$e,je,oe,te,Se,ie),j=new Nb(_,ye),V=new yb,xe=new wb(oe),de=new Wv(_,$e,je,ne,P,f,l),pe=new Ab(_,P,te),ze=new Fb(D,Te,te,ne),be=new qv(D,oe,Te),Fe=new nM(D,oe,Te),Te.programs=O.programs,_.capabilities=te,_.extensions=oe,_.properties=ye,_.renderLists=V,_.shadowMap=pe,_.state=ne,_.info=Te}U();let Me=new cd(_,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,B,Y=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=B,t.width=Math.floor(T*W),t.height=Math.floor(B*W),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*W,K*W).floor()},this.setDrawingBufferSize=function(T,B,Y){X=T,K=B,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,B,Y,Z){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,B,Y,Z),ne.viewport(L.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,B,Y,Z){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,B,Y,Z),ne.scissor(N.copy(q).multiplyScalar(W).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){ne.setScissorTest(ue=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Y=!0){let Z=0;if(T){let k=!1;if(I!==null){let we=I.texture.format;k=we===vc||we===_c||we===yc}if(k){let we=I.texture.type,Pe=we===hi||we===as||we===Jr||we===$r||we===mc||we===gc,Oe=de.getClearColor(),Ue=de.getClearAlpha(),qe=Oe.r,Je=Oe.g,He=Oe.b;Pe?(p[0]=qe,p[1]=Je,p[2]=He,p[3]=Ue,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=qe,x[1]=Je,x[2]=He,x[3]=Ue,D.clearBufferiv(D.COLOR,0,x))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),de.dispose(),V.dispose(),xe.dispose(),ye.dispose(),$e.dispose(),je.dispose(),P.dispose(),Se.dispose(),ze.dispose(),O.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",mi),Me.removeEventListener("sessionend",pf),bs.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=Te.autoReset,B=pe.enabled,Y=pe.autoUpdate,Z=pe.needsUpdate,k=pe.type;U(),Te.autoReset=T,pe.enabled=B,pe.autoUpdate=Y,pe.needsUpdate=Z,pe.type=k}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){let B=T.target;B.removeEventListener("dispose",le),Be(B)}function Be(T){et(T),ye.remove(T)}function et(T){let B=ye.get(T).programs;B!==void 0&&(B.forEach(function(Y){O.releaseProgram(Y)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,Z,k,we){B===null&&(B=ce);let Pe=k.isMesh&&k.matrixWorld.determinant()<0,Oe=P0(T,B,Y,Z,k);ne.setMaterial(Z,Pe);let Ue=Y.index,qe=1;if(Z.wireframe===!0){if(Ue=y.getWireframeAttribute(Y),Ue===void 0)return;qe=2}let Je=Y.drawRange,He=Y.attributes.position,lt=Je.start*qe,Et=(Je.start+Je.count)*qe;we!==null&&(lt=Math.max(lt,we.start*qe),Et=Math.min(Et,(we.start+we.count)*qe)),Ue!==null?(lt=Math.max(lt,0),Et=Math.min(Et,Ue.count)):He!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,He.count));let Xt=Et-lt;if(Xt<0||Xt===1/0)return;Se.setup(k,Z,Oe,Y,Ue);let It,Ct=be;if(Ue!==null&&(It=C.get(Ue),Ct=Fe,Ct.setIndex(It)),k.isMesh)Z.wireframe===!0?(ne.setLineWidth(Z.wireframeLinewidth*ut()),Ct.setMode(D.LINES)):Ct.setMode(D.TRIANGLES);else if(k.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*ut()),k.isLineSegments?Ct.setMode(D.LINES):k.isLineLoop?Ct.setMode(D.LINE_LOOP):Ct.setMode(D.LINE_STRIP)}else k.isPoints?Ct.setMode(D.POINTS):k.isSprite&&Ct.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Xe=k._multiDrawStarts,Ft=k._multiDrawCounts,ft=k._multiDrawCount,Un=Ue?C.get(Ue).bytesPerElement:1,cr=ye.get(Z).currentProgram.getUniforms();for(let Nn=0;Nn<ft;Nn++)cr.setValue(D,"_gl_DrawID",Nn),Ct.render(Xe[Nn]/Un,Ft[Nn])}else if(k.isInstancedMesh)Ct.renderInstances(lt,Xt,k.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ft=Math.min(Y.instanceCount,Xe);Ct.renderInstances(lt,Xt,Ft)}else Ct.render(lt,Xt)};function Pt(T,B,Y){T.transparent===!0&&T.side===Zt&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Ja(T,B,Y),T.side=oi,T.needsUpdate=!0,Ja(T,B,Y),T.side=Zt):Ja(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),m=xe.get(Y),m.init(B),b.push(m),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==Y&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let Z=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let we=k.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Oe=we[Pe];Pt(Oe,Y,k),Z.add(Oe)}else Pt(we,Y,k),Z.add(we)}),m=b.pop(),Z},this.compileAsync=function(T,B,Y=null){let Z=this.compile(T,B,Y);return new Promise(k=>{function we(){if(Z.forEach(function(Pe){ye.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){k(T);return}setTimeout(we,10)}oe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let yt=null;function Ci(T){yt&&yt(T)}function mi(){bs.stop()}function pf(){bs.start()}let bs=new bm;bs.setAnimationLoop(Ci),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(T){yt=T,Me.setAnimationLoop(T),T===null?bs.stop():bs.start()},Me.addEventListener("sessionstart",mi),Me.addEventListener("sessionend",pf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,I),m=xe.get(T,b.length),m.init(B),b.push(m),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ve.setFromProjectionMatrix(se,ri,B.reversedDepth),$=this.localClippingEnabled,De=ie.init(this.clippingPlanes,$),g=V.get(T,v.length),g.init(),v.push(g),Me.enabled===!0&&Me.isPresenting===!0){let we=_.xr.getDepthSensingMesh();we!==null&&Vh(we,B,-1/0,_.sortObjects)}Vh(T,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ee,ge),ke=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ke&&de.addToRenderList(g,T),this.info.render.frame++,De===!0&&ie.beginShadows();let Y=m.state.shadowsArray;pe.render(Y,T,B),De===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,k=g.transmissive;if(m.setupLights(),B.isArrayCamera){let we=B.cameras;if(k.length>0)for(let Pe=0,Oe=we.length;Pe<Oe;Pe++){let Ue=we[Pe];gf(Z,k,T,Ue)}ke&&de.render(T);for(let Pe=0,Oe=we.length;Pe<Oe;Pe++){let Ue=we[Pe];mf(g,T,Ue,Ue.viewport)}}else k.length>0&&gf(Z,k,T,B),ke&&de.render(T),mf(g,T,B);I!==null&&R===0&&(Ae.updateMultisampleRenderTarget(I),Ae.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,B),Se.resetDefaultState(),w=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],De===!0&&ie.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Vh(T,B,Y,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){Z&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);let Pe=P.update(T),Oe=T.material;Oe.visible&&g.push(T,Pe,Oe,Y,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){let Pe=P.update(T),Oe=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),fe.copy(Pe.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Oe)){let Ue=Pe.groups;for(let qe=0,Je=Ue.length;qe<Je;qe++){let He=Ue[qe],lt=Oe[He.materialIndex];lt&&lt.visible&&g.push(T,Pe,lt,Y,fe.z,He)}}else Oe.visible&&g.push(T,Pe,Oe,Y,fe.z,null)}}let we=T.children;for(let Pe=0,Oe=we.length;Pe<Oe;Pe++)Vh(we[Pe],B,Y,Z)}function mf(T,B,Y,Z){let k=T.opaque,we=T.transmissive,Pe=T.transparent;m.setupLightsView(Y),De===!0&&ie.setGlobalState(_.clippingPlanes,Y),Z&&ne.viewport(L.copy(Z)),k.length>0&&ja(k,B,Y),we.length>0&&ja(we,B,Y),Pe.length>0&&ja(Pe,B,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function gf(T,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new _i(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Kr:hi,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let we=m.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||L;we.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);let Oe=_.getRenderTarget(),Ue=_.getActiveCubeFace(),qe=_.getActiveMipmapLevel();_.setRenderTarget(we),_.getClearColor(H),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),ke&&de.render(Y);let Je=_.toneMapping;_.toneMapping=Bi;let He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),De===!0&&ie.setGlobalState(_.clippingPlanes,Z),ja(T,Y,Z),Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we),oe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Et=0,Xt=B.length;Et<Xt;Et++){let It=B[Et],Ct=It.object,Xe=It.geometry,Ft=It.material,ft=It.group;if(Ft.side===Zt&&Ct.layers.test(Z.layers)){let Un=Ft.side;Ft.side=an,Ft.needsUpdate=!0,xf(Ct,Y,Z,Xe,Ft,ft),Ft.side=Un,Ft.needsUpdate=!0,lt=!0}}lt===!0&&(Ae.updateMultisampleRenderTarget(we),Ae.updateRenderTargetMipmap(we))}_.setRenderTarget(Oe,Ue,qe),_.setClearColor(H,z),He!==void 0&&(Z.viewport=He),_.toneMapping=Je}function ja(T,B,Y){let Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,we=T.length;k<we;k++){let Pe=T[k],Oe=Pe.object,Ue=Pe.geometry,qe=Pe.group,Je=Pe.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Oe.layers.test(Y.layers)&&xf(Oe,B,Y,Ue,Je,qe)}}function xf(T,B,Y,Z,k,we){T.onBeforeRender(_,B,Y,Z,k,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,B,Y,Z,T,we),k.transparent===!0&&k.side===Zt&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,_.renderBufferDirect(Y,B,Z,k,T,we),k.side=oi,k.needsUpdate=!0,_.renderBufferDirect(Y,B,Z,k,T,we),k.side=Zt):_.renderBufferDirect(Y,B,Z,k,T,we),T.onAfterRender(_,B,Y,Z,k,we)}function Ja(T,B,Y){B.isScene!==!0&&(B=ce);let Z=ye.get(T),k=m.state.lights,we=m.state.shadowsArray,Pe=k.state.version,Oe=O.getParameters(T,k.state,we,B,Y),Ue=O.getProgramCacheKey(Oe),qe=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?je:$e).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",le),qe=new Map,Z.programs=qe);let Je=qe.get(Ue);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Pe)return _f(T,Oe),Je}else Oe.uniforms=O.getUniforms(T),T.onBeforeCompile(Oe,_),Je=O.acquireProgram(Oe,Ue),qe.set(Ue,Je),Z.uniforms=Oe.uniforms;let He=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=ie.uniform),_f(T,Oe),Z.needsLights=L0(T),Z.lightsStateVersion=Pe,Z.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function yf(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=no.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function _f(T,B){let Y=ye.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function P0(T,B,Y,Z,k){B.isScene!==!0&&(B=ce),Ae.resetTextureUnits();let we=B.fog,Pe=Z.isMeshStandardMaterial?B.environment:null,Oe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Is,Ue=(Z.isMeshStandardMaterial?je:$e).get(Z.envMap||Pe),qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color,Xt=Bi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Xt=_.toneMapping);let It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ct=It!==void 0?It.length:0,Xe=ye.get(Z),Ft=m.state.lights;if(De===!0&&($===!0||T!==S)){let yn=T===S&&Z.id===w;ie.setState(Z,T,yn)}let ft=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ft.state.version||Xe.outputColorSpace!==Oe||k.isBatchedMesh&&Xe.batching===!1||!k.isBatchedMesh&&Xe.batching===!0||k.isBatchedMesh&&Xe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Xe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Xe.instancingMorph===!1&&k.morphTexture!==null||Xe.envMap!==Ue||Z.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ie.numPlanes||Xe.numIntersection!==ie.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Je||Xe.morphTargets!==He||Xe.morphNormals!==lt||Xe.morphColors!==Et||Xe.toneMapping!==Xt||Xe.morphTargetsCount!==Ct)&&(ft=!0):(ft=!0,Xe.__version=Z.version);let Un=Xe.currentProgram;ft===!0&&(Un=Ja(Z,B,k));let cr=!1,Nn=!1,Mo=!1,Ot=Un.getUniforms(),Xn=Xe.uniforms;if(ne.useProgram(Un.program)&&(cr=!0,Nn=!0,Mo=!0),Z.id!==w&&(w=Z.id,Nn=!0),cr||S!==T){ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(D,"projectionMatrix",T.projectionMatrix),Ot.setValue(D,"viewMatrix",T.matrixWorldInverse);let wn=Ot.map.cameraPosition;wn!==void 0&&wn.setValue(D,Q.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Nn=!0,Mo=!0)}if(k.isSkinnedMesh){Ot.setOptional(D,k,"bindMatrix"),Ot.setOptional(D,k,"bindMatrixInverse");let yn=k.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ot.setValue(D,"boneTexture",yn.boneTexture,Ae))}k.isBatchedMesh&&(Ot.setOptional(D,k,"batchingTexture"),Ot.setValue(D,"batchingTexture",k._matricesTexture,Ae),Ot.setOptional(D,k,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",k._indirectTexture,Ae),Ot.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",k._colorsTexture,Ae));let qn=Y.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&J.update(k,Y,Un),(Nn||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,Ot.setValue(D,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xn.envMap.value=Ue,Xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Xn.envMapIntensity.value=B.environmentIntensity),Nn&&(Ot.setValue(D,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&I0(Xn,Mo),we&&Z.fog===!0&&j.refreshFogUniforms(Xn,we),j.refreshMaterialUniforms(Xn,Z,W,K,m.state.transmissionRenderTarget[T.id]),no.upload(D,yf(Xe),Xn,Ae)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(no.upload(D,yf(Xe),Xn,Ae),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(D,"center",k.center),Ot.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ot.setValue(D,"normalMatrix",k.normalMatrix),Ot.setValue(D,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let yn=Z.uniformsGroups;for(let wn=0,Gh=yn.length;wn<Gh;wn++){let Ss=yn[wn];ze.update(Ss,Un),ze.bind(Ss,Un)}}return Un}function I0(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function L0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,B,Y){let Z=ye.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=B,ye.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let Y=ye.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};let D0=D.createFramebuffer();this.setRenderTarget=function(T,B=0,Y=0){I=T,E=B,R=Y;let Z=!0,k=null,we=!1,Pe=!1;if(T){let Ue=ye.get(T);if(Ue.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ue.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Ue.__hasExternalTextures)Ae.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let He=T.depthTexture;if(Ue.__boundDepthTexture!==He){if(He!==null&&ye.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);let Je=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[B])?k=Je[B][Y]:k=Je[B],we=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?k=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?k=Je[Y]:k=Je,L.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else L.copy(Ee).multiplyScalar(W).floor(),N.copy(q).multiplyScalar(W).floor(),G=ue;if(Y!==0&&(k=D0),ne.bindFramebuffer(D.FRAMEBUFFER,k)&&Z&&ne.drawBuffers(T,k),ne.viewport(L),ne.scissor(N),ne.setScissorTest(G),we){let Ue=ye.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,Y)}else if(Pe){let Ue=B;for(let qe=0;qe<T.textures.length;qe++){let Je=ye.get(T.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Je.__webglTexture,Y,Ue)}}else if(T!==null&&Y!==0){let Ue=ye.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(T,B,Y,Z,k,we,Pe,Oe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){ne.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let qe=T.textures[Oe],Je=qe.format,He=qe.type;if(!te.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&Y>=0&&Y<=T.height-k&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(B,Y,Z,k,_e.convert(Je),_e.convert(He),we))}finally{let qe=I!==null?ye.get(I).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,Z,k,we,Pe,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(B>=0&&B<=T.width-Z&&Y>=0&&Y<=T.height-k){ne.bindFramebuffer(D.FRAMEBUFFER,Ue);let qe=T.textures[Oe],Je=qe.format,He=qe.type;if(!te.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(B,Y,Z,k,_e.convert(Je),_e.convert(He),0);let Et=I!==null?ye.get(I).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Et);let Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wp(D,Xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(lt),D.deleteSync(Xt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Y=0){let Z=Math.pow(2,-Y),k=Math.floor(T.image.width*Z),we=Math.floor(T.image.height*Z),Pe=B!==null?B.x:0,Oe=B!==null?B.y:0;Ae.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Pe,Oe,k,we),ne.unbindTexture()};let U0=D.createFramebuffer(),N0=D.createFramebuffer();this.copyTextureToTexture=function(T,B,Y=null,Z=null,k=0,we=null){we===null&&(k!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=k,k=0):we=0);let Pe,Oe,Ue,qe,Je,He,lt,Et,Xt,It=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Oe=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Je=Y.min.y,He=Y.isBox3?Y.min.z:0;else{let qn=Math.pow(2,-k);Pe=Math.floor(It.width*qn),Oe=Math.floor(It.height*qn),T.isDataArrayTexture?Ue=It.depth:T.isData3DTexture?Ue=Math.floor(It.depth*qn):Ue=1,qe=0,Je=0,He=0}Z!==null?(lt=Z.x,Et=Z.y,Xt=Z.z):(lt=0,Et=0,Xt=0);let Ct=_e.convert(B.format),Xe=_e.convert(B.type),Ft;B.isData3DTexture?(Ae.setTexture3D(B,0),Ft=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ae.setTexture2DArray(B,0),Ft=D.TEXTURE_2D_ARRAY):(Ae.setTexture2D(B,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let ft=D.getParameter(D.UNPACK_ROW_LENGTH),Un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cr=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),Mo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);let Ot=T.isDataArrayTexture||T.isData3DTexture,Xn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let qn=ye.get(T),yn=ye.get(B),wn=ye.get(qn.__renderTarget),Gh=ye.get(yn.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gh.__webglFramebuffer);for(let Ss=0;Ss<Ue;Ss++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,k,He+Ss),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(B).__webglTexture,we,Xt+Ss)),D.blitFramebuffer(qe,Je,Pe,Oe,lt,Et,Pe,Oe,D.DEPTH_BUFFER_BIT,D.NEAREST);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||ye.has(T)){let qn=ye.get(T),yn=ye.get(B);ne.bindFramebuffer(D.READ_FRAMEBUFFER,U0),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,N0);for(let wn=0;wn<Ue;wn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qn.__webglTexture,k,He+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qn.__webglTexture,k),Xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,we,Xt+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,we),k!==0?D.blitFramebuffer(qe,Je,Pe,Oe,lt,Et,Pe,Oe,D.COLOR_BUFFER_BIT,D.NEAREST):Xn?D.copyTexSubImage3D(Ft,we,lt,Et,Xt+wn,qe,Je,Pe,Oe):D.copyTexSubImage2D(Ft,we,lt,Et,qe,Je,Pe,Oe);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ft,we,lt,Et,Xt,Pe,Oe,Ue,Ct,Xe,It.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,we,lt,Et,Xt,Pe,Oe,Ue,Ct,It.data):D.texSubImage3D(Ft,we,lt,Et,Xt,Pe,Oe,Ue,Ct,Xe,It):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,lt,Et,Pe,Oe,Ct,Xe,It.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,lt,Et,It.width,It.height,Ct,It.data):D.texSubImage2D(D.TEXTURE_2D,we,lt,Et,Pe,Oe,Ct,Xe,It);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mo),we===0&&B.generateMipmaps&&D.generateMipmap(Ft),ne.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var ud=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var YT=ud.length-1,Am=Math.min(...ud.map(n=>n[1])),Cm=Math.max(...ud.map(n=>n[1])),ZT=new M(0,0,(Am+Cm)/2),Rm=new M(.047,.027,(Cm-Am)/2);var KT=new ht,$T=new M,QT=new M,eE=new ct;var tE=new M,nE=new M;var iE=new M;var sE=new M,rE=new M,oE=new M,aE=new Tn,lE=new M;function Sa(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=_=>new M().fromBufferAttribute(t,n.index?n.index.getX(_):_),g=x(p),m=x(p+1),v=x(p+2),b=new Tn(g,m,v).getNormal(new M);b.lengthSq()>.1&&s.push({a:g,b:m,c:v,n:b})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new jt().setFromPoints(i).getSize(new M),h=Math.max(1e-4,e**2*.4),u=e?new M().setScalar(1/h):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}var cE=new M,hE=new M,uE=new M,dE=new M,fE=new ht,pE=new ht,mE=new M;function ro(n){return Sa(new We(n.x*2,n.y*2,n.z*2))}var gE=new M;var Pm=Sa(new Kn(1,0).scale(...Rm)),xE={mesh:{position:new M,quaternion:new ht},shape:Pm,radius:Pm.radius,precise:!0};var yE=new M,_E=new M,vE=new M,ME=new ht,bE=new ht,SE=new ht;var wE=new M,TE=new M,EE=new M,AE=new M;var CE=new M;var RE=new M,PE=new M,IE=new M,LE=new M,DE=new M,UE=new M,NE=new M;var FE={mesh:{position:null,quaternion:new ht},shape:{sphereRadius:0,normals:[],edges:[]}};function th(n,e,t){let i=new We(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function dd(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function Im(n){switch(n){case"sphere":return new Cn(.5,24,16);case"cylinder":return new wt(.5,.5,1,24);case"cone":return new Ds(.5,1,24);case"torus":return new Mn(.34,.14,12,32);case"capsule":return new ns(.32,.36,8,16);default:return new We(1,1,1)}}function fd(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new M(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],h=l[1].clone().sub(c).normalize(),u=l.at(-1).clone().sub(c);u.addScaledVector(h,-u.dot(h)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(h)/2.6,p.dot(u)/2.6)}}let o=new st;return o.setAttribute("position",new Ne(s,3)),o.setAttribute("uv",new Ne(r,2)),o.computeVertexNormals(),o}function wa(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var ls=(n,e,t)=>n+(e-n)*t,oo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function nh(n,e){let t=Math.floor(n),i=Math.floor(e),s=oo(0,1,n-t),r=oo(0,1,e-i);return ls(ls(wa(t,i),wa(t+1,i),s),ls(wa(t,i+1),wa(t+1,i+1),s),r)}function Lm(n,e){return nh(n,e)*.54+nh(n*2.07+3.4,e*2.07-6.1)*.26+nh(n*4.2+9,e*4.2)*.13+nh(n*8.6,e*8.6-13)*.07}function Dm(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((p,x)=>ls(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,v=0;if(c>.025)if(n){let _=wa(p+792,l+677);_>.9988&&(v=(_-.9988)*49e3*oo(.09,.3,c))}else{let[_,A]=s[p],E=2.8*h/(c+.16),R=_*E+3.6,I=A*E-8.1,w=Lm(R,I),S=Lm(R-.12,I-.09);g=oo(.49,.66,w)*oo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(w-S)*5+(w-.54)*.8))}let b=n?1:ls(.94,1,oo(.05,.34,c));i[x]=ls(f[0],(139+115*m)*b,g)+v,i[x+1]=ls(f[1],(154+100*m)*b,g)+v*.94,i[x+2]=ls(f[2],(178+77*m)*b,g)+v*.86,i[x+3]=255}}let a=new ci(i,1024,512,Rn);return a.colorSpace=gt,a.wrapS=vn,a.magFilter=tn,a.minFilter=bn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Um(){return{day:Dm(!1),night:Dm(!0)}}var Gt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Nm=Gt(-24,24,-51,7),Fm=34521,Om={x:0,y:0,z:3},cs={x:.05,y:1.16,z:5.9},ao={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Gt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Gt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Gt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Gt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Gt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Gt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Gt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Gt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Gt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Gt(9,23,-48,-37),sign:[16,-38.2]}},kE=[Gt(-9,-6,-51,7),Gt(6,9,-51,7),Gt(-24,24,-8,-5),Gt(-24,24,-27,-23),Gt(9,23,-37,-34)],Bm=[{name:"Glace",bounds:ao.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:ao.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Gt(-9,9,-51,7)},{name:"Sol ouest",bounds:Gt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Gt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Gt(-24,-23,-51,7)},{name:"Sol est",bounds:Gt(9,23,-51,-48)},{name:"Sol est",bounds:Gt(9,23,-37,7)},{name:"Bordure est",bounds:Gt(23,24,-51,7)}],Ta={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},lo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],zm=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),hs={x:-19.4,y:.68,z:-3.25},km=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Vm={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function ih(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ni(i);return s.colorSpace=gt,s}function Gm(n,e){let{day:t,night:i}=Um(),s=new me(new Cn(180,40,20),new Vt({map:t,side:an,fog:!1,toneMapped:!1}));n.add(s);let r=ih(128,128,(y,P)=>{let O=y.createRadialGradient(P/2,P/2,0,P/2,P/2,P/2);O.addColorStop(0,"#fff8df"),O.addColorStop(.12,"#fff3bd"),O.addColorStop(.18,"rgba(255,225,144,.40)"),O.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=O,y.fillRect(0,0,P,P)}),o=new Yo(new kr({map:r,blending:pa,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=jr,a.needsUpdate=!0;let l=new io(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Bs("#daeaff","#88724c",2.25),h=new zs("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(c,h,h.target);let u=new M,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function p(y){f=d[y]?y:0;let P=d[f];c.color.set(P.fill),c.groundColor.set(P.ground),c.intensity=P.hemi,h.color.set(P.sun),h.intensity=P.power,u.set(...P.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(P.sun),o.material.opacity=P.glow,s.material.map=f===2?i:t,s.material.color.set(P.sky),n.fog.color.set(P.fog),n.background.set(P.fog),n.environmentIntensity=g*[1,.56,.09][f]}function x(y){if(!h.castShadow)return;let P=h.target.position,O=Math.round(y.x/4)*4,j=Math.round(y.y/4)*4,V=Math.round(y.z/4)*4;P.x===O&&P.y===j&&P.z===V||(P.set(O,j,V),h.position.copy(P).add(u))}let g=0;n.background=new Ge(d[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function v(y,P,O){let[,j,V]=m[P],xe=512;y.save(),y.scale(O/512,O/512),y.fillStyle=j,y.fillRect(0,0,xe,xe);let ie=P+19;function pe(){return ie=Math.imul(ie,1664525)+1013904223>>>0,ie/4294967296}if(y.fillStyle=V,P===16){for(let de=0;de<16;de++)for(let J=0;J<16;J++)(J+de)%2===0&&y.fillRect(J*32,de*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(P)){let de=P===15?32:64;y.globalAlpha=.48;for(let J=0;J<xe;J+=de){y.fillRect(0,J,xe,P===8?3:2);for(let be=-de;be<xe;be+=de)y.fillRect(be+J/de%2*(P===2?de/2:0),J,2,de)}}else if([4,5,6,7,10,11,12].includes(P)){let de=P===5?38:P===7?64:18;for(let J=0;J<de;J++){y.strokeStyle=V,y.globalAlpha=.08+pe()*.22,y.lineWidth=P===5?1+pe()*8:1+pe()*4;let be=pe()*xe,Fe=P===5?.018:.009;y.beginPath();for(let _e=0;_e<=xe;_e+=8){let Se=be+Math.sin(_e*Fe+J)*(P===6||P===7?4:12+J%5*3)+(P===4?_e*.28:0);_e===0?y.moveTo(_e,Se):y.lineTo(_e,Se)}y.stroke()}}else{y.globalAlpha=.27;for(let de=0;de<120;de++){let J=pe()*xe,be=pe()*xe,Fe=2+pe()*6;y.beginPath(),y.arc(J,be,Fe,0,Math.PI*2),y.fill()}}if(P!==16)for(let de=0;de<4400;de++)y.globalAlpha=.05+pe()*.1,y.fillStyle=pe()>.5?V:"#222324",y.fillRect(pe()*xe,pe()*xe,1+pe()*4,1+pe()*3);y.restore()}let b=new Set([0,2,4,5,8,15,16]),_=m.map(([y,P,O,j,V,xe],ie)=>{let pe=b.has(ie)?512:256,de=ih(pe,pe,be=>v(be,ie,pe));de.wrapS=de.wrapT=vn;let J=new nn({map:de,roughness:j,metalness:V,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return J.name=y,J}),A=_.map(y=>y.map.image),E=512,R=_.map(y=>new zn({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),I={value:0},w={value:.24},S={value:null},L={value:0};function N(){S.value?.dispose(),S.value=ih(512,512,(y,P)=>{y.fillStyle="#ffffff",y.fillRect(0,0,P,P);let O=P/52,j=P/64;for(let V of G){if(!V.position||!V.half||V.position.y+V.half.y<.22)continue;let xe=(V.position.x+26)*O,ie=(V.position.z+54)*j,pe=Math.min(55,V.half.x*O+5),de=Math.min(72,V.half.z*j+6);y.save(),y.translate(xe+V.half.y*O*.2,ie+V.half.y*j*.24),y.scale(pe,de);let J=y.createRadialGradient(0,0,.15,0,0,1);J.addColorStop(0,"rgba(22,37,65,.54)"),J.addColorStop(.58,"rgba(36,54,76,.29)"),J.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=J,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[..._,...R])y.onBeforeCompile=P=>{P.uniforms.uFocusAmount=I,P.uniforms.uFocusRadius=w,P.uniforms.uLabLightmap=S,P.uniforms.uLabBakedStrength=L,P.vertexShader=`varying vec3 vLabPosition;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),P.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <map_fragment>",`
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let G=[],H=[];function z(y,P,O,j,V,xe,ie,pe=0,de=0,J=1,be=1,Fe=!1){let _e=new me(Fe?new We(V,xe,ie):th(V,xe,ie),_[pe]);_e.position.set(P,O,j),_e.rotation.x=de,_e.receiveShadow=!0,_e.castShadow=!0,n.add(_e);let Se=new M(V/2,xe/2,ie/2),ze={mesh:_e,position:_e.position,quaternion:_e.quaternion,half:Se,min:Se.clone().negate(),friction:J,gravity:be,name:y,type:pe,shape:ro(Se)};return G.push(ze),ze}let X=Bm.map(({name:y,bounds:P,type:O=0,friction:j=.78,gravity:V=1})=>{let{xMin:xe,xMax:ie,zMin:pe,zMax:de}=P;return z(y,(xe+ie)/2,-.33,(pe+de)/2,ie-xe,.66,de-pe,O,0,j,V)});for(let y of Object.values(Vm))for(let P of y)z(...P);let{xMin:K,xMax:W,zMin:ee,zMax:ge}=Nm;z("But\xE9e arri\xE8re",0,1.35,ee+.4,W-K,2.7,.6,2),z("But\xE9e ouest",K+.3,1.05,(ee+ge)/2,.6,2.1,ge-ee,2),z("But\xE9e est",W-.3,1.05,(ee+ge)/2,.6,2.1,ge-ee,2);let{xMin:Ee,xMax:q,zMin:ue,zMax:Ve}=ao.hills.bounds,De=q-Ee,$=Ve-ue,se=16,Q=64,fe=new on(De,$,se,Q).rotateX(-Math.PI/2).translate(Ee+De/2,0,ue+$/2),ce=fe.attributes.uv;for(let y=0;y<ce.count;y++)ce.setXY(y,ce.getX(y)*De/2.6,ce.getY(y)*$/2.6);let ke=fe.attributes.position,ut;function D(y){if(ut===y)return;ut=y;let P=ut*.017;for(let O=0;O<ke.count;O++){let j=ke.getX(O),V=ke.getZ(O),xe=Math.sin(Math.PI*Le.clamp((j-Ee)/De,0,1)),ie=Math.min(1,(V-ue)*.48,(Ve-V)*.48),pe=.93+.56*Math.sin(V*.36+P)+.32*Math.cos(j*.67+V*.26+P*1.4)+.19*Math.sin(V*.81+P*.67);ke.setY(O,Math.max(0,xe*ie*pe))}ke.needsUpdate=!0,fe.computeVertexNormals(),fe.computeBoundingSphere()}D(Fm);let he=new me(fe,_[3]);he.userData.editorAssetId="lab-hill",he.receiveShadow=he.castShadow=!0,n.add(he);let oe=(y,P)=>{let O=Le.clamp((y-Ee)/De*se,0,se-1e-6),j=Le.clamp((P-ue)/$*Q,0,Q-1e-6),V=Math.floor(O),xe=Math.floor(j),ie=O-V,pe=j-xe,de=se+1,J=xe*de+V,be=ke.getY(J),Fe=ke.getY(J+1),_e=ke.getY(J+de),Se=ke.getY(J+de+1);return ie+pe<=1?be+(Fe-be)*ie+(_e-be)*pe:Se+(_e-Se)*(1-ie)+(Fe-Se)*(1-pe)};G.push({heightfield:!0,mesh:he,editorAssetId:"lab-hill",height:oe,...ao.hills.bounds,friction:.81,gravity:1});function te(y,P,O,j,V=1.45){let xe=ih(384,72,(pe,de,J)=>{pe.fillStyle="#202a32",pe.fillRect(0,0,de,J),pe.fillStyle=j,pe.font="bold 31px system-ui",pe.textAlign="center",pe.fillText(y,de/2,48,de-20)}),ie=new me(new on(3.2,.6),new Vt({map:xe,side:Zt}));ie.position.set(P,V,O),n.add(ie),H.push(ie)}for(let y of Object.values(ao)){te(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:P,xMax:O,zMin:j,zMax:V}=y.bounds,xe=new jo(new st().setFromPoints([new M(P,.025,j),new M(O,.025,j),new M(O,.025,V),new M(P,.025,V)]),new jn({color:y.color,transparent:!0,opacity:.72}));n.add(xe),H.push(xe)}te("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),te("MURS HAUTS",3,-31,"#e8d2ff"),te("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ne=new nn({color:"#c8e6ed",metalness:1,roughness:.16}),Te=new me(new Jn(.54,2),ne);Te.userData.editorAssetId="chrome-sphere",Te.position.set(hs.x,hs.y,hs.z),Te.castShadow=!0,n.add(Te);let ye=m.map((y,P)=>{let{x:O,z:j}=km(P);return z("\xC9chantillon "+m[P][0],O,.325,j,.65,.65,.65,P,0,1,1,!0).mesh}),Ae=new pn(1,12).rotateX(-Math.PI/2),$e=new Vt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function je(y){let P=new me(Ae,$e);return P.scale.setScalar(y),n.add(P),P}function C(y,P,O,j,V,xe,ie,pe){let de=P>=3;e.shadowMap.enabled=de,h.castShadow=de,$e.opacity=P===2?.17:.11,L.value=pe?.38+O*.04:0;let J=P>=9?2048:P>=6?1024:P>=4?512:256;h.shadow.intensity=.45+P*.055,h.shadow.radius=.65+P*.12;let be=13+P*1.2;Object.assign(h.shadow.camera,{left:-be,right:be,top:be,bottom:-be}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==J&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(J,J)),o.visible=V,ie!==E&&(E=ie,_.forEach((_e,Se)=>{let ze=_e.userData.texture??_e.map,U=b.has(Se)?ie:Math.min(256,ie);if(ze.image.width===U)return;let Me=document.createElement("canvas");Me.width=Me.height=U;let Ce=Me.getContext("2d");U>512?v(Ce,Se,U):Ce.drawImage(A[Se],0,0,U,U);let Ie=new Ni(Me);Ie.colorSpace=ze.colorSpace,Ie.wrapS=ze.wrapS,Ie.wrapT=ze.wrapT,Ie.repeat.copy(ze.repeat);for(let ve of[_e,R[Se]])ve.userData.texture=Ie,ve.map=Ie,ve.needsUpdate=!0;ze.dispose()}));let Fe=y>=4;for(let _e of G)_e.mesh?.isMesh&&!_e.zone&&(_e.mesh.material=Fe?_[_e.type]:R[_e.type]);he.material=Fe?_[3]:R[3];for(let _e=0;_e<ye.length;_e++)ye[_e].material=Fe?_[_e]:R[_e];_.forEach((_e,Se)=>{for(let ze of[_e,R[Se]])ze.userData.texture||(ze.userData.texture=ze.map),ze.map=xe?ze.userData.texture:null,ze.color.set(xe?"#ffffff":m[Se][1]),ze.needsUpdate=!0}),g=j?.21+O*.067:0,ne.metalness=j?.95:.1,ne.roughness=j?.13:.46,s.visible=y>=2,p(f)}return{boxes:G,floors:X,probe:Te,display:ye,visual:C,shadow:je,setTimeOfDay:p,centerShadows:x,get hillSeed(){return ut},setHillSeed:D,bakeLightmap:N,mapMaterial:(y,P)=>P>=4?_[y]:R[y],builtObjects:[...G.map(y=>y.mesh).filter(y=>y?.isObject3D),Te,...H],materials:[..._,...R],focus(y,P,O){I.value=y?P*.75:0,w.value=.07+O*.058}}}function Hm(n,e,t){function i(c,h,u=.85){let d=c.getWorldPosition(new M),f=c.getWorldQuaternion(new ht);e.push({half:h,min:h.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:ro(h),friction:u,gravity:1})}let s=[],r=[],o=new zn({color:"#485d5d",flatShading:!0});function a([c,h],u,d){let f=new me(new We(.095,.68,.11),o);f.position.set(c,.34,h+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new M(.0475,.34,.055));let p=new dn;p.position.set(c,.85,h+.4),p.rotation.x=-.35,n.add(p);let x=new me(new We(.64,.36,.055),new zn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),v=new Ni(g);v.colorSpace=gt;let b=new me(new on(.61,.095),new Vt({map:v}));b.position.set(0,.116,.03),p.add(b);let _=.592/d.length,A=d.map(([R,I],w)=>{let S=new me(new We(_-.012,.155,.04),new zn({color:"#478086"}));S.position.set(-.296+_*(w+.5),-.045,.046),p.add(S),s.push(S),S.userData.touchWidth=_-.012;let L=document.createElement("canvas");L.width=208,L.height=172;let N=new Ni(L);N.colorSpace=gt;let G=new me(new on(_-.017,.139),new Vt({map:N}));G.position.z=.0205,S.add(G);let H=-1/0;return S.userData.action=()=>{let z=performance.now();z-H<250||(H=z,I(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:R,context:L.getContext("2d"),texture:N}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(u,17,62,478);for(let R of A){let I=R.context;I.fillStyle="#386269",I.fillRect(0,0,208,172),I.fillStyle="#fff2d5",I.textAlign="center",I.font="bold 27px system-ui";let w=(typeof R.label=="function"?R.label():R.label).split("|");w.forEach((S,L)=>I.fillText(S,104,(w.length>1?68:97)+L*37,188)),R.texture.needsUpdate=!0}v.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(Ta.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,lo[0])],["Boule",()=>t.spawn(1,lo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,lo[0])],["Vider",t.clear]]),a(Ta.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,lo[1])],["Sph\xE8re",()=>t.spawn(5,lo[1])]]),a(Ta.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ta.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function sh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new st,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Wm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Wm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Wm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new St(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var oh=0,Ob=1,Bb=new M,Xm=new da,pd=new un,qm=new M,rh=new Tn,ah=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new lh,this.unassigned=new lh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new md(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Bb)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===oh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,Xm.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){Xm.closestPointToPoint(p.point,!0,qm);let x=qm.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,pd.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(pd.distanceToPoint(p.point));x>r&&(r=x,h=p)}}let u=[];if(pd.distanceToPoint(h.point)<0){u.push(di.create(a,l,c),di.create(h,l,a),di.create(h,c,l),di.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(di.create(a,c,l),di.create(h,a,l),di.create(h,l,c),di.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===oh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=Ob;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===oh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=di.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},di=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=oh,this.edge=null}static create(e,t,i){let s=new n,r=new Ea(e,s),o=new Ea(t,s),a=new Ea(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return rh.set(e.point,t.point,i.point),rh.getNormal(this.normal),rh.getMidpoint(this.midpoint),this.area=rh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ea=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},md=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},lh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ki=class extends st{constructor(e=[]){super();let t=[],i=[],r=new ah().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var Pn=Math.PI*2,ch=.84,Vi=128;function fs(n){let e=new Uint8Array(Vi*Vi*4);for(let i=0;i<Vi;i++)for(let s=0;s<Vi;s++){let r=(s+.5)/Vi,o=(i+.5)/Vi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/ch,1),Math.min(o/ch,1),s,i),l=(s+i*Vi)*4;for(let c=0;c<3;c++)e[l+c]=Le.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ci(e,Vi,Vi);return t.colorSpace=gt,t.generateMipmaps=!0,t.minFilter=bn,t.magFilter=tn,t.needsUpdate=!0,t}function js(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function tt(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new Ge(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*ch,r.getY(l)*ch):r.setXY(l,.95,.95);return i.setAttribute("color",new St(a,3)),i}function ps(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:sh(s),material:new nn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Ym(n,e,t){let i=n/2,s=e/2,r=new Fi;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function us(n,e,t,i,s){return new Ns(Ym(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ds(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=e;f++){let p=Pn*f/e,x=t(u,d,p,h);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,h/(n.length-1)),h===n.length-1||f===e)continue;let g=h*(e+1)+f,m=g+e+1;u>0&&r.push(g,g+1,m),n[h+1][0]>0&&r.push(g+1,m+1,m)}}let o=new st;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let h=0;h<n.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Aa(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Pn*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new ki(t)}function zb(){let t=new aa(Ym(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Le.clamp(i.getX(l)/.098+.5,0,1),h=Le.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=fs((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Pn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[tt(us(.106,.207,.013,.011,.0019),8425890),tt(us(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),tt(us(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),tt(t,16777215,!0),tt(us(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),tt(new We(.0036,.024,.004).translate(.055,.029,0),11714250),tt(new We(.0036,.015,.004).translate(-.055,.032,0),11385285),tt(new We(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(tt(new wt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(tt(new pn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(tt(new pn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ki([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new M(c,h,l))));return ps("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function kb(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ds(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=fs((a,l,c,h)=>{let u=Pn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),p=Math.max(...e.map(v=>Math.exp(-(((d-v+.035*Math.cos(u))/.009)**2)))),x=f**3*p,g=js(c,h)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=Aa([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return ps("bread","Baguette de pain",.27,o,[tt(s,16777215,!0)],r,.9)}function Vb(){let n=fs((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*js(a,l)-(c&&(u||d)?35:0);return[p*.94,p,p*1.04]}),e=ds([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ds([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[tt(e,16777215,!0),tt(t,11056059),tt(new wt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),tt(new wt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Pn*r/5;i.push(tt(new We(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Aa([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return ps("wheel","Roue",1.8,s,i,n,.64,.23)}function Gb(){let n=fs((r,o,a,l)=>{let c=js(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Pn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=ds([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Mn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Pn*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new ki(i);return ps("cup","Tasse",.39,s,[tt(e,16777215,!0),tt(t,15785922)],n,.37)}function Hb(){let n=ds([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=fs((s,r,o,a)=>{let l=9*js(o,a),c=11*Math.cos(s*Pn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Pn*48+s*Pn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Pn*4);return[h,h*1.13,h*1.24]}),t=[tt(n,16777215,!0),tt(new is(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),tt(new pn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),tt(new pn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),tt(new wt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),tt(new pn(.008,12).translate(0,.035,.0336),15633202)],i=Aa([[.033,-.143],[.054,.133]],6);return ps("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function Wb(){let n=ds([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=fs((r,o,a,l)=>{let c=10*js(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Pn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Pn*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[tt(n,16777215,!0),tt(new pn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),tt(new is(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),tt(new pn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Aa([[.069,-.112],[.069,.109]],6);return ps("soda","Canette de soda",.35,s,i,t,.42,.27)}function Xb(){let n=ds([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=fs((s,r,o,a)=>{let l=15*js(o,a),c=8*Math.cos(s*Pn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[tt(n,16777215,!0),tt(us(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),tt(new pn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Aa([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return ps("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function qb(){let n=fs((s,r,o,a)=>{let l=8*js(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ds([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[tt(us(.138,.22,.061,.016,.004),14788675),tt(us(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),tt(new on(.106,.174).translate(0,-.004,.0395),16777215,!0),tt(e,2502456),tt(new wt(.014,.017,.016,10).translate(.04,.117,.001),2503482),tt(new We(.008,.047,.027).translate(-.072,.014,-.002),3028798),tt(new We(.006,.02,.019).translate(-.072,-.043,-.002),3950414),tt(new pn(.004,8).translate(.04,.066,.0397),15817792),tt(new pn(.004,8).translate(-.04,.066,.0397),7903100),tt(us(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return ps("radio","Talkie-walkie",.43,new ki(i),t,n,.61,.08)}function Zm(){return[zb(),kb(),Vb(),Gb(),Hb(),Wb(),Xb(),qb()]}var Yb=[0,1,2,3,4,5,7,8,9,10];function jm(n){zm.forEach(({x:e,z:t},i)=>n(Yb[i],new M(e,.8,t)))}function Jm(){let n=[["Cube",new We(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Jn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Fs(.29),"#d8ae53",0,1],["Brique",new We(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new We(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Jn(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Sa(t,s),material:new nn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:ro(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Zm()){let s=Sa(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var Km=48,Zb=3,jb=128,$m=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),Jb=(n,e,t)=>Math.max(e,Math.min(t,n)),Kb=()=>structuredClone($m.shield),Ca=(n,e,t,i)=>Number.isFinite(n)?Jb(n,t,i):e;function uh(n){let e=n?.mode==="lathe"?$m.bottle:Kb(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Km?n.points.map(o=>[Ca(o?.[0],0,-1.5,1.5),Ca(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:Ca(n?.depth,e.depth,.025,1.5),bevel:Ca(n?.bevel,e.bevel,0,.15),segments:Math.round(Ca(n?.segments,32,Zb,jb))}}function Qm(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function hh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function $b(n,e,t,i){let s=hh(n,e,t),r=hh(n,e,i),o=hh(t,i,n),a=hh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function Qb(n){let e=uh(n),t=e.mode==="lathe"?e.points:Qm(e);if(t.length<3||t.length>Km*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&$b(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function eg(n){let e=uh(n),t=Qb(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ae(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ae(0,s[0].y)),s.at(-1).x>0&&s.push(new ae(0,s.at(-1).y)),i=new oa(s,e.segments);let r=[],o=i.attributes.position,a=new M,l=new M,c=new M,h=new M,u=i.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);i.setIndex(r)}else{let s=Qm(e),r=new Fi;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Ns(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new St(new Float32Array(s*2),2))}return i}var gd=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ra=null,eS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Js(n){return typeof n=="string"&&eS.has(n.replace(/^custom-model-game-/,""))}function dh(n){let e=n?.parts;return Js(n?.id)||Js(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Js(t?.assetId))}function ng(){if(Ra)return Ra;let n=Jm(),e=gd;return Ra=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Ra.set("chrome-sphere",{geometry:new Jn(.54,2),material:new nn({color:"#c8e6ed",metalness:1,roughness:.16})}),Ra}function fh(n){return typeof n=="string"&&ng().has(n)}function xd(n){return ng().get(n)??null}function tS(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function tg(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[tS(e,n)]}}function yd(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>tg(e,t)),tg("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Sd="gorilla-lab-models-v1",co=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),nS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,iS=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),sg=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),vd=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),sS=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Pa=(n,e,t,i)=>Number.isFinite(n)?Le.clamp(n,e,t):i;function wd(n){return{gravity:Pa(n?.physics?.gravity,0,2.5,1),bounce:Pa(n?.physics?.bounce,0,1.65,1)}}function rg(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Pa(n?.uv?.repeat,.01,100,1),angle:Pa(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Pa(n?.uv?.offset?.[t],-100,100,0))}}var rS=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),oS=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,aS=/^#[a-f\d]{6}$/i;function ig(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function ms(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Le.clamp(n[s],t,i):e)}var Md=new Set(["box","sphere","capsule","convex"]);function lS(n){if(n?.mode==="box")return{mode:"box",center:ms(n.center,0,-6,6),size:ms(n.size,.5,.025,12)};let e=Math.round(Le.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Md.has(n.shape)?n.shape:"box",center:ms(n.center,0,-6,6),size:ms(n.size,.5,.025,12),rotation:ms(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Md.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function Ks(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>co.models||JSON.stringify(n).length>co.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!dh(i)).map(i=>{if(typeof i?.id!="string"||!oS.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>co.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:ig(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...fh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(rS).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:lS(i?.hitbox),...i.physics?{physics:wd(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(s=>!Js(s?.assetId)).map((s,r)=>({name:ig(s?.name,`Pi\xE8ce ${r+1}`),...Number.isInteger(s?.group)&&s.group>0&&s.group<=co.parts?{group:s.group}:{},shape:s?.shape==="asset"&&fh(s?.assetId)?"asset":Object.hasOwn(iS,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&fh(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:uh(s?.profile)}:{},position:ms(s?.position,0,-3,3),rotation:ms(s?.rotation,0,-360,360),scale:ms(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&aS.test(s.color)?s.color:"#51bdd2",...Object.hasOwn(sS,s?.zone)?{zone:s.zone}:{},...Object.hasOwn(vd,s?.finish)?{finish:s.finish}:{},...s?.uv?{uv:rg(s)}:{},surface:Object.hasOwn(sg,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=co.textureBytes&&nS.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function og(n){try{let e=(n??globalThis.localStorage)?.getItem(Sd);if(e&&e.length<=co.fileBytes)return Ks(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function cS(n){switch(n){case"tetrahedron":return new Fs(Math.sqrt(3)/2);case"sphere":return new Cn(.5,20,12);case"cylinder":return new wt(.5,.5,1,20);case"cone":return new Ds(.5,1,20);case"torus":return new Mn(.365,.135,8,24);case"capsule":return new ns(.28,.44,6,16);case"diamond":return new Kn(.5);default:return new We(1,1,1)}}var ag=Object.keys(sg),Gn=64,Ia=4,lg=2,Si;function cg(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function hg(){if(Si)return Si;let n=Gn*Ia,e=Gn*lg,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Gn)*Ia+Math.floor(s/Gn),o=cg(ag[r],s%Gn,i%Gn),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Si=new ci(t,n,e),Si.colorSpace=gt,Si.magFilter=tn,Si.minFilter=bn,Si.generateMipmaps=!0,Si.needsUpdate=!0,Si}var _d=new Map;function hS(n){if(_d.has(n))return _d.get(n);let e=new Uint8Array(Gn*Gn*4);for(let i=0;i<Gn;i++)for(let s=0;s<Gn;s++){let r=cg(n,s,i),o=(i*Gn+s)*4;e.set([r,r,r,255],o)}let t=new ci(e,Gn,Gn);return t.colorSpace=gt,t.wrapS=t.wrapT=vn,t.magFilter=tn,t.minFilter=bn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,_d.set(n,t),t}function ug(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function uS(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=rg(e),a=Le.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:d}=n.attributes,f=new M,p=new M;for(let x=0;x<h.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(h,x).multiply(t),p.fromBufferAttribute(u,x);let v=Math.abs(p.x),b=Math.abs(p.y),_=Math.abs(p.z);v>=b&&v>=_?(g=f.z,m=f.y):b>=_?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function ph(n,e=new M(...n.scale)){let t=n.shape==="asset"?xd(n.assetId):null,i=n.shape==="custom"?eg(n.profile):t?.geometry?.clone()??cS(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Ne(new Float32Array(s.attributes.position.count*2),2)),n.uv&&uS(s,n,e);let r=n.rotation.map(Le.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new Ge(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=ag.indexOf(n.surface),u=h%Ia,d=Math.floor(h/Ia),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(u+.05+c.getX(p)*.9)/Ia,(d+.05+c.getY(p)*.9)/lg);return s.setAttribute("color",new St(l,3)),s}function dS(n){let e=n?.shape==="asset"?xd(n.assetId):null,t=vd[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new vi().load(n.texture);a.colorSpace=gt,a.wrapS=a.wrapT=vn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=vn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Ge(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??vd.original;if(!n?.texture)return new nn({vertexColors:!0,map:n?.uv?hS(n.surface):hg(),roughness:i,metalness:s});let r=new vi().load(n.texture);return r.colorSpace=gt,r.wrapS=r.wrapT=vn,new nn({vertexColors:!0,map:r,roughness:i,metalness:s})}function mh(n){return n?.parts?.some(ug)?n.parts.map(dS):new nn({vertexColors:!0,map:hg(),roughness:.68})}function gh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Si&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function bd(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return ph(s);let r=new kt(...s.rotation.map(Le.degToRad),"ZYX"),o=new M(...s.scale).multiply(new M(...[0,1,2].map(a=>new M().setComponent(a,1).applyEuler(r).multiply(e).length())));return ph(s,o)}),i=sh(t,n.some(ug));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function xh(n,e=null){let t=bd(n.parts),i=t.boundingBox.getSize(new M).max(new M(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=bd(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function La(n){let e=new jt;for(let t of n.parts??[]){let i=ph(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function ho(n){return La(n).getSize(new M)}function dg(n){let e=La(n),t=e.getCenter(new M),i=e.getSize(new M),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Md.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Le.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):i,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function fS(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<i.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(i[l]);for(let h=0;h<i.length;h++)a[h]=Math.min(a[h],i[h].distanceToSquared(i[l]))}return r}function pS(n,e=null){let t=dg(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new M(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,d)=>d!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new ns(l,c,Math.max(2,Math.round(i/8)),i):new Cn(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&n.parts?.length){let s=bd(n.parts),r=fS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new ki(r),a=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new We(1,1,1)}function fg(n,e=null){let t=dg(n),i=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=pS(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Le.degToRad(t.rotation.x)),a.rotateY(Le.degToRad(t.rotation.y)),a.rotateZ(Le.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function pg(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=La(n),i=t.getCenter(new M),s=t.getSize(new M).max(new M(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new M(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=ph(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new M).sub(i).multiply(r),size:l.getSize(new M).multiply(r).max(new M(.01,.01,.01))};return a.dispose(),[c]})}var xg=256,yg=1/2.6**2,vh=1e4,gs=1e4,Td=10,Ed=10,mS=256,gS=16,uo=24,mg=new WeakMap,Gi=Le.clamp,$s=Le.lerp,_h=n=>n*n*(3-2*n);function sn(n,e,t,i){return Number.isFinite(n)?Gi(n,e,t):i}function _g(n){if(!n)return null;let e=Ks({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var xS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function vg(n,e=gS){return Math.round(sn(n,1,xg,e))}function yS(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return sn(n[e+"Density"],0,gs,0);let r=sn(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return sn(o/t,0,gs,0)}var _S=["grass","shrub","model"],vS=["keep","fit","stretch"],MS=/^#[a-f\d]{6}$/i;function Ua(n={}){let e=_g(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,Td).map(r=>MS.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:sn(n.density,0,gs,1),colors:s,seed:Math.round(sn(n.seed,0,2147483647,1)),size:sn(n.size,.05,gs,1),fit:vS.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:sn(n.variation,0,Ed,0)}}function bS(n,e){return Array.isArray(n.rules)?n.rules.slice(0,vh).filter(t=>t&&typeof t=="object"&&_S.includes(t.kind)).filter(t=>t.kind!=="model"||_g(t.model)).map(Ua):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=yS(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ua({kind:t,model:a,density:o,seed:n.seed,size:sn(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Qs(n={},e=1){let t=vg(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(sn(n?.seed,0,2147483647,1)),amplitude:sn(n?.amplitude,0,12,0),frequency:sn(n?.frequency,.015,2,.12),octaves:Math.round(sn(n?.octaves,1,5,3)),roughness:sn(n?.roughness,.15,.95,.42),ridge:sn(n?.ridge,0,1,0),edgeFade:sn(n?.edgeFade,0,1,0),rules:bS(n??{},e),textureDensity:sn(n?.textureDensity,1e-4,mS,yg),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&xS.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>sn(s,-uo,uo,0)):null}}function Mg(n,e,t,i){let s=Gi(t,0,e),r=Gi(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,d=n[u],f=n[u+1],p=n[u+h],x=n[u+h+1];return l+c<=1?d+(f-d)*l+(p-d)*c:x+(p-x)*(1-l)+(f-x)*(1-c)}function Ad(n,e){let t=vg(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>Mg(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Hi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function yh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=_h(n-i),o=_h(e-s),a=$s(Hi(i,s,t),Hi(i+1,s,t),r),l=$s(Hi(i,s+1,t),Hi(i+1,s+1,t),r);return 2*$s(a,l,o)-1}function Na(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d}=i,f=mg.get(n),p=f&&f.w===e&&f.d===t&&f.detail===s&&f.seed===r&&f.amplitude===o&&f.frequency===a&&f.octaves===l&&f.roughness===c&&f.ridge===h&&f.edgeFade===u;if(p&&f.heights===d)return f;let x=s+1,g=p?f.procedural:new Float64Array(x**2);if(!p&&o)for(let b=0;b<=s;b++)for(let _=0;_<=s;_++){let A=(_/s-.5)*e*a,E=(b/s-.5)*t*a,R=0,I=1,w=0;for(let N=0;N<l;N++){let G=yh(A*2**N,E*2**N,r+N*13);R+=I*$s(G,1-2*Math.abs(G),h),w+=I,I*=c}let S=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(_/s-.5))*2,(.5-Math.abs(b/s-.5))*2)),u*2):1,L=l===3&&c===.42&&h===0&&u===0;g[b*x+_]=L?o*(.62*yh(A,E,r)+.26*yh(A*2.03,E*2.03,r+13)+.12*yh(A*4.13,E*4.13,r+37)):o*R/w*S}let m=d?g.map((b,_)=>b+d[_]):g,v={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d,procedural:g,surface:m};return mg.set(n,v),v}function Cd(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Mg(o,i,(e/s+.5)*i,(t/r+.5)*i)}function fo(n=0){return(Math.round(n/90)%4+4)%4*90}function bg(n){let e=fo(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Sg(n,e,t){let{cos:i,sin:s}=bg(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Da(n){return fo(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function gg(n,e,t){return n.y+Cd(Na(n),...Sg(n,e,t))}var SS=.25;function Rd(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Da(n),s=Da(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),h=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(h-c<.05))for(let u of[-1,1]){let d=e[r]-u*s[a]/2,f=d-(n[r]+u*i[a]/2);Math.abs(f)<=SS&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:h,side:u,edge:d,delta:f})}}return t}function wg(n,e,t=1.5){let i=Rd(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:h,edge:u,delta:d}=i,f=n.terrain;if(Math.abs(Da(n)[a]-Da(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let I=e.terrain.detail,w=Math.ceil(f.detail/I)*I;w<=xg&&(f=Ad(f,w))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:v}=Na(p),b=m?.slice()??Array((x+1)**2).fill(0),_=Math.max(t,Da(p)[o]/x),{cos:A,sin:E}=bg(p),R=!1;for(let I=0;I<=x;I++)for(let w=0;w<=x;w++){let S=(w/x-.5)*p.w,L=(I/x-.5)*p.d,N=p.x+A*S+E*L,G=p.z-E*S+A*L,H=r==="x"?N:G;if(H<l-1e-6||H>c+1e-6)continue;let z=Math.max(0,h*(u-(s==="x"?N:G)));if(z>_)continue;let X=I*(x+1)+w,K=s==="x"?gg(e,u,G):gg(e,N,u),W=$s(v[X],K-p.y,_h(1-z/_))-g[X];b[X]=Gi(W,-uo,uo),R||=b[X]!==W}return{piece:{...p,terrain:{...f,heights:b}},clipped:R}}function wS(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(h+=s[d*r+f],u++);return h/u}function Tg(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Na(n),{detail:l,w:c,d:h,surface:u,procedural:d}=a,[f,p]=Sg(n,e,t),x=Gi(f,-c/2,c/2),g=Gi(p,-h/2,h/2);if((f-x)**2+(p-g)**2>=s**2)return!1;let m=(f/c+.5)*l,v=(p/h+.5)*l,b=c/l,_=h/l,A=Math.max(0,Math.ceil(m-s/b)),E=Math.min(l,Math.floor(m+s/b)),R=Math.max(0,Math.ceil(v-s/_)),I=Math.min(l,Math.floor(v+s/_)),w=Number.isFinite(o)?o-n.y:Cd(a,f,p),S=l+1,L=a.heights?.slice()??new Array(S**2).fill(0),N=!1,G=!1;function H(z,X,K){N=!0;let W=X*S+z,ee=L[W],ge;if(i==="raise"||i==="lower")ge=ee+(i==="raise"?1:-1)*r*K;else{let Ee=i==="flatten"?w:wS(a,z,X);ge=$s(u[W],Ee,Math.min(1,r)*K)-d[W]}ge=Gi(ge,-uo,uo),!(Math.abs(ge-ee)<1e-7)&&(L[W]=ge,G=!0)}for(let z=R;z<=I;z++)for(let X=A;X<=E;X++){let K=Math.hypot((X-m)*b,(z-v)*_)/s;K<1&&H(X,z,_h(1-K))}if(!N){let z=Gi(m,0,l),X=Gi(v,0,l),K=Math.min(l-1,Math.floor(z)),W=Math.min(l-1,Math.floor(X)),ee=z-K,ge=X-W,Ee=ee+ge<=1,q=Ee?1-ee-ge:ee+ge-1,ue=Ee?ee:1-ge,Ve=Ee?ge:1-ee;if(q>=Math.max(ue,Ve)){let De=+!Ee;H(K+De,W+De,1)}else ue>=Ve?H(K+1,W,1):H(K,W+1,1)}return G&&(n.terrain.heights=L),G}function Pd(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=r**2>65536?Uint32Array:Uint16Array,c=new l(s**2*6),h=Math.sqrt(i.textureDensity??yg),u=0;for(let f=0;f<=s;f++)for(let p=0;p<=s;p++){let x=f*r+p;o[3*x]=(p/s-.5)*e,o[3*x+2]=(f/s-.5)*t,a[2*x]=p/s*e*h,a[2*x+1]=(1-f/s)*t*h,f<s&&p<s&&(c.set([x,x+r,x+1,x+r+1,x+1,x+r],u),u+=6)}let d=new st;return d.setAttribute("position",new St(o,3).setUsage(Ma)),d.setAttribute("uv",new St(a,2)),d.setIndex(new St(c,1)),TS(d,n),d}function TS(n,e){let{surface:t}=Na(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function ES(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new st;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function AS(){return new Jn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function CS(n,e,t){if(e==="stretch")return new M().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function Eg(n){let e=new dn;for(let[t,i]of(n.terrain.rules??[]).entries()){let s=Math.round(n.w*n.d*i.density),r=Math.min(s,gs);if(!r)continue;let o=i.kind==="grass",a=i.model?xh(i.model):o?ES():AS();i.model?a.scale(...CS(ho(i.model),i.fit,i.size)):a.scale(i.size,i.size,i.size),a.computeBoundingBox(),a.translate(0,-a.boundingBox.min.y,0),a.computeBoundingBox();let l=i.model?mh(i.model):new zn({color:"#ffffff",side:o?Zt:oi,flatShading:!0});if(o&&n.terrain.grassTexture){let d=new vi().load(n.terrain.grassTexture);d.colorSpace=gt,l.map=d,l.userData.ownTexture=!0}let c=new Zo(a,l,r);c.name=i.kind,c.userData={ruleIndex:t,seed:i.seed,variation:i.variation,collidable:i.collidable,requestedCount:s},c.instanceMatrix.setUsage(Ma),c.receiveShadow=!0;let h=i.colors.map(d=>new Ge(d)),u=new Ge;for(let d=0;d<r;d++){let f=Hi(d,41,i.seed)*(h.length-1),p=Math.floor(f);c.setColorAt(d,u.copy(h[p]).lerp(h[p+1],f-p))}e.add(c)}return RS(e,n),e}function RS(n,e){let t=Na(e),i=new Ut;for(let s of n.children){let{seed:r,variation:o}=s.userData;for(let a=0;a<s.count;a++){let l=(Hi(a,27,r)-.5)*.96*e.w,c=(Hi(a,27,r+1)-.5)*.96*e.d;i.position.set(l,Cd(t,l,c),c),i.rotation.y=Hi(a,27,r+2)*Math.PI*2,i.scale.setScalar($s(Math.max(.05,1-o),1+o,Hi(a,27,r+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Ag(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),gh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Rg=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Id=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Fa={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},PS=8e6,po=512,wi=1024,Wi=512,Ht=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Cg=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function $t(n){if(typeof n=="string"){if(n.length>PS)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>po)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+po+" pi\xE8ces.");let e=n.spawn??{},t=n.pieces.filter(i=>!Js(i?.sceneryId)&&!dh(i?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Cg(n.name,56,"Ma map"),worldSize:Ht(n.worldSize,24,2048,240),spawn:{x:Ht(e.x,-wi,wi,0),y:Ht(e.y,-256,256,.06),z:Ht(e.z,-wi,wi,3),yaw:Ht(e.yaw,-360,360,0)},pieces:t.map((i,s)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let r=Ht(i.w,.05,Wi,3),o=Ht(i.d,.05,Wi,3),a=i.terrain&&typeof i.terrain=="object"?Qs(i.terrain,r*o):null,l=i.model?Ks({version:1,models:[i.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Cg(i.name,36,"Pi\xE8ce "+(s+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Ht(i.x,-wi,wi,0),y:Ht(i.y,-256,256,0),z:Ht(i.z,-wi,wi,0),w:r,h:Ht(i.h,.05,256,.5),d:o,pitch:a?0:Ht(i.pitch,-180,180,0),yaw:a?fo(Ht(i.yaw,-360,360,0)):Ht(i.yaw,-360,360,0),roll:a?0:Ht(i.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(i.primitive)?i.primitive:"box",uvScale:Ht(i.uvScale,.05,100,1),uvOffsetX:Ht(i.uvOffsetX,-100,100,0),uvOffsetY:Ht(i.uvOffsetY,-100,100,0),uvRotation:Ht(i.uvRotation,-360,360,0),material:Math.round(Ht(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Ht(i.grip,0,1.5,.8),gravity:Ht(i.gravity,.05,2.5,1),bounce:Ht(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function Pg(n){return $t({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Om,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new kt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Ig(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return $t({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,Fa.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Fa.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Fa.rubber)]})}function Hn(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Lg(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new kt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>wi||Math.abs(u)>wi||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var Dg="gorilla-lab-custom-map-v1";function Ug(n){let e=new Blob([JSON.stringify($t(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var IS=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Ld(){return Hn({name:"Miroir",sceneryId:"lab-mirror",x:cs.x,y:cs.y,z:cs.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function Ng(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&IS.has(e)):!1:!0}var Dd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Fg=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Og(n,e=Fg[n]){n=Math.max(0,Math.min(Dd.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Fg[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])i.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}var Bg=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],zg=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Vg=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",Oa=(n,e,t)=>Math.min(t,Math.max(e,n)),LS=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Ud=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function DS(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function kg(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Vg(t),r.fillRect(0,0,o,o);let a=DS(s),l=Oa(64/i,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(e)){let h=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let u=0;u<h;u++){let d=a()*o,f=a()*o,p=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,x=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),Ud(r,g=>g.fillRect(d,f,p,x))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Ud(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,Oa(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var US=`
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
`;function NS(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=US,document.head.append(n)}async function FS(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function Nd({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){NS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=q=>o.querySelector(q),l=a(".texture-canvas"),c=a(".texture-tile"),h=zg(),u=zg(),d={pattern:Bg.some(([q])=>q===i)?i:"grain",base:Vg(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],m=[],v=!1,b=!1,_=null,A="paint",E=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...Bg.map(([q,ue])=>new Option(ue,q))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let q of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+q+"]").addEventListener("input",ue=>{d[q]=["scale","size","opacity","hardness"].includes(q)?Number(ue.target.value):ue.target.value});let R=q=>{a("[data-status]").textContent=q},I=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let q=c.getContext("2d");q.clearRect(0,0,256,128);for(let ue=0;ue<2;ue++)for(let Ve=0;Ve<4;Ve++)q.drawImage(l,Ve*64,ue*64,64,64)},w=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512)}),S=q=>{p.putImageData(q.base,0,0),x.putImageData(q.top,0,0),I()},L=()=>{g.push(w()),g.length>16&&g.shift(),m.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},N=(q,ue)=>{q.length&&(ue.push(w()),S(q.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,v=!0)},G=()=>{v&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(L(),kg(h,d),x.clearRect(0,0,512,512),I(),R("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},H=q=>{let ue=l.getBoundingClientRect();return{x:(q.clientX-ue.left)/ue.width*512,y:(q.clientY-ue.top)/ue.height*512}},z=q=>{let ue=d.size/2,Ve=d.opacity;Ud(x,De=>{De.save(),A==="erase"&&(De.globalCompositeOperation="destination-out"),De.globalAlpha=Ve;let $=Oa(d.hardness,.05,1);if(A==="stamp")De.fillStyle=d.ink,De.translate(q.x,q.y),De.rotate(Math.PI/4),De.fillRect(-ue*.8,-ue*.8,ue*1.6,ue*1.6);else{let se=De.createRadialGradient(q.x,q.y,ue*$*.85,q.x,q.y,ue);if(A==="erase")se.addColorStop(0,"rgba(0,0,0,1)"),se.addColorStop(1,"rgba(0,0,0,0)");else{let Q=d.ink.match(/[\da-f]{2}/gi).map(fe=>parseInt(fe,16)).join(",");se.addColorStop(0,"rgba("+Q+",1)"),se.addColorStop(1,"rgba("+Q+",0)")}De.fillStyle=se,De.beginPath(),De.arc(q.x,q.y,ue,0,2*Math.PI),De.fill()}De.restore()})},X=(q,ue)=>{let Ve=Math.hypot(ue.x-q.x,ue.y-q.y),De=Math.max(1,Math.ceil(Ve/Math.max(2,d.size*.18)));for(let $=1;$<=De;$++)z({x:q.x+(ue.x-q.x)*$/De,y:q.y+(ue.y-q.y)*$/De})},K=q=>{let ue=f.getImageData(Math.floor(Oa(q.x,0,511)),Math.floor(Oa(q.y,0,511)),1,1).data;d.ink="#"+[...ue].slice(0,3).map(Ve=>Ve.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,R("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",q=>{if(q.button!==0||b)return;let ue=H(q);if(A==="pick"){K(ue);return}q.preventDefault(),L(),b=!0,_=q.pointerId,E=ue,l.setPointerCapture(q.pointerId),z(ue),I()}),l.addEventListener("pointermove",q=>{if(!b||q.pointerId!==_)return;q.preventDefault();let ue=H(q);A==="stamp"?z(ue):X(E,ue),E=ue,I()});let W=q=>{q.pointerId===_&&(b=!1,_=null,E=null,l.hasPointerCapture(q.pointerId)&&l.releasePointerCapture(q.pointerId))};l.addEventListener("pointerup",W),l.addEventListener("pointercancel",W);for(let q of o.querySelectorAll("[data-tool]"))q.onclick=()=>{A=q.dataset.tool,o.querySelectorAll("[data-tool]").forEach(ue=>ue.setAttribute("aria-pressed",String(ue===q)))};a("[data-cmd=generate]").onclick=G,a("[data-cmd=undo]").onclick=()=>N(g,m),a("[data-cmd=redo]").onclick=()=>N(m,g),a("[data-cmd=export]").onclick=()=>LS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async q=>{let ue=q.target.files?.[0];if(q.target.value="",!!ue)try{if(!["image/png","image/jpeg","image/webp"].includes(ue.type))throw Error("Image PNG / JPG / WebP uniquement.");if(ue.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ve=await createImageBitmap(ue);L(),p.clearRect(0,0,512,512),p.drawImage(Ve,0,0,512,512),Ve.close(),x.clearRect(0,0,512,512),I(),R("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ve){R(Ve.message)}});let ee=q=>{!q&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ge,!0),o.remove())},ge=q=>{if(q.key==="Escape"){q.preventDefault(),ee(!1);return}(q.ctrlKey||q.metaKey)&&!q.target.closest("input,select")&&q.key.toLowerCase()==="z"&&(q.preventDefault(),q.stopImmediatePropagation(),q.shiftKey?N(m,g):N(g,m))};window.addEventListener("keydown",ge,!0),a("[data-cmd=close]").onclick=()=>ee(!1),a("[data-cmd=cancel]").onclick=()=>ee(!1);let Ee=()=>{for(let q of[512,384,256,192]){let ue=document.createElement("canvas");ue.width=ue.height=q,ue.getContext("2d").drawImage(l,0,0,q,q);for(let Ve of[.85,.72,.58]){let De=ue.toDataURL("image/webp",Ve);if(De.length<=s)return De}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let q=a("[data-cmd=apply]");q.disabled=!0;try{let ue=Ee();await r(ue),v=!1,ee(!0)}catch(ue){R(ue.message||"Impossible d\u2019appliquer la texture.")}finally{q.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,kg(h,d),I(),n&&FS(n,h).then(I).catch(()=>R("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>ee(!1)}}var er=new ks,gn=new M,xs=new M,Nt=new ht,Gg={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},Fd={type:"change"},Hg={type:"mouseDown",mode:null},Wg={type:"mouseUp",mode:null},Xg={type:"objectChange"},Th=class extends Vs{constructor(e,t=null){super(void 0,t);let i=new Bd(this);this._root=i;let s=new zd;this._gizmo=s,i.add(s);let r=new kd;this._plane=r,i.add(r);let o=this;function a(b,_){let A=_;Object.defineProperty(o,b,{get:function(){return A!==void 0?A:_},set:function(E){A!==E&&(A=E,r[b]=E,s[b]=E,o.dispatchEvent({type:b+"-changed",value:E}),o.dispatchEvent(Fd))}}),o[b]=_,r[b]=_,s[b]=_}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,h=new ht,u=new ht,d=new M,f=new ht,p=new M,x=new M,g=new M,m=0,v=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",v),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new ht,this._parentQuaternionInv=new ht,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new ht,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new ht,this._scaleStart=new M,this._getPointer=OS.bind(this),this._onPointerDown=zS.bind(this),this._onPointerHover=BS.bind(this),this._onPointerMove=kS.bind(this),this._onPointerUp=VS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&er.setFromCamera(e,this.camera);let t=Od(this._gizmo.picker[this.mode],er);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&er.setFromCamera(e,this.camera);let t=Od(this._plane,er,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Hg.mode=this.mode,this.dispatchEvent(Hg)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&er.setFromCamera(e,this.camera);let o=Od(this._plane,er,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),xs.set(a,a,a)}else gn.copy(this.pointStart),xs.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),xs.applyQuaternion(this._worldQuaternionInv),xs.divide(gn),t.search("X")===-1&&(xs.x=1),t.search("Y")===-1&&(xs.y=1),t.search("Z")===-1&&(xs.z=1);s.scale.copy(this._scaleStart).multiply(xs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Gg[t]),gn.copy(Gg[t]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Fd),this.dispatchEvent(Xg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Wg.mode=this.mode,this.dispatchEvent(Wg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Fd),this.dispatchEvent(Xg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return er}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function OS(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function BS(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function zS(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function kS(n){this.enabled&&this.pointerMove(this._getPointer(n))}function VS(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Od(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var Mh=new kt,Rt=new M(0,1,0),qg=new M(0,0,0),Yg=new ct,bh=new ht,wh=new ht,Ti=new M,Zg=new ct,ka=new M(1,0,0),tr=new M(0,1,0),Va=new M(0,0,1),Sh=new M,Ba=new M,za=new M,Bd=class extends Ut{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},zd=class extends Ut{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Vt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new jn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new wt(0,.04,.1,12);x.translate(0,.05,0);let g=new We(.08,.08,.08);g.translate(0,.04,0);let m=new st;m.setAttribute("position",new Ne([0,0,0,1,0,0],3));let v=new wt(.0075,.0075,.5,3);v.translate(0,.25,0);function b(z,X){let K=new Mn(z,.0075,3,64,X*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function _(){let z=new st;return z.setAttribute("position",new Ne([0,0,0,1,1,1],3)),z}let A={X:[[new me(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new me(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new me(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new me(x,o),[0,.5,0]],[new me(x,o),[0,-.5,0],[Math.PI,0,0]],[new me(v,o)]],Z:[[new me(x,a),[0,0,.5],[Math.PI/2,0,0]],[new me(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new me(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new me(new Kn(.1,0),u),[0,0,0]]],XY:[[new me(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new me(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new me(new wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new wt(.2,0,.6,4),i),[0,.3,0]],[new me(new wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new me(new Kn(.2,0),i)]],XY:[[new me(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new me(new Kn(.01,2),s),null,null,null,"helper"]],END:[[new me(new Kn(.01,2),s),null,null,null,"helper"]],DELTA:[[new An(_(),s),null,null,null,"helper"]],X:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new An(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new An(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new me(b(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new me(b(.5,.5),r)]],Y:[[new me(b(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new me(b(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new me(b(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new me(new Cn(.25,10,8),i)]],X:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new me(new Mn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new me(new Mn(.75,.1,2,24),i)]]},L={X:[[new me(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new me(v,r),[0,0,0],[0,0,-Math.PI/2]],[new me(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new me(g,o),[0,.5,0]],[new me(v,o)],[new me(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new me(g,a),[0,0,.5],[Math.PI/2,0,0]],[new me(v,a),[0,0,0],[Math.PI/2,0,0]],[new me(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new me(new We(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new me(new We(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new We(.1,.1,.1),u)]]},N={X:[[new me(new wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new wt(.2,0,.6,4),i),[0,.3,0]],[new me(new wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new me(new We(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new We(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new We(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new We(.2,.2,.2),i),[0,0,0]]]},G={X:[[new An(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new An(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new An(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function H(z){let X=new Ut;for(let K in z)for(let W=z[K].length;W--;){let ee=z[K][W][0].clone(),ge=z[K][W][1],Ee=z[K][W][2],q=z[K][W][3],ue=z[K][W][4];ee.name=K,ee.tag=ue,ge&&ee.position.set(ge[0],ge[1],ge[2]),Ee&&ee.rotation.set(Ee[0],Ee[1],Ee[2]),q&&ee.scale.set(q[0],q[1],q[2]),ee.updateMatrix();let Ve=ee.geometry.clone();Ve.applyMatrix4(ee.matrix),ee.geometry=Ve,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),X.add(ee)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=H(A)),this.add(this.gizmo.rotate=H(I)),this.add(this.gizmo.scale=H(L)),this.add(this.picker.translate=H(E)),this.add(this.picker.rotate=H(S)),this.add(this.picker.scale=H(N)),this.add(this.helper.translate=H(R)),this.add(this.helper.rotate=H(w)),this.add(this.helper.scale=H(G)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Nt.setFromEuler(Mh.set(0,0,0)),o.quaternion.copy(i).multiply(Nt),Math.abs(Rt.copy(ka).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Nt.setFromEuler(Mh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Nt),Math.abs(Rt.copy(tr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Nt.setFromEuler(Mh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Nt),Math.abs(Rt.copy(Va).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Nt.setFromEuler(Mh.set(0,Math.PI/2,0)),Rt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Yg.lookAt(qg,Rt,tr)),o.quaternion.multiply(Nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Rt.copy(ka).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Rt.copy(tr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Rt.copy(Va).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Rt.copy(Va).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Rt.copy(ka).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Rt.copy(tr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(bh.copy(i),Rt.copy(this.eye).applyQuaternion(Nt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Yg.lookAt(this.eye,qg,tr)),o.name==="X"&&(Nt.setFromAxisAngle(ka,Math.atan2(-Rt.y,Rt.z)),Nt.multiplyQuaternions(bh,Nt),o.quaternion.copy(Nt)),o.name==="Y"&&(Nt.setFromAxisAngle(tr,Math.atan2(Rt.x,Rt.z)),Nt.multiplyQuaternions(bh,Nt),o.quaternion.copy(Nt)),o.name==="Z"&&(Nt.setFromAxisAngle(Va,Math.atan2(Rt.y,Rt.x)),Nt.multiplyQuaternions(bh,Nt),o.quaternion.copy(Nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},kd=class extends me{constructor(){super(new on(1e5,1e5,2,2),new Vt({visible:!1,wireframe:!0,side:Zt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Sh.copy(ka).applyQuaternion(t==="local"?this.worldQuaternion:wh),Ba.copy(tr).applyQuaternion(t==="local"?this.worldQuaternion:wh),za.copy(Va).applyQuaternion(t==="local"?this.worldQuaternion:wh),Rt.copy(Ba),this.mode){case"translate":case"scale":switch(this.axis){case"X":Rt.copy(this.eye).cross(Sh),Ti.copy(Sh).cross(Rt);break;case"Y":Rt.copy(this.eye).cross(Ba),Ti.copy(Ba).cross(Rt);break;case"Z":Rt.copy(this.eye).cross(za),Ti.copy(za).cross(Rt);break;case"XY":Ti.copy(za);break;case"YZ":Ti.copy(Sh);break;case"XZ":Rt.copy(za),Ti.copy(Ba);break;case"XYZ":case"E":Ti.set(0,0,0);break}break;case"rotate":default:Ti.set(0,0,0)}Ti.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zg.lookAt(gn.set(0,0,0),Ti,Rt),this.quaternion.setFromRotationMatrix(Zg)),super.updateMatrixWorld(e)}};function jg(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function Jg(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new M(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new kt(Le.degToRad(n.pitch),Le.degToRad(n.yaw),Le.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var Kg={type:"change"},Gd={type:"start"},Qg={type:"end"},Eh=new ts,$g=new un,GS=Math.cos(70*Le.DEG2RAD),Qt=new M,In=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vd=1e-6,Ah=class extends Vs{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new ht,this._lastTargetPosition=new M,this._quat=new ht().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yr,this._sphericalDelta=new Yr,this._scale=1,this._panOffset=new M,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new M,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WS.bind(this),this._onPointerDown=HS.bind(this),this._onPointerUp=XS.bind(this),this._onContextMenu=$S.bind(this),this._onMouseWheel=ZS.bind(this),this._onKeyDown=jS.bind(this),this._onTouchStart=JS.bind(this),this._onTouchMove=KS.bind(this),this._onMouseDown=qS.bind(this),this._onMouseMove=YS.bind(this),this._interceptControlDown=QS.bind(this),this._interceptControlUp=e1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kg),this.update(),this.state=At.NONE}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eh.origin.copy(this.object.position),Eh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eh.direction))<GS?this.object.lookAt(this.target):($g.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eh.intersectPlane($g,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vd||this._lastTargetPosition.distanceToSquared(this.target)>Vd?(this.dispatchEvent(Kg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qt.copy(s).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function HS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function WS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function XS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qg),this.state=At.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case $n.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case $n.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Gd)}function YS(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ZS(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Gd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qg))}function jS(n){this.enabled!==!1&&this._handleKeyDown(n)}function JS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Gd)}function KS(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function $S(n){this.enabled!==!1&&n.preventDefault()}function QS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var F=n=>document.getElementById(n),o0=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],a0=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Lh=[...document.querySelectorAll(".tool")],l0="gorilla-lab-editor-draft",Xi=og(localStorage),t1=yd(),Sn=[...new Map([...t1,...Xi.models].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function c0(n){let e=n??F("model-library").value;F("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Sn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Sn.some(t=>t.id===e)?F("model-library").value=e:Sn.length===1&&(F("model-library").value=Sn[0].id),F("place-model").disabled=!Sn.length}var h0=new URLSearchParams(location.search),qd=h0.get("model"),Yd="gorilla-lab-edit-map-model";c0(qd);function ir(){return Sn.find(n=>n.id===F("model-library").value)}function u0(){let n=ir();if(!n)return null;let e=ho(n);return Hn({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Le.clamp(e.x,.2,64),h:Le.clamp(e.y,.12,36),d:Le.clamp(e.z,.2,64),...wd(n),color:"#ffffff",solid:n.properties.collidable!==!1})}F("model-library").addEventListener("change",()=>{Ye==="model"&&qi(null),hf()});var Hd={block:Hn({w:1,h:1,d:1}),ramp:Hn({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:Hn({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Qs({amplitude:.7,grassDensity:1.7})}),wall:Hn({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},$d={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},re,mt=-1,Ye="move",pt=null,Wn=null,Ih=[];function pi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:Ye,selected:mt,...e};Ih.push(i),Ih.length>100&&Ih.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=it(),e=vo.info.render;return{version:"R38.6",map:{name:re.name,pieces:re.pieces.length},tool:Ye,selected:mt,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[qt.width,qt.height],render:{...e},events:[...Ih]}};window.addEventListener("error",n=>{n.message&&pi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>pi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var ys=[],qt=F("preview"),nt=F("plan"),at=nt.getContext("2d");function n1(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[F("shape-preset").value]??n.slab;return Hn({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(F("shape-preset").value)?F("shape-preset").value:"box"})}var i1=F("editor-views");function Za(){i1.dataset.layout=F("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",F("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",F("sidebar-width").value+"px"),requestAnimationFrame(()=>{Bh(),zh()})}for(let n of["layout-mode","view-split","sidebar-width"])F(n).addEventListener("input",Za);F("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Za()};var Zd=F("workspace-fullscreen");Zd.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ot("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Zd.setAttribute("aria-pressed",String(n)),Zd.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{Bh(),zh()})});F("focus-3d").onclick=()=>{F("layout-mode").value="only-3d",Za()};F("focus-plan").onclick=()=>{F("layout-mode").value="only-plan",Za()};function s1(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(Q,fe,ce)=>{let ke=document.createElement(Q);return fe&&(ke.className=fe),ce!==void 0&&(ke.textContent=ce),ke},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let Q of Lh){let fe=Q.dataset.tool,ce=Q.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[fe]){let ke=t("div","rail-divider");ke.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[fe]],i.append(ke)}Q.classList.add("rail-tool"),Q.title=ce+" \xB7 "+($d[fe]??""),Q.setAttribute("aria-label",ce),Q.replaceChildren(t("span","rail-glyph",s[fe]??"\u25A1"),t("span","rail-caption",ce==="Redimensionner"?"\xC9chelle":ce==="S\xE9lectionner"?"S\xE9lect.":ce==="D\xE9placer"?"D\xE9placer":ce==="Atelier"?"Mod\xE8le":ce)),i.append(Q)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=F("shape-preset").closest("label"),h=F("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),u&&o.append(u);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let v=F("layout-mode").closest("label");v.classList.add("viewport-layout"),g.prepend(v);let b=t("span","active-selection","Aucune s\xE9lection");b.id="active-selection",v.after(b);let _=t("details","precision-menu");_.id="precision-menu",_.append(t("summary","","Accrochage \u25BE"));let A=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let Q of E){let fe=F(Q);fe&&A.append(fe.closest("label"))}_.append(A),g.append(_);let R=Q=>{if(Q==="close"){o.hidden=!0;return}let fe=Q==="model";o.hidden=!1,o.dataset.mode=Q,a.textContent=fe?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!fe,c.hidden=fe,d.hidden=!fe,f.hidden=!fe,u&&(u.hidden=!fe),p.textContent=fe?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!fe,x.textContent=fe?Sn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ce=ir();d.disabled=!ce,d.textContent=ce?"\u2B21 Placer \xAB "+ce.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!ce||!Xi.models.some(ut=>ut.id===ce.id),u&&(u.href="./model-editor.html"+(ce?ce.assetId&&ce.id==="custom-model-game-"+ce.assetId?"?asset="+encodeURIComponent(ce.assetId):"?model="+encodeURIComponent(ce.id):"")),F(fe?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{ir()&&(Ai("model"),R("close"),qt.focus({preventScroll:!0}),ot("Clique dans la sc\xE8ne pour placer \xAB "+ir().name+" \xBB."))},f.onclick=()=>{let Q=ir();if(!(!Q||!Xi.models.some(fe=>fe.id===Q.id))&&confirm("Supprimer d\xE9finitivement \xAB "+Q.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let fe=Ks({...Xi,models:Xi.models.filter(ke=>ke.id!==Q.id),avatarId:Xi.avatarId===Q.id?null:Xi.avatarId});localStorage.setItem(Sd,JSON.stringify(fe)),Object.assign(Xi,fe);let ce=Sn.findIndex(ke=>ke.id===Q.id);ce>=0&&Sn.splice(ce,1),c0(),Ye==="model"&&!Sn.length&&Ai("move"),qi(null),hf(),R("model"),ot("\xAB "+Q.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(fe){ot("Suppression impossible : "+(fe.message||"stockage local indisponible"))}},F("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&R("model")});for(let Q of["model","preset"])Lh.find(ce=>ce.dataset.tool===Q)?.addEventListener("click",()=>R(Q));window.addEventListener("pointerdown",Q=>{!o.hidden&&!o.contains(Q.target)&&!Q.target.closest(".rail-tool")&&R("close")}),window.addEventListener("keydown",Q=>{Q.key==="Escape"&&R("close")});let I=t("section","outliner");I.id="scene-outline";let w=t("header","side-section-head");w.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),w.append(t("span","outline-meta","Objets")),I.append(w);let S=e.querySelector("#pieces").closest(".inspector-section");S.id="outline-content",I.append(S);let L=t("section","property-pane"),N=t("nav","inspector-tabs");N.setAttribute("aria-label","Propri\xE9t\xE9s");let G=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[Q,fe]of G){let ce=t("button","inspector-tab",fe);ce.type="button",ce.dataset.tab=Q,ce.setAttribute("aria-pressed",String(Q==="object")),N.append(ce)}let H=t("div","property-content");H.id="property-content";let z=F("piece-inspector").closest(".inspector-section");z.id="object-section";let X=z.querySelector("#surface").closest("details");X.id="surface-controls";let K=t("section");K.id="collision-options",K.append(t("h3","","Collisions de la pi\xE8ce")),K.append(z.querySelector("#p-solid").closest("label"),F("debug-controls"));let W=t("section");W.id="behavior-options";let ee=t("div","fields");for(let Q of["surface","p-grip","p-gravity","p-bounce"])ee.append(X.querySelector("#"+Q).closest("label"));W.append(t("h3","","Propri\xE9t\xE9s physiques")),W.append(ee,z.querySelector("#model-object-controls"));let ge=t("section");ge.id="publish-options";let Ee=t("div","piece-actions");for(let[Q,fe]of[["test-map","Jouer cette map"],["export-map","Exporter JSON"]]){let ce=t("button","",fe);ce.type="button",ce.addEventListener("click",()=>F(Q).click()),Ee.append(ce)}ge.append(Ee),H.append(z,K,W,ge);let q=t("section","scene-options");q.id="scene-options",q.append(t("h2","","Param\xE8tres de carte"));let ue=F("map-name").closest("label"),Ve=F("map-world-size").closest(".fields"),De=F("draft-status");q.append(ue,Ve,De);let $=[...e.children].filter(Q=>Q.tagName==="DETAILS");for(let Q of $)q.append(Q);H.append(q),L.append(N,H),e.replaceChildren(I,L);let se=Q=>{let fe=re?.pieces?.[mt];["terrain","props"].includes(Q)&&!fe?.terrain&&(Q="object"),["material","behavior"].includes(Q)&&!fe&&(Q="object"),e.dataset.tab=Q;for(let ce of N.querySelectorAll("button"))ce.setAttribute("aria-pressed",String(ce.dataset.tab===Q)),ce.disabled=["terrain","props"].includes(ce.dataset.tab)&&!fe?.terrain;Q==="terrain"&&(F("terrain-controls").open=!0),Q==="material"&&(X.open=!0),H.scrollTop=0};for(let Q of N.querySelectorAll("button"))Q.addEventListener("click",()=>se(Q.dataset.tab));window.setInspectorTab=se,se("object")}s1();var Tt={scale:10,cx:0,cz:-6,width:30,height:40},vo=new Qc({canvas:qt,antialias:!0});vo.setPixelRatio(Math.min(devicePixelRatio,1.5));qt.addEventListener("webglcontextlost",()=>pi("contexte WebGL perdu",{},"warn"));var Wt=new hn(52,1,.1,640);Wt.position.set(16,15,19);var Dt=new Ah(Wt,qt);Dt.target.set(0,0,-5);Dt.mouseButtons.LEFT=null;Dt.mouseButtons.RIGHT=$n.ROTATE;Dt.mouseButtons.MIDDLE=$n.PAN;Dt.maxDistance=580;Dt.maxPolarAngle=Math.PI/2-.035;var xn=new Br;xn.background=new Ge("#8fb6c6");var d0=new Bs("#f0f5ff","#8e775c",2.6);xn.add(d0);var Qd=new zs("#fff1d2",1.8);Qd.position.set(-9,18,6);xn.add(Qd);var ar=new Br;ar.fog=new Xo("#a6d4ea",55,135);var Ms=Gm(ar,vo);Ms.probe.userData.editorAssetId="chrome-sphere";var e2=Hm(ar,Ms.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),r1=new Map(yd().map(n=>[n.assetId,n]));function e0(n,e,t=null,i=null){let s=structuredClone(t??r1.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=La(s),o=r.getSize(new M),a=r.getCenter(new M);return Hn({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var ef=()=>{let n=Pg(Ms.boxes),e=Ms.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(h,u)=>{let d=t+u%(o+1)/o*a,f=s+Math.floor(u/(o+1))/o*l;return e.height(d,f)});n.pieces.push(Hn({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:Qs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(Ld()),jm((t,i)=>{let s=gd[t];s&&n.pieces.push(e0(s,i))}),n.pieces.push(e0("chrome-sphere",new M(hs.x,hs.y,hs.z))),$t(n)};re=ef();var tf=new me(new We(1.8,2.03,.1),new nn({color:"#8daebc",metalness:.9,roughness:.12}));tf.position.set(cs.x,cs.y,cs.z);tf.userData.editorAssetId="lab-mirror";ar.add(tf);var o1=Ms.boxes.filter(n=>n.half&&n.mesh?.isObject3D);o1.forEach(n=>n.mesh.removeFromParent());var Dh=new dn;Dh.add(...ar.children);xn.add(Dh);var or=Ms.boxes.find(n=>n.heightfield).mesh;or.userData.editorAssetId="lab-hill";Ms.visual(7,0,7,!0,!0,!0,512,!1);var xo=new fa(60,60,"#d7e2e5","#5e7b8a");xo.material.transparent=!0;xo.material.opacity=.35;xn.add(xo);var _t=new dn;xn.add(_t);var Ze=new Th(Wt,qt);Ze.setSize(.9);Ze.setRotationSnap(Le.degToRad(5));Ze.enabled=!1;xn.add(Ze.getHelper());var nf=new Set(["translate","rotate","scale"]),_s=null,Ln=null,sf=!1,Ga=null,Ch=!1,f0=()=>Number(F("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...F(n).options].some(t=>t.value===e)&&(F(n).value=e)}catch{}F(n).onchange=()=>{Ln=null;try{localStorage.setItem("gorilla-lab-"+n,F(n).value)}catch{}}}var sr=new Map;try{F("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}F("magnet").onchange=()=>{Ln=null,sr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",F("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{sf=e.altKey});window.addEventListener("blur",()=>{sf=!1,Ln=null});function p0(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/qa())*qa();if(i||!F("magnet").checked||!n.solid||n.terrain)return Ln=null,s;let r=f0(),o=F("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new kt(...[p.pitch,p.yaw,p.roll??0].map(Le.degToRad),"YXZ"),g=new ct().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,v)=>[m,(Math.abs(g[v])*p.w+Math.abs(g[4+v])*p.h+Math.abs(g[8+v])*p.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let p of re.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(_=>_!==g),v=_=>Math.abs(s[_]-p[_])<c[_]+x[_]-.001,b=m.flatMap(_=>t.includes(_)&&v(m.find(A=>A!==_))?[-1,1].flatMap(A=>[-1,1].map(E=>{let R=p[_]+A*x[_]-E*c[_];return{key:_,value:R,distance:Math.abs(e[_]-R)}})):[]).sort((_,A)=>_.distance-A.distance)[0];if(!(o?!b||b.distance>r*1.8:!m.every(v)))for(let _ of[-1,1]){let A=p[g]+_*(c[g]+x[g]),E=re.pieces.indexOf(p)+":"+g+":"+_;h.push({key:E,axis:g,value:A,edge:o?b:null,distance:Math.max(Math.abs(A-e[g]),o?b.distance:0)})}}}let u=h.find(p=>p.key===Ln),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Ln&&(sr.set(Ln,(sr.get(Ln)??0)+1),Ln=null);let f=h.filter(p=>p.distance<=r&&(sr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Ln=f.key;else for(let p of h)p.distance<=r&&(sr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var Ha=new We(1,1,1),a1=fd(),l1=new vi,Uh=.025,c1=new is(.24,.36,40).rotateX(-Math.PI/2),m0=new Vt({color:"#ffcd63",side:Zt}),Dn=new me(c1,m0),g0=new me(new on(.12,.2).rotateX(-Math.PI/2),m0);g0.position.set(0,0,-.39);Dn.add(g0);xn.add(Dn);var rr=new me(Ha,new Vt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),mo=new me(new Cn(.055,10,8),new Vt({color:"#ffc85a",depthTest:!1}));mo.visible=!1;mo.renderOrder=20;xn.add(mo);var Wa=new me(Dn.geometry,new Vt({color:"#ffe084",side:Zt,opacity:.65,transparent:!0,depthWrite:!1}));rr.visible=Wa.visible=!1;xn.add(rr,Wa);var vs=new ks,Oh=new M(0,1,0),t0=new un(Oh,0),h1=new Qe,fi=null,Wd=!1;function rn(){Wd||(Wd=!0,requestAnimationFrame(()=>{Wd=!1,vo.render(xn,Wt),C0()}))}function Bh(){let n=qt.clientWidth||1,e=qt.clientHeight||1;vo.setSize(n,e,!1),Wt.aspect=n/e,Wt.updateProjectionMatrix(),rn()}function zh(){let n=Math.max(1,nt.clientWidth),e=Math.max(1,nt.clientHeight);n===nt.width&&e===nt.height||(nt.width=n,nt.height=e,rf(),ei())}new ResizeObserver(Bh).observe(qt);new ResizeObserver(zh).observe(nt);Dt.addEventListener("change",rn);Dt.addEventListener("start",()=>qi(null));function rf(){Tt.scale=Math.min(nt.width/Tt.width,nt.height/Tt.height)}function Nh(n,e){return[nt.width/2+(n-Tt.cx)*Tt.scale,nt.height/2+(e-Tt.cz)*Tt.scale]}function jd(n){let e=nt.getBoundingClientRect();return{x:((n.clientX-e.left)*nt.width/e.width-nt.width/2)/Tt.scale+Tt.cx,z:((n.clientY-e.top)*nt.height/e.height-nt.height/2)/Tt.scale+Tt.cz}}function n0(n,e,t,i,s){let[r,o]=Nh(n.x,n.z),a=Le.degToRad(n.pitch),l=Le.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);at.save(),at.translate(r,o),at.rotate(-Le.degToRad(n.yaw));let u=c*Tt.scale,d=h*Tt.scale;at.globalAlpha=s,at.fillStyle=e,at.fillRect(-u/2,-d/2,u,d),at.globalAlpha=1,at.strokeStyle=t,at.lineWidth=i,at.strokeRect(-u/2,-d/2,u,d),at.restore()}function i0(n,e){let[t,i]=Nh(n.x,n.z);at.save(),at.translate(t,i),at.rotate(Le.degToRad(-n.yaw)),at.strokeStyle=e?"#fff0bb":"#ffd16e",at.lineWidth=2,at.beginPath(),at.arc(0,0,6,0,Math.PI*2),at.moveTo(0,-6),at.lineTo(0,-11),at.stroke(),at.restore()}function ei(){at.fillStyle="#192e3a",at.fillRect(0,0,nt.width,nt.height),at.strokeStyle="#37505f",at.lineWidth=1;let n=Tt.scale<1?25:Tt.scale<4?10:Tt.scale<12?5:1,e=(re.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Nh(r,r);o>=0&&o<=nt.width&&(at.beginPath(),at.moveTo(o,0),at.lineTo(o,nt.height),at.stroke()),a>=0&&a<=nt.height&&(at.beginPath(),at.moveTo(0,a),at.lineTo(nt.width,a),at.stroke())}let[t,i]=Nh(-e,-e);at.strokeStyle="#ffda9077",at.lineWidth=2,at.strokeRect(t,i,e*2*Tt.scale,e*2*Tt.scale);let s=re.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Id[r.material]:r.color);n0(r,a,o===mt?"#ffe095":"#a4bac7",o===mt?2:1,r.solid?.86:.38)}i0(re.spawn,!1),Wn&&(Ye==="spawn"?i0(Wn,!0):n0(Wn,"#8ee7fc","#afefff",2,.45))}function Fh(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==rr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Le.degToRad(e.pitch),Le.degToRad(e.yaw),Le.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function x0(){fi&&(xn.remove(fi),fi.geometry.dispose(),fi.material.dispose());let n=_t.children[mt];fi=n?new Zr(n,"#ffdf88"):null,fi&&xn.add(fi),Jd()}function Jd(){if(Ye==="spawn"){Ze.enabled=!0,Ze.setMode("translate"),Ze.setSpace("world"),Ze.setTranslationSnap(null),Ze.setRotationSnap(null),Ze.showX=Ze.showY=Ze.showZ=!0,Ze.attach(Dn);return}let n=_t.children[mt],e=it()?.terrain,t=nf.has(Ye)&&!!n;if(Ze.enabled=t,!t){Ze.detach();return}Ze.setMode(Ye),Ze.setSpace(Ye==="translate"?"world":"local"),Ze.setTranslationSnap(null);let i=!!(e&&Ye==="rotate");Ze.setRotationSnap(i?Math.PI/2:null),Ze.showX=Ze.showZ=!i,Ze.showY=!(e&&Ye==="scale"),Ze.attach(n),F("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":$d[Ye]}var go=!1;function y0(){if(Ye!=="scale")return;let n=it(),e=_s?.map.pieces[mt],t=Ze.object;if(!n||!e||!t)return;let i=Jg(e,n,go,_s?.scaleSides),s=(re.worldSize??240)/2;n.x=Le.clamp(i.x,-s,s),n.y=Le.clamp(i.y,-256,256),n.z=Le.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),fi?.update();for(let r of["x","y","z"])F("p-"+r).value=n[r].toFixed(2);ei(),rn()}function _0(n){let e=go;go=n.ctrlKey,e!==go&&Ze.dragging&&y0()}for(let n of["keydown","keyup"])window.addEventListener(n,_0);qt.addEventListener("pointermove",_0,{capture:!0});Ze.addEventListener("change",rn);Ze.addEventListener("mouseDown",()=>{let n=it();if(Ln=null,n||Ze.object===Dn){let e=Ye==="scale"?jg(Ze.axis,Ze.pointStart,Ze.worldQuaternionStart):void 0;_s={map:structuredClone(re),selected:mt,scaleSides:e},pi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:Ze.axis,scaleSides:e,terrain:!!n?.terrain})}go=!!(go||window.event?.ctrlKey)});Ze.addEventListener("objectChange",()=>{let n=it(),e=Ze.object,t=_s?.map.pieces[mt];if(e===Dn&&_s){let s=(re.worldSize??240)/2,r=Le.clamp;re.spawn.x=r(Dn.position.x,-s,s),re.spawn.y=r(Dn.position.y-Uh,-256,256),re.spawn.z=r(Dn.position.z,-s,s),Dn.position.set(re.spawn.x,re.spawn.y+Uh,re.spawn.z);for(let o of["x","y","z"])F("spawn-"+o).value=re.spawn[o].toFixed(2);ei();return}if(!n||!e||!t)return;let i=Le.clamp;if(Ye==="translate"){let s=["x","y","z"].filter(a=>(Ze.axis??"XYZ").includes(a.toUpperCase())),r=p0(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,sf),o=(re.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else Ye==="rotate"?(n.pitch=Le.radToDeg(e.rotation.x),n.yaw=Le.radToDeg(e.rotation.y),n.roll=Le.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=fo(n.yaw),e.rotation.set(0,Le.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,Wi),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,Wi),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),y0());e.updateMatrixWorld(!0),fi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])F("p-"+s).value=Number(n[s]??0).toFixed(2);ei(),rn()});Ze.addEventListener("dragging-changed",({value:n})=>{if(Dt.enabled=!n,n||!_s)return;let e=_s;_s=null;let t=Ze.object===Dn,i=t?e.map.spawn:e.map.pieces[mt],s=t?re.spawn:it();if(JSON.stringify(i)===JSON.stringify(s)){pi("transformation sans changement",{name:s?.name,axis:Ze.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));pi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),ys.length>=35&&ys.shift(),ys.push(e),re=$t(re),xt(),ot("Transformation appliqu\xE9e.")});qt.addEventListener("pointerup",()=>{Ze.dragging||(Dt.enabled=!0)});qt.addEventListener("pointercancel",()=>{Ze.dragging&&Ze.pointerUp(null),Dt.enabled=!0});function u1(){Ze.detach();for(let t of[..._t.children])_t.remove(t),t.geometry!==Ha&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&Ag(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),gh(t.material);Dh.visible=!!re.arenaBase;let n=new Set(re.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(re.pieces.map(t=>t.sceneryId).filter(Boolean));Dh.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=Ng(re,i,n,e))}),Qd.visible=d0.visible=!re.arenaBase,xn.fog=re.arenaBase?ar.fog:null,xn.environment=re.arenaBase?ar.environment:null;for(let t of re.pieces){if(t.model){let a=new me(xh(t.model,new M(t.w,t.h,t.d)),mh(t.model));a.castShadow=a.receiveShadow=!0;let l=new me(new We(1,1,1),new Vt({colorWrite:!1,depthWrite:!1,side:Zt}));l.name="model-selection-volume",a.add(l),a.userData.pickProxy=l,a.userData.mapIndex=_t.children.length,_t.add(a),Fh(a,t);continue}let i=[10,11,12].includes(t.material),s=new zn({color:new Ge(Id[t.material]).multiply(new Ge(t.color)),transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(re.arenaBase&&!t.texture){let a=Ms.mapMaterial(t.material,7);s.color.set(t.color),s.map=a.map,s.opacity=t.solid?a.opacity:.4,s.transparent=!t.solid||a.transparent}t.texture&&(s.map=l1.load(t.texture,rn),s.map.colorSpace=gt,s.map.wrapS=s.map.wrapT=vn,s.color.set(t.color));let r=t.terrain?Pd(t):t.primitive==="ramp"?fd(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?Im(t.primitive):t.texture||re.arenaBase?th(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):Ha;r!==Ha&&dd(r,t);let o=new me(r,s);if(o.userData.ownsTexture=!!t.texture,t.terrain){let a=Eg(t);a&&(o.add(a),o.userData.vegetation=a)}_t.add(o),Fh(o,t)}Dn.position.set(re.spawn.x,re.spawn.y+Uh,re.spawn.z),Dn.rotation.y=Le.degToRad(re.spawn.yaw),R0(),x0()}function it(){return re.pieces[mt]}function ot(n){F("editor-note").textContent=n}function vt(){ys.length>=35&&ys.shift(),ys.push({map:structuredClone(re),selected:mt}),F("undo").disabled=!1}function of(){try{return localStorage.setItem(l0,JSON.stringify(re)),F("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil",!0}catch{return F("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte.",!1}}F("model-asset-edit-link").onclick=n=>{let e=it();if(!e?.model||!of()){n.preventDefault();return}try{sessionStorage.setItem(Yd,JSON.stringify({index:mt,piece:e}))}catch{n.preventDefault(),ot("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function d1(){let n=h0.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Yd)),sessionStorage.removeItem(Yd)}catch{return}let t=re.pieces[e?.index],i=Xi.models.find(u=>u.id===n&&u.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){ot("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}mt=e.index;let o=ho(t.model),a=ho(i),l=(u,d,f,p)=>Le.clamp(u*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,Wi),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Wi)},h=Hn({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(h)!==JSON.stringify(t)&&(vt(),re.pieces[mt]=h),ot("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var s0=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function v0(){let n=s0(F("piece-search").value.trim()),e=[];re.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";s0(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===mt))}),F("pieces").replaceChildren(...e),F("pieces").value=String(mt),e.length||F("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(F("pieces").options[0].disabled=!0),F("count").textContent=n?e.length+" sur "+re.pieces.length:re.pieces.length+" / "+po}function M0(){v0();let n=it();F("piece-inspector").hidden=!n,F("selection-help").hidden=!!n,F("focus-piece").disabled=!n,F("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";F("model-object-controls").hidden=!e,F("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=F("model-asset-edit-link"),i=n?.model&&Sn.some(o=>o.id===n.model.id);if(t.hidden=!i,i){let o=n.model.assetId,a=o&&n.model.id==="custom-model-game-"+o,l=new URLSearchParams(a?{asset:o}:{model:n.model.id});l.set("from","cards"),t.href="./model-editor.html?"+l}e&&(F("model-grabbable").checked=n.model.properties?.grabbable!==!1,F("model-frozen").checked=n.model.properties?.frozen===!0,F("model-collidable").checked=n.model.properties?.collidable!==!1,F("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let o of o0){let a=F("p-"+o);a.disabled=!n,o==="solid"?a.checked=n?.solid??!1:a.value=n?.[o]??(o==="color"?"#ffffff":"")}for(let o of["rotate","duplicate","texture-file","surface","spawn-here"])F(o).disabled=!n;F("delete").disabled=!n||re.pieces.length===1,F("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",F("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",F("texture-clear").disabled=!n?.texture,F("texture-paint").disabled=!n||!!n.model;let s=n?.terrain;F("terrain-grassTexture-paint").disabled=!s;for(let o of a0){let a=F("p-"+o);a.disabled=!n||!!n?.model,a.value=n?.[o]??(o==="uvScale"?1:0)}if(F("uv-reset").disabled=!n||!!n?.model,F("terrain-controls").hidden=F("terrain-props").hidden=F("terrain-texture-density-fields").hidden=!s,s){for(let d of E0)F("terrain-"+d).value=s[d];let o=n.w*n.d,a=2*s.detail**2,l=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2});F("terrain-cell-size").textContent=l.format(n.w/s.detail)+" \xD7 "+l.format(n.d/s.detail)+" m par case \xB7 "+l.format(a)+" triangles \xB7 "+l.format(a/o)+" triangles/m\xB2",F("terrain-texture-effective").textContent=l.format(s.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2",v1(n);let c=F("terrain-neighbor"),h=c.value,u=re.pieces.flatMap((d,f)=>Rd(n,d)?[new Option(d.name,String(f))]:[]);c.replaceChildren(...u.length?u:[new Option("Aucun bord \xE0 moins de 25 cm","")]),u.some(d=>d.value===h)&&(c.value=h),c.disabled=F("terrain-stitch").disabled=!u.length,F("p-pitch").disabled=F("p-roll").disabled=!0}F("rotate").disabled=!n,F("rotate").textContent=s?"Tourner +90\xB0":"Tourner +45\xB0",F("p-yaw").step=s?"90":"1",F("texture-create").disabled=!n,F("surface").value="",F("undo").disabled=ys.length===0,F("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let r=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(r)&&!s||["behavior","material"].includes(r)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let o of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+o+'"]').disabled=!s}function xt(){F("map-name").value=re.name,F("map-world-size").value=re.worldSize??240;for(let n of["x","y","z","yaw"])F("spawn-"+n).value=re.spawn[n];u1(),M0(),ei(),rn(),of()}function Xa(n){mt!==n&&(mt=n,pi("s\xE9lection",{name:it()?.name,terrain:!!it()?.terrain}),Ln=null,sr.clear(),M0(),x0(),ei(),rn())}function af(n){if(re.pieces.length>=po)return ot("Limite de pi\xE8ces atteinte.");vt(),re.pieces.push(n),mt=re.pieces.length-1,xt(),ot(n.name+" ajout\xE9 \xE0 la map.")}function lf(){if(!it()||re.pieces.length===1)return;let n=it().name;vt(),re.pieces.splice(mt,1),mt=Math.min(mt,re.pieces.length-1),xt(),ot(n+" retir\xE9 de la map.")}function cf(){let n=it();if(!n)return;let e=Le.clamp(n.x+n.w+qa(),-120,120);af({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function f1(){let n=it();if(!n)return;vt();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,pi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),xt()}function b0(){let n=ys.pop();n&&(re=n.map,mt=n.selected,qi(null),xt(),ot("Derni\xE8re modification annul\xE9e."))}function hf(){let n=$d[Ye]??"";if(Ye!=="model"||!ir()){F("tool-help").textContent=n;return}let e=u0(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);F("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Ai(n){Ye!==n&&pi("changement d\u2019outil",{ancien:Ye,nouveau:n,name:it()?.name}),Ye=n,Dt.mouseButtons.LEFT=Ye==="view"?$n.ROTATE:null,Jd(),rn();for(let e of Lh)e.setAttribute("aria-pressed",String(e.dataset.tool===Ye));for(let e of[qt,nt])e.dataset.tool=Ye,e.removeAttribute("data-hit");hf(),Jd(),rn(),qi(null)}function lr(){let n=new jt().setFromObject(_t);n.expandByPoint(Dn.position);let e=n.getCenter(new M),t=n.getSize(new M);Tt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(re.worldSize??240,500)),height:Math.max(t.z+5,Math.min(re.worldSize??240,500))},rf();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));xo.scale.setScalar(i),xo.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Wt.position.clone().sub(Dt.target).normalize(),r=new M().crossVectors(Oh,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Le.degToRad(Wt.fov/2))*.87,l=a*Wt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new M(h,u,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,Dt.maxDistance),Dt.target.copy(e),Wt.position.copy(e).addScaledVector(s,c),Dt.update(),Wt.updateMatrixWorld(),ei(),rn()}function uf(n,e){vt(),re=n,Ln=null,sr.clear(),mt=-1,F("piece-search").value="",Ai("move"),xt(),lr(),ot(e)}function qa(){return Number(F("snap").value)}function Rh(n){let e=qa(),t=(re.worldSize??240)/2;return Le.clamp(Math.round(n/e)*e,-t,t)}function df(n,e){if(n===nt){let t=jd(e);vs.set(new M(t.x,80,t.z),new M(0,-1,0))}else{let t=qt.getBoundingClientRect();Wt.updateMatrixWorld(),vs.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Wt)}}function Kd(n){return t0.constant=-n,vs.ray.intersectPlane(t0,new M)}function p1(n){let e=n;for(;e&&e.parent!==_t;)e=e.parent;return e?.parent===_t?e:null}function yo(n,e){df(n,e);let t=or.visible&&re.arenaBase?[..._t.children,or]:_t.children,i=vs.intersectObjects(t,!0);for(let s of i){if(s.object===or)return s;let r=p1(s.object);if(r)return{...s,object:r}}return null}function S0(n,e,t,i=null){vs.set(new M(n,80,e),new M(0,-1,0));let s=i?vs.intersectObject(i,!1)[0]:vs.intersectObjects(or.visible&&re.arenaBase?[..._t.children,or]:_t.children,!1).find(r=>r.object===or||re.pieces[_t.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function w0(n,e){Ga=null,Ch=!1;let t=yo(n,e);if(Ye==="spawn"){if(!t)return null;let h=Rh(t.point.x),u=Rh(t.point.z);return S0(h,u,re.spawn.yaw)}if(Ye==="terrain"){let h=t?.point??Kd(0);return h?{...Hd.terrain,terrain:Qs(Hd.terrain.terrain),x:Rh(h.x),y:h.y,z:Rh(h.z)}:null}if(Ye==="sculpt"||Ye==="model"&&!ir())return null;let i=t?.point??Kd(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(h1.getNormalMatrix(t.object.matrixWorld)):Oh,r=t&&m1(t),o=f0();r&&r.distance<=o*2&&(Ga=r.point,Ch=F("magnet").checked&&!e.altKey&&F("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=Ch||e.altKey?1e-6:qa(),l=Ye==="model"?u0():Ye==="preset"?n1():Hd[Ye],c=Lg(Ch?Ga:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=re.worldSize/2?c:null}function m1(n){let e=n.object,t=re.pieces[_t.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function qi(n){!n&&!Wn||(Wn=n,mo.visible=!!(Wn&&Ga),mo.visible&&mo.position.copy(Ga),Wa.visible=!!(Wn&&Ye==="spawn"),rr.visible=!!(Wn&&Ye!=="spawn"),Wa.visible&&Wa.position.set(Wn.x,Wn.y+Uh,Wn.z),rr.visible&&(rr.geometry=Wn.primitive==="ramp"?a1:Ha,Fh(rr,Wn)),ei(),rn())}function g1(n,e){let t=w0(n,e);if(!t){ot(Ye==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(Ye==="spawn")vt(),re.spawn=t,Ai("move"),xt(),ot("Point de d\xE9part d\xE9plac\xE9.");else{let i=Ye==="model";qi(null),af(t),i&&(Ai("move"),ot(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function x1(n,e){if(Ye==="view"||e.button!==0||!e.isPrimary||pt||Ze.dragging)return;if(Ye==="spawn"||nf.has(Ye)){if(n===qt&&Ze.enabled){let r=qt.getBoundingClientRect();if(Ze.pointerHover({x:(e.clientX-r.left)/r.width*2-1,y:1-(e.clientY-r.top)/r.height*2,button:0}),Ze.axis){Dt.enabled=!1;return}}if(Ye!=="spawn"){e.stopImmediatePropagation();let r=yo(n,e);Xa(r?_t.children.indexOf(r.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:Ye};if(pt=t,Ln=null,Ye==="sculpt"){A0(n,e);return}if(Ye!=="move")return;let i=yo(n,e);Xa(i?_t.children.indexOf(i.object):-1);let s=it();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function y1(n,e){if(Ye==="view"||nf.has(Ye)||Ze.dragging)return;if(!pt){Ye==="move"?n.toggleAttribute("data-hit",!!yo(n,e)):qi(w0(n,e));return}if(Ye==="sculpt"&&pt.id===e.pointerId&&pt.canvas===n){Math.hypot(e.clientX-pt.clientX,e.clientY-pt.clientY)>=7&&(A0(n,e),pt.clientX=e.clientX,pt.clientY=e.clientY);return}if(pt.id!==e.pointerId||pt.canvas!==n||pt.height===void 0||!it()||Math.hypot(e.clientX-pt.clientX,e.clientY-pt.clientY)<4&&!pt.recorded)return;df(n,e);let i=Kd(pt.height);if(!i)return;let s=it(),r=p0(s,{x:i.x-pt.dx,y:s.y,z:i.z-pt.dz},["x","z"],e.altKey),o=(re.worldSize??240)/2,a=Le.clamp(r.x,-o,o),l=Le.clamp(r.z,-o,o);a===s.x&&l===s.z||(pt.recorded||(vt(),pt.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,Fh(_t.children[mt],s),fi?.update(),F("p-x").value=a,F("p-z").value=l,ei(),rn())}function Xd(n,e,t){if(!pt||pt.canvas!==n||pt.id!==e.pointerId)return;let i=pt;if(pt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(xt(),ot("Relief modifi\xE9."));return}i.recorded&&(of(),ot(it().name+" d\xE9plac\xE9.")),t&&Ye===i.tool&&Ye!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&g1(n,e)}var Qn=null,kh=!1,Ph=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(kh=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(kh=!1)});window.addEventListener("blur",()=>{Qn=null,kh=!1});nt.addEventListener("pointerdown",n=>{n.button!==1&&!(kh&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Qn={id:n.pointerId,x:n.clientX,y:n.clientY},nt.setPointerCapture(n.pointerId),nt.style.cursor="grabbing")},{capture:!0});nt.addEventListener("pointermove",n=>{!Qn||Qn.id!==n.pointerId||(n.stopImmediatePropagation(),Tt.cx-=(n.clientX-Qn.x)/Tt.scale,Tt.cz-=(n.clientY-Qn.y)/Tt.scale,Qn.x=n.clientX,Qn.y=n.clientY,ei())},{capture:!0});function T0(n){!Qn||Qn.id!==n.pointerId||(Qn=null,nt.style.cursor="",nt.hasPointerCapture(n.pointerId)&&nt.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}nt.addEventListener("pointerup",T0,{capture:!0});nt.addEventListener("pointercancel",T0,{capture:!0});function ff(n,e){let t=nt.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=jd({clientX:i,clientY:s}),o=Le.clamp(Tt.width/n,.75,4096),a=o/Tt.width;Tt.width=o,Tt.height*=a,rf();let l=jd({clientX:i,clientY:s});Tt.cx+=r.x-l.x,Tt.cz+=r.z-l.z,ei()}nt.addEventListener("wheel",n=>{n.preventDefault(),ff(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});F("plan-zoom-in").onclick=()=>ff(1.25);F("plan-zoom-out").onclick=()=>ff(.8);F("plan-fit").onclick=lr;var Ei=F("context-actions"),Ya=!1;function _o(){Ei.hidden=!0}for(let n of[qt,nt])n.addEventListener("pointerdown",e=>{e.button===2?Ph={canvas:n,x:e.clientX,y:e.clientY}:_o()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Ya){Ya=!1;return}if(Ph?.canvas!==n||Math.hypot(e.clientX-Ph.x,e.clientY-Ph.y)>6)return;let t=yo(n,e),i=t?_t.children.indexOf(t.object):-1;if(i<0){_o();return}Xa(i),F("context-title").textContent=it()?.name??"Pi\xE8ce",Ei.querySelector('[data-context-action="delete"]').textContent=it()?.model?"Retirer de la carte":"Supprimer",Ei.hidden=!1;let s=195,r=285;Ei.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",Ei.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Ei.hidden||Ei.contains(n.target)||(Ya=n.button===2,_o())},{capture:!0});document.addEventListener("contextmenu",n=>{Ya&&n.target!==qt&&n.target!==nt&&(Ya=!1,n.preventDefault()),!Ei.hidden&&!Ei.contains(n.target)&&n.target!==qt&&n.target!==nt&&_o()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&_o()});for(let n of Ei.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;_o(),e==="duplicate"?cf():e==="delete"?lf():e==="focus"?F("focus-piece").click():Ai(e==="select"?"move":e)};for(let n of[qt,nt])n.addEventListener("pointerdown",e=>x1(n,e),{capture:!0}),n.addEventListener("pointermove",e=>y1(n,e)),n.addEventListener("pointerup",e=>Xd(n,e,!0)),n.addEventListener("pointercancel",e=>Xd(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Xd(n,e,!1)}),n.addEventListener("pointerleave",()=>{pt||qi(null)});F("p-material").append(...Rg.map((n,e)=>new Option(n,e)));for(let n of a0)F("p-"+n).addEventListener("change",e=>{let t=it();!t||t.model||(vt(),t[n]=Number(e.target.value),re=$t(re),xt())});F("uv-reset").onclick=()=>{let n=it();!n||n.model||(vt(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),re=$t(re),xt())};var _1={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(_1))F(e).addEventListener("change",t=>{let i=it();if(!i?.model||i.model.kind!=="prop")return;vt(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),re=$t(re),xt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};ot(s[n])});for(let n of o0)F("p-"+n).addEventListener("change",e=>{let t=it();if(!t)return;vt();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),re=$t(re),xt()});F("map-world-size").onchange=n=>{vt(),re.worldSize=Le.clamp(Number(n.target.value)||240,24,2048),re=$t(re),xt(),lr(),ot("Zone de construction : "+re.worldSize+" \xD7 "+re.worldSize+" m.")};F("map-name").onchange=n=>{vt(),re.name=n.target.value,re=$t(re),xt()};F("piece-search").addEventListener("input",v0);F("pieces").onchange=n=>{n.target.value!==""&&Xa(Number(n.target.value))};F("focus-piece").onclick=()=>{let n=_t.children[mt];if(!n)return;let e=new jt().setFromObject(n).getBoundingSphere(new Zn),t=Wt.position.clone().sub(Dt.target).normalize(),i=Math.atan(Math.tan(Le.degToRad(Wt.fov/2))*Math.min(Wt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Dt.target.copy(e.center),Wt.position.copy(e.center).addScaledVector(t,s),Dt.update(),rn()};for(let n of["x","y","z","yaw"])F("spawn-"+n).onchange=e=>{vt(),re.spawn[n]=Number(e.target.value),re=$t(re),xt()};F("spawn-here").onclick=()=>{let n=it();if(!n)return;let e=n.solid&&S0(n.x,n.z,n.yaw,_t.children[mt]);if(!e)return ot("Choisis une pi\xE8ce solide pour placer le d\xE9part.");vt(),re.spawn=e,xt(),ot("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Lh)n.onclick=()=>Ai(n.dataset.tool);F("duplicate").onclick=cf;F("add-mirror").onclick=()=>af(Ld());F("delete").onclick=lf;F("rotate").onclick=f1;F("undo").onclick=b0;F("zoom-fit").onclick=lr;F("snap").onchange=()=>qi(null);F("new-example").onclick=()=>uf(ef(),"Ar\xE8ne de d\xE9part ouverte.");F("blank-map").onclick=()=>{let n=Le.clamp(Number(F("map-world-size").value)||240,24,2048);uf({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[Hn({name:"Sol",y:-.25,w:Math.min(n,Wi),d:Math.min(n,Wi)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};F("surface").onchange=n=>{let e=Fa[n.target.value],t=it();!e||!t||(vt(),Object.assign(t,e),xt())};F("texture-file").onchange=async n=>{let e=n.target.files[0],t=it();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!re.pieces.includes(t))return ot("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");vt(),t.texture=o,xt(),ot("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){ot(i.message)}finally{n.target.value=""}};F("texture-paint").onclick=()=>{let n=it();if(!n||n.model)return ot("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Nd({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!re.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");vt(),n.texture=e,re=$t(re),xt(),ot("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};F("terrain-grassTexture-paint").onclick=()=>{let n=it();n?.terrain&&Nd({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!re.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");vt(),n.terrain.grassTexture=e,re=$t(re),xt(),ot("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};F("texture-clear").onclick=()=>{it()?.texture&&(vt(),it().texture=null,xt())};F("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{uf($t(await e.text()),"Map charg\xE9e.")}catch(t){ot(t.message)}finally{n.target.value=""}};F("export-map").onclick=()=>{try{Ug(re),ot("Map JSON export\xE9e.")}catch(n){ot(n.message)}};F("test-map").onclick=()=>{try{localStorage.setItem(Dg,JSON.stringify($t(re))),location.href="./?custom=1"}catch{ot("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var E0=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"];function v1(n){let e=n.terrain.rules,t=_t.children[mt]?.userData.vegetation?.children??[];F("terrain-add-rule").disabled=e.length>=vh,F("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),F("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(v,b,_=!1)=>{let A=document.createElement("td");_&&(A.dataset.wide="");let E=document.createElement("span");return E.textContent=v,A.append(E,b),r.append(A),b.matches("input,select")&&b.setAttribute("aria-label",v+" \xB7 r\xE8gle "+(s+1)),A},a=v=>{vt(),e[s]=Ua({...i,...v}),pi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(v)}),xt()},l=(v,b,_)=>{let A=document.createElement("select");return A.replaceChildren(...v.map(([E,R])=>new Option(E,R))),A.value=b,A.onchange=()=>_(A.value),A},c=(v,b,_,A)=>{let E=document.createElement("input");return E.type="number",E.value=i[v],E.min=b,E.max=_,E.step=A,E.onchange=()=>{Number.isFinite(E.valueAsNumber)?a({[v]:E.valueAsNumber}):E.value=i[v]},E},h=Sn.some(v=>v.id===i.model?.id)||!i.model?Sn:[...Sn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...h.length?[["Mod\xE8le","model"]]:[]],i.kind,v=>{let b=v==="grass"?"#527a34":v==="shrub"?"#36583c":"#ffffff";a({kind:v,model:v==="model"?h[0]:null,colors:i.colors.map(()=>b),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(h.map(v=>[v.name,v.id]),i.model.id,v=>a({model:h.find(b=>b.id===v)})));let u=document.createElement("div");u.className="terrain-palette",u.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:Td-1},(v,b)=>[String(b+2),String(b+2)]),String(i.colors.length),v=>{let b=i.colors.slice(0,Number(v));for(;b.length<Number(v);)b.push(b.at(-1));a({colors:b})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),u.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[v,b]of i.colors.entries()){let _=document.createElement("input");_.type="color",_.value=b,_.setAttribute("aria-label","Teinte "+(v+1)+" \xB7 r\xE8gle "+(s+1)),_.onchange=()=>a({colors:i.colors.map((A,E)=>E===v?_.value:A)}),f.append(_)}u.append(f),o("Palette de teintes",u,!0),o("Instances / m\xB2",c("density",0,gs,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,v=>a({fit:v})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,gs,.05)),o("Variation de taille",c("variation",0,Ed,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("output");x.textContent=(t.find(v=>v.userData.ruleIndex===s)?.count??0)+" / "+Math.round(n.w*n.d*i.density);let g=o("Affich\xE9es / demand\xE9es",x,!0),m=document.createElement("button");return m.type="button",m.textContent="Retirer la ligne",m.onclick=()=>{vt(),e.splice(s,1),xt()},g.append(m),r}))}F("terrain-add-rule").onclick=()=>{let n=it();!n?.terrain||n.terrain.rules.length>=vh||(vt(),n.terrain.rules.push(Ua({seed:n.terrain.seed+n.terrain.rules.length})),xt(),F("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};F("terrain-stitch").onclick=()=>{let n=it(),e=re.pieces[Number(F("terrain-neighbor").value)],t=Le.clamp(Number(F("terrain-seam-width").value)||1.5,.1,25),i=wg(n,e,t);if(!i)return ot("Rapproche les bords \xE0 moins de 25 cm.");vt(),re.pieces[mt]=i.piece,xt(),ot(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};F("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=it();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!re.pieces.includes(t))return;vt(),t.terrain.grassTexture=o,xt(),ot("Texture d\u2019herbe import\xE9e.")}catch(i){ot(i.message)}};F("terrain-grassTexture-clear").onclick=()=>{it()?.terrain&&(vt(),it().terrain.grassTexture=null,xt())};for(let n of E0)F("terrain-"+n).onchange=e=>{let t=it();t?.terrain&&(vt(),t.terrain=n==="detail"?Ad(t.terrain,Number(e.target.value)):Qs({...t.terrain,[n]:Number(e.target.value)}),xt())};F("terrain-reset").onclick=()=>{it()?.terrain&&(vt(),it().terrain.heights=null,xt())};function A0(n,e){df(n,e);let t=vs.intersectObjects(_t.children,!1).find(a=>re.pieces[_t.children.indexOf(a.object)]?.terrain),i=t?_t.children.indexOf(t.object):-1,s=re.pieces[i];if(!s?.terrain||(pt.recorded||(vt(),pt.recorded=!0,pt.flattenY=t.point.y,Xa(i),F("terrain-controls").open=!0),i!==mt))return;let r={mode:F("terrain-brush").value,radius:Number(F("brush-radius").value),strength:Number(F("brush-strength").value),target:pt.flattenY};if(!Tg(s,t.point.x,t.point.z,r))return;let o=_t.children[i];o.geometry.dispose(),o.geometry=Pd(s),dd(o.geometry,s),fi?.update(),ei(),rn()}F("texture-style").replaceChildren(...Dd.map((n,e)=>new Option(n,e)));F("texture-create").onclick=()=>{let n=it();if(!n)return;let e=Og(Number(F("texture-style").value),F("texture-tint").value);vt(),n.texture=e.toDataURL("image/webp",.85),xt(),ot("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};F("view-top").onclick=()=>{let n=Dt.target,e=Math.max(10,Wt.position.distanceTo(n));Wt.position.copy(n).add(new M(0,e,.001)),Dt.update(),rn()};F("view-perspective").onclick=()=>{Wt.position.copy(Dt.target).add(new M(16,15,24)),lr()};F("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=re.spawn,s=new M(0,0,-1).applyAxisAngle(Oh,Le.degToRad(i));Wt.position.set(n,e+.87,t),Dt.target.copy(Wt.position).addScaledVector(s,5),Wt.lookAt(Dt.target),rn()};var r0={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||pt||Ze.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")b0();else if(e==="d")cf();else return;else{if(n.altKey)return;if(r0[e])Ai(r0[e]);else if(e==="f")lr();else if(e==="delete"||e==="backspace")lf();else return}n.preventDefault()});var nr=new dn;xn.add(nr);function C0(){if(!F("debug-stats"))return;let n=vo.info.render.triangles,e=re?.pieces?.length??0;F("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(re?.worldSize??240)+" m"}function R0(){for(let n of[...nr.children])nr.remove(n),n.geometry.dispose(),n.material.dispose();xo.visible=F("debug-grid").checked;for(let n of _t.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=F("debug-wire").checked;if(F("debug-hitboxes").checked){let e=_t.children.indexOf(n),t=re.pieces[e];if(t?.model){let i=new M(t.w,t.h,t.d),s=pg(t.model,i);if(s)for(let r of s){let o=new We(...r.size),a=new me(o,new Vt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),nr.add(a)}else{let r=fg(t.model,i),o=new me(r,new Vt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),nr.add(o)}}else if(t?.primitive==="ramp"){let i=new Ls(new la(n.geometry),new jn({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),nr.add(i)}else nr.add(new Zr(n,"#fa9945"))}}rn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])F(n).onchange=R0;F("debug-coords").onchange=()=>{F("debug-coords").checked||C0()};for(let n of[qt,nt])n.addEventListener("pointermove",e=>{if(!F("debug-coords").checked||pt||Qn)return;let t=yo(n,e);if(!t)return;let i=t.point;F("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+re.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(l0);if(n){let e=$t(n);if(JSON.stringify(e)!==JSON.stringify(Ig()))if(e.arenaBase&&!e.editableArena){let t=ef(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=po?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,re=$t(e),ot("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):re=e}else re=e}}catch{}d1();Ai("move");xt();Bh();zh();lr();Za();if(qd){let n=Sn.find(e=>e.id===qd);n?(F("place-model").click(),ot("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):ot("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}pi("d\xE9marrage termin\xE9",{version:"R38.6",name:re.name,pi\u00E8ces:re.pieces.length});})();
