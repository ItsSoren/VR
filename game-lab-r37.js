(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var bg=0,Sf=1,Sg=2;var Qa=1,wg=2,Si=3,ai=0,dn=1,At=2,qi=0,qr=1,$n=2,wf=3,Tf=4,Tg=5,mr=100,Ag=101,Eg=102,Cg=103,Rg=104,Pg=200,Ig=201,Lg=202,Dg=203,Tc=204,Ac=205,Ug=206,Fg=207,Ng=208,Bg=209,Og=210,zg=211,Vg=212,kg=213,Gg=214,nu=0,iu=1,ru=2,Xr=3,su=4,ou=5,au=6,lu=7,cu=0,Hg=1,Wg=2,Xi=0,qg=1,Xg=2,Yg=3,uu=4,Zg=5,jg=6,Jg=7;var Af=300,ns=301,is=302,po=303,hu=304,el=306,Vn=1e3,pr=1001,Ec=1002,cn=1003,$g=1004;var tl=1005;var un=1006,du=1007;var In=1008;var Wn=1009,Ef=1010,Cf=1011,mo=1012,fu=1013,xr=1014,hi=1015,wi=1016,pu=1017,mu=1018,go=1020,Rf=35902,Pf=35899,If=1021,Lf=1022,Ln=1023,js=1026,yo=1027,gu=1028,yu=1029,Df=1030,xu=1031;var vu=1033,nl=33776,il=33777,rl=33778,sl=33779,_u=35840,Mu=35841,bu=35842,Su=35843,wu=36196,Tu=37492,Au=37496,Eu=37808,Cu=37809,Ru=37810,Pu=37811,Iu=37812,Lu=37813,Du=37814,Uu=37815,Fu=37816,Nu=37817,Bu=37818,Ou=37819,zu=37820,Vu=37821,ku=36492,Gu=36494,Hu=36495,Wu=36283,qu=36284,Xu=36285,Yu=36286;var va=2300,Cc=2301,Sc=2302,uf=2400,hf=2401,df=2402;var Kg=3200,Qg=3201;var Zu=0,e0=1,Yi="",lt="srgb",Yr="srgb-linear",_a="linear",Mt="srgb";var Wr=7680;var ff=519,t0=512,n0=513,i0=514,Uf=515,r0=516,s0=517,o0=518,a0=519,Rc=35044,wn=35048;var Ff="300 es",oi=2e3,Ma=2001;var ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bm=1234567,ma=Math.PI/180,Js=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Nf(n,e){return(n%e+e)%e}function y_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function x_(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function v_(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function __(n,e=1){return e-Math.abs(Nf(n,e*2)-e)}function M_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function b_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function w_(n,e){return n+Math.random()*(e-n)}function T_(n){return n*(.5-Math.random())}function A_(n){n!==void 0&&(Bm=n);let e=Bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E_(n){return n*ma}function C_(n){return n*Js}function R_(n){return(n&n-1)===0&&n!==0}function P_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L_(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Fe={DEG2RAD:ma,RAD2DEG:Js,generateUUID:vi,clamp:Qe,euclideanModulo:Nf,mapLinear:y_,inverseLerp:x_,lerp:ga,damp:v_,pingpong:__,smoothstep:M_,smootherstep:b_,randInt:S_,randFloat:w_,randFloatSpread:T_,seededRandom:A_,degToRad:E_,radToDeg:C_,isPowerOfTwo:R_,ceilPowerOfTwo:P_,floorPowerOfTwo:I_,setQuaternionFromProperEuler:L_,normalize:_t,denormalize:si},Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=y;return}if(d!==y||l!==f||c!==h||u!==p){let m=1-a,g=l*f+c*h+u*p+d*y,b=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){let C=Math.sqrt(S),A=Math.atan2(C,g*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let v=a*b;if(l=l*m+f*v,c=c*m+h*v,u=u*m+p*v,d=d*m+y*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Om.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ud=new _,Om=new qe,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],y=r[0],m=r[3],g=r[6],b=r[1],S=r[4],v=r[7],C=r[2],A=r[5],L=r[8];return s[0]=o*y+a*b+l*C,s[3]=o*m+a*S+l*A,s[6]=o*g+a*v+l*L,s[1]=c*y+u*b+d*C,s[4]=c*m+u*S+d*A,s[7]=c*g+u*v+d*L,s[2]=f*y+h*b+p*C,s[5]=f*m+h*S+p*A,s[8]=f*g+h*v+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fd.makeScale(e,t)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fd=new nt;function Bf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l0(){let n=$s("canvas");return n.style.display="block",n}var zm={};function Ks(n){n in zm||(zm[n]=!0,console.warn(n))}function c0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Vm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){let n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?_a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:Vm,fromXYZ:km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Vm,fromXYZ:km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),n}var dt=D_();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cs,Pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=$s("canvas")),Cs.width=e.width,Cs.height=e.height;let r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},U_=0,Qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nd(r[o].image)):s.push(Nd(r[o]))}else s=Nd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var F_=0,Bd=new _,gn=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pr,r=pr,s=un,o=In,a=Ln,l=Wn,c=n.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=vi(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Af;gn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(h+1)/2,C=(g+1)/2,A=(u+f)/4,L=(d+y)/4,U=(p+m)/4;return S>v&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=L/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ic{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ba=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Zl.subVectors(this.max,ia),Rs.subVectors(e.a,ia),Ps.subVectors(e.b,ia),Is.subVectors(e.c,ia),lr.subVectors(Ps,Rs),cr.subVectors(Is,Ps),Vr.subVectors(Rs,Is);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Vr.z,Vr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Vr.z,0,-Vr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Vr.y,Vr.x,0];return!Od(t,Rs,Ps,Is,Zl)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,Rs,Ps,Is,Zl))?!1:(jl.crossVectors(lr,cr),t=[jl.x,jl.y,jl.z],Od(t,Rs,Ps,Is,Zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new _,new _,new _,new _,new _,new _,new _,new _],ni=new _,Yl=new tn,Rs=new _,Ps=new _,Is=new _,lr=new _,cr=new _,Vr=new _,ia=new _,Zl=new _,jl=new _,kr=new _;function Od(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){kr.fromArray(n,s);let a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=t.dot(kr),u=i.dot(kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var N_=new tn,ra=new _,zd=new _,jn=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):N_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(zd)),this.expandByPoint(ra.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ni=new _,Vd=new _,Jl=new _,ur=new _,kd=new _,$l=new _,Gd=new _,Zr=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vd.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Vd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Jl),a=ur.dot(this.direction),l=-ur.dot(Jl),c=ur.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Vd).addScaledVector(Jl,f),h}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){kd.subVectors(t,e),$l.subVectors(i,e),Gd.crossVectors(kd,$l);let o=this.direction.dot(Gd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);let l=a*this.direction.dot($l.crossVectors(ur,$l));if(l<0)return null;let c=a*this.direction.dot(kd.cross(ur));if(c<0||l+c>o)return null;let u=-a*ur.dot(Gd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,y,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,y=c*d;t[0]=f+y*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,y=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,O_)}lookAt(e,t,i){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(i,On),hr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(i,On)),hr.normalize(),Kl.crossVectors(On,hr),r[0]=hr.x,r[4]=Kl.x,r[8]=On.x,r[1]=hr.y,r[5]=Kl.y,r[9]=On.y,r[2]=hr.z,r[6]=Kl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],y=i[6],m=i[10],g=i[14],b=i[3],S=i[7],v=i[11],C=i[15],A=r[0],L=r[4],U=r[8],w=r[12],M=r[1],E=r[5],F=r[9],N=r[13],G=r[2],W=r[6],k=r[10],J=r[14],B=r[3],oe=r[7],le=r[11],_e=r[15];return s[0]=o*A+a*M+l*G+c*B,s[4]=o*L+a*E+l*W+c*oe,s[8]=o*U+a*F+l*k+c*le,s[12]=o*w+a*N+l*J+c*_e,s[1]=u*A+d*M+f*G+h*B,s[5]=u*L+d*E+f*W+h*oe,s[9]=u*U+d*F+f*k+h*le,s[13]=u*w+d*N+f*J+h*_e,s[2]=p*A+y*M+m*G+g*B,s[6]=p*L+y*E+m*W+g*oe,s[10]=p*U+y*F+m*k+g*le,s[14]=p*w+y*N+m*J+g*_e,s[3]=b*A+S*M+v*G+C*B,s[7]=b*L+S*E+v*W+C*oe,s[11]=b*U+S*F+v*k+C*le,s[15]=b*w+S*N+v*J+C*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],y=e[7],m=e[11],g=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+y*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],y=e[13],m=e[14],g=e[15],b=d*m*c-y*f*c+y*l*h-a*m*h-d*l*g+a*f*g,S=p*f*c-u*m*c-p*l*h+o*m*h+u*l*g-o*f*g,v=u*y*c-p*d*c+p*a*h-o*y*h-u*a*g+o*d*g,C=p*d*l-u*y*l-p*a*f+o*y*f+u*a*m-o*d*m,A=t*b+i*S+r*v+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=b*L,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*g-i*f*g)*L,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*g+i*l*g)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*L,e[4]=S*L,e[5]=(u*m*s-p*f*s+p*r*h-t*m*h-u*r*g+t*f*g)*L,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*L,e[8]=v*L,e[9]=(p*d*s-u*y*s-p*i*h+t*y*h+u*i*g-t*d*g)*L,e[10]=(o*y*s-p*a*s+p*i*c-t*y*c-o*i*g+t*a*g)*L,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*L,e[12]=C*L,e[13]=(u*y*r-p*d*r+p*i*f-t*y*f-u*i*m+t*d*m)*L,e[14]=(p*a*r-o*y*r-p*i*l+t*y*l+o*i*m-t*a*m)*L,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,y=o*u,m=o*d,g=a*d,b=l*c,S=l*u,v=l*d,C=i.x,A=i.y,L=i.z;return r[0]=(1-(y+g))*C,r[1]=(h+v)*C,r[2]=(p-S)*C,r[3]=0,r[4]=(h-v)*A,r[5]=(1-(f+g))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(p+S)*L,r[9]=(m-b)*L,r[10]=(1-(f+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let c=1/s,u=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,y;if(l)p=s/(o-s),y=o*s/(o-s);else if(a===oi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ma)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,y;if(l)p=1/(o-s),y=o/(o-s);else if(a===oi)p=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ma)p=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new _,ii=new ct,B_=new _(0,0,0),O_=new _(1,1,1),hr=new _,Kl=new _,On=new _,Gm=new ct,Hm=new qe,nn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z_=0,Wm=new _,Ds=new qe,Bi=new ct,Ql=new _,sa=new _,V_=new _,k_=new qe,qm=new _(1,0,0),Xm=new _(0,1,0),Ym=new _(0,0,1),Zm={type:"added"},G_={type:"removed"},Us={type:"childadded",child:null},Hd={type:"childremoved",child:null},Nt=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new _,t=new nn,i=new qe,r=new _(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new nt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ql.copy(e):Ql.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(sa,Ql,this.up):Bi.lookAt(Ql,sa,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Nt.DEFAULT_UP=new _(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new _,Oi=new _,Wd=new _,zi=new _,Fs=new _,Ns=new _,jm=new _,qd=new _,Xd=new _,Yd=new _,Zd=new ut,jd=new ut,Jd=new ut,Cn=class n{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Oi.subVectors(i,t),Wd.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(Oi),l=ri.dot(Wd),c=Oi.dot(Oi),u=Oi.dot(Wd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Zd.setScalar(0),jd.setScalar(0),Jd.setScalar(0),Zd.fromBufferAttribute(e,t),jd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zd,s.x),o.addScaledVector(jd,s.y),o.addScaledVector(Jd,s.z),o}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Oi.subVectors(e,t),ri.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ri.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Fs.subVectors(r,i),Ns.subVectors(s,i),qd.subVectors(e,i);let l=Fs.dot(qd),c=Ns.dot(qd);if(l<=0&&c<=0)return t.copy(i);Xd.subVectors(e,r);let u=Fs.dot(Xd),d=Ns.dot(Xd);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Yd.subVectors(e,s);let h=Fs.dot(Yd),p=Ns.dot(Yd);if(p>=0&&h<=p)return t.copy(s);let y=h*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ns,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return jm.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(jm,a);let g=1/(m+y+f);return o=y*g,a=f*g,t.copy(i).addScaledVector(Fs,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function $d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Nf(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$d(o,s,e+1/3),this.g=$d(o,s,e),this.b=$d(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=u0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return dt.workingToColorSpace(mn.copy(this),e),Math.round(Qe(mn.r*255,0,255))*65536+Math.round(Qe(mn.g*255,0,255))*256+Math.round(Qe(mn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=lt){dt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(ec);let i=ga(dr.h,ec.h,t),r=ga(dr.s,ec.s,t),s=ga(dr.l,ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new De;De.NAMES=u0;var H_=0,Jn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=qr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ac&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gt=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new _,tc=new Se,W_=0,ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var jr=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},q_=0,Zn=new ct,Kd=new Nt,Bs=new _,zn=new tn,oa=new tn,ln=new _,Je=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?Sa:jr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(zn.min,oa.min),zn.expandByPoint(ln),ln.addVectors(zn.max,oa.max),zn.expandByPoint(ln)):(zn.expandByPoint(oa.min),zn.expandByPoint(oa.max))}zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),ln.add(Bs)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new _,l[U]=new _;let c=new _,u=new _,d=new _,f=new Se,h=new Se,p=new Se,y=new _,m=new _;function g(U,w,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,U),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(E),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(E),a[U].add(y),a[w].add(y),a[M].add(y),l[U].add(m),l[w].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,w=b.length;U<w;++U){let M=b[U],E=M.start,F=M.count;for(let N=E,G=E+F;N<G;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new _,v=new _,C=new _,A=new _;function L(U){C.fromBufferAttribute(r,U),A.copy(C);let w=a[U];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),v.crossVectors(A,w);let E=v.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,E)}for(let U=0,w=b.length;U<w;++U){let M=b[U],E=M.start,F=M.count;for(let N=E,G=E+F;N<G;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new _,s=new _,o=new _,a=new _,l=new _,c=new _,u=new _,d=new _;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jm=new ct,Gr=new Zr,nc=new jn,$m=new _,ic=new _,rc=new _,sc=new _,Qd=new _,oc=new _,Km=new _,ac=new _,ze=class extends Nt{constructor(e=new Je,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){oc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Qd.fromBufferAttribute(d,e),o?oc.addScaledVector(Qd,u):oc.addScaledVector(Qd.sub(t),u))}t.add(oc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(nc.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(nc,$m)===null||Gr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,C=S;v<C;v+=3){let A=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);r=lc(this,g,e,i,c,u,d,A,L,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=p,g=y;m<g;m+=3){let b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=lc(this,o,e,i,c,u,d,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,C=S;v<C;v+=3){let A=v,L=v+1,U=v+2;r=lc(this,g,e,i,c,u,d,A,L,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=p,g=y;m<g;m+=3){let b=m,S=m+1,v=m+2;r=lc(this,o,e,i,c,u,d,b,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function X_(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;ac.copy(a),ac.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ac);return c<t.near||c>t.far?null:{distance:c,point:ac.clone(),object:n}}function lc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ic),n.getVertexPosition(l,rc),n.getVertexPosition(c,sc);let u=X_(n,e,t,i,ic,rc,sc,Km);if(u){let d=new _;Cn.getBarycoord(Km,ic,rc,sc,d),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,d,new Se)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,d,new Se)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,d,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};Cn.getNormal(ic,rc,sc,f.normal),u.face=f,u.barycoord=d}return u}var Ke=class n extends Je{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function p(y,m,g,b,S,v,C,A,L,U,w){let M=v/L,E=C/U,F=v/2,N=C/2,G=A/2,W=L+1,k=U+1,J=0,B=0,oe=new _;for(let le=0;le<k;le++){let _e=le*E-N;for(let ie=0;ie<W;ie++){let we=ie*M-F;oe[y]=we*b,oe[m]=_e*S,oe[g]=G,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[m]=0,oe[g]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(ie/L),d.push(1-le/U),J+=1}}for(let le=0;le<U;le++)for(let _e=0;_e<L;_e++){let ie=f+_e+W*le,we=f+_e+W*(le+1),fe=f+(_e+1)+W*(le+1),de=f+(_e+1)+W*le;l.push(ie,we,de),l.push(we,fe,de),B+=6}a.addGroup(h,B,w),h+=B,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=rs(n[t]);for(let r in i)e[r]=i[r]}return e}function Y_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Of(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var ju={clone:rs,merge:yn},Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},wa=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fr=new _,Qm=new Se,eg=new Se,Zt=class extends wa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,eg),t.subVectors(eg,Qm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,zs=1,Dc=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Os,zs,e,t);r.layers=this.layers,this.add(r);let s=new Zt(Os,zs,e,t);s.layers=this.layers,this.add(s);let o=new Zt(Os,zs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Os,zs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Os,zs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Os,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ta=class extends gn{constructor(e=[],t=ns,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ke(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:qi});s.uniforms.tEquirect.value=t;let o=new ze(r,s),a=t.minFilter;return t.minFilter===In&&(t.minFilter=un),new Dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},vt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},J_={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Aa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new _,no=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},io=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,aa=new _,ks=new _,Gs=new _,Hs=new Se,la=new Se,h0=new ct,cc=new _,ca=new _,uc=new _,tg=new Se,ef=new Se,ng=new Se,Ca=class extends Nt{constructor(e=new io){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ea(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new no(i,3,0,!1)),Vs.setAttribute("uv",new no(i,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),h0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Gs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;hc(cc.set(-.5,-.5,0),Gs,o,ks,r,s),hc(ca.set(.5,-.5,0),Gs,o,ks,r,s),hc(uc.set(.5,.5,0),Gs,o,ks,r,s),tg.set(0,0),ef.set(1,0),ng.set(1,1);let a=e.ray.intersectTriangle(cc,ca,uc,!1,aa);if(a===null&&(hc(ca.set(-.5,.5,0),Gs,o,ks,r,s),ef.set(0,1),a=e.ray.intersectTriangle(cc,uc,ca,!1,aa),a===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Cn.getInterpolation(aa,cc,ca,uc,tg,ef,ng,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hc(n,e,t,i,r,s){Hs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(la.x=s*Hs.x-r*Hs.y,la.y=r*Hs.x+s*Hs.y):la.copy(Hs),n.copy(e),n.x+=la.x,n.y+=la.y,n.applyMatrix4(h0)}var _i=class extends gn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=cn,u=cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ro=class extends ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new ct,ig=new ct,dc=[],rg=new tn,$_=new ct,ua=new ze,ha=new jn,Ra=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),rg.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(rg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),ha.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ws),ig.multiplyMatrices(i,Ws),ua.matrixWorld=ig,ua.raycast(e,dc);for(let o=0,a=dc.length;o<a;o++){let l=dc[o];l.instanceId=s,l.object=this,t.push(l)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,gu,hi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tf=new _,K_=new _,Q_=new nt,En=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tf.subVectors(i,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Q_.getNormalMatrix(e),r=this.coplanarPoint(tf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new jn,eM=new Se(.5,.5),fc=new _,so=class{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],y=s[9],m=s[10],g=s[11],b=s[12],S=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,g-p,C-b).normalize(),r[1].setComponents(c+o,h+u,g+p,C+b).normalize(),r[2].setComponents(c+a,h+d,g+y,C+S).normalize(),r[3].setComponents(c-a,h-d,g-y,C-S).normalize(),i)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,h-f,g-m,C-v).normalize();else if(r[4].setComponents(c-l,h-f,g-m,C-v).normalize(),t===oi)r[5].setComponents(c+l,h+f,g+m,C+v).normalize();else if(t===Ma)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);let t=eM.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(fc.x=r.normal.x>0?e.max.x:e.min.x,fc.y=r.normal.y>0?e.max.y:e.min.y,fc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fc=new _,Nc=new _,sg=new ct,da=new Zr,pc=new jn,nf=new _,og=new _,Pa=class extends Nt{constructor(e=new Je,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fc.fromBufferAttribute(t,r-1),Nc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fc.distanceTo(Nc);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;sg.copy(r).invert(),da.copy(e.ray).applyMatrix4(sg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=h,m=p-1;y<m;y+=c){let g=u.getX(y),b=u.getX(y+1),S=mc(this,e,da,l,g,b,y);S&&t.push(S)}if(this.isLineLoop){let y=u.getX(p-1),m=u.getX(h),g=mc(this,e,da,l,y,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=h,m=p-1;y<m;y+=c){let g=mc(this,e,da,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=mc(this,e,da,l,p-1,h,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function mc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Fc.fromBufferAttribute(a,r),Nc.fromBufferAttribute(a,s),t.distanceSqToSegment(Fc,Nc,nf,og)>i)return;nf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(nf);if(!(c<e.near||c>e.far))return{distance:c,point:og.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ag=new _,lg=new _,$r=class extends Pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ag.fromBufferAttribute(t,r),lg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ag.distanceTo(lg);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends Pa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},oo=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cg=new ct,pf=new Zr,gc=new jn,yc=new _,La=class extends Nt{constructor(e=new Je,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(r),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;cg.copy(r).invert(),pf.copy(e.ray).applyMatrix4(cg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,y=h;p<y;p++){let m=c.getX(p);yc.fromBufferAttribute(d,m),ug(yc,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,y=h;p<y;p++)yc.fromBufferAttribute(d,p),ug(yc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ug(n,e,t,i,r,s,o){let a=pf.distanceSqToPoint(n);if(a<t){let l=new _;pf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends gn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Da=class extends gn{constructor(e,t,i=xr,r,s,o,a=cn,l=cn,c,u=js,d=1){if(u!==js&&u!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ua=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kr=class n extends Je{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,y=r+1,m=new _,g=new _;for(let b=0;b<=p;b++){let S=0,v=0,C=0,A=0;if(b<=i){let w=b/i,M=w*Math.PI/2;v=-u-e*Math.cos(M),C=e*Math.sin(M),A=-e*Math.cos(M),S=w*d}else if(b<=i+s){let w=(b-i)/s;v=-u+w*t,C=e,A=0,S=d+w*f}else{let w=(b-i-s)/i,M=w*Math.PI/2;v=u+e*Math.sin(M),C=e*Math.cos(M),A=e*Math.sin(M),S=d+f+w*d}let L=Math.max(0,Math.min(1,S/h)),U=0;b===0?U=.5/r:b===p&&(U=-.5/r);for(let w=0;w<=r;w++){let M=w/r,E=M*Math.PI*2,F=Math.sin(E),N=Math.cos(E);g.x=-C*N,g.y=v,g.z=C*F,a.push(g.x,g.y,g.z),m.set(-C*N,A,C*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+U,L)}if(b>0){let w=(b-1)*y;for(let M=0;M<r;M++){let E=w+M,F=w+M+1,N=b*y+M,G=b*y+M+1;o.push(E,F,N),o.push(F,G,N)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zt=class n extends Je{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class n extends Je{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,y=[],m=i/2,g=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function b(){let v=new _,C=new _,A=0,L=(t-e)/i;for(let U=0;U<=s;U++){let w=[],M=U/s,E=M*(t-e)+e;for(let F=0;F<=r;F++){let N=F/r,G=N*l+a,W=Math.sin(G),k=Math.cos(G);C.x=E*W,C.y=-M*i+m,C.z=E*k,d.push(C.x,C.y,C.z),v.set(W,L,k).normalize(),f.push(v.x,v.y,v.z),h.push(N,1-M),w.push(p++)}y.push(w)}for(let U=0;U<r;U++)for(let w=0;w<s;w++){let M=y[w][U],E=y[w+1][U],F=y[w+1][U+1],N=y[w][U+1];(e>0||w!==0)&&(u.push(M,E,N),A+=3),(t>0||w!==s-1)&&(u.push(E,F,N),A+=3)}c.addGroup(g,A,0),g+=A}function S(v){let C=p,A=new Se,L=new _,U=0,w=v===!0?e:t,M=v===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),p++;let E=p;for(let F=0;F<=r;F++){let G=F/r*l+a,W=Math.cos(G),k=Math.sin(G);L.x=w*k,L.y=m*M,L.z=w*W,d.push(L.x,L.y,L.z),f.push(0,M,0),A.x=W*.5+.5,A.y=k*.5*M+.5,h.push(A.x,A.y),p++}for(let F=0;F<r;F++){let N=C+F,G=E+F;v===!0?u.push(G,G+1,N):u.push(G+1,G,N),U+=3}c.addGroup(g,U,v===!0?1:2),g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class n extends Lt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ao=class n extends Je{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new _,v=new _,C=new _;for(let A=0;A<t.length;A+=3)h(t[A+0],S),h(t[A+1],v),h(t[A+2],C),l(S,v,C,b)}function l(b,S,v,C){let A=C+1,L=[];for(let U=0;U<=A;U++){L[U]=[];let w=b.clone().lerp(v,U/A),M=S.clone().lerp(v,U/A),E=A-U;for(let F=0;F<=E;F++)F===0&&U===A?L[U][F]=w:L[U][F]=w.clone().lerp(M,F/E)}for(let U=0;U<A;U++)for(let w=0;w<2*(A-U)-1;w++){let M=Math.floor(w/2);w%2===0?(f(L[U][M+1]),f(L[U+1][M]),f(L[U][M])):(f(L[U][M+1]),f(L[U+1][M+1]),f(L[U+1][M]))}}function c(b){let S=new _;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(b),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){let b=new _;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];let v=m(b)/2/Math.PI+.5,C=g(b)/Math.PI+.5;o.push(v,1-C)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let S=o[b+0],v=o[b+2],C=o[b+4],A=Math.max(S,v,C),L=Math.min(S,v,C);A>.9&&L<.1&&(S<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function h(b,S){let v=b*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let b=new _,S=new _,v=new _,C=new _,A=new Se,L=new Se,U=new Se;for(let w=0,M=0;w<s.length;w+=9,M+=6){b.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),C.copy(b).add(S).add(v).divideScalar(3);let E=m(C);y(A,M+0,b,E),y(L,M+2,S,E),y(U,M+4,v,E)}}function y(b,S,v,C){C<0&&b.x===1&&(o[S]=b.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Se:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new _,r=[],s=[],o=[],a=new _,l=new ct;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Qe(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lo=class extends kn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bc=class extends lo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var xc=new _,rf=new zf,sf=new zf,of=new zf,Oc=class extends kn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(xc.subVectors(r[0],r[1]).add(r[0]),c=xc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),rf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,y,m),sf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,y,m),of.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(rf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),sf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),of.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(rf.calc(l),sf.calc(l),of.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function tM(n,e){let t=1-n;return t*t*e}function nM(n,e){return 2*(1-n)*n*e}function iM(n,e){return n*n*e}function ya(n,e,t,i){return tM(n,e)+nM(n,t)+iM(n,i)}function rM(n,e){let t=1-n;return t*t*t*e}function sM(n,e){let t=1-n;return 3*t*t*n*e}function oM(n,e){return 3*(1-n)*n*n*e}function aM(n,e){return n*n*n*e}function xa(n,e,t,i,r){return rM(n,e)+sM(n,t)+oM(n,i)+aM(n,r)}var Fa=class extends kn{constructor(e=new Se,t=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Se){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xa(e,r.x,s.x,o.x,a.x),xa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends kn{constructor(e=new _,t=new _,i=new _,r=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(xa(e,r.x,s.x,o.x,a.x),xa(e,r.y,s.y,o.y,a.y),xa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends kn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends kn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends kn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends kn{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y),ya(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(hg(a,l.x,c.x,u.x,d.x),hg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Se().fromArray(r))}return this}},mf=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:Oc,CubicBezierCurve:Fa,CubicBezierCurve3:zc,EllipseCurve:lo,LineCurve:Na,LineCurve3:Vc,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:kc,SplineCurve:Oa}),Gc=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new mf[r.type]().fromJSON(r))}return this}},za=class extends Gc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Na(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ba(this.currentPoint.clone(),new Se(e,t),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Fa(this.currentPoint.clone(),new Se(e,t),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new lo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},li=class extends za{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new za().fromJSON(r))}return this}};function lM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=d0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=fM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Va(s,o,t,a,l,c,0),o}function d0(n,e,t,i,r){let s;if(r===wM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=dg(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=dg(o/i|0,n[o],n[o+1],s);return s&&co(s,s.next)&&(Ga(s),s=s.next),s}function Qr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(co(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Va(n,e,t,i,r,s,o){if(!n)return;!o&&s&&xM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?uM(n,i,r,s):cM(n)){e.push(l.i,n.i,c.i),Ga(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hM(Qr(n),e),Va(n,e,t,i,r,s,2)):o===2&&dM(n,e,t,i,r,s):Va(Qr(n),e,t,i,r,s,1);break}}}function cM(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&pa(r,a,s,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function uM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ht(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),y=Math.max(a,l,c),m=Math.max(u,d,f),g=gf(h,p,e,t,i),b=gf(y,m,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=b;){if(S.x>=h&&S.x<=y&&S.y>=p&&S.y<=m&&S!==r&&S!==o&&pa(a,u,l,d,c,f,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=h&&v.x<=y&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&pa(a,u,l,d,c,f,v.x,v.y)&&Ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=h&&S.x<=y&&S.y>=p&&S.y<=m&&S!==r&&S!==o&&pa(a,u,l,d,c,f,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=y&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&pa(a,u,l,d,c,f,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!co(i,r)&&p0(i,t,t.next,r)&&ka(i,r)&&ka(r,i)&&(e.push(i.i,t.i,r.i),Ga(t),Ga(t.next),t=n=r),t=t.next}while(t!==n);return Qr(t)}function dM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&MM(o,a)){let l=m0(o,a);o=Qr(o,o.next),l=Qr(l,l.next),Va(o,e,t,i,r,s,0),Va(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function fM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=d0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(_M(c))}r.sort(pM);for(let s=0;s<r.length;s++)t=mM(r[s],t);return t}function pM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function mM(n,e){let t=gM(n,e);if(!t)return e;let i=m0(t,n);return Qr(i,i.next),Qr(t,t.next)}function gM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(co(n,t))return t;do{if(co(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&f0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);ka(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&yM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function yM(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function xM(n,e,t,i){let r=n;do r.z===0&&(r.z=gf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,vM(r)}function vM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function gf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _M(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function f0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function pa(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&f0(n,e,t,i,r,s,o,a)}function MM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bM(n,e)&&(ka(n,e)&&ka(e,n)&&SM(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||co(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function co(n,e){return n.x===e.x&&n.y===e.y}function p0(n,e,t,i){let r=_c(Ht(n,e,t)),s=_c(Ht(n,e,i)),o=_c(Ht(t,i,n)),a=_c(Ht(t,i,e));return!!(r!==s&&o!==a||r===0&&vc(n,t,e)||s===0&&vc(n,i,e)||o===0&&vc(t,n,i)||a===0&&vc(t,e,i))}function vc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _c(n){return n>0?1:n<0?-1:0}function bM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&p0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ka(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function SM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function m0(n,e){let t=yf(n.i,n.x,n.y),i=yf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function dg(n,e,t,i){let r=yf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var xf=class{static triangulate(e,t,i=2){return lM(e,t,i)}},xi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];fg(e),pg(i,e);let o=e.length;t.forEach(fg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,pg(i,t[l]);let a=xf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function fg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Hi=class n extends Je{constructor(e=new li([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:TM,S,v=!1,C,A,L,U;g&&(S=g.getSpacedPoints(u),v=!0,f=!1,C=g.computeFrenetFrames(u,!1),A=new _,L=new _,U=new _),f||(m=0,h=0,p=0,y=0);let w=a.extractPoints(c),M=w.shape,E=w.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let X=0,ne=E.length;X<ne;X++){let Z=E[X];xi.isClockWise(Z)&&(E[X]=Z.reverse())}}function N(X){let Z=10000000000000001e-36,D=X[0];for(let Y=1;Y<=X.length;Y++){let z=Y%X.length,Q=X[z],se=Q.x-D.x,ue=Q.y-D.y,R=se*se+ue*ue,x=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(D.x),Math.abs(D.y)),I=Z*x*x;if(R<=I){X.splice(z,1),Y--;continue}D=Q}}N(M),E.forEach(N);let G=E.length,W=M;for(let X=0;X<G;X++){let ne=E[X];M=M.concat(ne)}function k(X,ne,Z){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ne,Z)}let J=M.length;function B(X,ne,Z){let D,Y,z,Q=X.x-ne.x,se=X.y-ne.y,ue=Z.x-X.x,R=Z.y-X.y,x=Q*Q+se*se,I=Q*R-se*ue;if(Math.abs(I)>Number.EPSILON){let H=Math.sqrt(x),re=Math.sqrt(ue*ue+R*R),j=ne.x-se/H,xe=ne.y+Q/H,pe=Z.x-R/re,be=Z.y+ue/re,Me=((pe-j)*R-(be-xe)*ue)/(Q*R-se*ue);D=j+Q*Me-X.x,Y=xe+se*Me-X.y;let he=D*D+Y*Y;if(he<=2)return new Se(D,Y);z=Math.sqrt(he/2)}else{let H=!1;Q>Number.EPSILON?ue>Number.EPSILON&&(H=!0):Q<-Number.EPSILON?ue<-Number.EPSILON&&(H=!0):Math.sign(se)===Math.sign(R)&&(H=!0),H?(D=-se,Y=Q,z=Math.sqrt(x)):(D=Q,Y=se,z=Math.sqrt(x/2))}return new Se(D/z,Y/z)}let oe=[];for(let X=0,ne=W.length,Z=ne-1,D=X+1;X<ne;X++,Z++,D++)Z===ne&&(Z=0),D===ne&&(D=0),oe[X]=B(W[X],W[Z],W[D]);let le=[],_e,ie=oe.concat();for(let X=0,ne=G;X<ne;X++){let Z=E[X];_e=[];for(let D=0,Y=Z.length,z=Y-1,Q=D+1;D<Y;D++,z++,Q++)z===Y&&(z=0),Q===Y&&(Q=0),_e[D]=B(Z[D],Z[z],Z[Q]);le.push(_e),ie=ie.concat(_e)}let we;if(m===0)we=xi.triangulateShape(W,E);else{let X=[],ne=[];for(let Z=0;Z<m;Z++){let D=Z/m,Y=h*Math.cos(D*Math.PI/2),z=p*Math.sin(D*Math.PI/2)+y;for(let Q=0,se=W.length;Q<se;Q++){let ue=k(W[Q],oe[Q],z);Ce(ue.x,ue.y,-Y),D===0&&X.push(ue)}for(let Q=0,se=G;Q<se;Q++){let ue=E[Q];_e=le[Q];let R=[];for(let x=0,I=ue.length;x<I;x++){let H=k(ue[x],_e[x],z);Ce(H.x,H.y,-Y),D===0&&R.push(H)}D===0&&ne.push(R)}}we=xi.triangulateShape(X,ne)}let fe=we.length,de=p+y;for(let X=0;X<J;X++){let ne=f?k(M[X],ie[X],de):M[X];v?(L.copy(C.normals[0]).multiplyScalar(ne.x),A.copy(C.binormals[0]).multiplyScalar(ne.y),U.copy(S[0]).add(L).add(A),Ce(U.x,U.y,U.z)):Ce(ne.x,ne.y,0)}for(let X=1;X<=u;X++)for(let ne=0;ne<J;ne++){let Z=f?k(M[ne],ie[ne],de):M[ne];v?(L.copy(C.normals[X]).multiplyScalar(Z.x),A.copy(C.binormals[X]).multiplyScalar(Z.y),U.copy(S[X]).add(L).add(A),Ce(U.x,U.y,U.z)):Ce(Z.x,Z.y,d/u*X)}for(let X=m-1;X>=0;X--){let ne=X/m,Z=h*Math.cos(ne*Math.PI/2),D=p*Math.sin(ne*Math.PI/2)+y;for(let Y=0,z=W.length;Y<z;Y++){let Q=k(W[Y],oe[Y],D);Ce(Q.x,Q.y,d+Z)}for(let Y=0,z=E.length;Y<z;Y++){let Q=E[Y];_e=le[Y];for(let se=0,ue=Q.length;se<ue;se++){let R=k(Q[se],_e[se],D);v?Ce(R.x,R.y+S[u-1].y,S[u-1].x+Z):Ce(R.x,R.y,d+Z)}}}$(),K();function $(){let X=r.length/3;if(f){let ne=0,Z=J*ne;for(let D=0;D<fe;D++){let Y=we[D];O(Y[2]+Z,Y[1]+Z,Y[0]+Z)}ne=u+m*2,Z=J*ne;for(let D=0;D<fe;D++){let Y=we[D];O(Y[0]+Z,Y[1]+Z,Y[2]+Z)}}else{for(let ne=0;ne<fe;ne++){let Z=we[ne];O(Z[2],Z[1],Z[0])}for(let ne=0;ne<fe;ne++){let Z=we[ne];O(Z[0]+J*u,Z[1]+J*u,Z[2]+J*u)}}i.addGroup(X,r.length/3-X,0)}function K(){let X=r.length/3,ne=0;me(W,ne),ne+=W.length;for(let Z=0,D=E.length;Z<D;Z++){let Y=E[Z];me(Y,ne),ne+=Y.length}i.addGroup(X,r.length/3-X,1)}function me(X,ne){let Z=X.length;for(;--Z>=0;){let D=Z,Y=Z-1;Y<0&&(Y=X.length-1);for(let z=0,Q=u+m*2;z<Q;z++){let se=J*z,ue=J*(z+1),R=ne+D+se,x=ne+Y+se,I=ne+Y+ue,H=ne+D+ue;ye(R,x,I,H)}}}function Ce(X,ne,Z){l.push(X),l.push(ne),l.push(Z)}function O(X,ne,Z){ge(X),ge(ne),ge(Z);let D=r.length/3,Y=b.generateTopUV(i,r,D-3,D-2,D-1);T(Y[0]),T(Y[1]),T(Y[2])}function ye(X,ne,Z,D){ge(X),ge(ne),ge(D),ge(ne),ge(Z),ge(D);let Y=r.length/3,z=b.generateSideWallUV(i,r,Y-6,Y-3,Y-2,Y-1);T(z[0]),T(z[1]),T(z[3]),T(z[1]),T(z[2]),T(z[3])}function ge(X){r.push(l[X*3+0]),r.push(l[X*3+1]),r.push(l[X*3+2])}function T(X){s.push(X.x),s.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return AM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mf[r.type]().fromJSON(r)),new n(i,e.options)}},TM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],y=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(f,1-p),new Se(y,1-g)]:[new Se(a,1-l),new Se(u,1-d),new Se(h,1-p),new Se(m,1-g)]}};function AM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rt=class n extends ao{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ha=class n extends Je{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Qe(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new _,f=new Se,h=new _,p=new _,y=new _,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,y.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),l.push(h.x,h.y,h.z),y.copy(p)}for(let b=0;b<=t;b++){let S=i+b*u*r,v=Math.sin(S),C=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*v,d.y=e[A].y,d.z=e[A].x*C,o.push(d.x,d.y,d.z),f.x=b/t,f.y=A/(e.length-1),a.push(f.x,f.y);let L=l[3*A+0]*v,U=l[3*A+1],w=l[3*A+0]*C;c.push(L,U,w)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let v=S+b*e.length,C=v,A=v+e.length,L=v+e.length+1,U=v+1;s.push(C,A,U),s.push(L,U,A)}this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ci=class n extends ao{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wt=class n extends Je{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let b=g*f-o;for(let S=0;S<c;S++){let v=S*d-s;p.push(v,-b,0),y.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let S=b+c*g,v=b+c*(g+1),C=b+1+c*(g+1),A=b+1+c*g;h.push(S,v,A),h.push(v,C,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(y,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},uo=class n extends Je{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new _,p=new Se;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){let g=s+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let y=0;y<r;y++){let m=y*(i+1);for(let g=0;g<i;g++){let b=g+m,S=b,v=b+i+1,C=b+i+2,A=b+1;a.push(S,v,A),a.push(v,C,A)}}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wa=class n extends Je{constructor(e=new li([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;xi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];xi.isClockWise(b)===!0&&(p[m]=b.reverse())}let y=xi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];h=h.concat(b)}for(let m=0,g=h.length;m<g;m++){let b=h[m];r.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=y.length;m<g;m++){let b=y[m],S=b[0]+d,v=b[1]+d,C=b[2]+d;i.push(S,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return EM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function EM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Gn=class n extends Je{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new _,f=new _,h=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let b=[],S=g/i,v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+S*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(A+v,1-S),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let S=u[g][b+1],v=u[g][b],C=u[g+1][b],A=u[g+1][b+1];(g!==0||o>0)&&h.push(S,v,A),(g!==i-1||l<Math.PI)&&h.push(v,C,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(y,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},qa=class n extends ao{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ui=class n extends Je{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new _,d=new _,f=new _;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let y=p/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let y=(r+1)*h+p-1,m=(r+1)*(h-1)+p-1,g=(r+1)*(h-1)+p,b=(r+1)*h+p;o.push(y,m,b),o.push(m,g,b)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var es=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new _,s=new _;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,y=f+h;p<y;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,b),mg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),mg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var pt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xa=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pt=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hc=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wc=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function CM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ts=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends ts{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hf:s=e,a=2*t-i;break;case df:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hf:o=e,l=2*i-t;break;case df:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),y=p*p,m=y*p,g=-f*m+2*f*y-f*p,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,S=(-1-h)*m+(1.5+h)*y+.5*p,v=h*m-h*y;for(let C=0;C!==a;++C)s[C]=g*o[u+C]+b*o[c+C]+S*o[l+C]+v*o[d+C];return s}},Xc=class extends ts{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Yc=class extends ts{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mc(t,this.TimeBufferType),this.values=Mc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mc(e.times,Array),values:Mc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case Cc:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&CM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Sc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let y=t[d+p];if(y!==t[f+p]||y!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Cc;var gr=class extends Hn{constructor(e,t,i){super(e,t,i)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=va;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};Zc.prototype.ValueTypeName="color";var jc=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};jc.prototype.ValueTypeName="number";var Jc=class extends ts{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ya=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var yr=class extends Hn{constructor(e,t,i){super(e,t,i)}};yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=va;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};$c.prototype.ValueTypeName="vector";var wc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Kc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},g0=new Kc,ho=class{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=new WeakMap,Qc=class extends ho{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=wc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=qs.get(o);d===void 0&&(d=[],qs.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=$s("img");function l(){u(),t&&t(this);let d=qs.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}qs.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),wc.remove(`image:${e}`);let f=qs.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}qs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var bi=class extends ho{constructor(e){super(e)}load(e,t,i,r){let s=new gn,o=new Qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},fo=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Za=class extends fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},af=new ct,gg=new _,yg=new _,eu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(gg),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xg=new ct,fa=new _,lf=new _,vf=class extends eu{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),i.position.copy(fa),lf.copy(i.position),lf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lf),i.updateMatrixWorld(),r.makeTranslation(-fa.x,-fa.y,-fa.z),xg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xg,i.coordinateSystem,i.reversedDepth)}},ja=class extends fo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ja=class extends wa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_f=class extends eu{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new _f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var tu=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vf="\\[\\]\\.:\\/",RM=new RegExp("["+Vf+"]","g"),kf="[^"+Vf+"]",PM="[^"+Vf.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",kf),LM=/(WCOD+)?/.source.replace("WCOD",PM),DM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kf),UM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kf),FM=new RegExp("^"+IM+LM+DM+UM+"$"),NM=["material","materials","bones","map"],Mf=class{constructor(e,t,i){let r=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(RM,"")}static parseTrackName(e){let t=FM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);NM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Mf;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t2=new Float32Array(1);var vg=new ct,Wi=class{constructor(e,t,i=0,r=1/0){this.ray=new Zr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vg),this}intersectObject(e,t=!0,i=[]){return bf(e,this,i,t),i.sort(_g),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bf(e[r],this,i,t);return i.sort(_g),i}};function _g(n,e){return n.distance-e.distance}function bf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)bf(s[o],e,t,!0)}}var Mg=new _,bc=new _,Xs=new _,Ys=new _,cf=new _,BM=new _,OM=new _,Ka=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mg.subVectors(e,this.start),bc.subVectors(this.end,this.start);let i=bc.dot(bc),s=bc.dot(Mg)/i;return t&&(s=Qe(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=BM,i=OM){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Xs.subVectors(c,a),Ys.subVectors(u,l),cf.subVectors(a,l);let d=Xs.dot(Xs),f=Ys.dot(Ys),h=Ys.dot(cf);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=Qe(o,0,1);else{let p=Xs.dot(cf);if(f<=r)o=0,s=Qe(-p/d,0,1);else{let y=Xs.dot(Ys),m=d*f-y*y;m!==0?s=Qe((y*h-p*f)/m,0,1):s=0,o=(y*s+h)/f,o<0?(o=0,s=Qe(-p/d,0,1)):o>1&&(o=1,s=Qe((y-p)/d,0,1))}}return t.copy(a).add(Xs.multiplyScalar(s)),i.copy(l).add(Ys.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Gf(n,e,t,i){let r=zM(i);switch(t){case If:return n*e;case gu:return n*e/r.components*r.byteLength;case yu:return n*e/r.components*r.byteLength;case Df:return n*e*2/r.components*r.byteLength;case xu:return n*e*2/r.components*r.byteLength;case Lf:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case vu:return n*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mu:case Su:return Math.max(n,16)*Math.max(e,8)/4;case _u:case bu:return Math.max(n,8)*Math.max(e,8)/2;case wu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ku:case Gu:case Hu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wu:case qu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xu:case Yu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zM(n){switch(n){case Wn:case Ef:return{byteLength:1,components:1};case mo:case Cf:case wi:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case xr:case fu:case hi:return{byteLength:4,components:1};case Rf:case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],y=d[h];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
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
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
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
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
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
#endif`,Hb=`struct PhysicalMaterial {
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
}`,Wb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e1=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,a1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,U1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
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
}`,$1=`#if DEPTH_PACKING == 3200
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
}`,K1=`#define DISTANCE
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
}`,Q1=`#define DISTANCE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#define LAMBERT
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
}`,aS=`#define LAMBERT
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
}`,lS=`#define MATCAP
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
}`,cS=`#define MATCAP
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
}`,uS=`#define NORMAL
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
}`,hS=`#define NORMAL
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
}`,dS=`#define PHONG
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
}`,fS=`#define PHONG
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
}`,pS=`#define STANDARD
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
}`,mS=`#define STANDARD
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
}`,gS=`#define TOON
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
}`,yS=`#define TOON
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
}`,xS=`uniform float size;
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
}`,vS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,MS=`uniform vec3 color;
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
}`,bS=`uniform float rotation;
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
}`,SS=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:qM,alphahash_pars_fragment:XM,alphamap_fragment:YM,alphamap_pars_fragment:ZM,alphatest_fragment:jM,alphatest_pars_fragment:JM,aomap_fragment:$M,aomap_pars_fragment:KM,batching_pars_vertex:QM,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:sb,clipping_planes_fragment:ob,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:hb,color_pars_vertex:db,color_vertex:fb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:yb,displacementmap_vertex:xb,emissivemap_fragment:vb,emissivemap_pars_fragment:_b,colorspace_fragment:Mb,colorspace_pars_fragment:bb,envmap_fragment:Sb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Bb,envmap_vertex:Eb,fog_vertex:Cb,fog_pars_vertex:Rb,fog_fragment:Pb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Lb,lightmap_pars_fragment:Db,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Fb,lights_pars_begin:Nb,lights_toon_fragment:Ob,lights_toon_pars_fragment:zb,lights_phong_fragment:Vb,lights_phong_pars_fragment:kb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Wb,lights_fragment_maps:qb,lights_fragment_end:Xb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Zb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Jb,map_fragment:$b,map_pars_fragment:Kb,map_particle_fragment:Qb,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:o1,morphtarget_vertex:a1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:u1,normal_pars_vertex:h1,normal_vertex:d1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:y1,opaque_fragment:x1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:M1,dithering_fragment:b1,dithering_pars_fragment:S1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:E1,shadowmap_vertex:C1,shadowmask_pars_fragment:R1,skinbase_vertex:P1,skinning_pars_vertex:I1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:U1,specularmap_pars_fragment:F1,tonemapping_fragment:N1,tonemapping_pars_fragment:B1,transmission_fragment:O1,transmission_pars_fragment:z1,uv_pars_fragment:V1,uv_pars_vertex:k1,uv_vertex:G1,worldpos_vertex:H1,background_vert:W1,background_frag:q1,backgroundCube_vert:X1,backgroundCube_frag:Y1,cube_vert:Z1,cube_frag:j1,depth_vert:J1,depth_frag:$1,distanceRGBA_vert:K1,distanceRGBA_frag:Q1,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:rS,meshbasic_frag:sS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:uS,meshnormal_frag:hS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:yS,points_vert:xS,points_frag:vS,shadow_vert:_S,shadow_frag:MS,sprite_vert:bS,sprite_frag:SS},Ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([Ue.points,Ue.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([Ue.common,Ue.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([Ue.sprite,Ue.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:yn([Ue.common,Ue.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:yn([Ue.lights,Ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ju={r:0,b:0,g:0},ss=new nn,wS=new ct;function TS(n,e,t,i,r,s,o){let a=new De(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function y(S){let v=!1,C=p(S);C===null?g(a,l):C&&C.isColor&&(g(C,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){let C=p(v);C&&(C.isCubeTexture||C.mapping===el)?(u===void 0&&(u=new ze(new Ke(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:rs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ss.copy(v.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(ss)),u.material.toneMapped=dt.getTransfer(C.colorSpace)!==Mt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ze(new Wt(2,2),new hn({name:"BackgroundMaterial",uniforms:rs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(C.colorSpace)!==Mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,v){S.getRGB(Ju,Of(n)),i.buffers.color.setClear(Ju.r,Ju.g,Ju.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:y,addToRenderList:m,dispose:b}}function AS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,E,F,N,G){let W=!1,k=d(N,F,E);s!==k&&(s=k,c(s.object)),W=h(M,N,F,G),W&&p(M,N,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,E,F,N),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,E,F){let N=F.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let W=G[E.id];W===void 0&&(W={},G[E.id]=W);let k=W[N];return k===void 0&&(k=f(l()),W[N]=k),k}function f(M){let E=[],F=[],N=[];for(let G=0;G<t;G++)E[G]=0,F[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:N,object:M,attributes:{},index:null}}function h(M,E,F,N){let G=s.attributes,W=E.attributes,k=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let le=G[B],_e=W[B];if(_e===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function p(M,E,F,N){let G={},W=E.attributes,k=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let le=W[B];le===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));let _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),G[B]=_e,k++}s.attributes=G,s.attributesNum=k,s.index=N}function y(){let M=s.newAttributes;for(let E=0,F=M.length;E<F;E++)M[E]=0}function m(M){g(M,0)}function g(M,E){let F=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;F[M]=1,N[M]===0&&(n.enableVertexAttribArray(M),N[M]=1),G[M]!==E&&(n.vertexAttribDivisor(M,E),G[M]=E)}function b(){let M=s.newAttributes,E=s.enabledAttributes;for(let F=0,N=E.length;F<N;F++)E[F]!==M[F]&&(n.disableVertexAttribArray(F),E[F]=0)}function S(M,E,F,N,G,W,k){k===!0?n.vertexAttribIPointer(M,E,F,G,W):n.vertexAttribPointer(M,E,F,N,G,W)}function v(M,E,F,N){y();let G=N.attributes,W=F.getAttributes(),k=E.defaultAttributeValues;for(let J in W){let B=W[J];if(B.location>=0){let oe=G[J];if(oe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let le=oe.normalized,_e=oe.itemSize,ie=e.get(oe);if(ie===void 0)continue;let we=ie.buffer,fe=ie.type,de=ie.bytesPerElement,$=fe===n.INT||fe===n.UNSIGNED_INT||oe.gpuType===fu;if(oe.isInterleavedBufferAttribute){let K=oe.data,me=K.stride,Ce=oe.offset;if(K.isInstancedInterleavedBuffer){for(let O=0;O<B.locationSize;O++)g(B.location+O,K.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let O=0;O<B.locationSize;O++)m(B.location+O);n.bindBuffer(n.ARRAY_BUFFER,we);for(let O=0;O<B.locationSize;O++)S(B.location+O,_e/B.locationSize,fe,le,me*de,(Ce+_e/B.locationSize*O)*de,$)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<B.locationSize;K++)g(B.location+K,oe.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<B.locationSize;K++)m(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,we);for(let K=0;K<B.locationSize;K++)S(B.location+K,_e/B.locationSize,fe,le,_e*de,_e/B.locationSize*K*de,$)}}else if(k!==void 0){let le=k[J];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(B.location,le);break;case 3:n.vertexAttrib3fv(B.location,le);break;case 4:n.vertexAttrib4fv(B.location,le);break;default:n.vertexAttrib1fv(B.location,le)}}}}b()}function C(){U();for(let M in i){let E=i[M];for(let F in E){let N=E[F];for(let G in N)u(N[G].object),delete N[G];delete E[F]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let E=i[M.id];for(let F in E){let N=E[F];for(let G in N)u(N[G].object),delete N[G];delete E[F]}delete i[M.id]}function L(M){for(let E in i){let F=i[E];if(F[M.id]===void 0)continue;let N=F[M.id];for(let G in N)u(N[G].object),delete N[G];delete F[M.id]}}function U(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function ES(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y]*f[y];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Ln&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function RS(n){let e=this,t=null,i=0,r=!1,s=!1,o=new En,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,S=b*4,v=g.clippingState||null;l.value=v,v=u(p,f,S,h);for(let C=0;C!==S;++C)v[C]=t[C];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=h+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=h;S!==y;++S,v+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function PS(n){let e=new WeakMap;function t(o,a){return a===po?o.mapping=ns:a===hu&&(o.mapping=is),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===po||a===hu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Uc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var vo=4,y0=[.125,.215,.35,.446,.526,.582],ls=20,Hf=new Ja,x0=new De,Wf=null,qf=0,Xf=0,Yf=!1,as=(1+Math.sqrt(5))/2,xo=1/as,v0=[new _(-as,xo,0),new _(as,xo,0),new _(-xo,0,as),new _(xo,0,as),new _(0,as,-xo),new _(0,as,xo),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],IS=new _,Mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=IS}=s;Wf=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,qf,Xf),this._renderer.xr.enabled=Yf,e.scissorTest=!1,$u(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Xf=this._renderer.getActiveMipmapLevel(),Yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:wi,format:Ln,colorSpace:Yr,depthBuffer:!1},r=_0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LS(s)),this._blurMaterial=DS(s,e,t)}return r}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Hf)}_sceneToCubeUV(e,t,i,r,s){let l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(x0),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let y=new gt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new ze(new Ke,y),g=!1,b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,g=!0):(y.color.copy(x0),g=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let C=this._cubeSize;$u(r,v*C,S>2?C:0,C,C),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;$u(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=v0[(r-s-1)%v0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ze(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ls-1),y=s/p,m=isFinite(s)?1+Math.floor(u*y):ls;m>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let g=[],b=0;for(let L=0;L<ls;++L){let U=L/y,w=Math.exp(-U*U/2);g.push(w),L===0?b+=w:L<m&&(b+=2*w)}for(let L=0;L<g.length;L++)g[L]=g[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-i;let v=this._sizeLods[r],C=3*v*(r>S-vo?r-S+vo:0),A=4*(this._cubeSize-v);$u(t,C,A,3*v,2*v),l.setRenderTarget(t),l.render(d,Hf)}};function LS(n){let e=[],t=[],i=[],r=n,s=n-vo+1+y0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vo?l=y0[o-n+vo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,y=3,m=2,g=1,b=new Float32Array(y*p*h),S=new Float32Array(m*p*h),v=new Float32Array(g*p*h);for(let A=0;A<h;A++){let L=A%3*2/3-1,U=A>2?0:-1,w=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(w,y*p*A),S.set(f,m*p*A);let M=[A,A,A,A,A,A];v.set(M,g*p*A)}let C=new Je;C.setAttribute("position",new ft(b,y)),C.setAttribute("uv",new ft(S,m)),C.setAttribute("faceIndex",new ft(v,g)),e.push(C),r>vo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _0(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $u(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DS(n,e,t){let i=new Float32Array(ls),r=new _(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ip(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function M0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ip(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function b0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ip(){return`

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
	`}function US(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===po||l===hu,u=l===ns||l===is;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Mo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function FS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NS(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,y=0;if(h!==null){let b=h.array;y=h.version;for(let S=0,v=b.length;S<v;S+=3){let C=b[S+0],A=b[S+1],L=b[S+2];f.push(C,A,A,L,L,C)}}else if(p!==void 0){let b=p.array;y=p.version;for(let S=0,v=b.length/3-1;S<v;S+=3){let C=S+0,A=S+1,L=S+2;f.push(C,A,A,L,L,C)}}else return;let m=new(Bf(f)?Sa:jr)(f,1);m.version=y;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function BS(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function d(f,h,p,y){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,p);let g=0;for(let b=0;b<p;b++)g+=h[b]*y[b];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function OS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zS(n,e,t){let i=new WeakMap,r=new ut;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;h===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*C*4*d),L=new ba(A,v,C,d);L.type=hi,L.needsUpdate=!0;let U=S*4;for(let M=0;M<d;M++){let E=m[M],F=g[M],N=b[M],G=v*C*4*M;for(let W=0;W<E.count;W++){let k=W*U;h===!0&&(r.fromBufferAttribute(E,W),A[G+k+0]=r.x,A[G+k+1]=r.y,A[G+k+2]=r.z,A[G+k+3]=0),p===!0&&(r.fromBufferAttribute(F,W),A[G+k+4]=r.x,A[G+k+5]=r.y,A[G+k+6]=r.z,A[G+k+7]=0),y===!0&&(r.fromBufferAttribute(N,W),A[G+k+8]=r.x,A[G+k+9]=r.y,A[G+k+10]=r.z,A[G+k+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Se(v,C)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function VS(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var k0=new gn,S0=new Da(1,1),G0=new ba,H0=new Lc,W0=new Ta,w0=[],T0=[],A0=new Float32Array(16),E0=new Float32Array(9),C0=new Float32Array(4);function bo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=w0[r];if(s===void 0&&(s=new Float32Array(r),w0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eh(n,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function HS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function WS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function qS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;C0.set(i),n.uniformMatrix2fv(this.addr,!1,C0),on(t,i)}}function XS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),on(t,i)}}function YS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;A0.set(i),n.uniformMatrix4fv(this.addr,!1,A0),on(t,i)}}function ZS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function JS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function $S(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function KS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function ew(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function tw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function nw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(S0.compareFunction=Uf,s=S0):s=k0,t.setTexture2D(e||s,r)}function iw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||H0,r)}function rw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||W0,r)}function sw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||G0,r)}function ow(n){switch(n){case 5126:return kS;case 35664:return GS;case 35665:return HS;case 35666:return WS;case 35674:return qS;case 35675:return XS;case 35676:return YS;case 5124:case 35670:return ZS;case 35667:case 35671:return jS;case 35668:case 35672:return JS;case 35669:case 35673:return $S;case 5125:return KS;case 36294:return QS;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function aw(n,e){n.uniform1fv(this.addr,e)}function lw(n,e){let t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function cw(n,e){let t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function uw(n,e){let t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function hw(n,e){let t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dw(n,e){let t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fw(n,e){let t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pw(n,e){n.uniform1iv(this.addr,e)}function mw(n,e){n.uniform2iv(this.addr,e)}function gw(n,e){n.uniform3iv(this.addr,e)}function yw(n,e){n.uniform4iv(this.addr,e)}function xw(n,e){n.uniform1uiv(this.addr,e)}function vw(n,e){n.uniform2uiv(this.addr,e)}function _w(n,e){n.uniform3uiv(this.addr,e)}function Mw(n,e){n.uniform4uiv(this.addr,e)}function bw(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||k0,s[o])}function Sw(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||H0,s[o])}function ww(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||W0,s[o])}function Tw(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||G0,s[o])}function Aw(n){switch(n){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return hw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return yw;case 5125:return xw;case 36294:return vw;case 36295:return _w;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}var jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}},Jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Aw(t.type)}},$f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Zf=/(\w+)(\])?(\[|\.)?/g;function R0(n,e){n.seq.push(e),n.map[e.id]=e}function Ew(n,e,t){let i=n.name,r=i.length;for(Zf.lastIndex=0;;){let s=Zf.exec(i),o=Zf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){R0(t,c===void 0?new jf(a,n,e):new Jf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new $f(a),R0(t,d)),t=d}}}var _o=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ew(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function P0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Cw=37297,Rw=0;function Pw(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var I0=new nt;function Iw(n){dt._getMatrix(I0,dt.workingColorSpace,n);let e=`mat3( ${I0.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function L0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Pw(n.getShaderSource(e),a)}else return s}function Lw(n,e){let t=Iw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dw(n,e){let t;switch(e){case qg:t="Linear";break;case Xg:t="Reinhard";break;case Yg:t="Cineon";break;case uu:t="ACESFilmic";break;case jg:t="AgX";break;case Jg:t="Neutral";break;case Zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ku=new _;function Uw(){dt.getLuminanceCoefficients(Ku);let n=Ku.x.toFixed(4),e=Ku.y.toFixed(4),t=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function Nw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ol(n){return n!==""}function D0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(n){return n.replace(Ow,Vw)}var zw=new Map;function Vw(n,e){let t=st[e];if(t===void 0){let i=zw.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(t)}var kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(n){return n.replace(kw,Gw)}function Gw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function N0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Hw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function Xw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hg:e="ENVMAP_BLENDING_MIX";break;case Wg:e="ENVMAP_BLENDING_ADD";break}return e}function Yw(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zw(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Hw(t),c=Ww(t),u=qw(t),d=Xw(t),f=Yw(t),h=Fw(t),p=Nw(s),y=r.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ol).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ol).join(`
`),g.length>0&&(g+=`
`)):(m=[N0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),g=[N0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?st.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Dw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Lw("linearToOutputTexel",t.outputColorSpace),Uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ol).join(`
`)),o=Kf(o),o=D0(o,t),o=U0(o,t),a=Kf(a),a=D0(a,t),a=U0(a,t),o=F0(o),a=F0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=b+m+o,v=b+g+a,C=P0(r,r.VERTEX_SHADER,S),A=P0(r,r.FRAGMENT_SHADER,v);r.attachShader(y,C),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(E){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(y)||"",N=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(A)||"",W=F.trim(),k=N.trim(),J=G.trim(),B=!0,oe=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,A);else{let le=L0(r,C,"vertex"),_e=L0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+le+`
`+_e)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||J==="")&&(oe=!1);oe&&(E.diagnostics={runnable:B,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:g}})}r.deleteShader(C),r.deleteShader(A),U=new _o(r,y),w=Bw(r,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,Cw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}var jw=0,Qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ep(e),t.set(e,i)),i}},ep=class{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}};function Jw(n,e,t,i,r,s,o){let a=new eo,l=new Qf,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,E,F,N){let G=F.fog,W=N.geometry,k=w.isMeshStandardMaterial?F.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),B=J&&J.mapping===el?J.image.height:null,oe=p[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=le!==void 0?le.length:0,ie=0;W.morphAttributes.position!==void 0&&(ie=1),W.morphAttributes.normal!==void 0&&(ie=2),W.morphAttributes.color!==void 0&&(ie=3);let we,fe,de,$;if(oe){let xt=Ti[oe];we=xt.vertexShader,fe=xt.fragmentShader}else we=w.vertexShader,fe=w.fragmentShader,l.update(w),de=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);let K=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,O=N.isBatchedMesh===!0,ye=!!w.map,ge=!!w.matcap,T=!!J,X=!!w.aoMap,ne=!!w.lightMap,Z=!!w.bumpMap,D=!!w.normalMap,Y=!!w.displacementMap,z=!!w.emissiveMap,Q=!!w.metalnessMap,se=!!w.roughnessMap,ue=w.anisotropy>0,R=w.clearcoat>0,x=w.dispersion>0,I=w.iridescence>0,H=w.sheen>0,re=w.transmission>0,j=ue&&!!w.anisotropyMap,xe=R&&!!w.clearcoatMap,pe=R&&!!w.clearcoatNormalMap,be=R&&!!w.clearcoatRoughnessMap,Me=I&&!!w.iridescenceMap,he=I&&!!w.iridescenceThicknessMap,Te=H&&!!w.sheenColorMap,Ve=H&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Pe=!!w.specularColorMap,We=!!w.specularIntensityMap,q=re&&!!w.transmissionMap,Re=re&&!!w.thicknessMap,Le=!!w.gradientMap,Oe=!!w.alphaMap,Ee=w.alphaTest>0,ve=!!w.alphaHash,He=!!w.extensions,tt=Xi;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(tt=n.toneMapping);let It={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:fe,defines:w.defines,customVertexShaderID:de,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:O,batchingColor:O&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yr,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:ge,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:ne,bumpMap:Z,normalMap:D,displacementMap:f&&Y,emissiveMap:z,normalMapObjectSpace:D&&w.normalMapType===e0,normalMapTangentSpace:D&&w.normalMapType===Zu,metalnessMap:Q,roughnessMap:se,anisotropy:ue,anisotropyMap:j,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:pe,clearcoatRoughnessMap:be,dispersion:x,iridescence:I,iridescenceMap:Me,iridescenceThicknessMap:he,sheen:H,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:We,transmission:re,transmissionMap:q,thicknessMap:Re,gradientMap:Le,opaque:w.transparent===!1&&w.blending===qr&&w.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Ee,alphaHash:ve,combine:w.combine,mapUv:ye&&y(w.map.channel),aoMapUv:X&&y(w.aoMap.channel),lightMapUv:ne&&y(w.lightMap.channel),bumpMapUv:Z&&y(w.bumpMap.channel),normalMapUv:D&&y(w.normalMap.channel),displacementMapUv:Y&&y(w.displacementMap.channel),emissiveMapUv:z&&y(w.emissiveMap.channel),metalnessMapUv:Q&&y(w.metalnessMap.channel),roughnessMapUv:se&&y(w.roughnessMap.channel),anisotropyMapUv:j&&y(w.anisotropyMap.channel),clearcoatMapUv:xe&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&y(w.sheenRoughnessMap.channel),specularMapUv:Ae&&y(w.specularMap.channel),specularColorMapUv:Pe&&y(w.specularColorMap.channel),specularIntensityMapUv:We&&y(w.specularIntensityMap.channel),transmissionMapUv:q&&y(w.transmissionMap.channel),thicknessMapUv:Re&&y(w.thicknessMap.channel),alphaMapUv:Oe&&y(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||ue),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ye||Oe),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:z&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===At,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||O)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function g(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let E in w.defines)M.push(E),M.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(b(M,w),S(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let M=p[w.type],E;if(M){let F=Ti[M];E=ju.clone(F.uniforms)}else E=w.uniforms;return E}function C(w,M){let E;for(let F=0,N=u.length;F<N;F++){let G=u[F];if(G.cacheKey===M){E=G,++E.usedTimes;break}}return E===void 0&&(E=new Zw(n,M,w,s),u.push(E)),E}function A(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:U}}function $w(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Kw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function B0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,y,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:y,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=y,g.group=m),e++,g}function a(d,f,h,p,y,m){let g=o(d,f,h,p,y,m);h.transmission>0?i.push(g):h.transparent===!0?r.push(g):t.push(g)}function l(d,f,h,p,y,m){let g=o(d,f,h,p,y,m);h.transmission>0?i.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||Kw),i.length>1&&i.sort(f||B0),r.length>1&&r.sort(f||B0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Qw(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new O0,n.set(i,[o])):r>=s.length?(o=new O0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new De};break;case"SpotLight":t={position:new _,direction:new _,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function tT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var nT=0;function iT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rT(n){let e=new eT,t=tT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let r=new _,s=new ct,o=new ct;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,y=0,m=0,g=0,b=0,S=0,v=0,C=0,A=0,L=0;c.sort(iT);for(let w=0,M=c.length;w<M;w++){let E=c[w],F=E.color,N=E.intensity,G=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],N);L++}else if(E.isDirectionalLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=E.shadow.matrix,b++}i.directional[h]=k,h++}else if(E.isSpotLight){let k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=G,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[y]=k;let J=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,J.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=J.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=W,v++}y++}else if(E.isRectAreaLight){let k=e.get(E);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=k,m++}else if(E.isPointLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){let J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=E.shadow.matrix,S++}i.point[p]=k,p++}else if(E.isHemisphereLight){let k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(N),k.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[g]=k,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==g||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==C||U.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,U.directionalLength=h,U.pointLength=p,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=g,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=C,U.numLightProbes=L,i.version=nT++)}function l(c,u){let d=0,f=0,h=0,p=0,y=0,m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let S=c[g];if(S.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function z0(n){let e=new rT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new z0(n),e.set(r,[a])):s>=o.length?(a=new z0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function lT(n,e,t){let i=new so,r=new Se,s=new Se,o=new ut,a=new Hc({depthPacking:Qg}),l=new Wc,c={},u=t.maxTextureSize,d={[ai]:dn,[dn]:ai,[At]:At},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:oT,fragmentShader:aT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new Je;p.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ze(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let g=this.type;this.render=function(A,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=g!==Si&&this.type===Si,G=g===Si&&this.type!==Si;for(let W=0,k=A.length;W<k;W++){let J=A[W],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let oe=B.getFrameExtents();if(r.multiply(oe),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,B.mapSize.y=s.y)),B.map===null||N===!0||G===!0){let _e=this.type!==Si?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(r.x,r.y,_e),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let le=B.getViewportCount();for(let _e=0;_e<le;_e++){let ie=B.getViewport(_e);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(o),B.updateMatrices(J,_e),i=B.getFrustum(),v(L,U,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===Si&&b(B,U),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,E)};function b(A,L){let U=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,y,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,U,h,y,null)}function S(A,L,U,w){let M=null,E=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)M=E;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=M.uuid,N=L.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let W=G[N];W===void 0&&(W=M.clone(),G[N]=W,L.addEventListener("dispose",C)),M=W}if(M.visible=L.visible,M.wireframe=L.wireframe,w===Si?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=n.properties.get(M);F.light=U}return M}function v(A,L,U,w,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let N=e.update(A),G=A.material;if(Array.isArray(G)){let W=N.groups;for(let k=0,J=W.length;k<J;k++){let B=W[k],oe=G[B.materialIndex];if(oe&&oe.visible){let le=S(A,oe,w,M);A.onBeforeShadow(n,A,L,U,N,le,B),n.renderBufferDirect(U,null,N,le,A,B),A.onAfterShadow(n,A,L,U,N,le,B)}}}else if(G.visible){let W=S(A,G,w,M);A.onBeforeShadow(n,A,L,U,N,W,null),n.renderBufferDirect(U,null,N,W,A,null),A.onAfterShadow(n,A,L,U,N,W,null)}}let F=A.children;for(let N=0,G=F.length;N<G;N++)v(F[N],L,U,w,M)}function C(A){A.target.removeEventListener("dispose",C);for(let U in c){let w=c[U],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var cT={[nu]:iu,[ru]:au,[su]:lu,[Xr]:ou,[iu]:nu,[au]:ru,[lu]:su,[ou]:Xr};function uT(n,e){function t(){let q=!1,Re=new ut,Le=null,Oe=new ut(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!q&&(n.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,ve,He,tt,It){It===!0&&(Ee*=tt,ve*=tt,He*=tt),Re.set(Ee,ve,He,tt),Oe.equals(Re)===!1&&(n.clearColor(Ee,ve,He,tt),Oe.copy(Re))},reset:function(){q=!1,Le=null,Oe.set(-1,0,0,0)}}}function i(){let q=!1,Re=!1,Le=null,Oe=null,Ee=null;return{setReversed:function(ve){if(Re!==ve){let He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;let tt=Ee;Ee=null,this.setClear(tt)}},getReversed:function(){return Re},setTest:function(ve){ve?K(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!q&&(n.depthMask(ve),Le=ve)},setFunc:function(ve){if(Re&&(ve=cT[ve]),Oe!==ve){switch(ve){case nu:n.depthFunc(n.NEVER);break;case iu:n.depthFunc(n.ALWAYS);break;case ru:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case su:n.depthFunc(n.EQUAL);break;case ou:n.depthFunc(n.GEQUAL);break;case au:n.depthFunc(n.GREATER);break;case lu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ve}},setLocked:function(ve){q=ve},setClear:function(ve){Ee!==ve&&(Re&&(ve=1-ve),n.clearDepth(ve),Ee=ve)},reset:function(){q=!1,Le=null,Oe=null,Ee=null,Re=!1}}}function r(){let q=!1,Re=null,Le=null,Oe=null,Ee=null,ve=null,He=null,tt=null,It=null;return{setTest:function(xt){q||(xt?K(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!q&&(n.stencilMask(xt),Re=xt)},setFunc:function(xt,Ui,yi){(Le!==xt||Oe!==Ui||Ee!==yi)&&(n.stencilFunc(xt,Ui,yi),Le=xt,Oe=Ui,Ee=yi)},setOp:function(xt,Ui,yi){(ve!==xt||He!==Ui||tt!==yi)&&(n.stencilOp(xt,Ui,yi),ve=xt,He=Ui,tt=yi)},setLocked:function(xt){q=xt},setClear:function(xt){It!==xt&&(n.clearStencil(xt),It=xt)},reset:function(){q=!1,Re=null,Le=null,Oe=null,Ee=null,ve=null,He=null,tt=null,It=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,y=!1,m=null,g=null,b=null,S=null,v=null,C=null,A=null,L=new De(0,0,0),U=0,w=!1,M=null,E=null,F=null,N=null,G=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=J>=2);let oe=null,le={},_e=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),we=new ut().fromArray(_e),fe=new ut().fromArray(ie);function de(q,Re,Le,Oe){let Ee=new Uint8Array(4),ve=n.createTexture();n.bindTexture(q,ve),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Le;He++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Re+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ve}let $={};$[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Xr),Z(!1),D(Sf),K(n.CULL_FACE),X(qi);function K(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function me(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Ce(q,Re){return d[q]!==Re?(n.bindFramebuffer(q,Re),d[q]=Re,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Re),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function O(q,Re){let Le=h,Oe=!1;if(q){Le=f.get(Re),Le===void 0&&(Le=[],f.set(Re,Le));let Ee=q.textures;if(Le.length!==Ee.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)Le[ve]=n.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,Oe=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Le)}function ye(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let ge={[mr]:n.FUNC_ADD,[Ag]:n.FUNC_SUBTRACT,[Eg]:n.FUNC_REVERSE_SUBTRACT};ge[Cg]=n.MIN,ge[Rg]=n.MAX;let T={[Pg]:n.ZERO,[Ig]:n.ONE,[Lg]:n.SRC_COLOR,[Tc]:n.SRC_ALPHA,[Og]:n.SRC_ALPHA_SATURATE,[Ng]:n.DST_COLOR,[Ug]:n.DST_ALPHA,[Dg]:n.ONE_MINUS_SRC_COLOR,[Ac]:n.ONE_MINUS_SRC_ALPHA,[Bg]:n.ONE_MINUS_DST_COLOR,[Fg]:n.ONE_MINUS_DST_ALPHA,[zg]:n.CONSTANT_COLOR,[Vg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[Gg]:n.ONE_MINUS_CONSTANT_ALPHA};function X(q,Re,Le,Oe,Ee,ve,He,tt,It,xt){if(q===qi){y===!0&&(me(n.BLEND),y=!1);return}if(y===!1&&(K(n.BLEND),y=!0),q!==Tg){if(q!==m||xt!==w){if((g!==mr||v!==mr)&&(n.blendEquation(n.FUNC_ADD),g=mr,v=mr),xt)switch(q){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,S=null,C=null,A=null,L.set(0,0,0),U=0,m=q,w=xt}return}Ee=Ee||Re,ve=ve||Le,He=He||Oe,(Re!==g||Ee!==v)&&(n.blendEquationSeparate(ge[Re],ge[Ee]),g=Re,v=Ee),(Le!==b||Oe!==S||ve!==C||He!==A)&&(n.blendFuncSeparate(T[Le],T[Oe],T[ve],T[He]),b=Le,S=Oe,C=ve,A=He),(tt.equals(L)===!1||It!==U)&&(n.blendColor(tt.r,tt.g,tt.b,It),L.copy(tt),U=It),m=q,w=!1}function ne(q,Re){q.side===At?me(n.CULL_FACE):K(n.CULL_FACE);let Le=q.side===dn;Re&&(Le=!Le),Z(Le),q.blending===qr&&q.transparent===!1?X(qi):X(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Oe=q.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),z(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(q){M!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),M=q)}function D(q){q!==bg?(K(n.CULL_FACE),q!==E&&(q===Sf?n.cullFace(n.BACK):q===Sg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),E=q}function Y(q){q!==F&&(k&&n.lineWidth(q),F=q)}function z(q,Re,Le){q?(K(n.POLYGON_OFFSET_FILL),(N!==Re||G!==Le)&&(n.polygonOffset(Re,Le),N=Re,G=Le)):me(n.POLYGON_OFFSET_FILL)}function Q(q){q?K(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function se(q){q===void 0&&(q=n.TEXTURE0+W-1),oe!==q&&(n.activeTexture(q),oe=q)}function ue(q,Re,Le){Le===void 0&&(oe===null?Le=n.TEXTURE0+W-1:Le=oe);let Oe=le[Le];Oe===void 0&&(Oe={type:void 0,texture:void 0},le[Le]=Oe),(Oe.type!==q||Oe.texture!==Re)&&(oe!==Le&&(n.activeTexture(Le),oe=Le),n.bindTexture(q,Re||$[q]),Oe.type=q,Oe.texture=Re)}function R(){let q=le[oe];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(q){we.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),we.copy(q))}function Ve(q){fe.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),fe.copy(q))}function Ae(q,Re){let Le=c.get(Re);Le===void 0&&(Le=new WeakMap,c.set(Re,Le));let Oe=Le.get(q);Oe===void 0&&(Oe=n.getUniformBlockIndex(Re,q.name),Le.set(q,Oe))}function Pe(q,Re){let Oe=c.get(Re).get(q);l.get(Re)!==Oe&&(n.uniformBlockBinding(Re,Oe,q.__bindingPointIndex),l.set(Re,Oe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,le={},d={},f=new WeakMap,h=[],p=null,y=!1,m=null,g=null,b=null,S=null,v=null,C=null,A=null,L=new De(0,0,0),U=0,w=!1,M=null,E=null,F=null,N=null,G=null,we.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:me,bindFramebuffer:Ce,drawBuffers:O,useProgram:ye,setBlending:X,setMaterial:ne,setFlipSided:Z,setCullFace:D,setLineWidth:Y,setPolygonOffset:z,setScissorTest:Q,activeTexture:se,bindTexture:ue,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Me,texImage3D:he,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:pe,texStorage3D:be,texSubImage2D:H,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:xe,scissor:Te,viewport:Ve,reset:We}}function hT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,x){return h?new OffscreenCanvas(R,x):$s("canvas")}function y(R,x,I){let H=1,re=ue(R);if((re.width>I||re.height>I)&&(H=I/Math.max(re.width,re.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(H*re.width),xe=Math.floor(H*re.height);d===void 0&&(d=p(j,xe));let pe=x?p(j,xe):d;return pe.width=j,pe.height=xe,pe.getContext("2d").drawImage(R,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+xe+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,x,I,H,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),x===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let xe=re?_a:dt.getTransfer(H);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=xe===Mt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,x){let I;return R?x===null||x===xr||x===go?I=n.DEPTH24_STENCIL8:x===hi?I=n.DEPTH32F_STENCIL8:x===mo&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xr||x===go?I=n.DEPTH_COMPONENT24:x===hi?I=n.DEPTH_COMPONENT32F:x===mo&&(I=n.DEPTH_COMPONENT16),I}function C(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){let x=R.target;x.removeEventListener("dispose",A),U(x),x.isVideoTexture&&u.delete(x)}function L(R){let x=R.target;x.removeEventListener("dispose",L),M(x)}function U(R){let x=i.get(R);if(x.__webglInit===void 0)return;let I=R.source,H=f.get(I);if(H){let re=H[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(R),Object.keys(H).length===0&&f.delete(I)}i.remove(R)}function w(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let I=R.source,H=f.get(I);delete H[x.__cacheKey],o.memory.textures--}function M(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let re=0;re<x.__webglFramebuffer[H].length;re++)n.deleteFramebuffer(x.__webglFramebuffer[H][re]);else n.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)n.deleteFramebuffer(x.__webglFramebuffer[H]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=R.textures;for(let H=0,re=I.length;H<re;H++){let j=i.get(I[H]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(R)}let E=0;function F(){E=0}function N(){let R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function G(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function W(R,x){let I=i.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let H=R.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,R,x);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function k(R,x){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function J(R,x){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){$(I,R,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function B(R,x){let I=i.get(R);if(R.version>0&&I.__version!==R.version){K(I,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}let oe={[Vn]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},le={[cn]:n.NEAREST,[$g]:n.NEAREST_MIPMAP_NEAREST,[tl]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[du]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},_e={[t0]:n.NEVER,[a0]:n.ALWAYS,[n0]:n.LESS,[Uf]:n.LEQUAL,[i0]:n.EQUAL,[o0]:n.GEQUAL,[r0]:n.GREATER,[s0]:n.NOTEQUAL};function ie(R,x){if(x.type===hi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===un||x.magFilter===du||x.magFilter===tl||x.magFilter===In||x.minFilter===un||x.minFilter===du||x.minFilter===tl||x.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,le[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==tl&&x.minFilter!==In||x.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function we(R,x){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));let H=x.source,re=f.get(H);re===void 0&&(re={},f.set(H,re));let j=G(x);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),re[j].usedTimes++;let xe=re[R.__cacheKey];xe!==void 0&&(re[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(x)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return I}function fe(R,x,I){return Math.floor(Math.floor(R/I)/x)}function de(R,x,I,H){let j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,H,x.data);else{j.sort((he,Te)=>he.start-Te.start);let xe=0;for(let he=1;he<j.length;he++){let Te=j[xe],Ve=j[he],Ae=Te.start+Te.count,Pe=fe(Ve.start,x.width,4),We=fe(Te.start,x.width,4);Ve.start<=Ae+1&&Pe===We&&fe(Ve.start+Ve.count-1,x.width,4)===Pe?Te.count=Math.max(Te.count,Ve.start+Ve.count-Te.start):(++xe,j[xe]=Ve)}j.length=xe+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let he=0,Te=j.length;he<Te;he++){let Ve=j[he],Ae=Math.floor(Ve.start/4),Pe=Math.ceil(Ve.count/4),We=Ae%x.width,q=Math.floor(Ae/x.width),Re=Pe,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,We,q,Re,Le,I,H,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function $(R,x,I){let H=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=n.TEXTURE_3D);let re=we(R,x),j=x.source;t.bindTexture(H,R.__webglTexture,n.TEXTURE0+I);let xe=i.get(j);if(j.version!==xe.__version||re===!0){t.activeTexture(n.TEXTURE0+I);let pe=dt.getPrimaries(dt.workingColorSpace),be=x.colorSpace===Yi?null:dt.getPrimaries(x.colorSpace),Me=x.colorSpace===Yi||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let he=y(x.image,!1,r.maxTextureSize);he=se(x,he);let Te=s.convert(x.format,x.colorSpace),Ve=s.convert(x.type),Ae=S(x.internalFormat,Te,Ve,x.colorSpace,x.isVideoTexture);ie(H,x);let Pe,We=x.mipmaps,q=x.isVideoTexture!==!0,Re=xe.__version===void 0||re===!0,Le=j.dataReady,Oe=C(x,he);if(x.isDepthTexture)Ae=v(x.format===yo,x.type),Re&&(q?t.texStorage2D(n.TEXTURE_2D,1,Ae,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,Te,Ve,null));else if(x.isDataTexture)if(We.length>0){q&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Pe=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Ve,Pe.data):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Pe.width,Pe.height,0,Te,Ve,Pe.data);x.generateMipmaps=!1}else q?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,he.width,he.height),Le&&de(x,he,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,Te,Ve,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ae,We[0].width,We[0].height,he.depth);for(let Ee=0,ve=We.length;Ee<ve;Ee++)if(Pe=We[Ee],x.format!==Ln)if(Te!==null)if(q){if(Le)if(x.layerUpdates.size>0){let He=Gf(Pe.width,Pe.height,x.format,x.type);for(let tt of x.layerUpdates){let It=Pe.data.subarray(tt*He/Pe.data.BYTES_PER_ELEMENT,(tt+1)*He/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,tt,Pe.width,Pe.height,1,Te,It)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,he.depth,Te,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,he.depth,Te,Ve,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,Pe.width,Pe.height,he.depth,0,Te,Ve,Pe.data)}else{q&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Pe=We[Ee],x.format!==Ln?Te!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,Ae,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Ve,Pe.data):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Pe.width,Pe.height,0,Te,Ve,Pe.data)}else if(x.isDataArrayTexture)if(q){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ae,he.width,he.height,he.depth),Le)if(x.layerUpdates.size>0){let Ee=Gf(he.width,he.height,x.format,x.type);for(let ve of x.layerUpdates){let He=he.data.subarray(ve*Ee/he.data.BYTES_PER_ELEMENT,(ve+1)*Ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,he.width,he.height,1,Te,Ve,He)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Ve,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,he.width,he.height,he.depth,0,Te,Ve,he.data);else if(x.isData3DTexture)q?(Re&&t.texStorage3D(n.TEXTURE_3D,Oe,Ae,he.width,he.height,he.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Ve,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,he.width,he.height,he.depth,0,Te,Ve,he.data);else if(x.isFramebufferTexture){if(Re)if(q)t.texStorage2D(n.TEXTURE_2D,Oe,Ae,he.width,he.height);else{let Ee=he.width,ve=he.height;for(let He=0;He<Oe;He++)t.texImage2D(n.TEXTURE_2D,He,Ae,Ee,ve,0,Te,Ve,null),Ee>>=1,ve>>=1}}else if(We.length>0){if(q&&Re){let Ee=ue(We[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ae,Ee.width,Ee.height)}for(let Ee=0,ve=We.length;Ee<ve;Ee++)Pe=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Te,Ve,Pe):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Te,Ve,Pe);x.generateMipmaps=!1}else if(q){if(Re){let Ee=ue(he);t.texStorage2D(n.TEXTURE_2D,Oe,Ae,Ee.width,Ee.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,he)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Te,Ve,he);m(x)&&g(H),xe.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function K(R,x,I){if(x.image.length!==6)return;let H=we(R,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let j=i.get(re);if(re.version!==j.__version||H===!0){t.activeTexture(n.TEXTURE0+I);let xe=dt.getPrimaries(dt.workingColorSpace),pe=x.colorSpace===Yi?null:dt.getPrimaries(x.colorSpace),be=x.colorSpace===Yi||xe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Me=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!Me&&!he?Te[ve]=y(x.image[ve],!0,r.maxCubemapSize):Te[ve]=he?x.image[ve].image:x.image[ve],Te[ve]=se(x,Te[ve]);let Ve=Te[0],Ae=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type),We=S(x.internalFormat,Ae,Pe,x.colorSpace),q=x.isVideoTexture!==!0,Re=j.__version===void 0||H===!0,Le=re.dataReady,Oe=C(x,Ve);ie(n.TEXTURE_CUBE_MAP,x);let Ee;if(Me){q&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,We,Ve.width,Ve.height);for(let ve=0;ve<6;ve++){Ee=Te[ve].mipmaps;for(let He=0;He<Ee.length;He++){let tt=Ee[He];x.format!==Ln?Ae!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Ae,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Ae,Pe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,Ae,Pe,tt.data)}}}else{if(Ee=x.mipmaps,q&&Re){Ee.length>0&&Oe++;let ve=ue(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,We,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(he){q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Ae,Pe,Te[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Te[ve].width,Te[ve].height,0,Ae,Pe,Te[ve].data);for(let He=0;He<Ee.length;He++){let It=Ee[He].image[ve].image;q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,It.width,It.height,Ae,Pe,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,It.width,It.height,0,Ae,Pe,It.data)}}else{q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae,Pe,Te[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Ae,Pe,Te[ve]);for(let He=0;He<Ee.length;He++){let tt=Ee[He];q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ae,Pe,tt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,Ae,Pe,tt.image[ve])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),j.__version=re.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function me(R,x,I,H,re,j){let xe=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),be=S(I.internalFormat,xe,pe,I.colorSpace),Me=i.get(x),he=i.get(I);if(he.__renderTarget=x,!Me.__hasExternalTextures){let Te=Math.max(1,x.width>>j),Ve=Math.max(1,x.height>>j);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,j,be,Te,Ve,x.depth,0,xe,pe,null):t.texImage2D(re,j,be,Te,Ve,0,xe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,re,he.__webglTexture,0,Y(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,re,he.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let H=x.depthTexture,re=H&&H.isDepthTexture?H.type:null,j=v(x.stencilBuffer,re),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Y(x);z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,j,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let H=x.textures;for(let re=0;re<H.length;re++){let j=H[re],xe=s.convert(j.format,j.colorSpace),pe=s.convert(j.type),be=S(j.internalFormat,xe,pe,j.colorSpace),Me=Y(x);I&&z(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,be,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let re=H.__webglTexture,j=Y(x);if(x.depthTexture.format===js)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===yo)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ye(R){let x=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",re)};H.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=H}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let H=R.texture.mipmaps;H&&H.length>0?O(x.__webglFramebuffer[0],R):O(x.__webglFramebuffer,R)}else if(I){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[H],R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,x,I){let H=i.get(R);x!==void 0&&me(H.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ye(R)}function T(R){let x=R.texture,I=i.get(R),H=i.get(x);R.addEventListener("dispose",L);let re=R.textures,j=R.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=x.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let be=0;be<x.mipmaps.length;be++)I.__webglFramebuffer[pe][be]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(xe)for(let pe=0,be=re.length;pe<be;pe++){let Me=i.get(re[pe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&z(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){let be=re[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);let Me=s.convert(be.format,be.colorSpace),he=s.convert(be.type),Te=S(be.internalFormat,Me,he,be.colorSpace,R.isXRRenderTarget===!0),Ve=Y(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),ie(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)me(I.__webglFramebuffer[pe][be],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else me(I.__webglFramebuffer[pe],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let pe=0,be=re.length;pe<be;pe++){let Me=re[pe],he=i.get(Me),Te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),ie(Te,Me),me(I.__webglFramebuffer,R,Me,n.COLOR_ATTACHMENT0+pe,Te,0),m(Me)&&g(Te)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,H.__webglTexture),ie(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)me(I.__webglFramebuffer[be],R,x,n.COLOR_ATTACHMENT0,pe,be);else me(I.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&g(pe),t.unbindTexture()}R.depthBuffer&&ye(R)}function X(R){let x=R.textures;for(let I=0,H=x.length;I<H;I++){let re=x[I];if(m(re)){let j=b(R),xe=i.get(re).__webglTexture;t.bindTexture(j,xe),g(j),t.unbindTexture()}}}let ne=[],Z=[];function D(R){if(R.samples>0){if(z(R)===!1){let x=R.textures,I=R.width,H=R.height,re=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),pe=x.length>1;if(pe)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);let he=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,re,n.NEAREST),l===!0&&(ne.length=0,Z.length=0,ne.push(n.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(j),Z.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);let he=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Y(R){return Math.min(r.maxSamples,R.samples)}function z(R){let x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(R){let x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function se(R,x){let I=R.colorSpace,H=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Yr&&I!==Yi&&(dt.getTransfer(I)===Mt?(H!==Ln||re!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=ge,this.setupRenderTarget=T,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=z}function dT(n,e){function t(i,r=Yi){let s,o=dt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ef)return n.BYTE;if(i===Cf)return n.SHORT;if(i===mo)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===If)return n.ALPHA;if(i===Lf)return n.RGB;if(i===Ln)return n.RGBA;if(i===js)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===gu)return n.RED;if(i===yu)return n.RED_INTEGER;if(i===Df)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_u||i===Mu||i===bu||i===Su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wu||i===Tu||i===Au)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wu||i===Tu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Au)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eu||i===Cu||i===Ru||i===Pu||i===Iu||i===Lu||i===Du||i===Uu||i===Fu||i===Nu||i===Bu||i===Ou||i===zu||i===Vu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Eu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ru)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Du)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ou)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ku||i===Gu||i===Hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ku)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wu||i===qu||i===Xu||i===Yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pT=`
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

}`,tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:fT,fragmentShader:pT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Wt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},np=class extends ki{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,y=typeof XRWebGLBinding<"u",m=new tp,g={},b=t.getContextAttributes(),S=null,v=null,C=[],A=[],L=new Se,U=null,w=new Zt;w.viewport=new ut;let M=new Zt;M.viewport=new ut;let E=[w,M],F=new tu,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=C[$];return K===void 0&&(K=new to,C[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=C[$];return K===void 0&&(K=new to,C[$]=K),K.getGripSpace()},this.getHand=function($){let K=C[$];return K===void 0&&(K=new to,C[$]=K),K.getHandSpace()};function W($){let K=A.indexOf($.inputSource);if(K===-1)return;let me=C[K];me!==void 0&&(me.update($.inputSource,$.frame,c||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",J);for(let $=0;$<C.length;$++){let K=A[$];K!==null&&(A[$]=null,C[$].disconnect(K))}N=null,G=null,m.reset();for(let $ in g)delete g[$];e.setRenderTarget(S),h=null,f=null,d=null,r=null,v=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",k),r.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ce=null,O=null;b.depth&&(O=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?yo:js,Ce=b.stencil?go:xr);let ye={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Rn(f.textureWidth,f.textureHeight,{format:Ln,type:Wn,depthTexture:new Da(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J($){for(let K=0;K<$.removed.length;K++){let me=$.removed[K],Ce=A.indexOf(me);Ce>=0&&(A[Ce]=null,C[Ce].disconnect(me))}for(let K=0;K<$.added.length;K++){let me=$.added[K],Ce=A.indexOf(me);if(Ce===-1){for(let ye=0;ye<C.length;ye++)if(ye>=A.length){A.push(me),Ce=ye;break}else if(A[ye]===null){A[ye]=me,Ce=ye;break}if(Ce===-1)break}let O=C[Ce];O&&O.connect(me)}}let B=new _,oe=new _;function le($,K,me){B.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);let Ce=B.distanceTo(oe),O=K.projectionMatrix.elements,ye=me.projectionMatrix.elements,ge=O[14]/(O[10]-1),T=O[14]/(O[10]+1),X=(O[9]+1)/O[5],ne=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],D=(ye[8]+1)/ye[0],Y=ge*Z,z=ge*D,Q=Ce/(-Z+D),se=Q*-Z;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(Q),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),O[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ue=ge+Q,R=T+Q,x=Y-se,I=z+(Ce-se),H=X*T/R*ue,re=ne*T/R*ue;$.projectionMatrix.makePerspective(x,I,H,re,ue,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let K=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(me=m.depthFar)),F.near=M.near=w.near=K,F.far=M.far=w.far=me,(N!==F.near||G!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=$.layers.mask|6,w.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let Ce=$.parent,O=F.cameras;_e(F,Ce);for(let ye=0;ye<O.length;ye++)_e(O[ye],Ce);O.length===2?le(F,w,M):F.projectionMatrix.copy(w.projectionMatrix),ie($,F,Ce)};function ie($,K,me){me===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Js*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return g[$]};let we=null;function fe($,K){if(u=K.getViewerPose(c||o),p=K,u!==null){let me=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Ce=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let T=0;T<me.length;T++){let X=me[T],ne=null;if(h!==null)ne=h.getViewport(X);else{let D=d.getViewSubImage(f,X);ne=D.viewport,T===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let Z=E[T];Z===void 0&&(Z=new Zt,Z.layers.enable(T),Z.viewport=new ut,E[T]=Z),Z.matrix.fromArray(X.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(X.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ne.x,ne.y,ne.width,ne.height),T===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(Z)}let O=r.enabledFeatures;if(O&&O.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let T=d.getDepthInformation(me[0]);T&&T.isValid&&T.texture&&m.init(T,r.renderState)}if(O&&O.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<me.length;T++){let X=me[T].camera;if(X){let ne=g[X];ne||(ne=new Ua,g[X]=ne);let Z=d.getCameraImage(X);ne.sourceTexture=Z}}}}for(let me=0;me<C.length;me++){let Ce=A[me],O=C[me];Ce!==null&&O!==void 0&&O.update(Ce,K,c||o)}we&&we($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}let de=new V0;de.setAnimationLoop(fe),this.setAnimationLoop=function($){we=$},this.dispose=function(){}}},os=new nn,mT=new ct;function gT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Of(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,b,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),y(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(os)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yT(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let v=S.program;i.uniformBlockBinding(b,v)}function c(b,S){let v=r[b.id];v===void 0&&(p(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));let C=S.program;i.updateUBOMapping(b,C);let A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){let S=d();b.__bindingPointIndex=S;let v=n.createBuffer(),C=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=r[b.id],v=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,L=v.length;A<L;A++){let U=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,M=U.length;w<M;w++){let E=U[w];if(h(E,A,w,C)===!0){let F=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],G=0;for(let W=0;W<N.length;W++){let k=N[W],J=y(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,F+G,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,S,v,C){let A=b.value,L=S+"_"+v;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{let U=C[L];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[L]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function p(b){let S=b.uniforms,v=0,C=16;for(let L=0,U=S.length;L<U;L++){let w=Array.isArray(S[L])?S[L]:[S[L]];for(let M=0,E=w.length;M<E;M++){let F=w[M],N=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=N.length;G<W;G++){let k=N[G],J=y(k),B=v%C,oe=B%J.boundary,le=B+oe;v+=oe,le!==0&&C-le<J.storage&&(v+=C-le),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=J.storage}}}let A=v%C;return A>0&&(v+=C-A),b.__size=v,b.__cache={},this}function y(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function g(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var Qu=class{constructor(e={}){let{canvas:t=l0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),y=new Int32Array(4),m=null,g=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=lt;let A=0,L=0,U=null,w=-1,M=null,E=new ut,F=new ut,N=null,G=new De(0),W=0,k=t.width,J=t.height,B=1,oe=null,le=null,_e=new ut(0,0,k,J),ie=new ut(0,0,k,J),we=!1,fe=new so,de=!1,$=!1,K=new ct,me=new _,Ce=new ut,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function ge(){return U===null?B:1}let T=i;function X(P,ee){return t.getContext(P,ee)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),T===null){let ee="webgl2";if(T=X(ee,P),T===null)throw X(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,Z,D,Y,z,Q,se,ue,R,x,I,H,re,j,xe,pe,be,Me,he,Te,Ve,Ae,Pe,We;function q(){ne=new FS(T),ne.init(),Ae=new dT(T,ne),Z=new CS(T,ne,e,Ae),D=new uT(T,ne),Z.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),Y=new OS(T),z=new $w,Q=new hT(T,ne,D,z,Z,Ae,Y),se=new PS(v),ue=new US(v),R=new WM(T),Pe=new AS(T,R),x=new NS(T,R,Y,Pe),I=new VS(T,x,R,Y),he=new zS(T,Z,Q),pe=new RS(z),H=new Jw(v,se,ue,ne,Z,Pe,pe),re=new gT(v,z),j=new Qw,xe=new sT(ne),Me=new TS(v,se,ue,D,I,h,l),be=new lT(v,I,Z),We=new yT(T,Y,Z,D),Te=new ES(T,ne,Y),Ve=new BS(T,ne,Y),Y.programs=H.programs,v.capabilities=Z,v.extensions=ne,v.properties=z,v.renderLists=j,v.shadowMap=be,v.state=D,v.info=Y}q();let Re=new np(v,T);this.xr=Re,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(k,J,!1))},this.getSize=function(P){return P.set(k,J)},this.setSize=function(P,ee,ae=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,J=ee,t.width=Math.floor(P*B),t.height=Math.floor(ee*B),ae===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(k*B,J*B).floor()},this.setDrawingBufferSize=function(P,ee,ae){k=P,J=ee,B=ae,t.width=Math.floor(P*ae),t.height=Math.floor(ee*ae),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(_e)},this.setViewport=function(P,ee,ae,ce){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,ee,ae,ce),D.viewport(E.copy(_e).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,ee,ae,ce){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,ee,ae,ce),D.scissor(F.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){D.setScissorTest(we=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(P=!0,ee=!0,ae=!0){let ce=0;if(P){let te=!1;if(U!==null){let Ie=U.texture.format;te=Ie===vu||Ie===xu||Ie===yu}if(te){let Ie=U.texture.type,Ne=Ie===Wn||Ie===xr||Ie===mo||Ie===go||Ie===pu||Ie===mu,Ge=Me.getClearColor(),ke=Me.getClearAlpha(),je=Ge.r,$e=Ge.g,Xe=Ge.b;Ne?(p[0]=je,p[1]=$e,p[2]=Xe,p[3]=ke,T.clearBufferuiv(T.COLOR,0,p)):(y[0]=je,y[1]=$e,y[2]=Xe,y[3]=ke,T.clearBufferiv(T.COLOR,0,y))}else ce|=T.COLOR_BUFFER_BIT}ee&&(ce|=T.DEPTH_BUFFER_BIT),ae&&(ce|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Me.dispose(),j.dispose(),xe.dispose(),z.dispose(),se.dispose(),ue.dispose(),I.dispose(),Pe.dispose(),We.dispose(),H.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",yi),Re.removeEventListener("sessionend",Im),Or.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=Y.autoReset,ee=be.enabled,ae=be.autoUpdate,ce=be.needsUpdate,te=be.type;q(),Y.autoReset=P,be.enabled=ee,be.autoUpdate=ae,be.needsUpdate=ce,be.type=te}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){let ee=P.target;ee.removeEventListener("dispose",ve),He(ee)}function He(P){tt(P),z.remove(P)}function tt(P){let ee=z.get(P).programs;ee!==void 0&&(ee.forEach(function(ae){H.releaseProgram(ae)}),P.isShaderMaterial&&H.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,ae,ce,te,Ie){ee===null&&(ee=O);let Ne=te.isMesh&&te.matrixWorld.determinant()<0,Ge=h_(P,ee,ae,ce,te);D.setMaterial(ce,Ne);let ke=ae.index,je=1;if(ce.wireframe===!0){if(ke=x.getWireframeAttribute(ae),ke===void 0)return;je=2}let $e=ae.drawRange,Xe=ae.attributes.position,at=$e.start*je,Tt=($e.start+$e.count)*je;Ie!==null&&(at=Math.max(at,Ie.start*je),Tt=Math.min(Tt,(Ie.start+Ie.count)*je)),ke!==null?(at=Math.max(at,0),Tt=Math.min(Tt,ke.count)):Xe!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Xe.count));let Yt=Tt-at;if(Yt<0||Yt===1/0)return;Pe.setup(te,ce,Ge,ae,ke);let Ut,Ct=Te;if(ke!==null&&(Ut=R.get(ke),Ct=Ve,Ct.setIndex(Ut)),te.isMesh)ce.wireframe===!0?(D.setLineWidth(ce.wireframeLinewidth*ge()),Ct.setMode(T.LINES)):Ct.setMode(T.TRIANGLES);else if(te.isLine){let Ze=ce.linewidth;Ze===void 0&&(Ze=1),D.setLineWidth(Ze*ge()),te.isLineSegments?Ct.setMode(T.LINES):te.isLineLoop?Ct.setMode(T.LINE_LOOP):Ct.setMode(T.LINE_STRIP)}else te.isPoints?Ct.setMode(T.POINTS):te.isSprite&&Ct.setMode(T.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Ct.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Ze=te._multiDrawStarts,kt=te._multiDrawCounts,mt=te._multiDrawCount,Nn=ke?R.get(ke).bytesPerElement:1,Es=z.get(ce).currentProgram.getUniforms();for(let Bn=0;Bn<mt;Bn++)Es.setValue(T,"_gl_DrawID",Bn),Ct.render(Ze[Bn]/Nn,kt[Bn])}else if(te.isInstancedMesh)Ct.renderInstances(at,Yt,te.count);else if(ae.isInstancedBufferGeometry){let Ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,kt=Math.min(ae.instanceCount,Ze);Ct.renderInstances(at,Yt,kt)}else Ct.render(at,Yt)};function It(P,ee,ae){P.transparent===!0&&P.side===At&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,Xl(P,ee,ae),P.side=ai,P.needsUpdate=!0,Xl(P,ee,ae),P.side=At):Xl(P,ee,ae)}this.compile=function(P,ee,ae=null){ae===null&&(ae=P),g=xe.get(ae),g.init(ee),S.push(g),ae.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),P!==ae&&P.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights();let ce=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let Ne=0;Ne<Ie.length;Ne++){let Ge=Ie[Ne];It(Ge,ae,te),ce.add(Ge)}else It(Ie,ae,te),ce.add(Ie)}),g=S.pop(),ce},this.compileAsync=function(P,ee,ae=null){let ce=this.compile(P,ee,ae);return new Promise(te=>{function Ie(){if(ce.forEach(function(Ne){z.get(Ne).currentProgram.isReady()&&ce.delete(Ne)}),ce.size===0){te(P);return}setTimeout(Ie,10)}ne.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let xt=null;function Ui(P){xt&&xt(P)}function yi(){Or.stop()}function Im(){Or.start()}let Or=new V0;Or.setAnimationLoop(Ui),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(P){xt=P,Re.setAnimationLoop(P),P===null?Or.stop():Or.start()},Re.addEventListener("sessionstart",yi),Re.addEventListener("sessionend",Im),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(ee),ee=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,ee,U),g=xe.get(P,S.length),g.init(ee),S.push(g),K.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),fe.setFromProjectionMatrix(K,oi,ee.reversedDepth),$=this.localClippingEnabled,de=pe.init(this.clippingPlanes,$),m=j.get(P,b.length),m.init(),b.push(m),Re.enabled===!0&&Re.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&Ld(Ie,ee,-1/0,v.sortObjects)}Ld(P,ee,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,le),ye=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ye&&Me.addToRenderList(m,P),this.info.render.frame++,de===!0&&pe.beginShadows();let ae=g.state.shadowsArray;be.render(ae,P,ee),de===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,te=m.transmissive;if(g.setupLights(),ee.isArrayCamera){let Ie=ee.cameras;if(te.length>0)for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){let ke=Ie[Ne];Dm(ce,te,P,ke)}ye&&Me.render(P);for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){let ke=Ie[Ne];Lm(m,P,ke,ke.viewport)}}else te.length>0&&Dm(ce,te,P,ee),ye&&Me.render(P),Lm(m,P,ee);U!==null&&L===0&&(Q.updateMultisampleRenderTarget(U),Q.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(v,P,ee),Pe.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(g=S[S.length-1],de===!0&&pe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ld(P,ee,ae,ce){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||fe.intersectsSprite(P)){ce&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);let Ne=I.update(P),Ge=P.material;Ge.visible&&m.push(P,Ne,Ge,ae,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||fe.intersectsObject(P))){let Ne=I.update(P),Ge=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ce.copy(Ne.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Ge)){let ke=Ne.groups;for(let je=0,$e=ke.length;je<$e;je++){let Xe=ke[je],at=Ge[Xe.materialIndex];at&&at.visible&&m.push(P,Ne,at,ae,Ce.z,Xe)}}else Ge.visible&&m.push(P,Ne,Ge,ae,Ce.z,null)}}let Ie=P.children;for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++)Ld(Ie[Ne],ee,ae,ce)}function Lm(P,ee,ae,ce){let te=P.opaque,Ie=P.transmissive,Ne=P.transparent;g.setupLightsView(ae),de===!0&&pe.setGlobalState(v.clippingPlanes,ae),ce&&D.viewport(E.copy(ce)),te.length>0&&ql(te,ee,ae),Ie.length>0&&ql(Ie,ee,ae),Ne.length>0&&ql(Ne,ee,ae),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Dm(P,ee,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new Rn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?wi:Wn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Ie=g.state.transmissionRenderTarget[ce.id],Ne=ce.viewport||E;Ie.setSize(Ne.z*v.transmissionResolutionScale,Ne.w*v.transmissionResolutionScale);let Ge=v.getRenderTarget(),ke=v.getActiveCubeFace(),je=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(G),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),ye&&Me.render(ae);let $e=v.toneMapping;v.toneMapping=Xi;let Xe=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),de===!0&&pe.setGlobalState(v.clippingPlanes,ce),ql(P,ae,ce),Q.updateMultisampleRenderTarget(Ie),Q.updateRenderTargetMipmap(Ie),ne.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Tt=0,Yt=ee.length;Tt<Yt;Tt++){let Ut=ee[Tt],Ct=Ut.object,Ze=Ut.geometry,kt=Ut.material,mt=Ut.group;if(kt.side===At&&Ct.layers.test(ce.layers)){let Nn=kt.side;kt.side=dn,kt.needsUpdate=!0,Um(Ct,ae,ce,Ze,kt,mt),kt.side=Nn,kt.needsUpdate=!0,at=!0}}at===!0&&(Q.updateMultisampleRenderTarget(Ie),Q.updateRenderTargetMipmap(Ie))}v.setRenderTarget(Ge,ke,je),v.setClearColor(G,W),Xe!==void 0&&(ce.viewport=Xe),v.toneMapping=$e}function ql(P,ee,ae){let ce=ee.isScene===!0?ee.overrideMaterial:null;for(let te=0,Ie=P.length;te<Ie;te++){let Ne=P[te],Ge=Ne.object,ke=Ne.geometry,je=Ne.group,$e=Ne.material;$e.allowOverride===!0&&ce!==null&&($e=ce),Ge.layers.test(ae.layers)&&Um(Ge,ee,ae,ke,$e,je)}}function Um(P,ee,ae,ce,te,Ie){P.onBeforeRender(v,ee,ae,ce,te,Ie),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(v,ee,ae,ce,P,Ie),te.transparent===!0&&te.side===At&&te.forceSinglePass===!1?(te.side=dn,te.needsUpdate=!0,v.renderBufferDirect(ae,ee,ce,te,P,Ie),te.side=ai,te.needsUpdate=!0,v.renderBufferDirect(ae,ee,ce,te,P,Ie),te.side=At):v.renderBufferDirect(ae,ee,ce,te,P,Ie),P.onAfterRender(v,ee,ae,ce,te,Ie)}function Xl(P,ee,ae){ee.isScene!==!0&&(ee=O);let ce=z.get(P),te=g.state.lights,Ie=g.state.shadowsArray,Ne=te.state.version,Ge=H.getParameters(P,te.state,Ie,ee,ae),ke=H.getProgramCacheKey(Ge),je=ce.programs;ce.environment=P.isMeshStandardMaterial?ee.environment:null,ce.fog=ee.fog,ce.envMap=(P.isMeshStandardMaterial?ue:se).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?ee.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",ve),je=new Map,ce.programs=je);let $e=je.get(ke);if($e!==void 0){if(ce.currentProgram===$e&&ce.lightsStateVersion===Ne)return Nm(P,Ge),$e}else Ge.uniforms=H.getUniforms(P),P.onBeforeCompile(Ge,v),$e=H.acquireProgram(Ge,ke),je.set(ke,$e),ce.uniforms=Ge.uniforms;let Xe=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),Nm(P,Ge),ce.needsLights=f_(P),ce.lightsStateVersion=Ne,ce.needsLights&&(Xe.ambientLightColor.value=te.state.ambient,Xe.lightProbe.value=te.state.probe,Xe.directionalLights.value=te.state.directional,Xe.directionalLightShadows.value=te.state.directionalShadow,Xe.spotLights.value=te.state.spot,Xe.spotLightShadows.value=te.state.spotShadow,Xe.rectAreaLights.value=te.state.rectArea,Xe.ltc_1.value=te.state.rectAreaLTC1,Xe.ltc_2.value=te.state.rectAreaLTC2,Xe.pointLights.value=te.state.point,Xe.pointLightShadows.value=te.state.pointShadow,Xe.hemisphereLights.value=te.state.hemi,Xe.directionalShadowMap.value=te.state.directionalShadowMap,Xe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Xe.spotShadowMap.value=te.state.spotShadowMap,Xe.spotLightMatrix.value=te.state.spotLightMatrix,Xe.spotLightMap.value=te.state.spotLightMap,Xe.pointShadowMap.value=te.state.pointShadowMap,Xe.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=$e,ce.uniformsList=null,$e}function Fm(P){if(P.uniformsList===null){let ee=P.currentProgram.getUniforms();P.uniformsList=_o.seqWithValue(ee.seq,P.uniforms)}return P.uniformsList}function Nm(P,ee){let ae=z.get(P);ae.outputColorSpace=ee.outputColorSpace,ae.batching=ee.batching,ae.batchingColor=ee.batchingColor,ae.instancing=ee.instancing,ae.instancingColor=ee.instancingColor,ae.instancingMorph=ee.instancingMorph,ae.skinning=ee.skinning,ae.morphTargets=ee.morphTargets,ae.morphNormals=ee.morphNormals,ae.morphColors=ee.morphColors,ae.morphTargetsCount=ee.morphTargetsCount,ae.numClippingPlanes=ee.numClippingPlanes,ae.numIntersection=ee.numClipIntersection,ae.vertexAlphas=ee.vertexAlphas,ae.vertexTangents=ee.vertexTangents,ae.toneMapping=ee.toneMapping}function h_(P,ee,ae,ce,te){ee.isScene!==!0&&(ee=O),Q.resetTextureUnits();let Ie=ee.fog,Ne=ce.isMeshStandardMaterial?ee.environment:null,Ge=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Yr,ke=(ce.isMeshStandardMaterial?ue:se).get(ce.envMap||Ne),je=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,$e=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Xe=!!ae.morphAttributes.position,at=!!ae.morphAttributes.normal,Tt=!!ae.morphAttributes.color,Yt=Xi;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Yt=v.toneMapping);let Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Ze=z.get(ce),kt=g.state.lights;if(de===!0&&($===!0||P!==M)){let bn=P===M&&ce.id===w;pe.setState(ce,P,bn)}let mt=!1;ce.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==kt.state.version||Ze.outputColorSpace!==Ge||te.isBatchedMesh&&Ze.batching===!1||!te.isBatchedMesh&&Ze.batching===!0||te.isBatchedMesh&&Ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||te.isInstancedMesh&&Ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ze.instancingMorph===!1&&te.morphTexture!==null||Ze.envMap!==ke||ce.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==$e||Ze.morphTargets!==Xe||Ze.morphNormals!==at||Ze.morphColors!==Tt||Ze.toneMapping!==Yt||Ze.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Ze.__version=ce.version);let Nn=Ze.currentProgram;mt===!0&&(Nn=Xl(ce,ee,te));let Es=!1,Bn=!1,na=!1,Gt=Nn.getUniforms(),Xn=Ze.uniforms;if(D.useProgram(Nn.program)&&(Es=!0,Bn=!0,na=!0),ce.id!==w&&(w=ce.id,Bn=!0),Es||M!==P){D.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Gt.setValue(T,"projectionMatrix",P.projectionMatrix),Gt.setValue(T,"viewMatrix",P.matrixWorldInverse);let An=Gt.map.cameraPosition;An!==void 0&&An.setValue(T,me.setFromMatrixPosition(P.matrixWorld)),Z.logarithmicDepthBuffer&&Gt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Gt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Bn=!0,na=!0)}if(te.isSkinnedMesh){Gt.setOptional(T,te,"bindMatrix"),Gt.setOptional(T,te,"bindMatrixInverse");let bn=te.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Gt.setValue(T,"boneTexture",bn.boneTexture,Q))}te.isBatchedMesh&&(Gt.setOptional(T,te,"batchingTexture"),Gt.setValue(T,"batchingTexture",te._matricesTexture,Q),Gt.setOptional(T,te,"batchingIdTexture"),Gt.setValue(T,"batchingIdTexture",te._indirectTexture,Q),Gt.setOptional(T,te,"batchingColorTexture"),te._colorsTexture!==null&&Gt.setValue(T,"batchingColorTexture",te._colorsTexture,Q));let Yn=ae.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&he.update(te,ae,Nn),(Bn||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,Gt.setValue(T,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Xn.envMap.value=ke,Xn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&ee.environment!==null&&(Xn.envMapIntensity.value=ee.environmentIntensity),Bn&&(Gt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&d_(Xn,na),Ie&&ce.fog===!0&&re.refreshFogUniforms(Xn,Ie),re.refreshMaterialUniforms(Xn,ce,B,J,g.state.transmissionRenderTarget[P.id]),_o.upload(T,Fm(Ze),Xn,Q)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(_o.upload(T,Fm(Ze),Xn,Q),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Gt.setValue(T,"center",te.center),Gt.setValue(T,"modelViewMatrix",te.modelViewMatrix),Gt.setValue(T,"normalMatrix",te.normalMatrix),Gt.setValue(T,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let bn=ce.uniformsGroups;for(let An=0,Dd=bn.length;An<Dd;An++){let zr=bn[An];We.update(zr,Nn),We.bind(zr,Nn)}}return Nn}function d_(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function f_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,ee,ae){let ce=z.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),z.get(P.texture).__webglTexture=ee,z.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ee){let ae=z.get(P);ae.__webglFramebuffer=ee,ae.__useDefaultFramebuffer=ee===void 0};let p_=T.createFramebuffer();this.setRenderTarget=function(P,ee=0,ae=0){U=P,A=ee,L=ae;let ce=!0,te=null,Ie=!1,Ne=!1;if(P){let ke=z.get(P);if(ke.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(T.FRAMEBUFFER,null),ce=!1;else if(ke.__webglFramebuffer===void 0)Q.setupRenderTarget(P);else if(ke.__hasExternalTextures)Q.rebindTextures(P,z.get(P.texture).__webglTexture,z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&z.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(P)}}let je=P.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);let $e=z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[ee])?te=$e[ee][ae]:te=$e[ee],Ie=!0):P.samples>0&&Q.useMultisampledRTT(P)===!1?te=z.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?te=$e[ae]:te=$e,E.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else E.copy(_e).multiplyScalar(B).floor(),F.copy(ie).multiplyScalar(B).floor(),N=we;if(ae!==0&&(te=p_),D.bindFramebuffer(T.FRAMEBUFFER,te)&&ce&&D.drawBuffers(P,te),D.viewport(E),D.scissor(F),D.setScissorTest(N),Ie){let ke=z.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke.__webglTexture,ae)}else if(Ne){let ke=ee;for(let je=0;je<P.textures.length;je++){let $e=z.get(P.textures[je]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+je,$e.__webglTexture,ae,ke)}}else if(P!==null&&ae!==0){let ke=z.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(P,ee,ae,ce,te,Ie,Ne,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){D.bindFramebuffer(T.FRAMEBUFFER,ke);try{let je=P.textures[Ge],$e=je.format,Xe=je.type;if(!Z.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-ce&&ae>=0&&ae<=P.height-te&&(P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(ee,ae,ce,te,Ae.convert($e),Ae.convert(Xe),Ie))}finally{let je=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,ee,ae,ce,te,Ie,Ne,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(ee>=0&&ee<=P.width-ce&&ae>=0&&ae<=P.height-te){D.bindFramebuffer(T.FRAMEBUFFER,ke);let je=P.textures[Ge],$e=je.format,Xe=je.type;if(!Z.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,at),T.bufferData(T.PIXEL_PACK_BUFFER,Ie.byteLength,T.STREAM_READ),P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(ee,ae,ce,te,Ae.convert($e),Ae.convert(Xe),0);let Tt=U!==null?z.get(U).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,Tt);let Yt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await c0(T,Yt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,at),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ie),T.deleteBuffer(at),T.deleteSync(Yt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ee=null,ae=0){let ce=Math.pow(2,-ae),te=Math.floor(P.image.width*ce),Ie=Math.floor(P.image.height*ce),Ne=ee!==null?ee.x:0,Ge=ee!==null?ee.y:0;Q.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,ae,0,0,Ne,Ge,te,Ie),D.unbindTexture()};let m_=T.createFramebuffer(),g_=T.createFramebuffer();this.copyTextureToTexture=function(P,ee,ae=null,ce=null,te=0,Ie=null){Ie===null&&(te!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=te,te=0):Ie=0);let Ne,Ge,ke,je,$e,Xe,at,Tt,Yt,Ut=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(ae!==null)Ne=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,ke=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,$e=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{let Yn=Math.pow(2,-te);Ne=Math.floor(Ut.width*Yn),Ge=Math.floor(Ut.height*Yn),P.isDataArrayTexture?ke=Ut.depth:P.isData3DTexture?ke=Math.floor(Ut.depth*Yn):ke=1,je=0,$e=0,Xe=0}ce!==null?(at=ce.x,Tt=ce.y,Yt=ce.z):(at=0,Tt=0,Yt=0);let Ct=Ae.convert(ee.format),Ze=Ae.convert(ee.type),kt;ee.isData3DTexture?(Q.setTexture3D(ee,0),kt=T.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(Q.setTexture2DArray(ee,0),kt=T.TEXTURE_2D_ARRAY):(Q.setTexture2D(ee,0),kt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ee.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ee.unpackAlignment);let mt=T.getParameter(T.UNPACK_ROW_LENGTH),Nn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Es=T.getParameter(T.UNPACK_SKIP_PIXELS),Bn=T.getParameter(T.UNPACK_SKIP_ROWS),na=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,je),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xe);let Gt=P.isDataArrayTexture||P.isData3DTexture,Xn=ee.isDataArrayTexture||ee.isData3DTexture;if(P.isDepthTexture){let Yn=z.get(P),bn=z.get(ee),An=z.get(Yn.__renderTarget),Dd=z.get(bn.__renderTarget);D.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,Dd.__webglFramebuffer);for(let zr=0;zr<ke;zr++)Gt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(P).__webglTexture,te,Xe+zr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(ee).__webglTexture,Ie,Yt+zr)),T.blitFramebuffer(je,$e,Ne,Ge,at,Tt,Ne,Ge,T.DEPTH_BUFFER_BIT,T.NEAREST);D.bindFramebuffer(T.READ_FRAMEBUFFER,null),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||z.has(P)){let Yn=z.get(P),bn=z.get(ee);D.bindFramebuffer(T.READ_FRAMEBUFFER,m_),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,g_);for(let An=0;An<ke;An++)Gt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yn.__webglTexture,te,Xe+An):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yn.__webglTexture,te),Xn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bn.__webglTexture,Ie,Yt+An):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,bn.__webglTexture,Ie),te!==0?T.blitFramebuffer(je,$e,Ne,Ge,at,Tt,Ne,Ge,T.COLOR_BUFFER_BIT,T.NEAREST):Xn?T.copyTexSubImage3D(kt,Ie,at,Tt,Yt+An,je,$e,Ne,Ge):T.copyTexSubImage2D(kt,Ie,at,Tt,je,$e,Ne,Ge);D.bindFramebuffer(T.READ_FRAMEBUFFER,null),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xn?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(kt,Ie,at,Tt,Yt,Ne,Ge,ke,Ct,Ze,Ut.data):ee.isCompressedArrayTexture?T.compressedTexSubImage3D(kt,Ie,at,Tt,Yt,Ne,Ge,ke,Ct,Ut.data):T.texSubImage3D(kt,Ie,at,Tt,Yt,Ne,Ge,ke,Ct,Ze,Ut):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Ne,Ge,Ct,Ze,Ut.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Ut.width,Ut.height,Ct,Ut.data):T.texSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Ne,Ge,Ct,Ze,Ut);T.pixelStorei(T.UNPACK_ROW_LENGTH,mt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Nn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Es),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,na),Ie===0&&ee.generateMipmaps&&T.generateMipmap(kt),D.unbindTexture()},this.initRenderTarget=function(P){z.get(P).__webglFramebuffer===void 0&&Q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Q.setTextureCube(P,0):P.isData3DTexture?Q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Q.setTexture2DArray(P,0):Q.setTexture2D(P,0),D.unbindTexture()},this.resetState=function(){A=0,L=0,U=null,D.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var al=class n extends ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Zt;let i=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new En,d=new _,f=new _,h=new _,p=new ct,y=new _(0,0,-1),m=new ut,g=new _,b=new _,S=new ut,v=new ct,C=this.camera,A=new Rn(s,o,{samples:c,type:wi}),L=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:ju.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=A.texture,L.uniforms.color.value=r,L.uniforms.textureMatrix.value=v,this.material=L,this.onBeforeRender=function(U,w,M){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(f,h),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(f),p.extractRotation(M.matrixWorld),y.set(0,0,-1),y.applyMatrix4(p),y.add(h),b.subVectors(f,y),b.reflect(d).negate(),b.add(f),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(d),C.lookAt(b),C.far=M.far,C.updateMatrixWorld(),C.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=C.projectionMatrix;S.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(S)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,i.visible=!1;let N=U.getRenderTarget(),G=U.xr.enabled,W=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(A),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(w,C),U.xr.enabled=G,U.shadowMap.autoUpdate=W,U.setRenderTarget(N);let k=M.viewport;k!==void 0&&U.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}};al.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var th=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function X0(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function xn(n,e,t,i=0,r=0){return X0(n,new Rt(1,i),e,t,r)}function rp(n,e,t,i=0){return X0(n,new ci(1),e,t,i)}function xT(n,e){let t=new Je;return t.setAttribute("position",new Be(e.flat(),3)),{tone:n,geometry:t}}function q0(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return xT(n,i)}function vT(){let n=[xn("fur",[0,.012,.011],[.154,.161,.132],1),xn("fur",[0,-.065,.008],[.128,.079,.108]),xn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),xn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),q0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),xn("skin",[0,-.061,-.133],[.102,.066,.065],1),xn("skinShade",[0,-.097,-.14],[.076,.031,.047]),xn("skin",[0,.015,-.15],[.041,.056,.038]),xn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(xn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),xn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),rp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),xn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),xn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),xn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),xn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),xn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),xn("ink",[e*.047,.031,-.183],[.011,.012,.006]),rp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),rp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(q0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function _T(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new Je;return r.setAttribute("position",new ft(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var MT=_T(vT());function nh(n=0){let e=new Pt({flatShading:!0}),t=new Pt({flatShading:!0}),i=new Pt({vertexColors:!0,flatShading:!0}),r=[],s={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:y,g:m,b:g}=s[f];for(let b=h;b<p;b++)u.setXYZ(b,y,m,g)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<th.length?u:0;if(d===o)return;o=d;let f=th[o];for(let[h,p]of Object.entries(f))(s[h]??=new De).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new ft(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new ze(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new vt;return u.add(c(MT)),u}}}var cs=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],bT=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],ST=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],Y0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],ih=cs.length-1,Z0=Math.min(...cs.map(n=>n[1])),j0=Math.max(...cs.map(n=>n[1])),Zi=new _(0,0,(Z0+j0)/2),rh=new _(.047,.027,(j0-Z0)/2),wT=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],TT=[-.57,.57,1,.61,-.61,-1],AT=[1,1,-.04,-.91,-.91,-.04];function sh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(w=0,M=0,E=0){let F=s.length/3;return s.push(w*r,M,E),F}function c(w,M,E){i?o.push(w,E,M):o.push(w,M,E)}function u(w,M,E,F){c(w,M,E),c(w,E,F)}function d(w,M){for(let E=0;E<w.length;E++){let F=(E+1)%w.length;u(w[F],w[E],M[E],M[F])}}function f(w,M){for(let E=0;E<w.length;E++)c(M,w[(E+1)%w.length],w[E])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),y=cs.map(([w,M,E,F],N)=>{let G=N===0||N===ih,W=w*.67,k=-.024+(M+.024)*.69;return{top:l(w,E,M),middle:l(w*1.08,(E+F)/2,G?M:-.025+(M+.025)*1.04),bottom:l(w,F,M),innerTop:l(W,bT[N],k),innerBottom:l(W,ST[N],k)}});function m(w){let M=y[w],E=y[(w+1)%y.length];return[M.top,E.top,E.middle,E.bottom,M.bottom,M.middle]}let g=new Set(Y0.map(({edge:w})=>w));g.add(ih);for(let w=0;w<y.length;w++){let M=y[w],E=y[(w+1)%y.length];c(h,M.innerTop,E.innerTop),c(p,E.innerBottom,M.innerBottom),u(M.innerTop,M.top,E.top,E.innerTop),u(E.innerBottom,E.bottom,M.bottom,M.innerBottom),g.has(w)||(u(E.top,M.top,M.middle,E.middle),u(E.middle,M.middle,M.bottom,E.bottom))}let b=m(ih);t||f(b,l(0,0,cs[ih][1]));let S=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:w,length:M,splay:E}of Y0){let[F,N,G,W]=cs[w],[k,J,B,oe]=cs[w+1],le=k-F,_e=J-N,ie=-_e+le*E,we=le+_e*E,fe=Math.hypot(ie,we),de=Math.hypot(le,_e)/2,$=(G+B-W-oe)/4,K=[],me=m(w);for(let[O,ye,ge]of wT){let T=[l(),l(),l(),l(),l(),l()];d(me,T),K.push({ring:T,distance:O*M,width:ye*de,height:ge*$}),me=T}let Ce=l();f(me,Ce),a.push({x:(F+k)/2,y:(G+B+W+oe)/4,z:(N+J)/2,forwardX:ie/fe,forwardZ:we/fe,rows:K,tip:Ce,length:M,pressure:-1})}let v=new Je,C=new Be(s,3).setUsage(wn);v.setAttribute("position",C),v.setIndex(o),v.boundingSphere=new jn(new _(0,-.018,-.052),.12),v.boundingBox=new tn(new _(-.1,-.082,-.17),new _(.1,.038,.025));let A=!0;function L(w,M=!0){let E=!1;for(let F=0;F<a.length;F++){let N=a[F],G=w?.[F],W=Number.isFinite(G)?Fe.clamp(G,0,1):0;if(W===N.pressure)continue;N.pressure=W,E=!0;let{forwardX:k,forwardZ:J,length:B,rows:oe,tip:le}=N,_e=N.x,ie=N.z,we=N.y,fe=0,de=0;for(let{ring:me,distance:Ce,width:O,height:ye}of oe){let ge=Ce/B,T=Fe.smoothstep(ge,0,.57),X=Fe.smoothstep(ge,.38,1),ne=(.17+W*.83)*T+(.14+W*.76)*X,Z=(ne+fe)/2,D=Ce-de,Y=Math.cos(Z)*D;_e+=k*Y,we-=Math.sin(Z)*D,ie+=J*Y;for(let z=0;z<me.length;z++){let Q=TT[z]*O,se=AT[z]*ye,ue=se*Math.sin(ne);C.setXYZ(me[z],r*(_e+J*Q+k*ue),we+se*Math.cos(ne),ie-k*Q+J*ue)}fe=ne,de=Ce}let $=B-de,K=$*Math.cos(fe);C.setXYZ(le,r*(_e+k*K),we-$*Math.sin(fe),ie+J*K)}E&&(C.needsUpdate=!0,A=!0),M&&A&&(v.computeVertexNormals(),A=!1)}L(),v.getAttribute("normal").setUsage(wn);let U=new ze(v,e);return U.castShadow=!0,{mesh:U,pose:L,wristIndices:S}}var vr=12,sp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],ET=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],J0=sp.flatMap(([n,e,t])=>Array.from({length:vr},(i,r)=>{let s=(r-.5)*Math.PI*2/vr;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function oh(n,e){let t=J0.length,i=[],r=(J,B,oe,le,_e)=>J.push(B,oe,le,B,le,_e);function s(J,B,oe=!1){for(let le=1;le<B.length-1;le++)oe?J.push(B[0],B[le+1],B[le]):J.push(B[0],B[le],B[le+1])}let o=(J,B)=>J*vr+(B+vr)%vr;for(let J=0;J<sp.length-1;J++)for(let B=0;B<vr;B++)(J===2||J===3)&&(B===0||B===6)||r(i,o(J,B),o(J+1,B),o(J+1,B+1),o(J,B+1));s(i,Array.from({length:vr},(J,B)=>o(0,B))),s(i,Array.from({length:vr},(J,B)=>o(sp.length-1,B)),!0);let a=t,l=e.map(({geometry:J,wristIndices:B},oe)=>{let le=oe===0?6:0,_e=[o(4,le),o(4,le+1),o(3,le+1),o(2,le+1),o(2,le),o(3,le)],ie=[_e,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],we=ie.at(-1),fe=new Array(J.attributes.position.count);B.forEach((K,me)=>{fe[K]=we[me]});for(let K=0;K<fe.length;K++)fe[K]??=a++;let de=[];for(let K=0;K<J.index.count;K++)de.push(fe[J.index.getX(K)]);for(let K=0;K<ie.length-1;K++)for(let me=0;me<6;me++){let Ce=(me+1)%6;r(i,ie[K][me],ie[K][Ce],ie[K+1][Ce],ie[K+1][me])}let $=[];return s($,we),{socket:_e,rings:ie,wrist:we,wristIndices:B,remap:fe,skin:de,cap:$,sign:oe===0?-1:1}}),c=new Je,u=new Be(a*3,3).setUsage(wn);c.setAttribute("position",u);let d=new ze(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(J,B)=>new jr([...i,...l.flatMap((oe,le)=>B&1<<le?oe.skin:oe.cap)],1));c.setIndex(f[0]);let h=new _,p=new _,y=new _,m=new _,g=new _,b=new _,S=new _,v=new _,C=new _,A=new qe,L=new qe,U=new qe,w=new _(0,0,-1),M=new qe().setFromEuler(new nn(-1.42,0,0)),E=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,G=0,W=!0;function k(J,B,oe,le,_e){let ie=!!(J[0]||J[1]);if(!ie&&!W&&N===oe&&G===le)return;N=oe,G=le,W=ie;for(let fe=0;fe<t;fe++){let[de,$,K]=J0[fe];u.setXYZ(fe,de*oe,$*le,K*oe)}let we=0;for(let fe=0;fe<l.length;fe++){let de=l[fe],$=J[fe],K=e[fe].geometry.attributes.position,me=!!$,Ce=de.wristIndices;me&&_e&&(we|=1<<fe),p.set(0,0,0);for(let O of de.socket)p.add(h.fromBufferAttribute(u,O));p.multiplyScalar(1/6),m.set(0,0,0);for(let O of Ce)m.add(h.fromBufferAttribute(K,O));m.multiplyScalar(1/6).applyQuaternion($?.quaternion??M),me?m.add($.position):m.add(h.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),b.copy(g).normalize(),S.set(de.sign*.38,-1,.27).addScaledVector(b,-b.dot(h.set(de.sign*.38,-1,.27))).normalize(),y.copy(p).addScaledVector(g,.49),me&&y.addScaledVector(S,Math.sqrt(Math.max(.007,B**2-g.lengthSq()*.25))*.72),A.setFromUnitVectors(w,b.subVectors(y,p).normalize()),L.copy($?.quaternion??M);for(let O=0;O<4;O++){let ye=O===3;C.lerpVectors(ye?y:p,ye?m:y,E[O]),U.copy(A).slerp(L,ye?.79:O*.19);for(let ge=0;ge<6;ge++){let T=ET[ge],X=F[O];v.set(T[0]*X,T[1]*X*.84,0).applyQuaternion(U).add(C),u.setXYZ(de.rings[O+1][ge],v.x,v.y,v.z)}}for(let O=0;O<de.remap.length;O++)v.fromBufferAttribute(K,O).applyQuaternion(L),me?v.add($.position):v.add(h.set(p.x+de.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(de.remap[O],v.x,v.y,v.z)}c.index!==f[we]&&c.setIndex(f[we]),u.needsUpdate=!0,c.computeVertexNormals()}return k([null,null],.42,1,1,!1),{mesh:d,pose:k}}function So(n,e){let t=new li;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Hi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var $0=.1,CT=45,K0=55,ll=128,op=96,RT=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],PT=new _(0,0,-1);function ap(){let n=new vt,e=new pt({color:"#596974",roughness:.38,metalness:.6}),t=new pt({color:"#29323e",roughness:.68}),i=new gt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new ze(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new pt({color:"#7f4231",roughness:.46,metalness:.34});return r(So([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(So([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Lt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new Ke(.054,.014,.073),s,.035,.045,-.099),r(new Ke(.018,.008,.023),i,.035,.063,-.131),n}function Q0(n,{impact:e,onShot:t}){let i=ap(),r=new ze(new Rt(.045,0),new gt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new Je,o=new Be(ll*18,3).setUsage(wn),a=new Be(ll*18,3);for(let N=0;N<ll;N++)for(let G=0;G<6;G++){let W=RT[Math.floor(G/2)];a.setXYZ(N*6+G,W.r,W.g,W.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new $r(s,new Mi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Be(op*3,3).setUsage(wn),u=new Je;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new La(u,new oo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:$n}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:ll},()=>({p:new _,d:new _,distance:0,active:!1,authoritative:!1})),h=Array.from({length:op},()=>({p:new _,v:new _,life:0})),p=new _,y=new _,m=new _,g=0,b=0,S=0,v=0,C=0,A=!1;function L(N,G,W,k){for(let J=0;J<W;J++){let B=h[b++%op];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(k).addScaledVector(G,.55),B.life=.12+Math.random()*.21}}function U(N,G,W){let k=f[g++%ll];return k.p.copy(N),k.d.copy(PT).applyQuaternion(G),k.distance=0,k.active=!0,k.authoritative=W,k}function w(N){let G=U(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),L(p,G.d,4,2.2),C=.055,S++,t?.(N.position,N.quaternion)}function M(N,G,W){let k=U(N,G,W);L(k.p,k.d,4,2.2),l.visible=!0}function E({dt:N,aim:G,firing:W}){if(!G&&!i.visible&&!l.visible&&!d.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!G,G&&(i.position.copy(G.modelPosition??G.position),i.quaternion.copy(G.quaternion)),G&&W){if(A)for(v-=N;v<=0;)w(G),v+=$0;else w(G),v=$0;A=!0}else v=0,A=!1;C=Math.max(0,C-N),r.visible=!!G&&C>0,r.material.opacity=C/.055;let k=0;for(let B of f){if(!B.active)continue;let oe=Math.min(CT*N,K0-B.distance),le=oe>0?e?.(B.p,B.d,oe,B.authoritative):null,_e=le==null?oe:Math.max(0,Math.min(oe,le));B.p.addScaledVector(B.d,_e),B.distance+=_e,le!=null&&(m.copy(B.d).negate(),L(B.p,m,8,4.2)),B.active=le==null&&B.distance<K0;let ie=Math.min(.82,B.distance);for(let we=0;we<3;we++)for(let fe=0;fe<2;fe++){let de=(we+fe)/3;y.copy(B.p).addScaledVector(B.d,-ie*de),o.setXYZ(k++,y.x,y.y,y.z)}}l.visible=k>0,k>0&&(o.needsUpdate=!0),s.setDrawRange(0,k);let J=0;for(let B of h)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(J++,B.p.x,B.p.y,B.p.z));d.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function F(){for(let N of f)N.active=!1;for(let N of h)N.life=0;v=C=0,A=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:E,reset:F,replay:M,get shotsFired(){return S}}}var ey=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],IT=new _(0,1,0);function ah(n){let e=new vt,t=new pt({color:"#2c4750",roughness:.43,metalness:.47}),i=new pt({color:"#899fa3",roughness:.46,metalness:.57}),r=new gt({toneMapped:!1});function s(h,p,y,m,g,b=0){let S=new ze(h,p);return S.position.set(y,m,g),S.rotation.x=b,e.add(S),S}s(So([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(So([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Lt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Lt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new Ke(.044,.009,.038),r,.038,.069,-.023);let o=new ze(new Lt(.002,.003,1,5,1,!0),new gt({transparent:!0,opacity:.52,depthWrite:!1,blending:$n,toneMapped:!1})),a=new ze(new Rt(.012,0),new gt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new _,c=new _,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:y,end:m}){if(!h||!p||!y||!m){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(y),h!==u&&(u=h,r.color.set(ey[h-1]??ey[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(IT,c.normalize()),a.position.copy(m)}return d(),{mesh:e,hide:d,update:f}}var LT="wss://clouddata.turbowarp.org",DT="itssoren.github.io/VR/gorilla-lab/",uh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},wo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),iy="\u2601 GorillaHost",cl=["ARENE1","ARENE2","ARENE3"],UT=new Map([[iy,"vr"],[uh.vr,"vr"],[uh.pc,"pc"],...wo.map(n=>[n,"player"])]),cp=53,lh=4400,ry=64e3,FT=100,NT=200,BT=450,sy=6,Vt=(n,e)=>Math.round(n).toString().padStart(e,"0");function ul(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function us(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function OT({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Vt(e,7)+a.map(c=>Vt(c*100+2e4,5)).join("")+Vt(Math.round(l*10)%3600,4)+Vt(o,6)}function zT(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function oy({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",y=0,m="",g=-1/0,b=null,S=0,v=0,C=1/0,A=0,L="offline",U=!1,w=-1,M=0,E=[],F=1/0,N=350,G=1/0,W=0,k=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(T,X){L=T,n(X)}function oe(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function le(){return[...c.values()].map(T=>T.pose).filter(Boolean)}function _e(){let T=le().filter(D=>h==="vr"?D.role!=="vr":D.role==="vr"),X=D=>Number(D.ready)*2+ +(D.role==="pc"),ne=T.find(D=>D.id===b?.id)??null,Z=T.reduce((D,Y)=>!D||X(Y)>X(D)?Y:D,ne);Z!==b&&(b=Z,e(b))}function ie(T){for(let X of c.values())X.pose&&t(null,X.pose),X.pose=X.candidate=null;T&&c.clear(),_e()}function we(){let T=f;if(f=null,T){T.onopen=T.onmessage=T.onerror=T.onclose=null;try{T.close()}catch{}}}function fe(){we(),h=null,p="",C=1/0,U=!1,w=-1,E=[],k=[],ie(!0),B("offline","Hors ligne")}function de(T){let X=Math.min(3e4,1500*2**Math.min(A++,5));C=a()+X,B("retry","TurboWarp d\xE9connect\xE9 ("+T+") \xB7 reconnexion automatique au salon "+p)}function $(T){let X=!1;for(let[ne,Z]of c)Z.pose&&T-Z.pose.arrival>lh&&(t(null,Z.pose),Z.pose=null,X=!0),Z.candidate&&T-Z.candidate.arrival>lh&&(Z.candidate=null),T-Z.lastArrival>6e4&&c.delete(ne);X&&_e()}function K(T,X,ne,Z){let D=ZT(ne.value,null);if(!D||D.id===y)return;let Y=c.get(D.id);if(!Y){if(c.size>=64)return;Y={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:Z,pose:null,candidate:null},c.set(D.id,Y)}if(D.time<=Y.lastTime)return;let z=Y.pose??Y.candidate;if(z&&D.time-z.time>lh+Z-z.arrival){if(Y.pose)return;Y.candidate=null}Y.lastTime=D.time,Y.lastArrival=Z;let Q={...D,ready:D.ready??!0,protocol:D.protocol??(D.ready===void 0?3:4),role:T,channel:X,received:o(),arrival:Z},se=Y.candidate;if(!Y.pose&&(!se||se.channel!==X||se.map!==Q.map||Z-se.arrival>lh)&&(D.ready!==void 0||Math.abs(D.time-Q.received)>25e3)){Y.candidate=Q;return}if(Y.candidate=null,!Y.pose&&se?.objects&&se.ready&&se.map===Q.map&&!Q.objects&&(Q.objects=se.objects),Y.pose=Q,h==="vr"&&T==="vr"&&Q.ready)if(G===1/0||se?.arrival<G||D.id<y)h="player",m=wo[y%wo.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=ne.value.length,t(Q),_e(),!(!U||!Q.ready||Q.map!==w)){Z-Y.shotWindow>=1e3&&(Y.shotWindow=Z,Y.shotCount=0);for(let{seq:ue,position:R,quaternion:x}of Q.shots??[])ue<=Y.lastShot||(Y.lastShot=ue,!(Y.shotCount>=14||(R.x-Q.x)**2+(R.y-Q.y)**2+(R.z-Q.z)**2>7**2)&&(Y.shotCount++,r({position:R,quaternion:x},Q)));if(!(h!=="vr"||T!=="player"||D.actionTarget!==y))for(let{seq:ue,action:R}of D.actions)ue<=Y.lastAction||(Y.lastAction=ue,i(R,Q))}}function me(){let T;try{T=new s(LT)}catch{return!1}return f=T,v=a(),g=-1/0,G=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),T.onopen=()=>{f===T&&(S=a(),T.send(JSON.stringify({method:"handshake",project_id:DT+p,user:"player"+y})+`
`),B("open",oe()))},T.onmessage=X=>{if(f!==T||typeof X.data!="string"||X.data.length>105e4)return;let ne=a();$(ne);for(let Z of X.data.split(`
`)){if(!Z.trim())continue;let D;try{D=JSON.parse(Z)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",Z.slice(0,200));continue}let Y=UT.get(D?.name);D?.method!=="set"||!Y||K(Y,D.name,D,ne)}},T.onerror=()=>{f===T&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},T.onclose=X=>{if(f!==T)return;let ne=X.code;if(we(),ie(!1),E=[],k=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(ne)){de(ne);return}h=null,p="";let Z={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[ne];B("error","TurboWarp d\xE9connect\xE9 ("+ne+")"+(Z?" \xB7 "+Z:X.reason?" \xB7 "+X.reason.slice(0,100):""))},!0}function Ce(T,X){let ne=ul(T);return!/^[A-Z0-9]{5,12}$/.test(ne)||!["vr","pc","player"].includes(X)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===X&&p===ne?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(ie(!0),y=Math.floor(1e6+l()*8999999),h=X,p=ne,m=uh[h]??wo[y%wo.length],N=350,h==="vr"&&cl.includes(p)&&(m=y%2===0?uh.vr:iy,N=750+y%150),M=W=0,k=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},A=0,C=F=1/0,me()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function O(T,X){let ne=T.hand||T.type==="world"?5:4;if(h!=="player"||L!=="open"||!b?.ready||b.protocol<ne||b.map!==X||!up(T)||M>=99999999)return!1;let Z=a();return E=E.filter(D=>D.expires>=Z&&D.target===b.id&&D.map===X),E.length>=8?!1:(E.push({action:{...T},seq:++M,expires:Z+1800,target:b.id,map:X}),!0)}function ye(T,X,ne){if(!h||h==="pc"||L!=="open"||W>=99999999)return;let Z=Eo(T),D=Co(X);if(!Z||!D)return;let Y=a();k=k.filter(z=>z.expires>=Y&&z.map===ne).slice(-(sy-1)),k.push({record:Vt(++W,8)+Z+D,expires:Y+BT,map:ne})}function ge(T){let X=a();U=!!T&&T.ready!==!1,w=T?.map??-1,$(X),h&&!f&&X>=C&&(C=1/0,me()||de(1006)),f&&f.readyState===0&&X-v>1e4&&(we(),de(1006)),J.bufferedBytes=f?.bufferedAmount??0;let ne=h==="pc"?NT:FT;if(!T||!h||f?.readyState!==1||J.bufferedBytes>4096||X-S<(h==="vr"?N:350)||X-g<ne)return!1;if(h==="player"){let se=le().filter(R=>R.role==="player"),ue=se.find(R=>R.channel===m);if(ue?F=Math.min(X,F):F=1/0,ue&&(ue.id<y||X-F>=800)){let R=wo.find(x=>!se.some(I=>I.channel===x));if(!R)return L!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=R,F=1/0}}(A||L==="capacity")&&(A=0,B("open",oe()));let Z=Math.round(d+X-u),D=OT({...T,time:Z,id:y});if(!D)return!1;E=E.filter(se=>se.expires>=X&&se.target===b?.id&&se.map===T.map),k=k.filter(se=>se.expires>=X&&se.map===T.map);let Y=J.bufferedBytes===0?T.objectFeed?.(X):null,z=typeof T.avatar=="function"?T.avatar():T.avatar,Q=YT(D,z,Y,{version:5,ready:T.ready!==!1,actions:E,actionTarget:E[0]?.target??0,shots:k,score:T.score});return g=X,h==="vr"&&(G=Math.min(G,X)),f.send(JSON.stringify({method:"set",name:m,value:Q})+`
`),J.sent++,J.bytesSent+=Q.length,!0}return{join:Ce,leave:fe,tick:ge,sendAction:O,queueShot:ye,get stats(){return{...J}},get role(){return h},get code(){return p},get state(){return L},get remote(){return b},get peers(){return le()}}}var VT=15,kT=12,ay=44,ch=15,lp=35,Eo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Vt(e*100+2e4,5)).join(""):null;function To(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Co=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Vt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Ao(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function GT(n){let e=Eo(n.mesh.position),t=Co(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>cp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Vt(i,5)+Vt(r,2)+s+o+Vt(a,8)+e+t}function HT(n){return Vt(n,5)+"99"+"0".repeat(ay-7)}function WT(n){if(!n)return null;let e=Co(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Eo(l.position),u=l&&Co(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(VT+kT)}),r=Vt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Vt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+Vt(n.coconuts??31,2)+Vt(n.color??0,2)+a}function up(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=cp?"10"+Vt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Vt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Vt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Vt(i,5):null}function qT(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),up(s)===n?s:null}function XT(n){let e=Eo(n?.position),t=Co(n?.quaternion),i=Eo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function YT(n,e,t,i=null){let r=WT(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:y})=>Vt(p,8)+up(y)).join(""),a=i.version===5,l=a&&Eo(e?.gun?.position),c=a&&Co(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Vt(d.length,1)+d.map(p=>p.record).join("")+Vt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+XT(r?e.tool:null)+Vt(i.actionTarget??0,7)+Vt(o.length/ch,1)+o+f;return h.length+1+s.length>ry&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function ty(n,e,t){let i=Ao(n,e);if(!i)return null;let r=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:To(n,a+1),quaternion:Ao(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(r.some(a=>a&&(!a.position||!a.quaternion)))return null;let s=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return s>2||o>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function ZT(n,e){if(typeof n!="string"||n.length>ry||!/^[0-9]+$/.test(n))return null;let t=zT(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:ay,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=ty(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=To(n,a+2),f=Ao(n,a+17),h=To(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*ch+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=ch){let u=Number(n.slice(a,a+8)),d=qT(n.slice(a+8,a+ch));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=To(n,a+1),h=Ao(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>sy||n.length<a+u*lp+7)return null;t.shots=[];let d=0;for(let f=a+u*lp;a<f;a+=lp){let h=Number(n.slice(a,a+8)),p=To(n,a+8),y=Ao(n,a+23);if(h<=d||!p||!y)return null;t.shots.push({seq:h,position:p,quaternion:y}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=ty(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),y=To(n,c+10),m=Ao(n,c+25);if(d>cp||f>7||h>4||p>16777215||!y||!m)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:y,rotation:m})}t.objects={full:o==="2",records:a}}return t}var jT=.45,ny=2.5;function ly(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=jT&&!d.frozen&&(d.velocity.lengthSq()>=ny**2||d.angular.lengthSq()*d.radius**2>=ny**2);if(!l&&!p&&!h?.fast)continue;let y=GT(d);if(!y)continue;c?.add(f);let m=y!==h?.record;m&&e.set(f,{record:y,until:s+420}),(a||!l&&m)&&u.push(y),h?(h.record=y,h.fast=p):n.set(f,{record:y,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:HT(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var cy=Nt.DEFAULT_UP,JT=15,uy=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function $T(){let n=new vt,e=new ze(new Rt(.155,1),new pt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new ze(new ui(.23,.018,5,20),new gt({color:"#84e6ff",transparent:!0,opacity:.85,blending:$n,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new ze(new Gi(.11,.28,9,1,!0),new gt({color:"#55c7ff",transparent:!0,opacity:.45,side:At,blending:$n,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function KT(){let n=new vt,e=new vt,t=nh(0),i=t.createHead(),r=["left","right"].map(g=>({skin:sh(g,t.hand,{openWrist:!0}),position:new _,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=oh(t.fur,r.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=ah(e),l=null,c=new _,u=[null,null],d=new _,f=new qe,h=new qe,p=new qe,y={mode:0,position:new _,quaternion:new qe,end:new _};function m(g,b,S){let v=g.avatar,C=1-Math.exp(-S*32);if(!v){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),y.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(v.head).premultiply(f),i.quaternion.slerp(p,C),d.set(0,0,-1).applyQuaternion(i.quaternion);let A=Fe.smoothstep(-d.y,.28,.94),L=Math.max(.38,v.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*L,.24*A),o.rotation.x=-.5*A,h.copy(o.quaternion).invert(),t.setColor(v.color??0);for(let M=0;M<r.length;M++){let E=r[M],F=v.hands[M];if(u[M]=F?E:null,!F){E.tracked=!1;continue}c.copy(F.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(F.quaternion).premultiply(f).premultiply(h),E.tracked?(E.position.lerp(c,C),E.quaternion.slerp(p,C)):(E.position.copy(c),E.quaternion.copy(p)),E.tracked=!0;for(let N=0;N<3;N++)E.pressure[N]+=((F.pressure?.[N]??0)-E.pressure[N])*C;E.skin.pose(E.pressure,!1)}if(s.pose(u,v.armSpan*.5,.97,L,!0),v.gun){l||(l=ap(),l.visible=!1,e.add(l));let M=l.visible?C:1;l.position.lerp(v.gun.position,M),l.quaternion.slerp(p.copy(v.gun.quaternion),M),l.visible=!0}else l&&(l.visible=!1);let U=v.tool;if(!U){a.hide(),y.mode=0;return}let w=y.mode?C:1;y.mode=U.mode,y.position.lerp(U.position,w),y.quaternion.slerp(p.copy(U.quaternion),w),y.end.lerp(U.end,w),a.update(y)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of r)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function hy(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function dy({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,applyCoconuts:s,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,d=new Map,f=ly(),h=0,p=-1,y=-1,m=-1,g="",b=0,S=-1;function v(){let D=e();return D!==g&&(g=D,b=us(D)),b}function C(D){return!!D?.ready&&D.map===v()}function A(D){let Y=d.get(D);Y&&(n.remove(Y.mesh),Y.mesh.material?.dispose(),d.delete(D))}function L(){for(let D of d.keys())A(D);h=0,p=-1,y!==-1&&(y=-1,r?.(null)),m!==-1&&(m=-1,s?.(null)),S!==-1&&(S=-1,o?.(0))}function U(D,Y){if(D.color===Y.color&&D.style===Y.style)return;D.color=Y.color,D.style=Y.style;let z=D.mesh.material;if(z?.color){if(z.color.setHex(Y.color),Y.style===0){Object.assign(z,D.baseMaterial),D.baseEmissive&&z.emissive.copy(D.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][Y.style],z.metalness=[.1,0,.87,.12,0][Y.style],z.opacity=Y.style===3?.4:1,z.transparent=Y.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=Y.style===4?1.65:0,z.needsUpdate=!0}}function w(D){if(!C(D)){L();return}if((h!==D.id||p!==D.map)&&(L(),h=D.id,p=D.map),D.avatar&&D.avatar.light!==y&&(y=D.avatar.light,r?.(y)),D.avatar&&D.avatar.coconuts!==m&&(m=D.avatar.coconuts,s?.(m)),D.score!==void 0&&D.score!==S&&(S=D.score,o?.(S)),!D.objects)return;let Y=D.objects.full?new Set:null;for(let z of D.objects.records){if(z.removed){A(z.id);continue}Y?.add(z.id);let Q=d.get(z.id);if(Q&&Q.type!==z.type&&(A(z.id),Q=null),!Q){let ue=i?.(z.type);if(!ue)continue;let{roughness:R,metalness:x,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j}=ue.material??{},xe={roughness:R,metalness:x,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j};ue.userData.netId=z.id,ue.userData.netType=z.type,Q={mesh:ue,baseMaterial:xe,baseEmissive:ue.material?.emissive?.clone(),type:z.type,target:new _().copy(z.position),quaternion:new qe().copy(z.rotation),velocity:new _,time:D.time},ue.position.copy(Q.target),ue.quaternion.copy(Q.quaternion),d.set(z.id,Q),n.add(ue)}let se=(D.time-Q.time)/1e3;se>.06&&se<.65&&!(z.flags&6)?Q.velocity.copy(z.position).sub(Q.target).multiplyScalar(1/se).clampLength(0,23):Q.velocity.set(0,0,0),Q.target.copy(z.position),Q.quaternion.copy(z.rotation),Q.time=D.time,Q.flags=z.flags,Q.frequent=se>.06&&se<.16,Q.received=D.arrival,Q.mesh.userData.netFlags=z.flags,Q.mesh.userData.held=!!(z.flags&1),U(Q,z)}if(Y)for(let z of d.keys())Y.has(z)||A(z)}let M=new _;function E(D,Y,z){let Q=1-Math.exp(-D*22),se=1-Math.exp(-D*32);for(let ue of d.values()){if(ue.mesh.visible=Y,!Y)continue;let R=ue.frequent?se:Q,x=ue.flags&6?0:Math.min(ue.frequent?.1:.12,Math.max(0,(z-ue.received)/1e3));M.copy(ue.target).addScaledVector(ue.velocity,x),ue.mesh.position.distanceToSquared(M)>16||ue.flags&6&&ue.mesh.position.distanceToSquared(ue.target)<1e-4?ue.mesh.position.copy(M):ue.mesh.position.lerp(M,R),ue.mesh.quaternion.slerp(ue.quaternion,R),ue.flags&6&&ue.mesh.quaternion.angleTo(ue.quaternion)<.008&&ue.mesh.quaternion.copy(ue.quaternion),ue.mesh.updateMatrixWorld(!0)}}let F=D=>document.querySelector(D),N=F("#cloud-status"),G=F("#cloud-room"),W=F("#cloud-camera"),k=-1/0,J=0,B="Hors ligne",oe=0;function le(D){J=D,W.textContent="Cam\xE9ra : "+uy[D]}function _e(){le((J+1)%uy.length)}W.onclick=_e;let ie=oy({onStatus(D){B=D,N.textContent=D,c?.()},onPose(D){ie.role!=="vr"&&w(D)},onPeer(D,Y){if(!D){let se=u.get(Y.id);se?.art&&(hy(se.art.model),hy(se.art.toolRoot),se.art.dispose?.()),u.delete(Y.id);return}let z=u.get(D.id);z||(z={art:null,motion:new _,handMotion:[new _,new _]},u.set(D.id,z));let Q=z.pose;z.motion.set(0,0,0);for(let se of z.handMotion)se.set(0,0,0);if(Q&&Q.map===D.map){let se=(D.time-Q.time)/1e3;if(se>=.055&&se<=.65){z.motion.set(D.x-Q.x,D.y-Q.y,D.z-Q.z).multiplyScalar(1/se),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let ue=0;ue<2;ue++){let R=Q.avatar?.hands[ue],x=D.avatar?.hands[ue];R&&x&&z.handMotion[ue].copy(x.position).sub(R.position).multiplyScalar(1/se).clampLength(0,23)}}}z.pose=D},onAction:a,onShot:l}),we=ul(new URLSearchParams(location.search).get("room")??"");function fe(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),D=>(D%36).toString(36)).join("").toUpperCase()}G.value=/^[A-Z0-9]{5,12}$/.test(we)?we:fe();function de(D,Y=G.value){let z=ul(Y);if(!(ie.role===D&&ie.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}ie.role&&ie.leave(),ie.join(z,D)&&(G.value=z,D!=="vr"&&F("#game").focus(),f.reset(),le(0),t(us(z)),g="")}}F("#cloud-vr").onclick=()=>de("vr"),F("#cloud-new").onclick=()=>de("vr",fe());for(let[D,Y]of cl.entries())F(`#public-join-${D}`).onclick=()=>de("player",Y),F(`#public-host-${D}`).onclick=()=>de("vr",Y);F("#cloud-pc").onclick=()=>de("pc");let $=F("#cloud-player");$&&($.onclick=()=>de("player")),F("#cloud-leave").onclick=()=>{oe=0,ie.leave()},F("#cloud-copy").onclick=async()=>{let D=new URL(location.href);D.searchParams.set("room",ie.code||ul(G.value));try{await navigator.clipboard.writeText(D.href),N.textContent="Lien copi\xE9."}catch{N.textContent=D.href}oe=performance.now()+2500},addEventListener("pagehide",()=>ie.leave());let K=new _,me=new _,Ce=new _,O=new _,ye=0;function ge({dt:D,position:Y,yaw:z,pitch:Q,camera:se,rig:ue,keys:R,flat:x}){let I=x?.movement,H=Number(R.has("KeyD"))-Number(R.has("KeyQ")||R.has("KeyA"))+(I?.x??0),re=Number(R.has("KeyS"))-Number(R.has("KeyZ")||R.has("KeyW"))+(I?.z??0);x?.consumeJump?.()&&(ye=.26),ye=Math.max(0,ye-D);let j=Number(R.has("Space")||ye>0)-Number(R.has("ShiftLeft")||R.has("ShiftRight")),xe=R.has("ControlLeft")||R.has("ControlRight")?11:3.2;O.set(H,j,re).clampLength(0,1).applyAxisAngle(cy,z),ue.position.addScaledVector(O,D*xe).clampScalar(-175,175),ue.rotation.set(0,z,0),se.position.set(0,0,0),se.rotation.set(Q,0,0,"YXZ"),ue.updateMatrixWorld(!0),Y.copy(ue.position)}function T(D,Y,z,Q){for(let se of u.values()){let ue=se.pose;if(!(D&&C(ue))){se.art&&(se.art.model.visible=!1,se.art.toolRoot&&(se.art.toolRoot.visible=!1));continue}se.art||(se.art=ue.role==="pc"?$T():KT(),n.add(se.art.model),se.art.model.visible=!1,se.art.toolRoot&&n.add(se.art.toolRoot));let{model:x,toolRoot:I}=se.art,H=Math.min(.12,Math.max(0,(Q-ue.arrival)/1e3+.025));K.copy(ue).addScaledVector(se.motion,H),!x.visible||x.position.distanceToSquared(K)>64?x.position.copy(K):x.position.lerp(K,1-Math.exp(-z*34)),x.rotation.y=ue.yaw,x.visible=!0,I&&(I.visible=!0),se.art.draw(ue,Y,z)}}function X(D,Y){if(Y<oe)return;let z=ie.remote,Q=B;if(ie.state==="open"){let se="Salon "+ie.code+" \xB7 ",ue=ie.peers.filter(R=>R.ready);if(!D)Q=se+"quitte la session VR pour utiliser le mode spectateur";else if(ie.role!=="vr"&&z&&z.map!==v())Q=se+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(ie.role!=="vr"&&z&&!z.ready)Q=se+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(ie.role==="player"&&z&&z.protocol<5)Q=se+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(ie.role!=="vr"&&C(z))Q=se+"h\xF4te connect\xE9";else if(ie.role==="vr"){let R=ue.filter(C),x=R.filter(H=>H.role==="player").length,I=R.some(H=>H.role==="pc");Q=se+"tu h\xE9berges \xB7 "+(x+1)+" joueur"+(x?"s":""),I&&(Q+=" \xB7 spectateur connect\xE9"),!x&&ue.some(H=>!C(H))&&(Q+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==Q&&(N.textContent=Q,c?.())}function ne(D){let{inVR:Y,time:z,dt:Q,position:se,yaw:ue,camera:R,rig:x,keys:I,avatar:H,bodies:re,score:j}=D;if(!ie.role){L();return}let xe=ie.role!=="pc"||!Y,pe=performance.now(),be=v(),Me=ie.role!=="vr"?ie.remote:null,he=xe&&C(Me);if(!he&&p!==-1&&L(),E(Q,he,pe),T(xe,z,Q,pe),ie.role==="pc"&&!Y){(D.actions??I).delete("KeyC")&&_e();let Te=J===3&&he?[...d.values()].find(Ae=>Ae.type===JT)?.mesh:null,Ve=he?u.get(Me.id)?.art?.model:null;Te?(Ce.set(0,0,-.23).applyQuaternion(Te.quaternion),x.position.copy(Te.position).add(Ce),x.rotation.set(0,0,0),R.position.set(0,0,0),R.quaternion.copy(Te.quaternion),x.updateMatrixWorld(!0),se.copy(x.position)):Ve&&(J===1||J===2)?(Ce.set(0,.72,J===1?-2.7:2.7).applyAxisAngle(cy,Ve.rotation.y),me.copy(Ve.position).add(Ce),x.position.lerp(me,1-Math.exp(-Q*11)),R.position.set(0,0,0),x.updateMatrixWorld(!0),R.lookAt(Ve.position),R.updateWorldMatrix(!0,!1),se.copy(x.position)):ge(D)}ie.tick({x:se.x,y:se.y,z:se.z,yaw:ue,map:be,ready:xe,avatar:xe&&ie.role!=="pc"?H:null,score:j,objectFeed:xe&&ie.role==="vr"&&re?Te=>f.capture(Te,re):null}),pe-k>=150&&(k=pe,X(xe,pe))}function Z(D){let Y=u.get(D)?.pose;return C(Y)?Y:null}return{update:ne,getPeer:Z,connect:de,leave:()=>ie.leave(),get caption(){return N.textContent},handMotion(D,Y){return u.get(D)?.handMotion[Y]},sendAction(D){return ie.sendAction(D,v())},sendShot(D,Y){ie.queueShot(D,Y,v())},get stats(){return ie.stats},get role(){return ie.role},get connected(){return C(ie.remote)},get remoteSpectator(){return ie.peers.find(D=>D.role==="pc"&&C(D))??null},get remoteLight(){return y===-1?null:y},get replicaCount(){return d.size},forEachReplica(D){for(let Y of d.values())Y.mesh.visible&&D(Y.mesh)}}}function hh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Je,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=fy(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let y=0;y<o[u].length;++y)h.push(o[u][y][f]);let p=fy(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function fy(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let y=u.getComponent(f,p);a.setComponent(f+d,p,y)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var py=48,my=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),QT=(n,e,t)=>Math.max(e,Math.min(t,n)),eA=()=>structuredClone(my.shield),hl=(n,e,t,i)=>Number.isFinite(n)?QT(n,t,i):e;function fh(n){let e=n?.mode==="lathe"?my.bottle:eA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=py?n.points.map(o=>[hl(o?.[0],0,-1.5,1.5),hl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:hl(n?.depth,e.depth,.025,1.5),bevel:hl(n?.bevel,e.bevel,0,.15),segments:Math.round(hl(n?.segments,32,8,64))}}function gy(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function dh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function tA(n,e,t,i){let r=dh(n,e,t),s=dh(n,e,i),o=dh(t,i,n),a=dh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function nA(n){let e=fh(n),t=e.mode==="lathe"?e.points:gy(e);if(t.length<3||t.length>py*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&tA(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function yy(n){let e=fh(n),t=nA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([s,o])=>new Se(Math.max(0,s),o));i=new Ha(r,e.segments)}else{let r=gy(e),s=new li;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Hi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ft(new Float32Array(r*2),2))}return i}var mh=0,iA=1,rA=new _,xy=new Ka,hp=new En,vy=new _,ph=new Cn,gh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new yh,this.unassigned=new yh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new dp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new _;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,rA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===mh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,xy.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){xy.closestPointToPoint(p.point,!0,vy);let y=vy.distanceToSquared(p.point);y>s&&(s=y,c=p)}}s=-1,hp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let y=Math.abs(hp.distanceToPoint(p.point));y>s&&(s=y,u=p)}}let d=[];if(hp.distanceToPoint(u.point)<0){d.push(di.create(a,l,c),di.create(u,l,a),di.create(u,c,l),di.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(di.create(a,c,l),di.create(u,a,l),di.create(u,l,c),di.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let y=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>s&&(s=g,y=this.faces[m])}y!==null&&this._addVertexToFace(p,y)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===mh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=iA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===mh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=di.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},di=class n{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=mh,this.edge=null}static create(e,t,i){let r=new n,s=new dl(e,r),o=new dl(t,r),a=new dl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return ph.set(e.point,t.point,i.point),ph.getNormal(this.normal),ph.getMidpoint(this.midpoint),this.area=ph.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},dl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},dp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},yh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var hs=class extends Je{constructor(e=[]){super();let t=[],i=[],s=new gh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Be(t,3)),this.setAttribute("normal",new Be(i,3))}};var Dn=Math.PI*2,xh=.84,ji=128;function br(n){let e=new Uint8Array(ji*ji*4);for(let i=0;i<ji;i++)for(let r=0;r<ji;r++){let s=(r+.5)/ji,o=(i+.5)/ji,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/xh,1),Math.min(o/xh,1),r,i),l=(r+i*ji)*4;for(let c=0;c<3;c++)e[l+c]=Fe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new _i(e,ji,ji);return t.colorSpace=lt,t.generateMipmaps=!0,t.minFilter=In,t.magFilter=un,t.needsUpdate=!0,t}function ds(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new De(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*xh,s.getY(l)*xh):s.setXY(l,.95,.95);return i.setAttribute("color",new ft(a,3)),i}function Sr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:hh(r),material:new pt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function _y(n,e,t){let i=n/2,r=e/2,s=new li;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function _r(n,e,t,i,r){return new Hi(_y(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Mr(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Dn*h/e,y=t(d,f,p,u);if(i.push(y*Math.sin(p),f,y*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;d>0&&s.push(m,m+1,g),n[u+1][0]>0&&s.push(m+1,g+1,g)}}let o=new Je;o.setAttribute("position",new Be(i,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function fl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new _(0,r,0));continue}for(let s=0;s<e;s++){let o=Dn*s/e;t.push(new _(i*Math.sin(o),r,i*Math.cos(o)))}}return new hs(t)}function sA(){let t=new Wa(_y(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Fe.clamp(i.getX(l)/.098+.5,0,1),u=Fe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=br((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Dn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[it(_r(.106,.207,.013,.011,.0019),8425890),it(_r(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(_r(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(_r(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new Ke(.0036,.024,.004).translate(.055,.029,0),11714250),it(new Ke(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new Ke(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new Lt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new zt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new zt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new hs([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Sr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function oA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Mr(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=br((a,l,c,u)=>{let d=Dn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(d))/.009)**2)))),y=h**3*p,m=ds(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*y+g,76+24*h+70*y+g,24+11*h+52*y+g*.8]}),o=fl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Sr("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function aA(){let n=br((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*ds(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Mr([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Mr([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Lt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Lt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Dn*s/5;i.push(it(new Ke(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=fl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Sr("wheel","Roue",1.8,r,i,n,.64,.23)}function lA(){let n=br((s,o,a,l)=>{let c=ds(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Dn*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Mr([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new ui(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Dn*l/5;return new _(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let r=new hs(i);return Sr("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function cA(){let n=Mr([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=br((r,s,o,a)=>{let l=9*ds(o,a),c=11*Math.cos(r*Dn*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Dn*48+r*Dn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Dn*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new uo(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new zt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new zt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Lt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new zt(.008,12).translate(0,.035,.0336),15633202)],i=fl([[.033,-.143],[.054,.133]],6);return Sr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function uA(){let n=Mr([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=br((s,o,a,l)=>{let c=10*ds(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Dn*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Dn*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new zt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new uo(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new zt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=fl([[.069,-.112],[.069,.109]],6);return Sr("soda","Canette de soda",.35,r,i,t,.42,.27)}function hA(){let n=Mr([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=br((r,s,o,a)=>{let l=15*ds(o,a),c=8*Math.cos(r*Dn*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(_r(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new zt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=fl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Sr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function dA(){let n=br((r,s,o,a)=>{let l=8*ds(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Mr([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(_r(.138,.22,.061,.016,.004),14788675),it(_r(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new Wt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Lt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new Ke(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new Ke(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new zt(.004,8).translate(.04,.066,.0397),15817792),it(new zt(.004,8).translate(-.04,.066,.0397),7903100),it(_r(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new _(r,l,o),new _(s,l,o),new _(s,l,a),new _(r,l,a)]);return Sr("radio","Talkie-walkie",.43,new hs(i),t,n,.61,.08)}function My(){return[sA(),oA(),aA(),lA(),cA(),uA(),hA(),dA()]}var Un=new qe,qt=new _,Ah=new _,fA=new ct,by=new WeakMap;function Ph(n){if(n.heightfield||n.objectBody)return null;let e=by.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=fA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return by.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function Ry(n,e,t){let i=Ph(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Eh(n,e,t,i){if(t.heightfield)return TA(n,e,t,i);if(t.objectBody)return zy(n,e,t.objectBody,i);if(!Ry(n,e,t))return 0;Un.copy(t.quaternion).invert(),qt.copy(n).sub(t.position).applyQuaternion(Un);let r=t.half;Ah.copy(qt).clamp(t.min,r),i.subVectors(qt,Ah);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(qt.x),a=r.y-Math.abs(qt.y),l=r.z-Math.abs(qt.z);return o<=a&&o<=l?i.set(Math.sign(qt.x)||1,0,0):a<=l?i.set(0,Math.sign(qt.y)||1,0):i.set(0,0,Math.sign(qt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new _,Ji=new _;function bp(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Eh(n,e,u,rt);if(!d||(n.addScaledVector(rt,d+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let f=i.dot(rt);f<0&&i.addScaledVector(rt,-f*(Math.abs(f)<.55?1:1+r)),Ji.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(Ji,-Math.min(.95,s*u.friction*o))}return l}var fp=new _,Lo=[];function Uo(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Lo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=Ph(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Lo.push(h)}for(let h=1;h<=o;h++){fp.copy(n).lerp(e,h/o);for(let p of Lo){let y=Eh(fp,t,p,rt);if(y)return r.copy(fp).addScaledVector(rt,y+.001),s.copy(rt),p}}return null}var gl=new _,xl=new _,Do=new _,Py=new Cn,yl=new _;function Tr(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let y=new _().fromBufferAttribute(t,p),m=y.toArray().map(g=>g.toFixed(5)).join(",");s.has(m)||(s.add(m),i.push(y))}for(let p=0;p<(n.index?.count??t.count);p+=3){let y=v=>new _().fromBufferAttribute(t,n.index?n.index.getX(v):v),m=y(p),g=y(p+1),b=y(p+2),S=new Cn(m,g,b).getNormal(new _);S.lengthSq()>.1&&r.push({a:m,b:g,c:b,n:S})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new tn().setFromPoints(i).getSize(new _),u=Math.max(1e-4,e**2*.4),d=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let y=[];for(let m of p)m.lengthSq()>.5&&!y.some(g=>Math.abs(g.dot(m))>.9999)&&y.push(m);return y};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new _().subVectors(p.b,p.a).normalize(),new _().subVectors(p.c,p.b).normalize(),new _().subVectors(p.a,p.c).normalize()]))}}function Ih(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Un.copy(t.quaternion).invert(),qt.copy(n).sub(t.position).applyQuaternion(Un),i.faces.every(s=>s.n.dot(gl.subVectors(qt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)Py.set(s,o,a).closestPointToPoint(qt,yl),r=Math.min(r,qt.distanceToSquared(yl));return Math.sqrt(r)}function pA(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Eh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Un.copy(e.quaternion).invert(),qt.copy(r.position).sub(e.position).applyQuaternion(Un),Ah.copy(qt).clamp(e.min,e.half),qt.distanceToSquared(Ah)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){gl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Eh(gl,.007,e,Do);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(gl),t.copy(Do)):Math.abs(c-o)<.003&&Do.dot(t)>.98&&(i.lerp(gl,1/++a),o=Math.max(o,c)))}return o}var vh=new _,mA=new _,_h=new _,gA=new _,yA=new _;function fi(n){return Tr(new Ke(n.x*2,n.y*2,n.z*2))}function Lh(n,e,t){let i=gA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=yA.copy(o).negate(),c=ms(n,l)+ms(e,o)-a,u=ms(n,o)+ms(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<r&&(r=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!s(vh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(vh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){_h.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(vh.copy(a).applyQuaternion(e.mesh.quaternion).cross(_h)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(mA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Un.copy(a.mesh.quaternion).invert(),qt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Un);for(let{a:c,b:u,c:d}of a.shape.faces){Py.set(c,u,d).closestPointToPoint(qt,yl);let f=qt.distanceToSquared(yl);f<l&&(l=f,_h.copy(yl))}if(!s(vh.subVectors(qt,_h).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var xA=new _;function vA(n,e,t){Un.copy(e.quaternion).invert(),qt.copy(n.mesh.position).sub(e.position).applyQuaternion(Un);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(qt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=qt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+ms(n,xA.copy(t).negate())-r,a=s+ms(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Sp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return pA(n,e,t,i??xl);let r=vA(n,e,t)??Lh(n,e,t);return r>0&&i&&Dy(n,e,t,i),r}var vp=Tr(new ci(1,0).scale(...rh)),Mh={mesh:{position:new _,quaternion:new qe},shape:vp,radius:vp.radius,precise:!0};function Iy(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=vp.radius;Lo.length=0;for(let c of i){let u=Ph(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Lo.push(c)}Mh.mesh.quaternion.copy(t);let l=Mh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Lo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Lh(Mh,d,rt):Sp(Mh,u,rt);if(f>0)return r.copy(l).addScaledVector(rt,f+5e-4),s.copy(rt),u}}return null}function vl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!Ry(n.mesh.position,n.radius,r))continue;let s=Sp(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var pp=new _,pl=new _,bh=new _,mp=new qe,wr=new qe,Sy=new qe;function wy(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Ly(n,e,t,i,r){let{mesh:s,shape:o}=n;pp.copy(s.position),mp.copy(s.quaternion),pl.subVectors(e,pp);let a=wy(mp,t,wr),l=pl.length()+a*o.radius,c=By(o),u=Math.max(1,Math.min(Ny,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;bh.set(wr.x,wr.y,wr.z).normalize(),Sy.setFromAxisAngle(bh,f),pl.multiplyScalar(d/u);for(let y=0;y<u;y++)s.position.add(pl),s.quaternion.premultiply(Sy).normalize(),vl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(pl.subVectors(s.position,pp).divideScalar(h).clampLength(0,23),.52);let p=wy(mp,s.quaternion,wr);bh.set(wr.x,wr.y,wr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(bh,.52)}function ms(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Un.copy(n.mesh.quaternion).invert(),Do.copy(e).applyQuaternion(Un);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Do));return t}var Io=new _,Ch=new _,_A=new _,gp=new _,Ro={},Po={};function Ty(n,e,t,i){let{mesh:r,shape:s}=n,o=ms(n,_A.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Io),i.minV=i.maxV=r.position.dot(Ch);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Do)<o-.0015)continue;gp.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=gp.dot(Io),c=gp.dot(Ch);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Dy(n,e,t,i){Math.abs(t.y)<.8?Io.set(-t.z,0,t.x).normalize():Io.set(t.y,-t.x,0).normalize(),Ch.crossVectors(t,Io),Ty(n,t,-1,Ro),Ty(e,t,1,Po);let r=(Math.max(Ro.minU,Po.minU)+Math.min(Ro.maxU,Po.maxU))*.5,s=(Math.max(Ro.minV,Po.minV)+Math.min(Ro.maxV,Po.maxV))*.5;i.copy(t).multiplyScalar((Ro.plane+Po.plane)*.5).addScaledVector(Io,r).addScaledVector(Ch,s)}var Ay=new _;function Rh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Ay.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Ay)}}function MA(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function Uy(n){return!n.owner&&!n.frozen}var fs=new _,ps=new _,ml=new _,Ey=new _,_p=new _,Mp=new _,bA=new _;function Sh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function Fy(n,e,t,i){let{mesh:r,shape:s}=n.body;return Un.copy(r.quaternion).invert(),_p.crossVectors(e,t),i.copy(_p).applyQuaternion(Un).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function wh(n,e,t){return n?.inverseMass?(Fy(n,e,t,Mp),n.inverseMass+_p.dot(Mp)):0}function Th(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(Fy(n,e,t,Mp),i))}function yp(n){return n.friction??n.spec?.friction??.78}function Cy(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(yp(s)*yp(o)):Math.min(yp(s),t.friction??.78);fs.subVectors(xl,s.mesh.position),o&&ps.subVectors(xl,o.mesh.position),Sh(n,fs,ml).sub(Sh(e,ps,Ey));let l=ml.dot(rt),c=!1;if(l<-1e-5){let d=l<-.8?Fe.clamp(r*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(wh(n,fs,rt)+wh(e,ps,rt));Th(n,fs,rt,f),Th(e,ps,rt,-f),Sh(n,fs,ml).sub(Sh(e,ps,Ey)),Ji.copy(ml).addScaledVector(rt,-ml.dot(rt));let h=Ji.length();if(h>1e-5&&a>0){Ji.divideScalar(h);let p=Math.min(f*a,h/(wh(n,fs,Ji)+wh(e,ps,Ji)));Th(n,fs,Ji,-p),Th(e,ps,Ji,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/d),Rh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/d),Rh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function SA(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var Ny=96,wA=5;function By(n){return Math.max(.008,n.thickness*.35)}function Oy(n,e,t,i,r,s){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:Ph(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=Uy(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/By(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new tn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Rh(f),o.push(f)}l=Math.min(Ny,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:y}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(s?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let m=y.length();m>1e-5&&h.rotateOnWorldAxis(bA.copy(y).divideScalar(m),Math.min(m,30)*c),Rh(d)}for(let d=0;d<wA;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:y}of a){if(!MA(h.bounds,p,y))continue;let m=Sp(h.body,p,rt,xl);m>0&&(f=Cy(h,null,p,m,r)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let y=h+1;y<o.length;y++){let m=o[y];if(m.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!m.inverseMass||!p.bounds.intersectsBox(m.bounds))continue;let g=Lh(p.body,m.body,rt);g<=0||(Dy(p.body,m.body,rt,xl),f=Cy(p,m,null,g,r)||f)}}if(!f)break}for(let d of o)d.inverseMass&&SA(d,c)}}function TA(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var xp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function zy(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(xp.mesh.position=n,xp.shape.sphereRadius=e,Lh(xp,t,i))}function Vy(n,e,t,i,r){let s=zy(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Uy(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Xt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),ky=Xt(-24,24,-51,7),Gy=34521,No={x:0,y:0,z:3},Dh={x:.05,y:1.16,z:5.9},Fo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Xt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Xt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Xt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Xt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Xt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Xt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Xt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Xt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Xt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Xt(9,23,-48,-37),sign:[16,-38.2]}},o3=[Xt(-9,-6,-51,7),Xt(6,9,-51,7),Xt(-24,24,-8,-5),Xt(-24,24,-27,-23),Xt(9,23,-37,-34)],Hy=[{name:"Glace",bounds:Fo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Fo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Xt(-9,9,-51,7)},{name:"Sol ouest",bounds:Xt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Xt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Xt(-24,-23,-51,7)},{name:"Sol est",bounds:Xt(9,23,-51,-48)},{name:"Sol est",bounds:Xt(9,23,-37,7)},{name:"Bordure est",bounds:Xt(23,24,-51,7)}],Bo={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Oo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Wy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),wp={x:16,z:-31},Uh={x:16,y:1.52,z:-21},Fh={x:-19.4,y:.68,z:-3.25},qy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Xy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Uh.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var AA=[0,1,2,3,4,5,7,8,9,10];function Yy(n){Wy.forEach(({x:e,z:t},i)=>n(AA[i],new _(e,.8,t)))}function Nh(){let n=[["Cube",new Ke(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Rt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new qa(.29),"#d8ae53",0,1],["Brique",new Ke(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ke(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Rt(.6,4),"#dbab58",.6,3.7],["Coco",new Rt(.124,1),"#956238",.124,.44]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:Tr(t,r),material:new pt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:fi(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of My()){let r=Tr(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Tp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere","spawn-coconut","spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ar=null;function EA(){let n=new De,e=new Lt(.16,.25,3.15,9,12),t=e.attributes.position,i=[];for(let c=0;c<t.count;c++){let u=Math.round((t.getY(c)+1.575)/3.15*12),d=Math.floor((Math.atan2(t.getX(c),t.getZ(c))+Math.PI)*1.43);n.setHSL(.084+u*.002,.35,.35+u%3*.032+d%3*.018),i.push(n.r,n.g,n.b)}e.setAttribute("color",new Be(i,3));let r=[],s=[],o=3.14;function a(c,u,d,f){r.push(...c,...u,...d),n.setHSL(.25+f*.043,.54,.28+f*.17);for(let h=0;h<3;h++)s.push(n.r,n.g,n.b)}for(let c=0;c<10;c++){let f=function(h,p){let y=h*d;return[Math.cos(u)*y-Math.sin(u)*p,o+Math.sin(h*Math.PI)*.38-h*h*.54+c%3*.055,Math.sin(u)*y+Math.cos(u)*p]},u=c*2.39996,d=1.35+c%4*.2;for(let h=0;h<7;h++){let p=h/7,y=(h+1)/7,m=.285*Math.sin(Math.PI*p)**.7,g=.285*Math.sin(Math.PI*y)**.7;for(let b of[-1,1]){let S=f(p,m*b),v=f(y,g*b);S[1]-=.065,v[1]-=.065,a(f(p,0),S,v,.31+h%4*.14),a(f(p,0),v,f(y,0),.47+c%3*.16)}}}let l=new Je;return l.setAttribute("position",new Be(r,3)),l.setAttribute("color",new Be(s,3)),l.computeVertexNormals(),{trunk:{geometry:e,material:new Pt({color:16777215,vertexColors:!0,flatShading:!0})},fronds:{geometry:l,material:new Pt({vertexColors:!0,side:At,flatShading:!0})}}}function CA(){let n=()=>{let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="#182831",t.fillRect(0,0,256,64),t.textAlign="center",t.font="bold 28px system-ui",t.fillStyle="#fff0ce",t.fillText("CIBLE \xB7 0",128,42);let i=new Pn(e);return i.colorSpace=lt,i};return{"target-ring-outer":{geometry:new zt(.9,20),material:new Pt({color:"#e2ad5c",side:At})},"target-ring-middle":{geometry:new zt(.58,20),material:new Pt({color:"#ca664b",side:At})},"target-ring-inner":{geometry:new zt(.27,20),material:new Pt({color:"#f5e5bd",side:At})},"target-post":{geometry:new Ke(.14,1.5,.14),material:new Pt({color:"#485d5d",flatShading:!0})},"target-score":{geometry:new Wt(1.4,.35),material:new gt({map:n(),side:At})}}}function Zy(){if(Ar)return Ar;let n=Nh(),e=Tp;Ar=new Map(n.map((i,r)=>[e[r],{geometry:i.geo,material:i.material,mass:i.mass,properties:i.properties??{}}]));let t=EA();Ar.set("palm-trunk",t.trunk),Ar.set("palm-fronds",t.fronds),Ar.set("chrome-sphere",{geometry:new Rt(.54,2),material:new pt({color:"#c8e6ed",metalness:1,roughness:.16})});for(let[i,r]of Object.entries(CA()))Ar.set(i,r);return Ar}function Bh(n){return typeof n=="string"&&Zy().has(n)}function Ap(n){return Zy().get(n)??null}var Ep="gorilla-lab-models-v1",$i=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),RA=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,PA=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Jy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),IA=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),LA=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,DA=/^#[a-f\d]{6}$/i;function jy(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function _l(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Fe.clamp(n[r],t,i):e)}function gs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>$i.models||JSON.stringify(n).length>$i.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!LA.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>$i.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:jy(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...Bh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(IA).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:i?.hitbox?.mode==="box"?{mode:"box",center:_l(i.hitbox.center,0,-6,6),size:_l(i.hitbox.size,.5,.025,12)}:{mode:"auto"},parts:i.parts.map((r,s)=>({name:jy(r?.name,`Pi\xE8ce ${s+1}`),shape:r?.shape==="asset"&&Bh(r?.assetId)?"asset":Object.hasOwn(PA,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Bh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:fh(r?.profile)}:{},position:_l(r?.position,0,-3,3),rotation:_l(r?.rotation,0,-360,360),scale:_l(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&DA.test(r.color)?r.color:"#51bdd2",surface:Object.hasOwn(Jy,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=$i.textureBytes&&RA.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Cp(n){try{let e=(n??globalThis.localStorage)?.getItem(Ep);if(e&&e.length<=$i.fileBytes)return gs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function UA(n){switch(n){case"sphere":return new Gn(.5,20,12);case"cylinder":return new Lt(.5,.5,1,20);case"cone":return new Gi(.5,1,20);case"torus":return new ui(.365,.135,8,24);case"capsule":return new Kr(.28,.44,6,16);case"diamond":return new ci(.5);default:return new Ke(1,1,1)}}var $y=Object.keys(Jy),zo=64,Ml=4,Ky=2,Ai;function FA(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function Qy(){if(Ai)return Ai;let n=zo*Ml,e=zo*Ky,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/zo)*Ml+Math.floor(r/zo),o=FA($y[s],r%zo,i%zo),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ai=new _i(t,n,e),Ai.colorSpace=lt,Ai.magFilter=un,Ai.minFilter=In,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}function ex(n){let e=n.shape==="asset"?Ap(n.assetId):null,t=n.shape==="custom"?yy(n.profile):e?.geometry?.clone()??UA(n.shape),i=t.index?t.toNonIndexed():t;i!==t&&t.dispose(),i.attributes.uv||i.setAttribute("uv",new Be(new Float32Array(i.attributes.position.count*2),2));let r=n.rotation.map(Fe.degToRad);i.scale(...n.scale),i.rotateX(r[0]),i.rotateY(r[1]),i.rotateZ(r[2]),i.translate(...n.position);let s=new De(n.color),o=i.attributes.position.count,a=new Float32Array(o*3),l=i.attributes.uv,c=$y.indexOf(n.surface),u=c%Ml,d=Math.floor(c/Ml),f=i.attributes.color;for(let h=0;h<o;h++)n.shape==="asset"&&f?(a[h*3]=f.getX(h)*s.r,a[h*3+1]=f.getY(h)*s.g,a[h*3+2]=f.getZ(h)*s.b):s.toArray(a,h*3),n.shape!=="asset"&&!n.texture&&l.setXY(h,(u+.05+l.getX(h)*.9)/Ml,(d+.05+l.getY(h)*.9)/Ky);return i.setAttribute("color",new ft(a,3)),i}function NA(n){let e=n?.shape==="asset"?Ap(n.assetId):null;if(e?.material){let i=e.material.clone();if(i.map&&(i.map=i.map.clone(),i.map.needsUpdate=!0),n.texture){i.map?.dispose();let r=new bi().load(n.texture);r.colorSpace=lt,r.wrapS=r.wrapT=Vn,i.map=r}return n.color&&n.color!=="#ffffff"&&i.color?.multiply(new De(n.color)),i.needsUpdate=!0,i}if(!n?.texture)return new pt({vertexColors:!0,map:Qy(),roughness:.68});let t=new bi().load(n.texture);return t.colorSpace=lt,t.wrapS=t.wrapT=Vn,new pt({vertexColors:!0,map:t,roughness:.68})}function Er(n){return n?.parts?.some(e=>e.texture||e.shape==="asset")?n.parts.map(NA):new pt({vertexColors:!0,map:Qy(),roughness:.68})}function Oh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ai&&e.map.dispose(),e.dispose()}}function Rp(n){let e=n.map(ex),t=hh(e,n.some(i=>i.texture||i.shape==="asset"));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Vo(n){let e=Rp(n.parts),t=e.boundingBox.getSize(new _);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function Pp(n){let e=new tn;for(let t of n.parts??[]){let i=ex(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function Ip(n){let e=Pp(n),t=e.getCenter(new _),i=e.getSize(new _);return n.hitbox?.mode==="box"?{mode:"box",center:new _(...n.hitbox.center),size:new _(...n.hitbox.size),boundsCenter:t,boundsSize:i}:{mode:"auto",center:t,size:i,boundsCenter:t,boundsSize:i}}function Lp(n,e=null){let t=Ip(n),i=t.center.clone().sub(t.boundsCenter),r=t.size.clone();if(e){let s=new _(e.x,e.y,e.z).divide(t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5)));i.multiply(s),r.multiply(s)}return new Ke(r.x,r.y,r.z).translate(i.x,i.y,i.z)}function tx(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Rp(e.parts),i=t.boundingBox.getSize(new _);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Er(e),collisionGeo:Lp(e),mass:Fe.clamp(i.x*i.y*i.z*9,.18,12)}})}function nx(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Rp(e.parts),i=t.boundingBox.getSize(new _),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new ze(t,Er(e));s.castShadow=!0;let o=new vt;return o.add(s),o}var sx=Object.freeze([8,16,32,48,64,96,128]),ox=16,Vh=24,ix=new WeakMap,Ei=Fe.clamp,ys=Fe.lerp,Dp=n=>n*n*(3-2*n);function Kn(n,e,t,i){return Number.isFinite(n)?Ei(n,e,t):i}function rx(n){if(!n)return null;let e=gs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var BA=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function ko(n={}){let e=sx.includes(n?.detail)?n.detail:ox,t=n?.heights;return{detail:e,seed:Math.round(Kn(n?.seed,0,2147483647,1)),amplitude:Kn(n?.amplitude,0,12,0),frequency:Kn(n?.frequency,.015,2,.12),octaves:Math.round(Kn(n?.octaves,1,5,3)),roughness:Kn(n?.roughness,.15,.95,.42),ridge:Kn(n?.ridge,0,1,0),edgeFade:Kn(n?.edgeFade,0,1,0),grass:Kn(n?.grass,0,1,0),shrub:Kn(n?.shrub,0,1,0),grassSize:Kn(n?.grassSize,.1,5,1),shrubSize:Kn(n?.shrubSize,.1,5,1),grassModel:rx(n?.grassModel),shrubModel:rx(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&BA.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Kn(i,-Vh,Vh,0)):null}}function ax(n,e,t,i){let r=Ei(t,0,e),s=Ei(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],y=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:y+(p-y)*(1-l)+(h-y)*(1-c)}function lx(n,e){let t=sx.includes(e)?e:ox;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>ax(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function Ki(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function zh(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=Dp(n-i),o=Dp(e-r),a=ys(Ki(i,r,t),Ki(i+1,r,t),s),l=ys(Ki(i,r+1,t),Ki(i+1,r+1,t),s);return 2*ys(a,l,o)-1}function bl(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=ix.get(n),p=h&&h.w===e&&h.d===t&&h.detail===r&&h.seed===s&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let y=r+1,m=p?h.procedural:new Float64Array(y**2);if(!p&&o)for(let S=0;S<=r;S++)for(let v=0;v<=r;v++){let C=(v/r-.5)*e*a,A=(S/r-.5)*t*a,L=0,U=1,w=0;for(let F=0;F<l;F++){let N=zh(C*2**F,A*2**F,s+F*13);L+=U*ys(N,1-2*Math.abs(N),u),w+=U,U*=c}let M=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(v/r-.5))*2,(.5-Math.abs(S/r-.5))*2)),d*2):1,E=l===3&&c===.42&&u===0&&d===0;m[S*y+v]=E?o*(.62*zh(C,A,s)+.26*zh(C*2.03,A*2.03,s+13)+.12*zh(C*4.13,A*4.13,s+37)):o*L/w*M}let g=f?m.map((S,v)=>S+f[v]):m,b={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:m,surface:g};return ix.set(n,b),b}function Up(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return ax(o,i,(e/r+.5)*i,(t/s+.5)*i)}function OA(n,e,t){return n.y+Up(bl(n),e-n.x,t-n.z)}function zA(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function cx(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=bl(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,y=Ei(h,-c/2,c/2),m=Ei(p,-u/2,u/2);if((h-y)**2+(p-m)**2>=r**2)return!1;let g=(h/c+.5)*l,b=(p/u+.5)*l,S=c/l,v=u/l,C=Math.max(0,Math.ceil(g-r/S)),A=Math.min(l,Math.floor(g+r/S)),L=Math.max(0,Math.ceil(b-r/v)),U=Math.min(l,Math.floor(b+r/v)),w=Number.isFinite(o)?o-n.y:Up(a,h,p),M=l+1,E=a.heights?.slice()??new Array(M**2).fill(0),F=!1,N=!1;function G(W,k,J){F=!0;let B=k*M+W,oe=E[B],le;if(i==="raise"||i==="lower")le=oe+(i==="raise"?1:-1)*s*J;else{let _e=i==="flatten"?w:zA(a,W,k);le=ys(d[B],_e,Math.min(1,s)*J)-f[B]}le=Ei(le,-Vh,Vh),!(Math.abs(le-oe)<1e-7)&&(E[B]=le,N=!0)}for(let W=L;W<=U;W++)for(let k=C;k<=A;k++){let J=Math.hypot((k-g)*S,(W-b)*v)/r;J<1&&G(k,W,Dp(1-J))}if(!F){let W=Ei(g,0,l),k=Ei(b,0,l),J=Math.min(l-1,Math.floor(W)),B=Math.min(l-1,Math.floor(k)),oe=W-J,le=k-B,_e=oe+le<=1,ie=_e?1-oe-le:oe+le-1,we=_e?oe:1-le,fe=_e?le:1-oe;if(ie>=Math.max(we,fe)){let de=+!_e;G(J+de,B+de,1)}else we>=fe?G(J+1,B,1):G(J,B+1,1)}return N&&(n.terrain.heights=E),N}function ux(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=new Uint16Array(r**2*6),c=0;for(let d=0;d<=r;d++)for(let f=0;f<=r;f++){let h=d*s+f;o[3*h]=(f/r-.5)*e,o[3*h+2]=(d/r-.5)*t,a[2*h]=f/r*e/2.6,a[2*h+1]=(1-d/r)*t/2.6,d<r&&f<r&&(l.set([h,h+s,h+1,h+s+1,h+1,h+s],c),c+=6)}let u=new Je;return u.setAttribute("position",new ft(o,3).setUsage(wn)),u.setAttribute("uv",new ft(a,2)),u.setIndex(new ft(l,1)),VA(u,n),u}function VA(n,e){let{surface:t}=bl(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function kA(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=bl(n),l=Ei(((e-n.x)/s+.5)*r,0,r),c=Ei(((t-n.z)/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,y=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],m=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-y*r/s,1,-m*r/o).normalize()}function hx(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>OA(n,t,i),normalAt:(t,i,r)=>kA(n,t,i,r),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function GA(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new Je;return e.setAttribute("position",new Be(n,3)),e.setAttribute("uv",new Be(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function HA(){return new Rt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var WA=[{name:"grass",geometry:GA,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:HA,perMetre:.17,max:48,salt:47,color:"#36583c"}];function dx(n){let e=new vt;for(let{name:t,geometry:i,perMetre:r,max:s,salt:o,color:a}of WA){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(s,n.w*n.d*r)*l)),u=n.terrain[t+"Model"],d=n.terrain[t+"Size"]??1,f,h;if(u){let m=t==="grass"?.42:.85;f=Vo(u),f.scale(m*d,m*d,m*d),f.translate(0,m*d/2,0),h=Er(u)}else if(f=i(),f.scale(d,d,d),h=new Pt({color:a,side:t==="grass"?At:ai,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let m=new bi().load(n.terrain.grassTexture);m.colorSpace=lt,h.map=m,h.color.set("#ffffff"),h.userData.ownTexture=!0}let p=new Ra(f,h,c);p.name=t,p.instanceMatrix.setUsage(wn),p.userData.salt=o,p.receiveShadow=!0;let y=new De;for(let m=0;m<c;m++){let g=ys(.68,1.2,Ki(m,o,n.terrain.seed+4));p.setColorAt(m,y.setRGB(g,g,g))}e.add(p)}return qA(e,n),e}function qA(n,e){let t=bl(e),i=new Nt;for(let r of n.children){let{salt:s}=r.userData,{seed:o}=e.terrain;for(let a=0;a<r.count;a++){let l=(Ki(a,s,o)-.5)*.96*e.w,c=(Ki(a,s,o+1)-.5)*.96*e.d;i.position.set(l,Up(t,l,c),c),i.rotation.y=Ki(a,s,o+2)*2*Math.PI,i.scale.setScalar(ys(.58,1.34,Ki(a,s,o+3))),i.updateMatrix(),r.setMatrixAt(a,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function fx(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Oh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var kh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],px=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function mx(n,e=px[n]){n=Math.max(0,Math.min(kh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:px[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function gx({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,y=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(y),t(p,y,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var XA=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function yx(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){XA.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function xx(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var vx=.065,YA=.08,Gh=.035,Fp=.003,Hh=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let y=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(Zi).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(y).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(y).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(Fp,r*t*t);let b=this.sweep(u,this.from,this.to);if(m){let w=this.correction.subVectors(y,d.anchor),M=w.dot(f)<=Gh&&d.anchor.distanceToSquared(e)<=(c+Gh)**2&&w.lengthSq()<=Math.max(.12,c*.5)**2;M&&(!b||b===p&&this.hitNormal.dot(f)>.7)?(b=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!M&&b===p&&w.dot(f)>Gh&&(b=null),!b&&u.tracked&&(u.released=p,this.released=!0)}if(!b)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let S=b.friction??.8,v=Math.min(1,Math.max(0,S*(.75+s.grip*.09))),C=Math.max(0,1-Math.abs(f.y)/.28),A=Math.min(.97,Math.max(0,1-v+C*.24+(s.slide-3)*.035)),L=this.correction.subVectors(d.anchor,y);if(L.addScaledVector(f,-L.dot(f)),this.slideTarget.copy(L).multiplyScalar(-A),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*A*Math.max(C,Math.max(0,1-2*v)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,Fp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-Fp*2.5),this.supportBoxes[0]=b,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(A>.5&&L.lengthSq()>Gh**2)continue}L.subVectors(d.anchor,y),m&&L.dot(f)<0&&L.addScaledVector(f,-L.dot(f)),l.add(L);let U=b.objectBody;if(U){let w=u.inverseRotation.copy(U.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(U.mesh.position).applyQuaternion(w),u.localNormal.copy(f).applyQuaternion(w)}if(d.surface=b,d.groundContact=f.y>.55,this.contacts++,u.tracked){let w=this.handMotion.subVectors(u.previousTarget,y),M=w.dot(f);w.multiplyScalar(1-A).addScaledVector(f,Math.max(0,M)-M*(1-A)),this.intent.add(w)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:y,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),y.copy(m).add(g),p.surface&&(y.copy(p.anchor).add(g),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=vx;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let y=Math.min(u,p.duration);this.average.addScaledVector(p.distance,y/p.duration),u-=y}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/vx),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:y,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(y);g<0&&this.average.addScaledVector(y,-g)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=YA,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function _x(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),r=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!r||n.hapticCooldown>0)return;let s=n.gamepad,o=s?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof s?.vibrationActuator?.playEffect=="function")a=s.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function Mx({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new _(0,1,0),a=new qe,l=0,c=new Wi,u=[],d=new Map,f=Q0(n,{onShot:(g,b)=>s.sendShot(g,b),impact(g,b,S,v){c.set(g,b),c.far=S;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let A=d.get(C.object);return v&&A&&!A.owner&&!A.frozen&&A.velocity.addScaledVector(b,Math.min(4,2.6/A.mass)),C.distance}}),h={position:new _,quaternion:new qe,modelPosition:new _},p={position:h.modelPosition,quaternion:h.quaternion},y=null;function m({frame:g,space:b,inVR:S,enabled:v,remoteWorld:C,dt:A,yaw:L,drop:U,rightHand:w,flatFiring:M}){let E=null,F=!1;if(v)if(S){let N=[...g.session.inputSources].find(W=>W.handedness==="right"),G=N&&g.getPose(N.targetRaySpace,b);if(G){let{position:W,orientation:k}=G.transform;E=h,E.position.set(W.x,W.y-U,W.z).applyAxisAngle(o,L).add(e.position),E.modelPosition.copy(w.valid?w.mesh.position:E.position),E.quaternion.set(k.x,k.y,k.z,k.w).premultiply(a.setFromAxisAngle(o,L)),F=!!N.gamepad?.buttons[0]?.pressed}}else E=h,t.getWorldPosition(E.position),t.getWorldQuaternion(E.quaternion),E.modelPosition.set(.16,-.17,-.43).applyQuaternion(E.quaternion).add(E.position),F=M;if(y=E?p:null,u.length=0,d.clear(),E||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(C)s.forEachReplica(N=>u.push(N));else for(let N of r)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),d.set(N.mesh,N))}f.update({dt:A,aim:E,firing:F}),F?l=1.3:l=Math.max(0,l-A)}return{update:m,receiveShot({position:g,quaternion:b},S){f.replay(g,new qe().copy(b),S),l=1.3},reset(){f.reset(),l=0,y=null},get gun(){return y},get shotsFired(){return f.shotsFired}}}function bx(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Sx(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var xs=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Wh=["Naturel","Cellulo","Affiche","R\xE9tro"],qh={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var wx=new WeakMap;function Np(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,wx.set(n,e),n}function Sl(n){if(Array.isArray(n))return n.map(Sl);let e=n.clone(),t=wx.get(n);return t?Np(e,t):e}function ZA(n){let t=new Gn(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Rt(.225,0),r=new Xa({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Np(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
      uniform float uPropTime;
      varying vec3 vSlimeDirection;
    `+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <beginnormal_vertex>",`
      #include <beginnormal_vertex>
      vec3 slimeDirection = normalize(position);
      vec3 slimeWaveA = vec3(3.8, 2.7, 1.6);
      vec3 slimeWaveB = vec3(-1.7, 3.5, 4.1);
      float slimePhaseA = dot(slimeDirection, slimeWaveA) - uPropTime * 1.55;
      float slimePhaseB = dot(slimeDirection, slimeWaveB) + uPropTime * 1.13;
      float slimeRadius = 1.0 + .055 * sin(slimePhaseA) + .026 * sin(slimePhaseB);
      float slimePulse = sin(uPropTime * 2.2);
      vec3 slimeScale = vec3(1.0 + .045 * slimePulse, 1.0 - .068 * slimePulse, 1.0 + .02 * slimePulse);
      // Remove the radial part of the gradient to get the slope along the surface.
      vec3 slimeGradient = .055 * cos(slimePhaseA) * slimeWaveA + .026 * cos(slimePhaseB) * slimeWaveB;
      slimeGradient -= slimeDirection * dot(slimeGradient, slimeDirection);
      objectNormal = normalize((slimeRadius * slimeDirection - slimeGradient) / slimeScale);
      vSlimeDirection = slimeDirection;
    `).replace("#include <begin_vertex>",`
      #include <begin_vertex>
      transformed *= slimeRadius * slimeScale;
    `),o.fragmentShader=`
      uniform float uPropTime;
      varying vec3 vSlimeDirection;
    `+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 slimeDirection = normalize(vSlimeDirection);
      float slimeMarble = sin(dot(slimeDirection, vec3(4.2, 6.4, 2.4))
        + 2.1 * sin(dot(slimeDirection, vec3(-4.0, 2.5, 3.2)) - uPropTime * 1.25)
        + uPropTime * 1.65);
      float slimeVein = smoothstep(.18, .97, slimeMarble);
      diffuseColor.rgb *= mix(vec3(.50, .27, .64), vec3(1., .61, .78), slimeVein);
    `).replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * (.13 + .27 * slimeVein);
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function jA(n){let e=new Ke(.37,.37,.37),t=new pt({color:16777215,roughness:.4});return Np(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;
    `+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <project_vertex>",`
      #include <project_vertex>
      // BoxGeometry's UV axes on each face, rotated to the current eye's view space.
      vec3 abyssTangent = abs(normal.x) > .5 ? vec3(0., 0., -normal.x)
        : vec3(abs(normal.y) > .5 ? 1. : normal.z, 0., 0.);
      vec3 abyssBitangent = cross(normal, abyssTangent);
      vec3 abyssEye = -mvPosition.xyz;
      vAbyssEye = vec3(
        dot(abyssEye, normalize(normalMatrix * abyssTangent)),
        dot(abyssEye, normalize(normalMatrix * abyssBitangent)),
        dot(abyssEye, normalize(normalMatrix * normal))
      );
      vAbyssUV = uv;
      vAbyssFace = dot(normal, vec3(13.1, 21.7, 35.3));
    `),r.fragmentShader=`
      uniform float uPropTime;
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;

      vec3 abyssHash(vec2 cell) {
        vec3 h = fract(cell.xyx * vec3(.1031, .1030, .0973));
        h += dot(h, h.yxz + 33.33);
        return fract((h.xxy + h.yzz) * h.zyx);
      }

      float abyssStars(vec2 plane, float seed) {
        vec2 cell = floor(plane);
        vec3 h = abyssHash(cell + seed);
        vec2 point = .23 + .54 * h.xy;
        vec2 delta = fract(plane) - point;
        float radius = mix(.055, .17, h.z);
        float pixel = min(.24, .55 * length(fwidth(plane)));
        float core = 1. - smoothstep(max(0., radius - pixel), radius + pixel, length(delta));
        float halo = 1. - smoothstep(radius * .7, radius * 2.1 + pixel, length(delta));
        float flicker = .75 + .25 * sin(uPropTime * (1.4 + h.y) + h.x * 21.);
        return step(.68, h.z) * (core + .17 * halo) * flicker * (1. - smoothstep(.19, .48, length(fwidth(plane))));
      }
    `+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 abyssTint = diffuseColor.rgb;
      vec2 abyssRay = vAbyssEye.xy / max(vAbyssEye.z, .31 * length(vAbyssEye));
      vec2 abyssUV = vAbyssUV - .5;
      vec2 abyssDrift = vec2(uPropTime * .039, -uPropTime * .018);
      vec2 abyssDeep = abyssUV - abyssRay * .58;
      float abyssMist = .5 + .5 * sin(12. * abyssDeep.x + 7. * abyssDeep.y
        + 2. * sin(7. * abyssDeep.y - uPropTime * .38));
      vec3 abyssLight = vec3(.0015, .004, .015) + vec3(.011, .019, .053) * abyssMist * abyssMist;
      abyssLight += vec3(.12, .20, .62) * abyssStars((abyssUV - abyssRay * .62) * 24. + abyssDrift, vAbyssFace + 97.);
      abyssLight += vec3(.30, .17, .66) * abyssStars((abyssUV - abyssRay * .41) * 16. - abyssDrift * .82, vAbyssFace + 51.);
      abyssLight += vec3(.04, .58, .63) * abyssStars((abyssUV - abyssRay * .23) * 11. + abyssDrift * .62, vAbyssFace + 23.);
      abyssLight += vec3(.55, .98, .91) * abyssStars((abyssUV - abyssRay * .08) * 8. - abyssDrift * .43, vAbyssFace);
      float abyssEdge = .5 - max(abs(abyssUV.x), abs(abyssUV.y));
      float abyssInside = smoothstep(.012, .042, abyssEdge);
      float abyssRim = smoothstep(0., .008, abyssEdge) * (1. - smoothstep(.008, .023, abyssEdge));
      diffuseColor.rgb *= mix(vec3(.028, .052, .07), vec3(.004, .005, .012), abyssInside);
    `).replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      totalEmissiveRadiance += abyssTint * (abyssLight * abyssInside + vec3(.015, .11, .12) * abyssRim);
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function Tx(){let n={value:0};return{props:[ZA(n),jA(n)],animate(e){n.value=e}}}var Ax=new _(0,1,0),Ex=new _(0,0,1),JA={left:new qe().setFromAxisAngle(Ex,Math.PI/2),right:new qe().setFromAxisAngle(Ex,-Math.PI/2)},$A=new qe,KA=new _;function Cx(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(Ax,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply($A.setFromAxisAngle(Ax,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(JA[n.side]),n.target.copy(n.gripPosition).sub(KA.copy(Zi).applyQuaternion(n.mesh.quaternion))}function Rx(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let b=0;b<g.length;b++)g[b]=(Math.random()*2-1)*(1-b/g.length)}let h=n.currentTime,p=n.createBufferSource(),y=n.createBiquadFilter(),m=n.createGain();p.buffer=e,y.type="lowpass",y.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(Fe.clamp(f,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(y).connect(m).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:y,travel:m,volume:g,enabled:b}){if(h){p.forEach((S,v)=>{a[v]=Math.max(0,a[v]-f);let C=S.valid&&S.groundContact;C&&!o[v]&&!a[v]&&b&&(c(g),a[v]=.11),o[v]=C});return}r=Math.max(0,r-f),t=y?t+m:0,y&&b&&r===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,r=.12),i=y}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function Px(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new Je;r.setAttribute("position",new ft(t,3).setUsage(wn)),r.setAttribute("color",new ft(i,3).setUsage(wn));let s=new $r(r,new Mi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new es(new Gn(1,12,8)).attributes.position,a=new es(new ci(1).scale(...rh)).attributes.position,l=new WeakMap,c=new _(1,1,1),u=new qe,d=new _,f=new _,h=new _,p=new _,y=new _,m=new _,g=new _,b=new _(0,1,0),S={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},v=0;function C(M,E,F){v+2>1e5||(M.toArray(t,v*3),F.toArray(i,v++*3),E.toArray(t,v*3),F.toArray(i,v++*3))}function A(M,E,F,N,G){for(let W=0;W<M.count;W+=2)d.fromBufferAttribute(M,W).multiply(N).applyQuaternion(F).add(E),f.fromBufferAttribute(M,W+1).multiply(N).applyQuaternion(F).add(E),C(d,f,G)}function L(M,E,F,N){if(M.sphereRadius){A(o,E,F,p.setScalar(M.sphereRadius),N);return}for(let{a:G,b:W,c:k}of M.faces)d.copy(G).applyQuaternion(F).add(E),f.copy(W).applyQuaternion(F).add(E),h.copy(k).applyQuaternion(F).add(E),C(d,f,N),C(f,h,N),C(h,d,N)}function U(M,E,F,N){if(E.lengthSq()<1e-8)return;y.copy(M).addScaledVector(E,F),m.copy(E).normalize(),g.crossVectors(m,b),g.lengthSq()<1e-8?g.set(1,0,0):g.normalize();let G=Math.min(.09,M.distanceTo(y)*.3);p.copy(y).addScaledVector(m,-G),C(M,y,N),C(y,d.copy(p).addScaledVector(g,G*.5),N),C(y,f.copy(p).addScaledVector(g,-G*.5),N)}function w({settings:M,boxes:E,bodies:F,hands:N,locomotion:G,velocity:W,head:k,body:J,neck:B,proxies:oe,gravity:le,appliedMove:_e,playerActive:ie,inVR:we}){if(v=0,s.visible=M.debugPalm||M.debugHitboxes||M.debugInvisible||M.debugForces||M.debugBody,!!s.visible){if(M.debugHitboxes||M.debugInvisible){for(let fe of E){let de=fe.mesh?.isObject3D&&fe.mesh.visible;if(!(de?!M.debugHitboxes:!M.debugInvisible)){if(fe.shape)L(fe.shape,fe.position,fe.quaternion,de?S.solid:S.proxy);else if(fe.heightfield&&fe.mesh?.geometry){let $=fe.mesh.geometry,K=l.get($),me=$.attributes.position.version;K?.version!==me&&(K?.edges.dispose(),K={version:me,edges:new es($)},l.set($,K)),A(K.edges.attributes.position,fe.mesh.position,fe.mesh.quaternion,c,S.solid)}}}if(M.debugHitboxes)for(let fe of F)fe.blocksPlayer&&fe.mesh.visible&&L(fe.shape,fe.mesh.position,fe.mesh.quaternion,S.solid)}if(ie){if(M.debugBody){if(M.collisions)for(let{position:fe,radius:de}of oe)A(o,fe,u,p.setScalar(de),S.rig);C(k,B,S.rig),C(B,J,S.rig)}if(M.debugForces&&(U(k,W,.13,S.velocity),U(k,b,-le*.038,S.force),U(k,_e,5,S.movement)),we&&(M.debugPalm||M.debugForces))for(let fe of G.hands){let{hand:de,normal:$,offset:K}=fe;if(de.valid){if(M.debugPalm){A(o,de.gripPosition,u,p.setScalar(.014),S.grip);for(let me=0;me<3;me++)m.set(0,0,0).setComponent(me,.075).applyQuaternion(de.controllerRotation),U(de.gripPosition,m,1,S.grip);y.copy(de.mesh.position).add(K),A(a,y,de.mesh.quaternion,c,S.palm),C(de.gripPosition,y,S.grip),de.hasSupport&&(y.copy(Zi).applyQuaternion(de.mesh.quaternion).add(de.mesh.position),A(a,y,de.mesh.quaternion,c,S.grip))}M.debugForces&&de.surface&&U(de.anchor,$,.25,S.normal)}}}r.setDrawRange(0,v);for(let fe of["position","color"]){let de=r.attributes[fe];de.clearUpdateRanges(),v&&de.addUpdateRange(0,v*3),de.needsUpdate=!!v}}}return{update:w}}function Xh(n,e,t){let i=new Ke(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function Ix(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function Lx(n){switch(n){case"sphere":return new Gn(.5,24,16);case"cylinder":return new Lt(.5,.5,1,24);case"cone":return new Gi(.5,1,24);case"torus":return new ui(.34,.14,12,32);case"capsule":return new Kr(.32,.36,8,16);default:return new Ke(1,1,1)}}var Bp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Fx=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Op={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Yh=8e6,wl=512,Ci=1024,Dx=512,jt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Ux=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Tl(n){if(typeof n=="string"){if(n.length>Yh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>wl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+wl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},name:Ux(n.name,56,"Ma map"),worldSize:jt(n.worldSize,24,2048,240),spawn:{x:jt(e.x,-Ci,Ci,0),y:jt(e.y,-256,256,.06),z:jt(e.z,-Ci,Ci,3),yaw:jt(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let r=t.terrain&&typeof t.terrain=="object"?ko(t.terrain):null,s=t.model?gs({version:1,models:[t.model]}).models[0]:null;if(s&&!s.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Ux(t.name,36,"Pi\xE8ce "+(i+1)),x:jt(t.x,-Ci,Ci,0),y:jt(t.y,-256,256,0),z:jt(t.z,-Ci,Ci,0),w:jt(t.w,.05,Dx,3),h:jt(t.h,.05,256,.5),d:jt(t.d,.05,Dx,3),pitch:r?0:jt(t.pitch,-180,180,0),yaw:r?0:jt(t.yaw,-360,360,0),roll:r?0:jt(t.roll,-180,180,0),...r?{terrain:r}:{},...s?{model:s}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(t.primitive)?t.primitive:"box",uvScale:jt(t.uvScale,.05,100,1),uvOffsetX:jt(t.uvOffsetX,-100,100,0),uvOffsetY:jt(t.uvOffsetY,-100,100,0),uvRotation:jt(t.uvRotation,-360,360,0),material:Math.round(jt(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:jt(t.grip,0,1.5,.8),gravity:jt(t.gravity,.05,2.5,1),bounce:jt(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function Nx(n){return Tl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...No,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function Zh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Bx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new nn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new _(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ci||Math.abs(d)>Ci||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var Al="gorilla-lab-custom-map-v1";function Ox(n){let e=new Blob([JSON.stringify(Tl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function zx({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(O=>O.half&&O.mesh?.isObject3D).map(O=>O.mesh)),c=new vt;n.add(c);let u=[],d=[],f=new bi,h=new Map,p=0,y=null,m="",g=-1,b=-1,S="",v="",C=new Ke(1,1,1),A=new ze(C,new gt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let L=new Wi,U=new _,w=new _,M=document.querySelector("#map-note");function E(O){S=O,M.textContent=O}function F(){d.length>=20&&d.shift(),d.push(JSON.stringify(y))}function N(O,ye){let ge=h.get(O);if(!ge){ge={materials:new Set,texture:null,failed:!1},h.set(O,ge);let T=ne=>{if(!(h.get(O)!==ge||ge.failed)){ge.failed=!0;for(let Z of ge.materials)Z.map=null,Z.needsUpdate=!0;ge.texture?.dispose(),ne&&E(ne)}},X=f.load(O,ne=>{(ne.image.width>2048||ne.image.height>2048)&&T("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>T());ge.texture=X,X.colorSpace=lt,X.wrapS=X.wrapT=Vn}return ge.materials.add(ye),ye.map=ge.failed?null:ge.texture,ge}function G(){for(let[O,ye]of h)ye.materials.size||(h.delete(O),ye.failed||ye.texture.dispose())}function W(O){let ye=e.mapMaterial(O.material,s());if(!O.texture&&O.color==="#ffffff")return{material:ye,custom:!1};let ge=ye.clone();return ge.onBeforeCompile=ye.onBeforeCompile,ge.customProgramCacheKey=ye.customProgramCacheKey,ge.color.multiply(new De(O.color)),{material:ge,custom:!0,ownTexture:O.texture?N(O.texture,ge):null}}function k(O){c.remove(O.mesh),O.mesh.geometry.dispose(),O.vegetation&&fx(O.vegetation),O.custom&&(O.ownTexture?.materials.delete(O.mesh.material),O.model?Oh(O.mesh.material):O.mesh.material.dispose())}function J(O,ye){if(O.model){let Q=Vo(O.model);Q.scale(O.w,O.h,O.d);let se=Er(O.model),ue=new ze(Q,se);ue.position.set(O.x,O.y,O.z),ue.rotation.set(Fe.degToRad(O.pitch),Fe.degToRad(O.yaw),Fe.degToRad(O.roll??0),"YXZ"),ue.castShadow=ue.receiveShadow=!0,ue.userData.mapIndex=ye,O.model.kind==="prop"&&(ue.visible=!1),c.add(ue);let R=Ip(O.model),I=new _(O.w,O.h,O.d).clone().divide(R.boundsSize.clone().max(new _(1e-5,1e-5,1e-5))),H=R.size.clone().multiply(I).multiplyScalar(.5),re=R.center.clone().sub(R.boundsCenter).multiply(I).applyQuaternion(ue.quaternion),j=ue.position.clone().add(re),xe={mesh:ue,position:j,quaternion:ue.quaternion,half:H,min:H.clone().negate(),shape:fi(H),friction:O.grip,gravity:O.gravity,bounce:O.bounce,zone:!0,type:O.material};return{mesh:ue,collider:xe,custom:!0,model:!0}}let{material:ge,custom:T,ownTexture:X}=W(O),ne=O.terrain?ux(O):O.primitive&&O.primitive!=="box"?Lx(O.primitive).scale(O.w,O.h,O.d):Xh(O.w,O.h,O.d),Z=new ze(Ix(ne,O),ge);Z.position.set(O.x,O.y,O.z),Z.rotation.set(Fe.degToRad(O.pitch),Fe.degToRad(O.yaw),Fe.degToRad(O.roll??0),"YXZ"),Z.castShadow=Z.receiveShadow=!0,Z.userData.mapIndex=ye,c.add(Z);let D=new _(O.w/2,O.h/2,O.d/2),Y={mesh:Z,position:Z.position,quaternion:Z.quaternion,half:D,min:D.clone().negate(),shape:fi(D),friction:O.grip,gravity:O.gravity,bounce:O.bounce,zone:!0,type:O.material};if(!O.terrain)return{mesh:Z,collider:Y,custom:T,ownTexture:X};let z=dx(O);return z&&Z.add(z),{mesh:Z,collider:hx(O,Z),custom:T,ownTexture:X,vegetation:z}}function B(){for(let O of u){let ye=y?.pieces[O.mesh.userData.mapIndex];if(!ye||O.ownTexture||O.model)continue;let ge=e.mapMaterial(ye.material,s());O.custom?O.mesh.material.map!==ge.map&&(O.mesh.material.map=ge.map,O.mesh.material.needsUpdate=!0):O.mesh.material=ge}}function oe(){for(let ge of u)k(ge);u.length=0;let O=y?.pieces??[];m=y?"custom-"+us(JSON.stringify(y)):"";let ye=new Set(O.map(ge=>ge.model?.assetId).filter(Boolean));o.forEach(ge=>{let T=ge.userData?.editorAssetId;ge.visible=!y||y.arenaBase&&!l.has(ge)&&(!T||!ye.has(T)),y?.assetLayer&&ge.userData?.editorAssetId==="palm-tree"&&ge.traverse(X=>{X.userData?.editorFixtureCoconut&&(X.visible=!1)})});for(let ge=0;ge<O.length;ge++)u.push(J(O[ge],ge));if(G(),y){let ge=y.arenaBase?a.filter(T=>!l.has(T.mesh)&&(!T.editorAssetId||!ye.has(T.editorAssetId))):[];e.boxes.splice(0,e.boxes.length,...ge,...u.filter((T,X)=>O[X].solid&&O[X].model?.kind!=="prop"&&O[X].model?.properties?.collidable!==!1).map(T=>T.collider))}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),y)try{localStorage.setItem(Al,JSON.stringify(y))}catch{}else try{localStorage.removeItem(Al)}catch{}}function le(O){let ye=Tl(O);p++,d.length=0,y=ye,g=b=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),oe(),i(y.spawn.yaw),E("Map : "+y.name+" \xB7 "+y.pieces.length+" pi\xE8ces")}function _e(){p++,y=null,d.length=0,g=b=-1,t.set(0,0,3),oe(),i(0),E("Ar\xE8ne int\xE9gr\xE9e")}function ie(){le({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Zh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function we(){if(!d.length)return E("Rien \xE0 annuler.");y=Tl(d.pop()),g=b=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),oe(),E("Derni\xE8re modification annul\xE9e.")}function fe(){y?Ox(y):E("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function de(O,ye,ge,T){y&&(F(),y.spawn={x:O,y:ye,z:ge,yaw:Fe.radToDeg(T)},t.set(O,ye,ge),oe(),E("Point de d\xE9part m\xE9moris\xE9."))}function $(O,ye,ge,{mode:T,piece:X,head:ne,feet:Z}){L.set(O,ye),L.far=12;let D=u.map(I=>I.mesh);T===1&&y?.arenaBase&&D.push(...a.filter(I=>I.heightfield).map(I=>I.mesh));let Y=L.intersectObjects(D,!1),z=T>=5?Y.find(I=>y?.pieces[I.object.userData.mapIndex]?.terrain):Y[0];if(A.visible=!1,!y)return;if(T>=5){let I=z?.object.userData.mapIndex,H=y.pieces[I];if(!H?.terrain||!ge)return;if(F(),T===9){let re=X.terrain?.detail??H.terrain.detail,j=lx(H.terrain,re);H.terrain=ko({...j,...X.terrain,heights:j.heights})}else{let re={mode:["raise","lower","smooth","flatten"][T-5],radius:X.brushRadius,strength:X.brushStrength,target:H.y};cx(H,z.point.x,z.point.z,re)}oe(),E("Relief modifi\xE9.");return}if(T===2||T===3||T===4){if(!z)return;let I=z.object.userData.mapIndex,H=y.pieces[I];if(ge&&T===2&&(g=I,b=I,E("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),ge&&T===3){if(y.pieces.length===1)return E("Garde au moins une pi\xE8ce dans la map.");F(),y.pieces.splice(I,1),g=b=-1,oe(),E("Pi\xE8ce supprim\xE9e.")}ge&&T===4&&(F(),Object.assign(y.pieces[I],{material:X.material,grip:X.grip,gravity:X.gravity,bounce:X.bounce,solid:X.solid,texture:X.texture}),oe(),E("Surface modifi\xE9e.")),z&&(A.position.copy(z.object.position),A.rotation.copy(z.object.rotation),A.scale.set(H.w,H.h,H.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(T===3?"#ff8271":"#ffe2a2"));return}if(!z)return;let Q=b>=0?y.pieces[b]:X;if(z.object.userData.mapIndex===b)return;U.copy(z.face.normal).transformDirection(z.object.matrixWorld);let se=Q.terrain?{...Q,x:Math.round(z.point.x*2)/2,y:z.point.y,z:Math.round(z.point.z*2)/2,pitch:0,yaw:0}:Bx(z.point,U,Q);if(!se)return;A.position.set(se.x,se.y,se.z),A.rotation.set(Fe.degToRad(se.pitch),Fe.degToRad(se.yaw),Fe.degToRad(se.roll??0),"YXZ"),A.scale.set(se.w,se.h,se.d),A.updateMatrixWorld(!0),A.visible=!0;let ue=new tn().setFromObject(A),R=new tn(new _(ne.x-.26,Z+.01,ne.z-.26),new _(ne.x+.26,ne.y+.19,ne.z+.26)),x=se.solid&&ue.intersectsBox(R);if(A.material.color.set(x?"#fd7763":"#8be4b9"),ge){if(x)return E("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(b<0&&y.pieces.length>=wl)return E("Limite de "+wl+" pi\xE8ces atteinte.");F(),b>=0?(y.pieces[b]=se,b=-1):y.pieces.push(se),oe(),E("Pi\xE8ce pos\xE9e \xB7 "+y.pieces.length+" pi\xE8ces")}}let K=document.querySelector("#map-file"),me=document.querySelector("#map-url");K.onchange=async()=>{let O=K.files[0];if(!O)return;let ye=++p;K.value="";try{if(O.size>Yh)throw Error("Map trop lourde.");let ge=await O.text();ye===p&&le(ge)}catch(ge){ye===p&&E(ge.message)}};async function Ce(O){let ye=++p;try{let ge=new URL(O,location.href);if(!["http:","https:"].includes(ge.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let T=await fetch(ge,{credentials:"omit"});if(ye!==p)return;if(!T.ok)throw Error("URL de map inaccessible ("+T.status+").");if(Number(T.headers.get("content-length"))>Yh)throw Error("Map trop lourde.");let ne=await T.text();ye===p&&le(ne)}catch(ge){ye===p&&E(ge.message)}}return document.querySelector("#map-load-url").onclick=()=>Ce(me.value),document.querySelector("#map-export").onclick=fe,document.querySelector("#map-reset").onclick=_e,{placedModels:()=>y?.pieces.filter(O=>O.model?.kind==="prop")??[],modelPieces:()=>y?.pieces.filter(O=>!O.terrain&&O.name!=="Sol")??[],refreshMaterials:B,load:le,loadURL:Ce,reset:_e,blank:ie,undo:we,save:fe,edit:$,recenter:de,inform:E,clearGhost(){A.visible=!1},get active(){return!!y},get builtIn(){return!y||y.arenaBase===!0},get assetLayer(){return y?.assetLayer===!0},hasAsset(O){return!!y?.pieces.some(ye=>ye.model?.assetId===O)},getAssetPiece(O){return y?.pieces.find(ye=>ye.model?.assetId===O)??null},get status(){return S},get yaw(){return y?.spawn.yaw??0},get nodes(){return y?.pieces.length??0},get name(){return y?.name??null},get signature(){return m}}}var zp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Vx(){let n=new ze(new Wt(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+zp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function kx(n){let e=new Jr,t=new Zt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Se(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+zp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new ze(new Wt(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),y=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let S=l[b],v=Math.max(32,Math.round(S.viewport.z)),C=Math.max(32,Math.round(S.viewport.w)),A=a[b];A?(A.width!==v||A.height!==C)&&A.setSize(v,C):A=a[b]=new Rn(v,C,{type:o?wi:Wn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(S.matrixWorld),t.matrixWorld.copy(S.matrixWorld),t.matrixWorldInverse.copy(S.matrixWorldInverse),t.projectionMatrix.copy(S.projectionMatrix),t.projectionMatrixInverse.copy(S.projectionMatrixInverse),t.layers.mask=S.layers.mask,n.shadowMap.autoUpdate=b===0&&m,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=y,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Gx(n){let e={value:0},t={value:Array.from({length:7},()=>new ut(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Hx(n,e,t){let i=new Pt({color:16777215,vertexColors:!0,flatShading:!0}),r=new Lt(.16,.25,3.15,9,12),s=r.attributes.position,o=new De,a=[];for(let ie=0;ie<s.count;ie++){let we=Math.round((s.getY(ie)+1.575)/3.15*12),fe=Math.floor((Math.atan2(s.getX(ie),s.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+we*.002,.35,.35+we%3*.032+fe%3*.018),a.push(o.r,o.g,o.b)}r.setAttribute("color",new Be(a,3));let l=new vt;l.userData.editorAssetId="palm-tree",l.position.set(wp.x,0,wp.z),l.rotation.z=-.14,n.add(l);let c=new ze(r,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,we,fe=.85,de=null){let $=ie.getWorldPosition(new _),K=ie.getWorldQuaternion(new qe);e.push({half:we,min:we.clone().negate(),position:$,quaternion:K,mesh:{position:$,quaternion:K},shape:fi(we),friction:fe,gravity:1})}for(let ie=0;ie<4;ie++){let we=new Nt;we.position.y=(ie+.5)*3.15/4,l.add(we);let fe=.237-ie*.022;u(we,new _(fe,.398,fe),.85,"palm-tree")}let d=[],f=[],h=3.14;function p(ie,we,fe,de){d.push(...ie,...we,...fe),o.setHSL(.25+de*.043,.54,.28+de*.17);for(let $=0;$<3;$++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let de=function($,K){let me=$*fe;return[Math.cos(we)*me-Math.sin(we)*K,h+Math.sin($*Math.PI)*.38-$*$*.54+ie%3*.055,Math.sin(we)*me+Math.cos(we)*K]},we=ie*2.39996,fe=1.35+ie%4*.2;for(let $=0;$<7;$++){let K=$/7,me=($+1)/7,Ce=.285*Math.sin(Math.PI*K)**.7,O=.285*Math.sin(Math.PI*me)**.7;for(let ye of[-1,1]){let ge=de(K,Ce*ye),T=de(me,O*ye);ge[1]-=.065,T[1]-=.065,p(de(K,0),ge,T,.31+$%4*.14),p(de(K,0),T,de(me,0),.47+ie%3*.16)}}}let y=new Je;y.setAttribute("position",new Be(d,3)),y.setAttribute("color",new Be(f,3)),y.computeVertexNormals();let m=new ze(y,new Pt({vertexColors:!0,side:At,flatShading:!0}));m.castShadow=!0,l.add(m);let g=new pt({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let ie=0;ie<5;ie++){let we=ie*Math.PI*2/5,fe=new ze(new Rt(.124,1),g);fe.userData.editorFixtureCoconut=!0,fe.position.set(Math.cos(we)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(we)*(.25+ie%2*.1)),fe.scale.set(.91,1.16,.91),fe.castShadow=!0,l.add(fe),b.push(fe)}l.updateMatrixWorld(!0);let S=[],v=[],C=new Pt({color:"#485d5d",flatShading:!0});function A([ie,we],fe,de){let $=new ze(new Ke(.095,.68,.11),C);$.position.set(ie,.34,we+.46),$.castShadow=$.receiveShadow=!0,n.add($),u($,new _(.0475,.34,.055));let K=new vt;K.position.set(ie,.85,we+.4),K.rotation.x=-.35,n.add(K);let me=new ze(new Ke(.64,.36,.055),new Pt({color:"#182831"}));K.add(me);let Ce=document.createElement("canvas");Ce.width=512,Ce.height=96;let O=Ce.getContext("2d"),ye=new Pn(Ce);ye.colorSpace=lt;let ge=new ze(new Wt(.61,.095),new gt({map:ye}));ge.position.set(0,.116,.03),K.add(ge);let T=.592/de.length,X=de.map(([Z,D],Y)=>{let z=new ze(new Ke(T-.012,.155,.04),new Pt({color:"#478086"}));z.position.set(-.296+T*(Y+.5),-.045,.046),K.add(z),S.push(z),z.userData.touchWidth=T-.012;let Q=document.createElement("canvas");Q.width=208,Q.height=172;let se=new Pn(Q);se.colorSpace=lt;let ue=new ze(new Wt(T-.017,.139),new gt({map:se}));ue.position.z=.0205,z.add(ue);let R=-1/0;return z.userData.action=()=>{let x=performance.now();x-R<250||(R=x,D(),L(),z.position.z=.036,setTimeout(()=>{z.position.z=.046},115))},{label:Z,context:Q.getContext("2d"),texture:se}});function ne(){O.fillStyle="#182831",O.fillRect(0,0,512,96),O.fillStyle="#ffe1a0",O.font="bold 38px system-ui",O.fillText(fe,17,62,478);for(let Z of X){let D=Z.context;D.fillStyle="#386269",D.fillRect(0,0,208,172),D.fillStyle="#fff2d5",D.textAlign="center",D.font="bold 27px system-ui";let Y=(typeof Z.label=="function"?Z.label():Z.label).split("|");Y.forEach((z,Q)=>D.fillText(z,104,(Y.length>1?68:97)+Q*37,188)),Z.texture.needsUpdate=!0}ye.needsUpdate=!0}v.push(ne)}function L(){for(let ie of v)ie()}A(Bo.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Oo[0])],["Boule",()=>t.spawn(1,Oo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Oo[0])],["Vider",t.clear]]),A(Bo.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Oo[1])],["Sph\xE8re",()=>t.spawn(5,Oo[1])]]),A(Bo.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),A(Bo.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),A(Bo.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),L();let U=new vt;U.userData.editorAssetId="range-target";let{x:w,y:M,z:E}=Uh;U.position.set(w,M,E),n.add(U);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let we=[.9,.58,.27][ie],fe=new ze(new zt(we,20),new Pt({color:F[ie],side:At}));fe.position.z=ie*.012,U.add(fe)}let N=new ze(new Ke(.14,1.5,.14),C);N.position.set(0,.75-M,-.11),U.add(N);let G=0,W=document.createElement("canvas");W.width=256,W.height=64;let k=W.getContext("2d"),J=new Pn(W);J.colorSpace=lt;let B=new ze(new Wt(1.4,.35),new gt({map:J,side:At}));B.position.set(0,2.64-M,.02),U.add(B);function oe(){k.fillStyle="#182831",k.fillRect(0,0,256,64),k.textAlign="center",k.font="bold 28px system-ui",k.fillStyle="#fff0ce",k.fillText("CIBLE  \xB7  "+G,128,42),J.needsUpdate=!0}let le={position:new _(w,M,E),right:new _(1,0,0),up:new _(0,1,0),normal:new _(0,0,1),scaleX:1,scaleY:1};function _e(ie,we=null){let fe=we??le,{position:de,right:$,up:K,normal:me}=fe,Ce=Math.max(1e-4,fe.scaleX??1),O=Math.max(1e-4,fe.scaleY??1);for(let ye of ie){if(!ye.beforePhysics||ye.owner||ye.frozen||!ye.mesh.visible)continue;let ge=ye.beforePhysics,T=ye.mesh.position,X=(ge.x-de.x)*me.x+(ge.y-de.y)*me.y+(ge.z-de.z)*me.z,ne=(T.x-de.x)*me.x+(T.y-de.y)*me.y+(T.z-de.z)*me.z;if(X<=0||ne>0||ye.velocity.dot(me)>=-1)continue;let Z=X/(X-ne),D=Fe.lerp(ge.x,T.x,Z)-de.x,Y=Fe.lerp(ge.y,T.y,Z)-de.y,z=Fe.lerp(ge.z,T.z,Z)-de.z,Q=(D*$.x+Y*$.y+z*$.z)/Ce,se=(D*K.x+Y*K.y+z*K.z)/O,ue=Math.hypot(Q,se),R=ye.radius/Math.sqrt(Ce*O);ue<=.9+R*.45&&(G+=ue<.27?3:ue<.58?2:1,oe())}}return oe(),{targets:S,coconuts:b,tree:l,target:U,redraw:L,updateTarget:_e,score:()=>G,setScore(ie){G=ie,oe()}}}function El(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Cr=(n,e,t)=>n+(e-n)*t,Go=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function jh(n,e){let t=Math.floor(n),i=Math.floor(e),r=Go(0,1,n-t),s=Go(0,1,e-i);return Cr(Cr(El(t,i),El(t+1,i),r),Cr(El(t,i+1),El(t+1,i+1),r),s)}function Wx(n,e){return jh(n,e)*.54+jh(n*2.07+3.4,e*2.07-6.1)*.26+jh(n*4.2+9,e*4.2)*.13+jh(n*8.6,e*8.6-13)*.07}function qx(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,y)=>Cr(p,o[y],f));for(let p=0;p<1024;p++){let y=4*(p+l*1024),m=0,g=0,b=0;if(c>.025)if(n){let v=El(p+792,l+677);v>.9988&&(b=(v-.9988)*49e3*Go(.09,.3,c))}else{let[v,C]=r[p],A=2.8*u/(c+.16),L=v*A+3.6,U=C*A-8.1,w=Wx(L,U),M=Wx(L-.12,U-.09);m=Go(.49,.66,w)*Go(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(w-M)*5+(w-.54)*.8))}let S=n?1:Cr(.94,1,Go(.05,.34,c));i[y]=Cr(h[0],(139+115*g)*S,m)+b,i[y+1]=Cr(h[1],(154+100*g)*S,m)+b*.94,i[y+2]=Cr(h[2],(178+77*g)*S,m)+b*.86,i[y+3]=255}}let a=new _i(i,1024,512,Ln);return a.colorSpace=lt,a.wrapS=Vn,a.magFilter=un,a.minFilter=In,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Xx(){return{day:qx(!1),night:qx(!0)}}function Jh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new Pn(i);return r.colorSpace=lt,r}function Yx(n,e){let{day:t,night:i}=Xx(),r=new ze(new Gn(180,40,20),new gt({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(r);let s=Jh(128,128,(x,I)=>{let H=x.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);H.addColorStop(0,"#fff8df"),H.addColorStop(.12,"#fff3bd"),H.addColorStop(.18,"rgba(255,225,144,.40)"),H.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=H,x.fillRect(0,0,I,I)}),o=new Ca(new io({map:s,blending:$n,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=po,a.needsUpdate=!0;let l=new Mo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Za("#daeaff","#88724c",2.25),u=new $a("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new _,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(x){h=f[x]?x:0;let I=f[h];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,u.color.set(I.sun),u.intensity=I.power,d.set(...I.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,r.material.map=h===2?i:t,r.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=m*[1,.56,.09][h]}function y(x){if(!u.castShadow)return;let I=u.target.position,H=Math.round(x.x/4)*4,re=Math.round(x.y/4)*4,j=Math.round(x.z/4)*4;I.x===H&&I.y===re&&I.z===j||(I.set(H,re,j),u.position.copy(I).add(d))}let m=0;n.background=new De(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(x,I,H){let[,re,j]=g[I],xe=512;x.save(),x.scale(H/512,H/512),x.fillStyle=re,x.fillRect(0,0,xe,xe);let pe=I+19;function be(){return pe=Math.imul(pe,1664525)+1013904223>>>0,pe/4294967296}if(x.fillStyle=j,I===16){for(let Me=0;Me<16;Me++)for(let he=0;he<16;he++)(he+Me)%2===0&&x.fillRect(he*32,Me*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let Me=I===15?32:64;x.globalAlpha=.48;for(let he=0;he<xe;he+=Me){x.fillRect(0,he,xe,I===8?3:2);for(let Te=-Me;Te<xe;Te+=Me)x.fillRect(Te+he/Me%2*(I===2?Me/2:0),he,2,Me)}}else if([4,5,6,7,10,11,12].includes(I)){let Me=I===5?38:I===7?64:18;for(let he=0;he<Me;he++){x.strokeStyle=j,x.globalAlpha=.08+be()*.22,x.lineWidth=I===5?1+be()*8:1+be()*4;let Te=be()*xe,Ve=I===5?.018:.009;x.beginPath();for(let Ae=0;Ae<=xe;Ae+=8){let Pe=Te+Math.sin(Ae*Ve+he)*(I===6||I===7?4:12+he%5*3)+(I===4?Ae*.28:0);Ae===0?x.moveTo(Ae,Pe):x.lineTo(Ae,Pe)}x.stroke()}}else{x.globalAlpha=.27;for(let Me=0;Me<120;Me++){let he=be()*xe,Te=be()*xe,Ve=2+be()*6;x.beginPath(),x.arc(he,Te,Ve,0,Math.PI*2),x.fill()}}if(I!==16)for(let Me=0;Me<4400;Me++)x.globalAlpha=.05+be()*.1,x.fillStyle=be()>.5?j:"#222324",x.fillRect(be()*xe,be()*xe,1+be()*4,1+be()*3);x.restore()}let S=new Set([0,2,4,5,8,15,16]),v=g.map(([x,I,H,re,j,xe],pe)=>{let be=S.has(pe)?512:256,Me=Jh(be,be,Te=>b(Te,pe,be));Me.wrapS=Me.wrapT=Vn;let he=new pt({map:Me,roughness:re,metalness:j,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return he.name=x,he}),C=v.map(x=>x.map.image),A=512,L=v.map(x=>new Pt({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),U={value:0},w={value:.24},M={value:null},E={value:0};function F(){M.value?.dispose(),M.value=Jh(512,512,(x,I)=>{x.fillStyle="#ffffff",x.fillRect(0,0,I,I);let H=I/52,re=I/64;for(let j of N){if(!j.position||!j.half||j.position.y+j.half.y<.22)continue;let xe=(j.position.x+26)*H,pe=(j.position.z+54)*re,be=Math.min(55,j.half.x*H+5),Me=Math.min(72,j.half.z*re+6);x.save(),x.translate(xe+j.half.y*H*.2,pe+j.half.y*re*.24),x.scale(be,Me);let he=x.createRadialGradient(0,0,.15,0,0,1);he.addColorStop(0,"rgba(22,37,65,.54)"),he.addColorStop(.58,"rgba(36,54,76,.29)"),he.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=he,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[...v,...L])x.onBeforeCompile=I=>{I.uniforms.uFocusAmount=U,I.uniforms.uFocusRadius=w,I.uniforms.uLabLightmap=M,I.uniforms.uLabBakedStrength=E,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],G=[];function W(x,I,H,re,j,xe,pe,be=0,Me=0,he=1,Te=1,Ve=!1){let Ae=new ze(Ve?new Ke(j,xe,pe):Xh(j,xe,pe),v[be]);Ae.position.set(I,H,re),Ae.rotation.x=Me,Ae.receiveShadow=!0,Ae.castShadow=!0,n.add(Ae);let Pe=new _(j/2,xe/2,pe/2),We={mesh:Ae,position:Ae.position,quaternion:Ae.quaternion,half:Pe,min:Pe.clone().negate(),friction:he,gravity:Te,name:x,type:be,shape:fi(Pe)};return N.push(We),We}let k=Hy.map(({name:x,bounds:I,type:H=0,friction:re=.78,gravity:j=1})=>{let{xMin:xe,xMax:pe,zMin:be,zMax:Me}=I;return W(x,(xe+pe)/2,-.33,(be+Me)/2,pe-xe,.66,Me-be,H,0,re,j)});for(let x of Object.values(Xy))for(let I of x)W(...I);let{xMin:J,xMax:B,zMin:oe,zMax:le}=ky;W("But\xE9e arri\xE8re",0,1.35,oe+.4,B-J,2.7,.6,2),W("But\xE9e ouest",J+.3,1.05,(oe+le)/2,.6,2.1,le-oe,2),W("But\xE9e est",B-.3,1.05,(oe+le)/2,.6,2.1,le-oe,2);let{xMin:_e,xMax:ie,zMin:we,zMax:fe}=Fo.hills.bounds,de=ie-_e,$=fe-we,K=16,me=64,Ce=new Wt(de,$,K,me).rotateX(-Math.PI/2).translate(_e+de/2,0,we+$/2),O=Ce.attributes.uv;for(let x=0;x<O.count;x++)O.setXY(x,O.getX(x)*de/2.6,O.getY(x)*$/2.6);let ye=Ce.attributes.position,ge;function T(x){if(ge===x)return;ge=x;let I=ge*.017;for(let H=0;H<ye.count;H++){let re=ye.getX(H),j=ye.getZ(H),xe=Math.sin(Math.PI*Fe.clamp((re-_e)/de,0,1)),pe=Math.min(1,(j-we)*.48,(fe-j)*.48),be=.93+.56*Math.sin(j*.36+I)+.32*Math.cos(re*.67+j*.26+I*1.4)+.19*Math.sin(j*.81+I*.67);ye.setY(H,Math.max(0,xe*pe*be))}ye.needsUpdate=!0,Ce.computeVertexNormals(),Ce.computeBoundingSphere()}T(Gy);let X=new ze(Ce,v[3]);X.receiveShadow=X.castShadow=!0,n.add(X);let ne=(x,I)=>{let H=Fe.clamp((x-_e)/de*K,0,K-1e-6),re=Fe.clamp((I-we)/$*me,0,me-1e-6),j=Math.floor(H),xe=Math.floor(re),pe=H-j,be=re-xe,Me=K+1,he=xe*Me+j,Te=ye.getY(he),Ve=ye.getY(he+1),Ae=ye.getY(he+Me),Pe=ye.getY(he+Me+1);return pe+be<=1?Te+(Ve-Te)*pe+(Ae-Te)*be:Pe+(Ae-Pe)*(1-pe)+(Ve-Pe)*(1-be)};N.push({heightfield:!0,mesh:X,height:ne,...Fo.hills.bounds,friction:.81,gravity:1});function Z(x,I,H,re,j=1.45){let xe=Jh(384,72,(be,Me,he)=>{be.fillStyle="#202a32",be.fillRect(0,0,Me,he),be.fillStyle=re,be.font="bold 31px system-ui",be.textAlign="center",be.fillText(x,Me/2,48,Me-20)}),pe=new ze(new Wt(3.2,.6),new gt({map:xe,side:At}));pe.position.set(I,j,H),n.add(pe),G.push(pe)}for(let x of Object.values(Fo)){Z(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:I,xMax:H,zMin:re,zMax:j}=x.bounds,xe=new Ia(new Je().setFromPoints([new _(I,.025,re),new _(H,.025,re),new _(H,.025,j),new _(I,.025,j)]),new Mi({color:x.color,transparent:!0,opacity:.72}));n.add(xe),G.push(xe)}Z("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Z("MURS HAUTS",3,-31,"#e8d2ff"),Z("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let D=new pt({color:"#c8e6ed",metalness:1,roughness:.16}),Y=new ze(new Rt(.54,2),D);Y.position.set(Fh.x,Fh.y,Fh.z),Y.castShadow=!0,n.add(Y);let z=g.map((x,I)=>{let{x:H,z:re}=qy(I);return W("\xC9chantillon "+g[I][0],H,.325,re,.65,.65,.65,I,0,1,1,!0).mesh}),Q=new zt(1,12).rotateX(-Math.PI/2),se=new gt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function ue(x){let I=new ze(Q,se);return I.scale.setScalar(x),n.add(I),I}function R(x,I,H,re,j,xe,pe,be){let Me=I>=3;e.shadowMap.enabled=Me,u.castShadow=Me,se.opacity=I===2?.17:.11,E.value=be?.38+H*.04:0;let he=I>=9?2048:I>=6?1024:I>=4?512:256;u.shadow.intensity=.45+I*.055,u.shadow.radius=.65+I*.12;let Te=13+I*1.2;Object.assign(u.shadow.camera,{left:-Te,right:Te,top:Te,bottom:-Te}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==he&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(he,he)),o.visible=j,pe!==A&&(A=pe,v.forEach((Ae,Pe)=>{let We=Ae.userData.texture??Ae.map,q=S.has(Pe)?pe:Math.min(256,pe);if(We.image.width===q)return;let Re=document.createElement("canvas");Re.width=Re.height=q;let Le=Re.getContext("2d");q>512?b(Le,Pe,q):Le.drawImage(C[Pe],0,0,q,q);let Oe=new Pn(Re);Oe.colorSpace=We.colorSpace,Oe.wrapS=We.wrapS,Oe.wrapT=We.wrapT,Oe.repeat.copy(We.repeat);for(let Ee of[Ae,L[Pe]])Ee.userData.texture=Oe,Ee.map=Oe,Ee.needsUpdate=!0;We.dispose()}));let Ve=x>=4;for(let Ae of N)Ae.mesh?.isMesh&&!Ae.zone&&(Ae.mesh.material=Ve?v[Ae.type]:L[Ae.type]);X.material=Ve?v[3]:L[3];for(let Ae=0;Ae<z.length;Ae++)z[Ae].material=Ve?v[Ae]:L[Ae];v.forEach((Ae,Pe)=>{for(let We of[Ae,L[Pe]])We.userData.texture||(We.userData.texture=We.map),We.map=xe?We.userData.texture:null,We.color.set(xe?"#ffffff":g[Pe][1]),We.needsUpdate=!0}),m=re?.21+H*.067:0,D.metalness=re?.95:.1,D.roughness=re?.13:.46,r.visible=x>=2,p(h)}return{boxes:N,floors:k,probe:Y,display:z,visual:R,shadow:ue,setTimeOfDay:p,centerShadows:y,get hillSeed(){return ge},setHillSeed:T,bakeLightmap:F,mapMaterial:(x,I)=>I>=4?v[x]:L[x],builtObjects:[...N.map(x=>x.mesh).filter(x=>x?.isObject3D),Y,...G],materials:[...v,...L],focus(x,I,H){U.value=x?I*.75:0,w.value=.07+H*.058}}}var Tv="R37",Lr=document.getElementById("game");Lr instanceof HTMLCanvasElement||(Lr=document.createElement("canvas"),Lr.id="game",Lr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Lr));var bs=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),et;try{et=new Qu({canvas:Lr,antialias:!bs,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}et.xr.enabled=!0;et.xr.setReferenceSpaceType("local-floor");et.shadowMap.type=Qa;et.shadowMap.autoUpdate=!1;var Zx=-1/0;et.toneMapping=uu;et.toneMappingExposure=1.15;var Et=new Jr;Et.fog=new Aa("#a6d4ea",55,135);var yt=new vt,md=new vt,Qt=new Zt(70,1,.035,210);yt.add(md);md.add(Qt);Et.add(yt);var wt=Yx(Et,et),QA=kx(et),rd=Vx();Et.add(rd);var eE=Gx(wt.probe),V=Sx(bs),tE={...V};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(V.stepVolume=n)}catch{}var Nr=Rx();for(let n of["pointerdown","keydown"])addEventListener(n,Nr.unlock,{passive:!0});var nE=Px(Et),vs={normal:new _,surface:null},sd=[.18,.17,.105].map(n=>({radius:n,position:new _})),rm=new _(No.x,No.y,No.z);yt.position.copy(rm);var an=new _,Ho=new _,Dt=new _,jx=new _,Qn=new _,vn=new _,Jx=new _,jo=new _,Rr=new _,$x=new _,Ir=new _,Kx=new _,$h=new _,iE=.105,Kh=new _,od=!1,Ri=!1,sm=0,om=null,Dl=[],am=100,Jt=new _(0,1,0),sr=new qe,bt=0,ir=0,Ss=0,mi=0,Jo=NaN,ad=!1,Vp=0,_s=0,kp=0,Qh=0,Xo=0,Yo=0,Zo=0,rn=V.quality,Ul=72,$t=!1,Av="left",ht=new URLSearchParams(location.search).has("room")?5:0,lm=0,cm=0,um=0,Kt=!0,Qx=0,rE=[],ed=[],or=wt.boxes,sE=new Rt(1,0),Ev=1+Math.floor(Math.random()*(th.length-1)),Cv=nh(Ev),{hand:oE,fur:aE}=Cv;function lE(n,e,t,i,r,s,o,a){let l=new ze(sE,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var gd=Cp(localStorage),cE=gd.models.length?"|atelier-"+us(JSON.stringify(gd)):"",tr=nx(gd)??Cv.createHead();tr.visible=!1;Et.add(tr);var qo=new _,ld=new qe,ev=new _,uE=new _,tv=new nn(0,0,0,"YXZ"),jp=new _,Gp=new _,er=new Se,nv=new qe,Jp=9.81,Rv=null,Hp=new qe,iv=[null,null];function yd(){return .24+V.arms*.036}function hE(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Fe.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Fe.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Fe.lerp(s[2],i,r),n.skin.pose(s,!V.body)}var Ot=["left","right"].map(n=>{let e=sh(n,oE,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Et.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new _,quaternion:new qe},target:new _,gripPosition:new _,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new _,supportOffset:new _,hasSupport:!1}}),Fr=new Hh(_,Ot,Iy),Pv=oh(aE,Ot.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ot){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Ii=Pv.mesh;Et.add(Ii);function dE(n,e){if(V.body){Hp.copy(Ii.quaternion).invert();for(let t=0;t<Ot.length;t++){let i=Ot[t];iv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Ii.position).applyQuaternion(Hp),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Hp))}Pv.pose(iv,yd(),n,e,V.hands)}}var Tn=Nh(),Iv=[0,1,2,3,4,5],Lv=[7,8,9,10,11,12,13,14],kl=15,rv=fi(new _(.13,.088,.115)),fE=new Ke(.26,.176,.23),pE=new pt({color:"#536771",roughness:.36,metalness:.28});Tn[kl]={name:"Cam\xE9ra du spectateur",geo:fE,material:pE,shape:rv,lowShape:rv,mass:1.2};var{props:mE,animate:gE}=Tx(),yE=tx(gd).slice(0,36),hm=[],Nl=[];function Dv(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=Tr(t??r.geo,i);e.push(Tn.length),Tn.push({...r,shape:s,lowShape:s})}}Dv(mE,hm);Dv(yE,Nl);var Uv=[...Iv,...Lv,...hm,...Nl];Tn[8].properties={supportWhileHeld:!0};Tn[11].properties={supportWhileHeld:!0};function xE(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new _),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new _().setComponent(t,e.getComponent(t)*.49)}for(let n of Tn)n.supportAxis=xE(n);function vE(n){let e=new ze(new Lt(.058,.074,.1,12).rotateX(Math.PI/2),new pt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new ze(new zt(.048,12),new gt({color:"#7bd7ed",side:At}));t.position.z=-.203,n.add(t);let i=new ze(new Ke(.045,.013,.012),new gt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function Fv(n,e=!1){let t=Tn[n];if(!t)return null;let i=new ze(t.geo,e?Sl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===kl&&vE(i),i}var ot=null,St=[],sv=[],Cl={model:null,bounds:null,center:new _,size:new _},Pr={position:new _,right:new _,up:new _,normal:new _,scaleX:1,scaleY:1},Rl=new qe,ov=new _,av=new nn(0,0,0,"YXZ");function _E(){let n=ot?.getAssetPiece?.("range-target");if(!n)return null;if(Cl.model!==n.model){Cl.model=n.model;let i=Pp(n.model);i.getCenter(Cl.center),i.getSize(Cl.size)}let{center:e,size:t}=Cl;return av.set(Fe.degToRad(n.pitch),Fe.degToRad(n.yaw),Fe.degToRad(n.roll??0),"YXZ"),Rl.setFromEuler(av),Pr.position.set(n.x,n.y,n.z),ov.set(-e.x/Math.max(1e-4,t.x)*n.w,-e.y/Math.max(1e-4,t.y)*n.h,-e.z/Math.max(1e-4,t.z)*n.d).applyQuaternion(Rl),Pr.position.add(ov),Pr.right.set(1,0,0).applyQuaternion(Rl),Pr.up.set(0,1,0).applyQuaternion(Rl),Pr.normal.set(0,0,1).applyQuaternion(Rl),Pr.scaleX=n.w/Math.max(1e-4,t.x),Pr.scaleY=n.h/Math.max(1e-4,t.y),Pr}var Br={held:null},Ko=new Map,nr=0,ME=1,Pl=new qe,Bl=new qe,Il=new _,xd=new _,Dr=new _,$p=new _,Kp=new _;function bE(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){xd.set(0,0,-1).applyAxisAngle(Jt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(Il.copy(n).addScaledVector(xd,s),Il.y+=.15,!Uo(n,Il,Math.min(.2,t*.5),or,$p,Kp)&&!St.some(o=>o.mesh.position.distanceToSquared(Il)<(t+o.radius+.07)**2))return Il}}return null}function As(n,e,t,i=!1){let r=Tn[n];if(!r)return null;if(!e&&(t?Dr.set(t.x,t.y,t.z):et.xr.isPresenting?Dr.copy(Dt):Qt.getWorldPosition(Dr),e=bE(Dr,t?.yaw??ir,r.shape.radius),!e))return i||pi("Aucun espace libre pour cet objet."),null;let s=Fv(n);s.position.copy(e),Et.add(s);let o=V.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:ME++,netType:n,beforePhysics:s.position.clone(),blocksPlayer:r.properties?.collidable!==!1,precise:V.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),owner:null,velocity:new _,angular:new _,offset:new _,relativeRotation:new qe,shadow:wt.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===kl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),St.push(a),vl(a,wt.boxes),a}function Nv(){for(let n of Ot)gi(n,!1);gi(Br,!1);for(let n of Ko.values())gi(n,!1)}function Ed(){Nv();for(let n of St)if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();St.length=0,Ko.clear()}function Bv(){if(ot?.assetLayer)return;let n=new Set(ot?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);Yy((e,t)=>{n.has(Tp[e])||As(e,t)})}Bv();function gi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+V.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Gl(){Nv();for(let n of St)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function ar(){Cd.reset(),yt.position.copy(rm),bt=Fe.degToRad(ot.yaw),Ss=0,yt.rotation.y=bt,an.set(0,0,0),ad=!1,Ri=!1,vs.normal.set(0,0,0),vs.surface=null,od=!1,Fr.reset(),Nr.reset(),er.set(0,0);for(let n of Ot)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,gi(n,!1)}Gl();function Ov(){return V.auto||bs&&!et.xr.isPresenting}function vd(){return Ov()?Math.min(V.shadowQuality,rn):V.shadowQuality}function Ol(){return Ov()?Math.min(V.lightQuality,rn):V.lightQuality}function Di(){let n=V.texturePower;wt.visual(rn,V.shadows?vd():0,Ol(),V.reflections,V.bloom,V.textures,2**(n-1),V.lightmap),ot.refreshMaterials?.(),et.shadowMap.needsUpdate=!0,wt.setTimeOfDay(Ye.remoteLight??V.timeOfDay-1),Qp=bd.slice(0,Ol()>=8?3:Ol()>=4?2:1),Pm.value=V.shaderMode-1;let e=et.xr.isPresenting&&et.xr.getBaseLayer?.()?.fixedFoveation!=null;wt.focus(V.focus&&!e,V.focusStrength,V.focusSize),et.toneMappingExposure=.58+V.exposure*.114,l_.value=.55+V.contrast*.09,c_.value=V.saturation*.2,u_.value=(V.warmth-5)*.022,et.xr.setFoveation(V.focus?Fe.clamp((V.focusStrength+1)*.105+(5-V.focusSize)*.028+(V.auto?(7-rn)*.045:0),0,1):0),et.xr.isPresenting||Hl(),Kt=!0,Mn.redraw()}var lv=0,cv=0,uv=0;function Hl(){if(et.xr.isPresenting)return;let n=Math.max(1,Lr.clientWidth||innerWidth),e=Math.max(1,Lr.clientHeight||innerHeight),t=xx(rn,devicePixelRatio,bs);t!==uv&&(et.setPixelRatio(t),uv=t),(n!==lv||e!==cv)&&(et.setSize(n,e,!1),lv=n,cv=e),Qt.aspect=n/e,Qt.fov=V.viewFov,Qt.updateProjectionMatrix()}addEventListener("resize",Hl);globalThis.visualViewport?.addEventListener("resize",Hl);function SE(n){Object.assign(V,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},qh[n]),rn=V.quality,Yo=Zo=Xo=0,Di()}var ws=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",ar]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Am]]],["Rendu",[]]],dm=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function fm(){return ht===2?dm[lm][1]:ht===3?kv[cm][1]:ht===4?xm[um][1]:ws[ht][1]}function zv(n){ht=n,Kt=!0}var _d=null,pm=[],cd=0,ud=0,mm=null,Md=!1,gm=0,ym=0,Vv={},bd=Array.from({length:3},()=>{let n=new ja("#ffffff",0,22,1.6);return n.visible=!1,Et.add(n),{light:n,mesh:null,distance:1/0}}),Qp=bd,Sd=new _;function hv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Sd);if(t>34**2)return;let i=Qp[0];for(let r of Qp)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function wE(n){n?Qt.getWorldPosition(Sd):Sd.copy(Dt);for(let t of bd)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(hv);else if(V.objects)for(let t of St)t.materialStyle===3&&hv(t.mesh);let e=20+Ol()*.75;for(let{light:t,mesh:i}of bd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function Wl(){let n=pm.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;_d={game:"Gorilla Lab",version:Tv.toLowerCase(),time:new Date().toISOString(),mode:Md?"VR":"PC",settings:{...V},qualityActive:rn,debug:Rv,audio:{volume:V.stepVolume,enabled:V.stepAudio,clipsPlayed:Nr.count,state:Nr.state},performance:{fps:_s,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:mm,renderer:Vv,terrainSeed:wt.hillSeed,map:ot.active?{name:ot.name,pieces:ot.nodes}:null,objects:{total:St.length,held:St.filter(t=>t.owner).length,frozen:St.filter(t=>t.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:Mn.score(),locomotion:{trackedFrames:ym,contactFrames:gm,launchCount:sm,lastLaunch:om,standingHeight:Number.isFinite(Jo)?Jo:null,viewOffset:mi}},document.querySelector("#download-report").disabled=!1,Kt=!0}function TE(){_d||Wl();let n=URL.createObjectURL(new Blob([JSON.stringify(_d,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=TE;document.querySelector("#capture-report").onclick=Wl;ws[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Wl]);var AE=Array.from({length:Math.ceil(Nl.length/8)},(n,e)=>["Atelier"+(Nl.length>8?" "+(e+1):""),Nl.slice(e*8,e*8+8)]),kv=[["Basiques",Iv],["D\xE9taill\xE9s",Lv],["Anim\xE9s",hm],...AE].map(([n,e])=>[n,[...e.map(t=>[Tn[t].name,()=>Em(t)]),["Tout retirer",Rd]]]);ws.push(["Spawn",[]]);var xm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ot.blank(),V.mapEdit=!0}],["Annuler placement",()=>ot.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ot.recenter(Dt.x,yt.position.y,Dt.z,ir)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ot.reset(),V.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>mv(!1)],["Utiliser comme t\xEAte",()=>mv(!0)]]]];ws.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["\xC9couter un pas",Gv],["Capturer un rapport",Wl]]]);function Gv(){Nr.unlock().then(()=>Nr.play(V.stepVolume))}function Hv(){try{localStorage.setItem("gorilla-lab-step-volume",String(V.stepVolume))}catch{}}var EE=document.querySelector("#section"),td=document.querySelector("#settings"),CE=document.querySelector("#readings"),vm=[1,.75,.5,.25];function _n(n,e){if(n==="debugSpeed"){V.debugSpeed=Fe.clamp(V.debugSpeed+e,1,vm.length),Fr.reset(),Kt=!0;return}if(n==="stepVolume"){V.stepVolume=Fe.clamp(V.stepVolume+e,1,10),Hv(),Kt=!0;return}if(n==="viewFov"){V.viewFov=Fe.clamp(V.viewFov+5*e,50,105),Hl(),Kt=!0;return}if(n==="vrFov"){V.vrFov=Fe.clamp(V.vrFov+5*e,55,100),Kt=!0;return}if(n==="shaderMode"){V.shaderMode=(V.shaderMode-1+e+Wh.length)%Wh.length+1,Pm.value=V.shaderMode-1,Kt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??V.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else V.timeOfDay=(V.timeOfDay-1+e+3)%3+1;Di();return}let t={mapMode:9,mapShape:5,mapMaterial:Bp.length,mapSurface:4,mapTurn:8,mapTexture:kh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];V[n]=(V[n]-1+e+i)%i+1,Kt=!0;return}if(n==="mapEdit"&&!V.mapEdit&&!ot.active&&ot.load(Nx(wt.boxes)),n==="toolMode"){V.toolMode=(V.toolMode-1+e+xs.length)%xs.length+1,et.xr.isPresenting||pi("Outil \xB7 "+xs[V.toolMode-1]),Kt=!0;return}if(n==="preset"){let i=Object.keys(qh);V.preset=(V.preset-1+e+i.length)%i.length+1,SE(i[V.preset-1]);return}if(typeof V[n]=="boolean"?V[n]=!V[n]:V[n]=Fe.clamp(V[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ot)i.valid=!1,i.surface=null;if(n==="quality"&&(V.auto=!1,rn=V.quality),n==="auto"&&!V.auto&&(rn=V.quality),n==="movement"||n==="collisions")for(let i of Ot)i.surface=null;if(n==="objects"&&!V.objects&&Gl(),n==="blasterActive"&&V.blasterActive&&(V.toolActive=!1),n==="toolActive"&&V.toolActive&&(V.blasterActive=!1),!V.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ot)i.held?.toolHold&&gi(i,!1);wm(!1)}n==="preciseHitboxes"&&Wv(),Di()}function Wv(){for(let n of St)n.precise=V.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||vl(n,wt.boxes)}function qv(){let n=(ht===2?dm:ht===4?xm:null)?.flatMap(e=>e[1])??fm();for(let[,e]of n)typeof e=="string"&&(V[e]=tE[e]);ht===6&&(Hv(),Fr.reset()),ht===0&&ar(),ht===1&&(Wv(),Gl()),ht===3&&Rd(),ht===2&&(rn=V.quality),Di()}function Ll(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),ea(),Kt=!0},t}function Xv(n){return n==="preciseHitboxes"?V[n]?"High":"Low":V[n]?"Actif":"Coup\xE9"}function _m(n){if(n==="debugSpeed")return Ye.role?"\xD71 en ligne":"\xD7"+vm[V.debugSpeed-1];if(n==="stepVolume")return V.stepVolume+"/10";if(n==="viewFov")return V.viewFov+"\xB0";if(n==="vrFov")return V.vrFov===100?"Natif":V.vrFov+" %";if(n==="mapTexture")return V[n]===1?"Aucune":kh[V[n]-2];if(n==="terrainResolution")return[8,16,32,48][V[n]-1]+"\xB2";if(n==="shaderMode")return Wh[V.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=V[n],t=n==="shadowQuality"?vd():Ol();return t===e?e+"/10":e+"/10 \xB7 "+t+(V.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??V.timeOfDay-1]:n==="mapMode"?Kv[V.mapMode-1]:n==="mapShape"?UE[V.mapShape-1]:n==="mapSurface"?FE[V.mapSurface-1]:n==="mapMaterial"?Bp[V.mapMaterial-1]:n==="mapTurn"?(V.mapTurn-1)*45+"\xB0":n==="toolMode"?xs[V.toolMode-1]:n==="preset"?Object.keys(qh)[V.preset-1]:n==="texturePower"?[2**(V[n]-1),2**(V[n]-1)].join("\xD7"):V[n]}function em(){return ht===2?dm:ht===3?kv:xm}function Yv(){return ht===2?lm:ht===3?cm:um}function Zv(n){ht===2?lm=n:ht===3?cm=n:um=n}function jv(n){return n===Wl?"Capturer":n===Gv?"\xC9couter":n===Ed||n===Rd?"Vider":n===ar||n===Am?"R\xE9initialiser":ht===3?"Cr\xE9er":"Appliquer"}function ea(){if(EE.textContent=ws[ht][0],Jv.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ht))),td.replaceChildren(),RE.hidden=ht!==5,document.querySelector("#restore").hidden=ht===5,ht!==5){if(ht>=2&&ht<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),em().forEach(([e],t)=>{let i=Ll(e,()=>Zv(t));i.setAttribute("aria-pressed",String(Yv()===t)),n.append(i)}),td.append(n)}if(ht===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",td.append(n)}for(let[n,e]of fm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Ll(jv(e),e)):typeof V[e]=="boolean"?i.append(Ll(Xv(e),()=>_n(e,1))):i.append(Ll("\u2212",()=>_n(e,-1)),document.createTextNode(" "+_m(e)+" "),Ll("+",()=>_n(e,1))),t.append(i),td.append(t)}}}var Jv=document.querySelectorAll("[data-page]"),RE=document.querySelector("#cloud-access");Jv.forEach((n,e)=>n.onclick=()=>{zv(e),ea()});document.querySelector("#restore").onclick=()=>{qv(),ea()};ea();function $v(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new Pn(s);a.colorSpace=lt;let l=new ze(new Wt(t,i),new gt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=$v(640,652,.84,.86,Et);fn.mesh.visible=!1;var ei=$v(416,84,.32,.065,Et);ei.mesh.visible=!1;var Wo=new Zt(75,1,.07,140),ti=new al(new Wt(1.7,1.95),{color:16054015,textureWidth:bs?128:256,textureHeight:bs?128:256,clipBias:.004,multisample:0}),PE=new _(0,0,-1),nd=new _,dv=new _;ti.position.set(Dh.x,Dh.y,Dh.z);ti.rotation.y=Math.PI;Et.add(ti);var Mm=new ze(new Ke(1.8,2.03,.1),new Pt({color:"#344650"}));Mm.position.copy(ti.position).z+=.064;Et.add(Mm);var IE=ti.onBeforeRender.bind(ti);ti.onBeforeRender=()=>{};ti.visible=!1;var Wp=-1/0;function LE(n,e){if(Wo.position.copy(Dt),e){let i=e.transform.orientation;Wo.quaternion.set(i.x,i.y,i.z,i.w).premultiply(ld.setFromAxisAngle(Jt,bt))}else Qt.getWorldQuaternion(Wo.quaternion);dv.set(0,0,-1).applyQuaternion(Wo.quaternion),nd.subVectors(ti.position,Dt);let t=nd.length();if(ti.visible=ot.builtIn&&V.reflections&&t<4&&nd.dot(PE)<-.15&&nd.multiplyScalar(1/Math.max(.001,t)).dot(dv)>.66,!ti.visible){Wp=-1/0;return}if(!(n-Wp<(bs&&!et.xr.isPresenting?110:45))){Wp=n,Wo.updateMatrixWorld(!0),ti.updateMatrixWorld(!0),tr.visible=V.body;try{IE(et,Et,Wo)}finally{tr.visible=!1}}}var Li=new Wi,qn=new _,Fn=new _,Qo=new _,id=new _,fv=new _,Fl=null,hd=null,dd=null,DE=new Set(Et.children),Mn=Hx(Et,wt.boxes,{spawn:Em,clear:Rd,resetPlayer:ar,resetObjects:Am,resetTree:()=>Tm(2,e_),quality:()=>rn+"/10",resolution:()=>V.resolution+"/10 \xB7 relancer VR",textureSize:()=>_m("texturePower"),qualityNext:()=>{V.quality>=10&&(V.quality=0),_n("quality",1)},resolutionNext:()=>{V.resolution>=10&&(V.resolution=0),_n("resolution",1)},textureNext:()=>{V.texturePower>=12&&(V.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),Kv=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],UE=["Bloc","Rampe","Mur","Dalle","Terrain"],FE=["Normale","Glace","Caoutchouc","Lune"],pv=new Map;function NE(){for(let n of ot.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=pv.get(e);if(t===void 0){let r=Vo(n.model);r.scale(n.w,n.h,n.d);let s=Lp(n.model,new _(n.w,n.h,n.d)),o=Tr(s);s.dispose(),t=Tn.length,Tn.push({id:n.model.id,name:n.model.name,geo:r,material:Er(n.model),shape:o,lowShape:o,assetId:n.model.assetId??null,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Fe.clamp(n.w*n.h*n.d*9,.18,12)}),pv.set(e,t)}let i=As(t,new _(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Fe.degToRad(n.pitch),Fe.degToRad(n.yaw),Fe.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position))}}ot=zx({scene:Et,arena:wt,boot:rm,onReset:n=>{Ed(),ar(),bt=Fe.degToRad(n),Mn.coconuts.forEach(e=>{e.visible=!ot.assetLayer}),ot.builtIn&&Bv(),NE()},onVisual:Di,getLevel:()=>rn,defaultObjects:[...wt.builtObjects,...Et.children.filter(n=>!DE.has(n)),Mm]});var Ye=dy({scene:Et,currentMap:()=>(ot.signature||"arena-r25-"+wt.hillSeed)+cE,seedArena:n=>wt.setHillSeed(n),makeReplica:n=>{let e=Fv(n,!0);return e&&ta(e.material),e},onAction:GE,onStatus:()=>{ht===5&&(Kt=!0)},onShot:n=>Cd.receiveShot(n,Ye.role==="vr"),applyLight:n=>{wt.setTimeOfDay(n??V.timeOfDay-1),Kt=!0,et.xr.isPresenting||ea()},applyScore:n=>Mn.setScore(n),applyCoconuts:n=>Mn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function mv(n){let e=ot.modelPieces();if(!e.length||e.length>$i.parts){pi("Compose un mod\xE8le de 1 \xE0 "+$i.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Cp(localStorage);if(t.models.length>=$i.models){pi("La collection de mod\xE8les est pleine.");return}let i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0);for(let c of e)i.min(new _(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new _(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:V.modelGrab,frozen:V.modelFrozen,collidable:V.modelCollidable,supportWhileHeld:V.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Fx[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Ep,JSON.stringify(gs(t))),pi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{pi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var qp=new Map;function BE(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][V.mapShape-1],e=ko({detail:[8,16,32,48][V.terrainResolution-1],amplitude:(V.terrainAmplitude-1)*.34,frequency:.05+V.terrainFrequency*.025,seed:V.terrainSeed,grass:(V.terrainGrass-1)/9,shrub:(V.terrainShrub-1)/9}),t=V.mapTexture-2;return t>=0&&!qp.has(t)&&qp.set(t,mx(t).toDataURL("image/webp",.83)),Zh({...n,material:V.mapMaterial-1,yaw:V.mapShape===5?0:(V.mapTurn-1)*45,...Op[Object.keys(Op)[V.mapSurface-1]],texture:qp.get(t)??null,terrain:V.mapShape===5||V.mapMode===9?e:null,brushRadius:.5+V.brushRadius*.5,brushStrength:V.brushStrength*.15})}function OE(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-mi,s.z).applyAxisAngle(Jt,bt).add(yt.position),sr.set(o.x,o.y,o.z,o.w),Fn.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Jt,bt),ot.edit(qn,Fn,i,{mode:V.mapMode,piece:BE(),head:Dt,feet:yt.position.y}),i&&(Kt=!0)}function zE(n){if(!ot.builtIn||!n.valid||n.held||n.remoteHeld||$t)return;let e=null;for(let t of Mn.targets)if(t.getWorldPosition(fv),!(n.mesh.position.distanceToSquared(fv)>.11**2)&&(t.worldToLocal(id.copy(n.mesh.position)),Math.abs(id.x)<t.userData.touchWidth*.5+.025&&Math.abs(id.y)<.095&&Math.abs(id.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function bm(n,e=null){n.getWorldPosition(Qo),n.visible=!1,V.objects||(V.objects=!0);let t=As(6,Qo);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function tm(n,e,t){if(!ot.builtIn)return;Li.set(n,e),Li.far=5.5;let i=Li.intersectObjects([...Mn.targets,...Mn.coconuts.filter(s=>s.visible)],!1);Li.far=1/0;let r=i[0];r&&(Ts.visible=!0,Ts.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action?r.object.userData.action(r.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:Mn.coconuts.indexOf(r.object)}):bm(r.object,e),ea()))}var gv=new _,Qv=new qe,Sm=ah(Et),Cd=Mx({scene:Et,rig:yt,camera:Qt,arena:wt,objects:St,spectator:Ye}),kP=Sm.mesh,fd=new _,rr=new qe,wd=new _,$o={mode:0,position:wd,quaternion:rr,end:fd},yv=new _,VE=new _,xv=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Td=new _,kE={position:wd,quaternion:rr,pressure:[.1,.66,.08]},Xp=new _,Ad=new qe;function wm(n){Br.held&&gi(Br,n)}function Tm(n,e){if(Ye.role==="pc"){pi("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||pi("Attends la connexion \xE0 l\u2019h\xF4te.")}function Rd(){Tm(0,Ed)}function Am(){Tm(1,Gl)}function e_(){if(ot?.assetLayer){for(let n of St)n.spec.assetId==="spawn-coconut"&&(n.owner&&(n.owner.held=null,n.owner=null),n.toolHold=!1,n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!0);return}for(let n of Mn.coconuts)n.visible=!0}function Em(n,e=null){if(V.objects=!0,Ye.role==="pc"){pi("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||pi("Attends la connexion \xE0 l\u2019h\xF4te."):As(n,e)}function GE(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)V.timeOfDay=n.typeId+1,Di();else if(n.mode===3)[Ed,Gl,e_][n.typeId]();else if(ot.builtIn){let u=Mn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(Qo).distanceToSquared(e)<=5.8**2&&!Uo(Dr.copy(e),Qo,.01,or,$p,Kp)&&bm(u)}return}if(n.type==="spawn"){Uv.includes(n.typeId)&&(V.objects=!0,As(n.typeId,null,e));return}let t=St.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=Ko.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},Ko.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),gi(o,!0)}return}if(!V.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Dr.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Ih(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Uo(l,t.mesh.position,.01,or,$p,Kp))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Cm(t,s,o,Fe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Bl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Bl))}}function HE(n){if(et.xr.isPresenting)for(let t of Ot)t.valid&&t.held&&Yp(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Ko){let r=Ye.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){gi(i,!1),Ko.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Dr.copy(s?.position??r.avatar?.tool?.position??r),xd.set(0,0,-1).applyQuaternion(i.controllerRotation),Yp(o,Dr,xd,i.controllerRotation,n)}let e=Br.held;e&&(Qt.getWorldPosition(Td),Qt.getWorldDirection(gv),Qt.getWorldQuaternion(rr),Yp(e,Td,gv,rr,n))}function Yp(n,e,t,i,r){n.toolHold?Xp.copy(e).addScaledVector(t,n.toolDistance):Xp.copy(n.offset).applyQuaternion(i).add(e),Ad.multiplyQuaternions(i,n.relativeRotation),Ly(n,Xp,Ad,or,r)}function t_(n){return n.customMaterial||(n.mesh.material=Sl(n.mesh.material),n.customMaterial=!0,ta(n.mesh.material)),n.mesh.material}function WE(n){let e=t_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function n_(n,e,t){Li.set(n,e),Li.far=9;let i=Li.intersectObjects(t,!1)[0];return Li.far=1/0,fd.copy(n).addScaledVector(e,i?.distance??9),Uo(n,fd,.006,or,yv,VE)?(fd.copy(yv),null):i}function Cm(n,e,t,i){if(e===1){if(t?.held){t===Br?wm(!0):gi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??rr;n.relativeRotation.multiplyQuaternions(Qv.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();St.splice(St.indexOf(n),1)}else if(e===4&&!n.protected){Td.copy(n.mesh.position).addScaledVector(Jt,n.radius*2+.08);let r=As(n.netType,Td);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Sl(n.mesh.material),r.customMaterial=!0,ta(r.mesh.material)),vl(r,wt.boxes))}else if(e===5){let r=t_(n),s=xv[n.paint++%xv.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,WE(n));Kt=!0}}var Ur=[];function i_(n,e,t,i){if(!V.objects)return;let r=Ye.role==="player";if(Ur.length=0,r)Ye.forEachReplica(a=>Ur.push(a));else for(let a of St)!a.owner&&a.mesh.visible&&Ur.push(a.mesh);let s=n_(n,e,Ur);if($o.mode=V.toolMode,i?(wd.copy(i.mesh.position),rr.copy(i.controllerRotation)):(Qt.getWorldQuaternion(rr),wd.set(.16,-.17,-.43).applyQuaternion(rr).add(n)),Sm.update($o),!t)return;if(r){if(V.toolMode===1&&nr)Ye.sendAction({type:"release",objectId:nr}),nr=0;else if(s){let a=s.object.userData.netId;Ye.sendAction({type:"tool",mode:V.toolMode,objectId:a})&&V.toolMode===1&&(nr=a)}return}let o=s&&St.find(a=>a.mesh===s.object);Cm(o,V.toolMode,i??Br,s?Fe.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function qE(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;qn.set(o.x,o.y-mi,o.z).applyAxisAngle(Jt,bt).add(yt.position),sr.set(a.x,a.y,a.z,a.w),Fn.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Jt,bt),i_(qn,Fn,r,i)}function XE(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-mi,s.z).applyAxisAngle(Jt,bt).add(yt.position),sr.set(o.x,o.y,o.z,o.w),Fn.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Jt,bt),tm(qn,Fn,i)}var Ts=lE(Et,new gt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Ts.visible=!1;var nm=[],Ms=null;function vv(){let n=fn.ctx;nm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+Tv,25,42),n.font="20px system-ui",n.fillText(_s+" FPS   \xB7   Q "+rn+"/10   \xB7   "+(V.auto?"AUTO":"MANUEL"),390,40);function e(r,s,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(r,s,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,r+o/2,s+a/2+7,o-8),n.textAlign="left",nm.push({x:r,y:s,w:o,h:a,action:c,label:l})}let t=Math.floor(587/ws.length);if(ws.forEach(([r],s)=>e(25+s*t,61,t-4,44,r,()=>zv(s),ht===s?"#586d53":"#334b58")),ht===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),cl.forEach((r,s)=>{let o=204+s*48;n.fillText("Ar\xE8ne "+(s+1),25,o+29),e(200,o,190,40,"Rejoindre",()=>Ye.connect("player",r)),e(406,o,206,40,"H\xE9berger",()=>Ye.connect("vr",r))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>$t=!1),fn.texture.needsUpdate=!0;return}let i=ht>=2&&ht<=4;i&&em().forEach(([r],s)=>{let o=Yv()===s,a=Math.min(144,Math.floor(586/em().length)-4);e(25+s*(a+4),114,a,38,r,()=>Zv(s),o?"#546947":"#263d49")}),fm().forEach(([r,s],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(r,37,a+26),typeof s=="function"?e(406,a,206,36,jv(s),s):typeof V[s]=="boolean"?e(406,a,206,36,Xv(s),()=>_n(s,1),V[s]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>_n(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(_m(s)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>_n(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",qv),e(325,579,287,44,"Fermer",()=>$t=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Rm||(ht===6?"Cyan : prise \xB7 Vert : paume \xB7 Rose : collisions invisibles":ht===4&&ot.status?ot.status.slice(0,64):_d?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),fn.texture.needsUpdate=!0}function YE(n){$t=!$t,$t&&(Av=n,ev.set(0,0,-1).applyAxisAngle(Jt,ir),fn.mesh.position.copy(Dt).addScaledVector(ev,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(Dt),fn.mesh.updateMatrixWorld(!0)),Kt=!0}function ZE(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-mi,s.z).applyAxisAngle(Jt,bt).add(yt.position),sr.set(o.x,o.y,o.z,o.w),Fn.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Jt,bt),Li.set(qn,Fn);let a=Li.intersectObject(fn.mesh)[0];if(a&&(Ts.visible=!0,Ts.position.copy(a.point).addScaledVector(Fn,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;nm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Kt=!0}}var Pd=yx(),{held:Pi,pressed:Qi}=Pd,r_=bx(et.domElement,document.querySelector("#touch-fire")),_v=document.querySelector("#game-settings"),s_=document.querySelector("#open-settings"),im=document.querySelector("#game-hint"),pd=0;function pi(n){im.textContent=n,im.hidden=!1,pd=performance.now()+2400,Rm=n,Kt=!0}var Rm="";function Id(n){let e=n??!_v.hidden;_v.hidden=e,s_.hidden=!e,e&&et.domElement.focus()}s_.onclick=()=>Id(!1);document.querySelector("#close-settings").onclick=()=>Id(!0);var zl=gx({canvas:et.domElement,enabled:()=>!et.xr.isPresenting,onLook:(n,e,t)=>{bt-=n*t,Ss=Fe.clamp(Ss-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Qi.add(e)},onMenu:()=>Id()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!et.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Id();return}n.code==="Space"&&n.preventDefault(),Pd.down(n.code,n.repeat),n.code==="KeyR"&&ar()}});addEventListener("keyup",n=>Pd.up(n.code));addEventListener("blur",()=>{Pd.clear(),zl.clear(),r_.clear()});function jE(n,e){if(!V.objects)return!1;let t=Ye.role==="player";if(t&&nr)return Ye.sendAction({type:"release",objectId:nr}),nr=0,!0;if(Br.held)return wm(!0),!0;if(Ur.length=0,t)Ye.forEachReplica(r=>Ur.push(r));else for(let r of St)!r.owner&&r.mesh.visible&&Ur.push(r.mesh);let i=n_(n,e,Ur);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:r})&&(nr=r)}else Qt.getWorldQuaternion(rr),Cm(St.find(r=>r.mesh===i.object),1,Br,Math.max(.75,i.distance));return!0}var Zp=[];function o_(){return Zp.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!Tn[e]||Tn[e].properties?.collidable===!1||n.userData.held)return;let t=Tn[e],i=V.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=V.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},Zp.push(r)}),Zp}function JE(){Ye.role!=="vr"||!Ye.remoteSpectator||St.some(n=>n.netType===kl)||As(kl,null,null,!0)}var Vl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Vl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Vl.onclick=async()=>{let n;Nr.unlock();try{Vl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),et.xr.setFramebufferScaleFactor(.45+V.resolution*.055),await et.xr.setSession(n),Di(),Ul=n.frameRate||72,Dl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Dl.includes(120)?120:Dl.find(t=>t>=100)??Dl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Ul=n.frameRate||Ul,am=Math.min(100,Ul),V.auto&&(rn=Math.min(rn,4),Xo=Yo=Zo=0),pm=[],cd=0,ud=0,gm=ym=sm=0,om=null,Md=!0,mm=null,Jo=NaN,mi=0,ar(),Di(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Vl.disabled=!1,document.querySelector("#status").textContent=e.message}};et.xr.addEventListener("sessionend",()=>{Vl.disabled=!1,$t=!1,fn.mesh.visible=!1,ei.mesh.visible=!1,document.body.classList.remove("immersive"),ar(),Hl()});function a_(n){if(!ot.active){for(let e of wt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ot.active){let e=-1/0,t;for(let i of wt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function Mv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),$t||!e||n.grip||!V.objects)return;let i=null,r=.15;if(Ye.forEachReplica(s=>{if(s.userData.held)return;let o=Tn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Ih(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;Ye.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}else if(ot.builtIn){let s=Mn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(Qo).distanceToSquared(n.target)<.06760000000000001);s>=0&&Ye.sendAction({type:"world",mode:2,typeId:s})}}function $E(n,e,t){let i=[...n.session.inputSources];for(let r of Ot){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&V.hands&&!V.body,!o){Ye.role==="player"&&Mv(r,!1),r.valid=!1,r.surface=null,gi(r,!1);continue}Cx(r,o.transform,mi,bt,yt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Pl.copy(r.controllerRotation),hE(r,s.gamepad?.buttons??[],t),Ye.role==="player")Mv(r,a);else if(!$t&&a&&!r.grip&&V.objects&&!r.held){let h=null,p=.15,y=Mn.coconuts.find(m=>m.visible&&m.getWorldPosition(Qo).distanceToSquared(r.target)<.26**2);y&&(h=bm(y));for(let m of St){if(m.owner||!m.grabbable||m.mesh.position.distanceToSquared(r.target)>(m.radius+.18)**2)continue;let g=Ih(r.target,m);!y&&g<p&&(p=g,h=m)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Bl.copy(Pl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Bl),h.relativeRotation.multiplyQuaternions(Bl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&gi(r,!$t),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Ad.multiplyQuaternions(Pl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Ad),jo.copy(l.offset).applyQuaternion(Pl);let h=r.supportOffset.dot(jo);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(jo),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(Qv.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Jt,bt):r.aimDirection.set(0,0,-1).applyQuaternion(Pl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&YE(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!$t&&_n("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&V.toolActive&&!$t&&_n("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if($t){let h=f&&!r.trigger;(h||!Ms||!Ms.click&&r.side!==Av)&&(Ms={source:s,click:h})}else!$t&&r.side==="right"&&V.mapEdit?dd={source:s,click:f&&!r.trigger}:!$t&&r.side==="right"&&V.toolActive?hd={source:s,hand:r,click:f&&!r.trigger}:!$t&&!V.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(Fl={source:s,click:f&&!r.trigger});r.trigger=f}}function bv(n,e){let t=n?-qo.y:Math.max(0,-Math.sin(Ss)),i=0,r=0,s=0;if(n){nv.setFromAxisAngle(Jt,-ir);for(let u of Ot)u.valid&&(Gp.copy(u.gripPosition).sub(Dt).applyQuaternion(nv),i+=Gp.x-(u.side==="left"?-.2:.2),r+=Gp.z+.24,s++)}let o=s?Fe.clamp(-r/s,-.35,.45):0,a=s?Fe.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=-.31*Fe.smoothstep(t,.2,.92)-o*.45;er.x=Fe.lerp(er.x,c,l),er.y=Fe.lerp(er.y,-a*.62,l),tv.set(er.x,ir,er.y,"YXZ"),Ii.quaternion.setFromEuler(tv)}function KE(n,e,t,i,r=i){let s=!!t,o=.43+V.size*.088;if(s){let f=t.transform.position;Number.isFinite(Jo)||(Jo=f.y),mi=Fe.clamp(Jo-o,-.65,1.7),md.position.y=-mi,Qn.set(f.x,f.y-mi,f.z);let p=[...n.session.inputSources].find(y=>y.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(ad=!1),Math.abs(p)>.67&&!ad&&!$t&&(ad=!0,vn.copy(Qn).applyAxisAngle(Jt,bt),bt-=Math.sign(p)*Math.PI/4,jx.copy(Qn).applyAxisAngle(Jt,bt),yt.position.add(vn.sub(jx)),Fr.reset(),od=!1)}else md.position.y=0,Qn.set(0,o,0),Qt.position.copy(Qn),Qt.rotation.set(Ss,0,0,"YXZ");if(Dt.copy(Qn).applyAxisAngle(Jt,bt).add(yt.position),s){let f=t.transform.orientation;ld.set(f.x,f.y,f.z,f.w),qo.set(0,0,-1).applyQuaternion(ld),qo.x**2+qo.z**2>.018&&(ir=bt+Math.atan2(-qo.x,-qo.z))}else ir=bt;let a=a_(Dt),l=9.81*(V.gravity/5)*(a?.gravity??1);Jp=l,$x.copy(yt.position);let c=Ye.role==="player"?o_():St;if(s){$E(n,e,r),bv(!0,r),Ot.some(f=>f.valid)&&ym++,ed.length=0;for(let f of or)ed.push(f);if(V.collisions&&V.objects)for(let f of c)f.handCollider&&!f.owner&&ed.push(f.handCollider);Fr.move({head:Dt,dt:i,inputDt:r,gravity:l,settings:V,boxes:ed,velocity:an,movement:Ho,reach:yd()*2+.16});for(let f of Ot)_x(f,V.stepHaptics,r)}else{bv(!1,r),an.y-=l*i;let f=Number(Pi.has("KeyD"))-Number(Pi.has("KeyA")||Pi.has("KeyQ"))+zl.movement.x,h=Number(Pi.has("KeyS"))-Number(Pi.has("KeyW")||Pi.has("KeyZ"))+zl.movement.z,p=Pi.has("ShiftLeft")||Pi.has("ShiftRight");Rr.set(f,0,h).clampLength(0,1).applyAxisAngle(Jt,bt).multiplyScalar(p?5.4:3.4);let y=1-Math.exp(-i*(a?.friction<.1?2:Ri?13:4));an.x=Fe.lerp(an.x,Rr.x,y),an.z=Fe.lerp(an.z,Rr.z,y);let g=(zl.consumeJump()||Qi.delete("Space"))&&Ri,b=vs.normal,S=!g&&Ri&&b.y>=.62&&(vs.surface?.friction??0)>=.45;g?an.y=3.1+V.jump*.18:S&&(an.y=-(an.x*b.x+an.z*b.z)/b.y),Ho.copy(an).multiplyScalar(i),S&&Ho.addScaledVector(b,-l*i*i)}if(V.collisions&&od&&(jo.copy(Dt).add(Ho),Uo(Kx,jo,iE,or,vn,$h)&&Rr.subVectors(jo,vn).dot($h)<0&&Ho.copy(vn).sub(Dt)),yt.position.add(Ho),Dt.copy(Qn).applyAxisAngle(Jt,bt).add(yt.position),Ri=!1,vs.normal.set(0,0,0),vs.surface=null,V.collisions){Kh.set(0,-1,0).applyQuaternion(Ii.quaternion),Kh.y=0,Kh.addScaledVector(uE.set(0,0,1).applyAxisAngle(Jt,ir),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,Qn.y*.57):Qn.y,{radius:p}=sd[f];if(vn.set(Dt.x,yt.position.y+h,Dt.z),f<2&&vn.addScaledVector(Kh,Math.max(0,Qn.y-h)),Jx.copy(vn),Ri=bp(vn,p,wt.boxes,an,0,3+V.grip,i,f===0?vs:null)||Ri,V.objects)for(let y of c)y.blocksPlayer&&!y.owner&&Vy(vn,p,y,an,$h)&&$h.y>.6&&(Ri=!0);bp(vn,p,wt.boxes,an,0,3+V.grip,i),Rr.subVectors(vn,Jx),yt.position.add(Rr),Dt.add(Rr);for(let y=0;y<f;y++)sd[y].position.add(Rr);sd[f].position.copy(vn)}}if(Ir.subVectors(yt.position,$x),Nr.update({dt:r,inVR:s,hands:Ot,grounded:Ri,travel:Math.hypot(Ir.x,Ir.z),volume:V.stepVolume,enabled:V.stepAudio}),s){let f=Fr.finish(Ir,an);f.contacts&&gm++,f.launched&&(sm++,om={handSpeed:f.launchSpeed,velocity:an.toArray(),t:performance.now()})}(ot.active?yt.position.y<-24||Math.abs(yt.position.x)>155||Math.abs(yt.position.z)>155:yt.position.y<-9||Math.abs(yt.position.x)>33||yt.position.z<-57||yt.position.z>13)&&(ar(),Dt.copy(Qn).applyAxisAngle(Jt,bt).add(yt.position)),Kx.copy(Dt),od=!0,yt.rotation.y=bt,s&&Qt.position.set(0,0,0);for(let f of Ot)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Ir,f.surface?0:1),f.gripPosition.add(Ir)),s||(f.mesh.visible=!1);let u=.72+V.size*.05,d=yd()*2*(2/3)/.82;Ii.visible=V.body,tr.position.copy(Dt),s?tr.quaternion.copy(ld).premultiply(sr.setFromAxisAngle(Jt,bt)):tr.quaternion.setFromEuler(new nn(Ss,bt,0,"YXZ")),jp.set(0,-.145,.045).applyQuaternion(tr.quaternion).add(Dt),Ii.position.set(0,.46*d,.04*u).applyQuaternion(Ii.quaternion).negate().add(jp),dE(u,d),yt.updateMatrixWorld(!0),Qt.updateWorldMatrix(!0,!1)}function QE(n,e){if(Qh+=n,kp++,Xo+=n,Qh<1||(_s=Math.round(kp/Qh),kp=0,Qh=0,Kt=!0,CE.textContent=_s+" FPS \xB7 qualit\xE9 "+rn+"/10 \xB7 "+(V.auto?"auto":"manuel"),!V.auto||Xo<5))return;Xo=0;let t=e?Math.min(100,et.xr.getSession()?.frameRate||Ul):60;e&&(am=t),Yo=_s<t-4?Yo+1:0,Zo=_s>=t-1?Zo+1:0;let i=Fe.clamp(rn+(Yo>=1?-1:Zo>=2?1:0),1,10);i!==rn&&(rn=i,Xo=Yo=Zo=0,Di())}wt.bakeLightmap();var l_={value:1},c_={value:1},u_={value:0},Pm={value:0},Sv=new WeakSet;function ta(n){if(Array.isArray(n)){for(let i of n)ta(i);return}if(!n||Sv.has(n))return;Sv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:l_,uPhotoSaturation:c_,uPhotoWarmth:u_,uLabShader:Pm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of wt.materials)ta(n);Et.traverse(n=>{n.isMesh&&![fn.mesh,ei.mesh,Ts].includes(n)&&ta(n.material)});Di();var wv=new URLSearchParams(location.search);if(wv.has("map"))ot.loadURL(wv.get("map"));else try{let n=localStorage.getItem(Al);n&&ot.load(n)}catch(n){ot.inform(n.message)}function e2(){let n=et.xr.isPresenting;return{head:tr.quaternion,hands:n?Ot.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,$o.mode?kE:null],height:Qn.y,armSpan:yd()*2,light:V.timeOfDay-1,color:Ev,coconuts:Mn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:$o.mode?$o:null,gun:Cd.gun}}et.setAnimationLoop((n,e)=>{let t=Vp?Math.max(0,(n-Vp)/1e3):.014;Vp=n;let i=Math.max(1e-4,Math.min(.035,t)),r=Ye.role?1:vm[V.debugSpeed-1],s=i*r,o=et.xr.isPresenting,a=et.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(gE(n*.001),pd&&n>pd&&(im.hidden=!0,pd=0,Rm=""),Ts.visible=!1,Sm.hide(),$o.mode=0,or=V.collisions?wt.boxes:rE,Ms=null,Fl=null,hd=null,dd=null,ot.clearGhost(),fn.mesh.visible=!1,!o&&Ye.role==="pc"){Ii.visible=!1;for(let m of Ot)m.mesh.visible=!1}else KE(e,a,l,s,i);let c=!o&&Ye.role==="pc",u=c||Ye.role==="player";if(Ye.role!=="player"){nr=0;for(let m of Ot)m.remoteHeld=0}u||(HE(s),JE());for(let m of St){m.mesh.visible=V.objects&&!u;let{x:g,y:b,z:S}=m.mesh.position;if((ot.active?b<-24||Math.abs(g)>155||Math.abs(S)>155:b<-8||Math.abs(g)>28||S<-57||S>13)&&(m.owner||(m.mesh.position.copy(m.start),m.velocity.set(0,0,0),m.angular.set(0,0,0))),m.shadow.visible=!u&&V.shadows&&vd()<3&&V.objects&&m.mesh.position.y<2,m.shadow.visible){let{x:C,z:A}=m.mesh.position,L=wt.boxes.find(w=>w.heightfield&&C>=w.xMin&&C<=w.xMax&&A>=w.zMin&&A<=w.zMax),U=L?L.height(C,A):0;m.shadow.position.set(C,U+.006,A)}}if(!u&&V.objects){for(let m of St)m.beforePhysics.copy(m.mesh.position);Oy(St,wt.boxes,s,9.81*V.gravity/5,.12+V.bounce*.064,a_),ot.builtIn&&Mn.updateTarget(St,_E())}if(o&&!$t&&Ye.role!=="pc")for(let m of Ot)zE(m);if(wt.probe.rotation.y+=s*.29,QE(Math.min(.3,t),o),fn.mesh.visible=o&&$t,fn.mesh.visible&&Kt&&vv(),fn.mesh.visible&&Ms)ZE(e,a,Ms.source,Ms.click);else if(o&&dd)OE(e,a,dd);else if(o&&hd)qE(e,a,hd);else if(o&&Fl)XE(e,a,Fl.source,Fl.click);else if(!o&&!c){Qt.getWorldPosition(qn),Qt.getWorldDirection(Fn),Qi.delete("KeyX")&&_n("blasterActive",1),Qi.delete("KeyG")&&(_n("toolActive",1),V.toolActive&&pi("Outil \xB7 "+xs[V.toolMode-1])),Qi.delete("KeyT")&&_n("toolMode",1);let m=Qi.delete("KeyE");V.toolActive?i_(qn,Fn,m,null):m&&!jE(qn,Fn)?tm(qn,Fn,!0):!m&&!u&&tm(qn,Fn,!1),Qi.delete("KeyF")&&(V.objects=!0,Em(Uv[0]))}let d=ei.mesh.visible;if(ei.mesh.visible=o&&!$t&&Ot[0].valid,ei.mesh.visible&&(ei.mesh.position.copy(Ot[0].mesh.position).y+=.12,ei.mesh.lookAt(Dt)),(Kt||n-Qx>1100||ei.mesh.visible&&!d)&&(Kt=!1,Qx=n,$t&&vv(),ei.mesh.visible)){let m=ei.ctx;m.clearRect(0,0,416,84),m.fillStyle="#182632",m.fillRect(0,0,416,84),m.fillStyle="#fff0cf",m.font="bold 25px system-ui",m.fillText(_s+" FPS     Q "+rn+"/10",17,32),m.font="20px system-ui",m.fillText(V.mapEdit?"\xC9dition : "+Kv[V.mapMode-1]:V.blasterActive?"Pistolet : maintenir la g\xE2chette":V.toolActive?"Tool Gun : "+xs[V.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ei.texture.needsUpdate=!0}Cd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:bt,drop:mi,rightHand:Ot[1],enabled:V.blasterActive&&!c&&!$t&&!V.mapEdit,flatFiring:r_.held||Pi.has("KeyJ")}),Ye.update({inVR:o,time:n,dt:i,position:Dt,yaw:c?bt:ir,pitch:Ss,camera:Qt,rig:yt,keys:Pi,actions:Qi,flat:zl,avatar:e2,bodies:V.objects?St:sv,score:Mn.score()}),Qi.clear(),nE.update({settings:V,boxes:or,bodies:u?V.debugHitboxes?o_():sv:St,hands:Ot,locomotion:Fr,velocity:an,head:Dt,neck:jp,body:Ii.position,proxies:sd,gravity:Jp,appliedMove:Ir,playerActive:!c,inVR:o}),!c&&(o||!Md)&&n-ud>350&&(Rv={simulationScale:r,gravity:Jp,velocity:an.toArray(),grounded:Ri,torsoDegrees:[er.x,er.y].map(Fe.radToDeg),hands:o?Fr.hands.map(({hand:m,normal:g,offset:b})=>m.valid?{side:m.side,gripPosition:m.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Zi).applyQuaternion(m.mesh.quaternion).add(m.target).add(Ir).distanceTo(m.gripPosition),palmCenter:vn.copy(Zi).applyQuaternion(m.mesh.quaternion).add(m.mesh.position).toArray(),contactCenter:vn.copy(m.mesh.position).add(b).toArray(),normal:m.surface?g.toArray():null,surface:m.surface?.name??m.surface?.objectBody?.spec?.name??null}:null):[]}),wE(u),wt.centerShadows(Sd);let f=25+(10-vd())*(o?7:4);et.shadowMap.enabled&&n-Zx>=f&&(et.shadowMap.needsUpdate=!0,Zx=n),LE(n,l);let h=o&&V.post,p=o&&V.rayTrace;eE(p,St);let y=V.vrFov/100;if(!h||!QA.render(Et,Qt,{bloom:V.bloom,visibleField:y})){rd.material.uniforms.visibleField.value=y,rd.visible=o&&y<1;try{et.render(Et,Qt)}finally{rd.visible=!1}}if((o||!Md)&&(pm[cd]=t*1e3,cd=(cd+1)%720,n-ud>350)){ud=n;let{calls:m,triangles:g,lines:b,points:S}=et.info.render;Vv={calls:m,triangles:g,lines:b,points:S,textures:et.info.memory.textures},o&&(mm={refreshHz:et.xr.getSession()?.frameRate??null,targetFps:am,supportedHz:Dl.slice(),foveation:et.xr.getFoveation()??null,visualEffects:{post:h,bloom:h&&V.bloom,rayTrace:p},eyeViewports:et.xr.getCamera().cameras.map(v=>({width:v.viewport?.z??null,height:v.viewport?.w??null}))})}});})();
