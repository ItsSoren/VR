(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var En={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dp=0,_u=1,fp=2;var vu=1,pp=2,Mi=3,Oi=0,_n=1,kt=2,Xi=0,zs=1,bu=2,Mu=3,Su=4,mp=5,as=100,gp=101,xp=102,yp=103,_p=104,vp=200,bp=201,Mp=202,Sp=203,bl=204,Ml=205,wp=206,Tp=207,Ep=208,Ap=209,Cp=210,Rp=211,Ip=212,Pp=213,Lp=214,Yl=0,Zl=1,jl=2,ks=3,Jl=4,Kl=5,$l=6,Ql=7,wu=0,Dp=1,Up=2,qi=0,Np=1,Fp=2,Op=3,ec=4,Bp=5,zp=6,kp=7,ru="attached",Vp="detached",Tu=300,$s=301,Qs=302,tc=303,nc=304,ca=306,wn=1e3,pi=1001,Nr=1002,hn=1003,ic=1004;var er=1005;var Kt=1006,eo=1007;var un=1008;var ai=1009,Eu=1010,Au=1011,to=1012,sc=1013,ds=1014,li=1015,no=1016,rc=1017,oc=1018,io=1020,Cu=35902,Ru=35899,Iu=1021,Pu=1022,vn=1023,Fr=1026,so=1027,Lu=1028,ac=1029,Du=1030,lc=1031;var cc=1033,ha=33776,ua=33777,da=33778,fa=33779,hc=35840,uc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37808,yc=37809,_c=37810,vc=37811,bc=37812,Mc=37813,Sc=37814,wc=37815,Tc=37816,Ec=37817,Ac=37818,Cc=37819,Rc=37820,Ic=37821,Pc=36492,Lc=36494,Dc=36495,Uc=36283,Nc=36284,Fc=36285,Oc=36286;var Vs=2300,Or=2301,_l=2302,ou=2400,au=2401,lu=2402;var Gp=3200,Hp=3201;var Uu=0,Wp=1,ci="",It="srgb",Gs="srgb-linear",Fo="linear",yt="srgb";var Bs=7680;var cu=519,Xp=512,qp=513,Yp=514,Nu=515,Zp=516,jp=517,Jp=518,Kp=519,hu=35044;var Fu="300 es",ri=2e3,Oo=2001;var gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rf=1234567,Lo=Math.PI/180,Br=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function D0(i,e,t){return i!==e?(t-i)/(e-i):0}function Do(i,e,t){return(1-t)*i+t*e}function U0(i,e,t,n){return Do(i,e,1-Math.exp(-t*n))}function N0(i,e=1){return e-Math.abs(Ou(i,e*2)-e)}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function z0(i,e){return i+Math.random()*(e-i)}function k0(i){return i*(.5-Math.random())}function V0(i){i!==void 0&&(Rf=i);let e=Rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G0(i){return i*Lo}function H0(i){return i*Br}function W0(i){return(i&i-1)===0&&i!==0}function X0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function q0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Y0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Be={DEG2RAD:Lo,RAD2DEG:Br,generateUUID:fs,clamp:je,euclideanModulo:Ou,mapLinear:L0,inverseLerp:D0,lerp:Do,damp:U0,pingpong:N0,smoothstep:F0,smootherstep:O0,randInt:B0,randFloat:z0,randFloatSpread:k0,seededRandom:V0,degToRad:G0,radToDeg:H0,isPowerOfTwo:W0,ceilPowerOfTwo:X0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:Y0,normalize:yn,denormalize:Dr},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let T=Math.sqrt(M),A=Math.atan2(T,p*v);g=Math.sin(g*A)/T,a=Math.sin(a*A)/T}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ih=new _,If=new rt,tt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],M=s[4],y=s[7],T=s[2],A=s[5],P=s[8];return r[0]=o*x+a*v+l*T,r[3]=o*g+a*M+l*A,r[6]=o*p+a*y+l*P,r[1]=c*x+h*v+u*T,r[4]=c*g+h*M+u*A,r[7]=c*p+h*y+u*P,r[2]=d*x+f*v+m*T,r[5]=d*g+f*M+m*A,r[8]=d*p+f*y+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ph.makeScale(e,t)),this}rotate(e){return this.premultiply(Ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ph=new tt;function Bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $p(){let i=zr("canvas");return i.style.display="block",i}var Pf={};function kr(i){i in Pf||(Pf[i]=!0,console.warn(i))}function Qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z0(){let i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Ur(s.r),s.g=Ur(s.g),s.b=Ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var ft=Z0();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yr,Vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=zr("canvas")),yr.width=e.width,yr.height=e.height;let s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j0=0,ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lh(s[o].image)):r.push(Lh(s[o]))}else r=Lh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var J0=0,Dh=new _,sn=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=Kt,o=un,a=vn,l=ai,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=fs(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Tu;sn.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(p+1)/2,A=(h+d)/4,P=(u+x)/4,D=(m+g)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=P/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new sn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends Sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bo=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ht=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),ja.subVectors(this.max,Eo),_r.subVectors(e.a,Eo),vr.subVectors(e.b,Eo),br.subVectors(e.c,Eo),ts.subVectors(vr,_r),ns.subVectors(br,vr),Us.subVectors(_r,br);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Us.z,Us.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Us.z,0,-Us.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Us.y,Us.x,0];return!Uh(t,_r,vr,br,ja)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,_r,vr,br,ja))?!1:(Ja.crossVectors(ts,ns),t=[Ja.x,Ja.y,Ja.z],Uh(t,_r,vr,br,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new _,new _,new _,new _,new _,new _,new _,new _],ni=new _,Za=new Ht,_r=new _,vr=new _,br=new _,ts=new _,ns=new _,Us=new _,Eo=new _,ja=new _,Ja=new _,Ns=new _;function Uh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=e.dot(Ns),c=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var K0=new Ht,Ao=new _,Nh=new _,yi=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Nh)),this.expandByPoint(Ao.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new _,Fh=new _,Ka=new _,is=new _,Oh=new _,$a=new _,Bh=new _,Bi=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fh.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=is.dot(this.direction),l=-is.dot(Ka),c=is.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fh).addScaledVector(Ka,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){Oh.subVectors(t,e),$a.subVectors(n,e),Bh.crossVectors(Oh,$a);let o=this.direction.dot(Bh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let l=a*this.direction.dot($a.crossVectors(is,$a));if(l<0)return null;let c=a*this.direction.dot(Oh.cross(is));if(c<0||l+c>o)return null;let h=-a*is.dot(Bh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,Q0)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ss.crossVectors(n,Un),ss.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ss.crossVectors(n,Un)),ss.normalize(),Qa.crossVectors(Un,ss),s[0]=ss.x,s[4]=Qa.x,s[8]=Un.x,s[1]=ss.y,s[5]=Qa.y,s[9]=Un.y,s[2]=ss.z,s[6]=Qa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],M=n[7],y=n[11],T=n[15],A=s[0],P=s[4],D=s[8],w=s[12],b=s[1],L=s[5],B=s[9],X=s[13],k=s[2],H=s[6],V=s[10],ne=s[14],q=s[3],re=s[7],xe=s[11],we=s[15];return r[0]=o*A+a*b+l*k+c*q,r[4]=o*P+a*L+l*H+c*re,r[8]=o*D+a*B+l*V+c*xe,r[12]=o*w+a*X+l*ne+c*we,r[1]=h*A+u*b+d*k+f*q,r[5]=h*P+u*L+d*H+f*re,r[9]=h*D+u*B+d*V+f*xe,r[13]=h*w+u*X+d*ne+f*we,r[2]=m*A+x*b+g*k+p*q,r[6]=m*P+x*L+g*H+p*re,r[10]=m*D+x*B+g*V+p*xe,r[14]=m*w+x*X+g*ne+p*we,r[3]=v*A+M*b+y*k+T*q,r[7]=v*P+M*L+y*H+T*re,r[11]=v*D+M*B+y*V+T*xe,r[15]=v*w+M*X+y*ne+T*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,M=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,T=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,A=t*v+n*M+s*y+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=v*P,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*P,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=M*P,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*P,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=y*P,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=T*P,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*P,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=l*c,M=l*h,y=l*u,T=n.x,A=n.y,P=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+y)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(m+M)*P,s[9]=(g-v)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Mr.set(s[0],s[1],s[2]).length(),o=Mr.set(s[4],s[5],s[6]).length(),a=Mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,h=1/o,u=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===ri)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Oo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===ri)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Oo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new _,ii=new it,$0=new _(0,0,0),Q0=new _(1,1,1),ss=new _,Qa=new _,Un=new _,Uf=new it,Nf=new rt,Yt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ex=0,Ff=new _,Sr=new rt,Di=new it,el=new _,Co=new _,tx=new _,nx=new rt,Of=new _(1,0,0),Bf=new _(0,1,0),zf=new _(0,0,1),kf={type:"added"},ix={type:"removed"},wr={type:"childadded",child:null},zh={type:"childremoved",child:null},Pt=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new _,t=new Yt,n=new rt,s=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?el.copy(e):el.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Co,el,this.up):Di.lookAt(el,Co,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(Di),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ix),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new _(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new _,Ui=new _,kh=new _,Ni=new _,Tr=new _,Er=new _,Vf=new _,Vh=new _,Gh=new _,Hh=new _,Wh=new bt,Xh=new bt,qh=new bt,Fn=class i{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Ui.subVectors(n,t),kh.subVectors(e,t);let o=si.dot(si),a=si.dot(Ui),l=si.dot(kh),c=Ui.dot(Ui),h=Ui.dot(kh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wh.setScalar(0),Xh.setScalar(0),qh.setScalar(0),Wh.fromBufferAttribute(e,t),Xh.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wh,r.x),o.addScaledVector(Xh,r.y),o.addScaledVector(qh,r.z),o}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Ui.subVectors(e,t),si.cross(Ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Tr.subVectors(s,n),Er.subVectors(r,n),Vh.subVectors(e,n);let l=Tr.dot(Vh),c=Er.dot(Vh);if(l<=0&&c<=0)return t.copy(n);Gh.subVectors(e,s);let h=Tr.dot(Gh),u=Er.dot(Gh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Tr,o);Hh.subVectors(e,r);let f=Tr.dot(Hh),m=Er.dot(Hh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Er,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Vf.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Vf,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Tr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Ou(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yh(o,r,e+1/3),this.g=Yh(o,r,e),this.b=Yh(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ft.workingToColorSpace(ln.copy(this),e),Math.round(je(ln.r*255,0,255))*65536+Math.round(je(ln.g*255,0,255))*256+Math.round(je(ln.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=It){ft.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(tl);let n=Do(rs.h,tl.h,t),s=Do(rs.s,tl.s,t),r=Do(rs.l,tl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Oe;Oe.NAMES=em;var sx=0,zi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=zs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Ml,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new _,nl=new ae,rx=0,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}};var Hs=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zo=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pe=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ox=0,Zn=new it,Zh=new Pt,Ar=new _,Nn=new Ht,Ro=new Ht,nn=new _,ht=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?zo:Hs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Nn.min,Ro.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Ro.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Ro.min),Nn.expandByPoint(Ro.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),nn.add(Ar)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new _,l[D]=new _;let c=new _,h=new _,u=new _,d=new ae,f=new ae,m=new ae,x=new _,g=new _;function p(D,w,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[D].add(x),a[w].add(x),a[b].add(x),l[D].add(g),l[w].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,w=v.length;D<w;++D){let b=v[D],L=b.start,B=b.count;for(let X=L,k=L+B;X<k;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let M=new _,y=new _,T=new _,A=new _;function P(D){T.fromBufferAttribute(s,D),A.copy(T);let w=a[D];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(A,w);let L=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,w=v.length;D<w;++D){let b=v[D],L=b.start,B=b.count;for(let X=L,k=L+B;X<k;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new _,r=new _,o=new _,a=new _,l=new _,c=new _,h=new _,u=new _;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gf=new it,Fs=new Bi,il=new yi,Hf=new _,sl=new _,rl=new _,ol=new _,jh=new _,al=new _,Wf=new _,ll=new _,ye=class extends Pt{constructor(e=new ht,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(jh.fromBufferAttribute(u,e),o?al.addScaledVector(jh,h):al.addScaledVector(jh.sub(t),h))}t.add(al)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(il.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(il,Hf)===null||Fs.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(Gf.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let A=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=cl(this,p,e,n,c,h,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=cl(this,o,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let A=y,P=y+1,D=y+2;s=cl(this,p,e,n,c,h,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,M=g+1,y=g+2;s=cl(this,o,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ax(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Oi,a),l===null)return null;ll.copy(a),ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,sl),i.getVertexPosition(l,rl),i.getVertexPosition(c,ol);let h=ax(i,e,t,n,sl,rl,ol,Wf);if(h){let u=new _;Fn.getBarycoord(Wf,sl,rl,ol,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,l,c,u,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new _,materialIndex:0};Fn.getNormal(sl,rl,ol,d.normal),h.face=d,h.barycoord=u}return h}var et=class i extends ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function m(x,g,p,v,M,y,T,A,P,D,w){let b=y/P,L=T/D,B=y/2,X=T/2,k=A/2,H=P+1,V=D+1,ne=0,q=0,re=new _;for(let xe=0;xe<V;xe++){let we=xe*L-X;for(let Fe=0;Fe<H;Fe++){let Ye=Fe*b-B;re[x]=Ye*v,re[g]=we*M,re[p]=k,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[p]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(Fe/P),u.push(1-xe/D),ne+=1}}for(let xe=0;xe<D;xe++)for(let we=0;we<P;we++){let Fe=d+we+H*xe,Ye=d+we+H*(xe+1),Ke=d+(we+1)+H*(xe+1),Ve=d+(we+1)+H*xe;l.push(Fe,Ye,Ve),l.push(Ye,Ke,Ve),q+=6}a.addGroup(f,q,w),f+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function lx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var tm={clone:tr,merge:dn},cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ko=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new _,Xf=new ae,qf=new ae,qt=class extends ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cr=-90,Rr=1,Tl=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new qt(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let o=new qt(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let a=new qt(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let l=new qt(Cr,Rr,e,t);l.layers=this.layers,this.add(l);let c=new qt(Cr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vo=class extends sn{constructor(e=[],t=$s,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},El=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Xi});r.uniforms.tEquirect.value=t;let o=new ye(s,r),a=t.minFilter;return t.minFilter===un&&(t.minFilter=Kt),new Tl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Jt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ux={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var jn=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yf=new _,Zf=new bt,jf=new bt,dx=new _,Jf=new it,hl=new _,Jh=new yi,Kf=new it,Kh=new Bi,Go=class extends ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hl),this.boundingBox.expandByPoint(hl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hl),this.boundingSphere.expandByPoint(hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jh.copy(this.boundingSphere),Jh.applyMatrix4(s),e.ray.intersectsSphere(Jh)!==!1&&(Kf.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zf.fromBufferAttribute(s.attributes.skinIndex,e),jf.fromBufferAttribute(s.attributes.skinWeight,e),Yf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=jf.getComponent(r);if(o!==0){let a=Zf.getComponent(r);Jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dx.copy(Yf).applyMatrix4(Jf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Wr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_i=class extends sn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=hn,h=hn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$f=new it,fx=new it,Ho=class i{constructor(e=[],t=[]){this.uuid=fs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:fx;$f.multiplyMatrices(a,t[r]),$f.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _i(t,e,e,vn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wr),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var $h=new _,px=new _,mx=new tt,cn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$h.subVectors(n,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($h),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mx.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new yi,gx=new ae(.5,.5),ul=new _,Xr=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,o=new cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-m,T-v).normalize(),s[1].setComponents(c+o,f+h,p+m,T+v).normalize(),s[2].setComponents(c+a,f+u,p+x,T+M).normalize(),s[3].setComponents(c-a,f-u,p-x,T-M).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,T-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,T-y).normalize(),t===ri)s[5].setComponents(c+l,f+d,p+g,T+y).normalize();else if(t===Oo)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);let t=gx.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ul.x=s.normal.x>0?e.max.x:e.min.x,ul.y=s.normal.y>0?e.max.y:e.min.y,ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var On=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new _,Cl=new _,Qf=new it,Io=new Bi,dl=new yi,Qh=new _,ep=new _,Bn=class extends Pt{constructor(e=new ht,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Al.fromBufferAttribute(t,s-1),Cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Al.distanceTo(Cl);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Qf.copy(s).invert(),Io.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),M=fl(this,e,Io,l,p,v,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=fl(this,e,Io,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=fl(this,e,Io,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=fl(this,e,Io,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Al.fromBufferAttribute(a,s),Cl.fromBufferAttribute(a,r),t.distanceSqToSegment(Al,Cl,Qh,ep)>n)return;Qh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qh);if(!(c<e.near||c>e.far))return{distance:c,point:ep.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var tp=new _,np=new _,vi=class extends Bn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ws=class extends sn{constructor(e,t,n,s,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Wo=class extends sn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xo=class extends sn{constructor(e,t,n=ds,s,r,o,a=hn,l=hn,c,h=Fr,u=1){if(h!==Fr&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qo=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qr=class i extends ht{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,x=s+1,g=new _,p=new _;for(let v=0;v<=m;v++){let M=0,y=0,T=0,A=0;if(v<=n){let w=v/n,b=w*Math.PI/2;y=-h-e*Math.cos(b),T=e*Math.sin(b),A=-e*Math.cos(b),M=w*u}else if(v<=n+r){let w=(v-n)/r;y=-h+w*t,T=e,A=0,M=u+w*d}else{let w=(v-n-r)/n,b=w*Math.PI/2;y=h+e*Math.sin(b),T=e*Math.cos(b),A=e*Math.sin(b),M=u+d+w*u}let P=Math.max(0,Math.min(1,M/f)),D=0;v===0?D=.5/s:v===m&&(D=-.5/s);for(let w=0;w<=s;w++){let b=w/s,L=b*Math.PI*2,B=Math.sin(L),X=Math.cos(L);p.x=-T*X,p.y=y,p.z=T*B,a.push(p.x,p.y,p.z),g.set(-T*X,A,T*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+D,P)}if(v>0){let w=(v-1)*x;for(let b=0;b<s;b++){let L=w+b,B=w+b+1,X=v*x+b,k=v*x+b+1;o.push(L,B,X),o.push(B,k,X)}}}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Tn=class i extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new _,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class i extends ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function v(){let y=new _,T=new _,A=0,P=(t-e)/n;for(let D=0;D<=r;D++){let w=[],b=D/r,L=b*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,k=X*l+a,H=Math.sin(k),V=Math.cos(k);T.x=L*H,T.y=-b*n+g,T.z=L*V,u.push(T.x,T.y,T.z),y.set(H,P,V).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-b),w.push(m++)}x.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){let b=x[w][D],L=x[w+1][D],B=x[w+1][D+1],X=x[w][D+1];(e>0||w!==0)&&(h.push(b,L,X),A+=3),(t>0||w!==r-1)&&(h.push(L,B,X),A+=3)}c.addGroup(p,A,0),p+=A}function M(y){let T=m,A=new ae,P=new _,D=0,w=y===!0?e:t,b=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let L=m;for(let B=0;B<=s;B++){let k=B/s*l+a,H=Math.cos(k),V=Math.sin(k);P.x=w*V,P.y=g*b,P.z=w*H,u.push(P.x,P.y,P.z),d.push(0,b,0),A.x=H*.5+.5,A.y=V*.5*b+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){let X=T+B,k=L+B;y===!0?h.push(k,k+1,X):h.push(k+1,k,X),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class i extends wt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class i extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new _,y=new _,T=new _;for(let A=0;A<t.length;A+=3)f(t[A+0],M),f(t[A+1],y),f(t[A+2],T),l(M,y,T,v)}function l(v,M,y,T){let A=T+1,P=[];for(let D=0;D<=A;D++){P[D]=[];let w=v.clone().lerp(y,D/A),b=M.clone().lerp(y,D/A),L=A-D;for(let B=0;B<=L;B++)B===0&&D===A?P[D][B]=w:P[D][B]=w.clone().lerp(b,B/L)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){let b=Math.floor(w/2);w%2===0?(d(P[D][b+1]),d(P[D+1][b]),d(P[D][b])):(d(P[D][b+1]),d(P[D+1][b+1]),d(P[D+1][b]))}}function c(v){let M=new _;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new _;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=g(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(y,1-T)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],T=o[v+4],A=Math.max(M,y,T),P=Math.min(M,y,T);A>.9&&P<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function m(){let v=new _,M=new _,y=new _,T=new _,A=new ae,P=new ae,D=new ae;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),T.copy(v).add(M).add(y).divideScalar(3);let L=g(T);x(A,b+0,v,L),x(P,b+2,M,L),x(D,b+4,y,L)}}function x(v,M,y,T){T<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,s=[],r=[],o=[],a=new _,l=new it;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rl=class extends Zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ku(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var pl=new _,eu=new ku,tu=new ku,nu=new ku,Il=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new _){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pl.subVectors(s[0],s[1]).add(s[0]),c=pl);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),eu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),tu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),nu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),nu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(eu.calc(l),tu.calc(l),nu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ip(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function xx(i,e){let t=1-i;return t*t*e}function yx(i,e){return 2*(1-i)*i*e}function _x(i,e){return i*i*e}function Uo(i,e,t,n){return xx(i,e)+yx(i,t)+_x(i,n)}function vx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Mx(i,e){return 3*(1-i)*i*i*e}function Sx(i,e){return i*i*i*e}function No(i,e,t,n,s){return vx(i,e)+bx(i,t)+Mx(i,n)+Sx(i,s)}var Zo=class extends zn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends zn{constructor(e=new _,t=new _,n=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y),No(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends zn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends zn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends zn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends zn{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y),Uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ip(a,l.x,c.x,h.x,u.x),ip(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},uu=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Il,CubicBezierCurve:Zo,CubicBezierCurve3:Pl,EllipseCurve:Zr,LineCurve:jo,LineCurve3:Ll,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Dl,SplineCurve:Ko}),Ul=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new uu[s.type]().fromJSON(s))}return this}},$o=class extends Ul{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Jo(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Zo(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Zr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ki=class extends $o{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $o().fromJSON(s))}return this}};function wx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=nm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Rx(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qo(r,o,t,a,l,c,0),o}function nm(i,e,t,n,s){let r;if(s===kx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=sp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=sp(o/n|0,i[o],i[o+1],r);return r&&jr(r,r.next)&&(ta(r),r=r.next),r}function Xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ux(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ex(i,n,s,r):Tx(i)){e.push(l.i,i.i,c.i),ta(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ax(Xs(i),e),Qo(i,e,t,n,s,r,2)):o===2&&Cx(i,e,t,n,s,r):Qo(Xs(i),e,t,n,s,r,1);break}}}function Tx(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Po(s,a,r,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ex(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=du(f,m,e,t,n),v=du(x,g,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Po(a,h,l,u,c,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Po(a,h,l,u,c,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Po(a,h,l,u,c,d,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Po(a,h,l,u,c,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ax(i,e){let t=i;do{let n=t.prev,s=t.next.next;!jr(n,s)&&sm(n,t,t.next,s)&&ea(n,s)&&ea(s,n)&&(e.push(n.i,t.i,s.i),ta(t),ta(t.next),t=i=s),t=t.next}while(t!==i);return Xs(t)}function Cx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ox(o,a)){let l=rm(o,a);o=Xs(o,o.next),l=Xs(l,l.next),Qo(o,e,t,n,s,r,0),Qo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=nm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fx(c))}s.sort(Ix);for(let r=0;r<s.length;r++)t=Px(s[r],t);return t}function Ix(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Px(i,e){let t=Lx(i,e);if(!t)return e;let n=rm(t,i);return Xs(n,n.next),Xs(t,t.next)}function Lx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(jr(i,t))return t;do{if(jr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&im(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ea(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Dx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Dx(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function Ux(i,e,t,n){let s=i;do s.z===0&&(s.z=du(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nx(s)}function Nx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function du(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Fx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function im(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Po(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&im(i,e,t,n,s,r,o,a)}function Ox(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bx(i,e)&&(ea(i,e)&&ea(e,i)&&zx(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||jr(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jr(i,e){return i.x===e.x&&i.y===e.y}function sm(i,e,t,n){let s=gl(Ot(i,e,t)),r=gl(Ot(i,e,n)),o=gl(Ot(t,n,i)),a=gl(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&ml(i,t,e)||r===0&&ml(i,n,e)||o===0&&ml(t,i,n)||a===0&&ml(t,e,n))}function ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gl(i){return i>0?1:i<0?-1:0}function Bx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ea(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function zx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rm(i,e){let t=fu(i.i,i.x,i.y),n=fu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sp(i,e,t,n){let s=fu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var pu=class{static triangulate(e,t,n=2){return wx(e,t,n)}},mi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rp(e),op(n,e);let o=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,op(n,t[l]);let a=pu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qs=class i extends ht{constructor(e=new ki([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Vx,M,y=!1,T,A,P,D;p&&(M=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),A=new _,P=new _,D=new _),d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(c),b=w.shape,L=w.holes;if(!mi.isClockWise(b)){b=b.reverse();for(let ee=0,$=L.length;ee<$;ee++){let Z=L[ee];mi.isClockWise(Z)&&(L[ee]=Z.reverse())}}function X(ee){let Z=10000000000000001e-36,Q=ee[0];for(let me=1;me<=ee.length;me++){let he=me%ee.length,_e=ee[he],Xe=_e.x-Q.x,Ge=_e.y-Q.y,I=Xe*Xe+Ge*Ge,S=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(Q.x),Math.abs(Q.y)),U=Z*S*S;if(I<=U){ee.splice(he,1),me--;continue}Q=_e}}X(b),L.forEach(X);let k=L.length,H=b;for(let ee=0;ee<k;ee++){let $=L[ee];b=b.concat($)}function V(ee,$,Z){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector($,Z)}let ne=b.length;function q(ee,$,Z){let Q,me,he,_e=ee.x-$.x,Xe=ee.y-$.y,Ge=Z.x-ee.x,I=Z.y-ee.y,S=_e*_e+Xe*Xe,U=_e*I-Xe*Ge;if(Math.abs(U)>Number.EPSILON){let z=Math.sqrt(S),ie=Math.sqrt(Ge*Ge+I*I),Y=$.x-Xe/z,Ee=$.y+_e/z,le=Z.x-I/ie,Me=Z.y+Ge/ie,Ae=((le-Y)*I-(Me-Ee)*Ge)/(_e*I-Xe*Ge);Q=Y+_e*Ae-ee.x,me=Ee+Xe*Ae-ee.y;let ce=Q*Q+me*me;if(ce<=2)return new ae(Q,me);he=Math.sqrt(ce/2)}else{let z=!1;_e>Number.EPSILON?Ge>Number.EPSILON&&(z=!0):_e<-Number.EPSILON?Ge<-Number.EPSILON&&(z=!0):Math.sign(Xe)===Math.sign(I)&&(z=!0),z?(Q=-Xe,me=_e,he=Math.sqrt(S)):(Q=_e,me=Xe,he=Math.sqrt(S/2))}return new ae(Q/he,me/he)}let re=[];for(let ee=0,$=H.length,Z=$-1,Q=ee+1;ee<$;ee++,Z++,Q++)Z===$&&(Z=0),Q===$&&(Q=0),re[ee]=q(H[ee],H[Z],H[Q]);let xe=[],we,Fe=re.concat();for(let ee=0,$=k;ee<$;ee++){let Z=L[ee];we=[];for(let Q=0,me=Z.length,he=me-1,_e=Q+1;Q<me;Q++,he++,_e++)he===me&&(he=0),_e===me&&(_e=0),we[Q]=q(Z[Q],Z[he],Z[_e]);xe.push(we),Fe=Fe.concat(we)}let Ye;if(g===0)Ye=mi.triangulateShape(H,L);else{let ee=[],$=[];for(let Z=0;Z<g;Z++){let Q=Z/g,me=f*Math.cos(Q*Math.PI/2),he=m*Math.sin(Q*Math.PI/2)+x;for(let _e=0,Xe=H.length;_e<Xe;_e++){let Ge=V(H[_e],re[_e],he);ue(Ge.x,Ge.y,-me),Q===0&&ee.push(Ge)}for(let _e=0,Xe=k;_e<Xe;_e++){let Ge=L[_e];we=xe[_e];let I=[];for(let S=0,U=Ge.length;S<U;S++){let z=V(Ge[S],we[S],he);ue(z.x,z.y,-me),Q===0&&I.push(z)}Q===0&&$.push(I)}}Ye=mi.triangulateShape(ee,$)}let Ke=Ye.length,Ve=m+x;for(let ee=0;ee<ne;ee++){let $=d?V(b[ee],Fe[ee],Ve):b[ee];y?(P.copy(T.normals[0]).multiplyScalar($.x),A.copy(T.binormals[0]).multiplyScalar($.y),D.copy(M[0]).add(P).add(A),ue(D.x,D.y,D.z)):ue($.x,$.y,0)}for(let ee=1;ee<=h;ee++)for(let $=0;$<ne;$++){let Z=d?V(b[$],Fe[$],Ve):b[$];y?(P.copy(T.normals[ee]).multiplyScalar(Z.x),A.copy(T.binormals[ee]).multiplyScalar(Z.y),D.copy(M[ee]).add(P).add(A),ue(D.x,D.y,D.z)):ue(Z.x,Z.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){let $=ee/g,Z=f*Math.cos($*Math.PI/2),Q=m*Math.sin($*Math.PI/2)+x;for(let me=0,he=H.length;me<he;me++){let _e=V(H[me],re[me],Q);ue(_e.x,_e.y,u+Z)}for(let me=0,he=L.length;me<he;me++){let _e=L[me];we=xe[me];for(let Xe=0,Ge=_e.length;Xe<Ge;Xe++){let I=V(_e[Xe],we[Xe],Q);y?ue(I.x,I.y+M[h-1].y,M[h-1].x+Z):ue(I.x,I.y,u+Z)}}}te(),N();function te(){let ee=s.length/3;if(d){let $=0,Z=ne*$;for(let Q=0;Q<Ke;Q++){let me=Ye[Q];O(me[2]+Z,me[1]+Z,me[0]+Z)}$=h+g*2,Z=ne*$;for(let Q=0;Q<Ke;Q++){let me=Ye[Q];O(me[0]+Z,me[1]+Z,me[2]+Z)}}else{for(let $=0;$<Ke;$++){let Z=Ye[$];O(Z[2],Z[1],Z[0])}for(let $=0;$<Ke;$++){let Z=Ye[$];O(Z[0]+ne*h,Z[1]+ne*h,Z[2]+ne*h)}}n.addGroup(ee,s.length/3-ee,0)}function N(){let ee=s.length/3,$=0;se(H,$),$+=H.length;for(let Z=0,Q=L.length;Z<Q;Z++){let me=L[Z];se(me,$),$+=me.length}n.addGroup(ee,s.length/3-ee,1)}function se(ee,$){let Z=ee.length;for(;--Z>=0;){let Q=Z,me=Z-1;me<0&&(me=ee.length-1);for(let he=0,_e=h+g*2;he<_e;he++){let Xe=ne*he,Ge=ne*(he+1),I=$+Q+Xe,S=$+me+Xe,U=$+me+Ge,z=$+Q+Ge;J(I,S,U,z)}}}function ue(ee,$,Z){l.push(ee),l.push($),l.push(Z)}function O(ee,$,Z){de(ee),de($),de(Z);let Q=s.length/3,me=v.generateTopUV(n,s,Q-3,Q-2,Q-1);R(me[0]),R(me[1]),R(me[2])}function J(ee,$,Z,Q){de(ee),de($),de(Q),de($),de(Z),de(Q);let me=s.length/3,he=v.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);R(he[0]),R(he[1]),R(he[3]),R(he[1]),R(he[2]),R(he[3])}function de(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function R(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uu[s.type]().fromJSON(s)),new i(n,e.options)}},Vx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(d,1-m),new ae(x,1-p)]:[new ae(a,1-l),new ae(h,1-u),new ae(f,1-m),new ae(g,1-p)]}};function Gx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bi=class i extends Yr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},na=class i extends ht{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new _,d=new ae,f=new _,m=new _,x=new _,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let M=n+v*h*s,y=Math.sin(M),T=Math.cos(M);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*T,o.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),a.push(d.x,d.y);let P=l[3*A+0]*y,D=l[3*A+1],w=l[3*A+0]*T;c.push(P,D,w)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,T=y,A=y+e.length,P=y+e.length+1,D=y+1;r.push(T,A,D),r.push(P,D,A)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Jn=class i extends Yr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Vi=class i extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),A=v+1+c*p;f.push(M,y,A),f.push(y,T,A)}this.setIndex(f),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Jr=class i extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new _,m=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,M=v,y=v+n+1,T=v+n+2,A=v+1;a.push(M,y,A),a.push(y,T,A)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ia=class i extends ht{constructor(e=new ki([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;mi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];mi.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=mi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],M=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(M,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Hx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var kn=class i extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new _,d=new _,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],M=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let A=T/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let M=h[p][v+1],y=h[p][v],T=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(M,y,A),(p!==n-1||l<Math.PI)&&f.push(y,T,A)}this.setIndex(f),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ys=class i extends Yr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Vn=class i extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new _,u=new _,d=new _;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zt=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Nl=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends Zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case au:r=e,a=2*t-n;break;case lu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:o=e,l=2*n-t;break;case lu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[c+T]+M*o[l+T]+y*o[u+T];return r}},Bl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},zl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xl(t,this.TimeBufferType),this.values=xl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xl(e.times,Array),values:xl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Wx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Or;var cs=class extends Gn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Vs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};kl.prototype.ValueTypeName="color";var Vl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Vl.prototype.ValueTypeName="number";var Gl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)rt.slerpFlat(r,0,o,c-a,o,c,l);return r}},sa=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Gn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Vs;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Hl.prototype.ValueTypeName="vector";var vl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Wl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},om=new Wl,Kr=class{constructor(e){this.manager=e!==void 0?e:om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=new WeakMap,Xl=class extends Kr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ir.get(o);u===void 0&&(u=[],Ir.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=zr("img");function l(){h(),t&&t(this);let u=Ir.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ir.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vl.remove(`image:${e}`);let d=Ir.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var $r=class extends Kr{constructor(e){super(e)}load(e,t,n,s){let r=new sn,o=new Xl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ra=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gi=class extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},iu=new it,ap=new _,lp=new _,mu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(ap),lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lp),t.updateMatrixWorld(),iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var oa=class extends ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gu=class extends mu{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hi=class extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new gu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ql=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vu="\\[\\]\\.:\\/",Xx=new RegExp("["+Vu+"]","g"),Gu="[^"+Vu+"]",qx="[^"+Vu.replace("\\.","")+"]",Yx=/((?:WC+[\/:])*)/.source.replace("WC",Gu),Zx=/(WCOD+)?/.source.replace("WCOD",qx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),Kx=new RegExp("^"+Yx+Zx+jx+Jx+"$"),$x=["material","materials","bones","map"],xu=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){let t=Kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=xu;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uw=new Float32Array(1);var cp=new it,Wi=class{constructor(e,t,n=0,s=1/0){this.ray=new Bi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cp),this}intersectObject(e,t=!0,n=[]){return yu(e,this,n,t),n.sort(hp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yu(e[s],this,n,t);return n.sort(hp),n}};function hp(i,e){return i.distance-e.distance}function yu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)yu(r[o],e,t,!0)}}var Qr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var up=new _,yl=new _,Pr=new _,Lr=new _,su=new _,Qx=new _,ey=new _,js=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){up.subVectors(e,this.start),yl.subVectors(this.end,this.start);let n=yl.dot(yl),r=yl.dot(up)/n;return t&&(r=je(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Qx,n=ey){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Pr.subVectors(c,a),Lr.subVectors(h,l),su.subVectors(a,l);let u=Pr.dot(Pr),d=Lr.dot(Lr),f=Lr.dot(su);if(u<=s&&d<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(u<=s)r=0,o=f/d,o=je(o,0,1);else{let m=Pr.dot(su);if(d<=s)o=0,r=je(-m/u,0,1);else{let x=Pr.dot(Lr),g=u*d-x*x;g!==0?r=je((x*f-m*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=je(-m/u,0,1)):o>1&&(o=1,r=je((x-m)/u,0,1))}}return t.copy(a).add(Pr.multiplyScalar(r)),n.copy(l).add(Lr.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Js=class extends vi{constructor(e=10,t=10,n=4473924,s=8947848){n=new Oe(n),s=new Oe(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new ht;h.setAttribute("position",new Pe(l,3)),h.setAttribute("color",new Pe(c,3));let u=new On({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var aa=class extends vi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ht;r.setIndex(new mt(n,1)),r.setAttribute("position",new Pe(s,3)),super(r,new On({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var la=class extends vi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ht;s.setAttribute("position",new Pe(t,3)),s.setAttribute("color",new Pe(n,3));let r=new On({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new Oe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ks=class extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hu(i,e,t,n){let s=ty(n);switch(t){case Iu:return i*e;case Lu:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case Du:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Pu:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case cc:return i*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ty(i){switch(i){case ai:case Eu:return{byteLength:1,components:1};case to:case Au:case no:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case ds:case sc:case li:return{byteLength:4,components:1};case Cu:case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Im(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cy(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hy=`#ifdef USE_ALPHAHASH
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
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#ifdef USE_INSTANCING_MORPH
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
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
}`,bv=`uniform float scale;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Iv=`#define NORMAL
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
}`,Pv=`#define PHONG
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
}`,st={alphahash_fragment:hy,alphahash_pars_fragment:uy,alphamap_fragment:dy,alphamap_pars_fragment:fy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:xy,batching_pars_vertex:yy,batching_vertex:_y,begin_vertex:vy,beginnormal_vertex:by,bsdfs:My,iridescence_fragment:Sy,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Cy,color_fragment:Ry,color_pars_fragment:Iy,color_pars_vertex:Py,color_vertex:Ly,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Fy,displacementmap_vertex:Oy,emissivemap_fragment:By,emissivemap_pars_fragment:zy,colorspace_fragment:ky,colorspace_pars_fragment:Vy,envmap_fragment:Gy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:n_,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Zy,fog_fragment:jy,fog_pars_fragment:Jy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:o_,lights_physical_fragment:a_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:y_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:b_,morphinstance_vertex:M_,morphcolor_vertex:S_,morphnormal_vertex:w_,morphtarget_pars_vertex:T_,morphtarget_vertex:E_,normal_fragment_begin:A_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:I_,normal_vertex:P_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:F_,opaque_fragment:O_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:k_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:j_,skinning_pars_vertex:J_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:Q_,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:rv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:lv,background_vert:cv,background_frag:hv,backgroundCube_vert:uv,backgroundCube_frag:dv,cube_vert:fv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distanceRGBA_vert:xv,distanceRGBA_frag:yv,equirect_vert:_v,equirect_frag:vv,linedashed_vert:bv,linedashed_frag:Mv,meshbasic_vert:Sv,meshbasic_frag:wv,meshlambert_vert:Tv,meshlambert_frag:Ev,meshmatcap_vert:Av,meshmatcap_frag:Cv,meshnormal_vert:Rv,meshnormal_frag:Iv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Uv,meshtoon_vert:Nv,meshtoon_frag:Fv,points_vert:Ov,points_frag:Bv,shadow_vert:zv,shadow_frag:kv,sprite_vert:Vv,sprite_frag:Gv},Te={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Si={basic:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:dn([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:dn([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:dn([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:dn([Te.common,Te.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:dn([Te.lights,Te.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:dn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Bc={r:0,b:0,g:0},nr=new Yt,Hv=new it;function Wv(i,e,t,n,s,r,o){let a=new Oe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,T=m(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){let T=m(y);T&&(T.isCubeTexture||T.mapping===ca)?(h===void 0&&(h=new ye(new et(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:tr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),nr.copy(y.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(nr)),h.material.toneMapped=ft.getTransfer(T.colorSpace)!==yt,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ye(new Vi(2,2),new oi({name:"BackgroundMaterial",uniforms:tr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Bc,zu(i)),n.buffers.color.setClear(Bc.r,Bc.g,Bc.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:g,dispose:v}}function Xv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,L,B,X,k){let H=!1,V=u(X,B,L);r!==V&&(r=V,c(r.object)),H=f(b,X,B,k),H&&m(b,X,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(b,L,B,X),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,B){let X=B.wireframe===!0,k=n[b.id];k===void 0&&(k={},n[b.id]=k);let H=k[L.id];H===void 0&&(H={},k[L.id]=H);let V=H[X];return V===void 0&&(V=d(l()),H[X]=V),V}function d(b){let L=[],B=[],X=[];for(let k=0;k<t;k++)L[k]=0,B[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:X,object:b,attributes:{},index:null}}function f(b,L,B,X){let k=r.attributes,H=L.attributes,V=0,ne=B.getAttributes();for(let q in ne)if(ne[q].location>=0){let xe=k[q],we=H[q];if(we===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),xe===void 0||xe.attribute!==we||we&&xe.data!==we.data)return!0;V++}return r.attributesNum!==V||r.index!==X}function m(b,L,B,X){let k={},H=L.attributes,V=0,ne=B.getAttributes();for(let q in ne)if(ne[q].location>=0){let xe=H[q];xe===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));let we={};we.attribute=xe,xe&&xe.data&&(we.data=xe.data),k[q]=we,V++}r.attributes=k,r.attributesNum=V,r.index=X}function x(){let b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){let B=r.newAttributes,X=r.enabledAttributes,k=r.attributeDivisors;B[b]=1,X[b]===0&&(i.enableVertexAttribArray(b),X[b]=1),k[b]!==L&&(i.vertexAttribDivisor(b,L),k[b]=L)}function v(){let b=r.newAttributes,L=r.enabledAttributes;for(let B=0,X=L.length;B<X;B++)L[B]!==b[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function M(b,L,B,X,k,H,V){V===!0?i.vertexAttribIPointer(b,L,B,k,H):i.vertexAttribPointer(b,L,B,X,k,H)}function y(b,L,B,X){x();let k=X.attributes,H=B.getAttributes(),V=L.defaultAttributeValues;for(let ne in H){let q=H[ne];if(q.location>=0){let re=k[ne];if(re===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let xe=re.normalized,we=re.itemSize,Fe=e.get(re);if(Fe===void 0)continue;let Ye=Fe.buffer,Ke=Fe.type,Ve=Fe.bytesPerElement,te=Ke===i.INT||Ke===i.UNSIGNED_INT||re.gpuType===sc;if(re.isInterleavedBufferAttribute){let N=re.data,se=N.stride,ue=re.offset;if(N.isInstancedInterleavedBuffer){for(let O=0;O<q.locationSize;O++)p(q.location+O,N.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let O=0;O<q.locationSize;O++)g(q.location+O);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let O=0;O<q.locationSize;O++)M(q.location+O,we/q.locationSize,Ke,xe,se*Ve,(ue+we/q.locationSize*O)*Ve,te)}else{if(re.isInstancedBufferAttribute){for(let N=0;N<q.locationSize;N++)p(q.location+N,re.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let N=0;N<q.locationSize;N++)g(q.location+N);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let N=0;N<q.locationSize;N++)M(q.location+N,we/q.locationSize,Ke,xe,we*Ve,we/q.locationSize*N*Ve,te)}}else if(V!==void 0){let xe=V[ne];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(q.location,xe);break;case 3:i.vertexAttrib3fv(q.location,xe);break;case 4:i.vertexAttrib4fv(q.location,xe);break;default:i.vertexAttrib1fv(q.location,xe)}}}}v()}function T(){D();for(let b in n){let L=n[b];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}delete n[b.id]}function P(b){for(let L in n){let B=n[L];if(B[b.id]===void 0)continue;let X=B[b.id];for(let k in X)h(X[k].object),delete X[k];delete B[b.id]}}function D(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function qv(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ai&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==li&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:A}}function Zv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new cn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,M=v*4,y=p.clippingState||null;l.value=y,y=h(m,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function jv(i){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=$s:a===nc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===tc||a===nc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new El(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var oo=4,am=[.125,.215,.35,.446,.526,.582],rr=20,Wu=new oa,lm=new Oe,Xu=null,qu=0,Yu=0,Zu=!1,sr=(1+Math.sqrt(5))/2,ro=1/sr,cm=[new _(-sr,ro,0),new _(sr,ro,0),new _(-ro,0,sr),new _(ro,0,sr),new _(0,sr,-ro),new _(0,sr,ro),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],Jv=new _,Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Jv}=r;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:no,format:vn,colorSpace:Gs,depthBuffer:!1},s=hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(r)),this._blurMaterial=$v(r,e,t)}return s}_compileMaterial(e){let t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,Wu)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(lm),u.toneMapping=qi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new rn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new ye(new et,x),p=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,p=!0):(x.color.copy(lm),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let T=this._cubeSize;zc(s,y*T,M>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$s||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;zc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cm[(s-r-1)%cm.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ye(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rr-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):rr;g>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rr}`);let p=[],v=0;for(let P=0;P<rr;++P){let D=P/x,w=Math.exp(-D*D/2);p.push(w),P===0?v+=w:P<g&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let y=this._sizeLods[s],T=3*y*(s>M-oo?s-M+oo:0),A=4*(this._cubeSize-y);zc(t,T,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Wu)}};function Kv(i){let e=[],t=[],n=[],s=i,r=i-oo+1+am.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-oo?l=am[o-i+oo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),M=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,D=A>2?0:-1,w=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];v.set(w,x*m*A),M.set(d,g*m*A);let b=[A,A,A,A,A,A];y.set(b,p*m*A)}let T=new ht;T.setAttribute("position",new mt(v,x)),T.setAttribute("uv",new mt(M,g)),T.setAttribute("faceIndex",new mt(y,p)),e.push(T),s>oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hm(i,e,t){let n=new xi(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $v(i,e,t){let n=new Float32Array(rr),s=new _(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function um(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function dm(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function Qv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===tc||l===nc,h=l===$s||l===Qs;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Vc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tb(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let M=0,y=v.length;M<y;M+=3){let T=v[M+0],A=v[M+1],P=v[M+2];d.push(T,A,A,P,P,T)}}else if(m!==void 0){let v=m.array;x=m.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let T=M+0,A=M+1,P=M+2;d.push(T,A,A,P,P,T)}}else return;let g=new(Bu(d)?zo:Hs)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nb(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ib(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sb(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*T*4*u),P=new Bo(A,y,T,u);P.type=li,P.needsUpdate=!0;let D=M*4;for(let b=0;b<u;b++){let L=g[b],B=p[b],X=v[b],k=y*T*4*b;for(let H=0;H<L.count;H++){let V=H*D;f===!0&&(s.fromBufferAttribute(L,H),A[k+V+0]=s.x,A[k+V+1]=s.y,A[k+V+2]=s.z,A[k+V+3]=0),m===!0&&(s.fromBufferAttribute(B,H),A[k+V+4]=s.x,A[k+V+5]=s.y,A[k+V+6]=s.z,A[k+V+7]=0),x===!0&&(s.fromBufferAttribute(X,H),A[k+V+8]=s.x,A[k+V+9]=s.y,A[k+V+10]=s.z,A[k+V+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ae(y,T)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rb(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Pm=new sn,fm=new Xo(1,1),Lm=new Bo,Dm=new wl,Um=new Vo,pm=[],mm=[],gm=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pm[s];if(r===void 0&&(r=new Float32Array(s),pm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=mm[e];t===void 0&&(t=new Int32Array(e),mm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ob(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function hb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;ym.set(n),i.uniformMatrix2fv(this.addr,!1,ym),Qt(t,n)}}function ub(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;xm.set(n),i.uniformMatrix3fv(this.addr,!1,xm),Qt(t,n)}}function db(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;gm.set(n),i.uniformMatrix4fv(this.addr,!1,gm),Qt(t,n)}}function fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function mb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function xb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function _b(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function bb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fm.compareFunction=Nu,r=fm):r=Pm,t.setTexture2D(e||r,s)}function Mb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dm,s)}function Sb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Um,s)}function wb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lm,s)}function Tb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return hb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return yb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return wb}}function Eb(i,e){i.uniform1fv(this.addr,e)}function Ab(i,e){let t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function Cb(i,e){let t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function Rb(i,e){let t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function Ib(i,e){let t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pb(i,e){let t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lb(i,e){let t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Db(i,e){i.uniform1iv(this.addr,e)}function Ub(i,e){i.uniform2iv(this.addr,e)}function Nb(i,e){i.uniform3iv(this.addr,e)}function Fb(i,e){i.uniform4iv(this.addr,e)}function Ob(i,e){i.uniform1uiv(this.addr,e)}function Bb(i,e){i.uniform2uiv(this.addr,e)}function zb(i,e){i.uniform3uiv(this.addr,e)}function kb(i,e){i.uniform4uiv(this.addr,e)}function Vb(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pm,r[o])}function Gb(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dm,r[o])}function Hb(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Um,r[o])}function Wb(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lm,r[o])}function Xb(i){switch(i){case 5126:return Eb;case 35664:return Ab;case 35665:return Cb;case 35666:return Rb;case 35674:return Ib;case 35675:return Pb;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Nb;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return Bb;case 36295:return zb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Wb}}var Ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tb(t.type)}},Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xb(t.type)}},$u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ju=/(\w+)(\])?(\[|\.)?/g;function _m(i,e){i.seq.push(e),i.map[e.id]=e}function qb(i,e,t){let n=i.name,s=n.length;for(ju.lastIndex=0;;){let r=ju.exec(n),o=ju.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_m(t,c===void 0?new Ju(a,i,e):new Ku(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $u(a),_m(t,u)),t=u}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);qb(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yb=37297,Zb=0;function jb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var bm=new tt;function Jb(i){ft._getMatrix(bm,ft.workingColorSpace,i);let e=`mat3( ${bm.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jb(i.getShaderSource(e),a)}else return r}function Kb(i,e){let t=Jb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $b(i,e){let t;switch(e){case Np:t="Linear";break;case Fp:t="Reinhard";break;case Op:t="Cineon";break;case ec:t="ACESFilmic";break;case zp:t="AgX";break;case kp:t="Neutral";break;case Bp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new _;function Qb(){ft.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function tM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pa(i){return i!==""}function Sm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(i){return i.replace(iM,rM)}var sM=new Map;function rM(i,e){let t=st[e];if(t===void 0){let n=sM.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qu(t)}var oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(oM,aM)}function aM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function lM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Qs:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function dM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lM(t),c=cM(t),h=hM(t),u=uM(t),d=dM(t),f=eM(t),m=tM(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(pa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(g=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?st.tonemapping_pars_fragment:"",t.toneMapping!==qi?$b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Kb("linearToOutputTexel",t.outputColorSpace),Qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=Qu(o),o=Sm(o,t),o=wm(o,t),a=Qu(a),a=Sm(a,t),a=wm(a,t),o=Tm(o),a=Tm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,y=v+p+a,T=vm(s,s.VERTEX_SHADER,M),A=vm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(A)||"",H=B.trim(),V=X.trim(),ne=k.trim(),q=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,A);else{let xe=Mm(s,T,"vertex"),we=Mm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+xe+`
`+we)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||ne==="")&&(re=!1);re&&(L.diagnostics={runnable:q,programLog:H,vertexShader:{log:V,prefix:g},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(T),s.deleteShader(A),D=new ao(s,x),w=nM(s,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Yb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var pM=0,ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new td(e),t.set(e,n)),n}},td=class{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}};function mM(i,e,t,n,s,r,o){let a=new Gr,l=new ed,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,L,B,X){let k=B.fog,H=X.geometry,V=w.isMeshStandardMaterial?B.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),q=ne&&ne.mapping===ca?ne.image.height:null,re=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=xe!==void 0?xe.length:0,Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let Ye,Ke,Ve,te;if(re){let gt=Si[re];Ye=gt.vertexShader,Ke=gt.fragmentShader}else Ye=w.vertexShader,Ke=w.fragmentShader,l.update(w),Ve=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);let N=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),ue=X.isInstancedMesh===!0,O=X.isBatchedMesh===!0,J=!!w.map,de=!!w.matcap,R=!!ne,ee=!!w.aoMap,$=!!w.lightMap,Z=!!w.bumpMap,Q=!!w.normalMap,me=!!w.displacementMap,he=!!w.emissiveMap,_e=!!w.metalnessMap,Xe=!!w.roughnessMap,Ge=w.anisotropy>0,I=w.clearcoat>0,S=w.dispersion>0,U=w.iridescence>0,z=w.sheen>0,ie=w.transmission>0,Y=Ge&&!!w.anisotropyMap,Ee=I&&!!w.clearcoatMap,le=I&&!!w.clearcoatNormalMap,Me=I&&!!w.clearcoatRoughnessMap,Ae=U&&!!w.iridescenceMap,ce=U&&!!w.iridescenceThicknessMap,Se=z&&!!w.sheenColorMap,ze=z&&!!w.sheenRoughnessMap,De=!!w.specularMap,be=!!w.specularColorMap,$e=!!w.specularIntensityMap,F=ie&&!!w.transmissionMap,pe=ie&&!!w.thicknessMap,ve=!!w.gradientMap,Re=!!w.alphaMap,fe=w.alphaTest>0,oe=!!w.alphaHash,Ue=!!w.extensions,Qe=qi;w.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let At={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:Ke,defines:w.defines,customVertexShaderID:Ve,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:O,batchingColor:O&&X._colorsTexture!==null,instancing:ue,instancingColor:ue&&X.instanceColor!==null,instancingMorph:ue&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gs,alphaToCoverage:!!w.alphaToCoverage,map:J,matcap:de,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:$,bumpMap:Z,normalMap:Q,displacementMap:d&&me,emissiveMap:he,normalMapObjectSpace:Q&&w.normalMapType===Wp,normalMapTangentSpace:Q&&w.normalMapType===Uu,metalnessMap:_e,roughnessMap:Xe,anisotropy:Ge,anisotropyMap:Y,clearcoat:I,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:Me,dispersion:S,iridescence:U,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:z,sheenColorMap:Se,sheenRoughnessMap:ze,specularMap:De,specularColorMap:be,specularIntensityMap:$e,transmission:ie,transmissionMap:F,thicknessMap:pe,gradientMap:ve,opaque:w.transparent===!1&&w.blending===zs&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:fe,alphaHash:oe,combine:w.combine,mapUv:J&&x(w.map.channel),aoMapUv:ee&&x(w.aoMap.channel),lightMapUv:$&&x(w.lightMap.channel),bumpMapUv:Z&&x(w.bumpMap.channel),normalMapUv:Q&&x(w.normalMap.channel),displacementMapUv:me&&x(w.displacementMap.channel),emissiveMapUv:he&&x(w.emissiveMap.channel),metalnessMapUv:_e&&x(w.metalnessMap.channel),roughnessMapUv:Xe&&x(w.roughnessMap.channel),anisotropyMapUv:Y&&x(w.anisotropyMap.channel),clearcoatMapUv:Ee&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(w.sheenRoughnessMap.channel),specularMapUv:De&&x(w.specularMap.channel),specularColorMapUv:be&&x(w.specularColorMap.channel),specularIntensityMapUv:$e&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:pe&&x(w.thicknessMap.channel),alphaMapUv:Re&&x(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Q||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(J||Re),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:J&&w.map.isVideoTexture===!0&&ft.getTransfer(w.map.colorSpace)===yt,decodeVideoTextureEmissive:he&&w.emissiveMap.isVideoTexture===!0&&ft.getTransfer(w.emissiveMap.colorSpace)===yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===kt,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(b,w),M(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let b=m[w.type],L;if(b){let B=Si[b];L=tm.clone(B.uniforms)}else L=w.uniforms;return L}function T(w,b){let L;for(let B=0,X=h.length;B<X;B++){let k=h[B];if(k.cacheKey===b){L=k,++L.usedTimes;break}}return L===void 0&&(L=new fM(i,b,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:D}}function gM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||xM),n.length>1&&n.sort(d||Am),s.length>1&&s.sort(d||Am)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function yM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Cm,i.set(n,[o])):s>=r.length?(o=new Cm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _M(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Oe};break;case"SpotLight":t={position:new _,direction:new _,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new _,halfWidth:new _,halfHeight:new _};break}return i[e.id]=t,t}}}function vM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bM=0;function MM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SM(i){let e=new _M,t=vM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new _);let s=new _,r=new it,o=new it;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,M=0,y=0,T=0,A=0,P=0;c.sort(MM);for(let w=0,b=c.length;w<b;w++){let L=c[w],B=L.color,X=L.intensity,k=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*X,u+=B.g*X,d+=B.b*X;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],X);P++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=V,f++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(B).multiplyScalar(X),V.distance=k,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let ne=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,ne.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=ne.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=H,y++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(B).multiplyScalar(X),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=V,g++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let ne=L.shadow,q=t.get(L);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=V,m++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(X),V.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.directionalLength=f,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=P,n.version=bM++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Rm(i){let e=new SM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Rm(i),e.set(s,[a])):r>=o.length?(a=new Rm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`;function AM(i,e,t){let n=new Xr,s=new ae,r=new ae,o=new bt,a=new Nl({depthPacking:Hp}),l=new Fl,c={},h=t.maxTextureSize,u={[Oi]:_n,[_n]:Oi,[kt]:kt},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:TM,fragmentShader:EM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let p=this.type;this.render=function(A,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=p!==Mi&&this.type===Mi,k=p===Mi&&this.type!==Mi;for(let H=0,V=A.length;H<V;H++){let ne=A[H],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();if(s.multiply(re),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,q.mapSize.y=r.y)),q.map===null||X===!0||k===!0){let we=this.type!==Mi?{minFilter:hn,magFilter:hn}:{};q.map!==null&&q.map.dispose(),q.map=new xi(s.x,s.y,we),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let xe=q.getViewportCount();for(let we=0;we<xe;we++){let Fe=q.getViewport(we);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),B.viewport(o),q.updateMatrices(ne,we),n=q.getFrustum(),y(P,D,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Mi&&v(q,D),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,L)};function v(A,P){let D=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,D,f,x,null)}function M(A,P,D,w){let b=null,L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=D.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=b.uuid,X=P.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let H=k[X];H===void 0&&(H=b.clone(),k[X]=H,P.addEventListener("dispose",T)),b=H}if(b.visible=P.visible,b.wireframe=P.wireframe,w===Mi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=D}return b}function y(A,P,D,w,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let X=e.update(A),k=A.material;if(Array.isArray(k)){let H=X.groups;for(let V=0,ne=H.length;V<ne;V++){let q=H[V],re=k[q.materialIndex];if(re&&re.visible){let xe=M(A,re,w,b);A.onBeforeShadow(i,A,P,D,X,xe,q),i.renderBufferDirect(D,null,X,xe,A,q),A.onAfterShadow(i,A,P,D,X,xe,q)}}}else if(k.visible){let H=M(A,k,w,b);A.onBeforeShadow(i,A,P,D,X,H,null),i.renderBufferDirect(D,null,X,H,A,null),A.onAfterShadow(i,A,P,D,X,H,null)}}let B=A.children;for(let X=0,k=B.length;X<k;X++)y(B[X],P,D,w,b)}function T(A){A.target.removeEventListener("dispose",T);for(let D in c){let w=c[D],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var CM={[Yl]:Zl,[jl]:$l,[Jl]:Ql,[ks]:Kl,[Zl]:Yl,[$l]:jl,[Ql]:Jl,[Kl]:ks};function RM(i,e){function t(){let F=!1,pe=new bt,ve=null,Re=new bt(0,0,0,0);return{setMask:function(fe){ve!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),ve=fe)},setLocked:function(fe){F=fe},setClear:function(fe,oe,Ue,Qe,At){At===!0&&(fe*=Qe,oe*=Qe,Ue*=Qe),pe.set(fe,oe,Ue,Qe),Re.equals(pe)===!1&&(i.clearColor(fe,oe,Ue,Qe),Re.copy(pe))},reset:function(){F=!1,ve=null,Re.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,ve=null,Re=null,fe=null;return{setReversed:function(oe){if(pe!==oe){let Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;let Qe=fe;fe=null,this.setClear(Qe)}},getReversed:function(){return pe},setTest:function(oe){oe?N(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(oe){ve!==oe&&!F&&(i.depthMask(oe),ve=oe)},setFunc:function(oe){if(pe&&(oe=CM[oe]),Re!==oe){switch(oe){case Yl:i.depthFunc(i.NEVER);break;case Zl:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case $l:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=oe}},setLocked:function(oe){F=oe},setClear:function(oe){fe!==oe&&(pe&&(oe=1-oe),i.clearDepth(oe),fe=oe)},reset:function(){F=!1,ve=null,Re=null,fe=null,pe=!1}}}function s(){let F=!1,pe=null,ve=null,Re=null,fe=null,oe=null,Ue=null,Qe=null,At=null;return{setTest:function(gt){F||(gt?N(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(gt){pe!==gt&&!F&&(i.stencilMask(gt),pe=gt)},setFunc:function(gt,Ii,fi){(ve!==gt||Re!==Ii||fe!==fi)&&(i.stencilFunc(gt,Ii,fi),ve=gt,Re=Ii,fe=fi)},setOp:function(gt,Ii,fi){(oe!==gt||Ue!==Ii||Qe!==fi)&&(i.stencilOp(gt,Ii,fi),oe=gt,Ue=Ii,Qe=fi)},setLocked:function(gt){F=gt},setClear:function(gt){At!==gt&&(i.clearStencil(gt),At=gt)},reset:function(){F=!1,pe=null,ve=null,Re=null,fe=null,oe=null,Ue=null,Qe=null,At=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,y=null,T=null,A=null,P=new Oe(0,0,0),D=0,w=!1,b=null,L=null,B=null,X=null,k=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=ne>=2);let re=null,xe={},we=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ye=new bt().fromArray(we),Ke=new bt().fromArray(Fe);function Ve(F,pe,ve,Re){let fe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(F,oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ve;Ue++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(pe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return oe}let te={};te[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(i.DEPTH_TEST),o.setFunc(ks),Z(!1),Q(_u),N(i.CULL_FACE),ee(Xi);function N(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function se(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ue(F,pe){return u[F]!==pe?(i.bindFramebuffer(F,pe),u[F]=pe,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function O(F,pe){let ve=f,Re=!1;if(F){ve=d.get(pe),ve===void 0&&(ve=[],d.set(pe,ve));let fe=F.textures;if(ve.length!==fe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ue=fe.length;oe<Ue;oe++)ve[oe]=i.COLOR_ATTACHMENT0+oe;ve.length=fe.length,Re=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ve)}function J(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let de={[as]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};de[yp]=i.MIN,de[_p]=i.MAX;let R={[vp]:i.ZERO,[bp]:i.ONE,[Mp]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Cp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Sp]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[Tp]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Ip]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(F,pe,ve,Re,fe,oe,Ue,Qe,At,gt){if(F===Xi){x===!0&&(se(i.BLEND),x=!1);return}if(x===!1&&(N(i.BLEND),x=!0),F!==mp){if(F!==g||gt!==w){if((p!==as||y!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,y=as),gt)switch(F){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFunc(i.ONE,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,T=null,A=null,P.set(0,0,0),D=0,g=F,w=gt}return}fe=fe||pe,oe=oe||ve,Ue=Ue||Re,(pe!==p||fe!==y)&&(i.blendEquationSeparate(de[pe],de[fe]),p=pe,y=fe),(ve!==v||Re!==M||oe!==T||Ue!==A)&&(i.blendFuncSeparate(R[ve],R[Re],R[oe],R[Ue]),v=ve,M=Re,T=oe,A=Ue),(Qe.equals(P)===!1||At!==D)&&(i.blendColor(Qe.r,Qe.g,Qe.b,At),P.copy(Qe),D=At),g=F,w=!1}function $(F,pe){F.side===kt?se(i.CULL_FACE):N(i.CULL_FACE);let ve=F.side===_n;pe&&(ve=!ve),Z(ve),F.blending===zs&&F.transparent===!1?ee(Xi):ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function Q(F){F!==dp?(N(i.CULL_FACE),F!==L&&(F===_u?i.cullFace(i.BACK):F===fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),L=F}function me(F){F!==B&&(V&&i.lineWidth(F),B=F)}function he(F,pe,ve){F?(N(i.POLYGON_OFFSET_FILL),(X!==pe||k!==ve)&&(i.polygonOffset(pe,ve),X=pe,k=ve)):se(i.POLYGON_OFFSET_FILL)}function _e(F){F?N(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function Xe(F){F===void 0&&(F=i.TEXTURE0+H-1),re!==F&&(i.activeTexture(F),re=F)}function Ge(F,pe,ve){ve===void 0&&(re===null?ve=i.TEXTURE0+H-1:ve=re);let Re=xe[ve];Re===void 0&&(Re={type:void 0,texture:void 0},xe[ve]=Re),(Re.type!==F||Re.texture!==pe)&&(re!==ve&&(i.activeTexture(ve),re=ve),i.bindTexture(F,pe||te[F]),Re.type=F,Re.texture=pe)}function I(){let F=xe[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){Ye.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function ze(F){Ke.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ke.copy(F))}function De(F,pe){let ve=c.get(pe);ve===void 0&&(ve=new WeakMap,c.set(pe,ve));let Re=ve.get(F);Re===void 0&&(Re=i.getUniformBlockIndex(pe,F.name),ve.set(F,Re))}function be(F,pe){let Re=c.get(pe).get(F);l.get(pe)!==Re&&(i.uniformBlockBinding(pe,Re,F.__bindingPointIndex),l.set(pe,Re))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,xe={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,y=null,T=null,A=null,P=new Oe(0,0,0),D=0,w=!1,b=null,L=null,B=null,X=null,k=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:se,bindFramebuffer:ue,drawBuffers:O,useProgram:J,setBlending:ee,setMaterial:$,setFlipSided:Z,setCullFace:Q,setLineWidth:me,setPolygonOffset:he,setScissorTest:_e,activeTexture:Xe,bindTexture:Ge,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Ae,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:be,texStorage2D:le,texStorage3D:Me,texSubImage2D:z,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ee,scissor:Se,viewport:ze,reset:$e}}function IM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return f?new OffscreenCanvas(I,S):zr("canvas")}function x(I,S,U){let z=1,ie=Ge(I);if((ie.width>U||ie.height>U)&&(z=U/Math.max(ie.width,ie.height)),z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Y=Math.floor(z*ie.width),Ee=Math.floor(z*ie.height);u===void 0&&(u=m(Y,Ee));let le=S?m(Y,Ee):u;return le.width=Y,le.height=Ee,le.getContext("2d").drawImage(I,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ee+")."),le}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,S,U,z,ie=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=S;if(S===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),S===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),S===i.RGBA){let Ee=ie?Fo:ft.getTransfer(z);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=Ee===yt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(I,S){let U;return I?S===null||S===ds||S===io?U=i.DEPTH24_STENCIL8:S===li?U=i.DEPTH32F_STENCIL8:S===to&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===io?U=i.DEPTH_COMPONENT24:S===li?U=i.DEPTH_COMPONENT32F:S===to&&(U=i.DEPTH_COMPONENT16),U}function T(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&h.delete(S)}function P(I){let S=I.target;S.removeEventListener("dispose",P),b(S)}function D(I){let S=n.get(I);if(S.__webglInit===void 0)return;let U=I.source,z=d.get(U);if(z){let ie=z[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(I),Object.keys(z).length===0&&d.delete(U)}n.remove(I)}function w(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let U=I.source,z=d.get(U);delete z[S.__cacheKey],o.memory.textures--}function b(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(S.__webglFramebuffer[z]))for(let ie=0;ie<S.__webglFramebuffer[z].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[z][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[z])}else{if(Array.isArray(S.__webglFramebuffer))for(let z=0;z<S.__webglFramebuffer.length;z++)i.deleteFramebuffer(S.__webglFramebuffer[z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let z=0;z<S.__webglColorRenderbuffer.length;z++)S.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=I.textures;for(let z=0,ie=U.length;z<ie;z++){let Y=n.get(U[z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(U[z])}n.remove(I)}let L=0;function B(){L=0}function X(){let I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function k(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function H(I,S){let U=n.get(I);if(I.isVideoTexture&&_e(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&U.__version!==I.version){let z=I.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(U,I,S);return}}else I.isExternalTexture&&(U.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+S)}function V(I,S){let U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){te(U,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+S)}function ne(I,S){let U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){te(U,I,S);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+S)}function q(I,S){let U=n.get(I);if(I.version>0&&U.__version!==I.version){N(U,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+S)}let re={[wn]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},xe={[hn]:i.NEAREST,[ic]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[un]:i.LINEAR_MIPMAP_LINEAR},we={[Xp]:i.NEVER,[Kp]:i.ALWAYS,[qp]:i.LESS,[Nu]:i.LEQUAL,[Yp]:i.EQUAL,[Jp]:i.GEQUAL,[Zp]:i.GREATER,[jp]:i.NOTEQUAL};function Fe(I,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kt||S.magFilter===eo||S.magFilter===er||S.magFilter===un||S.minFilter===Kt||S.minFilter===eo||S.minFilter===er||S.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,we[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==er&&S.minFilter!==un||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ye(I,S){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let z=S.source,ie=d.get(z);ie===void 0&&(ie={},d.set(z,ie));let Y=k(S);if(Y!==I.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ie[Y].usedTimes++;let Ee=ie[I.__cacheKey];Ee!==void 0&&(ie[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(S)),I.__cacheKey=Y,I.__webglTexture=ie[Y].texture}return U}function Ke(I,S,U){return Math.floor(Math.floor(I/U)/S)}function Ve(I,S,U,z){let Y=I.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,U,z,S.data);else{Y.sort((ce,Se)=>ce.start-Se.start);let Ee=0;for(let ce=1;ce<Y.length;ce++){let Se=Y[Ee],ze=Y[ce],De=Se.start+Se.count,be=Ke(ze.start,S.width,4),$e=Ke(Se.start,S.width,4);ze.start<=De+1&&be===$e&&Ke(ze.start+ze.count-1,S.width,4)===be?Se.count=Math.max(Se.count,ze.start+ze.count-Se.start):(++Ee,Y[Ee]=ze)}Y.length=Ee+1;let le=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ce=0,Se=Y.length;ce<Se;ce++){let ze=Y[ce],De=Math.floor(ze.start/4),be=Math.ceil(ze.count/4),$e=De%S.width,F=Math.floor(De/S.width),pe=be,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,$e,F,pe,ve,U,z,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function te(I,S,U){let z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(z=i.TEXTURE_3D);let ie=Ye(I,S),Y=S.source;t.bindTexture(z,I.__webglTexture,i.TEXTURE0+U);let Ee=n.get(Y);if(Y.version!==Ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+U);let le=ft.getPrimaries(ft.workingColorSpace),Me=S.colorSpace===ci?null:ft.getPrimaries(S.colorSpace),Ae=S.colorSpace===ci||le===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=x(S.image,!1,s.maxTextureSize);ce=Xe(S,ce);let Se=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),De=M(S.internalFormat,Se,ze,S.colorSpace,S.isVideoTexture);Fe(z,S);let be,$e=S.mipmaps,F=S.isVideoTexture!==!0,pe=Ee.__version===void 0||ie===!0,ve=Y.dataReady,Re=T(S,ce);if(S.isDepthTexture)De=y(S.format===so,S.type),pe&&(F?t.texStorage2D(i.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,De,ce.width,ce.height,0,Se,ze,null));else if(S.isDataTexture)if($e.length>0){F&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,De,$e[0].width,$e[0].height);for(let fe=0,oe=$e.length;fe<oe;fe++)be=$e[fe],F?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,ze,be.data):t.texImage2D(i.TEXTURE_2D,fe,De,be.width,be.height,0,Se,ze,be.data);S.generateMipmaps=!1}else F?(pe&&t.texStorage2D(i.TEXTURE_2D,Re,De,ce.width,ce.height),ve&&Ve(S,ce,Se,ze)):t.texImage2D(i.TEXTURE_2D,0,De,ce.width,ce.height,0,Se,ze,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,De,$e[0].width,$e[0].height,ce.depth);for(let fe=0,oe=$e.length;fe<oe;fe++)if(be=$e[fe],S.format!==vn)if(Se!==null)if(F){if(ve)if(S.layerUpdates.size>0){let Ue=Hu(be.width,be.height,S.format,S.type);for(let Qe of S.layerUpdates){let At=be.data.subarray(Qe*Ue/be.data.BYTES_PER_ELEMENT,(Qe+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Qe,be.width,be.height,1,Se,At)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ce.depth,Se,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,De,be.width,be.height,ce.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ce.depth,Se,ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,De,be.width,be.height,ce.depth,0,Se,ze,be.data)}else{F&&pe&&t.texStorage2D(i.TEXTURE_2D,Re,De,$e[0].width,$e[0].height);for(let fe=0,oe=$e.length;fe<oe;fe++)be=$e[fe],S.format!==vn?Se!==null?F?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,Se,ze,be.data):t.texImage2D(i.TEXTURE_2D,fe,De,be.width,be.height,0,Se,ze,be.data)}else if(S.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,De,ce.width,ce.height,ce.depth),ve)if(S.layerUpdates.size>0){let fe=Hu(ce.width,ce.height,S.format,S.type);for(let oe of S.layerUpdates){let Ue=ce.data.subarray(oe*fe/ce.data.BYTES_PER_ELEMENT,(oe+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,Se,ze,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,ze,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,Se,ze,ce.data);else if(S.isData3DTexture)F?(pe&&t.texStorage3D(i.TEXTURE_3D,Re,De,ce.width,ce.height,ce.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,ze,ce.data)):t.texImage3D(i.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,Se,ze,ce.data);else if(S.isFramebufferTexture){if(pe)if(F)t.texStorage2D(i.TEXTURE_2D,Re,De,ce.width,ce.height);else{let fe=ce.width,oe=ce.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,De,fe,oe,0,Se,ze,null),fe>>=1,oe>>=1}}else if($e.length>0){if(F&&pe){let fe=Ge($e[0]);t.texStorage2D(i.TEXTURE_2D,Re,De,fe.width,fe.height)}for(let fe=0,oe=$e.length;fe<oe;fe++)be=$e[fe],F?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se,ze,be):t.texImage2D(i.TEXTURE_2D,fe,De,Se,ze,be);S.generateMipmaps=!1}else if(F){if(pe){let fe=Ge(ce);t.texStorage2D(i.TEXTURE_2D,Re,De,fe.width,fe.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ze,ce)}else t.texImage2D(i.TEXTURE_2D,0,De,Se,ze,ce);g(S)&&p(z),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function N(I,S,U){if(S.image.length!==6)return;let z=Ye(I,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+U);let Y=n.get(ie);if(ie.version!==Y.__version||z===!0){t.activeTexture(i.TEXTURE0+U);let Ee=ft.getPrimaries(ft.workingColorSpace),le=S.colorSpace===ci?null:ft.getPrimaries(S.colorSpace),Me=S.colorSpace===ci||Ee===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!Ae&&!ce?Se[oe]=x(S.image[oe],!0,s.maxCubemapSize):Se[oe]=ce?S.image[oe].image:S.image[oe],Se[oe]=Xe(S,Se[oe]);let ze=Se[0],De=r.convert(S.format,S.colorSpace),be=r.convert(S.type),$e=M(S.internalFormat,De,be,S.colorSpace),F=S.isVideoTexture!==!0,pe=Y.__version===void 0||z===!0,ve=ie.dataReady,Re=T(S,ze);Fe(i.TEXTURE_CUBE_MAP,S);let fe;if(Ae){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,$e,ze.width,ze.height);for(let oe=0;oe<6;oe++){fe=Se[oe].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){let Qe=fe[Ue];S.format!==vn?De!==null?F?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Qe.width,Qe.height,De,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,$e,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Qe.width,Qe.height,De,be,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,$e,Qe.width,Qe.height,0,De,be,Qe.data)}}}else{if(fe=S.mipmaps,F&&pe){fe.length>0&&Re++;let oe=Ge(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,De,be,Se[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,Se[oe].width,Se[oe].height,0,De,be,Se[oe].data);for(let Ue=0;Ue<fe.length;Ue++){let At=fe[Ue].image[oe].image;F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,At.width,At.height,De,be,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,$e,At.width,At.height,0,De,be,At.data)}}else{F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,be,Se[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,De,be,Se[oe]);for(let Ue=0;Ue<fe.length;Ue++){let Qe=fe[Ue];F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,De,be,Qe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,$e,De,be,Qe.image[oe])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function se(I,S,U,z,ie,Y){let Ee=r.convert(U.format,U.colorSpace),le=r.convert(U.type),Me=M(U.internalFormat,Ee,le,U.colorSpace),Ae=n.get(S),ce=n.get(U);if(ce.__renderTarget=S,!Ae.__hasExternalTextures){let Se=Math.max(1,S.width>>Y),ze=Math.max(1,S.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Me,Se,ze,S.depth,0,Ee,le,null):t.texImage2D(ie,Y,Me,Se,ze,0,Ee,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,ie,ce.__webglTexture,0,me(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,ie,ce.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(I,S,U){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let z=S.depthTexture,ie=z&&z.isDepthTexture?z.type:null,Y=y(S.stencilBuffer,ie),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=me(S);he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Y,S.width,S.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,I)}else{let z=S.textures;for(let ie=0;ie<z.length;ie++){let Y=z[ie],Ee=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),Me=M(Y.internalFormat,Ee,le,Y.colorSpace),Ae=me(S);U&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Me,S.width,S.height):he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(S.depthTexture);z.__renderTarget=S,(!z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let ie=z.__webglTexture,Y=me(S);if(S.depthTexture.format===Fr)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===so)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function J(I){let S=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let z=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),z){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,z.removeEventListener("dispose",ie)};z.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=z}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let z=I.texture.mipmaps;z&&z.length>0?O(S.__webglFramebuffer[0],I):O(S.__webglFramebuffer,I)}else if(U){S.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[z]),S.__webglDepthbuffer[z]===void 0)S.__webglDepthbuffer[z]=i.createRenderbuffer(),ue(S.__webglDepthbuffer[z],I,!1);else{let ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{let z=I.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ue(S.__webglDepthbuffer,I,!1);else{let ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(I,S,U){let z=n.get(I);S!==void 0&&se(z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&J(I)}function R(I){let S=I.texture,U=n.get(I),z=n.get(S);I.addEventListener("dispose",P);let ie=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=S.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Me=0;Me<S.mipmaps.length;Me++)U.__webglFramebuffer[le][Me]=i.createFramebuffer()}else U.__webglFramebuffer[le]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)U.__webglFramebuffer[le]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let le=0,Me=ie.length;le<Me;le++){let Ae=n.get(ie[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&he(I)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){let Me=ie[le];U.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[le]);let Ae=r.convert(Me.format,Me.colorSpace),ce=r.convert(Me.type),Se=M(Me.internalFormat,Ae,ce,Me.colorSpace,I.isXRRenderTarget===!0),ze=me(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Se,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,U.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)se(U.__webglFramebuffer[le][Me],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me);else se(U.__webglFramebuffer[le],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,Me=ie.length;le<Me;le++){let Ae=ie[le],ce=n.get(Ae),Se=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ce.__webglTexture),Fe(Se,Ae),se(U.__webglFramebuffer,I,Ae,i.COLOR_ATTACHMENT0+le,Se,0),g(Ae)&&p(Se)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,z.__webglTexture),Fe(le,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)se(U.__webglFramebuffer[Me],I,S,i.COLOR_ATTACHMENT0,le,Me);else se(U.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,le,0);g(S)&&p(le),t.unbindTexture()}I.depthBuffer&&J(I)}function ee(I){let S=I.textures;for(let U=0,z=S.length;U<z;U++){let ie=S[U];if(g(ie)){let Y=v(I),Ee=n.get(ie).__webglTexture;t.bindTexture(Y,Ee),p(Y),t.unbindTexture()}}}let $=[],Z=[];function Q(I){if(I.samples>0){if(he(I)===!1){let S=I.textures,U=I.width,z=I.height,ie=i.COLOR_BUFFER_BIT,Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(I),le=S.length>1;if(le)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Me=I.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let ce=n.get(S[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,ie,i.NEAREST),l===!0&&($.length=0,Z.length=0,$.push(i.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&($.push(Y),Z.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let ce=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(I){return Math.min(s.maxSamples,I.samples)}function he(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Xe(I,S){let U=I.colorSpace,z=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==Gs&&U!==ci&&(ft.getTransfer(U)===yt?(z!==vn||ie!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function Ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=de,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=se,this.useMultisampledRTT=he}function PM(i,e){function t(n,s=ci){let r,o=ft.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===Au)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===no)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Pu)return i.RGB;if(n===vn)return i.RGBA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===so)return i.DEPTH_STENCIL;if(n===Lu)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===Du)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===yc||n===_c||n===vc||n===bc||n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Cc||n===Rc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Lc||n===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oi({vertexShader:LM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new nd,p={},v=t.getContextAttributes(),M=null,y=null,T=[],A=[],P=new ae,D=null,w=new qt;w.viewport=new bt;let b=new qt;b.viewport=new bt;let L=[w,b],B=new ql,X=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let N=T[te];return N===void 0&&(N=new Hr,T[te]=N),N.getTargetRaySpace()},this.getControllerGrip=function(te){let N=T[te];return N===void 0&&(N=new Hr,T[te]=N),N.getGripSpace()},this.getHand=function(te){let N=T[te];return N===void 0&&(N=new Hr,T[te]=N),N.getHandSpace()};function H(te){let N=A.indexOf(te.inputSource);if(N===-1)return;let se=T[N];se!==void 0&&(se.update(te.inputSource,te.frame,c||o),se.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<T.length;te++){let N=A[te];N!==null&&(A[te]=null,T[te].disconnect(N))}X=null,k=null,g.reset();for(let te in p)delete p[te];e.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ue=null,O=null;v.depth&&(O=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?so:Fr,ue=v.stencil?io:ds);let J={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(J),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:vn,type:ai,depthTexture:new Xo(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(te){for(let N=0;N<te.removed.length;N++){let se=te.removed[N],ue=A.indexOf(se);ue>=0&&(A[ue]=null,T[ue].disconnect(se))}for(let N=0;N<te.added.length;N++){let se=te.added[N],ue=A.indexOf(se);if(ue===-1){for(let J=0;J<T.length;J++)if(J>=A.length){A.push(se),ue=J;break}else if(A[J]===null){A[J]=se,ue=J;break}if(ue===-1)break}let O=T[ue];O&&O.connect(se)}}let q=new _,re=new _;function xe(te,N,se){q.setFromMatrixPosition(N.matrixWorld),re.setFromMatrixPosition(se.matrixWorld);let ue=q.distanceTo(re),O=N.projectionMatrix.elements,J=se.projectionMatrix.elements,de=O[14]/(O[10]-1),R=O[14]/(O[10]+1),ee=(O[9]+1)/O[5],$=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],Q=(J[8]+1)/J[0],me=de*Z,he=de*Q,_e=ue/(-Z+Q),Xe=_e*-Z;if(N.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Xe),te.translateZ(_e),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),O[10]===-1)te.projectionMatrix.copy(N.projectionMatrix),te.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Ge=de+_e,I=R+_e,S=me-Xe,U=he+(ue-Xe),z=ee*R/I*Ge,ie=$*R/I*Ge;te.projectionMatrix.makePerspective(S,U,z,ie,Ge,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function we(te,N){N===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(N.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let N=te.near,se=te.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(se=g.depthFar)),B.near=b.near=w.near=N,B.far=b.far=w.far=se,(X!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,k=B.far),B.layers.mask=te.layers.mask|6,w.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let ue=te.parent,O=B.cameras;we(B,ue);for(let J=0;J<O.length;J++)we(O[J],ue);O.length===2?xe(B,w,b):B.projectionMatrix.copy(w.projectionMatrix),Fe(te,B,ue)};function Fe(te,N,se){se===null?te.matrix.copy(N.matrixWorld):(te.matrix.copy(se.matrixWorld),te.matrix.invert(),te.matrix.multiply(N.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(N.projectionMatrix),te.projectionMatrixInverse.copy(N.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Br*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(te){return p[te]};let Ye=null;function Ke(te,N){if(h=N.getViewerPose(c||o),m=N,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;se.length!==B.cameras.length&&(B.cameras.length=0,ue=!0);for(let R=0;R<se.length;R++){let ee=se[R],$=null;if(f!==null)$=f.getViewport(ee);else{let Q=u.getViewSubImage(d,ee);$=Q.viewport,R===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let Z=L[R];Z===void 0&&(Z=new qt,Z.layers.enable(R),Z.viewport=new bt,L[R]=Z),Z.matrix.fromArray(ee.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ee.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set($.x,$.y,$.width,$.height),R===0&&(B.matrix.copy(Z.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ue===!0&&B.cameras.push(Z)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let R=u.getDepthInformation(se[0]);R&&R.isValid&&R.texture&&g.init(R,s.renderState)}if(O&&O.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let R=0;R<se.length;R++){let ee=se[R].camera;if(ee){let $=p[ee];$||($=new qo,p[ee]=$);let Z=u.getCameraImage(ee);$.sourceTexture=Z}}}}for(let se=0;se<T.length;se++){let ue=A[se],O=T[se];ue!==null&&O!==void 0&&O.update(ue,N,c||o)}Ye&&Ye(te,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}let Ve=new Im;Ve.setAnimationLoop(Ke),this.setAnimationLoop=function(te){Ye=te},this.dispose=function(){}}},ir=new Yt,UM=new it;function NM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,ir.copy(y),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(ir)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function FM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let T=M.program;n.updateUBOMapping(v,T);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let M=u();v.__bindingPointIndex=M;let y=i.createBuffer(),T=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,P=y.length;A<P;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,b=D.length;w<b;w++){let L=D[w];if(f(L,A,w,T)===!0){let B=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],k=0;for(let H=0;H<X.length;H++){let V=X[H],ne=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+k,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,k),k+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,y,T){let A=v.value,P=M+"_"+y;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{let D=T[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(v){let M=v.uniforms,y=0,T=16;for(let P=0,D=M.length;P<D;P++){let w=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,L=w.length;b<L;b++){let B=w[b],X=Array.isArray(B.value)?B.value:[B.value];for(let k=0,H=X.length;k<H;k++){let V=X[k],ne=x(V),q=y%T,re=q%ne.boundary,xe=q+re;y+=re,xe!==0&&T-xe<ne.storage&&(y+=T-xe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ne.storage}}}let A=y%T;return A>0&&(y+=T-A),v.__size=y,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ps=class{constructor(e={}){let{canvas:t=$p(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=It;let A=0,P=0,D=null,w=-1,b=null,L=new bt,B=new bt,X=null,k=new Oe(0),H=0,V=t.width,ne=t.height,q=1,re=null,xe=null,we=new bt(0,0,V,ne),Fe=new bt(0,0,V,ne),Ye=!1,Ke=new Xr,Ve=!1,te=!1,N=new it,se=new _,ue=new bt,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function de(){return D===null?q:1}let R=n;function ee(E,G){return t.getContext(E,G)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",fe,!1),R===null){let G="webgl2";if(R=ee(G,E),R===null)throw ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $,Z,Q,me,he,_e,Xe,Ge,I,S,U,z,ie,Y,Ee,le,Me,Ae,ce,Se,ze,De,be,$e;function F(){$=new eb(R),$.init(),De=new PM(R,$),Z=new Yv(R,$,e,De),Q=new RM(R,$),Z.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),me=new ib(R),he=new gM,_e=new IM(R,$,Q,he,Z,De,me),Xe=new jv(y),Ge=new Qv(y),I=new cy(R),be=new Xv(R,I),S=new tb(R,I,me,be),U=new rb(R,S,I,me),ce=new sb(R,Z,_e),le=new Zv(he),z=new mM(y,Xe,Ge,$,Z,be,le),ie=new NM(y,he),Y=new yM,Ee=new wM($),Ae=new Wv(y,Xe,Ge,Q,U,f,l),Me=new AM(y,U,Z),$e=new FM(R,me,Z,Q),Se=new qv(R,$,me),ze=new nb(R,$,me),me.programs=z.programs,y.capabilities=Z,y.extensions=$,y.properties=he,y.renderLists=Y,y.shadowMap=Me,y.state=Q,y.info=me}F();let pe=new id(y,R);this.xr=pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(V,ne,!1))},this.getSize=function(E){return E.set(V,ne)},this.setSize=function(E,G,j=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,ne=G,t.width=Math.floor(E*q),t.height=Math.floor(G*q),j===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(V*q,ne*q).floor()},this.setDrawingBufferSize=function(E,G,j){V=E,ne=G,q=j,t.width=Math.floor(E*j),t.height=Math.floor(G*j),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,G,j,K){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,G,j,K),Q.viewport(L.copy(we).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,G,j,K){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,G,j,K),Q.scissor(B.copy(Fe).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){Q.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,j=!0){let K=0;if(E){let W=!1;if(D!==null){let ge=D.texture.format;W=ge===cc||ge===lc||ge===ac}if(W){let ge=D.texture.type,Ce=ge===ai||ge===ds||ge===to||ge===io||ge===rc||ge===oc,Le=Ae.getClearColor(),Ie=Ae.getClearAlpha(),We=Le.r,Ze=Le.g,ke=Le.b;Ce?(m[0]=We,m[1]=Ze,m[2]=ke,m[3]=Ie,R.clearBufferuiv(R.COLOR,0,m)):(x[0]=We,x[1]=Ze,x[2]=ke,x[3]=Ie,R.clearBufferiv(R.COLOR,0,x))}else K|=R.COLOR_BUFFER_BIT}G&&(K|=R.DEPTH_BUFFER_BIT),j&&(K|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ae.dispose(),Y.dispose(),Ee.dispose(),he.dispose(),Xe.dispose(),Ge.dispose(),U.dispose(),be.dispose(),$e.dispose(),z.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",fi),pe.removeEventListener("sessionend",Sf),Ls.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=me.autoReset,G=Me.enabled,j=Me.autoUpdate,K=Me.needsUpdate,W=Me.type;F(),me.autoReset=E,Me.enabled=G,Me.autoUpdate=j,Me.needsUpdate=K,Me.type=W}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let G=E.target;G.removeEventListener("dispose",oe),Ue(G)}function Ue(E){Qe(E),he.remove(E)}function Qe(E){let G=he.get(E).programs;G!==void 0&&(G.forEach(function(j){z.releaseProgram(j)}),E.isShaderMaterial&&z.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,j,K,W,ge){G===null&&(G=O);let Ce=W.isMesh&&W.matrixWorld.determinant()<0,Le=E0(E,G,j,K,W);Q.setMaterial(K,Ce);let Ie=j.index,We=1;if(K.wireframe===!0){if(Ie=S.getWireframeAttribute(j),Ie===void 0)return;We=2}let Ze=j.drawRange,ke=j.attributes.position,ct=Ze.start*We,vt=(Ze.start+Ze.count)*We;ge!==null&&(ct=Math.max(ct,ge.start*We),vt=Math.min(vt,(ge.start+ge.count)*We)),Ie!==null?(ct=Math.max(ct,0),vt=Math.min(vt,Ie.count)):ke!=null&&(ct=Math.max(ct,0),vt=Math.min(vt,ke.count));let zt=vt-ct;if(zt<0||zt===1/0)return;be.setup(W,K,Le,j,Ie);let Rt,St=Se;if(Ie!==null&&(Rt=I.get(Ie),St=ze,St.setIndex(Rt)),W.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*de()),St.setMode(R.LINES)):St.setMode(R.TRIANGLES);else if(W.isLine){let He=K.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*de()),W.isLineSegments?St.setMode(R.LINES):W.isLineLoop?St.setMode(R.LINE_LOOP):St.setMode(R.LINE_STRIP)}else W.isPoints?St.setMode(R.POINTS):W.isSprite&&St.setMode(R.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if($.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let He=W._multiDrawStarts,Nt=W._multiDrawCounts,pt=W._multiDrawCount,Ln=Ie?I.get(Ie).bytesPerElement:1,xr=he.get(K).currentProgram.getUniforms();for(let Dn=0;Dn<pt;Dn++)xr.setValue(R,"_gl_DrawID",Dn),St.render(He[Dn]/Ln,Nt[Dn])}else if(W.isInstancedMesh)St.renderInstances(ct,zt,W.count);else if(j.isInstancedBufferGeometry){let He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,He);St.renderInstances(ct,zt,Nt)}else St.render(ct,zt)};function At(E,G,j){E.transparent===!0&&E.side===kt&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,Ya(E,G,j),E.side=Oi,E.needsUpdate=!0,Ya(E,G,j),E.side=kt):Ya(E,G,j)}this.compile=function(E,G,j=null){j===null&&(j=E),p=Ee.get(j),p.init(G),M.push(p),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let K=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let Le=ge[Ce];At(Le,j,W),K.add(Le)}else At(ge,j,W),K.add(ge)}),p=M.pop(),K},this.compileAsync=function(E,G,j=null){let K=this.compile(E,G,j);return new Promise(W=>{function ge(){if(K.forEach(function(Ce){he.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){W(E);return}setTimeout(ge,10)}$.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let gt=null;function Ii(E){gt&&gt(E)}function fi(){Ls.stop()}function Sf(){Ls.start()}let Ls=new Im;Ls.setAnimationLoop(Ii),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(E){gt=E,pe.setAnimationLoop(E),E===null?Ls.stop():Ls.start()},pe.addEventListener("sessionstart",fi),pe.addEventListener("sessionend",Sf),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,G,D),p=Ee.get(E,M.length),p.init(G),M.push(p),N.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ke.setFromProjectionMatrix(N,ri,G.reversedDepth),te=this.localClippingEnabled,Ve=le.init(this.clippingPlanes,te),g=Y.get(E,v.length),g.init(),v.push(g),pe.enabled===!0&&pe.isPresenting===!0){let ge=y.xr.getDepthSensingMesh();ge!==null&&Ch(ge,G,-1/0,y.sortObjects)}Ch(E,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(re,xe),J=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,J&&Ae.addToRenderList(g,E),this.info.render.frame++,Ve===!0&&le.beginShadows();let j=p.state.shadowsArray;Me.render(j,E,G),Ve===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,W=g.transmissive;if(p.setupLights(),G.isArrayCamera){let ge=G.cameras;if(W.length>0)for(let Ce=0,Le=ge.length;Ce<Le;Ce++){let Ie=ge[Ce];Tf(K,W,E,Ie)}J&&Ae.render(E);for(let Ce=0,Le=ge.length;Ce<Le;Ce++){let Ie=ge[Ce];wf(g,E,Ie,Ie.viewport)}}else W.length>0&&Tf(K,W,E,G),J&&Ae.render(E),wf(g,E,G);D!==null&&P===0&&(_e.updateMultisampleRenderTarget(D),_e.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,G),be.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],Ve===!0&&le.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ch(E,G,j,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ke.intersectsSprite(E)){K&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);let Ce=U.update(E),Le=E.material;Le.visible&&g.push(E,Ce,Le,j,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ke.intersectsObject(E))){let Ce=U.update(E),Le=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ue.copy(Ce.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Le)){let Ie=Ce.groups;for(let We=0,Ze=Ie.length;We<Ze;We++){let ke=Ie[We],ct=Le[ke.materialIndex];ct&&ct.visible&&g.push(E,Ce,ct,j,ue.z,ke)}}else Le.visible&&g.push(E,Ce,Le,j,ue.z,null)}}let ge=E.children;for(let Ce=0,Le=ge.length;Ce<Le;Ce++)Ch(ge[Ce],G,j,K)}function wf(E,G,j,K){let W=E.opaque,ge=E.transmissive,Ce=E.transparent;p.setupLightsView(j),Ve===!0&&le.setGlobalState(y.clippingPlanes,j),K&&Q.viewport(L.copy(K)),W.length>0&&qa(W,G,j),ge.length>0&&qa(ge,G,j),Ce.length>0&&qa(Ce,G,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Tf(E,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new xi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?no:ai,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ge=p.state.transmissionRenderTarget[K.id],Ce=K.viewport||L;ge.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);let Le=y.getRenderTarget(),Ie=y.getActiveCubeFace(),We=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(k),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),J&&Ae.render(j);let Ze=y.toneMapping;y.toneMapping=qi;let ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Ve===!0&&le.setGlobalState(y.clippingPlanes,K),qa(E,j,K),_e.updateMultisampleRenderTarget(ge),_e.updateRenderTargetMipmap(ge),$.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let vt=0,zt=G.length;vt<zt;vt++){let Rt=G[vt],St=Rt.object,He=Rt.geometry,Nt=Rt.material,pt=Rt.group;if(Nt.side===kt&&St.layers.test(K.layers)){let Ln=Nt.side;Nt.side=_n,Nt.needsUpdate=!0,Ef(St,j,K,He,Nt,pt),Nt.side=Ln,Nt.needsUpdate=!0,ct=!0}}ct===!0&&(_e.updateMultisampleRenderTarget(ge),_e.updateRenderTargetMipmap(ge))}y.setRenderTarget(Le,Ie,We),y.setClearColor(k,H),ke!==void 0&&(K.viewport=ke),y.toneMapping=Ze}function qa(E,G,j){let K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ge=E.length;W<ge;W++){let Ce=E[W],Le=Ce.object,Ie=Ce.geometry,We=Ce.group,Ze=Ce.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),Le.layers.test(j.layers)&&Ef(Le,G,j,Ie,Ze,We)}}function Ef(E,G,j,K,W,ge){E.onBeforeRender(y,G,j,K,W,ge),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(y,G,j,K,E,ge),W.transparent===!0&&W.side===kt&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,y.renderBufferDirect(j,G,K,W,E,ge),W.side=Oi,W.needsUpdate=!0,y.renderBufferDirect(j,G,K,W,E,ge),W.side=kt):y.renderBufferDirect(j,G,K,W,E,ge),E.onAfterRender(y,G,j,K,W,ge)}function Ya(E,G,j){G.isScene!==!0&&(G=O);let K=he.get(E),W=p.state.lights,ge=p.state.shadowsArray,Ce=W.state.version,Le=z.getParameters(E,W.state,ge,G,j),Ie=z.getProgramCacheKey(Le),We=K.programs;K.environment=E.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(E.isMeshStandardMaterial?Ge:Xe).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",oe),We=new Map,K.programs=We);let Ze=We.get(Ie);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Ce)return Cf(E,Le),Ze}else Le.uniforms=z.getUniforms(E),E.onBeforeCompile(Le,y),Ze=z.acquireProgram(Le,Ie),We.set(Ie,Ze),K.uniforms=Le.uniforms;let ke=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=le.uniform),Cf(E,Le),K.needsLights=C0(E),K.lightsStateVersion=Ce,K.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function Af(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=ao.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Cf(E,G){let j=he.get(E);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function E0(E,G,j,K,W){G.isScene!==!0&&(G=O),_e.resetTextureUnits();let ge=G.fog,Ce=K.isMeshStandardMaterial?G.environment:null,Le=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gs,Ie=(K.isMeshStandardMaterial?Ge:Xe).get(K.envMap||Ce),We=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!j.morphAttributes.position,ct=!!j.morphAttributes.normal,vt=!!j.morphAttributes.color,zt=qi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(zt=y.toneMapping);let Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=Rt!==void 0?Rt.length:0,He=he.get(K),Nt=p.state.lights;if(Ve===!0&&(te===!0||E!==b)){let xn=E===b&&K.id===w;le.setState(K,E,xn)}let pt=!1;K.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Nt.state.version||He.outputColorSpace!==Le||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ie||K.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==le.numPlanes||He.numIntersection!==le.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Ze||He.morphTargets!==ke||He.morphNormals!==ct||He.morphColors!==vt||He.toneMapping!==zt||He.morphTargetsCount!==St)&&(pt=!0):(pt=!0,He.__version=K.version);let Ln=He.currentProgram;pt===!0&&(Ln=Ya(K,G,W));let xr=!1,Dn=!1,To=!1,Ft=Ln.getUniforms(),qn=He.uniforms;if(Q.useProgram(Ln.program)&&(xr=!0,Dn=!0,To=!0),K.id!==w&&(w=K.id,Dn=!0),xr||b!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ft.setValue(R,"projectionMatrix",E.projectionMatrix),Ft.setValue(R,"viewMatrix",E.matrixWorldInverse);let Sn=Ft.map.cameraPosition;Sn!==void 0&&Sn.setValue(R,se.setFromMatrixPosition(E.matrixWorld)),Z.logarithmicDepthBuffer&&Ft.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ft.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Dn=!0,To=!0)}if(W.isSkinnedMesh){Ft.setOptional(R,W,"bindMatrix"),Ft.setOptional(R,W,"bindMatrixInverse");let xn=W.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ft.setValue(R,"boneTexture",xn.boneTexture,_e))}W.isBatchedMesh&&(Ft.setOptional(R,W,"batchingTexture"),Ft.setValue(R,"batchingTexture",W._matricesTexture,_e),Ft.setOptional(R,W,"batchingIdTexture"),Ft.setValue(R,"batchingIdTexture",W._indirectTexture,_e),Ft.setOptional(R,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(R,"batchingColorTexture",W._colorsTexture,_e));let Yn=j.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ce.update(W,j,Ln),(Dn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Ft.setValue(R,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(qn.envMap.value=Ie,qn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(qn.envMapIntensity.value=G.environmentIntensity),Dn&&(Ft.setValue(R,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&A0(qn,To),ge&&K.fog===!0&&ie.refreshFogUniforms(qn,ge),ie.refreshMaterialUniforms(qn,K,q,ne,p.state.transmissionRenderTarget[E.id]),ao.upload(R,Af(He),qn,_e)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ao.upload(R,Af(He),qn,_e),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ft.setValue(R,"center",W.center),Ft.setValue(R,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(R,"normalMatrix",W.normalMatrix),Ft.setValue(R,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let xn=K.uniformsGroups;for(let Sn=0,Rh=xn.length;Sn<Rh;Sn++){let Ds=xn[Sn];$e.update(Ds,Ln),$e.bind(Ds,Ln)}}return Ln}function A0(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function C0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,G,j){let K=he.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),he.get(E.texture).__webglTexture=G,he.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let j=he.get(E);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};let R0=R.createFramebuffer();this.setRenderTarget=function(E,G=0,j=0){D=E,A=G,P=j;let K=!0,W=null,ge=!1,Ce=!1;if(E){let Ie=he.get(E);if(Ie.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(R.FRAMEBUFFER,null),K=!1;else if(Ie.__webglFramebuffer===void 0)_e.setupRenderTarget(E);else if(Ie.__hasExternalTextures)_e.rebindTextures(E,he.get(E.texture).__webglTexture,he.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ke=E.depthTexture;if(Ie.__boundDepthTexture!==ke){if(ke!==null&&he.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(E)}}let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);let Ze=he.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?W=Ze[G][j]:W=Ze[G],ge=!0):E.samples>0&&_e.useMultisampledRTT(E)===!1?W=he.get(E).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[j]:W=Ze,L.copy(E.viewport),B.copy(E.scissor),X=E.scissorTest}else L.copy(we).multiplyScalar(q).floor(),B.copy(Fe).multiplyScalar(q).floor(),X=Ye;if(j!==0&&(W=R0),Q.bindFramebuffer(R.FRAMEBUFFER,W)&&K&&Q.drawBuffers(E,W),Q.viewport(L),Q.scissor(B),Q.setScissorTest(X),ge){let Ie=he.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,j)}else if(Ce){let Ie=G;for(let We=0;We<E.textures.length;We++){let Ze=he.get(E.textures[We]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+We,Ze.__webglTexture,j,Ie)}}else if(E!==null&&j!==0){let Ie=he.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ie.__webglTexture,j)}w=-1},this.readRenderTargetPixels=function(E,G,j,K,W,ge,Ce,Le=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=he.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Q.bindFramebuffer(R.FRAMEBUFFER,Ie);try{let We=E.textures[Le],Ze=We.format,ke=We.type;if(!Z.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&j>=0&&j<=E.height-W&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(G,j,K,W,De.convert(Ze),De.convert(ke),ge))}finally{let We=D!==null?he.get(D).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,G,j,K,W,ge,Ce,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=he.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(G>=0&&G<=E.width-K&&j>=0&&j<=E.height-W){Q.bindFramebuffer(R.FRAMEBUFFER,Ie);let We=E.textures[Le],Ze=We.format,ke=We.type;if(!Z.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.bufferData(R.PIXEL_PACK_BUFFER,ge.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(G,j,K,W,De.convert(Ze),De.convert(ke),0);let vt=D!==null?he.get(D).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,vt);let zt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Qp(R,zt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ge),R.deleteBuffer(ct),R.deleteSync(zt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,j=0){let K=Math.pow(2,-j),W=Math.floor(E.image.width*K),ge=Math.floor(E.image.height*K),Ce=G!==null?G.x:0,Le=G!==null?G.y:0;_e.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,Ce,Le,W,ge),Q.unbindTexture()};let I0=R.createFramebuffer(),P0=R.createFramebuffer();this.copyTextureToTexture=function(E,G,j=null,K=null,W=0,ge=null){ge===null&&(W!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=W,W=0):ge=0);let Ce,Le,Ie,We,Ze,ke,ct,vt,zt,Rt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(j!==null)Ce=j.max.x-j.min.x,Le=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,We=j.min.x,Ze=j.min.y,ke=j.isBox3?j.min.z:0;else{let Yn=Math.pow(2,-W);Ce=Math.floor(Rt.width*Yn),Le=Math.floor(Rt.height*Yn),E.isDataArrayTexture?Ie=Rt.depth:E.isData3DTexture?Ie=Math.floor(Rt.depth*Yn):Ie=1,We=0,Ze=0,ke=0}K!==null?(ct=K.x,vt=K.y,zt=K.z):(ct=0,vt=0,zt=0);let St=De.convert(G.format),He=De.convert(G.type),Nt;G.isData3DTexture?(_e.setTexture3D(G,0),Nt=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(_e.setTexture2DArray(G,0),Nt=R.TEXTURE_2D_ARRAY):(_e.setTexture2D(G,0),Nt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);let pt=R.getParameter(R.UNPACK_ROW_LENGTH),Ln=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xr=R.getParameter(R.UNPACK_SKIP_PIXELS),Dn=R.getParameter(R.UNPACK_SKIP_ROWS),To=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,We),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke);let Ft=E.isDataArrayTexture||E.isData3DTexture,qn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let Yn=he.get(E),xn=he.get(G),Sn=he.get(Yn.__renderTarget),Rh=he.get(xn.__renderTarget);Q.bindFramebuffer(R.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,Rh.__webglFramebuffer);for(let Ds=0;Ds<Ie;Ds++)Ft&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,he.get(E).__webglTexture,W,ke+Ds),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,he.get(G).__webglTexture,ge,zt+Ds)),R.blitFramebuffer(We,Ze,Ce,Le,ct,vt,Ce,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||he.has(E)){let Yn=he.get(E),xn=he.get(G);Q.bindFramebuffer(R.READ_FRAMEBUFFER,I0),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,P0);for(let Sn=0;Sn<Ie;Sn++)Ft?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yn.__webglTexture,W,ke+Sn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yn.__webglTexture,W),qn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xn.__webglTexture,ge,zt+Sn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xn.__webglTexture,ge),W!==0?R.blitFramebuffer(We,Ze,Ce,Le,ct,vt,Ce,Le,R.COLOR_BUFFER_BIT,R.NEAREST):qn?R.copyTexSubImage3D(Nt,ge,ct,vt,zt+Sn,We,Ze,Ce,Le):R.copyTexSubImage2D(Nt,ge,ct,vt,We,Ze,Ce,Le);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qn?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Nt,ge,ct,vt,zt,Ce,Le,Ie,St,He,Rt.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(Nt,ge,ct,vt,zt,Ce,Le,Ie,St,Rt.data):R.texSubImage3D(Nt,ge,ct,vt,zt,Ce,Le,Ie,St,He,Rt):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ge,ct,vt,Ce,Le,St,He,Rt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ge,ct,vt,Rt.width,Rt.height,St,Rt.data):R.texSubImage2D(R.TEXTURE_2D,ge,ct,vt,Ce,Le,St,He,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,pt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ln),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xr),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,To),ge===0&&G.generateMipmaps&&R.generateMipmap(Nt),Q.unbindTexture()},this.initRenderTarget=function(E){he.get(E).__webglFramebuffer===void 0&&_e.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_e.setTextureCube(E,0):E.isData3DTexture?_e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_e.setTexture2DArray(E,0):_e.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,Q.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Nm={type:"change"},ad={type:"start"},Om={type:"end"},Hc=new Bi,Fm=new cn,OM=Math.cos(70*Be.DEG2RAD),en=new _,Cn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6,ms=class extends Ks{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new rt,this._lastTargetPosition=new _,this._quat=new rt().setFromUnitVectors(e.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qr,this._sphericalDelta=new Qr,this._scale=1,this._panOffset=new _,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new _,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zM.bind(this),this._onPointerDown=BM.bind(this),this._onPointerUp=kM.bind(this),this._onContextMenu=YM.bind(this),this._onMouseWheel=HM.bind(this),this._onKeyDown=WM.bind(this),this._onTouchStart=XM.bind(this),this._onTouchMove=qM.bind(this),this._onMouseDown=VM.bind(this),this._onMouseMove=GM.bind(this),this._interceptControlDown=ZM.bind(this),this._interceptControlUp=jM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nm),this.update(),this.state=Mt.NONE}update(e=null){let t=this.object.position;en.copy(t).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Cn:n>Math.PI&&(n-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),t.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=en.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new _(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new _(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<OM?this.object.lookAt(this.target):(Fm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(Fm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(Nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){en.setFromMatrixColumn(t,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,t){this.screenSpacePanning===!0?en.setFromMatrixColumn(t,1):(en.setFromMatrixColumn(t,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function BM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Om),this.state=Mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function VM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case En.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case En.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(ad)}function GM(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function HM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(ad),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Om))}function WM(i){this.enabled!==!1&&this._handleKeyDown(i)}function XM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(ad)}function qM(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function YM(i){this.enabled!==!1&&i.preventDefault()}function ZM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ld=["Repos","Patrouille","Poursuite","Contact"],cd="gorilla-lab-entity-models-v1",JM={sphere:2562,cube:1946},Kn=[["Torse",-1,[0,.65,0]],["Tete",0,[0,1.18,0]]];for(let[i,e]of[["G",-1],["D",1]]){let t=Kn.length;Kn.push(["Epaule "+i,0,[e*.23,.96,0]],["Coude "+i,t,[e*.36,.65,0]],["Poignet "+i,t+1,[e*.43,.38,0]],["Doigt 1 "+i,t+2,[e*.39,.28,-.04]],["Doigt 2 "+i,t+2,[e*.43,.27,0]],["Doigt 3 "+i,t+2,[e*.47,.28,.04]],["Hanche "+i,0,[e*.15,.46,0]],["Genou "+i,t+6,[e*.17,.23,0]],["Pied "+i,t+7,[e*.18,.07,-.03]])}var Wc=(i,e,t,n=0)=>Number.isFinite(i)?Math.max(e,Math.min(t,i)):n,ma=()=>Kn.map(()=>[0,0,0]);function Xc(i){let e=JM[i?.base];return!Number.isInteger(e)||!Array.isArray(i.vertices)||i.vertices.length!==e*3||!i.vertices.every(Number.isFinite)?null:{base:i.base,vertices:i.vertices.map(t=>Math.round(Wc(t,-3e3,3e3))),color:typeof i.color=="string"&&/^#[0-9a-f]{6}$/i.test(i.color)?i.color.toLowerCase():"#62566b",pivots:Kn.map(([,,t],n)=>t.map((s,r)=>Wc(i.pivots?.[n]?.[r],-3,3,s))),clips:ld.map((t,n)=>(Array.isArray(i.clips?.[n])?i.clips[n]:[]).slice(0,12).map(s=>({duration:Wc(s?.duration,.08,2,.35),pose:Kn.map((r,o)=>[0,1,2].map(a=>Wc(s?.pose?.[o]?.[a],-180,180)))}))),contact:i.contact==="animate"?"animate":"kill"}}function Bm(i){try{let e=JSON.parse(i.getItem(cd)??"[]");return Array.isArray(e)?e.slice(0,20).flatMap(t=>{let n=Xc(t.sculpt);return n&&typeof t.id=="string"&&typeof t.name=="string"?[{id:t.id.slice(0,64),name:t.name.slice(0,36),sculpt:n}]:[]}):[]}catch{return[]}}function qc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=zm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=zm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function zm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function km(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,M=a.length;v<M;v++){let y=a[v],T=i.attributes[y];l[y]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let A=i.morphAttributes[y];A&&(c[y]||(c[y]=[]),A.forEach((P,D)=>{let w=new P.array.constructor(P.count*P.itemSize);c[y][D]=new P.constructor(w,P.itemSize,P.normalized)}))}let f=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=f*x;for(let v=0;v<r;v++){let M=n?n.getX(v):v,y="";for(let T=0,A=a.length;T<A;T++){let P=a[T],D=i.getAttribute(P),w=D.itemSize;for(let b=0;b<w;b++)y+=`${~~(D[u[b]](M)*x+g)},`}if(y in t)h.push(t[y]);else{for(let T=0,A=a.length;T<A;T++){let P=a[T],D=i.getAttribute(P),w=i.morphAttributes[P],b=D.itemSize,L=l[P],B=c[P];for(let X=0;X<b;X++){let k=u[X],H=d[X];if(L[H](o,D[k](M)),w)for(let V=0,ne=w.length;V<ne;V++)B[V][H](o,w[V][k](M))}}t[y]=o,h.push(o),o++}}let p=i.clone();for(let v in i.attributes){let M=l[v];if(p.setAttribute(v,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),v in c)for(let y=0;y<c[v].length;y++){let T=c[v][y];p.morphAttributes[v][y]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}function hd(i,e){let t=i==="cube"?new et(.9,1.25,.67,18,18,18):new bi(1,15);t.deleteAttribute("normal"),t.deleteAttribute("uv");let n=km(t,1e-5);return t.dispose(),i==="sphere"&&n.scale(.46,.64,.34),n.translate(0,.68,0),e&&n.attributes.position.array.set(e.map(s=>s/1e3)),n.computeVertexNormals(),n.computeBoundingSphere(),n}function Yc(i){return Array.from(i.attributes.position.array,e=>Math.round(e*1e3))}function Vm(i){let e=hd(i.base,i.vertices),t=new Zt({color:i.color,roughness:.86,side:kt}),n=new Go(e,t);n.frustumCulled=!1;let s=i.pivots.map(d=>new _(...d)),r=Kn.map((d,f)=>{let m=new Wr;return m.position.copy(s[f]),m}),o=Kn.map(([,d],f)=>{d<0?n.add(r[f]):(r[d].add(r[f]),r[f].position.sub(s[d]));let m=d<0?s[0].clone().add(new _(0,.19,0)):s[d].clone().lerp(s[f],.55);return new js(m,s[f])}),a=e.attributes.position,l=[],c=[],h=new _,u=new _;for(let d=0;d<a.count;d++){h.fromBufferAttribute(a,d);let f=o.map((g,p)=>[p,(g.distanceSq()<1e-10?g.end:g.closestPointToPoint(h,!0,u)).distanceToSquared(h)]).sort((g,p)=>g[1]-p[1]).slice(0,4),m=f.map(([,g])=>1/(.0018+g)**2.6),x=m.reduce((g,p)=>g+p,0);for(let g=0;g<4;g++)l.push(f[g][0]),c.push(m[g]/x)}return e.setAttribute("skinIndex",new Hs(l,4)),e.setAttribute("skinWeight",new Pe(c,4)),n.bind(new Ho(r)),{mesh:n,bones:r,dispose(){n.removeFromParent(),n.skeleton.dispose(),e.dispose(),t.dispose()}}}function Zc(i,e){for(let[t,n]of i.bones.entries())n.rotation.set(...e[t].map(Be.degToRad))}function Gm(i,e,t,n=!0){if(!e.length)return;let s=e.reduce((r,o)=>r+o.duration,0);t=n?t%s:Math.min(t,s);for(let[r,o]of e.entries()){if(t>o.duration&&r<e.length-1){t-=o.duration;continue}let a=e[n?(r+1)%e.length:Math.min(r+1,e.length-1)],l=Be.smoothstep(t/o.duration,0,1);for(let[c,h]of i.bones.entries())h.rotation.set(...o.pose[c].map((u,d)=>Be.degToRad(Be.lerp(u,a.pose[c][d],l))));return}}function Hm(){let i=Bm(localStorage),e=document.createElement("dialog");e.className="entity-sculptor",e.setAttribute("aria-label","Atelier des entit\xE9s"),e.innerHTML=`
    <div class="entity-sculptor-toolbar">
      <select data-ui="library" aria-label="Entit&eacute; enregistr&eacute;e"></select>
      <input data-ui="name" aria-label="Nom" maxlength="36">
      <button data-ui="sphere">Nouvelle sph&egrave;re</button><button data-ui="cube">Nouveau cube</button>
      <button data-ui="save">Enregistrer l&rsquo;entit&eacute;</button>
      <a href="./editor.html?tab=entities" target="_blank" rel="noopener" style="color:#bddfee">Placer sur une carte</a>
      <button data-ui="close" style="margin-left:auto">Fermer</button>
    </div>
    <div class="entity-sculptor-layout">
      <div data-ui="canvas" style="min-height:0;min-width:0;position:relative"></div>
      <section>
        <label>Mode <select data-ui="mode"><option value="sculpt">Sculpture</option><option value="motion">Squelette et animations</option></select></label>
        <div data-ui="sculpt">
          <label>Brosse <select data-ui="brush"><option value="grab">Tirer</option><option value="inflate">Gonfler / creuser</option><option value="smooth">Lisser</option></select></label>
          <label>Rayon <input data-ui="radius" type="range" min=".025" max=".58" step=".005" value=".23"></label>
          <label><input data-ui="mirror" type="checkbox" checked> Sym&eacute;trie gauche / droite</label>
          <label><input data-ui="wire" type="checkbox"> Afficher les polygones</label>
          <label>Couleur <input data-ui="color" type="color"></label>
          <button data-ui="undo">Annuler le trait</button>
          <p>Glisse sur le mod&egrave;le. Maj creuse avec la brosse Gonfler. Clic droit pour tourner, molette pour zoomer.</p>
        </div>
        <div data-ui="motion" hidden>
          <label>Articulation <select data-ui="joint"></select></label>
          <p>Clique une articulation pour la choisir. Glisse-la pour d&eacute;placer son pivot en pose de repos.</p>
          <fieldset><legend>Pivot XYZ (m)</legend><div data-ui="pivot" style="display:flex;gap:4px"></div></fieldset>
          <fieldset><legend>Rotation XYZ (&deg;)</legend><div data-ui="rotation" style="display:flex;gap:4px"></div></fieldset>
          <label>Animation <select data-ui="clip"></select></label>
          <label>Pose <select data-ui="frame"></select></label>
          <label>Dur&eacute;e de la pose <input data-ui="duration" type="number" min=".08" max="2" step=".05" value=".35"> s</label>
          <div><button data-ui="add">Ajouter une pose</button><button data-ui="replace">Mettre &agrave; jour</button><button data-ui="delete">Supprimer</button></div>
          <div><button data-ui="rest">Remettre la pose &agrave; z&eacute;ro</button><button data-ui="play">Lire</button></div>
          <label>Au contact <select data-ui="contact"><option value="kill">Animation + &eacute;limination</option><option value="animate">Animation seule</option></select></label>
        </div>
        <output data-ui="status" role="status"></output>
      </section>
    </div>`,document.body.append(e);let t=U=>e.querySelector('[data-ui="'+U+'"]');e.showModal();let n=new jn;n.background=new Oe("#182029");let s=new qt(44,1,.03,100);s.position.set(2,1.55,-2.7);let r;try{r=new ps({antialias:!0})}catch{throw e.remove(),Error("WebGL indisponible pour la sculpture.")}r.setPixelRatio(Math.min(devicePixelRatio,1.5)),t("canvas").append(r.domElement);let o=r.domElement;o.style.cssText="display:block;width:100%;height:100%;touch-action:none";let a=new ms(s,o);a.target.set(0,.65,0),a.mouseButtons={LEFT:null,MIDDLE:En.PAN,RIGHT:En.ROTATE};let l=new Gi("#e5f0ff","#5c3d46",2.1),c=new Hi("#fff0e0",2.7);c.position.set(-2,4,-3),n.add(l,c,new Js(6,24,"#758698","#344250"));let h=new Zt({color:"#62566b",roughness:.84,side:kt}),u=new ye(new kn(1,16,12),new rn({color:"#b8e9ff",wireframe:!0,depthWrite:!1,opacity:.42,transparent:!0}));n.add(u),u.visible=!1;let d=new Jt;n.add(d);let f=new kn(.027,9,6),m=new rn({color:"#92b9db",depthTest:!1}),x=new rn({color:"#ffc35e",depthTest:!1}),g=new vi(new ht,new On({color:"#96a9bb",depthTest:!1}));d.add(g);let p=Kn.map(()=>{let U=new ye(f,m);return U.renderOrder=3,d.add(U),U}),v=new Wi,M=new ae,y=new cn,T=new _,A=new _,P=[],D,w,b,L,B,X=!1,k,H,V=0,ne=null,q,re=[],xe=(U,z)=>new Option(z,U);t("joint").replaceChildren(...Kn.map(([U],z)=>xe(z,U))),t("clip").replaceChildren(...ld.map((U,z)=>xe(z,U)));let we=(U,z,ie,Y)=>["X","Y","Z"].map(le=>{let Me=document.createElement("input");return Object.assign(Me,{type:"number",min:ie,max:Y,step:z}),Me.style.width="33%",Me.setAttribute("aria-label",U+" "+le),t(U).append(Me),Me}),Fe=we("pivot",.02,-3,3),Ye=we("rotation",1,-180,180),Ke=U=>{t("status").textContent=U},Ve=()=>{X=!0,Ke("Modifications en cours")},te=()=>Number(t("joint").value),N=()=>L.clips[Number(t("clip").value)];function se(){t("library").replaceChildren(xe("","Brouillon"),...i.map(U=>xe(U.id,U.name))),t("library").value=D??""}function ue(){ne=null,t("play").textContent="Lire",b&&Zc(b,B)}function O(){Fe.forEach((U,z)=>{U.value=L.pivots[te()][z]}),Ye.forEach((U,z)=>{U.value=B[te()][z]}),V=Math.min(V,Math.max(0,N().length-1)),t("frame").replaceChildren(...N().map((U,z)=>xe(z,"Pose "+(z+1)))),t("frame").value=String(V),t("duration").value=N()[V]?.duration??.35,t("replace").disabled=t("delete").disabled=!N().length,t("add").disabled=N().length>=12}function J(){ue(),b?.dispose(),b=null,w.visible=t("mode").value==="sculpt",d.visible=!w.visible,u.visible=!1,w.visible||(L.vertices=Yc(w.geometry),b=Vm(L),n.add(b.mesh),Zc(b,B)),O()}function de(U,z){w?.removeFromParent(),w?.geometry.dispose(),D=z?.id;let ie=hd(U,z?.sculpt.vertices);w=new ye(ie,h),n.add(w);let Y=ie.index.array,Ee=Array.from({length:ie.attributes.position.count},()=>new Set);for(let le=0;le<Y.length;le+=3)for(let Me=0;Me<3;Me++){let Ae=Y[le+Me],ce=Y[le+(Me+1)%3];Ee[Ae].add(ce),Ee[ce].add(Ae)}re=Ee.map(le=>Array.from(le)),L=Xc(z?.sculpt??{base:U,vertices:Yc(ie)}),B=ma(),V=0,P.length=0,X=!1,t("name").value=z?.name??"Ma cr\xE9ature",t("contact").value=L.contact,t("color").value=L.color,h.color.set(L.color),t("mode").value="sculpt",Ke(""),se(),J()}function R(){return!X||confirm("Quitter ce brouillon sans enregistrer les modifications ?")}t("sphere").onclick=()=>{R()&&de("sphere")},t("cube").onclick=()=>{R()&&de("cube")},t("library").onchange=()=>{let U=i.find(z=>z.id===t("library").value);U&&R()?de(U.sculpt.base,U):se()},t("mode").onchange=J,t("wire").onchange=()=>{h.wireframe=t("wire").checked},t("color").oninput=()=>{L.color=t("color").value,h.color.set(L.color),Ve()},t("name").oninput=Ve,t("contact").onchange=()=>{L.contact=t("contact").value,Ve()},t("save").onclick=()=>{if(!D&&i.length>=20){Ke("La biblioth\xE8que contient d\xE9j\xE0 20 cr\xE9atures.");return}let U=Xc({...L,vertices:Yc(w.geometry)}),z={id:D??crypto.randomUUID(),name:t("name").value.trim()||"Ma cr\xE9ature",sculpt:U},ie=[...i.filter(Y=>Y.id!==D),z];try{localStorage.setItem(cd,JSON.stringify(ie))}catch{Ke("Sauvegarde impossible. Le stockage du navigateur est plein ou bloqu\xE9.");return}i.splice(0,i.length,...ie),D=z.id,X=!1,se(),Ke("Enregistr\xE9e. Choisis-la dans Entit\xE9s, sur ta carte.")},t("joint").onchange=O,Fe.forEach((U,z)=>{U.onchange=()=>{if(!Number.isFinite(U.valueAsNumber)){O();return}L.pivots[te()][z]=Be.clamp(U.valueAsNumber,-3,3),Ve(),J()}}),Ye.forEach((U,z)=>{U.oninput=()=>{Number.isFinite(U.valueAsNumber)&&(B[te()][z]=Be.clamp(U.valueAsNumber,-180,180),ue())}});function ee(){N().length?B=structuredClone(N()[V].pose):B=ma(),ue(),O()}t("clip").onchange=()=>{V=0,ee()},t("frame").onchange=()=>{V=Number(t("frame").value),ee()};let $=()=>({duration:Be.clamp(t("duration").valueAsNumber||.35,.08,2),pose:structuredClone(B)});t("add").onclick=()=>{N().push($()),V=N().length-1,Ve(),O()},t("replace").onclick=()=>{N()[V]=$(),Ve(),O()},t("delete").onclick=()=>{N().splice(V,1),V=Math.max(0,V-1),Ve(),ee()},t("rest").onclick=()=>{B=ma(),ue(),O()},t("play").onclick=()=>{if(ne!==null){ue();return}if(!N().length){Ke("Ajoute une pose avant de lire l\u2019animation.");return}ne=performance.now(),t("play").textContent="Arr\xEAter"};let Z=()=>w.geometry.attributes.position;function Q(){Z().needsUpdate=!0,w.geometry.computeVertexNormals(),w.geometry.computeBoundingSphere(),Ve()}t("undo").onclick=()=>{P.length&&(Z().array.set(P.pop()),Q())};function me(U){let z=o.getBoundingClientRect();M.set(2*(U.clientX-z.left)/z.width-1,1-2*(U.clientY-z.top)/z.height),v.setFromCamera(M,s)}function he(U){return me(U),v.intersectObject(w,!1)[0]}o.addEventListener("contextmenu",U=>U.preventDefault()),o.addEventListener("pointerdown",U=>{if(U.button!==0)return;if(!w.visible){me(U);let Ae=v.intersectObjects(p,!1)[0];if(!Ae)return;let ce=p.indexOf(Ae.object);t("joint").value=String(ce),ue(),Zc(b,ma());let Se=new _(...L.pivots[ce]);y.setFromNormalAndCoplanarPoint(s.getWorldDirection(new _),Se);let ze=v.ray.intersectPlane(y,new _);if(!ze)return;H={id:U.pointerId,index:ce,offset:Se.sub(ze)},O(),o.setPointerCapture(U.pointerId),a.enabled=!1;return}let z=he(U);if(!z)return;let ie=Z().array.slice(),Y=z.point,Ee=Y.clone().setX(-Y.x),le=Number(t("radius").value),Me=s.getWorldDirection(new _);y.setFromNormalAndCoplanarPoint(Me,Y),k={id:U.pointerId,center:Y,mirrored:Ee,original:ie,radius:le,tool:t("brush").value,mirror:t("mirror").checked,x:U.clientX,y:U.clientY,normals:w.geometry.attributes.normal.array.slice()},P.push(ie),P.length>16&&P.shift(),o.setPointerCapture(U.pointerId),a.enabled=!1}),o.addEventListener("pointermove",U=>{if(H?.id===U.pointerId){if(me(U),!v.ray.intersectPlane(y,T))return;let F=T.add(H.offset).clampScalar(-3,3).toArray().map(pe=>Math.round(pe*1e3)/1e3);L.pivots[H.index]=F,Fe.forEach((pe,ve)=>{pe.value=F[ve]}),Ve();return}if(!w.visible)return;if(!k){let F=he(U);u.visible=!!F,F&&(u.position.copy(F.point),u.scale.setScalar(Number(t("radius").value)));return}if(k.id!==U.pointerId||(me(U),!v.ray.intersectPlane(y,T)))return;T.sub(k.center);let{original:z,center:ie,mirrored:Y,radius:Ee,tool:le,mirror:Me,x:Ae,y:ce,normals:Se}=k,ze=Z().array,De=Be.clamp(Math.hypot(U.clientX-Ae,U.clientY-ce)*.005,0,.65),be=new _,$e=new _;for(let F=0;F<Z().count;F++){let pe=F*3;A.fromArray(z,pe);let ve=A.distanceTo(ie),Re=Me?A.distanceTo(Y):1/0,fe=1-Be.smoothstep(Math.min(ve,Re),0,Ee);if(fe){if(le==="grab")A.x+=T.x*fe*(Re<ve?-1:1),A.y+=T.y*fe,A.z+=T.z*fe;else if(le==="smooth"){be.set(0,0,0);for(let oe of re[F])be.x+=z[oe*3],be.y+=z[oe*3+1],be.z+=z[oe*3+2];A.lerp(be.multiplyScalar(1/re[F].length),Math.min(1,De*2)*fe)}else $e.fromArray(Se,pe),A.addScaledVector($e,De*fe*(U.shiftKey?-1:1));A.clampScalar(-3,3).toArray(ze,pe)}}Q()});let _e=U=>{H?.id===U.pointerId&&(H=null,a.enabled=!0,J()),k?.id===U.pointerId&&(k=null,a.enabled=!0)};o.addEventListener("lostpointercapture",_e),o.addEventListener("pointerleave",()=>{u.visible=!1});function Xe(){R()&&e.close()}t("close").onclick=Xe;let Ge=U=>{X&&U.preventDefault()};window.addEventListener("beforeunload",Ge),e.addEventListener("cancel",U=>{U.preventDefault(),Xe()}),e.addEventListener("close",()=>{window.removeEventListener("beforeunload",Ge),cancelAnimationFrame(q),a.dispose(),b?.dispose(),n.traverse(U=>{U.geometry?.dispose(),U.material?.dispose()}),x.dispose(),m.dispose(),r.dispose(),e.remove()},{once:!0});function I(U){q=requestAnimationFrame(I);let{clientWidth:z,clientHeight:ie}=t("canvas");if(z&&ie&&(o.width!==Math.round(z*r.getPixelRatio())||o.height!==Math.round(ie*r.getPixelRatio()))&&(r.setSize(z,ie,!1),s.aspect=z/ie,s.updateProjectionMatrix()),a.update(),b){ne!==null&&Gm(b,N(),(U-ne)/1e3,Number(t("clip").value)!==3),b.mesh.updateMatrixWorld(!0);let Y=[];for(let[le,[,Me]]of Kn.entries()){let Ae=p[le].position;H?Ae.fromArray(L.pivots[le]):b.bones[le].getWorldPosition(Ae),p[le].material=le===te()?x:m,Me>=0&&Y.push(...p[Me].position,...Ae)}let Ee=g.geometry.getAttribute("position");Ee?(Ee.array.set(Y),Ee.needsUpdate=!0):g.geometry.setAttribute("position",new Pe(Y,3)),g.frustumCulled=!1}r.render(n,s)}let S=i.at(-1);de(S?.sculpt.base??"sphere",S),q=requestAnimationFrame(I)}var jT=new _(0,1,0),ga=(i,e,t,n)=>Number.isFinite(i)?Be.clamp(i,t,n):e;function xa(i){if(!Array.isArray(i?.pivot)||i.pivot.length!==3)return null;let e=i.mode==="slide"||i.mode==="screw"?i.mode:null,t=i.axis==="x"||i.axis==="z"?i.axis:null;return{...e?{mode:e,travel:ga(i.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:i.pivot.map(n=>ga(n,0,-6,6)),closed:ga(i.closed,0,-180,180),open:ga(i.open,95,-180,180),seconds:ga(i.seconds,.7,.1,6)}}function KM(i,e){return Be.degToRad(Be.lerp(i.closed,i.open,Be.smoothstep(e,0,1)))}var ud=new _;function Wm(i,e,t,n,s,r,o=1){let a=s.axis==="x"?0:s.axis==="z"?2:1;ud.set(0,0,0).setComponent(a,1);let l=s.mode==="slide"?0:KM(s,r);i.quaternion.setFromAxisAngle(ud,l),i.position.copy(t).sub(e).applyQuaternion(i.quaternion).add(e),s.mode&&i.position.addScaledVector(ud,s.travel*o*Be.smoothstep(r,0,1)),i.quaternion.multiply(n)}var co=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[i,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let n=i+"Arm",s=i+"Forearm",r=i+"Hand";co.push([n,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,n,[.35*e,-.52,.02],120],[r,i==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)co.push([i+"Finger"+o,"Doigt "+o+" \xB7 "+(i==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var gs=Object.freeze(Object.fromEntries(co.map(([i,e,t,n,s])=>[i,{label:e,parent:t,pivot:n,limit:s}]))),dd=(i,e,t,n)=>Number.isFinite(i)?Be.clamp(i,e,t):n;function ho(i,e){let t=gs[i];return{pivot:t.pivot.map((n,s)=>dd(e?.pivot?.[s],-3,3,n)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:dd(e?.limit,0,150,t.limit)}}function ya(i){return Object.fromEntries(co.map(([e])=>[e,ho(e,i?.[e])]))}function _a(i){return i?.parts.length?i.kind!=="avatar"?!0:i.parts.some(e=>e.avatarJoint==="head")&&i.parts.some(e=>e.avatarJoint==="torso"):!1}function Xm(){let i=(s,r,o,a,l,c="sphere",h=[0,0,0])=>({name:r,avatarJoint:s,shape:c,position:o,scale:a,rotation:h,color:l,surface:"plain",texture:null}),e="#6e4b58",t="#a17668",n=[i("torso","Torse",[0,-.43,.04],[.58,.69,.38],e),i("head","Cr\xE2ne",[0,.01,.01],[.32,.36,.29],e),i("head","Museau",[0,-.045,-.125],[.22,.14,.19],t),i("head","Oreille gauche",[-.16,.012,.025],[.086,.106,.064],t),i("head","Oreille droite",[.16,.012,.025],[.086,.106,.064],t),i("head","\u0152il gauche",[-.058,.036,-.121],[.034,.03,.035],"#24202c"),i("head","\u0152il droit",[.058,.036,-.121],[.034,.03,.035],"#24202c")];for(let[s,r,o]of[["left",-1,"gauche"],["right",1,"droit"]]){n.push(i(s+"Arm","Bras "+o,[.31*r,-.38,.04],[.17,.38,.17],e,"sphere",[0,0,r*15]),i(s+"Forearm","Avant-bras "+o,[.38*r,-.63,.009],[.13,.3,.14],e,"sphere",[0,0,r*13]),i(s+"Hand","Paume "+o,[.41*r,-.787,-.003],[.13,.125,.075],t));for(let a=1;a<=3;a++)n.push(i(s+"Finger"+a,"Doigt "+a+" "+o,[(.375+(a-1)*.035)*r,-.868,-.025],[.035,.096,.04],t))}return n}function qm(i,e,t){let n=ya(i.avatarRig),s=new Jt,r={},o=[],a=0;for(let[h,,u]of co){let d=new Jt;d.position.fromArray(n[h].pivot),u&&d.position.sub(new _(...n[u].pivot)),(u?r[u]:s).add(d),r[h]=d}for(let[h,u]of i.parts.entries()){let d=Object.hasOwn(r,u.avatarJoint)?u.avatarJoint:"torso",f=e(u,h),m=f.geometry.index?.count??f.geometry.attributes.position.count;a+=m/3,f.position.sub(new _(...n[d].pivot)),r[d].add(f),o.push(f)}function l(h,u){let d=r[h],f=n[h];d&&(d.rotation.set(0,0,0),d.rotation[f.axis]=Be.degToRad(f.limit)*dd(u,-1,1,0))}function c(h,u){let d=n[h].pivot;n[h]=ho(h,{...n[h],pivot:u});let f=new _(...d).sub(new _(...n[h].pivot));for(let m of r[h].children)m.isMesh&&m.position.add(f);for(let[m,,x]of co){if(m!==h&&x!==h)continue;let g=r[m].position.fromArray(n[m].pivot);x&&g.sub(new _(...n[x].pivot))}return n[h].pivot}return{root:s,bones:r,meshes:o,triangles:a,setBend:l,setPivot:c,headPivot:new _(...n.head.pivot),dispose(){s.removeFromParent();for(let h of o)t(h)}}}var pd={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},$M=new WeakMap,Ym={value:0},Zm=["sine","triangle","pulse","stars"],fd=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n;function va(i){if(!i||typeof i!="object")return null;let e={};for(let[t,n]of Object.entries(pd)){let s=i[t];e[t]={strength:fd(s?.strength,0,n.max,0),speed:fd(s?.speed,0,8,n.defaultSpeed),scale:fd(s?.scale,0,48,n.defaultScale),signal:Zm.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function jm(i){Ym.value=i}function Jm(i,e){if(!e||!Object.values(e).some(r=>r.strength>0))return i;let t=r=>{let o=e[r];return new bt(o.strength,o.speed,o.scale,Zm.indexOf(o.signal))},n={uFoundryTime:Ym,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new Oe(e.tint.color)},uFoundryGlowColor:{value:new Oe(e.glow.color)}},s=`
uniform float uFoundryTime;
varying vec3 vFoundryPosition;
float foundryWave(vec4 channel, vec3 p){
  float phase=uFoundryTime*channel.y*6.2831853+dot(p,vec3(.61,.79,-.53))*channel.z;
  float wave=.5+.5*sin(phase);
  if(channel.w>1.5)return smoothstep(.65,.85,wave);
  if(channel.w>.5)return 1.-abs(fract(phase/6.2831853)*2.-1.);
  return wave;
}
`;return i.onBeforeCompile=r=>{Object.assign(r.uniforms,n),r.vertexShader=s+`uniform vec4 uFoundryDeform;
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},i.customProgramCacheKey=()=>"foundry-effect-v1",$M.set(i,e),i}var Jc=0,QM=1,eS=new _,Km=new js,md=new cn,$m=new _,jc=new Fn,Kc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new $c,this.unassigned=new $c,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new gd(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new _;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,eS)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Jc){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,h;r=0,Km.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=e[d];if(m!==a&&m!==l){Km.closestPointToPoint(m.point,!0,$m);let x=$m.distanceToSquared(m.point);x>r&&(r=x,c=m)}}r=-1,md.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=e[d];if(m!==a&&m!==l&&m!==c){let x=Math.abs(md.distanceToPoint(m.point));x>r&&(r=x,h=m)}}let u=[];if(md.distanceToPoint(h.point)<0){u.push(hi.create(a,l,c),hi.create(h,l,a),hi.create(h,c,l),hi.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(hi.create(a,c,l),hi.create(h,a,l),hi.create(h,l,c),hi.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=e.length;d<f;d++){let m=e[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,x=this.faces[g])}x!==null&&this._addVertexToFace(m,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===Jc&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=QM;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Jc&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=hi.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},hi=class i{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=Jc,this.edge=null}static create(e,t,n){let s=new i,r=new ba(e,s),o=new ba(t,s),a=new ba(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return jc.set(e.point,t.point,n.point),jc.getNormal(this.normal),jc.getMidpoint(this.midpoint),this.area=jc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ba=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},gd=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},$c=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Yi=class extends ht{constructor(e=[]){super();let t=[],n=[],r=new Kc().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Pe(t,3)),this.setAttribute("normal",new Pe(n,3))}};var Sa=48,tS=3,nS=128,$n=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),iS=(i,e,t)=>Math.max(e,Math.min(t,i)),sS=()=>structuredClone($n.shield),Ma=(i,e,t,n)=>Number.isFinite(i)?iS(i,t,n):e;function ui(i){let e=i?.mode==="lathe"?$n.bottle:sS(),t=i?.mode==="lathe"?"lathe":"extrude",n=t==="extrude"&&i?.symmetric===!0,s=Array.isArray(i?.points)&&i.points.length>=3&&i.points.length<=Sa?i.points.map(o=>[Ma(o?.[0],0,-1.5,1.5),Ma(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),n&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:n,points:s,depth:Ma(i?.depth,e.depth,.025,1.5),bevel:Ma(i?.bevel,e.bevel,0,.15),segments:Math.round(Ma(i?.segments,32,tS,nS))}}function wa(i){if(!i.symmetric||i.mode!=="extrude")return i.points.map(n=>[...n]);let e=i.points.map(([n,s])=>[-Math.abs(n),s]),t=e.slice().reverse().filter(([n])=>n<-1e-4).map(([n,s])=>[-n,s]);return[...e,...t]}function Qc(i,e,t){return(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0])}function rS(i,e,t,n){let s=Qc(i,e,t),r=Qc(i,e,n),o=Qc(t,n,i),a=Qc(t,n,e);return s*r<-1e-8&&o*a<-1e-8}function eh(i){let e=ui(i),t=e.mode==="lathe"?e.points:wa(e);if(t.length<3||t.length>Sa*2)return"Il faut au moins trois points.";for(let n=1;n<t.length;n++)if(Math.hypot(t[n][0]-t[n-1][0],t[n][1]-t[n-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(n=>n[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(n=>n[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let n=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];n+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&rS(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(n)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function th(i){let e=ui(i),t=eh(e);if(t)throw new Error(t);let n;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ae(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ae(0,s[0].y)),s.at(-1).x>0&&s.push(new ae(0,s.at(-1).y)),n=new na(s,e.segments);let r=[],o=n.attributes.position,a=new _,l=new _,c=new _,h=new _,u=n.index.array;for(let d=0;d<u.length;d+=3)a.fromBufferAttribute(o,u[d]),l.fromBufferAttribute(o,u[d+1]),c.fromBufferAttribute(o,u[d+2]),h.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(u[d],u[d+1],u[d+2]);n.setIndex(r)}else{let s=wa(e),r=new ki;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);n=new qs(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(n.center(),n.computeVertexNormals(),!n.attributes.uv){let s=n.attributes.position.count;n.setAttribute("uv",new mt(new Float32Array(s*2),2))}return n}function uo(i="box"){let e=i==="cone"?$n.bottle:i==="cylinder"?$n.bowl:i==="diamond"?$n.shield:$n.panel;return ui(e)}var Rn=Math.PI*2,nh=.84,Zi=128;function _s(i){let e=new Uint8Array(Zi*Zi*4);for(let n=0;n<Zi;n++)for(let s=0;s<Zi;s++){let r=(s+.5)/Zi,o=(n+.5)/Zi,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/nh,1),Math.min(o/nh,1),s,n),l=(s+n*Zi)*4;for(let c=0;c<3;c++)e[l+c]=Be.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new _i(e,Zi,Zi);return t.colorSpace=It,t.generateMipmaps=!0,t.minFilter=un,t.magFilter=Kt,t.needsUpdate=!0,t}function or(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function nt(i,e,t=!1){let n=i.index?i.toNonIndexed():i,s=new Oe(e),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*nh,r.getY(l)*nh):r.setXY(l,.95,.95);return n.setAttribute("color",new mt(a,3)),n}function vs(i,e,t,n,s,r,o,a=0){return{id:i,name:e,collisionGeo:n,mass:t,geo:qc(s),material:new Zt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Qm(i,e,t){let n=i/2,s=e/2,r=new ki;return r.moveTo(-n+t,-s),r.lineTo(n-t,-s),r.quadraticCurveTo(n,-s,n,-s+t),r.lineTo(n,s-t),r.quadraticCurveTo(n,s,n-t,s),r.lineTo(-n+t,s),r.quadraticCurveTo(-n,s,-n,s-t),r.lineTo(-n,-s+t),r.quadraticCurveTo(-n,-s,-n+t,-s),r}function xs(i,e,t,n,s){return new qs(Qm(i,e,n),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ys(i,e,t=n=>n){let n=[],s=[],r=[];for(let h=0;h<i.length;h++){let[u,d]=i[h];for(let f=0;f<=e;f++){let m=Rn*f/e,x=t(u,d,m,h);if(n.push(x*Math.sin(m),d,x*Math.cos(m)),s.push(f/e,h/(i.length-1)),h===i.length-1||f===e)continue;let g=h*(e+1)+f,p=g+e+1;u>0&&r.push(g,g+1,p),i[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new ht;o.setAttribute("position",new Pe(n,3)),o.setAttribute("uv",new Pe(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let h=0;h<i.length;h++){let u=h*(e+1),d=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function Ta(i,e){let t=[];for(let[n,s]of i){if(n===0){t.push(new _(0,s,0));continue}for(let r=0;r<e;r++){let o=Rn*r/e;t.push(new _(n*Math.sin(o),s,n*Math.cos(o)))}}return new Yi(t)}function oS(){let t=new ia(Qm(.098,.185,.008),3).translate(0,-.001,.0116),n=t.attributes.position;for(let l=0;l<n.count;l++){let c=Be.clamp(n.getX(l)/.098+.5,0,1),h=Be.clamp((n.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=_s((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Rn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[nt(xs(.106,.207,.013,.011,.0019),8425890),nt(xs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),nt(xs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),nt(t,16777215,!0),nt(xs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),nt(new et(.0036,.024,.004).translate(.055,.029,0),11714250),nt(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),nt(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(nt(new wt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(nt(new Tn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(nt(new Tn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Yi([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new _(c,h,l))));return vs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function aS(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ys(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=_s((a,l,c,h)=>{let u=Rn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...e.map(v=>Math.exp(-(((d-v+.035*Math.cos(u))/.009)**2)))),x=f**3*m,g=or(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+p,76+24*f+70*x+p,24+11*f+52*x+p*.8]}),o=Ta([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return vs("bread","Baguette de pain",.27,o,[nt(s,16777215,!0)],r,.9)}function lS(){let i=_s((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*or(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),e=ys([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ys([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[nt(e,16777215,!0),nt(t,11056059),nt(new wt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),nt(new wt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Rn*r/5;n.push(nt(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=Ta([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return vs("wheel","Roue",1.8,s,n,i,.64,.23)}function cS(){let i=_s((r,o,a,l)=>{let c=or(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Rn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=ys([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Vn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Rn*l/5;return new _(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let s=new Yi(n);return vs("cup","Tasse",.39,s,[nt(e,16777215,!0),nt(t,15785922)],i,.37)}function hS(){let i=ys([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=_s((s,r,o,a)=>{let l=9*or(o,a),c=11*Math.cos(s*Rn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Rn*48+s*Rn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Rn*4);return[h,h*1.13,h*1.24]}),t=[nt(i,16777215,!0),nt(new Jr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),nt(new Tn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),nt(new Tn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),nt(new wt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),nt(new Tn(.008,12).translate(0,.035,.0336),15633202)],n=Ta([[.033,-.143],[.054,.133]],6);return vs("flashlight","Lampe torche",.31,n,t,e,.46,.28)}function uS(){let i=ys([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=_s((r,o,a,l)=>{let c=10*or(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Rn*r*2));if(e[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Rn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),n=[nt(i,16777215,!0),nt(new Tn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),nt(new Jr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),nt(new Tn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=Ta([[.069,-.112],[.069,.109]],6);return vs("soda","Canette de soda",.35,s,n,t,.42,.27)}function dS(){let i=ys([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=_s((s,r,o,a)=>{let l=15*or(o,a),c=8*Math.cos(s*Rn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[nt(i,16777215,!0),nt(xs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),nt(new Tn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=Ta([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return vs("cone","C\xF4ne de chantier",.58,n,t,e,.78)}function fS(){let i=_s((s,r,o,a)=>{let l=8*or(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ys([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[nt(xs(.138,.22,.061,.016,.004),14788675),nt(xs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),nt(new Vi(.106,.174).translate(0,-.004,.0395),16777215,!0),nt(e,2502456),nt(new wt(.014,.017,.016,10).translate(.04,.117,.001),2503482),nt(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),nt(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),nt(new Tn(.004,8).translate(.04,.066,.0397),15817792),nt(new Tn(.004,8).translate(-.04,.066,.0397),7903100),nt(xs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new _(s,l,o),new _(r,l,o),new _(r,l,a),new _(s,l,a)]);return vs("radio","Talkie-walkie",.43,new Yi(n),t,i,.61,.08)}function eg(){return[oS(),aS(),lS(),cS(),hS(),uS(),dS(),fS()]}var xd=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var lE=xd.length-1,tg=Math.min(...xd.map(i=>i[1])),ng=Math.max(...xd.map(i=>i[1])),cE=new _(0,0,(tg+ng)/2),ig=new _(.047,.027,(ng-tg)/2);var dE=new rt,fE=new _,pE=new _,mE=new it;var gE=new _,xE=new _;var yE=new _;var _E=new _,vE=new _,bE=new _,ME=new Fn,SE=new _,wE=new _,TE=new _,EE=new _,AE=new _;function Ea(i,e=0){let t=i.attributes.position,n=[],s=[],r=new Set;for(let m=0;m<t.count;m++){let x=new _().fromBufferAttribute(t,m),g=x.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),n.push(x))}for(let m=0;m<(i.index?.count??t.count);m+=3){let x=y=>new _().fromBufferAttribute(t,i.index?i.index.getX(y):y),g=x(m),p=x(m+1),v=x(m+2),M=new Fn(g,p,v).getNormal(new _);M.lengthSq()>.1&&s.push({a:g,b:p,c:v,n:M})}let o=e||Math.max(...n.map(m=>m.length())),{x:a,y:l,z:c}=new Ht().setFromPoints(n).getSize(new _),h=Math.max(1e-4,e**2*.4),u=e?new _().setScalar(1/h):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=m=>{let x=[];for(let g of m)g.lengthSq()>.5&&!x.some(p=>Math.abs(p.dot(g))>.9999)&&x.push(g);return x};return{vertices:n,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:d,normals:e?[]:f(s.map(m=>m.n)),edges:e?[]:f(s.flatMap(m=>[new _().subVectors(m.b,m.a).normalize(),new _().subVectors(m.c,m.b).normalize(),new _().subVectors(m.a,m.c).normalize()]))}}var CE=new _,RE=new _,IE=new _,PE=new _,LE=new rt,DE=new rt,UE=new _;function sg(i){return Ea(new et(i.x*2,i.y*2,i.z*2))}var NE=new _;var yd=Ea(new Jn(1,0).scale(...ig)),FE={mesh:{position:new _,quaternion:new rt},shape:yd,radius:yd.radius,precise:!0},OE=new _,BE=new _,zE=new _,kE=new _,VE=new _,GE=new _,HE=new _,WE=yd.vertices.map(()=>new _);var XE=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)];var qE=new _,YE=new _,ZE=new _,jE=new rt,JE=new rt,KE=new rt;var $E=new _,QE=new _,eA=new _,tA=new _;var nA=new _;var iA=new _,sA=new _,rA=new _,oA=new _,aA=new _,lA=new _,cA=new _;var hA={mesh:{position:null,quaternion:new rt},shape:{sphereRadius:0,normals:[],edges:[]}};var Bt=(i,e,t,n)=>({xMin:i,xMax:e,zMin:t,zMax:n}),dA=Bt(-24,24,-51,7);var rg={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Bt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Bt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Bt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Bt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Bt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Bt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Bt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Bt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Bt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Bt(9,23,-48,-37),sign:[16,-38.2]}},fA=[Bt(-9,-6,-51,7),Bt(6,9,-51,7),Bt(-24,24,-8,-5),Bt(-24,24,-27,-23),Bt(9,23,-37,-34)],pA=[{name:"Glace",bounds:rg.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:rg.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Bt(-9,9,-51,7)},{name:"Sol ouest",bounds:Bt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Bt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Bt(-24,-23,-51,7)},{name:"Sol est",bounds:Bt(9,23,-51,-48)},{name:"Sol est",bounds:Bt(9,23,-37,7)},{name:"Bordure est",bounds:Bt(23,24,-51,7)}];var pS=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:i})));var mA={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function og(){let i=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new bi(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ys(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new bi(.6,2),"#dbab58",.6,3.7]].map(([e,t,n,s,r])=>({name:e,geo:t,mass:r,shape:Ea(t,s),material:new Zt({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:sg(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));i.length=7;for(let{collisionGeo:e,sphere:t=0,...n}of eg()){let s=Ea(e??n.geo,t);i.push({...n,shape:s,lowShape:s})}return i}var mS=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Aa=null,gS=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Ca(i){return typeof i=="string"&&gS.has(i.replace(/^custom-model-game-/,""))}function lg(i){let e=i?.parts;return Ca(i?.id)||Ca(i?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Ca(t?.assetId))}function cg(){if(Aa)return Aa;let i=og(),e=mS;return Aa=new Map(i.flatMap((t,n)=>[[e[n],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Aa.set("chrome-sphere",{geometry:new bi(.54,2),material:new Zt({color:"#c8e6ed",metalness:1,roughness:.16})}),Aa}function ih(i){return typeof i=="string"&&cg().has(i)}function _d(i){return cg().get(i)??null}function xS(i,e,t=[0,0,0],n=[1,1,1],s=[0,0,0]){return{name:i,shape:"asset",assetId:e,position:t,scale:n,rotation:s,color:"#ffffff",surface:"plain"}}function ag(i,e,t="prop",n={}){return{id:"custom-model-game-"+i,name:e,assetId:i,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...n},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[xS(e,i)]}}function hg(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>ag(e,t)),ag("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Md=/^[a-z0-9-]{1,40}$/i,Td={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function sh(i,e){if(!i)return null;let t=e==="trigger"?i.phase==="exit"?"exit":"enter":i.phase==="use"?"use":null;if(!t)return null;let n=typeof i.door=="string"&&Md.test(i.door)?i.door:null,s=typeof i.light=="string"&&Md.test(i.light)?i.light:null,r=Object.hasOwn(Td,i.sound)?i.sound:null,o=t==="use"&&fg.test(i.receiver??"")?i.receiver:null;return n||s||r||o?{phase:t,...o?{receiver:o}:{},...n?{door:n,doorState:["open","close","toggle"].includes(i.doorState)||e==="trigger"&&i.doorState==="hold"?i.doorState:"open"}:{},...n&&e==="trigger"&&i.doorState==="hold"?{doorDelay:ar(i.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(i.lightState)?i.lightState:"on",lightColor:pg.test(i.lightColor??"")?i.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:ar(i.soundVolume,0,1,.6)}:{}}:null}var Ed="gorilla-lab-models-v1",Tt=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),yS=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,fo=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),rh=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),lr=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),Ad=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),ar=(i,e,t,n)=>Number.isFinite(i)?Be.clamp(i,e,t):n;function Ia(i){return{gravity:ar(i?.physics?.gravity,0,2.5,1),bounce:ar(i?.physics?.bounce,0,1.65,1)}}function po(i){return{projection:i?.uv?.projection==="metric"?"metric":"native",repeat:ar(i?.uv?.repeat,.01,100,1),angle:ar(i?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>ar(i?.uv?.offset?.[t],-100,100,0))}}var Pa=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),fg=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,pg=/^#[a-f\d]{6}$/i;function vd(i,e){return typeof i=="string"&&i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function bs(i,e,t,n){return[0,1,2].map(s=>Number.isFinite(i?.[s])?Be.clamp(i[s],t,n):e)}function ug(i){if(i==="arena")return i;if(typeof i!="string"||i.length>700)return null;try{let e=new URL(i);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var Sd=new Set(["box","sphere","capsule","convex"]);function _S(i){if(i?.mode==="box")return{mode:"box",center:bs(i.center,0,-6,6),size:bs(i.size,.5,.025,12)};let e=Math.round(Be.clamp(Number.isFinite(i?.precision)?i.precision:48,8,96));return i?.mode==="custom"?{mode:"custom",shape:Sd.has(i.shape)?i.shape:"box",center:bs(i.center,0,-6,6),size:bs(i.size,.5,.025,12),rotation:bs(i.rotation,0,-360,360),precision:e}:i?.mode==="auto"&&Sd.has(i.shape)?{mode:"auto",shape:i.shape,precision:e}:{mode:"auto"}}function Ti(i){if(i?.version!==1||!Array.isArray(i.models)||i.models.length>Tt.models||JSON.stringify(i).length>Tt.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=i.models.filter(n=>!lg(n)).map(n=>{if(typeof n?.id!="string"||!fg.test(n.id)||e.has(n.id)||!Array.isArray(n.parts)||n.parts.length>Tt.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(n.id);let s=new Set;return{id:n.id,name:vd(n.name,"Mod\xE8le sans nom"),kind:n.kind==="avatar"?"avatar":n.kind==="structure"?"structure":"prop",...n.kind==="avatar"?{avatarRig:ya(n.avatarRig)}:{},...ih(n.assetId)?{assetId:n.assetId}:{},inGame:n.kind!=="avatar"&&n.inGame===!0,properties:{...Object.fromEntries(Object.entries(Pa).map(([r,o])=>[r,typeof n.properties?.[r]=="boolean"?n.properties[r]:o])),...n.kind!=="structure"&&n.kind!=="avatar"&&n.properties?.drivable===!0?{drivable:!0}:{}},hitbox:_S(n?.hitbox),...n.physics?{physics:Ia(n)}:{},...n.partCollisions===!0?{partCollisions:!0}:{},parts:n.parts.filter(r=>!Ca(r?.assetId)).map((r,o)=>{let a=va(r?.effect),l=typeof r?.actionId=="string"&&Md.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=n.kind==="structure"?sh(r?.reaction,r?.zone):null,h=n.kind==="structure"&&r?.zone!=="trigger"?xa(r?.hinge):null;return{name:vd(r?.name,`Pi\xE8ce ${o+1}`),...h?{hinge:h}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(gs,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Tt.parts?{group:r.group}:{},shape:r?.shape==="asset"&&ih(r?.assetId)?"asset":Object.hasOwn(fo,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&ih(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:ui(r?.profile)}:{},position:bs(r?.position,0,-3,3),rotation:bs(r?.rotation,0,-360,360),scale:bs(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&pg.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(Ad,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:vd(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(lr,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&ug(r.portal)?{portal:ug(r.portal)}:{},...r?.uv?{uv:po(r)}:{},surface:Object.hasOwn(rh,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Tt.textureBytes&&yS.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof i.avatarId=="string"&&_a(t.find(n=>n.id===i.avatarId))?i.avatarId:null}}function mg(i){try{let e=(i??globalThis.localStorage)?.getItem(Ed);if(e&&e.length<=Tt.fileBytes)return Ti(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function vS(i){switch(i){case"tetrahedron":return new Ys(Math.sqrt(3)/2);case"sphere":return new kn(.5,20,12);case"cylinder":return new wt(.5,.5,1,20);case"cone":return new Yo(.5,1,20);case"torus":return new Vn(.365,.135,8,24);case"capsule":return new qr(.28,.44,6,16);case"diamond":return new Jn(.5);default:return new et(1,1,1)}}var gg=Object.keys(rh),tn=64,Ra=4,xg=2,wi;function yg(i,e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453,s=n-Math.floor(n);switch(i){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function _g(){if(wi)return wi;let i=tn*Ra,e=tn*xg,t=new Uint8Array(i*e*4);for(let n=0;n<e;n++)for(let s=0;s<i;s++){let r=Math.floor(n/tn)*Ra+Math.floor(s/tn),o=yg(gg[r],s%tn,n%tn),a=(n*i+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return wi=new _i(t,i,e),wi.colorSpace=It,wi.magFilter=Kt,wi.minFilter=un,wi.generateMipmaps=!0,wi.needsUpdate=!0,wi}var bd=new Map,di;function bS(){if(di)return di;let i=new Uint8Array(tn**2*4);for(let e=0;e<tn;e++)for(let t=0;t<tn;t++){let n=t>>3,s=e>>3,r=(n*13+s*17+n*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;i.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*tn+t)*4)}return di=new _i(i,tn,tn),di.colorSpace=It,di.wrapS=di.wrapT=wn,di.magFilter=Kt,di.minFilter=un,di.generateMipmaps=!0,di.needsUpdate=!0,di}function dg(i){if(bd.has(i))return bd.get(i);let e=new Uint8Array(tn*tn*4);for(let n=0;n<tn;n++)for(let s=0;s<tn;s++){let r=yg(i,s,n),o=(n*tn+s)*4;e.set([r,r,r,255],o)}let t=new _i(e,tn,tn);return t.colorSpace=It,t.wrapS=t.wrapT=wn,t.magFilter=Kt,t.minFilter=un,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,bd.set(i,t),t}function oh(i){return!!(i?.effect||i?.texture||i?.uv||i?.surface==="windows"||i?.shape==="asset"||i?.finish&&i.finish!=="original")}function MS(i,e,t){let{projection:n,repeat:s,angle:r,offset:o}=po(e),a=Be.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:h,normal:u,uv:d}=i.attributes,f=new _,m=new _;for(let x=0;x<h.count;x++){let g=d.getX(x),p=d.getY(x);if(n==="metric"){f.fromBufferAttribute(h,x).multiply(t),m.fromBufferAttribute(u,x);let v=Math.abs(m.x),M=Math.abs(m.y),y=Math.abs(m.z);v>=M&&v>=y?(g=f.z,p=f.y):M>=y?(g=f.x,p=f.z):(g=f.x,p=f.y)}d.setXY(x,(g*l-p*c)*s+o[0],(g*c+p*l)*s+o[1])}}function cr(i,e=new _(...i.scale)){let t=i.shape==="asset"?_d(i.assetId):null,n=i.shape==="custom"?th(i.profile):t?.geometry?.clone()??vS(i.shape),s=n.index?n.toNonIndexed():n;s!==n&&n.dispose(),s.attributes.uv||s.setAttribute("uv",new Pe(new Float32Array(s.attributes.position.count*2),2)),i.uv&&MS(s,i,e);let r=i.rotation.map(Be.degToRad);s.scale(...i.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...i.position);let o=new Oe(i.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,h=gg.indexOf(i.surface),u=h%Ra,d=Math.floor(h/Ra),f=s.attributes.color;for(let m=0;m<a;m++)i.shape==="asset"&&f?(l[m*3]=f.getX(m)*o.r,l[m*3+1]=f.getY(m)*o.g,l[m*3+2]=f.getZ(m)*o.b):o.toArray(l,m*3),i.shape!=="asset"&&!i.texture&&!i.uv&&i.surface!=="windows"&&c.setXY(m,(u+.05+c.getX(m)*.9)/Ra,(d+.05+c.getY(m)*.9)/xg);return s.setAttribute("color",new mt(l,3)),s}function ah(i){return Jm(SS(i),i?.effect)}function SS(i){let e=i?.shape==="asset"?_d(i.assetId):null,t=lr[i?.finish];if(e?.material){let o=e.material.clone();if(t&&i.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),i.texture){o.map?.dispose();let a=new $r().load(i.texture);a.colorSpace=It,a.wrapS=a.wrapT=wn,o.map=a}return i.uv&&o.map&&(o.map.wrapS=o.map.wrapT=wn),i.color&&i.color!=="#ffffff"&&o.color?.multiply(new Oe(i.color)),o.needsUpdate=!0,o}let{roughness:n,metalness:s}=t??lr.original;if(i?.surface==="windows"&&!i.texture)return new Zt({vertexColors:!0,map:dg("windows"),emissive:"#ffffff",emissiveMap:bS(),emissiveIntensity:1.3,roughness:n,metalness:s});if(!i?.texture)return new Zt({vertexColors:!0,map:i?.uv?dg(i.surface):_g(),roughness:n,metalness:s});let r=new $r().load(i.texture);return r.colorSpace=It,r.wrapS=r.wrapT=wn,new Zt({vertexColors:!0,map:r,roughness:n,metalness:s})}function vg(i){return i?.parts?.some(oh)?i.parts.map(ah):new Zt({vertexColors:!0,map:_g(),roughness:.68})}function lh(i){for(let e of Array.isArray(i)?i:[i]){if(!e)return;e.map&&e.map!==wi&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function wd(i,e=null){let t=i.map(s=>{if(!e||s.uv?.projection!=="metric")return cr(s);let r=new Yt(...s.rotation.map(Be.degToRad),"ZYX"),o=new _(...s.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(r).multiply(e).length())));return cr(s,o)}),n=qc(t,i.some(oh));return t.forEach(s=>s.dispose()),n.center(),n.computeBoundingBox(),n}function bg(i,e=null){let t=wd(i.parts),n=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&i.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=wd(i.parts,e.clone().divide(n))),t.scale(1/n.x,1/n.y,1/n.z),t.computeBoundingBox(),t}function ch(i){let e=new Ht;for(let t of i.parts??[]){let n=cr(t);n.computeBoundingBox(),e.union(n.boundingBox),n.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function ji(i){let e=ch(i),t=e.getCenter(new _),n=e.getSize(new _),s=i.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Sd.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Be.clamp(s.precision,8,96):48,center:r?new _(...s.center):t,size:r?new _(...s.size):n,rotation:r?new _(...s.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:n}}function wS(i,e){let t=i.attributes.position,n=[],s=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),h=c.toArray().map(u=>u.toFixed(4)).join(",");s.has(h)||(s.add(h),n.push(c))}if(n.length<=e)return n;let r=[n[0]],o=new Set([0]),a=n.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let h=0;h<n.length;h++)!o.has(h)&&a[h]>c&&(l=h,c=a[h]);if(l<0)break;o.add(l),r.push(n[l]);for(let h=0;h<n.length;h++)a[h]=Math.min(a[h],n[h].distanceToSquared(n[l]))}return r}function Mg(i,e=null){let t=ji(i),n=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((u,d)=>d!==a)))/2,c=Math.max(0,o-2*l),h=t.shape==="capsule"&&c>1e-5?new qr(l,c,Math.max(2,Math.round(n/8)),n):new kn(l,n,Math.max(6,Math.floor(n/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&h.rotateZ(-Math.PI/2),a===2&&h.rotateX(Math.PI/2)),h.scale(1/s.x,1/s.y,1/s.z),h}if(t.shape==="convex"&&i.parts?.length){let s=wd(i.parts),r=wS(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new Yi(r),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new et(1,1,1)}function Sg(i,e=null){if(!i.partCollisions||i.kind!=="structure")return null;if(i.properties?.collidable===!1)return[];let t=ch(i),n=t.getCenter(new _),s=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new _(1,1,1);return i.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=cr(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new _).sub(n).multiply(r),size:l.getSize(new _).multiply(r).max(new _(.01,.01,.01))};return a.dispose(),[c]})}var hr=new Wi,fn=new _,Ms=new _,Ut=new rt,wg={X:new _(1,0,0),Y:new _(0,1,0),Z:new _(0,0,1)},Cd={type:"change"},Tg={type:"mouseDown",mode:null},Eg={type:"mouseUp",mode:null},Ag={type:"objectChange"},ph=class extends Ks{constructor(e,t=null){super(void 0,t);let n=new Id(this);this._root=n;let s=new Pd;this._gizmo=s,n.add(s);let r=new Ld;this._plane=r,n.add(r);let o=this;function a(M,y){let T=y;Object.defineProperty(o,M,{get:function(){return T!==void 0?T:y},set:function(A){T!==A&&(T=A,r[M]=A,s[M]=A,o.dispatchEvent({type:M+"-changed",value:A}),o.dispatchEvent(Cd))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new _,c=new _,h=new rt,u=new rt,d=new _,f=new rt,m=new _,x=new _,g=new _,p=0,v=new _;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",p),a("eye",v),this._offset=new _,this._startNorm=new _,this._endNorm=new _,this._cameraScale=new _,this._parentPosition=new _,this._parentQuaternion=new rt,this._parentQuaternionInv=new rt,this._parentScale=new _,this._worldScaleStart=new _,this._worldQuaternionInv=new rt,this._worldScale=new _,this._positionStart=new _,this._quaternionStart=new rt,this._scaleStart=new _,this._getPointer=TS.bind(this),this._onPointerDown=AS.bind(this),this._onPointerHover=ES.bind(this),this._onPointerMove=CS.bind(this),this._onPointerUp=RS.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&hr.setFromCamera(e,this.camera);let t=Rd(this._gizmo.picker[this.mode],hr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&hr.setFromCamera(e,this.camera);let t=Rd(this._plane,hr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Tg.mode=this.mode,this.dispatchEvent(Tg)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&hr.setFromCamera(e,this.camera);let o=Rd(this._plane,hr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ut.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(fn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(fn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ms.set(a,a,a)}else fn.copy(this.pointStart),Ms.copy(this.pointEnd),fn.applyQuaternion(this._worldQuaternionInv),Ms.applyQuaternion(this._worldQuaternionInv),Ms.divide(fn),t.search("X")===-1&&(Ms.x=1),t.search("Y")===-1&&(Ms.y=1),t.search("Z")===-1&&(Ms.z=1);s.scale.copy(this._scaleStart).multiply(Ms),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(fn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(fn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(wg[t]),fn.copy(wg[t]),r==="local"&&fn.applyQuaternion(this.worldQuaternion),fn.cross(this.eye),fn.length()===0?l=!0:this.rotationAngle=this._offset.dot(fn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Cd),this.dispatchEvent(Ag)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Eg.mode=this.mode,this.dispatchEvent(Eg)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Cd),this.dispatchEvent(Ag),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function TS(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function ES(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function AS(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function CS(i){this.enabled&&this.pointerMove(this._getPointer(i))}function RS(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Rd(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var hh=new Yt,Et=new _(0,1,0),Cg=new _(0,0,0),Rg=new it,uh=new rt,fh=new rt,Ei=new _,Ig=new it,Ua=new _(1,0,0),ur=new _(0,1,0),Na=new _(0,0,1),dh=new _,La=new _,Da=new _,Id=class extends Pt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Pd=class extends Pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new rn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new On({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new wt(0,.04,.1,12);x.translate(0,.05,0);let g=new et(.08,.08,.08);g.translate(0,.04,0);let p=new ht;p.setAttribute("position",new Pe([0,0,0,1,0,0],3));let v=new wt(.0075,.0075,.5,3);v.translate(0,.25,0);function M(H,V){let ne=new Vn(H,.0075,3,64,V*Math.PI*2);return ne.rotateY(Math.PI/2),ne.rotateX(Math.PI/2),ne}function y(){let H=new ht;return H.setAttribute("position",new Pe([0,0,0,1,1,1],3)),H}let T={X:[[new ye(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new ye(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new ye(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ye(x,o),[0,.5,0]],[new ye(x,o),[0,-.5,0],[Math.PI,0,0]],[new ye(v,o)]],Z:[[new ye(x,a),[0,0,.5],[Math.PI/2,0,0]],[new ye(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ye(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ye(new Jn(.1,0),u),[0,0,0]]],XY:[[new ye(new et(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ye(new et(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new et(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ye(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ye(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ye(new wt(.2,0,.6,4),n),[0,.3,0]],[new ye(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ye(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ye(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ye(new Jn(.2,0),n)]],XY:[[new ye(new et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ye(new et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new ye(new Jn(.01,2),s),null,null,null,"helper"]],END:[[new ye(new Jn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Bn(y(),s),null,null,null,"helper"]],X:[[new Bn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Bn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Bn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new ye(M(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new ye(M(.5,.5),r)]],Y:[[new ye(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ye(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ye(M(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Bn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new ye(new kn(.25,10,8),n)]],X:[[new ye(new Vn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ye(new Vn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ye(new Vn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ye(new Vn(.75,.1,2,24),n)]]},L={X:[[new ye(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new ye(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ye(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ye(g,o),[0,.5,0]],[new ye(v,o)],[new ye(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ye(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ye(v,a),[0,0,0],[Math.PI/2,0,0]],[new ye(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ye(new et(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ye(new et(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new et(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ye(new et(.1,.1,.1),u)]]},B={X:[[new ye(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ye(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ye(new wt(.2,0,.6,4),n),[0,.3,0]],[new ye(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ye(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ye(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ye(new et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ye(new et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ye(new et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ye(new et(.2,.2,.2),n),[0,0,0]]]},X={X:[[new Bn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Bn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Bn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function k(H){let V=new Pt;for(let ne in H)for(let q=H[ne].length;q--;){let re=H[ne][q][0].clone(),xe=H[ne][q][1],we=H[ne][q][2],Fe=H[ne][q][3],Ye=H[ne][q][4];re.name=ne,re.tag=Ye,xe&&re.position.set(xe[0],xe[1],xe[2]),we&&re.rotation.set(we[0],we[1],we[2]),Fe&&re.scale.set(Fe[0],Fe[1],Fe[2]),re.updateMatrix();let Ke=re.geometry.clone();Ke.applyMatrix4(re.matrix),re.geometry=Ke,re.renderOrder=1/0,re.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.set(1,1,1),V.add(re)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(T)),this.add(this.gizmo.rotate=k(D)),this.add(this.gizmo.scale=k(L)),this.add(this.picker.translate=k(A)),this.add(this.picker.rotate=k(b)),this.add(this.picker.scale=k(B)),this.add(this.helper.translate=k(P)),this.add(this.helper.rotate=k(w)),this.add(this.helper.scale=k(X)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:fh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ut.setFromEuler(hh.set(0,0,0)),o.quaternion.copy(n).multiply(Ut),Math.abs(Et.copy(Ua).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ut.setFromEuler(hh.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ut),Math.abs(Et.copy(ur).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ut.setFromEuler(hh.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ut),Math.abs(Et.copy(Na).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ut.setFromEuler(hh.set(0,Math.PI/2,0)),Et.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Rg.lookAt(Cg,Et,ur)),o.quaternion.multiply(Ut),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),fn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),fn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(fn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Et.copy(Ua).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Et.copy(ur).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Et.copy(Na).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Et.copy(Na).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Et.copy(Ua).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Et.copy(ur).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(uh.copy(n),Et.copy(this.eye).applyQuaternion(Ut.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Rg.lookAt(this.eye,Cg,ur)),o.name==="X"&&(Ut.setFromAxisAngle(Ua,Math.atan2(-Et.y,Et.z)),Ut.multiplyQuaternions(uh,Ut),o.quaternion.copy(Ut)),o.name==="Y"&&(Ut.setFromAxisAngle(ur,Math.atan2(Et.x,Et.z)),Ut.multiplyQuaternions(uh,Ut),o.quaternion.copy(Ut)),o.name==="Z"&&(Ut.setFromAxisAngle(Na,Math.atan2(Et.y,Et.x)),Ut.multiplyQuaternions(uh,Ut),o.quaternion.copy(Ut))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Ld=class extends ye{constructor(){super(new Vi(1e5,1e5,2,2),new rn({visible:!1,wireframe:!0,side:kt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),dh.copy(Ua).applyQuaternion(t==="local"?this.worldQuaternion:fh),La.copy(ur).applyQuaternion(t==="local"?this.worldQuaternion:fh),Da.copy(Na).applyQuaternion(t==="local"?this.worldQuaternion:fh),Et.copy(La),this.mode){case"translate":case"scale":switch(this.axis){case"X":Et.copy(this.eye).cross(dh),Ei.copy(dh).cross(Et);break;case"Y":Et.copy(this.eye).cross(La),Ei.copy(La).cross(Et);break;case"Z":Et.copy(this.eye).cross(Da),Ei.copy(Da).cross(Et);break;case"XY":Ei.copy(Da);break;case"YZ":Ei.copy(dh);break;case"XZ":Et.copy(Da),Ei.copy(La);break;case"XYZ":case"E":Ei.set(0,0,0);break}break;case"rotate":default:Ei.set(0,0,0)}Ei.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ig.lookAt(fn.set(0,0,0),Ei,Et),this.quaternion.setFromRotationMatrix(Ig)),super.updateMatrixWorld(e)}};var Pg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},dr=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Fd(e)}),this.register(function(e){return new Od(e)}),this.register(function(e){return new Vd(e)}),this.register(function(e){return new Gd(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new Bd(e)}),this.register(function(e){return new zd(e)}),this.register(function(e){return new kd(e)}),this.register(function(e){return new Xd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Zd(e)}),this.register(function(e){return new jd(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new Nd,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},lt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Dd="KHR_mesh_quantization",Hn={};Hn[hn]=lt.NEAREST;Hn[ic]=lt.NEAREST_MIPMAP_NEAREST;Hn[er]=lt.NEAREST_MIPMAP_LINEAR;Hn[Kt]=lt.LINEAR;Hn[eo]=lt.LINEAR_MIPMAP_NEAREST;Hn[un]=lt.LINEAR_MIPMAP_LINEAR;Hn[pi]=lt.CLAMP_TO_EDGE;Hn[wn]=lt.REPEAT;Hn[Nr]=lt.MIRRORED_REPEAT;var Lg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},IS=new Oe,Dg=12,PS=1179937895,LS=2,Ug=8,DS=1313821514,US=5130562;function Fa(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function NS(i){return new TextEncoder().encode(i).buffer}function FS(i){return Fa(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function OS(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Be.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Fg(i){return Math.ceil(i/4)*4}function Ud(i,e=0){let t=Fg(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Ng(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function BS(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var Nd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r180"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){let f=Ud(d.result),m=new DataView(new ArrayBuffer(Ug));m.setUint32(0,f.byteLength,!0),m.setUint32(4,US,!0);let x=Ud(NS(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(Ug));g.setUint32(0,x.byteLength,!0),g.setUint32(4,DS,!0);let p=new ArrayBuffer(Dg),v=new DataView(p);v.setUint32(0,PS,!0),v.setUint32(4,LS,!0);let M=Dg+g.byteLength+x.byteLength+m.byteLength+f.byteLength;v.setUint32(8,M,!0);let y=new Blob([p,g,x,m,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(y),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new _;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new _;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===It?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Ws&&(e=await this.decompressTextureAsync(e)),t instanceof Ws&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=Ng();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let f=n(e),m=c.getImageData(0,0,o,a).data;for(let x=2;x<m.length;x+=4)h.data[x]=f(m[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let f=n(t),m=c.getImageData(0,0,o,a).data;for(let x=1;x<m.length;x+=4)h.data[x]=f(m[x]/256)*256}c.putImageData(h,0,0);let d=(e||t).clone();return d.source=new ls(l),d.colorSpace=ci,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case lt.BYTE:case lt.UNSIGNED_BYTE:a=1;break;case lt.SHORT:case lt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===lt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Fg(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let m=n;m<n+s;m++){for(let x=0;x<e.itemSize;x++){let g;e.itemSize>4?g=e.array[m*e.itemSize+x]:(x===0?g=e.getX(m):x===1?g=e.getY(m):x===2?g=e.getZ(m):x===3&&(g=e.getW(m)),e.normalized===!0&&(g=Be.normalize(g,e.array))),t===lt.FLOAT?h.setFloat32(u,g,!0):t===lt.INT?h.setInt32(u,g,!0):t===lt.UNSIGNED_INT?h.setUint32(u,g,!0):t===lt.SHORT?h.setInt16(u,g,!0):t===lt.UNSIGNED_SHORT?h.setUint16(u,g,!0):t===lt.BYTE?h.setInt8(u,g):t===lt.UNSIGNED_BYTE&&h.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}let d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===lt.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Ud(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=lt.FLOAT;else if(e.array.constructor===Int32Array)a=lt.INT;else if(e.array.constructor===Uint32Array)a=lt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=lt.SHORT;else if(e.array.constructor===Uint16Array)a=lt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=lt.BYTE;else if(e.array.constructor===Uint8Array)a=lt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=OS(e,n,s),c;t!==void 0&&(c=e===t.index?lt.ELEMENT_ARRAY_BUFFER:lt.ARRAY_BUFFER);let h=this.processBufferView(e,a,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let d={mimeType:s},f=Ng();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let m=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),e.data!==void 0){t!==vn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let g=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<g.length;p+=4)g[p+0]=e.data[p+0],g[p+1]=e.data[p+1],g[p+2]=e.data[p+2],g[p+3]=e.data[p+3];m.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(BS(f,s).then(g=>r.processBufferViewImage(g)).then(g=>{d.bufferView=g})):d.uri=Vr.getDataURL(f,s);let x=a.images.push(d)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Hn[e.magFilter],minFilter:Hn[e.minFilter],wrapS:Hn[e.wrapS],wrapT:Hn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Ws&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});let l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(Fa(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){let a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){let a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===kt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});let o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,T=e.material.length;y<T;y++)s.push(e.material[y].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=lt.LINES:e.isLineLoop?a=lt.LINE_LOOP:e.isLine?a=lt.LINE_STRIP:e.isPoints?a=lt.POINTS:a=e.material.wireframe?lt.LINES:lt.TRIANGLES;let l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let T=o.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(T))){c[y]=t.attributes.get(this.getUID(T));continue}m=null;let P=T.array;y==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new mt(new Uint16Array(P),T.itemSize,T.normalized)):(P instanceof Uint32Array||P instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),m=dr.Utils.toFloat32BufferAttribute(T));let D=this.processAccessor(m||T,o);D!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,T),c[y]=D,t.attributes.set(this.getUID(T),D))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],T=[],A={};if(e.morphTargetDictionary!==void 0)for(let P in e.morphTargetDictionary)A[e.morphTargetDictionary[P]]=P;for(let P=0;P<e.morphTargetInfluences.length;++P){let D={},w=!1;for(let b in o.morphAttributes){if(b!=="position"&&b!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let L=o.morphAttributes[b][P],B=b.toUpperCase(),X=o.attributes[b];if(t.attributes.has(this.getUID(L,!0))){D[B]=t.attributes.get(this.getUID(L,!0));continue}let k=L.clone();if(!o.morphTargetsRelative)for(let H=0,V=L.count;H<V;H++)for(let ne=0;ne<L.itemSize;ne++)ne===0&&k.setX(H,L.getX(H)-X.getX(H)),ne===1&&k.setY(H,L.getY(H)-X.getY(H)),ne===2&&k.setZ(H,L.getZ(H)-X.getZ(H)),ne===3&&k.setW(H,L.getW(H)-X.getW(H));D[B]=this.processAccessor(k,o),t.attributes.set(this.getUID(X,!0),D[B])}u.push(D),y.push(e.morphTargetInfluences[P]),e.morphTargetDictionary!==void 0&&T.push(A[P])}l.weights=y,T.length>0&&(l.extras={},l.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let g=!1;if(x&&o.index===null){let y=[];for(let T=0,A=o.attributes.position.count;T<A;T++)y[T]=T;o.setIndex(y),g=!0}let p=x?e.material:[e.material],v=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,T=v.length;y<T;y++){let A={mode:a,attributes:c};if(this.serializeUserData(o,A),u.length>0&&(A.targets=u),o.index!==null){let D=this.getUID(o.index);(v[y].start!==void 0||v[y].count!==void 0)&&(D+=":"+v[y].start+":"+v[y].count),t.attributes.has(D)?A.indices=t.attributes.get(D):(A.indices=this.processAccessor(o.index,o,v[y].start,v[y].count),t.attributes.set(D,A.indices)),A.indices===null&&delete A.indices}let P=await this.processMaterialAsync(p[v[y].materialIndex]);P!==null&&(A.material=P),h.push(A)}g===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,l)});let M=n.meshes.push(l)-1;return t.meshes.set(r,M),M}detectMeshQuantization(e,t){if(this.extensionsUsed[Dd])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Pg[s]&&Pg[s].includes(n)&&(this.extensionsUsed[Dd]=!0,this.extensionsRequired[Dd]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Be.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=dr.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=xt.parseTrackName(h.name),d=xt.findNode(t,u.nodeName),f=Lg[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let m=1,x=h.values.length/h.times.length;f===Lg.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let g;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",x/=3):h.getInterpolation()===Vs?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new mt(h.times,m)),output:this.processAccessor(new mt(h.values,x)),interpolation:g}),o.push({sampler:a.length-1,target:{node:s.get(d),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new it;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new mt(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Fa(a,[0,0,0,1])||(r.rotation=a),Fa(l,[0,0,0])||(r.translation=l),Fa(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),FS(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new jn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof jn?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Fd=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},Od=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Bd=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},zd=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},kd=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Vd=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Gd=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Hd=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Wd=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(IS)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Xd=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},qd=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Yd=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Zd=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},jd=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new it,c=new _,h=new rt,u=new _;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(r,f*3),h.toArray(o,f*4),u.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new mt(r,3)),ROTATION:n.processAccessor(new mt(o,4)),SCALE:n.processAccessor(new mt(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};dr.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=xt.parseTrackName(o.name),l=xt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Or)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();let f=new u.ValueBufferType(c*u.times.length);for(let m=0;m<u.times.length;m++)f[m*c+h]=u.values[m];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,t.push(u);continue}let d=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){let m=this.insertKeyframe(u,o.times[f]);u.values[m*c+h]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){let e=new mt(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};var Og=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Jd=()=>{let i=document.createElement("canvas");return i.width=512,i.height=512,i},kg=i=>/^#[a-f0-9]{6}$/i.test(i)?i:"#8a9ca0",mo=(i,e,t)=>Math.min(t,Math.max(e,i)),zS=(i,e)=>{i.toBlob(t=>{if(!t)return;let n=document.createElement("a"),s=URL.createObjectURL(t);n.href=s,n.download=e+".png",n.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},mh=(i,e)=>{for(let t of[-512,0,512])for(let n of[-512,0,512])i.save(),i.translate(t,n),e(i),i.restore()};function Vg(i){let e=i>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var Gg="gorilla-lab-texture-shelf-v1";function kS(){try{let i=JSON.parse(localStorage.getItem(Gg)??"[]");return Array.isArray(i)?i:[]}catch{return[]}}function Bg(i,{pattern:e="grain",base:t="#667985",scale:n=1,seed:s=23}={}){let r=i.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=kg(t),r.fillRect(0,0,o,o);let a=Vg(s),l=o/Math.max(4,2*Math.round(4*n)),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let h=1/Math.sqrt(n),u={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<u;d++){let f=a()*o,m=a()*o,x=a(),g=a(),p=a();mh(r,v=>{if(e==="rock"){let M=(4+x*22)*h;c(p>.45?.09+x*.4:-.08-x*.27),v.beginPath();for(let y=0;y<6;y++){let T=y*Math.PI/3+g,A=M*(.63+.3*Math.cos(T*2+g)+.25);v.lineTo(f+Math.cos(T)*A,m+Math.sin(T)*A*.72)}v.closePath(),v.fill(),v.globalAlpha=.3,v.strokeStyle="#232633",v.lineWidth=1.4,v.stroke()}else if(e==="soil"){let M=(1+x*x*12)*h,y=v.createRadialGradient(f,m,0,f,m,M);y.addColorStop(0,p>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),v.globalAlpha=.6,v.fillStyle=y,v.fillRect(f-M,m-M,M*2,M*2)}else if(e==="grass"||e==="wood"){let M=e==="grass",y=(M?5+x*25:7+x*110)*h;v.strokeStyle=M?p>.51?"#c4d981":"#233514":p>.5?"#e9b583":"#34180c",v.globalAlpha=.08+g*.28,v.lineWidth=(.75+x*1.7)*h,v.beginPath(),v.moveTo(f,m),M?v.quadraticCurveTo(f+y*(g-.5)*.55,m-y*.58,f+y*(g-.6),m-y):v.quadraticCurveTo(f+y*.5,m+10*(g-.5),f+y,m+4*(p-.5)),v.stroke()}else{c((p>.44?1:-1)*(.07+x*.29));let M=(e==="sand"?.6+x*1.6:1+x*5)*h;v.fillRect(f,m,M,M*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/n);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)mh(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,mo(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var VS=`
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
`;function GS(){if(document.getElementById("texture-studio-styles"))return;let i=document.createElement("style");i.id="texture-studio-styles",i.textContent=VS,document.head.append(i)}async function zg(i,e){if(!i)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=i});let n=e.getContext("2d");n.clearRect(0,0,512,512),n.drawImage(t,0,0,512,512)}function Hg({initial:i=null,tint:e="#687a86",name:t="Texture",pattern:n="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){GS();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=O=>o.querySelector(O),l=a(".texture-canvas"),c=a(".texture-tile"),h=Jd(),u=Jd(),d={pattern:Og.some(([O])=>O===n)?n:"grain",base:kg(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),m=h.getContext("2d",{willReadFrequently:!0}),x=u.getContext("2d",{willReadFrequently:!0}),g=[],p=[],v=!1,M=!1,y=null,T="paint",A=null,P=null;a("#studio-title").textContent=t+" / SURFACE LAB";let D=[],w=-1;a("[data-field=base]").value=d.base;for(let O of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+O+"]").addEventListener("input",J=>{let de=J.target.value;d[O]=O==="seed"?Math.trunc(mo(Number(de)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(O)?Number(de):de});let b=O=>{a("[data-status]").textContent=O},L=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let O=c.getContext("2d");O.clearRect(0,0,256,128);for(let J=0;J<2;J++)for(let de=0;de<4;de++)O.drawImage(l,de*64,J*64,64,64)},B=()=>({base:m.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:D,editingShape:w}),X=O=>{m.putImageData(O.base,0,0),x.putImageData(O.top,0,0),D=O.shapes,w=O.editingShape,V(),L()},k=()=>{P=null,g.push(B()),g.length>16&&g.shift(),p.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},H=(O,J)=>{O.length&&(P=null,J.push(B()),X(O.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,v=!0)},V=()=>{a("[data-shape-count]").textContent=D.length+" forme"+(D.length>1?"s":""),a("[data-cmd=add-shape]").textContent=w<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(w+1),a("[data-shape-list]").replaceChildren(...D.map((O,J)=>{let de=document.createElement("div");de.className="texture-setting-row";let R=document.createElement("canvas");R.width=48,R.height=32;let ee=Math.min(48/O.width,32/O.height);R.getContext("2d").drawImage(O,0,0,O.width*ee,O.height*ee);let $=document.createElement("button"),Z=document.createElement("button");return $.textContent="Modifier "+(J+1),Z.textContent="Supprimer "+(J+1),$.onclick=()=>{k(),w=J,x.clearRect(0,0,512,512),x.drawImage(O,(512-O.width)/2,(512-O.height)/2),V(),L()},Z.onclick=()=>{k(),D=D.filter((Q,me)=>me!==J),w===J?(w=-1,x.clearRect(0,0,512,512)):w>J&&w--,V(),L()},de.append(R,$,Z),de}))};a("[data-cmd=add-shape]").onclick=()=>{let O=x.getImageData(0,0,512,512).data,J=512,de=512,R=-1,ee=-1;for(let Z=0;Z<512;Z++)for(let Q=0;Q<512;Q++)O[4*(Z*512+Q)+3]&&(J=Math.min(J,Q),de=Math.min(de,Z),R=Math.max(R,Q),ee=Math.max(ee,Z));if(R<0){b("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let $=document.createElement("canvas");$.width=R-J+1,$.height=ee-de+1,$.getContext("2d").drawImage(u,J,de,$.width,$.height,0,0,$.width,$.height),k(),D=w<0?[...D,$]:D.map((Z,Q)=>Q===w?$:Z),w=-1,x.clearRect(0,0,512,512),V(),L(),b("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let ne=()=>{let O=(Q,me,he)=>mo(Number(a("[data-field="+Q+"]").value)||0,me,he),J=Math.round(O("density",1,1e3)),de=O("minScale",1,200)/100,R=Math.max(de,O("maxScale",1,200)/100),ee=O("rotation",0,360)*Math.PI/180,$=a("[data-field=mirror]").checked,Z=Vg(d.seed);k(),d.pattern="solid",Bg(h,d);for(let Q=0;Q<J&&D.length;Q++){let me=D[Math.floor(Z()*D.length)],he=Z()*512,_e=Z()*512,Xe=Z()*ee,Ge=512*(de+Z()*(R-de))/Math.max(me.width,me.height),I=$&&Z()<.5?-1:1;mh(m,S=>{S.translate(he,_e),S.rotate(Xe),S.scale(I*Ge,Ge),S.drawImage(me,-me.width/2,-me.height/2)})}L(),b(D.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},q=O=>{let J=l.getBoundingClientRect();return{x:(O.clientX-J.left)/J.width*512,y:(O.clientY-J.top)/J.height*512}},re=O=>{let J=d.size/2,de=d.opacity;mh(x,R=>{R.save(),T==="erase"&&(R.globalCompositeOperation="destination-out"),R.globalAlpha=de;let ee=mo(d.hardness,.05,1);if(T==="stamp")R.fillStyle=d.ink,R.translate(O.x,O.y),R.rotate(Math.PI/4),R.fillRect(-J*.8,-J*.8,J*1.6,J*1.6);else{let $=R.createRadialGradient(O.x,O.y,J*ee*.85,O.x,O.y,J);if(T==="erase")$.addColorStop(0,"rgba(0,0,0,1)"),$.addColorStop(1,"rgba(0,0,0,0)");else{let Z=d.ink.match(/[\da-f]{2}/gi).map(Q=>parseInt(Q,16)).join(",");$.addColorStop(0,"rgba("+Z+",1)"),$.addColorStop(1,"rgba("+Z+",0)")}R.fillStyle=$,R.beginPath(),R.arc(O.x,O.y,J,0,2*Math.PI),R.fill()}R.restore()})},xe=(O,J)=>{let de=Math.hypot(J.x-O.x,J.y-O.y),R=Math.max(1,Math.ceil(de/Math.max(2,d.size*.18)));for(let ee=1;ee<=R;ee++)re({x:O.x+(J.x-O.x)*ee/R,y:O.y+(J.y-O.y)*ee/R})},we=O=>{let J=f.getImageData(Math.floor(mo(O.x,0,511)),Math.floor(mo(O.y,0,511)),1,1).data;d.ink="#"+[...J].slice(0,3).map(de=>de.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,b("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",O=>{if(O.button!==0||M)return;let J=q(O);if(T==="pick"){we(J);return}O.preventDefault(),k(),M=!0,y=O.pointerId,A=J,l.setPointerCapture(O.pointerId),re(J),L()}),l.addEventListener("pointermove",O=>{if(!M||O.pointerId!==y)return;O.preventDefault();let J=q(O);T==="stamp"?re(J):xe(A,J),A=J,L()});let Fe=O=>{O.pointerId===y&&(M=!1,y=null,A=null,l.hasPointerCapture(O.pointerId)&&l.releasePointerCapture(O.pointerId))};l.addEventListener("pointerup",Fe),l.addEventListener("pointercancel",Fe);for(let O of o.querySelectorAll("[data-tool]"))O.onclick=()=>{T=O.dataset.tool,o.querySelectorAll("[data-tool]").forEach(J=>J.setAttribute("aria-pressed",String(J===O)))};a("[data-cmd=generate]").onclick=ne,a("[data-cmd=undo]").onclick=()=>H(g,p),a("[data-cmd=redo]").onclick=()=>H(p,g),a("[data-cmd=export]").onclick=()=>zS(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async O=>{let J=O.target.files?.[0];if(O.target.value="",!!J)try{if(!["image/png","image/jpeg","image/webp"].includes(J.type))throw Error("Image PNG / JPG / WebP uniquement.");if(J.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let de=await createImageBitmap(J);k(),m.clearRect(0,0,512,512),m.drawImage(de,0,0,512,512),de.close(),x.clearRect(0,0,512,512),L(),b("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(de){b(de.message)}});let Ye=O=>{!O&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",Ke,!0),o.remove())},Ke=O=>{if(O.key==="Escape"){O.preventDefault(),Ye(!1);return}(O.ctrlKey||O.metaKey)&&!O.target.closest("input,select")&&O.key.toLowerCase()==="z"&&(O.preventDefault(),O.stopImmediatePropagation(),O.shiftKey?H(p,g):H(g,p))};window.addEventListener("keydown",Ke,!0),a("[data-cmd=close]").onclick=()=>Ye(!1),a("[data-cmd=cancel]").onclick=()=>Ye(!1);let Ve=()=>{if(P?.recipe.resolution===d.resolution&&P.data.length<=s)return P.data;for(let O of[d.resolution,256,128].filter((J,de,R)=>J<=d.resolution&&R.indexOf(J)===de)){let J=document.createElement("canvas");J.width=J.height=O,J.getContext("2d").drawImage(l,0,0,O,O);for(let de of[.85,.72,.58]){let R=J.toDataURL("image/webp",de);if(R.length<=s)return R}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},te=kS(),N=a("[data-field=shelf]");function se(O=""){N.replaceChildren(new Option("Choisir une texture",""),...te.map(de=>new Option(de.name,de.id))),N.value=O;let J=!!N.value;a("[data-cmd=shelf-load]").disabled=!J,a("[data-cmd=shelf-remove]").disabled=!J}function ue(O,J){try{localStorage.setItem(Gg,JSON.stringify(O))}catch{return b("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return te.splice(0,te.length,...O),se(J),!0}return N.onchange=()=>se(N.value),a("[data-cmd=shelf-save]").onclick=()=>{let O=Og.find(([de])=>de===d.pattern)?.[1]??"Texture",J=prompt("Nom de la texture",O)?.trim().slice(0,50);if(J)try{let de={id:crypto.randomUUID(),name:J,data:Ve()},{pattern:R,base:ee,scale:$,seed:Z,resolution:Q}=d;de.recipe={pattern:R,base:ee,scale:$,seed:Z,resolution:Q},ue([...te,de],de.id)&&b("Texture disponible dans les deux ateliers.")}catch(de){b(de.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let O=te.find(J=>J.id===N.value);if(!(!O||v&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let J=Jd();await zg(O.data,J),k(),m.clearRect(0,0,512,512),m.drawImage(J,0,0),x.clearRect(0,0,512,512),Object.assign(d,O.recipe),P=O;for(let de of["base","seed","resolution"])a("[data-field="+de+"]").value=d[de];L(),b("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(J){b(J.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{ue(te.filter(O=>O.id!==N.value),"")&&b("Texture retir\xE9e de la biblioth\xE8que.")},se(),a("[data-cmd=apply]").onclick=async()=>{let O=a("[data-cmd=apply]");O.disabled=!0;try{let J=Ve();await r(J),v=!1,Ye(!0)}catch(J){b(J.message||"Impossible d\u2019appliquer la texture.")}finally{O.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Bg(h,d),L(),i&&zg(i,h).then(L).catch(()=>b("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>Ye(!1)}}var HS=`
.forge-sketch-backdrop{position:fixed;inset:0;z-index:2100;background:#090f14e0;display:grid;place-items:center;padding:9px}
.forge-sketch{width:min(1120px,99vw);height:min(790px,97dvh);display:flex;flex-direction:column;
background:#222b32;border:1px solid #728390;border-radius:7px;box-shadow:0 25px 80px #000e;
color:#ecedef;font:12px/1.35 system-ui,sans-serif;overflow:hidden}
.forge-sketch *{box-sizing:border-box}
.forge-sketch header,.forge-sketch footer{background:#303940;padding:9px 13px;border-bottom:1px solid #4a5863;
display:flex;align-items:center;justify-content:space-between;gap:10px}
.forge-sketch header strong{font-size:14px;letter-spacing:.035em}
.forge-sketch header small{color:#e9b47b;font-size:10px;display:block;letter-spacing:.15em}
.forge-sketch button,.forge-sketch select,.forge-sketch input{font:inherit}
.forge-sketch button{border:1px solid #526270;background:#384751;border-radius:4px;min-height:28px;
padding:5px 9px;cursor:pointer;color:#ecedef}
.forge-sketch button:hover{background:#4e6069}
.forge-sketch button[aria-pressed=true]{border-color:#dcac71;background:#725037}
.forge-sketch button:disabled{opacity:.4;cursor:default}
.forge-sketch select,.forge-sketch input{background:#1a252d;border:1px solid #5a6873;color:#ecedef;
border-radius:4px;min-height:28px;padding:4px 6px;width:100%}
.forge-sketch input[type=checkbox]{width:auto;min-height:0;accent-color:#d5a36e}
.forge-sketch input[type=range]{padding:0;min-height:22px}
.forge-sketch label{display:flex;flex-direction:column;gap:4px;color:#c2d0d8}
.forge-sketch .sketch-body{flex:1;min-height:0;display:grid;
grid-template-columns:minmax(0,1fr) minmax(230px,32%) 217px;gap:8px;padding:9px;overflow:hidden}
.forge-sketch .sketch-panel{min-width:0;min-height:0;display:flex;flex-direction:column;
background:#1b272f;border:1px solid #40515d;border-radius:5px;overflow:hidden}
.forge-sketch .sketch-panel h3{margin:0;padding:8px 10px;background:#2b3943;font-size:11px;
letter-spacing:.08em;border-bottom:1px solid #4a5b67;color:#f2c28f}
.forge-sketch .sketch-canvas-wrap{display:flex;align-items:center;justify-content:center;
flex:1;min-height:0;min-width:0;padding:9px}
.forge-sketch #sketch-2d{display:block;max-width:100%;max-height:100%;width:auto;height:auto;
aspect-ratio:1;touch-action:none;cursor:crosshair;background:#18252b;border:1px solid #4f626d;border-radius:3px}
.forge-sketch #sketch-preview{width:100%;height:100%;touch-action:none}
.forge-sketch .sketch-tools{display:flex;gap:5px;padding:6px 9px;border-bottom:1px solid #43525e;flex-wrap:wrap}
.forge-sketch .sketch-tools button{flex:1;min-width:57px;font-size:11px}
.forge-sketch .sketch-help{color:#92aab6;font-size:10px;padding:5px 9px;min-height:25px}
.forge-sketch .sketch-options{overflow-y:auto;min-height:0;padding:10px;display:flex;flex-direction:column;gap:11px;scrollbar-width:thin}
.forge-sketch .sketch-options strong{font-size:11px;color:#f2c28f;letter-spacing:.06em}
.forge-sketch .sketch-row{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.forge-sketch .sketch-check{flex-direction:row;gap:7px;align-items:center}
.forge-sketch .sketch-error{font-size:11px;color:#ffb8a0;min-height:29px}
.forge-sketch footer{border-bottom:0;border-top:1px solid #4a5863;min-height:48px}
.forge-sketch footer span{font-size:10px;color:#abc2ca}
.forge-sketch .sketch-actions{display:flex;gap:6px}
.forge-sketch .sketch-apply{background:#b78146;color:#fff6e9;font-weight:700;border-color:#e2ad74}
.forge-sketch .sketch-apply:hover{background:#cf9253}
.forge-sketch [hidden]{display:none!important}
@media(max-width:850px){.forge-sketch{height:97dvh}
.forge-sketch .sketch-body{grid-template-columns:minmax(0,1fr) 180px;grid-template-rows:minmax(150px,1fr) 190px}
.forge-sketch .sketch-panel:nth-child(2){grid-column:1;grid-row:2}
.forge-sketch .sketch-options{grid-column:2;grid-row:1/span 2}
.forge-sketch footer span{display:none}}
@media(max-width:490px){.forge-sketch .sketch-body{grid-template-columns:1fr;overflow-y:auto;
grid-template-rows:320px 220px auto}
.forge-sketch .sketch-options{grid-column:1;grid-row:3;overflow:visible}}
`;function WS(){if(document.querySelector("#forge-sketch-css"))return;let i=document.createElement("style");i.id="forge-sketch-css",i.textContent=HS,document.head.append(i)}var Kd=i=>structuredClone(i),fr=(i,e,t)=>Math.min(t,Math.max(e,i)),Wg=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]);function XS(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s,o=fr(r?((i[0]-e[0])*n+(i[1]-e[1])*s)/r:0,0,1);return Wg(i,[e[0]+o*n,e[1]+o*s])}function Xg({initial:i=uo(),name:e="Forme libre",onApply:t=()=>{}}={}){WS();let n=document.createElement("div");n.className="forge-sketch-backdrop",n.innerHTML=`
  <section class="forge-sketch" role="dialog" aria-modal="true" aria-labelledby="sketch-title">
    <header><div><small>GORILLA / FOUNDRY \xB7 SHAPE LAB</small><strong id="sketch-title">Dessiner une forme</strong></div>
    <div style="display:flex;gap:5px"><button data-act="undo" title="Annuler \xB7 Ctrl Z">\u21B6</button>
    <button data-act="redo" title="R\xE9tablir \xB7 Ctrl Maj Z">\u21B7</button>
    <button data-act="close">\u2715</button></div></header>
    <div class="sketch-body">
      <section class="sketch-panel">
        <h3>01 / CONTOUR \xC0 LA SOURIS</h3>
        <div class="sketch-tools">
        <button data-tool="move" aria-pressed="true">D\xE9placer</button>
        <button data-tool="add" aria-pressed="false">+ Point</button>
        <button data-tool="remove" aria-pressed="false">\u2212 Point</button>
        </div>
        <div class="sketch-canvas-wrap"><canvas id="sketch-2d" width="600" height="600" aria-label="Points du contour \xE0 d\xE9placer ou ajouter"></canvas></div>
        <div class="sketch-help">Glisse un point \xB7 Double-clic sur un bord : ajouter \xB7 Suppr : retirer un point</div>
      </section>
      <section class="sketch-panel">
        <h3>02 / APER\xC7U DU VOLUME</h3>
        <div style="flex:1;min-height:0"><canvas id="sketch-preview" aria-label="Aper\xE7u 3D de la forme"></canvas></div>
        <div class="sketch-help">Glisse pour tourner \xB7 Molette pour zoomer</div>
      </section>
      <section class="sketch-options">
        <strong>TYPE DE FORME</strong>
        <label>Construction<select data-field="mode"><option value="extrude">Contour \u2192 Extrusion</option>
          <option value="lathe">Profil \u2192 R\xE9volution 360\xB0</option></select></label>
        <label>Commencer avec<select data-field="preset">
          <option value="">Forme en cours</option>
          <option value="shield">Bouclier sym\xE9trique</option>
          <option value="panel">Plaque rectangulaire</option>
          <option value="angle">\xC9querre / forme en L</option>
          <option value="arch">Contour arrondi</option>
          <option value="bottle">Bouteille / vase</option>
          <option value="bowl">Bol / r\xE9cipient</option>
        </select></label>
        <label class="sketch-check"><input type="checkbox" data-field="symmetric"> Sym\xE9trie X (dessiner la moiti\xE9)</label>
        <strong>VOLUME ET FINITION</strong>
        <label data-depth>Profondeur d\u2019extrusion (m)<input data-field="depth" type="range" min=".025" max="1.5" step=".025"></label>
        <label data-bevel>Arrondir les ar\xEAtes<input data-field="bevel" type="range" min="0" max=".15" step=".005"></label>
        <label data-segments>Segments de r\xE9volution<input data-field="segments" type="number" min="3" max="128" step="1"></label>
        <output data-triangles aria-live="polite"></output>
        <strong>PR\xC9CISION</strong>
        <label class="sketch-check"><input data-field="snap" type="checkbox" checked> Grille aimant\xE9e</label>
        <label>Pas de grille<select data-field="step"><option value=".025">2,5 cm</option>
          <option value=".05" selected>5 cm</option><option value=".1">10 cm</option></select></label>
        <button data-act="reset">Recommencer avec ce pr\xE9r\xE9glage</button>
        <div class="sketch-error" data-error></div>
      </section>
    </div>
    <footer><span>Contour modifiable \xB7 profondeur / arrondi / tour \xB7 enregistr\xE9 dans le mod\xE8le</span>
    <div class="sketch-actions"><button data-act="cancel">Annuler</button>
    <button class="sketch-apply" data-act="apply">Utiliser cette forme</button></div></footer>
  </section>`,document.body.append(n);let s=N=>n.querySelector(N);s("#sketch-title").textContent="Fa\xE7onner \xB7 "+e;let r=ui(i),o=0,a="move",l=!1,c=null,h=!1,u=null,d=null,f=null,m=[],x=[],g=600,p=g/2,v=g/2.75,M=s("#sketch-2d"),y=M.getContext("2d"),T=new jn,A=new qt(44,1,.01,30);T.background=new Oe("#1b2b34"),T.add(new Gi("#e3f7ff","#314653",2));let P=new Hi("#ffd4a9",2.5);P.position.set(3,4,6),T.add(P),A.position.set(1.5,1.25,2.1),A.lookAt(0,0,0);let D=new la(.7);T.add(D);let w=new Zt({color:"#89c2cb",metalness:.25,roughness:.52,side:kt});try{let N=s("#sketch-preview");u=new ps({canvas:N,antialias:!0}),u.setPixelRatio(Math.min(1.5,devicePixelRatio)),d=new ms(A,N),d.enablePan=!1,d.minDistance=.5,d.maxDistance=7,d.addEventListener("change",()=>u.render(T,A));let se=new ResizeObserver(()=>{if(!N.isConnected)return;let ue=N.getBoundingClientRect();A.aspect=Math.max(.1,ue.width/Math.max(1,ue.height)),A.updateProjectionMatrix(),u.setSize(Math.max(1,ue.width),Math.max(1,ue.height),!1),u.render(T,A)});se.observe(N),n._disposeObserver=()=>se.disconnect()}catch{s("[data-error]").textContent="Aper\xE7u WebGL indisponible ; tu peux dessiner en 2D."}function b([N,se]){return[p+N*v,p-se*v]}function L(N){let se=M.getBoundingClientRect(),ue=((N.clientX-se.left)/se.width*g-p)/v,O=(p-(N.clientY-se.top)/se.height*g)/v;if(r.mode==="lathe"&&(ue=Math.max(0,ue)),r.symmetric&&(ue=Math.min(0,ue)),s("[data-field=snap]").checked&&!N.altKey){let J=Number(s("[data-field=step]").value)||.05;ue=Math.round(ue/J)*J,O=Math.round(O/J)*J}return[fr(ue,-1.35,1.35),fr(O,-1.35,1.35)]}function B(N){let se=16/v,ue=-1,O=se;return r.points.forEach((J,de)=>{let R=Wg(N,J);R<O&&(ue=de,O=R)}),ue}function X(N){let se=r.points,O=r.mode==="extrude"&&!r.symmetric?se.length:se.length-1,J=-1,de=16/v;for(let R=0;R<O;R++){let ee=XS(N,se[R],se[(R+1)%se.length]);ee<de&&(J=R,de=ee)}return J}function k(){m.push(Kd(r)),m.length>36&&m.shift(),x.length=0,h=!0,s("[data-act=undo]").disabled=!1,s("[data-act=redo]").disabled=!0}function H(N,se){N.length&&(se.push(Kd(r)),r=N.pop(),o=fr(o,0,r.points.length-1),h=!0,xe(),V(),s("[data-act=undo]").disabled=!m.length,s("[data-act=redo]").disabled=!x.length)}function V(){y.clearRect(0,0,g,g),y.fillStyle="#15232d",y.fillRect(0,0,g,g);let se=((Number(s("[data-field=step]").value)||.05)<.05,.1);y.lineWidth=1;for(let de=-1.4;de<=1.4;de+=se){let R=b([de,0])[0],ee=b([0,de])[1];y.strokeStyle=Math.abs(de)<1e-4?"#d8a26677":"#47627148",y.beginPath(),y.moveTo(R,0),y.lineTo(R,g),y.stroke(),y.beginPath(),y.moveTo(0,ee),y.lineTo(g,ee),y.stroke()}let ue=r.mode==="extrude"?wa(r):r.points,O=(de,R)=>{de.length&&(y.beginPath(),y.moveTo(...b(de[0])),de.slice(1).forEach(ee=>y.lineTo(...b(ee))),R&&y.closePath())};r.mode==="extrude"?(O(ue,!0),y.fillStyle="#65b9c733",y.fill(),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke()):(O(ue,!1),y.strokeStyle="#8fdce2",y.lineWidth=3,y.stroke(),y.strokeStyle="#d3a261aa",y.setLineDash([8,6]),y.beginPath(),y.moveTo(p,30),y.lineTo(p,g-30),y.stroke(),y.setLineDash([])),r.symmetric&&(y.lineWidth=2,y.setLineDash([5,4]),y.strokeStyle="#daa96e99",y.beginPath(),y.moveTo(p,10),y.lineTo(p,g-10),y.stroke(),y.setLineDash([])),r.points.forEach((de,R)=>{let[ee,$]=b(de);y.beginPath(),y.arc(ee,$,R===o?8:6,0,Math.PI*2),y.fillStyle=R===o?"#f5c486":"#e3f0ef",y.fill(),y.strokeStyle="#344b58",y.lineWidth=2,y.stroke()});let J=eh(r);s("[data-error]").textContent=J??"",s("[data-act=apply]").disabled=!!J}function ne(){try{let N=th(r);if(s("[data-triangles]").textContent=((N.index?.count??N.attributes.position.count)/3).toLocaleString("fr-FR")+" triangles",!u){N.dispose();return}f&&(T.remove(f),f.geometry.dispose()),f=new ye(N,w),T.add(f),u.render(T,A)}catch{s("[data-triangles]").textContent="\u2014",u?.render(T,A)}}let q=!1;function re(){q||(q=!0,requestAnimationFrame(()=>{q=!1,n.isConnected&&ne()}))}function xe(){s("[data-field=mode]").value=r.mode,s("[data-field=symmetric]").checked=r.symmetric,s("[data-field=symmetric]").disabled=r.mode==="lathe",s("[data-field=depth]").value=r.depth,s("[data-field=bevel]").value=r.bevel,s("[data-field=segments]").value=r.segments,s("[data-depth]").hidden=r.mode==="lathe",s("[data-bevel]").hidden=r.mode==="lathe",s("[data-segments]").hidden=r.mode!=="lathe"}function we(N){k(),r=ui(N==="lathe"?$n.bottle:$n.shield),o=0,xe(),V(),re()}function Fe(N){$n[N]&&(k(),r=ui($n[N]),o=0,xe(),V(),re())}function Ye(N){o<0||(r.points[o]=N,V(),re())}M.addEventListener("pointerdown",N=>{if(N.button!==0)return;N.preventDefault();let se=L(N),ue=B(se);if(a==="remove"){ue>=0&&r.points.length>3&&(k(),r.points.splice(ue,1),o=fr(ue,0,r.points.length-1),V(),re());return}if(a==="add"&&r.points.length<Sa){k();let O=X(se);o=O<0?r.points.length:O+1,r.points.splice(o,0,se),V(),re();return}ue<0||(o=ue,k(),c=N.pointerId,l=!0,M.setPointerCapture(N.pointerId),V())}),M.addEventListener("pointermove",N=>{!l||c!==N.pointerId||Ye(L(N))});let Ke=N=>{N.pointerId===c&&(l=!1,c=null,M.hasPointerCapture(N.pointerId)&&M.releasePointerCapture(N.pointerId))};M.addEventListener("pointerup",Ke),M.addEventListener("pointercancel",Ke),M.addEventListener("dblclick",N=>{if(r.points.length>=Sa)return;let se=L(N),ue=X(se);ue<0||(k(),o=ue+1,r.points.splice(o,0,se),V(),re())}),M.addEventListener("contextmenu",N=>{N.preventDefault();let se=B(L(N));se<0||r.points.length<=3||(k(),r.points.splice(se,1),o=fr(se,0,r.points.length-1),V(),re())});for(let N of n.querySelectorAll("[data-tool]"))N.onclick=()=>{a=N.dataset.tool,n.querySelectorAll("[data-tool]").forEach(se=>se.setAttribute("aria-pressed",String(se===N)))};s("[data-field=mode]").onchange=N=>we(N.target.value),s("[data-field=preset]").onchange=N=>{Fe(N.target.value),N.target.value=""},s("[data-field=symmetric]").onchange=N=>{if(k(),N.target.checked){let se=r.points.filter(([ue])=>ue<=.005).sort((ue,O)=>ue[1]-O[1]);r.points=se.length>=3?se:Kd($n.shield.points),r.points[0][0]<-.001&&r.points.unshift([0,r.points[0][1]]),r.points.at(-1)[0]<-.001&&r.points.push([0,r.points.at(-1)[1]]),r.symmetric=!0}else r.points=wa(r),r.symmetric=!1;o=0,xe(),V(),re()};for(let N of["depth","bevel","segments"])s("[data-field="+N+"]").oninput=se=>{!l&&se.target.dataset.started!=="1"&&(k(),se.target.dataset.started="1"),r[N]=Number(se.target.value),V(),re()},s("[data-field="+N+"]").onchange=se=>{se.target.dataset.started="0",N==="segments"&&(r.segments=ui(r).segments,se.target.value=r.segments)};s("[data-field=step]").onchange=V,s("[data-field=snap]").onchange=V,s("[data-act=reset]").onclick=()=>{let N=r.mode==="lathe"?"bottle":"shield";Fe(N)},s("[data-act=undo]").onclick=()=>H(m,x),s("[data-act=redo]").onclick=()=>H(x,m);let Ve=N=>{!N&&h&&!confirm("Fermer sans utiliser cette forme ?")||(window.removeEventListener("keydown",te,!0),n._disposeObserver?.(),d?.dispose(),f&&f.geometry.dispose(),w.dispose(),u?.dispose(),n.remove())},te=N=>{if(N.key==="Escape"){N.preventDefault(),N.stopImmediatePropagation(),Ve(!1);return}if((N.ctrlKey||N.metaKey)&&N.key.toLowerCase()==="z"){N.preventDefault(),N.stopImmediatePropagation(),N.shiftKey?H(x,m):H(m,x);return}N.target.closest("input,select,button")||(N.key==="Delete"||N.key==="Backspace")&&(r.points.length>3&&(k(),r.points.splice(o,1),o=fr(o,0,r.points.length-1),V(),re()),N.preventDefault(),N.stopImmediatePropagation())};return window.addEventListener("keydown",te,!0),s("[data-act=close]").onclick=()=>Ve(!1),s("[data-act=cancel]").onclick=()=>Ve(!1),s("[data-act=apply]").onclick=()=>{let N=eh(r);if(N){s("[data-error]").textContent=N;return}try{t(ui(r)),h=!1,Ve(!0)}catch(se){s("[data-error]").textContent=se.message||"Forme invalide."}},s("[data-act=undo]").disabled=!0,s("[data-act=redo]").disabled=!0,xe(),V(),re(),{close:()=>Ve(!1)}}function qg(i,e,t){let n=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>i?.includes(s.toUpperCase())&&n[s]<-1e-6?-1:1)}function Yg(i,e,t,n,s){let r=s?new _:n.clone().multiply(new _(1,1,1).sub(t.scale));return i.map(o=>{let a=new rt().setFromEuler(new Yt(...o.rotation.map(Be.degToRad),"ZYX")),l=o.scale.map((u,d)=>u*new _().setComponent(d,1).applyQuaternion(a).multiply(t.scale).length()),c=new _().fromArray(o.position).sub(e).multiply(t.scale).add(r).applyQuaternion(t.quaternion).add(t.position).toArray();a.premultiply(t.quaternion);let h=new Yt().setFromQuaternion(a,"ZYX");return{position:c,rotation:[h.x,h.y,h.z].map(Be.radToDeg),scale:l}})}function Zg(i,e,t,n,s,r){return(r?new _:t.clone().multiply(n.clone().sub(s))).applyQuaternion(e).add(i)}var C=i=>document.getElementById(i),pn=C("preview-canvas"),qS=["X","Y","Z"],$g={position:{min:-3,max:3,step:.01,label:"POSITION / M"},rotation:{min:-360,max:360,step:1,label:"ROTATION / \xB0"},scale:{min:.02,max:4,step:.01,label:"DIMENSIONS / \xC9CHELLE"}},Je=mg(localStorage),Qd=hg(),sf="gorilla-foundry-draft-v1",Mo=!1,dt=Je.models[0]?.id??null,Gt=0,Vt=new Set,xo=null,ka=!1;try{let i=localStorage.getItem(sf);if(i){let e=Ti(JSON.parse(i));Object.assign(Je,e),dt=Je.models[0]?.id??null,Mo=!0}}catch{}var Wn=null,Wt=null,ot=null,In="select",mn=!1,go=!1,ef=0;var Ji=null,ws=[],Va=[],YS=48,Mn=new Jt,Ai=new Pt,Ki=new Jt,jt=null,Cs=new Map,yo=new Pt,Es=new Jt,$i=!1,ZS=new kn(1,10,6),rf={},Sh=new vi(new ht().setAttribute("position",new Pe(6*(Object.keys(gs).length-1),3)),new On({color:"#49d3ec",depthTest:!1,depthWrite:!1,transparent:!0,opacity:.85}));Sh.frustumCulled=!1;Sh.renderOrder=9;Es.add(Sh);for(let i of Object.keys(gs)){let e=new ye(ZS,new rn({color:"#55d8ee",depthTest:!1,depthWrite:!1}));e.renderOrder=10,e.userData.avatarJoint=i,Es.add(e),rf[i]=e}var Rs=new jn;Es.visible=!1;Rs.add(yo,Es);Rs.background=new Oe("#152229");var on=new qt(45,1,.005,110),of=new Js(8,32,"#64818a","#334b54");of.position.y=-.002;var _o=new aa(new Ht,"#eeb578");_o.visible=!1;var bn=new ye(new et(1,1,1),new rn({color:"#ffb55e",wireframe:!0,transparent:!0,opacity:.92,depthTest:!1}));bn.name="Hitbox de collision";bn.renderOrder=8;bn.visible=!1;var yh=new Jt;Rs.add(yh);var jS=vg();Rs.add(Ai,Mn,Ki,of,_o,bn,new Gi("#ecf7ff","#4c5960",2.4));var Qg=new Hi("#ffe5c2",2.05);Qg.position.set(-2.5,4,-3);Rs.add(Qg);on.position.set(1.8,1.4,-2.4);on.lookAt(0,0,0);var Pn=Be.clamp,Ne=()=>Je.models.find(i=>i.id===dt),at=()=>Ne()?.parts[Gt],Qi=()=>Vt.size?[...Vt]:at()?[Gt]:[],af=()=>Qi().map(i=>Mn.children[i]).filter(Boolean),lf=()=>af().filter(i=>i.visible),e0="gorilla-foundry-visibility-v1",gn={active:{},masks:{},references:[]};try{let i=JSON.parse(localStorage.getItem(e0)||"null");i&&typeof i=="object"&&i.masks&&i.active&&(gn={active:i.active,masks:i.masks,references:Array.isArray(i.references)?i.references:[],lastModel:typeof i.lastModel=="string"?i.lastModel:null})}catch{}Je.models.some(i=>i.id===gn.lastModel)&&(dt=gn.lastModel);var Ha=new URLSearchParams(location.search),tf=Ha.get("model"),t0=Ha.get("from")==="cards",jg=Ha.get("asset"),cf=tf;Je.models.some(i=>i.id===tf)&&(dt=tf);var As=new Set(gn.references);function So(){try{gn.references=[...As],localStorage.setItem(e0,JSON.stringify(gn))}catch{}}function wh(){return gn.active[dt]||"all"}function _h(){let i=gn.masks[dt]?.[wh()]||[];return new Set(Array.isArray(i)?i.filter(e=>Number.isInteger(e)&&e>=0):[])}function hf(i){dt&&(gn.masks[dt]||(gn.masks[dt]={}),gn.masks[dt][wh()]=[...i].sort((e,t)=>e-t),So(),Ci(),Dt())}function JS(){dt&&delete gn.masks[dt],So()}var uf=()=>({data:structuredClone(Je),modelId:dt,partIndex:Gt,multi:[...Vt]});function _t(i,e=!1){C("status").textContent=i,C("status").dataset.error=String(e)}function qe(){Mo=!0,_t("Brouillon local \xB7 non publi\xE9 dans le jeu"),clearTimeout(ef),ef=setTimeout(()=>{try{localStorage.setItem(sf,JSON.stringify(Ti(Je)))}catch{_t("Brouillon non enregistr\xE9 : exporte le JSON.",!0)}},480)}function Wa(){try{let i=Ti(Je);return localStorage.setItem(Ed,JSON.stringify(i)),Object.assign(Je,i),localStorage.removeItem(sf),clearTimeout(ef),Mo=!1,Ri(),_t("Enregistr\xE9 \xB7 disponible dans Gorilla Lab et les cartes"),!0}catch{return _t("Enregistrement impossible : exporte le JSON.",!0),!1}}function ut(){let i=uf(),e=ws.at(-1);(!e||JSON.stringify(e)!==JSON.stringify(i))&&(ws.push(i),ws.length>YS&&ws.shift()),Va.length=0,df()}function df(){C("undo-action").disabled=!ws.length,C("redo-action").disabled=!Va.length}function n0(i){Object.assign(Je,structuredClone(i.data)),dt=i.modelId,Gt=i.partIndex,Vt=new Set(i.multi??[]),qe(),Ri(),df()}function i0(){if(!ws.length)return;let i=ws.pop();Va.push(uf()),n0(i),_t("Annul\xE9 \xB7 Ctrl Z")}function nf(){if(!Va.length)return;let i=Va.pop();ws.push(uf()),n0(i),_t("R\xE9tabli \xB7 Ctrl Maj Z")}function KS(i){Ji?.target===i&&Ji.recorded||((!Ji||Ji.target!==i)&&(Ji={target:i,recorded:!1}),Ji.recorded||(ut(),Ji.recorded=!0))}document.addEventListener("focusout",i=>{Ji?.target===i.target&&(Ji=null)});function ei(i){i&&document.activeElement===i?KS(i):ut()}function Xn(i,e,t){i.replaceChildren(...e.map(([n,s])=>new Option(s,n))),i.value=t??""}function Xa(){let i=Je.models.map(r=>[r.id,r.name||"Sans nom"]);Xn(C("models"),i.length?i:[["","Aucun mod\xE8le"]],dt),C("models").disabled=!i.length;let e=Ne();C("model-title").disabled=!e,C("delete-model").disabled=!e,document.activeElement!==C("model-title")&&(C("model-title").value=e?.name??""),C("duplicate-model").disabled=!e||Je.models.length>=Tt.models,C("model-count").textContent=Je.models.length+" / "+Tt.models,Xn(C("avatar"),[["","Singe d\u2019origine"],...Je.models.filter(_a).map(r=>[r.id,r.name+(r.kind==="avatar"?"":" \xB7 t\xEAte")])],Je.avatarId);let t=C("model-list"),n=t.scrollTop,s=Je.models.map(r=>{let o=document.createElement("div");o.className="model-entry-wrap";let a=document.createElement("button");a.type="button",a.className="model-entry",a.setAttribute("aria-pressed",String(r.id===dt)),a.title="\xC9diter "+r.name,a.textContent=r.name||"Sans nom";let l=document.createElement("small");l.textContent=" \xB7 "+r.parts.length+" p.",a.append(l),a.onclick=()=>g0(r.id);let c=document.createElement("button");return c.type="button",c.className="model-visibility",c.disabled=r.id===dt||!r.parts.length,c.setAttribute("aria-pressed",String(As.has(r.id))),c.textContent=r.id===dt?"\u25CF":As.has(r.id)?"\u25C9":"\u25CE",c.title=r.id===dt?"Mod\xE8le actif":"Afficher/masquer comme r\xE9f\xE9rence 3D sans modifier ce mod\xE8le",c.setAttribute("aria-label",c.title+" : "+r.name),c.onclick=()=>tw(r.id),o.append(a,c),o});t.replaceChildren(...s),t.scrollTop=n}function Ci(){let i=Ne()?.parts??[];C("part-count").textContent=i.length+" / "+Tt.parts,C("add-part").disabled=i.length>=Tt.parts||!Ne();let e=Qi(),t=new Set(e.map(r=>i[r]?.group).filter(Boolean));C("duplicate-part").disabled=!e.length||i.length+e.length>Tt.parts,C("group-parts").disabled=e.length<2||t.size===1&&e.every(r=>i[r]?.group),C("ungroup-parts").disabled=!t.size,C("selection-count").textContent=e.length+" s\xE9lectionn\xE9e"+(e.length===1?"":"s");let n=_h();C("mask-set").value=wh(),C("solo-part").disabled=!i.length||!at(),C("show-all-parts").disabled=!n.size;let s=C("part-list").scrollTop;C("part-list").replaceChildren(...i.map((r,o)=>{let a=document.createElement("div");a.className="part-row";let l=document.createElement("button");l.type="button",l.className="part-entry",l.setAttribute("aria-pressed",String(e.includes(o))),l.title=r.shape+" \xB7 "+r.surface;let c=document.createElement("span");c.textContent=String(o+1).padStart(2,"0")+"  "+r.name+(r.group?" \xB7 G"+r.group:"");let h=document.createElement("span");h.className="swatch",h.style.setProperty("--swatch",r.color),l.append(c,h),n.has(o)&&(l.style.opacity=".48"),l.onclick=d=>vh(o,d.shiftKey||d.ctrlKey||d.metaKey);let u=document.createElement("button");return u.type="button",u.className="part-visibility",u.textContent=n.has(o)?"\u25CC":"\u25C9",u.setAttribute("aria-pressed",String(!n.has(o))),u.title=n.has(o)?"Afficher cette pi\xE8ce dans la vue":"Masquer cette pi\xE8ce dans la vue",u.setAttribute("aria-label",u.title+" : "+r.name),u.onclick=()=>{let d=_h();d.has(o)?d.delete(o):d.add(o),hf(d)},a.append(l,u),a})),C("part-list").scrollTop=s}function Lt(){let i=Ne(),e=at();if(C("model-details").hidden=!i,C("part-inspector").hidden=!e,C("part-empty").hidden=!!e||["settings","collision","publish","avatar","animation"].includes(C("model-inspector").dataset.tab),i){document.activeElement!==C("model-name")&&(C("model-name").value=i.name),C("model-kind").value=i.kind||"prop",C("model-kind").disabled=i.kind==="avatar",C("in-game").disabled=i.kind==="avatar";let t=Ia(i);for(let r of["gravity","bounce"])document.activeElement!==C("model-"+r)&&(C("model-"+r).value=t[r]);C("in-game").checked=i.inGame,C("drivable").checked=i.properties.drivable===!0,C("drivable").disabled=i.kind!=="prop";let n="./editor.html?model="+encodeURIComponent(i.id);for(let r of["send-to-map","quick-send-to-map"])C(r).href=n;let s=t0&&i.id===cf;C("go-cards").href=s?"./editor.html?applyModel="+encodeURIComponent(i.id):"./editor.html",C("go-cards").textContent=s?"Appliquer \xE0 la pi\xE8ce et revenir":"Cartes \u2192";for(let r of Object.keys(Pa))C(r).checked=!!i.properties[r]}if(C("model-inspector").dataset.tab==="collision"&&Is(),e){for(let s of["name","shape","color","surface"])C("part-"+s).value=e[s];let t=po(e),n=lr[e.finish]??lr.original;C("part-finish").value=e.finish??"original",C("part-finish-info").textContent="Rugosit\xE9 "+n.roughness+" \xB7 m\xE9tallicit\xE9 "+n.metalness;for(let[s,r]of[["projection",t.projection],["repeat",t.repeat],["angle",t.angle],["u",t.offset[0]],["v",t.offset[1]]]){let o=C("part-"+s);document.activeElement!==o&&(o.value=r)}C("part-shape").disabled=e.shape==="asset";for(let s of Object.keys($g))f0[s].forEach((r,o)=>{document.activeElement!==r&&(r.value=Number(e[s][o].toFixed(3)))})}for(let t of document.querySelectorAll(".tab"))t.setAttribute("aria-pressed",String(t.dataset.panel===C("model-inspector").dataset.tab));C("mirror").disabled=!e||Ne().parts.length>=Tt.parts,C("drop-to-grid").disabled=!e,C("focus-part").disabled=!e,C("reset-part").disabled=!e,C("custom-shape-controls").hidden=e?.shape!=="custom",C("edit-profile").disabled=!e||e.shape!=="custom",C("part-paint").disabled=!e,C("part-texture-clear").disabled=!e?.texture,C("part-texture-status").textContent=e?.texture?"Texture peinte appliqu\xE9e \xE0 cette pi\xE8ce.":"Aucune texture personnalis\xE9e. La finition pr\xE9-d\xE9finie reste active.",C("center-part").disabled=!e,C("delete-part").disabled=!e,C("viewport-title").textContent=i?"ATELIER / "+i.name.toUpperCase():"ESPACE DE CONSTRUCTION / 3D";for(let t of["quick-send-to-map","send-to-map"])C(t).setAttribute("aria-disabled",String(!i?.parts.length||i.kind==="avatar"));C("avatar-new").disabled=Je.models.length>=Tt.models,C("avatar-copy").disabled=!i?.parts.length||i.kind==="avatar"||C("avatar-new").disabled,Ps(),l0(),gf(),a0()}function Is(){let i=Ne(),e=i?.hitbox?.mode==="box"||i?.hitbox?.mode==="custom",t=i?.kind==="structure"&&i.partCollisions===!0;C("part-collisions").disabled=i?.kind!=="structure",C("part-collisions").checked=t,C("whole-hitbox-controls").hidden=t,C("part-zone-controls").hidden=!t,C("part-zone").disabled=!at(),C("part-zone").value=at()?.zone??"solid";let n=at()?.zone==="trigger";if(C("trigger-notice").hidden=!t||!n,n){let d=at().notice;C("trigger-notice-phase").value=d?.phase??"enter",document.activeElement!==C("trigger-notice-text")&&(C("trigger-notice-text").value=d?.text??""),document.activeElement!==C("trigger-portal")&&(C("trigger-portal").value=at().portal??"")}if(C("hitbox-auto").setAttribute("aria-pressed",String(!e)),C("hitbox-manual").setAttribute("aria-pressed",String(!!e)),C("hitbox-geometry").hidden=!e,C("hitbox-auto").disabled=C("hitbox-manual").disabled=!i?.parts.length,C("hitbox-shape").disabled=!i?.parts.length,C("hitbox-drag").setAttribute("aria-pressed",String(!!mn&&In==="translate")),C("hitbox-scale").setAttribute("aria-pressed",String(!!mn&&In==="scale")),C("hitbox-rotate").setAttribute("aria-pressed",String(!!mn&&In==="rotate")),!i?.parts.length){C("hitbox-info").textContent="Ajoute une pi\xE8ce pour g\xE9n\xE9rer sa hitbox.";return}let s=i.hitbox?.shape??"box",r=Math.round(i.hitbox?.precision??48);C("hitbox-shape").value!==s&&(C("hitbox-shape").value=s),C("hitbox-precision").value=String(r),C("hitbox-precision-value").textContent=String(r),C("hitbox-precision-wrap").hidden=s==="box",C("hitbox-info").textContent=e?"Hitbox personnalis\xE9e : d\xE9place, tourne et redimensionne la forme orange.":s==="convex"?"Auto : enveloppe convexe calcul\xE9e depuis la g\xE9om\xE9trie du mod\xE8le.":"Auto : collision simple ajust\xE9e aux dimensions du mod\xE8le.";let a=ji(i).size.toArray(),l=Math.max(...a),c=a.indexOf(l),h=(s==="sphere"?l:Math.max(...a.filter((d,f)=>f!==c)))/2,u=a.map(d=>d.toFixed(2)).join(" \xD7 ")+" m";if(s==="sphere"?C("hitbox-info").textContent+=" Diam\xE8tre "+(2*h).toFixed(2)+" m.":s==="capsule"?C("hitbox-info").textContent+=" Axe "+["X","Y","Z"][c]+" \xB7 rayon "+h.toFixed(2)+" m \xB7 cylindre "+Math.max(0,l-2*h).toFixed(2)+" m.":C("hitbox-info").textContent+=" "+u+(s==="convex"?" L\u2019enveloppe remplit les creux.":""),!!e)for(let d of["center","size"])for(let f=0;f<3;f++){let m=C("hitbox-"+d+"-"+["x","y","z"][f]);document.activeElement!==m&&(m.value=Number(i.hitbox[d][f].toFixed(3)))}}function ti(){let i=Ne(),e=!!i?.parts.length&&C("model-inspector").dataset.tab==="collision"&&C("hitbox-preview-toggle").checked;for(let n of[...yh.children])n.geometry.dispose(),n.material.dispose(),yh.remove(n);let t=e?Sg(i):null;if(bn.visible=!!(e&&!t),t){let n=ji(i).boundsCenter;for(let s of t){let r=new ye(new et(...s.size),new rn({color:s.mode==="trigger"?"#64dbf0":"#ffb55e",wireframe:!0,depthTest:!1}));r.position.copy(s.center).add(n),r.renderOrder=8,yh.add(r)}}else if(e){let n=ji(i),s=Mg(i);bn.geometry.dispose(),bn.geometry=s,bn.position.copy(n.center),bn.rotation.set(...n.rotation.toArray().map(Be.degToRad)),bn.scale.copy(n.size),bn.material.color.set(i.properties.collidable?"#ffb55e":"#9b9fa5")}ot?.dragging||es(),Ct()}function s0(i){let e=Ne();if(!e?.parts.length)return;let t=ji(e);ut(),e.hitbox=i==="box"?{mode:"custom",shape:C("hitbox-shape").value||"box",center:t.center.toArray(),size:t.size.toArray(),rotation:t.rotation.toArray(),precision:Number(C("hitbox-precision").value)||48}:{mode:"auto",shape:"convex",precision:Number(C("hitbox-precision").value)||48},mn=i==="box",qe(),Is(),C("hitbox-preview-toggle").checked=!0,ti(),Qn(i==="box"?"scale":"select")}function wo(i){i!=="collision"&&mn&&(mn=!1,Qn("select")),C("model-inspector").dataset.tab=i,i!=="avatar"&&(Cs.clear(),$i=!1),i!=="animation"&&bo(),Lt(),ti(),es(),gr()}for(let i of document.querySelectorAll(".tab"))i.onclick=()=>wo(i.dataset.panel);var Ts=0,r0=new _,$S=new _,QS=new rt,o0=new Yt,ff=["closed","open","seconds","travel"],pf=["x","y","z"];function bo(){cancelAnimationFrame(Ts),Ts=0,C("hinge-preview").value=0,C("hinge-play").textContent="Lire"}var Jg=["phase","door","doorState","doorDelay","receiver","light","lightState","lightColor","sound","soundVolume"];function a0(){let i=Ne(),e=at(),t=e&&i.kind==="structure"&&(e.zone!=="trigger"||i.partCollisions&&i.properties.collidable);if(C("reaction-fields").hidden=!t,C("reaction-note").textContent=t?"Les cibles appartiennent \xE0 la m\xEAme instance du d\xE9cor.":"S\xE9lectionne une pi\xE8ce d\u2019un d\xE9cor. Pour une zone, active les volumes de collision par pi\xE8ce.",!t)return;let n=e.reaction??{},s=(r,o)=>{let a=i.parts.flatMap((c,h)=>o(c)?[[String(h),c.name+" \xB7 "+(h+1)]]:[]),l=i.parts.findIndex(c=>c.actionId&&c.actionId===n[r]);Xn(C("reaction-"+r),[["","Aucun"],...a],l<0?"":String(l))};Xn(C("reaction-phase"),e.zone==="trigger"?[["enter","Entr\xE9e dans la zone"],["exit","Sortie de la zone"]]:[["use","Interaction avec E"]],n.phase??(e.zone==="trigger"?"enter":"use")),s("door",r=>!!r.hinge),s("light",r=>r.zone!=="trigger"),Xn(C("reaction-sound"),[["","Aucun"],...Object.entries(Td)],n.sound??""),C("reaction-doorState").querySelector("[value=hold]").hidden=e.zone!=="trigger",C("reaction-doorState").value=n.doorState??"open",C("reaction-doorDelay").value=n.doorDelay??1.25,C("reaction-lightState").value=n.lightState??"on",C("reaction-lightColor").value=n.lightColor??"#ffbd54",C("reaction-soundVolume").value=n.soundVolume??.6,C("reaction-receiver").disabled=e.zone==="trigger",C("reaction-receiver").value=n.receiver??""}for(let i of Jg)C("reaction-"+i).onchange=()=>{let e=Ne(),t=at();if(!t||e.kind!=="structure")return;ut();let n=Object.fromEntries(Jg.map(r=>[r,C("reaction-"+r).value]));for(let r of["door","light"]){if(n[r]==="")continue;let o=e.parts[Number(n[r])];if(!o){n[r]="";continue}o.actionId??=crypto.randomUUID(),n[r]=o.actionId}n.soundVolume=C("reaction-soundVolume").valueAsNumber,n.doorDelay=C("reaction-doorDelay").valueAsNumber;let s=sh(n,t.zone);s?t.reaction=s:delete t.reaction,qe()};function l0(){let i=at(),e=Ne(),t=e?.kind==="structure"&&i?.zone!=="trigger"?i?.hinge:null,n=i&&i.zone!=="trigger"&&e.kind!=="avatar";if(C("hinge-fields").hidden=!t,C("hinge-add").hidden=!!t,C("hinge-add").disabled=!n,C("hinge-hint").textContent=t?"Panneau s\xE9lectionn\xE9 : "+i.name:n?"Articule le panneau s\xE9lectionn\xE9. Le mod\xE8le devient un d\xE9cor.":"S\xE9lectionne une pi\xE8ce solide ou traversable du d\xE9cor.",!!t){pf.forEach((s,r)=>C(`hinge-${s}`).value=t.pivot[r]);for(let s of ff)C(`hinge-${s}`).value=t[s]??1;C("hinge-mode").value=t.mode??"pivot",C("hinge-direction").value=t.axis??"y",C("hinge-travel").disabled=!t.mode}}function mf(){let i=at();i?.hinge&&(ut(),i.hinge=xa({mode:C("hinge-mode").value,axis:C("hinge-direction").value,pivot:pf.map(e=>C(`hinge-${e}`).valueAsNumber),...Object.fromEntries(ff.map(e=>[e,C(`hinge-${e}`).valueAsNumber]))}),qe(),l0(),Ct())}C("hinge-add").onclick=()=>{let i=at(),e=Ne();if(!i||e.kind==="avatar"||i.zone==="trigger")return;ut(),e.kind="structure",e.partCollisions=!0;let t=new _(-i.scale[0]/2,0,0).applyEuler(o0.set(...i.rotation.map(Be.degToRad),"ZYX"));i.hinge=xa({pivot:t.add(r0.fromArray(i.position)).toArray()}),bo(),qe(),Lt(),Dt()};C("hinge-remove").onclick=()=>{let i=at();i?.hinge&&(ut(),delete i.hinge,bo(),qe(),Lt(),Dt())};for(let i of[...pf,...ff])C(`hinge-${i}`).onchange=mf;C("hinge-preview").oninput=()=>{cancelAnimationFrame(Ts),Ts=0,C("hinge-play").textContent="Lire",Ct()};C("hinge-play").onclick=()=>{let i=at()?.hinge;if(!i)return;if(Ts){bo(),Ct();return}C("hinge-play").textContent="Revenir \xE0 la pose ferm\xE9e";let e=performance.now(),t=n=>{if(at()?.hinge!==i){bo(),Ct();return}let s=Math.min(1,(n-e)/(i.seconds*1e3));C("hinge-preview").value=s,Ct(),Ts=s<1?requestAnimationFrame(t):0,Ts||(C("hinge-play").textContent="Relire")};Ts=requestAnimationFrame(t)};var pr=0,Kg=-1/0,c0={};for(let[i,e]of Object.entries(pd)){let t=document.createElement("details"),n=document.createElement("summary"),s=document.createElement("div");n.textContent=e.label,s.className="axes";let r=c0[i]={};for(let[o,a,l,c,h]of[["strength","Intensit\xE9",0,e.max,.01],["speed","Vitesse (Hz)",0,8,.05],["scale","Variation spatiale",0,48,.5],["signal","Forme"],...i==="deform"?[]:[["color","Couleur"]]]){let u=document.createElement("label");u.textContent=a;let d=document.createElement(o==="signal"?"select":"input");if(d.id="effect-"+i+"-"+o,o==="signal")for(let[f,m]of[["sine","Sinus"],["triangle","Triangle"],["pulse","Impulsion"],...i==="deform"?[]:[["stars","\xC9toiles"]]])d.add(new Option(m,f));else d.type=o==="color"?"color":"number",d.type==="number"&&(d.min=l,d.max=c,d.step=h);d.onchange=()=>{let f=at();f?.effect&&(ut(),f.effect=va({...f.effect,[i]:{...f.effect[i],[o]:d.type==="number"?d.valueAsNumber:d.value}}),qe(),gf(),Dt())},r[o]=d,u.append(d),s.append(u)}t.append(n,s),C("effect-fields").append(t)}function gf(){let i=at(),e=!!(i&&i.zone!=="trigger"),t=e?i.effect:null;if(C("effect-actions").hidden=!e,C("effect-fields").hidden=!t,C("effect-remove").hidden=!t,C("effect-note").hidden=e,!!t)for(let[n,s]of Object.entries(c0))for(let[r,o]of Object.entries(s))o.value=t[n][r]}function h0(i){let e=at();!e||e.zone==="trigger"||(ut(),i===null?delete e.effect:e.effect=va(i),qe(),gf(),Dt())}C("effect-new").onclick=()=>h0({});C("effect-remove").onclick=()=>h0(null);function u0(i){pr=0,i-Kg>=32?(Kg=i,Ct()):C("model-inspector").dataset.tab==="animation"&&(pr=requestAnimationFrame(u0))}C("hinge-mode").onchange=mf;C("hinge-direction").onchange=mf;function Ct(){let i=Ne(),e=i?.parts??[],t=C("model-inspector").dataset.tab==="animation"&&i?.kind==="structure";for(let s=0;s<Mn.children.length;s++){let r=Mn.children[s],o=e[s];if(!o||o.zone==="trigger")continue;let a=o.hinge?o:o.group?e.find(u=>u.group===o.group&&u.hinge):null;if(!a||!t&&!r.userData.hingePreview)continue;r.userData.hingePreview=t;let l=r0.fromArray(o.position),c=$S.fromArray(a.hinge.pivot),h=QS.setFromEuler(o0.set(...o.rotation.map(Be.degToRad),"ZYX"));Wm(r,c,l,h,a.hinge,t&&e[Gt]===a?+C("hinge-preview").value:0)}hw(),jm(performance.now()*.001),Wn?.render(Rs,on);let n=C("model-inspector").dataset.tab==="animation"&&e.some(s=>s.effect&&Object.values(s.effect).some(r=>r.strength>0&&r.speed>0));n&&!pr&&(pr=requestAnimationFrame(u0)),!n&&pr&&(cancelAnimationFrame(pr),pr=0)}try{Wn=new ps({canvas:pn,antialias:!0,preserveDrawingBuffer:!0}),Wn.setPixelRatio(Math.min(devicePixelRatio,1.5)),Wn.toneMapping=ec,Wt=new ms(on,pn),Wt.enablePan=!0,Wt.minDistance=.09,Wt.maxDistance=48,Wt.mouseButtons.RIGHT=En.ROTATE,Wt.mouseButtons.MIDDLE=En.PAN,Wt.addEventListener("change",Ct),ot=new ph(on,pn);let i=ot.getHelper();Rs.add(i),ot.addEventListener("dragging-changed",e=>{Wt.enabled=!e.value,!e.value&&(xo=null,go&&(go=!1,qe(),Dt()))}),ot.addEventListener("mouseDown",()=>{ut(),go=!1,Ga=null;let e=ot.object;if(e===bn||e===yo)return;let t=e===Ai?af():[e],n=new Ht;if(e===Ai){for(let o of t)n.expandByObject(o);n.translate(e.position.clone().negate())}else e.geometry.computeBoundingBox(),n.copy(e.geometry.boundingBox);let s=In==="scale"?qg(ot.axis,ot.pointStart,ot.worldQuaternionStart):[1,1,1],r=new _;for(let o=0;o<3;o++){let a=s[o]<0||C("negative-scale-face").checked;r.setComponent(o,(a?n.max:n.min).getComponent(o))}xo={position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone(),anchor:r,rawScale:e.scale.clone(),parts:t.map(o=>({mesh:o,data:structuredClone(Ne().parts[Mn.children.indexOf(o)])}))}}),ot.addEventListener("objectChange",()=>{let e=ot.object;if(!(!e||!ot.dragging)){if(e===yo&&jt){let t=C("avatar-joint").value,n=jt.setPivot(t,e.position.toArray());Ne().avatarRig[t].pivot=n,e.position.fromArray(n),go=!0,Ps(),Ct();return}if(mn&&e===bn&&["box","custom"].includes(Ne()?.hitbox?.mode)){let t=Ne().hitbox;t.center=e.position.toArray().map(n=>Pn(n,-6,6)),t.size=e.scale.toArray().map(n=>Pn(Math.abs(n),.025,12)),t.rotation=[e.rotation.x,e.rotation.y,e.rotation.z].map(n=>Pn(Be.radToDeg(n),-360,360)),e.position.fromArray(t.center),e.scale.fromArray(t.size),go=!0,Is(),Ct();return}xo&&(xo.rawScale.copy(e.scale),d0())}}),pn.addEventListener("pointerdown",$d,!0),pn.addEventListener("pointermove",e=>{ka=e.ctrlKey},!0),window.addEventListener("keydown",$d),window.addEventListener("keyup",$d),new ResizeObserver(()=>{let e=Math.max(1,pn.clientWidth),t=Math.max(1,pn.clientHeight);on.aspect=e/t,on.updateProjectionMatrix(),Wn.setSize(e,t,!1),Ct()}).observe(pn)}catch{_t("WebGL indisponible \xB7 \xE9dition num\xE9rique toujours possible.",!0)}function $d(i){ka!==i.ctrlKey&&(ka=i.ctrlKey,ot?.dragging&&In==="scale"&&xo&&d0())}function d0(){let i=ot.object,e=xo,t=i===Ai,n=Ne().parts,s;if(t){let r={position:i.position,quaternion:i.quaternion,scale:In==="scale"?e.rawScale.clone().clampScalar(.001,200):new _(1,1,1)};if(s=Yg(e.parts.map(o=>o.data),e.position,r,e.anchor,ka),s.some(o=>o.position.some(a=>Math.abs(a)>3+1e-8)||o.scale.some(a=>a<.02-1e-8||a>4+1e-8)))return}else{let r=e.rawScale.clone().clampScalar(.02,4),o=In==="scale"?Zg(e.position,e.rotation,e.anchor,e.scale,r,ka):i.position;if(In==="scale"&&o.toArray().some(a=>Math.abs(a)>3+1e-8)){let a=n[Mn.children.indexOf(i)];i.position.fromArray(a.position),i.scale.fromArray(a.scale),Ct();return}s=[{position:o.toArray().map(a=>Pn(a,-3,3)),rotation:[i.rotation.x,i.rotation.y,i.rotation.z].map(Be.radToDeg),scale:r.toArray()}]}e.parts.forEach(({mesh:r},o)=>{let a=s[o],l=n[Mn.children.indexOf(r)];Object.assign(l,a),r.position.fromArray(a.position),r.rotation.set(...a.rotation.map(Be.degToRad),"ZYX"),r.scale.fromArray(a.scale)}),go=!0,m0(),Lt()}var f0={};for(let[i,e]of Object.entries($g)){let t=document.createElement("fieldset");t.className="vectors";let n=document.createElement("legend");n.textContent=e.label,t.append(n);let s=document.createElement("div");s.className="axes",f0[i]=qS.map((r,o)=>{let a=document.createElement("label");a.textContent=r;let l=document.createElement("input");return l.type="number",l.id=i+"-"+r.toLowerCase(),l.min=e.min,l.max=e.max,l.step=e.step,l.setAttribute("aria-label",e.label+" "+r),l.addEventListener("input",()=>{let c=at();!c||!Number.isFinite(l.valueAsNumber)||(ei(l),c[i][o]=Pn(l.valueAsNumber,e.min,e.max),qe(),Dt())}),l.addEventListener("change",()=>{let c=at();c&&(l.value=c[i][o])}),a.append(l),s.append(a),l}),t.append(s),C("part-fields").append(t)}function p0(i){let e={...i,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},t=oh(i),n=t?ah(e):jS,s=new ye(cr(e,new _(...i.scale)),n);s.userData.ownMaterial=t;let r=n?.map?.image;return r?.addEventListener&&!r.complete&&r.addEventListener("load",Ct,{once:!0}),s.position.fromArray(i.position),s.rotation.order="ZYX",s.rotation.set(...i.rotation.map(Be.degToRad)),s.scale.fromArray(i.scale),s.userData.part=!0,s}function es(){if(!ot)return;if(C("model-inspector").dataset.tab==="animation"){ot.detach();return}if(C("model-inspector").dataset.tab==="avatar"){if($i&&jt){let s=C("avatar-joint").value;yo.position.fromArray(ho(s,Ne()?.avatarRig?.[s]).pivot),yo.updateMatrixWorld(!0),ot.setMode("translate"),ot.attach(yo)}else ot.detach();return}let i=lf(),e=i[0];if(i.length&&Qi().length>1&&(e=Ai,!ot.dragging)){let s=new Ht;for(let r of af())s.expandByObject(r);s.getCenter(Ai.position),Ai.rotation.set(0,0,0),Ai.scale.setScalar(1),Ai.updateMatrixWorld(!0)}let t=In==="select"?null:mn&&bn.visible&&["translate","scale","rotate"].includes(In)?bn:e?.visible?e:null;if(ot.object!==t){if(ot.dragging)return;t?ot.attach(t):ot.detach()}t&&(ot.setMode(In),ot.setSpace(In==="translate"||t===Ai?"world":"local"));let n=Number(C("snap-step").value);ot.setTranslationSnap(n||null),ot.setRotationSnap(n?Be.degToRad(5):null),ot.setScaleSnap(n||null),Ct()}function m0(){let i=lf();_o.visible=!!i.length&&!mn,_o.box.makeEmpty();for(let e of i)_o.box.expandByObject(e);Ct()}function Th(){m0(),es()}function mr(i=!1){if(!Wt)return;let e=i?lf():[],t=new Ht;if(e.length)for(let c of e)t.expandByObject(c);else t.setFromObject(Mn);!i&&Ki.children.length&&t.union(new Ht().setFromObject(Ki));let n=new _,s=new _;t.isEmpty()||(t.getCenter(n),t.getSize(s));let r=Be.degToRad(on.fov/2),o=Math.atan(Math.tan(r)*on.aspect),a=Math.max(.6,s.length()*.63/Math.sin(Math.min(r,o))),l=on.position.clone().sub(Wt.target).normalize();Wt.target.copy(n),on.position.copy(n).addScaledVector(l,a),Wt.update(),Ct()}function ew(){for(let e of[...Ki.children])Ki.remove(e),e.geometry.dispose(),e.material.dispose();if(!Wn)return;let i=Je.models.filter(e=>As.has(e.id)&&e.id!==dt&&e.parts.length);i.forEach((e,t)=>{let n=bg(e),s=new rn({color:"#8bd1dc",side:kt,transparent:!0,opacity:.25,depthWrite:!1}),r=new ye(n,s);r.name="R\xE9f\xE9rence : "+e.name;let o=t/i.length*Math.PI*2-Math.PI/2,a=2.2+Math.floor(t/5)*1.6;r.position.set(Math.cos(o)*a,0,Math.sin(o)*a),r.renderOrder=3,Ki.add(r)})}function Dt(i=!1){ot?.detach();for(let n of[...Mn.children])Mn.remove(n),n.geometry.dispose(),n.userData.ownMaterial&&lh(n.material);let e=Ne()?.parts??[],t=_h();Wn&&e.forEach((n,s)=>{let r=p0(n);r.visible=!t.has(s),Mn.add(r)}),ew(),ti(),C("preview-empty").hidden=!!(e.length&&Wn),C("preview-empty").textContent=Wn?Ne()?"Ajoute une forme avec la barre \xE0 gauche pour commencer.":"Cr\xE9e un mod\xE8le avec + Nouveau mod\xE8le puis assemble tes pi\xE8ces.":"Pr\xE9visualisation 3D indisponible : les valeurs restent modifiables.",C("preview-tag").textContent=e.length+" PI\xC8CE"+(e.length>1?"S":"")+" / "+({avatar:"AVATAR",structure:"D\xC9COR"}[Ne()?.kind]??"OBJET")+(Ki.children.length?" \xB7 "+Ki.children.length+" R\xC9F.":""),Th(),gr(),i&&(e.length||Ki.children.length)?mr():Ct()}function Ri(){gn.lastModel=dt,So(),Xa(),C("new-model").disabled=C("example").disabled=Je.models.length>=Tt.models,Ci(),Lt(),Dt(!0),df()}function vh(i,e=!1){i!==Gt&&bo();let t=Ne()?.parts,n=t?.[i];if(!n)return;let s=n.group?t.flatMap((r,o)=>r.group===n.group?[o]:[]):[i];if(e){Vt=new Set(Qi());let r=s.every(o=>Vt.has(o));for(let o of s)r?Vt.delete(o):Vt.add(o);Gt=r?Vt.values().next().value??-1:i}else Vt=new Set(s),Gt=i;Ci(),Lt(),Th()}function xf(i=!1){let e=Ne()?.parts,t=Qi();if(!e||!t.length)return;let n=new Set(t.map(r=>e[r].group).filter(Boolean)),s=e.flatMap((r,o)=>t.includes(o)||n.has(r.group)?[o]:[]);if(!(!i&&s.length<2)){if(ut(),i)for(let r of s)delete e[r].group;else{let r=new Set(e.map(a=>a.group)),o=1;for(;r.has(o);)o++;for(let a of s)e[a].group=o}Vt=new Set(s),qe(),Ci(),Th()}}function g0(i){!Je.models.some(e=>e.id===i)||i===dt||(dt=i,Gt=0,Vt.clear(),Cs.clear(),Ri(),_t("Mod\xE8le actif : "+Ne().name))}function tw(i){i===dt||!Je.models.some(e=>e.id===i)||(As.has(i)?As.delete(i):As.add(i),So(),Xa(),Dt(),mr())}function nw(i){dt&&(gn.active[dt]=i,So(),Ci(),Dt())}function Qn(i){mn&&!["translate","scale","rotate"].includes(i)&&(mn=!1),In=i;for(let e of document.querySelectorAll(".rail-btn[data-tool]"))e.setAttribute("aria-pressed",String(e.dataset.tool===i));pn.dataset.tool=i,C("negative-scale-option").hidden=i!=="scale"||mn,es()}for(let i of document.querySelectorAll(".rail-btn[data-tool]"))i.onclick=()=>Qn(i.dataset.tool);var Ga=null,Ba=null,za=new Wi,bh=new ae;function x0(i){if(!Wn||jt)return-1;let e=pn.getBoundingClientRect();bh.set(2*(i.clientX-e.left)/e.width-1,1-2*(i.clientY-e.top)/e.height),za.setFromCamera(bh,on);let t=za.intersectObjects(Mn.children.filter(n=>n.visible),!1)[0];return t?Mn.children.indexOf(t.object):-1}pn.addEventListener("pointerdown",i=>{i.button===0&&(Ga=In!=="select"&&ot?.axis?null:{id:i.pointerId,x:i.clientX,y:i.clientY}),i.button===2&&(Ba={x:i.clientX,y:i.clientY})});pn.addEventListener("pointercancel",()=>{Ga=null,Ba=null});pn.addEventListener("pointerup",i=>{if(ot?.dragging)return;let e=Ga;if(Ga=null,i.button!==0||e?.id!==i.pointerId||Math.hypot(i.clientX-e.x,i.clientY-e.y)>5)return;let t=i.shiftKey||i.ctrlKey||i.metaKey;if(jt){let s=pn.getBoundingClientRect();bh.set(2*(i.clientX-s.left)/s.width-1,1-2*(i.clientY-s.top)/s.height),za.setFromCamera(bh,on);let r=Es.visible&&!t?za.intersectObjects(Object.values(rf),!1)[0]?.object:null;if(r){w0(r.userData.avatarJoint);return}let o=za.intersectObjects(jt.meshes.filter(a=>a.visible),!1)[0]?.object;o&&(vh(jt.meshes.indexOf(o),t),Ct());return}let n=x0(i);n>=0&&vh(n,t)});var vo=C("part-context");function Eh(){vo.hidden=!0}pn.addEventListener("contextmenu",i=>{if(i.preventDefault(),!Ba||Math.hypot(i.clientX-Ba.x,i.clientY-Ba.y)>6)return;let e=x0(i);if(e<0)return Eh();Qi().includes(e)||vh(e),C("context-name").textContent=at().name,vo.hidden=!1,vo.style.left=Pn(i.clientX,5,innerWidth-205)+"px",vo.style.top=Pn(i.clientY,5,innerHeight-305)+"px"});document.addEventListener("pointerdown",i=>{vo.contains(i.target)||Eh()});function Ss(i,e=fo[i],t=[0,0,0],n=[.35,.35,.35],s="#51bdd2",r="plain",o=[0,0,0]){return{name:e,shape:i,position:t,scale:n,rotation:o,surface:r,color:s,...i==="custom"?{profile:uo()}:{}}}function iw(){let i="#678fb4",e="#c1d7de",t="#233241";return[Ss("sphere","Cr\xE2ne",[0,0,.02],[.31,.32,.29],i,"speckle"),Ss("sphere","Museau",[0,-.048,-.11],[.2,.13,.15],e),Ss("sphere","Oreille gauche",[-.149,.003,.01],[.08,.1,.06],i),Ss("sphere","Oreille droite",[.149,.003,.01],[.08,.1,.06],i),Ss("sphere","\u0152il gauche",[-.056,.037,-.118],[.049,.042,.036],t),Ss("sphere","\u0152il droit",[.056,.037,-.118],[.049,.042,.036],t),Ss("sphere","Nez",[0,-.025,-.181],[.071,.039,.033],t)]}function Ah(){return"custom-model-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function y0(i,e=!1){let t=Qd.find(s=>s.assetId===i);if(!t)return _t("Asset int\xE9gr\xE9 introuvable.",!0);if(Je.models.length>=Tt.models)return _t("Limite de "+Tt.models+" mod\xE8les atteinte.",!0);ut();let n=structuredClone(t);return n.id=Ah(),Je.models.some(s=>s.name===n.name)&&(n.name=(n.name+" \xB7 copie").slice(0,48)),Je.models.push(n),dt=n.id,Gt=0,Vt.clear(),qe(),Ri(),e&&wo("geometry"),_t("\xAB "+n.name+" \xBB import\xE9 \xB7 enregistre pour le retrouver dans les cartes."),n}function _0(i=!1){if(Je.models.length>=Tt.models)return;ut();let e=Ah(),t=i?"Singe de pierre":"Mod\xE8le "+(Je.models.length+1);Je.models.push({id:e,name:t,kind:"structure",inGame:!1,properties:{...Pa},hitbox:{mode:"auto",shape:"convex",precision:48},parts:i?iw():[]}),dt=e,Gt=0,Vt.clear(),qe(),Ri(),wo("geometry"),i||(C("model-title").focus({preventScroll:!0}),C("model-title").select())}function sw(){let i=Ne();if(!i||Je.models.length>=Tt.models)return;ut();let e=structuredClone(i);e.id=Ah(),e.name=(i.name.slice(0,37)+" \xB7 variante").slice(0,48),Je.models.push(e),dt=e.id,Gt=0,Vt.clear(),qe(),Ri(),C("model-title").focus({preventScroll:!0}),C("model-title").select(),_t("Variante cr\xE9\xE9e : modifie-la sans toucher au mod\xE8le original.")}function yf(i=C("new-shape").value){let e=Ne();if(!e||e.parts.length>=Tt.parts)return;ut();let t=at(),n=t?[Pn(t.position[0]+.22,-3,3),...t.position.slice(1)]:[0,0,0];e.parts.push(Ss(i,fo[i],n)),Gt=e.parts.length-1,Vt.clear(),qe(),Ci(),Lt(),Dt(e.parts.length===1),Qn("translate"),wo("geometry"),i==="custom"&&Mf()}function Mh(){let i=Ne(),e=Qi();if(!i||!e.length||i.parts.length+e.length>Tt.parts)return;ut();let t=e.map(a=>i.parts[a]),n=Math.min(.12,3-Math.max(...t.map(a=>a.position[0]))),s=new Map,r=new Set(i.parts.map(a=>a.group)),o=i.parts.length;for(let a of t){let l=structuredClone(a);if(delete l.actionId,l.name=a.name.slice(0,40)+" copie",l.position[0]+=n,l.group){if(!s.has(l.group)){let c=1;for(;r.has(c);)c++;r.add(c),s.set(l.group,c)}l.group=s.get(l.group)}i.parts.push(l)}Vt=new Set(t.map((a,l)=>o+l)),Gt=o,qe(),Ci(),Lt(),Dt()}function _f(){let i=Ne(),e=Qi();if(!(!i||!e.length)){ut();for(let t of e.sort((n,s)=>s-n))i.parts.splice(t,1);Vt.clear(),JS(),Gt=Math.max(0,Math.min(Gt,i.parts.length-1)),!i.parts.length&&Je.avatarId===i.id&&(Je.avatarId=null),qe(),Xa(),Ci(),Lt(),Dt()}}function vf(){let i=Ne(),e=at();if(!e||i.parts.length>=Tt.parts)return;ut();let t=structuredClone(e);delete t.actionId,t.name=e.name.slice(0,36)+" \xB7 miroir",delete t.group,t.position[0]=-t.position[0],t.avatarJoint?.startsWith("left")?t.avatarJoint="right"+t.avatarJoint.slice(4):t.avatarJoint?.startsWith("right")&&(t.avatarJoint="left"+t.avatarJoint.slice(5)),t.rotation[1]=-t.rotation[1],t.rotation[2]=-t.rotation[2],i.parts.push(t),Gt=i.parts.length-1,Vt.clear(),qe(),Ci(),Lt(),Dt(),_t("Copie en miroir cr\xE9\xE9e sur l\u2019axe X")}function v0(){let i=at(),e=Mn.children[Gt];if(!i||!e)return;let t=new Ht().setFromObject(e);t.isEmpty()||(ut(),i.position[1]=Pn(i.position[1]-t.min.y,-3,3),qe(),Lt(),Dt(),_t("Pi\xE8ce pos\xE9e sur le plan Y = 0"))}function rw(){let i=at();i&&(ut(),i.position=[0,0,0],i.rotation=[0,0,0],i.scale=[.35,.35,.35],qe(),Lt(),Dt())}function ow(){let i=at();i&&(ut(),i.position=[0,0,0],qe(),Lt(),Dt())}function bf(i){if(!Wt)return;let e=on.position.distanceTo(Wt.target),t=i==="front"?new _(0,0,-1):i==="side"?new _(1,0,0):new _(1e-4,1,0);on.position.copy(Wt.target).addScaledVector(t,Math.max(.6,e)),Wt.update(),Ct()}function gh(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var aw=()=>Ne()?.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"modele";async function lw(){let i=C("export-format").value;try{let e=Ne(),t=aw();if(i==="workspace-json")gh(new Blob([JSON.stringify(Ti(Je),null,2)],{type:"application/json"}),"atelier.gorilla-models.json");else if(i==="model-json"){if(!e)throw Error("Cr\xE9e un mod\xE8le avant de l\u2019exporter.");gh(new Blob([JSON.stringify(Ti({version:1,models:[e],avatarId:null}),null,2)],{type:"application/json"}),t+".gorilla-model.json")}else if(i==="png"){if(!Wn)throw Error("WebGL indisponible : capture impossible.");Ct();let n=await new Promise(s=>pn.toBlob(s,"image/png"));if(!n)throw Error("Capture impossible sur cet appareil.");gh(n,t+".png")}else if(i==="glb"){if(!e?.parts.length)throw Error("Ajoute une pi\xE8ce avant l\u2019export 3D.");let n=new Jt;n.name=e.name;let s=[];_t("Pr\xE9paration du GLB et des textures\u2026");for(let r of e.parts){let o=null;if(r.texture){let c=await fetch(r.texture);if(!c.ok)throw Error("Image du mod\xE8le impossible \xE0 charger.");let h=await createImageBitmap(await c.blob()),u=document.createElement("canvas");u.width=h.width,u.height=h.height,u.getContext("2d").drawImage(h,0,0),h.close(),o=new Wo(u),o.colorSpace=It,o.wrapS=o.wrapT=wn}let a=ah({...r,texture:null});o&&(a.map=o,a.needsUpdate=!0);let l=new ye(cr(r),a);l.name=r.name,n.add(l),s.push(l)}try{let r=await new Promise((o,a)=>new dr().parse(n,o,a,{binary:!0,onlyVisible:!0}));gh(new Blob([r],{type:"model/gltf-binary"}),t+".glb")}finally{for(let r of s)r.geometry.dispose(),lh(r.material)}}_t("Export "+i.toUpperCase()+" g\xE9n\xE9r\xE9")}catch(e){_t(e.message||"Export impossible.",!0)}}C("new-model").onclick=()=>_0();C("duplicate-model").onclick=sw;C("example").onclick=()=>_0(!0);C("models").onchange=i=>g0(i.target.value);C("mask-set").onchange=i=>nw(i.target.value);C("solo-part").onclick=()=>{let i=Ne();i?.parts.length&&(hf(new Set(i.parts.map((e,t)=>t).filter(e=>e!==Gt))),_t("Masque "+wh()+" : seule la pi\xE8ce active est affich\xE9e."))};C("show-all-parts").onclick=()=>{hf(new Set),_t("Toutes les pi\xE8ces sont visibles.")};C("save").onclick=C("publish-save").onclick=Wa;C("undo-action").onclick=i0;C("redo-action").onclick=nf;C("entity-sculptor").onclick=()=>{try{Hm()}catch(i){_t(i.message,!0)}};C("export").onclick=lw;C("import").onclick=()=>C("file").click();C("file").onchange=async i=>{let e=i.target.files?.[0];if(i.target.value="",!!e)try{if(e.size>Tt.fileBytes)throw Error("JSON trop volumineux pour cet atelier.");let t=Ti(JSON.parse(await e.text())),n=new Map(Je.models.map(s=>[s.id,s]));for(let s of t.models)n.set(s.id,s);if(n.size>Tt.models)throw Error("L\u2019atelier accepte "+Tt.models+" mod\xE8les.");if(t.models.some(s=>Je.models.some(r=>r.id===s.id))&&!confirm("Remplacer les mod\xE8les de m\xEAme identifiant ?"))return;ut(),Object.assign(Je,{version:1,models:[...n.values()],avatarId:t.avatarId??Je.avatarId}),dt=t.models[0]?.id??dt,Gt=0,Vt.clear(),qe(),Ri(),_t("Import\xE9 \xB7 enregistrer pour appliquer au jeu")}catch(t){_t(t instanceof SyntaxError?"JSON illisible.":t.message,!0)}};function b0(i){let e=Ne();if(e?.kind==="avatar"){i.preventDefault(),_t("\xC9quipe cet avatar dans l\u2019onglet Avatar.");return}if(!e?.parts.length){i.preventDefault(),_t("Ajoute au moins une pi\xE8ce avant de placer le mod\xE8le sur une carte.",!0);return}Wa()||i.preventDefault()}for(let i of["send-to-map","quick-send-to-map"])C(i).addEventListener("click",b0);C("go-cards").addEventListener("click",i=>{t0&&dt===cf?b0(i):Mo&&!Wa()&&i.preventDefault()});C("delete-model").onclick=()=>{let i=Ne();if(!i||!confirm("Supprimer le mod\xE8le \xAB "+i.name+" \xBB ?"))return;ut();let e=Je.models.indexOf(i);Je.models.splice(e,1),As.delete(i.id),delete gn.active[i.id],delete gn.masks[i.id],So(),Je.avatarId===i.id&&(Je.avatarId=null),dt=(Je.models[e]??Je.models[e-1])?.id??null,Gt=0,Vt.clear(),qe(),Ri()};function cw(i){let e=Ne();e&&(ei(i.target),e.name=i.target.value.slice(0,48),qe(),Xa(),Lt())}for(let i of["model-name","model-title"])C(i).addEventListener("input",cw);C("hitbox-auto").onclick=()=>s0("auto");C("hitbox-manual").onclick=()=>s0("box");C("hitbox-preview-toggle").onchange=ti;C("hitbox-shape").onchange=i=>{let e=Ne();if(!e)return;ei(i.target);let t=i.target.value;if(!["box","sphere","capsule","convex"].includes(t))return;let n=ji(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{},precision:Number(C("hitbox-precision").value)||48},mn=s,qe(),Is(),ti()};C("hitbox-precision").oninput=i=>{let e=Ne();if(!e)return;let t=Pn(Math.round(Number(i.target.value)||48),8,96),n=ji(e),s=["box","custom"].includes(e.hitbox?.mode);e.hitbox={mode:s?"custom":"auto",shape:e.hitbox?.shape??"convex",precision:t,...s?{center:n.center.toArray(),size:n.size.toArray(),rotation:n.rotation.toArray()}:{}},C("hitbox-precision-value").textContent=String(t),qe(),ti()};for(let[i,e]of[["hitbox-drag","translate"],["hitbox-scale","scale"],["hitbox-rotate","rotate"]])C(i).onclick=()=>{let t=Ne();!t?.parts.length||!["box","custom"].includes(t.hitbox?.mode)||(C("hitbox-preview-toggle").checked=!0,mn=!0,Qn(e),Is(),ti())};C("hitbox-fit").onclick=()=>{let i=Ne();if(!i?.parts.length)return;let e=Number(C("hitbox-precision").value)||48,t=ji({...i,hitbox:{mode:"auto",shape:"convex",precision:e}});ut(),i.hitbox={mode:"custom",shape:C("hitbox-shape").value||"convex",center:t.center.toArray(),size:t.size.toArray(),rotation:[0,0,0],precision:e},mn=!0,qe(),Is(),ti(),_t("Hitbox ajust\xE9e \xE0 la g\xE9om\xE9trie actuelle.")};for(let i of["center","size"])for(let e=0;e<3;e++){let t=C("hitbox-"+i+"-"+["x","y","z"][e]);t.oninput=n=>{let s=Ne(),r=n.target.valueAsNumber;!["box","custom"].includes(s?.hitbox?.mode)||!Number.isFinite(r)||(ei(n.target),s.hitbox[i][e]=Pn(r,i==="size"?.025:-6,i==="size"?12:6),qe(),ti())},t.onchange=Is}C("model-kind").onchange=i=>{!Ne()||Ne().kind==="avatar"||(ei(i.target),Ne().kind=i.target.value,qe(),Lt(),Dt())};C("in-game").onchange=i=>{ei(i.target),Ne().inGame=i.target.checked,qe()};C("drivable").onchange=i=>{let e=Ne();e?.kind==="prop"&&(ei(i.target),i.target.checked?e.properties.drivable=!0:delete e.properties.drivable,qe())};for(let i of Object.keys(Pa))C(i).onchange=e=>{Ne()&&(ei(e.target),Ne().properties[i]=e.target.checked,qe(),i==="collidable"&&ti())};C("avatar").onchange=i=>{ei(i.target),Je.avatarId=i.target.value||null,qe()};var M0=Object.entries(gs).map(([i,e])=>[i,e.label]);Xn(C("avatar-assignment"),M0,"torso");Xn(C("avatar-joint"),M0,"torso");function Ps(){let i=Ne(),e=at(),t=i?.kind==="avatar";if(C("avatar-rig-controls").hidden=!t,!t)return;C("avatar-assignment").disabled=!e,C("avatar-attach").disabled=!e,C("avatar-move").setAttribute("aria-pressed",String($i)),C("avatar-assignment").value=e?.avatarJoint??"torso";let n=C("avatar-joint").value||"torso",s=ho(n,i.avatarRig?.[n]);for(let[r,o]of["x","y","z"].entries())C("avatar-"+o).value=s.pivot[r];C("avatar-axis").value=s.axis,C("avatar-limit").value=s.limit,C("avatar-bend").value=(Cs.get(n)??0)*100}var Oa=new _,xh=new _;function hw(){if(Es.visible=!!jt&&C("avatar-display").value!=="model",!Es.visible)return;let i=C("avatar-joint").value;jt.root.updateMatrixWorld(!0);let e=Sh.geometry.attributes.position,t=0;for(let[n,s]of Object.entries(rf)){jt.bones[n].getWorldPosition(Oa),s.position.copy(Oa),s.scale.setScalar(n.includes("Finger")?.011:.018).multiplyScalar(n===i?1.35:1),s.material.color.set(n===i?"#ffc16e":"#55d8ee");let r=gs[n].parent;r&&(jt.bones[r].getWorldPosition(xh),e.setXYZ(t++,Oa.x,Oa.y,Oa.z),e.setXYZ(t++,xh.x,xh.y,xh.z))}e.needsUpdate=!0,Es.updateMatrixWorld(!0)}function gr(){let i=Ne(),e=Wn&&i?.kind==="avatar"&&C("model-inspector").dataset.tab==="avatar";if(jt?.dispose(),jt=null,Mn.visible=!e,!e){Wn&&Th(),Ct();return}let t=_h();jt=qm(i,(n,s)=>{let r=p0(n);return r.visible=!t.has(s)&&C("avatar-display").value!=="bones",r},n=>{n.geometry.dispose(),n.userData.ownMaterial&&lh(n.material)}),Rs.add(jt.root);for(let[n,s]of Cs)jt.setBend(n,s);_o.visible=!1,es(),C("avatar-cost").textContent=i.parts.length+" pi\xE8ces \xB7 "+jt.triangles.toLocaleString("fr-FR")+" triangles"+(_a(i)?"":" \xB7 ajoute une t\xEAte et un torse pour l\u2019\xE9quiper"),Ct()}function S0(i=null){if(Je.models.length>=Tt.models)return;ut();let e=i?structuredClone(i.parts):Xm(),t=ya();if(i){let s=ch(i),r=s.getCenter(new _),o=s.getSize(new _);for(let a of Object.values(t)){let[l,c,h]=a.pivot;a.pivot=[Pn(r.x+l*o.x/.95,-3,3),Pn(s.max.y-o.y*.15+c*o.y/1.08,-3,3),Pn(r.z+h*o.z/.42,-3,3)]}}let n=Ti({version:1,models:[{id:Ah(),name:i?(i.name+" \xB7 avatar").slice(0,48):"Mon gorille",kind:"avatar",avatarRig:t,parts:e}]}).models[0];Je.models.push(n),dt=n.id,Gt=0,Vt.clear(),Cs.clear(),$i=!1,qe(),Ri(),wo("avatar")}function w0(i){C("avatar-joint").value=i,Ps(),es(),Ct()}function T0(i){let e=Ne(),t=Qi();if(!(e?.kind!=="avatar"||!t.length)&&!t.every(n=>e.parts[n].avatarJoint===i)){ut();for(let n of t)e.parts[n].avatarJoint=i;C("avatar-joint").value=i,qe(),Xa(),Ps(),gr()}}C("avatar-new").onclick=()=>S0();C("avatar-copy").onclick=()=>{let i=Ne();i?.parts.length&&i.kind!=="avatar"&&S0(i)};C("avatar-assignment").onchange=i=>T0(i.target.value);C("avatar-joint").onchange=i=>w0(i.target.value);C("avatar-attach").onclick=()=>T0(C("avatar-joint").value);C("avatar-display").onchange=gr;C("avatar-move").onclick=()=>{$i=!$i,$i&&(Cs.clear(),C("avatar-display").value==="model"&&(C("avatar-display").value="overlay")),Ps(),gr()};C("avatar-focus").onclick=()=>{if(!Wt||!jt)return;let i=C("avatar-joint").value,e=on.position.clone().sub(Wt.target).normalize();jt.bones[i].getWorldPosition(Wt.target),on.position.copy(Wt.target).addScaledVector(e,i.includes("Finger")?.3:.72),Wt.update(),Ct()};C("avatar-reset-pose").onclick=()=>{Cs.clear(),Ps(),gr()};for(let i of["x","y","z","axis","limit"])C("avatar-"+i).onchange=()=>{let e=Ne(),t=C("avatar-joint").value;e?.kind==="avatar"&&(ut(),e.avatarRig[t]=ho(t,{pivot:["x","y","z"].map(n=>C("avatar-"+n).valueAsNumber),axis:C("avatar-axis").value,limit:C("avatar-limit").valueAsNumber}),qe(),Ps(),gr())};C("avatar-bend").oninput=i=>{let e=C("avatar-joint").value,t=i.target.valueAsNumber/100;$i&&($i=!1,Ps(),es()),Cs.set(e,t),C("avatar-bend").value=t*100,jt?.setBend(e,t),Ct()};C("avatar-play").onclick=i=>{Wa()||i.preventDefault()};Xn(C("new-shape"),Object.entries(fo).filter(([i])=>i!=="asset"),"box");Xn(C("part-shape"),Object.entries(fo),"box");Xn(C("game-asset"),Qd.map(i=>[i.assetId,i.name]),Qd[0]?.assetId);C("add-game-asset").onclick=()=>y0(C("game-asset").value);Xn(C("part-surface"),Object.entries(rh),"plain");Xn(C("part-finish"),Object.entries(lr).map(([i,e])=>[i,e.label]),"original");Xn(C("part-zone"),Object.entries(Ad),"solid");C("trigger-portal").onchange=i=>{let e=at();if(e?.zone!=="trigger")return;let t=i.target.value.trim();if(t&&t!=="arena")try{let n=new URL(t);if(n.protocol!=="https:"||n.username||n.password)throw Error()}catch{_t("Destination invalide. Entre une URL HTTPS publique ou le mot arena.",!0),i.target.value=e.portal??"";return}ei(i.target),t?e.portal=t:delete e.portal,qe()};for(let i of["phase","text"])C("trigger-notice-"+i).onchange=e=>{let t=at();t?.zone==="trigger"&&(ei(e.target),t.notice={text:C("trigger-notice-text").value,phase:C("trigger-notice-phase").value},qe())};C("part-collisions").onchange=i=>{let e=Ne();!e||e.kind!=="structure"||(ut(),e.partCollisions=i.target.checked,mn=!1,qe(),Lt(),ti())};C("part-zone").onchange=i=>{let e=at();if(!e)return;ut(),e.zone=i.target.value;let t=sh(e.reaction&&{...e.reaction,phase:e.zone==="trigger"?"enter":"use"},e.zone);t?e.reaction=t:delete e.reaction,qe(),Is(),a0(),ti()};C("part-finish").onchange=i=>{let e=at();e&&(ut(),e.finish=i.target.value,qe(),Lt(),Dt())};for(let i of["projection","repeat","angle","u","v"])C("part-"+i).onchange=e=>{let t=at();if(!t)return;let n=e.target,s=i==="projection"?n.value:n.valueAsNumber;if(i!=="projection"&&!Number.isFinite(s)){Lt();return}let r=po(t);i==="u"||i==="v"?r.offset[i==="u"?0:1]=s:r[i]=s,ut(),t.uv=po({uv:r}),qe(),Lt(),Dt()};for(let i of["gravity","bounce"])C("model-"+i).onchange=e=>{let t=Ne();!t||!Number.isFinite(e.target.valueAsNumber)||(ut(),t.physics=Ia({physics:{...Ia(t),[i]:e.target.valueAsNumber}}),qe())};function Mf(){let i=at();!i||i.shape!=="custom"||Xg({name:i.name,initial:i.profile??uo(),onApply:e=>{if(!Ne()?.parts.includes(i))throw Error("La pi\xE8ce n\u2019existe plus.");ut(),i.profile=e,qe(),Lt(),Dt(),_t("Forme personnelle appliqu\xE9e \xB7 mod\xE8le pr\xEAt \xE0 enregistrer.")}})}C("edit-profile").onclick=Mf;C("add-part").onclick=()=>yf();for(let i of document.querySelectorAll("[data-shape]"))i.onclick=()=>{C("new-shape").value=i.dataset.shape,yf(i.dataset.shape)};C("part-paint").onclick=()=>{let i=at();if(!i)return;let e={plain:"solid",grid:"grid",stripes:"stripes",wood:"wood",speckle:"rock"};Hg({initial:i.texture,name:"Pi\xE8ce / "+i.name,tint:i.color,pattern:e[i.surface]??"grain",maxDataBytes:Tt.textureBytes-2e3,onApply:async t=>{if(!Ne()?.parts.includes(i))throw Error("La pi\xE8ce modifi\xE9e n\u2019existe plus dans ce mod\xE8le.");ut(),i.texture||(i.color="#ffffff"),i.texture=t,Ti(Je),qe(),Lt(),Dt(),_t("Texture peinte appliqu\xE9e \xE0 "+i.name+". Enregistre pour la retrouver en jeu.")}})};C("part-texture-clear").onclick=()=>{let i=at();i?.texture&&(ut(),i.texture=null,qe(),Lt(),Dt())};C("duplicate-part").onclick=Mh;C("group-parts").onclick=()=>xf();C("ungroup-parts").onclick=()=>xf(!0);C("delete-part").onclick=_f;C("mirror").onclick=vf;C("drop-to-grid").onclick=v0;C("reset-part").onclick=rw;C("center-part").onclick=ow;C("focus-part").onclick=()=>mr(!0);C("frame").onclick=()=>mr();C("view-front").onclick=()=>bf("front");C("view-side").onclick=()=>bf("side");C("view-top").onclick=()=>bf("top");C("grid-toggle").onchange=i=>{of.visible=i.target.checked,Ct()};C("snap-step").onchange=es;C("focus-toggle").onclick=()=>{document.body.classList.toggle("preview-fullscreen"),setTimeout(()=>window.dispatchEvent(new Event("resize")),0)};for(let i of["name","shape","color","surface"])C("part-"+i).addEventListener(i==="name"||i==="color"?"input":"change",e=>{let t=at();t&&(ei(e.target),i==="shape"&&e.target.value==="custom"&&t.shape!=="custom"&&(t.profile=uo(t.shape)),t[i]=e.target.value,qe(),Ci(),i==="name"?Lt():(Lt(),Dt(),i==="shape"&&t.shape==="custom"&&Mf()))});for(let i of document.querySelectorAll("[data-color]"))i.onclick=()=>{let e=at();e&&(ut(),e.color=i.dataset.color,qe(),Lt(),Dt())};for(let i of vo.querySelectorAll("button"))i.onclick=()=>{Eh();let e=i.dataset.action;["translate","rotate","scale"].includes(e)?Qn(e):e==="duplicate"?Mh():e==="mirror"?vf():e==="ground"?v0():e==="focus"?mr(!0):e==="delete"&&_f()};window.addEventListener("keydown",i=>{if(document.querySelector(".entity-sculptor[open]"))return;let e=i.target.closest?.("input,select,textarea,[contenteditable]");if(i.key==="Escape"){Eh(),!e&&!ot?.dragging&&Qn("select");return}if(ot?.dragging)return;let t=i.ctrlKey||i.metaKey;if(t&&!e){let s=i.key.toLowerCase();if(s==="z"){i.preventDefault(),i.shiftKey?nf():i0();return}if(s==="y"){i.preventDefault(),nf();return}if(s==="s"){i.preventDefault(),Wa();return}if(s==="d"){i.preventDefault(),Mh();return}if(s==="g"){i.preventDefault(),xf(i.shiftKey);return}}if(e||t||i.altKey)return;let n=i.key.toLowerCase();if(n==="v")Qn("select");else if(n==="g")Qn("translate");else if(n==="r")Qn("rotate");else if(n==="s")Qn("scale");else if(n==="f")mr(!0);else if(n==="a")mr();else if(n==="m")vf();else if(n==="delete"||n==="backspace")_f();else if(n==="d"&&i.shiftKey)Mh();else if("123456789".includes(n)&&n.length===1){let s=["box","sphere","cylinder","cone","torus","capsule","diamond","custom","tetrahedron"][Number(n)-1];s&&yf(s)}else return;i.preventDefault()});window.addEventListener("keydown",i=>{i.key==="Alt"&&ot&&(ot.setTranslationSnap(null),ot.setRotationSnap(null),ot.setScaleSnap(null))});window.addEventListener("keyup",i=>{i.key==="Alt"&&es()});window.addEventListener("beforeunload",i=>{Mo&&i.preventDefault()});jg&&(cf=y0(jg,!0)?.id);Ri();Ha.get("tab")==="avatar"&&wo("avatar");Mo&&_t("Brouillon r\xE9cup\xE9r\xE9 automatiquement");Ha.get("sculpt")==="1"&&C("entity-sculptor").click();})();
